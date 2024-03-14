<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->increments('id');
            $table->text('name')->nullable();
            $table->unsignedInteger('room_category_id')->nullable();
            $table->unsignedBigInteger('traveller_policy_id')->nullable()->after('name');
            $table->text('description')->nullable();
            $table->string('meal_plan_type')->nullable();
            $table->Integer('maximum_occupancy')->default(0);            
            $table->double('inches')->default(0);            
            $table->double('length')->default(0);            
            $table->double('width')->default(0);            
            $table->double('height')->default(0);   
            $table->unsignedInteger('publish_by')->nullable();         
            $table->string('currency_type')->default(0); 
            $table->tinyInteger('status')->default(0)->comment("0=>draft, 1=>published");           
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
            $table->foreign('traveller_policy_id')->references('id')->on('traveller_policys')->onDelete('cascade');
            $table->foreign('room_category_id')->references('id')->on('room_categories')->onDelete('cascade');
            $table->foreign('publish_by')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rooms'); 
    }
}
