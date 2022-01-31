"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/JobApps"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FeedbackList",
  components: {//'pagination':pagination,
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__.Form({
        id: ""
      }),
      filter: '',
      perPage: '',
      options: [],
      currentItem: null,
      currentPage: 1,
      ShareModal: false,
      shareName: '',
      shareEmail: ''
    };
  },
  mounted: function mounted() {
    this.getitems(this.currentPage);
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['items'])),
  methods: {
    redirMeet: function redirMeet() {
      window.open('https://meet.google.com');
    },
    redirPdf: function redirPdf(link) {
      window.open(link);
    },
    showShare: function showShare() {
      this.ShareModal = true;
    },
    shareApplication: function shareApplication() {
      if (this.shareName == '' || this.shareEmail == '') {
        return this.$toast.fire({
          icon: "error",
          title: "Fields empty."
        });
      } else {
        this.shareName = '';
        this.shareEmail = '';
        this.$toast.fire({
          icon: "success",
          title: "Resume Sent."
        });
      }
    },
    saveAppStatus: function saveAppStatus(status, id) {
      var _this = this;

      axios.post("/api/job-application/save-status", {
        status: status,
        id: id
      }).then(function (res) {
        //this.Sending = false;
        _this.$toast.fire({
          icon: "success",
          title: "Staus Changed."
        });
      });
    },
    getitems: function getitems(page) {
      this.$store.dispatch('getItems', '/job-applications/all/?page=' + page);
    },
    getoldItems: function getoldItems(page) {
      this.$store.dispatch('getItems', '/job-applications/old/?page=' + page);
    },
    selectMail: function selectMail(item) {
      this.currentItem = item;
      this.currentItem.email_s = '<' + item.email + '>';
      this.currentItem.admin_email = '<admin@gbinternational.in>';
    }
  },
  filters: {
    ratingFilter: function ratingFilter(val) {
      if (val < 3) {
        return 'Not Good';
      } else if (val < 5) {
        return 'OK';
      } else if (val < 7) {
        return 'Good';
      } else if (val < 9) {
        return 'Very Good';
      } else if (val === 9 || val === 10) {
        return 'Excellent';
      }
    },
    ratingFilter2: function ratingFilter2(val) {
      if (val < 3) {
        return 'Not Likely';
      } else if (val < 5) {
        return 'Maybe';
      } else if (val < 7) {
        return 'Quite Likely';
      } else if (val < 9) {
        return 'Yes, Definitely';
      } else if (val === 9 || val === 10) {
        return 'Absolutely';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*[data-v-e017aa0c] {\n  box-sizing: border-box;\n  outline: none;\n}\nbody[data-v-e017aa0c] {\n  margin: 0;\n  font-family: Sans-serif;\n}\n.feedback-full[data-v-e017aa0c] {\n  background-color: #f2f3f7;\n  width: 100%;\n  padding: 8px 30px;\n  display: flex;\n  flex-direction: column;\n}\n.feedback-body[data-v-e017aa0c] {\n  flex: 1;\n  display: flex;\n}\n.feedback-container[data-v-e017aa0c] {\n  height: 100%;\n  display: flex;\n}\n.mail-left-side[data-v-e017aa0c] {\n  width: 40%;\n  height: 100%;\n  overflow: auto;\n  padding: 20px 0px 5px 0px;\n}\n.mail-card[data-v-e017aa0c] {\n  background-color: #dad7d79c;\n  border-radius: 21px;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  padding: 15px 15px 15px 15px;\n  transition: 0.3s;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n}\n.mail-card[data-v-e017aa0c]:hover {\n  box-shadow: none;\n}\n.customCard[data-v-e017aa0c]{\n  height: 12vh;\n  width: 12vh;\n}\n.customImg[data-v-e017aa0c]{\n  height: 100%;\n  width: 100%;\n}\n.cardTitle[data-v-e017aa0c]{\n  color: #1d1f21;\n  margin: 4vh 0vh -0.06vh 0vh;\n  font-size: 14px;\n  font-weight: 500;\n}\n.cardCText[data-v-e017aa0c]{\n  width: 100%;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: grey;\n}\n.mail-names[data-v-e017aa0c] {\n  color: #000000b8;\n  font-size: 16px;\n  font-weight: 500;\n}\n.mails[data-v-e017aa0c] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.userInfo[data-v-e017aa0c] {\n  margin: 2px 20px;\n  margin-left: 0px;\n  font-size: 15px;\n  color: #1d1f21;\n}\n.details_1[data-v-e017aa0c]{\n  font-weight: 500;\n}\n.details_2[data-v-e017aa0c]{\n  font-weight: 700;\n}\ninput[type='text'][data-v-e017aa0c], input[type='email'][data-v-e017aa0c]{\n  border: 0px;\n  font-size: 14px;\n  background-color: #f6f6f6 !important;\n  color: #737879;\n  width: 105%;\n  height: 3.7vh;\n}\n.mail-info[data-v-e017aa0c] {\n  margin: 2px 65px;\n  margin-left: 0px;\n  font-weight: 500;\n  font-size: 12.5px;\n  color: grey;\n}\n.mail-info p[data-v-e017aa0c] {\n margin-top: -2.5px;\n margin-bottom: 6px;\n font-size: 15px;\n font-weight: 600;\n}\n.date[data-v-e017aa0c] {\n  color: grey;\n  float: right;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mail-right-side[data-v-e017aa0c] {\n  margin-left: 35px;\n  flex: 1;\n}\n.mail-right-body[data-v-e017aa0c]{\n  background-color: #e1e1e1e1;\n  position: relative;\n  padding: 22px 20px 20px 20px;\n  border-radius: 18px;\n  font-size: 16px;\n  padding-bottom: 100px;\n  margin: 20px 10px;\n  color: #000000b8;\n}\n.topDiv[data-v-e017aa0c] {\n  margin-top: -0.5vh;\n}\n.message-body[data-v-e017aa0c] {\n  overflow: auto;\n  height: 450px;\n  width: 100%;\n  margin-top: 18px;\n  color: black;\n}\n.messages-Details[data-v-e017aa0c]{\n    display: flex;\n    color: grey;\n}\n.message-title[data-v-e017aa0c] {\n  display: flex;\n  font-size: 14px;\n  font-weight: 500;\n  color: grey;\n}\n.message-title b[data-v-e017aa0c]{\n  font-size: 14px;\n  padding-left: 5px;\n  color: #000000b8;\n  font-weight: 700;\n}\n.message-tour-info[data-v-e017aa0c]{\n  font-size: 18px;\n  font-weight: 700;\n  color: #7f7a7a;\n  margin-bottom: 21px;\n}\n.mail-right-top[data-v-e017aa0c]{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-left: 10px;\n}\n.cButton[data-v-e017aa0c] {\n  border-radius: 3px;\n  border: 1px;\n  border-radius: 100px;\n  outline: none;\n}\n.replyButton[data-v-e017aa0c] {\n  padding: 6px 32px;\n  margin-top: 20px;\n  margin-right: 15px;\n  color: white;\n  font-size: 15px !important;\n  font-weight: 600;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: #3ebee4;\n}\n.sendButton[data-v-e017aa0c]{\n  padding: 6px 20px;\n  margin-right: 7px;\n  color: white;\n  font-size: 14px !important;\n  font-weight: 500;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: #3ebee4;\n}\n.meetButton[data-v-e017aa0c]{\n  padding: 6px 20px;\n  margin-top: 20px;\n  margin-right: 15px;\n  color: #3ebee4;\n  border: 2px solid #3ebee4;\n  font-size: 15px !important;\n  font-weight: 700;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: white;\n}\n.feedbackButton[data-v-e017aa0c]{\n  padding: 6px 20px;\n  margin-top: 20px;\n  margin-right: 15px;\n  color: #3ebee4;\n  border: 2px solid #3ebee4;\n  font-size: 15px !important;\n  font-weight: 700;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: white;\n}\n.sendLinkButton[data-v-e017aa0c]{\n  padding: 7px 38px;\n  margin-top: 12px;\n  color: #3ebee4;\n  font-size: 17px !important;\n  font-weight: 600;\n  font-family: Hawaii 5-0, sans-serif;\n  background-color: #f4f6f9;\n  border: solid 2px #3ebee4;\n}\n.attachIcon[data-v-e017aa0c]{\n  font-size: 32px; \n  padding-right: 10px; \n  font-weight: 300; \n  color: grey;\n}\n.filter-dd[data-v-e017aa0c]{\n  border-radius: 10px; \n  margin-left: 30px;\n}\n.filter-dd2[data-v-e017aa0c]{\n  border-radius: 10px;\n}\n.arrow-buttons[data-v-e017aa0c]{\n  padding: 5px 20px;\n  border: none;\n  background-color: #dad7d79c;\n  margin-left: 10px;\n}\n.mail-left-top[data-v-e017aa0c]{\n  display: flex; \n  flex-direction: row; \n  justify-content: space-between;\n  margin-top: 7px;\n  margin-left: 4px;\n  margin-right: 4px;\n  margin-bottom: 15px;\n}\n.bottom-items[data-v-e017aa0c]{\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 20px;\n}\n.customSelButton[data-v-e017aa0c] {\n  border: 1px solid grey;\n  padding: 2px;\n  border-radius: 25px;\n  padding-left: 7px;\n  font-size: 14px;\n}\n.PendingColor[data-v-e017aa0c]{\n  color: grey !important;\n}\n.SelectionColor[data-v-e017aa0c]{\n  color: orange !important;\n}\n.HiredColor[data-v-e017aa0c]{\n  color: green !important;\n}\n.RejectedColor[data-v-e017aa0c]{\n  color: red !important;\n}\n.customDiv[data-v-e017aa0c]{\n  background: #e5e5e5;\n  border: 1px solid #e5e5e5;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 15px;\n  padding-bottom: 45px !important;\n  padding-top: 35px !important;\n  margin-top: -5vh;\n}\n.customDiv input[type='text'][data-v-e017aa0c], input[type='email'][data-v-e017aa0c]{\n  border: 1px solid #d2d2d2;\n  background-color: white;\n  border-radius: 25px;\n}\n[data-v-e017aa0c]::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n[data-v-e017aa0c]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n/* Handle */\n[data-v-e017aa0c]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n/* Handle on hover */\n[data-v-e017aa0c]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/admin/pages/jobs/Applications/List.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Applications/List.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=e017aa0c&scoped=true& */ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& */ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e017aa0c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/jobs/Applications/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=e017aa0c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.items && _vm.items.meta
    ? _c("div", { staticClass: "feedback-container" }, [
        _c("div", { staticClass: "feedback-full" }, [
          _c("div", { staticClass: "feedback-body" }, [
            _c(
              "div",
              { staticClass: "mail-left-side" },
              [
                _c(
                  "div",
                  { staticClass: "mail-left-top" },
                  [
                    _c("div", [
                      _c("button", {
                        staticClass: "fas fa-chevron-left arrow-buttons",
                        attrs: { disabled: _vm.currentPage === 1 },
                        on: {
                          click: function ($event) {
                            return _vm.getitems((_vm.currentPage -= 1))
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("button", {
                        staticClass: "fas fa-chevron-right arrow-buttons",
                        attrs: {
                          disabled: _vm.items.meta.last_page <= _vm.currentPage,
                        },
                        on: {
                          click: function ($event) {
                            return _vm.getitems((_vm.currentPage += 1))
                          },
                        },
                      }),
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "filter-dd2",
                        attrs: {
                          id: "dropdown",
                          size: "sm",
                          text:
                            "Page " +
                            _vm.currentPage +
                            " of " +
                            _vm.items.meta.last_page,
                          variant: "",
                        },
                      },
                      [
                        _c(
                          "b-dropdown-item",
                          {
                            staticStyle: { "font-size": "13px" },
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                return _vm.getitems((_vm.currentPage = 1))
                              },
                            },
                          },
                          [_vm._v("Newest")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          {
                            staticStyle: { "font-size": "13px" },
                            attrs: { href: "#" },
                            on: {
                              click: function ($event) {
                                return _vm.getoldItems((_vm.currentPage = 1))
                              },
                            },
                          },
                          [_vm._v("Oldest")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._l(_vm.items.data, function (item) {
                  return _c(
                    "div",
                    {
                      key: item.id,
                      staticClass: "mail-card",
                      style: _vm.currentItem == item ? "box-shadow: none;" : "",
                      on: {
                        click: function ($event) {
                          return _vm.selectMail(item)
                        },
                      },
                    },
                    [
                      _c("div", { staticClass: "mails" }, [
                        _c(
                          "div",
                          {
                            staticClass: "mail-names",
                            staticStyle: { clear: "both" },
                          },
                          [
                            _c("b", [
                              _vm._v(
                                _vm._s(item.firstname) +
                                  " " +
                                  _vm._s(item.lastname)
                              ),
                            ]),
                            _vm._v(
                              ", +91" +
                                _vm._s(item.contactno) +
                                "\n            "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "date" }, [
                          _vm._v(_vm._s(item.time)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mail-info" },
                        [
                          _c("p", [_vm._v("From: " + _vm._s(item.email))]),
                          _vm._v(" "),
                          _c("p2", [
                            _vm._v(
                              _vm._s(item.applyingfor) +
                                " (" +
                                _vm._s(item.status) +
                                ")"
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]
                  )
                }),
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "mail-right-side" }, [
              _vm.currentItem
                ? _c("div", { staticClass: "mail-right-body" }, [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-between topDiv" },
                      [
                        _c("div", { staticClass: "message-title" }, [
                          _vm._m(0),
                          _vm._v(" "),
                          _c("p", [
                            _c("b", [
                              _vm._v(
                                _vm._s(_vm.currentItem.firstname) +
                                  " " +
                                  _vm._s(_vm.currentItem.email_s)
                              ),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _c("b", [
                              _vm._v(
                                "GBI " + _vm._s(_vm.currentItem.admin_email)
                              ),
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _c("b", [_vm._v(_vm._s(_vm.currentItem.fullDate))]),
                            _vm._v(" "),
                            _c("br"),
                            _c("b", [
                              _vm._v(
                                "+91 " + _vm._s(_vm.currentItem.contactno)
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("p", { staticClass: "cardTitle mt-0 ml-2" }, [
                            _vm._v("Status: "),
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.currentItem.status,
                                  expression: "currentItem.status",
                                },
                              ],
                              staticClass: "customSelButton mb-4",
                              class: _vm.currentItem.status + "Color",
                              attrs: { "aria-label": "application status" },
                              on: {
                                change: [
                                  function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.currentItem,
                                      "status",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function ($event) {
                                    return _vm.saveAppStatus(
                                      _vm.currentItem.status,
                                      _vm.currentItem.id
                                    )
                                  },
                                ],
                              },
                            },
                            [
                              _c(
                                "option",
                                {
                                  staticClass: "mx-4",
                                  staticStyle: { color: "grey" },
                                },
                                [_vm._v("Pending")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  staticClass: "mx-4",
                                  staticStyle: { color: "orange" },
                                },
                                [_vm._v("Selection")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  staticClass: "mx-4",
                                  staticStyle: { color: "green" },
                                },
                                [_vm._v("Hired")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  staticClass: "mx-4",
                                  staticStyle: { color: "red" },
                                },
                                [_vm._v("Rejected")]
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "message-body" }, [
                      _c("p", { staticClass: "message-tour-info" }, [
                        _vm._v(
                          "Applying for " + _vm._s(_vm.currentItem.applyingfor)
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "messages-Details" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("div", { staticClass: "details_2" }, [
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.currentItem.email) +
                                "\n                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.currentItem.firstname) +
                                " " +
                                _vm._s(_vm.currentItem.lastname) +
                                "\n                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\n                  +91 " +
                                _vm._s(_vm.currentItem.contactno) +
                                "\n                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.currentItem.current_company) +
                                "\n                "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.currentItem.job_exp) +
                                "\n                "
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _vm.currentItem.link
                        ? _c("div", { staticClass: "attachments" }, [
                            _c("p", { staticClass: "cardTitle" }, [
                              _vm._v("Attachments"),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "card customCard cursor-pointer",
                                on: {
                                  click: function ($event) {
                                    return _vm.redirPdf(_vm.currentItem.link)
                                  },
                                },
                              },
                              [
                                _c("img", {
                                  staticClass: "card-img-top customImg",
                                  attrs: {
                                    src: "https://cdn.pixabay.com/photo/2012/04/02/16/55/adobe-24943_960_720.png",
                                    alt: "attachment Image",
                                  },
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "card-body" }),
                              ]
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _vm.ShareModal
                      ? _c("div", { staticClass: "customDiv mx-2" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex justify-content-start align-items-end flex-column",
                              staticStyle: {
                                "margin-top": "-2.3vh",
                                "margin-right": "12px",
                              },
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-times cursor-pointer",
                                on: {
                                  click: function ($event) {
                                    _vm.ShareModal = false
                                  },
                                },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "row py-2 mx-1" }, [
                            _c("div", { staticClass: "col-md-5" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.shareName,
                                    expression: "shareName",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", placeholder: "Name" },
                                domProps: { value: _vm.shareName },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.shareName = $event.target.value
                                  },
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-5" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.shareEmail,
                                    expression: "shareEmail",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "email",
                                  placeholder: "Email ID",
                                },
                                domProps: { value: _vm.shareEmail },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.shareEmail = $event.target.value
                                  },
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "cButton sendButton",
                                  on: { click: _vm.shareApplication },
                                },
                                [_vm._v("Send")]
                              ),
                            ]),
                          ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "bottom-items" }, [
                      _c(
                        "button",
                        {
                          staticClass: "cButton meetButton",
                          on: {
                            click: function ($event) {
                              return _vm.redirMeet()
                            },
                          },
                        },
                        [_vm._v("Meeting Scheduler")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "cButton replyButton",
                          on: { click: _vm.showShare },
                        },
                        [_vm._v("Share")]
                      ),
                    ]),
                  ])
                : _c("div", {
                    staticClass: "mail-right-body",
                    staticStyle: { height: "70vh" },
                  }),
            ]),
          ]),
        ]),
      ])
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("\n                From: \n                "),
      _c("br"),
      _vm._v("To:\n                "),
      _c("br"),
      _vm._v("Date:\n                "),
      _c("br"),
      _vm._v("Mobile:\n               "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "details_1" }, [
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\n                  Email Id:\n                "),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\n                  Applicant Name:\n                "),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\n                  Mobile Number:\n                "),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\n                  Current Company:\n                "),
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\n                  Work Experience:\n                "),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);