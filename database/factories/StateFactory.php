<?php
namespace Database\Factories;
use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'name'=>$faker->text(100)
    ];
});
