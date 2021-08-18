(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/JobApps"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FeedbackList",
  components: {//'pagination':pagination,
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_0__["Form"]({
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['items'])),
  methods: {
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*[data-v-e017aa0c] {\r\n  box-sizing: border-box;\r\n  outline: none;\n}\nbody[data-v-e017aa0c] {\r\n  margin: 0;\r\n  font-family: Sans-serif;\n}\n.feedback-full[data-v-e017aa0c] {\r\n  background-color: #f2f3f7;\r\n  width: 100%;\r\n  padding: 8px 30px;\r\n  display: flex;\r\n  flex-direction: column;\n}\n.feedback-body[data-v-e017aa0c] {\r\n  flex: 1;\r\n  display: flex;\n}\n.feedback-container[data-v-e017aa0c] {\r\n  height: 100%;\r\n  display: flex;\n}\n.mail-left-side[data-v-e017aa0c] {\r\n  width: 40%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  padding: 20px 0px 5px 0px;\n}\n.mail-card[data-v-e017aa0c] {\r\n  background-color: #dad7d79c;\r\n  border-radius: 21px;\r\n  margin-top: 5px;\r\n  margin-bottom: 15px;\r\n  padding: 15px 15px 15px 15px;\r\n  transition: 0.3s;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n}\n.mail-card[data-v-e017aa0c]:hover {\r\n  box-shadow: none;\n}\n.customCard[data-v-e017aa0c]{\r\n  height: 12vh;\r\n  width: 12vh;\n}\n.customImg[data-v-e017aa0c]{\r\n  height: 100%;\r\n  width: 100%;\n}\n.cardTitle[data-v-e017aa0c]{\r\n  color: #1d1f21;\r\n  margin: 4vh 0vh -0.06vh 0vh;\r\n  font-size: 14px;\r\n  font-weight: 500;\n}\n.cardCText[data-v-e017aa0c]{\r\n  width: 100%;\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  background-color: grey;\n}\n.mail-names[data-v-e017aa0c] {\r\n  color: #000000b8;\r\n  font-size: 16px;\r\n  font-weight: 500;\n}\n.mails[data-v-e017aa0c] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\n}\n.userInfo[data-v-e017aa0c] {\r\n  margin: 2px 20px;\r\n  margin-left: 0px;\r\n  font-size: 15px;\r\n  color: #1d1f21;\n}\n.details_1[data-v-e017aa0c]{\r\n  font-weight: 500;\n}\n.details_2[data-v-e017aa0c]{\r\n  font-weight: 700;\n}\ninput[type='text'][data-v-e017aa0c], input[type='email'][data-v-e017aa0c]{\r\n  border: 0px;\r\n  font-size: 14px;\r\n  background-color: #f6f6f6 !important;\r\n  color: #737879;\r\n  width: 105%;\r\n  height: 3.7vh;\n}\n.mail-info[data-v-e017aa0c] {\r\n  margin: 2px 65px;\r\n  margin-left: 0px;\r\n  font-weight: 500;\r\n  font-size: 12.5px;\r\n  color: grey;\n}\n.mail-info p[data-v-e017aa0c] {\r\n margin-top: -2.5px;\r\n margin-bottom: 6px;\r\n font-size: 15px;\r\n font-weight: 600;\n}\n.date[data-v-e017aa0c] {\r\n  color: grey;\r\n  float: right;\r\n  font-size: 12px;\r\n  font-weight: 500;\n}\n.mail-right-side[data-v-e017aa0c] {\r\n  margin-left: 35px;\r\n  flex: 1;\n}\n.mail-right-body[data-v-e017aa0c]{\r\n  background-color: #e1e1e1e1;\r\n  position: relative;\r\n  padding: 22px 20px 20px 20px;\r\n  border-radius: 18px;\r\n  font-size: 16px;\r\n  padding-bottom: 100px;\r\n  margin: 20px 10px;\r\n  color: #000000b8;\n}\n.topDiv[data-v-e017aa0c] {\r\n  margin-top: -0.5vh;\n}\n.message-body[data-v-e017aa0c] {\r\n  overflow: auto;\r\n  height: 450px;\r\n  width: 100%;\r\n  margin-top: 18px;\r\n  color: black;\n}\n.messages-Details[data-v-e017aa0c]{\r\n    display: flex;\r\n    color: grey;\n}\n.message-title[data-v-e017aa0c] {\r\n  display: flex;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  color: grey;\n}\n.message-title b[data-v-e017aa0c]{\r\n  font-size: 14px;\r\n  padding-left: 5px;\r\n  color: #000000b8;\r\n  font-weight: 700;\n}\n.message-tour-info[data-v-e017aa0c]{\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n  color: #7f7a7a;\r\n  margin-bottom: 21px;\n}\n.mail-right-top[data-v-e017aa0c]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  margin-left: 10px;\n}\n.cButton[data-v-e017aa0c] {\r\n  border-radius: 3px;\r\n  border: 1px;\r\n  border-radius: 100px;\r\n  outline: none;\n}\n.replyButton[data-v-e017aa0c] {\r\n  padding: 6px 32px;\r\n  margin-top: 20px;\r\n  margin-right: 15px;\r\n  color: white;\r\n  font-size: 15px !important;\r\n  font-weight: 600;\r\n  font-family: Hawaii 5-0, sans-serif;\r\n  background-color: #3ebee4;\n}\n.sendButton[data-v-e017aa0c]{\r\n  padding: 6px 20px;\r\n  margin-right: 7px;\r\n  color: white;\r\n  font-size: 14px !important;\r\n  font-weight: 500;\r\n  font-family: Hawaii 5-0, sans-serif;\r\n  background-color: #3ebee4;\n}\n.meetButton[data-v-e017aa0c]{\r\n  padding: 6px 20px;\r\n  margin-top: 20px;\r\n  margin-right: 15px;\r\n  color: #3ebee4;\r\n  border: 2px solid #3ebee4;\r\n  font-size: 15px !important;\r\n  font-weight: 700;\r\n  font-family: Hawaii 5-0, sans-serif;\r\n  background-color: white;\n}\n.feedbackButton[data-v-e017aa0c]{\r\n  padding: 6px 20px;\r\n  margin-top: 20px;\r\n  margin-right: 15px;\r\n  color: #3ebee4;\r\n  border: 2px solid #3ebee4;\r\n  font-size: 15px !important;\r\n  font-weight: 700;\r\n  font-family: Hawaii 5-0, sans-serif;\r\n  background-color: white;\n}\n.sendLinkButton[data-v-e017aa0c]{\r\n  padding: 7px 38px;\r\n  margin-top: 12px;\r\n  color: #3ebee4;\r\n  font-size: 17px !important;\r\n  font-weight: 600;\r\n  font-family: Hawaii 5-0, sans-serif;\r\n  background-color: #f4f6f9;\r\n  border: solid 2px #3ebee4;\n}\n.attachIcon[data-v-e017aa0c]{\r\n  font-size: 32px; \r\n  padding-right: 10px; \r\n  font-weight: 300; \r\n  color: grey;\n}\n.filter-dd[data-v-e017aa0c]{\r\n  border-radius: 10px; \r\n  margin-left: 30px;\n}\n.filter-dd2[data-v-e017aa0c]{\r\n  border-radius: 10px;\n}\n.arrow-buttons[data-v-e017aa0c]{\r\n  padding: 5px 20px;\r\n  border: none;\r\n  background-color: #dad7d79c;\r\n  margin-left: 10px;\n}\n.mail-left-top[data-v-e017aa0c]{\r\n  display: flex; \r\n  flex-direction: row; \r\n  justify-content: space-between;\r\n  margin-top: 7px;\r\n  margin-left: 4px;\r\n  margin-right: 4px;\r\n  margin-bottom: 15px;\n}\n.bottom-items[data-v-e017aa0c]{\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  margin: 20px;\n}\n.customSelButton[data-v-e017aa0c] {\r\n  border: 1px solid grey;\r\n  padding: 2px;\r\n  border-radius: 25px;\r\n  padding-left: 7px;\r\n  font-size: 14px;\n}\n.PendingColor[data-v-e017aa0c]{\r\n  color: grey !important;\n}\n.SelectionColor[data-v-e017aa0c]{\r\n  color: orange !important;\n}\n.HiredColor[data-v-e017aa0c]{\r\n  color: green !important;\n}\n.RejectedColor[data-v-e017aa0c]{\r\n  color: red !important;\n}\n.customDiv[data-v-e017aa0c]{\r\n  background: #e5e5e5;\r\n  border: 1px solid #e5e5e5;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 15px;\r\n  padding-bottom: 45px !important;\r\n  padding-top: 35px !important;\r\n  margin-top: -5vh;\n}\n.customDiv input[type='text'][data-v-e017aa0c], input[type='email'][data-v-e017aa0c]{\r\n  border: 1px solid #d2d2d2;\r\n  background-color: white;\r\n  border-radius: 25px;\n}\n[data-v-e017aa0c]::-webkit-scrollbar {\r\n  width: 10px;\n}\r\n\r\n/* Track */\n[data-v-e017aa0c]::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\n}\r\n\r\n/* Handle */\n[data-v-e017aa0c]::-webkit-scrollbar-thumb {\r\n  background: #888;\n}\r\n\r\n/* Handle on hover */\n[data-v-e017aa0c]::-webkit-scrollbar-thumb:hover {\r\n  background: #555;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
                          click: function($event) {
                            return _vm.getitems((_vm.currentPage -= 1))
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("button", {
                        staticClass: "fas fa-chevron-right arrow-buttons",
                        attrs: {
                          disabled: _vm.items.meta.last_page <= _vm.currentPage
                        },
                        on: {
                          click: function($event) {
                            return _vm.getitems((_vm.currentPage += 1))
                          }
                        }
                      })
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
                          variant: ""
                        }
                      },
                      [
                        _c(
                          "b-dropdown-item",
                          {
                            staticStyle: { "font-size": "13px" },
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.getitems((_vm.currentPage = 1))
                              }
                            }
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
                              click: function($event) {
                                return _vm.getoldItems((_vm.currentPage = 1))
                              }
                            }
                          },
                          [_vm._v("Oldest")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._l(_vm.items.data, function(item) {
                  return _c(
                    "div",
                    {
                      key: item.id,
                      staticClass: "mail-card",
                      style: _vm.currentItem == item ? "box-shadow: none;" : "",
                      on: {
                        click: function($event) {
                          return _vm.selectMail(item)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "mails" }, [
                        _c(
                          "div",
                          {
                            staticClass: "mail-names",
                            staticStyle: { clear: "both" }
                          },
                          [
                            _c("b", [
                              _vm._v(
                                _vm._s(item.firstname) +
                                  " " +
                                  _vm._s(item.lastname)
                              )
                            ]),
                            _vm._v(
                              ", +91" +
                                _vm._s(item.contactno) +
                                "\r\n            "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "date" }, [
                          _vm._v(_vm._s(item.time))
                        ])
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
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  )
                })
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
                              )
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _c("b", [
                              _vm._v(
                                "GBI " + _vm._s(_vm.currentItem.admin_email)
                              )
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _c("b", [_vm._v(_vm._s(_vm.currentItem.fullDate))]),
                            _vm._v(" "),
                            _c("br"),
                            _c("b", [
                              _vm._v("+91 " + _vm._s(_vm.currentItem.contactno))
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("p", { staticClass: "cardTitle mt-0 ml-2" }, [
                            _vm._v("Status: ")
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
                                  expression: "currentItem.status"
                                }
                              ],
                              staticClass: "customSelButton mb-4",
                              class: _vm.currentItem.status + "Color",
                              attrs: { "aria-label": "application status" },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
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
                                  function($event) {
                                    return _vm.saveAppStatus(
                                      _vm.currentItem.status,
                                      _vm.currentItem.id
                                    )
                                  }
                                ]
                              }
                            },
                            [
                              _c(
                                "option",
                                {
                                  staticClass: "mx-4",
                                  staticStyle: { color: "grey" }
                                },
                                [_vm._v("Pending")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  staticClass: "mx-4",
                                  staticStyle: { color: "orange" }
                                },
                                [_vm._v("Selection")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  staticClass: "mx-4",
                                  staticStyle: { color: "green" }
                                },
                                [_vm._v("Hired")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                {
                                  staticClass: "mx-4",
                                  staticStyle: { color: "red" }
                                },
                                [_vm._v("Rejected")]
                              )
                            ]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "message-body" }, [
                      _c("p", { staticClass: "message-tour-info" }, [
                        _vm._v(
                          "Applying for " + _vm._s(_vm.currentItem.applyingfor)
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "messages-Details" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("div", { staticClass: "details_2" }, [
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\r\n                  " +
                                _vm._s(_vm.currentItem.email) +
                                "\r\n                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\r\n                  " +
                                _vm._s(_vm.currentItem.firstname) +
                                " " +
                                _vm._s(_vm.currentItem.lastname) +
                                "\r\n                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\r\n                  +91 " +
                                _vm._s(_vm.currentItem.contactno) +
                                "\r\n                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\r\n                  " +
                                _vm._s(_vm.currentItem.current_company) +
                                "\r\n                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "userInfo" }, [
                            _vm._v(
                              "\r\n                  " +
                                _vm._s(_vm.currentItem.job_exp) +
                                "\r\n                "
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.currentItem.link
                        ? _c("div", { staticClass: "attachments" }, [
                            _c("p", { staticClass: "cardTitle" }, [
                              _vm._v("Attachments")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "card customCard cursor-pointer",
                                on: {
                                  click: function($event) {
                                    return _vm.redirPdf(_vm.currentItem.link)
                                  }
                                }
                              },
                              [
                                _c("img", {
                                  staticClass: "card-img-top customImg",
                                  attrs: {
                                    src:
                                      "https://cdn.pixabay.com/photo/2012/04/02/16/55/adobe-24943_960_720.png",
                                    alt: "attachment Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "card-body" })
                              ]
                            )
                          ])
                        : _vm._e()
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
                                "margin-right": "12px"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-times cursor-pointer",
                                on: {
                                  click: function($event) {
                                    _vm.ShareModal = false
                                  }
                                }
                              })
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
                                    expression: "shareName"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", placeholder: "Name" },
                                domProps: { value: _vm.shareName },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.shareName = $event.target.value
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-5" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.shareEmail,
                                    expression: "shareEmail"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "email",
                                  placeholder: "Email ID"
                                },
                                domProps: { value: _vm.shareEmail },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.shareEmail = $event.target.value
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "cButton sendButton",
                                  on: { click: _vm.shareApplication }
                                },
                                [_vm._v("Send")]
                              )
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "bottom-items" }, [
                      _c("button", { staticClass: "cButton meetButton" }, [
                        _vm._v("Meeting Scheduler")
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "cButton replyButton",
                          on: { click: _vm.showShare }
                        },
                        [_vm._v("Share")]
                      )
                    ])
                  ])
                : _c("div", {
                    staticClass: "mail-right-body",
                    staticStyle: { height: "70vh" }
                  })
            ])
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("\r\n                From: \r\n                "),
      _c("br"),
      _vm._v("To:\r\n                "),
      _c("br"),
      _vm._v("Date:\r\n                "),
      _c("br"),
      _vm._v("Mobile:\r\n               ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "details_1" }, [
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\r\n                  Email Id:\r\n                ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\r\n                  Applicant Name:\r\n                ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\r\n                  Mobile Number:\r\n                ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\r\n                  Current Company:\r\n                ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "userInfo" }, [
        _vm._v("\r\n                  Work Experience:\r\n                ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/jobs/Applications/List.vue":
/*!*************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Applications/List.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=e017aa0c&scoped=true& */ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& */ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e017aa0c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/jobs/Applications/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=style&index=0&id=e017aa0c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_e017aa0c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=e017aa0c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/jobs/Applications/List.vue?vue&type=template&id=e017aa0c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_e017aa0c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);