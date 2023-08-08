<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Model\Setting\RazorpayCredential;

class RazorpayCredentials extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        try{
            $credential = RazorpayCredential::first();
            $credential_id = (isset($credential->id) && !empty($credential->id))?$credential->id:0;
            RazorpayCredential::updateOrCreate(
                ['id' => $credential_id], ['key_id' => 'rzp_test_y6Z2j2hKLcVnZ7', 'secret_id' => '7rezo8klW7TFvVo9BxYUhlb6']);
        }
        catch(Exception $e) {
            echo $e->getMessage();
        }

    }
}
