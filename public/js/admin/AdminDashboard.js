(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/AdminDashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DashboardGBI",
  data: function data() {
    return {
      oddclass: false,
      evenclass: true,
      notifications: [],
      unread: 0
    };
  },
  // Get all the data
  created: function created() {
    this.notificationList();
  },
  // End the process of the the fetching data
  methods: {
    notificationList: function notificationList() {
      var _this = this;

      axios.get("/gbiuser/notifications").then(function (response) {
        if (response.data) {
          _this.notifications = response.data;

          for (var i = 0; i < _this.notifications.length; i++) {
            if (_this.notifications[i].read_at) {//read
            } else {
              _this.unread++;
            }
          }
        }
      });
    },
    markRead: function markRead(id) {
      axios.get("/gbiuser/notification-mark-read/" + id).then(function (response) {});
    },
    deletetour: function deletetour(id) {
      var _this2 = this;

      var uri = 'api/tours/destroy/' + id;
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          setTimeout(function () {
            return $('#example').DataTable();
          }, 1000);
          axios.post(uri).then(function (response) {
            _this2.$store.dispatch('getAllData', '/api/schools');
          });

          _this2.$swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/Dashboard.vue?vue&type=template&id=0fd2e1ca&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/Dashboard.vue?vue&type=template&id=0fd2e1ca& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("section", { staticClass: "content" }, [
      _c("h3", { staticClass: "text-center" }, [_vm._v("GBI Dashboard")]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-6" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6 notification_list" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h6", [
                  _vm._v("Notifications "),
                  _c(
                    "span",
                    { staticClass: "badge badge-success pull-right" },
                    [_vm._v(_vm._s(_vm.unread))]
                  )
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _vm.notifications.length == 0
                  ? _c("div", { staticClass: "text-center" }, [
                      _vm._v("***** You have no notification *****")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.notifications, function(notify) {
                  return _c("div", { key: notify.id, staticClass: "list" }, [
                    notify.read_at
                      ? _c(
                          "div",
                          { staticClass: "alert alert-secondary" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "edit_link",
                                attrs: {
                                  to:
                                    "/view-itinerary/" +
                                    notify.data.itinerary_id
                                }
                              },
                              [
                                _c("p", { staticClass: "text-dark" }, [
                                  _c("b", [
                                    _vm._v(_vm._s(notify.data.from) + " ")
                                  ]),
                                  _vm._v(" " + _vm._s(notify.data.body) + " ")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(notify.created_at))])
                          ],
                          1
                        )
                      : _c(
                          "div",
                          {
                            staticClass: "alert alert-info",
                            on: {
                              click: function($event) {
                                return _vm.markRead(notify.id)
                              }
                            }
                          },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "edit_link",
                                attrs: {
                                  to:
                                    "/view-itinerary/" +
                                    notify.data.itinerary_id
                                }
                              },
                              [
                                _c("p", [
                                  _c("b", [
                                    _vm._v(_vm._s(notify.data.from) + " ")
                                  ]),
                                  _vm._v(" " + _vm._s(notify.data.body) + " ")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(notify.created_at))])
                          ],
                          1
                        )
                  ])
                })
              ],
              2
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-4" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/admin/pages/Dashboard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_0fd2e1ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=0fd2e1ca& */ "./resources/js/admin/pages/Dashboard.vue?vue&type=template&id=0fd2e1ca&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_0fd2e1ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_0fd2e1ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/Dashboard.vue?vue&type=template&id=0fd2e1ca&":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/pages/Dashboard.vue?vue&type=template&id=0fd2e1ca& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_0fd2e1ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=0fd2e1ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/Dashboard.vue?vue&type=template&id=0fd2e1ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_0fd2e1ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_0fd2e1ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);