(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{12:function(t,e,o){"use strict";o(39);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var n={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},selectedId:void 0,value:{},placeholder:{type:String,default:"Enter name to search"}},data:function(){var t;return i(t={selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1},"selectedItem",""),i(t,"edit_flag",!1),t},watch:{selectedItem:function(){this.optionChanged()}},mounted:function(){document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},getSelected:function(){if(null!=this.itemList&&0==this.edit_flag)for(var t=0;t<this.itemList.length;t++)this.itemList[t].id==this.selectedId&&(this.selectedItem=this.itemList[t],this.inputValue=this.itemList[t].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("update:option",this.selectedItem)},closeEvent:function(){this.showlist&&(this.showlist=!1,this.arrowCounter=0)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.inputValue="",this.$emit("on-item-selected",t),this.showlist=!1},itemVisible:function(t){var e=t.name.toLowerCase(),o=this.inputValue.toLowerCase();return e.includes(o)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}},s=o(0),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.itemList?o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):o("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),o("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),null!=t.selectedId?o("span",[t._v(t._s(t.getSelected()))]):t._e(),t._v(" "),1==t.showlist&&null==t.selectedId?o("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[o("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,i){return o("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===i},on:{click:function(o){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)]):t._e()]):t._e()}),[],!1,null,null,null);e.a=r.exports},17:function(t,e,o){"use strict";var i={name:"SubmitButtonGBI",data:function(){return{}}},n=o(0),s=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[this._t("default",[this._v("submit")])],2)}),[],!1,null,null,null);e.a=s.exports},19:function(t,e,o){"use strict";var i={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}},n=o(0),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[t.url?o("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):o("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);e.a=s.exports},274:function(t,e,o){"use strict";o.r(e);var i=o(1),n=o(4),s=o(3),r=o(12),a={name:"NewGallery",components:{Form:i.Form,"has-error":i.HasError,"form-buttons":n.a,"form-layout":s.a,FormButtons:n.a,"dropdown-filter":r.a},data:function(){return{options:[],categories:[{name:"Domestic",id:"domestic"},{name:"International",id:"international"}],schools:[],form:new i.Form({category:"",title:"",school_id:"",images:[]})}},mounted:function(){this.getSchools()},methods:{getSchools:function(){var t=this;axios.get("/api/school").then((function(e){for(var o=0;o<e.data.length;o++)t.schools.push({name:e.data[o].school_name,id:e.data[o].id})}))},UpdateCategory:function(t){this.form.category=t.id},updateSchool:function(t){this.form.school_id=t.id},changePhoto:function(t){for(var e=this,o=function(){var o=t.target.files[i],n=new FileReader;n.onload=function(t){e.form.images.push({name:o.name,file:t.target.result})},n.readAsDataURL(o)},i=0;i<t.target.files.length;i++)o()},AddPost:function(){var t=this;this.form.post("/api/gallery").then((function(e){t.form.reset(),t.$router.push("/gallery"),t.$toast.fire({icon:"success",title:"Gallery Added successfully"})})).catch((function(){}))}}},l=o(0),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[o("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.AddPost()}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"category"}},[t._v("Gallery Category")]),t._v(" "),o("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.categories},on:{"update:option":t.UpdateCategory}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"category"}})],1)]),t._v(" "),o("div",{staticClass:"col-sm-8"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"title"}},[t._v("Gallery Title")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Tour to Surat"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"title"}})],1)]),t._v(" "),o("div",{staticClass:"col-sm-8"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"category"}},[t._v("School")]),t._v(" "),o("dropdown-filter",{staticClass:"mb-2",attrs:{itemList:t.schools},on:{"update:option":t.updateSchool}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"school_id"}})],1)])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-4"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"images"}},[t._v("Select Multiple Images")]),t._v(" "),o("input",{ref:"attachments",staticClass:"form-control w-100",attrs:{type:"file",multiple:"multiple"},on:{change:t.changePhoto}})])])]),t._v(" "),o("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=c.exports},3:function(t,e,o){"use strict";var i={name:"FromLayoutGBI",data:function(){return{}}},n=o(0),s=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-around"},[e("div",{staticClass:"col-md-12 pl-4 pb-5"},[this._t("formdata")],2)])])])}),[],!1,null,null,null);e.a=s.exports},39:function(t,e,o){"use strict";var i=o(14);o.n(i).a.directive("click-outside",{bind:function(t,e,o){window.event=function(i){t==i.target||t.contains(i.target)||o.context[e.expression](i)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},4:function(t,e,o){"use strict";var i=o(19),n=o(17),s={name:"FormButtonGBI",components:{"back-button":i.a,"submit-button":n.a}},r=o(0),a=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-9 text-center"},[e("back-button"),this._v(" "),e("submit-button")],1)])}),[],!1,null,null,null);e.a=a.exports}}]);