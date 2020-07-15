<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFrontbookingSightseeingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('frontbooking_sightseeings', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('frontbooing_id')->unsigned();
            $table->foreign('frontbooing_id')->references('id')->on('frontbookings')->onDelete('cascade');

            $table->integer('sightseeing_id')->unsigned();

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
        Schema::dropIfExists('frontbooking_sightseeings');
    }
}
