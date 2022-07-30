<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-138734768-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-138734768-1');
  </script>  
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Expires" content="-1">
  <!-- CSRF Token -->
  <title>{{ config('app.name', 'GBI') }}</title>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="icon" type="image/png" href="{{ asset('assets/front/images/favicon.png') }}" />
  {{-- <link rel="icon" type="image/png" href="{{ secure_asset('assets/front/images/favicon.png') }}" /> --}}
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">

  <!-- Font awesome Icons -->
  <script src="https://kit.fontawesome.com/5810dc9d6a.js" crossorigin="anonymous"></script>
  
  <!-- Fonts -->
  <link rel="dns-prefetch" href="//fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
  
  @if($meta)
<meta property="og:title" content="{{$meta->title}}">
  <meta property="og:description" content="{{$meta->description}}">
  <meta property="og:keywords" content="{{$meta->keyword}}">
  <meta property="og:image" content="{{$meta->image}}">
  @else
  <meta property="og:title" content="G.B International is a travel educational specialist for young minds.">
  <meta property="og:description" content="GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.">
  <meta property="og:image" content="https://www.gowithgbi.com/assets/front/images/banner2.jpg">
  @endif
<meta property="og:site_name" content="gowithgbi.com">
  <meta property="og:url" content="{{Request::fullUrl()}}">
  <meta property="og:type" content="website">
  <!-- Styles -->
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  {{-- <link href="{{ secure_asset('css/app.css') }}" rel="stylesheet"> --}}
</head>
<body style="background: white !important">

  <div style="background: white !important">
    <div id="app" style="background: white !important">
      <App style="background: white !important;"></App>
    </div>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  <script src="https://cdn.socket.io/4.0.1/socket.io.min.js" integrity="sha384-LzhRnpGmQP+lOvWruF/lgkcqD+WDVt9fU3H4BWmwP5u5LTmkUGafMcpZKNObVMLU" crossorigin="anonymous"></script>

   <script src="{{ asset('js/app.js') }}" defer></script>
   {{-- <script src="{{ secure_asset('js/app.js') }}" defer></script> --}}
   {{-- {!! $ssr !!}
  <script src="{{ asset('js/app-client.js') }}" type="text/javascript"></script> 

  {!! ssr('js/app-server.js')->render() !!}
  <script src="{{ asset('js/app.js') }}" type="text/javascript"></script> --}}

{{-- <script>
    $("body").on("contextmenu", function () {  
      return false;  
    }); 
  </script> 
   <script>
            window.laravel_echo_port='{{env("LARAVEL_ECHO_PORT")}}';
    </script>
    <script src="//{{ Request::getHost() }}:{{env('LARAVEL_ECHO_PORT')}}/socket.io/socket.io.js"></script>
    <script src="{{ url('/js/laravel-echo-setup.js') }}" type="text/javascript"></script>
      
     <script type="text/javascript">
        //var i = 0;
        window.Echo.channel('gb_international_database_user-channel')
         .listen('.UserEvent', (data) => {
            //i++;
            //$("#notification").append('<div class="alert alert-success">'+i+'.'+data.title+'</div>');
            //console.log(data.title);
            
        });
    </script> --}}
    <style>

        .vhd__datepicker__months {
            display: flex;
            flex-wrap: wrap;
            width: 74vw;
            justify-content: space-between;
        }
       .vhd__datepicker__close-button{
        z-index: 9999999 !important;
       }
       .vhd__datepicker{
          padding-top: 5px;
          z-index: 999999 !important;
      }
      @media (min-width: 992px) { 
        .vhd__datepicker__months{
          width: 40vw !important;
        }
      }
      @media screen and (max-width: 767px){
        .vhd__datepicker__months {
          width: 100vw;
        }
      }

      @media screen and (max-width: 767px){
        .qkb-bubble-btn {
          margin-bottom: 56px;
        }
    }

    </style>
</body>
</html>
