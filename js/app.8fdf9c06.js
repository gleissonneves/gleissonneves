(function(){"use strict";var e={7056:function(e,n,t){var o=t(9242),r=t(3396);const i={class:"container-app"};function u(e,n,t,o,u,a){const s=(0,r.up)("header-component"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r._)("main",i,[(0,r.Wm)(c)])],64)}function a(e,n,t,o,i,u){const a=(0,r.up)("logo-component"),s=(0,r.up)("menu-component");return(0,r.wg)(),(0,r.iD)("header",null,[(0,r._)("nav",null,[(0,r.Wm)(a),(0,r.Wm)(s)])])}var s=t.p+"img/logo.95f2bb2d.svg";const c=["height"];function l(e,n,t,o,i,u){return(0,r.wg)(),(0,r.iD)("img",{alt:"GN logo",src:s,height:t.height},null,8,c)}var f={name:"LogoComponent",props:{height:{type:Number,required:!1,default:59}}},d=t(89);const m=(0,d.Z)(f,[["render",l]]);var p=m,g=t(7139);const h={class:"menu-content-item"},v=(0,r.Uk)("Home"),b={class:"menu-content-item"},y=(0,r.Uk)("Sobre Mim"),w=(0,r._)("li",{class:"menu-content-item"},[(0,r._)("a",{href:"https://medium.com/@gleissonneves",target:"_blank"},"Blog")],-1),k={key:0,class:"fa-solid fa-bars color-writh bar-list"},C={key:1,class:"fa-solid fa-x color-writh close-list"};function _(e,n,t,o,i,u){const a=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("ul",{id:"menu-content",class:(0,g.C_)({"display-block":!i.toggleState})},[(0,r._)("li",h,[(0,r.Wm)(a,{to:"/",replace:""},{default:(0,r.w5)((()=>[v])),_:1})]),(0,r._)("li",b,[(0,r.Wm)(a,{to:"/sobre-mim",replace:""},{default:(0,r.w5)((()=>[y])),_:1})]),w],2),(0,r._)("button",{id:"menu-button-toggle",onClick:n[0]||(n[0]=e=>u.toggleMenu())},[i.toggleState?((0,r.wg)(),(0,r.iD)("i",k)):((0,r.wg)(),(0,r.iD)("i",C))])],64)}var O={data(){return{showMenu:String,toggleState:{type:Boolean,default:!1}}},methods:{toggleMenu(){this.toggleState=!this.toggleState}}};const S=(0,d.Z)(O,[["render",_]]);var j=S,E={components:{LogoComponent:p,MenuComponent:j}};const M=(0,d.Z)(E,[["render",a]]);var T=M,A={components:{HeaderComponent:T}};const N=(0,d.Z)(A,[["render",u]]);var D=N,P=t(678);const L=[{path:"/",name:"home",component:()=>t.e(495).then(t.bind(t,6495))},{path:"/sobre-mim",name:"sobreMim",component:()=>t.e(356).then(t.bind(t,3188))},{path:"/:pathMatch(.*)*",name:"notFound",component:()=>t.e(131).then(t.bind(t,3131))}],x=(0,P.p7)({history:(0,P.PO)("/gleissonneves/"),routes:L});var W=x,B=t(65),F=(0,B.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(D).use(F).use(W).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var u=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{131:"1743be75",356:"170a38c6",495:"30d6b9cd"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{356:"678a08d7",495:"503e3e44"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="gleissonneves:";t.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+i){a=f;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=o),e[o]=[r];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/gleissonneves/"}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=u,s.request=a,r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=i,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var u=t.miniCssF(o),a=t.p+u;if(n(u,a))return r();e(o,a,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={356:1,495:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var u=t.p+t.u(n),a=new Error,s=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};t.l(u,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,u=o[0],a=o[1],s=o[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(s)var l=s(t)}for(n&&n(o);c<u.length;c++)i=u[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunkgleissonneves"]=self["webpackChunkgleissonneves"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(7056)}));o=t.O(o)})();
//# sourceMappingURL=app.8fdf9c06.js.map