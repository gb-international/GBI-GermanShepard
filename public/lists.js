webpackJsonp([15],{

/***/ 1024:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1025);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("a5717dca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b3aad9e8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ListItinerary.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b3aad9e8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ListItinerary.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1025:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n.autocomplete[data-v-b3aad9e8] {\r\n  position: relative;\r\n  width: 130px;\n}\n.autocomplete-results[data-v-b3aad9e8] {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 1px solid #eeeeee;\r\n  height: 100px;\r\n  overflow: auto;\r\n  width: 100%;\n}\n.autocomplete-result[data-v-b3aad9e8] {\r\n  list-style: none;\r\n  text-align: left;\r\n  padding: 4px 2px;\r\n  cursor: pointer;\n}\n.autocomplete-result.is-active[data-v-b3aad9e8],\r\n.autocomplete-result[data-v-b3aad9e8]:hover {\r\n  background-color: #4aae9b;\r\n  color: white;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 1026:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    //  name: "ListItinerary",
    //    data() {
    //    return {
    //      data: [],
    //      datas: [],
    //      search: '',
    //      searchs: '',
    //      isOpen: false,
    //      isOpens: false,
    //      arrowCounter: 0,
    //      arrowCounters: 0,
    //    };
    //  },
    // computed: {
    //     filteredSource () {
    //       if (!this.search) return this.data
    //       return this.data.filter((result) => {
    //         return result.source.toLowerCase().includes(this.search.toLowerCase());
    //       });
    //     },
    //      filteredData () {
    //       if (!this.searchs) return this.datas
    //       return this.datas.filter((resultdata) => {
    //         return resultdata.source.toLowerCase().includes(this.searchs.toLowerCase());
    //       });
    //     }

    //   },
    //   created () {
    //     axios.get('/api/search').then(response => {
    //       this.data = response.data.data;
    //       this.datas = response.data.data;
    //     });
    //   },
    //   methods: {
    //      onChange() {
    //     // Let's warn the parent that a change was made
    //     this.$emit("input", this.search);
    //        this.isOpen = true;
    //   },
    //    onChanges() {
    //     this.$emit("input", this.searchs);
    //      // Let's search our flat array
    //        this.isOpens = true;

    //   },
    //     setResult(result) {
    //     this.search = result;
    //     this.isOpen = false;
    //     },
    //     setResults(resultdata) {
    //     this.searchs = resultdata;
    //     this.isOpens = false;
    //     },

    //     handleClickOutside(evt) {
    //     if (!this.$el.contains(evt.target)) {
    //       this.isOpen = false;
    //       this.arrowCounter = -1;
    //     }
    //   },
    //    handleClickOutsides(evt) {
    //     if (!this.$el.contains(evt.target)) {
    //       this.isOpens = false;
    //       this.arrowCounters = -1;
    //     }
    //   }
    // },
    // mounted() {
    //   document.addEventListener("click", this.handleClickOutside);
    //   document.addEventListener("click", this.handleClickOutsides);
    // },
    // destroyed() {
    //   document.removeEventListener("click", this.handleClickOutside);
    //   document.removeEventListener("click", this.handleClickOutsides);
    // }


});

/***/ }),

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "listitinerary" } }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.search,
          expression: "search"
        }
      ],
      attrs: { type: "text", placeholder: "search" },
      domProps: { value: _vm.search },
      on: {
        input: [
          function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.search = $event.target.value
          },
          _vm.onChange
        ]
      }
    }),
    _vm._v(" "),
    _c(
      "ul",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isOpen,
            expression: "isOpen"
          }
        ],
        staticClass: "autocomplete-results"
      },
      _vm._l(_vm.filteredSource, function(result) {
        return _c(
          "li",
          {
            on: {
              click: function($event) {
                return _vm.setResult(result.source)
              }
            }
          },
          [_vm._v("\n      " + _vm._s(result.source) + " \n    ")]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.searchs,
          expression: "searchs"
        }
      ],
      attrs: { type: "text", placeholder: "search Destination" },
      domProps: { value: _vm.searchs },
      on: {
        input: [
          function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.searchs = $event.target.value
          },
          _vm.onChanges
        ]
      }
    }),
    _vm._v(" "),
    _c(
      "ul",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isOpens,
            expression: "isOpens"
          }
        ],
        staticClass: "autocomplete-results"
      },
      _vm._l(_vm.filteredData, function(resultdata) {
        return _c(
          "li",
          {
            on: {
              click: function($event) {
                return _vm.setResults(resultdata.source)
              }
            }
          },
          [_vm._v("\n      " + _vm._s(resultdata.source) + " \n    ")]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b3aad9e8", module.exports)
  }
}

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1024)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(1026)
/* template */
var __vue_template__ = __webpack_require__(1027)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b3aad9e8"
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
Component.options.__file = "resources/js/components/front/ListItinerary.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b3aad9e8", Component.options)
  } else {
    hotAPI.reload("data-v-b3aad9e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});