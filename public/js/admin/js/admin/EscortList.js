"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4840],{39032:(t,s,e)=>{e.r(s),e.d(s,{default:()=>r});const a={name:"ListEscrtUpdate",data:function(){return{escort:""}},created:function(){this.escortUpdate()},methods:{escortUpdate:function(){var t=this;axios.get("/api/escortUpdates/".concat(this.$route.params.tour_code)).then((function(s){t.escort=s.data}))},goBack:function(){this.$router.push("/booked-tour/".concat(this.$route.params.id))}}};const r=(0,e(51900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"content"},[e("div",{staticClass:"row justify-content-around"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"container container_admin_body"},[e("div",{staticClass:"reservation"},[e("div",{staticClass:"ml-4"},[e("div",{staticClass:"ml-1"},[t._m(0),t._v(" "),t.escort.escort?e("div",{staticClass:"w-100"},[e("div",{staticClass:"row"},[e("table",{staticClass:"table"},[t._m(1),t._v(" "),e("tbody",[e("tr",[e("td",{staticClass:"border-0"},[t._v("Male")]),t._v(" "),e("td",{staticClass:"text-center border-0"},[t._v("\n                          "+t._s(t.escort.total_male)+"\n                        ")]),t._v(" "),e("td",{staticClass:"text-center border-0"},[t._v("\n                          "+t._s(t.escort.absent_male)+"\n                        ")])]),t._v(" "),e("tr",[e("td",{staticClass:"border-0"},[t._v("Female")]),t._v(" "),e("td",{staticClass:"text-center border-0"},[t._v("\n                          "+t._s(t.escort.total_male)+"\n                        ")]),t._v(" "),e("td",{staticClass:"text-center border-0"},[t._v("\n                          "+t._s(t.escort.absent_male)+"\n                        ")])])])])]),t._v(" "),t._m(2),t._v(" "),e("p",{staticClass:"m-0"},[t._v(t._s(t.escort.message))]),t._v(" "),t._m(3),t._v(" "),e("p",{},[t._v(t._s(t.escort.escort.name))])]):e("div",{staticClass:"mt-5 text-center"},[e("p",{staticClass:"text-muted"},[t._v("No Updates from escort")])])])])])])])])])}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("label",[t._v("Update from Escort")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("th",{staticClass:"border-0"},[t._v("Gender")]),t._v(" "),e("th",{staticClass:"text-center border-0"},[t._v("Passenger")]),t._v(" "),e("th",{staticClass:"text-center border-0"},[t._v("Absent Passenger")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"m-0"},[e("label",[t._v("Comment from Escort")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"m-0 mt-3"},[e("label",[t._v("Escort Name")])])}],!1,null,null,null).exports}}]);