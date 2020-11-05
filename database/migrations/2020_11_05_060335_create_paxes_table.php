<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaxesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('paxes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('tour_code')->nullable();
            $table->integer('total_male')->nullable();
            $table->integer('total_female')->nullable();
            $table->integer('absent_male')->nullable();
            $table->integer('absent_female')->nullable();
            $table->text('message')->nullable();
            $table->string('escort_id')->nullable();
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
        Schema::dropIfExists('paxes');
    }
}
