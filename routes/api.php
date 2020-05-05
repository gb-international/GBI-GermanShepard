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


Route::namespace('Admin')->group(function (){

	Route::namespace('Transport')->group(function(){
		Route::resource('bus', 'BusController');
		Route::resource('train', 'TrainController');
		Route::resource('flight', 'FlightController');
	});

	Route::namespace('Location')->group(function(){
		Route::resource('country','CountryController');
		Route::resource('city','CityController');
		Route::resource('state','StateController');
		Route::get('/sightseeings','SightseeingController@index');
		Route::get('/sightseeings/edit/{id}','SightseeingController@edit');
	});

	Route::namespace('Itinerary')->group(function(){
		Route::resource('itinerary','ItineraryController');
	});

	Route::namespace('Tour')->group(function(){
		Route::resource('tour','TourController');
		Route::resource('tourtype','TourtypeController');
		Route::resource('tourprogram','TourprogramController');
	});

	Route::namespace('Hotel')->group(function(){
		Route::resource('hotel','HotelController');
	});
	Route::namespace('School')->group(function(){
		Route::resource('school','SchoolController');
		Route::resource('student','StudentController');
	});

	Route::namespace('Escort')->group(function(){
		Route::resource('escort','EscortController');
	});

	Route::namespace('RoleAndPermission')->group(function(){
		Route::resource('role','RoleController');
		Route::resource('permission','PermissionController');
	});

	Route::namespace('Reservation')->group(function(){
		Route::resource('bookedescorts','BookedescortController');
		Route::resource('bookedhotels','BookedhotelController');
		Route::resource('bookedflights','BookedflightController');
		Route::resource('bookedtrains','BookedtrainController');
		Route::resource('bookedbuses','BookedbusController');
	});
	Route::namespace('GbiMember')->group(function(){
		Route::get('/members','GBIMemberController@index');
		Route::post('/members/create','GBIMemberController@register');
		Route::post('/members/destroy/{user}',"GBIMemberController@destroy");
		Route::get('/members/salesman',"GBIMemberController@memberType");
	});
	Route::namespace('Account')->group(function(){
		Route::get('/accounts','AccountController@index');
	});
	Route::namespace('Encyclopedia')->group(function(){
		Route::resource('encyclopedias','EncyclopediaController');
		Route::resource('encyclopediacomments','EncyclopediacommentController');
	});
	Route::namespace('Website')->group(function(){
		Route::resource('website','WebsiteController');
	});
	
});

// front

Route::namespace('Front')->group(function(){

	Route::get('/travel-program/{slug}','ItineraryController@travelProgram');
	Route::post('/search-itinerary','ItineraryController@searchItinerary');
	Route::get('/search','ItineraryController@search_post');

	Route::post('/user-logout','FrontUserController@logout');
	Route::get('/tour-list/{id}','FrontUserController@user_tour_list');
	Route::get('/userdata/{id}','FrontUserController@userdata');
	Route::get('/tour-list/{id}','FrontUserController@user_tour_list');
	Route::post('/join-our-team/send', 'JoinourteamController@resumeSend');
	Route::post('/contact-us/send', 'JoinourteamController@contactUs');
	// website
	Route::get('/travel-programs','WebsiteController@travel_programs');
	
	// Front user controller 
	Route::post('login-user', 'UserController@login');
	Route::post('register-user', 'UserController@register');
	Route::group(['middleware' => 'auth:api'], function(){
		Route::post('details', 'UserController@details');
		Route::post('/user-show', 'UserController@show');
		Route::post('/user-update','UserController@update');
		Route::post('/update-user-image','UserController@UserImage');
		// Comments
		Route::post('/encyclopedia-comments','EncyclopediaController@PostComment');
	});
	// Otp
	Route::post('/sendotp','OtpController@send_otp');
	Route::post('/otpverify','OtpController@otp_verify');
	Route::post('/sendlink','EmailController@send_link_email');

	// Encyclopedia
	Route::get('/encyclopedia-list','EncyclopediaController@index');
	Route::get('/encyclopedia/{slug}','EncyclopediaController@view');
	Route::get('/ency-comments/{id}','EncyclopediaController@GetComment');
});








