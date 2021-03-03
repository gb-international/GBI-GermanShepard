(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/sightEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_components_form_DropdownFilter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/form/DropdownFilter.vue */ "./resources/js/admin/components/form/DropdownFilter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "New",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "dropdown-filter": _admin_components_form_DropdownFilter_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      img_image: "",
      options: [],
      city_list: [],
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        name: "",
        state_id: "",
        city_id: "",
        image: "",
        alt: "",
        adult_price: "",
        child_price: "",
        address: "",
        description: ""
      })
    };
  },
  watch: {
    "form.state_id": function formState_id() {
      this.cityData(this.form.state_id);
    }
  },
  mounted: function mounted() {
    this.stateData();
    this.sightSeeing();
  },
  methods: {
    stateData: function stateData() {
      var _this = this;

      axios.get("/api/state").then(function (res) {
        if (res.data) {
          _this.options = [];

          for (var i = 0; i < res.data.length; i++) {
            _this.options.push({
              name: res.data[i].name,
              id: res.data[i].id
            });
          }
        }
      });
    },
    cityData: function cityData(id) {
      var _this2 = this;

      axios.get("/api/state-city/" + id).then(function (res) {
        if (res.data) {
          _this2.city_list = [];

          for (var i = 0; i < res.data.length; i++) {
            _this2.city_list.push({
              name: res.data[i].name,
              id: res.data[i].id
            });
          }
        }
      });
    },
    sightSeeing: function sightSeeing() {
      var _this3 = this;

      axios.get("/api/sightseeings/".concat(this.$route.params.id, "/edit")).then(function (response) {
        _this3.form.fill(response.data);

        _this3.img_image = _this3.form.image;
      });
    },
    updateSightseeing: function updateSightseeing() {
      var _this4 = this;

      this.form.put("/api/sightseeings/".concat(this.$route.params.id)).then(function (response) {
        console.log(response);

        _this4.$toast.fire({
          icon: "success",
          title: "Successfully Updated"
        });
      })["catch"](function () {});
    },
    changeDetailPhoto: function changeDetailPhoto(event) {
      var _this5 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this5.form.image = event.target.result;
        _this5.form.alt = file.name;
        _this5.img_image = event.target.result;
      };

      reader.readAsDataURL(file);
    },
    StateUpdate: function StateUpdate(value) {
      this.form.state_id = value.id;
    },
    CityUpdate: function CityUpdate(value) {
      this.form.city_id = value.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue?vue&type=template&id=b784be96&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue?vue&type=template&id=b784be96& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                    return _vm.updateSightseeing()
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
                        _c("label", { attrs: { for: "state" } }, [
                          _vm._v("State")
                        ]),
                        _vm._v(" "),
                        _c("dropdown-filter", {
                          staticClass: "mb-2",
                          attrs: {
                            itemList: _vm.options,
                            selectedId: _vm.form.state_id
                          },
                          on: { "update:option": _vm.StateUpdate }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "state_id" }
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
                        _c("label", { attrs: { for: "city" } }, [
                          _vm._v("City")
                        ]),
                        _vm._v(" "),
                        _c("dropdown-filter", {
                          staticClass: "mb-2",
                          attrs: {
                            itemList: _vm.city_list,
                            selectedId: _vm.form.city_id
                          },
                          on: { "update:option": _vm.CityUpdate }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "city_id" }
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
                          _vm._v("Sightseeing Name")
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
                          class: { "is-invalid": _vm.form.errors.has("name") },
                          attrs: {
                            type: "text",
                            placeholder: "Enter Sightseeing Name"
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
                          class: {
                            "is-invalid": _vm.form.errors.has("address")
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Enter Address",
                            id: "address"
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
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "adult_price" } }, [
                          _vm._v("Ticket ( Adult Price )")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.adult_price,
                              expression: "form.adult_price"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("adult_price")
                          },
                          attrs: {
                            type: "number",
                            placeholder: "Enter Adult price",
                            id: "adult_price"
                          },
                          domProps: { value: _vm.form.adult_price },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "adult_price",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "adult_price" }
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
                        _c("label", { attrs: { for: "child_price" } }, [
                          _vm._v("Ticket ( Child Price )")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.child_price,
                              expression: "form.child_price"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("child_price")
                          },
                          attrs: {
                            type: "number",
                            placeholder: "Enter child price",
                            id: "child_price"
                          },
                          domProps: { value: _vm.form.child_price },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "child_price",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "child_price" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "description" } }, [
                          _vm._v("Descripttion")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.description,
                              expression: "form.description"
                            }
                          ],
                          staticClass: "form-control textarea",
                          class: {
                            "is-invalid": _vm.form.errors.has("description")
                          },
                          attrs: {
                            rows: "3",
                            placeholder: "Enter Description",
                            id: "description"
                          },
                          domProps: { value: _vm.form.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "description" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-3" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "image" } }, [
                          _vm._v("Image")
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("input", {
                          class: { "is-invalid": _vm.form.errors.has("image") },
                          attrs: { name: "image", type: "file" },
                          on: {
                            change: function($event) {
                              return _vm.changeDetailPhoto($event)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "image" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-2" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "image" } }),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "image width-140",
                          attrs: { src: _vm.img_image, alt: "" }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "image" }
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

/***/ "./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_sightseeing_vue_vue_type_template_id_b784be96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit-sightseeing.vue?vue&type=template&id=b784be96& */ "./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue?vue&type=template&id=b784be96&");
/* harmony import */ var _Edit_sightseeing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit-sightseeing.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_sightseeing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_sightseeing_vue_vue_type_template_id_b784be96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_sightseeing_vue_vue_type_template_id_b784be96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/sightseeing/Edit-sightseeing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_sightseeing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-sightseeing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_sightseeing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue?vue&type=template&id=b784be96&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue?vue&type=template&id=b784be96& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_sightseeing_vue_vue_type_template_id_b784be96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-sightseeing.vue?vue&type=template&id=b784be96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/sightseeing/Edit-sightseeing.vue?vue&type=template&id=b784be96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_sightseeing_vue_vue_type_template_id_b784be96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_sightseeing_vue_vue_type_template_id_b784be96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);