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

            
            @can('userpayment')
            <li class="nav-item">
                <router-link to="/userpayments" class="nav-link">
                <p> User Payments </p>
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

        
        @canany(['add restaurants','edit restaurants','delete restaurants'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
            <i class="nav-icon fas fa-utensils"></i>
            <p>
                Restaurant
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @can('list restaurants')
            <li class="nav-item">
                <router-link to="/restaurant-list" class="nav-link">
                
                <p> Restaurant List</p>
                </router-link>
            </li>
            @endcan
            @can('add restaurants')
            <li class="nav-item">
                <router-link to="/add-restaurant" class="nav-link">
                <p> Add Restaurant </p>
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

        
        {{-- @canany(['add student','edit student','delete student'])
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
        @endcanany --}}


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
            
            @can('bankdetail')
            <li class="nav-item">
                <router-link to="/bankdetail" class="nav-link">
                <p>Bankdetail</p>
                </router-link>
            </li>
            @endcan

            
            @can('bankdetail')
            <li class="nav-item">
                <router-link to="/gallery" class="nav-link">
                <p>Gallery</p>
                </router-link>
            </li>
            @endcan


            
            </ul>
        </li>
        @endcan

        
        @can(['blog'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
            <i class="nav-icon fas fa-file-alt"></i>
            <p> Blog <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">

            @can('category')
            <li class="nav-item">
                <router-link to="/categories" class="nav-link">
                <p> Categories </p>
                </router-link>
            </li>
            @endcan

            @can('tag')
            <li class="nav-item">
                <router-link to="/tags" class="nav-link">
                <p> Tags </p>
                </router-link>
            </li>
            @endcan
            
            @can('post')
            <li class="nav-item">
                <router-link to="/posts" class="nav-link">
                <p> Posts </p>
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