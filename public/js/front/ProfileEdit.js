(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{252:function(e,t,n){"use strict";n.r(t);var i={data:function(){return{isStudent:!1,isTeacher:!1}},components:{ProfileeditStudent:function(){return n.e(32).then(n.bind(null,258))},ProfileeditTeacher:function(){return n.e(33).then(n.bind(null,259))}},created:function(){var e=this.$cookies.get("user");"student"==e.user_profession&&(this.isStudent=!0),"teacher"==e.user_profession&&(this.isTeacher=!0)}},s=n(0),r=Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.isStudent?t("profileedit-student"):this._e(),this._v(" "),this.isTeacher?t("profileedit-teacher"):this._e()],1)}),[],!1,null,null,null);t.default=r.exports}}]);