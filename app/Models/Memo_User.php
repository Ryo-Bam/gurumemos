<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Memo_User extends Model
{
    use HasFactory;

    protected $table = "memo_user";

    protected $fillable = [
        'user_id',
        'memo_id'
    ];
}
