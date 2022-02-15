<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;
// use App\Models\Store;

class QuestionController extends Controller
{

    public function index()
    {
        return Question::orderByDesc('id')->get();
        // return Memo::orderByDesc('id')->store->find(26)->get();
        // Memo::whereHas('store', function($query){$query->where('id', 26);})->get();
    }


    // public function showUser($uestion_id)
    // {
    //     // dd($store->with('memos'));
    //     return User::where('id', $uestion_id)->with('user', 'questions.user')->first();
    // }

    public function show($question_id)
    {
        // dd($store->with('memos'));
        return Question::where('id', $question_id)->with('responces')->first();
    }

    public function store(Request $request)
    {
        $input = $request->input();
        $input['user_id'] = auth()->user()->id;
        Question::create($input);
    }
}
