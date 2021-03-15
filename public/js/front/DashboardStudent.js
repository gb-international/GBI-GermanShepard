(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/DashboardStudent"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/student/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_mixins_user_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/mixins/user/Dashboard */ "./resources/js/front/mixins/user/Dashboard.js");
/* harmony import */ var _front_components_user_UserinfoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/user/UserinfoCard */ "./resources/js/front/components/user/UserinfoCard.vue");
/* harmony import */ var _front_components_user_BookedTourButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/front/components/user/BookedTourButton */ "./resources/js/front/components/user/BookedTourButton.vue");
/* harmony import */ var _front_components_user_UpcomingCrasousel_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/front/components/user/UpcomingCrasousel.vue */ "./resources/js/front/components/user/UpcomingCrasousel.vue");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DashboardTeacher",
  components: {
    'user-info-card': _front_components_user_UserinfoCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    'booked-tour-button': _front_components_user_BookedTourButton__WEBPACK_IMPORTED_MODULE_2__["default"],
    'upcoming-tour-crasousel': _front_components_user_UpcomingCrasousel_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mixins: [_front_mixins_user_Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/Dashboard.vue?vue&type=template&id=77b8e7ab&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/student/Dashboard.vue?vue&type=template&id=77b8e7ab& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _vm.valid
    ? _c(
        "div",
        [
          _c("user-info-card", { attrs: { userinfo: _vm.userinfo } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container" },
            [
              _c("booked-tour-button"),
              _vm._v(" "),
              _c("h5", { staticClass: "title_section" }, [
                _vm._v("Upcoming Event")
              ]),
              _vm._v(" "),
              _c("upcoming-tour-crasousel", {
                attrs: { upcoming_list: _vm.upcoming_list }
              }),
              _vm._v(" "),
              _c(
                "h5",
                { staticClass: "title_section" },
                [
                  _vm._v("\n      Popular Destination\n      "),
                  _c(
                    "router-link",
                    {
                      staticClass: "view_link",
                      attrs: { to: "/explore-list" }
                    },
                    [_vm._v("View more")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4)
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = [
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
      _vm._v("\n      Recent Search\n      "),
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

/***/ "./resources/js/front/pages/user/student/Dashboard.vue":
/*!*************************************************************!*\
  !*** ./resources/js/front/pages/user/student/Dashboard.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_77b8e7ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=77b8e7ab& */ "./resources/js/front/pages/user/student/Dashboard.vue?vue&type=template&id=77b8e7ab&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/student/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_77b8e7ab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_77b8e7ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/student/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/student/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/front/pages/user/student/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/student/Dashboard.vue?vue&type=template&id=77b8e7ab&":
/*!********************************************************************************************!*\
  !*** ./resources/js/front/pages/user/student/Dashboard.vue?vue&type=template&id=77b8e7ab& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_77b8e7ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=77b8e7ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/Dashboard.vue?vue&type=template&id=77b8e7ab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_77b8e7ab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_77b8e7ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);