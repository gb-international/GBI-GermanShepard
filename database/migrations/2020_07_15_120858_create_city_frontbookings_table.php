<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCityFrontbookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('city_frontbookings', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('frontbooing_id')->unsigned();
            $table->foreign('frontbooing_id')->references('id')->on('frontbookings')->onDelete('cascade');

            $table->integer('city_id')->unsigned();
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
        Schema::dropIfExists('city_frontbookings');
    }
}
