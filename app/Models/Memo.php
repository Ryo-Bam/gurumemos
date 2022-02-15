<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Memo extends Model
{
    use HasFactory;

    protected $table = "memo";

    protected $fillable = [
        'title',
        'entet_time',
        'mymemo',
        'allvalue',
        'service',
        'price',
        'image',
        'store_id'
    ];

    public function store()
    {
    return $this->belongsTo('App\Models\Store');
    }

    public function user()
    {
        return $this->belongsToMany('App\Models\User');
    }
}