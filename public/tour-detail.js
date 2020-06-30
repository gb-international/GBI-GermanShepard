(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tour-detail"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/user/Tour-detail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/user/Tour-detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Tour-detail",
  data: function data() {
    return {
      max: 5,
      current: 3,
      oddclass: false,
      evenclass: true,
      itineraryData: {},
      hotelData: '',
      alldata: [],
      form: new Form({
        travel_code: ''
      })
    };
  },
  created: function created() {
    if (localStorage.getItem('login') == '0') {
      this.$router.push('/login');
    }

    this.tourListData();
  },
  methods: {
    dateFormat: function dateFormat(date) {
      return new Date(date).toDateString();
    },
    timeFormat: function timeFormat(date) {
      var str = new Date(date).toDateString();
      date = new Date(date);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return str + ' ' + strTime;
    },
    getRating: function getRating(current) {
      return current / this.max * 100;
    },
    integer: function integer(num) {
      return parseInt(num);
    },
    days: function days(date1, date2) {
      var date1 = new Date(date1);
      var date2 = new Date(date2);
      var diffTime = Math.abs(date2 - date1);
      var diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diff - 1;
    },
    tourListData: function tourListData() {
      var _this = this;

      var data = [];
      axios.post("/api/tour-list", data, {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem("access_token"))
        }
      }).then(function (response) {
        _this.alldata = response.data[0];

        if (response.data.length == 0) {
          $("#tourModel").click();
        } else {
          _this.alldata = response.data;
          _this.itineraryData = response.data[0].itinerary;
          _this.hotelData = response.data[0].bookedhotels;
          console.log(_this.alldata[0].bookedflights);
        }
      })["catch"](function (error) {
        _this.handleError(error);
      });
    },
    UserTourSave: function UserTourSave() {
      var _this2 = this;

      var data = {
        'travel_code': this.form.travel_code
      };
      axios.post("/api/tour-travel-save", data, {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem("access_token"))
        }
      }).then(function (response) {
        // this.alldata = response.data;
        if (response.data == 'error') {
          swal.fire({
            title: 'Try again',
            text: "Please enter valid travel code!",
            type: 'error'
          });
        } else {
          $("#tourModel").click();
          swal.fire({
            title: 'Welcome on your tour',
            type: 'success'
          });

          _this2.tourListData();
        }
      })["catch"](function (error) {
        _this2.handleError(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/user/Tour-detail.vue?vue&type=template&id=64b3f033&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/user/Tour-detail.vue?vue&type=template&id=64b3f033& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _c("div", { attrs: { id: "itinerary_detail_list" } }, [
      _vm.alldata.length
        ? _c("div", { staticClass: "mb-35 w-100", attrs: { id: "roadmap" } }, [
            _c("div", { staticClass: "row w-100" }, [
              _c("div", { staticClass: "col-md-6 offset-md-2" }, [
                _c("h4", [_vm._v("TOUR PATH")]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "timeline" },
                  _vm._l(_vm.itineraryData.itinerarydays, function(data) {
                    return _c("li", [
                      _c("span", { staticClass: "underline" }, [
                        _c("b", [_vm._v("Day " + _vm._s(data.day))])
                      ]),
                      _vm._v(" "),
                      data.day_source != data.day_destination
                        ? _c("span", [
                            _c("b", [
                              _vm._v(
                                _vm._s(data.day_source.toUpperCase()) +
                                  " - " +
                                  _vm._s(data.day_destination.toUpperCase())
                              )
                            ])
                          ])
                        : _c(
                            "a",
                            {
                              attrs: {
                                target: "_blank",
                                href: "https://www.totoprayogo.com/#"
                              }
                            },
                            [_vm._v(_vm._s(data.day_source.toUpperCase()))]
                          ),
                      _vm._v(" "),
                      _c("span", { staticClass: "float-right" }),
                      _vm._v(" "),
                      _c("p", {
                        domProps: { innerHTML: _vm._s(data.day_description) }
                      })
                    ])
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "hotel-section mb-35" }, [
              _c("h3", { staticClass: "text-center mb-35" }, [
                _vm._v("YOU WILL STAY HERE")
              ]),
              _vm._v(" "),
              _vm.hotelData
                ? _c(
                    "div",
                    { staticClass: "row justify-content-center" },
                    _vm._l(_vm.hotelData, function(hotel) {
                      return _c("div", { staticClass: "col-sm-4" }, [
                        _c("div", { staticClass: "hotel-card" }, [
                          _c("img", {
                            attrs: { src: "/images/hotel/1590495923.png" }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col hotel_info" }, [
                              _c("div", { staticClass: "rating-hotel" }, [
                                _c("p", [
                                  _c("b", [_vm._v("Hotel Name")]),
                                  _vm._v(" "),
                                  _c("label", [
                                    _c(
                                      "div",
                                      { staticClass: "star-rating" },
                                      [
                                        _vm._l(_vm.max, function(n) {
                                          return _c("span", [_vm._v("☆")])
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "star-rating__current",
                                            style: {
                                              width:
                                                _vm.getRating(
                                                  hotel.hotel.type
                                                ) + "%"
                                            }
                                          },
                                          _vm._l(
                                            _vm.integer(hotel.hotel.type),
                                            function(n) {
                                              return _c("span", [_vm._v("★")])
                                            }
                                          ),
                                          0
                                        )
                                      ],
                                      2
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(_vm._s(hotel.hotel.name)),
                                _c("label", [
                                  _c("b", [_vm._v("Check in date")]),
                                  _vm._v(
                                    ": " +
                                      _vm._s(_vm.dateFormat(hotel.check_in))
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _c("b", [_vm._v("Days stay")]),
                                _vm._v(
                                  " : " +
                                    _vm._s(
                                      _vm.days(hotel.check_in, hotel.check_out)
                                    ) +
                                    " "
                                ),
                                _c("label", [
                                  _c("b", [_vm._v("Check out date")]),
                                  _vm._v(
                                    ": " +
                                      _vm._s(_vm.dateFormat(hotel.check_out))
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm.alldata[0].bookedflights
              ? _c(
                  "div",
                  { staticClass: "airline-section mb-35" },
                  [
                    _c("h3", { staticClass: "text-center mb-35" }, [
                      _vm._v("AIRLINES DETAILS")
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _vm._l(_vm.alldata[0].bookedflights, function(air) {
                      return _c("div", [
                        _c("div", { staticClass: "row align-items-center" }, [
                          _c(
                            "div",
                            { staticClass: "col-md-3 col" },
                            [
                              _c("p", [
                                _c("b", { staticClass: "underline" }, [
                                  _vm._v(_vm._s(air.flight.code) + " ")
                                ]),
                                _c("b", { staticClass: "text-upper" }, [
                                  _vm._v(" " + _vm._s(air.source))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("P", [
                                _vm._v("took off from "),
                                _c("b", { staticClass: "text-info" }, [
                                  _vm._v(_vm._s(air.source))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(_vm._s(_vm.timeFormat(air.departure)))
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._m(1, true),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-3 col text-right" },
                            [
                              _c("p", [
                                _c("b", { staticClass: "underline" }, [
                                  _vm._v(_vm._s(air.flight.code))
                                ]),
                                _vm._v(" "),
                                _c("b", { staticClass: "text-upper" }, [
                                  _vm._v(" " + _vm._s(air.destination))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("P", [
                                _vm._v("took off from "),
                                _c("b", { staticClass: "text-info" }, [
                                  _vm._v(_vm._s(air.destination))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(_vm._s(_vm.timeFormat(air.arrival)))
                              ])
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("hr")
                      ])
                    })
                  ],
                  2
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3)
          ])
        : _c("div", { staticClass: "text-center" }, [
            _c(
              "a",
              {
                staticClass: "btn btn-info text-white float-right",
                attrs: {
                  "data-toggle": "modal",
                  id: "tourModel",
                  "data-target": "#tourCode"
                }
              },
              [_vm._v(" Enter Tour Code ")]
            ),
            _vm._v(" "),
            _c("h3", { staticClass: "text-center" }, [
              _vm._v("You Don't Have Active Tour")
            ])
          ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "tourCode",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "myModalLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
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
                    _vm._m(4),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
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
                              value: _vm.form.travel_code,
                              expression: "form.travel_code"
                            }
                          ],
                          staticClass: "form-control input-border",
                          attrs: {
                            type: "text",
                            placeholder: "Enter travel code",
                            required: ""
                          },
                          domProps: { value: _vm.form.travel_code },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "travel_code",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
                  ]
                )
              ])
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "things-to-carrry mb-35" }, [
      _c("h3", { staticClass: "text-center mb-35" }, [
        _vm._v("THINGS TO CARRY")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row align-items-center" }, [
        _c(
          "div",
          {
            staticClass:
              "col-md-4 col-sm-6 col-6 bottom-border border-right mb-bottom"
          },
          [
            _c("div", { staticClass: "item" }, [
              _c("img", {
                staticClass: "bottel",
                attrs: { src: "/images/tour/bottel.png" }
              }),
              _vm._v(" "),
              _c("p", [_vm._v("Water Bottel")])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "col-md-4 col-sm-6 col-6 bottom-border border-right mb-bottom"
          },
          [
            _c("div", { staticClass: "item text-center" }, [
              _c("img", {
                staticClass: "common shoes",
                attrs: { src: "/images/tour/shoes.png" }
              }),
              _vm._v(" "),
              _c("p", [_vm._v("Light Shoes")])
            ])
          ]
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "col-md-4 col-sm-6 col-6 bottom-border mb-bottom mb-right"
          },
          [
            _c("div", { staticClass: "item" }, [
              _c("img", {
                staticClass: "common",
                attrs: { src: "/images/tour/tourch.png" }
              }),
              _vm._v(" "),
              _c("p", [_vm._v("Tourch")])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-4 col-sm-6 col-6 border-right mb-bottom" },
          [
            _c("div", { staticClass: "item text-center" }, [
              _c("img", {
                staticClass: "common",
                attrs: { src: "/images/tour/towel.png" }
              }),
              _vm._v(" "),
              _c("p", [_vm._v("Towel")])
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-sm-6 col-6 border-right" }, [
          _c("div", { staticClass: "item" }, [
            _c("img", {
              staticClass: "common",
              attrs: { src: "/images/tour/umbrelaa.png" }
            }),
            _vm._v(" "),
            _c("p", [_vm._v("Umbrelaa")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4 col-sm-6 col-6" }, [
          _c("div", { staticClass: "item" }, [
            _c("img", {
              staticClass: "common",
              attrs: { src: "/images/tour/jacket.png" }
            }),
            _vm._v(" "),
            _c("p", [_vm._v("Jacket")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-6 col-sm-6 col-xm-12 order-xm-3" },
      [
        _c("i", { staticClass: "fas fa-plane-departure" }),
        _vm._v(" "),
        _c("div", { staticClass: "progress" }, [
          _c("div", {
            staticClass:
              "progress-bar progress-bar-striped progress-bar-animated",
            staticStyle: { width: "40%" }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "map-section mb-35" }, [
      _c("h3", { staticClass: "text-center mb-35" }, [_vm._v("LIVE LOCATION")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-3 card" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-9" }, [
          _c("iframe", {
            staticStyle: { border: "0" },
            attrs: {
              src:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73907005717!2d76.81307299667618!3d28.646677259922765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1590745497079!5m2!1sen!2sin",
              frameborder: "0",
              allowfullscreen: "",
              "aria-hidden": "false",
              tabindex: "0"
            }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "weather-section mb-35" }, [
      _c("h3", { staticClass: "text-center mb-35" }, [
        _vm._v("WEATHER REPORT")
      ]),
      _vm._v(" "),
      _c("iframe", {
        staticStyle: { border: "0" },
        attrs: {
          src:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73907005717!2d76.81307299667618!3d28.646677259922765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1590745497079!5m2!1sen!2sin",
          frameborder: "0",
          allowfullscreen: "",
          "aria-hidden": "false",
          tabindex: "0"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", id: "CloseModel", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Save")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/front/user/Tour-detail.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/front/user/Tour-detail.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tour_detail_vue_vue_type_template_id_64b3f033___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tour-detail.vue?vue&type=template&id=64b3f033& */ "./resources/js/components/front/user/Tour-detail.vue?vue&type=template&id=64b3f033&");
/* harmony import */ var _Tour_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tour-detail.vue?vue&type=script&lang=js& */ "./resources/js/components/front/user/Tour-detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tour_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tour_detail_vue_vue_type_template_id_64b3f033___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tour_detail_vue_vue_type_template_id_64b3f033___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/user/Tour-detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/user/Tour-detail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/front/user/Tour-detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tour-detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/user/Tour-detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/user/Tour-detail.vue?vue&type=template&id=64b3f033&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/front/user/Tour-detail.vue?vue&type=template&id=64b3f033& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_detail_vue_vue_type_template_id_64b3f033___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Tour-detail.vue?vue&type=template&id=64b3f033& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/user/Tour-detail.vue?vue&type=template&id=64b3f033&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_detail_vue_vue_type_template_id_64b3f033___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tour_detail_vue_vue_type_template_id_64b3f033___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);