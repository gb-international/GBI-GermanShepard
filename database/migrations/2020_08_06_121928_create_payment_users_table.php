<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('user_id');
            $table->string('school_id');
            $table->string('tour_id')->nullable();
            $table->string('bank_id')->nullable();
            $table->string('payment_mode');
            $table->string('payment_type');
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
        Schema::dropIfExists('payment_users');
    }
}
