(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{10:function(t,e,a){"use strict";var n={name:"EditIconButtonGBI",props:["url"],data:function(){return{}}},i=a(0),r=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{staticClass:"edit_link",attrs:{to:this.url}},[e("span",{staticClass:"badge badge-primary",attrs:{title:"Edit Item"}},[e("i",{staticClass:"fas fa-pencil-alt"})])])}),[],!1,null,null,null);e.a=r.exports},11:function(t,e,a){"use strict";var n={name:"ViewsIconButtonGBI",props:["url"],data:function(){return{}}},i=a(0),r=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{staticClass:"edit_link",attrs:{to:this.url}},[e("span",{staticClass:"badge badge-primary",attrs:{title:"View Item"}},[e("i",{staticClass:"fas fa-eye"})])])}),[],!1,null,null,null);e.a=r.exports},239:function(t,e,a){"use strict";a.r(e);var n=a(6),i=a(9),r=a.n(i),s=a(10),l=a(7),o=a(11),u={name:"MinusButtonGBI",props:["url"],data:function(){return{}}},c=a(0),d=Object(c.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{staticClass:"edit_link",attrs:{to:this.url}},[e("span",{staticClass:"badge badge-primary"},[e("i",{staticClass:"fas fa-user-plus"})])])}),[],!1,null,null,null).exports,p=a(8),f=a(5);function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function h(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b={name:"ListTour",components:{"list-layout":n.a,"table-loader":p.a,pagination:r.a,"edit-icon":s.a,"delete-icon":l.a,"view-icon":o.a,"add-client-icon":d},data:function(){return{fields:[{key:"tour_id",label:"code",sortable:!0,thClass:"table-head"},{key:"school.school_name",label:"school name",sortable:!0,thClass:"table-head"},{key:"tour_start_date",label:"start date",sortable:!0,thClass:"table-head"},{key:"tour_end_date",label:"end date",sortable:!0,thClass:"table-head"},{key:"updated_at",label:"last date",sortable:!0,thClass:"table-head"},{key:"action",label:"active",thClass:"table-head"}],filter:"",perPage:7,options:[7,25,50,100]}},mounted:function(){this.getitems()},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){h(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(f.b)(["items"])),watch:{perPage:function(){this.getitems(1,this.perPage)}},methods:{getitems:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.perPage;this.$store.dispatch("getItems","/tour/all/"+e+"?page="+t)},deleteItem:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,a=h({api:"/tour/"+t,index:e},"index",e);this.$store.dispatch("deleteItem",a)}}},v=Object(c.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("list-layout",{attrs:{addurl:"/tour-add",buttontext:"add tour"},scopedSlots:t._u([{key:"perpage",fn:function(){return[a("b-form-group",{staticClass:"mb-0",attrs:{label:"Per page","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[a("b-form-select",{staticClass:"radius-0",attrs:{id:"per-page-select",options:t.options},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)]},proxy:!0},{key:"searchbar",fn:function(){return[a("b-form-input",{staticClass:"radius-0",attrs:{type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"table",fn:function(){return[a("b-table",{staticClass:"w-100 table-layout",attrs:{id:"table-transition",striped:"",hover:"",outlined:"","sticky-header":"460px",fields:t.fields,items:t.items.data,busy:t.$store.getters.isBusy,filter:t.filter,"primary-key":"updated_at"},scopedSlots:t._u([{key:"table-busy",fn:function(){return[a("table-loader")]},proxy:!0},{key:"cell(action)",fn:function(e){return[a("edit-icon",{attrs:{url:"/tours/"+e.item.id}}),t._v(" "),a("delete-icon",{nativeOn:{click:function(a){return t.deleteItem(e.item.id,e.index)}}}),t._v(" "),a("view-icon",{attrs:{url:"/view-tour/"+e.item.id}}),t._v(" "),a("add-client-icon",{attrs:{title:"Booking Information",url:"/booked-tour/"+e.item.id}})]}}])})]},proxy:!0},t.items.data?{key:"pagination",fn:function(){return[a("pagination",{attrs:{data:t.items,align:"right"},on:{"pagination-change-page":t.getitems}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("Previous")]),t._v(" "),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("Next")])])]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);e.default=v.exports},32:function(t,e,a){"use strict";var n={name:"AddButtonGBI",props:["url"]},i=a(0),r=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("router-link",{staticClass:"text-capitalize font-weight-bold",attrs:{to:this.url}},[this._t("default",[this._v("add")])],2)}),[],!1,null,null,null);e.a=r.exports},6:function(t,e,a){"use strict";var n={name:"ListLayoutGBI",components:{"add-button":a(32).a},props:["addurl","buttontext"]},i=a(0),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"row justify-content-around"},[a("div",{staticClass:"col-md-12 pb-5"},[a("div",{staticClass:"container container_admin_body list-section pb-5"},[a("b-row",{staticClass:"mb-1 mt-1",attrs:{"align-h":"between"}},[a("b-col",{staticClass:"top_btn p-0",attrs:{md:"3",cols:"4"}},[t.addurl?a("div",[a("add-button",{attrs:{url:t.addurl}},[t._v(t._s(t.buttontext))])],1):t._e()]),t._v(" "),a("b-col",{attrs:{cols:"2"}}),t._v(" "),a("b-col",{staticClass:"p-0",attrs:{cols:"3"}},[t._t("perpage")],2),t._v(" "),a("b-col",{staticClass:"p-0",attrs:{md:"3",cols:"4"}},[t._t("searchbar")],2)],1),t._v(" "),a("b-row",{staticClass:"text-capitalize"},[t._t("table"),t._v(" "),a("div",{staticClass:"w-100"},[t._t("pagination")],2)],2)],1)])])])}),[],!1,null,null,null);e.a=r.exports},7:function(t,e,a){"use strict";var n={name:"DeleteButtonGBI",data:function(){return{}}},i=a(0),r=Object(i.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"delete_link",attrs:{title:"Delete Item"}},[e("span",{staticClass:"badge badge-danger pointer"},[e("i",{staticClass:"far fa-trash-alt"})])])}],!1,null,null,null);e.a=r.exports},8:function(t,e,a){"use strict";var n={name:"TableLoader"},i=a(0),r=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center admin-bg-color my-2"},[e("b-spinner",{staticClass:"align-middle"}),this._v(" "),e("strong",[this._v("Loading...")])],1)}),[],!1,null,null,null);e.a=r.exports},9:function(t,e){t.exports=function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s="fb15")}({f6fd:function(t,e){!function(t){var e=t.getElementsByTagName("script");"currentScript"in t||Object.defineProperty(t,"currentScript",{get:function(){try{throw new Error}catch(n){var t,a=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(n.stack)||[!1])[1];for(t in e)if(e[t].src==a||"interactive"==e[t].readyState)return e[t];return null}}})}(document)},fb15:function(t,e,a){"use strict";var n;(a.r(e),"undefined"!=typeof window)&&(a("f6fd"),(n=window.document.currentScript)&&(n=n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(a.p=n[1]));function i(t,e,a,n,i,r,s,l){var o,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=a,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),s?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=o):i&&(o=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),o)if(u.functional){u._injectStyles=o;var c=u.render;u.render=function(t,e){return o.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,o):[o]}return{exports:t,options:u}}var r=i({props:{data:{type:Object,default:function(){}},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!1},size:{type:String,default:"default",validator:function(t){return-1!==["small","default","large"].indexOf(t)}},align:{type:String,default:"left",validator:function(t){return-1!==["left","center","right"].indexOf(t)}}},computed:{isApiResource:function(){return!!this.data.meta},currentPage:function(){return this.isApiResource?this.data.meta.current_page:this.data.current_page},firstPageUrl:function(){return this.isApiResource?this.data.links.first:null},from:function(){return this.isApiResource?this.data.meta.from:this.data.from},lastPage:function(){return this.isApiResource?this.data.meta.last_page:this.data.last_page},lastPageUrl:function(){return this.isApiResource?this.data.links.last:null},nextPageUrl:function(){return this.isApiResource?this.data.links.next:this.data.next_page_url},perPage:function(){return this.isApiResource?this.data.meta.per_page:this.data.per_page},prevPageUrl:function(){return this.isApiResource?this.data.links.prev:this.data.prev_page_url},to:function(){return this.isApiResource?this.data.meta.to:this.data.to},total:function(){return this.isApiResource?this.data.meta.total:this.data.total},pageRange:function(){if(-1===this.limit)return 0;if(0===this.limit)return this.lastPage;for(var t,e=this.currentPage,a=this.lastPage,n=this.limit,i=e-n,r=e+n+1,s=[],l=[],o=1;o<=a;o++)(1===o||o===a||o>=i&&o<r)&&s.push(o);return s.forEach((function(e){t&&(e-t==2?l.push(t+1):e-t!=1&&l.push("...")),l.push(e),t=e})),l}},methods:{previousPage:function(){this.selectPage(this.currentPage-1)},nextPage:function(){this.selectPage(this.currentPage+1)},selectPage:function(t){"..."!==t&&this.$emit("pagination-change-page",t)}},render:function(){var t=this;return this.$scopedSlots.default({data:this.data,limit:this.limit,showDisabled:this.showDisabled,size:this.size,align:this.align,computed:{isApiResource:this.isApiResource,currentPage:this.currentPage,firstPageUrl:this.firstPageUrl,from:this.from,lastPage:this.lastPage,lastPageUrl:this.lastPageUrl,nextPageUrl:this.nextPageUrl,perPage:this.perPage,prevPageUrl:this.prevPageUrl,to:this.to,total:this.total,pageRange:this.pageRange},prevButtonEvents:{click:function(e){e.preventDefault(),t.previousPage()}},nextButtonEvents:{click:function(e){e.preventDefault(),t.nextPage()}},pageButtonEvents:function(e){return{click:function(a){a.preventDefault(),t.selectPage(e)}}}})}},void 0,void 0,!1,null,null,null).exports,s=i({props:{data:{type:Object,default:function(){}},limit:{type:Number,default:0},showDisabled:{type:Boolean,default:!1},size:{type:String,default:"default",validator:function(t){return-1!==["small","default","large"].indexOf(t)}},align:{type:String,default:"left",validator:function(t){return-1!==["left","center","right"].indexOf(t)}}},methods:{onPaginationChangePage:function(t){this.$emit("pagination-change-page",t)}},components:{RenderlessLaravelVuePagination:r}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("renderless-laravel-vue-pagination",{attrs:{data:t.data,limit:t.limit,"show-disabled":t.showDisabled,size:t.size,align:t.align},on:{"pagination-change-page":t.onPaginationChangePage},scopedSlots:t._u([{key:"default",fn:function(e){e.data,e.limit;var n=e.showDisabled,i=e.size,r=e.align,s=e.computed,l=e.prevButtonEvents,o=e.nextButtonEvents,u=e.pageButtonEvents;return s.total>s.perPage?a("ul",{staticClass:"pagination",class:{"pagination-sm":"small"==i,"pagination-lg":"large"==i,"justify-content-center":"center"==r,"justify-content-end":"right"==r}},[s.prevPageUrl||n?a("li",{staticClass:"page-item pagination-prev-nav",class:{disabled:!s.prevPageUrl}},[a("a",t._g({staticClass:"page-link",attrs:{href:"#","aria-label":"Previous",tabindex:!s.prevPageUrl&&-1}},l),[t._t("prev-nav",[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])],2)]):t._e(),t._l(s.pageRange,(function(e,n){return a("li",{key:n,staticClass:"page-item pagination-page-nav",class:{active:e==s.currentPage}},[a("a",t._g({staticClass:"page-link",attrs:{href:"#"}},u(e)),[t._v("\n                "+t._s(e)+"\n                "),e==s.currentPage?a("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])])})),s.nextPageUrl||n?a("li",{staticClass:"page-item pagination-next-nav",class:{disabled:!s.nextPageUrl}},[a("a",t._g({staticClass:"page-link",attrs:{href:"#","aria-label":"Next",tabindex:!s.nextPageUrl&&-1}},o),[t._t("next-nav",[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])],2)]):t._e()],2):t._e()}}],null,!0)})}),[],!1,null,null,null).exports;e.default=s}}).default}}]);