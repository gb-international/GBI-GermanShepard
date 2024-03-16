<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedMoreColumnsInBanquetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('banquets', function (Blueprint $table) {
            $table->double('latitude')->default(0)->after('status');
            $table->double('longitude')->default(0)->after('latitude');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('banquets', function (Blueprint $table) {
            Schema::dropColumn('latitude');
            Schema::dropColumn('longitude');
        });
    }
}
