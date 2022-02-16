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
            $table->string('title', 191);
            $table->string('enter_time', 255);
            $table->string('mymemo', 191);
            $table->string('allvalue', 5);
            $table->string('service', 5);
            $table->string('price', 5);
            $table->string('image', 191);
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
