<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddExtraColumnsItinerariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('itineraries', function (Blueprint $table) {
            $table->unsignedBigInteger('traveller_policy_id')->nullable()->after('status');
            $table->double('single_sharing_base_price')->default(0)->after("traveller_policy_id"); 
            $table->Integer('no_of_nights')->default(0)->after("single_sharing_base_price");
            $table->double('tcs_fee')->default(0)->after("no_of_nights");
            $table->double('gst_fee')->default(0)->after("tcs_fee");
            
            $table->double('double_sharing_base_price')->default(0)->after("gst_fee");
            
            $table->double('triple_sharing_base_price')->default(0)->after("double_sharing_base_price");
            
            $table->double('quad_sharing_base_price')->default(0)->after("triple_sharing_base_price");
            
            $table->softDeletes();
            $table->foreign('traveller_policy_id')->references('id')->on('traveller_policys')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('traveller_policy_id');

        Schema::dropIfExists('single_sharing_base_price');
        Schema::dropIfExists('single_sharing_tcs_fee');
        Schema::dropIfExists('single_sharing_gst_fee');
        Schema::dropIfExists('single_pg_internet_fee');
        Schema::dropIfExists('no_of_nights');

        Schema::dropIfExists('double_sharing_base_price');
        Schema::dropIfExists('double_sharing_tcs_fee');
        Schema::dropIfExists('double_sharing_gst_fee');
        Schema::dropIfExists('double_pg_internet_fee');

        Schema::dropIfExists('triple_sharing_base_price');
        Schema::dropIfExists('triple_sharing_tcs_fee');
        Schema::dropIfExists('triple_sharing_gst_fee');
        Schema::dropIfExists('triple_pg_internet_fee');

        Schema::dropIfExists('quad_sharing_base_price');
        Schema::dropIfExists('quad_sharing_tcs_fee');
        Schema::dropIfExists('quad_sharing_gst_fee');
        Schema::dropIfExists('quad_pg_internet_fee');
        Schema::dropIfExists('deleted_at');   
    }
}
