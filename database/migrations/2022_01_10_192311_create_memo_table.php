<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memo', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('enter_time');
            $table->string('mymemo');
            // $table->string('review');
            // $table->string('service');
            // $table->string('price');
            // $table->string('hash');
            // $table->string('store_id');
            $table->integer('store_id')->unsigned();
            $table->timestamps();
        });
    }
    

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('memo');
    }
}
