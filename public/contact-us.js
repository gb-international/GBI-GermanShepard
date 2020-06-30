(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/ContactUs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/ContactUs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ContactUs",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    HasError: vform__WEBPACK_IMPORTED_MODULE_0__["HasError"]
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        name: '',
        email: '',
        mobile: '',
        messagecon: ''
      })
    };
  },
  methods: {
    sendmail: function sendmail() {
      this.form.post('/api/contact-us/send').then(function (response) {
        swal({
          text: 'Thank you for contacting us!',
          width: 300
        });
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/ContactUs.vue?vue&type=template&id=4ccde2dd&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/ContactUs.vue?vue&type=template&id=4ccde2dd& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { attrs: { id: "contactus" } },
    [
      _c("vue-headful", {
        attrs: {
          title: "GBI Contact Us ",
          description:
            "Connect With GB International for organizing your educational travel plans any where any time",
          keyword:
            "@GoWithGBI,GB International,Connect With GB International,Email Us,Talk To Us,Need a travel solution",
          url: "https://www.gowithgbi.com/contact-us",
          ogLocale: "en_US",
          lang: "en_US,en_UK"
        }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("main", [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12 p-t-15" }, [
            _c("article", { staticClass: "container contactus" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-6" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("h2", [_vm._v("HEAD OFFICE")]),
                    _vm._v(" "),
                    _c("table", { staticClass: "table" }, [
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [
                            _c(
                              "figure",
                              {
                                directives: [
                                  { name: "lazyload", rawName: "v-lazyload" }
                                ],
                                staticClass: "image__wrapper"
                              },
                              [
                                _c("ImageSpinner", {
                                  staticClass: "image__spinner"
                                }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "image__item",
                                  attrs: {
                                    "data-url":
                                      "assets/front/images/address_icon.png",
                                    alt: "address"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "G-32,DDA Commercial Complex, Sheikh Sarai Phase-1, New Delhi 110017"
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [
                            _c(
                              "figure",
                              {
                                directives: [
                                  { name: "lazyload", rawName: "v-lazyload" }
                                ],
                                staticClass: "image__wrapper"
                              },
                              [
                                _c("ImageSpinner", {
                                  staticClass: "image__spinner"
                                }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "image__item",
                                  attrs: {
                                    "data-url":
                                      "assets/front/images/phone_icon.png",
                                    alt: "address"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(1)
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [
                            _c(
                              "figure",
                              {
                                directives: [
                                  { name: "lazyload", rawName: "v-lazyload" }
                                ],
                                staticClass: "image__wrapper"
                              },
                              [
                                _c("ImageSpinner", {
                                  staticClass: "image__spinner"
                                }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "image__item ic-mail",
                                  attrs: {
                                    "data-url":
                                      "assets/front/images/email_icon.png",
                                    alt: "address"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(2)
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c("table", { staticClass: "table" }, [
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [
                            _c(
                              "figure",
                              {
                                directives: [
                                  { name: "lazyload", rawName: "v-lazyload" }
                                ],
                                staticClass: "image__wrapper"
                              },
                              [
                                _c("ImageSpinner", {
                                  staticClass: "image__spinner"
                                }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "image__item ic-add",
                                  attrs: {
                                    "data-url":
                                      "assets/front/images/address_icon.png",
                                    alt: "address"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "302, Zeenath Residency Srinagar Colony, Plot #29, Hyderabad - 500073 Andhra Pradesh"
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [
                            _c(
                              "figure",
                              {
                                directives: [
                                  { name: "lazyload", rawName: "v-lazyload" }
                                ],
                                staticClass: "image__wrapper"
                              },
                              [
                                _c("ImageSpinner", {
                                  staticClass: "image__spinner"
                                }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "image__item ic-cal-re",
                                  attrs: {
                                    "data-url":
                                      "assets/front/images/phone_icon.png",
                                    alt: "number"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(4)
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(5)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-6" }, [
                  _c("article", { staticClass: "contact-form" }, [
                    _vm._m(6),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        attrs: { role: "form", enctype: "multipart/form-data" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.sendmail()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-fullwidth" }, [
                          _c("label", { staticClass: "lable-title" }, [
                            _vm._v("Name")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.name,
                                expression: "form.name"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("name")
                            },
                            attrs: {
                              type: "text",
                              id: "name",
                              placeholder: "Name",
                              name: "name"
                            },
                            domProps: { value: _vm.form.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "name", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-fullwidth" }, [
                          _c("label", { staticClass: "lable-title" }, [
                            _vm._v("E-Mail")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.email,
                                expression: "form.email"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("email")
                            },
                            attrs: {
                              type: "text",
                              id: "email",
                              placeholder: "Email",
                              name: "email"
                            },
                            domProps: { value: _vm.form.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "email", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-fullwidth" }, [
                          _c("label", { staticClass: "lable-title" }, [
                            _vm._v("Mobile")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.mobile,
                                expression: "form.mobile"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("mobile")
                            },
                            attrs: {
                              type: "text",
                              id: "mobile",
                              placeholder: "Mobile",
                              name: "mobile"
                            },
                            domProps: { value: _vm.form.mobile },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "mobile",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-fullwidth" }, [
                          _c("label", { staticClass: "lable-title" }, [
                            _vm._v("Message")
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.messagecon,
                                expression: "form.messagecon"
                              }
                            ],
                            staticClass:
                              "form-control { 'is-invalid': form.errors.has('messagecon') }",
                            attrs: {
                              id: "messagecon",
                              name: "messagecon",
                              rows: "5",
                              cols: "40",
                              placeholder: "Message....."
                            },
                            domProps: { value: _vm.form.messagecon },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "messagecon",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _vm._m(7)
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "clear" })
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text_on_image" }, [
      _c("section", { staticClass: "banner-block contact_us_banner" }),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("p", { staticClass: "heading" }, [_vm._v("CONTACT US")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _vm._v("011-26017120, 26011683 ,"),
      _c("br"),
      _vm._v(" +91 9810055102")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _vm._v("info@gbinternational.in"),
      _c("br"),
      _vm._v("reservations@gbinternational.in")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "headline" }, [
      _c("h2", [_vm._v("REGIONAL OFFICE")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _vm._v("+91 9717922240,"),
      _c("br"),
      _vm._v(" +91 9810055102")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12" }, [
      _c("iframe", {
        staticStyle: { border: "0" },
        attrs: {
          src:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1110823555123!2d77.22139051508042!3d28.536380682455928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2214a7825c5%3A0xbef6ae1702026f1c!2sGB+International!5e0!3m2!1sen!2sin!4v1554198180729!5m2!1sen!2sin",
          width: "100%",
          height: "190",
          frameborder: "0",
          loading: "lazy",
          allowfullscreen: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title-contact" }, [
      _c("h2", [_vm._v("Contact Us")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-fullwidth alignbtn" }, [
      _c("input", {
        attrs: { type: "submit", value: "Submit", name: "submit" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/front/ContactUs.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/front/ContactUs.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactUs_vue_vue_type_template_id_4ccde2dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=template&id=4ccde2dd& */ "./resources/js/components/front/ContactUs.vue?vue&type=template&id=4ccde2dd&");
/* harmony import */ var _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUs.vue?vue&type=script&lang=js& */ "./resources/js/components/front/ContactUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactUs_vue_vue_type_template_id_4ccde2dd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactUs_vue_vue_type_template_id_4ccde2dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/ContactUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/ContactUs.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/front/ContactUs.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/ContactUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/ContactUs.vue?vue&type=template&id=4ccde2dd&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/front/ContactUs.vue?vue&type=template&id=4ccde2dd& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_4ccde2dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUs.vue?vue&type=template&id=4ccde2dd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/ContactUs.vue?vue&type=template&id=4ccde2dd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_4ccde2dd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_template_id_4ccde2dd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);