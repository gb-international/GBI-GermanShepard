webpackJsonp([21],{736:function(t,e,a){var i=a(737);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(4)("1e4ef057",i,!0,{})},737:function(t,e,a){(t.exports=a(3)(!1)).push([t.i,".main-head[data-v-db0cfd92]{text-decoration:underline}.description[data-v-db0cfd92]{font-size:17px;font-family:raleway}",""])},738:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ExploreDetail",data:function(){return{day:0,description:"",itineraryData:[]}},mounted:function(){this.$store.dispatch("getEditData","/api/itinerary/"+this.$route.params.id)},computed:{editData:function(){this.itineraryData=this.$store.getters.getEditData}}}},739:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"explorelist"}},[a("vue-headful",{attrs:{title:"GBI Explore Destination",description:"@GoWithGBI a state of art platform which allows user to satiate all its travel needs at one click of a button",keywords:"@GoWithGBI,explore desired destinations,tailored made itineraries ,custom built itineraries,itineraries of your choice and preferences,explore itineraries,explore educational programs",image:"",lang:"en_US",ogLocale:"en_US,en_UK",url:"https://www.gowithgbi.com/resources/explore-destination"}}),t._v(" "),a("section",{staticClass:"banner-block"},[a("img",{staticClass:"top-img",attrs:{src:"/uploadimage/"+t.itineraryData.detail_photo,loading:"lazy",alt:"itinerary"}})]),t._v("\n      "+t._s(t.editData)+"\n      "),a("div",{staticClass:"container"},[a("h1",{staticClass:"main-head"},[t._v(t._s(t.itineraryData.title))]),t._v(" "),a("p",{staticClass:"description",domProps:{innerHTML:t._s(t.description)}}),t._v(" "),a("div",{staticClass:"row",attrs:{id:"explore_detail_part"}},t._l(t.itineraryData.itinerarydays,function(e){return a("div",{staticClass:"col-sm-4"},[a("h4",{staticClass:"day_tab"},[t._v("Day "+t._s(e.day))]),t._v(" "),e.day_source!=e.day_destination?a("h1",{staticClass:"explor-head"},[t._v(t._s(e.day_source.toUpperCase())+" - "+t._s(e.day_destination.toUpperCase()))]):a("h1",{staticClass:"explor-head"},[t._v(t._s(e.day_source.toUpperCase()))]),t._v(" "),a("div",{staticClass:"card-text",domProps:{innerHTML:t._s(e.day_description)}})])}),0)])],1)},staticRenderFns:[]}},794:function(t,e,a){var i=a(1)(a(738),a(739),!1,function(t){a(736)},"data-v-db0cfd92",null);t.exports=i.exports}});