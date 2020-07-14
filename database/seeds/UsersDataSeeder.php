<?php

use Illuminate\Database\Seeder;
use App\User;
class UsersDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        // Add the master administrator, user id of 1
        User::create([
            'name'              => 'Admin User',
            'email'             => 'admin@test.com',
            'password'          => '123456'
        ]);

        User::create([
            'name'              => 'Moderator User',
            'email'             => 'moderator@test.com',
            'password'          => '123456'
        ]);

        User::create([
            'name'              => 'Normal User',
            'email'             => 'user@test.com',
            'password'          => '123456'
        ]);
    }
}
