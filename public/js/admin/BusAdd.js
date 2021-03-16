(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/BusAdd"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bus/New-bus.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bus/New-bus.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewBus",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      // Create a new form instance
      seater: [10, 20, 30, 35, 40, 45, 50],
      seat_type: ["2*2", "3*2", "Sigle seater", "Multi seater"],
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        company_name: "",
        seater: "",
        seat_type: "",
        price: ""
      })
    };
  },
  methods: {
    AddSchool: function AddSchool() {
      var _this = this;

      // Submit the form via a itinerary request
      this.form.post("/api/bus").then(function (response) {
        _this.$toast.fire({
          icon: "success",
          title: "School Added successfully"
        });
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bus/New-bus.vue?vue&type=template&id=63b1050b&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bus/New-bus.vue?vue&type=template&id=63b1050b& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("form-layout", {
    scopedSlots: _vm._u([
      {
        key: "formdata",
        fn: function() {
          return [
            _c(
              "form",
              {
                attrs: { role: "form", enctype: "multipart/form-data" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.AddSchool()
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
                        _c("label", { attrs: { for: "company_name" } }, [
                          _vm._v("Bus Company name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company_name,
                              expression: "form.company_name"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("company_name")
                          },
                          attrs: { type: "text", placeholder: "Enter name" },
                          domProps: { value: _vm.form.company_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "company_name",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "company_name" }
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
                        _c("label", { attrs: { for: "seater" } }, [
                          _vm._v("Seater ")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.seater,
                                expression: "form.seater"
                              }
                            ],
                            staticClass: "from-control select-field",
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
                                  "seater",
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
                              {
                                attrs: { value: "", disabled: "", hidden: "" }
                              },
                              [_vm._v("Select Seater")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.seater, function(seat) {
                              return _c(
                                "option",
                                { key: seat.id, domProps: { value: seat } },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(seat) +
                                      "\n              "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "seater" }
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
                        _c("label", { attrs: { for: "seat_type" } }, [
                          _vm._v("Seat type")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.seat_type,
                                expression: "form.seat_type"
                              }
                            ],
                            staticClass: "from-control select-field",
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
                                  "seat_type",
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
                              {
                                attrs: { value: "", disabled: "", hidden: "" }
                              },
                              [_vm._v("Select Seat Type")]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.seat_type, function(seat) {
                              return _c(
                                "option",
                                { key: seat.id, domProps: { value: seat } },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(seat) +
                                      "\n              "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "seat_type" }
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
                        _c("label", { attrs: { for: "Price" } }, [
                          _vm._v("Price")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.price,
                              expression: "form.price"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("price") },
                          attrs: { type: "text", placeholder: "Enter Price" },
                          domProps: { value: _vm.form.price },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "price", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "price" }
                        })
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("form-buttons")
              ],
              1
            )
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/bus/New-bus.vue":
/*!**************************************************!*\
  !*** ./resources/js/admin/pages/bus/New-bus.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_bus_vue_vue_type_template_id_63b1050b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New-bus.vue?vue&type=template&id=63b1050b& */ "./resources/js/admin/pages/bus/New-bus.vue?vue&type=template&id=63b1050b&");
/* harmony import */ var _New_bus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New-bus.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bus/New-bus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_bus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_bus_vue_vue_type_template_id_63b1050b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_bus_vue_vue_type_template_id_63b1050b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bus/New-bus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bus/New-bus.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/pages/bus/New-bus.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_bus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New-bus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bus/New-bus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_bus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bus/New-bus.vue?vue&type=template&id=63b1050b&":
/*!*********************************************************************************!*\
  !*** ./resources/js/admin/pages/bus/New-bus.vue?vue&type=template&id=63b1050b& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_bus_vue_vue_type_template_id_63b1050b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New-bus.vue?vue&type=template&id=63b1050b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bus/New-bus.vue?vue&type=template&id=63b1050b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_bus_vue_vue_type_template_id_63b1050b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_bus_vue_vue_type_template_id_63b1050b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);