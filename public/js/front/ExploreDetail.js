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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        adults: 2,
        children: 0,
        infants: 0,
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
      second_form: false,
      groupAlert: false,
      showPersonModal: false,
      people: 2
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
    incrVal: function incrVal(data) {
      if (data == 'adults') {
        this.form.adults += 1;
      } else if (data == 'children') {
        this.form.children += 1;
      } else if (data == 'infants') {
        this.form.infants += 1;
      }
    },
    decrVal: function decrVal(data) {
      if (data == 'adults' && this.form.adults > 0) {
        this.form.adults -= 1;
      } else if (data == 'children' && this.form.children > 0) {
        this.form.children -= 1;
      } else if (data == 'infants' && this.form.infants > 0) {
        this.form.infants -= 1;
      }
    },
    savePersons: function savePersons() {
      this.form.person = parseInt(this.form.children) + parseInt(this.form.adults);

      if (this.form.infants > 0) {
        this.people = this.form.person + ' + ' + this.form.infants + ' Infant(s)';
      } else {
        this.people = this.form.person;
      }

      this.showPersonModal = false;
      this.checkGroup();
    },
    checkGroup: function checkGroup() {
      if (this.form.person >= 10 && !this.groupAlert) {
        this.groupAlert = true;
        this.$swal.fire({
          icon: "info",
          title: "Group Booking",
          text: "As you are booking for more 10+ people, we have considered this as a group booking."
        });
      } else if (this.form.person < 10 && this.groupAlert) {
        this.groupAlert = false;
      }
    },
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
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-slick-carousel */ "./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js");
/* harmony import */ var vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    booking: _front_components_Booking_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueSlickCarousel: vue_slick_carousel__WEBPACK_IMPORTED_MODULE_1___default.a
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
      selectedPhoto: '',
      selectedDay: null,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0
      },
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
  beforeCreate: function beforeCreate() {
    var metaInfo = {
      title: 'GBI Explore Destination',
      description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
      keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
      url: 'https://www.gowithgbi.com/resources/explore-destination',
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  created: function created() {
    this.getItinerary();
    var metaInfo = {
      title: this.itineraryData.title,
      description: '@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button',
      image: this.itineraryData.detail_photo,
      keywords: '@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs',
      url: 'https://www.gowithgbi.com/resources/explore-destination',
      type: 'website'
    };
    document.cookie = "GBIMeta =" + JSON.stringify(metaInfo) + "; path=/";
  },
  methods: {
    changeItDiv: function changeItDiv(id) {
      if (this.selectedDay == id) {
        this.selectedDay = null;
      } else {
        this.selectedDay = id;
      }
    },
    changePhoto: function changePhoto(pic) {
      this.selectedPhoto = pic;
    },
    getItinerary: function getItinerary() {
      var _this = this;

      this.$axios.get("/api/itinerary-view/".concat(this.$route.params.id)).then(function (res) {
        _this.itineraryData = res.data;
        _this.selectedPhoto = _this.itineraryData.photo;

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Booking.vue?vue&type=style&index=0&id=31645f64&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/Booking.vue?vue&type=style&index=0&id=31645f64&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.marginT[data-v-31645f64] {\n  margin-top: 10px !important;\n}\nlegend[data-v-31645f64] {\n    padding-bottom: 14px;\n    text-align: left;\n}\nfieldset[data-v-31645f64] {\n    margin-bottom: 14px;\n    padding-bottom: 14px;\n}\nfieldset[data-v-31645f64], input[type=\"button\"][data-v-31645f64] {\n    border: 0;\n}\ninput[type=\"button\"][data-v-31645f64] {\n    background-color: #3490dc;\n    color: #fff;\n    cursor: pointer;\n    width: 35px;\n    height: 35px;\n    font-size: 17px;\n    border-radius: 20px;\n    padding-bottom: 5px;\n}\ninput[type=\"passengers\"][data-v-31645f64] {\n    border: 1px solid #F4F3F3;\n    height: 40px;\n    width: 60%;\n    text-align: center;\n    outline: 2px solid transparent;\n    outline-offset: 2px;\n}\n.personLables[data-v-31645f64]{\n  color: grey;\n  text-align: center;\n  font-weight: 600;\n}\n.btn-primary[data-v-31645f64]{\n  background-color: #3490dc !important;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mainRow1[data-v-2bb87509]{\n  margin-top: 20px;\n  margin-bottom: 21px;\n}\n.mainRow2[data-v-2bb87509]{\n  margin-bottom: 17px;\n}\n.mainRow3[data-v-2bb87509]{\n  margin-bottom: 21px;\n}\n.expDetailImg[data-v-2bb87509]{\n  width: 100%;\n  height: 170px;\n  margin-bottom: 10px;\n  margin-right: 15px;\n}\n.expDetailImgSmall[data-v-2bb87509]{\n  width:  45px;\n  height: 45px;\n}\n.expDetCol1[data-v-2bb87509]{\n  width: 100%;\n}\n.expDetCol2Main[data-v-2bb87509]{\n  display: none;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n}\n.expDetCol2[data-v-2bb87509]{\n  display: none;\n  width: 30%; \n  height: 423px; \n  border-radius: 5px;\n  background: white;\n}\n@media (min-width: 768px) {\n.expDetailImgSmall[data-v-2bb87509]{\n    width:  100px;\n    height: 100px;\n}\n.expDetailImg[data-v-2bb87509]{\n    height: 330px;\n    margin-bottom: 16.5px;\n}\n.mainRow1[data-v-2bb87509]{\n    margin-top: 35px;\n    margin-bottom: 35px;\n}\n.mainRow2[data-v-2bb87509]{\n    margin-bottom: 32px;\n}\n.mainRow3[data-v-2bb87509]{\n    margin-bottom: 35px;\n}\n.rowheadings[data-v-2bb87509]{\n    font-size: 25px !important;\n}\n.iconClass p[data-v-2bb87509]{\n    font-size: 19px !important;\n}\n.grandTotalMob[data-v-2bb87509]{\n    margin-bottom: 35px !important;\n}\n.grandTotalMob p[data-v-2bb87509]{\n    font-size: 18px !important;\n}\n.grandTotalMob .smallP[data-v-2bb87509]{\n    font-size: 12.5px !important;\n}\n.grandTotalMob .p2[data-v-2bb87509]{\n    margin-top: 5px !important;\n    font-size: 20px !important;\n}\n.btnConfirm[data-v-2bb87509]{\n    font-size: 20px !important;\n    height: 55px !important;\n    width: 200px !important;\n}\n}\n@media (min-width: 1024px) {\n.grandTotalMob[data-v-2bb87509]{\n    display: none !important;\n}\n.expDetCol2Main[data-v-2bb87509]{\n    display: inline;\n}\n.expDetCol2[data-v-2bb87509]{\n    display: inline;\n}\n.expDetCol1[data-v-2bb87509]{\n    width: 70%;\n}\n.iconClass[data-v-2bb87509]{\n    width: 18% !important;\n}\n.mainRow1[data-v-2bb87509]{\n    margin-top: 55px;\n    margin-bottom: 55px;\n}\n.mainRow2[data-v-2bb87509]{\n    padding: 5px 65px;\n    margin-bottom: 55px;\n}\n.mainRow3[data-v-2bb87509]{\n    padding: 5px 65px;\n    margin-bottom: 55px;\n}\n}\n.iconMainDiv[data-v-2bb87509]{\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start\n}\n.iconClass[data-v-2bb87509]{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-content: center;\n  width: 45%;\n  margin-right: 15px;\n  margin-bottom: 50px;\n}\n.iconClass img[data-v-2bb87509]{\n  height: 40px;\n  width: 40px;\n  margin-right: 12px;\n}\n.iconClass p[data-v-2bb87509]{\n  margin-top: 8px;\n  font-size: 14.2px;\n  font-weight: 400;\n  color: #1d1b1b;\n}\n.rowheadings[data-v-2bb87509]{\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n  color: #101010;\n  font-family: sans-serif;\n}\n.itineraryDiv[data-v-2bb87509]{\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-content: space-between;\n}\n.singleItneraryDivMain[data-v-2bb87509]{\n}\n.singleItneraryDiv[data-v-2bb87509]{\n  height: 55px; \n  width: 100%; \n  padding: 14px 30px;\n  font-size: 18px;\n  font-weight: 600;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n  background: white;\n}\n.singleItneraryDiv2[data-v-2bb87509]{\n  height: auto; \n  width: 100%; \n  padding: 16px 30px;\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 15px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 7px 0 rgba(0, 0, 0, 0.19);\n  background: white;\n}\n.priceSingleDiv[data-v-2bb87509]{\n  padding: 12px 18px !important;\n  margin-top: 10px !important; \n  border-bottom: 1px solid #8080806b;\n}\n.priceSingleDiv p[data-v-2bb87509]{\n  font-size: 15.5px;\n  font-weight: 500;\n  font-family: sans-serif;\n  color: #1d1b1b;\n  margin-right: 3px;\n}\n.priceSingleDiv .p2[data-v-2bb87509]{\n  font-size: 16.2px;\n  font-weight: 600;\n  font-family: sans-serif;\n  color: #1d1b1b;\n}\n.grandTotalDiv[data-v-2bb87509]{\n  padding: 13px 18px !important;\n  border-bottom: 1px solid #8080806b;\n  background: #007bff2b\n}\n.grandTotalMob[data-v-2bb87509]{\n  padding: 18px !important;\n  background: #007bff2b;\n  margin-bottom: 26.9px !important;\n}\n.grandTotalMob p[data-v-2bb87509]{\n  font-size: 15px;\n  font-weight: 600;\n  font-family: sans-serif;\n  color: #1d1b1b;\n  margin-bottom: 0rem !important;\n}\n.grandTotalMob .smallP[data-v-2bb87509]{\n  font-size: 10px;\n  font-weight: 500;\n  font-family: sans-serif;\n  color: #1d1b1b;\n}\n.grandTotalMob .p2[data-v-2bb87509]{\n  margin-top: 5px;\n  font-size: 15.7px;\n  font-weight: 600;\n  font-family: sans-serif;\n  color: black;\n}\n.grandTotalDiv p[data-v-2bb87509]{\n  font-size: 14px;\n  font-weight: 500;\n  font-family: sans-serif;\n  color: #1d1b1b;\n}\n.grandTotalDiv .smallP[data-v-2bb87509]{\n  font-size: 11px;\n  font-weight: 500;\n  font-family: sans-serif;\n  color: #1d1b1b;\n}\n.grandTotalDiv .p2[data-v-2bb87509]{\n  margin-top: 6px;\n  font-size: 16.7px;\n  font-weight: 600;\n  font-family: sans-serif;\n  color: #1d1b1b;\n  color: black;\n}\n.couponDivMain[data-v-2bb87509]{\n  padding: 12px 18px !important;\n  margin-top: 10px !important; \n  border-bottom: 1px solid #8080806b;\n}\n.couponDiv[data-v-2bb87509]{\n}\n.couponDiv p[data-v-2bb87509]{\n  font-size: 15.5px;\n  font-weight: 400;\n  font-family: sans-serif;\n  color: #3490dc;\n  margin-right: 3px;\n}\n.couponDiv .p2[data-v-2bb87509]{\n  font-size: 16.2px;\n  font-weight: 500;\n  font-family: sans-serif;\n  color: #3490dc;\n}\n.btnCpn[data-v-2bb87509]{\n  color: #fff;\n  background-color: #01c5c4;\n  border-color: #01c5c4;\n  border-radius: 0px;\n}\n.btnPay[data-v-2bb87509]{\n  color: #fff;\n  background-color: #01c5c4;\n  border-color: #01c5c4;\n  height: 50px;\n  width: 100%;\n  margin-top: 5px;\n  border-radius: 0px;\n}\n.btnConfirm[data-v-2bb87509]{\n  color: #fff;\n  background-color: #01c5c4;\n  border-color: #01c5c4;\n  height: 45px;\n  width: 150px;\n  border-radius: 0px;\n}\n.verticalStep[data-v-2bb87509]{\n  height: 20px;\n  width: 1px; \n  background: gray; \n  margin-left: 45px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Booking.vue?vue&type=style&index=0&id=31645f64&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/Booking.vue?vue&type=style&index=0&id=31645f64&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Booking.vue?vue&type=style&index=0&id=31645f64&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Booking.vue?vue&type=style&index=0&id=31645f64&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Booking.vue?vue&type=template&id=31645f64&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/Booking.vue?vue&type=template&id=31645f64&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                          value: _vm.people,
                          expression: "people"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "number_of_person",
                        "data-toggle": "modal",
                        "data-target": "#personsModal",
                        readonly: ""
                      },
                      domProps: { value: _vm.people },
                      on: {
                        click: function($event) {
                          _vm.showPersonModal = true
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.people = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("has-error", {
                      attrs: { form: _vm.form, field: "start_date" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.showPersonModal
                  ? _c(
                      "div",
                      {
                        staticClass: "modal",
                        attrs: {
                          tabindex: "-1",
                          role: "dialog",
                          id: "personsModal"
                        }
                      },
                      [
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
                                  _vm._v("Passengers")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "close",
                                    attrs: {
                                      type: "button",
                                      "aria-label": "Close"
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.showPersonModal = false
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { attrs: { "aria-hidden": "true" } },
                                      [_vm._v("×")]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "modal-body" }, [
                                _c("div", { staticClass: "marginT" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "personLables",
                                      attrs: { for: "number_of_adults" }
                                    },
                                    [_vm._v("Adults(>12 years)")]
                                  ),
                                  _vm._v(" "),
                                  _c("fieldset", [
                                    _c("input", {
                                      staticClass: "decrease",
                                      attrs: { type: "button", value: "-" },
                                      on: {
                                        click: function($event) {
                                          return _vm.decrVal("adults")
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.adults,
                                          expression: "form.adults"
                                        }
                                      ],
                                      attrs: {
                                        type: "passengers",
                                        id: "incrdcr",
                                        readonly: ""
                                      },
                                      domProps: { value: _vm.form.adults },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "adults",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "increase",
                                      attrs: { type: "button", value: "+" },
                                      on: {
                                        click: function($event) {
                                          return _vm.incrVal("adults")
                                        }
                                      }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "marginT" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "personLables",
                                      attrs: { for: "number_of_children" }
                                    },
                                    [_vm._v("Children(2 to 12 years)")]
                                  ),
                                  _vm._v(" "),
                                  _c("fieldset", [
                                    _c("input", {
                                      staticClass: "decrease",
                                      attrs: { type: "button", value: "-" },
                                      on: {
                                        click: function($event) {
                                          return _vm.decrVal("children")
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.children,
                                          expression: "form.children"
                                        }
                                      ],
                                      attrs: {
                                        type: "passengers",
                                        id: "incrdcr",
                                        readonly: ""
                                      },
                                      domProps: { value: _vm.form.children },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "children",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "increase",
                                      attrs: { type: "button", value: "+" },
                                      on: {
                                        click: function($event) {
                                          return _vm.incrVal("children")
                                        }
                                      }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "marginT" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "personLables",
                                      attrs: { for: "number_of_infants" }
                                    },
                                    [_vm._v("Infants(3 days to 2 years)")]
                                  ),
                                  _vm._v(" "),
                                  _c("fieldset", [
                                    _c("input", {
                                      staticClass: "decrease",
                                      attrs: { type: "button", value: "-" },
                                      on: {
                                        click: function($event) {
                                          return _vm.decrVal("infants")
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.infants,
                                          expression: "form.infants"
                                        }
                                      ],
                                      attrs: {
                                        type: "passengers",
                                        id: "incrdcr",
                                        readonly: ""
                                      },
                                      domProps: { value: _vm.form.infants },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "infants",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "increase",
                                      attrs: { type: "button", value: "+" },
                                      on: {
                                        click: function($event) {
                                          return _vm.incrVal("infants")
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "modal-footer" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: { type: "button" },
                                    on: { click: _vm.savePersons }
                                  },
                                  [_vm._v("Confirm")]
                                )
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  : _vm._e()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "section",
    { staticClass: "d-flex flex-column justify-content-center" },
    [
      _c(
        "div",
        {
          staticClass:
            "d-flex justify-content-center align-items-center mainRow1 container"
        },
        [
          _c("div", { staticClass: "p-2 d-flex flex-column expDetCol1" }, [
            _c("img", {
              staticClass: "expDetailImg",
              attrs: {
                src: _vm.selectedPhoto,
                loading: "lazy",
                alt: "itinerary"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "p-2" },
              [
                _c(
                  "VueSlickCarousel",
                  _vm._b(
                    { attrs: { dots: true, arrows: false } },
                    "VueSlickCarousel",
                    _vm.settings,
                    false
                  ),
                  _vm._l(10, function(index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        on: {
                          click: function($event) {
                            return _vm.changePhoto(_vm.itineraryData.photo)
                          }
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "expDetailImgSmall",
                          attrs: {
                            src: _vm.itineraryData.photo,
                            loading: "lazy",
                            alt: "itinerary"
                          }
                        })
                      ]
                    )
                  }),
                  0
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm.itineraryData.price
            ? _c("div", { staticClass: "expDetCol2Main" }, [
                _c("div", { staticClass: "expDetCol2" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-start align-items-center priceSingleDiv"
                    },
                    [
                      _c("p", [
                        _c("b", [
                          _vm._v(
                            "₹" + _vm._s(_vm.itineraryData.price) + " x 1 Pax"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "ml-auto p2" }, [
                        _vm._v("₹" + _vm._s(_vm.itineraryData.price))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-start align-items-center priceSingleDiv"
                    },
                    [
                      _c("p", [_vm._v("Total Basic Cost")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "ml-auto p2" }, [
                        _vm._v("₹" + _vm._s(_vm.itineraryData.price))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex justify-content-start align-items-center priceSingleDiv"
                    },
                    [
                      _c("p", [_vm._v("Taxes")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "ml-auto p2" }, [
                        _vm._v(
                          "₹" + _vm._s((_vm.itineraryData.price * 5) / 100)
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.itineraryData.price
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-start align-items-center grandTotalDiv"
                        },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("p", { staticClass: "ml-auto p2" }, [
                            _vm._v(
                              "₹" +
                                _vm._s(
                                  (_vm.itineraryData.price * 5) / 100 +
                                    _vm.itineraryData.price -
                                    2000
                                ) +
                                " "
                            )
                          ])
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("button", { staticClass: "btn btnPay" }, [_vm._v("Pay Now")])
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "d-flex justify-content-between align-items-center grandTotalMob"
        },
        [
          _c(
            "div",
            {
              staticClass:
                "d-flex flex-column justify-content-start align-items-start"
            },
            [
              _c("p", [_vm._v("Grand Total")]),
              _vm._v(" "),
              _c("span", { staticClass: "smallP" }, [
                _vm._v("(Incl. all taxes)")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "p2" }, [
                _vm._v(
                  "₹" +
                    _vm._s(
                      (_vm.itineraryData.price * 5) / 100 +
                        _vm.itineraryData.price -
                        2000
                    )
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("button", { staticClass: "btn btnConfirm ml-auto" }, [
            _vm._v("Pay Now")
          ])
        ]
      ),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "mainRow3 container" }, [
        _c("p", { staticClass: "rowheadings" }, [_vm._v("ITINERARY")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "itineraryDiv" },
          _vm._l(_vm.itineraryData.itinerarydays, function(data, index) {
            return _c(
              "div",
              {
                key: data.id,
                staticClass: "singleItneraryDivMain",
                on: {
                  click: function($event) {
                    return _vm.changeItDiv(data.id)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "singleItneraryDiv d-flex justify-content-between"
                  },
                  [
                    _c("p", [_vm._v("Itinerary : Day " + _vm._s(data.day))]),
                    _vm._v(" "),
                    _c("i", {
                      class:
                        _vm.selectedDay == data.id
                          ? "fas fa-sort-up mt-2"
                          : "fas fa-sort-down"
                    })
                  ]
                ),
                _vm._v(" "),
                _vm.selectedDay == data.id
                  ? _c("div", { staticClass: "singleItneraryDiv2" }, [
                      _c("div", {
                        staticClass: "card-text card-text-ul py-2",
                        domProps: { innerHTML: _vm._s(data.day_description) }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.itineraryData.itinerarydays.length - 1 !== index
                  ? _c("div", { staticClass: "verticalStep" })
                  : _vm._e()
              ]
            )
          }),
          0
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex flex-column justify-content-start couponDivMain" },
      [
        _c("div", { staticClass: "d-flex justify-content-start couponDiv" }, [
          _c("p", [_vm._v("GBITRIP")]),
          _vm._v(" "),
          _c("p", { staticClass: "ml-auto p2" }, [_vm._v("- ₹2,000")])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex justify-content-start couponEnterDiv" },
          [
            _c("input", { attrs: { type: "text" } }),
            _vm._v(" "),
            _c("button", { staticClass: "btn btnCpn" }, [_vm._v("Add")])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      {
        staticClass:
          "d-flex flex-column justify-content-start align-items-center",
        staticStyle: { "margin-top": "5px", "margin-right": "3px" }
      },
      [
        _vm._v("Grand Total\n            "),
        _c("span", { staticClass: "smallP" }, [_vm._v("(Incl. all taxes)")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mainRow2 container" }, [
      _c("p", { staticClass: "rowheadings" }, [
        _vm._v("Your Experience Includes")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "iconMainDiv" }, [
        _c("div", { staticClass: "iconClass" }, [
          _c("img", { attrs: { src: "/images/icons/hotel_icon.png" } }),
          _vm._v(" "),
          _c("p", [_vm._v("Hotel")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "iconClass" }, [
          _c("img", { attrs: { src: "/images/icons/flight_icon.png" } }),
          _vm._v(" "),
          _c("p", [_vm._v("Flight")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "iconClass" }, [
          _c("img", { attrs: { src: "/images/icons/passport_icon.png" } }),
          _vm._v(" "),
          _c("p", [_vm._v("Passport/Visa")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "iconClass" }, [
          _c("img", { attrs: { src: "/images/icons/transport_icon.png" } }),
          _vm._v(" "),
          _c("p", [_vm._v("Transfers")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "iconClass" }, [
          _c("img", { attrs: { src: "/images/icons/dinner_icon.png" } }),
          _vm._v(" "),
          _c("p", [_vm._v("Dinner")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "iconClass" }, [
          _c("img", { attrs: { src: "/images/icons/citytour_icon.png" } }),
          _vm._v(" "),
          _c("p", [_vm._v("City Tour")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "iconClass" }, [
          _c("img", { attrs: { src: "/images/icons/taxes_icon.png" } }),
          _vm._v(" "),
          _c("p", [_vm._v("Taxes")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "iconClass" }, [
          _c("img", { attrs: { src: "/images/icons/sightseeing.png" } }),
          _vm._v(" "),
          _c("p", [_vm._v("Sightseeing")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "iconClass" }, [
          _c("img", { attrs: { src: "/images/icons/breakfast.png" } }),
          _vm._v(" "),
          _c("p", [_vm._v("Breakfast")])
        ])
      ])
    ])
  }
]
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
/* harmony import */ var _Booking_vue_vue_type_template_id_31645f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Booking.vue?vue&type=template&id=31645f64&scoped=true& */ "./resources/js/front/components/Booking.vue?vue&type=template&id=31645f64&scoped=true&");
/* harmony import */ var _Booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Booking.vue?vue&type=script&lang=js& */ "./resources/js/front/components/Booking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Booking_vue_vue_type_style_index_0_id_31645f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Booking.vue?vue&type=style&index=0&id=31645f64&scoped=true&lang=css& */ "./resources/js/front/components/Booking.vue?vue&type=style&index=0&id=31645f64&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Booking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Booking_vue_vue_type_template_id_31645f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Booking_vue_vue_type_template_id_31645f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "31645f64",
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

/***/ "./resources/js/front/components/Booking.vue?vue&type=style&index=0&id=31645f64&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/front/components/Booking.vue?vue&type=style&index=0&id=31645f64&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_style_index_0_id_31645f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Booking.vue?vue&type=style&index=0&id=31645f64&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Booking.vue?vue&type=style&index=0&id=31645f64&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_style_index_0_id_31645f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_style_index_0_id_31645f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_style_index_0_id_31645f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_style_index_0_id_31645f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/components/Booking.vue?vue&type=template&id=31645f64&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/front/components/Booking.vue?vue&type=template&id=31645f64&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_template_id_31645f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Booking.vue?vue&type=template&id=31645f64&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/Booking.vue?vue&type=template&id=31645f64&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_template_id_31645f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Booking_vue_vue_type_template_id_31645f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/pages/Explore/ExploreDetail.vue":
/*!************************************************************!*\
  !*** ./resources/js/front/pages/Explore/ExploreDetail.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExploreDetail_vue_vue_type_template_id_2bb87509_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true& */ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true&");
/* harmony import */ var _ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExploreDetail.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExploreDetail_vue_vue_type_style_index_0_id_2bb87509_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css& */ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExploreDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExploreDetail_vue_vue_type_template_id_2bb87509_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExploreDetail_vue_vue_type_template_id_2bb87509_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2bb87509",
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

/***/ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_style_index_0_id_2bb87509_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=style&index=0&id=2bb87509&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_style_index_0_id_2bb87509_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_style_index_0_id_2bb87509_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_style_index_0_id_2bb87509_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_style_index_0_id_2bb87509_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_template_id_2bb87509_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/Explore/ExploreDetail.vue?vue&type=template&id=2bb87509&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_template_id_2bb87509_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExploreDetail_vue_vue_type_template_id_2bb87509_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);