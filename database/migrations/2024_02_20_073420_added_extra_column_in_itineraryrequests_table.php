<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInItineraryrequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('itineraryrequests', function (Blueprint $table) {
            $table->unsignedInteger('edu_institute_id')->nullable()->after('email');
            $table->unsignedInteger('company_user_id')->nullable()->after('edu_institute_id');
            $table->unsignedInteger('family_user_id')->nullable()->after('company_user_id');
            $table->unsignedInteger('itinerary_id')->nullable()->after('family_user_id');
            $table->string('client_type')->default("school")->comment("school, company, family");
            $table->dateTime('start_date')->nullable();
            $table->dateTime('end_date')->nullable();
            $table->Integer('no_of_boys')->default(0);
            $table->Integer('no_of_girls')->default(0);
            $table->Integer('passenger')->default(0);
            $table->tinyInteger('passenger_below_eighteen')->default(0)->comment("0=>No, 1=>Yes");
            $table->double('price')->default(0);
            $table->string('occupancy_type')->default("triple")->comment("single, double, triple, quad");
            $table->string('meal_plan')->default("ep")->comment("ep, cp, map, ap");
            $table->Integer('no_of_days')->default(0);
            $table->Integer('no_of_rooms')->default(0);
            $table->double('accommodation_preference')->default(0);
            $table->text('passenger_details')->nullable();
            $table->text('mode_of_transport')->nullable();
            $table->softDeletes();
            $table->foreign('edu_institute_id')->references('id')->on('edu_institutes')->onDelete('cascade');
            $table->foreign('company_user_id')->references('id')->on('company_users')->onDelete('cascade');
            $table->foreign('family_user_id')->references('id')->on('family_users')->onDelete('cascade');
            $table->foreign('itinerary_id')->references('id')->on('itineraries')->onDelete('cascade');
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('itineraryrequests', function (Blueprint $table) {
            Schema::dropColumn('edu_institute_id');
            Schema::dropColumn('company_user_id'); 
            Schema::dropColumn('family_user_id'); 
            Schema::dropColumn('itinerary_id'); 
            Schema::dropColumn('client_type'); 
            Schema::dropColumn('start_date'); 
            Schema::dropColumn('end_date'); 
            Schema::dropColumn('no_of_boys'); 
            Schema::dropColumn('no_of_girls'); 
            Schema::dropColumn('passenger'); 
            Schema::dropColumn('passenger_below_eighteen'); 
            Schema::dropColumn('price'); 
            Schema::dropColumn('occupancy_type'); 
            Schema::dropColumn('meal_plan'); 
            Schema::dropColumn('no_of_days'); 
            Schema::dropColumn('no_of_rooms'); 
            Schema::dropColumn('passenger_below_eighteen'); 
            Schema::dropColumn('price'); 
            Schema::dropColumn('occupancy_type'); 
            Schema::dropColumn('accommodation_preference'); 
            Schema::dropColumn('passenger_details'); 
            Schema::dropColumn('mode_of_transport'); 
            Schema::dropColumn('deleted_at'); 
        });
    }
}
