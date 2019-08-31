<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalesdpsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salesdps', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string("phoneno");
            $table->string('email');
            $table->string('salary');
            $table->text('address');
            $table->string('position');
            $table->string('location');
            $table->enum('status', ['0', '1']);
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
        Schema::dropIfExists('salesdps');
    }
}
