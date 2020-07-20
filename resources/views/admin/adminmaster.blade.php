<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>GBI-Panel</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">  
    <meta name="csrf-token" content="{{ csrf_token() }}">    
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <link href="{{ asset('css/admin/app.css') }}" rel="stylesheet">
   
</head>
<body class="hold-transition sidebar-mini">
<!-- Site wrapper -->
<div class="wrapper" id="app">
  <!-- /.navbar -->
  <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light" id="sidebarnavigation">
      <!-- SEARCH FORM -->
      

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <!-- Messages Dropdown Menu -->
              
        <!-- Notifications Dropdown Menu -->
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
  <!-- /.navbar -->
  <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4" id="admin_top_logo">
        <!-- Brand Logo -->
        <a href="/"  class="brand-link logo_link">
            <img src="{{asset('assets/admin/default/icon/logo.png')}}"
                 alt="GBI Logo"
                 class="brand-image">
            <span class="brand-text font-weight-light">.</span>
        </a>
        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar Menu -->
            <nav class="mt-2" id="mynavigation">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
                         with font-awesome or any other icon font library -->
                    <li class="nav-item">
                        <router-link to="/" class="nav-link dashboard_color">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>Dashboard</p>
                        </router-link>
                    </li>
                    @canany(['add itineraries','edit itineraries','delete itineraries','account itineraries'])
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                          <i class="nav-icon far fa-file-alt"></i>
                          <p>
                            Itinerary
                            <i class="right fas fa-angle-right"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview">
                          @can('list itineraries')
                          <li class="nav-item">
                            <router-link to="/itinerary-list" class="nav-link">
                              
                              <p> Itinerary List</p>
                            </router-link>
                          </li>
                          @endcan
                          @can('add itineraries')
                          <li class="nav-item">
                            <router-link to="/add-itinerary" class="nav-link">
                              
                              <p> Add Itinerary</p>
                            </router-link>
                          </li>
                          @endcan
                          @can('account itineraries')
                          <li class="nav-item">
                            <router-link to="/account-itinerary" class="nav-link">
                              
                              <p> Account Itinerary</p>
                            </router-link>
                          </li>
                          @endcan
                          
                          @can('front booking')
                          <li class="nav-item">
                            <router-link to="/front-booking" class="nav-link">
                              
                              <p> Booking From Website</p>
                            </router-link>
                          </li>
                          @endcan

                        </ul>
                    </li>
                    @endcanany

                    @canany("[front booking]")
                      <li class="nav-item">
                        <router-link :to="`/front-booking`" class="nav-link">
                          <i class="nav-icon fas fa-question"></i>
                          <p> Website Query</p></router-link>
                      </li>
                    @endcanany

                    @canany(['list tour','add tour','edit tour','delete tour'])
                    <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-bus"></i>
                        <p> Tour <i class="right fas fa-angle-right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        @can('list hotels')
                        <li class="nav-item">
                          <router-link to="/tours" class="nav-link">
                            <p> Tour List</p>
                          </router-link>
                        </li>
                        @endcan

                        @can('add hotels')
                        <li class="nav-item">
                          <router-link to="/add-tour" class="nav-link">
                            <p> Add Tour </p>
                          </router-link>
                        </li>
                        @endcan

                        @can('tourtype')
                        <li class="nav-item">
                          <router-link to="/tourtype" class="nav-link">
                            <p> Tour type </p>
                          </router-link>
                        </li>
                        @endcan

                        

                      </ul>
                    </li>
                    @endcanany

                    
                    

                    @canany(['add hotels','edit hotels','delete hotels'])
                    <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-hotel"></i>
                        <p>
                          Hotel
                          <i class="right fas fa-angle-right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        @can('list hotels')
                        <li class="nav-item">
                          <router-link to="/hotel-list" class="nav-link">
                            
                            <p> Hotel List</p>
                          </router-link>
                        </li>
                        @endcan
                        @can('add hotels')
                        <li class="nav-item">
                          <router-link to="/add-hotel" class="nav-link">
                            <p> Add Hotel </p>
                          </router-link>
                        </li>
                        @endcan
                      </ul>
                    </li>
                    @endcanany
                    
                    @canany(['add transports','edit transports','delete transports'])
                    <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-car"></i>
                        <p>
                          Transport
                          <i class="right fas fa-angle-right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">

                        
                        @can('list transport')
                        <li class="nav-item">
                          <router-link to="/bus-list" class="nav-link">
                            <p> Bus </p>
                          </router-link>
                        </li>
                        @endcan

                        @can('list transport')
                        <li class="nav-item">
                          <router-link to="/train-list" class="nav-link">
                            <p> Train </p>
                          </router-link>
                        </li>
                        @endcan


                        @can('list transport')
                        <li class="nav-item">
                          <router-link to="/flight-list" class="nav-link">
                            <p> Flight </p>
                          </router-link>
                        </li>
                        @endcan
                
                      </ul>
                    </li>
                    @endcanany


                    @canany(['add school','edit school','delete school'])
                    <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                        <i class="fas fa-school"></i>
                        <p>
                          School
                          <i class="right fas fa-angle-right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        @can('list escorts')
                        <li class="nav-item">
                          <router-link to="/schools" class="nav-link">
                            
                            <p> School List</p>
                          </router-link>
                        </li>
                        @endcan
                        @can('add escorts')
                        <li class="nav-item">
                          <router-link to="/add-school" class="nav-link">
                            <p> Add School</p>
                          </router-link>
                        </li>
                        @endcan
                      </ul>
                    </li>
                    @endcanany

                    
                    @canany(['add student','edit student','delete student'])
                    <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                        <i class="fas fa-user-graduate"></i>
                        <p>
                          Student
                          <i class="right fas fa-angle-right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        @can('list escorts')
                        <li class="nav-item">
                          <router-link to="/students" class="nav-link">
                            
                            <p> Student List</p>
                          </router-link>
                        </li>
                        @endcan
                        @can('add escorts')
                        <li class="nav-item">
                          <router-link to="/add-student" class="nav-link">
                            
                            <p> Add Student</p>
                          </router-link>
                        </li>
                        @endcan
                      </ul>
                    </li>
                    @endcanany


                    @canany(['add salesdps','edit salesdps','delete salesdps','itinerary salesdps'])
                    <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-universal-access"></i>
                        <p>
                          Sales Department
                          <i class="right fas fa-angle-right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        
                        @can('itinerary salesdps')
                        <li class="nav-item">
                          <router-link to="/itinerary-from-account" class="nav-link">
                            <p>Itinerary From Account</p>
                          </router-link>
                        </li>
                        @endcan
                      </ul>
                    </li>
                    @endcanany

                    @canany(['add escorts','edit escorts','delete escorts'])
                    <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-male"></i>
                        <p>
                          Escort
                          <i class="right fas fa-angle-right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">
                        @can('list escorts')
                        <li class="nav-item">
                          <router-link to="/escort-list" class="nav-link">
                            
                            <p> Escort List</p>
                          </router-link>
                        </li>
                        @endcan
                        @can('add escorts')
                        <li class="nav-item">
                          <router-link to="/add-escort" class="nav-link">
                            
                            <p> Add Escort</p>
                          </router-link>
                        </li>
                        @endcan
                      </ul>
                    </li>
                    @endcanany

                    @can(['city','state','country'])
                    <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-map-marker-alt"></i>
                        <p> Location <i class="right fas fa-angle-right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">

                        @can('city')
                        <li class="nav-item">
                          <router-link to="/list-city" class="nav-link">
                            <p> City </p>
                          </router-link>
                        </li>
                        @endcan

                        @can('state')
                        <li class="nav-item">
                          <router-link to="/list-state" class="nav-link">
                            <p> State </p>
                          </router-link>
                        </li>
                        @endcan
                        
                        @can('city')
                        <li class="nav-item">
                          <router-link to="/country-list" class="nav-link">
                            <p> Country</p>
                          </router-link>
                        </li>
                        @endcan

                        
                        @can('sightseeing')
                        <li class="nav-item">
                          <router-link to="/sightseeing" class="nav-link">
                            <p> Sightseeing</p>
                          </router-link>
                        </li>
                        @endcan



                      </ul>
                    </li>
                    @endcan


                    @can(['website'])
                    <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-file-alt"></i>
                        <p> Website <i class="right fas fa-angle-right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">

                        @can('tourprogram')
                        <li class="nav-item">
                          <router-link to="/tourprogram" class="nav-link">
                            <p> Travel Programs </p>
                          </router-link>
                        </li>
                        @endcan

                        @can('encyclopedia')
                        <li class="nav-item">
                          <router-link to="/encyclopedia-list" class="nav-link">
                            <p> Encyclopedia </p>
                          </router-link>
                        </li>
                        @endcan

                        @can('encyclopediacomment')
                        <li class="nav-item">
                          <router-link to="/encyclopediacomment-list" class="nav-link">
                            <p> Encyclopedia Comment</p>
                          </router-link>
                        </li>
                        @endcan

                        @can('homepage')
                        <li class="nav-item">
                          <router-link to="/homepage" class="nav-link">
                            <p>Homepage</p>
                          </router-link>
                        </li>
                        @endcan

                        
                        @can('user')
                        <li class="nav-item">
                          <router-link to="/user" class="nav-link">
                            <p>Customer</p>
                          </router-link>
                        </li>
                        @endcan



                        
                       
                      </ul>
                    </li>
                    @endcan

                    @canany(['setting','roles','permissions'])
                    <li class="nav-item has-treeview">
                      <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-cog"></i>
                        <p> Setting <i class="right fas fa-angle-right"></i>
                        </p>
                      </a>
                      <ul class="nav nav-treeview">                        
                        
                        @can('role')
                        <li class="nav-item">
                          <router-link to="/list-role" class="nav-link">
                            <p> Role</p>
                          </router-link>
                        </li>
                        @endcan

                        @can('permission')
                        <li class="nav-item">
                          <router-link to="/list-permission" class="nav-link">
                            <p> Permission</p>
                          </router-link>
                        </li>
                        @endcan

                        @can('gbi member')
                        <li class="nav-item">
                          <router-link to="/list-member" class="nav-link">
                            <p> GBI member</p>
                          </router-link>
                        </li>
                        @endcan
                      </ul>
                    </li>
                    @endcan

                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <admin-main></admin-main>
        </div>
        <!-- /.content-wrapper -->

      <footer class="main-footer">
          <div class="float-right d-none d-sm-block">
              <b>Term & Condition</b>
          </div>
          <strong> &copy; 2019 <a href="#">admin</a>.</strong> All rights
          reserved.
      </footer>

      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
          <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
</div>

<!-- ./wrapper -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
  @auth
    window.Permissions = {!! json_encode(Auth::user()->allPermissions, true) !!};
  @else
    window.Permissions = [];
  @endauth


$(document).ready(function(){
  $(".has-treeview").on("click",function(){
      if ($(this).hasClass("menu-open") == false) {
        $(this).addClass('menu-open');
        $(this).find('ul').css("display","block");       
      }
  });

  $(".fa-angle-right").on("click",function(){
    $(".has-treeview").removeClass("menu-open");
    $(".has-treeview").find('ul').css("display","none");
    return false;
  }); 
});




</script>


<script src="{{ asset('js/admin/admin.js') }}"></script>

</body>
</html>
