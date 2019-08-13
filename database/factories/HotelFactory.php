<?php

use Faker\Generator as Faker;
use App\hotel;
$factory->define(hotel::class, function (Faker $faker) {
    return [
        'hotelUid'=>'4',
        'type'=>'National',
        'name'=>$faker->name,
        'location'=>'Delhi',
        'phoneno'=>'448484894948',
        'price'=>'49949',
        'phoneno'=>'884848',
        'email'=>$faker->unique()->safeEmail,
        'mealType'=>'FAKE',
    ];
});
