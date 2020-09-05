<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTourpaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tourpayments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('userpayment_id');
            $table->string('payment_mode');
            $table->string('total-tour_price');
            $table->string('collect_amount');
            $table->string('payment_status');
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
        Schema::dropIfExists('tourpayments');
    }
}
