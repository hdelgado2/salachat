<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $validator = \Validator::make($request->Form,[
            'name' => 'required',
            'email' => 'required',
            'pass' => 'required',
            "rptPass" => 'required'
        ]);

        if($validator->fails()){
            return response()->json([
                'error' => $validator->errors(),
                'ok' => 422
            ]);
        }
        
        
        
            User::create([
                'name' => $request->Form['name'],
                'email' => $request->Form['email'],
                'password' => md5($request->Form['pass']),
               ]);
        
        return response() ->json([
            'ok' => 200,
            'route' => '/'
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
