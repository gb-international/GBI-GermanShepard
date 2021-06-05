(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/JoinOurTeam"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['text'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/AboutUs/JoinOurTeam.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/AboutUs/JoinOurTeam.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _front_components_layout_Heading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/layout/Heading.vue */ "./resources/js/front/components/layout/Heading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "JoinOurTeam",
  metaInfo: {
    title: "Join Our Team",
    meta: [{
      name: "description",
      content: "@GoWithGBI Lets travel together and make the world a better place .Join our brilliant minds"
    }, {
      name: "keywords",
      content: "@GoWithGBI,join our team,explore Your career with GBI,exciting journey,research oriented process,challenges,explore your travel instinct,discover ,travel passion,learn,explore,discover"
    }, {
      name: "url",
      content: "https://www.gowithgbi.com/about-us/join-our-team"
    }]
  },
  components: {
    HasError: vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    Heading: _front_components_layout_Heading_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        firstname: "",
        lastname: "",
        email: "",
        contactno: "",
        address: "",
        state: "",
        city: "",
        zipcode: "",
        postvancy: "",
        resume: "",
        filename: "",
        messagescon: ""
      }),
      positions: ["Business Development Executive (Delhi)", "Business Development Executive (Punjab)", "Business Development Executive (Hyderabad)", "Software Developer", "Business Lead Generation Executive"]
    };
  },
  methods: {
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;

      if (files[0].size > 2097152) {
        swal.fire("Alert!", "Resume size should not be more than 2 MB", "warning");
        return false;
      }

      if (!files.length) return;
      this.createImage(files[0]);
      var fileData = e.target.files[0];
      this.form.filename = fileData.name;
    },
    createImage: function createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.form.resume = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    sendmailResume: function sendmailResume() {
      var _this = this;

      this.form.post("/api/join-our-team/send").then(function (response) {
        _this.form.reset();

        _this.form.filename = "";

        _this.$swal.fire("Successfully Submited!", "Your resume has been sent to HR Deparment..", "success");
      })["catch"](function () {});
    } // end sendmailResume

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2& ***!
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
  return _c("h1", { staticClass: "gbi_main-heading pt-3 text-capitalize" }, [
    _vm._v("\n    " + _vm._s(_vm.text) + "\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/AboutUs/JoinOurTeam.vue?vue&type=template&id=068c2dbc&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/AboutUs/JoinOurTeam.vue?vue&type=template&id=068c2dbc& ***!
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
  return _c("div", { attrs: { id: "joinOurteam" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("main", [
      _c("section", [
        _c("article", { staticClass: "join-team" }, [
          _c(
            "div",
            { staticClass: "container pb-5" },
            [
              _c("heading", {
                staticClass: "text-center",
                attrs: { text: "Join Our Brilliant Minds" }
              }),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: {
                    role: "form",
                    method: "POST",
                    enctype: "multipart/form-data"
                  },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.sendmailResume()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.firstname,
                                expression: "form.firstname"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("firstname")
                            },
                            attrs: {
                              type: "text",
                              placeholder: "Enter first name"
                            },
                            domProps: { value: _vm.form.firstname },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "firstname",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "firstname" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.lastname,
                                expression: "form.lastname"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("lastname")
                            },
                            attrs: {
                              type: "text",
                              placeholder: "Enter last name"
                            },
                            domProps: { value: _vm.form.lastname },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "lastname",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "lastname" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
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
                              type: "email",
                              placeholder: "Enter Email"
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
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "email" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.contactno,
                                expression: "form.contactno"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("contactno")
                            },
                            attrs: {
                              type: "text",
                              placeholder: "Enter contactno"
                            },
                            domProps: { value: _vm.form.contactno },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "contactno",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "contactno" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.address,
                                expression: "form.address"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("address")
                            },
                            attrs: {
                              type: "text",
                              placeholder: "Enter address"
                            },
                            domProps: { value: _vm.form.address },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "address",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "address" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.state,
                                expression: "form.state"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("state")
                            },
                            attrs: { type: "text", placeholder: "Enter state" },
                            domProps: { value: _vm.form.state },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "state", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "state" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.city,
                                expression: "form.city"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("city")
                            },
                            attrs: { type: "text", placeholder: "Enter city" },
                            domProps: { value: _vm.form.city },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "city", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "city" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.zipcode,
                                expression: "form.zipcode"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("zipcode")
                            },
                            attrs: {
                              type: "text",
                              placeholder: "Enter zipcode"
                            },
                            domProps: { value: _vm.form.zipcode },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "zipcode",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "zipcode" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.postvancy,
                                  expression: "form.postvancy"
                                }
                              ],
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.form.errors.has("postvancy")
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "postvancy",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { value: "", default: "default" } },
                                [_vm._v("Select Post")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.positions, function(position) {
                                return _c(
                                  "option",
                                  {
                                    key: position,
                                    domProps: { value: position }
                                  },
                                  [_vm._v(_vm._s(position))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "postvancy" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c("div", { staticClass: "form-fullwidth" }, [
                        _c(
                          "div",
                          { staticClass: "upload-btn-wrapper" },
                          [
                            _c("button", { staticClass: "btn button3" }, [
                              _vm._v("Select File")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              class: {
                                "is-invalid": _vm.form.errors.has("resume")
                              },
                              attrs: {
                                name: "resume",
                                type: "file",
                                accept: ".pdf"
                              },
                              on: { change: _vm.onFileChange }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "resume" }
                            }),
                            _vm._v(" "),
                            _vm.form.filename
                              ? _c("span", [_vm._v(_vm._s(_vm.form.filename))])
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._m(1)
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.messagescon,
                                expression: "form.messagescon"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("messagescon")
                            },
                            attrs: {
                              rows: "4",
                              placeholder: "Write something.."
                            },
                            domProps: { value: _vm.form.messagescon },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "messagescon",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "messagescon" }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "career_banner text_on_image banner_bg" }, [
      _c("div", { staticClass: "content" }, [
        _c("p", { staticClass: "heading" }, [_vm._v("Join Our Team")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("small", [_vm._v("Please uplod PDF file only")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn profile_button",
          attrs: { type: "submit", value: "Submit" }
        },
        [_vm._v("\n                Submit\n              ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/components/layout/Heading.vue":
/*!**********************************************************!*\
  !*** ./resources/js/front/components/layout/Heading.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading.vue?vue&type=template&id=431e53a2& */ "./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&");
/* harmony import */ var _Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading.vue?vue&type=script&lang=js& */ "./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/layout/Heading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Heading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Heading.vue?vue&type=template&id=431e53a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/pages/AboutUs/JoinOurTeam.vue":
/*!**********************************************************!*\
  !*** ./resources/js/front/pages/AboutUs/JoinOurTeam.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JoinOurTeam_vue_vue_type_template_id_068c2dbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JoinOurTeam.vue?vue&type=template&id=068c2dbc& */ "./resources/js/front/pages/AboutUs/JoinOurTeam.vue?vue&type=template&id=068c2dbc&");
/* harmony import */ var _JoinOurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JoinOurTeam.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/AboutUs/JoinOurTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JoinOurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JoinOurTeam_vue_vue_type_template_id_068c2dbc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JoinOurTeam_vue_vue_type_template_id_068c2dbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/AboutUs/JoinOurTeam.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/AboutUs/JoinOurTeam.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/front/pages/AboutUs/JoinOurTeam.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JoinOurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./JoinOurTeam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/AboutUs/JoinOurTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JoinOurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/AboutUs/JoinOurTeam.vue?vue&type=template&id=068c2dbc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/front/pages/AboutUs/JoinOurTeam.vue?vue&type=template&id=068c2dbc& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JoinOurTeam_vue_vue_type_template_id_068c2dbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./JoinOurTeam.vue?vue&type=template&id=068c2dbc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/AboutUs/JoinOurTeam.vue?vue&type=template&id=068c2dbc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JoinOurTeam_vue_vue_type_template_id_068c2dbc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JoinOurTeam_vue_vue_type_template_id_068c2dbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);