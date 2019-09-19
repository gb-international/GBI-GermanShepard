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
Route::get('/itinerary/edit/{id}','ApiItineraryController@edit');
Route::get('/itinerary/view/{id}','ApiItineraryController@view');
Route::post('/itinerary/update/{id}','ApiItineraryController@update');


// Itinerary Day
Route::get('/itineraryday','ApiItineraryDayController@index');
Route::post('/itineraryday/create/{id}','ApiItineraryDayController@create');
Route::get('/itineraryday/edit/{id}','ApiItineraryDayController@edit');
Route::post('/itineraryday/update/{id}','ApiItineraryDayController@update');

// Hotel
Route::get('/hotels','ApiHotelController@index');
Route::post('/hotel/create','ApiHotelController@create');

// Salesdp;
Route::get('/salesdps','ApiSalesdpController@index');
Route::post('/salesdp/create','ApiSalesdpController@create');

//Transport
Route::get('/transports','ApiTransportController@index');
Route::post('/transport/create','ApiTransportController@create');

// Cleint
Route::get('/clients','ApiClientController@index');
Route::post('/client/create','ApiClientController@create');

// Tour Api
Route::get('/user-tour-list','ApiTourController@user_tour_list');

// Front User
Route::post('/login','ApiFrontUserController@checklogin');
Route::post('/register','ApiFrontUserController@UserRegister');
Route::post('/user-logout','ApiFrontUserController@logout');
Route::get('/userdata/{id}','ApiFrontUserController@userdata');
Route::get('/popular_detination','ApiFrontUserController@popular_detination');
Route::post('/imageupdate/{id}','ApiFrontUserController@UserImage');
Route::get('/tour-list/{id}','ApiFrontUserController@user_tour_list');






/* serach api route*/
Route::get('/search','ApiItineraryController@search_post');
Route::get('/search-all','ApiItineraryController@SearchAll');



