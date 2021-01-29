(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/front/BillingStudent"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/payment/StudentPaymentCard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/payment/StudentPaymentCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    amount: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      internet_charge: false,
      internet: {
        total: 0,
        fee: 0,
        gst: 0
      },
      gst: 18,
      internet_fee: 3,
      grand_total: 0
    };
  },

  /*
  
    amount 25000 * 20 = 5,00,000
  fee = (500000 * 3)/100 = 15000
  gst = (fee*18)/100 = 2700
  internet fee = gst + fee  =  15000 + 2700 = 17,700
    total = 5,00,000 + 17700 = 5,17,700
    sir calculated -> 
    amount 25000 * 20 = 5,00,000
    fee = (500000 * 3)/100 = 15000    
    gst = (fee*100)/118 = 12711
    internet handeling fee = 12,711
    total = 5,00,000 + 12,711 = 5,12,711
    hide  both booking fee 
  
    */
  computed: {
    internet_amount: function internet_amount() {
      this.grand_total = this.amount;
      this.internet.fee = this.grand_total * this.internet_fee / 100;
      this.internet.gst = this.internet.fee * this.gst / 100;
      return this.internet.total = this.internet.fee + this.internet.gst;
    }
  },
  methods: {
    InernetCharge: function InernetCharge() {
      this.internet_charge = !this.internet_charge;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/BillingInformation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/student/BillingInformation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_components_form_payment_BillingForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/components/form/payment/BillingForm.vue */ "./resources/js/front/components/form/payment/BillingForm.vue");
/* harmony import */ var _front_components_form_payment_ShippingForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/front/components/form/payment/ShippingForm.vue */ "./resources/js/front/components/form/payment/ShippingForm.vue");
/* harmony import */ var _front_components_form_payment_StudentPaymentCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/front/components/form/payment/StudentPaymentCard.vue */ "./resources/js/front/components/form/payment/StudentPaymentCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    BillingForm: _front_components_form_payment_BillingForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    PaymentCard: _front_components_form_payment_StudentPaymentCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ShippingForm: _front_components_form_payment_ShippingForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      shipping_toggle: false,
      form: {
        billing: {},
        shipping: {}
      },
      mobile: {
        active_el: 0
      },
      validated: false,
      submit_button: false,
      formdata: {
        billing_customer_name: "",
        billing_name: "",
        billing_address: "",
        billing_city: "",
        billing_state: "",
        billing_zip: "",
        billing_country: "",
        billing_tel: "",
        billing_email: "",
        delivery_name: "",
        delivery_address: "",
        delivery_city: "",
        delivery_state: "",
        delivery_zipcode: "",
        delivery_country: "",
        delivery_tel: "",
        delivery_email: "",
        user_id: "",
        travel_code: "",
        tour_id: "",
        school_id: "",
        added_by: "",
        tour_price: "",
        no_of_person: ""
      },
      amount: 0
    };
  },
  created: function created() {
    if (this.$cookies.get("payment-data") == null) {
      this.$router.push("/");
    }

    var data = this.$cookies.get("payment-data");
    this.amount = parseInt(data.tour_price);
    this.formdata.user_id = data.user_id;
    this.formdata.travel_code = data.travel_code;
    this.formdata.tour_id = data.tour_id;
    this.formdata.school_id = data.school_id;
    this.formdata.added_by = data.added_by;
    this.formdata.tour_price = data.tour_price;
    this.formdata.no_of_person = data.no_of_person;
  },
  methods: {
    activate: function activate(nav_number) {
      this.mobile.active_el = nav_number;
    },
    billingUpdate: function billingUpdate(value) {
      this.form.billing = value;
      this.billingFormat();
    },
    shippingUpdate: function shippingUpdate(value) {
      this.form.shipping = value;
      this.shippingFormat();
    },
    toggleShipping: function toggleShipping() {
      this.shipping_toggle = !this.shipping_toggle;
    },
    submitForm: function submitForm() {
      var billing = this.form.billing;

      if (billing.billing_name == undefined) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill Billing  fields"
        });
        return false;
      }

      for (var field in billing) {
        if (billing[field] == "") {
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill Billing  fields"
          });
          return false;
        }
      }
    },
    billingFormat: function billingFormat() {
      for (var field in this.form.billing) {
        if (this.form.billing[field] == "") {
          return false;
        }
      }

      this.formdata.billing_customer_name = this.form.billing.billing_customer_name;
      this.formdata.billing_name = this.form.billing.billing_name;
      this.formdata.billing_address = this.form.billing.billing_address;
      this.formdata.billing_city = this.form.billing.billing_city;
      this.formdata.billing_state = this.form.billing.billing_state;
      this.formdata.billing_zip = this.form.billing.billing_zip;
      this.formdata.billing_country = this.form.billing.billing_country;
      this.formdata.billing_tel = this.form.billing.billing_tel;
      this.formdata.billing_email = this.form.billing.billing_email;
      this.submit_button = true;
    },
    shippingFormat: function shippingFormat() {
      this.formdata.delivery_name = this.form.shipping.delivery_name;
      this.formdata.delivery_name = this.form.shipping.delivery_name;
      this.formdata.delivery_address = this.form.shipping.delivery_address;
      this.formdata.delivery_city = this.form.shipping.delivery_address;
      this.formdata.delivery_state = this.form.shipping.delivery_state;
      this.formdata.delivery_zipcode = this.form.shipping.delivery_zipcode;
      this.formdata.delivery_country = this.form.shipping.delivery_country;
      this.formdata.delivery_tel = this.form.shipping.delivery_tel;
      this.formdata.delivery_email = this.form.shipping.delivery_email;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/payment/StudentPaymentCard.vue?vue&type=template&id=eb4669cc&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/components/form/payment/StudentPaymentCard.vue?vue&type=template&id=eb4669cc& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "payment-card-form" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-8" }, [_vm._v("Basic Package Cost")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-right" }, [
        _c("img", { attrs: { src: "/images/icons/rupee.png" } }),
        _vm._v(_vm._s(_vm.amount))
      ])
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "row pt-2 pb-2" }, [
      _c("div", { staticClass: "col-8" }, [
        _c(
          "p",
          {
            staticClass: "m-0 link",
            attrs: { title: "Internet charges and tax" },
            on: { click: _vm.InernetCharge }
          },
          [_vm._m(2), _vm._v("\n        Internet handeling fee\n      ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-right" }, [
        _vm._v(_vm._s(_vm.internet_amount))
      ])
    ]),
    _vm._v(" "),
    _vm.internet_charge
      ? _c("div", { staticClass: "internet-charge pl-4 pt-2 pb-2" }, [
          _c("p", { staticClass: "m-0" }, [
            _vm._v("Booking Fees "),
            _c("span", { staticClass: "float-right" }, [
              _c("img", { attrs: { src: "/images/icons/rupee.png" } }),
              _vm._v(_vm._s(_vm.internet.fee))
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "m-0" }, [
            _vm._v("\n      Central GST(CGST) @ 18% "),
            _c("span", { staticClass: "float-right" }, [
              _c("img", { attrs: { src: "/images/icons/rupee.png" } }),
              _vm._v(_vm._s(_vm.internet.gst) + " ")
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "row pt-2 pb-2 total" }, [
      _vm._m(3),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-right" }, [
        _c("img", { attrs: { src: "/images/icons/rupee.png" } }),
        _vm._v(_vm._s(_vm.grand_total + _vm.internet.total))
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-8" }, [_vm._v("GBI COUPON CODE")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-right" }, [
        _c("img", { attrs: { src: "/images/icons/rupee.png" } }),
        _vm._v("0")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group mt-3 mb-3" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "GBI Coupon Code" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "input-group-append" }, [
        _c(
          "span",
          { staticClass: "input-group-text bg-info text-white link" },
          [_vm._v("Apply")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "internet-icon" }, [
      _c("i", { staticClass: "fas fa-angle-up" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("p", { staticClass: "m-0 p-0 font-weight-bold" }, [
        _vm._v("Grand Total")
      ]),
      _vm._v(" "),
      _c("small", [_vm._v("(inclusive of all taxes)")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/BillingInformation.vue?vue&type=template&id=8bf4e7ac&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/front/pages/user/student/BillingInformation.vue?vue&type=template&id=8bf4e7ac& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "container", attrs: { id: "payment_information" } },
    [
      _c("div", { staticClass: "desktop" }, [
        _c("div", { staticClass: "row pt-4 pb-4" }, [
          _c(
            "div",
            { staticClass: "col-sm-8" },
            [
              _c("h6", [_vm._v("Billing Information")]),
              _vm._v(" "),
              _c("billing-form", { on: { update: _vm.billingUpdate } }),
              _vm._v(" "),
              _c("p", { staticClass: "mt-3 pl-1" }, [
                _c("label", { attrs: { for: "checkbox" } }, [
                  _c("input", {
                    attrs: { type: "checkbox", id: "checkbox" },
                    on: { click: _vm.toggleShipping }
                  }),
                  _vm._v(" "),
                  _c("small", [
                    _vm._v("My billing and shipping address are different")
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm.shipping_toggle
                ? _c(
                    "div",
                    [
                      _c("h6", [_vm._v("Shipping Information")]),
                      _vm._v(" "),
                      _c("shipping-form", {
                        on: { update: _vm.shippingUpdate }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-4 pl-4 pr-4" }, [
            _c(
              "div",
              { staticClass: "payment-card" },
              [_c("payment-card", { attrs: { amount: _vm.amount } })],
              1
            ),
            _vm._v(" "),
            _c(
              "form",
              {
                staticClass: "form",
                attrs: { method: "POST", action: "/payment" }
              },
              [
                _c("div", { staticClass: "d-none" }, [
                  _c("input", {
                    attrs: { type: "text", name: "billing_customer_name" },
                    domProps: { value: _vm.formdata.billing_customer_name }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "billing_name" },
                    domProps: { value: _vm.formdata.billing_name }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "billing_address" },
                    domProps: { value: _vm.formdata.billing_address }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "billing_city" },
                    domProps: { value: _vm.formdata.billing_city }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "billing_state" },
                    domProps: { value: _vm.formdata.billing_state }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "billing_country" },
                    domProps: { value: _vm.formdata.billing_country }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "billing_zip" },
                    domProps: { value: _vm.formdata.billing_zip }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "billing_tel" },
                    domProps: { value: _vm.formdata.billing_tel }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "billing_email" },
                    domProps: { value: _vm.formdata.billing_email }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "shipping_name" },
                    domProps: { value: _vm.formdata.delivery_name }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "shipping_address" },
                    domProps: { value: _vm.formdata.delivery_address }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "shipping_city" },
                    domProps: { value: _vm.formdata.shipping_city }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "shipping_state" },
                    domProps: { value: _vm.formdata.shipping_state }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "shipping_country" },
                    domProps: { value: _vm.formdata.shipping_country }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "shipping_zipcode" },
                    domProps: { value: _vm.formdata.shipping_zipcode }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "shipping_tel" },
                    domProps: { value: _vm.formdata.shipping_tel }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "shipping_email" },
                    domProps: { value: _vm.formdata.shipping_email }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "user_id" },
                    domProps: { value: _vm.formdata.user_id }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "travel_code" },
                    domProps: { value: _vm.formdata.travel_code }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "tour_id" },
                    domProps: { value: _vm.formdata.tour_id }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "tour_price" },
                    domProps: { value: _vm.formdata.tour_price }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "added_by" },
                    domProps: { value: _vm.formdata.added_by }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "no_of_person" },
                    domProps: { value: _vm.formdata.no_of_person }
                  }),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "text", name: "school_id" },
                    domProps: { value: _vm.formdata.school_id }
                  })
                ]),
                _vm._v(" "),
                _vm.submit_button == false
                  ? _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-block submit-button btn-info p-3 font-weight-bold border-radius-0",
                        attrs: { type: "button" },
                        on: { click: _vm.submitForm }
                      },
                      [_vm._v("Confirm & Pay")]
                    )
                  : _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-block submit-button btn-info p-3 font-weight-bold border-radius-0",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("\n            Confirm & Pay\n          ")]
                    )
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mobile m-0 p-0" }, [
        _c("div", { staticClass: "row bg-white text-center" }, [
          _c(
            "div",
            {
              staticClass: "col pt-4 pb-2 link font-weight-bold",
              class: { active: _vm.mobile.active_el == 0 },
              on: {
                click: function($event) {
                  return _vm.activate(0)
                }
              }
            },
            [_vm._v("\n        Payment info\n      ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col pt-4 pb-2 link font-weight-bold",
              class: { active: _vm.mobile.active_el == 1 },
              on: {
                click: function($event) {
                  return _vm.activate(1)
                }
              }
            },
            [_vm._v("\n        Billing info\n      ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col pt-4 pb-2 link font-weight-bold",
              class: { active: _vm.mobile.active_el == 2 },
              on: {
                click: function($event) {
                  return _vm.activate(2)
                }
              }
            },
            [_vm._v("\n        Shipping info\n      ")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "p-1 pt-3" },
          [
            _vm.mobile.active_el == 0
              ? _c("payment-card", { attrs: { amount: _vm.amount } })
              : _vm._e(),
            _vm._v(" "),
            _vm.mobile.active_el == 1
              ? _c(
                  "div",
                  [
                    _c("h5", { staticClass: "pl-1" }, [
                      _vm._v("Billing Information")
                    ]),
                    _vm._v(" "),
                    _c("billing-form", { on: { update: _vm.billingUpdate } })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.mobile.active_el == 2
              ? _c("div", { staticClass: "min-height-90" }, [
                  _c("p", { staticClass: "mt-3 pl-1" }, [
                    _c("label", { attrs: { for: "mobile-checkbox" } }, [
                      _c("input", {
                        attrs: { type: "checkbox", id: "mobile-checkbox" },
                        on: { click: _vm.toggleShipping }
                      }),
                      _vm._v(" "),
                      _c("small", [
                        _vm._v("My billing and shipping address are different")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.shipping_toggle
                    ? _c(
                        "div",
                        [
                          _c("h5", { staticClass: "pl-1" }, [
                            _vm._v("Shipping Information")
                          ]),
                          _vm._v(" "),
                          _c("shipping-form", {
                            on: { update: _vm.shippingUpdate }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "form",
          {
            staticClass: "form",
            attrs: { method: "POST", action: "/payment" }
          },
          [
            _c("div", { staticClass: "d-none" }, [
              _c("input", {
                attrs: { type: "text", name: "billing_customer_name" },
                domProps: { value: _vm.formdata.billing_customer_name }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "billing_name" },
                domProps: { value: _vm.formdata.billing_name }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "billing_address" },
                domProps: { value: _vm.formdata.billing_address }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "billing_city" },
                domProps: { value: _vm.formdata.billing_city }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "billing_state" },
                domProps: { value: _vm.formdata.billing_state }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "billing_country" },
                domProps: { value: _vm.formdata.billing_country }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "billing_zip" },
                domProps: { value: _vm.formdata.billing_zip }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "billing_tel" },
                domProps: { value: _vm.formdata.billing_tel }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "billing_email" },
                domProps: { value: _vm.formdata.billing_email }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "shipping_name" },
                domProps: { value: _vm.formdata.delivery_name }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "shipping_address" },
                domProps: { value: _vm.formdata.delivery_address }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "shipping_city" },
                domProps: { value: _vm.formdata.shipping_city }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "shipping_state" },
                domProps: { value: _vm.formdata.shipping_state }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "shipping_country" },
                domProps: { value: _vm.formdata.shipping_country }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "shipping_zipcode" },
                domProps: { value: _vm.formdata.shipping_zipcode }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "shipping_tel" },
                domProps: { value: _vm.formdata.shipping_tel }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "shipping_email" },
                domProps: { value: _vm.formdata.shipping_email }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "user_id" },
                domProps: { value: _vm.formdata.user_id }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "travel_code" },
                domProps: { value: _vm.formdata.travel_code }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "tour_id" },
                domProps: { value: _vm.formdata.tour_id }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "tour_price" },
                domProps: { value: _vm.formdata.tour_price }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "added_by" },
                domProps: { value: _vm.formdata.added_by }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "no_of_person" },
                domProps: { value: _vm.formdata.no_of_person }
              }),
              _vm._v(" "),
              _c("input", {
                attrs: { type: "text", name: "school_id" },
                domProps: { value: _vm.formdata.school_id }
              })
            ]),
            _vm._v(" "),
            _vm.submit_button == false
              ? _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-block submit-button btn-info p-3 font-weight-bold mt-3 border-radius-0",
                    attrs: { type: "button" },
                    on: { click: _vm.submitForm }
                  },
                  [_vm._v("\n        Confirm & Pay\n      ")]
                )
              : _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-block submit-button btn-info p-3 font-weight-bold mt-3 border-radius-0",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("\n        Confirm & Pay\n      ")]
                )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/front/components/form/payment/StudentPaymentCard.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/front/components/form/payment/StudentPaymentCard.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StudentPaymentCard_vue_vue_type_template_id_eb4669cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentPaymentCard.vue?vue&type=template&id=eb4669cc& */ "./resources/js/front/components/form/payment/StudentPaymentCard.vue?vue&type=template&id=eb4669cc&");
/* harmony import */ var _StudentPaymentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentPaymentCard.vue?vue&type=script&lang=js& */ "./resources/js/front/components/form/payment/StudentPaymentCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StudentPaymentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StudentPaymentCard_vue_vue_type_template_id_eb4669cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StudentPaymentCard_vue_vue_type_template_id_eb4669cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/components/form/payment/StudentPaymentCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/components/form/payment/StudentPaymentCard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/front/components/form/payment/StudentPaymentCard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentPaymentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentPaymentCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/payment/StudentPaymentCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentPaymentCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/components/form/payment/StudentPaymentCard.vue?vue&type=template&id=eb4669cc&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/front/components/form/payment/StudentPaymentCard.vue?vue&type=template&id=eb4669cc& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentPaymentCard_vue_vue_type_template_id_eb4669cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./StudentPaymentCard.vue?vue&type=template&id=eb4669cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/components/form/payment/StudentPaymentCard.vue?vue&type=template&id=eb4669cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentPaymentCard_vue_vue_type_template_id_eb4669cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentPaymentCard_vue_vue_type_template_id_eb4669cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/front/pages/user/student/BillingInformation.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/front/pages/user/student/BillingInformation.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BillingInformation_vue_vue_type_template_id_8bf4e7ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BillingInformation.vue?vue&type=template&id=8bf4e7ac& */ "./resources/js/front/pages/user/student/BillingInformation.vue?vue&type=template&id=8bf4e7ac&");
/* harmony import */ var _BillingInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BillingInformation.vue?vue&type=script&lang=js& */ "./resources/js/front/pages/user/student/BillingInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BillingInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BillingInformation_vue_vue_type_template_id_8bf4e7ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BillingInformation_vue_vue_type_template_id_8bf4e7ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/front/pages/user/student/BillingInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/front/pages/user/student/BillingInformation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/front/pages/user/student/BillingInformation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BillingInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/BillingInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/front/pages/user/student/BillingInformation.vue?vue&type=template&id=8bf4e7ac&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/front/pages/user/student/BillingInformation.vue?vue&type=template&id=8bf4e7ac& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingInformation_vue_vue_type_template_id_8bf4e7ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BillingInformation.vue?vue&type=template&id=8bf4e7ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/front/pages/user/student/BillingInformation.vue?vue&type=template&id=8bf4e7ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingInformation_vue_vue_type_template_id_8bf4e7ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingInformation_vue_vue_type_template_id_8bf4e7ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);