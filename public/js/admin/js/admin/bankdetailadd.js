"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4315],{2347:(t,e,n)=>{n(70538).default.directive("click-outside",{bind:function(t,e,n){window.event=function(o){t==o.target||t.contains(o.target)||n.context[e.expression](o)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},20947:(t,e,n)=>{n.d(e,{Z:()=>s});const o={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}};const s=(0,n(51900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.url?n("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):n("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null).exports},53116:(t,e,n)=>{n.d(e,{Z:()=>s});const o={name:"SubmitButtonGBI",data:function(){return{}}};const s=(0,n(51900).Z)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[t._t("default",[t._v("submit")])],2)}),[],!1,null,null,null).exports},79577:(t,e,n)=>{n.d(e,{Z:()=>i});n(2347);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const s={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},selectedId:void 0,value:{},placeholder:{type:String,default:"Type to search"}},data:function(){var t;return o(t={selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1},"selectedItem",""),o(t,"edit_flag",!1),t},watch:{selectedItem:function(){this.optionChanged()}},mounted:function(){document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},getSelected:function(){if(null!=this.itemList&&0==this.edit_flag)for(var t=0;t<this.itemList.length;t++)this.itemList[t].id==this.selectedId&&(this.selectedItem=this.itemList[t],this.inputValue=this.itemList[t].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("update:option",this.selectedItem)},closeEvent:function(){this.showlist&&(this.showlist=!1,this.arrowCounter=0)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.inputValue="",this.$emit("on-item-selected",t),this.showlist=!1},itemVisible:function(t){var e=t.name.toLowerCase(),n=this.inputValue.toLowerCase();return e.includes(n)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}};const i=(0,n(51900).Z)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.itemList?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):n("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),n("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),null!=t.selectedId?n("span",[t._v(t._s(t.getSelected()))]):t._e(),t._v(" "),1==t.showlist&&null==t.selectedId?n("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[n("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,o){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===o},on:{click:function(n){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)]):t._e()]):t._e()}),[],!1,null,null,null).exports},85516:(t,e,n)=>{n.d(e,{Z:()=>s});const o={name:"FromLayoutGBI",data:function(){return{}}};const s=(0,n(51900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row justify-content-around"},[n("div",{staticClass:"col-md-12 pl-4 pb-5",staticStyle:{position:"relative"}},[t._t("formdata")],2)])])])}),[],!1,null,null,null).exports},89247:(t,e,n)=>{n.r(e),n.d(e,{default:()=>l});var o=n(50175),s=n(20947),i=n(53116),r=n(85516),a=n(79577);const c={name:"NewBankDetail",components:{Form:o.Form,"has-error":o.HasError,"back-button":s.Z,"submit-button":i.Z,"form-layout":r.Z,"dropdown-filter":a.Z},data:function(){return{banknames:[],account_type:[{name:"Current Account",id:"Current Account"},{name:"Saving Account",id:"Saving Account"},{name:"Recurring Deposit Account",id:"Recurring Deposit Account"},{name:"Fixed Deposit Account",id:"Fixed Deposit Account"}],form:new o.Form({name:"",bank_name:"",account_number:"",account_type:"",ifsc_code:""})}},mounted:function(){this.bankNameList()},methods:{addEscort:function(){var t=this;this.form.post("/api/schoolbankdetails").then((function(e){t.$router.push("/schoolbankdetails"),t.$toast.fire({icon:"success",title:"Bank Details Added successfully"})})).catch((function(){}))},bankNameList:function(){var t=this;axios.get("/api/banknames").then((function(e){if(e.data)for(var n=0;n<e.data.length;n++)t.banknames.push({name:e.data[n].name,id:e.data[n].id})}))},UpdateBank:function(t){this.form.bank_name=t.name},updateAccountType:function(t){this.form.account_type=t.name}}};const l=(0,n(51900).Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[n("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addEscort()}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name",placeholder:"Enter Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"bank_name"}},[t._v("Bank Name")]),t._v(" "),n("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.banknames},on:{"update:option":t.UpdateBank}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"bank_name"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"account_number"}},[t._v("Account Number")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.account_number,expression:"form.account_number"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("account_number")},attrs:{type:"number",placeholder:"Enter Account Number",name:"account_number"},domProps:{value:t.form.account_number},on:{input:function(e){e.target.composing||t.$set(t.form,"account_number",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"account_number"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"account_type"}},[t._v("Account Type")]),t._v(" "),n("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.account_type},on:{"update:option":t.updateAccountType}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"account_type"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"ifsc_code"}},[t._v("IFSC Code")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.ifsc_code,expression:"form.ifsc_code"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("ifsc_code")},attrs:{type:"text",placeholder:"Enter IFSC Code",name:"ifsc_code"},domProps:{value:t.form.ifsc_code},on:{input:function(e){e.target.composing||t.$set(t.form,"ifsc_code",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"ifsc_code"}})],1)])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-2"}),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("back-button",{attrs:{url:"/schoolbankdetails"}})],1),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group text-center"},[n("submit-button")],1)]),t._v(" "),n("div",{staticClass:"col-sm-2"})])])]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);