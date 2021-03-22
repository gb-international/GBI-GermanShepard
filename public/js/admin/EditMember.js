(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/EditMember"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/setting/member/Edit-member.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/setting/member/Edit-member.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NewMember",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "dropdown-filter": _admin_components_form_DropdownFilter_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      role_list: [],
      departments: [],
      // Create a new form instance
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        name: "",
        email: "",
        phone_no: "",
        address: "",
        dob: "",
        role_name: "",
        old_role: '',
        department_id: ''
      })
    };
  },
  created: function created() {
    this.getData();
    this.getRoles();
    this.getDepartment();
  },
  methods: {
    getRoles: function getRoles() {
      var _this = this;

      axios.get("/api/role").then(function (res) {
        if (res) {
          for (var i = 0; i < res.data.length; i++) {
            _this.role_list.push({
              name: res.data[i].name,
              id: res.data[i].name
            });
          }
        }
      });
    },
    getDepartment: function getDepartment() {
      var _this2 = this;

      axios.get("/api/departments").then(function (res) {
        if (res) {
          for (var i = 0; i < res.data.length; i++) {
            _this2.departments.push({
              name: res.data[i].name,
              id: res.data[i].id
            });
          }
        }
      });
    },
    updateRole: function updateRole(v) {
      this.form.role_name = v.id;
    },
    updateDepartment: function updateDepartment(v) {
      this.form.department_id = v.id;
    },
    getData: function getData() {
      var _this3 = this;

      axios.get("/api/members/".concat(this.$route.params.id, "/edit")).then(function (res) {
        _this3.form.fill(res.data);

        _this3.form.phone_no = res.data.information.phone_no;
        _this3.form.address = res.data.information.address;
        _this3.form.dob = res.data.information.dob;
        _this3.form.role_name = res.data.user_role.role.name;
        _this3.form.old_role = _this3.form.role_name;
        _this3.form.department_id = res.data.department_id;
      });
    },
    updateMember: function updateMember() {
      var _this4 = this;

      console.log(this.form);
      this.form.put("/api/members/".concat(this.$route.params.id)).then(function (res) {
        console.log(res); // this.$router.push(`/list-member`);

        _this4.$toast.fire({
          icon: "success",
          title: "GBI Member Update Successfully"
        });
      })["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/setting/member/Edit-member.vue?vue&type=template&id=16982cb0&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/setting/member/Edit-member.vue?vue&type=template&id=16982cb0& ***!
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
                    return _vm.updateMember()
                  }
                }
              },
              [
                _vm.form.name
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-4" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "name" } }, [
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
                                name: "name",
                                placeholder: "Enter Name"
                              },
                              domProps: { value: _vm.form.name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "name",
                                    $event.target.value
                                  )
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
                            _c("label", { attrs: { for: "email" } }, [
                              _vm._v("Email")
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
                                  _vm.$set(
                                    _vm.form,
                                    "email",
                                    $event.target.value
                                  )
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
                              _vm._v("Phone Number")
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
                              class: {
                                "is-invalid": _vm.form.errors.has("phone_no")
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Enter Phone No",
                                name: "phone_no"
                              },
                              domProps: { value: _vm.form.phone_no },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "phone_no",
                                    $event.target.value
                                  )
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
                          { staticClass: "form-group date_input" },
                          [
                            _c("label", { attrs: { for: "dob" } }, [
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
                              class: {
                                "is-invalid": _vm.form.errors.has("dob")
                              },
                              attrs: {
                                type: "date",
                                placeholder: "Enter dob",
                                name: "journy"
                              },
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
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "dob" }
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
                            _c("label", { attrs: { for: "role_name" } }, [
                              _vm._v("Role Assign")
                            ]),
                            _vm._v(" "),
                            _c("dropdown-filter", {
                              staticClass: "mb-2",
                              class: {
                                "is-invalid": _vm.form.errors.has("role_name")
                              },
                              attrs: {
                                itemList: _vm.role_list,
                                selectedId: _vm.form.role_name
                              },
                              on: { "update:option": _vm.updateRole }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "role_name" }
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
                            _c("label", { attrs: { for: "role_name" } }, [
                              _vm._v("Department")
                            ]),
                            _vm._v(" "),
                            _c("dropdown-filter", {
                              staticClass: "mb-2",
                              class: {
                                "is-invalid": _vm.form.errors.has(
                                  "department_id"
                                )
                              },
                              attrs: {
                                itemList: _vm.departments,
                                selectedId: _vm.form.department_id
                              },
                              on: { "update:option": _vm.updateDepartment }
                            }),
                            _vm._v(" "),
                            _c("has-error", {
                              attrs: { form: _vm.form, field: "department_id" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-8" }, [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c("label", { attrs: { for: "address" } }, [
                              _vm._v("Address")
                            ]),
                            _vm._v(" "),
                            _c("textarea", {
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
                                placeholder: "Enter Address",
                                name: "address"
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
                      ])
                    ])
                  : _vm._e(),
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

/***/ "./resources/js/admin/pages/setting/member/Edit-member.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/admin/pages/setting/member/Edit-member.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_member_vue_vue_type_template_id_16982cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit-member.vue?vue&type=template&id=16982cb0& */ "./resources/js/admin/pages/setting/member/Edit-member.vue?vue&type=template&id=16982cb0&");
/* harmony import */ var _Edit_member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit-member.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/setting/member/Edit-member.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_member_vue_vue_type_template_id_16982cb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_member_vue_vue_type_template_id_16982cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/setting/member/Edit-member.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/setting/member/Edit-member.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/admin/pages/setting/member/Edit-member.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-member.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/setting/member/Edit-member.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/setting/member/Edit-member.vue?vue&type=template&id=16982cb0&":
/*!************************************************************************************************!*\
  !*** ./resources/js/admin/pages/setting/member/Edit-member.vue?vue&type=template&id=16982cb0& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_member_vue_vue_type_template_id_16982cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit-member.vue?vue&type=template&id=16982cb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/setting/member/Edit-member.vue?vue&type=template&id=16982cb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_member_vue_vue_type_template_id_16982cb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_member_vue_vue_type_template_id_16982cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);