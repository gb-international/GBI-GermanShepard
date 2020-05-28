webpackJsonp([5],{

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1049);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("2596c5d6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c548480\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tour-list.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3c548480\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tour-list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "\n.main-head[data-v-3c548480]{\n  text-decoration: underline;\n}\n.description[data-v-3c548480]{\n  width: 100%;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1050:
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

// import StarRating from './components/partials/StarRating.vue';
/* harmony default export */ __webpack_exports__["default"] = ({

  name: "Tour-detail",

  data: function data() {
    return {
      max: 5,
      current: 3,
      oddclass: false,
      evenclass: true,
      itineraryData: {},
      hotelData: '',
      alldata: [],
      form: new Form({
        travel_code: ''
      })
    };
  },
  created: function created() {
    if (localStorage.getItem('login') == '0') {
      this.$router.push('/login');
    }
    this.tourListData();
  },


  methods: {
    dateFormat: function dateFormat(date) {
      return new Date(date).toDateString();
    },

    getRating: function getRating(current) {
      return current / this.max * 100;
    },
    integer: function integer(num) {
      return parseInt(num);
    },
    tourListData: function tourListData() {
      var _this = this;

      var data = [];
      axios.post("/api/tour-list", data, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem("access_token") } }).then(function (response) {
        _this.alldata = response.data;
        console.log(response);
        if (response.data.length == 0) {
          $("#tourModel").click();
        } else {
          _this.alldata = response.data;
          _this.itineraryData = response.data[0].itinerary;
          _this.hotelData = response.data[0].bookedhotels;
        }
      }).catch(function (error) {
        _this.handleError(error);
      });
    },
    UserTourSave: function UserTourSave() {
      var _this2 = this;

      var data = { 'travel_code': this.form.travel_code };
      axios.post("/api/tour-travel-save", data, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem("access_token") } }).then(function (response) {
        // this.alldata = response.data;
        if (response.data == 'error') {
          swal.fire({
            title: 'Try again',
            text: "Please enter valid travel code!",
            type: 'error'
          });
        } else {
          $("#tourModel").click();
          swal.fire({
            title: 'Welcome on your tour',
            type: 'success'
          });
          _this2.tourListData();
        }
      }).catch(function (error) {
        _this2.handleError(error);
      });
    }
  }
});

/***/ }),

/***/ 1051:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function(){},staticRenderFns:[]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3c548480", module.exports)
  }
}

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1048)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(1050)
/* template */
var __vue_template__ = __webpack_require__(1051)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3c548480"
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