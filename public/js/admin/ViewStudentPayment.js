(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{13:function(t,s,a){"use strict";var o={name:"ViewLayoutGBI",components:{"back-button":a(19).a},props:["backurl"]},e=a(0),n=Object(e.a)(o,(function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"content"},[s("div",{staticClass:"row pt-3 pb-4"},[s("div",{staticClass:"col-sm-12 card_view"},[this._t("viewdata"),this._v(" "),s("div",{staticClass:"text-center"},[s("back-button",{attrs:{url:this.backurl}})],1)],2)])])}),[],!1,null,null,null);s.a=n.exports},19:function(t,s,a){"use strict";var o={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}},e=a(0),n=Object(e.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",[t.url?a("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(s){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):a("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(s){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);s.a=n.exports},345:function(t,s,a){"use strict";a.r(s);var o={name:"ViewTourStudnetPaymentList",components:{"view-layout":a(13).a},data:function(){return{tour:[],show_json:!1}},created:function(){this.tourData()},methods:{tourData:function(){var t=this;axios.get("/api/bookedusers-view/".concat(this.$route.params.id)).then((function(s){console.log(s),t.tour=s.data}))},goBack:function(){this.$router.go(-1)}}},e=a(0),n=Object(e.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view-layout",{scopedSlots:t._u([{key:"viewdata",fn:function(){return[t.tour.tour_code?a("div",{staticClass:"row pl-3"},[null!=t.tour.tour_code?a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Tour Code")]),t._v(" "),a("p",[t._v(t._s(t.tour.tour_code))])]):t._e(),t._v(" "),null!=t.tour.amount?a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Tour Price")]),t._v(" "),a("p",[t._v(t._s(t.tour.amount)+"/-")])]):t._e(),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("User Name")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/user/"+t.tour.user_id}},[t._v("\n            "+t._s(t.tour.user.name))])],1)]),t._v(" "),null!=t.tour.schoolbankdetail_id?a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("School Bank Detail ID")]),t._v(" "),a("p",[t._v(t._s(t.tour.schoolbankdetail_id))])]):t._e(),t._v(" "),null!=t.tour.payment_mode?a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Payment By")]),t._v(" "),a("p",[t._v(t._s(t.tour.payment_mode))])]):t._e(),t._v(" "),null!=t.tour.payment_type?a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Payment Type")]),t._v(" "),a("p",[t._v(t._s(t.tour.payment_type))])]):t._e(),t._v(" "),null!=t.tour.fsc_code?a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("IFSC Code")]),t._v(" "),a("p",[t._v(t._s(t.tour.ifsc_code))])]):t._e(),t._v(" "),null!=t.tour.cheque_bank_name?a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Cheque Bank Name")]),t._v(" "),a("p",[t._v(t._s(t.tour.cheque_bank_name))])]):t._e(),t._v(" "),null!=t.tour.date_of_issue?a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Date of Issue")]),t._v(" "),a("p",[t._v(t._s(t.tour.date_of_issue))])]):t._e(),t._v(" "),null!=t.tour.status?a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Status")]),t._v(" "),a("p",[t._v(t._s(t.tour.status))])]):t._e(),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Added At")]),t._v(" "),a("p",[t._v(t._s(t.tour.created_at))])]),t._v(" "),t.tour.payment_data?a("div",{staticClass:"col-sm-4"},["net"==t.tour.payment_type?a("h5",[a("button",{staticClass:"btn btn-info text-white",on:{click:function(s){t.show_json=!t.show_json}}},[t._v("\n            Payment Details\n          ")])]):t._e()]):t._e()]):t._e(),t._v(" "),t.show_json?a("div",{staticClass:"row pl-4"},[a("table",[a("tbody",t._l(t.tour.payment_data,(function(s,o,e){return a("tr",{key:e},[a("td",[a("p",{staticClass:"mr-5"},[a("b",[t._v(t._s(o)+" : ")]),t._v(" "),a("i",[t._v(t._s(s)+" ")])])])])})),0)])]):t._e()]},proxy:!0}])})}),[],!1,null,null,null);s.default=n.exports}}]);