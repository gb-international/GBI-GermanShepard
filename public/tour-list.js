webpackJsonp([5],{

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1049);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("2596c5d6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c548480\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tour-list.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c548480\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tour-list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n.main-head[data-v-3c548480]{\n  text-decoration: underline;\n}\n.description[data-v-3c548480]{\n  width: 100%;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        headers: { Authorization: 'Bearer ' + localStorage.getItem("access_token") } }).then(function (response) {
        _this.alldata = response.data;
        console.log(response);
        if (response.data.length == 0) {
          $("#tourModel").click();
        } else {
          _this.alldata = response.data;
          _this.itineraryData = response.data[0].itinerary;
          _this.hotelData = response.data[0].bookedhotels;
        }
      }).catch(function (error) {
        _this.handleError(error);
      });
    },
    UserTourSave: function UserTourSave() {
      var _this2 = this;

      var data = { 'travel_code': this.form.travel_code };
      axios.post("/api/tour-travel-save", data, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem("access_token") } }).then(function (response) {
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
      }).catch(function (error) {
        _this2.handleError(error);
      });
    }
  }
});

/***/ }),

/***/ 1051:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { attrs: { id: "itinerary_detail_list" } }, [
      _vm.alldata.length
        ? _c("div", { staticClass: "mb-35", attrs: { id: "roadmap" } }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6 offset-md-2" }, [
                _c("h4", [_vm._v("TOUR PATH")]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "timeline" },
                  _vm._l(_vm.itineraryData.itinerarydays, function(data) {
                    return _c("li", [
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
                      _c("span", { staticClass: "float-right" }, [
                        _vm._v("Day " + _vm._s(data.day))
                      ]),
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
            _c("div", { staticClass: "airline-section mb-35" }, [
              _c("h3", { staticClass: "text-center mb-35" }, [
                _vm._v("AIRLINES DETAILS")
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
            ])
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
                    _vm._m(1),
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
                    _vm._m(2)
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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c548480", module.exports)
  }
}

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1048)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(1050)
/* template */
var __vue_template__ = __webpack_require__(1051)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3c548480"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/front/user/Tour-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c548480", Component.options)
  } else {
    hotAPI.reload("data-v-3c548480", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});