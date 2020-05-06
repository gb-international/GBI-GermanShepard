<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head> 
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="author" content="gbinternational" />
    <meta name="language" content="en" />
    <meta name="author" content="@GBI" /> 
    <meta name="copyright" content="GB International" />
    <meta name="robots" content="follow"/>
    <meta http-equiv="X-UA-Compatible" content="IE=10">
    <meta http-equiv="cache-control" content="no-cache"/>
    <meta http-equiv="expires" content="exercise date in seconds"/>
    <meta http-equiv="expires" content="0"/> <meta http-equiv="expires" content="43200"/>
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/icon" href="{{ asset('assets/front/images/favicon.png') }}"/> 
    <link rel="stylesheet" href="{{ asset('assets/front/css/bootstrap.min.css') }}">
   <!-- Slick slider -->
    <link href="{{ asset('assets/front/css/slickcss.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/front/css/reset.css') }}" rel="stylesheet">
    <!-- Fonts -->
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" /> 
    <!-- css stylesheet -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    {{-- <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> --}}
    {{-- Global site tag (gtag.js) - Google Analytics --}}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138734768-1"></script>
     <script>
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'UA-138734768-1');
    </script>

     <!-- Fonts -->
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" /> 
    <!-- css stylesheet -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138734768-1"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138734768-1"></script>     
    <meta property="og:title" content="G.B International is a travel educational specialist for young minds.">
    <meta property="og:site_name" content="gowithgbi.com">
    <meta property="og:url" content="https://www.gowithgbi.com/travel-and-education#/">
    <meta property="og:description" content="GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://www.gowithgbi.com/assets/front/images/banner2.jpg">
    <style type="text/css">
      body { padding-right: 0 !important }
    </style>
  </head>
<body>


    
  <div id="app">
    <div>  
      <div class="row">
        <home-main></home-main>
      </div>
    </div>
  </div>


  <script>
    window.Laravel = <?php echo json_encode([
        'csrfToken' => csrf_token(),
      ]); ?>
  </script>

    <!-- vue JavaScript -->
    <script src="{{asset('js/app.js')}}"></script>


    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
  <!-- Slick slider-->
    <script type="text/javascript" src="{{ asset('assets/front/js/slick.min.js') }}"></script>
    <!-- Custom js -->
    <script type="text/javascript" src="{{ asset('assets/front/js/custom.js') }}"></script>
    <script src="https://use.fontawesome.com/26d5579a34.js" type="text/javascript" ></script>
    <script type="text/javascript" src="{{ asset('assets/front/js/storage.js') }}"></script>


    <script type="text/javascript" src="{{ asset('assets/front/js/jquery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('assets/front/js/bootstrap.min.js') }}"></script>
     {{-- Ajay Added Bootstrap CDN --}}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>




<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css" />
<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>



<script type="text/javascript">
  (function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery


</script>
<script>





window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function(){
    var login = localStorage.getItem("login");
    if(login == '1'){
      $(".login_link").hide();
      $(".dashboard_link").show();
    }else{
      $(".login_link").show();
      $(".dashboard_link").hide();
    }
});


</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["TravelAgency","EducationalOrganization"],
  "name": "GB INTERNATIONAL",
    "description": "GB International is an educational travel partner for those who are looking out to explore and learn about new destinations ,cultural heritage  and scientific explorations across the globe",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "G32 TRIVENI COMMERCIAL COMPLEX SHEIKH SARAI 1",
    "addressLocality": "NEW DELHI",
    "addressRegion": "Delhi",
    "postalCode": "110017"
        
  },
  "image": "https://www.gowithgbi.com/assets/front/images/logo.png",
  "email": "info@gbinternational.in",
  "telePhone": ["+919717922240","01141864453","01126011683"],
  "url": "https://www.gowithgbi.com",
    "sameAs" : [
    "https://www.facebook.com/gowithgbi",
    "https://www.twitter.com/gowithgbi",
    "https://instagram.com/gowithgbi",
    "https://www.youtube.com/channel/UCYaTBxhqqXaMOUNZiAqvI_A/about?view_as=subscriber"
  ],
  "paymentAccepted": [ "cash", "check", "credit card", "invoice" ],
  "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-18:00",
  "openingHoursSpecification": [ {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  } ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.5364",
    "longitude": "77.2236"
  },
    "hasMap": "https://g.page/GoWithGbi?share",
  "priceRange":"Rs1000-Rs10,000"
}
</script>
 </body>
</html>