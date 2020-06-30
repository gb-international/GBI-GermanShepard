(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["explore-details"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/ExploreDetail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/ExploreDetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ExploreDetail",
  data: function data() {
    return {
      day: 0,
      description: '',
      itineraryData: []
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('getEditData', "/api/itinerary/".concat(this.$route.params.id));
  },
  computed: {
    editData: function editData() {
      this.itineraryData = this.$store.getters.getEditData; // Fill the form with the data
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/ExploreDetail.vue?vue&type=template&id=3cb0d243&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/front/ExploreDetail.vue?vue&type=template&id=3cb0d243& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "explorelist" } },
    [
      _c("vue-headful", {
        attrs: {
          title: "GBI Explore Destination",
          description:
            "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button",
          keywords:
            "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs",
          image: "",
          lang: "en_US",
          ogLocale: "en_US,en_UK",
          url: "https://www.gowithgbi.com/resources/explore-destination"
        }
      }),
      _vm._v(" "),
      _c("section", { staticClass: "banner-block" }, [
        _c("img", {
          staticClass: "top-img",
          attrs: {
            src: "/uploadimage/" + _vm.itineraryData.detail_photo,
            loading: "lazy",
            alt: "itinerary"
          }
        })
      ]),
      _vm._v("\n    " + _vm._s(_vm.editData) + "\n    "),
      _c("div", { staticClass: "container" }, [
        _c("h1", { staticClass: "main-head" }, [
          _vm._v(_vm._s(_vm.itineraryData.title))
        ]),
        _vm._v(" "),
        _c("p", {
          staticClass: "description",
          domProps: { innerHTML: _vm._s(_vm.description) }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row", attrs: { id: "explore_detail_part" } },
          _vm._l(_vm.itineraryData.itinerarydays, function(data) {
            return _c("div", { key: data.id, staticClass: "col-sm-4" }, [
              _c("h4", { staticClass: "day_tab" }, [
                _vm._v("Day " + _vm._s(data.day))
              ]),
              _vm._v(" "),
              data.day_source != data.day_destination
                ? _c("h1", { staticClass: "explor-head" }, [
                    _vm._v(
                      _vm._s(data.day_source.toUpperCase()) +
                        " - " +
                        _vm._s(data.day_destination.toUpperCase())
                    )
                  ])
                : _c("h1", { staticClass: "explor-head" }, [
                    _vm._v(_vm._s(data.day_source.toUpperCase()))
                  ]),
              _vm._v(" "),
              _c("div", {
                staticClass: "card-text",
                domProps: { innerHTML: _vm._s(data.day_description) }
              })
            ])
          }),
          0
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/front/ExploreDetail.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/front/ExploreDetail.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExploreDetail_vue_vue_type_template_id_3cb0d243___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExploreDetail.vue?vue&type=template&id=3cb0d243& */ "./resources/js/components/front/ExploreDetail.vue?vue&type=template&id=3cb0d243&");
/* harmony import */ var _ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExploreDetail.vue?vue&type=script&lang=js& */ "./resources/js/components/front/ExploreDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExploreDetail_vue_vue_type_template_id_3cb0d243___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExploreDetail_vue_vue_type_template_id_3cb0d243___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/front/ExploreDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/front/ExploreDetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/front/ExploreDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ExploreDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/ExploreDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/front/ExploreDetail.vue?vue&type=template&id=3cb0d243&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/front/ExploreDetail.vue?vue&type=template&id=3cb0d243& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_template_id_3cb0d243___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ExploreDetail.vue?vue&type=template&id=3cb0d243& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/front/ExploreDetail.vue?vue&type=template&id=3cb0d243&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_template_id_3cb0d243___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_template_id_3cb0d243___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);