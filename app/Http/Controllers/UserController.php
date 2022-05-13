<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Log;
class UserController extends Controller
{
    use AuthenticatesUsers;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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

    public function login(Request $request)
    {
         $user = User::where('email',$request->email)
                 ->where('password',md5($request->password))
                 ->select('email','password')->first();                
                 
                if($user !== null){
                    
                  $credentials = $request->collect()->flatten(1);
                  $attemp = [
                      'email' => $credentials[0],
                      'password' => $credentials[1]
                  ];
                    
                   $token = Auth::attempt($request->only('email','password'));
                 
                    dd($token);
                }
                
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        try {
            \DB::beginTransaction();
     
            if(strcmp($request->pass,$request->rptPass) !== 0){
                return response()->json([
                    'ok' => 422,
                    'message' => 'La contraseña no coinciden'
                ]);
            }
     
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => md5($request->pass),
               ]);
            
           \DB::commit();
        } catch (\Exception $th) {
            \DB::rollback();

            return response()->json([
                'ok' => $th->getMessage()
            ]);
        }
            
        return response() ->json([
            'ok' => 200,
            'route' => '/',
            
        ]);
           
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
