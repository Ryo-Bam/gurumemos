<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function user()
    {
        $user = User::all();
        return response()->json($user, 200);
    }

    // public function show($user_id)
    // {
    //     // dd($store->with('memos'));
    //     return User::where('id', $user_id)->with('questions', 'questions.user')->first();
    // }

    public function store(Request $request, Student $user)
    {
    $input_user = $request['user'];
    $input_memo = $request->memo_array; 
    
    $user->fill($input_user)->save();
    
    $user->memo()->attach($input_memo); 
    return redirect('/user');
    }
}
