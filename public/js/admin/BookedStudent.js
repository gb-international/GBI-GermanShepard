(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/BookedStudent"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/tour/StudentExcelUpload.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/tour/StudentExcelUpload.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _admin_mixins_GroupExcelUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/mixins/GroupExcelUpload */ "./resources/js/admin/mixins/GroupExcelUpload.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AddGroup",
  mixins: [_admin_mixins_GroupExcelUpload__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"]
  },
  data: function data() {
    return {
      excel_form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        excel_file: ""
      })
    };
  },
  mounted: function mounted() {
    this.groupMember();
  },
  methods: {
    add_row: function add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.new_row.push({
          first_name: "",
          last_name: "",
          email: "",
          gender: "",
          age: "",
          mobile: "",
          tour_id: this.$route.params.id,
          school_id: this.$route.params.school_id,
          user_type: "student",
          is_paid: "1"
        });
      }

      this.row_input = "";
    },
    groupMember: function groupMember() {
      var _this = this;

      axios.get("/api/groupmembers/".concat(this.$route.params.id, "/student")).then(function (res) {
        if (res.data) {
          _this.total_row = res.data;
        }
      });
    },
    demoFromHTML: function demoFromHTML() {
      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1___default.a();
      doc.setFont("courier");
      doc.setFontStyle("normal");
      doc.setFontSize(10);
      var string = "";

      for (var i = 0; i <= this.total_row.length - 1; i++) {
        var current = this.total_row[i];
        string += "first_name : " + current.first_name + " , last_name : " + current.last_name + " , Gender :" + current.gender + " , Age : " + current.age + " , Contact : " + current.mobile + "\n";
      }

      doc.text(string, 10, 10);
      doc.save("sample.pdf");
    },
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
          var workbook = xlsx__WEBPACK_IMPORTED_MODULE_2___default.a.read(data, {
            type: "array"
          });
          var sheetName = workbook.SheetNames[0];
          /* DO SOMETHING WITH workbook HERE */

          var worksheet = workbook.Sheets[sheetName];
          var main_data = xlsx__WEBPACK_IMPORTED_MODULE_2___default.a.utils.sheet_to_json(worksheet);

          for (var i = 0; i < main_data.length; i++) {
            // if one row consist 5 columns
            if (Object.keys(main_data[i]).length == 6) {
              //this.total_row.push({first_name:'',last_name:'',gender:'',phoneno:''});
              var store = [];

              for (var j in main_data[i]) {
                store.push(main_data[i][j]);
              }

              var row = {
                first_name: store[0],
                last_name: store[1],
                email: store[2],
                gender: store[3],
                age: store[4],
                mobile: store[5],
                tour_id: vm.$route.params.id,
                school_id: vm.$route.params.school_id
              };
              vm.new_row.push(row);
            }
          }
        };

        reader.readAsArrayBuffer(f);
      } else {
        this.$swal.fire("Alert!", "Please Select .xlsx file", "error");
        return false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/tour/TeacherExcelUpload.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/tour/TeacherExcelUpload.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _admin_mixins_GroupExcelUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/admin/mixins/GroupExcelUpload */ "./resources/js/admin/mixins/GroupExcelUpload.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AddGroup",
  mixins: [_admin_mixins_GroupExcelUpload__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    "has-error": vform__WEBPACK_IMPORTED_MODULE_0__["HasError"]
  },
  data: function data() {
    return {
      excel_form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        excel_file: ""
      })
    };
  },
  mounted: function mounted() {
    this.groupMember();
    console.log(this.selectAll);
  },
  methods: {
    add_row: function add_row() {
      for (var i = 0; i < this.row_input; i++) {
        this.new_row.push({
          first_name: "",
          last_name: "",
          email: "",
          gender: "",
          age: "",
          mobile: "",
          tour_id: this.$route.params.id,
          school_id: this.$route.params.school_id,
          user_type: "teacher",
          is_paid: false
        });
      }

      this.row_input = "";
    },
    groupMember: function groupMember() {
      var _this = this;

      axios.get("/api/groupmembers/".concat(this.$route.params.id, "/teacher")).then(function (res) {
        if (res.data) {
          _this.total_row = res.data;
        }
      });
    },
    demoFromHTML: function demoFromHTML() {
      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_1___default.a();
      doc.setFont("courier");
      doc.setFontStyle("normal");
      doc.setFontSize(10);
      var string = "";

      for (var i = 0; i <= this.total_row.length - 1; i++) {
        var current = this.total_row[i];
        string += "first_name : " + current.first_name + " , last_name : " + current.last_name + " , Gender :" + current.gender + " , Age : " + current.age + " , Contact : " + current.mobile + "\n";
      }

      doc.text(string, 10, 10);
      doc.save("sample.pdf");
    },
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
          var workbook = xlsx__WEBPACK_IMPORTED_MODULE_2___default.a.read(data, {
            type: "array"
          });
          var sheetName = workbook.SheetNames[0];
          /* DO SOMETHING WITH workbook HERE */

          var worksheet = workbook.Sheets[sheetName];
          var main_data = xlsx__WEBPACK_IMPORTED_MODULE_2___default.a.utils.sheet_to_json(worksheet);

          for (var i = 0; i < main_data.length; i++) {
            // if one row consist 5 columns
            if (Object.keys(main_data[i]).length == 6) {
              //this.total_row.push({first_name:'',last_name:'',gender:'',phoneno:''});
              var store = [];

              for (var j in main_data[i]) {
                store.push(main_data[i][j]);
              }

              var row = {
                first_name: store[0],
                last_name: store[1],
                email: store[2],
                gender: store[3],
                age: store[4],
                mobile: store[5],
                tour_id: vm.$route.params.id,
                school_id: vm.$route.params.school_id,
                is_paid: false,
                user_type: "teacher"
              };
              vm.new_row.push(row);
            }
          }
        };

        reader.readAsArrayBuffer(f);
      } else {
        this.$swal.fire("Alert!", "Please Select .xlsx file", "error");
        return false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Groupmember-list.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/Groupmember-list.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_components_tour_StudentExcelUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/admin/components/tour/StudentExcelUpload */ "./resources/js/admin/components/tour/StudentExcelUpload.vue");
