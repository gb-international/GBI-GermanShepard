<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/escorts', 'ApiEscortController@index');

Route::get('/itinerarys', 'ApiItineraryController@index');
Route::post('/itinerary/create', 'ApiItineraryController@store');
Route::get('/itineraryday','ApiItineraryDayController@index');
Route::post('/itineraryday/create/{id}','ApiItineraryDayController@create');






