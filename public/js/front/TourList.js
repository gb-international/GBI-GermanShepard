(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/TourList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/TourList.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/tour/TourList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tour_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tour-card */ "./resources/js/front/pages/user/tour/tour-card.vue");
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
  name: "Tour-list",
  components: {
    tourcard: _tour_card__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      tours: [],
      formShow: false,
      userinfo: "",
      travel_code: ""
    };
  },
  mounted: function mounted() {
    if (this.$cookies.get('access_token') == null) {
      this.$router.push("/");
    }

    this.userData();
    this.tourListData();
  },
  methods: {
    tourListData: function tourListData() {
      var _this = this;

      var data = [];
      this.$api.POST("/api/tour-list", []).then(function (response) {
        if (response.length == 0) {
          _this.formShow = true;
        } else {
          _this.tours = response;
        }
      });

      if (this.tours.length == 0) {
        this.formShow = false;
      }
    },
    UserTourSave: function UserTourSave() {
      var _this2 = this;

      var data = {
        travel_code: this.travel_code
      };
      this.$api.POST("/api/tour-travel-save", data).then(function (response) {
        // this.alldata = response.data;
        if (response == "error") {
          _this2.$swal.fire({
            icon: "error",
            title: "Try again",
            text: "Please enter valid travel code!"
          });
        } else {
          _this2.$swal.fire("Valid Code", "Check your tour details.", "success");

          _this2.tourListData();
        }
      })["catch"](function (error) {
        _this2.handleError(error);
      });
    },
    userData: function userData() {
      this.userinfo = this.$cookies.get('user');

      if (this.userinfo.status == 0) {
        this.$router.push("/user-information");
        return false;
      }

      if (this.userinfo.change_password == 0) {
        this.$swal.fire("warning", "Please change your password for security purpose !!! <br>", "warning");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/tour-card.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/tour/tour-card.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: ["tour", "userinfo"],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/TourList.vue?vue&type=template&id=4db13818&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/tour/TourList.vue?vue&type=template&id=4db13818& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row text-right" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-info float-right mt-2",
          attrs: { "data-toggle": "modal", "data-target": "#codeModal" }
        },
        [_vm._v("Add Tour Code")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "modal fade", attrs: { id: "codeModal" } }, [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-body" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("×")]
              ),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "form",
                  attrs: { method: "post" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.UserTourSave()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "tour_code" } }, [
                      _vm._v("Travel Code")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.travel_code,
                          expression: "travel_code"
                        }
                      ],
                      staticClass: "form-control input-border",
                      attrs: {
                        type: "text",
                        placeholder: "Enter travel code",
                        required: ""
                      },
                      domProps: { value: _vm.travel_code },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.travel_code = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _vm._m(0)
                ]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.tours
      ? _c(
          "div",
          _vm._l(_vm.tours, function(tour) {
            return _c(
              "div",
              { key: tour.id, staticClass: "row" },
              [
                _c("tourcard", {
                  attrs: { tour: tour, userinfo: _vm.userinfo }
                })
              ],
              1
            )
          }),
          0
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "button",
        { staticClass: "btn profile_button", attrs: { type: "submit" } },
        [_vm._v("Save")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/tour-card.vue?vue&type=template&id=1c848173&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/tour/tour-card.vue?vue&type=template&id=1c848173& ***!
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
  return _c("div", { staticClass: "col-md-12" }, [
    _c(
      "div",
      {
        staticClass: "bg-cover text-white tour_list_card mt-3",
        style: {
          backgroundImage:
            "url('/uploadimage/" + _vm.tour.tour.itinerary.detail_photo + "')"
        }
      },
      [
        _c("div", { staticClass: "container pt-4 font-weight-bold" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-8" }, [
              _c("p", { staticClass: "font-italic" }, [
                _c("span", { staticClass: "display-4 font-weight-normal" }, [
                  _vm._v("Tour to")
                ]),
                _vm._v(" "),
                _c("small", [
                  _vm._v(
                    "(" +
                      _vm._s(_vm.tour.tour.tour_start_date) +
                      " - " +
                      _vm._s(_vm.tour.tour.tour_end_date) +
                      ")"
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "lead font-weight-normal" }, [
                _vm._v(_vm._s(_vm.tour.tour.itinerary.title))
              ])
            ]),
            _vm._v(" "),
            _vm.tour.payment == null || _vm.tour.payment.status != "success"
              ? _c(
                  "div",
                  { staticClass: "col-sm-4 text-center mb-10 mt-5" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-light",
                        attrs: { to: "/tour-payment/" + _vm.tour.tour.tour_id }
                      },
                      [_vm._v("PAY NOW")]
                    )
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.userinfo.user_profession == "teacher"
            ? _c("div", { staticClass: "row text-center" }, [
                _c(
                  "div",
                  { staticClass: "col p-0" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { to: "/tour-detail/" + _vm.tour.tour.tour_id }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "text-center bg-transparent-card p-t-15 pb-15 text-white"
                          },
                          [
                            _c("img", {
                              staticClass: "w-20 mr-1",
                              attrs: { src: "/images/icons/viewitinerary.png" }
                            }),
                            _vm._v("View Itinerary\n            ")
                          ]
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col p-0" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { to: "/group-member/" + _vm.tour.tour.tour_id }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "text-cente bg-transparent-card p-t-15 pb-15 ml-1 text-white"
                          },
                          [
                            _c("img", {
                              staticClass: "w-20 mr-1",
                              attrs: { src: "/images/icons/viewmemberlist.png" }
                            }),
                            _vm._v(" Group Members\n            ")
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.userinfo.user_profession == "student"
            ? _c("div", { staticClass: "row text-center" }, [
                _c(
                  "div",
                  { staticClass: "col p-0" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { to: "/tour-detail/" + _vm.tour.tour.tour_id }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "text-center bg-transparent-card p-t-15 pb-15 text-white"
                          },
                          [
                            _c("img", {
                              staticClass: "w-20 mr-1",
                              attrs: { src: "/images/icons/viewitinerary.png" }
                            }),
                            _vm._v(" View Itinerary\n            ")
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/pages/user/tour/TourList.vue":
/*!*********************************************************!*\
  !*** ./resources/js/front/pages/user/tour/TourList.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TourList_vue_vue_type_template_id_4db13818___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TourList.vue?vue&type=template&id=4db13818& */ "./resources/js/front/pages/user/tour/TourList.vue?vue&type=template&id=4db13818&");
/* harmony import */ var _TourList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TourList.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/tour/TourList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TourList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TourList_vue_vue_type_template_id_4db13818___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TourList_vue_vue_type_template_id_4db13818___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/tour/TourList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/tour/TourList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/front/pages/user/tour/TourList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TourList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/TourList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/tour/TourList.vue?vue&type=template&id=4db13818&":
/*!****************************************************************************************!*\
  !*** ./resources/js/front/pages/user/tour/TourList.vue?vue&type=template&id=4db13818& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourList_vue_vue_type_template_id_4db13818___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TourList.vue?vue&type=template&id=4db13818& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/TourList.vue?vue&type=template&id=4db13818&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourList_vue_vue_type_template_id_4db13818___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourList_vue_vue_type_template_id_4db13818___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/pages/user/tour/tour-card.vue":
/*!**********************************************************!*\
  !*** ./resources/js/front/pages/user/tour/tour-card.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tour_card_vue_vue_type_template_id_1c848173___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tour-card.vue?vue&type=template&id=1c848173& */ "./resources/js/front/pages/user/tour/tour-card.vue?vue&type=template&id=1c848173&");
/* harmony import */ var _tour_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tour-card.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/tour/tour-card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tour_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tour_card_vue_vue_type_template_id_1c848173___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tour_card_vue_vue_type_template_id_1c848173___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/tour/tour-card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/tour/tour-card.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/front/pages/user/tour/tour-card.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./tour-card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/tour-card.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/tour/tour-card.vue?vue&type=template&id=1c848173&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/front/pages/user/tour/tour-card.vue?vue&type=template&id=1c848173& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_card_vue_vue_type_template_id_1c848173___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./tour-card.vue?vue&type=template&id=1c848173& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/tour/tour-card.vue?vue&type=template&id=1c848173&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_card_vue_vue_type_template_id_1c848173___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tour_card_vue_vue_type_template_id_1c848173___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);