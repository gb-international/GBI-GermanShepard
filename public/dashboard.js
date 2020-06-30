(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/user/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_dist_vue_slick_carousel_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-slick-carousel/dist/vue-slick-carousel-theme.css */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css");
/* harmony import */ var vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_dist_vue_slick_carousel_theme_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // optional style for arrows & dots


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Dashboard",
  components: {
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      settings: {
        "dots": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "initialSlide": 0,
        "responsive": [{
          "breakpoint": 1024,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "infinite": true,
            "dots": true
          }
        }, {
          "breakpoint": 600,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "initialSlide": 2
          }
        }, {
          "breakpoint": 480,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1
          }
        }]
      },
      itineraryData: {},
      upcoming_list: [],
      userinfo: []
    };
  },
  created: function created() {
    if (this.$session.get('user_id') == null) {
      localStorage.removeItem('login');
    }

    this.userData();
    this.upComingData();
  },
  methods: {
    userData: function userData() {
      var _this = this;

      var data = [];
      axios.post("/api/details", data, {
        headers: {
          Authorization: "Bearer ".concat(this.$session.get("access_token"))
        }
      }).then(function (response) {
        _this.userinfo = response.data.success;

        if (_this.userinfo.status == 0) {
          _this.$router.push('/user-information');
        }
      })["catch"](function (error) {
        _this.handleError(error);
      });
    },
    // Upcoming data
    upComingData: function upComingData() {
      var _this2 = this;

      axios.get('/api/travel-program/upcoming-tour').then(function (response) {
        _this2.upcoming_list = response.data;
      });
    },
    getImgUrl: function getImgUrl(img) {
      return '/uploadimage/' + img;
    },
    logout: function logout() {
      var _this3 = this;

      axios.post('api/user-logout').then(function (response) {
        if (response.status === 302 || 401) {
          localStorage.setItem("login", "0");
          localStorage.setItem("access_token", "0");

          _this3.$session.destroy();

          _this3.$router.push('/');

          toast({
            type: 'success',
            title: 'You are logedout !!'
          });
        } else {// throw error and go to catch block
        }
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/user/Dashboard.vue?vue&type=template&id=73cb97a1&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/user/Dashboard.vue?vue&type=template&id=73cb97a1& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.userinfo
    ? _c("div", [
        _c("div", { staticClass: "user_dashboard_profile" }, [
          _c(
            "div",
            { staticClass: "container" },
            [
              _c(
                "router-link",
                { staticClass: "user_edit", attrs: { to: "/profile-edit" } },
                [_c("i", { staticClass: "fas fa-user-edit" })]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-2 text-center image" }, [
                  _c(
                    "figure",
                    {
                      directives: [{ name: "lazyload", rawName: "v-lazyload" }],
                      staticClass: "image__wrapper"
                    },
                    [
                      _c("ImageSpinner", { staticClass: "image__spinner" }),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "image__item img img-circle",
                        attrs: {
                          "data-url":
                            "/uploadimage/" + _vm.userinfo.information["photo"],
                          alt: "user profile"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-10" }, [
                  _c("div", { staticClass: "username" }, [
                    _c("h3", [_vm._v(_vm._s(_vm.userinfo.name))]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        _vm._s(_vm.userinfo.information["state"]) +
                          " " +
                          _vm._s(_vm.userinfo.information["country"])
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-5" }, [
                      _c("div", { staticClass: "userinfo" }, [
                        _c("div", { staticClass: "userinfoFirst" }, [
                          _vm.userinfo.information["client_type"] == "student"
                            ? _c("p", [_vm._v("School Name")])
                            : _vm.userinfo.information["client_type"] ==
                              "corporate"
                            ? _c("p", [_vm._v("Corporate Name")])
                            : _c("p", [_vm._v("Occupation Name")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "bottom_text" }, [
                            _vm._v(
                              _vm._s(_vm.userinfo.information["client_input"])
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "userinfoSecond" }, [
                          _c("p", [_vm._v("User Type")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "bottom_text" }, [
                            _vm._v(
                              _vm._s(_vm.userinfo.information["client_type"])
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-7" }, [
                      _c("div", { staticClass: "userinfo" }, [
                        _c("div", { staticClass: "userinfoFirst" }, [
                          _c("p", [_vm._v("User Id")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "bottom_text" }, [
                            _vm._v(_vm._s(_vm.userinfo["email"]))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "userinfoSecond" }, [
                          _c("p", [_vm._v("Mobile Number")]),
                          _vm._v(" "),
                          _c("p", { staticClass: "bottom_text" }, [
                            _vm._v(_vm._s(_vm.userinfo.information["phone_no"]))
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "logout",
                  attrs: { href: "#" },
                  on: { click: _vm.logout }
                },
                [_vm._v("Logout")]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "container", attrs: { id: "dashboard_body" } },
          [
            _c("div", { staticClass: "dashboard-body-part-one" }, [
              _c("div", { attrs: { id: "rowbody" } }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col" },
                    [
                      _c("router-link", { attrs: { to: "/tour-detail" } }, [
                        _c("div", { staticClass: "rowdata1" }, [
                          _c("img", {
                            attrs: {
                              src: "assets/front/images/booked_320.png",
                              loading: "lazy"
                            }
                          }),
                          _vm._v(" "),
                          _c("p", { staticClass: "icon_text" }, [
                            _vm._v("Booked Itinerary")
                          ])
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h5", { staticClass: "title_section" }, [
              _vm._v("Upcoming Event")
            ]),
            _vm._v(" "),
            _vm.upcoming_list.length > 0
              ? _c(
                  "div",
                  { staticClass: "dashboard-body-part-two-2" },
                  [
                    _c(
                      "VueSlickCarousel",
                      _vm._b(
                        { attrs: { arrows: true, dots: true } },
                        "VueSlickCarousel",
                        _vm.settings,
                        false
                      ),
                      _vm._l(_vm.upcoming_list, function(state) {
                        return _c(
                          "div",
                          { staticClass: "states_card card_scroll" },
                          [
                            _c("p"),
                            _c("div", { staticClass: "card" }, [
                              _c(
                                "figure",
                                {
                                  directives: [
                                    { name: "lazyload", rawName: "v-lazyload" }
                                  ],
                                  staticClass: "image__wrapper card_image_ency"
                                },
                                [
                                  _c("ImageSpinner", {
                                    staticClass: "image__spinner"
                                  }),
                                  _vm._v(" "),
                                  _c("img", {
                                    staticClass: "image__item card-img-top",
                                    attrs: {
                                      "data-url": "/uploadimage/" + state.photo,
                                      alt: "image"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "card-img-overlay text-center" },
                                [
                                  _c(
                                    "p",
                                    { staticClass: "card-text" },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "text-white",
                                          attrs: {
                                            to: "/explore-detail/" + state.id
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                 " +
                                              _vm._s(state.title)
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("p")
                          ]
                        )
                      }),
                      0
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "h5",
              { staticClass: "title_section" },
              [
                _vm._v("Popular Destination "),
                _c(
                  "router-link",
                  { staticClass: "view_link", attrs: { to: "/explore-list" } },
                  [_vm._v("View more")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _vm._m(5)
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("a", { attrs: { href: "#" } }, [
        _c("div", { staticClass: "rowdata2" }, [
          _c("img", {
            attrs: {
              src: "assets/front/images/payment_320.png",
              loading: "lazy"
            }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "icon_text" }, [_vm._v("Payments")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "popular_destination" }, [
      _c("div", { staticClass: "row" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "advertismentpart" }, [
      _c("img", {
        attrs: {
          src:
            "https://placeit-assets.s3-accelerate.amazonaws.com/landing-pages/make-a-twitch-banner2/Twitch-Banner-Blue-1024x324.png",
          loading: "lazy"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "booksection" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-2" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-8" }, [
          _c("div", { staticClass: "row", attrs: { id: "data" } }, [
            _c("div", { staticClass: "col" }, [
              _c("a", { attrs: { href: "#" } }, [
                _c("img", {
                  attrs: {
                    src: "assets/front/images/ebook.png",
                    loading: "lazy"
                  }
                }),
                _vm._v(" "),
                _c("p", [_vm._v("E-Book")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _c("a", { attrs: { href: "#" } }, [
                _c("img", {
                  attrs: {
                    src: "assets/front/images/quiz.png",
                    loading: "lazy"
                  }
                }),
                _vm._v(" "),
                _c("p", [_vm._v("Quiz")])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _c("a", { attrs: { href: "#" } }, [
                _c("img", {
                  attrs: {
                    src: "assets/front/images/feedback.png",
                    loading: "lazy"
                  }
                }),
                _vm._v(" "),
                _c("p", [_vm._v("Feedback")])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "title_section" }, [
      _vm._v("Recent Search "),
      _c("a", { staticClass: "view_link", attrs: { href: "#" } }, [
        _vm._v("View More")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "resent_search" }, [
      _c("div", { staticClass: "row" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/front/user/Dashboard.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/front/user/Dashboard.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_73cb97a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=73cb97a1& */ "./resources/js/components/front/user/Dashboard.vue?vue&type=template&id=73cb97a1&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/front/user/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_73cb97a1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_73cb97a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/user/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/user/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/front/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/user/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/user/Dashboard.vue?vue&type=template&id=73cb97a1&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/front/user/Dashboard.vue?vue&type=template&id=73cb97a1& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_73cb97a1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=73cb97a1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/user/Dashboard.vue?vue&type=template&id=73cb97a1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_73cb97a1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_73cb97a1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);