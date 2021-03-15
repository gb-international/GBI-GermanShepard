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
      internet_fee: 0,
      grand_total: 0
    };
  },
  created: function created() {
    this.internet_fee = Math.ceil(this.amount / 0.9646 * 3.54 / 100);
    this.grand_total = this.amount + this.internet_fee;
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
/* harmony import */ var _front_components_form_payment_StudentPaymentCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/front/components/form/payment/StudentPaymentCard.vue */ "./resources/js/front/components/form/payment/StudentPaymentCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    PaymentCard: _front_components_form_payment_StudentPaymentCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      shipping_toggle: false,
      mobile: {
        active_el: 0
      },
      validated: false,
      submit_button: false,
      errors: {
        billing_email: "",
        billing_tel: ""
      },
      form: {
        // billing_customer_name: "",
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
        base_price: "",
        no_of_person: ""
      },
      amount: 0
    };
  },
  watch: {
    "form.billing_name": function formBilling_name() {
      this.billingFormat();
    },
    "form.billing_address": function formBilling_address() {
      this.billingFormat();
    },
    "form.billing_city": function formBilling_city() {
      this.billingFormat();
    },
    "form.billing_state": function formBilling_state() {
      this.billingFormat();
    },
    "form.billing_zip": function formBilling_zip() {
      this.billingFormat();
    },
    "form.billing_country": function formBilling_country() {
      this.billingFormat();
    },
    "form.billing_email": function formBilling_email() {
      this.validateEmail(this.form.billing_email);
      this.billingFormat();
    },
    "form.billing_tel": function formBilling_tel() {
      this.validateTel(this.form.billing_tel);
      this.billingFormat();
    }
  },
  created: function created() {
    if (this.$cookies.get("payment-data") == null) {
      this.$router.push("/");
    }

    var data = this.$cookies.get("payment-data");
    console.log(data);
    this.amount = parseInt(data.base_price);
    this.form.user_id = data.user_id;
    this.form.travel_code = data.travel_code;
    this.form.tour_id = data.tour_id;
    this.form.school_id = data.school_id;
    this.form.base_price = parseInt(data.base_price);
  },
  methods: {
    activate: function activate(nav_number) {
      this.mobile.active_el = nav_number;
    },
    toggleShipping: function toggleShipping() {
      this.shipping_toggle = !this.shipping_toggle;
    },
    submitForm: function submitForm() {
      if (this.form.billing_name.length < 1 || this.form.billing_address.length < 1 || this.form.billing_country.length < 1 || this.form.billing_state.length < 1 || this.form.billing_city.length < 1 || this.form.billing_zip.length < 1 || this.form.billing_tel.length < 1 || this.form.billing_email.length < 1) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill Billing  fields"
        });
        return false;
      }
    },
    billingFormat: function billingFormat() {
      if (this.form.billing_name.length < 1 || this.form.billing_address.length < 1 || this.form.billing_country.length < 1 || this.form.billing_state.length < 1 || this.form.billing_city.length < 1 || this.form.billing_zip.length < 1 || this.form.billing_tel.length < 1 || this.form.billing_email.length < 1 || this.errors.billing_email != "" || this.errors.billing_tel != "") {
        this.submit_button = false;
        return false;
      } else {
        this.submit_button = true;
      }
    },
    shippingFormat: function shippingFormat() {
      if (this.shipping_toggle == true) {
        if (this.form.shipping_name.length < 1 || this.form.shipping_address.length < 1 || this.form.shipping_country.length < 1 || this.form.shipping_state.length < 1 || this.form.shipping_city.length < 1 || this.form.shipping_zip.length < 1 || this.form.shipping_tel.length < 1 || this.form.shipping_email.length < 1 || this.errors.billing_email != "" || this.errors.billing_tel != "") {
          this.submit_button = false;
          return false;
        } else {
          this.submit_button = true;
        }
      }
    },
    validateEmail: function validateEmail(email) {
      if (email != "") {
        var re = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,3}$/;
        var result = re.test(email);

        if (result == false) {
          this.errors.billing_email = "Please Enter Valid Email";
          return false;
        } else {
          this.errors.billing_email = "";
        }
      }

      this.billingFormat();
    },
    validateTel: function validateTel(tel) {
      if (tel != "") {
        var re = /^[789]\d{9}$/;
        var result = re.test(tel);

        if (result == false) {
          this.errors.billing_tel = "Please Enter Valid Phone number";
          return false;
        } else {
          this.errors.billing_tel = "";
        }
      }

      this.billingFormat();
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
        _vm._v(_vm._s(_vm.amount) + "\n    ")
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
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-right" }, [
        _vm._v(_vm._s(_vm.internet_fee))
      ])
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", { staticClass: "row pt-2 pb-2 total" }, [
      _vm._m(3),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-right" }, [
        _c("img", { attrs: { src: "/images/icons/rupee.png" } }),
        _vm._v(_vm._s(_vm.grand_total) + "\n    ")
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
    return _c("div", { staticClass: "col-8" }, [
      _c(
        "p",
        { staticClass: "m-0", attrs: { title: "Internet charges and tax" } },
        [_vm._v("\n        Internet handeling fee\n      ")]
      )
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
      _c(
        "form",
        { staticClass: "form", attrs: { method: "POST", action: "/payment" } },
        [
          _c("div", { staticClass: "desktop" }, [
            _c("div", { staticClass: "row pt-4 pb-4" }, [
              _c("div", { staticClass: "col-sm-8" }, [
                _c("h6", [_vm._v("Billing Information")]),
                _vm._v(" "),
                _c("div", [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group m-1" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Billing Name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.billing_name,
                              expression: "form.billing_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "billing_name",
                            required: ""
                          },
                          domProps: { value: _vm.form.billing_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "billing_name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group m-1" }, [
                        _c("label", { attrs: { for: "address" } }, [
                          _vm._v("Billing Address")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.billing_address,
                              expression: "form.billing_address"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "billing_address",
                            required: ""
                          },
                          domProps: { value: _vm.form.billing_address },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "billing_address",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group m-1" }, [
                        _c("label", { attrs: { for: "city" } }, [
                          _vm._v("Billing City")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.billing_city,
                              expression: "form.billing_city"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "billing_city",
                            required: ""
                          },
                          domProps: { value: _vm.form.billing_city },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "billing_city",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group m-1" }, [
                        _c("label", { attrs: { for: "state" } }, [
                          _vm._v("Billing State")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.billing_state,
                              expression: "form.billing_state"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "billing_state",
                            required: ""
                          },
                          domProps: { value: _vm.form.billing_state },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "billing_state",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group m-1" }, [
                        _c("label", { attrs: { for: "billing_zip" } }, [
                          _vm._v("Billing Zip Code")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.billing_zip,
                              expression: "form.billing_zip"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            name: "billing_zip",
                            required: ""
                          },
                          domProps: { value: _vm.form.billing_zip },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "billing_zip",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-4" }, [
                      _c("div", { staticClass: "form-group m-1" }, [
                        _c("label", { attrs: { for: "country" } }, [
                          _vm._v("Billing Country")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.billing_country,
                              expression: "form.billing_country"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "billing_country",
                            required: ""
                          },
                          domProps: { value: _vm.form.billing_country },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "billing_country",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group m-1" }, [
                        _c("label", { attrs: { for: "phone_no" } }, [
                          _vm._v("Phone Number")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.billing_tel,
                              expression: "form.billing_tel"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            name: "billing_tel",
                            required: ""
                          },
                          domProps: { value: _vm.form.billing_tel },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "billing_tel",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("small", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.billing_tel))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "form-group m-1" }, [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v("Billing Email")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.billing_email,
                              expression: "form.billing_email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            name: "billing_email",
                            required: ""
                          },
                          domProps: { value: _vm.form.billing_email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "billing_email",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("small", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.billing_email))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "d-none" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.user_id,
                            expression: "form.user_id"
                          }
                        ],
                        attrs: { type: "text", name: "user_id" },
                        domProps: { value: _vm.form.user_id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "user_id", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.travel_code,
                            expression: "form.travel_code"
                          }
                        ],
                        attrs: { type: "text", name: "travel_code" },
                        domProps: { value: _vm.form.travel_code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "travel_code",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.tour_id,
                            expression: "form.tour_id"
                          }
                        ],
                        attrs: { type: "text", name: "tour_id" },
                        domProps: { value: _vm.form.tour_id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "tour_id", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.school_id,
                            expression: "form.school_id"
                          }
                        ],
                        attrs: { type: "text", name: "school_id" },
                        domProps: { value: _vm.form.school_id },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "school_id", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.base_price,
                            expression: "form.base_price"
                          }
                        ],
                        attrs: { type: "text", name: "base_price" },
                        domProps: { value: _vm.form.base_price },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "base_price",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
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
                  ? _c("div", [
                      _c("h6", [_vm._v("Shipping Information")]),
                      _vm._v(" "),
                      _c("div", [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Shipping Name")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.delivery_name,
                                    expression: "form.delivery_name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "delivery_name" },
                                domProps: { value: _vm.form.delivery_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "delivery_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "address" } }, [
                                _vm._v("Shipping Address")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.delivery_address,
                                    expression: "form.delivery_address"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "delivery_address"
                                },
                                domProps: { value: _vm.form.delivery_address },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "delivery_address",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "city" } }, [
                                _vm._v("Shipping City")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.delivery_city,
                                    expression: "form.delivery_city"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "delivery_city" },
                                domProps: { value: _vm.form.delivery_city },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "delivery_city",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "state" } }, [
                                _vm._v("Shipping State")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.delivery_state,
                                    expression: "form.delivery_state"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", name: "delivery_state" },
                                domProps: { value: _vm.form.delivery_state },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "delivery_state",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "zipcode" } }, [
                                _vm._v("Shipping Zip Code")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.delivery_zip,
                                    expression: "form.delivery_zip"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number", name: "delivery_zip" },
                                domProps: { value: _vm.form.delivery_zip },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "delivery_zip",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "country" } }, [
                                _vm._v("Shipping Country")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.delivery_country,
                                    expression: "form.delivery_country"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "delivery_country"
                                },
                                domProps: { value: _vm.form.delivery_country },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "delivery_country",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "phone_no" } }, [
                                _vm._v("Phone Number")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.delivery_tel,
                                    expression: "form.delivery_tel"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "number", name: "delivery_tel" },
                                domProps: { value: _vm.form.delivery_tel },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "delivery_tel",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "email" } }, [
                                _vm._v("Shipping Email")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.delivery_email,
                                    expression: "form.delivery_email"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "email",
                                  name: "delivery_email"
                                },
                                domProps: { value: _vm.form.delivery_email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "delivery_email",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        ])
                      ])
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-4 pl-4 pr-4" }, [
                _c(
                  "div",
                  { staticClass: "payment-card" },
                  [
                    _c("payment-card", {
                      attrs: { amount: _vm.amount, pax: 1 }
                    })
                  ],
                  1
                ),
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
                      [_vm._v("\n            Confirm & Pay\n          ")]
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
                [_vm._v("\n          Payment info\n        ")]
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
                [_vm._v("\n          Billing info\n        ")]
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
                [_vm._v("\n          Shipping info\n        ")]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "p-1 pt-3" },
              [
                _vm.mobile.active_el == 0
                  ? _c("payment-card", {
                      attrs: { amount: _vm.amount, pax: _vm.form.no_of_person }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.mobile.active_el == 1
                  ? _c("div", [
                      _c("h5", { staticClass: "pl-1" }, [
                        _vm._v("Billing Information")
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("Billing Name")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.billing_name,
                                    expression: "form.billing_name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "billing_name",
                                  required: ""
                                },
                                domProps: { value: _vm.form.billing_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "billing_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "address" } }, [
                                _vm._v("Billing Address")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.billing_address,
                                    expression: "form.billing_address"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "billing_address",
                                  required: ""
                                },
                                domProps: { value: _vm.form.billing_address },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "billing_address",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "city" } }, [
                                _vm._v("Billing City")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.billing_city,
                                    expression: "form.billing_city"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "billing_city",
                                  required: ""
                                },
                                domProps: { value: _vm.form.billing_city },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "billing_city",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "state" } }, [
                                _vm._v("Billing State")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.billing_state,
                                    expression: "form.billing_state"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "billing_state",
                                  required: ""
                                },
                                domProps: { value: _vm.form.billing_state },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "billing_state",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "billing_zip" } }, [
                                _vm._v("Billing Zip Code")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.billing_zip,
                                    expression: "form.billing_zip"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "number",
                                  name: "billing_zip",
                                  required: ""
                                },
                                domProps: { value: _vm.form.billing_zip },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "billing_zip",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "country" } }, [
                                _vm._v("Billing Country")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.billing_country,
                                    expression: "form.billing_country"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  name: "billing_country",
                                  required: ""
                                },
                                domProps: { value: _vm.form.billing_country },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "billing_country",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "phone_no" } }, [
                                _vm._v("Phone Number")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.billing_tel,
                                    expression: "form.billing_tel"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "number",
                                  name: "billing_tel",
                                  required: ""
                                },
                                domProps: { value: _vm.form.billing_tel },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "billing_tel",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("small", { staticClass: "text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.billing_tel))
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c("div", { staticClass: "form-group m-1" }, [
                              _c("label", { attrs: { for: "email" } }, [
                                _vm._v("Billing Email")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.billing_email,
                                    expression: "form.billing_email"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "email",
                                  name: "billing_email",
                                  required: ""
                                },
                                domProps: { value: _vm.form.billing_email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "billing_email",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _c("small", { staticClass: "text-danger" }, [
                                _vm._v(_vm._s(_vm.errors.billing_email))
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "d-none" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.user_id,
                                  expression: "form.user_id"
                                }
                              ],
                              attrs: { type: "text", name: "user_id" },
                              domProps: { value: _vm.form.user_id },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "user_id",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.travel_code,
                                  expression: "form.travel_code"
                                }
                              ],
                              attrs: { type: "text", name: "travel_code" },
                              domProps: { value: _vm.form.travel_code },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "travel_code",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.tour_id,
                                  expression: "form.tour_id"
                                }
                              ],
                              attrs: { type: "text", name: "tour_id" },
                              domProps: { value: _vm.form.tour_id },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "tour_id",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.school_id,
                                  expression: "form.school_id"
                                }
                              ],
                              attrs: { type: "text", name: "school_id" },
                              domProps: { value: _vm.form.school_id },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "school_id",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.base_price,
                                  expression: "form.base_price"
                                }
                              ],
                              attrs: { type: "text", name: "base_price" },
                              domProps: { value: _vm.form.base_price },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "base_price",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.no_of_person,
                                  expression: "form.no_of_person"
                                }
                              ],
                              attrs: { type: "text", name: "no_of_person" },
                              domProps: { value: _vm.form.no_of_person },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "no_of_person",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ])
                      ])
                    ])
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
                            _vm._v(
                              "My billing and shipping address are different"
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm.shipping_toggle
                        ? _c("div", [
                            _c("h5", { staticClass: "pl-1" }, [
                              _vm._v("Shipping Information")
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-sm-6" }, [
                                  _c("div", { staticClass: "form-group m-1" }, [
                                    _c("label", { attrs: { for: "name" } }, [
                                      _vm._v("Shipping Name")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.delivery_name,
                                          expression: "form.delivery_name"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "delivery_name"
                                      },
                                      domProps: {
                                        value: _vm.form.delivery_name
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "delivery_name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-sm-6" }, [
                                  _c("div", { staticClass: "form-group m-1" }, [
                                    _c("label", { attrs: { for: "address" } }, [
                                      _vm._v("Shipping Address")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.delivery_address,
                                          expression: "form.delivery_address"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "delivery_address"
                                      },
                                      domProps: {
                                        value: _vm.form.delivery_address
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "delivery_address",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-sm-4" }, [
                                  _c("div", { staticClass: "form-group m-1" }, [
                                    _c("label", { attrs: { for: "city" } }, [
                                      _vm._v("Shipping City")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.delivery_city,
                                          expression: "form.delivery_city"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "delivery_city"
                                      },
                                      domProps: {
                                        value: _vm.form.delivery_city
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "delivery_city",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-sm-4" }, [
                                  _c("div", { staticClass: "form-group m-1" }, [
                                    _c("label", { attrs: { for: "state" } }, [
                                      _vm._v("Shipping State")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.delivery_state,
                                          expression: "form.delivery_state"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "delivery_state"
                                      },
                                      domProps: {
                                        value: _vm.form.delivery_state
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "delivery_state",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-sm-4" }, [
                                  _c("div", { staticClass: "form-group m-1" }, [
                                    _c("label", { attrs: { for: "zipcode" } }, [
                                      _vm._v("Shipping Zip Code")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.delivery_zip,
                                          expression: "form.delivery_zip"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "number",
                                        name: "delivery_zip"
                                      },
                                      domProps: {
                                        value: _vm.form.delivery_zip
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "delivery_zip",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-sm-4" }, [
                                  _c("div", { staticClass: "form-group m-1" }, [
                                    _c("label", { attrs: { for: "country" } }, [
                                      _vm._v("Shipping Country")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.delivery_country,
                                          expression: "form.delivery_country"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        name: "delivery_country"
                                      },
                                      domProps: {
                                        value: _vm.form.delivery_country
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "delivery_country",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-sm-6" }, [
                                  _c("div", { staticClass: "form-group m-1" }, [
                                    _c(
                                      "label",
                                      { attrs: { for: "phone_no" } },
                                      [_vm._v("Phone Number")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.delivery_tel,
                                          expression: "form.delivery_tel"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "number",
                                        name: "delivery_tel"
                                      },
                                      domProps: {
                                        value: _vm.form.delivery_tel
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "delivery_tel",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-sm-6" }, [
                                  _c("div", { staticClass: "form-group m-1" }, [
                                    _c("label", { attrs: { for: "email" } }, [
                                      _vm._v("Shipping Email")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.delivery_email,
                                          expression: "form.delivery_email"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "email",
                                        name: "delivery_email"
                                      },
                                      domProps: {
                                        value: _vm.form.delivery_email
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "delivery_email",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ])
                            ])
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ],
              1
            ),
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
          ])
        ]
      )
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