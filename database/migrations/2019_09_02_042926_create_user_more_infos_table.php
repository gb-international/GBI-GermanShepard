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
            $table->string('name');
            $table->string('email',100)->unique();
            $table->string('password');
            $table->string('gbi_link')->nullable();
            $table->string('client_type')->nullable();
            $table->string('client_input')->nullable();
            $table->string('phone_no');
            $table->string('otp');
            $table->string('father_name')->nullable();
            $table->string('mother_name')->nullable();
            $table->string('dob')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('user_class')->nullable();
            $table->string('admission_year')->nullable();
            $table->string('varified')->default('1');
            $table->string('photo')->nullable();
            $table->string('gender')->nullable();
            $table->string('reset_link')->nullable();
            $table->string('link_time')->nullable();
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
