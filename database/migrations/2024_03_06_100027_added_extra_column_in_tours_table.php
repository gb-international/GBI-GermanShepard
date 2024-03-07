<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tours', function (Blueprint $table) {
            $table->double('pg_convenience_and_internet_fee')->default(0)->after('tcs_fee');
            $table->double('meal_plan_price')->default(0)->after('pg_convenience_and_internet_fee');
            $table->string('meal_plan_type')->default('ep')->after('meal_plan_price');
            $table->string('room_sharing')->default('quad')->after('meal_plan_type');
            $table->integer('no_of_adults')->default(0)->after('room_sharing');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tours', function (Blueprint $table) {
            Schema::dropColumn('pg_convenience_and_internet_fee');
            Schema::dropColumn('meal_plan_price');
            Schema::dropColumn('meal_plan_type');
            Schema::dropColumn('room_sharing');
            Schema::dropColumn('no_of_adults');
        });
    }
}
