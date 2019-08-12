<?php

use Illuminate\Database\Seeder;
use App\Escort;
class EscortSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Escort::class,50)->create();
    }
}
