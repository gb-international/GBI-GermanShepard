(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/TeacherProfileEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/teacher/ProfileEdit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/teacher/ProfileEdit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_mixins_user_ProfileEditMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/mixins/user/ProfileEditMixin */ "./resources/js/front/mixins/user/ProfileEditMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProfileEdit",
  mixins: [_front_mixins_user_ProfileEditMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/teacher/ProfileEdit.vue?vue&type=template&id=3554265e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/teacher/ProfileEdit.vue?vue&type=template&id=3554265e& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "grey-form", attrs: { id: "user_edit_form" } },
    [
      _c("div", { staticClass: "text-center" }, [
        _c("div", { staticClass: "avatar-upload user_edit_image" }, [
          _c(
            "form",
            { attrs: { role: "form", enctype: "multipart/form-data" } },
            [
              _c("div", { staticClass: "avatar-edit" }, [
                _c("input", {
                  attrs: {
                    type: "file",
                    id: "imageUpload",
                    accept: ".png, .jpg, .jpeg"
                  },
                  on: { change: _vm.onChange }
                }),
                _vm._v(" "),
                _vm._m(0)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "avatar-preview" }, [
                _c(
                  "div",
                  {
                    staticStyle: { "background-image": "url()" },
                    attrs: { id: "imagePreview" }
                  },
                  [
                    _vm.image
                      ? _c("img", {
                          staticClass: "img",
                          attrs: { src: _vm.image, loading: "lazy" }
                        })
                      : _c("img", {
                          staticClass: "img",
                          attrs: {
                            src: _vm.image,
                            loading: "lazy",
                            alt: "user profile"
                          }
                        })
                  ]
                )
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "form",
          {
            attrs: { role: "form", enctype: "multipart/form-data" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.updateUserData()
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
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
                      class: { "is-invalid": _vm.form.errors.has("name") },
                      attrs: { type: "text", placeholder: "Enter Name" },
                      domProps: { value: _vm.form.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "name" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "genderId" } }, [
                    _vm._v("Gender")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-2" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-control custom-radio custom-control-inline"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.gender,
                              expression: "form.gender"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: { type: "radio", id: "maleId", value: "male" },
                          domProps: {
                            checked: _vm._q(_vm.form.gender, "male")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.form, "gender", "male")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "maleId" }
                          },
                          [_vm._v("Male")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-control custom-radio custom-control-inline"
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.gender,
                              expression: "form.gender"
                            }
                          ],
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "radio",
                            value: "female",
                            id: "femaleId"
                          },
                          domProps: {
                            checked: _vm._q(_vm.form.gender, "female")
                          },
                          on: {
                            change: function($event) {
                              return _vm.$set(_vm.form, "gender", "female")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "femaleId" }
                          },
                          [_vm._v("Female")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.form.errors.has("gender")
                    ? _c(
                        "div",
                        { staticClass: "error" },
                        [
                          _c("lable", { staticClass: "danger text-danger" }, [
                            _vm._v(_vm._s(_vm.form.errors.get("gender")))
                          ])
                        ],
                        1
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("div", [
                    _c("label", [_vm._v("User profession")]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.user_profession,
                            expression: "form.user_profession"
                          }
                        ],
                        staticClass: "form-control",
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
                              "user_profession",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "student" } }, [
                          _vm._v("Student")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "teacher" } }, [
                          _vm._v("Teacher/Principal/Dean")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "corporate" } }, [
                          _vm._v("Corporate")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "other" } }, [
                          _vm._v("Other")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.form.errors.has("user_profession")
                    ? _c(
                        "div",
                        { staticClass: "error" },
                        [
                          _c("lable", { staticClass: "danger text-danger" }, [
                            _vm._v(
                              _vm._s(_vm.form.errors.get("user_profession"))
                            )
                          ])
                        ],
                        1
                      )
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _vm.school_field
                ? _c("div", { staticClass: "col-sm-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("School name")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.school_id,
                                expression: "form.school_id"
                              }
                            ],
                            staticClass: "form-control",
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
                                  "school_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          _vm._l(_vm.school_list, function(school) {
                            return _c(
                              "option",
                              {
                                key: school.id,
                                domProps: { value: school.id }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(school.school_name) +
                                    "\n              "
                                )
                              ]
                            )
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "school_id" }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.namefield
                ? _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v(_vm._s(_vm.label_name) + " Name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.profession_name,
                            expression: "form.profession_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.profession_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "profession_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.addressfield
                ? _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Address")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.profession_address,
                            expression: "form.profession_address"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.profession_address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "profession_address",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.form.institution_code
                ? _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [_vm._v("Code")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.institution_code,
                            expression: "form.institution_code"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.institution_code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "institution_code",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Father's Name")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.father_name,
                          expression: "form.father_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form.errors.has("father_name")
                      },
                      attrs: { type: "text", placeholder: "Enter Name" },
                      domProps: { value: _vm.form.father_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "father_name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "father_name" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Mother's Name")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.mother_name,
                          expression: "form.mother_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form.errors.has("mother_name")
                      },
                      attrs: { type: "text", placeholder: "Enter mother Name" },
                      domProps: { value: _vm.form.mother_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "mother_name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "mother_name" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "email" } }, [
                      _vm._v("Email ID")
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
                      class: { "is-invalid": _vm.form.errors.has("email") },
                      attrs: { type: "email", placeholder: "Enter Email" },
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
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "phone_no" } }, [
                      _vm._v("Mobile Number")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.phone_no,
                          expression: "form.phone_no"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("phone_no") },
                      attrs: { type: "text", placeholder: "Enter Phone No" },
                      domProps: { value: _vm.form.phone_no },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "phone_no", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "phone_no" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "phone_no" } }, [
                      _vm._v("DOB")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.dob,
                          expression: "form.dob"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("dob") },
                      attrs: { type: "date", placeholder: "Enter DOB" },
                      domProps: { value: _vm.form.dob },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "dob", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", { attrs: { form: _vm.form, field: "dob" } })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "address" } }, [
                      _vm._v("Address")
                    ]),
                    _vm._v(" "),
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
                      attrs: { type: "text", placeholder: "Enter Address" },
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
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "phone_no" } }, [
                      _vm._v("City")
                    ]),
                    _vm._v(" "),
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
                      attrs: { type: "text", placeholder: "Enter City" },
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
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "phone_no" } }, [
                      _vm._v("State")
                    ]),
                    _vm._v(" "),
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
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "country" } }, [
                      _vm._v("Country")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.country,
                          expression: "form.country"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("country") },
                      attrs: { type: "text", placeholder: "Enter country" },
                      domProps: { value: _vm.form.country },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "country", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "country" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "phone_no" } }, [
                      _vm._v("Zip Code")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.zip_code,
                          expression: "form.zip_code"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("zip_code") },
                      attrs: { type: "text", placeholder: "Enter zip_code" },
                      domProps: { value: _vm.form.zip_code },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "zip_code", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "zip_code" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "div",
                  { staticClass: "form-group pt-1" },
                  [
                    _c("div", { staticClass: "form-check pt-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.subscribe,
                            expression: "form.subscribe"
                          }
                        ],
                        staticClass: "form-check-input",
                        attrs: { type: "checkbox", id: "subscribe" },
                        domProps: {
                          value: _vm.form.subscribe,
                          checked: Array.isArray(_vm.form.subscribe)
                            ? _vm._i(_vm.form.subscribe, _vm.form.subscribe) >
                              -1
                            : _vm.form.subscribe
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.form.subscribe,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = _vm.form.subscribe,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.form,
                                    "subscribe",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.form,
                                    "subscribe",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.form, "subscribe", $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "form-check-label pt-3",
                          attrs: { for: "subscribe" }
                        },
                        [_vm._v(" GBI Newsletter")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "subscribe" }
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(1)
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "imageUpload" } }, [
      _c("img", {
        staticClass: "icon-width",
        attrs: { src: "/images/icons/edit.png" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary profile_button",
          attrs: { type: "submit" }
        },
        [_vm._v("\n          UPDATE\n        ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/mixins/user/ProfileEditMixin.js":
/*!************************************************************!*\
  !*** ./resources/js/front/mixins/user/ProfileEditMixin.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProfileEdit",
  components: {
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"]
  },
  data: function data() {
    return {
      client_input_box: "",
      oddclass: false,
      evenclass: true,
      itineraryData: {},
      width: 0,
      image: "",
      prncilIcon: true,
      userinfo: [],
      total: [],
      school_list: "",
      school_field: false,
      namefield: false,
      addressfield: false,
      institutionfield: false,
      label_name: "",
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        name: "",
        gender: "",
        email: "",
        phone_no: "",
        father_name: "",
        mother_name: "",
        city: "",
        state: "",
        country: "",
        zip_code: "",
        user_class: "",
        admission_year: "",
        address: "",
        dob: "",
        schoolName: "",
        client_type: "",
        client_input: "",
        profession_name: "",
        school_id: "",
        profession_address: "",
        user_profession: "",
        institution_code: "",
        subscribe: false
      })
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (localStorage.token == "") {
      this.$router.push("/");
    }

    this.$axios.get("/api/school-list").then(function (response) {
      _this.school_list = response.data;
    });
    var data = [];
    this.$axios.post("/api/user-show", data, {
      headers: {
        Authorization: "Bearer ".concat(localStorage.token)
      }
    }).then(function (response) {
      var list = response.data.success;
      _this.form.name = list.name;
      _this.form.gender = list.information["gender"];
      _this.form.email = list.email;
      _this.form.phone_no = list.information["phone_no"];
      _this.form.father_name = list.information["father_name"];
      _this.form.mother_name = list.information["mother"];
      _this.form.city = list.information["city"];
      _this.form.state = list.information["state"];
      _this.form.country = list.information["country"];
      _this.form.zip_code = list.information["zip_code"];
      _this.form.user_class = list.information["user_class"];
      _this.form.admission_year = list.information["admission_year"];
      _this.form.address = list.information["address"];
      _this.form.dob = list.information["dob"];
      _this.form.schoolName = list.information["schoolName"];
      _this.form.user_profession = list.information["user_profession"];
      _this.form.profession_name = list.information["profession_name"];
      _this.form.profession_address = list.information["profession_address"];
      _this.form.institution_code = list.information["institution_code"];
      _this.form.image = list.information["photo"];
      _this.image = _this.form.image;

      if (list.subscribe) {
        if (list.subscribe["status"] == 1) {
          _this.form.subscribe = true;
        } else {
          _this.form.subscribe = false;
        }
      }

      var type = _this.form.user_profession;

      if (type == "student" || type == "teacher") {
        _this.client_input_box = "1";
        _this.form.school_id = list.information.school_id;
      } else if (type == "corporate") {
        _this.client_input_box = "2";
      } else {
        _this.client_input_box = "3";
      }
    })["catch"](function (error) {
      _this.handleError(error);
    });
  },
  watch: {
    institution: function institution() {
      if (this.form.user_profession == "other") {
        this.namefield = true;
        this.addressfield = true;
        this.label_name = "Educational Institution";
      } else {
        this.namefield = false;
        this.addressfield = false;
      }
    },
    "form.user_profession": function formUser_profession() {
      this.namefield = false;
      this.addressfield = false;
      this.school_field = false;

      if (this.form.user_profession == "corporate") {
        this.namefield = true;
        this.addressfield = true;
        this.label_name = "Corporate";
      } else if (this.form.user_profession == "other") {
        this.namefield = true;
        this.label_name = "Occupation";
      } else {
        this.school_field = true;
      }
    }
  },
  methods: {
    onDrop: function onDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      this.createFile(files[0]);
    },
    onChange: function onChange(e) {
      this.createFile(e.target.files[0]);
    },
    createFile: function createFile(file) {
      if (!file.type.match("image.*")) {
        alert("Select an image");
        return;
      }

      var vm = this;
      var data = new FormData();
      data.append("photo", file);
      vm.$axios.post("/api/update-user-image", data, {
        headers: {
          Authorization: "Bearer ".concat(this.$cookies.get('access_token'))
        }
      }).then(function (res) {
        var data = vm.$cookies.get('user');
        data.photo = res.data.photo;
        vm.image = data.photo;
        vm.$cookies.set('user', data);
        vm.$swal.fire({
          icon: "success",
          title: "Profile image updated !!"
        });
      })["catch"](function (error) {
        return console.log();
      }); //
    },
    removeFile: function removeFile() {
      this.image = "";
    },
    /// Update the user information
    updateUserData: function updateUserData() {
      var _this2 = this;

      if (this.form.subscribe == true) {
        this.form.subscribe = 1;
      } else {
        this.form.subscribe = 0;
      }

      this.form.post("/api/user-update", {
        headers: {
          Authorization: "Bearer ".concat(localStorage.token)
        }
      }).then(function (response) {
        _this2.$swal.fire({
          icon: "success",
          title: "Profile updated!!"
        });
      })["catch"](function (error) {
        _this2.handleError(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/front/pages/user/teacher/ProfileEdit.vue":
/*!***************************************************************!*\
  !*** ./resources/js/front/pages/user/teacher/ProfileEdit.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileEdit_vue_vue_type_template_id_3554265e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileEdit.vue?vue&type=template&id=3554265e& */ "./resources/js/front/pages/user/teacher/ProfileEdit.vue?vue&type=template&id=3554265e&");
/* harmony import */ var _ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileEdit.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/teacher/ProfileEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileEdit_vue_vue_type_template_id_3554265e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileEdit_vue_vue_type_template_id_3554265e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/teacher/ProfileEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/teacher/ProfileEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/front/pages/user/teacher/ProfileEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/teacher/ProfileEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/teacher/ProfileEdit.vue?vue&type=template&id=3554265e&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/front/pages/user/teacher/ProfileEdit.vue?vue&type=template&id=3554265e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_3554265e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileEdit.vue?vue&type=template&id=3554265e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/teacher/ProfileEdit.vue?vue&type=template&id=3554265e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_3554265e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_3554265e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);