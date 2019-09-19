<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
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
        <!-- Font Awesome -->
        <!-- Ajay Added Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
       <!-- Slick slider -->
        <link href="{{ asset('assets/front/css/slickcss.css') }}" rel="stylesheet">
        <link href="{{ asset('assets/front/css/reset.css') }}" rel="stylesheet">
        <!-- Fonts -->
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" /> 
        <!-- css stylesheet -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        {{-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138734768-1"></script>
         <script>
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'UA-138734768-1');
        </script> --}}
      </head>
  <body>
    <!-- END SCROLL TOP BUTTON -->
    {{-- Loder in html --}}
    
    <!-- Start Header -->
    <!-- id="contents" -->
  <div id="app">
    <div class="container">  
      <div class="row">
        

       <home-main></home-main>

      <footer id="footer">
          <div class="footer-top">
            <div class="footer-content">
                <div class="single-footer">
                    <h3>ACCREDITAION & RECOGNITIONS</h3> 
                      <ul>
                         <li><img class="footr-img" src="{{ asset('assets/front/images/lato_logo.png') }}" alt="GBI tourisum"></li>
                         <li><img class="footr-img" src="{{ asset('assets/front/images/telangana_tourisum.png') }}" alt="telangana tourisum"></li>
                         <li><img class="footr-img" src="{{ asset('assets/front/images/mt_log.png') }}" alt="minisrty of tourism"></li>
                      </ul>
                  </div>
                  <div class="single-footer">
                    <ul>
                        
                         <li>
                            <h3>GBI Holidays Pvt. ltd.</h3>
                            <p>G-32,DDA Commercial Complex</p>
                            <p>Sheikh Sarai Phase-1</p>
                            <p>New Delhi 110017</p>
                         </li>
                         <li>
                           <p><i class="fa fa-phone fa-lg" aria-hidden="true"></i> 011-41864453</p>
                           <p><i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i>csrikhi@gbinternational.in</p>
                           <p>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;info@gbinternational.in</p>
                         </li>
                          
                         <li>
                          <h3>Connect With Us</h3>
                          <a href="https://www.facebook.com/gowithgbi/"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                          <a href="https://twitter.com/gowithgbi"> <i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                          <a href="https://www.linkedin.com/company/13592478/admin/"> <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a>
                          <a href="https://wordpress.com/view/gowithgbi.wordpress.com"> <i class="fa fa-wordpress fa-lg" aria-hidden="true"></i></a>
                          <a href="https://www.instagram.com/gbirikhi/">  <i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
                          <a href="#"> <i class="fa fa-youtube-play fa-lg" aria-hidden="true"></i></a>
                         </li>
                      </ul>
                  </div>
              </div>
            </div>
          <div class="footer-bottom">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="footer-bottom-area">
                    <p class="copy-right">&copy; 2019 GBI Holidays Pvt. ltd. All right reserved.</p>
                  </div>
                  <div class="footer-bottom-term">
                    <p class="copy-left"><a herf="#"> Terms & Condition</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </footer>
               <div class="col-md-12 m-bottom">
                  <div class="navbar-bottom">
                      <router-link :to="`/home`" >
                        <div class="nav-font">
                          <i class="fas fa-home"></i>
                          </div>
                          <div class="nav-font"> home
                          </div>
                        </router-link>
                        <router-link :to="`/explore-destination`" >
                        <div class="nav-font">
                          <i class="fas fa-map-marked-alt"></i>
                          </div>
                          <div class="nav-font"> explore
                          </div>
                        </router-link>
                        <a href="tel:+9810055102" class="{{ Request::segment(1) === 'call' ? 'active' : null }}">
                        <div class="nav-font">
                          <i class="fas fa-phone tranform-icon"></i>
                          </div>
                          <div class="nav-font"> call
                          </div>
                        </a>
                        <router-link :to="`/home`" >
                          <div class="nav-font">
                            <i class="fas fa-user-alt"></i>
                            </div>
                            <div class="nav-font"> profile
                          </div>
                       </router-link>                 
                      </div>
                    </div>
          
  </div>
</div>
</div>
  <!-- End footer -->
  <!-- vue JavaScript -->
  <script src="{{asset('js/app.js')}}"></script>
  
  <!-- Slick slider-->
    <script type="text/javascript" src="{{ asset('assets/front/js/slick.min.js') }}"></script>
    <!-- Custom js -->
    <script type="text/javascript" src="{{ asset('assets/front/js/custom.js') }}"></script>
    <script src="https://use.fontawesome.com/26d5579a34.js" type="text/javascript" ></script>
    <script type="text/javascript" src="{{ asset('assets/front/js/storage.js') }}"></script>
  <!---slider script-->
  
 {{-- Ajay Added Bootstrap CDN --}}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>


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
 </body>
</html>