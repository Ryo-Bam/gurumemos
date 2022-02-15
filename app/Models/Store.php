<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    protected $table = "store";

    protected $fillable = [
        'lat',
        'lng',
        'name',
    ];


    public function memos()   
    {
    return $this->hasMany('App\Models\Memo');  
    }

    public function store()
    {
    return $this->belongsTo('App\Models\Store');
    }

    public function questions()   
    {
    return $this->hasMany('App\Models\Question');  
    }
    
    // public function getByCategory(int $limit_count = 5)
    // {
    // return $this->posts()->with('store')->orderBy('updated_at', 'DESC')->paginate($limit_count);
    // }
    // public function getByStore()
    // {
    // return $this->memo()->with('store')->orderBy('updated_at', 'DESC');
    // }

}
