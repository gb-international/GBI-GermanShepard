<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Auth::routes();

Route::get('/admin', 'HomeController@index')->name('home');

Route::group(['middleware' => ['auth']], function () {
    //Category

    Route::post('/add-category','CategoryController@add_category');
    Route::get('/category','CategoryController@all_category');
    Route::get('/category/{id}','CategoryController@delete_category');
    Route::get('/editcategory/{id}','CategoryController@edit_category');
    Route::post('/update-category/{id}','CategoryController@update_category');
    Route::get('/deletecategory/{id}','CategoryController@selected_category');

//Post
    Route::get('/post','PostController@all_Post');
    Route::post('/savepost','PostController@save_post');
    Route::get('/delete/{id}','PostController@delete_post');
    Route::get('/post/{id}','PostController@edit_post');
    Route::post('/update/{id}','PostController@update_post');

//Itineray
    Route::post('/add-itinerary','ItineraryController@storeItinerary');
    Route::get('/itinerary','ItineraryController@allItinerary');
    Route::get('/delete/{id}','ItineraryController@deleteItinerary');  
    Route::get('/itinerary/{id}','ItineraryController@editItinerary');
    Route::post('/update-itinerary/{id}','ItineraryController@updateItinerary');  

// Escort
   Route::get('/escort','EscortController@allEscort');
   Route::post('/add-escort','EscortController@save_escort');
   Route::get('/escort/{id}','EscortController@edit_escort');
   Route::post('/update-escort/{id}','EscortController@update_escort');
   Route::get('/delete-escort/{id}','EscortController@delete_escort');

// Client
   Route::get('/client','ClientController@allClient');
   Route::post('/add-client','ClientController@save_client');


//Itinerary Days router
   Route::get('/add-days-itinerary/{id}','ItineraryController@allDaysitinerary');
   Route::post('/add-itinerarydays/{id}','ItineraryDayController@storeDayitinerary');
});


// User login


  Route::get('/init','FrontController@init');
  Route::post('/user-login','FrontController@checklogin');
  Route::post('/user-register','FrontController@UserRegister');
  Route::post('/user-logout','FrontController@logout');





// End user login

/*start front end router*/
Route::post('/location', 'ItineraryresourcesController@getLocation')->name('location');


Route::post('/contact-us/send', 'ContactMassageController@store')->name('contact.store');
Route::post('/join-our-team/send', 'JoinourteamController@resumeSend')->name('resume.send');


Route::get('vuejs/autocomplete', 'VueJSController@autocomplete');

Route::get('vuejs/autocomplete/search', 'VueJSController@autocompleteSearch');
/*end front router*/
