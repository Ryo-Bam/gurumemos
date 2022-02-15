<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Responce;
use App\Models\Question;

class ResponceController extends Controller
{
    public function index()
    {
        return Responce::all();
    }
    public function store(Request $request)
    {
        $input = $request->input();
        $input['user_id'] = auth()->user()->id;
        
        Responce::create($input);
    }
}
