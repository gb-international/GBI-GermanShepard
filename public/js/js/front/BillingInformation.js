"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6191],{45793:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});const i={data:function(){return{isStudent:!1,isTeacher:!1}},components:{BillingStudent:function(){return t.e(1115).then(t.bind(t,81120))},BillingTeacher:function(){return t.e(8211).then(t.bind(t,84979))}},created:function(){var e=this.$cookies.get("user");"0"==e.is_incharge&&(this.isStudent=!0),"1"==e.is_incharge&&(this.isTeacher=!0)}};const s=(0,t(51900).Z)(i,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.isStudent?t("billing-student"):e._e(),e._v(" "),e.isTeacher?t("billing-teacher"):e._e()],1)}),[],!1,null,null,null).exports}}]);