/* harmony import */ var _admin_components_tour_TeacherExcelUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/admin/components/tour/TeacherExcelUpload */ "./resources/js/admin/components/tour/TeacherExcelUpload.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AddGroup",
  components: {
    'student-layout': _admin_components_tour_StudentExcelUpload__WEBPACK_IMPORTED_MODULE_0__["default"],
    'teacher-layout': _admin_components_tour_TeacherExcelUpload__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      navigate: 0,
      active: true
    };
  },
  methods: {
    navigateTab: function navigateTab(no) {
      this.navigate = no;

      if (this.navigate == 0) {
        this.active = true;
      } else {
        this.active = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/tour/StudentExcelUpload.vue?vue&type=template&id=3934ef59&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/tour/StudentExcelUpload.vue?vue&type=template&id=3934ef59& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "AddGroup p-t-15" }, [
      _c("div", { staticClass: "row mb-10 pt-3" }, [
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-dark border-0",
              attrs: { type: "button", disabled: _vm.checkbox_state == 0 },
              on: {
                click: function($event) {
                  return _vm.sendLoginDetails()
                }
              }
            },
            [_vm._v("Send Login Credentails")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "input-group filter-search" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.searchQuery,
                  expression: "searchQuery"
                }
              ],
              staticClass: "form-control py-2 border-right-0 border",
              attrs: {
                type: "search",
                value: "search",
                id: "example-search-input",
                placeholder: "Search .."
              },
              domProps: { value: _vm.searchQuery },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.searchQuery = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _vm._m(0)
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2 p-0 text-center" }, [
          _c(
            "a",
            {
              staticClass: "text-dark",
              attrs: { href: "/assets/sample-group-list.xlsx", download: "" }
            },
            [
              _c("i", { staticClass: "fas fa-download" }),
              _vm._v(" Name list formate\n        ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-3" }, [
          _c("div", { staticClass: "form-group file-upload" }, [
            _c(
              "div",
              {
                staticClass: "input-group file-input-group",
                attrs: { "data-controller": "file-input" }
              },
              [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: ".xlsx file upload",
                    readonly: "",
                    "data-target": "file-input.value"
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "file",
                    id: "customFile",
                    name: "file",
                    accept: ".xlsx"
                  },
                  on: {
                    change: function($event) {
                      return _vm.changeExcelFile($event)
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(1)
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row group_list simple-form list-form pl-2 font-12" },
        [
          _c("table", { staticClass: "table text-dark table-bordered" }, [
            _c("thead", [
              _c("th", [
                _vm.total_row.length > 0
                  ? _c("div", { staticClass: "form-check" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectAll,
                            expression: "selectAll"
                          }
                        ],
                        staticClass: "form-check-input checkbox-select-all",
                        attrs: { type: "checkbox", title: "Select All" },
                        domProps: {
                          checked: Array.isArray(_vm.selectAll)
                            ? _vm._i(_vm.selectAll, null) > -1
                            : _vm.selectAll
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.selectAll,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (_vm.selectAll = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.selectAll = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.selectAll = $$c
                            }
                          }
                        }
                      }),
                      _vm._v("Sr.No\n            ")
                    ])
                  : _c("div", [_vm._v("Sr.No")])
              ]),
              _vm._v(" "),
              _c("th", [_vm._v("First Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Last Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Email")]),
              _vm._v(" "),
              _c("th", [_vm._v("Gender")]),
              _vm._v(" "),
              _c("th", [_vm._v("Age")]),
              _vm._v(" "),
              _c("th", [_vm._v("Contact No.")])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.resultQuery, function(data, index) {
                  return _c("tr", { key: data.id, staticClass: "hidden" }, [
                    _c("td", { staticClass: "text-center" }, [
                      _c("div", { staticClass: "form-check" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selected,
                              expression: "selected"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: { type: "checkbox", id: data.id },
                          domProps: {
                            value: data,
                            checked: Array.isArray(_vm.selected)
                              ? _vm._i(_vm.selected, data) > -1
                              : _vm.selected
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$a = _vm.selected,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = data,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.selected = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.selected = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.selected = $$c
                                }
                              },
                              function($event) {
                                return _vm.checkedBox()
                              }
                            ]
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "form-check-label margin-top-11",
                            attrs: { for: "" + data.id }
                          },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(index + 1) +
                                "\n                "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                        attrs: {
                          type: "text",
                          readonly: index != _vm.edit_index
                        },
                        domProps: { value: data.first_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(data, "first_name", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                        attrs: {
                          type: "text",
                          readonly: index != _vm.edit_index
                        },
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                        attrs: {
                          type: "text",
                          readonly: index != _vm.edit_index
                        },
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                        attrs: {
                          type: "text",
                          readonly: index != _vm.edit_index
                        },
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: data.age,
                            expression: "data.age"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          readonly: index != _vm.edit_index
                        },
                        domProps: { value: data.age },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(data, "age", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-8" }, [
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
                            attrs: {
                              type: "text",
                              readonly: index != _vm.edit_index
                            },
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
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-4 justify-content-end" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-group action_item margin-top-11"
                              },
                              [
                                index != _vm.edit_index
                                  ? _c("img", {
                                      staticClass: "edit mr-1",
                                      attrs: {
                                        src: "/assets/front/icons/edit.png"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.edit_row(index)
                                        }
                                      }
                                    })
                                  : _c("img", {
                                      staticClass: "edit mr-1",
                                      attrs: {
                                        src: "/assets/front/icons/update.png"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.update_row(index)
                                        }
                                      }
                                    }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "delete",
                                  attrs: {
                                    src: "/assets/front/icons/delete.png"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.delete_row(index, data.id)
                                    }
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                }),
                _vm._v(" "),
                _vm._l(_vm.new_row, function(data, index) {
                  return _c("tr", { key: index }, [
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(index + 1))
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                            _vm.$set(data, "first_name", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                        attrs: { type: "text" },
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: data.age,
                            expression: "data.age"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: data.age },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(data, "age", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("img", {
                        staticClass: "delete w-16",
                        attrs: { src: "/assets/front/icons/delete.png" },
                        on: {
                          click: function($event) {
                            return _vm.delete_new_row(index)
                          }
                        }
                      })
                    ])
                  ])
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "row reservation_bottom w-100 mt-5 mb-5 justify-content-center text-center"
            },
            [
              _c("div", { staticClass: "col-sm-4 pt-1" }, [
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
              _c("div", { staticClass: "col-sm-5 pt-1" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default itrn_add_btn",
                    attrs: {
                      type: "button",
                      disabled: _vm.new_row_add == false
                    },
                    on: {
                      click: function($event) {
                        return _vm.UserGroupSave()
                      }
                    }
                  },
                  [_vm._v("UPDATE")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-3 add-row-input-button p-0 m-0 text-left"
                },
                [
                  _c("div", { staticClass: "row  p-0 m-0" }, [
                    _c("div", { staticClass: "col-sm-5  p-0 m-0" }, [
                      _c("small", [_vm._v("Add Row")]),
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
                        staticClass: "form-control",
                        attrs: { type: "number", placeholder: "Add Row.." },
                        domProps: { value: _vm.row_input },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.row_input = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-5 pt-24" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info text-white",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.add_row()
                            }
                          }
                        },
                        [_vm._v("Go")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-2" })
                  ])
                ]
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-append" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-outline-secondary border-left-0 border",
          attrs: { type: "button" }
        },
        [_c("i", { staticClass: "fa fa-search" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "label",
        { staticClass: "btn btn-secondary mb-0", attrs: { for: "customFile" } },
        [_vm._v("Browse")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/tour/TeacherExcelUpload.vue?vue&type=template&id=5de37a5c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/tour/TeacherExcelUpload.vue?vue&type=template&id=5de37a5c& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "AddGroup p-t-15" }, [
      _c("div", { staticClass: "row mb-10 pt-3" }, [
        _c("div", { staticClass: "col-sm-3" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-dark border-0",
              attrs: { type: "button", disabled: _vm.checkbox_state == 0 },
              on: {
                click: function($event) {
                  return _vm.sendLoginDetails()
                }
              }
            },
            [_vm._v("\n          Send Login Credentails\n        ")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "input-group filter-search" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.searchQuery,
                  expression: "searchQuery"
                }
              ],
              staticClass: "form-control py-2 border-right-0 border",
              attrs: {
                type: "search",
                value: "search",
                id: "example-search-input",
                placeholder: "Search .."
              },
              domProps: { value: _vm.searchQuery },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.searchQuery = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _vm._m(0)
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2 p-0 text-center" }, [
          _c(
            "a",
            {
              staticClass: "text-dark",
              attrs: { href: "/assets/sample-group-list.xlsx", download: "" }
            },
            [
              _c("i", { staticClass: "fas fa-download" }),
              _vm._v(" Name list formate\n        ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-3" }, [
          _c("div", { staticClass: "form-group file-upload" }, [
            _c(
              "div",
              {
                staticClass: "input-group file-input-group",
                attrs: { "data-controller": "file-input" }
              },
              [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: ".xlsx file upload",
                    readonly: "",
                    "data-target": "file-input.value"
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "file",
                    id: "customFile",
                    name: "file",
                    accept: ".xlsx"
                  },
                  on: {
                    change: function($event) {
                      return _vm.changeExcelFile($event)
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(1)
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row group_list simple-form list-form pl-2 font-12" },
        [
          _c("table", { staticClass: "table text-dark table-bordered" }, [
            _c("thead", [
              _c("th", [
                _vm.total_row.length > 0
                  ? _c("div", { staticClass: "form-check" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectAll,
                            expression: "selectAll"
                          }
                        ],
                        staticClass: "form-check-input checkbox-select-all",
                        attrs: { type: "checkbox", title: "Select All" },
                        domProps: {
                          checked: Array.isArray(_vm.selectAll)
                            ? _vm._i(_vm.selectAll, null) > -1
                            : _vm.selectAll
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.selectAll,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (_vm.selectAll = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.selectAll = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.selectAll = $$c
                            }
                          }
                        }
                      }),
                      _vm._v("Sr.No\n            ")
                    ])
                  : _c("div", [_vm._v("Sr.No")])
              ]),
              _vm._v(" "),
              _c("th", [_vm._v("First Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Last Name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Email")]),
              _vm._v(" "),
              _c("th", [_vm._v("Gender")]),
              _vm._v(" "),
              _c("th", [_vm._v("Age")]),
              _vm._v(" "),
              _c("th", [_vm._v("Paid?")]),
              _vm._v(" "),
              _c("th", [_vm._v("Contact No.")])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm._l(_vm.resultQuery, function(data, index) {
                  return _c("tr", { key: data.id, staticClass: "hidden" }, [
                    _c("td", { staticClass: "text-center" }, [
                      _c("div", { staticClass: "form-check" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selected,
                              expression: "selected"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: { type: "checkbox", id: data.id },
                          domProps: {
                            value: data,
                            checked: Array.isArray(_vm.selected)
                              ? _vm._i(_vm.selected, data) > -1
                              : _vm.selected
                          },
                          on: {
                            change: [
                              function($event) {
                                var $$a = _vm.selected,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = data,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.selected = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.selected = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.selected = $$c
                                }
                              },
                              function($event) {
                                return _vm.checkedBox()
                              }
                            ]
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "form-check-label margin-top-11",
                            attrs: { for: "" + data.id }
                          },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(index + 1) +
                                "\n                "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                        attrs: {
                          type: "text",
                          readonly: index != _vm.edit_index
                        },
                        domProps: { value: data.first_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(data, "first_name", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                        attrs: {
                          type: "text",
                          readonly: index != _vm.edit_index
                        },
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                        attrs: {
                          type: "text",
                          readonly: index != _vm.edit_index
                        },
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                        attrs: {
                          type: "text",
                          readonly: index != _vm.edit_index
                        },
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: data.age,
                            expression: "data.age"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          readonly: index != _vm.edit_index
                        },
                        domProps: { value: data.age },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(data, "age", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "pl-1 pr-1" }, [
                      _c("div", { staticClass: "form-check" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: data.is_paid,
                              expression: "data.is_paid"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: {
                            disabled: index != _vm.edit_index,
                            type: "checkbox",
                            id: data.email
                          },
                          domProps: {
                            value: data.is_paid,
                            checked: Array.isArray(data.is_paid)
                              ? _vm._i(data.is_paid, data.is_paid) > -1
                              : data.is_paid
                          },
                          on: {
                            change: function($event) {
                              var $$a = data.is_paid,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = data.is_paid,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(data, "is_paid", $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      data,
                                      "is_paid",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(data, "is_paid", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "form-check-label margin-top-11",
                            attrs: { for: "" + data.email }
                          },
                          [_vm._v("\n                  Paid\n                ")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-8" }, [
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
                            attrs: {
                              type: "text",
                              readonly: index != _vm.edit_index
                            },
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
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-4 justify-content-end" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "form-group action_item margin-top-11"
                              },
                              [
                                index != _vm.edit_index
                                  ? _c("img", {
                                      staticClass: "edit mr-1",
                                      attrs: {
                                        src: "/assets/front/icons/edit.png"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.edit_row(index)
                                        }
                                      }
                                    })
                                  : _c("img", {
                                      staticClass: "edit mr-1",
                                      attrs: {
                                        src: "/assets/front/icons/update.png"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.update_row(index)
                                        }
                                      }
                                    }),
                                _vm._v(" "),
                                _c("img", {
                                  staticClass: "delete",
                                  attrs: {
                                    src: "/assets/front/icons/delete.png"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.delete_row(index, data.id)
                                    }
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                }),
                _vm._v(" "),
                _vm._l(_vm.new_row, function(data, index) {
                  return _c("tr", { key: index }, [
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(index + 1))
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                            _vm.$set(data, "first_name", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                        attrs: { type: "text" },
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: data.age,
                            expression: "data.age"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: data.age },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(data, "age", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "pl-1 pr-1" }, [
                      _c("div", { staticClass: "form-check" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: data.is_paid,
                              expression: "data.is_paid"
                            }
                          ],
                          staticClass: "form-check-input",
                          attrs: { type: "checkbox", id: data.email },
                          domProps: {
                            value: data.is_paid,
                            checked: Array.isArray(data.is_paid)
                              ? _vm._i(data.is_paid, data.is_paid) > -1
                              : data.is_paid
                          },
                          on: {
                            change: function($event) {
                              var $$a = data.is_paid,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = data.is_paid,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(data, "is_paid", $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      data,
                                      "is_paid",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(data, "is_paid", $$c)
                              }
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "form-check-label margin-top-11",
                            attrs: { for: "" + data.email }
                          },
                          [_vm._v("\n                  Paid\n                ")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
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
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("img", {
                        staticClass: "delete w-16",
                        attrs: { src: "/assets/front/icons/delete.png" },
                        on: {
                          click: function($event) {
                            return _vm.delete_new_row(index)
                          }
                        }
                      })
                    ])
                  ])
                })
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "row reservation_bottom w-100 mt-5 mb-5 justify-content-center text-center"
            },
            [
              _c("div", { staticClass: "col-sm-4 pt-1" }, [
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
                  [_vm._v("\n            DOWNLOAD PDF\n          ")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-5 pt-1" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default itrn_add_btn",
                    attrs: {
                      type: "button",
                      disabled: _vm.new_row_add == false
                    },
                    on: {
                      click: function($event) {
                        return _vm.UserGroupSave()
                      }
                    }
                  },
                  [_vm._v("\n            UPDATE\n          ")]
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-3 add-row-input-button p-0 m-0 text-left"
                },
                [
                  _c("div", { staticClass: "row p-0 m-0" }, [
                    _c("div", { staticClass: "col-sm-5 p-0 m-0" }, [
                      _c("small", [_vm._v("Add Row")]),
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
                        staticClass: "form-control",
                        attrs: { type: "number", placeholder: "Add Row.." },
                        domProps: { value: _vm.row_input },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.row_input = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-5 pt-24" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-info text-white",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.add_row()
                            }
                          }
                        },
                        [_vm._v("\n                Go\n              ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-2" })
                  ])
                ]
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-append" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-outline-secondary border-left-0 border",
          attrs: { type: "button" }
        },
        [_c("i", { staticClass: "fa fa-search" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "label",
        { staticClass: "btn btn-secondary mb-0", attrs: { for: "customFile" } },
        [_vm._v("Browse")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Groupmember-list.vue?vue&type=template&id=367e01b0&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/bookedtour/Groupmember-list.vue?vue&type=template&id=367e01b0& ***!
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "AddGroup p-t-15" }, [
      _c("div", { staticClass: "row text-center text-muted pt-2" }, [
        _c("div", { staticClass: "col p-0 m-0" }, [
          _c(
            "span",
            {
              staticClass: "mb-0 pointer",
              on: {
                click: function($event) {
                  return _vm.navigateTab(0)
                }
              }
            },
            [_vm._v("Student")]
          ),
          _vm._v(" "),
          _c("hr", { class: _vm.active ? "active_tab" : "" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col p-0 m-0" }, [
          _c(
            "span",
            {
              staticClass: "mb-0 pointer",
              on: {
                click: function($event) {
                  return _vm.navigateTab(1)
                }
              }
            },
            [_vm._v("Teacher")]
          ),
          _vm._v(" "),
          _c("hr", { class: _vm.active ? "" : "active_tab" })
        ])
      ]),
      _vm._v(" "),
      _vm.navigate == 0 ? _c("div", [_c("student-layout")], 1) : _vm._e(),
      _vm._v(" "),
      _vm.navigate == 1 ? _c("div", [_c("teacher-layout")], 1) : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/components/tour/StudentExcelUpload.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/admin/components/tour/StudentExcelUpload.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StudentExcelUpload_vue_vue_type_template_id_3934ef59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentExcelUpload.vue?vue&type=template&id=3934ef59& */ "./resources/js/admin/components/tour/StudentExcelUpload.vue?vue&type=template&id=3934ef59&");
/* harmony import */ var _StudentExcelUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentExcelUpload.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/tour/StudentExcelUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StudentExcelUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StudentExcelUpload_vue_vue_type_template_id_3934ef59___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StudentExcelUpload_vue_vue_type_template_id_3934ef59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/tour/StudentExcelUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/tour/StudentExcelUpload.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/components/tour/StudentExcelUpload.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentExcelUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentExcelUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/tour/StudentExcelUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentExcelUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/tour/StudentExcelUpload.vue?vue&type=template&id=3934ef59&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/admin/components/tour/StudentExcelUpload.vue?vue&type=template&id=3934ef59& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentExcelUpload_vue_vue_type_template_id_3934ef59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentExcelUpload.vue?vue&type=template&id=3934ef59& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/tour/StudentExcelUpload.vue?vue&type=template&id=3934ef59&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentExcelUpload_vue_vue_type_template_id_3934ef59___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentExcelUpload_vue_vue_type_template_id_3934ef59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/components/tour/TeacherExcelUpload.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/admin/components/tour/TeacherExcelUpload.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TeacherExcelUpload_vue_vue_type_template_id_5de37a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeacherExcelUpload.vue?vue&type=template&id=5de37a5c& */ "./resources/js/admin/components/tour/TeacherExcelUpload.vue?vue&type=template&id=5de37a5c&");
/* harmony import */ var _TeacherExcelUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeacherExcelUpload.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/tour/TeacherExcelUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TeacherExcelUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TeacherExcelUpload_vue_vue_type_template_id_5de37a5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TeacherExcelUpload_vue_vue_type_template_id_5de37a5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/tour/TeacherExcelUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/tour/TeacherExcelUpload.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/components/tour/TeacherExcelUpload.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherExcelUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeacherExcelUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/tour/TeacherExcelUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherExcelUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/tour/TeacherExcelUpload.vue?vue&type=template&id=5de37a5c&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/admin/components/tour/TeacherExcelUpload.vue?vue&type=template&id=5de37a5c& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherExcelUpload_vue_vue_type_template_id_5de37a5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TeacherExcelUpload.vue?vue&type=template&id=5de37a5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/tour/TeacherExcelUpload.vue?vue&type=template&id=5de37a5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherExcelUpload_vue_vue_type_template_id_5de37a5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TeacherExcelUpload_vue_vue_type_template_id_5de37a5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/mixins/GroupExcelUpload.js":
/*!*******************************************************!*\
  !*** ./resources/js/admin/mixins/GroupExcelUpload.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GroupExcelUpload = {
  data: function data() {
    return {
      selected: [],
      checkbox_state: 0,
      searchQuery: null,
      total_row: [{
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        age: "",
        mobile: "",
        tour_id: this.$route.params.id,
        school_id: this.$route.params.school_id,
        user_type: "student",
        is_paid: "1"
      }],
      new_row: [],
      edit_index: -1,
      row_input: "",
      new_row_add: false
    };
  },
  watch: {
    new_row: function new_row() {
      if (this.new_row.length > 0) {
        this.new_row_add = true;
      } else {
        this.new_row_add = false;
      }
    }
  },
  methods: {
    sendLoginDetails: function sendLoginDetails() {
      var _this = this;

      axios.post("/api/groupmembers/addlogindetail", this.selected).then(function (response) {
        if (response.data == "error") {
          _this.$swal.fire({
            icon: "error",
            title: "Try again",
            text: "Please enter valid travel code!"
          });
        } else {
          _this.$swal.fire("Success", "Students saved and notifications has been sent !!!", "success");
        }
      })["catch"](function (error) {
        _this.$swal.fire({
          icon: "error",
          title: "Try again",
          text: error.data
        });

        _this.handleError(error);
      });
    },
    // Delete Row
    delete_row: function delete_row(index, id) {
      var _this2 = this;

      this.$swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          var data = {
            id: id
          };
          axios.post("/api/groupmember/destroy", data).then(function (response) {
            _this2.$swal.fire("Deleted!", "Member Deleted deleted.", "success");

            _this2.total_row.splice(index, 1);
          })["catch"](function (error) {
            _this2.handleError(error);
          });
        }
      });
    },
    delete_new_row: function delete_new_row(index) {
      this.new_row.splice(index, 1);
    },
    edit_row: function edit_row(index) {
      this.edit_index = index;
    },
    update_row: function update_row(index) {
      this.UserTourUpdate(this.total_row[index]);
      this.edit_index = "";
    },
    UserTourUpdate: function UserTourUpdate(data) {
      var _this3 = this;

      axios.post("/api/groupmembers/update", data).then(function (response) {
        if (response.data == "error") {
          _this3.$swal.fire({
            icon: "error",
            title: "Try again",
            text: "Please enter valid travel code!"
          });
        } else {
          _this3.edit_index = -1;

          _this3.$swal.fire("Success", "Member updated !!!", "success");
        }
      })["catch"](function (error) {
        _this3.$swal.fire({
          icon: "error",
          title: "Try again",
          text: error.data
        });

        _this3.handleError(error);
      });
    },
    UserGroupSave: function UserGroupSave() {
      var _this4 = this;

      for (var i = this.new_row.length - 1; i >= 0; i--) {
        if (this.new_row[i]["first_name"] == "") {
          this.new_row.splice(i, 1);
        }
      }

      axios.post("/api/groupmember/add", this.new_row).then(function (response) {
        if (response.data == "error") {
          _this4.$swal.fire({
            icon: "error",
            title: "Try again",
            text: "Please enter valid travel code!"
          });
        } else {
          _this4.$swal.fire("Success", "Group data has added", "success");

          _this4.new_row = [];
          _this4.new_row_add = false;

          _this4.groupMember();
        }
      })["catch"](function (error) {
        _this4.handleError(error);
      });
    },
    checkedBox: function checkedBox() {
      if (this.selected.length > 0) {
        this.checkbox_state = 1;
      } else {
        this.checkbox_state = 0;
      }
    }
  },
  computed: {
    resultQuery: function resultQuery() {
      var _this5 = this;

      if (this.searchQuery) {
        return this.total_row.filter(function (item) {
          return _this5.searchQuery.toLowerCase().split(" ").every(function (v) {
            return item.first_name.toLowerCase().includes(v);
          });
        });
      } else {
        return this.total_row;
      }
    },
    selectAll: {
      get: function get() {
        return this.resultQuery ? this.selected.length == this.resultQuery.length : false;
      },
      set: function set(value) {
        var selected = [];

        if (value) {
          this.resultQuery.forEach(function (user) {
            selected.push(user);
          });
        }

        this.selected = selected;
        this.checkedBox();
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (GroupExcelUpload);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/Groupmember-list.vue":
/*!******************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/Groupmember-list.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Groupmember_list_vue_vue_type_template_id_367e01b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Groupmember-list.vue?vue&type=template&id=367e01b0& */ "./resources/js/admin/pages/bookedtour/Groupmember-list.vue?vue&type=template&id=367e01b0&");
/* harmony import */ var _Groupmember_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Groupmember-list.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/bookedtour/Groupmember-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Groupmember_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Groupmember_list_vue_vue_type_template_id_367e01b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Groupmember_list_vue_vue_type_template_id_367e01b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/bookedtour/Groupmember-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/Groupmember-list.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/Groupmember-list.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Groupmember_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Groupmember-list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Groupmember-list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Groupmember_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/bookedtour/Groupmember-list.vue?vue&type=template&id=367e01b0&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/admin/pages/bookedtour/Groupmember-list.vue?vue&type=template&id=367e01b0& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groupmember_list_vue_vue_type_template_id_367e01b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Groupmember-list.vue?vue&type=template&id=367e01b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/bookedtour/Groupmember-list.vue?vue&type=template&id=367e01b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groupmember_list_vue_vue_type_template_id_367e01b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groupmember_list_vue_vue_type_template_id_367e01b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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