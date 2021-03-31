(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{12:function(t,e,n){"use strict";n(39);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},selectedId:void 0,value:{},placeholder:{type:String,default:"Enter name to search"}},data:function(){var t;return i(t={selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1},"selectedItem",""),i(t,"edit_flag",!1),t},watch:{selectedItem:function(){this.optionChanged()}},mounted:function(){document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},getSelected:function(){if(null!=this.itemList&&0==this.edit_flag)for(var t=0;t<this.itemList.length;t++)this.itemList[t].id==this.selectedId&&(this.selectedItem=this.itemList[t],this.inputValue=this.itemList[t].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("update:option",this.selectedItem)},closeEvent:function(){this.showlist&&(this.showlist=!1,this.arrowCounter=0)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.inputValue="",this.$emit("on-item-selected",t),this.showlist=!1},itemVisible:function(t){var e=t.name.toLowerCase(),n=this.inputValue.toLowerCase();return e.includes(n)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}},s=n(0),r=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.itemList?n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):n("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),n("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),null!=t.selectedId?n("span",[t._v(t._s(t.getSelected()))]):t._e(),t._v(" "),1==t.showlist&&null==t.selectedId?n("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[n("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,i){return n("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===i},on:{click:function(n){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)]):t._e()]):t._e()}),[],!1,null,null,null);e.a=r.exports},17:function(t,e,n){"use strict";var i={name:"SubmitButtonGBI",data:function(){return{}}},o=n(0),s=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[this._t("default",[this._v("submit")])],2)}),[],!1,null,null,null);e.a=s.exports},19:function(t,e,n){"use strict";var i={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}},o=n(0),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.url?n("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):n("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);e.a=s.exports},3:function(t,e,n){"use strict";var i={name:"FromLayoutGBI",data:function(){return{}}},o=n(0),s=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-around"},[e("div",{staticClass:"col-md-12 pl-4 pb-5"},[this._t("formdata")],2)])])])}),[],!1,null,null,null);e.a=s.exports},304:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n(4),s=n(3),r=n(12),a={name:"NewCity",components:{Form:i.Form,"has-error":i.HasError,"form-buttons":o.a,"form-layout":s.a,"dropdown-filter":r.a},data:function(){return{state_list:[],options:[],country_name:0,form:new i.Form({country_id:"",state_id:"",name:""})}},watch:{"form.country_id":function(){this.stateList(this.form.country_id)}},mounted:function(){this.countryList()},methods:{countryList:function(){var t=this;axios.get("/api/country").then((function(e){if(e.data)for(var n=0;n<e.data.length;n++)t.options.push({name:e.data[n].name,id:e.data[n].id})}))},stateList:function(t){var e=this;axios.get("/api/country-state/"+t).then((function(t){if(t.data){e.state_list=[];for(var n=0;n<t.data.length;n++)e.state_list.push({name:t.data[n].name,id:t.data[n].id})}}))},AddCity:function(){var t=this;this.form.post("/api/city").then((function(e){t.form.name="",t.$toast.fire({icon:"success",title:"Successfully Updated !!!"})})).catch((function(e){422===e.response.status&&(t.errors=e.response.data.errors||{})}))},CountryUpdate:function(t){this.form.country_id=t.id},StateUpdate:function(t){this.form.state_id=t.id}}},c=n(0),l=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[n("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.AddCity()}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"country_id"}},[t._v("Country name")]),t._v(" "),n("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.options},on:{"update:option":t.CountryUpdate}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"country_id"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"state_id"}},[t._v("State name")]),t._v(" "),n("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.state_list},on:{"update:option":t.StateUpdate}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"state_id"}})],1)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("City Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:"Enter City Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),n("has-error",{attrs:{form:t.form,field:"name"}})],1)])]),t._v(" "),n("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=l.exports},39:function(t,e,n){"use strict";var i=n(14);n.n(i).a.directive("click-outside",{bind:function(t,e,n){window.event=function(i){t==i.target||t.contains(i.target)||n.context[e.expression](i)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},4:function(t,e,n){"use strict";var i=n(19),o=n(17),s={name:"FormButtonGBI",components:{"back-button":i.a,"submit-button":o.a}},r=n(0),a=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-9 text-center"},[e("back-button"),this._v(" "),e("submit-button")],1)])}),[],!1,null,null,null);e.a=a.exports}}]);