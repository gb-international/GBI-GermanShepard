(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-info"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/user/User-information.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/user/User-information.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__["TabContent"]
  },
  data: function data() {
    return {
      oddclass: false,
      evenclass: true,
      loadingWizard: false,
      errorMsg: null,
      school_list: '',
      profession: '',
      institution: '',
      institution_code: ''
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/school-list').then(function (response) {
      _this.school_list = response.data;
      console.log(response);
    });
    var data = [];
    axios.post("/api/user-show", data, {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("access_token"))
      }
    }).then(function (response) {})["catch"](function (error) {
      _this.handleError(error);
    });
  },
  methods: {
    onComplete: function onComplete() {
      var _this2 = this;

      var data = {
        user_profession: this.profession,
        school_id: this.institution,
        institution_code: this.institution_code
      };
      axios.post("/api/user-info-update", data, {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem("access_token"))
        }
      }).then(function (response) {
        _this2.$router.push('/dashboard');
      })["catch"](function (error) {
        _this2.handleError(error);
      });
    },
    setLoading: function setLoading(value) {
      this.loadingWizard = value;
    },
    handleValidation: function handleValidation(isValid, tabIndex) {
      console.log('Tab: ' + tabIndex + ' valid: ' + isValid);
    },
    handleErrorMessage: function handleErrorMessage(errorMsg) {
      this.errorMsg = errorMsg;
    },
    validateAsync: function validateAsync() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (_this3.profession == '') {
            reject('Select your profession');
          } else {
            resolve(true);
          }
        }, 500);
      });
    },
    validateAsyncLast: function validateAsyncLast() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log(_this4.institution_code);

          if (_this4.institution_code == '') {
            reject('Enter your institution code');
          } else {
            resolve(true);
          }
        }, 500);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/user/User-information.vue?vue&type=template&id=389374a6&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/user/User-information.vue?vue&type=template&id=389374a6& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "user_inform_model" } }, [
    _c("div", { staticClass: "row justify-content-center w-100" }, [
      _c("div", { staticClass: "col-sm-7" }, [
        _c(
          "div",
          { staticClass: "user-model card p-20 mt-15" },
          [
            _c("label", [_vm._v("Three Step Verification")]),
            _vm._v(" "),
            _c(
              "form-wizard",
              {
                attrs: {
                  shape: "circle",
                  color: "#1c1650",
                  "error-color": "#e74c3c"
                },
                on: {
                  "on-complete": _vm.onComplete,
                  "on-loading": _vm.setLoading,
                  "on-validate": _vm.handleValidation,
                  "on-error": _vm.handleErrorMessage
                }
              },
              [
                _c(
                  "tab-content",
                  {
                    attrs: {
                      title: "Personal details",
                      "before-change": _vm.validateAsync
                    }
                  },
                  [
                    _c("label", [_vm._v("Select Your Profession")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.profession,
                            expression: "profession"
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
                            _vm.profession = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "student" } }, [
                          _vm._v("Student")
                        ]),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Teacher/Principal/Dean" } },
                          [_vm._v("Teacher/Principal/Dean")]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("tab-content", { attrs: { title: "Additional Info" } }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", [
                      _vm._v("Select Your Educational Institution")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.institution,
                            expression: "institution"
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
                            _vm.institution = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      _vm._l(_vm.school_list, function(school) {
                        return _c(
                          "option",
                          { domProps: { value: school.id } },
                          [_vm._v(_vm._s(school.school_name))]
                        )
                      }),
                      0
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tab-content",
                  {
                    attrs: {
                      title: "Last step",
                      "before-change": _vm.validateAsyncLast
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _vm.profession == "student"
                        ? _c("label", [_vm._v("Enter Your School/College ID")])
                        : _c("label", [
                            _vm._v("Enter Your Affiliation Number")
                          ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.institution_code,
                            expression: "institution_code"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Enter Your School/College ID"
                        },
                        domProps: { value: _vm.institution_code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.institution_code = $event.target.value
                          }
                        }
                      })
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm.loadingWizard
                  ? _c("div", { staticClass: "loader" })
                  : _vm._e(),
                _vm._v(" "),
                _vm.errorMsg
                  ? _c("div", [
                      _c("span", { staticClass: "error" }, [
                        _vm._v(_vm._s(_vm.errorMsg))
                      ])
                    ])
                  : _vm._e()
              ],
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/front/user/User-information.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/front/user/User-information.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_information_vue_vue_type_template_id_389374a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User-information.vue?vue&type=template&id=389374a6& */ "./resources/js/components/front/user/User-information.vue?vue&type=template&id=389374a6&");
/* harmony import */ var _User_information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User-information.vue?vue&type=script&lang=js& */ "./resources/js/components/front/user/User-information.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_information_vue_vue_type_template_id_389374a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_information_vue_vue_type_template_id_389374a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/user/User-information.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/user/User-information.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/front/user/User-information.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User-information.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/user/User-information.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_information_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/user/User-information.vue?vue&type=template&id=389374a6&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/front/user/User-information.vue?vue&type=template&id=389374a6& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_information_vue_vue_type_template_id_389374a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User-information.vue?vue&type=template&id=389374a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/user/User-information.vue?vue&type=template&id=389374a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_information_vue_vue_type_template_id_389374a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_information_vue_vue_type_template_id_389374a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);