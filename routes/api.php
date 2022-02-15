<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResource('memo', 'MemoController');

// Route::group(['middleware' => 'api'], function(){
//     Route::get('memo', 'App\Http\Controllers\Api\MemoController@index');
//     Route::post('memo/create', 'App\Http\Controllers\Api\MemoController@create');
// });



// Route::get('question/category', 'QuestionCategoryController@index');
// // Route::get('question/', 'QuestionCategoryController@index');
// Route::post('store', 'StoreController@create');
// Route::get('store/{store}', 'StoreController@show');
// Route::get('user/{users}', 'UserController@show');
// Route::get('questions/res/{question}', 'QuestionController@show');
// Route::get('store/ques/{stores}', 'StoreController@showques');
// Route::post('responce', 'ResponceController@store');
// Route::get('responce/index', 'ResponceController@index');
// Route::post('question', 'QuestionController@store');
// // Route::post('question', 'QuestionController@store');





// Route::group(['middleware' => 'api'], function(){
//     Route::get('users', 'Api\UserController@user');
//     // Route::get('memo', 'Api\MemoController@index');
//     // Route::post('memo/create', 'Api\MemoController@create');
// });