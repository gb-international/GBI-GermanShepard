<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatedCompanyUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->unsignedBigInteger('company_id')->nullable();
            $table->text('department')->nullable();
            $table->string('email',100)->unique();
            $table->string('passport_number')->nullable();
            $table->date('passport_expiry_date')->nullable();
            $table->string('passport_issuing_country')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->string('reset_link')->nullable();
            $table->string('link_time')->nullable();
            $table->tinyInteger('status')->default(0)->comment("0=>deactivate, 1=>active");
            $table->tinyInteger('change_password')->default(0)->comment("0=>No, 1=>Yes");
            $table->string('gbi_link')->nullable();
            $table->string('client_input')->nullable();
            $table->string('phone_no')->nullable()->unique();
            $table->string('otp')->nullable();
            $table->string('father_name')->nullable();
            $table->string('mother_name')->nullable();
            $table->string('dob')->nullable();
            $table->string('address1')->nullable();
            $table->string('address2')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();
            $table->string('zip_code')->nullable();
            $table->tinyInteger('varified')->default(1)->comment("0=>No, 1=>Yes");
            $table->string('photo')->nullable();
            $table->string('gender')->nullable()->comment("male, female");
            $table->string('doc_front')->nullable();
            $table->string('doc_back')->nullable();
            $table->string('doc_type')->nullable();
            $table->string('employee_id')->nullable();
            $table->tinyInteger('register_by')->default(0)->comment("0=>Normal, 1=>Admin");
            $table->tinyInteger('is_incharge')->default(0)->comment("0=>No, 1=>Yes");
            $table->string('customer_id')->nullable();
            $table->string('gstin')->nullable();
            $table->string('company_name')->nullable();
            $table->string('company_address')->nullable();
            $table->string('company_code')->nullable();
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->nullable();
            $table->rememberToken();
            $table->softDeletes();
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('company_users');   
    }
}
