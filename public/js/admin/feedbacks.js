(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/feedbacks"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//import pagination  from 'laravel-vue-pagination';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FeedbackList",
  components: {//'pagination':pagination,
  },
  data: function data() {
    return {
      filter: '',
      perPage: '',
      options: [],
      currentItem: null,
      currentPage: 1
    };
  },
  mounted: function mounted() {
    this.getitems(this.currentPage);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['items'])),
  methods: {
    getitems: function getitems(page) {
      this.$store.dispatch('getItems', '/feedbacks/all/?page=' + page);
    },
    getoldItems: function getoldItems(page) {
      this.$store.dispatch('getItems', '/feedbacks/old/?page=' + page);
    },
    selectMail: function selectMail(item) {
      this.currentItem = item;
      this.currentItem.email_s = '<' + item.email + '>';
      this.currentItem.admin_email = '<admin@gbinternational.in>';
    },
    redirFeedbackLink: function redirFeedbackLink() {
      this.$router.push('/send-feedback-link');
    }
  },
  filters: {
    ratingFilter: function ratingFilter(val) {
      if (val < 3) {
        return 'Not Good';
      } else if (val < 5) {
        return 'OK';
      } else if (val < 7) {
        return 'Good';
      } else if (val < 9) {
        return 'Very Good';
      } else if (val === 9 || val === 10) {
        return 'Excellent';
      }
    },
    ratingFilter2: function ratingFilter2(val) {
      if (val < 3) {
        return 'Not Likely';
      } else if (val < 5) {
        return 'Maybe';
      } else if (val < 7) {
        return 'Quite Likely';
      } else if (val < 9) {
        return 'Yes, Definitely';
      } else if (val === 9 || val === 10) {
        return 'Absolutely';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*[data-v-9fb58476] {\r\n  box-sizing: border-box;\r\n  outline: none;\n}\nbody[data-v-9fb58476] {\r\n  margin: 0;\r\n  font-family: Sans-serif;\n}\n.feedback-full[data-v-9fb58476] {\r\n  background-color: #f2f3f7;\r\n  width: 100%;\r\n  padding: 8px 30px;\r\n  display: flex;\r\n  flex-direction: column;\n}\n.feedback-body[data-v-9fb58476] {\r\n  flex: 1;\r\n  display: flex;\n}\n.feedback-container[data-v-9fb58476] {\r\n  height: 100%;\r\n  display: flex;\n}\n.mail-left-side[data-v-9fb58476] {\r\n  width: 40%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  padding: 20px 0px 5px 0px;\n}\n.mail-card[data-v-9fb58476] {\r\n  background-color: #dad7d79c;\r\n  border-radius: 21px;\r\n  margin-top: 5px;\r\n  margin-bottom: 15px;\r\n  padding: 15px 15px 15px 15px;\r\n  transition: 0.3s;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n}\n.mail-card[data-v-9fb58476]:hover {\r\n  box-shadow: none;\n}\n.mail-names[data-v-9fb58476] {\r\n  color: #000000b8;\r\n  font-size: 16px;\r\n  font-weight: 500;\n}\n.mails[data-v-9fb58476] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\n}\n.mail-info[data-v-9fb58476] {\r\n  margin: 2px 65px;\r\n  margin-left: 0px;\r\n  font-weight: 500;\r\n  font-size: 12.5px;\r\n  color: grey;\n}\n.mail-info p[data-v-9fb58476] {\r\n margin-top: -2.5px;\r\n margin-bottom: 6px;\r\n font-size: 15px;\r\n font-weight: 600;\n}\n.date[data-v-9fb58476] {\r\n  color: grey;\r\n  float: right;\r\n  font-size: 12px;\r\n  font-weight: 500;\n}\n.mail-right-side[data-v-9fb58476] {\r\n  margin-left: 35px;\r\n  flex: 1;\n}\n.mail-right-body[data-v-9fb58476]{\r\n  background-color: #e1e1e1e1;\r\n  position: relative;\r\n  padding: 22px 20px 20px 20px;\r\n  border-radius: 18px;\r\n  font-size: 16px;\r\n  padding-bottom: 150px;\r\n  margin: 20px 10px;\r\n  color: #000000b8;\n}\n.message-body[data-v-9fb58476] {\r\n  overflow: auto;\r\n  height: 600px;\r\n  width: 100%;\r\n  margin-top: 18px;\r\n  color: black;\n}\n.message-title[data-v-9fb58476] {\r\n  display: flex;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: grey;\n}\n.message-title b[data-v-9fb58476]{\r\n  font-size: 14px;\r\n  padding-left: 5px;\r\n  color: #000000b8;\r\n  font-weight: 700;\n}\n.message-tour-info[data-v-9fb58476]{\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: #7f7a7a;\r\n  margin-bottom: 21px;\n}\n.mail-right-top[data-v-9fb58476]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  margin-left: 10px;\n}\n.cButton[data-v-9fb58476] {\r\n  border-radius: 3px;\r\n  border: 1px;\r\n  border-radius: 100px;\r\n  outline: none;\n}\n.replyButton[data-v-9fb58476] {\r\n  padding: 12px 38px;\r\n  margin-top: 20px;\r\n  color: white;\r\n  font-size: 19px !important;\r\n  font-weight: 600;\r\n  font-family: Hawaii 5-0, sans-serif;\r\n  background-color: #3ebee4;\n}\n.sendLinkButton[data-v-9fb58476]{\r\n  padding: 7px 38px;\r\n  margin-top: 12px;\r\n  color: #3ebee4;\r\n  font-size: 17px !important;\r\n  font-weight: 600;\r\n  font-family: Hawaii 5-0, sans-serif;\r\n  background-color: #f4f6f9;\r\n  border: solid 2px #3ebee4;\n}\n.attachIcon[data-v-9fb58476]{\r\n  font-size: 32px; \r\n  padding-right: 10px; \r\n  font-weight: 300; \r\n  color: grey;\n}\n.filter-dd[data-v-9fb58476]{\r\n  border-radius: 10px; \r\n  margin-left: 30px;\n}\n.filter-dd2[data-v-9fb58476]{\r\n  border-radius: 10px;\n}\n.arrow-buttons[data-v-9fb58476]{\r\n  padding: 5px 20px;\r\n  border: none;\r\n  background-color: #dad7d79c;\r\n  margin-left: 10px;\n}\n.mail-left-top[data-v-9fb58476]{\r\n  display: flex; \r\n  flex-direction: row; \r\n  justify-content: space-between;\r\n  margin-top: 7px;\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n  margin-bottom: 15px;\n}\n.bottom-items[data-v-9fb58476]{\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: 20px;\n}\n[data-v-9fb58476]::-webkit-scrollbar {\r\n  width: 10px;\n}\r\n\r\n/* Track */\n[data-v-9fb58476]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\n}\r\n\r\n/* Handle */\n[data-v-9fb58476]::-webkit-scrollbar-thumb {\r\n  background: #888;\n}\r\n\r\n/* Handle on hover */\n[data-v-9fb58476]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _vm.items && _vm.items.meta
    ? _c("div", { staticClass: "feedback-container" }, [
        _c("div", { staticClass: "feedback-full" }, [
          _c("div", { staticClass: "feedback-body" }, [
            _c(
              "div",
              { staticClass: "mail-left-side" },
              [
                _c(
                  "div",
                  { staticClass: "mail-left-top" },
                  [
                    _c("div", [
                      _c("button", {
                        staticClass: "fas fa-chevron-left arrow-buttons",
                        attrs: { disabled: _vm.currentPage === 1 },
                        on: {
                          click: function($event) {
                            return _vm.getitems((_vm.currentPage -= 1))
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("button", {
                        staticClass: "fas fa-chevron-right arrow-buttons",
                        attrs: {
                          disabled: _vm.items.meta.last_page <= _vm.currentPage
                        },
                        on: {
                          click: function($event) {
                            return _vm.getitems((_vm.currentPage += 1))
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "filter-dd2",
                        attrs: {
                          id: "dropdown",
                          size: "sm",
                          text:
                            "Page " +
                            _vm.currentPage +
                            " of " +
                            _vm.items.meta.last_page,
                          variant: ""
                        }
                      },
                      [
                        _c(
                          "b-dropdown-item",
                          {
                            staticStyle: { "font-size": "13px" },
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.getitems((_vm.currentPage = 1))
                              }
                            }
                          },
                          [_vm._v("Newest")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          {
                            staticStyle: { "font-size": "13px" },
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.getoldItems((_vm.currentPage = 1))
                              }
                            }
                          },
                          [_vm._v("Oldest")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._l(_vm.items.data, function(item) {
                  return _c(
                    "div",
                    {
                      key: item.id,
                      staticClass: "mail-card",
                      style: _vm.currentItem == item ? "box-shadow: none;" : "",
                      on: {
                        click: function($event) {
                          return _vm.selectMail(item)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "mails" }, [
                        _c(
                          "div",
                          {
                            staticClass: "mail-names",
                            staticStyle: { clear: "both" }
                          },
                          [
                            _c("b", [_vm._v(_vm._s(item.name))]),
                            _vm._v(
                              ", +91" + _vm._s(item.ph_no) + "\r\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "date" }, [
                          _vm._v(_vm._s(item.time))
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mail-info" },
                        [
                          _c("p", [_vm._v("From: " + _vm._s(item.email))]),
                          _vm._v(" "),
                          _c("p2", [
                            _vm._v(
                              _vm._s(item.days) +
                                " Tour to " +
                                _vm._s(item.itinerary_name)
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mail-right-side" }, [
              _c("div", { staticClass: "mail-right-top" }, [
                _c(
                  "button",
                  {
                    staticClass: "cButton sendLinkButton",
                    on: { click: _vm.redirFeedbackLink }
                  },
                  [_vm._v("Send Feedback Link")]
                )
              ]),
              _vm._v(" "),
              _vm.currentItem
                ? _c("div", { staticClass: "mail-right-body" }, [
                    _c("div", { staticClass: "message-title" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            _vm._s(_vm.currentItem.name.toUpperCase()) +
                              " " +
                              _vm._s(_vm.currentItem.email_s)
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _c("b", [
                          _vm._v("GBI " + _vm._s(_vm.currentItem.admin_email))
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _c("b", [_vm._v(_vm._s(_vm.currentItem.fullDate))]),
                        _vm._v(" "),
                        _c("br"),
                        _c("b", [
                          _vm._v("+91 " + _vm._s(_vm.currentItem.ph_no))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "message-body" }, [
                      _c("p", { staticClass: "message-tour-info" }, [
                        _vm._v(
                          _vm._s(_vm.currentItem.days) +
                            " Tour to " +
                            _vm._s(_vm.currentItem.itinerary_name)
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "font-size: 15px; color: black;" },
                        [
                          _c("b", [
                            _vm._v(
                              "Q1: Did you like the Itinerary of this trip?"
                            )
                          ]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "Ans: " +
                              _vm._s(
                                _vm._f("ratingFilter")(
                                  _vm.currentItem.trip_itenerary
                                )
                              ) +
                              "\r\n            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v("Q2: How Would You Rate Your Place Of Stay?")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "Ans: " +
                            _vm._s(
                              _vm._f("ratingFilter")(
                                _vm.currentItem.place_of_stay
                              )
                            ) +
                            "\r\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            "Q3: How Would You Rate the food quality and service?"
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "Ans: " +
                            _vm._s(
                              _vm._f("ratingFilter")(
                                _vm.currentItem.food_quality
                              )
                            ) +
                            "\r\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            "Q4: How were your Transportation and other arrangements?"
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "Ans: " +
                            _vm._s(
                              _vm._f("ratingFilter")(
                                _vm.currentItem.transport_arrangements
                              )
                            ) +
                            "\r\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            "Q5: How likely would you Recommend GB International To Others?"
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "Ans: " +
                            _vm._s(
                              _vm._f("ratingFilter2")(
                                _vm.currentItem.recommend_to_others
                              )
                            ) +
                            "\r\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            "Q6: Would you like to Travel with GBI again on a new Journey?"
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "Ans: " +
                            _vm._s(
                              _vm._f("ratingFilter2")(
                                _vm.currentItem.travel_again
                              )
                            ) +
                            "\r\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            "Q7: How hospitable was our GBI Escort who accompanied with you on this trip?"
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "Ans: " +
                            _vm._s(
                              _vm._f("ratingFilter")(
                                _vm.currentItem.escort_hospitality
                              )
                            ) +
                            "\r\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticStyle: { "margin-top": "25px" } }, [
                        _c("b", [_vm._v("Comment")]),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticStyle: {
                              float: "right",
                              "font-weight": "500",
                              "text-decoration": "underline"
                            },
                            attrs: { href: "#" }
                          },
                          [_vm._v("Post Comment")]
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          _vm._s(_vm.currentItem.comments) + "\r\n            "
                        )
                      ])
                    ])
                  ])
                : _c("div", {
                    staticClass: "mail-right-body",
                    staticStyle: { height: "80vh" }
                  })
            ])
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("\r\n              From: \r\n              "),
      _c("br"),
      _vm._v("To:\r\n              "),
      _c("br"),
      _vm._v("Date:\r\n              "),
      _c("br"),
      _vm._v("Mobile:\r\n             ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/feedback/feedback-list.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/pages/feedback/feedback-list.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-list.vue?vue&type=template&id=9fb58476&scoped=true& */ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true&");
/* harmony import */ var _feedback_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback-list.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& */ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _feedback_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9fb58476",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/feedback/feedback-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedback-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=style&index=0&id=9fb58476&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_style_index_0_id_9fb58476_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./feedback-list.vue?vue&type=template&id=9fb58476&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/feedback/feedback-list.vue?vue&type=template&id=9fb58476&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_feedback_list_vue_vue_type_template_id_9fb58476_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);