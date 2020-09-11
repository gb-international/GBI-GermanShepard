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


// Route::post('/payment','Front\PaymentController@payment');

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
		Route::resource('sightseeings','SightseeingController');
	});

	Route::namespace('Itinerary')->group(function(){
		Route::resource('itinerary','ItineraryController');
	});

	Route::namespace('Tour')->group(function(){
		Route::resource('tour','TourController');
		Route::resource('tourtype','TourtypeController');
		Route::resource('tourprogram','TourprogramController');
		Route::resource('schoolbankdetails','SchoolbankdetailController');
		Route::resource('userpayments','UserpaymentController');
		Route::get('frontbooking','FrontbookingController@index');
		Route::get('frontbooking/{id}','FrontbookingController@show');
		Route::post('frontbooking-status','FrontbookingController@status');
		Route::post('frontbooking-delete','FrontbookingController@destroy');
		Route::post('touruser-list','TouruserController@touruserList');
		Route::post('add-pnr-user','TouruserController@addPnrUser');
		Route::post('pnruser/get','TouruserController@PnrUserGet');
		Route::post('update-pnruser','TouruserController@update');
	});

	Route::namespace('Hotel')->group(function(){
		Route::resource('hotel','HotelController');
	});
	Route::namespace('School')->group(function(){
		Route::resource('school','SchoolController');
		Route::resource('student','StudentController');
		Route::get('groupmembers/{tour_code}','GroupmemberController@getMember');
		Route::post('groupmembers/update','GroupmemberController@updateMember');
		Route::post('groupmember/destroy','GroupmemberController@destroyMember');
		Route::post('groupmember/add','GroupmemberController@addMember');
		Route::post('groupmembers/addlogindetail','GroupmemberController@addlogindetail');
		
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
		Route::resource('pnrs','PnrController');
		Route::post('pnrs/get','PnrController@getData');
		Route::post('payments/list','UserpaymentController@paymentList');
		Route::post('payments/student','UserpaymentController@paymentStudent');
		Route::post('createpayment','UserpaymentController@createpayment');
		Route::post('addtourpayment','UserpaymentController@addtourpayment');
		Route::post('updatetourpayment','UserpaymentController@updatetourpayment');
		Route::post('getshooluser','UserpaymentController@getSchoolUser');
		Route::post('getUserpayments','UserpaymentController@getUserpayments');
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
		Route::get('user','UserController@index');
		Route::get('user/{id}','UserController@show');
	});
	
});





