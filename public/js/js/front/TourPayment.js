"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/front/TourPayment"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/user/tour/TourPayment.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/user/tour/TourPayment.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isStudent: false,
      isTeacher: false,
      isCorporate: false
    };
  },
  components: {
    TourPaymentStudent: function TourPaymentStudent() {
      return __webpack_require__.e(/*! import() | js/front/TourPaymentStudent1 */ "js/front/TourPaymentStudent1").then(__webpack_require__.bind(__webpack_require__, /*! @/front/pages/user/student/tour/TourPayment.vue */ "./resources/js/front/pages/user/student/tour/TourPayment.vue"));
    },
    TourPaymentTeacher: function TourPaymentTeacher() {
      return __webpack_require__.e(/*! import() | js/front/TourPaymentTeacher */ "js/front/TourPaymentTeacher").then(__webpack_require__.bind(__webpack_require__, /*! @/front/pages/user/teacher/tour/TourPayment.vue */ "./resources/js/front/pages/user/teacher/tour/TourPayment.vue"));
    },
    TourPaymentCorporate: function TourPaymentCorporate() {
      return __webpack_require__.e(/*! import() | js/front/TourPaymentCorporate */ "js/front/TourPaymentCorporate").then(__webpack_require__.bind(__webpack_require__, /*! @/front/pages/user/corporate/tour/TourPayment.vue */ "./resources/js/front/pages/user/corporate/tour/TourPayment.vue"));
    }
  },
  created: function created() {
    var user = this.$cookies.get('user');
    if (user.client_type == 'teacher') {
      this.isTeacher = true;
    } else if (user.client_type == 'student') {
      this.isStudent = true;
    } else if (user.client_type == 'corporate') {
      this.isCorporate = true;
    }
  }
});

/***/ }),

/***/ "./resources/js/front/pages/user/tour/TourPayment.vue":
/*!************************************************************!*\
  !*** ./resources/js/front/pages/user/tour/TourPayment.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TourPayment_vue_vue_type_template_id_74da0b08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TourPayment.vue?vue&type=template&id=74da0b08& */ "./resources/js/front/pages/user/tour/TourPayment.vue?vue&type=template&id=74da0b08&");
/* harmony import */ var _TourPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TourPayment.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/tour/TourPayment.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TourPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TourPayment_vue_vue_type_template_id_74da0b08___WEBPACK_IMPORTED_MODULE_0__.render,
  _TourPayment_vue_vue_type_template_id_74da0b08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/tour/TourPayment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/tour/TourPayment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/front/pages/user/tour/TourPayment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourPayment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/user/tour/TourPayment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TourPayment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/tour/TourPayment.vue?vue&type=template&id=74da0b08&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/front/pages/user/tour/TourPayment.vue?vue&type=template&id=74da0b08& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourPayment_vue_vue_type_template_id_74da0b08___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourPayment_vue_vue_type_template_id_74da0b08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TourPayment_vue_vue_type_template_id_74da0b08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TourPayment.vue?vue&type=template&id=74da0b08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/user/tour/TourPayment.vue?vue&type=template&id=74da0b08&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/user/tour/TourPayment.vue?vue&type=template&id=74da0b08&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/front/pages/user/tour/TourPayment.vue?vue&type=template&id=74da0b08& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.isStudent ? _c("tour-payment-student") : _vm._e(),
      _vm._v(" "),
      _vm.isTeacher ? _c("tour-payment-teacher") : _vm._e(),
      _vm._v(" "),
      _vm.isCorporate ? _c("tour-payment-corporate") : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);