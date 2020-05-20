webpackJsonp([24],{

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Tour-detail",
  data: function data() {
    return {
      oddclass: false,
      evenclass: true,
      itineraryData: {}
    };
  },
  created: function created() {
    if (localStorage.getItem('login') == '0') {
      this.$router.push('/login');
    }
  },
  mounted: function mounted() {
    var api = "/api/tour-list/" + this.$session.get('user_id');
    this.$store.dispatch("getEditData", api);
  },

  computed: {
    alldata: function alldata() {
      return this.$store.getters.getEditData;
    }
  },
  methods: {}
});

/***/ }),

/***/ 1043:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm.alldata
      ? _c(
          "div",
          { attrs: { id: "itinerary_detail_list" } },
          _vm._l(_vm.alldata, function(item) {
            return _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-2" }),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8" }, [
                item.tour_status == "1"
                  ? _c("div", [
                      _c("div", { staticClass: "list active" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "list_text" }, [
                            _c("h2", [
                              _vm._v(
                                _vm._s(item.source) +
                                  " To " +
                                  _vm._s(item.destination) +
                                  " "
                              ),
                              _c("span", [
                                _vm._v(
                                  "( " +
                                    _vm._s(item.tour_start_date) +
                                    " To " +
                                    _vm._s(item.tour_end_date) +
                                    " )"
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(item.title))])
                          ]),
                          _vm._v(" "),
                          _vm._m(0, true)
                        ])
                      ])
                    ])
                  : item.tour_status == "0"
                  ? _c("div", [
                      _c("div", { staticClass: "list inactive" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "list_text" }, [
                            _c("h2", [
                              _vm._v(
                                _vm._s(item.source) +
                                  " To " +
                                  _vm._s(item.destination) +
                                  " "
                              ),
                              _c("span", [
                                _vm._v(
                                  "( " +
                                    _vm._s(item.tour_start_date) +
                                    " To " +
                                    _vm._s(item.tour_end_date) +
                                    " )"
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(item.title))])
                          ]),
                          _vm._v(" "),
                          _vm._m(1, true)
                        ])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("br")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-2" })
            ])
          }),
          0
        )
      : _c("div", { staticClass: "text-center" }, [
          _c("h1", [_vm._v("You Don't Have Active Tour")])
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "list_img" }, [
      _c("img", {
        attrs: {
          src:
            "https://thumbs.dreamstime.com/z/gambling-cards-hand-1652609.jpg",
          loading: "lazy",
          alt: "list"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "list_img" }, [
      _c("img", {
        attrs: {
          src:
            "https://thumbs.dreamstime.com/z/gambling-cards-hand-1652609.jpg",
          loading: "lazy",
          alt: "thumb"
        }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c548480", module.exports)
  }
}

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(1042)
/* template */
var __vue_template__ = __webpack_require__(1043)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/front/user/Tour-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c548480", Component.options)
  } else {
    hotAPI.reload("data-v-3c548480", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});