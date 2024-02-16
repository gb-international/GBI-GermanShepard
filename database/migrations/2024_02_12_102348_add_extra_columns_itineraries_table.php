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
            $table->double('child_with_mattress_price')->default(0)->after("quad_sharing_base_price");
            $table->double('child_without_mattress_price')->default(0)->after("child_with_mattress_price");
            $table->double('infant_price')->default(0)->after("child_without_mattress_price");
            $table->double('apai_price')->default(0)->after("infant_price");
            $table->double('mapai_price')->default(0)->after("apai_price");
            $table->double('cpai_price')->default(0)->after("mapai_price");
            $table->double('ep_price')->default(0)->after("cpai_price");
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
        Schema::dropIfExists('no_of_nights');   
        Schema::dropIfExists('tcs_fee');   
        Schema::dropIfExists('gst_fee');   
        Schema::dropIfExists('single_sharing_base_price');   
        Schema::dropIfExists('double_sharing_base_price');   
        Schema::dropIfExists('triple_sharing_base_price');   
        Schema::dropIfExists('quad_sharing_base_price');   
        Schema::dropIfExists('child_with_mattress_price');   
        Schema::dropIfExists('child_without_mattress_price');   
        Schema::dropIfExists('infant_price');   
        Schema::dropIfExists('ap_plan_price');   
        Schema::dropIfExists('map_plan_price');   
        Schema::dropIfExists('cp_plan_price');   
        Schema::dropIfExists('ep_plan_price');   
        Schema::dropIfExists('deleted_at');   
    }
}



