(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{199:function(t,e){},200:function(t,e){},234:function(t,e,a){"use strict";a.r(e);var s=a(1),i=a(28),r=a.n(i),n=a(37),o=a.n(n);a(201);function l(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}var d={data:function(){return{selected:[],checkbox_state:0,searchQuery:null,total_row:[{first_name:"",last_name:"",email:"",gender:"",age:"",mobile:"",tour_id:this.$route.params.id,school_id:this.$route.params.school_id,user_type:"student",is_paid:"1"}],new_row:[],error:!1,message:"",edit_index:-1,row_input:"",new_row_add:!1}},watch:{new_row:function(){this.new_row.length>0?this.new_row_add=!0:this.new_row_add=!1}},methods:{generatePdf:function(){for(var t=new o.a("p","pt","A4"),e=[],a=1,s=0;s<this.resultQuery.length;s++){var i=this.resultQuery[s],r=[a++,i.first_name,i.last_name,i.email,i.gender,i.age,i.mobile];e.push(r)}t.autoTable({head:[["S.No","First Name","Last Name","Email","Gender","Age","Contact"]],body:e}),t.save("gbi-groupmember.pdf")},sendLoginDetails:function(){var t=this;axios.post("/api/groupmembers/addlogindetail",this.selected).then((function(e){"error"==e.data?t.$swal.fire({icon:"error",title:"Try again",text:"Please enter valid travel code!"}):t.$swal.fire("Success","Students saved and notifications has been sent !!!","success")})).catch((function(e){t.$swal.fire({icon:"error",title:"Try again",text:e.data}),t.handleError(e)}))},delete_row:function(t,e){var a=this;this.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(s){if(s.value){var i={id:e};axios.post("/api/groupmember/destroy",i).then((function(e){a.$swal.fire("Deleted!","Member Deleted deleted.","success"),a.total_row.splice(t,1)})).catch((function(t){a.handleError(t)}))}}))},delete_new_row:function(t){this.new_row.splice(t,1)},edit_row:function(t){this.edit_index=t},update_row:function(t){this.UserTourUpdate(this.total_row[t]),this.edit_index=""},UserTourUpdate:function(t){var e=this;axios.post("/api/groupmembers/update",t).then((function(t){"error"==t.data?e.$swal.fire({icon:"error",title:"Try again",text:"Please enter valid travel code!"}):(e.edit_index=-1,e.$swal.fire("Success","Member updated !!!","success"))})).catch((function(t){e.$swal.fire({icon:"error",title:"Try again",text:t.data}),e.handleError(t)}))},UserGroupSave:function(){var t=this;if(this.checkDuplicateEmail(),1==this.error)return!1;for(var e=this.new_row.length-1;e>=0;e--)""==this.new_row[e].first_name&&this.new_row.splice(e,1);axios.post("/api/groupmember/add",this.new_row).then((function(e){"error"==e.data?t.$swal.fire({icon:"error",title:"Try again",text:"Please enter valid travel code!"}):(t.$swal.fire("Success","Group data has added","success"),t.new_row=[],t.new_row_add=!1,t.groupMember())})).catch((function(e){t.handleError(e)}))},checkedBox:function(){this.selected.length>0?this.checkbox_state=1:this.checkbox_state=0},checkDuplicateEmail:function(){var t=[],e=(t=[].concat(l(this.total_row),l(this.new_row))).map((function(t){return t.email})),a=e.some((function(t,a){return e.indexOf(t)!=a}));console.log(t),1==a?(this.message="Duplicate Email Found",this.error=!0):(this.message="",this.error=!1)}},computed:{resultQuery:function(){var t=this;return this.searchQuery?this.total_row.filter((function(e){return t.searchQuery.toLowerCase().split(" ").every((function(t){return e.first_name.toLowerCase().includes(t)}))})):this.total_row},selectAll:{get:function(){return!!this.resultQuery&&this.selected.length==this.resultQuery.length},set:function(t){var e=[];t&&this.resultQuery.forEach((function(t){e.push(t)})),this.selected=e,this.checkedBox()}}}},u={name:"AddGroupStudentExcel",mixins:[d],components:{"has-error":s.HasError},data:function(){return{excel_form:new s.Form({excel_file:""})}},mounted:function(){this.groupMember()},methods:{add_row:function(){for(var t=0;t<this.row_input;t++)this.new_row.push({first_name:"",last_name:"",email:"",gender:"",age:"",mobile:"",tour_id:this.$route.params.id,school_id:this.$route.params.school_id,user_type:"student",is_paid:"1"});this.row_input=""},groupMember:function(){var t=this;axios.get("/api/groupmembers/".concat(this.$route.params.id,"/student")).then((function(e){e.data&&(t.total_row=e.data)}))},changeExcelFile:function(t){var e=this;if("xlsx"!=t.target.files[0].name.split(".").pop())return this.$swal.fire("Alert!","Please Select .xlsx file","error"),!1;var a=t.target.files[0],s=new FileReader;s.onload=function(t){for(var a=new Uint8Array(t.target.result),s=r.a.read(a,{type:"array"}),i=s.SheetNames[0],n=s.Sheets[i],o=r.a.utils.sheet_to_json(n),l=0;l<o.length;l++)if(6==Object.keys(o[l]).length){var c=[];for(var d in o[l])c.push(o[l][d]);var u={first_name:c[0],last_name:c[1],email:c[2],gender:c[3],age:c[4],mobile:c[5],tour_id:e.$route.params.id,school_id:e.$route.params.school_id};e.new_row.push(u)}},s.readAsArrayBuffer(a)}}},m=a(0),p=Object(m.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"AddGroup p-t-15"},[a("div",{staticClass:"row mb-10 pt-3"},[a("div",{staticClass:"col-sm-3"},[a("button",{staticClass:"btn btn-dark border-0",attrs:{type:"button",disabled:0==t.checkbox_state},on:{click:function(e){return t.sendLoginDetails()}}},[t._v("Send Login Credentails")])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"input-group filter-search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control py-2 border-right-0 border",attrs:{type:"search",value:"search",id:"example-search-input",placeholder:"Search .."},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"col-sm-2 p-0 text-center"},[a("a",{staticClass:"text-dark",attrs:{href:"/assets/sample-group-list.xlsx",download:""}},[a("i",{staticClass:"fas fa-download"}),t._v(" Name list formate\n        ")])]),t._v(" "),a("div",{staticClass:"col-sm-3"},[a("div",{staticClass:"form-group file-upload"},[a("div",{staticClass:"input-group file-input-group",attrs:{"data-controller":"file-input"}},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:".xlsx file upload",readonly:"","data-target":"file-input.value"}}),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"file",id:"customFile",name:"file",accept:".xlsx"},on:{change:function(e){return t.changeExcelFile(e)}}}),t._v(" "),t._m(1)])])])]),t._v(" "),a("div",{staticClass:"row group_list simple-form list-form pl-2 font-12"},[a("table",{staticClass:"table text-dark table-bordered"},[a("thead",[a("th",[t.total_row.length>0?a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"form-check-input checkbox-select-all",attrs:{type:"checkbox",id:"studentCheckbox",title:"Select All"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,null)>-1:t.selectAll},on:{change:function(e){var a=t.selectAll,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r=t._i(a,null);s.checked?r<0&&(t.selectAll=a.concat([null])):r>-1&&(t.selectAll=a.slice(0,r).concat(a.slice(r+1)))}else t.selectAll=i}}}),a("label",{staticClass:"form-check-label font-12",attrs:{for:"studentCheckbox"}})]):a("div",[t._v("#")])]),t._v(" "),a("th",{staticClass:"w-80"},[t._v("Sr no")]),t._v(" "),a("th",[t._v("First Name")]),t._v(" "),a("th",[t._v("Last Name")]),t._v(" "),a("th",{staticClass:"width-260"},[t._v("Email")]),t._v(" "),a("th",{staticClass:"w-80"},[t._v("Gender")]),t._v(" "),a("th",{staticClass:"width-70"},[t._v("Age")]),t._v(" "),a("th",{staticClass:"w-192"},[t._v("Contact No.")])]),t._v(" "),a("tbody",[t._l(t.resultQuery,(function(e,s){return a("tr",{key:e.email,staticClass:"hidden"},[a("td",{staticClass:"text-center"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:e.id},domProps:{value:e,checked:Array.isArray(t.selected)?t._i(t.selected,e)>-1:t.selected},on:{change:[function(a){var s=t.selected,i=a.target,r=!!i.checked;if(Array.isArray(s)){var n=e,o=t._i(s,n);i.checked?o<0&&(t.selected=s.concat([n])):o>-1&&(t.selected=s.slice(0,o).concat(s.slice(o+1)))}else t.selected=r},function(e){return t.checkedBox()}]}})])]),t._v(" "),a("td",{staticClass:"text-center padding-top-10"},[t._v(t._s(s+1))]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"data.first_name"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.first_name},on:{input:function(a){a.target.composing||t.$set(e,"first_name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"data.last_name"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.last_name},on:{input:function(a){a.target.composing||t.$set(e,"last_name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"data.email"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.email},on:{input:function(a){a.target.composing||t.$set(e,"email",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"data.gender"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.gender},on:{input:function(a){a.target.composing||t.$set(e,"gender",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"data.age"}],staticClass:"form-control",attrs:{type:"number",readonly:s!=t.edit_index},domProps:{value:e.age},on:{input:function(a){a.target.composing||t.$set(e,"age",a.target.value)}}})]),t._v(" "),a("td",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-7"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"data.mobile"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.mobile},on:{input:function(a){a.target.composing||t.$set(e,"mobile",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-5 justify-content-end"},[a("div",{staticClass:"form-group action_item margin-top-11"},[s!=t.edit_index?a("img",{staticClass:"edit mr-1",attrs:{src:"/assets/front/icons/edit.png"},on:{click:function(e){return t.edit_row(s)}}}):a("img",{staticClass:"edit mr-1",attrs:{src:"/assets/front/icons/update.png"},on:{click:function(e){return t.update_row(s)}}}),t._v(" "),a("img",{staticClass:"delete",attrs:{src:"/assets/front/icons/delete.png"},on:{click:function(a){return t.delete_row(s,e.id)}}})])])])])])})),t._v(" "),t._l(t.new_row,(function(e,s){return a("tr",{key:s},[a("td"),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(s+1))]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"data.first_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.first_name},on:{input:function(a){a.target.composing||t.$set(e,"first_name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"data.last_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.last_name},on:{input:function(a){a.target.composing||t.$set(e,"last_name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"data.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.email},on:{input:function(a){a.target.composing||t.$set(e,"email",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"data.gender"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.gender},on:{input:function(a){a.target.composing||t.$set(e,"gender",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"data.age"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.age},on:{input:function(a){a.target.composing||t.$set(e,"age",a.target.value)}}})]),t._v(" "),a("td",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"data.mobile"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.mobile},on:{input:function(a){a.target.composing||t.$set(e,"mobile",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-sm-4 text-left pt-2"},[a("img",{staticClass:"delete w-16",attrs:{src:"/assets/front/icons/delete.png"},on:{click:function(e){return t.delete_new_row(s)}}})])])]),t._v(" "),a("td")])}))],2)]),t._v(" "),1==this.error?a("p",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.message))]):t._e()]),t._v(" "),a("div",{staticClass:"row w-100 mt-5 mb-5 justify-content-center text-center"},[a("div",{staticClass:"col-sm-5 m-0 p-0"},[a("button",{staticClass:"btn btn-default itrn_add_btn",attrs:{type:"button"},on:{click:t.generatePdf}},[t._v("DOWNLOAD PDF")])]),t._v(" "),a("div",{staticClass:"col-sm-5 m-0 p-0"},[a("button",{staticClass:"btn btn-default itrn_add_btn",attrs:{type:"button",disabled:0==t.new_row_add},on:{click:function(e){return t.UserGroupSave()}}},[t._v("UPDATE")])]),t._v(" "),a("div",{staticClass:"col-sm-2 p-0 add-row-input-button text-left mt-29"},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.row_input,expression:"row_input"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Add Row.."},domProps:{value:t.row_input},on:{input:function(e){e.target.composing||(t.row_input=e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-info text-white pl-2",attrs:{type:"button"},on:{click:function(e){return t.add_row()}}},[t._v("Go")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary border-left-0 border",attrs:{type:"button"}},[e("i",{staticClass:"fa fa-search"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("label",{staticClass:"btn btn-secondary mb-0",attrs:{for:"customFile"}},[this._v("Browse")])])}],!1,null,null,null).exports,v={name:"AddGroupTeacherExcelUpload",mixins:[d],components:{"has-error":s.HasError},data:function(){return{excel_form:new s.Form({excel_file:""})}},mounted:function(){this.groupMember(),console.log(this.selectAll)},methods:{add_row:function(){for(var t=0;t<this.row_input;t++)this.new_row.push({first_name:"",last_name:"",email:"",gender:"",age:"",mobile:"",tour_id:this.$route.params.id,school_id:this.$route.params.school_id,user_type:"teacher",is_paid:!1});this.row_input=""},groupMember:function(){var t=this;axios.get("/api/groupmembers/".concat(this.$route.params.id,"/teacher")).then((function(e){e.data&&(t.total_row=e.data)}))},changeExcelFile:function(t){var e=this;if("xlsx"!=t.target.files[0].name.split(".").pop())return this.$swal.fire("Alert!","Please Select .xlsx file","error"),!1;var a=t.target.files[0],s=new FileReader;s.onload=function(t){for(var a=new Uint8Array(t.target.result),s=r.a.read(a,{type:"array"}),i=s.SheetNames[0],n=s.Sheets[i],o=r.a.utils.sheet_to_json(n),l=0;l<o.length;l++)if(6==Object.keys(o[l]).length){var c=[];for(var d in o[l])c.push(o[l][d]);var u={first_name:c[0],last_name:c[1],email:c[2],gender:c[3],age:c[4],mobile:c[5],tour_id:e.$route.params.id,school_id:e.$route.params.school_id,is_paid:!1,user_type:"teacher"};e.new_row.push(u)}},s.readAsArrayBuffer(a)}}},_={name:"AddGroupMembers",components:{"student-layout":p,"teacher-layout":Object(m.a)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"AddGroup p-t-15"},[a("div",{staticClass:"row mb-10 pt-3"},[a("div",{staticClass:"col-sm-3"},[a("button",{staticClass:"btn btn-dark border-0",attrs:{type:"button",disabled:0==t.checkbox_state},on:{click:function(e){return t.sendLoginDetails()}}},[t._v("\n          Send Login Credentails\n        ")])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"input-group filter-search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"form-control py-2 border-right-0 border",attrs:{type:"search",value:"search",id:"example-search-input",placeholder:"Search .."},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"col-sm-2 p-0 text-center"},[a("a",{staticClass:"text-dark",attrs:{href:"/assets/sample-group-list.xlsx",download:""}},[a("i",{staticClass:"fas fa-download"}),t._v(" Name list formate\n        ")])]),t._v(" "),a("div",{staticClass:"col-sm-3"},[a("div",{staticClass:"form-group file-upload"},[a("div",{staticClass:"input-group file-input-group",attrs:{"data-controller":"file-input"}},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:".xlsx file upload",readonly:"","data-target":"file-input.value"}}),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"file",id:"customFile",name:"file",accept:".xlsx"},on:{change:function(e){return t.changeExcelFile(e)}}}),t._v(" "),t._m(1)])])])]),t._v(" "),a("div",{staticClass:"row group_list simple-form list-form pl-2 font-12"},[a("table",{staticClass:"table text-dark table-bordered"},[a("thead",[a("th",[t.total_row.length>0?a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"form-check-input checkbox-select-all",attrs:{type:"checkbox",id:"teacherCheck",title:"Select All"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,null)>-1:t.selectAll},on:{change:function(e){var a=t.selectAll,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r=t._i(a,null);s.checked?r<0&&(t.selectAll=a.concat([null])):r>-1&&(t.selectAll=a.slice(0,r).concat(a.slice(r+1)))}else t.selectAll=i}}}),a("label",{staticClass:"form-check-label font-12",attrs:{for:"teacherCheck"}})]):a("div",[t._v("#")])]),t._v(" "),a("th",{staticClass:"w-80"},[t._v("Sr no")]),t._v(" "),a("th",[t._v("First Name")]),t._v(" "),a("th",[t._v("Last Name")]),t._v(" "),a("th",{staticClass:"width-260"},[t._v("Email")]),t._v(" "),a("th",{staticClass:"w-80"},[t._v("Gender")]),t._v(" "),a("th",{staticClass:"width-70"},[t._v("Age")]),t._v(" "),a("th",{staticClass:"width-70"},[t._v("Paid?")]),t._v(" "),a("th",{staticClass:"w-192"},[t._v("Contact No.")])]),t._v(" "),a("tbody",[t._l(t.resultQuery,(function(e,s){return a("tr",{key:e.email,staticClass:"hidden"},[a("td",{staticClass:"text-center"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:e.id},domProps:{value:e,checked:Array.isArray(t.selected)?t._i(t.selected,e)>-1:t.selected},on:{change:[function(a){var s=t.selected,i=a.target,r=!!i.checked;if(Array.isArray(s)){var n=e,o=t._i(s,n);i.checked?o<0&&(t.selected=s.concat([n])):o>-1&&(t.selected=s.slice(0,o).concat(s.slice(o+1)))}else t.selected=r},function(e){return t.checkedBox()}]}})])]),t._v(" "),a("td",{staticClass:"text-center padding-top-10"},[t._v("\n            "+t._s(s+1)+"\n          ")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"data.first_name"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.first_name},on:{input:function(a){a.target.composing||t.$set(e,"first_name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"data.last_name"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.last_name},on:{input:function(a){a.target.composing||t.$set(e,"last_name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"data.email"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.email},on:{input:function(a){a.target.composing||t.$set(e,"email",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"data.gender"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.gender},on:{input:function(a){a.target.composing||t.$set(e,"gender",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"data.age"}],staticClass:"form-control",attrs:{type:"number",readonly:s!=t.edit_index},domProps:{value:e.age},on:{input:function(a){a.target.composing||t.$set(e,"age",a.target.value)}}})]),t._v(" "),a("td",{staticClass:"pl-1 pr-1"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.is_paid,expression:"data.is_paid"}],staticClass:"form-check-input",attrs:{disabled:s!=t.edit_index,type:"checkbox",id:e.email},domProps:{value:e.is_paid,checked:Array.isArray(e.is_paid)?t._i(e.is_paid,e.is_paid)>-1:e.is_paid},on:{change:function(a){var s=e.is_paid,i=a.target,r=!!i.checked;if(Array.isArray(s)){var n=e.is_paid,o=t._i(s,n);i.checked?o<0&&t.$set(e,"is_paid",s.concat([n])):o>-1&&t.$set(e,"is_paid",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(e,"is_paid",r)}}}),t._v(" "),a("label",{staticClass:"form-check-label margin-top-11",attrs:{for:""+e.email}},[t._v("\n                Paid\n              ")])])]),t._v(" "),a("td",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"data.mobile"}],staticClass:"form-control",attrs:{type:"text",readonly:s!=t.edit_index},domProps:{value:e.mobile},on:{input:function(a){a.target.composing||t.$set(e,"mobile",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-4 justify-content-end"},[a("div",{staticClass:"form-group action_item margin-top-11"},[s!=t.edit_index?a("img",{staticClass:"edit mr-1",attrs:{src:"/assets/front/icons/edit.png"},on:{click:function(e){return t.edit_row(s)}}}):a("img",{staticClass:"edit mr-1",attrs:{src:"/assets/front/icons/update.png"},on:{click:function(e){return t.update_row(s)}}}),t._v(" "),a("img",{staticClass:"delete",attrs:{src:"/assets/front/icons/delete.png"},on:{click:function(a){return t.delete_row(s,e.id)}}})])])])])])})),t._v(" "),t._l(t.new_row,(function(e,s){return a("tr",{key:s},[a("td"),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(s+1))]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.first_name,expression:"data.first_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.first_name},on:{input:function(a){a.target.composing||t.$set(e,"first_name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.last_name,expression:"data.last_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.last_name},on:{input:function(a){a.target.composing||t.$set(e,"last_name",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"data.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.email},on:{input:function(a){a.target.composing||t.$set(e,"email",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"data.gender"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.gender},on:{input:function(a){a.target.composing||t.$set(e,"gender",a.target.value)}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"data.age"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.age},on:{input:function(a){a.target.composing||t.$set(e,"age",a.target.value)}}})]),t._v(" "),a("td",{staticClass:"pl-1 pr-1"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.is_paid,expression:"data.is_paid"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:e.email},domProps:{value:e.is_paid,checked:Array.isArray(e.is_paid)?t._i(e.is_paid,e.is_paid)>-1:e.is_paid},on:{change:function(a){var s=e.is_paid,i=a.target,r=!!i.checked;if(Array.isArray(s)){var n=e.is_paid,o=t._i(s,n);i.checked?o<0&&t.$set(e,"is_paid",s.concat([n])):o>-1&&t.$set(e,"is_paid",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(e,"is_paid",r)}}}),t._v(" "),a("label",{staticClass:"form-check-label margin-top-11",attrs:{for:""+e.email}},[t._v("\n                  Paid\n                ")])])]),t._v(" "),a("td",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"data.mobile"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.mobile},on:{input:function(a){a.target.composing||t.$set(e,"mobile",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-sm-4 text-right pt-2"},[a("img",{staticClass:"delete w-16",attrs:{src:"/assets/front/icons/delete.png"},on:{click:function(e){return t.delete_new_row(s)}}})])])])])}))],2)]),t._v(" "),1==this.error?a("p",{staticClass:"text-danger font-weight-bold"},[t._v(t._s(t.message))]):t._e()]),t._v(" "),a("div",{staticClass:"row reservation_bottom w-100 mt-5 mb-5 justify-content-center text-center"},[a("div",{staticClass:"col-sm-5 m-0 p-0"},[a("button",{staticClass:"btn btn-default itrn_add_btn",attrs:{type:"button"},on:{click:t.generatePdf}},[t._v("DOWNLOAD PDF")])]),t._v(" "),a("div",{staticClass:"col-sm-5 m-0 p-0"},[a("button",{staticClass:"btn btn-default itrn_add_btn",attrs:{type:"button",disabled:0==t.new_row_add},on:{click:function(e){return t.UserGroupSave()}}},[t._v("UPDATE")])]),t._v(" "),a("div",{staticClass:"col-sm-2 add-row-input-button text-left mt-29"},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.row_input,expression:"row_input"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Add Row.."},domProps:{value:t.row_input},on:{input:function(e){e.target.composing||(t.row_input=e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-info text-white pl-2",attrs:{type:"button"},on:{click:function(e){return t.add_row()}}},[t._v("Go")])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary border-left-0 border",attrs:{type:"button"}},[e("i",{staticClass:"fa fa-search"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("label",{staticClass:"btn btn-secondary mb-0",attrs:{for:"customFile"}},[this._v("Browse")])])}],!1,null,null,null).exports},data:function(){return{navigate:0,active:!0}},methods:{navigateTab:function(t){this.navigate=t,0==this.navigate?this.active=!0:this.active=!1}}},f=Object(m.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container bg-white"},[a("div",{staticClass:"AddGroup p-t-15 pb-5"},[a("div",{staticClass:"row text-center text-muted pt-2"},[a("div",{staticClass:"col p-0 m-0"},[a("span",{staticClass:"mb-0 pointer",on:{click:function(e){return t.navigateTab(0)}}},[t._v("Student")]),t._v(" "),a("hr",{class:t.active?"active_tab":""})]),t._v(" "),a("div",{staticClass:"col p-0 m-0"},[a("span",{staticClass:"mb-0 pointer",on:{click:function(e){return t.navigateTab(1)}}},[t._v("Teacher")]),t._v(" "),a("hr",{class:t.active?"":"active_tab"})])]),t._v(" "),0==t.navigate?a("div",[a("student-layout")],1):t._e(),t._v(" "),1==t.navigate?a("div",[a("teacher-layout")],1):t._e()])])}),[],!1,null,null,null);e.default=f.exports},44:function(t,e){}}]);