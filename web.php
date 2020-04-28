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
use App\Mail\PasswordResetMail;

Route::group(['middleware' => ['web']], function () {

Auth::routes();

});

Route::get('/send-mail', function () {
    Mail::to('ajay_yadav@gbinternational.in')->send(new PasswordResetMail()); 

    return 'A message has been sent to Mailtrap!';




Route::get('/admin', 'HomeController@index')->name('home');
Route::get('/reset/{link}','OtpController@reset_email_password');
Route::post('/submitpassword','OtpController@submit_password');

Route::group(['middleware' => ['auth']], function () {
 // Account 
     Route::post('/account/store','AccountController@store');
     Route::get('/account/index','AccountController@index');
     Route::get('/account/destroy/{id}','AccountController@destroy');
     Route::get('/account/sales_itinerary','AccountController@sales_itinerary');
     Route::post('/account_booking/store/{id}','AccountController@account_booking_store');
     Route::get('/account/edit/{id}','AccountController@edit');
     Route::get('/account/show/{id}','AccountController@show');
     Route::post('/account/update/{id}','AccountController@update');
 
 // Reservation 
     Route::get('/reservation/{id}','ReservationController@reservation_dashboard');
     Route::post('/submit-student-list/{id}','ReservationController@submit_students');
     Route::get('/student_list/{id}','ReservationController@student_list');

     Route::get('/tour_manager/{id}','ReservationController@tour_manager');
     Route::post('/tour_manager_add/{id}','ReservationController@tour_manager_add');
     Route::get('/tour_hotel/{id}','ReservationController@tour_hotel');
     Route::post('/tour_hotel_add/{id}','ReservationController@tour_hotel_add');
     Route::get('/tour_transport/{id}','ReservationController@tour_transport');
     Route::post('/tour_transport_add/{id}','ReservationController@tour_transport_add');


});



// End user login

/*start front end router*/
Route::post('/location', 'ItineraryresourcesController@getLocation')->name('location');


Route::post('/contact-us/send', 'ContactMassageController@store')->name('contact.store');
Route::post('/join-our-team/send', 'JoinourteamController@resumeSend')->name('resume.send');


Route::get('vuejs/autocomplete', 'VueJSController@autocomplete');

Route::get('vuejs/autocomplete/search', 'VueJSController@autocompleteSearch');
/*end front router*/


}); 