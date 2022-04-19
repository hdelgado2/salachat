<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{path?}', [
    'uses' => 'App\Http\Controllers\UserController@index',
    'as' => 'react',
    'where' => ['path' => '.*']
]);

Route::get('/{path?}',function ()
{   
    return view('welcome');
})->where('path','.*');

Route::resource('user', UserController::class);
