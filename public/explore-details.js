webpackJsonp([23],{

/***/ 1027:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1028);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("45168cbb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3cb0d243\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ExploreDetail.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3cb0d243\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ExploreDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.main-head[data-v-3cb0d243]{\n  text-decoration: underline;\n}\n.description[data-v-3cb0d243]{\n      font-size: 17px;\n    font-family: raleway;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ 1029:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ExploreDetail",
  data: function data() {
    return {
      day: 0,
      description: '',
      itineraryData: []
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('getEditData', '/api/itinerary/' + this.$route.params.id);
  },

  computed: {
    editData: function editData() {
      this.itineraryData = this.$store.getters.getEditData; // Fill the form with the data
    }
  }
});

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "explorelist" } },
    [
      _c("vue-headful", {
        attrs: {
          title: "GBI Explore Destination",
          description:
            "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button",
          keywords:
            "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs",
          image: "",
          lang: "en_US",
          ogLocale: "en_US,en_UK",
          url: "https://www.gowithgbi.com/resources/explore-destination"
        }
      }),
      _vm._v(" "),
      _c("section", { staticClass: "banner-block" }, [
        _c("img", {
          staticClass: "top-img",
          attrs: {
            src: "/uploadimage/" + _vm.itineraryData.detail_photo,
            loading: "lazy",
            alt: "itinerary"
          }
        })
      ]),
      _vm._v("\n      " + _vm._s(_vm.editData) + "\n      "),
      _c("div", { staticClass: "container" }, [
        _c("h1", { staticClass: "main-head" }, [
          _vm._v(_vm._s(_vm.itineraryData.title))
        ]),
        _vm._v(" "),
        _c("p", {
          staticClass: "description",
          domProps: { innerHTML: _vm._s(_vm.description) }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row", attrs: { id: "explore_detail_part" } },
          _vm._l(_vm.itineraryData.itinerarydays, function(data) {
            return _c("div", { staticClass: "col-sm-4" }, [
              _c("h4", { staticClass: "day_tab" }, [
                _vm._v("Day " + _vm._s(data.day))
              ]),
              _vm._v(" "),
              data.day_source != data.day_destination
                ? _c("h1", { staticClass: "explor-head" }, [
                    _vm._v(
                      _vm._s(data.day_source.toUpperCase()) +
                        " - " +
                        _vm._s(data.day_destination.toUpperCase())
                    )
                  ])
                : _c("h1", { staticClass: "explor-head" }, [
                    _vm._v(_vm._s(data.day_source.toUpperCase()))
                  ]),
              _vm._v(" "),
              _c("div", {
                staticClass: "card-text",
                domProps: { innerHTML: _vm._s(data.day_description) }
              })
            ])
          }),
          0
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3cb0d243", module.exports)
  }
}

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1027)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(1029)
/* template */
var __vue_template__ = __webpack_require__(1030)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3cb0d243"
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
Component.options.__file = "resources/js/components/front/ExploreDetail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cb0d243", Component.options)
  } else {
    hotAPI.reload("data-v-3cb0d243", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});