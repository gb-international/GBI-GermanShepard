<?php

namespace App\Http\Controllers\Front;

use Illuminate\Support\Facades\File;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Model\Post\Post;
use App\Model\Itinerary\Itinerary;
use App\Model\Encyclopedia\Encyclopedia;

class AppController extends Controller
{

  public function get(Request $request) 
  {
  	$page = request()->segment(1);
  	$subPage = request()->segment(2);
  	$meta = new \stdClass();
  	$meta->title = "G.B International is a travel educational specialist for young minds.";
  	$meta->description = "GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.";
  	$meta->keyword = "";
  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
  	//Blog
  	if($page == 'blog'){
  		if($subPage){
  			$mData = Post::where('slug', $subPage)->first();
  			if($mData){
  				$meta->title = $mData->meta_title;
			  	$meta->description = $mData->summery;
			  	$meta->keyword = $mData->meta_keyword;
			  	$meta->image = $mData->image;
  			}
  			else {
	  			$meta->title = "GBI Blog";
			  	$meta->description = "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one.";
			  	$meta->keyword = "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs";
			  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	  		}
  		} else {
  			$meta->title = "GBI Blog";
		  	$meta->description = "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one.";
		  	$meta->keyword = "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs";
		  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
  		}
	}
	//Encyclopedia
	elseif($page == 'encyclopedia'){
  		if($subPage){
  			$mData = Encyclopedia::where('slug', $subPage)->first();
  			if($mData){
  				if($mData->meta_title){
					$meta->title = $mData->meta_title;
  				} else {
  					$meta->title = $mData->state_name." | GB International";
  				}
			  	$meta->description = $mData->meta_description;
			  	$meta->keyword = $mData->meta_keyword;
			  	$meta->image = $mData->banner_image;
  			} else {
	  			$meta->title = "GBI Travel Encyclopedia";
			  	$meta->description = "GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.";
			  	$meta->keyword = "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs";
			  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
  			}
  		} else {
  			$meta->title = "GBI Travel Encyclopedia";
		  	$meta->description = "GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.";
		  	$meta->keyword = "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs";
		  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
  		}
	}
	//Explore destination
	elseif($page == 'explore-destination' || $page == 'explore-list'){
  		
  			$meta->title = "GBI Explore Destination";
		  	$meta->description = "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button.";
		  	$meta->keyword = "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs";
		  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
	//Explore detail
	elseif($page == 'explore-detail'){
		if($subPage){
  			$mData = Itinerary::where('id', $subPage)->first();
  			if($mData){
  				if($mData->meta_title){
					$meta->title = $mData->meta_title;
  				} else {
  					$meta->title = $mData->title." | GB International";
  				}
			  	$meta->description = $mData->meta_description;
			  	$meta->keyword = $mData->meta_keyword;
			  	$meta->image = $mData->photo;
  			}	
  		} else {
  			$meta->title = "GBI Explore Destination";
		  	$meta->description = "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button.";
		  	$meta->keyword = "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs";
		  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
  		}
	}
	//Resources
	elseif($page == 'resources'){
	   if($subPage){
	   		if($subPage == 'travel-education'){
	   			$meta->title = "Travel and Education";
			  	$meta->description = "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one.";
			  	$meta->keyword = "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs";
			  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	   		}
	   		elseif($subPage == 'faq'){
	   			$meta->title = "GBI Frequently Asked Question";
			  	$meta->description = "@GoWithGBI helps you answer all your queries  regarding your travel program by just one click of a button.";
			  	$meta->keyword = "@GoWithGBI,have a question,search for your answer,FAQ,Travel bookings queries,customer service,support helpdesk";
			  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	   		}
	   		elseif($subPage == 'safety-security'){
	   			$meta->title = "Safety and Security";
			  	$meta->description = "@GoWithGBI aims to provide complete safety of its travellers during the education programs,GBI team members assuers the safety of passengers and is known for it.";
			  	$meta->keyword = "@GoWithGBI,travel safety tips,our security policies,GBI strict policies,GBI terms and conditions,safe travel";
			  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	   		}
	   		elseif($subPage == 'travel-encyclopedia'){
	   			$meta->title = "GBI Travel Encyclopedia | Domestic States";
			  	$meta->description = "GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.";
			  	$meta->keyword = "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs";
			  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	   		}
	   		elseif($subPage == 'travel-encyclopedia-international'){
	   			$meta->title = "GBI Travel Encyclopedia | International States";
			  	$meta->description = "GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.";
			  	$meta->keyword = "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs";
			  	$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	   		}
	   }
	}
	//Support
	elseif($page == 'support'){
		$meta->title = "GBI Travel Support";
	}
	//Contact Us
	elseif($page == 'contact-us'){
		$meta->title = "GBI Contact Us";
		$meta->description = "Connect With GB International for organizing your educational travel plans any where any time.";
		$meta->keyword = "@GoWithGBI,GB International,Connect With GB International,Email Us,Talk To Us,Need a travel solution";
		$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}

	//About Us
	elseif($page == 'about-us'){
		if($subPage){
			if($subPage == 'our-story'){
				$meta->title = "Our Story";
				$meta->description = "@GoWithGBI Story On How GBI believes in its core values and implement the same  to make your educational travel program a successful one";
				$meta->keyword = "@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs";
				$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
			}
			elseif($subPage == 'how-we-work'){
				$meta->title = "How We Work";
				$meta->description = "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one";
				$meta->keyword = "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs";
				$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
				
			}
			elseif($subPage == 'join-our-team'){
				$meta->title = "Join Our Team";
				$meta->description = "@GoWithGBI Lets travel together and make the world a better place .Join our brilliant minds";
				$meta->keyword = "@GoWithGBI,join our team,explore Your career with GBI,exciting journey,research oriented process,challenges,explore your travel instinct,discover ,travel passion,learn,explore,discover";
				$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
			}
		}
	}
	elseif($page == 'image-gallery'){
		$meta->title = "GBI Image Gallery";
		$meta->description = "@GoWithGBI takes you on a tour behind the scenes where you will get to learn about the process and hard work GBI team puts to make your educational travel program a successful one";
		$meta->keyword = "@GoWithGBI,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs";
		$meta->image = "https://www.gowithgbi.com/assets/front/images/banner2.jpg";
	}
	//return dd($meta);
    return view('app', ['meta' => $meta]);
  }
}