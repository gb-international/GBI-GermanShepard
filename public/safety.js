webpackJsonp([14],{

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(955)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(957)
/* template */
var __vue_template__ = __webpack_require__(958)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62bb5c7a"
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
Component.options.__file = "resources/js/components/front/SafetySecurity.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62bb5c7a", Component.options)
  } else {
    hotAPI.reload("data-v-62bb5c7a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(956);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("b68fb56c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62bb5c7a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SafetySecurity.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62bb5c7a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SafetySecurity.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 957:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "SafetySecurity"
});

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "safetysecurity" } },
    [
      _c("vue-headful", {
        attrs: {
          title: "Safety and Security",
          description:
            "@GoWithGBI aims to provide complete safety of its travellers during the education programs,GBI team members assuers the safety of passengers and is known for it ",
          keywords:
            "@GoWithGBI,travel safety tips,our security policies,GBI strict policies,GBI terms and conditions,safe travel",
          image: "",
          lang: "en_US",
          ogLocale: "en_US,en_UK",
          url: "https://www.gowithgbi.com/about-us/safety-security"
        }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "safety-security" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "row" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 col-lg-6" }, [
                _c("img", {
                  staticClass: "safe-seu-img ",
                  attrs: {
                    id: "safetyimg1",
                    src: "/assets/front/images/safety_security.jpg",
                    loading: "lazy",
                    alt: "safety security"
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("h2", [
              _vm._v("We Put Efforts to Make Your Trip Worth Breathe Taking")
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Students are accompanied by experienced and friendly travel guide ensuring their safety and security. Our guides have been carefully selected for their sensitivity and knowledge of the destination. Besides their day-to-day responsibilities, they are also trained to deal with an unforeseen circumstance. They work with all efforts to transform every experience into effective learning."
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "clear" })
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text_on_image" }, [
      _c("section", { staticClass: "banner-block safety_banner" }),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("p", { staticClass: "heading" }, [_vm._v("SAFETY & SECURITY")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6 col-lg-6" }, [
      _c("h1", [_vm._v("Safety and Security")]),
      _vm._v(" "),
      _c("h2", [_vm._v("Your Safety Our Responsibility")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "We curate and execute our programs in such a way that can enhance one’s living skills through the experience they gather while moving out of their comfort zone. We appreciate and understand the concern showed by parents and the institution towards the safety, security and comfort of the students during the proposed educational tour. We, therefore, intend to provide a worry-free experience.  Our extensive experience, customized itineraries and risk management standards with safety protocols strive to deliver a hassle-free tour under the guidance of our trained escorts."
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62bb5c7a", module.exports)
  }
}

/***/ })

});