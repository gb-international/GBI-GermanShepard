(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{224:function(t,e,s){"use strict";s.r(e);var a={props:{itinerary:{required:!0}}},i=s(0),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",{staticClass:"underline"},[s("b",[t._v("Day "+t._s(t.itinerary.day))])]),t._v(" "),t.itinerary.day_source!=t.itinerary.day_destination?s("span",[s("b",[t._v(t._s(t.itinerary.day_source.toUpperCase())+" -\n      "+t._s(t.itinerary.day_destination.toUpperCase()))])]):s("a",{attrs:{target:"_blank",href:"https://www.totoprayogo.com/#"}},[t._v(t._s(t.itinerary.day_source.toUpperCase()))]),t._v(" "),s("span",{staticClass:"float-right"}),t._v(" "),s("p",{domProps:{innerHTML:t._s(t.itinerary.day_description)}})])}),[],!1,null,null,null).exports,n=s(9),o={props:["cityList"],components:{VueSlickCarousel:s.n(n).a},data:function(){return{settings:{dots:!1,infinite:!1,speed:500,slidesToShow:6,slidesToScroll:5,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:4,slidesToScroll:3,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:2}}]},current:[],forcast:[],cityName:""}},mounted:function(){this.cityName=this.cityList[0]},watch:{cityName:function(t){this.currentWeather(this.cityName),this.forcastWeather(this.cityName)}},methods:{CityChange:function(t){console.log(t)},currentWeather:function(t){var e=this,s="/api/current-weather/"+t;fetch(s).then((function(t){return t.text()})).then((function(t){return e.current=JSON.parse(t)})).catch((function(){return console.log("Can’t access "+s+" response. Blocked by browser?")}))},forcastWeather:function(t){var e=this,s="/api/forcast-weather/"+t;fetch(s).then((function(t){return t.text()})).then((function(t){return e.forcast=JSON.parse(t)})).catch((function(){return console.log("Can’t access "+s+" response. Blocked by browser?")}))},ForcastDateConvert:function(t){var e=new Date(t);return e.toDateString().split(e.getFullYear())[0]},dateToString:function(t){return(t=new Date(1e3*t)).toLocaleTimeString()},toDayDate:function(){return(new Date).toDateString()},RemoveDecimal:function(t){return Math.trunc(t)},tConvert:function(t){return(t=t.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/)||[t]).length>1&&((t=t.slice(1))[5]=+t[0]<12?"AM":"PM",t[0]=+t[0]%12||12),(t=t.join("")).replace(":00:00"," ")}}},l=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h3",{staticClass:"text-center mb-35"},[t._v("WEATHER REPORT")]),t._v(" "),t.current.main?s("div",{staticClass:"weather-parent bg-weather text-white"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("h3",[s("img",{staticClass:"w-45",attrs:{src:"http://openweathermap.org/img/w/"+t.current.weather[0].icon+".png"}}),t._v("Today\n        ")]),t._v(" "),s("small",[t._v(t._s(t.toDayDate()))])]),t._v(" "),s("div",{staticClass:"col-sm-6 text_right"},[s("h2",{staticClass:"degree"},[t._v("\n          "+t._s(t.RemoveDecimal(t.current.main.temp))+"\n          "),s("sup",[t._v("℃")])]),t._v(" "),s("div",{staticClass:"select-city"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.cityName,expression:"cityName"}],staticClass:"minimal text-white",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.cityName=e.target.multiple?s:s[0]}}},t._l(t.cityList,(function(e){return s("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)]),t._v(" "),s("small",[t._v(t._s(t.current.name)+", "+t._s(t.current.sys.country))]),t._v(" "),s("br"),t._v(" "),s("small",[t._v("Feels like "+t._s(t.RemoveDecimal(t.current.main.feels_like)))]),t._v(".\n        "),s("small",[t._v(" Sunset "+t._s(t.dateToString(t.current.sys.sunset)))])])]),t._v(" "),t.forcast.list?s("div",{staticClass:"row p-20"},[t._m(0),t._v(" "),s("VueSlickCarousel",t._b({staticClass:"w-100",attrs:{arrows:!0}},"VueSlickCarousel",t.settings,!1),t._l(t.forcast.list,(function(e){return s("div",{key:e.dt,staticClass:"weather_card"},[s("div",{staticClass:"data"},[s("div",{staticClass:"text-center"},[s("small",[t._v(t._s(t.tConvert(e.dt_txt.split(" ")[1])))]),t._v(" "),s("img",{staticClass:"img img-circle w-45",attrs:{src:"http://openweathermap.org/img/w/"+e.weather[0].icon+".png"}}),t._v(" "),s("p",[t._v("\n                "+t._s(t.RemoveDecimal(e.main.temp))+"\n                "),s("sup",[t._v("℃")])])])]),t._v(" "),s("p",{staticClass:"text-center"},[t._v(t._s(t.ForcastDateConvert(e.dt_txt.split(" ")[0])))])])})),0)],1):t._e()]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("p",{staticClass:"text-center p-1"},[this._v("Weather Forcast")])])}],!1,null,null,null).exports,c={name:"FlightApp",props:["list","flightDate"],data:function(){return{flights:[],time_left:!1,progress:25,progress_seconds:0}},mounted:function(){this.apiData(this.list)},methods:{makeProgress:function(){this.progress<100&&(this.progress+=5)},apiData:function(t){var e=this;console.log(t);var s="/api/flight-detail/"+t;fetch(s).then((function(t){return t.text()})).then((function(t){return e.flights=JSON.parse(t)})).catch((function(){return console.log("Can’t access "+s+" response. Blocked by browser?")}))},timeFormat:function(t){var e=t,s=new Date(e.split("T")[0]).toDateString(),a=e.split("T")[1],i=(a=(a=a.split("+")[0]).split(":"))[0],r=a[1],n=i>=12?"pm":"am";return s+" "+((i=(i%=12)||12)+":"+(r=r<10?"0"+r:r)+" "+n)},progressBar:function(t,e){var s=new Date(t),a=(new Date(e).getTime()-s.getTime())/1e3,i=e,r=(i=i.split("T"))[1].split("+")[0],n=i[0]+" "+r;i=new Date(n);var o=new Date,l=(i.getTime()-o.getTime())/1e3,c=a-Math.trunc(l);this.progress=Math.trunc(c/a*100),console.log(this.progress)},timeCalculate:function(t){var e=(t=t.split("T"))[1].split("+")[0],s=t[0]+" "+e;t=new Date(s);var a=new Date,i=(t.getTime()-a.getTime())/1e3;this.progress_seconds=i;var r=Math.floor(i/86400),n=Math.floor(i%86400/3600),o=Math.floor(i%86400%3600/60),l=Math.floor(i%86400%3600%60),c="";return r>0&&(c+=r+" Day "),n>0&&(c+=n+" Hour "),o>0&&(c+=o+" Minutes "),l>0&&(c+=l+" Seconds "),c}}},u=Object(i.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.flights.data?s("div",t._l(t.flights.data,(function(e,a){return s("div",{key:a},[e.flight_date==t.flightDate?s("div",{staticClass:"row align-items-center mb-20"},[s("div",{staticClass:"col-md-3 col"},[s("p",[s("b",{staticClass:"underline"},[t._v(t._s(e.airline.name))]),t._v(" "),s("b",{staticClass:"text-upper"},[t._v(t._s(t.list))])]),t._v(" "),s("p",[t._v("\n          Flying from\n          "),s("b",{staticClass:"text-info"},[t._v(t._s(e.departure.airport)+" ( "+t._s(e.departure.iata)+" )")])]),t._v(" "),s("p",[t._v(t._s(t.timeFormat(e.departure.scheduled)))]),t._v(" "),s("p",[t._v("\n          Terminal : "+t._s(e.departure.terminal)+", Gate :\n          "+t._s(e.departure.gate)+"\n        ")])]),t._v(" "),s("div",{staticClass:"col-md-6 col-sm-6 col-xm-12 order-xm-3"},["active"==e.flight_status?s("div",{staticClass:"progressbar"},[t._v("\n          "+t._s(t.progressBar(e.departure.scheduled,e.arrival.scheduled))+"\n          "),s("i",{staticClass:"fas fa-plane-departure",style:{"margin-left":t.progress+"%"}}),t._v(" "),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",style:{width:t.progress+"%"}})]),t._v(" "),s("p",{staticClass:"text-center"},[t._v("\n            Journy time left: "+t._s(t.timeCalculate(e.arrival.estimated))+"\n          ")])]):t._e(),t._v(" "),s("p",{staticClass:"text-center w-100"},[t._v("\n          Flight Status : "),s("b",[t._v(t._s(e.flight_status))])])]),t._v(" "),s("div",{staticClass:"col-md-3 col text-left"},[s("p",[s("b",{staticClass:"underline"},[t._v(t._s(e.airline.name))])]),t._v(" "),s("P",[t._v("\n          Flying To\n          "),s("b",{staticClass:"text-info"},[t._v(t._s(e.arrival.airport)+" ( "+t._s(e.arrival.iata)+" )")])]),t._v(" "),s("p",[t._v(t._s(t.timeFormat(e.arrival.scheduled)))]),t._v(" "),s("p",[t._v("\n          Terminal : "+t._s(e.arrival.terminal)+", Gate :\n          "+t._s(e.arrival.gate)+"\n        ")])],1)]):t._e()])})),0):t._e()}),[],!1,null,null,null).exports,d={props:{hotel:{required:!0}},data:function(){return{max:5}},methods:{getRating:function(t){return t/this.max*100},integer:function(t){return parseInt(t)},dateFormat:function(t){return new Date(t).toDateString()},days:function(t,e){t=new Date(t),e=new Date(e);var s=Math.abs(e-t);return Math.ceil(s/864e5)-1}}},m=Object(i.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hotel-card"},[s("img",{attrs:{src:t.hotel.hotel.image}}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col hotel_info"},[s("div",{staticClass:"rating-hotel"},[s("p",[s("b",[t._v("Hotel Name")]),t._v(" "),s("label",[s("div",{staticClass:"star-rating"},[t._l(t.max,(function(e){return s("span",{key:e.id},[t._v("☆")])})),t._v(" "),s("div",{staticClass:"star-rating__current",style:{width:t.getRating(t.hotel.hotel.type)+"%"}},t._l(t.integer(t.hotel.hotel.type),(function(e){return s("span",{key:e.id},[t._v("★")])})),0)],2)])])]),t._v(" "),s("p",[t._v("\n        "+t._s(t.hotel.hotel.name)+"\n        "),s("label",[s("b",[t._v("Check in date")]),t._v("\n          : "+t._s(t.dateFormat(t.hotel.check_in))+"\n        ")])]),t._v(" "),s("p",[s("b",[t._v("Days stay")]),t._v("\n        : "+t._s(t.days(t.hotel.check_in,t.hotel.check_out))+"\n        "),s("label",[s("b",[t._v("Check out date")]),t._v("\n          : "+t._s(t.dateFormat(t.hotel.check_out))+"\n        ")])])])])])}),[],!1,null,null,null).exports;function v(t){return function(t){if(Array.isArray(t))return _(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return _(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,a=new Array(e);s<e;s++)a[s]=t[s];return a}var h={name:"Tour-detail",components:{"has-error":s(2).HasError,"weather-app":l,"flight-app":u,"hotel-card":m,"itinerary-day":r},data:function(){return{upcoming_list:[],current:3,oddclass:!1,evenclass:!0,itineraryData:{},hotelData:"",flightData:[],alldata:[],cityList:[],tour_code:""}},beforeMount:function(){this.tour_code=this.$cookies.get("tour_code"),this.tourListData(this.tour_code)},methods:{simpleDate:function(t){return t.split("T")[0]},tourListData:function(t){var e=this,s={travel_id:t};this.$api.POST("/api/tour-detail",s).then((function(t){e.alldata=t,console.log(t),e.itineraryData=t.itinerary,e.flightData=t.bookedflights,e.hotelData=t.bookedhotels,e.DestinationCity(e.itineraryData.itinerarydays)})).catch((function(t){e.handleError(t)}))},DestinationCity:function(t){for(var e=[],s=0;s<t.length;s++)e.push(t[s].day_destination);this.cityList=v(new Set(e))}}},p=Object(i.a)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{attrs:{id:"itinerary_detail_list"}},[t.alldata.itinerary?s("div",{staticClass:"mb-35 w-100",attrs:{id:"roadmap"}},[s("div",{staticClass:"row w-100"},[s("div",{staticClass:"col-md-6 offset-md-2"},[s("h4",[t._v("TOUR PATH")]),t._v(" "),s("ul",{staticClass:"timeline"},t._l(t.itineraryData.itinerarydays,(function(t){return s("li",{key:t.id},[s("itinerary-day",{attrs:{itinerary:t}})],1)})),0)])]),t._v(" "),t._m(0),t._v(" "),t.hotelData?s("div",{staticClass:"hotel-section mb-35"},[s("h3",{staticClass:"text-center mb-35"},[t._v("YOU WILL STAY HERE")]),t._v(" "),s("div",{staticClass:"row justify-content-center"},t._l(t.hotelData,(function(t){return s("div",{key:t.id,staticClass:"col-sm-4"},[s("hotel-card",{attrs:{hotel:t}})],1)})),0)]):t._e(),t._v(" "),t.flightData?s("div",{staticClass:"airline-section mb-35"},[s("h3",{staticClass:"text-center mb-35"},[t._v("AIRLINES DETAILS")]),t._v(" "),s("hr"),t._v(" "),t._l(t.flightData,(function(e){return s("div",{key:e.id},[s("flight-app",{attrs:{list:e.flight_number,flightDate:t.simpleDate(e.departure)}})],1)}))],2):t._e(),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"weather-section mb-35"},[s("weather-app",{attrs:{cityList:t.cityList}})],1)]):t._e()])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"things-to-carrry mb-35"},[s("h3",{staticClass:"text-center mb-35"},[t._v("THINGS TO CARRY")]),t._v(" "),s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-md-4 col-sm-6 col-6 bottom-border border-right mb-bottom"},[s("div",{staticClass:"item"},[s("img",{staticClass:"bottel",attrs:{src:"/images/tour/bottel.png"}}),t._v(" "),s("p",[t._v("Water Bottel")])])]),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-6 col-6 bottom-border border-right mb-bottom"},[s("div",{staticClass:"item text-center"},[s("img",{staticClass:"common shoes",attrs:{src:"/images/tour/shoes.png"}}),t._v(" "),s("p",[t._v("Light Shoes")])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-6 col-6 bottom-border mb-bottom mb-right"},[s("div",{staticClass:"item"},[s("img",{staticClass:"common",attrs:{src:"/images/tour/tourch.png"}}),t._v(" "),s("p",[t._v("Tourch")])])]),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-6 col-6 border-right mb-bottom"},[s("div",{staticClass:"item text-center"},[s("img",{staticClass:"common",attrs:{src:"/images/tour/towel.png"}}),t._v(" "),s("p",[t._v("Towel")])])]),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-6 col-6 border-right"},[s("div",{staticClass:"item"},[s("img",{staticClass:"common",attrs:{src:"/images/tour/umbrelaa.png"}}),t._v(" "),s("p",[t._v("Umbrelaa")])])]),t._v(" "),s("div",{staticClass:"col-md-4 col-sm-6 col-6"},[s("div",{staticClass:"item"},[s("img",{staticClass:"common",attrs:{src:"/images/tour/jacket.png"}}),t._v(" "),s("p",[t._v("Jacket")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-section mb-35"},[e("h3",{staticClass:"text-center mb-35"},[this._v("LIVE LOCATION")]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3 card"}),this._v(" "),e("div",{staticClass:"col-sm-9"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73907005717!2d76.81307299667618!3d28.646677259922765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1590745497079!5m2!1sen!2sin",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})])])])}],!1,null,null,null);e.default=p.exports}}]);