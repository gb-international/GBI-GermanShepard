<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddedExtraColumnInUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('gstin')->nullable()->after('status');
            $table->string('customer_id')->nullable()->after('gstin');
            $table->string('gbi_link')->nullable()->after('customer_id');
            $table->string('client_type')->nullable()->after('gbi_link');
            $table->string('client_input')->nullable()->after('client_type');
            $table->string('phone_no')->nullable()->after('client_input');
            $table->string('otp')->nullable()->after('phone_no');
            $table->string('father_name')->nullable()->after('otp');
            $table->string('mother_name')->nullable()->after('father_name');
            $table->string('dob')->nullable()->after('mother_name');
            $table->string('address')->nullable()->after('dob');
            $table->string('city')->nullable()->after('address');
            $table->string('state')->nullable()->after('city');
            $table->string('country')->nullable()->after('state');
            $table->string('zip_code')->nullable()->after('country');
            $table->string('user_class')->nullable()->after('zip_code');
            $table->string('admission_year')->nullable()->after('user_class');
            $table->string('varified')->default('1')->after('admission_year');
            $table->string('photo')->nullable()->after('varified');
            $table->string('gender')->nullable()->after('photo');
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            Schema::dropColumn('customer_id');
            Schema::dropColumn('gstin');
            Schema::dropColumn('gbi_link');
            Schema::dropColumn('client_type');
            Schema::dropColumn('client_input');
            Schema::dropColumn('phone_no');
            Schema::dropColumn('otp');
            Schema::dropColumn('father_name');
            Schema::dropColumn('mother_name');
            Schema::dropColumn('dob');
            Schema::dropColumn('address');
            Schema::dropColumn('city');
            Schema::dropColumn('state');
            Schema::dropColumn('country');
            Schema::dropColumn('zip_code');
            Schema::dropColumn('user_class');
            Schema::dropColumn('admission_year');
            Schema::dropColumn('varified');
            Schema::dropColumn('photo');
            Schema::dropColumn('gender');
            Schema::dropColumn('deleted_at');
        });
    }
}
