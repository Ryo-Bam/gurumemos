<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Memo;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Store;

class MemoController extends Controller
{
    public function index()
    {
        return Memo::orderByDesc('id')->get();
    }

    public function store(Request $request)
    {

        $memo = new Memo;
        $image = $request->file('image');
        // バケットの`myprefix`フォルダへアップロード
        $path = Storage::disk('s3')->putFile('gurumemo_pic', $image, 'public');
        // アップロードした画像のフルパスを取得
        $memo->image = Storage::disk('s3')->url($path);

        $memo->title = $request->title;
        $memo->enter_time = $request->enter_time;
        $memo->mymemo = $request->mymemo;
        $memo->allvalue = $request->allvalue;
        $memo->service = $request->service;
        $memo->price = $request->price;
        // $memo->image = $request->image;
        // $memo->image = $request->image;
        // $image = $request->file('image');
        // // バケットの`myprefix`フォルダへアップロード
        // $path = Storage::disk('s3')->putFile('myprefix', $image, 'public');
        // // アップロードした画像のフルパスを取得
        // $memo->image_path = Storage::disk('s3')->url($path);
        $memo->store_id = $request->store_id;
        $memo->save();
        return response()->json($memo, 200);
    }

    public function posts(Store $store)
    {
    return view('memo/posts')->with(['store' => $store->get()]);;
    }


}
