(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{12:function(t,e,i){"use strict";i(39);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var n={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},selectedId:void 0,value:{},placeholder:{type:String,default:"Enter name to search"}},data:function(){var t;return o(t={selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1},"selectedItem",""),o(t,"edit_flag",!1),t},watch:{selectedItem:function(){this.optionChanged()}},mounted:function(){document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},getSelected:function(){if(null!=this.itemList&&0==this.edit_flag)for(var t=0;t<this.itemList.length;t++)this.itemList[t].id==this.selectedId&&(this.selectedItem=this.itemList[t],this.inputValue=this.itemList[t].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("update:option",this.selectedItem)},closeEvent:function(){this.showlist&&(this.showlist=!1,this.arrowCounter=0)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.inputValue="",this.$emit("on-item-selected",t),this.showlist=!1},itemVisible:function(t){var e=t.name.toLowerCase(),i=this.inputValue.toLowerCase();return e.includes(i)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}},r=i(0),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.itemList?i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):i("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),i("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),null!=t.selectedId?i("span",[t._v(t._s(t.getSelected()))]):t._e(),t._v(" "),1==t.showlist&&null==t.selectedId?i("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[i("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,o){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===o},on:{click:function(i){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)]):t._e()]):t._e()}),[],!1,null,null,null);e.a=s.exports},17:function(t,e,i){"use strict";var o={name:"SubmitButtonGBI",data:function(){return{}}},n=i(0),r=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[this._t("default",[this._v("submit")])],2)}),[],!1,null,null,null);e.a=r.exports},19:function(t,e,i){"use strict";var o={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}},n=i(0),r=Object(n.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[t.url?i("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):i("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);e.a=r.exports},257:function(t,e,i){"use strict";i.r(e);var o=i(1),n=i(4),r=i(3),s=i(12),a={name:"ListNewHOtels",components:{Form:o.Form,"has-error":o.HasError,"form-buttons":n.a,"form-layout":r.a,"dropdown-filter":s.a},data:function(){return{row_input:"",hotel_list:[],tour:"",form:new o.Form({tour_id:"",tour_code:"",hotel_id:"",check_in:"",check_out:"",price:""})}},created:function(){this.hotelData(),this.tourData()},methods:{hotelData:function(){var t=this;axios.get("/api/hotel").then((function(e){if(e)for(var i=0;i<e.data.length;i++)t.hotel_list.push({name:e.data[i].name,id:e.data[i].id})}))},UpdatedItem:function(t){this.form.hotel_id=t.id},tourData:function(){var t=this;axios.get("/api/tour/".concat(this.$route.params.id,"/edit")).then((function(e){t.tour=e.data}))},addHotel:function(){var t=this;this.form.tour_id=this.$route.params.id,this.form.tour_code=this.tour.tour_id,this.form.post("/api/bookedhotels").then((function(e){if(1==e.data)return t.$toast.fire({icon:"error",title:"Tour Manager already going on this tour !!!"}),!1;t.$toast.fire({icon:"success",title:"Hotel Added successfully"})})).catch((function(){}))},goBack:function(){this.$router.push("/booked-tour/".concat(this.$route.params.id))}}},c=i(0),l=Object(c.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[i("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addHotel()}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"name"}},[t._v("Hotel Name")]),t._v(" "),i("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.hotel_list},on:{"update:option":t.UpdatedItem}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"check_in"}},[t._v("Check In")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.check_in,expression:"form.check_in"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("check_in")},attrs:{type:"datetime-local",placeholder:"Enter Salary Per Day",name:"check_in"},domProps:{value:t.form.check_in},on:{input:function(e){e.target.composing||t.$set(t.form,"check_in",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"check_in"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"check_out"}},[t._v("Check Out")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.check_out,expression:"form.check_out"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("check_out")},attrs:{type:"datetime-local",placeholder:"Enter check Out",name:"check_out"},domProps:{value:t.form.check_out},on:{input:function(e){e.target.composing||t.$set(t.form,"check_out",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"check_out"}})],1)])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"price"}},[t._v("Price")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("price")},attrs:{type:"number",placeholder:"Enter Price"},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"price"}})],1)])]),t._v(" "),i("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=l.exports},3:function(t,e,i){"use strict";var o={name:"FromLayoutGBI",data:function(){return{}}},n=i(0),r=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-around"},[e("div",{staticClass:"col-md-12 pl-4 pb-5"},[this._t("formdata")],2)])])])}),[],!1,null,null,null);e.a=r.exports},39:function(t,e,i){"use strict";var o=i(14);i.n(o).a.directive("click-outside",{bind:function(t,e,i){window.event=function(o){t==o.target||t.contains(o.target)||i.context[e.expression](o)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},4:function(t,e,i){"use strict";var o=i(19),n=i(17),r={name:"FormButtonGBI",components:{"back-button":o.a,"submit-button":n.a}},s=i(0),a=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-9 text-center"},[e("back-button"),this._v(" "),e("submit-button")],1)])}),[],!1,null,null,null);e.a=a.exports}}]);