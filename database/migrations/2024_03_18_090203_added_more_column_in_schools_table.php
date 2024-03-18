<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedMoreColumnInSchoolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('schools', function (Blueprint $table) {
            $table->string('surname')->nullable()->after('id');
            $table->unsignedInteger('edu_institute_id')->nullable()->after('surname');
            $table->softDeletes()->after('updated_at');
            $table->foreign('edu_institute_id')->references('id')->on('edu_institutes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('schools', function (Blueprint $table) {
            Schema::dropColumn('surname');
            Schema::dropColumn('edu_institute_id');
            Schema::dropColumn('deleted_at');
        });
    }
}
