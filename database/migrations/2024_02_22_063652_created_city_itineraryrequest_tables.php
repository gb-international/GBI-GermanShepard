<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedCityItineraryrequestTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('city_itineraryrequest', function (Blueprint $table) {
            $table->bigInteger('itineraryrequest_id')->unsigned();
            $table->Integer('city_id')->unsigned();
            $table->foreign('itineraryrequest_id')->references('id')->on('itineraryrequests')->onDelete('cascade');
            $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('city_itineraryrequest');
    }
}
