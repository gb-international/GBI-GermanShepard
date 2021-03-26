(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/EncyclopediaList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Encyclopedia/States.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Encyclopedia/States.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "States",
  components: {
    ModelSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_0__["ModelSelect"]
  },
  data: function data() {
    return {
      state_list: [],
      options: [],
      searchQuery: null
    };
  },
  created: function created() {
    this.stateList();
    this.SelectBox();
  },
  watch: {
    searchQuery: function searchQuery() {
      console.log(this.searchQuery);
    }
  },
  methods: {
    stateList: function stateList() {
      var _this = this;

      this.$axios.get("/api/encyclopedia-list").then(function (response) {
        _this.state_list = response.data;
      });
    },
    SelectBox: function SelectBox() {
      var _this2 = this;

      this.$axios.get("/api/state").then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          _this2.options.push({
            value: response.data[i].name,
            text: response.data[i].name
          });
        }
      });
    }
  },
  computed: {
    resultQuery: function resultQuery() {
      var _this3 = this;

      if (this.searchQuery) {
        return this.state_list.filter(function (item) {
          return _this3.searchQuery.toLowerCase().split(" ").every(function (v) {
            return item.state_name.toLowerCase().includes(v);
          });
        });
      } else {
        return this.state_list;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Encyclopedia/States.vue?vue&type=template&id=6bfd2ed2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Encyclopedia/States.vue?vue&type=template&id=6bfd2ed2& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "States" }, [
    _c(
      "div",
      {
        staticClass:
          "encyclopedia_banner text_on_image banner_bg explore_bg_img"
      },
      [
        _c("div", { staticClass: "content encyclopedia" }, [
          _c("div", { staticClass: "container-fluid" }, [
            _c("div", { staticClass: "row" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8 search_filter" }, [
                _c("div", { staticClass: "search-p-top" }, [
                  _c(
                    "div",
                    { staticClass: "input-group p-2 bg-skyblue" },
                    [
                      _c("model-select", {
                        attrs: {
                          options: _vm.options,
                          placeholder: "Search encyclopedia..."
                        },
                        model: {
                          value: _vm.searchQuery,
                          callback: function($$v) {
                            _vm.searchQuery = $$v
                          },
                          expression: "searchQuery"
                        }
                      })
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" })
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "container" }, [
        _vm.state_list.length
          ? _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.resultQuery, function(state) {
                return _c(
                  "div",
                  { key: state.id, staticClass: "col-sm-4 states_card" },
                  [
                    _c(
                      "router-link",
                      { attrs: { to: "/encyclopedia/" + state.slug } },
                      [
                        _c("div", { staticClass: "card" }, [
                          _c(
                            "figure",
                            {
                              directives: [
                                { name: "lazyload", rawName: "v-lazyload" }
                              ],
                              staticClass: "image__wrapper card_image_ency"
                            },
                            [
                              _c("ImageSpinner", {
                                staticClass: "image__spinner"
                              }),
                              _vm._v(" "),
                              _c("img", {
                                staticClass: "image__item card-img-top",
                                attrs: {
                                  src: state.thumbnail,
                                  "data-url": state.thumbnail,
                                  alt: state.state_name
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "card-img-overlay text-center" },
                            [
                              _c("p", { staticClass: "card-text text-white" }, [
                                _vm._v(_vm._s(state.state_name))
                              ])
                            ]
                          )
                        ])
                      ]
                    )
                  ],
                  1
                )
              }),
              0
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("br")
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-4" }, [
      _c("div", { staticClass: "encyclopedia-content" }, [
        _c("h1", { staticClass: "heading" }, [_vm._v("Encyclopedia")]),
        _vm._v(" "),
        _c("span", { staticClass: "sub" }, [
          _vm._v(
            "Explore and embrace the vibrancy of cultures and traditions of the beautiful countries and states of the globe"
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/pages/Encyclopedia/States.vue":
/*!**********************************************************!*\
  !*** ./resources/js/front/pages/Encyclopedia/States.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _States_vue_vue_type_template_id_6bfd2ed2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./States.vue?vue&type=template&id=6bfd2ed2& */ "./resources/js/front/pages/Encyclopedia/States.vue?vue&type=template&id=6bfd2ed2&");
/* harmony import */ var _States_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./States.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/Encyclopedia/States.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _States_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _States_vue_vue_type_template_id_6bfd2ed2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _States_vue_vue_type_template_id_6bfd2ed2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/Encyclopedia/States.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/Encyclopedia/States.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/front/pages/Encyclopedia/States.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_States_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./States.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Encyclopedia/States.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_States_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/Encyclopedia/States.vue?vue&type=template&id=6bfd2ed2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/front/pages/Encyclopedia/States.vue?vue&type=template&id=6bfd2ed2& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_States_vue_vue_type_template_id_6bfd2ed2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./States.vue?vue&type=template&id=6bfd2ed2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Encyclopedia/States.vue?vue&type=template&id=6bfd2ed2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_States_vue_vue_type_template_id_6bfd2ed2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_States_vue_vue_type_template_id_6bfd2ed2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);