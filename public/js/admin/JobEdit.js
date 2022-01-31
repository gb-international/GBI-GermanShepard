(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/JobEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/jobs/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_buttons_SubmitButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/components/buttons/SubmitButton.vue */ "./resources/js/admin/components/buttons/SubmitButton.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/mixins/Vue2EditorMixin */ "./resources/js/admin/mixins/Vue2EditorMixin.js");
/* harmony import */ var vue_search_select_dist_VueSearchSelect_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-search-select/dist/VueSearchSelect.css */ "./node_modules/vue-search-select/dist/VueSearchSelect.css");
/* harmony import */ var vue_search_select_dist_VueSearchSelect_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_search_select_dist_VueSearchSelect_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_6__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "EditJob",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_6___default.a,
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    "submit-button": _admin_components_buttons_SubmitButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mixins: [_admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_4__["default"]],
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        title: "",
        description: "",
        job_type: ""
      }),
      job_types: [{
        name: 'Technology & Design',
        id: 'Technology & Design'
      }, {
        name: 'Operation',
        id: 'Operation'
      }, {
        name: 'Reservations',
        id: 'Reservations'
      }, {
        name: 'Sales & Marketing',
        id: 'Sales & Marketing'
      }, {
        name: 'Finance',
        id: 'Finance'
      }, {
        name: 'Product & Project Management',
        id: 'Product & Project Management'
      }],
      loading: false
    };
  },
  mounted: function mounted() {
    this.editJob();
  },
  methods: {
    editJob: function editJob() {
      var _this = this;

      axios.get("/api/jobs/".concat(this.$route.params.id, "/edit")).then(function (response) {
        setTimeout(function () {
          return $("#example").DataTable();
        }, 1000);
        console.log(response);

        _this.form.fill(response.data);

        _this.form.job_type = {
          name: response.data.job_type,
          id: response.data.job_type
        };
      });
    },
    UpdateJob: function UpdateJob() {
      var _this2 = this;

      this.loading = true;
      this.form.job_type = this.form.job_type.name;
      this.form.put("/api/jobs/".concat(this.$route.params.id)).then(function (response) {
        console.log(response); //   this.$router.go(-1);

        _this2.$toast.fire({
          icon: "success",
          title: "Successfully Updated"
        });

        _this2.loading = false;

        _this2.$router.push('/jobs');
      })["catch"](function () {});
    },
    back: function back() {
      this.$router.push("/jobs");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Edit.vue?vue&type=template&id=62dda16a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/jobs/Edit.vue?vue&type=template&id=62dda16a& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("form-layout", {
        scopedSlots: _vm._u([
          {
            key: "formdata",
            fn: function () {
              return [
                _c(
                  "form",
                  {
                    attrs: { role: "form", enctype: "multipart/form-data" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.UpdateJob()
                      },
                    },
                  },
                  [
                    _vm.form.title
                      ? _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-12" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { attrs: { for: "title" } }, [
                                  _vm._v("Job Title"),
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.title,
                                      expression: "form.title",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has("title"),
                                  },
                                  attrs: {
                                    type: "text",
                                    placeholder: "Enter title",
                                  },
                                  domProps: { value: _vm.form.title },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "title",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "title" },
                                }),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-12" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { attrs: { for: "job_type" } }, [
                                  _vm._v("Job Type"),
                                ]),
                                _vm._v(" "),
                                _c("multiselect", {
                                  attrs: {
                                    options: _vm.job_types,
                                    "close-on-select": true,
                                    placeholder: "Choose Job Type",
                                    label: "name",
                                    "track-by": "name",
                                  },
                                  model: {
                                    value: _vm.form.job_type,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.form, "job_type", $$v)
                                    },
                                    expression: "form.job_type",
                                  },
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "job_type" },
                                }),
                                _vm._v(" "),
                                _vm.categoryWarn && !_vm.form.job_type
                                  ? _c("p", { staticClass: "warn-error" }, [
                                      _vm._v(" Select Job Type."),
                                    ])
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-12" }, [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("label", { attrs: { for: "description" } }, [
                                  _vm._v("Job Description"),
                                ]),
                                _vm._v(" "),
                                _c("vue-editor", {
                                  class: {
                                    "is-invalid":
                                      _vm.form.errors.has("description"),
                                  },
                                  attrs: {
                                    customModules: _vm.customModulesForEditor,
                                    editorOptions: _vm.editorSettings,
                                    id: "editor",
                                    useCustomImageHandler: "",
                                  },
                                  on: {
                                    "image-added": _vm.handleImageAdded,
                                    "image-removed": _vm.handleImageRemoved,
                                  },
                                  model: {
                                    value: _vm.form.description,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.form, "description", $$v)
                                    },
                                    expression: "form.description",
                                  },
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: {
                                    form: _vm.form,
                                    field: "description",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("form-buttons"),
                  ],
                  1
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/mixins/Vue2EditorMixin.js":
/*!******************************************************!*\
  !*** ./resources/js/admin/mixins/Vue2EditorMixin.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var quill_image_drop_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-image-drop-module */ "./node_modules/quill-image-drop-module/index.js");
/* harmony import */ var quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill-image-resize-module */ "./node_modules/quill-image-resize-module/image-resize.min.js");
/* harmony import */ var quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2__);



var Vue2EditorMixin = {
  components: {
    "vue-editor": vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"]
  },
  data: function data() {
    return {
      customModulesForEditor: [{
        alias: "imageDrop",
        module: quill_image_drop_module__WEBPACK_IMPORTED_MODULE_1__["ImageDrop"]
      }, {
        alias: "imageResize",
        module: quill_image_resize_module__WEBPACK_IMPORTED_MODULE_2___default.a
      }],
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {}
        }
      }
    };
  },
  methods: {
    handleImageAdded: function handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);
      axios({
        url: "/api/images",
        method: "POST",
        data: formData
      }).then(function (result) {
        var url = result.data.url; // Get url from response

        Editor.insertEmbed(cursorLocation, "image", url);
        resetUploader();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    handleImageRemoved: function handleImageRemoved(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("image", file);
      axios({
        url: "/api/images/delete",
        method: "POST",
        data: formData
      }).then(function (result) {
        var url = result.data.url; // Get url from response

        Editor.insertEmbed(cursorLocation, "image", url);
        resetUploader();
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Vue2EditorMixin);

/***/ }),

/***/ "./resources/js/admin/pages/jobs/Edit.vue":
/*!************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Edit.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_62dda16a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=62dda16a& */ "./resources/js/admin/pages/jobs/Edit.vue?vue&type=template&id=62dda16a&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/jobs/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_62dda16a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_62dda16a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/jobs/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/jobs/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/jobs/Edit.vue?vue&type=template&id=62dda16a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Edit.vue?vue&type=template&id=62dda16a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_62dda16a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=62dda16a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Edit.vue?vue&type=template&id=62dda16a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_62dda16a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_62dda16a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);