<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemoUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memo_users', function (Blueprint $table) {
            $table->biginteger('memo_id')->unsigned();    //students,subjectsテーブルのidが
            $table->biginteger('user_id')->unsigned();    //bigIncrementであった場合はbigIntegerにする
            $table->primary(['memo_id', 'user_id']);    
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('memo_users');
    }
}
