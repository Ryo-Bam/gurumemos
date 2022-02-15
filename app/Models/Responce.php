<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Responce extends Model
{
    use HasFactory;

    protected $fillable = [
        'question_id',
        'user_id',
        'responce',
    ];

    public function question()
    {
    return $this->belongsTo('App\Models\question');
    }
}
