<?php

use Faker\Generator as Faker;
use App\Escort;

$factory->define(Escort::class, function (Faker $faker) {
    return [
        'name'=>$faker->name,
        'salaryPerday'=>'44444',
        'phoneno'=>'48484948489',
        'email'=>$faker->unique()->safeEmail,
        'address'=>$faker->address,
        'status'=>'0',
    ];
});
