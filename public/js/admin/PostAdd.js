(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/PostAdd"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/blog/post/New.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/blog/post/New.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/mixins/Vue2EditorMixin */ "./resources/js/admin/mixins/Vue2EditorMixin.js");
/* harmony import */ var vue_search_select_dist_VueSearchSelect_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-search-select/dist/VueSearchSelect.css */ "./node_modules/vue-search-select/dist/VueSearchSelect.css");
/* harmony import */ var vue_search_select_dist_VueSearchSelect_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_search_select_dist_VueSearchSelect_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_buttons_SubmitButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/components/buttons/SubmitButton.vue */ "./resources/js/admin/components/buttons/SubmitButton.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_components_form_DropdownFilter_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/admin/components/form/DropdownFilter.vue */ "./resources/js/admin/components/form/DropdownFilter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewPost",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_0__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_3___default.a,
    'form-buttons': _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'submit-button': _admin_components_buttons_SubmitButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'form-layout': _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    "dropdown-filter": _admin_components_form_DropdownFilter_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      categories: [],
      tags: [],
      img_image: false,
      status_list: [{
        name: "Draft",
        id: 0
      }, {
        name: "Public",
        id: 1
      }],
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        title: "",
        description: "",
        summery: "",
        image: [],
        meta_title: "",
        meta_keyword: "",
        status: "",
        category_id: "",
        tags: []
      })
    };
  },
  mounted: function mounted() {
    this.getCategories();
    this.getTags();
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;

      axios.get("/api/categories").then(function (res) {
        if (res) {
          for (var i = 0; i < res.data.length; i++) {
            _this.categories.push({
              name: res.data[i].title,
              id: res.data[i].id
            });
          }
        }
      });
    },
    UpdateCategory: function UpdateCategory(v) {
      this.form.category_id = v.id;
    },
    updateStatus: function updateStatus(v) {
      this.form.status = v.id;
    },
    getTags: function getTags() {
      var _this2 = this;

      axios.get("/api/tags").then(function (response) {
        _this2.tags = response.data;
      });
    },
    AddPost: function AddPost() {
      var _this3 = this;

      this.form.post("/api/posts").then(function (re) {
        _this3.$swal.fire("Added!", "Post Added successfully", "success");

        _this3.$router.push('/posts');
      })["catch"](function () {});
    },
    changeDetailPhoto: function changeDetailPhoto(event) {
      var _this4 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this4.form.image.push({
          'name': file.name,
          'file': event.target.result
        });

        _this4.img_image = event.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/blog/post/New.vue?vue&type=template&id=b82640f6&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/blog/post/New.vue?vue&type=template&id=b82640f6& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                    return _vm.AddPost()
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "title" } }, [
                          _vm._v("Title")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.title,
                              expression: "form.title"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("title") },
                          attrs: { type: "text", placeholder: "Enter title" },
                          domProps: { value: _vm.form.title },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "title", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "title" }
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
                          _vm._v("Description")
                        ]),
                        _vm._v(" "),
                        _c("vue-editor", {
                          class: {
                            "is-invalid": _vm.form.errors.has("description")
                          },
                          attrs: {
                            customModules: _vm.customModulesForEditor,
                            editorOptions: _vm.editorSettings,
                            id: "editor",
                            useCustomImageHandler: ""
                          },
                          on: {
                            "image-added": _vm.handleImageAdded,
                            "image-removed": _vm.handleImageRemoved
                          },
                          model: {
                            value: _vm.form.description,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "description", $$v)
                            },
                            expression: "form.description"
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
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "description" } }, [
                          _vm._v("Summery")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.summery,
                              expression: "form.summery"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("summery")
                          },
                          attrs: {
                            row: "3",
                            type: "text",
                            placeholder: "Enter summery"
                          },
                          domProps: { value: _vm.form.summery },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "summery", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "summery" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "meta_title" } }, [
                          _vm._v("Meta Title")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.meta_title,
                              expression: "form.meta_title"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("meta_title")
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Enter meta title"
                          },
                          domProps: { value: _vm.form.meta_title },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "meta_title",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "meta_title" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "meta_keyword" } }, [
                          _vm._v("Meta Keywords")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.meta_keyword,
                              expression: "form.meta_keyword"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("meta_keyword")
                          },
                          attrs: {
                            type: "text",
                            placeholder: "Enter meta title"
                          },
                          domProps: { value: _vm.form.meta_keyword },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "meta_keyword",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "meta_keyword" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "meta_keyword" } }, [
                          _vm._v("Status")
                        ]),
                        _vm._v(" "),
                        _c("dropdown-filter", {
                          staticClass: "mb-2",
                          attrs: { itemList: _vm.status_list },
                          on: { "update:option": _vm.updateStatus }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "meta_keyword" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "categories" } }, [
                          _vm._v("Category")
                        ]),
                        _vm._v(" "),
                        _c("dropdown-filter", {
                          staticClass: "mb-2",
                          attrs: { itemList: _vm.categories },
                          on: { "update:option": _vm.UpdateCategory }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "categories" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "tags" } }, [
                          _vm._v("Tags")
                        ]),
                        _vm._v(" "),
                        _c("multiselect", {
                          attrs: {
                            options: _vm.tags,
                            multiple: true,
                            "close-on-select": true,
                            placeholder: "Pick Tags",
                            label: "title",
                            "track-by": "title"
                          },
                          model: {
                            value: _vm.form.tags,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "tags", $$v)
                            },
                            expression: "form.tags"
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "tags" }
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
                        _c(
                          "label",
                          { staticClass: "label", attrs: { for: "input" } },
                          [_vm._v("Please upload a Banner image !")]
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("input", {
                          class: { "is-invalid": _vm.form.errors.has("image") },
                          attrs: { type: "file" },
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
                          staticClass: "image w-100",
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

/***/ "./resources/js/admin/pages/blog/post/New.vue":
/*!****************************************************!*\
  !*** ./resources/js/admin/pages/blog/post/New.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_vue_vue_type_template_id_b82640f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=b82640f6& */ "./resources/js/admin/pages/blog/post/New.vue?vue&type=template&id=b82640f6&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/blog/post/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_vue_vue_type_template_id_b82640f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_vue_vue_type_template_id_b82640f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/blog/post/New.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/blog/post/New.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/pages/blog/post/New.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/blog/post/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/blog/post/New.vue?vue&type=template&id=b82640f6&":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/pages/blog/post/New.vue?vue&type=template&id=b82640f6& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_b82640f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=template&id=b82640f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/blog/post/New.vue?vue&type=template&id=b82640f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_b82640f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_b82640f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);