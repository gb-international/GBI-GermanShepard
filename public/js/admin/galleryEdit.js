(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{15:function(t,e,i){"use strict";i(39);var s={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},value:{},placeholder:{type:String,default:"Enter name to search"}},data:function(){return{selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1,edit_flag:!1,content:this.value}},watch:{itemList:function(){this.itemList.length>0&&this.getSelected(this.content)}},created:function(){this.value&&this.getSelected(this.value),document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},closeEvent:function(){this.showlist&&(this.edit_flag=!1,this.getSelected(this.content),this.showlist=!1,this.arrowCounter=0)},getSelected:function(t){if(null!=this.itemList&&0==this.edit_flag)for(var e=0;e<this.itemList.length;e++)this.itemList[e].id==t&&(this.selectedItem=this.itemList[e],this.inputValue=this.itemList[e].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("input",this.selectedItem.id)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.content=t.id,this.$emit("input",this.content),this.inputValue="",this.showlist=!1,this.$emit("change",t.id)},itemVisible:function(t){var e=t.name.toLowerCase(),i=this.inputValue.toLowerCase();return e.includes(i)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}},o=i(0),n=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.itemList?i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):i("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),i("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),1==t.showlist?i("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[i("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,s){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===s},on:{click:function(i){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[i("label",[i("input",{staticClass:"d-none",attrs:{type:"checkbox"},domProps:{value:e.id}}),t._v(t._s(e.name))])])})),0)]):t._e()]):t._e()}),[],!1,null,null,null);e.a=n.exports},17:function(t,e,i){"use strict";var s={name:"SubmitButtonGBI",data:function(){return{}}},o=i(0),n=Object(o.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[this._t("default",[this._v("submit")])],2)}),[],!1,null,null,null);e.a=n.exports},19:function(t,e,i){"use strict";var s={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}},o=i(0),n=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[t.url?i("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):i("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);e.a=n.exports},275:function(t,e,i){"use strict";i.r(e);var s=i(1),o=i(4),n=i(3),a=i(15),r={name:"EditGallery",components:{Form:s.Form,"has-error":s.HasError,"form-buttons":o.a,"form-layout":n.a,"dropdown-list":a.a},data:function(){return{options:[],schools:[],images:[],categories:[{name:"Domestic",id:"domestic"},{name:"International",id:"international"}],form:new s.Form({category:"",title:"",school_id:"",images:[]})}},mounted:function(){this.getGalleryList(),this.getSchools()},methods:{getGalleryList:function(){var t=this;axios.get("/api/gallery/".concat(this.$route.params.id,"/edit")).then((function(e){setTimeout((function(){return $("#example").DataTable()}),1e3),t.form.fill(e.data),t.form.school_id=parseInt(e.data.school_id),t.form.images=[],t.images=e.data.images}))},getSchools:function(){var t=this;axios.get("/api/school").then((function(e){for(var i=0;i<e.data.length;i++)t.schools.push({id:e.data[i].id,name:e.data[i].school_name})}))},UpdateCategory:function(t){this.form.category=t.id},updateSchool:function(t){this.form.school_id=t.id},updateGallery:function(){var t=this;this.form.put("/api/gallery/".concat(this.$route.params.id)).then((function(e){t.getGalleryList(),t.$swal.fire({icon:"success",title:"Successfully Updated"})})).catch((function(){}))},changePhoto:function(t){for(var e=this,i=function(){var i=t.target.files[s],o=new FileReader;o.onload=function(t){e.form.images.push({name:i.name,file:t.target.result})},o.readAsDataURL(i)},s=0;s<t.target.files.length;s++)i()},deleteImage:function(t){var e=this,i={id:t};axios.post("/api/gallery-img-delete",i).then((function(t){e.getGalleryList()}))},back:function(){this.$router.push("/gallery")}}},l=i(0),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[i("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.updateGallery()}}},[t.form.title?i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"category"}},[t._v("Gallery Category")]),t._v(" "),i("dropdown-list",{staticClass:"mb-2",attrs:{itemList:t.categories},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"category"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-8"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"category"}},[t._v("Gallery Title")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"form-control",attrs:{type:"text",options:t.options,placeholder:"Select Itinerary"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"title"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-8"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"category"}},[t._v("School")]),t._v(" "),i("dropdown-list",{staticClass:"mb-2",attrs:{itemList:t.schools},model:{value:t.form.school_id,callback:function(e){t.$set(t.form,"school_id",e)},expression:"form.school_id"}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"school_id"}})],1)])]):t._e(),t._v(" "),i("div",{staticClass:"row img-card-delete-icon"},t._l(t.images,(function(e){return i("div",{key:e.id,staticClass:"col-sm-4 position-relative"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("img",{staticClass:"w-100",attrs:{src:""+e.path}})])]),t._v(" "),i("span",{staticClass:"badge badge-danger position-absolute cursor-pointer",on:{click:function(i){return t.deleteImage(e.id)}}},[i("i",{staticClass:"far fa-trash-alt",attrs:{"aria-hidden":"true"}})])])})),0),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"images"}},[t._v("Select Multiple Images")]),t._v(" "),i("input",{ref:"attachments",staticClass:"form-control w-100",attrs:{type:"file",multiple:"multiple"},on:{change:t.changePhoto}})])])]),t._v(" "),i("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=c.exports},3:function(t,e,i){"use strict";var s={name:"FromLayoutGBI",data:function(){return{}}},o=i(0),n=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-around"},[e("div",{staticClass:"col-md-12 pl-4 pb-5"},[this._t("formdata")],2)])])])}),[],!1,null,null,null);e.a=n.exports},39:function(t,e,i){"use strict";var s=i(14);i.n(s).a.directive("click-outside",{bind:function(t,e,i){window.event=function(s){t==s.target||t.contains(s.target)||i.context[e.expression](s)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},4:function(t,e,i){"use strict";var s=i(19),o=i(17),n={name:"FormButtonGBI",components:{"back-button":s.a,"submit-button":o.a}},a=i(0),r=Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-9 text-center"},[e("back-button"),this._v(" "),e("submit-button")],1)])}),[],!1,null,null,null);e.a=r.exports}}]);