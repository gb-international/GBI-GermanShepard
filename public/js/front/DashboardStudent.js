(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{19:function(t,s,i){"use strict";s.a={name:"Dashboard",data:function(){return{itineraryData:{},upcoming_list:[],userinfo:{},valid:!1}},beforeMount:function(){0==this.$cookies.get("user").status&&this.$router.push("/user-information")},mounted:function(){this.checkLogin(),this.upComingData()},methods:{checkLogin:function(){this.$cookies.remove("login"),this.userinfo=this.$cookies.get("user"),this.valid=!0},userData:function(){if(0==this.userinfo.status)return this.$router.push("/user-information"),!1;0==this.userinfo.change_password&&this.$swal.fire("warning","Please change your password for security purpose !!! <br>","warning")},upComingData:function(){var t=this;this.$axios.get("/api/travel-program/upcoming-tour").then((function(s){t.upcoming_list=s.data}))},getImgUrl:function(t){return"/uploadimage/"+t}}}},24:function(t,s,i){"use strict";var a={props:{userinfo:{required:!0}},methods:{logout:function(){var t=this;this.$api.POST("/api/logout-user",[]).then((function(s){t.$cookies.remove("access_token"),t.$store.dispatch("logout").then((function(){t.$bus.$emit("logged","User loogedout"),t.$router.push("/")}))})).catch((function(s){t.$store.dispatch("logout").then((function(){t.$bus.$emit("logged","User loogedout"),t.$router.push("/")}))}))}}},e=i(0),o=Object(e.a)(a,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"user_dashboard_profile"},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-right"},[i("router-link",{staticClass:"user_edit",attrs:{to:"/profile-edit",title:"edit profile"}},[i("img",{staticClass:"icon-width",attrs:{src:"/images/icons/white-user.png"}})]),i("br"),t._v(" "),i("router-link",{staticClass:"user_edit",attrs:{to:"/update-password",title:"setting"}},[i("img",{staticClass:"icon-width",attrs:{src:"/images/icons/setting.png"}})])],1),t._v(" "),t.userinfo?i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-2 text-center image"},[i("figure",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"image__wrapper"},[i("ImageSpinner",{staticClass:"image__spinner"}),t._v(" "),i("img",{staticClass:"image__item img img-circle profile-img",attrs:{"data-url":t.userinfo.photo,alt:"user profile"}})],1)]),t._v(" "),i("div",{staticClass:"col-lg-10"},[i("div",{staticClass:"username text-left"},[i("h3",[t._v(t._s(t.userinfo.name))]),t._v(" "),i("p",[t._v(t._s(t.userinfo.city)+" "+t._s(t.userinfo.country))])]),t._v(" "),i("div",{staticClass:"row text-left"},[i("div",{staticClass:"col-lg-5"},[i("div",{staticClass:"userinfo"},[i("div",{staticClass:"userinfoFirst"},[t.userinfo.father_name?i("p",[t._v("Father Name")]):t._e(),t._v(" "),i("p",{staticClass:"bottom_text"},[t._v(t._s(t.userinfo.father_name))])]),t._v(" "),i("div",{staticClass:"userinfoSecond"},[i("p",[t._v("User Type")]),t._v(" "),i("p",{staticClass:"bottom_text"},[t._v(t._s(t.userinfo.user_profession))])])])]),t._v(" "),i("div",{staticClass:"col-lg-7"},[i("div",{staticClass:"userinfo"},[i("div",{staticClass:"userinfoFirst"},[i("p",[t._v("User Id")]),t._v(" "),i("p",{staticClass:"bottom_text"},[t._v(t._s(t.userinfo.email))])]),t._v(" "),i("div",{staticClass:"userinfoSecond"},[i("p",[t._v("Mobile Number")]),t._v(" "),i("p",{staticClass:"bottom_text"},[t._v(t._s(t.userinfo.phone_no))])])])])])])]):t._e(),t._v(" "),i("a",{staticClass:"logout",attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")])])])}),[],!1,null,null,null);s.a=o.exports},25:function(t,s,i){"use strict";var a=i(12),e={name:"UpcomingTourCarousel",components:{VueSlickCarousel:i.n(a).a},props:{upcoming_list:{required:!0}},data:function(){return{settings:{dots:!0,infinite:!1,speed:500,slidesToShow:3,slidesToScroll:3,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}}}},o=i(0),r=Object(o.a)(e,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.upcoming_list.length>0?i("div",{staticClass:"dashboard-body-part-two-2"},[i("VueSlickCarousel",t._b({attrs:{dots:!0}},"VueSlickCarousel",t.settings,!1),t._l(t.upcoming_list,(function(s){return i("div",{key:s.id,staticClass:"states_card card_scroll"},[i("div",{staticClass:"card"},[i("figure",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"image__wrapper card_image_ency"},[i("ImageSpinner",{staticClass:"image__spinner"}),t._v(" "),i("img",{staticClass:"image__item card-img-top",attrs:{"data-url":s.photo,alt:"image"}})],1),t._v(" "),i("div",{staticClass:"card-img-overlay text-center"},[i("p",{staticClass:"card-text"},[i("router-link",{staticClass:"text-white",attrs:{to:"/explore-detail/"+s.id}},[t._v(t._s(s.title))])],1)])])])})),0)],1):t._e()}),[],!1,null,null,null);s.a=r.exports},26:function(t,s,i){"use strict";var a=i(0),e=Object(a.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"dashboard-body-part-one"},[s("div",{attrs:{id:"rowbody"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col colbutton mb-10"},[s("router-link",{attrs:{to:"/tour-list"}},[s("div",{staticClass:"rowdata1"},[s("img",{attrs:{src:"assets/front/images/booked_320.png",loading:"lazy"}}),this._v(" "),s("p",{staticClass:"icon_text"},[this._v("Booked Itinerary")])])])],1),this._v(" "),this._m(0)])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col colbutton mb-10"},[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"rowdata2"},[s("img",{attrs:{src:"assets/front/images/payment_320.png",loading:"lazy"}}),this._v(" "),s("p",{staticClass:"icon_text"},[this._v("Payments")])])])])}],!1,null,null,null);s.a=e.exports},260:function(t,s,i){"use strict";i.r(s);var a=i(19),e=i(24),o=i(26),r=i(25),n={name:"DashboardTeacher",components:{"user-info-card":e.a,"booked-tour-button":o.a,"upcoming-tour-crasousel":r.a},mixins:[a.a]},l=i(0),c=Object(l.a)(n,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.valid?i("div",[i("user-info-card",{attrs:{userinfo:t.userinfo}}),t._v(" "),i("div",{staticClass:"container"},[i("booked-tour-button"),t._v(" "),i("h5",{staticClass:"title_section"},[t._v("Upcoming Event")]),t._v(" "),i("upcoming-tour-crasousel",{attrs:{upcoming_list:t.upcoming_list}}),t._v(" "),i("h5",{staticClass:"title_section"},[t._v("\n      Popular Destination\n      "),i("router-link",{staticClass:"view_link",attrs:{to:"/explore-list"}},[t._v("View more")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)],1)],1):t._e()}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"popular_destination"},[s("div",{staticClass:"row"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"advertismentpart"},[s("img",{attrs:{src:"https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/make-a-twitch-banner2/Twitch-Banner-Blue-1024x324.png",loading:"lazy"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"booksection"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-2"}),t._v(" "),i("div",{staticClass:"col-sm-8"},[i("div",{staticClass:"row",attrs:{id:"data"}},[i("div",{staticClass:"col"},[i("a",{attrs:{href:"#"}},[i("img",{attrs:{src:"assets/front/images/ebook.png",loading:"lazy"}}),t._v(" "),i("p",[t._v("E-Book")])])]),t._v(" "),i("div",{staticClass:"col"},[i("a",{attrs:{href:"#"}},[i("img",{attrs:{src:"assets/front/images/quiz.png",loading:"lazy"}}),t._v(" "),i("p",[t._v("Quiz")])])]),t._v(" "),i("div",{staticClass:"col"},[i("a",{attrs:{href:"#"}},[i("img",{attrs:{src:"assets/front/images/feedback.png",loading:"lazy"}}),t._v(" "),i("p",[t._v("Feedback")])])])])]),t._v(" "),i("div",{staticClass:"col-sm-2"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{staticClass:"title_section"},[this._v("\n      Recent Search\n      "),s("a",{staticClass:"view_link",attrs:{href:"#"}},[this._v("View More")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"resent_search"},[s("div",{staticClass:"row"})])}],!1,null,null,null);s.default=c.exports}}]);