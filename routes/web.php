<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';



Route::group(['middleware' => 'api'], function(){
    Route::get('users', 'Api\UserController@user');
    // Route::get('memo', 'Api\MemoController@index');
    // Route::post('memo/create', 'Api\MemoController@create');
});


Route::get('api/question/category', 'QuestionCategoryController@index');
// Route::get('question/', 'QuestionCategoryController@index');
Route::post('api/store', 'StoreController@create');
Route::get('api/store/{store}', 'StoreController@show');
Route::get('api/user/{users}', 'UserController@show');
Route::get('apiquestions/res/{question}', 'QuestionController@show');
Route::get('api/store/ques/{stores}', 'StoreController@showques');
Route::post('api/responce', 'ResponceController@store');
Route::get('api/responce/index', 'ResponceController@index');
Route::post('api/question', 'QuestionController@store');


Route::get('/{any}', function(){
    return view('layouts/app');
})->where('any', '.*'); 