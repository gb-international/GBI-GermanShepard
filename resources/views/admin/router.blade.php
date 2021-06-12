<nav class="mt-2" id="mynavigation">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
        <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->

        <li class="nav-item">
            <router-link to="/dashboard" class="nav-link nav-cols" title="Dashboard">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
            </router-link>
        </li>

        <li class="nav-item">
            <router-link to="/feedbacks" class="nav-link nav-cols" title="Feedback">
                <i class="nav-icon fas fa-envelope-open-text"></i>
                <p>Feedback</p>
            </router-link>
        </li>

         <li class="nav-item">
            <router-link to="/create-payment-link" class="nav-link nav-cols" title="Feedback">
                <i class="nav-icon fas fa-money-bill-wave"></i>
                <p>Payment Link</p>
            </router-link>
        </li>
        
        @canany(['itineraries','account-itineraries','front-booking', 'tourtypes'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Itinerary">
                <i class="nav-icon far fa-file-alt"></i>
                <p>
                Itinerary
                <i class="right fas fa-angle-right"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                @can('itineraries')
                <li class="nav-item">
                <router-link to="/itinerary-list" class="nav-link nav-cols" title="Itinerary">
                    <p> Itinerary List</p>
                </router-link>
                </li>
                @endcan

                {{-- @can('account-itineraries')
                <li class="nav-item">
                <router-link to="/account-itinerary" class="nav-link nav-cols" title="Account Itinerary">
                    
                    <p> Account Itinerary</p>
                </router-link>
                </li>
                @endcan --}}

                @can("front-booking")
                    <li class="nav-item">
                    <router-link :to="`/front-booking`" class="nav-link nav-cols" title="Website Query">
                        <p> Website Query </p></router-link>
                    </li>
                @endcan
                
                @can("itinerary-request")
                    <li class="nav-item">
                    <router-link :to="`/itinerary-request`" class="nav-link nav-cols" title="Itinerary Request">
                        <p> Itinerary Request </p></router-link>
                    </li>
                @endcan

                @can('tourtypes')
                    <li class="nav-item">
                        <router-link to="/tourtype" class="nav-link nav-cols" title="Tour type">
                        <p> Tour type </p>
                        </router-link>
                    </li>
                @endcan


            </ul>
        </li>
        @endcanany

        

        {{-- @canany(['tours','tourtypes','userpayments'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Tour">
            <i class="nav-icon fas fa-bus"></i>
            <p> Tour <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @can('tours')
            <li class="nav-item">
                <router-link to="/tours" class="nav-link nav-cols" title="Tour List">
                <p> Tour List</p>
                </router-link>
            </li>
            @endcan

            @can('tourtypes')
            <li class="nav-item">
                <router-link to="/tourtype" class="nav-link nav-cols" title="Tour type">
                <p> Tour type </p>
                </router-link>
            </li>
            @endcan

            
            @can('userpayment')
            <li class="nav-item">
                <router-link to="/userpayments" class="nav-link nav-cols" title="User payment">
                <p> User Payments </p>
                </router-link>
            </li>
            @endcan
            

            </ul>
        </li>
        @endcanany --}}

        @canany(['hotels','restaurants'])
        <li class="nav-item has-treeview" title="Hotel">
            <a href="#" class="nav-link nav-cols">
            <i class="nav-icon fas fa-hotel"></i>
            <p>
                Hotel & Restaurant
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @can('hotels')
            <li class="nav-item">
                <router-link to="/hotel-list" class="nav-link nav-cols" title="Hotel List">
                
                <p> Hotel</p>
                </router-link>
            </li>
            @endcan
            @can('restaurants')
            <li class="nav-item">
                <router-link to="/restaurant-list" class="nav-link nav-cols" title="Restaurant List">
                
                <p> Restaurant List</p>
                </router-link>
            </li>
            @endcan
            </ul>
        </li>
        @endcanany
        
        @canany(['buses','trains','flights'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Transports">
            <i class="nav-icon fas fa-car"></i>
            <p>
                Transport
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">

            
            @can('buses')
            <li class="nav-item">
                <router-link to="/bus-list" class="nav-link nav-cols" title="Buses">
                <p> Bus </p>
                </router-link>
            </li>
            @endcan

            @can('trains')
            <li class="nav-item">
                <router-link to="/train-list" class="nav-link nav-cols" title="Trains">
                <p> Train </p>
                </router-link>
            </li>
            @endcan


            @can('flights')
            <li class="nav-item">
                <router-link to="/flight-list" class="nav-link nav-cols" title="Flights">
                <p> Flight </p>
                </router-link>
            </li>
            @endcan
    
            </ul>
        </li>
        @endcanany

        @canany(['schools', 'schooltours', 'userpayment'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="School">
            <i class="nav-icon fas fa-school"></i>
            <p> School <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @can('schools')
            <li class="nav-item">
                <router-link to="/schools" class="nav-link nav-cols" title="School List">
                <p> School List</p>
                </router-link>
            </li>
            @endcan

            @can('schooltours')
            <li class="nav-item">
                <router-link to="/school/tours" class="nav-link nav-cols" title="Tour List">
                <p> Tour List </p>
                </router-link>
            </li>
            @endcan

            
            @can('userpayment')
            <li class="nav-item">
                <router-link to="/school/userpayments" class="nav-link nav-cols" title="User payment">
                <p> User Payments </p>
                </router-link>
            </li>
            @endcan
            

            </ul>
        </li>
        @endcanany


         @canany(['companies', 'companytours', 'userpayment'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Corporate">
            <i class="nav-icon fas fa-building"></i>
            <p> Corporate <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @can('companies')
            <li class="nav-item">
                <router-link to="/companies" class="nav-link nav-cols" title="School List">
                <p> Company List </p>
                </router-link>
            </li>
            @endcan

            @can('companytours')
            <li class="nav-item">
                <router-link to="/corporate/tours" class="nav-link nav-cols" title="Tour List">
                <p> Tour List </p>
                </router-link>
            </li>
            @endcan

            
            @can('userpayment')
            <li class="nav-item">
                <router-link to="/corporate/userpayments" class="nav-link nav-cols" title="User payment">
                <p> User Payments </p>
                </router-link>
            </li>
            @endcan
            

            </ul>
        </li>
        @endcanany

        @can("escorts")
            <li class="nav-item">
            <router-link :to="`/escort-list`" class="nav-link nav-cols" title="Escort">
                <i class="nav-icon fas fa-male"></i>
                <p> Escort</p></router-link>
            </li>
        @endcan

        
        {{-- @canany(['add student','edit student','delete student'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="">
            <i class="fas fa-user-graduate"></i>
            <p>
                Student
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            @can('list escorts')
            <li class="nav-item">
                <router-link to="/students" class="nav-link nav-cols" title="">
                
                <p> Student List</p>
                </router-link>
            </li>
            @endcan
            @can('add escorts')
            <li class="nav-item">
                <router-link to="/add-student" class="nav-link nav-cols" title="">
                
                <p> Add Student</p>
                </router-link>
            </li>
            @endcan
            </ul>
        </li>
        @endcanany --}}


        {{-- @canany(['add salesdps','edit salesdps','delete salesdps','itinerary salesdps'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Sales departments">
            <i class="nav-icon fas fa-universal-access"></i>
            <p>
                Sales Department
                <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">
            
            @can('itinerary salesdps')
            <li class="nav-item">
                <router-link to="/itinerary-from-account" class="nav-link nav-cols" title="Itinerary From Account">
                <p>Itinerary From Account</p>
                </router-link>
            </li>
            @endcan
            
            </ul>
        </li>
        @endcanany

         --}}

        @canany(['city','state','country','sightseeing'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="GBI Location">
            <i class="nav-icon fas fa-map-marker-alt"></i>
            <p> Location <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">

            @can('city')
            <li class="nav-item">
                <router-link to="/list-city" class="nav-link nav-cols" title="City">
                <p> City </p>
                </router-link>
            </li>
            @endcan

            @can('state')
            <li class="nav-item">
                <router-link to="/list-state" class="nav-link nav-cols" title="State">
                <p> State </p>
                </router-link>
            </li>
            @endcan
            
            @can('country')
            <li class="nav-item">
                <router-link to="/country-list" class="nav-link nav-cols" title="Country">
                <p> Country</p>
                </router-link>
            </li>
            @endcan

            
            @can('sightseeing')
            <li class="nav-item">
                <router-link to="/sightseeing" class="nav-link nav-cols" title="GBI Sightseeing">
                <p> Sightseeing</p>
                </router-link>
            </li>
            @endcan



            </ul>
        </li>
        @endcanany


        @canany(['tourprogram','encyclopedia','customer','subscriber','bankdetail','gallery'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="GBI Websites">
            <i class="nav-icon fas fa-file-alt"></i>
            <p> Website <i class="right fas fa-angle-right"></i>
            </p>
            </a>
            <ul class="nav nav-treeview">

            @can('tourprogram')
            <li class="nav-item">
                <router-link to="/tourprogram" class="nav-link nav-cols" title="GBI Travel Programs">
                <p> Travel Programs </p>
                </router-link>
            </li>
            @endcan

            @can('encyclopedia')
            <li class="nav-item">
                <router-link to="/encyclopedias" class="nav-link nav-cols" title="Encyclopedias">
                <p> Encyclopedia </p>
                </router-link>
            </li>
            @endcan

            {{-- @can('encyclopediacomment')
            <li class="nav-item">
                <router-link to="/encyclopediacomment-list" class="nav-link nav-cols" title="Encyclopedia Comments">
                <p> Encyclopedia Comment</p>
                </router-link>
            </li>
            @endcan --}}


            @can('customer')
            <li class="nav-item">
                <router-link to="/user" class="nav-link nav-cols" title="GBI Customers">
                <p>Customer</p>
                </router-link>
            </li>
            @endcan
            
            @can('subscriber')
            <li class="nav-item">
                <router-link to="/subscribers" class="nav-link nav-cols" title="GBI Customers">
                <p>Subscribers</p>
                </router-link>
            </li>
            @endcan

            
            @can('bankdetail')
            <li class="nav-item">
                <router-link to="/schoolbankdetails" class="nav-link nav-cols" title="GBI Bankdetails">
                <p>Bankdetail</p>
                </router-link>
            </li>
            @endcan

            
            @can('gallery')
            <li class="nav-item">
                <router-link to="/gallery" class="nav-link nav-cols" title="GBI Gallery">
                <p>Gallery</p>
                </router-link>
            </li>
            @endcan


            
            </ul>
        </li>
        @endcanany

        
        @canany(['posts','categories','tags'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="GBI Blogs">
                <i class="nav-icon fas fa-file-alt"></i>
                <p> Blog <i class="right fas fa-angle-right"></i></p>
            </a>
            <ul class="nav nav-treeview">

            @can('categories')
            <li class="nav-item">
                <router-link to="/categories" class="nav-link nav-cols" title="Post Category">
                <p> Categories </p>
                </router-link>
            </li>
            @endcan

            @can('tags')
            <li class="nav-item">
                <router-link to="/tags" class="nav-link nav-cols" title="Post Tags">
                <p> Tags </p>
                </router-link>
            </li>
            @endcan
            
            @can('posts')
            <li class="nav-item">
                <router-link to="/posts" class="nav-link nav-cols" title="GBI Posts">
                <p> Posts </p>
                </router-link>
            </li>
            @endcan


            </ul>
        </li>
        @endcanany



        @canany(['setting','roles','permissions','gbimembers','departments'])
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link nav-cols" title="Settings">
                <i class="nav-icon fas fa-cog"></i>
                <p> Setting <i class="right fas fa-angle-right"></i></p>
            </a>
            <ul class="nav nav-treeview">                        
            
            @can('departments')
            <li class="nav-item">
                <router-link to="/list-departments" class="nav-link nav-cols" title="GBI Role">
                <p> Departments</p>
                </router-link>
            </li>
            @endcan
            
            @can('roles')
            <li class="nav-item">
                <router-link to="/list-role" class="nav-link nav-cols" title="GBI Role">
                <p> Role</p>
                </router-link>
            </li>
            @endcan


            @can('permissions')
            <li class="nav-item">
                <router-link to="/list-permission" class="nav-link nav-cols" title="GBI Permissions">
                <p> Permission</p>
                </router-link>
            </li>
            @endcan

            @can('gbimembers')
            <li class="nav-item">
                <router-link to="/list-member" class="nav-link nav-cols" title="GBI Member List">
                <p> GBI member</p>
                </router-link>
            </li>
            @endcan

            </ul>
        </li>
        @endcanany

    </ul>
</nav>