(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/admin/AdminDashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/OrgChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/OrgChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_organization_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-organization-chart */ "./node_modules/vue-organization-chart/dist/orgchart.umd.min.js");
/* harmony import */ var vue_organization_chart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_organization_chart__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_organization_chart_dist_orgchart_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-organization-chart/dist/orgchart.css */ "./node_modules/vue-organization-chart/dist/orgchart.css");
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


 //import "element-ui/lib/theme-chalk/index.css";


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "OrgChart",
  components: {
    OrganizationChart: (vue_organization_chart__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      ds: {}
    };
  },
  mounted: function mounted() {
    this.getitems(); //console.log(items.data)

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.$el).find("#organization-chart .node").on("click", function (e) {// this.activeId = $(e.target)
      //   .closest(".node")
      //   .attr("id");
      // this.dialogVisible = true;
    });
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)(['items'])),
  methods: {
    getitems: function getitems() {
      var _this = this;

      this.$store.dispatch('getItems', '');
      axios.get("/api/team-tree/list").then(function (res) {
        _this.ds = res.data.data; //var newStr = this.ds.substring(1, this.ds.length-1);

        console.log(_this.ds);
      });
    },
    checkPerms: function checkPerms(id, role_id) {
      console.log(role_id);

      if (role_id == 1) {
        return false;
      } else if (window.userRole == 2 || window.userRole == 1 || window.userRole == 3) {
        this.$router.push('/check-permissions/${id}');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_components_OrgChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/admin/components/OrgChart.vue */ "./resources/js/admin/components/OrgChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "DashboardGBI",
  components: {
    'org-chart': _admin_components_OrgChart_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-organization-chart/dist/orgchart.css":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-organization-chart/dist/orgchart.css ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".orgchart-container{position:relative;display:inline-block;height:420px;width:calc(100% - 24px);border:2px dashed #aaa;border-radius:5px;overflow:auto;text-align:center}.orgchart{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;min-height:202px;min-width:202px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:-webkit-gradient(linear,left top, right top,color-stop(10%, rgba(200,0,0,.15)),color-stop(0, transparent)),-webkit-gradient(linear,left top, left bottom,color-stop(10%, rgba(200,0,0,.15)),color-stop(0, transparent));background-image:linear-gradient(90deg,rgba(200,0,0,.15) 10%,transparent 0),linear-gradient(rgba(200,0,0,.15) 10%,transparent 0);background-size:10px 10px;border:1px dashed transparent;padding:20px}.orgchart .hidden,.orgchart~.hidden{display:none}.orgchart.b2t{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.orgchart.l2r{position:absolute;-webkit-transform:rotate(-90deg) rotateY(180deg);transform:rotate(-90deg) rotateY(180deg);-webkit-transform-origin:left top;transform-origin:left top}.orgchart .verticalNodes ul{list-style:none;margin:0;padding-left:18px;text-align:left}.orgchart .verticalNodes ul:first-child{margin-top:2px}.orgchart .verticalNodes>td:before{content:\"\";border:1px solid rgba(217,83,79,.8)}.orgchart .verticalNodes>td>ul>li:first-child:before{-webkit-box-sizing:border-box;box-sizing:border-box;top:-4px;height:30px;width:calc(50% - 2px);border-width:2px 0 0 2px}.orgchart .verticalNodes ul>li{position:relative}.orgchart .verticalNodes ul>li:after,.orgchart .verticalNodes ul>li:before{-webkit-box-sizing:border-box;box-sizing:border-box;content:\"\";position:absolute;left:-6px;border-color:rgba(217,83,79,.8);border-style:solid;border-width:0 0 2px 2px}.orgchart .verticalNodes ul>li:before{top:-4px;height:30px;width:11px}.orgchart .verticalNodes ul>li:after{top:1px;height:100%}.orgchart .verticalNodes ul>li:first-child:after{-webkit-box-sizing:border-box;box-sizing:border-box;top:24px;width:11px;border-width:2px 0 0 2px}.orgchart .verticalNodes ul>li:last-child:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:2px 0 0}.orgchart.r2l{position:absolute;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:left top;transform-origin:left top}.orgchart>.spinner{font-size:100px;margin-top:30px;color:rgba(68,157,68,.8)}.orgchart table{border-spacing:0;border-collapse:separate}.orgchart>table:first-child{margin:20px auto}.orgchart td{text-align:center;vertical-align:top;padding:0}.orgchart .lines:nth-child(3) td{-webkit-box-sizing:border-box;box-sizing:border-box;height:20px}.orgchart .lines .topLine{border-top:2px solid rgba(217,83,79,.8)}.orgchart .lines .rightLine{border-right:1px solid rgba(217,83,79,.8);float:none;border-radius:0}.orgchart .lines .leftLine{border-left:1px solid rgba(217,83,79,.8);float:none;border-radius:0}.orgchart .lines .downLine{background-color:rgba(217,83,79,.8);margin:0 auto;height:20px;width:2px;float:none}.orgchart .node{-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;position:relative;margin:0;padding:3px;border:2px dashed transparent;text-align:center;width:130px}.orgchart.l2r .node,.orgchart.r2l .node{width:50px;height:130px}.orgchart .node>.spinner{position:absolute;top:calc(50% - 15px);left:calc(50% - 15px);vertical-align:middle;font-size:30px;color:rgba(68,157,68,.8)}.orgchart .node:hover{-webkit-transition:.5s;transition:.5s;cursor:default;z-index:20}.orgchart .node.focused,.orgchart .node:hover{background-color:rgba(238,217,54,.5)}.orgchart .ghost-node{position:fixed;left:-10000px;top:-10000px}.orgchart .ghost-node rect{fill:#fff;stroke:#bf0000}.orgchart .node.allowedDrop{border-color:rgba(68,157,68,.9)}.orgchart .node .title{text-align:center;font-size:12px;font-weight:700;height:20px;line-height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background-color:rgba(217,83,79,.8);color:#fff;border-radius:4px 4px 0 0}.orgchart.b2t .node .title{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}.orgchart.l2r .node .title{-webkit-transform:rotate(-90deg) translate(-40px,-40px) rotateY(180deg);transform:rotate(-90deg) translate(-40px,-40px) rotateY(180deg);-webkit-transform-origin:bottom center;transform-origin:bottom center;width:120px}.orgchart.r2l .node .title{-webkit-transform:rotate(-90deg) translate(-40px,-40px);transform:rotate(-90deg) translate(-40px,-40px);-webkit-transform-origin:bottom center;transform-origin:bottom center;width:120px}.orgchart .node .title .symbol{float:left;margin-top:4px;margin-left:2px}.orgchart .node .content{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:20px;font-size:11px;line-height:18px;border:1px solid rgba(217,83,79,.8);border-radius:0 0 4px 4px;text-align:center;background-color:#fff;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.orgchart.b2t .node .content{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transform-origin:center top;transform-origin:center top}.orgchart.l2r .node .content{-webkit-transform:rotate(-90deg) translate(-40px,-40px) rotateY(180deg);transform:rotate(-90deg) translate(-40px,-40px) rotateY(180deg);-webkit-transform-origin:top center;transform-origin:top center;width:120px}.orgchart.r2l .node .content{-webkit-transform:rotate(-90deg) translate(-40px,-40px);transform:rotate(-90deg) translate(-40px,-40px);-webkit-transform-origin:top center;transform-origin:top center;width:120px}.orgchart .node .edge{font-size:15px;position:absolute;color:rgba(68,157,68,.5);cursor:default;-webkit-transition:.2s;transition:.2s}.orgchart.noncollapsable .node .edge{display:none}.orgchart .edge:hover{color:#449d44;cursor:pointer}.orgchart .node .verticalEdge{width:calc(100% - 10px);width:-moz-calc(100% - 10px);left:5px}.orgchart .node .topEdge{top:-4px}.orgchart .node .bottomEdge{bottom:-4px}.orgchart .node .horizontalEdge{width:15px;height:calc(100% - 10px);height:-moz-calc(100% - 10px);top:5px}.orgchart .node .rightEdge{right:-4px}.orgchart .node .leftEdge{left:-4px}.orgchart .node .horizontalEdge:before{position:absolute;top:calc(50% - 7px)}.orgchart .node .rightEdge:before{right:3px}.orgchart .node .leftEdge:before{left:3px}.orgchart .node .toggleBtn{position:absolute;left:5px;bottom:-2px;color:rgba(68,157,68,.6)}.orgchart .node .toggleBtn:hover{color:rgba(68,157,68,.8)}.oc-export-btn{display:inline-block;position:absolute;right:5px;top:5px;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;background-color:#5cb85c;border:1px solid transparent;border-color:#4cae4c;border-radius:4px}.oc-export-btn[disabled]{cursor:not-allowed;-webkit-box-shadow:none;box-shadow:none;opacity:.3}.oc-export-btn:active,.oc-export-btn:focus,.oc-export-btn:hover{background-color:#449d44;border-color:#347a34}.orgchart~.mask{position:absolute;top:0;right:0;bottom:0;left:0;z-index:999;text-align:center;background-color:rgba(0,0,0,.3)}.orgchart~.mask .spinner{position:absolute;top:calc(50% - 54px);left:calc(50% - 54px);color:hsla(0,0%,100%,.8);font-size:108px}.orgchart .node{-webkit-transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,-webkit-transform .3s;transition:transform .3s,opacity .3s;transition:transform .3s,opacity .3s,-webkit-transform .3s}.orgchart .slide-down{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}.orgchart.l2r .node.slide-down,.orgchart.r2l .node.slide-down{-webkit-transform:translateY(130px);transform:translateY(130px)}.orgchart .slide-up{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}.orgchart.l2r .node.slide-up,.orgchart.r2l .node.slide-up{-webkit-transform:translateY(-130px);transform:translateY(-130px)}.orgchart .slide-right{opacity:0;-webkit-transform:translateX(130px);transform:translateX(130px)}.orgchart.l2r .node.slide-right,.orgchart.r2l .node.slide-right{-webkit-transform:translateX(40px);transform:translateX(40px)}.orgchart .slide-left{opacity:0;-webkit-transform:translateX(-130px);transform:translateX(-130px)}.orgchart.l2r .node.slide-left,.orgchart.r2l .node.slide-left{-webkit-transform:translateX(-40px);transform:translateX(-40px)}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/OrgChart.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/OrgChart.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#org .orgchart-container {\r\n    margin-top: 7vh !important;\r\n    position: relative;\r\n    display: inline-block;\r\n    height: 420px;\r\n    width: calc(100% - 24px);\r\n    border: none !important;\r\n    overflow: auto;\r\n    text-align: center;\n}\n#org .orgchart {\r\n  background: #f4f6f9;\n}\n#org .orgchart .node .title {\r\n  background-color: #06C4DE;\n}\n#org .node-name{\r\n  background-color: #06C4DE;\r\n  font-size: 12px !important;\r\n  padding: 3px;\r\n  font-weight: 500;\n}\n#org .node-title{\r\n  font-size: 14px !important;\r\n  padding: 2px;\r\n  font-weight: 400;\n}\n#org .orgchart .node .content {\r\n  border: 1px solid #06C4DE;\n}\n#org .orgchart .lines .leftLine {\r\n  border-left: 1px solid #06C4DE;\n}\n#org .orgchart .lines .rightLine {\r\n  border-right: 1px solid #06C4DE;\n}\n#org .orgchart .lines .topLine {\r\n  border-top: 1px solid #06C4DE;\n}\n#org .orgchart .lines .bottomLine {\r\n  border-bottom: 1px solid #06C4DE;\n}\n#org .orgchart .lines .downLine {\r\n  background-color: #06C4DE;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/vue-organization-chart/dist/orgchart.css":
/*!***************************************************************!*\
  !*** ./node_modules/vue-organization-chart/dist/orgchart.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_orgchart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./orgchart.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-organization-chart/dist/orgchart.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_orgchart_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_orgchart_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/OrgChart.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/OrgChart.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrgChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrgChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/OrgChart.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrgChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrgChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


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

/***/ "./resources/js/admin/components/OrgChart.vue":
/*!****************************************************!*\
  !*** ./resources/js/admin/components/OrgChart.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrgChart_vue_vue_type_template_id_7e6ad4f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrgChart.vue?vue&type=template&id=7e6ad4f6& */ "./resources/js/admin/components/OrgChart.vue?vue&type=template&id=7e6ad4f6&");
/* harmony import */ var _OrgChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrgChart.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/OrgChart.vue?vue&type=script&lang=js&");
/* harmony import */ var _OrgChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrgChart.vue?vue&type=style&index=0&lang=css& */ "./resources/js/admin/components/OrgChart.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrgChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrgChart_vue_vue_type_template_id_7e6ad4f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrgChart_vue_vue_type_template_id_7e6ad4f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/OrgChart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/admin/pages/Dashboard.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_0fd2e1ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=0fd2e1ca& */ "./resources/js/admin/pages/Dashboard.vue?vue&type=template&id=0fd2e1ca&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_0fd2e1ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_0fd2e1ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/OrgChart.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/admin/components/OrgChart.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrgChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrgChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/OrgChart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrgChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/admin/pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/OrgChart.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/admin/components/OrgChart.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrgChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrgChart.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/OrgChart.vue?vue&type=style&index=0&lang=css&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrgChart_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/OrgChart.vue?vue&type=template&id=7e6ad4f6&":
/*!***********************************************************************************!*\
  !*** ./resources/js/admin/components/OrgChart.vue?vue&type=template&id=7e6ad4f6& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrgChart_vue_vue_type_template_id_7e6ad4f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrgChart_vue_vue_type_template_id_7e6ad4f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrgChart_vue_vue_type_template_id_7e6ad4f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrgChart.vue?vue&type=template&id=7e6ad4f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/OrgChart.vue?vue&type=template&id=7e6ad4f6&");


/***/ }),

/***/ "./resources/js/admin/pages/Dashboard.vue?vue&type=template&id=0fd2e1ca&":
/*!*******************************************************************************!*\
  !*** ./resources/js/admin/pages/Dashboard.vue?vue&type=template&id=0fd2e1ca& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_0fd2e1ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_0fd2e1ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_0fd2e1ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=0fd2e1ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/Dashboard.vue?vue&type=template&id=0fd2e1ca&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/OrgChart.vue?vue&type=template&id=7e6ad4f6&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/components/OrgChart.vue?vue&type=template&id=7e6ad4f6& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "org" } },
    [
      _c("organization-chart", {
        attrs: { id: "organization-chart", datasource: _vm.ds },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var nodeData = ref.nodeData
              return [
                _c(
                  "div",
                  {
                    class: [
                      "node-box",
                      nodeData.role_id == "1" ? "parent" : "",
                    ],
                    on: {
                      click: function ($event) {
                        return _vm.checkPerms(
                          nodeData.user_role_id,
                          nodeData.role_id
                        )
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "node-name" }, [
                      _vm._v(_vm._s(nodeData.title)),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "node-content" }, [
                      _c("img", {
                        staticStyle: { "margin-top": "5px" },
                        attrs: {
                          width: "25%",
                          src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "node-title" }, [
                        _vm._v(_vm._s(nodeData.name)),
                      ]),
                    ]),
                  ]
                ),
              ]
            },
          },
        ]),
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/Dashboard.vue?vue&type=template&id=0fd2e1ca&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/Dashboard.vue?vue&type=template&id=0fd2e1ca& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
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
                  ),
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _vm.notifications.length == 0
                  ? _c("div", { staticClass: "text-center" }, [
                      _vm._v("***** You have no notification *****"),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.notifications, function (notify) {
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
                                    notify.data.itinerary_id,
                                },
                              },
                              [
                                _c("p", { staticClass: "text-dark" }, [
                                  _c("b", [
                                    _vm._v(_vm._s(notify.data.from) + " "),
                                  ]),
                                  _vm._v(" " + _vm._s(notify.data.body) + " "),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(notify.created_at))]),
                          ],
                          1
                        )
                      : _c(
                          "div",
                          {
                            staticClass: "alert alert-info",
                            on: {
                              click: function ($event) {
                                return _vm.markRead(notify.id)
                              },
                            },
                          },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "edit_link",
                                attrs: {
                                  to:
                                    "/view-itinerary/" +
                                    notify.data.itinerary_id,
                                },
                              },
                              [
                                _c("p", [
                                  _c("b", [
                                    _vm._v(_vm._s(notify.data.from) + " "),
                                  ]),
                                  _vm._v(" " + _vm._s(notify.data.body) + " "),
                                ]),
                              ]
                            ),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(notify.created_at))]),
                          ],
                          1
                        ),
                  ])
                }),
              ],
              2
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12 mx-10" }, [_c("org-chart")], 1),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-organization-chart/dist/orgchart.umd.min.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-organization-chart/dist/orgchart.umd.min.js ***!
  \**********************************************************************/
/***/ (function(module) {

(function(t,e){ true?module.exports=e():0})("undefined"!==typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="802b")}({"0be8":function(t,e,n){"use strict";var r=n("39bb"),i=n("2724"),o=n("6950"),a=n("c576"),s=n("c2ce"),u=n("e76c"),c=n("8166"),f=Math.min,l=[].push,p="split",d="length",h="lastIndex",g=!!function(){try{return new RegExp("x","y")}catch(t){}}();n("224e")("split",2,function(t,e,n,v){var y;return y="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[d]||2!="ab"[p](/(?:ab)*/)[d]||4!="."[p](/(.?)(.?)/)[d]||"."[p](/()()/)[d]>1||""[p](/.?/)[d]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var o,a,s,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,f+"g");while(o=c.call(v,i)){if(a=v[h],a>p&&(u.push(i.slice(p,o.index)),o[d]>1&&o.index<i[d]&&l.apply(u,o.slice(1)),s=o[0][d],p=a,u[d]>=g))break;v[h]===o.index&&v[h]++}return p===i[d]?!s&&v.test("")||u.push(""):u.push(i.slice(p)),u[d]>g?u.slice(0,g):u}:"0"[p](void 0,0)[d]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,r):y.call(String(i),n,r)},function(t,e){var r=v(y,t,this,e,y!==n);if(r.done)return r.value;var c=i(t),l=String(this),p=o(c,RegExp),d=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"y":"g"),m=new p(g?c:"^(?:"+c.source+")",h),b=void 0===e?4294967295:e>>>0;if(0===b)return[];if(0===l.length)return null===u(m,l)?[l]:[];var x=0,w=0,T=[];while(w<l.length){m.lastIndex=g?w:0;var C,S=u(m,g?l:l.slice(w));if(null===S||(C=f(s(m.lastIndex+(g?0:w)),l.length))===x)w=a(l,w,d);else{if(T.push(l.slice(x,w)),T.length===b)return T;for(var E=1;E<=S.length-1;E++)if(T.push(S[E]),T.length===b)return T;w=x=C}}return T.push(l.slice(x)),T}]})},"0c62":function(t,e,n){var r=n("f498"),i=n("20a7")("toStringTag"),o="Arguments"==r(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),i))?n:o?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},"0f1e":function(t,e,n){"use strict";var r=n("db38"),i=n.n(r);i.a},"163c":function(t,e,n){var r=n("27e0");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1f06":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"20a7":function(t,e,n){var r=n("ce52")("wks"),i=n("3bc6"),o=n("c8da").Symbol,a="function"==typeof o,s=t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))};s.store=r},"224e":function(t,e,n){"use strict";n("822e");var r=n("f57d"),i=n("a0dc"),o=n("3f16"),a=n("f1e5"),s=n("20a7"),u=n("8166"),c=s("species"),f=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),l=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=s(t),d=!o(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),h=d?!o(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[p](""),!e}):void 0;if(!d||!h||"replace"===t&&!f||"split"===t&&!l){var g=/./[p],v=n(a,p,""[t],function(t,e,n,r,i){return e.exec===u?d&&!i?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),y=v[0],m=v[1];r(String.prototype,t,y),i(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"24a4":function(t,e,n){t.exports=!n("4f1d")&&!n("3f16")(function(){return 7!=Object.defineProperty(n("cd9d")("div"),"a",{get:function(){return 7}}).a})},2724:function(t,e,n){var r=n("27e0");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"27e0":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},2915:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},3888:function(t,e,n){var r=n("f498");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"39bb":function(t,e,n){var r=n("27e0"),i=n("f498"),o=n("20a7")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"3a95":function(t,e,n){var r=n("2915"),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},"3bc6":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"3bf0":function(t,e,n){var r=n("2915"),i=n("f1e5");t.exports=function(t){return function(e,n){var o,a,s=String(i(e)),u=r(n),c=s.length;return u<0||u>=c?t?"":void 0:(o=s.charCodeAt(u),o<55296||o>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?t?s.charAt(u):o:t?s.slice(u,u+2):a-56320+(o-55296<<10)+65536)}}},"3f16":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4839:function(t,e,n){"use strict";var r=n("d47b"),i=n.n(r);i.a},"48e1":function(t,e){e.f={}.propertyIsEnumerable},"4f1d":function(t,e,n){t.exports=!n("3f16")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"508a":function(t,e,n){"use strict";var r=n("2724");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"565a":function(t,e,n){var r=n("2724"),i=n("7895"),o=n("c094"),a=n("5e73")("IE_PROTO"),s=function(){},u="prototype",c=function(){var t,e=n("cd9d")("iframe"),r=o.length,i="<",a=">";e.style.display="none",n("85af").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+a+"document.F=Object"+i+"/script"+a),t.close(),c=t.F;while(r--)delete c[u][o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[u]=r(t),n=new s,s[u]=null,n[a]=t):n=c(),void 0===e?n:i(n,e)}},"5e73":function(t,e,n){var r=n("ce52")("keys"),i=n("3bc6");t.exports=function(t){return r[t]||(r[t]=i(t))}},"62fa":function(t,e,n){var r=n("f9b8"),i=n("c094").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},6333:function(t,e,n){var r=n("b8f9");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},6950:function(t,e,n){var r=n("2724"),i=n("b8f9"),o=n("20a7")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[o])?e:i(n)}},"6eb7":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"704d":function(t,e,n){var r=n("48e1"),i=n("6eb7"),o=n("e00b"),a=n("163c"),s=n("ba1a"),u=n("24a4"),c=Object.getOwnPropertyDescriptor;e.f=n("4f1d")?c:function(t,e){if(t=o(t),e=a(e,!0),u)try{return c(t,e)}catch(n){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},7378:function(t,e,n){"use strict";var r=n("c8da"),i=n("ba1a"),o=n("f498"),a=n("d545"),s=n("163c"),u=n("3f16"),c=n("62fa").f,f=n("704d").f,l=n("e6bd").f,p=n("98d3").trim,d="Number",h=r[d],g=h,v=h.prototype,y=o(n("565a")(v))==d,m="trim"in String.prototype,b=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=m?e.trim():p(e,3);var n,r,i,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,u=e.slice(2),c=0,f=u.length;c<f;c++)if(a=u.charCodeAt(c),a<48||a>i)return NaN;return parseInt(u,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(y?u(function(){v.valueOf.call(n)}):o(n)!=d)?a(new g(b(e)),n,h):b(e)};for(var x,w=n("4f1d")?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;w.length>T;T++)i(g,x=w[T])&&!i(h,x)&&l(h,x,f(g,x));h.prototype=v,v.constructor=h,n("f57d")(r,d,h)}},7848:function(t,e,n){var r=n("f9b8"),i=n("c094");t.exports=Object.keys||function(t){return r(t,i)}},7895:function(t,e,n){var r=n("e6bd"),i=n("2724"),o=n("7848");t.exports=n("4f1d")?Object.defineProperties:function(t,e){i(t);var n,a=o(e),s=a.length,u=0;while(s>u)r.f(t,n=a[u++],e[n]);return t}},"802b":function(t,e,n){"use strict";var r;(n.r(e),"undefined"!==typeof window)&&((r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(n.p=r[1]));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._b({staticClass:"orgchart-container",on:{wheel:function(e){t.zoom&&t.zoomHandler(e)},mouseup:function(e){t.pan&&t.panning&&t.panEndHandler(e)}}},"div",{scopedSlots:t.$scopedSlots},!1),[n("div",{staticClass:"orgchart",style:{transform:t.transformVal,cursor:t.cursorVal},on:{mousedown:function(e){t.pan&&t.panStartHandler(e)},mousemove:function(e){t.pan&&t.panning&&t.panHandler(e)}}},[n("organization-chart-node",{attrs:{datasource:t.datasource,"handle-click":t.handleClick},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}})])})],1)])},o=[],a=(n("0be8"),n("7378"),n("a60a")),s=n.n(a),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("tbody",[n("tr",[n("td",{attrs:{colspan:t.datasource.children&&t.datasource.children.length?2*t.datasource.children.length:null}},[n("div",{staticClass:"node",attrs:{id:t.datasource.id},on:{click:function(e){e.stopPropagation(),t.handleClick(t.datasource)}}},[t._t("default",[n("div",{staticClass:"title"},[n("i",{staticClass:"fa fa-users symbol"}),t._v("\n            "+t._s(t.datasource.name)+"\n          ")]),n("div",{staticClass:"content"},[t._v(t._s(t.datasource.title))])],{nodeData:t.datasource})],2)])]),t.datasource.children&&t.datasource.children.length?[n("tr",{staticClass:"lines"},[n("td",{attrs:{colspan:2*t.datasource.children.length}},[n("div",{staticClass:"downLine"})])]),n("tr",{staticClass:"lines"},[n("td",{staticClass:"rightLine"}),t._l(t.datasource.children.length-1,function(t){return[n("td",{staticClass:"leftLine topLine"}),n("td",{staticClass:"rightLine topLine"})]}),n("td",{staticClass:"leftLine"})],2),n("tr",{staticClass:"nodes"},t._l(t.datasource.children,function(e){return n("td",{key:e.id,attrs:{colspan:"2"}},[n("node",{attrs:{datasource:e,"handle-click":t.handleClick},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots),function(e){return{key:e,fn:function(n){return[t._t(e,null,null,n)]}}})])})],1)}),0)]:t._e()],2)])},c=[],f={name:"node",props:{datasource:Object,handleClick:Function},methods:{}},l=f;n("0f1e");function p(t,e,n,r,i,o,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}var d=p(l,u,c,!1,null,null,null);d.options.__file="OrganizationChartNode.vue";var h=d.exports,g={name:"Container",props:{datasource:{type:Object,required:!0},pan:{type:Boolean,required:!1},zoom:{type:Boolean,required:!1},zoomoutLimit:{type:Number,required:!1,default:.5},zoominLimit:{type:Number,required:!1,default:7}},data:function(){return{cursorVal:"default",panning:!1,startX:0,startY:0,transformVal:""}},components:{OrganizationChartNode:h},methods:{handleClick:function(t){this.$emit("node-click",t)},panEndHandler:function(){this.panning=!1,this.cursorVal="default"},panHandler:function(t){var e=0,n=0;if(t.targetTouches){if(1===t.targetTouches.length)e=t.targetTouches[0].pageX-this.startX,n=t.targetTouches[0].pageY-this.startY;else if(t.targetTouches.length>1)return}else e=t.pageX-this.startX,n=t.pageY-this.startY;if(""===this.transformVal)-1===this.transformVal.indexOf("3d")?this.transformVal="matrix(1,0,0,1,"+e+","+n+")":this.transformVal="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,"+e+", "+n+",0,1)";else{var r=this.transformVal.split(",");-1===this.transformVal.indexOf("3d")?(r[4]=e,r[5]=n+")"):(r[12]=e,r[13]=n),this.transformVal=r.join(",")}},panStartHandler:function(t){if(s()(t.target).closest(".node").length)this.panning=!1;else{this.cursorVal="move",this.panning=!0;var e=0,n=0;if(""!==this.transformVal){var r=this.transformVal.split(",");-1===this.transformVal.indexOf("3d")?(e=parseInt(r[4]),n=parseInt(r[5])):(e=parseInt(r[12]),n=parseInt(r[13]))}if(t.targetTouches){if(1===t.targetTouches.length)this.startX=t.targetTouches[0].pageX-e,this.startY=t.targetTouches[0].pageY-n;else if(t.targetTouches.length>1)return}else this.startX=t.pageX-e,this.startY=t.pageY-n}},setChartScale:function(t){var e="",n=1;""===this.transformVal?this.transformVal="matrix("+t+", 0, 0, "+t+", 0, 0)":(e=this.transformVal.split(","),-1===this.transformVal.indexOf("3d")?(n=Math.abs(window.parseFloat(e[3])*t),n>this.zoomoutLimit&&n<this.zoominLimit&&(e[0]="matrix("+n,e[3]=n,this.transformVal=e.join(","))):(n=Math.abs(window.parseFloat(e[5])*t),n>this.zoomoutLimit&&n<this.zoominLimit&&(e[0]="matrix3d("+n,e[5]=n,this.transformVal=e.join(","))))},zoomHandler:function(t){var e=1+(t.deltaY>0?-.2:.2);this.setChartScale(e)}}},v=g,y=(n("4839"),p(v,i,o,!1,null,null,null));y.options.__file="OrganizationChartContainer.vue";var m=y.exports;m.install=function(t){t.component("OrgChart",m)};var b=m;e["default"]=b},8166:function(t,e,n){"use strict";var r=n("508a"),i=RegExp.prototype.exec,o=String.prototype.replace,a=i,s="lastIndex",u=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[s]||0!==e[s]}(),c=void 0!==/()??/.exec("")[1],f=u||c;f&&(a=function(t){var e,n,a,f,l=this;return c&&(n=new RegExp("^"+l.source+"$(?!\\s)",r.call(l))),u&&(e=l[s]),a=i.call(l,t),u&&a&&(l[s]=l.global?a.index+a[0].length:e),c&&a&&a.length>1&&o.call(a[0],n,function(){for(f=1;f<arguments.length-2;f++)void 0===arguments[f]&&(a[f]=void 0)}),a}),t.exports=a},"822e":function(t,e,n){"use strict";var r=n("8166");n("a345")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},"85af":function(t,e,n){var r=n("c8da").document;t.exports=r&&r.documentElement},"98d3":function(t,e,n){var r=n("a345"),i=n("f1e5"),o=n("3f16"),a=n("1f06"),s="["+a+"]",u="​",c=RegExp("^"+s+s+"*"),f=RegExp(s+s+"*$"),l=function(t,e,n){var i={},s=o(function(){return!!a[t]()||u[t]()!=u}),c=i[t]=s?e(p):a[t];n&&(i[n]=c),r(r.P+r.F*s,"String",i)},p=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},a0dc:function(t,e,n){var r=n("e6bd"),i=n("6eb7");t.exports=n("4f1d")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},a345:function(t,e,n){var r=n("c8da"),i=n("f048"),o=n("a0dc"),a=n("f57d"),s=n("6333"),u="prototype",c=function(t,e,n){var f,l,p,d,h=t&c.F,g=t&c.G,v=t&c.S,y=t&c.P,m=t&c.B,b=g?r:v?r[e]||(r[e]={}):(r[e]||{})[u],x=g?i:i[e]||(i[e]={}),w=x[u]||(x[u]={});for(f in g&&(n=e),n)l=!h&&b&&void 0!==b[f],p=(l?b:n)[f],d=m&&l?s(p,r):y&&"function"==typeof p?s(Function.call,p):p,b&&a(b,f,p,t&c.U),x[f]!=p&&o(x,f,d),y&&w[f]!=p&&(w[f]=p)};r.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},a60a:function(t,e,n){var r,i;
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
(function(e,n){"use strict";"object"===typeof t.exports?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return n(t)}:n(e)})("undefined"!==typeof window?window:this,function(n,o){"use strict";var a=[],s=n.document,u=Object.getPrototypeOf,c=a.slice,f=a.concat,l=a.push,p=a.indexOf,d={},h=d.toString,g=d.hasOwnProperty,v=g.toString,y=v.call(Object),m={},b=function(t){return"function"===typeof t&&"number"!==typeof t.nodeType},x=function(t){return null!=t&&t===t.window},w={type:!0,src:!0,noModule:!0};function T(t,e,n){e=e||s;var r,i=e.createElement("script");if(i.text=t,n)for(r in w)n[r]&&(i[r]=n[r]);e.head.appendChild(i).parentNode.removeChild(i)}function C(t){return null==t?t+"":"object"===typeof t||"function"===typeof t?d[h.call(t)]||"object":typeof t}var S="3.3.1",E=function(t,e){return new E.fn.init(t,e)},k=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function N(t){var e=!!t&&"length"in t&&t.length,n=C(t);return!b(t)&&!x(t)&&("array"===n||0===e||"number"===typeof e&&e>0&&e-1 in t)}E.fn=E.prototype={jquery:S,constructor:E,length:0,toArray:function(){return c.call(this)},get:function(t){return null==t?c.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=E.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return E.each(this,t)},map:function(t){return this.pushStack(E.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(c.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:a.sort,splice:a.splice},E.extend=E.fn.extend=function(){var t,e,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,c=!1;for("boolean"===typeof a&&(c=a,a=arguments[s]||{},s++),"object"===typeof a||b(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(t=arguments[s]))for(e in t)n=a[e],r=t[e],a!==r&&(c&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&E.isPlainObject(n)?n:{},a[e]=E.extend(c,o,r)):void 0!==r&&(a[e]=r));return a},E.extend({expando:"jQuery"+(S+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==h.call(t))&&(e=u(t),!e||(n=g.call(e,"constructor")&&e.constructor,"function"===typeof n&&v.call(n)===y))},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t){T(t)},each:function(t,e){var n,r=0;if(N(t)){for(n=t.length;r<n;r++)if(!1===e.call(t[r],r,t[r]))break}else for(r in t)if(!1===e.call(t[r],r,t[r]))break;return t},trim:function(t){return null==t?"":(t+"").replace(k,"")},makeArray:function(t,e){var n=e||[];return null!=t&&(N(Object(t))?E.merge(n,"string"===typeof t?[t]:t):l.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:p.call(e,t,n)},merge:function(t,e){for(var n=+e.length,r=0,i=t.length;r<n;r++)t[i++]=e[r];return t.length=i,t},grep:function(t,e,n){for(var r,i=[],o=0,a=t.length,s=!n;o<a;o++)r=!e(t[o],o),r!==s&&i.push(t[o]);return i},map:function(t,e,n){var r,i,o=0,a=[];if(N(t))for(r=t.length;o<r;o++)i=e(t[o],o,n),null!=i&&a.push(i);else for(o in t)i=e(t[o],o,n),null!=i&&a.push(i);return f.apply([],a)},guid:1,support:m}),"function"===typeof Symbol&&(E.fn[Symbol.iterator]=a[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){d["[object "+e+"]"]=e.toLowerCase()});var A=
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(t){var e,n,r,i,o,a,s,u,c,f,l,p,d,h,g,v,y,m,b,x="sizzle"+1*new Date,w=t.document,T=0,C=0,S=at(),E=at(),k=at(),N=function(t,e){return t===e&&(l=!0),0},A={}.hasOwnProperty,D=[],L=D.pop,j=D.push,_=D.push,O=D.slice,P=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},q="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",H="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+H+"*("+M+")(?:"+H+"*([*^$|!~]?=)"+H+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+H+"*\\]",R=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(H+"+","g"),F=new RegExp("^"+H+"+|((?:^|[^\\\\])(?:\\\\.)*)"+H+"+$","g"),W=new RegExp("^"+H+"*,"+H+"*"),B=new RegExp("^"+H+"*([>+~]|"+H+")"+H+"*"),V=new RegExp("="+H+"*([^\\]'\"]*?)"+H+"*\\]","g"),z=new RegExp(R),U=new RegExp("^"+M+"$"),G={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+R),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+H+"*(even|odd|(([+-]|)(\\d*)n|)"+H+"*(?:([+-]|)"+H+"*(\\d+)|))"+H+"*\\)|)","i"),bool:new RegExp("^(?:"+q+")$","i"),needsContext:new RegExp("^"+H+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+H+"*((?:-\\d)?\\d*)"+H+"*\\)|)(?=[^-]|$)","i")},J=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,X=/^[^{]+\{\s*\[native \w/,Y=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,Q=new RegExp("\\\\([\\da-f]{1,6}"+H+"?|("+H+")|.)","ig"),tt=function(t,e,n){var r="0x"+e-65536;return r!==r||n?e:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},et=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,nt=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},rt=function(){p()},it=mt(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});try{_.apply(D=O.call(w.childNodes),w.childNodes),D[w.childNodes.length].nodeType}catch(Et){_={apply:D.length?function(t,e){j.apply(t,O.call(e))}:function(t,e){var n=t.length,r=0;while(t[n++]=e[r++]);t.length=n-1}}}function ot(t,e,r,i){var o,s,c,f,l,h,y,m=e&&e.ownerDocument,T=e?e.nodeType:9;if(r=r||[],"string"!==typeof t||!t||1!==T&&9!==T&&11!==T)return r;if(!i&&((e?e.ownerDocument||e:w)!==d&&p(e),e=e||d,g)){if(11!==T&&(l=Y.exec(t)))if(o=l[1]){if(9===T){if(!(c=e.getElementById(o)))return r;if(c.id===o)return r.push(c),r}else if(m&&(c=m.getElementById(o))&&b(e,c)&&c.id===o)return r.push(c),r}else{if(l[2])return _.apply(r,e.getElementsByTagName(t)),r;if((o=l[3])&&n.getElementsByClassName&&e.getElementsByClassName)return _.apply(r,e.getElementsByClassName(o)),r}if(n.qsa&&!k[t+" "]&&(!v||!v.test(t))){if(1!==T)m=e,y=t;else if("object"!==e.nodeName.toLowerCase()){(f=e.getAttribute("id"))?f=f.replace(et,nt):e.setAttribute("id",f=x),h=a(t),s=h.length;while(s--)h[s]="#"+f+" "+yt(h[s]);y=h.join(","),m=Z.test(t)&&gt(e.parentNode)||e}if(y)try{return _.apply(r,m.querySelectorAll(y)),r}catch(C){}finally{f===x&&e.removeAttribute("id")}}}return u(t.replace(F,"$1"),e,r,i)}function at(){var t=[];function e(n,i){return t.push(n+" ")>r.cacheLength&&delete e[t.shift()],e[n+" "]=i}return e}function st(t){return t[x]=!0,t}function ut(t){var e=d.createElement("fieldset");try{return!!t(e)}catch(Et){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function ct(t,e){var n=t.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=e}function ft(t,e){var n=e&&t,r=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===e)return-1;return t?1:-1}function lt(t){return function(e){var n=e.nodeName.toLowerCase();return"input"===n&&e.type===t}}function pt(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function dt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&it(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ht(t){return st(function(e){return e=+e,st(function(n,r){var i,o=t([],n.length,e),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function gt(t){return t&&"undefined"!==typeof t.getElementsByTagName&&t}for(e in n=ot.support={},o=ot.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},p=ot.setDocument=function(t){var e,i,a=t?t.ownerDocument||t:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",rt,!1):i.attachEvent&&i.attachEvent("onunload",rt)),n.attributes=ut(function(t){return t.className="i",!t.getAttribute("className")}),n.getElementsByTagName=ut(function(t){return t.appendChild(d.createComment("")),!t.getElementsByTagName("*").length}),n.getElementsByClassName=X.test(d.getElementsByClassName),n.getById=ut(function(t){return h.appendChild(t).id=x,!d.getElementsByName||!d.getElementsByName(x).length}),n.getById?(r.filter["ID"]=function(t){var e=t.replace(Q,tt);return function(t){return t.getAttribute("id")===e}},r.find["ID"]=function(t,e){if("undefined"!==typeof e.getElementById&&g){var n=e.getElementById(t);return n?[n]:[]}}):(r.filter["ID"]=function(t){var e=t.replace(Q,tt);return function(t){var n="undefined"!==typeof t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},r.find["ID"]=function(t,e){if("undefined"!==typeof e.getElementById&&g){var n,r,i,o=e.getElementById(t);if(o){if(n=o.getAttributeNode("id"),n&&n.value===t)return[o];i=e.getElementsByName(t),r=0;while(o=i[r++])if(n=o.getAttributeNode("id"),n&&n.value===t)return[o]}return[]}}),r.find["TAG"]=n.getElementsByTagName?function(t,e){return"undefined"!==typeof e.getElementsByTagName?e.getElementsByTagName(t):n.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,r=[],i=0,o=e.getElementsByTagName(t);if("*"===t){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find["CLASS"]=n.getElementsByClassName&&function(t,e){if("undefined"!==typeof e.getElementsByClassName&&g)return e.getElementsByClassName(t)},y=[],v=[],(n.qsa=X.test(d.querySelectorAll))&&(ut(function(t){h.appendChild(t).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+H+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||v.push("\\["+H+"*(?:value|"+q+")"),t.querySelectorAll("[id~="+x+"-]").length||v.push("~="),t.querySelectorAll(":checked").length||v.push(":checked"),t.querySelectorAll("a#"+x+"+*").length||v.push(".#.+[+~]")}),ut(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=d.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&v.push("name"+H+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),h.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),v.push(",.*:")})),(n.matchesSelector=X.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ut(function(t){n.disconnectedMatch=m.call(t,"*"),m.call(t,"[s!='']:x"),y.push("!=",R)}),v=v.length&&new RegExp(v.join("|")),y=y.length&&new RegExp(y.join("|")),e=X.test(h.compareDocumentPosition),b=e||X.test(h.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,r=e&&e.parentNode;return t===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):t.compareDocumentPosition&&16&t.compareDocumentPosition(r)))}:function(t,e){if(e)while(e=e.parentNode)if(e===t)return!0;return!1},N=e?function(t,e){if(t===e)return l=!0,0;var r=!t.compareDocumentPosition-!e.compareDocumentPosition;return r||(r=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&r||!n.sortDetached&&e.compareDocumentPosition(t)===r?t===d||t.ownerDocument===w&&b(w,t)?-1:e===d||e.ownerDocument===w&&b(w,e)?1:f?P(f,t)-P(f,e):0:4&r?-1:1)}:function(t,e){if(t===e)return l=!0,0;var n,r=0,i=t.parentNode,o=e.parentNode,a=[t],s=[e];if(!i||!o)return t===d?-1:e===d?1:i?-1:o?1:f?P(f,t)-P(f,e):0;if(i===o)return ft(t,e);n=t;while(n=n.parentNode)a.unshift(n);n=e;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ft(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},ot.matches=function(t,e){return ot(t,null,null,e)},ot.matchesSelector=function(t,e){if((t.ownerDocument||t)!==d&&p(t),e=e.replace(V,"='$1']"),n.matchesSelector&&g&&!k[e+" "]&&(!y||!y.test(e))&&(!v||!v.test(e)))try{var r=m.call(t,e);if(r||n.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(Et){}return ot(e,d,null,[t]).length>0},ot.contains=function(t,e){return(t.ownerDocument||t)!==d&&p(t),b(t,e)},ot.attr=function(t,e){(t.ownerDocument||t)!==d&&p(t);var i=r.attrHandle[e.toLowerCase()],o=i&&A.call(r.attrHandle,e.toLowerCase())?i(t,e,!g):void 0;return void 0!==o?o:n.attributes||!g?t.getAttribute(e):(o=t.getAttributeNode(e))&&o.specified?o.value:null},ot.escape=function(t){return(t+"").replace(et,nt)},ot.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},ot.uniqueSort=function(t){var e,r=[],i=0,o=0;if(l=!n.detectDuplicates,f=!n.sortStable&&t.slice(0),t.sort(N),l){while(e=t[o++])e===t[o]&&(i=r.push(o));while(i--)t.splice(r[i],1)}return f=null,t},i=ot.getText=function(t){var e,n="",r=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"===typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=i(t)}else if(3===o||4===o)return t.nodeValue}else while(e=t[r++])n+=i(e);return n},r=ot.selectors={cacheLength:50,createPseudo:st,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(Q,tt),t[3]=(t[3]||t[4]||t[5]||"").replace(Q,tt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||ot.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&ot.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return G["CHILD"].test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&z.test(n)&&(e=a(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(Q,tt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=S[t+" "];return e||(e=new RegExp("(^|"+H+")"+t+"("+H+"|$)"))&&S(t,function(t){return e.test("string"===typeof t.className&&t.className||"undefined"!==typeof t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,e,n){return function(r){var i=ot.attr(r,t);return null==i?"!="===e:!e||(i+="","="===e?i===n:"!="===e?i!==n:"^="===e?n&&0===i.indexOf(n):"*="===e?n&&i.indexOf(n)>-1:"$="===e?n&&i.slice(-n.length)===n:"~="===e?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===e&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,n,r,i){var o="nth"!==t.slice(0,3),a="last"!==t.slice(-4),s="of-type"===e;return 1===r&&0===i?function(t){return!!t.parentNode}:function(e,n,u){var c,f,l,p,d,h,g=o!==a?"nextSibling":"previousSibling",v=e.parentNode,y=s&&e.nodeName.toLowerCase(),m=!u&&!s,b=!1;if(v){if(o){while(g){p=e;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===t&&!h&&"nextSibling"}return!0}if(h=[a?v.firstChild:v.lastChild],a&&m){p=v,l=p[x]||(p[x]={}),f=l[p.uniqueID]||(l[p.uniqueID]={}),c=f[t]||[],d=c[0]===T&&c[1],b=d&&c[2],p=d&&v.childNodes[d];while(p=++d&&p&&p[g]||(b=d=0)||h.pop())if(1===p.nodeType&&++b&&p===e){f[t]=[T,d,b];break}}else if(m&&(p=e,l=p[x]||(p[x]={}),f=l[p.uniqueID]||(l[p.uniqueID]={}),c=f[t]||[],d=c[0]===T&&c[1],b=d),!1===b)while(p=++d&&p&&p[g]||(b=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++b&&(m&&(l=p[x]||(p[x]={}),f=l[p.uniqueID]||(l[p.uniqueID]={}),f[t]=[T,b]),p===e))break;return b-=i,b===r||b%r===0&&b/r>=0}}},PSEUDO:function(t,e){var n,i=r.pseudos[t]||r.setFilters[t.toLowerCase()]||ot.error("unsupported pseudo: "+t);return i[x]?i(e):i.length>1?(n=[t,t,"",e],r.setFilters.hasOwnProperty(t.toLowerCase())?st(function(t,n){var r,o=i(t,e),a=o.length;while(a--)r=P(t,o[a]),t[r]=!(n[r]=o[a])}):function(t){return i(t,0,n)}):i}},pseudos:{not:st(function(t){var e=[],n=[],r=s(t.replace(F,"$1"));return r[x]?st(function(t,e,n,i){var o,a=r(t,null,i,[]),s=t.length;while(s--)(o=a[s])&&(t[s]=!(e[s]=o))}):function(t,i,o){return e[0]=t,r(e,null,o,n),e[0]=null,!n.pop()}}),has:st(function(t){return function(e){return ot(t,e).length>0}}),contains:st(function(t){return t=t.replace(Q,tt),function(e){return(e.textContent||e.innerText||i(e)).indexOf(t)>-1}}),lang:st(function(t){return U.test(t||"")||ot.error("unsupported lang: "+t),t=t.replace(Q,tt).toLowerCase(),function(e){var n;do{if(n=g?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===h},focus:function(t){return t===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:dt(!1),disabled:dt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!r.pseudos["empty"](t)},header:function(t){return K.test(t.nodeName)},input:function(t){return J.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:ht(function(){return[0]}),last:ht(function(t,e){return[e-1]}),eq:ht(function(t,e,n){return[n<0?n+e:n]}),even:ht(function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t}),odd:ht(function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t}),lt:ht(function(t,e,n){for(var r=n<0?n+e:n;--r>=0;)t.push(r);return t}),gt:ht(function(t,e,n){for(var r=n<0?n+e:n;++r<e;)t.push(r);return t})}},r.pseudos["nth"]=r.pseudos["eq"],{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[e]=lt(e);for(e in{submit:!0,reset:!0})r.pseudos[e]=pt(e);function vt(){}function yt(t){for(var e=0,n=t.length,r="";e<n;e++)r+=t[e].value;return r}function mt(t,e,n){var r=e.dir,i=e.next,o=i||r,a=n&&"parentNode"===o,s=C++;return e.first?function(e,n,i){while(e=e[r])if(1===e.nodeType||a)return t(e,n,i);return!1}:function(e,n,u){var c,f,l,p=[T,s];if(u){while(e=e[r])if((1===e.nodeType||a)&&t(e,n,u))return!0}else while(e=e[r])if(1===e.nodeType||a)if(l=e[x]||(e[x]={}),f=l[e.uniqueID]||(l[e.uniqueID]={}),i&&i===e.nodeName.toLowerCase())e=e[r]||e;else{if((c=f[o])&&c[0]===T&&c[1]===s)return p[2]=c[2];if(f[o]=p,p[2]=t(e,n,u))return!0}return!1}}function bt(t){return t.length>1?function(e,n,r){var i=t.length;while(i--)if(!t[i](e,n,r))return!1;return!0}:t[0]}function xt(t,e,n){for(var r=0,i=e.length;r<i;r++)ot(t,e[r],n);return n}function wt(t,e,n,r,i){for(var o,a=[],s=0,u=t.length,c=null!=e;s<u;s++)(o=t[s])&&(n&&!n(o,r,i)||(a.push(o),c&&e.push(s)));return a}function Tt(t,e,n,r,i,o){return r&&!r[x]&&(r=Tt(r)),i&&!i[x]&&(i=Tt(i,o)),st(function(o,a,s,u){var c,f,l,p=[],d=[],h=a.length,g=o||xt(e||"*",s.nodeType?[s]:s,[]),v=!t||!o&&e?g:wt(g,p,t,s,u),y=n?i||(o?t:h||r)?[]:a:v;if(n&&n(v,y,s,u),r){c=wt(y,d),r(c,[],s,u),f=c.length;while(f--)(l=c[f])&&(y[d[f]]=!(v[d[f]]=l))}if(o){if(i||t){if(i){c=[],f=y.length;while(f--)(l=y[f])&&c.push(v[f]=l);i(null,y=[],c,u)}f=y.length;while(f--)(l=y[f])&&(c=i?P(o,l):p[f])>-1&&(o[c]=!(a[c]=l))}}else y=wt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):_.apply(a,y)})}function Ct(t){for(var e,n,i,o=t.length,a=r.relative[t[0].type],s=a||r.relative[" "],u=a?1:0,f=mt(function(t){return t===e},s,!0),l=mt(function(t){return P(e,t)>-1},s,!0),p=[function(t,n,r){var i=!a&&(r||n!==c)||((e=n).nodeType?f(t,n,r):l(t,n,r));return e=null,i}];u<o;u++)if(n=r.relative[t[u].type])p=[mt(bt(p),n)];else{if(n=r.filter[t[u].type].apply(null,t[u].matches),n[x]){for(i=++u;i<o;i++)if(r.relative[t[i].type])break;return Tt(u>1&&bt(p),u>1&&yt(t.slice(0,u-1).concat({value:" "===t[u-2].type?"*":""})).replace(F,"$1"),n,u<i&&Ct(t.slice(u,i)),i<o&&Ct(t=t.slice(i)),i<o&&yt(t))}p.push(n)}return bt(p)}function St(t,e){var n=e.length>0,i=t.length>0,o=function(o,a,s,u,f){var l,h,v,y=0,m="0",b=o&&[],x=[],w=c,C=o||i&&r.find["TAG"]("*",f),S=T+=null==w?1:Math.random()||.1,E=C.length;for(f&&(c=a===d||a||f);m!==E&&null!=(l=C[m]);m++){if(i&&l){h=0,a||l.ownerDocument===d||(p(l),s=!g);while(v=t[h++])if(v(l,a||d,s)){u.push(l);break}f&&(T=S)}n&&((l=!v&&l)&&y--,o&&b.push(l))}if(y+=m,n&&m!==y){h=0;while(v=e[h++])v(b,x,a,s);if(o){if(y>0)while(m--)b[m]||x[m]||(x[m]=L.call(u));x=wt(x)}_.apply(u,x),f&&!o&&x.length>0&&y+e.length>1&&ot.uniqueSort(u)}return f&&(T=S,c=w),b};return n?st(o):o}return vt.prototype=r.filters=r.pseudos,r.setFilters=new vt,a=ot.tokenize=function(t,e){var n,i,o,a,s,u,c,f=E[t+" "];if(f)return e?0:f.slice(0);s=t,u=[],c=r.preFilter;while(s){for(a in n&&!(i=W.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=B.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(F," ")}),s=s.slice(n.length)),r.filter)!(i=G[a].exec(s))||c[a]&&!(i=c[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return e?s.length:s?ot.error(t):E(t,u).slice(0)},s=ot.compile=function(t,e){var n,r=[],i=[],o=k[t+" "];if(!o){e||(e=a(t)),n=e.length;while(n--)o=Ct(e[n]),o[x]?r.push(o):i.push(o);o=k(t,St(i,r)),o.selector=t}return o},u=ot.select=function(t,e,n,i){var o,u,c,f,l,p="function"===typeof t&&t,d=!i&&a(t=p.selector||t);if(n=n||[],1===d.length){if(u=d[0]=d[0].slice(0),u.length>2&&"ID"===(c=u[0]).type&&9===e.nodeType&&g&&r.relative[u[1].type]){if(e=(r.find["ID"](c.matches[0].replace(Q,tt),e)||[])[0],!e)return n;p&&(e=e.parentNode),t=t.slice(u.shift().value.length)}o=G["needsContext"].test(t)?0:u.length;while(o--){if(c=u[o],r.relative[f=c.type])break;if((l=r.find[f])&&(i=l(c.matches[0].replace(Q,tt),Z.test(u[0].type)&&gt(e.parentNode)||e))){if(u.splice(o,1),t=i.length&&yt(u),!t)return _.apply(n,i),n;break}}}return(p||s(t,d))(i,e,!g,n,!e||Z.test(t)&&gt(e.parentNode)||e),n},n.sortStable=x.split("").sort(N).join("")===x,n.detectDuplicates=!!l,p(),n.sortDetached=ut(function(t){return 1&t.compareDocumentPosition(d.createElement("fieldset"))}),ut(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||ct("type|href|height|width",function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),n.attributes&&ut(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||ct("value",function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),ut(function(t){return null==t.getAttribute("disabled")})||ct(q,function(t,e,n){var r;if(!n)return!0===t[e]?e.toLowerCase():(r=t.getAttributeNode(e))&&r.specified?r.value:null}),ot}(n);E.find=A,E.expr=A.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=A.uniqueSort,E.text=A.getText,E.isXMLDoc=A.isXML,E.contains=A.contains,E.escapeSelector=A.escape;var D=function(t,e,n){var r=[],i=void 0!==n;while((t=t[e])&&9!==t.nodeType)if(1===t.nodeType){if(i&&E(t).is(n))break;r.push(t)}return r},L=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},j=E.expr.match.needsContext;function _(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var O=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function P(t,e,n){return b(e)?E.grep(t,function(t,r){return!!e.call(t,r,t)!==n}):e.nodeType?E.grep(t,function(t){return t===e!==n}):"string"!==typeof e?E.grep(t,function(t){return p.call(e,t)>-1!==n}):E.filter(e,t,n)}E.filter=function(t,e,n){var r=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===r.nodeType?E.find.matchesSelector(r,t)?[r]:[]:E.find.matches(t,E.grep(e,function(t){return 1===t.nodeType}))},E.fn.extend({find:function(t){var e,n,r=this.length,i=this;if("string"!==typeof t)return this.pushStack(E(t).filter(function(){for(e=0;e<r;e++)if(E.contains(i[e],this))return!0}));for(n=this.pushStack([]),e=0;e<r;e++)E.find(t,i[e],n);return r>1?E.uniqueSort(n):n},filter:function(t){return this.pushStack(P(this,t||[],!1))},not:function(t){return this.pushStack(P(this,t||[],!0))},is:function(t){return!!P(this,"string"===typeof t&&j.test(t)?E(t):t||[],!1).length}});var q,H=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,M=E.fn.init=function(t,e,n){var r,i;if(!t)return this;if(n=n||q,"string"===typeof t){if(r="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:H.exec(t),!r||!r[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(r[1]){if(e=e instanceof E?e[0]:e,E.merge(this,E.parseHTML(r[1],e&&e.nodeType?e.ownerDocument||e:s,!0)),O.test(r[1])&&E.isPlainObject(e))for(r in e)b(this[r])?this[r](e[r]):this.attr(r,e[r]);return this}return i=s.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):b(t)?void 0!==n.ready?n.ready(t):t(E):E.makeArray(t,this)};M.prototype=E.fn,q=E(s);var I=/^(?:parents|prev(?:Until|All))/,R={children:!0,contents:!0,next:!0,prev:!0};function $(t,e){while((t=t[e])&&1!==t.nodeType);return t}E.fn.extend({has:function(t){var e=E(t,this),n=e.length;return this.filter(function(){for(var t=0;t<n;t++)if(E.contains(this,e[t]))return!0})},closest:function(t,e){var n,r=0,i=this.length,o=[],a="string"!==typeof t&&E(t);if(!j.test(t))for(;r<i;r++)for(n=this[r];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&E.find.matchesSelector(n,t))){o.push(n);break}return this.pushStack(o.length>1?E.uniqueSort(o):o)},index:function(t){return t?"string"===typeof t?p.call(E(t),this[0]):p.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),E.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return D(t,"parentNode")},parentsUntil:function(t,e,n){return D(t,"parentNode",n)},next:function(t){return $(t,"nextSibling")},prev:function(t){return $(t,"previousSibling")},nextAll:function(t){return D(t,"nextSibling")},prevAll:function(t){return D(t,"previousSibling")},nextUntil:function(t,e,n){return D(t,"nextSibling",n)},prevUntil:function(t,e,n){return D(t,"previousSibling",n)},siblings:function(t){return L((t.parentNode||{}).firstChild,t)},children:function(t){return L(t.firstChild)},contents:function(t){return _(t,"iframe")?t.contentDocument:(_(t,"template")&&(t=t.content||t),E.merge([],t.childNodes))}},function(t,e){E.fn[t]=function(n,r){var i=E.map(this,e,n);return"Until"!==t.slice(-5)&&(r=n),r&&"string"===typeof r&&(i=E.filter(r,i)),this.length>1&&(R[t]||E.uniqueSort(i),I.test(t)&&i.reverse()),this.pushStack(i)}});var F=/[^\x20\t\r\n\f]+/g;function W(t){var e={};return E.each(t.match(F)||[],function(t,n){e[n]=!0}),e}function B(t){return t}function V(t){throw t}function z(t,e,n,r){var i;try{t&&b(i=t.promise)?i.call(t).done(e).fail(n):t&&b(i=t.then)?i.call(t,e,n):e.apply(void 0,[t].slice(r))}catch(t){n.apply(void 0,[t])}}E.Callbacks=function(t){t="string"===typeof t?W(t):E.extend({},t);var e,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||t.once,r=e=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&t.stopOnFalse&&(s=o.length,n=!1)}t.memory||(n=!1),e=!1,i&&(o=n?[]:"")},c={add:function(){return o&&(n&&!e&&(s=o.length-1,a.push(n)),function e(n){E.each(n,function(n,r){b(r)?t.unique&&c.has(r)||o.push(r):r&&r.length&&"string"!==C(r)&&e(r)})}(arguments),n&&!e&&u()),this},remove:function(){return E.each(arguments,function(t,e){var n;while((n=E.inArray(e,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(t){return t?E.inArray(t,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||e||(o=n=""),this},locked:function(){return!!i},fireWith:function(t,n){return i||(n=n||[],n=[t,n.slice?n.slice():n],a.push(n),e||u()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},E.extend({Deferred:function(t){var e=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(t){return i.then(null,t)},pipe:function(){var t=arguments;return E.Deferred(function(n){E.each(e,function(e,r){var i=b(t[r[4]])&&t[r[4]];o[r[1]](function(){var t=i&&i.apply(this,arguments);t&&b(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[t]:arguments)})}),t=null}).promise()},then:function(t,r,i){var o=0;function a(t,e,r,i){return function(){var s=this,u=arguments,c=function(){var n,c;if(!(t<o)){if(n=r.apply(s,u),n===e.promise())throw new TypeError("Thenable self-resolution");c=n&&("object"===typeof n||"function"===typeof n)&&n.then,b(c)?i?c.call(n,a(o,e,B,i),a(o,e,V,i)):(o++,c.call(n,a(o,e,B,i),a(o,e,V,i),a(o,e,B,e.notifyWith))):(r!==B&&(s=void 0,u=[n]),(i||e.resolveWith)(s,u))}},f=i?c:function(){try{c()}catch(n){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(n,f.stackTrace),t+1>=o&&(r!==V&&(s=void 0,u=[n]),e.rejectWith(s,u))}};t?f():(E.Deferred.getStackHook&&(f.stackTrace=E.Deferred.getStackHook()),n.setTimeout(f))}}return E.Deferred(function(n){e[0][3].add(a(0,n,b(i)?i:B,n.notifyWith)),e[1][3].add(a(0,n,b(t)?t:B)),e[2][3].add(a(0,n,b(r)?r:V))}).promise()},promise:function(t){return null!=t?E.extend(t,i):i}},o={};return E.each(e,function(t,n){var a=n[2],s=n[5];i[n[1]]=a.add,s&&a.add(function(){r=s},e[3-t][2].disable,e[3-t][3].disable,e[0][2].lock,e[0][3].lock),a.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e=arguments.length,n=e,r=Array(n),i=c.call(arguments),o=E.Deferred(),a=function(t){return function(n){r[t]=this,i[t]=arguments.length>1?c.call(arguments):n,--e||o.resolveWith(r,i)}};if(e<=1&&(z(t,o.done(a(n)).resolve,o.reject,!e),"pending"===o.state()||b(i[n]&&i[n].then)))return o.then();while(n--)z(i[n],a(n),o.reject);return o.promise()}});var U=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(t,e){n.console&&n.console.warn&&t&&U.test(t.name)&&n.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},E.readyException=function(t){n.setTimeout(function(){throw t})};var G=E.Deferred();function J(){s.removeEventListener("DOMContentLoaded",J),n.removeEventListener("load",J),E.ready()}E.fn.ready=function(t){return G.then(t).catch(function(t){E.readyException(t)}),this},E.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--E.readyWait:E.isReady)||(E.isReady=!0,!0!==t&&--E.readyWait>0||G.resolveWith(s,[E]))}}),E.ready.then=G.then,"complete"===s.readyState||"loading"!==s.readyState&&!s.documentElement.doScroll?n.setTimeout(E.ready):(s.addEventListener("DOMContentLoaded",J),n.addEventListener("load",J));var K=function(t,e,n,r,i,o,a){var s=0,u=t.length,c=null==n;if("object"===C(n))for(s in i=!0,n)K(t,e,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,b(r)||(a=!0),c&&(a?(e.call(t,r),e=null):(c=e,e=function(t,e,n){return c.call(E(t),n)})),e))for(;s<u;s++)e(t[s],n,a?r:r.call(t[s],s,e(t[s],n)));return i?t:c?e.call(t):u?e(t[0],n):o},X=/^-ms-/,Y=/-([a-z])/g;function Z(t,e){return e.toUpperCase()}function Q(t){return t.replace(X,"ms-").replace(Y,Z)}var tt=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function et(){this.expando=E.expando+et.uid++}et.uid=1,et.prototype={cache:function(t){var e=t[this.expando];return e||(e={},tt(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var r,i=this.cache(t);if("string"===typeof e)i[Q(e)]=n;else for(r in e)i[Q(r)]=e[r];return i},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][Q(e)]},access:function(t,e,n){return void 0===e||e&&"string"===typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,r=t[this.expando];if(void 0!==r){if(void 0!==e){Array.isArray(e)?e=e.map(Q):(e=Q(e),e=e in r?[e]:e.match(F)||[]),n=e.length;while(n--)delete r[e[n]]}(void 0===e||E.isEmptyObject(r))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!E.isEmptyObject(e)}};var nt=new et,rt=new et,it=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ot=/[A-Z]/g;function at(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:it.test(t)?JSON.parse(t):t)}function st(t,e,n){var r;if(void 0===n&&1===t.nodeType)if(r="data-"+e.replace(ot,"-$&").toLowerCase(),n=t.getAttribute(r),"string"===typeof n){try{n=at(n)}catch(i){}rt.set(t,e,n)}else n=void 0;return n}E.extend({hasData:function(t){return rt.hasData(t)||nt.hasData(t)},data:function(t,e,n){return rt.access(t,e,n)},removeData:function(t,e){rt.remove(t,e)},_data:function(t,e,n){return nt.access(t,e,n)},_removeData:function(t,e){nt.remove(t,e)}}),E.fn.extend({data:function(t,e){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===t){if(this.length&&(i=rt.get(o),1===o.nodeType&&!nt.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=Q(r.slice(5)),st(o,r,i[r])));nt.set(o,"hasDataAttrs",!0)}return i}return"object"===typeof t?this.each(function(){rt.set(this,t)}):K(this,function(e){var n;if(o&&void 0===e)return n=rt.get(o,t),void 0!==n?n:(n=st(o,t),void 0!==n?n:void 0);this.each(function(){rt.set(this,t,e)})},null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){rt.remove(this,t)})}}),E.extend({queue:function(t,e,n){var r;if(t)return e=(e||"fx")+"queue",r=nt.get(t,e),n&&(!r||Array.isArray(n)?r=nt.access(t,e,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(t,e){e=e||"fx";var n=E.queue(t,e),r=n.length,i=n.shift(),o=E._queueHooks(t,e),a=function(){E.dequeue(t,e)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===e&&n.unshift("inprogress"),delete o.stop,i.call(t,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return nt.get(t,n)||nt.access(t,n,{empty:E.Callbacks("once memory").add(function(){nt.remove(t,[e+"queue",n])})})}}),E.fn.extend({queue:function(t,e){var n=2;return"string"!==typeof t&&(e=t,t="fx",n--),arguments.length<n?E.queue(this[0],t):void 0===e?this:this.each(function(){var n=E.queue(this,t,e);E._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&E.dequeue(this,t)})},dequeue:function(t){return this.each(function(){E.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!==typeof t&&(e=t,t=void 0),t=t||"fx";while(a--)n=nt.get(o[a],t+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(e)}});var ut=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ct=new RegExp("^(?:([+-])=|)("+ut+")([a-z%]*)$","i"),ft=["Top","Right","Bottom","Left"],lt=function(t,e){return t=e||t,"none"===t.style.display||""===t.style.display&&E.contains(t.ownerDocument,t)&&"none"===E.css(t,"display")},pt=function(t,e,n,r){var i,o,a={};for(o in e)a[o]=t.style[o],t.style[o]=e[o];for(o in i=n.apply(t,r||[]),e)t.style[o]=a[o];return i};function dt(t,e,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(t,e,"")},u=s(),c=n&&n[3]||(E.cssNumber[e]?"":"px"),f=(E.cssNumber[e]||"px"!==c&&+u)&&ct.exec(E.css(t,e));if(f&&f[3]!==c){u/=2,c=c||f[3],f=+u||1;while(a--)E.style(t,e,f+c),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),f/=o;f*=2,E.style(t,e,f+c),n=n||[]}return n&&(f=+f||+u||0,i=n[1]?f+(n[1]+1)*n[2]:+n[2],r&&(r.unit=c,r.start=f,r.end=i)),i}var ht={};function gt(t){var e,n=t.ownerDocument,r=t.nodeName,i=ht[r];return i||(e=n.body.appendChild(n.createElement(r)),i=E.css(e,"display"),e.parentNode.removeChild(e),"none"===i&&(i="block"),ht[r]=i,i)}function vt(t,e){for(var n,r,i=[],o=0,a=t.length;o<a;o++)r=t[o],r.style&&(n=r.style.display,e?("none"===n&&(i[o]=nt.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&lt(r)&&(i[o]=gt(r))):"none"!==n&&(i[o]="none",nt.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(t[o].style.display=i[o]);return t}E.fn.extend({show:function(){return vt(this,!0)},hide:function(){return vt(this)},toggle:function(t){return"boolean"===typeof t?t?this.show():this.hide():this.each(function(){lt(this)?E(this).show():E(this).hide()})}});var yt=/^(?:checkbox|radio)$/i,mt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,bt=/^$|^module$|\/(?:java|ecma)script/i,xt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function wt(t,e){var n;return n="undefined"!==typeof t.getElementsByTagName?t.getElementsByTagName(e||"*"):"undefined"!==typeof t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&_(t,e)?E.merge([t],n):n}function Tt(t,e){for(var n=0,r=t.length;n<r;n++)nt.set(t[n],"globalEval",!e||nt.get(e[n],"globalEval"))}xt.optgroup=xt.option,xt.tbody=xt.tfoot=xt.colgroup=xt.caption=xt.thead,xt.th=xt.td;var Ct=/<|&#?\w+;/;function St(t,e,n,r,i){for(var o,a,s,u,c,f,l=e.createDocumentFragment(),p=[],d=0,h=t.length;d<h;d++)if(o=t[d],o||0===o)if("object"===C(o))E.merge(p,o.nodeType?[o]:o);else if(Ct.test(o)){a=a||l.appendChild(e.createElement("div")),s=(mt.exec(o)||["",""])[1].toLowerCase(),u=xt[s]||xt._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],f=u[0];while(f--)a=a.lastChild;E.merge(p,a.childNodes),a=l.firstChild,a.textContent=""}else p.push(e.createTextNode(o));l.textContent="",d=0;while(o=p[d++])if(r&&E.inArray(o,r)>-1)i&&i.push(o);else if(c=E.contains(o.ownerDocument,o),a=wt(l.appendChild(o),"script"),c&&Tt(a),n){f=0;while(o=a[f++])bt.test(o.type||"")&&n.push(o)}return l}(function(){var t=s.createDocumentFragment(),e=t.appendChild(s.createElement("div")),n=s.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),e.appendChild(n),m.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue})();var Et=s.documentElement,kt=/^key/,Nt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,At=/^([^.]*)(?:\.(.+)|)/;function Dt(){return!0}function Lt(){return!1}function jt(){try{return s.activeElement}catch(t){}}function _t(t,e,n,r,i,o){var a,s;if("object"===typeof e){for(s in"string"!==typeof n&&(r=r||n,n=void 0),e)_t(t,s,n,r,e[s],o);return t}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"===typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Lt;else if(!i)return t;return 1===o&&(a=i,i=function(t){return E().off(t),a.apply(this,arguments)},i.guid=a.guid||(a.guid=E.guid++)),t.each(function(){E.event.add(this,e,i,r,n)})}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,c,f,l,p,d,h,g,v=nt.get(t);if(v){n.handler&&(o=n,n=o.handler,i=o.selector),i&&E.find.matchesSelector(Et,i),n.guid||(n.guid=E.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!==typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),e=(e||"").match(F)||[""],c=e.length;while(c--)s=At.exec(e[c])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d&&(l=E.event.special[d]||{},d=(i?l.delegateType:l.bindType)||d,l=E.event.special[d]||{},f=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,l.setup&&!1!==l.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),l.add&&(l.add.call(t,f),f.handler.guid||(f.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,f):p.push(f),E.event.global[d]=!0)}},remove:function(t,e,n,r,i){var o,a,s,u,c,f,l,p,d,h,g,v=nt.hasData(t)&&nt.get(t);if(v&&(u=v.events)){e=(e||"").match(F)||[""],c=e.length;while(c--)if(s=At.exec(e[c])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){l=E.event.special[d]||{},d=(r?l.delegateType:l.bindType)||d,p=u[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)f=p[o],!i&&g!==f.origType||n&&n.guid!==f.guid||s&&!s.test(f.namespace)||r&&r!==f.selector&&("**"!==r||!f.selector)||(p.splice(o,1),f.selector&&p.delegateCount--,l.remove&&l.remove.call(t,f));a&&!p.length&&(l.teardown&&!1!==l.teardown.call(t,h,v.handle)||E.removeEvent(t,d,v.handle),delete u[d])}else for(d in u)E.event.remove(t,d+e[c],n,r,!0);E.isEmptyObject(u)&&nt.remove(t,"handle events")}},dispatch:function(t){var e,n,r,i,o,a,s=E.event.fix(t),u=new Array(arguments.length),c=(nt.get(this,"events")||{})[s.type]||[],f=E.event.special[s.type]||{};for(u[0]=s,e=1;e<arguments.length;e++)u[e]=arguments[e];if(s.delegateTarget=this,!f.preDispatch||!1!==f.preDispatch.call(this,s)){a=E.event.handlers.call(this,s,c),e=0;while((i=a[e++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u),void 0!==r&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return f.postDispatch&&f.postDispatch.call(this,s),s.result}},handlers:function(t,e){var n,r,i,o,a,s=[],u=e.delegateCount,c=t.target;if(u&&c.nodeType&&!("click"===t.type&&t.button>=1))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==t.type||!0!==c.disabled)){for(o=[],a={},n=0;n<u;n++)r=e[n],i=r.selector+" ",void 0===a[i]&&(a[i]=r.needsContext?E(i,this).index(c)>-1:E.find(i,this,null,[c]).length),a[i]&&o.push(r);o.length&&s.push({elem:c,handlers:o})}return c=this,u<e.length&&s.push({elem:c,handlers:e.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:b(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[E.expando]?t:new E.Event(t)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==jt()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===jt()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&_(this,"input"))return this.click(),!1},_default:function(t){return _(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},E.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},E.Event=function(t,e){if(!(this instanceof E.Event))return new E.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?Dt:Lt,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&E.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Lt,isPropagationStopped:Lt,isImmediatePropagationStopped:Lt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=Dt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=Dt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=Dt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&kt.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&Nt.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},E.event.addProp),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){E.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,r=this,i=t.relatedTarget,o=t.handleObj;return i&&(i===r||E.contains(r,i))||(t.type=o.origType,n=o.handler.apply(this,arguments),t.type=e),n}}}),E.fn.extend({on:function(t,e,n,r){return _t(this,t,e,n,r)},one:function(t,e,n,r){return _t(this,t,e,n,r,1)},off:function(t,e,n){var r,i;if(t&&t.preventDefault&&t.handleObj)return r=t.handleObj,E(t.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"===typeof t){for(i in t)this.off(i,e,t[i]);return this}return!1!==e&&"function"!==typeof e||(n=e,e=void 0),!1===n&&(n=Lt),this.each(function(){E.event.remove(this,t,n,e)})}});var Ot=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Pt=/<script|<style|<link/i,qt=/checked\s*(?:[^=]|=\s*.checked.)/i,Ht=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Mt(t,e){return _(t,"table")&&_(11!==e.nodeType?e:e.firstChild,"tr")&&E(t).children("tbody")[0]||t}function It(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Rt(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function $t(t,e){var n,r,i,o,a,s,u,c;if(1===e.nodeType){if(nt.hasData(t)&&(o=nt.access(t),a=nt.set(e,o),c=o.events,c))for(i in delete a.handle,a.events={},c)for(n=0,r=c[i].length;n<r;n++)E.event.add(e,i,c[i][n]);rt.hasData(t)&&(s=rt.access(t),u=E.extend({},s),rt.set(e,u))}}function Ft(t,e){var n=e.nodeName.toLowerCase();"input"===n&&yt.test(t.type)?e.checked=t.checked:"input"!==n&&"textarea"!==n||(e.defaultValue=t.defaultValue)}function Wt(t,e,n,r){e=f.apply([],e);var i,o,a,s,u,c,l=0,p=t.length,d=p-1,h=e[0],g=b(h);if(g||p>1&&"string"===typeof h&&!m.checkClone&&qt.test(h))return t.each(function(i){var o=t.eq(i);g&&(e[0]=h.call(this,i,o.html())),Wt(o,e,n,r)});if(p&&(i=St(e,t[0].ownerDocument,!1,t,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(a=E.map(wt(i,"script"),It),s=a.length;l<p;l++)u=i,l!==d&&(u=E.clone(u,!0,!0),s&&E.merge(a,wt(u,"script"))),n.call(t[l],u,l);if(s)for(c=a[a.length-1].ownerDocument,E.map(a,Rt),l=0;l<s;l++)u=a[l],bt.test(u.type||"")&&!nt.access(u,"globalEval")&&E.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&E._evalUrl(u.src):T(u.textContent.replace(Ht,""),c,u))}return t}function Bt(t,e,n){for(var r,i=e?E.filter(e,t):t,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(wt(r)),r.parentNode&&(n&&E.contains(r.ownerDocument,r)&&Tt(wt(r,"script")),r.parentNode.removeChild(r));return t}E.extend({htmlPrefilter:function(t){return t.replace(Ot,"<$1></$2>")},clone:function(t,e,n){var r,i,o,a,s=t.cloneNode(!0),u=E.contains(t.ownerDocument,t);if(!m.noCloneChecked&&(1===t.nodeType||11===t.nodeType)&&!E.isXMLDoc(t))for(a=wt(s),o=wt(t),r=0,i=o.length;r<i;r++)Ft(o[r],a[r]);if(e)if(n)for(o=o||wt(t),a=a||wt(s),r=0,i=o.length;r<i;r++)$t(o[r],a[r]);else $t(t,s);return a=wt(s,"script"),a.length>0&&Tt(a,!u&&wt(t,"script")),s},cleanData:function(t){for(var e,n,r,i=E.event.special,o=0;void 0!==(n=t[o]);o++)if(tt(n)){if(e=n[nt.expando]){if(e.events)for(r in e.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,e.handle);n[nt.expando]=void 0}n[rt.expando]&&(n[rt.expando]=void 0)}}}),E.fn.extend({detach:function(t){return Bt(this,t,!0)},remove:function(t){return Bt(this,t)},text:function(t){return K(this,function(t){return void 0===t?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return Wt(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Mt(this,t);e.appendChild(t)}})},prepend:function(){return Wt(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=Mt(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return Wt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return Wt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(E.cleanData(wt(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return E.clone(this,t,e)})},html:function(t){return K(this,function(t){var e=this[0]||{},n=0,r=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"===typeof t&&!Pt.test(t)&&!xt[(mt.exec(t)||["",""])[1].toLowerCase()]){t=E.htmlPrefilter(t);try{for(;n<r;n++)e=this[n]||{},1===e.nodeType&&(E.cleanData(wt(e,!1)),e.innerHTML=t);e=0}catch(i){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return Wt(this,arguments,function(e){var n=this.parentNode;E.inArray(this,t)<0&&(E.cleanData(wt(this)),n&&n.replaceChild(e,this))},t)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){E.fn[t]=function(t){for(var n,r=[],i=E(t),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),E(i[a])[e](n),l.apply(r,n.get());return this.pushStack(r)}});var Vt=new RegExp("^("+ut+")(?!px)[a-z%]+$","i"),zt=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=n),e.getComputedStyle(t)},Ut=new RegExp(ft.join("|"),"i");function Gt(t,e,n){var r,i,o,a,s=t.style;return n=n||zt(t),n&&(a=n.getPropertyValue(e)||n[e],""!==a||E.contains(t.ownerDocument,t)||(a=E.style(t,e)),!m.pixelBoxStyles()&&Vt.test(a)&&Ut.test(e)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Jt(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}(function(){function t(){if(f){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",f.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Et.appendChild(c).appendChild(f);var t=n.getComputedStyle(f);r="1%"!==t.top,u=12===e(t.marginLeft),f.style.right="60%",a=36===e(t.right),i=36===e(t.width),f.style.position="absolute",o=36===f.offsetWidth||"absolute",Et.removeChild(c),f=null}}function e(t){return Math.round(parseFloat(t))}var r,i,o,a,u,c=s.createElement("div"),f=s.createElement("div");f.style&&(f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===f.style.backgroundClip,E.extend(m,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),o}}))})();var Kt=/^(none|table(?!-c[ea]).+)/,Xt=/^--/,Yt={position:"absolute",visibility:"hidden",display:"block"},Zt={letterSpacing:"0",fontWeight:"400"},Qt=["Webkit","Moz","ms"],te=s.createElement("div").style;function ee(t){if(t in te)return t;var e=t[0].toUpperCase()+t.slice(1),n=Qt.length;while(n--)if(t=Qt[n]+e,t in te)return t}function ne(t){var e=E.cssProps[t];return e||(e=E.cssProps[t]=ee(t)||t),e}function re(t,e,n){var r=ct.exec(e);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):e}function ie(t,e,n,r,i,o){var a="width"===e?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(t,n+ft[a],!0,i)),r?("content"===n&&(u-=E.css(t,"padding"+ft[a],!0,i)),"margin"!==n&&(u-=E.css(t,"border"+ft[a]+"Width",!0,i))):(u+=E.css(t,"padding"+ft[a],!0,i),"padding"!==n?u+=E.css(t,"border"+ft[a]+"Width",!0,i):s+=E.css(t,"border"+ft[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-o-u-s-.5))),u}function oe(t,e,n){var r=zt(t),i=Gt(t,e,r),o="border-box"===E.css(t,"boxSizing",!1,r),a=o;if(Vt.test(i)){if(!n)return i;i="auto"}return a=a&&(m.boxSizingReliable()||i===t.style[e]),("auto"===i||!parseFloat(i)&&"inline"===E.css(t,"display",!1,r))&&(i=t["offset"+e[0].toUpperCase()+e.slice(1)],a=!0),i=parseFloat(i)||0,i+ie(t,e,n||(o?"border":"content"),a,r,i)+"px"}function ae(t,e,n,r,i){return new ae.prototype.init(t,e,n,r,i)}E.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=Gt(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,n,r){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var i,o,a,s=Q(e),u=Xt.test(e),c=t.style;if(u||(e=ne(s)),a=E.cssHooks[e]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(t,!1,r))?i:c[e];o=typeof n,"string"===o&&(i=ct.exec(n))&&i[1]&&(n=dt(t,e,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),m.clearCloneStyle||""!==n||0!==e.indexOf("background")||(c[e]="inherit"),a&&"set"in a&&void 0===(n=a.set(t,n,r))||(u?c.setProperty(e,n):c[e]=n))}},css:function(t,e,n,r){var i,o,a,s=Q(e),u=Xt.test(e);return u||(e=ne(s)),a=E.cssHooks[e]||E.cssHooks[s],a&&"get"in a&&(i=a.get(t,!0,n)),void 0===i&&(i=Gt(t,e,r)),"normal"===i&&e in Zt&&(i=Zt[e]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(t,e){E.cssHooks[e]={get:function(t,n,r){if(n)return!Kt.test(E.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?oe(t,e,r):pt(t,Yt,function(){return oe(t,e,r)})},set:function(t,n,r){var i,o=zt(t),a="border-box"===E.css(t,"boxSizing",!1,o),s=r&&ie(t,e,r,a,o);return a&&m.scrollboxSize()===o.position&&(s-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(o[e])-ie(t,e,"border",!1,o)-.5)),s&&(i=ct.exec(n))&&"px"!==(i[3]||"px")&&(t.style[e]=n,n=E.css(t,e)),re(t,n,s)}}}),E.cssHooks.marginLeft=Jt(m.reliableMarginLeft,function(t,e){if(e)return(parseFloat(Gt(t,"marginLeft"))||t.getBoundingClientRect().left-pt(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(t,e){E.cssHooks[t+e]={expand:function(n){for(var r=0,i={},o="string"===typeof n?n.split(" "):[n];r<4;r++)i[t+ft[r]+e]=o[r]||o[r-2]||o[0];return i}},"margin"!==t&&(E.cssHooks[t+e].set=re)}),E.fn.extend({css:function(t,e){return K(this,function(t,e,n){var r,i,o={},a=0;if(Array.isArray(e)){for(r=zt(t),i=e.length;a<i;a++)o[e[a]]=E.css(t,e[a],!1,r);return o}return void 0!==n?E.style(t,e,n):E.css(t,e)},t,e,arguments.length>1)}}),E.Tween=ae,ae.prototype={constructor:ae,init:function(t,e,n,r,i,o){this.elem=t,this.prop=n,this.easing=i||E.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var t=ae.propHooks[this.prop];return t&&t.get?t.get(this):ae.propHooks._default.get(this)},run:function(t){var e,n=ae.propHooks[this.prop];return this.options.duration?this.pos=e=E.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ae.propHooks._default.set(this),this}},ae.prototype.init.prototype=ae.prototype,ae.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=E.css(t.elem,t.prop,""),e&&"auto"!==e?e:0)},set:function(t){E.fx.step[t.prop]?E.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[E.cssProps[t.prop]]&&!E.cssHooks[t.prop]?t.elem[t.prop]=t.now:E.style(t.elem,t.prop,t.now+t.unit)}}},ae.propHooks.scrollTop=ae.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},E.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},E.fx=ae.prototype.init,E.fx.step={};var se,ue,ce=/^(?:toggle|show|hide)$/,fe=/queueHooks$/;function le(){ue&&(!1===s.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(le):n.setTimeout(le,E.fx.interval),E.fx.tick())}function pe(){return n.setTimeout(function(){se=void 0}),se=Date.now()}function de(t,e){var n,r=0,i={height:t};for(e=e?1:0;r<4;r+=2-e)n=ft[r],i["margin"+n]=i["padding"+n]=t;return e&&(i.opacity=i.width=t),i}function he(t,e,n){for(var r,i=(ye.tweeners[e]||[]).concat(ye.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,e,t))return r}function ge(t,e,n){var r,i,o,a,s,u,c,f,l="width"in e||"height"in e,p=this,d={},h=t.style,g=t.nodeType&&lt(t),v=nt.get(t,"fxshow");for(r in n.queue||(a=E._queueHooks(t,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(t,"fx").length||a.empty.fire()})})),e)if(i=e[r],ce.test(i)){if(delete e[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||E.style(t,r)}if(u=!E.isEmptyObject(e),u||!E.isEmptyObject(d))for(r in l&&1===t.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],c=v&&v.display,null==c&&(c=nt.get(t,"display")),f=E.css(t,"display"),"none"===f&&(c?f=c:(vt([t],!0),c=t.style.display||c,f=E.css(t,"display"),vt([t]))),("inline"===f||"inline-block"===f&&null!=c)&&"none"===E.css(t,"float")&&(u||(p.done(function(){h.display=c}),null==c&&(f=h.display,c="none"===f?"":f)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=nt.access(t,"fxshow",{display:c}),o&&(v.hidden=!g),g&&vt([t],!0),p.done(function(){for(r in g||vt([t]),nt.remove(t,"fxshow"),d)E.style(t,r,d[r])})),u=he(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}function ve(t,e){var n,r,i,o,a;for(n in t)if(r=Q(n),i=e[r],o=t[n],Array.isArray(o)&&(i=o[1],o=t[n]=o[0]),n!==r&&(t[r]=o,delete t[n]),a=E.cssHooks[r],a&&"expand"in a)for(n in o=a.expand(o),delete t[r],o)n in t||(t[n]=o[n],e[n]=i);else e[r]=i}function ye(t,e,n){var r,i,o=0,a=ye.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var e=se||pe(),n=Math.max(0,c.startTime+c.duration-e),r=n/c.duration||0,o=1-r,a=0,u=c.tweens.length;a<u;a++)c.tweens[a].run(o);return s.notifyWith(t,[c,o,n]),o<1&&u?n:(u||s.notifyWith(t,[c,1,0]),s.resolveWith(t,[c]),!1)},c=s.promise({elem:t,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},n),originalProperties:e,originalOptions:n,startTime:se||pe(),duration:n.duration,tweens:[],createTween:function(e,n){var r=E.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(r),r},stop:function(e){var n=0,r=e?c.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)c.tweens[n].run(1);return e?(s.notifyWith(t,[c,1,0]),s.resolveWith(t,[c,e])):s.rejectWith(t,[c,e]),this}}),f=c.props;for(ve(f,c.opts.specialEasing);o<a;o++)if(r=ye.prefilters[o].call(c,t,f,c.opts),r)return b(r.stop)&&(E._queueHooks(c.elem,c.opts.queue).stop=r.stop.bind(r)),r;return E.map(f,he,c),b(c.opts.start)&&c.opts.start.call(t,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),E.fx.timer(E.extend(u,{elem:t,anim:c,queue:c.opts.queue})),c}E.Animation=E.extend(ye,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return dt(n.elem,t,ct.exec(e),n),n}]},tweener:function(t,e){b(t)?(e=t,t=["*"]):t=t.match(F);for(var n,r=0,i=t.length;r<i;r++)n=t[r],ye.tweeners[n]=ye.tweeners[n]||[],ye.tweeners[n].unshift(e)},prefilters:[ge],prefilter:function(t,e){e?ye.prefilters.unshift(t):ye.prefilters.push(t)}}),E.speed=function(t,e,n){var r=t&&"object"===typeof t?E.extend({},t):{complete:n||!n&&e||b(t)&&t,duration:t,easing:n&&e||e&&!b(e)&&e};return E.fx.off?r.duration=0:"number"!==typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){b(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(t,e,n,r){return this.filter(lt).css("opacity",0).show().end().animate({opacity:e},t,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ye(this,E.extend({},t),o);(i||nt.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(t,e,n){var r=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!==typeof t&&(n=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,i=null!=t&&t+"queueHooks",o=E.timers,a=nt.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&fe.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=t&&o[i].queue!==t||(o[i].anim.stop(n),e=!1,o.splice(i,1));!e&&n||E.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,n=nt.get(this),r=n[t+"queue"],i=n[t+"queueHooks"],o=E.timers,a=r?r.length:0;for(n.finish=!0,E.queue(this,t,[]),i&&i.stop&&i.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;e<a;e++)r[e]&&r[e].finish&&r[e].finish.call(this);delete n.finish})}}),E.each(["toggle","show","hide"],function(t,e){var n=E.fn[e];E.fn[e]=function(t,r,i){return null==t||"boolean"===typeof t?n.apply(this,arguments):this.animate(de(e,!0),t,r,i)}}),E.each({slideDown:de("show"),slideUp:de("hide"),slideToggle:de("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){E.fn[t]=function(t,n,r){return this.animate(e,t,n,r)}}),E.timers=[],E.fx.tick=function(){var t,e=0,n=E.timers;for(se=Date.now();e<n.length;e++)t=n[e],t()||n[e]!==t||n.splice(e--,1);n.length||E.fx.stop(),se=void 0},E.fx.timer=function(t){E.timers.push(t),E.fx.start()},E.fx.interval=13,E.fx.start=function(){ue||(ue=!0,le())},E.fx.stop=function(){ue=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(t,e){return t=E.fx&&E.fx.speeds[t]||t,e=e||"fx",this.queue(e,function(e,r){var i=n.setTimeout(e,t);r.stop=function(){n.clearTimeout(i)}})},function(){var t=s.createElement("input"),e=s.createElement("select"),n=e.appendChild(s.createElement("option"));t.type="checkbox",m.checkOn=""!==t.value,m.optSelected=n.selected,t=s.createElement("input"),t.value="t",t.type="radio",m.radioValue="t"===t.value}();var me,be=E.expr.attrHandle;E.fn.extend({attr:function(t,e){return K(this,E.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){E.removeAttr(this,t)})}}),E.extend({attr:function(t,e,n){var r,i,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"===typeof t.getAttribute?E.prop(t,e,n):(1===o&&E.isXMLDoc(t)||(i=E.attrHooks[e.toLowerCase()]||(E.expr.match.bool.test(e)?me:void 0)),void 0!==n?null===n?void E.removeAttr(t,e):i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:(t.setAttribute(e,n+""),n):i&&"get"in i&&null!==(r=i.get(t,e))?r:(r=E.find.attr(t,e),null==r?void 0:r))},attrHooks:{type:{set:function(t,e){if(!m.radioValue&&"radio"===e&&_(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,r=0,i=e&&e.match(F);if(i&&1===t.nodeType)while(n=i[r++])t.removeAttribute(n)}}),me={set:function(t,e,n){return!1===e?E.removeAttr(t,n):t.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(t,e){var n=be[e]||E.find.attr;be[e]=function(t,e,r){var i,o,a=e.toLowerCase();return r||(o=be[a],be[a]=i,i=null!=n(t,e,r)?a:null,be[a]=o),i}});var xe=/^(?:input|select|textarea|button)$/i,we=/^(?:a|area)$/i;function Te(t){var e=t.match(F)||[];return e.join(" ")}function Ce(t){return t.getAttribute&&t.getAttribute("class")||""}function Se(t){return Array.isArray(t)?t:"string"===typeof t&&t.match(F)||[]}E.fn.extend({prop:function(t,e){return K(this,E.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[E.propFix[t]||t]})}}),E.extend({prop:function(t,e,n){var r,i,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(t)||(e=E.propFix[e]||e,i=E.propHooks[e]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(t,n,e))?r:t[e]=n:i&&"get"in i&&null!==(r=i.get(t,e))?r:t[e]},propHooks:{tabIndex:{get:function(t){var e=E.find.attr(t,"tabindex");return e?parseInt(e,10):xe.test(t.nodeName)||we.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(E.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(b(t))return this.each(function(e){E(this).addClass(t.call(this,e,Ce(this)))});if(e=Se(t),e.length)while(n=this[u++])if(i=Ce(n),r=1===n.nodeType&&" "+Te(i)+" ",r){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");s=Te(r),i!==s&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(b(t))return this.each(function(e){E(this).removeClass(t.call(this,e,Ce(this)))});if(!arguments.length)return this.attr("class","");if(e=Se(t),e.length)while(n=this[u++])if(i=Ce(n),r=1===n.nodeType&&" "+Te(i)+" ",r){a=0;while(o=e[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");s=Te(r),i!==s&&n.setAttribute("class",s)}return this},toggleClass:function(t,e){var n=typeof t,r="string"===n||Array.isArray(t);return"boolean"===typeof e&&r?e?this.addClass(t):this.removeClass(t):b(t)?this.each(function(n){E(this).toggleClass(t.call(this,n,Ce(this),e),e)}):this.each(function(){var e,i,o,a;if(r){i=0,o=E(this),a=Se(t);while(e=a[i++])o.hasClass(e)?o.removeClass(e):o.addClass(e)}else void 0!==t&&"boolean"!==n||(e=Ce(this),e&&nt.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":nt.get(this,"__className__")||""))})},hasClass:function(t){var e,n,r=0;e=" "+t+" ";while(n=this[r++])if(1===n.nodeType&&(" "+Te(Ce(n))+" ").indexOf(e)>-1)return!0;return!1}});var Ee=/\r/g;E.fn.extend({val:function(t){var e,n,r,i=this[0];return arguments.length?(r=b(t),this.each(function(n){var i;1===this.nodeType&&(i=r?t.call(this,n,E(this).val()):t,null==i?i="":"number"===typeof i?i+="":Array.isArray(i)&&(i=E.map(i,function(t){return null==t?"":t+""})),e=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()],e&&"set"in e&&void 0!==e.set(this,i,"value")||(this.value=i))})):i?(e=E.valHooks[i.type]||E.valHooks[i.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(i,"value"))?n:(n=i.value,"string"===typeof n?n.replace(Ee,""):null==n?"":n)):void 0}}),E.extend({valHooks:{option:{get:function(t){var e=E.find.attr(t,"value");return null!=e?e:Te(E.text(t))}},select:{get:function(t){var e,n,r,i=t.options,o=t.selectedIndex,a="select-one"===t.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(n=i[r],(n.selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!_(n.parentNode,"optgroup"))){if(e=E(n).val(),a)return e;s.push(e)}return s},set:function(t,e){var n,r,i=t.options,o=E.makeArray(e),a=i.length;while(a--)r=i[a],(r.selected=E.inArray(E.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(t.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=E.inArray(E(t).val(),e)>-1}},m.checkOn||(E.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),m.focusin="onfocusin"in n;var ke=/^(?:focusinfocus|focusoutblur)$/,Ne=function(t){t.stopPropagation()};E.extend(E.event,{trigger:function(t,e,r,i){var o,a,u,c,f,l,p,d,h=[r||s],v=g.call(t,"type")?t.type:t,y=g.call(t,"namespace")?t.namespace.split("."):[];if(a=d=u=r=r||s,3!==r.nodeType&&8!==r.nodeType&&!ke.test(v+E.event.triggered)&&(v.indexOf(".")>-1&&(y=v.split("."),v=y.shift(),y.sort()),f=v.indexOf(":")<0&&"on"+v,t=t[E.expando]?t:new E.Event(v,"object"===typeof t&&t),t.isTrigger=i?2:3,t.namespace=y.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),e=null==e?[t]:E.makeArray(e,[t]),p=E.event.special[v]||{},i||!p.trigger||!1!==p.trigger.apply(r,e))){if(!i&&!p.noBubble&&!x(r)){for(c=p.delegateType||v,ke.test(c+v)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||s)&&h.push(u.defaultView||u.parentWindow||n)}o=0;while((a=h[o++])&&!t.isPropagationStopped())d=a,t.type=o>1?c:p.bindType||v,l=(nt.get(a,"events")||{})[t.type]&&nt.get(a,"handle"),l&&l.apply(a,e),l=f&&a[f],l&&l.apply&&tt(a)&&(t.result=l.apply(a,e),!1===t.result&&t.preventDefault());return t.type=v,i||t.isDefaultPrevented()||p._default&&!1!==p._default.apply(h.pop(),e)||!tt(r)||f&&b(r[v])&&!x(r)&&(u=r[f],u&&(r[f]=null),E.event.triggered=v,t.isPropagationStopped()&&d.addEventListener(v,Ne),r[v](),t.isPropagationStopped()&&d.removeEventListener(v,Ne),E.event.triggered=void 0,u&&(r[f]=u)),t.result}},simulate:function(t,e,n){var r=E.extend(new E.Event,n,{type:t,isSimulated:!0});E.event.trigger(r,null,e)}}),E.fn.extend({trigger:function(t,e){return this.each(function(){E.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];if(n)return E.event.trigger(t,e,n,!0)}}),m.focusin||E.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){E.event.simulate(e,t.target,E.event.fix(t))};E.event.special[e]={setup:function(){var r=this.ownerDocument||this,i=nt.access(r,e);i||r.addEventListener(t,n,!0),nt.access(r,e,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=nt.access(r,e)-1;i?nt.access(r,e,i):(r.removeEventListener(t,n,!0),nt.remove(r,e))}}});var Ae=n.location,De=Date.now(),Le=/\?/;E.parseXML=function(t){var e;if(!t||"string"!==typeof t)return null;try{e=(new n.DOMParser).parseFromString(t,"text/xml")}catch(r){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||E.error("Invalid XML: "+t),e};var je=/\[\]$/,_e=/\r?\n/g,Oe=/^(?:submit|button|image|reset|file)$/i,Pe=/^(?:input|select|textarea|keygen)/i;function qe(t,e,n,r){var i;if(Array.isArray(e))E.each(e,function(e,i){n||je.test(t)?r(t,i):qe(t+"["+("object"===typeof i&&null!=i?e:"")+"]",i,n,r)});else if(n||"object"!==C(e))r(t,e);else for(i in e)qe(t+"["+i+"]",e[i],n,r)}E.param=function(t,e){var n,r=[],i=function(t,e){var n=b(e)?e():e;r[r.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(t)||t.jquery&&!E.isPlainObject(t))E.each(t,function(){i(this.name,this.value)});else for(n in t)qe(n,t[n],e,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=E.prop(this,"elements");return t?E.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!E(this).is(":disabled")&&Pe.test(this.nodeName)&&!Oe.test(t)&&(this.checked||!yt.test(t))}).map(function(t,e){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(t){return{name:e.name,value:t.replace(_e,"\r\n")}}):{name:e.name,value:n.replace(_e,"\r\n")}}).get()}});var He=/%20/g,Me=/#.*$/,Ie=/([?&])_=[^&]*/,Re=/^(.*?):[ \t]*([^\r\n]*)$/gm,$e=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fe=/^(?:GET|HEAD)$/,We=/^\/\//,Be={},Ve={},ze="*/".concat("*"),Ue=s.createElement("a");function Ge(t){return function(e,n){"string"!==typeof e&&(n=e,e="*");var r,i=0,o=e.toLowerCase().match(F)||[];if(b(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(t[r]=t[r]||[]).unshift(n)):(t[r]=t[r]||[]).push(n)}}function Je(t,e,n,r){var i={},o=t===Ve;function a(s){var u;return i[s]=!0,E.each(t[s]||[],function(t,s){var c=s(e,n,r);return"string"!==typeof c||o||i[c]?o?!(u=c):void 0:(e.dataTypes.unshift(c),a(c),!1)}),u}return a(e.dataTypes[0])||!i["*"]&&a("*")}function Ke(t,e){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((i[n]?t:r||(r={}))[n]=e[n]);return r&&E.extend(!0,t,r),t}function Xe(t,e,n){var r,i,o,a,s=t.contents,u=t.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=t.mimeType||e.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||t.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ye(t,e,n,r){var i,o,a,s,u,c={},f=t.dataTypes.slice();if(f[1])for(a in t.converters)c[a.toLowerCase()]=t.converters[a];o=f.shift();while(o)if(t.responseFields[o]&&(n[t.responseFields[o]]=e),!u&&r&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),u=o,o=f.shift(),o)if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=c[u+" "+o]||c["* "+o],!a)for(i in c)if(s=i.split(" "),s[1]===o&&(a=c[u+" "+s[0]]||c["* "+s[0]],a)){!0===a?a=c[i]:!0!==c[i]&&(o=s[0],f.unshift(s[1]));break}if(!0!==a)if(a&&t.throws)e=a(e);else try{e=a(e)}catch(l){return{state:"parsererror",error:a?l:"No conversion from "+u+" to "+o}}}return{state:"success",data:e}}Ue.href=Ae.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ae.href,type:"GET",isLocal:$e.test(Ae.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ze,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?Ke(Ke(t,E.ajaxSettings),e):Ke(E.ajaxSettings,t)},ajaxPrefilter:Ge(Be),ajaxTransport:Ge(Ve),ajax:function(t,e){"object"===typeof t&&(e=t,t=void 0),e=e||{};var r,i,o,a,u,c,f,l,p,d,h=E.ajaxSetup({},e),g=h.context||h,v=h.context&&(g.nodeType||g.jquery)?E(g):E.event,y=E.Deferred(),m=E.Callbacks("once memory"),b=h.statusCode||{},x={},w={},T="canceled",C={readyState:0,getResponseHeader:function(t){var e;if(f){if(!a){a={};while(e=Re.exec(o))a[e[1].toLowerCase()]=e[2]}e=a[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return f?o:null},setRequestHeader:function(t,e){return null==f&&(t=w[t.toLowerCase()]=w[t.toLowerCase()]||t,x[t]=e),this},overrideMimeType:function(t){return null==f&&(h.mimeType=t),this},statusCode:function(t){var e;if(t)if(f)C.always(t[C.status]);else for(e in t)b[e]=[b[e],t[e]];return this},abort:function(t){var e=t||T;return r&&r.abort(e),S(0,e),this}};if(y.promise(C),h.url=((t||h.url||Ae.href)+"").replace(We,Ae.protocol+"//"),h.type=e.method||e.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(F)||[""],null==h.crossDomain){c=s.createElement("a");try{c.href=h.url,c.href=c.href,h.crossDomain=Ue.protocol+"//"+Ue.host!==c.protocol+"//"+c.host}catch(k){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!==typeof h.data&&(h.data=E.param(h.data,h.traditional)),Je(Be,h,e,C),f)return C;for(p in l=E.event&&h.global,l&&0===E.active++&&E.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Fe.test(h.type),i=h.url.replace(Me,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(He,"+")):(d=h.url.slice(i.length),h.data&&(h.processData||"string"===typeof h.data)&&(i+=(Le.test(i)?"&":"?")+h.data,delete h.data),!1===h.cache&&(i=i.replace(Ie,"$1"),d=(Le.test(i)?"&":"?")+"_="+De+++d),h.url=i+d),h.ifModified&&(E.lastModified[i]&&C.setRequestHeader("If-Modified-Since",E.lastModified[i]),E.etag[i]&&C.setRequestHeader("If-None-Match",E.etag[i])),(h.data&&h.hasContent&&!1!==h.contentType||e.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+ze+"; q=0.01":""):h.accepts["*"]),h.headers)C.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,C,h)||f))return C.abort();if(T="abort",m.add(h.complete),C.done(h.success),C.fail(h.error),r=Je(Ve,h,e,C),r){if(C.readyState=1,l&&v.trigger("ajaxSend",[C,h]),f)return C;h.async&&h.timeout>0&&(u=n.setTimeout(function(){C.abort("timeout")},h.timeout));try{f=!1,r.send(x,S)}catch(k){if(f)throw k;S(-1,k)}}else S(-1,"No Transport");function S(t,e,a,s){var c,p,d,x,w,T=e;f||(f=!0,u&&n.clearTimeout(u),r=void 0,o=s||"",C.readyState=t>0?4:0,c=t>=200&&t<300||304===t,a&&(x=Xe(h,C,a)),x=Ye(h,x,C,c),c?(h.ifModified&&(w=C.getResponseHeader("Last-Modified"),w&&(E.lastModified[i]=w),w=C.getResponseHeader("etag"),w&&(E.etag[i]=w)),204===t||"HEAD"===h.type?T="nocontent":304===t?T="notmodified":(T=x.state,p=x.data,d=x.error,c=!d)):(d=T,!t&&T||(T="error",t<0&&(t=0))),C.status=t,C.statusText=(e||T)+"",c?y.resolveWith(g,[p,T,C]):y.rejectWith(g,[C,T,d]),C.statusCode(b),b=void 0,l&&v.trigger(c?"ajaxSuccess":"ajaxError",[C,h,c?p:d]),m.fireWith(g,[C,T]),l&&(v.trigger("ajaxComplete",[C,h]),--E.active||E.event.trigger("ajaxStop")))}return C},getJSON:function(t,e,n){return E.get(t,e,n,"json")},getScript:function(t,e){return E.get(t,void 0,e,"script")}}),E.each(["get","post"],function(t,e){E[e]=function(t,n,r,i){return b(n)&&(i=i||r,r=n,n=void 0),E.ajax(E.extend({url:t,type:e,dataType:i,data:n,success:r},E.isPlainObject(t)&&t))}}),E._evalUrl=function(t){return E.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},E.fn.extend({wrapAll:function(t){var e;return this[0]&&(b(t)&&(t=t.call(this[0])),e=E(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){var t=this;while(t.firstElementChild)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(t){return b(t)?this.each(function(e){E(this).wrapInner(t.call(this,e))}):this.each(function(){var e=E(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=b(t);return this.each(function(n){E(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(t){return!E.expr.pseudos.visible(t)},E.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(t){}};var Ze={0:200,1223:204},Qe=E.ajaxSettings.xhr();m.cors=!!Qe&&"withCredentials"in Qe,m.ajax=Qe=!!Qe,E.ajaxTransport(function(t){var e,r;if(m.cors||Qe&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a]);e=function(t){return function(){e&&(e=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===t?s.abort():"error"===t?"number"!==typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Ze[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!==typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=e(),r=s.onerror=s.ontimeout=e("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&n.setTimeout(function(){e&&r()})},e=e("abort");try{s.send(t.hasContent&&t.data||null)}catch(u){if(e)throw u}},abort:function(){e&&e()}}}),E.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return E.globalEval(t),t}}}),E.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),E.ajaxTransport("script",function(t){var e,n;if(t.crossDomain)return{send:function(r,i){e=E("<script>").prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&i("error"===t.type?404:200,t.type)}),s.head.appendChild(e[0])},abort:function(){n&&n()}}});var tn=[],en=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=tn.pop()||E.expando+"_"+De++;return this[t]=!0,t}}),E.ajaxPrefilter("json jsonp",function(t,e,r){var i,o,a,s=!1!==t.jsonp&&(en.test(t.url)?"url":"string"===typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&en.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=b(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(en,"$1"+i):!1!==t.jsonp&&(t.url+=(Le.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||E.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=n[i],n[i]=function(){a=arguments},r.always(function(){void 0===o?E(n).removeProp(i):n[i]=o,t[i]&&(t.jsonpCallback=e.jsonpCallback,tn.push(i)),a&&b(o)&&o(a[0]),a=o=void 0}),"script"}),m.createHTMLDocument=function(){var t=s.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",2===t.childNodes.length}(),E.parseHTML=function(t,e,n){return"string"!==typeof t?[]:("boolean"===typeof e&&(n=e,e=!1),e||(m.createHTMLDocument?(e=s.implementation.createHTMLDocument(""),r=e.createElement("base"),r.href=s.location.href,e.head.appendChild(r)):e=s),i=O.exec(t),o=!n&&[],i?[e.createElement(i[1])]:(i=St([t],e,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(t,e,n){var r,i,o,a=this,s=t.indexOf(" ");return s>-1&&(r=Te(t.slice(s)),t=t.slice(0,s)),b(e)?(n=e,e=void 0):e&&"object"===typeof e&&(i="POST"),a.length>0&&E.ajax({url:t,type:i||"GET",dataType:"html",data:e}).done(function(t){o=arguments,a.html(r?E("<div>").append(E.parseHTML(t)).find(r):t)}).always(n&&function(t,e){a.each(function(){n.apply(this,o||[t.responseText,e,t])})}),this},E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){E.fn[e]=function(t){return this.on(e,t)}}),E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(t,e,n){var r,i,o,a,s,u,c,f=E.css(t,"position"),l=E(t),p={};"static"===f&&(t.style.position="relative"),s=l.offset(),o=E.css(t,"top"),u=E.css(t,"left"),c=("absolute"===f||"fixed"===f)&&(o+u).indexOf("auto")>-1,c?(r=l.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),b(e)&&(e=e.call(t,n,E.extend({},s))),null!=e.top&&(p.top=e.top-s.top+a),null!=e.left&&(p.left=e.left-s.left+i),"using"in e?e.using.call(t,p):l.css(p)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))e=r.getBoundingClientRect();else{e=this.offset(),n=r.ownerDocument,t=r.offsetParent||n.documentElement;while(t&&(t===n.body||t===n.documentElement)&&"static"===E.css(t,"position"))t=t.parentNode;t&&t!==r&&1===t.nodeType&&(i=E(t).offset(),i.top+=E.css(t,"borderTopWidth",!0),i.left+=E.css(t,"borderLeftWidth",!0))}return{top:e.top-i.top-E.css(r,"marginTop",!0),left:e.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var t=this.offsetParent;while(t&&"static"===E.css(t,"position"))t=t.offsetParent;return t||Et})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n="pageYOffset"===e;E.fn[t]=function(r){return K(this,function(t,r,i){var o;if(x(t)?o=t:9===t.nodeType&&(o=t.defaultView),void 0===i)return o?o[e]:t[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):t[r]=i},t,r,arguments.length)}}),E.each(["top","left"],function(t,e){E.cssHooks[e]=Jt(m.pixelPosition,function(t,n){if(n)return n=Gt(t,e),Vt.test(n)?E(t).position()[e]+"px":n})}),E.each({Height:"height",Width:"width"},function(t,e){E.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,r){E.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!==typeof i),s=n||(!0===i||!0===o?"margin":"border");return K(this,function(e,n,i){var o;return x(e)?0===r.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===i?E.css(e,n,s):E.style(e,n,i,s)},e,a?i:void 0,a)}})}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,e){E.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),E.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),E.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,r){return this.on(e,t,n,r)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}}),E.proxy=function(t,e){var n,r,i;if("string"===typeof e&&(n=t[e],e=t,t=n),b(t))return r=c.call(arguments,2),i=function(){return t.apply(e||this,r.concat(c.call(arguments)))},i.guid=t.guid=t.guid||E.guid++,i},E.holdReady=function(t){t?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=_,E.isFunction=b,E.isWindow=x,E.camelCase=Q,E.type=C,E.now=Date.now,E.isNumeric=function(t){var e=E.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},r=[],i=function(){return E}.apply(e,r),void 0===i||(t.exports=i);var nn=n.jQuery,rn=n.$;return E.noConflict=function(t){return n.$===E&&(n.$=rn),t&&n.jQuery===E&&(n.jQuery=nn),E},o||(n.jQuery=n.$=E),E})},b451:function(t,e,n){var r=n("27e0"),i=n("2724"),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("6333")(Function.call,n("704d").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},b8f9:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},ba1a:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},c094:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},c2ce:function(t,e,n){var r=n("2915"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},c576:function(t,e,n){"use strict";var r=n("3bf0")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},c712:function(t,e,n){var r=n("e00b"),i=n("c2ce"),o=n("3a95");t.exports=function(t){return function(e,n,a){var s,u=r(e),c=i(u.length),f=o(a,c);if(t&&n!=n){while(c>f)if(s=u[f++],s!=s)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},c8da:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},cd9d:function(t,e,n){var r=n("27e0"),i=n("c8da").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},ce52:function(t,e,n){var r=n("f048"),i=n("c8da"),o="__core-js_shared__",a=i[o]||(i[o]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("e71b")?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},d47b:function(t,e,n){},d545:function(t,e,n){var r=n("27e0"),i=n("b451").set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},db38:function(t,e,n){},e00b:function(t,e,n){var r=n("3888"),i=n("f1e5");t.exports=function(t){return r(i(t))}},e6bd:function(t,e,n){var r=n("2724"),i=n("24a4"),o=n("163c"),a=Object.defineProperty;e.f=n("4f1d")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e71b:function(t,e){t.exports=!1},e76c:function(t,e,n){"use strict";var r=n("0c62"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},f048:function(t,e){var n=t.exports={version:"2.6.1"};"number"==typeof __e&&(__e=n)},f1e5:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},f498:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},f57d:function(t,e,n){var r=n("c8da"),i=n("a0dc"),o=n("ba1a"),a=n("3bc6")("src"),s="toString",u=Function[s],c=(""+u).split(s);n("f048").inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,s){var u="function"==typeof n;u&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(u&&(o(n,a)||i(n,a,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,s,function(){return"function"==typeof this&&this[a]||u.call(this)})},f9b8:function(t,e,n){var r=n("ba1a"),i=n("e00b"),o=n("c712")(!1),a=n("5e73")("IE_PROTO");t.exports=function(t,e){var n,s=i(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);while(e.length>u)r(s,n=e[u++])&&(~o(c,n)||c.push(n));return c}}})});
//# sourceMappingURL=orgchart.umd.min.js.map

/***/ })

}]);