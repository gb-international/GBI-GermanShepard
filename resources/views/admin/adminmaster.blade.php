<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>GBI-Panel</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">  
    <meta name="csrf-token" content="{{ csrf_token() }}">    
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>

    <link href="{{ asset('css/admin/app.css') }}" rel="stylesheet">
    {{-- <link href="{{ secure_asset('css/admin/app.css') }}" rel="stylesheet"> --}}
     
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper" id="app">
    <nav class="main-header navbar navbar-expand navbar-white navbar-light" id="sidebarnavigation">
      <div class="navbar-nav">
        <admin-nav-top />
      </div>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown admin_top_right_icon">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <p class="user_icon">U</p>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-header"></span>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="{{ route('logout') }}"
               onclick="event.preventDefault();
                             document.getElementById('logout-form').submit();">
                {{ __('Logout') }}
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
            <!-- <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a> -->
          </div>
        </li>
      </ul>
    </nav>
    <aside class="main-sidebar sidebar-dark-primary elevation-4" id="admin_top_logo">
      <a href="/"  class="brand-link logo_link">
        <img src="{{asset('assets/admin/default/icon/logo.png')}}"
              alt="GBI Logo" class="brand-image">
        <span class="brand-text font-weight-light">.</span>
      </a>
        <div class="sidebar">
            @include('admin.router')
        </div>
    </aside>

        <div class="content-wrapper pr-3 pl-3">
            <admin-main></admin-main>
        </div>

    <footer class="main-footer">
      <div class="float-right d-none d-sm-block">
          <b>Term & Condition</b>
      </div>
      <strong> &copy; 2019 <a href="#">admin</a>.</strong> All rights
      reserved.
    </footer>
</div>

<!-- ./wrapper -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="/js/admin/adminlte.js"></script>
<script>
  @auth
    window.Permissions = {!! json_encode(Auth::user()->allPermissions, true) !!};
  @else
    window.Permissions = [];
  @endauth

</script>


<script src="{{ asset('js/admin/admin.js') }}"></script>
{{-- <script src="{{ secure_asset('js/admin/admin.js') }}"></script> --}}


</body>
</html>
