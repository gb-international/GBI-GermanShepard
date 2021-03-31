(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{15:function(t,e,i){"use strict";i(39);var a={name:"DropDownFilter",props:{itemList:{type:Array,required:!0},value:{},placeholder:{type:String,default:"Enter name to search"}},data:function(){return{selectedItem:{},arrowCounter:0,inputValue:"",apiLoaded:!1,showlist:!1,edit_flag:!1,content:this.value}},watch:{itemList:function(){this.itemList.length>0&&this.getSelected(this.content)}},created:function(){this.value&&this.getSelected(this.value),document.addEventListener("keyup",this.nextItem)},methods:{nextItem:function(t){t.preventDefault(),38==t.keyCode&&this.arrowCounter>1?(this.arrowCounter--,this.fixScrolling()):40==t.keyCode&&this.arrowCounter<this.itemList.length-1&&(this.arrowCounter++,this.fixScrolling())},fixScrolling:function(){if(this.showlist){if(this.$refs.options[this.arrowCounter])var t=this.$refs.options[this.arrowCounter].clientHeight;this.$refs.scrollContainer&&(this.$refs.scrollContainer.scrollTop=t*this.arrowCounter)}},closeEvent:function(){this.showlist&&(this.edit_flag=!1,this.getSelected(this.content),this.showlist=!1,this.arrowCounter=0)},getSelected:function(t){if(null!=this.itemList&&0==this.edit_flag)for(var e=0;e<this.itemList.length;e++)this.itemList[e].id==t&&(this.selectedItem=this.itemList[e],this.inputValue=this.itemList[e].name,this.edit_flag=!0)},showToggle:function(){this.showlist=!this.showlist},optionChanged:function(){this.$emit("input",this.selectedItem.id)},resetSelection:function(){var t=this;this.selectedItem={},this.inputValue="",this.showlist=!0,this.$nextTick((function(){return t.$refs.dropdowninput.focus()})),this.$emit("on-item-reset")},remodeReadOnlyError:function(){$(".dropdown-input").attr("readonly",!1)},selectItem:function(t){this.selectedItem=t,this.content=t.id,this.$emit("input",this.content),this.inputValue="",this.showlist=!1,this.$emit("change",t.id)},itemVisible:function(t){var e=t.name.toLowerCase(),i=this.inputValue.toLowerCase();return e.includes(i)}},destroyed:function(){document.removeEventListener("keyup",this.nextItem)}},s=i(0),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.itemList?i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeEvent,expression:"closeEvent"}],staticClass:"dropdown-field"},[0===Object.keys(t.selectedItem).length?i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"dropdowninput",staticClass:"form-control dropdown-input",attrs:{type:"text",placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.showlist=!0},click:function(e){return t.remodeReadOnlyError()},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}):i("div",{staticClass:"dropdown-selected",on:{click:t.resetSelection}},[t._v("\n    "+t._s(t.selectedItem.name)+"\n  ")]),t._v(" "),i("i",{staticClass:"fas fa-caret-down",on:{click:function(e){return t.showToggle()}}}),t._v(" "),1==t.showlist?i("div",{staticClass:"dropdown-list",on:{keyup:t.nextItem}},[i("ul",{ref:"scrollContainer"},t._l(t.itemList,(function(e,a){return i("li",{directives:[{name:"show",rawName:"v-show",value:t.itemVisible(e),expression:"itemVisible(item)"}],key:e.id,ref:"options",refInFor:!0,staticClass:"dropdown-item",class:{"active-item":t.arrowCounter===a},on:{click:function(i){return t.selectItem(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectItem(t.matches[t.arrowCounter])},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showlist=!1}]}},[i("label",[i("input",{staticClass:"d-none",attrs:{type:"checkbox"},domProps:{value:e.id}}),t._v(t._s(e.name))])])})),0)]):t._e()]):t._e()}),[],!1,null,null,null);e.a=n.exports},17:function(t,e,i){"use strict";var a={name:"SubmitButtonGBI",data:function(){return{}}},s=i(0),n=Object(s.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold"},[this._t("default",[this._v("submit")])],2)}),[],!1,null,null,null);e.a=n.exports},19:function(t,e,i){"use strict";var a={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}},s=i(0),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[t.url?i("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):i("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(e){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);e.a=n.exports},277:function(t,e,i){"use strict";i.r(e);var a=i(16),s=i(1),n=i(33),r=i(4),o=i(17),l=i(3),c=i(15),u={name:"EditEncyclopedia",components:{ModelSelect:a.ModelSelect,Form:s.Form,VueEditor:n.a,"has-erro":s.HasError,"form-buttons":r.a,"submit-button":o.a,"form-layout":l.a,"dropdown-list":c.a},data:function(){return{state_list:[],list_data:[],pdf_list:[],images:[],list_images:[],form:new s.Form({state_name:"",map_link:"",slug:"",description:"",thumbnail:[],banner_image:[],images:[],files:[]})}},created:function(){this.EncyclopediaList(),this.StateList()},methods:{StateList:function(){var t=this;axios.get("/api/state").then((function(e){if(e.data)for(var i=0;i<e.data.length;i++)t.state_list.push({name:e.data[i].name,id:e.data[i].name})}))},UpdateState:function(t){this.form.state_name=t.name},EncyclopediaList:function(){var t=this,e="/api/encyclopedias/".concat(this.$route.params.id,"/edit");axios.get(e).then((function(e){t.form.fill(e.data),t.pdf_list=e.data.itinerarypdfs,t.images.thumbnail=e.data.thumbnail,t.images.banner_image=e.data.banner_image,t.list_images=e.data.images,t.form.thumbnail=[],t.form.banner_image=[],t.form.images=[],t.form.files=[],t.form.state_name=t.form.state_name.trim()}))},uploadFieldChange:function(t){var e=t.target.files||t.dataTransfer.files;if(e.length)for(var i=e.length-1;i>=0;i--)this.createImage(t.target.files[i].name,e[i])},createImage:function(t,e){new Image;var i=new FileReader,a=this;i.onload=function(e){a.form.files.push({filename:t,content:e.target.result})},i.readAsDataURL(e)},changeImage:function(t,e){var i=this,a=t.target.files[0],s=new FileReader;s.onload=function(t){switch(e){case"thumbnail":i.form.thumbnail.push({name:a.name,file:t.target.result}),i.images.thumbnail=t.target.result;break;case"banner":i.form.banner_image.push({name:a.name,file:t.target.result}),i.images.banner_image=t.target.result;break;default:console.log("please select valid image")}},s.readAsDataURL(a)},changePhotos:function(t){for(var e=this,i=function(){var i=t.target.files[a],s=new FileReader;s.onload=function(t){e.form.images.push({name:i.name,file:t.target.result})},s.readAsDataURL(i)},a=0;a<t.target.files.length;a++)i()},slugCreate:function(t){var e="";t&&(e=(t=t.toLowerCase()).replace(/\s*$/g,""),this.form.slug=e.replace(/\s+/g,"-"))},deleteImage:function(t){var e=this,i={id:t};axios.post("/api/encyclopedia-img",i).then((function(t){e.EncyclopediaList()}))},deletePdf:function(t){var e=this,i={id:t};axios.post("/api/encyclopedia-pdf",i).then((function(t){e.EncyclopediaList()}))},addItem:function(){var t=this,e="/api/encyclopedias/".concat(this.$route.params.id);this.form.put(e).then((function(e){t.EncyclopediaList(),t.$toast.fire({icon:"success",title:"Encyclopedia Updated successfully"})})).catch((function(){}))}}},m=i(0),d=Object(m.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form-layout",{scopedSlots:t._u([{key:"formdata",fn:function(){return[i("form",{attrs:{role:"form",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.addItem()}}},[t.form.state_name?i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"state_name"}},[t._v("State")]),t._v(" "),i("dropdown-list",{staticClass:"mb-2",attrs:{itemList:t.state_list},model:{value:t.form.state_name,callback:function(e){t.$set(t.form,"state_name",e)},expression:"form.state_name"}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"state_name"}})],1),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"slug"}},[t._v("Slug")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.slug,expression:"form.slug"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("slug")},attrs:{type:"text",placeholder:"Enter Map Link",rows:"6",readonly:""},domProps:{value:t.form.slug},on:{input:function(e){e.target.composing||t.$set(t.form,"slug",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"slug"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"map_link"}},[t._v("Map Link")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.map_link,expression:"form.map_link"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("map_link")},attrs:{rows:"6",placeholder:"Enter Map Link"},domProps:{value:t.form.map_link},on:{input:function(e){e.target.composing||t.$set(t.form,"map_link",e.target.value)}}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"map_link"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-4"})]):t._e(),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-12"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"descriptionId"}},[t._v("Description")]),t._v(" "),i("vue-editor",{class:{"is-invalid":t.form.errors.has("description")},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"description"}})],1)])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group itinerary_image"},[i("label",{staticClass:"label",attrs:{for:"thumbnail"}},[t._v("Please upload thumbnail image !")]),t._v(" "),i("br"),t._v(" "),i("input",{staticClass:"select_image",class:{"is-invalid":t.form.errors.has("thumbnail")},attrs:{type:"file",accept:"jpeg, jpg, png, gif"},on:{change:function(e){return t.changeImage(e,"thumbnail")}}}),t._v(" "),i("img",{attrs:{src:t.images.thumbnail,alt:"",width:"80",height:"80"}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"thumbnail"}})],1)]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"label",attrs:{for:"input"}},[t._v("Please upload a Banner image !")]),t._v(" "),i("br"),t._v(" "),i("input",{class:{"is-invalid":t.form.errors.has("banner_image")},attrs:{name:"banner_image",type:"file"},on:{change:function(e){return t.changeImage(e,"banner")}}}),t._v(" "),i("img",{staticClass:"banner_image width-140",attrs:{src:t.images.banner_image,alt:""}}),t._v(" "),i("has-error",{attrs:{form:t.form,field:"banner_image"}})],1)])]),t._v(" "),i("hr"),t._v(" "),t.list_images?i("div",{staticClass:"row img-card-delete-icon"},t._l(t.list_images,(function(e){return i("div",{key:e.id,staticClass:"col-sm-4 position-relative"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("img",{staticClass:"w-100",attrs:{src:e.image}})])]),t._v(" "),i("span",{staticClass:"badge badge-danger position-absolute cursor-pointer",on:{click:function(i){return t.deleteImage(e.id)}}},[i("i",{staticClass:"far fa-trash-alt",attrs:{"aria-hidden":"true"}})])])})),0):t._e(),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-4"},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"images"}},[t._v("Select Multiple Images")]),t._v(" "),i("input",{ref:"attachments",staticClass:"form-control w-100",attrs:{type:"file",multiple:"multiple"},on:{change:t.changePhotos}})])])]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-6"},[i("label",{attrs:{for:"pdfs"}},[t._v("Upload Itinerary Pdf ( Multiple )")]),t._v(" "),i("input",{staticClass:"form-control",attrs:{type:"file",accept:".pdf",multiple:"multiple"},on:{change:t.uploadFieldChange}})]),t._v(" "),i("div",{staticClass:"col-sm-6"},[i("label",{attrs:{for:"pdf_show"}},[t._v("Itinerary PDFs")]),t._v(" "),i("div",{staticClass:"row"},t._l(t.pdf_list,(function(e){return i("div",{key:e.id,staticClass:"col-sm-12"},[i("div",{staticClass:"row pd-5 mb-20"},[i("div",{staticClass:"col-sm-2 pdf_show"},[i("i",{staticClass:"fas fa-file-pdf"})]),t._v(" "),i("div",{staticClass:"col-sm-10"},[i("p",[t._v("\n                    "+t._s(e.name)+"\n                    "),i("span",{staticClass:"badge badge-danger position-absolute cursor-pointer ml-3",attrs:{title:"Delete Item"},on:{click:function(i){return t.deletePdf(e.id)}}},[i("i",{staticClass:"far fa-trash-alt",attrs:{"aria-hidden":"true"}})])])])])])})),0)])]),t._v(" "),i("form-buttons")],1)]},proxy:!0}])})}),[],!1,null,null,null);e.default=d.exports},3:function(t,e,i){"use strict";var a={name:"FromLayoutGBI",data:function(){return{}}},s=i(0),n=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-around"},[e("div",{staticClass:"col-md-12 pl-4 pb-5"},[this._t("formdata")],2)])])])}),[],!1,null,null,null);e.a=n.exports},39:function(t,e,i){"use strict";var a=i(14);i.n(a).a.directive("click-outside",{bind:function(t,e,i){window.event=function(a){t==a.target||t.contains(a.target)||i.context[e.expression](a)},document.body.addEventListener("click",window.event)},unbind:function(t){document.body.removeEventListener("click",window.event)}})},4:function(t,e,i){"use strict";var a=i(19),s=i(17),n={name:"FormButtonGBI",components:{"back-button":a.a,"submit-button":s.a}},r=i(0),o=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-sm-9 text-center"},[e("back-button"),this._v(" "),e("submit-button")],1)])}),[],!1,null,null,null);e.a=o.exports}}]);