(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{12:function(t,a,s){"use strict";var e={components:{"back-button":s(17).a},props:["backurl"]},n=s(0),i=Object(n.a)(e,(function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"content"},[a("div",{staticClass:"row pt-3 pb-4"},[a("div",{staticClass:"col-sm-12 card_view"},[this._t("viewdata"),this._v(" "),a("div",{staticClass:"text-center"},[a("back-button",{attrs:{url:this.backurl}})],1)],2)])])}),[],!1,null,null,null);a.a=i.exports},17:function(t,a,s){"use strict";var e={props:["url"],methods:{goBack:function(){this.$router.back()}}},n=s(0),i=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",[t.url?s("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{to:t.url},on:{click:function(a){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):s("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{type:"button"},on:{click:function(a){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);a.a=i.exports},267:function(t,a,s){"use strict";s.r(a);var e={name:"View",components:{"view-layout":s(12).a},data:function(){return{client_view:[]}},mounted:function(){this.$store.dispatch("getEditData","/api/escort/".concat(this.$route.params.id))},computed:{viewData:function(){return this.$store.getters.getEditData}}},n=s(0),i=Object(n.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view-layout",{attrs:{backurl:"/escort-list"},scopedSlots:t._u([{key:"viewdata",fn:function(){return[s("div",{staticClass:"row pl-3"},[s("div",{staticClass:"col-sm-3"},[s("h5",[t._v("Name")]),t._v(" "),s("p",[t._v(t._s(t.viewData.name))])]),t._v(" "),s("div",{staticClass:"col-sm-3"},[s("h5",[t._v("Email")]),t._v(" "),s("p",[t._v(t._s(t.viewData.email))])]),t._v(" "),s("div",{staticClass:"col-sm-3"},[s("h5",[t._v("Phone Number")]),t._v(" "),s("p",[t._v(t._s(t.viewData.phoneno))])]),t._v(" "),s("div",{staticClass:"col-sm-3"},[s("h5",[t._v("Salary Per Day")]),t._v(" "),s("p",[t._v(t._s(t.viewData.salaryPerday)+"/-")])]),t._v(" "),s("div",{staticClass:"col-sm-3"},[s("h5",[t._v("Address")]),t._v(" "),s("p",[t._v(t._s(t.viewData.address))])])])]},proxy:!0}])})}),[],!1,null,null,null);a.default=i.exports}}]);