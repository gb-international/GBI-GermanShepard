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

Route::get('/', function(){
    return view('front.index');
});

Route::group(['middleware' => ['web']], function () {
    Auth::routes();
    Route::get('/admin', 'HomeController@index')->name('home');

    Route::namespace('Front')->group(function(){
        Route::get('/send-otp/{phoneo}/{mssage}','OtpController@send_sms');
        Route::get('/reset/{link}','EmailController@reset_email_password');
        Route::post('/submitpassword','EmailController@submit_password');
    });
    Route::namespace('Admin')->group(function(){
        Route::group(['middleware' => ['auth']], function () {
            Route::namespace('Account')->group(function (){
                Route::get('/send-notification','AccountController@sendNotification');
                Route::post('/account/store','AccountController@store');
                Route::get('/account/index','AccountController@index');
                Route::get('/account/destroy/{id}','AccountController@destroy');
                Route::get('/account/sales_itinerary','AccountController@sales_itinerary');
                Route::post('/account_booking/store/{id}','AccountController@account_booking_store');
                Route::get('/account/edit/{id}','AccountController@edit');
                Route::get('/account/show/{id}','AccountController@show');
                Route::post('/account/update/{id}','AccountController@update');
                 // Gbi user notification
                Route::get('/gbiuser/notifications','AccountController@notificationList');
                Route::get('/gbiuser/notification-mark-read/{id}','AccountController@markRead');
            });
        });
    }); 
}); 