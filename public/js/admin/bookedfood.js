(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/bookedfood"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Food.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/Food.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Foods",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"]
  },
  data: function data() {
    return {
      foods: [],
      oddclass: false,
      evenclass: true,
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        name: "",
        quantity: "",
        tour_id: this.$route.params.tour_id,
        tour_code: this.$route.params.tour_code
      }),
      editid: "",
      updateindex: ""
    };
  },
  created: function created() {
    this.getFoods();
  },
  methods: {
    getFoods: function getFoods() {
      var _this = this;

      axios.get("/api/foods/".concat(this.$route.params.tour_id)).then(function (response) {
        setTimeout(function () {
          return $("#example").DataTable();
        }, 1000);
        _this.foods = response.data;
      });
    },
    submitForm: function submitForm() {
      var _this2 = this;

      this.form.post("/api/foods").then(function (response) {
        _this2.foods.unshift(response.data);

        $(".close").click();

        _this2.$swal.fire("Success", "Successfully Added !!!", "success");
      })["catch"](function () {});
    },
    updateFood: function updateFood() {
      var _this3 = this;

      this.form.patch("/api/foods/".concat(this.editid)).then(function (response) {
        _this3.getFoods();

        _this3.$swal.fire("Success", "Successfully updated !!!", "success");

        $(".close").click();
      })["catch"](function () {});
    },
    // Delete Row
    deletefood: function deletefood(id, index) {
      var _this4 = this;

      this.$swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          _this4.form["delete"]("/api/foods/".concat(id)).then(function (response) {
            _this4.$swal.fire("Deleted!", "Member Deleted deleted.", "success");

            _this4.foods.splice(index, 1);
          })["catch"](function (error) {
            _this4.handleError(error);
          });
        }
      });
    },
    editFood: function editFood(food, index) {
      this.form.fill(food);
      this.editid = food.id;
      this.updateindex = index;
    },
    foodModal: function foodModal() {
      this.form.name = '';
      this.form.quantity = '';
      this.editid = '';
      this.updateindex = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Food.vue?vue&type=template&id=4bf2b318&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/Food.vue?vue&type=template&id=4bf2b318& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "food-section container_admin_body" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12 float-right mb-4 mt-1" }, [
          _c(
            "span",
            {
              staticClass: "top_black_btn",
              attrs: { "data-toggle": "modal", "data-target": "#foodModal" },
              on: {
                click: function($event) {
                  return _vm.foodModal()
                }
              }
            },
            [_vm._v("NEW FOOD")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c(
            "table",
            {
              staticClass: "display table table-striped table-bordered nowrap",
              staticStyle: { width: "100%" },
              attrs: { id: "example" }
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.foods, function(food, index) {
                  return _c(
                    "tr",
                    {
                      key: food.id,
                      staticClass: "row_list",
                      class: { odd: _vm.oddclass, even: _vm.evenclass },
                      attrs: { role: "row" }
                    },
                    [
                      _c("td", [_vm._v(_vm._s(food.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(food.quantity))]),
                      _vm._v(" "),
                      _c("td", { staticClass: "edit_section" }, [
                        _c(
                          "span",
                          {
                            staticClass: "edit_link pointer",
                            attrs: {
                              "data-toggle": "modal",
                              "data-target": "#foodModal"
                            },
                            on: {
                              click: function($event) {
                                return _vm.editFood(food, index)
                              }
                            }
                          },
                          [_vm._m(1, true)]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "delete_link pointer",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.deletefood(food.id, index)
                              }
                            }
                          },
                          [_vm._m(2, true)]
                        )
                      ])
                    ]
                  )
                }),
                0
              )
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal", attrs: { id: "foodModal" } }, [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content simple-form-bg" }, [
          _c("div", { staticClass: "modal-body" }, [
            _c(
              "button",
              {
                staticClass: "close",
                attrs: { type: "button", "data-dismiss": "modal" }
              },
              [_vm._v("\n            ×\n          ")]
            ),
            _vm._v(" "),
            _c("p", [_vm._v("Add New Food")]),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm()
                  }
                }
              },
              [
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
                      attrs: { type: "text" },
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
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Quantity")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.quantity,
                          expression: "form.quantity"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("quantity") },
                      attrs: { type: "text" },
                      domProps: { value: _vm.form.quantity },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "quantity", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "quantity" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.editid == ""
                  ? _c(
                      "button",
                      {
                        staticClass: "btn itrn_add_btn",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("\n              SAVE\n            ")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.editid != ""
                  ? _c(
                      "button",
                      {
                        staticClass: "btn itrn_add_btn",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.updateFood()
                          }
                        }
                      },
                      [_vm._v("\n              UPDATE\n            ")]
                    )
                  : _vm._e()
              ]
            )
          ])
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
    return _c("thead", [
      _c("tr", [
        _c("th", [
          _vm._v("FOOD ITEM "),
          _c("i", { staticClass: "fas fa-sort" })
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v("QUANTITY "),
          _c("i", { staticClass: "fas fa-sort" })
        ]),
        _vm._v(" "),
        _c("th", [_c("i", { staticClass: "fas fa-cog" })])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "badge badge-primary",
        attrs: { title: "View Itinerary" }
      },
      [_c("i", { staticClass: "fas fa-pencil-alt" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "badge badge-danger" }, [
      _c("i", { staticClass: "far fa-trash-alt" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/Food.vue":
/*!******************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/Food.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Food_vue_vue_type_template_id_4bf2b318___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Food.vue?vue&type=template&id=4bf2b318& */ "./resources/js/admin/pages/bookedtour/Food.vue?vue&type=template&id=4bf2b318&");
/* harmony import */ var _Food_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Food.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bookedtour/Food.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Food_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Food_vue_vue_type_template_id_4bf2b318___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Food_vue_vue_type_template_id_4bf2b318___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bookedtour/Food.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/Food.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/Food.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Food_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Food.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Food.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Food_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/Food.vue?vue&type=template&id=4bf2b318&":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/Food.vue?vue&type=template&id=4bf2b318& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Food_vue_vue_type_template_id_4bf2b318___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Food.vue?vue&type=template&id=4bf2b318& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Food.vue?vue&type=template&id=4bf2b318&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Food_vue_vue_type_template_id_4bf2b318___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Food_vue_vue_type_template_id_4bf2b318___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);