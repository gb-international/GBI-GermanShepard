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
            $table->string('schoolbankdetail_id')->nullable();
            $table->string('payment_mode')->nullable();
            $table->string('payment_type')->nullable();
            $table->string('ifsc_code')->nullable();
            $table->string('cheque_number')->nullable();
            $table->string('amount')->nullable();
            $table->string('cheque_bank_name')->nullable();
            $table->string('date_of_issue')->nullable();
            $table->string('status')->nullable();
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
