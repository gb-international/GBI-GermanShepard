<?php

use Illuminate\Database\Seeder;
use App\hotel;
class HotelTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(hotel::class,50)->create();
    }
}
