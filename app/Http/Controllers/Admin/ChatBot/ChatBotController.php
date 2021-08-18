<?php
/*
Created by : Manas
Purpose : GBI Chat Bot

*/
namespace App\Http\Controllers\Admin\ChatBot;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ChatBotController extends Controller
{

     public function booking($id)
    {
      $botman->hears('Booking Enquiry', function (BotMan $bot) {
            $bot->ListofQueries();
        });
    }
    public function payment($id)
    {
      $botman->hears('Got Stuck With Payment?', function (BotMan $bot) {
            $bot->ListofQueries();
        });
    }
    public function itinerary(Request $request){
        $botman->hears('Itinerary Queries', function (BotMan $bot) {
            $bot->ListofQueries();
        });
    }
    public function account(Request $request){
        $botman->hears('Account Settings', function (BotMan $bot) {
            $bot->ListofQueries();
        });
    }
    public function signUp(Request $request){
        $botman->hears('Customer Sign Up', function (BotMan $bot) {
            $bot->ListofQueries();
        });
    }
    public function feedback(Request $request){
        $botman->hears('Feedback', function (BotMan $bot) {
            $bot->ListofQueries();
        });
    }
    public function Queries(Request $request){
        $botman->hears('Queries', function (BotMan $bot) {
            $bot->ListofQueries();
        });
    }
}
