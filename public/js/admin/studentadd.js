(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/studentadd"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/student/New-student.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/student/New-student.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NewStudent",
  components: {
    Form: vform__WEBPACK_IMPORTED_MODULE_2__["Form"],
    "has-error": vform__WEBPACK_IMPORTED_MODULE_2__["HasError"]
  },
  data: function data() {
    return {
      school_id: 0,
      school_list: [],
      row_input: "",
      excel_form: new vform__WEBPACK_IMPORTED_MODULE_2__["Form"]({
        excel_file: ""
      }),
      output: "",
      total_row: [{
        first_name: "",
        last_name: "",
        gender: "",
        father_name: "",
        email: "",
        mobile: "",
        alternate_mobile: "",
        dob: "",
        "class": "",
        address: ""
      }]
    };
  },
  // Get all the data
  created: function created() {
    var _this = this;

    axios.get("/api/school").then(function (response) {
      if (response.data) {
        _this.school_list = response.data.data;
      }
    });
  },
  // End the process of the the fetching data
  methods: {
    // Download pdf
    demoFromHTML: function demoFromHTML() {
      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_0___default.a();
      doc.setFont("courier");
      doc.setFontStyle("normal");
      doc.setFontSize(10);
      var string = "";

      for (var i = 0; i <= this.total_row.length - 1; i++) {
        var current = this.total_row[i];
        string += "first_name : " + current.first_name + " , last_name : " + current.last_name + " , Gender :" + current.gender + " , Contact : " + current.phoneno + "\n";
      }

      doc.text(string, 10, 10);
      doc.save("sample.pdf");
    },
    /// End download pdf code
    // Update form data
    addData: function addData() {
      var _this2 = this;

      for (var i = this.total_row.length - 1; i >= 0; i--) {
        if (this.total_row[i]["first_name"] == null) {
          this.total_row.splice(i, 1);
        }
      }

      if (this.school_id == 0) {
        this.$toast.fire({
          icon: "error",
          title: "Please Select School !!!"
        });
        return false;
      }

      this.total_row.push({
        school_id: this.school_id
      });
      var path = "/api/student";
      axios.post(path, this.total_row).then(function (response) {
        _this2.$router.push("/students");

        _this2.$toast.fire({
          icon: "success",
          title: "Successfully Updated !!!"
        });
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors || {};
        }
      });
    },
    // End update form data
    // Add add_row() add the row in the form with 4 inputs
    add_row: function add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.total_row.push({
          first_name: "",
          last_name: "",
          gender: "",
          father_name: "",
          email: "",
          mobile: "",
          alternate_mobile: "",
          dob: "",
          "class": "",
          address: ""
        });
      }

      this.row_input = "";
    },
    // End add_row() function
    // Upload excell file to the laravel controller
    changeExcelFile: function changeExcelFile(event) {
      var vm = this;
      var file = event.target.files[0];
      var filename = file.name;
      var ext = filename.split(".").pop();

      if (ext == "xlsx") {
        var files = event.target.files,
            f = files[0];
        var reader = new FileReader();

        reader.onload = function (event) {
          var data = new Uint8Array(event.target.result);
          var workbook = xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.read(data, {
            type: "array"
          });
          var sheetName = workbook.SheetNames[0];
          /* DO SOMETHING WITH workbook HERE */

          var worksheet = workbook.Sheets[sheetName];
          var main_data = xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.utils.sheet_to_json(worksheet);

          for (var i = 0; i < main_data.length; i++) {
            // going through each row
            // if one row consist 4 columns
            if (Object.keys(main_data[i]).length == 10) {
              //this.total_row.push({first_name:'',last_name:'',gender:'',phoneno:''});
              var store = [];

              for (var j in main_data[i]) {
                store.push(main_data[i][j]);
              } // console.log(this.ExcelDateToJSDate(store[7]));


              var serial = store[7];
              var utc_days = Math.floor(serial - 25569);
              var utc_value = utc_days * 86400;
              var date_info = new Date(utc_value * 1000);
              var fractional_day = serial - Math.floor(serial) + 0.0000001;
              var total_seconds = Math.floor(86400 * fractional_day);
              var seconds = total_seconds % 60;
              total_seconds -= seconds;
              var hours = Math.floor(total_seconds / (60 * 60));
              var minutes = Math.floor(total_seconds / 60) % 60;
              var date = date_info.getDate() + "-" + date_info.getMonth() + "-" + date_info.getFullYear();
              var row = {
                first_name: store[0],
                last_name: store[1],
                gender: store[2],
                father_name: store[3],
                email: store[4],
                mobile: store[5],
                alternate_mobile: store[6],
                dob: date,
                "class": store[8],
                address: store[9]
              };
              vm.total_row.push(row);
              console.log(date);
            }
          }
        };

        reader.readAsArrayBuffer(f);
      } else {
        this.$swal.fire("Alert!", "Please Select .xlsx file", "error");
        return false;
      }
    },
    UploadExcel: function UploadExcel() {
      var _this3 = this;

      var path = "/read_excel_file";
      this.excel_form.post(path).then(function (response) {
        var total = response.data;

        _this3.$toast.fire({
          icon: "success",
          title: "Successfully Updated !!!"
        });
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this3.errors = error.response.data.errors || {};
        }
      });
    },
    // Delete Row
    delete_row: function delete_row(index) {
      this.total_row.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/student/New-student.vue?vue&type=style&index=0&id=53049ffe&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/student/New-student.vue?vue&type=style&index=0&id=53049ffe&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.delete_icon[data-v-53049ffe] {\r\n  float: right;\r\n  padding-top: 20px;\r\n  cursor: pointer;\n}\n.delete_icon[data-v-53049ffe]:hover {\r\n  color: red;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/student/New-student.vue?vue&type=style&index=0&id=53049ffe&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/student/New-student.vue?vue&type=style&index=0&id=53049ffe&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New-student.vue?vue&type=style&index=0&id=53049ffe&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/student/New-student.vue?vue&type=style&index=0&id=53049ffe&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/student/New-student.vue?vue&type=template&id=53049ffe&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/student/New-student.vue?vue&type=template&id=53049ffe&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "reservation" }, [
            _c("div", { staticClass: "row student_reservation" }, [
              _c("div", { staticClass: "col-sm-5" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("SELECT SCHOOL")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.lazy",
                          value: _vm.school_id,
                          expression: "school_id",
                          modifiers: { lazy: true }
                        }
                      ],
                      staticClass: "form-control select-field",
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.school_id = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    _vm._l(_vm.school_list, function(data) {
                      return _c(
                        "option",
                        { key: data.id, domProps: { value: data.id } },
                        [_vm._v(_vm._s(data.school_name))]
                      )
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c("form", { attrs: { method: "POST" } }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c("label", [_vm._v("Student List")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { staticClass: "sr-only", attrs: { for: "file" } },
                          [_vm._v("File")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "input-group" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              name: "filename",
                              placeholder: "Upload Excel File e.g. '.xlsx'",
                              readonly: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "input-group-btn" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "btn btn-default custom-file-uploader"
                              },
                              [
                                _c("input", {
                                  attrs: {
                                    type: "file",
                                    name: "file",
                                    onchange:
                                      "this.form.filename.value = this.files.length ? this.files[0].name : ''"
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.changeExcelFile($event)
                                    }
                                  }
                                }),
                                _vm._v("Browse\n                          ")
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "container reservation_table",
                attrs: { id: "student_list" }
              },
              _vm._l(_vm.total_row, function(data, index) {
                return _c("div", { key: data.id, staticClass: "card" }, [
                  _c("form", { staticClass: "form" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "first_name" } }, [
                            _vm._v("First Name")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.first_name,
                                expression: "data.first_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: data.first_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  data,
                                  "first_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "first_name" } }, [
                            _vm._v("Last Name")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.last_name,
                                expression: "data.last_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: data.last_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(data, "last_name", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "first_name" } }, [
                            _vm._v("Gender")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.gender,
                                expression: "data.gender"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: data.gender },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(data, "gender", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "first_name" } }, [
                            _vm._v("Father Name")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.father_name,
                                expression: "data.father_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: data.father_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  data,
                                  "father_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "first_name" } }, [
                            _vm._v("Email")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.email,
                                expression: "data.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "email" },
                            domProps: { value: data.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(data, "email", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "first_name" } }, [
                            _vm._v("Mobile")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.mobile,
                                expression: "data.mobile"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: data.mobile },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(data, "mobile", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "first_name" } }, [
                            _vm._v("Alternate Mobile")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.alternate_mobile,
                                expression: "data.alternate_mobile"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: data.alternate_mobile },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  data,
                                  "alternate_mobile",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "first_name" } }, [
                            _vm._v("DOB")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.dob,
                                expression: "data.dob"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: data.dob },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(data, "dob", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "first_name" } }, [
                            _vm._v("Class")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.class,
                                expression: "data.class"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: data.class },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(data, "class", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "first_name" } }, [
                            _vm._v("Address")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.address,
                                expression: "data.address"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text" },
                            domProps: { value: data.address },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(data, "address", $event.target.value)
                              }
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col justify-content-end" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("p", { staticClass: "delete_icon" }, [
                            _c("i", {
                              staticClass: "fas fa-trash-alt",
                              on: {
                                click: function($event) {
                                  return _vm.delete_row(index)
                                }
                              }
                            })
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row reservation_bottom" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default itrn_add_btn",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.demoFromHTML()
                      }
                    }
                  },
                  [_vm._v("DOWNLOAD PDF")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default itrn_add_btn",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.addData()
                      }
                    }
                  },
                  [_vm._v("SUBMIT")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-3" }, [
                _c("label", [_vm._v("Add Row")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.row_input,
                      expression: "row_input"
                    }
                  ],
                  attrs: { type: "number", name: "add_row" },
                  domProps: { value: _vm.row_input },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.row_input = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn_go",
                    attrs: { type: "button", placeholder: "0" },
                    on: {
                      click: function($event) {
                        return _vm.add_row()
                      }
                    }
                  },
                  [_vm._v("GO")]
                )
              ])
            ])
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
    return _c("div", { staticClass: "col-sm-2" }, [
      _c("div", { staticClass: "print" }, [
        _c("i", { staticClass: "fas fa-print" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/student/New-student.vue":
/*!**********************************************************!*\
  !*** ./resources/js/admin/pages/student/New-student.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_student_vue_vue_type_template_id_53049ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New-student.vue?vue&type=template&id=53049ffe&scoped=true& */ "./resources/js/admin/pages/student/New-student.vue?vue&type=template&id=53049ffe&scoped=true&");
/* harmony import */ var _New_student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New-student.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/student/New-student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _New_student_vue_vue_type_style_index_0_id_53049ffe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./New-student.vue?vue&type=style&index=0&id=53049ffe&scoped=true&lang=css& */ "./resources/js/admin/pages/student/New-student.vue?vue&type=style&index=0&id=53049ffe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _New_student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_student_vue_vue_type_template_id_53049ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_student_vue_vue_type_template_id_53049ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53049ffe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/student/New-student.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/student/New-student.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/pages/student/New-student.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New-student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/student/New-student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/student/New-student.vue?vue&type=style&index=0&id=53049ffe&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/student/New-student.vue?vue&type=style&index=0&id=53049ffe&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_New_student_vue_vue_type_style_index_0_id_53049ffe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New-student.vue?vue&type=style&index=0&id=53049ffe&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/student/New-student.vue?vue&type=style&index=0&id=53049ffe&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_New_student_vue_vue_type_style_index_0_id_53049ffe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_New_student_vue_vue_type_style_index_0_id_53049ffe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_New_student_vue_vue_type_style_index_0_id_53049ffe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_New_student_vue_vue_type_style_index_0_id_53049ffe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_New_student_vue_vue_type_style_index_0_id_53049ffe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/pages/student/New-student.vue?vue&type=template&id=53049ffe&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/admin/pages/student/New-student.vue?vue&type=template&id=53049ffe&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_student_vue_vue_type_template_id_53049ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./New-student.vue?vue&type=template&id=53049ffe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/student/New-student.vue?vue&type=template&id=53049ffe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_student_vue_vue_type_template_id_53049ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_student_vue_vue_type_template_id_53049ffe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);