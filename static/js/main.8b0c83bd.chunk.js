(this["webpackJsonprelumie-client-web"]=this["webpackJsonprelumie-client-web"]||[]).push([[0],{26:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(41),s=n.n(c),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},i=(n(48),n(26)),l=n.n(i),u=n(2),d=n.n(u),b=n(7),p=n(8),h=n(6),f=n(12),j=n(14),m=n(15),g=function(){function e(){Object(j.a)(this,e)}return Object(m.a)(e,null,[{key:"delay",value:function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e,t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v={isWideMode:!1},x=r.a.createContext(v),O=n(4),y=n(42),w=n.n(y).a.bind(l.a),C=n(0),k=function(e){var t=r.a.useState(!1),n=Object(p.a)(t,2),c=n[0],s=n[1],o=r.a.useState(!1),i=Object(p.a)(o,2),l=i[0],u=i[1],h=r.a.useState([]),f=Object(p.a)(h,2),j=f[0],m=f[1];return Object(a.useEffect)((function(){function t(){return(t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!1),s(!0),m(e.modals),t.next=5,g.delay(n);case 5:u(!0);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function n(){return(n=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!1),t.next=3,g.delay(n);case 3:s(!1),m(e.modals);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.modals.length>j.length?function(e){t.apply(this,arguments)}(100):e.modals.length<j.length&&function(e){n.apply(this,arguments)}(200)}),[e.modals,j]),j.length?Object(C.jsxs)("div",{className:w({"modal-wrapper":!0,visible:c,opacity:l}),children:[Object(C.jsx)("div",{className:"modal-wrapper-backdrop",onClick:e.closeCurrentModal}),Object(C.jsx)("div",{className:"modal-wrapper-container",children:j[0]})]}):null};k.defaultProps={modals:[],closeCurrentModal:function(){return console.log("closeCurrentModal() is not defined.")}};var N=k,S=function(e){return Object(C.jsxs)("div",{style:{maxHeight:"".concat(80,"vh"),overflow:"auto"},children:[Object(C.jsx)("div",{className:"text-end pt-2 pe-2",children:Object(C.jsx)("button",{type:"button",className:"btn-close",onClick:e.onCancel})}),Object(C.jsx)("div",{className:"py-3",style:{whiteSpace:"pre-wrap",lineBreak:"anywhere",width:"".concat(480,"px"),maxWidth:"".concat(90,"vw")},children:e.message}),Object(C.jsx)("div",{className:"text-end",children:Object(C.jsx)("button",{type:"button",className:"btn btn-primary text-light fw-bold rounded",onClick:e.onConfirm,children:"\ud655\uc778"})})]})};S.defaultProps={message:"NO MESSAGE",onConfirm:function(){},onCancel:function(){}};var M=S,E=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{children:"Here's main"}),Object(C.jsx)("br",{}),Object(C.jsx)(x.Consumer,{children:function(e){return Object(C.jsxs)("div",{style:{whiteSpace:"pre-wrap"},children:[Object(C.jsx)("div",{children:Object(C.jsx)("button",{type:"button",onClick:function(){var t=Object(b.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.pushMessageModal({Modal:M,props:{message:"\ud14c\uc2a4\ud2b8 \uba54\uc138\uc9c0\uc785\ub2c8\ub2e4."},onConfirm:function(){console.log("CONFIRM")},onCancel:function(){console.log("CANCEL 73473")}});case 2:if(a=t.sent,console.log("MODAL_CONFIRMED? : "+a),!1!==a){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,e.pushMessageModal({Modal:M,props:{message:"\ud14c\uc2a4\ud2b8 \uba54\uc138\uc9c0\uc785\ub2c8\ub2e4. 2"},onConfirm:function(){console.log("CONFIRM")},onCancel:function(){console.log("CANCEL 52374")}});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"PUSH MODAL"})}),Object(C.jsx)("div",{children:JSON.stringify(e,"",2)})]})}})]})},B=n(18),T=n(16),_=n.n(T),A=_.a.create({baseURL:"".concat("http://1.233.86.212","/api"),timeout:3e3,headers:{"content-type":"application/json"}});A.interceptors.request.use((function(e){return e})),A.interceptors.response.use((function(e){return e}),(function(e){return e.response?Promise.reject(Object(h.a)({status:e.response.status,headers:e.config.headers,url:e.config.baseURL+e.config.url,params:e.config.data},e.response.data)):e.request?Promise.reject({status:e.request.status,headers:e.config.headers,url:e.config.baseURL+e.config.url,params:e.config.data,message:e.message}):Promise.reject(e)}));var R=A,I=function(e){var t=_.a.CancelToken.source();Object(a.useEffect)((function(){return function(){return t.cancel()}}),[t]);var n=Object(a.useContext)(x),c=r.a.useState({login_id:"",password:"",password_confirm:"",email:""}),s=Object(p.a)(c,2),o=s[0],i=s[1],l=function(e){var t=e.target.name;i((function(n){return Object(h.a)(Object(h.a)({},n),{},Object(B.a)({},t,e.target.value))}))},u=function(){var e=Object(b.a)(d.a.mark((function e(a){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,R.post("/auth/register",{login_id:o.login_id,password:o.password,"#email":o.email},{cancelToken:t.token});case 4:return r=e.sent,e.next=7,n.pushMessageModal({Modal:M,props:{message:"\uac00\uc785\ub418\uc5c8\uc2b5\ub2c8\ub2e4"},onConfirm:function(){console.log("CONFIRM")},onCancel:function(){console.log("CANCEL 52374")}});case 7:console.log(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)("form",{onSubmit:u,children:Object(C.jsxs)("div",{className:"mx-auto w-100p",style:{width:"".concat(100,"%"),maxWidth:"".concat(20,"em")},children:[Object(C.jsx)("input",{type:"text",name:"login_id",value:o.login_id,onChange:l,placeholder:"ID"}),Object(C.jsx)("input",{type:"password",name:"password",value:o.password,onChange:l,placeholder:"PASSWORD"}),Object(C.jsx)("input",{type:"password",name:"password_confirm",value:o.password_confirm,onChange:l,placeholder:"CONFIRM PASSWORD"}),Object(C.jsx)("input",{type:"email",name:"email",value:o.email,onChange:l,placeholder:"EMAIL"}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{type:"submit",value:"REGISTER"})})]})})},L=function(){function e(){Object(j.a)(this,e)}return Object(m.a)(e,null,[{key:"translateErrorMessages",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===e||void 0===e?void 0:e.message){var n={SequelizeDatabaseError:"DB \uad6c\ubb38 \uc5d0\ub7ec.\n\uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc138\uc694","timeout of":"\uc11c\ubc84 \uc751\ub2f5\uc2dc\uac04\uc774 \ucd08\uacfc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."};t=Object.assign(n,t);for(var a=e.message.toLowerCase(),r=Object.keys(t),c=0;c<r.length;++c){var s=r[c];if(a.indexOf(s.toLowerCase())>=0)return t[s]}}}}]),e}(),P=function(e){var t=_.a.CancelToken.source();Object(a.useEffect)((function(){return function(){return t.cancel()}}),[t]);var n=Object(a.useContext)(x),c=r.a.useState({login_id:"",password:"",password_confirm:"",email:""}),s=Object(p.a)(c,2),o=s[0],i=s[1],l=function(e){var t=e.target.name;i((function(n){return Object(h.a)(Object(h.a)({},n),{},Object(B.a)({},t,e.target.value))}))},u=function(){var e=Object(b.a)(d.a.mark((function e(a){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,R.post("/auth/login",{login_id:o.login_id,password:o.password},{cancelToken:t.token}).then((function(e){var t;return null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.content}));case 4:return r=e.sent,console.log(r),e.next=8,n.pushMessageModal({Modal:M,props:{message:"\ub85c\uadf8\uc778 \uc131\uacf5"},onConfirm:function(){console.log("CONFIRM")},onCancel:function(){console.log("CANCEL 52374")}});case 8:e.next=18;break;case 10:if(e.prev=10,e.t0=e.catch(1),!_.a.isCancel(e.t0)){e.next=15;break}return console.log("Canceled."),e.abrupt("return");case 15:return c=L.translateErrorMessages(e.t0,{"no user":"\ud574\ub2f9\ud558\ub294 \uc720\uc800\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."}),e.next=18,n.pushMessageModal({Modal:M,props:{message:c},onConfirm:function(){console.log("CONFIRM")},onCancel:function(){console.log("CANCEL 52374")}});case 18:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)("form",{onSubmit:u,children:Object(C.jsxs)("div",{className:"mx-auto w-100p py-3",style:{width:"".concat(100,"%"),maxWidth:"".concat(20,"em")},children:[Object(C.jsx)("input",{type:"text",className:"form-control",name:"login_id",value:o.login_id,onChange:l,placeholder:"ID"}),Object(C.jsx)("input",{type:"password",className:"form-control",name:"password",value:o.password,onChange:l,placeholder:"PASSWORD"}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{type:"submit",value:"LOGIN",className:"btn btn-primary w-100"})})]})})},D=n(3),F=n(20),Y=n(22),W=n(21);n(90);var G=function(e,t){var n=D.select("body").append("div").attr("class","tooltip").attr("id",e).style("pointer-events","none");function a(){n.style("opacity",0)}function r(e){var t=n.style("width"),a=n.style("height"),r=window.scrollX,c=window.scrollY,s=document.getElementById?e.clientX+r:e.pageX,o=document.getElementById?e.clientY+c:e.pageY,i=s-r+40+t>window.innerWidth?s-t-40:s+20;i<r+20&&(i=r+20);var l=o-c+20+a>window.innerWidth?o-a-20:o+10;l<c+10&&(l=c+10),n.style("top","".concat(l,"px")).style("left","".concat(i,"px"))}return t&&n.style("width",t),a(),{showTooltip:function(e,t){n.style("opacity",1).html(e),r(t)},hideTooltip:a,updatePosition:r}}("gates_tooltip",240),X=D.scaleOrdinal().domain(["low","medium","high"]).range(["#525b7a","#beccde","#5aa2bc"]),z=function(e){Object(Y.a)(n,e);var t=Object(W.a)(n);function n(e){var a;Object(j.a)(this,n),(a=t.call(this,e)).shouldComponentUpdate=function(){return!1},a.state={g:null};var r=a.props,c=r.forceStrength,s=r.center;return a.simulation=D.forceSimulation().velocityDecay(.2).force("x",D.forceX().strength(c).x(s.x)).force("y",D.forceY().strength(c).y(s.y)).force("charge",D.forceManyBody(a.charge.bind(Object(F.a)(a)))).on("tick",a.ticked.bind(Object(F.a)(a))).stop(),a}return Object(m.a)(n,[{key:"charge",value:function(e){return-this.props.forceStrength*Math.pow(e.radius,2)}},{key:"ticked",value:function(){this.state.g.selectAll(".bubble").attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y}))}},{key:"componentWillReceiveProps",value:function(e){e.data!==this.props.data&&this.renderBubbles(e.data),e.groupByYear!==this.props.groupByYear&&this.regroupBubbles(e.groupByYear)}},{key:"renderBubbles",value:function(e){var t=this,n=this.state.g.selectAll(".bubble").data(e,(function(e){return e.id}));n.exit().remove(),n.enter().append("circle").classed("bubble",!0).attr("r",0).attr("cx",(function(e){return e.x})).attr("cy",(function(e){return e.y})).attr("fill",(function(e){return X(e.group)})).attr("stroke",(function(e){return D.rgb(X(e.group)).darker()})).attr("stroke-width",2).on("mouseover",H).on("mouseout",U).transition().duration(2e3).attr("r",(function(e){return e.radius})).on("end",(function(){t.simulation.nodes(e).alpha(1).restart()}))}},{key:"regroupBubbles",value:function(e){var t=this.props,n=t.forceStrength,a=t.yearCenters,r=t.center;e?this.simulation.force("x",D.forceX().strength(n).x((function(e){return a[e.year].x}))).force("y",D.forceY().strength(n).y((function(e){return a[e.year].y}))):this.simulation.force("x",D.forceX().strength(n).x(r.x)).force("y",D.forceY().strength(n).y(r.y)),this.simulation.alpha(1).restart()}},{key:"onRef",value:function(e){var t=this;this.setState({g:D.select(e)},(function(){return t.renderBubbles(t.props.data)}))}},{key:"render",value:function(){return Object(C.jsx)("g",{ref:this.onRef.bind(this),className:"bubbles"})}}]),n}(r.a.Component);function H(e){D.select(this).attr("stroke","black");var t='<span class="name">Title: </span><span class="value">'.concat(e.name,"</span><br/>")+'<span class="name">Amount: </span><span class="value">$'.concat(e.value,"</span><br/>")+'<span class="name">Year: </span><span class="value">'.concat(e.year,"</span>");G.showTooltip(t,D.event)}function U(e){D.select(this).attr("stroke",D.rgb(X(e.group)).darker()),G.hideTooltip()}n(91);var q=function(e){Object(Y.a)(n,e);var t=Object(W.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onBtnClick=function(t){e.props.onChanged(t.target.name)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.active;return Object(C.jsxs)("div",{className:"GroupingPicker",children:[Object(C.jsx)("button",{className:"button ".concat("all"===e&&"active"),name:"all",onClick:this.onBtnClick,children:"All Grants"}),Object(C.jsx)("button",{className:"button ".concat("year"===e&&"active"),name:"year",onClick:this.onBtnClick,children:"Grants By Year"})]})}}]),n}(r.a.Component);function J(e){var t=e.yearCenters;return Object(C.jsx)("g",{className:"yearsTitles",children:Object.keys(t).map((function(e){return Object(C.jsx)("text",{x:t[e].x,y:50,fontSize:"35",textAnchor:"middle",alignmentBaseline:"middle",children:e},e)}))})}var $=function(e){var t=e.width,n=e.height,a=e.children;return Object(C.jsx)("svg",{className:"bubbleChart",width:t,height:n,children:a})},K=function(){var e=r.a.useState([]),t=Object(p.a)(e,2),n=t[0],a=t[1],c=r.a.useState("all"),s=Object(p.a)(c,2),o=s[0],i=s[1],l=r.a.useState({}),u=Object(p.a)(l,2),d=u[0],b=u[1];return r.a.useEffect((function(){var e=document.getElementById("main").clientWidth,t=document.getElementById("main").clientHeight-49;b({width:e,height:t,center:{x:e/2,y:t/2},yearCenters:{2008:{x:e/4,y:t/2},2009:{x:e/2,y:t/2},2010:{x:3/4*e,y:t/2}}});D.csv("/data/gates_money.csv",(function(n,r){if(n)console.log("error",n);else{var c=function(n){if(e&&t){var a=D.max(n,(function(e){return+e.total_amount})),r=D.scalePow().exponent(.5).range([2,85]).domain([0,a]),c=n.map((function(n){return{id:n.id,radius:r(+n.total_amount),value:+n.total_amount,name:n.grant_title,org:n.organization,group:n.group,year:n.start_year,x:Math.random()*e,y:Math.random()*t}}));return c.sort((function(e,t){return t.value-e.value})),c}}(r);a(c)}}))}),[]),Object(C.jsxs)("div",{style:{whiteSpace:"pre-wrap",lineBreak:"anywhere",height:"".concat(100,"%"),overflow:"auto"},children:[Object(C.jsx)(q,{onChanged:function(e){return i(e)},active:o}),d.width&&d.height&&Object(C.jsxs)($,{width:d.width,height:d.height,children:[Object(C.jsx)(z,{data:n,forceStrength:.08,center:d.center,yearCenters:d.yearCenters,groupByYear:"year"===o}),"year"===o&&Object(C.jsx)(J,{width:d.width,yearCenters:d.yearCenters})]})]})},Q=function(e){return Object(C.jsxs)(O.d,{children:[Object(C.jsx)(O.b,{path:"/auth/register",render:function(e){return Object(C.jsx)(I,Object(h.a)({},e))}}),Object(C.jsx)(O.b,{path:"/auth/login",render:function(e){return Object(C.jsx)(P,Object(h.a)({},e))}}),Object(C.jsx)(O.b,{path:"/d3/bubbles",render:function(e){return Object(C.jsx)(K,Object(h.a)({},e))}}),Object(C.jsx)(O.b,{exact:!0,path:"/",render:function(e){return Object(C.jsx)(E,Object(h.a)({},e))}}),Object(C.jsx)(O.b,{render:function(e){return Object(C.jsx)(O.a,{to:"/"})}})]})};var V=function(){var e=r.a.useReducer((function(e,t){return Object(h.a)(Object(h.a)({},e),t)}),v),t=Object(p.a)(e,2),n=t[0],a=t[1],c=r.a.useState([]),s=Object(p.a)(c,2),o=s[0],i=s[1],l=r.a.useState(!1),u=Object(p.a)(l,2),j=u[0],m=u[1];function O(){return(O=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.post("/util/check");case 3:m(!0),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("App.checkServer",e.t0),m(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i((function(e){if(!e.length)return e;var t=e.slice();return t.shift(),t})),o.length){e.next=5;break}return e.next=4,g.delay(200);case 4:document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(b.a)(d.a.mark((function e(t){var n,a,r,c,s,l,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Modal,a=t.props,r=void 0===a?{}:a,c=t.onConfirm,s=void 0===c?function(){}:c,l=t.onCancel,u=void 0===l?function(){}:l,e.abrupt("return",new Promise((function(e,t){o.length||document.getElementsByTagName("body")[0].classList.add("overflow-hidden");i((function(t){var a=t.slice();return a.push(Object(C.jsx)(n,Object(h.a)(Object(h.a)({},r),{},{onConfirm:function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s();case 2:return t.next=4,y();case 4:e(!0);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onCancel:function(){var t=Object(b.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:return t.next=4,y();case 4:e(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}))),a}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.useEffect((function(){!function(){O.apply(this,arguments)}()}),[]),Object(C.jsx)(f.a,{children:Object(C.jsx)(x.Provider,{value:Object.assign({},n,{setState:a,pushMessageModal:function(e){return k.apply(this,arguments)}}),children:Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)(N,{modals:o,closeCurrentModal:y}),Object(C.jsxs)("nav",{className:"d-block d-sm-none position-fixed w-100",children:[Object(C.jsx)("div",{className:"navbar navbar-dark bg-dark",children:Object(C.jsx)("div",{className:"container-fluid",children:Object(C.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(C.jsx)("span",{className:"navbar-toggler-icon"})})})}),Object(C.jsx)("div",{className:"collapse bg-dark",id:"navbarToggleExternalContent",children:Object(C.jsxs)("ul",{className:"nav nav-pills flex-column mb-auto fw-bold",style:{minHeight:"".concat(100,"vh")},children:[j&&Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)("li",{children:Object(C.jsx)(f.c,{to:"/auth/login",className:"nav-link fw-bold",children:"\ub85c\uadf8\uc778"})}),Object(C.jsx)("li",{children:Object(C.jsx)(f.c,{to:"/auth/register",className:"nav-link fw-bold",children:"\ud68c\uc6d0\uac00\uc785"})})]}),Object(C.jsx)("li",{children:Object(C.jsx)(f.b,{to:"/d3/bubbles",className:"nav-link fw-bold",children:"D3"})}),Object(C.jsx)("li",{className:"ps-2",children:Object(C.jsx)(f.c,{to:"/d3/bubbles",className:"nav-link fw-bold",style:{fontSize:"".concat(.875,"rem")},children:"Bubbles"})}),Object(C.jsx)("li",{children:Object(C.jsx)(f.c,{to:"/",className:"nav-link fw-bold",children:"TEST"})})]})})]}),Object(C.jsx)("div",{className:"d-block d-sm-none",style:{height:"".concat(48.5,"px")}}),Object(C.jsxs)("div",{className:"d-flex",children:[Object(C.jsx)("aside",{className:"flex-shrink-0 d-none d-sm-block overflow-auto bg-dark",style:{width:"".concat(16,"em"),height:"".concat(100,"vh")},children:Object(C.jsx)("nav",{children:Object(C.jsxs)("ul",{className:"nav nav-pills flex-column mb-auto fw-bold",children:[j&&Object(C.jsxs)(r.a.Fragment,{children:[Object(C.jsx)("li",{children:Object(C.jsx)(f.c,{to:"/auth/login",className:"nav-link fw-bold",children:"\ub85c\uadf8\uc778"})}),Object(C.jsx)("li",{children:Object(C.jsx)(f.c,{to:"/auth/register",className:"nav-link fw-bold",children:"\ud68c\uc6d0\uac00\uc785"})})]}),Object(C.jsx)("li",{children:Object(C.jsx)(f.b,{to:"/d3/bubbles",className:"nav-link fw-bold",children:"D3"})}),Object(C.jsx)("li",{children:Object(C.jsx)(f.c,{to:"/d3/bubbles",className:"nav-link fw-bold ps-4",style:{fontSize:"".concat(.875,"rem")},children:"Bubbles"})}),Object(C.jsx)("li",{children:Object(C.jsx)(f.c,{exact:!0,to:"/",className:"nav-link fw-bold",children:"TEST"})})]})})}),Object(C.jsx)("main",{id:"main",className:"flex-fill overflow-auto",style:{height:"".concat(100,"vh")},children:Object(C.jsx)(Q,{})})]})]})})})};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(V,{})}),document.getElementById("root")),o()}},[[97,1,2]]]);
//# sourceMappingURL=main.8b0c83bd.chunk.js.map