webpackJsonp([20],{

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(942)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(944)
/* template */
var __vue_template__ = __webpack_require__(945)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e580455"
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
Component.options.__file = "resources/js/components/front/Faq.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e580455", Component.options)
  } else {
    hotAPI.reload("data-v-5e580455", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(943);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("2d3dbf4b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e580455\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Faq.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5e580455\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Faq.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 944:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "Faq"
});

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "faq" } },
    [
      _c("vue-headful", {
        attrs: {
          title: "GBI Frequently Asked Question",
          description:
            "@GoWithGBI helps you answer all your queries  regarding your travel program by just one click of a button",
          keywords:
            "@GoWithGBI,have a question,search for your answer,FAQ,Travel bookings queries,customer service,support helpdesk",
          image: "",
          lang: "en_US",
          ogLocale: "en_US,en_UK",
          url: "https://www.gowithgbi.com/resources/faq"
        }
      }),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "clear" })
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
      _c("section", { staticClass: "banner-block faq_banner" }),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "content" }, [
                _c("h1", { staticClass: "heading" }, [
                  _vm._v("Frequently Asked Questions (FAQ)")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6 search_filter" }, [
              _c("div", { staticClass: "search-p-top mt-35" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Got a question? Shoot at us",
                      title: "Type in a name"
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-2" })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "faq-question" }, [
      _c("h3", [
        _vm._v("Confused? Need not worry, we have answers to your queries.")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("article", { staticClass: "faq-content-search" }, [
          _c("table", { attrs: { id: "myTables" } }, [
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v(" Que. ")]),
              _vm._v(" "),
              _c("td", [
                _vm._v("What is GB International? How does it function?")
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " \n            GB International is an educational specialist that has been serving the academic sector since last 35 years. GBI has successfully served more than hundred educational institutions through organized educational tours. "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "GBI helps students gain practical knowledge by bringing them closer to different technological innovations, culture while imparting them more knowledge of what they get to learn in textbooks also provide learnings outside them. \n           "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(
                  " Cancellation and Refunds for International Tour (For Groups) , Cancellation and Refunds for International Tour (For Groups)"
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " If the tour is cancelled by any reason post reservation then 50 % of the total amount will be fortified. "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "If student cancels his/her trip 30 days prior to departure, 25% of the total amount is to be fortified; if 25-15 days prior to departure than 50% of the total amount and if cancellation is announced 7 days before departure than 100% of the balance amount will be fortified. "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(
                  " Cancellation and Refunds for Domestic Tour (For Groups)"
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " If the tour is cancelled by any reason, the 50% of the amount is to be fortified."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "If the student cancels his/her trip post reservation 30 days prior to departure then 35% of the total amount is to be fortified."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("30 days prior to departure charges would be 35%")
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("20 days prior to departure charges would be 45% ")
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("14 days prior to departure charges would be 65% ")
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("06 days prior to departure charges would be 80% ")
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("days prior to departure charges would be 100%")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(" What are the various mode of payment available?")
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " Student or school authority can make the payment through Cheque or Demand Draft. They can also do online payment through NEFT or RTGS but that has to be a one-time payment. "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(
                  " What are the basic amenities that GB International provide on a tour?"
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " GB International’s services include - Transportation fare, stay in the hotel, meals, 24/7 presence of reliable travel guide, full-time tour director, free entrances/shows and guided sightseeing."
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(
                  " What are the goods and services that GB International does not include in its basic amenities?"
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " In case of increase in the cost of the land arrangements due to the fluctuations, in exchange rates, the passengers shall have to pay the difference before the departure of the tour. Apart from this, students has to bear their own personal expenses."
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(
                  " What are the documents required for an International tour?"
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " For an International tour, GBI requires a Valid Passport (minimum valid period required is 6 months), recent colored passport size photograph and students should have a valid photo Identity card of the school they study."
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(" What are the documents required for a domestic tour?")
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " For a domestic tour, GBI requires a valid student Identity card and recent colored Passport size photograph. "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(
                  " How old do I have to be to travel on GB International journey?"
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " GBI takes students of any age provided that the school authority has no objection to send its students on an educational tour."
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(
                  " How is GB International different from any other educational tour company?"
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " GBI believes in imparting true educational value. Adventure and fun activities are considered to be a part of practical learning. On every tours, GBI strive to deliver well-defined learning objective."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "GBI follows a personalized customer-centric approach, therefore, it provides informative learning shared memories safety and comfort all at a competitive rate. Maintenance of quality is set priority of GB International."
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(" How does GBI address on-going safety and security?")
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " GBI is a government recognized company with stringent practices when it comes to student’s safety and security. Students are accompanied by experienced and sensitive travel guide who looks after the safety of the students 24/7, during the tour. "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(
                  " Does GBI have any consumer privacy policy? If yes, what are those?"
                )
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " Yes, GBI has consumer privacy policy for it believe in keeping its customers safe and worry-free."
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Keeping in mind the comfort zone of the client, GBI try to take as limited information as possible, as permitted by the law. If any information needs to be shared internationally, GBI ensure that client’s privacy is maintained. "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "td-font" }, [
                  _vm._v(
                    "GBI avert its client on a timely basis, in regard to the personal information used. "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(" How much does GBI charge for an International tour?")
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " The cost of the tour depends on the destination and the number of days planned by the client. "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Que. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _vm._v(" What are rights reserved under GBI?")
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", { staticClass: "ques-content" }, [_vm._v("Ans. ")]),
              _vm._v(" "),
              _c("td", { staticClass: "td-font" }, [
                _c("p", [
                  _vm._v(
                    " Tour itineraries are subject to change without any prior notice. GBI reserves the right to accept, retain and decline any person as a member of a tour at any time of the scheduled trip without any notice. "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "No refund is provided to a person, if he/she does not show up during the actual conduct of the tour.  "
                  )
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e580455", module.exports)
  }
}

/***/ })

});