<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserMoreInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_more_infos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_id');
            $table->string('gbi_link');
            $table->string('phone_no');
            $table->string('otp');
            $table->string('varified')->default('1');
            $table->string('photo')->nullable();
            $table->string('gender')->nullable();
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
        Schema::dropIfExists('user_more_infos');
    }
}
