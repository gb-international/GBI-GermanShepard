webpackJsonp([24],{

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1004);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("5a43f981", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ccde2dd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContactUs.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4ccde2dd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ContactUs.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1005:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ContactUs",
  data: function data() {
    return {
      form: new Form({
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
        swal({ text: 'Thank you for contacting us!', width: 300 });
      }).catch(function () {});
    }
  }
});

/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

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
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4ccde2dd", module.exports)
  }
}

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1003)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(1005)
/* template */
var __vue_template__ = __webpack_require__(1006)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4ccde2dd"
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
Component.options.__file = "resources/js/components/front/ContactUs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ccde2dd", Component.options)
  } else {
    hotAPI.reload("data-v-4ccde2dd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});