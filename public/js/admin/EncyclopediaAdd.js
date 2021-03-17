(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/EncyclopediaAdd"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-search-select */ "./node_modules/vue-search-select/dist/VueSearchSelect.common.js");
/* harmony import */ var vue_search_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_search_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/admin/mixins/Vue2EditorMixin */ "./resources/js/admin/mixins/Vue2EditorMixin.js");
/* harmony import */ var _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/components/buttons/FormButtons.vue */ "./resources/js/admin/components/buttons/FormButtons.vue");
/* harmony import */ var _admin_components_buttons_SubmitButton_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/admin/components/buttons/SubmitButton.vue */ "./resources/js/admin/components/buttons/SubmitButton.vue");
/* harmony import */ var _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/admin/components/layout/FormLayout.vue */ "./resources/js/admin/components/layout/FormLayout.vue");
/* harmony import */ var _admin_components_form_DropdownFilter_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/admin/components/form/DropdownFilter.vue */ "./resources/js/admin/components/form/DropdownFilter.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewEncyclopedia",
  components: {
    ModelSelect: vue_search_select__WEBPACK_IMPORTED_MODULE_0__["ModelSelect"],
    Form: vform__WEBPACK_IMPORTED_MODULE_1__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_1__["HasError"],
    "form-buttons": _admin_components_buttons_FormButtons_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    "submit-button": _admin_components_buttons_SubmitButton_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    "form-layout": _admin_components_layout_FormLayout_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    "dropdown-filter": _admin_components_form_DropdownFilter_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  mixins: [_admin_mixins_Vue2EditorMixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      state_list: [],
      attachments: [],
      images: [],
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        state_name: "",
        map_link: "",
        slug: "",
        description: "",
        thumbnail: [],
        banner_image: [],
        images: [],
        files: []
      })
    };
  },
  created: function created() {
    this.stateData();
  },
  methods: {
    stateData: function stateData() {
      var _this = this;

      axios.get("/api/state").then(function (res) {
        if (res.data) {
          _this.options = [];

          for (var i = 0; i < res.data.length; i++) {
            _this.state_list.push({
              name: res.data[i].name,
              id: res.data[i].id
            });
          }
        }
      });
    },
    UpdateState: function UpdateState(v) {
      this.form.state_name = v.name;
      this.slugCreate(v.name);
    },
    // This function will be called every time you add a file
    uploadFieldChange: function uploadFieldChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      for (var i = files.length - 1; i >= 0; i--) {
        this.createImage(e.target.files[i].name, files[i]);
      }
    },
    createImage: function createImage(name, file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.form.files.push({
          filename: name,
          content: e.target.result
        });
      };

      reader.readAsDataURL(file);
    },
    addData: function addData() {
      var _this2 = this;

      this.form.post("/api/encyclopedias").then(function (res) {
        _this2.$toast.fire({
          icon: "success",
          title: "Encyclopedia Added successfully"
        });

        _this2.$router.push('/encyclopedias');
      })["catch"](function () {});
    },
    slugCreate: function slugCreate(value) {
      var slug = "";

      if (value) {
        value = value.toLowerCase(); // Trim the last whitespace

        slug = value.replace(/\s*$/g, ""); // Change whitespace to "-"

        this.form.slug = slug.replace(/\s+/g, "-");
      }
    },
    changeImage: function changeImage(event, model) {
      var _this3 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        switch (model) {
          case "thumbnail":
            _this3.form.thumbnail.push({
              name: file.name,
              file: event.target.result
            });

            _this3.images["thumbnail"] = event.target.result;
            break;

          case "banner":
            _this3.form.banner_image.push({
              name: file.name,
              file: event.target.result
            });

            _this3.images.banner_image = event.target.result;
            break;

          default:
            console.log("please select valid image");
        }
      };

      reader.readAsDataURL(file);
    },
    changePhotos: function changePhotos(event) {
      var _this4 = this;

      var _loop = function _loop() {
        var file = event.target.files[i];
        var reader = new FileReader();

        reader.onload = function (event) {
          _this4.form.images.push({
            name: file.name,
            file: event.target.result
          });
        };

        reader.readAsDataURL(file);
      };

      for (var i = 0; i < event.target.files.length; i++) {
        _loop();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue?vue&type=template&id=5f0596fa&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue?vue&type=template&id=5f0596fa& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
                    return _vm.addData()
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "state_name" } }, [
                          _vm._v("State")
                        ]),
                        _vm._v(" "),
                        _c("dropdown-filter", {
                          staticClass: "mb-2",
                          attrs: { itemList: _vm.state_list },
                          on: { "update:option": _vm.UpdateState }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "state_name" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "slug" } }, [
                          _vm._v("Slug")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.slug,
                              expression: "form.slug"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("slug") },
                          attrs: {
                            type: "text",
                            placeholder: "Enter Map Link",
                            rows: "6",
                            readonly: ""
                          },
                          domProps: { value: _vm.form.slug },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "slug", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "slug" }
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
                        _c("label", { attrs: { for: "map_link" } }, [
                          _vm._v("Map Link")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.map_link,
                              expression: "form.map_link"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("map_link")
                          },
                          attrs: {
                            placeholder: "Enter Map Link",
                            rows: "6",
                            required: ""
                          },
                          domProps: { value: _vm.form.map_link },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "map_link",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "map_link" }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "descriptionId" } }, [
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
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c(
                      "div",
                      { staticClass: "form-group itinerary_image" },
                      [
                        _c(
                          "label",
                          { staticClass: "label", attrs: { for: "thumbnail" } },
                          [_vm._v("Please upload thumbnail image !")]
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "select_image",
                          class: {
                            "is-invalid": _vm.form.errors.has("thumbnail")
                          },
                          attrs: {
                            type: "file",
                            accept: "jpeg, jpg, png, gif"
                          },
                          on: {
                            change: function($event) {
                              return _vm.changeImage($event, "thumbnail")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("img", {
                          attrs: {
                            src: _vm.images.thumbnail,
                            alt: "",
                            width: "80",
                            height: "80"
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "thumbnail" }
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
                        _c(
                          "label",
                          { staticClass: "label", attrs: { for: "input" } },
                          [_vm._v("Please upload a Banner image !")]
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("input", {
                          class: {
                            "is-invalid": _vm.form.errors.has("banner_image")
                          },
                          attrs: { name: "banner_image", type: "file" },
                          on: {
                            change: function($event) {
                              return _vm.changeImage($event, "banner")
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "banner_image width-140",
                          attrs: { src: _vm.images.banner_image, alt: "" }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "banner_image" }
                        })
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "images" } }, [
                        _vm._v("Select Multiple Images")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        ref: "attachments",
                        staticClass: "form-control w-100",
                        attrs: { type: "file", multiple: "multiple" },
                        on: { change: _vm.changePhotos }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c("label", { attrs: { for: "pdfs" } }, [
                      _vm._v("Upload Itinerary Pdf ( Multiple )")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "file",
                        accept: ".pdf",
                        multiple: "multiple"
                      },
                      on: { change: _vm.uploadFieldChange }
                    })
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

/***/ "./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue":
/*!********************************************************************!*\
  !*** ./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_encyclopedia_vue_vue_type_template_id_5f0596fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New-encyclopedia.vue?vue&type=template&id=5f0596fa& */ "./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue?vue&type=template&id=5f0596fa&");
/* harmony import */ var _New_encyclopedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New-encyclopedia.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_encyclopedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_encyclopedia_vue_vue_type_template_id_5f0596fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_encyclopedia_vue_vue_type_template_id_5f0596fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/encyclopedia/New-encyclopedia.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_encyclopedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New-encyclopedia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_encyclopedia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue?vue&type=template&id=5f0596fa&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue?vue&type=template&id=5f0596fa& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_encyclopedia_vue_vue_type_template_id_5f0596fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New-encyclopedia.vue?vue&type=template&id=5f0596fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/encyclopedia/New-encyclopedia.vue?vue&type=template&id=5f0596fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_encyclopedia_vue_vue_type_template_id_5f0596fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_encyclopedia_vue_vue_type_template_id_5f0596fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);