(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/JobTypeGBI"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Paragraph.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/layout/Paragraph.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
  props: ['text']
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/AboutUs/JobType.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/AboutUs/JobType.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_components_layout_Heading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/components/layout/Heading.vue */ "./resources/js/front/components/layout/Heading.vue");
/* harmony import */ var _front_components_layout_SubHeading_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/layout/SubHeading.vue */ "./resources/js/front/components/layout/SubHeading.vue");
/* harmony import */ var _front_components_layout_Paragraph_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/front/components/layout/Paragraph.vue */ "./resources/js/front/components/layout/Paragraph.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "JobTYpe",
  components: {
    "heading": _front_components_layout_Heading_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    "sub-heading": _front_components_layout_SubHeading_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "paragraph": _front_components_layout_Paragraph_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  metaInfo: {
    title: 'JoinOurTeam | Jobs',
    meta: [{
      name: 'description',
      content: '@GoWithGBI Story On How GBI believes in its core values and implement the same  to make your educational travel program a successful one'
    }, {
      name: 'keywords',
      content: '@GoWithGBI,Our Story,about us,GBI Process,Program Engineering Process ,GBI How we work,learn,explore,discover,dream travel journeys,behind the scenes,dream,educational programs,corporate events,team building programs,international programs,domestic programs'
    }, {
      name: 'url',
      content: 'https://www.gowithgbi.com/about-us/our-story'
    }]
  },
  data: function data() {
    return {
      jobList: []
    };
  },
  created: function created() {
    this.getJobs();
  },
  methods: {
    redirJob: function redirJob(id) {
      this.$router.push('/about-us/join-our-team/job/' + id);
    },
    getJobs: function getJobs() {
      var _this = this;

      this.$axios.get("/api/join-our-team/jobs/" + this.$route.params.jobType).then(function (response) {
        _this.jobList = response.data;
        console.log(response);
      });
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;

      if (files[0].size > 2097152) {
        swal.fire("Alert!", "Resume size should not be more than 2 MB", "warning");
        return false;
      }

      if (!files.length) return;
      this.createImage(files[0]);
      var fileData = e.target.files[0];
      this.form.filename = fileData.name;
    },
    createImage: function createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.form.resume = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    sendmailResume: function sendmailResume() {
      var _this2 = this;

      this.form.post("/api/join-our-team/send").then(function (response) {
        _this2.form.reset();

        _this2.form.filename = "";

        _this2.$swal.fire("Successfully Submited!", "Your resume has been sent to HR Deparment..", "success");
      })["catch"](function () {});
    } // end sendmailResume

  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/AboutUs/JobType.vue?vue&type=style&index=0&id=d75f44d8&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/AboutUs/JobType.vue?vue&type=style&index=0&id=d75f44d8&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.widthControl[data-v-d75f44d8]{\n  width: 70% !important\n}\n.profile_button[data-v-d75f44d8]{\n  margin-top: 5px;\n  background-color: #00c4c4;\n}\n.lDiv[data-v-d75f44d8]{\n  border: 1px solid grey;\n  padding: 15px;\n  margin-bottom: 2vh;\n}\n@media only screen and (max-width: 824px) {\n.widthControl[data-v-d75f44d8]{\n  width: 90% !important\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/AboutUs/JobType.vue?vue&type=style&index=0&id=d75f44d8&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/AboutUs/JobType.vue?vue&type=style&index=0&id=d75f44d8&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./JobType.vue?vue&type=style&index=0&id=d75f44d8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/AboutUs/JobType.vue?vue&type=style&index=0&id=d75f44d8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Paragraph.vue?vue&type=template&id=0c63b1e4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/layout/Paragraph.vue?vue&type=template&id=0c63b1e4& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("p", { staticClass: "gbi_paragraph largeFirstLetter pt-2" }, [
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/AboutUs/JobType.vue?vue&type=template&id=d75f44d8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/AboutUs/JobType.vue?vue&type=template&id=d75f44d8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "ourstory" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm.jobList.length
        ? _c(
            "div",
            { staticClass: "container" },
            [
              _c("heading", {
                staticStyle: {
                  "margin-bottom": "35px !important",
                  "font-size": "26px !important"
                },
                attrs: { text: "Jobs" }
              }),
              _vm._v(" "),
              _vm._l(_vm.jobList, function(job) {
                return _c(
                  "div",
                  { key: job.id, staticClass: "lDiv shadow row mx-2" },
                  [
                    _c(
                      "div",
                      { staticClass: "col-md-10 col-12" },
                      [
                        _c("sub-heading", {
                          staticStyle: {
                            "margin-bottom": "10px !important",
                            "font-weight": "600 !important"
                          },
                          attrs: { text: job.title }
                        }),
                        _vm._v(" "),
                        _c("paragraph", {
                          attrs: { text: job.description.slice(0, 100) }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "col-md-2 col-8 btn profile_button",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.$router.push(
                              "/about-us/join-our-team/job/" + job.id
                            )
                          }
                        }
                      },
                      [_vm._v("\n          View\n        ")]
                    )
                  ]
                )
              })
            ],
            2
          )
        : _c("heading", {
            staticStyle: {
              "margin-left": "12px",
              "margin-bottom": "35px !important",
              "font-size": "20px !important"
            },
            attrs: { text: "No jobs found" }
          })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "advertismentpart" }, [
      _c("img", {
        staticStyle: { height: "100%", width: "100%" },
        attrs: { src: "/assets/front/images/job-banner.png", loading: "lazy" }
      })
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

/***/ "./resources/js/front/components/layout/Paragraph.vue":
/*!************************************************************!*\
  !*** ./resources/js/front/components/layout/Paragraph.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paragraph_vue_vue_type_template_id_0c63b1e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paragraph.vue?vue&type=template&id=0c63b1e4& */ "./resources/js/front/components/layout/Paragraph.vue?vue&type=template&id=0c63b1e4&");
/* harmony import */ var _Paragraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paragraph.vue?vue&type=script&lang=js& */ "./resources/js/front/components/layout/Paragraph.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Paragraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Paragraph_vue_vue_type_template_id_0c63b1e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Paragraph_vue_vue_type_template_id_0c63b1e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/layout/Paragraph.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/layout/Paragraph.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/front/components/layout/Paragraph.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paragraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Paragraph.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Paragraph.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Paragraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/layout/Paragraph.vue?vue&type=template&id=0c63b1e4&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/front/components/layout/Paragraph.vue?vue&type=template&id=0c63b1e4& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paragraph_vue_vue_type_template_id_0c63b1e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Paragraph.vue?vue&type=template&id=0c63b1e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/layout/Paragraph.vue?vue&type=template&id=0c63b1e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paragraph_vue_vue_type_template_id_0c63b1e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Paragraph_vue_vue_type_template_id_0c63b1e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/front/pages/AboutUs/JobType.vue":
/*!******************************************************!*\
  !*** ./resources/js/front/pages/AboutUs/JobType.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JobType_vue_vue_type_template_id_d75f44d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JobType.vue?vue&type=template&id=d75f44d8&scoped=true& */ "./resources/js/front/pages/AboutUs/JobType.vue?vue&type=template&id=d75f44d8&scoped=true&");
/* harmony import */ var _JobType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobType.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/AboutUs/JobType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _JobType_vue_vue_type_style_index_0_id_d75f44d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobType.vue?vue&type=style&index=0&id=d75f44d8&scoped=true&lang=css& */ "./resources/js/front/pages/AboutUs/JobType.vue?vue&type=style&index=0&id=d75f44d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _JobType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JobType_vue_vue_type_template_id_d75f44d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JobType_vue_vue_type_template_id_d75f44d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d75f44d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/AboutUs/JobType.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/AboutUs/JobType.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/front/pages/AboutUs/JobType.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./JobType.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/AboutUs/JobType.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JobType_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/AboutUs/JobType.vue?vue&type=style&index=0&id=d75f44d8&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/front/pages/AboutUs/JobType.vue?vue&type=style&index=0&id=d75f44d8&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobType_vue_vue_type_style_index_0_id_d75f44d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./JobType.vue?vue&type=style&index=0&id=d75f44d8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/AboutUs/JobType.vue?vue&type=style&index=0&id=d75f44d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobType_vue_vue_type_style_index_0_id_d75f44d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobType_vue_vue_type_style_index_0_id_d75f44d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobType_vue_vue_type_style_index_0_id_d75f44d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_JobType_vue_vue_type_style_index_0_id_d75f44d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/pages/AboutUs/JobType.vue?vue&type=template&id=d75f44d8&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/front/pages/AboutUs/JobType.vue?vue&type=template&id=d75f44d8&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobType_vue_vue_type_template_id_d75f44d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./JobType.vue?vue&type=template&id=d75f44d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/AboutUs/JobType.vue?vue&type=template&id=d75f44d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobType_vue_vue_type_template_id_d75f44d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JobType_vue_vue_type_template_id_d75f44d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);