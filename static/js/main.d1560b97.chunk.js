(this["webpackJsonprelumie-client-web"]=this["webpackJsonprelumie-client-web"]||[]).push([[0],{18:function(n,e,t){"use strict";t.r(e);var c=t(1),r=t.n(c),a=t(8),o=t.n(a),i=t(7),s=t.n(i),u=t(2),l=t.n(u),T=t(3),d=t(4),f=t(5),S=t(9),p=t(10),E=function(){function n(){Object(S.a)(this,n)}return Object(p.a)(n,null,[{key:"delay",value:function(){var n=Object(T.a)(l.a.mark((function n(e){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){return setTimeout(n,e)})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}]),n}(),b={modal_alerts:[]},h=r.a.createContext(b),j=t(0),m=function(n){return Object(j.jsxs)("div",{style:{maxHeight:"".concat(80,"vh"),overflow:"auto"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"button",onClick:n.onCancel,children:"\xd7"})}),Object(j.jsx)("div",{style:{whiteSpace:"pre-wrap",lineBreak:"anywhere",width:"".concat(720,"px"),maxWidth:"".concat(90,"vw")},children:n.message}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"button",onClick:n.onConfirm,children:"Ok"})})]})};m.defaultProps={message:"NO MESSAGE",onConfirm:function(){},onCancel:function(){}};var O=m,v=t(11),g=t.n(v).a.bind(s.a),x=function(n){var e=r.a.useState(!1),t=Object(d.a)(e,2),a=t[0],o=t[1],i=r.a.useState(!1),s=Object(d.a)(i,2),u=s[0],f=s[1],S=r.a.useState([]),p=Object(d.a)(S,2),b=p[0],h=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(T.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!1),o(!0),h(n.modals),e.next=5,E.delay(200);case 5:f(!0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(T.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!1),e.next=3,E.delay(200);case 3:o(!1),h(n.modals);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.modals.length>b.length?function(n){e.apply(this,arguments)}():n.modals.length<b.length&&function(n){t.apply(this,arguments)}()}),[n.modals,b]),b.length?Object(j.jsxs)("div",{id:"modal-alert",className:g({visible:a,opacity:u}),children:[Object(j.jsx)("div",{className:"modal-alert-backdrop",onClick:function(n){return console.log("clicked backdrop")}}),Object(j.jsx)("div",{className:"modal-alert-container",children:b[0]})]}):null};x.defaultProps={modals:[],closeCurrentModal:function(){return console.log("closeCurrentModal() is not defined.")}};var C=x;var w=function(){var n=r.a.useReducer((function(n,e){return Object(f.a)(Object(f.a)({},n),e)}),b),e=Object(d.a)(n,2),t=e[0],c=e[1],a=r.a.useState([]),o=Object(d.a)(a,2),i=o[0],s=o[1];function u(n){s((function(n){if(!n.length)return n;var e=n.slice();return e.shift(),e.length||document.getElementsByTagName("body")[0].classList.remove("overflow-hidden"),e}))}function S(n){return p.apply(this,arguments)}function p(){return(p=Object(T.a)(l.a.mark((function n(e){var t,c,r,a,o,i,T;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.Modal,c=e.props,r=void 0===c?{}:c,a=e.onConfirm,o=void 0===a?function(){}:a,i=e.onCancel,T=void 0===i?function(){}:i,n.abrupt("return",new Promise((function(n,e){document.getElementsByTagName("body")[0].classList.add("overflow-hidden"),s((function(e){var c=e.slice();return c.push(Object(j.jsx)(t,Object(f.a)(Object(f.a)({},r),{},{onConfirm:function(e){o(),u(),n(!0)},onCancel:function(e){T(),u(),n(!1)}}))),c}))})));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(j.jsx)(h.Provider,{value:Object.assign({},t,{setState:c,pushMessageModal:S}),children:Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)(C,{modals:i,closeCurrentModal:u}),Object(j.jsxs)("div",{style:{height:"".concat(100,"vh"),whiteSpace:"pre-wrap"},children:[Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"button",onClick:function(){var n=Object(T.a)(l.a.mark((function n(e){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S({Modal:O,props:{message:"\ud14c\uc2a4\ud2b8 \uba54\uc138\uc9c0\uc785\ub2c8\ub2e4."},onConfirm:function(){console.log("CONFIRM")},onCancel:function(){console.log("CANCEL 73473")}});case 2:if(t=n.sent,console.log("MODAL_CONFIRMED? : "+t),!1!==t){n.next=6;break}return n.abrupt("return");case 6:return n.next=8,S({Modal:O,props:{message:"\ud14c\uc2a4\ud2b8 \uba54\uc138\uc9c0\uc785\ub2c8\ub2e4. 2"},onConfirm:function(){console.log("CONFIRM")},onCancel:function(){console.log("CANCEL 52374")}});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),children:"PUSH MODAL"})}),Object(j.jsx)("div",{children:JSON.stringify(t)+"\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET\nTSET"})]})]})})},y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),c(n),r(n),a(n),o(n)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),y()},7:function(n,e,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.d1560b97.chunk.js.map