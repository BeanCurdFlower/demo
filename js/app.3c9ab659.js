(function(e){function t(t){for(var r,l,i=t[0],u=t[1],c=t[2],p=0,f=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1174:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b0c0");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Demo")},i=[],u={name:"HelloWorld"},c=u,s=n("2877"),p=Object(s["a"])(c,l,i,!1,null,"ea13420a",null),f=p.exports,d={name:"App",components:{HelloWorld:f}},m=d,v=Object(s["a"])(m,o,a,!1,null,null,null),h=v.exports,b=n("2f62");r["a"].use(b["a"]);var _={index:{email1:"163@163.com",email2:"qwe@qwe.com",email3:"abc@abc.com"}},y={},x={},g={},O={state:_,mutations:y,actions:x,getters:g},j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[e._m(0),n("input",{attrs:{type:"text"},domProps:{value:e.index.email1+"，"+e.index.email2+"，"+e.index.email3}}),e._m(1)])},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recipients"},[n("a",{attrs:{href:""}},[e._v("收件人")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"other"},[n("a",{attrs:{href:""}},[e._v("添加抄送 -")]),n("a",{attrs:{href:""}},[e._v("添加密送 |")]),n("a",{attrs:{href:""}},[e._v("分别发送")])])}],P={name:"Demo",computed:{index:function(){return this.$store.state.index}}},$=P,E=(n("dd78"),Object(s["a"])($,j,w,!1,null,null,null)),S=E.exports;r["a"].component(S.name,S),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(h)},store:O}).$mount("#app")},dd78:function(e,t,n){"use strict";n("1174")}});
//# sourceMappingURL=app.3c9ab659.js.map