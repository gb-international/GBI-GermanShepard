(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{12:function(t,s,a){"use strict";var e={components:{"back-button":a(17).a},props:["backurl"]},i=a(0),n=Object(i.a)(e,(function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"content"},[s("div",{staticClass:"row pt-3 pb-4"},[s("div",{staticClass:"col-sm-12 card_view"},[this._t("viewdata"),this._v(" "),s("div",{staticClass:"text-center"},[s("back-button",{attrs:{url:this.backurl}})],1)],2)])])}),[],!1,null,null,null);s.a=n.exports},17:function(t,s,a){"use strict";var e={props:["url"],methods:{goBack:function(){this.$router.back()}}},i=a(0),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",[t.url?a("router-link",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{to:t.url},on:{click:function(s){return t.goBack()}}},[t._t("default",[t._v("Back")])],2):a("button",{staticClass:"btn btn-primary itrn_add_btn back_btn text-uppercase font-weight-bold",attrs:{type:"button"},on:{click:function(s){return t.goBack()}}},[t._t("default",[t._v("Back")])],2)],1)}),[],!1,null,null,null);s.a=n.exports},246:function(t,s,a){"use strict";a.r(s);var e={name:"ViewCategories",components:{"view-layout":a(12).a},data:function(){return{posts:[]}},created:function(){this.categoryView()},methods:{categoryView:function(){var t=this;axios.get("/api/posts/".concat(this.$route.params.id)).then((function(s){t.posts=s.data,console.log(t.posts)}))},imagePath:function(t){return"/images/post/"+t},goBack:function(){this.$router.push("/posts")}}},i=a(0),n=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view-layout",{attrs:{backurl:"/posts"},scopedSlots:t._u([{key:"viewdata",fn:function(){return[a("div",{staticClass:"col-sm-12"},[a("h5",[t._v("Title")]),t._v(" "),a("p",[t._v(t._s(t.posts.title))])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Banner image")]),t._v(" "),a("img",{staticClass:"w-100",attrs:{src:t.imagePath(t.posts.image)}})]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("h5",[t._v("Description")]),t._v(" "),a("p",{domProps:{innerHTML:t._s(t.posts.description)}})]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Slug")]),t._v(" "),a("p",[t._v(t._s(t.posts.slug))])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Meta Title")]),t._v(" "),a("p",[t._v(t._s(t.posts.meta_title))])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Meta Keyword")]),t._v(" "),a("p",[t._v(t._s(t.posts.meta_keyword))])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Created At")]),t._v(" "),a("p",[t._v(t._s(t.posts.created_at))])]),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Category")]),t._v(" "),t._l(t.posts.categories,(function(s){return a("span",{key:s.id},[t._v(t._s(s.title)+",")])}))],2),t._v(" "),a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("Tags")]),t._v(" "),t._l(t.posts.tags,(function(s){return a("span",{key:s.id},[t._v(t._s(s.title)+",")])}))],2)]},proxy:!0}])})}),[],!1,null,null,null);s.default=n.exports}}]);