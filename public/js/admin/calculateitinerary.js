(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/calculateitinerary"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Calculator-itinerary.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/itinerary/Calculator-itinerary.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ListCalculator",
  data: function data() {
    return {
      showModal: false,
      total: 0,
      itineraryData: "",
      row_input: "hotel",
      hotel_counter: 0,
      hotel_list: "",
      bus_list: "",
      train_list: "",
      flight_list: "",
      sight_list: "",
      escort_list: "",
      hotel_selected: [],
      bus_selected: [],
      sight_selected: [],
      escort_selected: [],
      hotel_row: [{
        hotel_id: "",
        apai_single: "",
        apai_double: "",
        apai_triple: "",
        apai_quad: "",
        mapai_single: "",
        mapai_double: "",
        mapai_triple: "",
        mapai_quad: "",
        cpai_single: "",
        cpai_double: "",
        cpai_triple: "",
        cpai_quad: ""
      }],
      bus_row: [{
        bus_id: "",
        seater: "",
        seat_type: "",
        price: ""
      }],
      train_row: [{
        train_id: "",
        code: "",
        price: 0
      }],
      flight_row: [{
        flight_id: "",
        code: "",
        price: 0
      }],
      sight_row: [{
        sight_id: "",
        city: "",
        adult_price: "",
        child_price: ""
      }],
      escort_row: [{
        escort_id: "",
        phoneno: "",
        salaryPerday: ""
      }],
      hotel_total: 0,
      bus_total: 0,
      train_total: 0,
      flight_total: 0,
      escrot_total: 0,
      sight_seeing_total: 0
    };
  },
  created: function created() {
    var _this = this;

    var api = "api/itinerary/".concat(this.$route.params.id);
    axios.get(api).then(function (response) {
      _this.itineraryData = response.data; // add data to the itineraryData
    });
    axios.get("/api/hotel").then(function (response) {
      if (response.data) {
        _this.hotel_list = response.data;
      }
    });
    axios.get("/api/bus").then(function (response) {
      if (response.data) {
        _this.bus_list = response.data.data;
      }
    });
    axios.get("/api/train").then(function (response) {
      if (response.data) {
        _this.train_list = response.data;
      }
    });
    axios.get("/api/flight").then(function (response) {
      if (response.data) {
        _this.flight_list = response.data;
      }
    });
    axios.get("/api/sightseeings").then(function (response) {
      if (response.data) {
        _this.sight_list = response.data.data;
      }
    });
    axios.get("/api/escort").then(function (response) {
      if (response.data) {
        _this.escort_list = response.data.data;
      }
    });
  },
  watch: {},
  computed: {},
  methods: {
    check: function check(e) {},
    sumData: function sumData() {
      this.hotel_total = this.calculate(this.hotel_selected);
      console.log(this.hotel_selected);
      this.escort_total = this.calculate(this.escort_selected);
      this.sight_seeing_total = this.calculate(this.sight_selected);
      this.bus_total = this.calculate(this.bus_selected);
      this.train_total = this.calculate_other(this.train_row);
      this.flight_total = this.calculate_other(this.flight_row);
      this.total = this.hotel_total + this.escort_total + this.sight_seeing_total + this.bus_total + this.train_total + this.flight_total;
      this.showModal = true;
    },
    calculate: function calculate(array) {
      var sum = 0;

      if (array.length > 0) {
        for (var i = array.length - 1; i >= 0; i--) {
          sum += parseInt(array[i]);
        }

        return sum;
      } else {
        return sum;
      }
    },
    calculate_other: function calculate_other(array) {
      var sum = 0;

      if (array.length > 0) {
        for (var i = array.length - 1; i >= 0; i--) {
          sum += parseInt(array[i].price);
        }

        return sum;
      } else {
        return sum = 0;
      }
    },
    add_row: function add_row(type) {
      if (type == "hotel") {
        this.hotel_row.push({
          hotel_id: "",
          apai_single: "",
          apai_double: "",
          apai_triple: "",
          apai_quad: "",
          mapai_single: "",
          mapai_double: "",
          mapai_triple: "",
          mapai_quad: "",
          cpai_single: "",
          cpai_double: "",
          cpai_triple: "",
          cpai_quad: ""
        });
        this.hotel_counter = this.hotel_counter + 1;
      } else if (type == "bus") {
        this.bus_row.push({
          bus_id: "",
          seater: "",
          seat_type: "",
          price: ""
        });
      } else if (type == "train") {
        this.train_row.push({
          train_id: "",
          code: "",
          price: 0
        });
      } else if (type == "flight") {
        this.flight_row.push({
          flight_id: "",
          code: "",
          price: 0
        });
      } else if (type == "sight") {
        this.sight_row.push({
          sight_id: "",
          city: "",
          adult_price: "",
          child_price: ""
        });
      } else if (type == "escort") {
        this.escort_row.push({
          escort_id: "",
          phoneno: "",
          salaryPerday: ""
        });
      }
    },
    onChange: function onChange(index, event, type) {
      var _this2 = this;

      var value = event.target.value;

      if (type == "hotel") {
        var path = "/api/hotel/" + value + "/edit";
        axios.get(path).then(function (response) {
          var data = response.data;
          _this2.hotel_row[index].apai_single = data.apai_single;
          _this2.hotel_row[index].apai_double = data.apai_double;
          _this2.hotel_row[index].apai_triple = data.apai_triple;
          _this2.hotel_row[index].apai_quad = data.apai_quad;
          _this2.hotel_row[index].mapai_single = data.mapai_single;
          _this2.hotel_row[index].mapai_double = data.mapai_double;
          _this2.hotel_row[index].mapai_triple = data.mapai_triple;
          _this2.hotel_row[index].mapai_quad = data.mapai_quad;
          _this2.hotel_row[index].cpai_single = data.cpai_single;
          _this2.hotel_row[index].cpai_double = data.cpai_double;
          _this2.hotel_row[index].cpai_triple = data.cpai_triple;
          _this2.hotel_row[index].cpai_quad = data.cpai_quad;
        });
      } else if (type == "bus") {
        var path = "/api/bus/" + value + "/edit";
        axios.get(path).then(function (response) {
          var data = response.data;
          _this2.bus_row[index].seater = data.seater;
          _this2.bus_row[index].seat_type = data.seat_type;
          _this2.bus_row[index].price = data.price;
          _this2.bus_selected[index] = parseInt(data.price);
        });
      } else if (type == "train") {
        var path = "/api/train/" + value + "/edit";
        axios.get(path).then(function (response) {
          var data = response.data;
          _this2.train_row[index].code = data.code;
        });
      } else if (type == "flight") {
        var path = "/api/flight/" + value + "/edit";
        axios.get(path).then(function (response) {
          var data = response.data;
          _this2.flight_row[index].code = data.code;
        });
      } else if (type == "sight") {
        var path = "/api/sightseeings/" + value + "/edit";
        axios.get(path).then(function (response) {
          var data = response.data;
          _this2.sight_row[index].city = data.name;
          _this2.sight_row[index].adult_price = data.adult_price;
          _this2.sight_row[index].child_price = data.child_price;
        });
      } else if (type == "escort") {
        var path = "/api/escort/" + value + "/edit";
        axios.get(path).then(function (response) {
          var data = response.data;
          _this2.escort_row[index].phoneno = data.phoneno;
          _this2.escort_row[index].salaryPerday = data.salaryPerday;
          _this2.escort_selected[index] = parseInt(data.salaryPerday);
        });
      }
    },
    remove_row: function remove_row(data, index) {
      if (data == 'hotel') {
        this.hotel_row.splice(index, 1);
      } else if (data == 'bus') {
        this.bus_row.splice(index, 1);
      } else if (data == 'train') {
        this.train_row.splice(index, 1);
      } else if (data == 'flight') {
        this.flight_row.splice(index, 1);
      } else if (data == 'sight') {
        this.sight_row.splice(index, 1);
      } else if (data == 'escort') {
        this.escort_row.splice(index, 1);
      } else {
        console.log('no selected item');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Calculator-itinerary.vue?vue&type=template&id=2134e28d&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/pages/itinerary/Calculator-itinerary.vue?vue&type=template&id=2134e28d& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "content" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 calculator" }, [
        _c("div", { staticClass: "container container_admin_body" }, [
          _c("h3", { staticClass: "text-center" }, [
            _vm._v(_vm._s(_vm.itineraryData.title))
          ]),
          _vm._v(" "),
          _c("h4", [
            _vm._v("Total : "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.total,
                  expression: "total"
                }
              ],
              attrs: { type: "text", readonly: "" },
              domProps: { value: _vm.total },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.total = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card_calculator" }, [
            _c("h6", [_vm._v("Hotel")]),
            _vm._v(" "),
            _c("form", { staticClass: "form" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-sm-12" },
                  _vm._l(_vm.hotel_row, function(data, index) {
                    return _c("div", { key: data.id, staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Select Hotel")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: data.hotel_id,
                                expression: "data.hotel_id"
                              }
                            ],
                            staticClass: "form-control select-field",
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
                                    data,
                                    "hotel_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  return _vm.onChange(index, $event, "hotel")
                                }
                              ]
                            }
                          },
                          _vm._l(_vm.hotel_list, function(hotel) {
                            return _c(
                              "option",
                              { key: hotel.id, domProps: { value: hotel.id } },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(hotel.name) +
                                    "\n                      "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      data.hotel_id != ""
                        ? _c("div", { staticClass: "col-sm-8" }, [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-sm-2" }, [
                                _c("label", [_vm._v("APAI Single")]),
                                _vm._v(" "),
                                data.apai_single != undefined
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.hotel_selected,
                                              expression: "hotel_selected"
                                            }
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: index + "1",
                                            name: "example1"
                                          },
                                          domProps: {
                                            value: data.apai_single / 1,
                                            checked: Array.isArray(
                                              _vm.hotel_selected
                                            )
                                              ? _vm._i(
                                                  _vm.hotel_selected,
                                                  data.apai_single / 1
                                                ) > -1
                                              : _vm.hotel_selected
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.check($event)
                                            },
                                            change: function($event) {
                                              var $$a = _vm.hotel_selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = data.apai_single / 1,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.hotel_selected = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.hotel_selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.hotel_selected = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: index + "1" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(data.apai_single) + "/-"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-2" }, [
                                _c("label", [_vm._v("APAI Double")]),
                                _vm._v(" "),
                                data.apai_double != null
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.hotel_selected,
                                              expression: "hotel_selected"
                                            }
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: index + "2",
                                            name: "example1"
                                          },
                                          domProps: {
                                            value: data.apai_double / 2,
                                            checked: Array.isArray(
                                              _vm.hotel_selected
                                            )
                                              ? _vm._i(
                                                  _vm.hotel_selected,
                                                  data.apai_double / 2
                                                ) > -1
                                              : _vm.hotel_selected
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.check($event)
                                            },
                                            change: function($event) {
                                              var $$a = _vm.hotel_selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = data.apai_double / 2,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.hotel_selected = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.hotel_selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.hotel_selected = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: index + "2" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(data.apai_double) + "/-"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-2" }, [
                                _c("label", [_vm._v("APAI Triple")]),
                                _vm._v(" "),
                                data.apai_triple != null
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.hotel_selected,
                                              expression: "hotel_selected"
                                            }
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: index + "3",
                                            name: "example1"
                                          },
                                          domProps: {
                                            value: data.apai_triple / 3,
                                            checked: Array.isArray(
                                              _vm.hotel_selected
                                            )
                                              ? _vm._i(
                                                  _vm.hotel_selected,
                                                  data.apai_triple / 3
                                                ) > -1
                                              : _vm.hotel_selected
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.check($event)
                                            },
                                            change: function($event) {
                                              var $$a = _vm.hotel_selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = data.apai_triple / 3,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.hotel_selected = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.hotel_selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.hotel_selected = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: index + "3" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(data.apai_triple) + "/-"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-2" }, [
                                _c("label", [_vm._v("APAI Quad")]),
                                _vm._v(" "),
                                data.apai_quad != null
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.hotel_selected,
                                              expression: "hotel_selected"
                                            }
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: index + "4",
                                            name: "example1"
                                          },
                                          domProps: {
                                            value: data.apai_quad / 4,
                                            checked: Array.isArray(
                                              _vm.hotel_selected
                                            )
                                              ? _vm._i(
                                                  _vm.hotel_selected,
                                                  data.apai_quad / 4
                                                ) > -1
                                              : _vm.hotel_selected
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.check($event)
                                            },
                                            change: function($event) {
                                              var $$a = _vm.hotel_selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = data.apai_quad / 4,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.hotel_selected = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.hotel_selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.hotel_selected = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: index + "4" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(data.apai_quad) + "/-"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-2" }, [
                                _c("label", [_vm._v("MAPAI Single")]),
                                _vm._v(" "),
                                data.mapai_single != null
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.hotel_selected,
                                              expression: "hotel_selected"
                                            }
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: index + "5",
                                            name: "example1"
                                          },
                                          domProps: {
                                            value: data.mapai_single / 1,
                                            checked: Array.isArray(
                                              _vm.hotel_selected
                                            )
                                              ? _vm._i(
                                                  _vm.hotel_selected,
                                                  data.mapai_single / 1
                                                ) > -1
                                              : _vm.hotel_selected
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.check($event)
                                            },
                                            change: function($event) {
                                              var $$a = _vm.hotel_selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = data.mapai_single / 1,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.hotel_selected = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.hotel_selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.hotel_selected = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: index + "5" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(data.mapai_single) + "/-"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-2" }, [
                                _c("label", [_vm._v("MAPAI Double")]),
                                _vm._v(" "),
                                data.mapai_double != null
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.hotel_selected,
                                              expression: "hotel_selected"
                                            }
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: index + "6",
                                            name: "example1"
                                          },
                                          domProps: {
                                            value: data.mapai_double / 2,
                                            checked: Array.isArray(
                                              _vm.hotel_selected
                                            )
                                              ? _vm._i(
                                                  _vm.hotel_selected,
                                                  data.mapai_double / 2
                                                ) > -1
                                              : _vm.hotel_selected
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.check($event)
                                            },
                                            change: function($event) {
                                              var $$a = _vm.hotel_selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = data.mapai_double / 2,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.hotel_selected = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.hotel_selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.hotel_selected = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: index + "6" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(data.mapai_double) + "/-"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-2" }, [
                                _c("label", [_vm._v("MAPAI Triple")]),
                                _vm._v(" "),
                                data.mapai_triple != null
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.hotel_selected,
                                              expression: "hotel_selected"
                                            }
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: index + "7",
                                            name: "example1"
                                          },
                                          domProps: {
                                            value: data.mapai_triple / 3,
                                            checked: Array.isArray(
                                              _vm.hotel_selected
                                            )
                                              ? _vm._i(
                                                  _vm.hotel_selected,
                                                  data.mapai_triple / 3
                                                ) > -1
                                              : _vm.hotel_selected
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.check($event)
                                            },
                                            change: function($event) {
                                              var $$a = _vm.hotel_selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = data.mapai_triple / 3,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.hotel_selected = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.hotel_selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.hotel_selected = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: index + "7" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(data.mapai_triple) + "/-"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-2" }, [
                                _c("label", [_vm._v("MAPAI Quad")]),
                                _vm._v(" "),
                                data.mapai_quad != null
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.hotel_selected,
                                              expression: "hotel_selected"
                                            }
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: index + "8",
                                            name: "example1"
                                          },
                                          domProps: {
                                            value: data.mapai_quad / 4,
                                            checked: Array.isArray(
                                              _vm.hotel_selected
                                            )
                                              ? _vm._i(
                                                  _vm.hotel_selected,
                                                  data.mapai_quad / 4
                                                ) > -1
                                              : _vm.hotel_selected
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.check($event)
                                            },
                                            change: function($event) {
                                              var $$a = _vm.hotel_selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = data.mapai_quad / 4,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.hotel_selected = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.hotel_selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.hotel_selected = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: index + "8" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(data.mapai_quad) + "/-"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-2" }, [
                                _c("label", [_vm._v("CPAI Single")]),
                                _vm._v(" "),
                                data.cpai_single != null
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.hotel_selected,
                                              expression: "hotel_selected"
                                            }
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: index + "9",
                                            name: "example1"
                                          },
                                          domProps: {
                                            value: data.cpai_single / 1,
                                            checked: Array.isArray(
                                              _vm.hotel_selected
                                            )
                                              ? _vm._i(
                                                  _vm.hotel_selected,
                                                  data.cpai_single / 1
                                                ) > -1
                                              : _vm.hotel_selected
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.check($event)
                                            },
                                            change: function($event) {
                                              var $$a = _vm.hotel_selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = data.cpai_single / 1,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.hotel_selected = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.hotel_selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.hotel_selected = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: index + "9" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(data.cpai_single) + "/-"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-2" }, [
                                _c("label", [_vm._v("CPAI Double")]),
                                _vm._v(" "),
                                data.cpai_double != null
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.hotel_selected,
                                              expression: "hotel_selected"
                                            }
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: index + "10",
                                            name: "example1"
                                          },
                                          domProps: {
                                            value: data.cpai_double / 2,
                                            checked: Array.isArray(
                                              _vm.hotel_selected
                                            )
                                              ? _vm._i(
                                                  _vm.hotel_selected,
                                                  data.cpai_double / 2
                                                ) > -1
                                              : _vm.hotel_selected
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.check($event)
                                            },
                                            change: function($event) {
                                              var $$a = _vm.hotel_selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = data.cpai_double / 2,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.hotel_selected = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.hotel_selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.hotel_selected = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: index + "10" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(data.cpai_double) + "/-"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-2" }, [
                                _c("label", [_vm._v("CPAI Triple")]),
                                _vm._v(" "),
                                data.cpai_triple != null
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.hotel_selected,
                                              expression: "hotel_selected"
                                            }
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: index + "11",
                                            name: "example1"
                                          },
                                          domProps: {
                                            value: data.cpai_triple / 3,
                                            checked: Array.isArray(
                                              _vm.hotel_selected
                                            )
                                              ? _vm._i(
                                                  _vm.hotel_selected,
                                                  data.cpai_triple / 3
                                                ) > -1
                                              : _vm.hotel_selected
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.check($event)
                                            },
                                            change: function($event) {
                                              var $$a = _vm.hotel_selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = data.cpai_triple / 3,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.hotel_selected = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.hotel_selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.hotel_selected = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: index + "11" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(data.cpai_triple) + "/-"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-2" }, [
                                _c("label", [_vm._v("CPAI Quad")]),
                                _vm._v(" "),
                                data.cpai_quad != null
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "custom-control custom-checkbox"
                                      },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.hotel_selected,
                                              expression: "hotel_selected"
                                            }
                                          ],
                                          staticClass: "custom-control-input",
                                          attrs: {
                                            type: "checkbox",
                                            id: index + "12",
                                            name: "example1"
                                          },
                                          domProps: {
                                            value: data.cpai_quad / 4,
                                            checked: Array.isArray(
                                              _vm.hotel_selected
                                            )
                                              ? _vm._i(
                                                  _vm.hotel_selected,
                                                  data.cpai_quad / 4
                                                ) > -1
                                              : _vm.hotel_selected
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.check($event)
                                            },
                                            change: function($event) {
                                              var $$a = _vm.hotel_selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = data.cpai_quad / 4,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.hotel_selected = $$a.concat(
                                                      [$$v]
                                                    ))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.hotel_selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.hotel_selected = $$c
                                              }
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "custom-control-label",
                                            attrs: { for: index + "12" }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(data.cpai_quad) + "/-"
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ]),
                            _vm._v(" "),
                            _c("hr")
                          ])
                        : _c("div", { staticClass: "col-sm-8" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-1 pt-2" }, [
                        _vm.hotel_row.length >= 0 && index == 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn_plus text-white",
                                attrs: { type: "button", title: "Add Row" },
                                on: {
                                  click: function($event) {
                                    return _vm.add_row("hotel")
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-plus" })]
                            )
                          : _c(
                              "button",
                              {
                                staticClass: "btn btn_plus text-white",
                                attrs: { type: "button", title: "Remove Row" },
                                on: {
                                  click: function($event) {
                                    return _vm.remove_row("hotel", index)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-minus" })]
                            )
                      ]),
                      _vm._v(" "),
                      _c("hr")
                    ])
                  }),
                  0
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card_calculator" }, [
            _c("div", { staticClass: "bus" }, [
              _c("h6", [_vm._v("Bus Price :")]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-sm-12" },
                  _vm._l(_vm.bus_row, function(bus_data, index) {
                    return _c("div", { key: bus_data.id, staticClass: "row" }, [
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", [_vm._v("Select Bus")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: bus_data.bus_id,
                                expression: "bus_data.bus_id"
                              }
                            ],
                            staticClass: "form-control select-field",
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
                                    bus_data,
                                    "bus_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                },
                                function($event) {
                                  return _vm.onChange(index, $event, "bus")
                                }
                              ]
                            }
                          },
                          _vm._l(_vm.bus_list, function(bus) {
                            return _c(
                              "option",
                              { key: bus.id, domProps: { value: bus.id } },
                              [
                                _vm._v(
                                  "\n                        " +
                                    _vm._s(bus.company_name) +
                                    "\n                      "
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Seater")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(bus_data.seater))])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Seat Type")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(bus_data.seat_type))])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-3" }, [
                        _c("label", [_vm._v("Price")]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(bus_data.price) + " /-")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-1 pt-2" }, [
                        _vm.bus_row.length >= 0 && index == 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn_plus text-white",
                                attrs: { type: "button", title: "Add Row" },
                                on: {
                                  click: function($event) {
                                    return _vm.add_row("bus")
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-plus" })]
                            )
                          : _c(
                              "button",
                              {
                                staticClass: "btn btn_plus text-white",
                                attrs: { type: "button", title: "Remove Row" },
                                on: {
                                  click: function($event) {
                                    return _vm.remove_row("bus", index)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-minus" })]
                            )
                      ])
                    ])
                  }),
                  0
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card_calculator" }, [
            _c("div", { staticClass: "bus" }, [
              _c("h6", [_vm._v("Train Price :")]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-sm-12" },
                  _vm._l(_vm.train_row, function(train_data, index) {
                    return _c(
                      "div",
                      { key: train_data.id, staticClass: "row" },
                      [
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("label", [_vm._v("Select Train")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: train_data.train_id,
                                  expression: "train_data.train_id"
                                }
                              ],
                              staticClass: "form-control select-field",
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
                                      train_data,
                                      "train_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.onChange(index, $event, "train")
                                  }
                                ]
                              }
                            },
                            _vm._l(_vm.train_list, function(train) {
                              return _c(
                                "option",
                                {
                                  key: train.id,
                                  domProps: { value: train.id }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(train.name) +
                                      "\n                      "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("label", [_vm._v("Code")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(train_data.code))])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("label", [_vm._v("Price")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: train_data.price,
                                expression: "train_data.price"
                              }
                            ],
                            attrs: { type: "number", name: "price" },
                            domProps: { value: train_data.price },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  train_data,
                                  "price",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-1 pt-2" }, [
                          _vm.train_row.length >= 0 && index == 0
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn_plus text-white",
                                  attrs: { type: "button", title: "Add Row" },
                                  on: {
                                    click: function($event) {
                                      return _vm.add_row("train")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-plus" })]
                              )
                            : _c(
                                "button",
                                {
                                  staticClass: "btn btn_plus text-white",
                                  attrs: {
                                    type: "button",
                                    title: "Remove Row"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.remove_row("train", index)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-minus" })]
                              )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card_calculator" }, [
            _c("div", { staticClass: "bus" }, [
              _c("h6", [_vm._v("Flight Price :")]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-sm-12" },
                  _vm._l(_vm.flight_row, function(flight_data, index) {
                    return _c(
                      "div",
                      { key: flight_data.id, staticClass: "row" },
                      [
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("label", [_vm._v("Select Flight")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: flight_data.flight_id,
                                  expression: "flight_data.flight_id"
                                }
                              ],
                              staticClass: "form-control select-field",
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
                                      flight_data,
                                      "flight_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.onChange(index, $event, "flight")
                                  }
                                ]
                              }
                            },
                            _vm._l(_vm.flight_list, function(flight) {
                              return _c(
                                "option",
                                {
                                  key: flight.id,
                                  domProps: { value: flight.id }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(flight.name) +
                                      "\n                      "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("label", [_vm._v("Code")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(flight_data.code))])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("label", [_vm._v("Price")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: flight_data.price,
                                expression: "flight_data.price"
                              }
                            ],
                            attrs: { type: "number", name: "price" },
                            domProps: { value: flight_data.price },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  flight_data,
                                  "price",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-1 pt-2" }, [
                          _vm.flight_row.length >= 0 && index == 0
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn_plus text-white",
                                  attrs: { type: "button", title: "Add Row" },
                                  on: {
                                    click: function($event) {
                                      return _vm.add_row("flight")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-plus" })]
                              )
                            : _c(
                                "button",
                                {
                                  staticClass: "btn btn_plus text-white",
                                  attrs: {
                                    type: "button",
                                    title: "Remove Row"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.remove_row("flight", index)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-minus" })]
                              )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card_calculator" }, [
            _c("div", { staticClass: "bus" }, [
              _c("h6", [_vm._v("Sightseeing Price :")]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-sm-12" },
                  _vm._l(_vm.sight_row, function(sight_data, index) {
                    return _c(
                      "div",
                      { key: sight_data.id, staticClass: "row" },
                      [
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("label", [_vm._v("Select SightSeeing")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: sight_data.sight_id,
                                  expression: "sight_data.sight_id"
                                }
                              ],
                              staticClass: "form-control select-field",
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
                                      sight_data,
                                      "sight_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.onChange(index, $event, "sight")
                                  }
                                ]
                              }
                            },
                            _vm._l(_vm.sight_list, function(sight) {
                              return _c(
                                "option",
                                {
                                  key: sight.id,
                                  domProps: { value: sight.id }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(sight.name) +
                                      "\n                      "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("label", [_vm._v("City")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(sight_data.city))])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("label", [_vm._v("Adult Price")]),
                          _vm._v(" "),
                          sight_data.adult_price
                            ? _c(
                                "div",
                                {
                                  staticClass: "custom-control custom-checkbox"
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.sight_selected,
                                        expression: "sight_selected"
                                      }
                                    ],
                                    staticClass: "custom-control-input",
                                    attrs: {
                                      type: "checkbox",
                                      id: index + "adultprice"
                                    },
                                    domProps: {
                                      value: sight_data.adult_price,
                                      checked: Array.isArray(_vm.sight_selected)
                                        ? _vm._i(
                                            _vm.sight_selected,
                                            sight_data.adult_price
                                          ) > -1
                                        : _vm.sight_selected
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.check($event)
                                      },
                                      change: function($event) {
                                        var $$a = _vm.sight_selected,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = sight_data.adult_price,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              (_vm.sight_selected = $$a.concat([
                                                $$v
                                              ]))
                                          } else {
                                            $$i > -1 &&
                                              (_vm.sight_selected = $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1)))
                                          }
                                        } else {
                                          _vm.sight_selected = $$c
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "custom-control-label",
                                      attrs: { for: index + "adultprice" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(sight_data.adult_price) + "/-"
                                      )
                                    ]
                                  )
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-2" }, [
                          _c("label", [_vm._v("Child Price")]),
                          _vm._v(" "),
                          sight_data.child_price
                            ? _c(
                                "div",
                                {
                                  staticClass: "custom-control custom-checkbox"
                                },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.sight_selected,
                                        expression: "sight_selected"
                                      }
                                    ],
                                    staticClass: "custom-control-input",
                                    attrs: {
                                      type: "checkbox",
                                      id: index + "childchild"
                                    },
                                    domProps: {
                                      value: sight_data.child_price,
                                      checked: Array.isArray(_vm.sight_selected)
                                        ? _vm._i(
                                            _vm.sight_selected,
                                            sight_data.child_price
                                          ) > -1
                                        : _vm.sight_selected
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.check($event)
                                      },
                                      change: function($event) {
                                        var $$a = _vm.sight_selected,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = sight_data.child_price,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              (_vm.sight_selected = $$a.concat([
                                                $$v
                                              ]))
                                          } else {
                                            $$i > -1 &&
                                              (_vm.sight_selected = $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1)))
                                          }
                                        } else {
                                          _vm.sight_selected = $$c
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      staticClass: "custom-control-label",
                                      attrs: { for: index + "childchild" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(sight_data.child_price) + "/-"
                                      )
                                    ]
                                  )
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-1 pt-2" }, [
                          _vm.sight_row.length >= 0 && index == 0
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn_plus text-white",
                                  attrs: { type: "button", title: "Add Row" },
                                  on: {
                                    click: function($event) {
                                      return _vm.add_row("sight")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-plus" })]
                              )
                            : _c(
                                "button",
                                {
                                  staticClass: "btn btn_plus text-white",
                                  attrs: {
                                    type: "button",
                                    title: "Remove Row"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.remove_row("sight", index)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-minus" })]
                              )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card_calculator" }, [
            _c("div", { staticClass: "bus" }, [
              _c("h6", [_vm._v("Escort Price :")]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-sm-12" },
                  _vm._l(_vm.escort_row, function(escort_data, index) {
                    return _c(
                      "div",
                      { key: escort_data.id, staticClass: "row" },
                      [
                        _c("div", { staticClass: "col-sm-3" }, [
                          _c("label", [_vm._v("Select Escort")]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: escort_data.escort_id,
                                  expression: "escort_data.escort_id"
                                }
                              ],
                              staticClass: "form-control select-field",
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
                                      escort_data,
                                      "escort_id",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.onChange(index, $event, "escort")
                                  }
                                ]
                              }
                            },
                            _vm._l(_vm.escort_list, function(sight) {
                              return _c(
                                "option",
                                {
                                  key: sight.it,
                                  domProps: { value: sight.id }
                                },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(sight.name) +
                                      "\n                      "
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("label", [_vm._v("Phone No")]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(escort_data.phoneno))])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-4" }, [
                          _c("label", [_vm._v("Per Day Salary")]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(_vm._s(escort_data.salaryPerday) + "/-")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-1 pt-2" }, [
                          _vm.escort_row.length >= 0 && index == 0
                            ? _c(
                                "button",
                                {
                                  staticClass: "btn btn_plus text-white",
                                  attrs: { type: "button", title: "Add Row" },
                                  on: {
                                    click: function($event) {
                                      return _vm.add_row("escort")
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-plus" })]
                              )
                            : _c(
                                "button",
                                {
                                  staticClass: "btn btn_plus text-white",
                                  attrs: {
                                    type: "button",
                                    title: "Remove Row"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.remove_row("escort", index)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-minus" })]
                              )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.showModal
            ? _c(
                "div",
                [
                  _c("transition", { attrs: { name: "modal" } }, [
                    _c("div", { staticClass: "modal-mask" }, [
                      _c("div", { staticClass: "modal-wrapper" }, [
                        _c(
                          "div",
                          {
                            staticClass: "modal-dialog",
                            attrs: { role: "document" }
                          },
                          [
                            _c("div", { staticClass: "modal-content" }, [
                              _c("div", { staticClass: "modal-header" }, [
                                _c("h5", { staticClass: "modal-title" }, [
                                  _vm._v("Calculator Preview")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "close",
                                    attrs: {
                                      type: "button",
                                      "data-dismiss": "modal",
                                      "aria-label": "Close"
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        attrs: { "aria-hidden": "true" },
                                        on: {
                                          click: function($event) {
                                            _vm.showModal = false
                                          }
                                        }
                                      },
                                      [_vm._v("×")]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "modal-body" }, [
                                _c(
                                  "table",
                                  { staticClass: "table table-bordered" },
                                  [
                                    _c("tr", [
                                      _c("td", [_c("b", [_vm._v("Hotel ")])]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.hotel_total))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [_c("b", [_vm._v("Train")])]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.train_total))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [_c("b", [_vm._v("Bus")])]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(_vm.bus_total))])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [_c("b", [_vm._v("Flight")])]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.flight_total))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c("td", [
                                        _c("b", [_vm._v("Sightseeing")])
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(_vm.sight_seeing_total))
                                      ])
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "modal-footer" }, [
                                _c("h4", { staticClass: "mr-auto" }, [
                                  _vm._v("Total : " + _vm._s(_vm.total))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-secondary",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function($event) {
                                        _vm.showModal = false
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                        Close\n                      "
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", [
            _c(
              "p",
              { staticClass: "text-center" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary itrn_add_btn back_btn",
                    attrs: { to: "/itinerary-list" }
                  },
                  [_vm._v("\n              Back\n            ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn itrn_add_btn",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.sumData()
                      }
                    }
                  },
                  [_vm._v("\n              Submit\n            ")]
                )
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/pages/itinerary/Calculator-itinerary.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/Calculator-itinerary.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calculator_itinerary_vue_vue_type_template_id_2134e28d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator-itinerary.vue?vue&type=template&id=2134e28d& */ "./resources/js/admin/pages/itinerary/Calculator-itinerary.vue?vue&type=template&id=2134e28d&");
/* harmony import */ var _Calculator_itinerary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calculator-itinerary.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/itinerary/Calculator-itinerary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Calculator_itinerary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Calculator_itinerary_vue_vue_type_template_id_2134e28d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Calculator_itinerary_vue_vue_type_template_id_2134e28d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/itinerary/Calculator-itinerary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/itinerary/Calculator-itinerary.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/Calculator-itinerary.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_itinerary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calculator-itinerary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Calculator-itinerary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_itinerary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/itinerary/Calculator-itinerary.vue?vue&type=template&id=2134e28d&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/admin/pages/itinerary/Calculator-itinerary.vue?vue&type=template&id=2134e28d& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_itinerary_vue_vue_type_template_id_2134e28d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Calculator-itinerary.vue?vue&type=template&id=2134e28d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/pages/itinerary/Calculator-itinerary.vue?vue&type=template&id=2134e28d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_itinerary_vue_vue_type_template_id_2134e28d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calculator_itinerary_vue_vue_type_template_id_2134e28d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);