(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{242:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"hello":"wowow","bye":"so good bye"},"ru":{"hello":"Наконец-то","bye":"влаофжыва"}}'),delete t.options._Ctor}},243:function(t,e,n){"use strict";var o=n(242),l=n.n(o);e.default=l.a},245:function(t,e,n){"use strict";n.r(e);n(38);var o={computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},l=n(44),c=n(243),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-purple-300 h-96 container mx-auto"},[t._v("\n  "+t._s(t.$t("hello"))+"\n  "),n("h1",[t._v(t._s(t.$t("bye")))]),t._v(" "),t._l(t.availableLocales,(function(e){return n("NuxtLink",{key:e.code,attrs:{to:t.switchLocalePath(e.code)}},[t._v(t._s(e.code)+"\n  ")])}))],2)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports}}]);