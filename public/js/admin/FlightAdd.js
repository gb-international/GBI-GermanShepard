(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{15:function(t,e,o){"use strict";var r=o(0),n=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold"},[this._t("default",[this._v("submit")])],2)}),[],!1,null,null,null);e.a=n.exports},17:function(t,e,o){"use strict";var r={props:["url"],methods:{goBack:function(){this.$router.back()}}},n=o(0),a=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[t.url?o("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):o("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);e.a=a.exports},3:function(t,e,o){"use strict";var r=o(0),n=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-around"},[e("div",{staticClass:"col-md-12 pl-4 pb-5"},[this._t("formdata")],2)])])])}),[],!1,null,null,null);e.a=n.exports},346:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(4),a=o(3),s={name:"New",components:{Form:r.Form,"has-error":r.HasError,"form-buttons":n.a,"form-layout":a.a},data:function(){return{form:new r.Form({code:"",name:""})}},methods:{AddSchool:function(){var t=this;this.form.post("/api/flight").then((function(e){t.$toast.fire({icon:"success",title:"Flight Added successfully"})})).catch((function(){}))}}},i=o(0),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[o("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.AddSchool()}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"code"}},[t._v("Flight Code")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.code,expression:"form.code"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("code")},attrs:{type:"text",placeholder:"Enter Flight Number"},domProps:{value:t.form.code},on:{input:function(e){e.target.composing||t.$set(t.form,"code",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"code"}})],1)]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"name"}},[t._v("Flight Name ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:"Enter Flight Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"name"}})],1)])]),t._v(" "),o("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=c.exports},4:function(t,e,o){"use strict";var r=o(17),n=o(15),a={components:{"back-button":r.a,"submit-button":n.a}},s=o(0),i=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-8"},[e("back-button"),this._v(" "),e("submit-button")],1)])}),[],!1,null,null,null);e.a=i.exports}}]);