<?php

use Illuminate\Database\Seeder;
use App\Model\RoleAndPermission\Roles as Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
                [
                    'name' => 'Management',
                    'role_category_id' => 1,
                ],
                [
                    'name' => 'Dev',
                    'role_category_id' => 1,
                ],
                [
                    'name' => 'Account Manager',
                    'role_category_id' => 2,
                ],
                [
                    'name' => 'Account Assistant Manager',
                    'role_category_id' => 2,
                ],
                [
                    'name' => 'Reservations Manager',
                    'role_category_id' => 3,
                ],
                [
                    'name' => 'Reservations Assistant Manager',
                    'role_category_id' => 3,
                ],
                [
                    'name' => 'Operations',
                    'role_category_id' => 4,
                ],
                [
                    'name' => 'Sales Manager',
                    'role_category_id' => 5
                ],
                [
                    'name' => 'Sales Assistant Manager',
                    'role_category_id' => 5,
                ],
                [
                    'name' => 'Content Writer',
                    'role_category_id' => 6,
                ],
                [
                    'name' => 'Graph Designer',
                    'role_category_id' => 6,
                ],
                [
                    'name' => 'Escorts Manager',
                    'role_category_id' => 7,
                ],
                [
                    'name' => 'Escorts Assistant Manager',
                    'role_category_id' => 7,
                ],
                [
                    'name' => 'Principal',
                    'role_category_id' => 8,
                ],
                [
                    'name' => 'Teacher',
                    'role_category_id' => 8,
                ],
                [
                    'name' => 'Student',
                    'role_category_id' => 8,
                ],
                [
                    'name' => 'Incharge',
                    'role_category_id' => 9,
                ],
                [
                    'name' => 'Employee',
                    'role_category_id' => 9,
                ],
                [
                    'name' => 'General',                   
                    'role_category_id' => 10,
                ],
                [
                    'name' => 'Software Department',
                    'role_category_id' => 11,
                ],
            ];
        foreach($roles as $role){
           Role::create($role);
        }
    }
}
