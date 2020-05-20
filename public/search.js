webpackJsonp([13],{

/***/ 1029:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1030);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("739f9885", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b470d39\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b470d39\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Search.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n#app[data-v-0b470d39] {\r\n  font-family: \"Avenir\", Helvetica, Arial, sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  color: #2c3e50;\r\n  margin-top: 60px;\n}\n.autocomplete[data-v-0b470d39] {\r\n  position: relative;\r\n  width: 130px;\n}\n.autocomplete-results[data-v-0b470d39] {\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 1px solid #eeeeee;\r\n  height: 120px;\r\n  overflow: auto;\r\n  width: 100%;\n}\n.autocomplete-result[data-v-0b470d39] {\r\n  list-style: none;\r\n  text-align: left;\r\n  padding: 4px 2px;\r\n  cursor: pointer;\n}\n.autocomplete-result.is-active[data-v-0b470d39],\r\n.autocomplete-result[data-v-0b470d39]:hover {\r\n  background-color: #00aeefa8;\r\n  color: white;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 1031:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "search",
  data: function data() {
    return {
      isOpen: false,
      results: [],
      resultsdata: [],
      search: "",
      searchdata: "",
      isLoading: false,
      arrowCounter: 0
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/search').then(function (response) {
      _this.results = response.data.data;
      _this.resultsdata = response.data.data;
    });
  },

  computed: {
    filteredSource: function filteredSource() {
      var _this2 = this;

      if (!this.search) return this.results;
      return this.results.filter(function (result) {
        return result.source.toLowerCase().includes(_this2.search.toLowerCase());
      });
    }
  },
  methods: {
    onChange: function onChange() {
      // Let's warn the parent that a change was made
      this.$emit("input", this.search);

      // Is the data given by an outside ajax request?
      if (this.isAsync) {
        this.isLoading = true;
      } else {
        // Let's search our flat array
        // this.filterResults();
        this.isOpen = true;
      }
    },
    setResult: function setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
    onArrowDown: function onArrowDown(evt) {
      if (this.arrowCounter < this.filteredSource.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp: function onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter: function onEnter() {
      this.search = this.filteredSource[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    handleClickOutside: function handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    }
  },
  watch: {
    items: function items(val, oldValue) {
      // actually compare them
      if (val.length !== oldValue.length) {
        this.results = val;
        this.isLoading = false;
      }
    }
  },
  mounted: function mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed: function destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  }
});

/***/ }),

/***/ 1032:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "autocomplete" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.search,
            expression: "search"
          }
        ],
        attrs: { type: "text" },
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
          ],
          keyup: [
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "down", 40, $event.key, [
                  "Down",
                  "ArrowDown"
                ])
              ) {
                return null
              }
              return _vm.onArrowDown($event)
            },
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
              ) {
                return null
              }
              return _vm.onArrowUp($event)
            },
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.onEnter($event)
            }
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
          staticClass: "autocomplete-results",
          attrs: { id: "autocomplete-results" }
        },
        [
          _vm.isLoading
            ? _c("li", { staticClass: "loading" }, [
                _vm._v("\n        Loading results...\n      ")
              ])
            : _vm._l(_vm.filteredSource, function(result, i) {
                return _c(
                  "li",
                  {
                    key: i,
                    staticClass: "autocomplete-result",
                    class: { "is-active": i === _vm.arrowCounter },
                    on: {
                      click: function($event) {
                        return _vm.setResult(result.source)
                      }
                    }
                  },
                  [_vm._v("\n        " + _vm._s(result.source) + "\n      ")]
                )
              })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b470d39", module.exports)
  }
}

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1029)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(1031)
/* template */
var __vue_template__ = __webpack_require__(1032)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b470d39"
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
Component.options.__file = "resources/js/components/front/Search.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b470d39", Component.options)
  } else {
    hotAPI.reload("data-v-0b470d39", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});