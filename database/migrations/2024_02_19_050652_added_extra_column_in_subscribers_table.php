<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInSubscribersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('subscribers', function (Blueprint $table) {
            $table->unsignedInteger('edu_institute_id')->nullable()->after('id');
            $table->unsignedInteger('company_user_id')->nullable()->after('edu_institute_id');
            $table->unsignedInteger('family_user_id')->nullable()->after('company_user_id');
            $table->softDeletes();
            $table->foreign('edu_institute_id')->references('id')->on('edu_institutes')->onDelete('cascade');
            $table->foreign('company_user_id')->references('id')->on('company_users')->onDelete('cascade');
            $table->foreign('family_user_id')->references('id')->on('family_users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('subscribers', function (Blueprint $table) {
            Schema::dropColumn('edu_institute_id');
            Schema::dropColumn('company_user_id'); 
            Schema::dropColumn('family_user_id'); 
            Schema::dropColumn('deleted_at'); 
        });
    }
}
