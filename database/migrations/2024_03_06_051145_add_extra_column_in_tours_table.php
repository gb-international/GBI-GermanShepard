<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Doctrine\DBAL\Types\FloatType;
use Doctrine\DBAL\Types\Type;

class AddExtraColumnInToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Type::hasType('double')) {
            Type::addType('double', FloatType::class);
        }
        Schema::table('tours', function (Blueprint $table) {
            $table->double('tour_price', 10, 0)->default(0)->change();
            $table->string('tour_type')->default("National")->after('status');
            $table->double('gst_fee')->default(0)->after('tour_type');
            $table->double('tcs_fee')->default(0)->after('gst_fee');
            $table->unsignedInteger('itinerary_id')->nullable()->change();
            $table->softDeletes();
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
        Schema::table('tours', function (Blueprint $table) {
            Schema::dropColumn('tour_price');
            Schema::dropColumn('tour_type');
            Schema::dropColumn('gst_fee');
            Schema::dropColumn('tcs_fee');
            Schema::dropColumn('itinerary_id');
            Schema::dropColumn('deleted_at');
        });
    }
}