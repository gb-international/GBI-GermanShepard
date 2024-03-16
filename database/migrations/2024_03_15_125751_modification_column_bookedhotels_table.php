<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModificationColumnBookedhotelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bookedhotels', function (Blueprint $table) {
            $table->unsignedInteger('tour_id')->nullable()->change();
            $table->unsignedInteger('hotel_id')->nullable()->change();
            $table->foreign('tour_id')->references('id')->on('tours')->onDelete('cascade');
            $table->foreign('hotel_id')->references('id')->on('hotels')->onDelete('cascade');
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bookedhotels', function (Blueprint $table) {
        
        
    });
}
}
