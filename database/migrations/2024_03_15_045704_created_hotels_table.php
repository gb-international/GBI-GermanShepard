<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedHotelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedBigInteger('traveller_policy_id')->nullable();
            $table->string('name')->nullable();
            $table->text('description')->nullable();
            $table->Integer('no_of_rooms')->default(0);            
            $table->double('star_category')->default(0);            
            $table->double('price')->default(0);            
            $table->string('hotel_type')->nullable();
            $table->string('email')->nullable();
            $table->string('phone_number')->nullable();
            $table->Integer('no_of_banquet')->default(2);            
            $table->text('hotel_policies_description')->nullable();
            $table->text('safety_hygiene_description')->nullable();
            $table->text('address')->nullable();
            $table->unsignedInteger('city_id')->nullable();
            $table->unsignedInteger('state_id')->nullable();
            $table->unsignedBigInteger('country_id')->nullable();
            $table->string('pincode')->nullable();
            $table->text('location')->nullable();
            $table->tinyInteger('status')->default(0)->comment("0=>draft, 1=>published");
            $table->string('banner_image')->nullable();
            $table->string('banner_alt')->nullable();
            $table->unsignedInteger('publish_by')->nullable();
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->softDeletes();
            $table->foreign('traveller_policy_id')->references('id')->on('traveller_policys')->onDelete('cascade');
            $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade');
            $table->foreign('state_id')->references('id')->on('states')->onDelete('cascade');
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade');
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
        Schema::dropIfExists('hotels');
    }
}
