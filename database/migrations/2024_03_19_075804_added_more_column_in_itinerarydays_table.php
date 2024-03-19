<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedMoreColumnInItinerarydaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('itinerarydays', function (Blueprint $table) {
            $table->double('source_latitude')->default(0)->after('status');
            $table->double('source_longitude')->default(0)->after('source_latitude');
            $table->double('destination_latitude')->default(0)->after('source_longitude');
            $table->double('destination_longitude')->default(0)->after('destination_latitude');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('itinerarydays', function (Blueprint $table) {
            Schema::dropColumn('source_latitude');
            Schema::dropColumn('source_longitude');  
            Schema::dropColumn('destination_latitude');  
            Schema::dropColumn('destination_longitude');  
        });
    }
}
