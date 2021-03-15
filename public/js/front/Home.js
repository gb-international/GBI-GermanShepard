(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/Home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['text'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/SubHeading.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/layout/SubHeading.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['text'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/layouts/FrontHome.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/layouts/FrontHome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_components_layout_Heading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/components/layout/Heading.vue */ "./resources/js/front/components/layout/Heading.vue");
/* harmony import */ var _front_components_layout_SubHeading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/layout/SubHeading.vue */ "./resources/js/front/components/layout/SubHeading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FrontHome",
  components: {
    Heading: _front_components_layout_Heading_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SubHeading: _front_components_layout_SubHeading_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      travel_programs: [],
      video_data: "",
      video_path: "video/video.mp4"
    };
  },
  metaInfo: {
    title: 'GB-International',
    meta: [{
      property: 'og:description',
      content: 'GBI is a travel educationist rooted in experiential learning. It has tailored made itineraries reflect the classroom curricula and support academic objective.'
    }, {
      property: 'og:title',
      content: 'G.B International is a travel educational specialist for young minds.'
    }, {
      property: 'og:image',
      content: 'https://www.gowithgbi.com/assets/front/images/banner2.jpg'
    }, {
      property: 'og:type',
      content: 'website'
    }, {
      property: 'og:site_name',
      content: 'gowithgbi.com'
    }, {
      property: 'og:url',
      content: 'https://www.gowithgbi.com'
    }]
  },
  created: function created() {
    this.TravelPorgrams();
  },
  methods: {
    TravelPorgrams: function TravelPorgrams() {
      var _this = this;

      this.$axios.get("/api/travel-programs").then(function (response) {
        _this.travel_programs = response.data;
      });
      this.$axios.get("/api/website").then(function (response) {
        _this.video_data = response.data[0].video;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2& ***!
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
  return _c("h1", { staticClass: "gbi_main-heading pt-3 text-capitalize" }, [
    _vm._v("\n    " + _vm._s(_vm.text) + "\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/SubHeading.vue?vue&type=template&id=d853df9c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/layout/SubHeading.vue?vue&type=template&id=d853df9c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("h4", { staticClass: "gbi_sub-heading text-capitalize m-0 p-0" }, [
    _vm._v("\n    " + _vm._s(_vm.text) + "\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/layouts/FrontHome.vue?vue&type=template&id=1d554103&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/layouts/FrontHome.vue?vue&type=template&id=1d554103& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "fronthome" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container" },
      [
        _c("heading", {
          staticClass: "text-center",
          attrs: { text: "Our Travel Programs" }
        }),
        _vm._v(" "),
        _c("sub-heading", {
          staticClass: "text-center",
          attrs: { text: "Immerge in a Riveting Journey" }
        }),
        _vm._v(" "),
        _vm.travel_programs
          ? _c(
              "div",
              { staticClass: "row card-titles" },
              _vm._l(_vm.travel_programs, function(program) {
                return _c("div", { key: program.id, staticClass: "col-sm-4" }, [
                  _c(
                    "div",
                    { staticClass: "card card-1 mb-15" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/explore-destination" } },
                        [
                          _c(
                            "figure",
                            {
                              directives: [
                                { name: "lazyload", rawName: "v-lazyload" }
                              ],
                              staticClass: "image__wrapper"
                            },
                            [
                              _c("ImageSpinner", {
                                staticClass: "image__spinner"
                              }),
                              _vm._v(" "),
                              _c("img", {
                                staticClass: "image__item border-radius-travel",
                                attrs: {
                                  "data-url": program.image,
                                  alt: program.title
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "card-body" }, [
                            _c("h5", { staticClass: "card-title" }, [
                              _vm._v(_vm._s(program.title))
                            ]),
                            _vm._v(" "),
                            _c("p", {
                              staticClass: "card-text",
                              domProps: {
                                innerHTML: _vm._s(program.description)
                              }
                            })
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ])
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _c("sub-heading", {
          staticClass: "text-center pb-2",
          attrs: { text: "Join our adventures at GB International" }
        }),
        _vm._v(" "),
        _c("section", { staticClass: "content-video" }, [
          _vm.video_data.length > 0
            ? _c("div", { staticClass: "content" }, [
                _c("div", { staticClass: "rwd-media" }, [
                  _c(
                    "video",
                    {
                      attrs: {
                        width: "400",
                        controls: "",
                        controlslist: "nodownload"
                      }
                    },
                    [
                      _c("source", {
                        attrs: { src: _vm.video_path, type: "video/mp4" }
                      }),
                      _vm._v(
                        "Your browser does not support HTML5 video.\n          "
                      )
                    ]
                  )
                ])
              ])
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "slidehome" }, [
      _c(
        "div",
        {
          staticClass: "carousel slide",
          attrs: { id: "carouselExampleControls", "data-ride": "carousel" }
        },
        [
          _c("div", { staticClass: "carousel-inner" }, [
            _c("div", { staticClass: "carousel-item active" }, [
              _c("div", {
                staticClass: "img-fluid banner_img image-slide-1 banner_bg",
                attrs: { id: "bannerimg1", alt: "GBI slide" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-item" }, [
              _c("div", {
                staticClass: "img-fluid banner_img image-slide-2 banner_bg",
                attrs: { id: "bannerimg2", alt: "GBI slide" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-item" }, [
              _c("div", {
                staticClass: "img-fluid banner_img image-slide-3 banner_bg",
                attrs: { id: "bannerimg3", alt: "GBI slide" }
              })
            ])
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "carousel-control-prev",
              attrs: {
                href: "#carouselExampleControls",
                role: "button",
                "data-slide": "prev"
              }
            },
            [
              _c("span", {
                staticClass: "carousel-control-prev-icon",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "carousel-control-next",
              attrs: {
                href: "#carouselExampleControls",
                role: "button",
                "data-slide": "next"
              }
            },
            [
              _c("span", {
                staticClass: "carousel-control-next-icon",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/components/layout/Heading.vue":
/*!**********************************************************!*\
  !*** ./resources/js/front/components/layout/Heading.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading.vue?vue&type=template&id=431e53a2& */ "./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&");
/* harmony import */ var _Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading.vue?vue&type=script&lang=js& */ "./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/layout/Heading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Heading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Heading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Heading.vue?vue&type=template&id=431e53a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Heading.vue?vue&type=template&id=431e53a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_template_id_431e53a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/components/layout/SubHeading.vue":
/*!*************************************************************!*\
  !*** ./resources/js/front/components/layout/SubHeading.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubHeading_vue_vue_type_template_id_d853df9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubHeading.vue?vue&type=template&id=d853df9c& */ "./resources/js/front/components/layout/SubHeading.vue?vue&type=template&id=d853df9c&");
/* harmony import */ var _SubHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubHeading.vue?vue&type=script&lang=js& */ "./resources/js/front/components/layout/SubHeading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubHeading_vue_vue_type_template_id_d853df9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubHeading_vue_vue_type_template_id_d853df9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/layout/SubHeading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/layout/SubHeading.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/front/components/layout/SubHeading.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubHeading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/SubHeading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/layout/SubHeading.vue?vue&type=template&id=d853df9c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/front/components/layout/SubHeading.vue?vue&type=template&id=d853df9c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeading_vue_vue_type_template_id_d853df9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubHeading.vue?vue&type=template&id=d853df9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/SubHeading.vue?vue&type=template&id=d853df9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeading_vue_vue_type_template_id_d853df9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubHeading_vue_vue_type_template_id_d853df9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/pages/layouts/FrontHome.vue":
/*!********************************************************!*\
  !*** ./resources/js/front/pages/layouts/FrontHome.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FrontHome_vue_vue_type_template_id_1d554103___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FrontHome.vue?vue&type=template&id=1d554103& */ "./resources/js/front/pages/layouts/FrontHome.vue?vue&type=template&id=1d554103&");
/* harmony import */ var _FrontHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrontHome.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/layouts/FrontHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FrontHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FrontHome_vue_vue_type_template_id_1d554103___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FrontHome_vue_vue_type_template_id_1d554103___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/layouts/FrontHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/layouts/FrontHome.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/front/pages/layouts/FrontHome.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FrontHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/layouts/FrontHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/layouts/FrontHome.vue?vue&type=template&id=1d554103&":
/*!***************************************************************************************!*\
  !*** ./resources/js/front/pages/layouts/FrontHome.vue?vue&type=template&id=1d554103& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_template_id_1d554103___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FrontHome.vue?vue&type=template&id=1d554103& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/layouts/FrontHome.vue?vue&type=template&id=1d554103&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_template_id_1d554103___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FrontHome_vue_vue_type_template_id_1d554103___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);