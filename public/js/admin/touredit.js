(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{15:function(t,e,r){"use strict";r(39);var o={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},value:{},placeholder:{type:String,default:"Enter name to search"}},data:function(){return{selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1,edit_flag:!1,content:this.value}},watch:{itemList:function(){this.itemList.length>0&&this.getSelected(this.content)}},created:function(){this.value&&this.getSelected(this.value),document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},closeEvent:function(){this.showlist&&(this.edit_flag=!1,this.getSelected(this.content),this.showlist=!1,this.arrowCounter=0)},getSelected:function(t){if(null!=this.itemList&&0==this.edit_flag)for(var e=0;e<this.itemList.length;e++)this.itemList[e].id==t&&(this.selectedItem=this.itemList[e],this.inputValue=this.itemList[e].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("input",this.selectedItem.id)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.content=t.id,this.$emit("input",this.content),this.inputValue="",this.showlist=!1,this.$emit("change",t.id)},itemVisible:function(t){var e=t.name.toLowerCase(),r=this.inputValue.toLowerCase();return e.includes(r)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}},i=r(0),s=Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.itemList?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):r("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),r("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),1==t.showlist?r("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[r("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,o){return r("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===o},on:{click:function(r){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[r("label",[r("input",{staticClass:"d-none",attrs:{type:"checkbox"},domProps:{value:e.id}}),t._v(t._s(e.name))])])})),0)]):t._e()]):t._e()}),[],!1,null,null,null);e.a=s.exports},17:function(t,e,r){"use strict";var o={name:"SubmitButtonGBI",data:function(){return{}}},i=r(0),s=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[this._t("default",[this._v("submit")])],2)}),[],!1,null,null,null);e.a=s.exports},19:function(t,e,r){"use strict";var o={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}},i=r(0),s=Object(i.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[t.url?r("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):r("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);e.a=s.exports},3:function(t,e,r){"use strict";var o={name:"FromLayoutGBI",data:function(){return{}}},i=r(0),s=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-around"},[e("div",{staticClass:"col-md-12 pl-4 pb-5"},[this._t("formdata")],2)])])])}),[],!1,null,null,null);e.a=s.exports},331:function(t,e,r){"use strict";r.r(e);var o=r(1),i=r(4),s=r(3),a=r(15),n={name:"EditTour",components:{Form:o.Form,"has-error":o.HasError,"form-buttons":i.a,"form-layout":s.a,"dropdown-filter":a.a},data:function(){return{itinerary_list:[],school_list:[],tours:[],form:new o.Form({tour_id:"",travel_code:"",itinerary_id:"",school_id:"",tour_start_date:"",tour_end_date:"",tour_price:""})}},created:function(){this.tourData(),this.schoolData(),this.itineraryData()},methods:{tourData:function(){var t=this;axios.get("/api/tour/".concat(this.$route.params.id,"/edit")).then((function(e){t.form.fill(e.data)}))},schoolData:function(){var t=this;axios.get("/api/school").then((function(e){if(e.data)for(var r=0;r<e.data.length;r++)t.school_list.push({name:e.data[r].school_name,id:e.data[r].id})}))},itineraryData:function(){var t=this;axios.get("/api/itinerary").then((function(e){if(e.data)for(var r=0;r<e.data.length;r++)t.itinerary_list.push({name:e.data[r].title,id:e.data[r].id})}))},UpdateTour:function(){var t=this;this.form.put("/api/tour/".concat(this.$route.params.id)).then((function(e){t.$toast.fire({icon:"success",title:"Successfully Updated"})})).catch((function(){}))},schoolUpdate:function(t){this.form.school_id=t.id},itineraryUpdate:function(t){this.form.itinerary_id=t.id}}},l=r(0),c=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[r("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.UpdateTour()}}},[t.form.tour_id?r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-4 d-hidden"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tour_id"}},[t._v("Tour Code")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tour_id,expression:"form.tour_id"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("tour_id")},attrs:{type:"text",readonly:"",placeholder:"Enter School name"},domProps:{value:t.form.tour_id},on:{input:function(e){e.target.composing||t.$set(t.form,"tour_id",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"tour_id"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"travel_code"}},[t._v("School Travel Code")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.travel_code,expression:"form.travel_code"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("travel_code")},attrs:{type:"text",placeholder:"Enter Travel Code to share with school"},domProps:{value:t.form.travel_code},on:{input:function(e){e.target.composing||t.$set(t.form,"travel_code",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"travel_code"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"itinerary_id"}},[t._v("Itinerary")]),t._v(" "),r("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.itinerary_list},model:{value:t.form.itinerary_id,callback:function(e){t.$set(t.form,"itinerary_id",e)},expression:"form.itinerary_id"}}),t._v(" "),t.form.errors.has("itinerary_id")?r("div",{staticClass:"error"},[r("label",{staticClass:"danger text-danger"},[t._v(t._s(t.form.errors.get("itinerary_id")))])]):t._e()],1)]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"itinerary_id"}},[t._v("School")]),t._v(" "),r("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.school_list},model:{value:t.form.school_id,callback:function(e){t.$set(t.form,"school_id",e)},expression:"form.school_id"}}),t._v(" "),t.form.errors.has("school_id")?r("div",{staticClass:"error"},[r("label",{staticClass:"danger text-danger"},[t._v(t._s(t.form.errors.get("school_id")))])]):t._e()],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tour_start_date"}},[t._v("Tour Start Date")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tour_start_date,expression:"form.tour_start_date"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("tour_start_date")},attrs:{type:"date",placeholder:"Enter Tour Start Date"},domProps:{value:t.form.tour_start_date},on:{input:function(e){e.target.composing||t.$set(t.form,"tour_start_date",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"tour_start_date"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tour_end_date"}},[t._v("Tour End Date")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tour_end_date,expression:"form.tour_end_date"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("tour_end_date")},attrs:{type:"date",placeholder:"Enter Enter Date"},domProps:{value:t.form.tour_end_date},on:{input:function(e){e.target.composing||t.$set(t.form,"tour_end_date",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"tour_end_date"}})],1)]),t._v(" "),r("div",{staticClass:"col-sm-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tour_price"}},[t._v("Tour Price")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tour_price,expression:"form.tour_price"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("tour_price")},attrs:{type:"text",placeholder:"Enter Tour Price"},domProps:{value:t.form.tour_price},on:{input:function(e){e.target.composing||t.$set(t.form,"tour_price",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"tour_price"}})],1)])]):t._e(),t._v(" "),r("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=c.exports},39:function(t,e,r){"use strict";var o=r(14);r.n(o).a.directive("click-outside",{bind:function(t,e,r){window.event=function(o){t==o.target||t.contains(o.target)||r.context[e.expression](o)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},4:function(t,e,r){"use strict";var o=r(19),i=r(17),s={name:"FormButtonGBI",components:{"back-button":o.a,"submit-button":i.a}},a=r(0),n=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-9 text-center"},[e("back-button"),this._v(" "),e("submit-button")],1)])}),[],!1,null,null,null);e.a=n.exports}}]);