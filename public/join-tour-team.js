(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["join-tour-team"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/JoinOurTeam.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/JoinOurTeam.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "JoinOurTeam",
  data: function data() {
    return {
      filename: '',
      form: new Form({
        firstname: '',
        lastname: '',
        email: '',
        contactno: '',
        address: '',
        state: '',
        city: '',
        zipcode: '',
        postvancy: '',
        resume: '',
        messagescon: ''
      })
    };
  },
  methods: {
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;

      if (files[0].size > 2097152) {
        swal.fire('Alert!', 'Resume size should not be more than 2 MB', 'warning');
        return false;
      }

      if (!files.length) return;
      this.createImage(files[0]);
      var fileData = event.target.files[0];
      this.filename = fileData.name;
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

      this.form.post('/api/join-our-team/send').then(function (response) {
        _this.form.reset();

        _this.filename = ''; // this.$router.push('/home')

        swal.fire('Successfully Submited!', 'Your resume has been sent to HR Deparment..', 'success');
      })["catch"](function () {});
    } // end sendmailResume

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/JoinOurTeam.vue?vue&type=template&id=f4b80604&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/JoinOurTeam.vue?vue&type=template&id=f4b80604& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "joinOurteam" } },
    [
      _c("vue-headful", {
        attrs: {
          title: "Join Our Team",
          description:
            "@GoWithGBI Lets travel together and make the world a better place .Join our brilliant minds ",
          keywords:
            "@GoWithGBI,join our team,explore Your career with GBI,exciting journey,research oriented process,challenges,explore your travel instinct,discover ,travel passion,learn,explore,discover",
          image: "",
          lang: "en_US",
          ogLocale: "en_US,en_UK",
          url: "https://www.gowithgbi.com/about-us/join-our-team"
        }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("main", [
        _c("section", [
          _c("article", { staticClass: "join-team" }, [
            _c("div", { staticClass: "container" }, [
              _c("h1", [_vm._v("JOIN OUR BRILLIANT MINDS")]),
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
                  _c(
                    "div",
                    { staticClass: "form-input" },
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
                          placeholder: "Enter firstname",
                          name: "firstname"
                        },
                        domProps: { value: _vm.form.firstname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "firstname", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "firstname" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-input" },
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
                          placeholder: "Enter lastname",
                          name: "lastname"
                        },
                        domProps: { value: _vm.form.lastname },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "lastname", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "lastname" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-input" },
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
                        class: { "is-invalid": _vm.form.errors.has("email") },
                        attrs: {
                          type: "email",
                          placeholder: "Enter Email",
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
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "email" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-input" },
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
                          placeholder: "Enter contactno",
                          name: "contactno"
                        },
                        domProps: { value: _vm.form.contactno },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "contactno", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "contactno" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-input" },
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
                        class: { "is-invalid": _vm.form.errors.has("address") },
                        attrs: {
                          type: "text",
                          placeholder: "Enter address",
                          name: "address"
                        },
                        domProps: { value: _vm.form.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "address", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "address" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-input" },
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
                        class: { "is-invalid": _vm.form.errors.has("state") },
                        attrs: {
                          type: "text",
                          placeholder: "Enter state",
                          name: "state"
                        },
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
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-input" },
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
                        class: { "is-invalid": _vm.form.errors.has("city") },
                        attrs: {
                          type: "text",
                          placeholder: "Enter city",
                          name: "city"
                        },
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
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-input" },
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
                        class: { "is-invalid": _vm.form.errors.has("zipcode") },
                        attrs: {
                          type: "text",
                          placeholder: "Enter zipcode",
                          name: "zipcode"
                        },
                        domProps: { value: _vm.form.zipcode },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "zipcode", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "zipcode" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-input" },
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
                          class: {
                            "is-invalid": _vm.form.errors.has("postvancy")
                          },
                          attrs: { id: "postvancy", name: "postvancy" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
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
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("Select Post")
                          ]),
                          _vm._v(" "),
                          _c(
                            "option",
                            {
                              attrs: { value: "Business Development Executive" }
                            },
                            [_vm._v("Business Development Executive (Delhi)")]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            {
                              attrs: { value: "Business Development Executive" }
                            },
                            [_vm._v("Business Development Executive (Panjab)")]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            {
                              attrs: { value: "Business Development Executive" }
                            },
                            [
                              _vm._v(
                                "Business Development Executive (Hyderabad)"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            { attrs: { value: "Software Developer" } },
                            [_vm._v("Software Developer")]
                          ),
                          _vm._v(" "),
                          _c(
                            "option",
                            {
                              attrs: {
                                value: "Business Lead Generation Executive"
                              }
                            },
                            [_vm._v("Business Lead Generation Executive")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("has-error", {
                        attrs: { form: _vm.form, field: "postvancy" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
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
                            accept: ".pdf,.doc,.docx"
                          },
                          on: { change: _vm.onFileChange }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "resume" }
                        }),
                        _vm._v(" "),
                        _vm.filename
                          ? _c("span", [_vm._v(_vm._s(_vm.filename))])
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(1)
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-fullwidth" },
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
                        class: {
                          "is-invalid": _vm.form.errors.has("messagescon")
                        },
                        attrs: {
                          id: "messagescon",
                          name: "messagescon",
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
                  ),
                  _vm._v(" "),
                  _vm._m(2)
                ]
              )
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
      _c("section", { staticClass: "banner-block career_banner" }),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("p", { staticClass: "heading" }, [_vm._v("JOIN OUR TEAM")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("span", [_vm._v("Please uplod PDF file only")])])
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
        [_vm._v("Submit")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/front/JoinOurTeam.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/front/JoinOurTeam.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JoinOurTeam_vue_vue_type_template_id_f4b80604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JoinOurTeam.vue?vue&type=template&id=f4b80604& */ "./resources/js/components/front/JoinOurTeam.vue?vue&type=template&id=f4b80604&");
/* harmony import */ var _JoinOurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JoinOurTeam.vue?vue&type=script&lang=js& */ "./resources/js/components/front/JoinOurTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JoinOurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JoinOurTeam_vue_vue_type_template_id_f4b80604___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JoinOurTeam_vue_vue_type_template_id_f4b80604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/JoinOurTeam.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/JoinOurTeam.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/front/JoinOurTeam.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JoinOurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./JoinOurTeam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/JoinOurTeam.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JoinOurTeam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/JoinOurTeam.vue?vue&type=template&id=f4b80604&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/front/JoinOurTeam.vue?vue&type=template&id=f4b80604& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JoinOurTeam_vue_vue_type_template_id_f4b80604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./JoinOurTeam.vue?vue&type=template&id=f4b80604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/JoinOurTeam.vue?vue&type=template&id=f4b80604&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JoinOurTeam_vue_vue_type_template_id_f4b80604___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JoinOurTeam_vue_vue_type_template_id_f4b80604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);