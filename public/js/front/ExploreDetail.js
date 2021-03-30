(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/ExploreDetail"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Booking.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/Booking.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Booking",
  components: {
    multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a,
    "has-error": vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]
  },
  props: ["list", "title", "selected_cities", "city_list"],
  data: function data() {
    return {
      transports: ["Bus", "Train", "Air"],
      sightseeing_list: "",
      travel_type_list: ["Train", "AC Bus", "Flight", "Train", "Flight", "Train", "AC Bus"],
      occupancy_list: ["Single", "Double", "Triple", "Quad"],
      form: new vform__WEBPACK_IMPORTED_MODULE_1__["Form"]({
        state_date: "",
        end_date: "",
        person: 2,
        room: 1,
        occupancy_type: "",
        city_id: [],
        sightseen: "",
        transport: "",
        noofday: 1,
        accommodation: 3,
        itinerary_id: ""
      }),
      customize_btn: true,
      back_btn: false,
      book_btn: true,
      first_form: true,
      second_form: false
    };
  },
  watch: {
    "form.city_id": function formCity_id() {
      this.sightseeingData(this.form.city_id);
    }
  },
  created: function created() {
    this.form.itinerary_id = this.$route.params.id;
    this.selectedItineraryCities();
  },
  methods: {
    selectedItineraryCities: function selectedItineraryCities() {
      if (this.city_list.length > 0) {
        for (var i = 0; i < this.city_list.length; i++) {
          if (this.selected_cities.includes(this.city_list[i].name)) {
            this.form.city_id.push(this.city_list[i]);
          }
        }
      }
    },
    sightseeingData: function sightseeingData(city) {
      var _this = this;

      this.$axios.post("/api/city-sightseeing", {
        list: city
      }).then(function (response) {
        _this.sightseeing_list = response.data;
      });
    },
    secondForm: function secondForm() {
      if (this.back_btn == false) {
        this.back_btn = true;
        this.customize_btn = false;
        this.first_form = false;
        this.second_form = true;
      } else {
        this.customize_btn = true;
        this.back_btn = false;
        this.first_form = true;
        this.second_form = false;
      }
    },
    down: function down() {
      if (this.form.noofday > 1) {
        this.form.noofday = this.form.noofday - 1;
      }
    },
    up: function up() {
      this.form.noofday = this.form.noofday + 1;
    },
    cityList: function cityList() {
      var _this2 = this;

      this.$axios.get("/api/city").then(function (response) {
        for (var i = 0; i < response.data.data.length; i++) {
          _this2.options.push({
            value: response.data.data[i].name
          });
        }
      });
    },
    BookingSubmit: function BookingSubmit() {
      var _this3 = this;

      if (this.$cookies.get('access_token') == null) {
        window.$(".close").click();
        this.$swal.fire({
          icon: "error",
          title: "Sorry! you are not looged in",
          footer: '<a href data-toggle="modal" data-target="#LoginForm" class="text-info">Click to Login</a>'
        });
        return false;
      }

      this.form.post("/api/booking", {
        headers: {
          Authorization: "Bearer ".concat(this.$cookies.get('access_token'))
        }
      }).then(function (response) {
        _this3.form.reset();

        window.$(".close").click();

        _this3.$swal.fire({
          icon: "success",
          title: "Successfull",
          text: "We will contact you soon !!"
        });
      })["catch"](function (error) {
        _this3.$swal.fire({
          icon: "error",
          title: "Please provide valide details"
        });

        _this3.handleError(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_components_Booking_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/components/Booking.vue */ "./resources/js/front/components/Booking.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    booking: _front_components_Booking_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  metaInfo: {
    title: "GBI Explore Destination",
    meta: [{
      name: "description",
      content: "@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button"
    }, {
      name: "keywords",
      content: "@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs"
    }, {
      name: "url",
      content: "https://www.gowithgbi.com/resources/explore-destination"
    }]
  },
  data: function data() {
    return {
      day: 0,
      description: "",
      itineraryData: [],
      selected_cities: [],
      city_list: [],
      login: false,
      loading: true
    };
  },
  watch: {
    '$store.state.token': function $storeStateToken() {
      if (this.$store.state.token) {
        this.login = true;
      }
    }
  },
  mounted: function mounted() {
    if (this.$cookies.get('access_token') != null) {
      this.login = true;
    }
  },
  created: function created() {
    this.getItinerary();
  },
  methods: {
    getItinerary: function getItinerary() {
      var _this = this;

      this.$axios.get("/api/itinerary-view/".concat(this.$route.params.id)).then(function (res) {
        _this.itineraryData = res.data;

        if (_this.itineraryData.itinerarydays) {
          var data = _this.itineraryData.itinerarydays;
          var selected = [];
          _this.selected_cities = [];

          if (data) {
            _this.selected_cities = [];

            for (var i = 0; i < data.length; i++) {
              selected.push(data[i].day_source);
              selected.push(data[i].day_destination);
            }
          }

          _this.selected_cities = _toConsumableArray(new Set(selected));
        }

        _this.getRelatedCities(_this.itineraryData.destination);
      });
    },
    getRelatedCities: function getRelatedCities(destination) {
      var _this2 = this;

      this.$axios.get("/api/related-cities/".concat(destination)).then(function (res) {
        _this2.city_list = res.data;
        _this2.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Booking.vue?vue&type=template&id=31645f64&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/Booking.vue?vue&type=template&id=31645f64& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "booking-form grey-form" }, [
    _c(
      "p",
      { staticClass: "font-weight-bold text-dark text-capitalize p-0 m-0" },
      [_vm._v(_vm._s(_vm._f("CapitalizeString")(_vm.title)))]
    ),
    _vm._v(" "),
    _vm.first_form ? _c("p", [_vm._v("When would you like to go?")]) : _vm._e(),
    _vm._v(" "),
    _vm.second_form
      ? _c("p", [_vm._v("Please Specify Your Requirements.")])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "form",
        attrs: { method: "POST" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.BookingSubmit($event)
          }
        }
      },
      [
        _vm.first_form
          ? _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "startdate" } }, [
                      _vm._v("Start Journy Date")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.start_date,
                          expression: "form.start_date"
                        }
                      ],
                      staticClass: "form-control",
                      class: {
                        "is-invalid": _vm.form.errors.has("start_date")
                      },
                      attrs: { type: "date", id: "startdate", required: "" },
                      domProps: { value: _vm.form.start_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "start_date", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "start_date" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "end_date" } }, [
                      _vm._v("End Journy Date")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.end_date,
                          expression: "form.end_date"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("end_date") },
                      attrs: { type: "date", id: "end_date", required: "" },
                      domProps: { value: _vm.form.end_date },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "end_date", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "end_date" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "number_of_person" } }, [
                      _vm._v("Number of Person")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.person,
                          expression: "form.person"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("person") },
                      attrs: {
                        type: "number",
                        id: "number_of_person",
                        min: "2",
                        required: ""
                      },
                      domProps: { value: _vm.form.person },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "person", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "start_date" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "number_of_person" } }, [
                      _vm._v("Number of Rooms")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.room,
                          expression: "form.room"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.form.errors.has("room") },
                      attrs: {
                        type: "number",
                        id: "number_of_person",
                        min: "1",
                        required: ""
                      },
                      domProps: { value: _vm.form.room },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "room", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "start_date" }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "occupancy" } }, [
                      _vm._v("Occupancy Types")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.occupancy_type,
                            expression: "form.occupancy_type"
                          }
                        ],
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.form.errors.has("occupancy_type")
                        },
                        attrs: { required: "" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "occupancy_type",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.occupancy_list, function(occ, i) {
                        return _c(
                          "option",
                          { key: i, domProps: { value: occ } },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(occ) +
                                "\n            "
                            )
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "occupancy_type" }
                    })
                  ],
                  1
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.second_form
          ? _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "cities" } }, [
                      _vm._v("Cities")
                    ]),
                    _vm._v(" "),
                    _c("multiselect", {
                      attrs: {
                        options: _vm.city_list,
                        multiple: true,
                        "track-by": "name",
                        label: "name",
                        "close-on-select": true,
                        placeholder: "Select City"
                      },
                      model: {
                        value: _vm.form.city_id,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "city_id", $$v)
                        },
                        expression: "form.city_id"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "sightseeing" } }, [
                      _vm._v("Places(Sightseeing)")
                    ]),
                    _vm._v(" "),
                    _vm.sightseeing_list
                      ? _c("multiselect", {
                          attrs: {
                            options: _vm.sightseeing_list,
                            multiple: true,
                            "track-by": "name",
                            label: "name",
                            "close-on-select": true,
                            placeholder: "Select Sightseeing"
                          },
                          model: {
                            value: _vm.form.sightseen,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "sightseen", $$v)
                            },
                            expression: "form.sightseen"
                          }
                        })
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "transport" } }, [
                      _vm._v("Mode of Transport")
                    ]),
                    _vm._v(" "),
                    _c("multiselect", {
                      attrs: {
                        options: _vm.transports,
                        multiple: true,
                        "close-on-select": true,
                        placeholder: "Mode of transport"
                      },
                      model: {
                        value: _vm.form.transport,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "transport", $$v)
                        },
                        expression: "form.transport"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "numofday" } }, [
                    _vm._v("Number of Days")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row align-content-center" }, [
                    _c("div", { staticClass: "col" }, [
                      _c("img", {
                        staticClass: "w-40 link",
                        attrs: { src: "/images/icons/minus.png" },
                        on: {
                          click: function($event) {
                            return _vm.down()
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.form.noofday) +
                          "\n            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col" }, [
                      _c("img", {
                        staticClass: "w-40 link",
                        attrs: { src: "/images/icons/add.png" },
                        on: {
                          click: function($event) {
                            return _vm.up()
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c("label", { attrs: { for: "accommodation" } }, [
                  _vm._v("Accommodation Preference")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.accommodation,
                        expression: "form.accommodation"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "accomodation" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.form,
                          "accommodation",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "2" } }, [_vm._v("2 Star")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [_vm._v("3 Star")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "4" } }, [_vm._v("4 Star")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "5" } }, [_vm._v("5 Star")])
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "text-center" }, [
          _vm.customize_btn
            ? _c(
                "button",
                {
                  staticClass: "btn profile_button",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.secondForm()
                    }
                  }
                },
                [_vm._v("\n        Customize")]
              )
            : _vm._e(),
          _c("span", { staticClass: "mr-10" }),
          _vm._v(" "),
          _vm.back_btn
            ? _c(
                "button",
                {
                  staticClass: "btn profile_button",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.secondForm()
                    }
                  }
                },
                [_vm._v("\n        Back")]
              )
            : _vm._e(),
          _c("span", { staticClass: "mr-10" }),
          _vm._v(" "),
          _vm.book_btn
            ? _c(
                "button",
                {
                  staticClass: "btn profile_button text-capitalize",
                  attrs: { type: "submit" }
                },
                [_vm._v("\n        send inquiry\n      ")]
              )
            : _vm._e()
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "explorelist" } }, [
    _c("section", { staticClass: "banner-block" }, [
      _c("img", {
        attrs: {
          src: _vm.itineraryData.detail_photo,
          loading: "lazy",
          alt: "itinerary"
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row w-100 mt-2" }, [
        _c(
          "div",
          { staticClass: "col-sm-8" },
          _vm._l(_vm.itineraryData.tourtypes, function(tourtype) {
            return _c(
              "span",
              { key: tourtype.id, staticClass: "badge badge-dark ml-1" },
              [_vm._v(_vm._s(tourtype.name))]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4 p-0 m-0 text-right" }, [
          _vm.login
            ? _c(
                "button",
                {
                  staticClass: "btn profile_button text-white book_btn",
                  attrs: { "data-toggle": "modal", "data-target": "#bookModal" }
                },
                [_vm._v("Book Now")]
              )
            : _c(
                "button",
                {
                  staticClass: "btn profile_button text-white book_btn",
                  attrs: {
                    id: "loginButton",
                    "data-toggle": "modal",
                    "data-target": "#LoginForm"
                  }
                },
                [_vm._v("Book Now")]
              )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "w-100 pt-2 text-center" }, [
        _c(
          "h1",
          { staticClass: "font-20 text-lowercase text-capitalize pt-2 pb-2" },
          [
            _c("u", [
              _vm._v(
                _vm._s(_vm._f("CapitalizeString")(_vm.itineraryData.title))
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", {
        staticClass: "description",
        domProps: { innerHTML: _vm._s(_vm.description) }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row w-100 pt-3", attrs: { id: "explore_detail_part" } },
        _vm._l(_vm.itineraryData.itinerarydays, function(data) {
          return _c("div", { key: data.id, staticClass: "col-sm-4" }, [
            _c("h4", { staticClass: "day_tab" }, [
              _vm._v("Day " + _vm._s(data.day))
            ]),
            _vm._v(" "),
            data.day_source != data.day_destination
              ? _c("h1", { staticClass: "explor-head text-capitalize" }, [
                  _vm._v(
                    _vm._s(data.day_source) +
                      " - " +
                      _vm._s(data.day_destination)
                  )
                ])
              : _c("h1", { staticClass: "explor-head" }, [
                  _vm._v(_vm._s(data.day_source))
                ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "card-text card-text-ul",
              domProps: { innerHTML: _vm._s(data.day_description) }
            })
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal", attrs: { id: "bookModal" } }, [
      _c("div", { staticClass: "modal-dialog" }, [
        _c("div", { staticClass: "modal-content modal-color" }, [
          _vm.itineraryData.itinerarydays
            ? _c(
                "div",
                { staticClass: "modal-body" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { type: "button", "data-dismiss": "modal" }
                    },
                    [_vm._v("×")]
                  ),
                  _vm._v(" "),
                  _vm.loading == false
                    ? _c("booking", {
                        attrs: {
                          title: _vm.itineraryData.title,
                          selected_cities: _vm.selected_cities,
                          city_list: _vm.city_list
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/components/Booking.vue":
/*!***************************************************!*\
  !*** ./resources/js/front/components/Booking.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Booking_vue_vue_type_template_id_31645f64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Booking.vue?vue&type=template&id=31645f64& */ "./resources/js/front/components/Booking.vue?vue&type=template&id=31645f64&");
/* harmony import */ var _Booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Booking.vue?vue&type=script&lang=js& */ "./resources/js/front/components/Booking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Booking_vue_vue_type_template_id_31645f64___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Booking_vue_vue_type_template_id_31645f64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/Booking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/Booking.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/front/components/Booking.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Booking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Booking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/Booking.vue?vue&type=template&id=31645f64&":
/*!**********************************************************************************!*\
  !*** ./resources/js/front/components/Booking.vue?vue&type=template&id=31645f64& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_template_id_31645f64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Booking.vue?vue&type=template&id=31645f64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Booking.vue?vue&type=template&id=31645f64&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_template_id_31645f64___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_template_id_31645f64___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/pages/Explore/ExploreDetail.vue":
/*!************************************************************!*\
  !*** ./resources/js/front/pages/Explore/ExploreDetail.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExploreDetail_vue_vue_type_template_id_2bb87509___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExploreDetail.vue?vue&type=template&id=2bb87509& */ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&");
/* harmony import */ var _ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExploreDetail.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExploreDetail_vue_vue_type_template_id_2bb87509___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExploreDetail_vue_vue_type_template_id_2bb87509___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/Explore/ExploreDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExploreDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_template_id_2bb87509___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExploreDetail.vue?vue&type=template&id=2bb87509& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_template_id_2bb87509___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_template_id_2bb87509___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);