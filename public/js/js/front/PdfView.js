"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7924],{72106:(t,s,n)=>{n.r(s),n.d(s,{default:()=>a});const e={name:"PdfView",data:function(){return{pdf:""}},mounted:function(){this.getPdf()},methods:{getPdf:function(){var t=this,s="/api/pdf/"+this.$route.params.slug;this.$axios.get(s).then((function(s){t.pdf=s.data}))}}};const a=(0,n(51900).Z)(e,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[n("img",{staticClass:"img w-20 mr-2 link mb-2",attrs:{src:t.$gbiAssets+"/images/icons/back.png"},on:{click:function(s){return t.$router.go(-1)}}}),t._v(" "),t.pdf?n("div",[n("iframe",{staticClass:"w-100 h-400",attrs:{id:"fraDisabled",src:"/encyclopedia/pdf/"+t.pdf.name+"#toolbar=0&navpanes=0"}})]):t._e()])}),[],!1,null,null,null).exports}}]);