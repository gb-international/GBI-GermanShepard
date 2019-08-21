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
// Escort Api
Route::get('/escorts', 'ApiEscortController@index');
Route::get('/escort/edit/{id}', 'ApiEscortController@edit');
Route::post('/escort/create', 'ApiEscortController@create');

// Itinerary Api
Route::get('/itinerarys', 'ApiItineraryController@index');
Route::post('/itinerary/create', 'ApiItineraryController@create');
Route::get('/itinerary/view/{id}','ApiItineraryController@view');

// Itinerary Day
Route::get('/itineraryday','ApiItineraryDayController@index');
Route::post('/itineraryday/create/{id}','ApiItineraryDayController@create');

// Hotel
Route::get('/hotels','ApiHotelController@index');
Route::post('/hotel/create','ApiHotelController@create');

// Salesdp;
Route::get('/salesdps','ApiSalesdpController@index');
Route::post('/salesdp/create','ApiSalesdpController@create');

//Transport
Route::get('/transports','ApiTransportController@index');
Route::post('/transport/create','ApiTransportController@create');

