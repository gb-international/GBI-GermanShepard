(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{13:function(t,s,o){"use strict";var a={name:"ViewLayoutGBI",components:{"back-button":o(19).a},props:["backurl"]},i=o(0),n=Object(i.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"content"},[s("div",{staticClass:"row pt-3 pb-4"},[s("div",{staticClass:"col-sm-12 card_view"},[this._t("viewdata"),this._v(" "),s("div",{staticClass:"text-center"},[s("back-button",{attrs:{url:this.backurl}})],1)],2)])])}),[],!1,null,null,null);s.a=n.exports},19:function(t,s,o){"use strict";var a={name:"BackButtonGBI",props:["url"],methods:{goBack:function(){this.$router.back()}}},i=o(0),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("span",[t.url?o("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{to:t.url},on:{click:function(s){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):o("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-capitalize font-weight-bold",attrs:{type:"button"},on:{click:function(s){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);s.a=n.exports},297:function(t,s,o){"use strict";o.r(s);var a={name:"ViewFrontBooking",components:{"view-layout":o(13).a},data:function(){return{booking:[]}},mounted:function(){var t=this,s="/api/frontbooking/".concat(this.$route.params.id);axios.get(s).then((function(s){t.booking=s.data,0==t.booking.status?t.booking.status=!1:t.booking.status=!0}))},computed:{},methods:{upadateStatus:function(t){var s=this,o={id:this.$route.params.id,status:this.booking.status};axios.post("/api/frontbooking-status/",o).then((function(t){s.$toast.fire({icon:"success",title:"Tour Status Updated !!!!"})})).catch((function(){}))},goBack:function(){this.$router.go(-1)}}},i=o(0),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("view-layout",{attrs:{backurl:"/front-booking"},scopedSlots:t._u([t.booking.user?{key:"viewdata",fn:function(){return[o("div",{staticClass:"row pl-3"},[o("div",{staticClass:"col-sm-4"},[o("h5",[t._v("User Name")]),t._v(" "),o("p",[o("router-link",{attrs:{to:"/user/"+t.booking.user.id}},[t._v(t._s(t.booking.user.name)+" (ID: "+t._s(t.booking.user.id)+")")])],1)]),t._v(" "),o("div",{staticClass:"col-sm-8"},[o("h5",[t._v("Itinerary")]),t._v(" "),o("p",[o("router-link",{attrs:{to:"/view-itinerary/"+t.booking.itinerary.id}},[t._v(t._s(t.booking.itinerary.title)+" (ID: "+t._s(t.booking.itinerary.id)+")\n          ")])],1)]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("h5",[t._v("Start Date")]),t._v(" "),o("p",[t._v(t._s(t.booking.start_date))])]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("h5",[t._v("End Date")]),t._v(" "),o("p",[t._v(t._s(t.booking.end_date))])]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("h5",[t._v("No. of Person")]),t._v(" "),o("p",[t._v(t._s(t.booking.person))])]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("h5",[t._v("Rooms")]),t._v(" "),o("p",[t._v(t._s(t.booking.room))])]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("h5",[t._v("Occupancy Type")]),t._v(" "),o("p",[t._v(t._s(t.booking.occupancy_type))])]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("h5",[t._v("No. of Days")]),t._v(" "),o("p",[t._v(t._s(t.booking.noofday))])]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("h5",[t._v("Accomodation")]),t._v(" "),o("p",[t._v(t._s(t.booking.accomodation))])]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("h5",[t._v("Cities")]),t._v(" "),o("p",[t._v(t._s(t.booking.city))])]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("h5",[t._v("Transports")]),t._v(" "),o("p",[t._v(t._s(t.booking.transport))])]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("h5",[t._v("Sightseen")]),t._v(" "),o("p",[t._v(t._s(t.booking.sightseen))])]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("h5",[t._v("Status")]),t._v(" "),o("label",{staticClass:"label-switch switch-success"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.booking.status,expression:"booking.status"}],staticClass:"switch switch-bootstrap status",attrs:{type:"checkbox",name:"status",id:"status",value:"1"},domProps:{checked:Array.isArray(t.booking.status)?t._i(t.booking.status,"1")>-1:t.booking.status},on:{change:[function(s){var o=t.booking.status,a=s.target,i=!!a.checked;if(Array.isArray(o)){var n=t._i(o,"1");a.checked?n<0&&t.$set(t.booking,"status",o.concat(["1"])):n>-1&&t.$set(t.booking,"status",o.slice(0,n).concat(o.slice(n+1)))}else t.$set(t.booking,"status",i)},t.upadateStatus]}}),t._v(" "),o("span",{staticClass:"lable"})])])])]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);s.default=n.exports}}]);