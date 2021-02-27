(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/TrainView"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/train/View-train.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/train/View-train.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ViewTrain",
  data: function data() {
    return {
      bus_view: []
    };
  },
  created: function created() {
    this.busView();
  },
  methods: {
    busView: function busView() {
      var _this = this;

      axios.get("/api/bus/".concat(this.$route.params.id)).then(function (response) {
        _this.bus_view = response.data;
        console.log(_this.bus_view);
      });
    },
    goBack: function goBack() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/train/View-train.vue?vue&type=template&id=f6d798e0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/train/View-train.vue?vue&type=template&id=f6d798e0& ***!
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
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "row justify-content-around" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "container container_admin_body" }, [
          _c("div", { staticClass: "card_view" }, [
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-3" }, [
                _c("h5", [_vm._v("Name")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.bus_view.company_name))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("h5", [_vm._v("Street")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.bus_view.seater))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("h5", [_vm._v("City Name")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.bus_view.seat_type))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("h5", [_vm._v("State Name")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.bus_view.price))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("h5", [_vm._v("Created At")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.bus_view.created_at))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("h5", [_vm._v("Updated At")]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.bus_view.updated_at))])
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary itrn_add_btn back_btn",
                on: {
                  click: function($event) {
                    return _vm.goBack()
                  }
                }
              },
              [_vm._v("\n            Back\n          ")]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/train/View-train.vue":
/*!*******************************************************!*\
  !*** ./resources/js/admin/pages/train/View-train.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_train_vue_vue_type_template_id_f6d798e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View-train.vue?vue&type=template&id=f6d798e0& */ "./resources/js/admin/pages/train/View-train.vue?vue&type=template&id=f6d798e0&");
/* harmony import */ var _View_train_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View-train.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/train/View-train.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_train_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_train_vue_vue_type_template_id_f6d798e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_train_vue_vue_type_template_id_f6d798e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/train/View-train.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/train/View-train.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/pages/train/View-train.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_train_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View-train.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/train/View-train.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_train_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/train/View-train.vue?vue&type=template&id=f6d798e0&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/pages/train/View-train.vue?vue&type=template&id=f6d798e0& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_train_vue_vue_type_template_id_f6d798e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View-train.vue?vue&type=template&id=f6d798e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/train/View-train.vue?vue&type=template&id=f6d798e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_train_vue_vue_type_template_id_f6d798e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_train_vue_vue_type_template_id_f6d798e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);