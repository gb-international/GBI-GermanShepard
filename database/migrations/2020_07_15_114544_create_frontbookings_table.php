<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFrontbookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('frontbookings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('start_date')->nullable();
            $table->string('end_date')->nullable();
            $table->string('persion')->nullable();
            $table->string('room')->nullable();
            $table->string('occupancy_type')->nullable();
            $table->string('noofday')->nullable();
            $table->string('accomodation')->nullable();
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
        Schema::dropIfExists('frontbookings');
    }
}
