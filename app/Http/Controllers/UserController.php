<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use \JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Log;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api',['except'=>['authenticate','register']]);
    }

    public function authenticate(Request $request)
    { 
     
      try {

        $user = User::where('email',$request->name)->where('password',md5($request->get('password')))->first();
        
        if ( !$token = auth()->login($user)) {
              return response()->json(['error' => 'no autorizado'], 400);
          }
      } catch (JWTException $e) {
          return response()->json(['error' => 'could_not_create_token'], 500);
      }
      return response()->json(compact('token'));
    }

    public function getAuthenticatedUser()
    {
        try {
          if (!$user = JWTAuth::parseToken()->authenticate()) {
                  return response()->json(['user_not_found'], 404);
          }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
                return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
                return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
                return response()->json(['token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));
    }


    public function register(Request $request)
    {
    
        Log::info($request);
        // $validator = Validator::make($request->all(), [
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|string|email|max:255|unique:users',
        //     'password' => 'required|string|min:6|confirmed',
        // ]);

        // if($validator->fails()){
        //         return response()->json($validator->errors()->toJson(),400);
        // }
        
        if(strcmp($request->pass,$request->rptPass) !== 0){
            return response()->json(["error" => "las Contraseña no coinciden"]);
        }

        
        
         User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => md5($request->get('pass')),
        ]);

        
        $to = '/';
        $message = "se ha Registrado con Exito";
        return response()->json(compact('to','message'),201);
    }
}