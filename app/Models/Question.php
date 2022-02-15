<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'store_id',
        'user_id',
        'question_category_id',
        'question',
    ];

    // public function store(Request $request, Student $question)
    // {
    // $input_question = $request['question'];
    // $input_subjects = $request->subjects_array;  //subjects_arrayはnameで設定した配列名
    
    // //先にquestionsテーブルにデータを保存
    // $question->fill($input_question)->save();
    
    // //attachメソッドを使って中間テーブルにデータを保存
    // $question->subjects()->attach($input_subjects); 
    // return redirect('/questions');
    // }

    public function store()
    {
    return $this->belongsTo('App\Models\Store');
    }

    public function responces()   
    {
    return $this->hasMany('App\Models\Responce');  
    }

    public function user()
{
    return $this->belongsTo('App\Models\User');
}

    // public function user()
    // {
    //     return $this->belongsToMany('App\Models\User');
    // }
}
