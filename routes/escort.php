<?php
// Escort Routes

Route::namespace('Escort')->group(function(){

    Route::post('/login','LoginController@login');
    Route::post('/login-verify','LoginController@otp_verify');



});