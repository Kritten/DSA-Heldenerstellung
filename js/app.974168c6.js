(()=>{var e={2603:(e,t,r)=>{"use strict";r(71),r(5363);var o=r(8880),n=r(2277),a=r(3673),l=r(2323),u=r(5578),i=r.n(u);function s(e,t,r,o,n,u){const s=(0,a.up)("q-btn"),c=(0,a.up)("q-img"),p=(0,a.up)("q-avatar"),d=(0,a.up)("q-toolbar-title"),f=(0,a.up)("q-toolbar"),m=(0,a.up)("q-header"),b=(0,a.up)("q-separator"),w=(0,a.up)("q-icon"),v=(0,a.up)("q-item-section"),h=(0,a.up)("q-item"),g=(0,a.up)("q-list"),y=(0,a.up)("q-drawer"),_=(0,a.up)("router-view"),Z=(0,a.up)("q-page-container"),O=(0,a.up)("q-layout");return(0,a.wg)(),(0,a.j4)(O,{view:"hHh lpR fFf"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{elevated:"",class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{dense:"",flat:"",round:"",icon:"menu",onClick:t[0]||(t[0]=t=>e.isCollapsed=!e.isCollapsed)}),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{src:i()})])),_:1}),(0,a.Uk)(" "+(0,l.zw)(e.t("app.label")),1)])),_:1})])),_:1})])),_:1}),(0,a.Wm)(y,{modelValue:e.isCollapsed,"onUpdate:modelValue":t[1]||(t[1]=t=>e.isCollapsed=t),"show-if-above":"",side:"left",bordered:"",mini:e.miniState,"mini-to-overlay":"",onMouseover:t[2]||(t[2]=t=>e.miniState=!1),onMouseout:t[3]||(t[3]=t=>e.miniState=!0)},{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.routes,((e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e.label},[e.separator?((0,a.wg)(),(0,a.j4)(b,{key:"sep"+t})):(0,a.kq)("",!0),(0,a.Wm)(h,{to:{name:e.name},clickable:"",exact:""},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{name:e.icon},null,8,["name"])])),_:2},1024),(0,a.Wm)(v,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.label),1)])),_:2},1024)])),_:2},1032,["to"])],64)))),128))])),_:1})])),_:1},8,["modelValue","mini"]),(0,a.Wm)(Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(_)])),_:1})])),_:1})}var c=r(1959),p=r(5175),d=r(5640);const f=(0,a.aZ)({name:"App",setup(){const{t:e}=(0,p.QT)(),t=(0,c.iH)(!1),r=(0,c.iH)(!1),o=[{label:e("home.label"),name:"home",icon:d.ZZ2},{label:e("creator.label"),name:"creator",icon:d.dAY},{label:e("about.label"),name:"about",icon:d.zl_,separator:!0}];return{t:e,isCollapsed:t,miniState:r,toggleLeftDrawer(){t.value=!t.value},routes:o}}});var m=r(4260),b=r(3066),w=r(3812),v=r(9570),h=r(522),g=r(3747),y=r(5096),_=r(4027),Z=r(3949),O=r(7011),j=r(5869),k=r(3414),P=r(2035),q=r(4554),Q=r(2652),S=r(7518),C=r.n(S);const W=(0,m.Z)(f,[["render",s]]),x=W;C()(f,"components",{QLayout:b.Z,QHeader:w.Z,QToolbar:v.Z,QBtn:h.Z,QToolbarTitle:g.Z,QAvatar:y.Z,QImg:_.Z,QDrawer:Z.Z,QList:O.Z,QSeparator:j.Z,QItem:k.Z,QItemSection:P.Z,QIcon:q.Z,QPageContainer:Q.Z});var H=r(7083),T=r(9582);const M=(0,a.Uk)(" Creator ");function A(e,t,r,o,n,l){const u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(u,{to:{name:"creator"}},{default:(0,a.w5)((()=>[M])),_:1})}const V=(0,a.aZ)({name:"ViewHome",setup(){return{}}}),D=(0,m.Z)(V,[["render",A]]),I=D;function U(e,t,r,o,n,a){return" creator "}const z=(0,a.aZ)({name:"ViewCreator",setup(){return{}}}),E=(0,m.Z)(z,[["render",U]]),B=E,L=(0,a.Uk)(" Creator ");function Y(e,t,r,o,n,l){const u=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(u,{to:{name:"creator"}},{default:(0,a.w5)((()=>[L])),_:1})}const F=(0,a.aZ)({name:"ViewAbout",setup(){return{}}}),K=(0,m.Z)(F,[["render",Y]]),N=K,R=[{name:"home",path:"/",component:I},{name:"creator",path:"/creator",component:B},{name:"about",path:"/about",component:N}],G=R,J=(0,H.BC)((()=>{const e=T.PO,t=(0,T.p7)({scrollBehavior:()=>({left:0,top:0}),routes:G,history:e("/")});return t}));async function X(e,t){const r="function"===typeof J?await J({}):J,o=e(x);return o.use(n.Z,t),{app:o,router:r}}const $={config:{}};var ee=r(1413);(0,ee.z)("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(736).then(r.t.bind(r,9501,23));const te="/";async function re({app:e,router:t},r){let o=!1;const n=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let i=0;!1===o&&i<r.length;i++)try{await r[i]({app:e,router:t,ssrContext:null,redirect:a,urlPath:l,publicPath:te})}catch(u){return u&&u.url?void a(u.url):void console.error("[Quasar] boot error:",u)}!0!==o&&(e.use(t),e.mount("#q-app"))}X(o.ri,$).then((e=>Promise.all([Promise.resolve().then(r.bind(r,9513))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));re(e,r)}))))},9513:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var o=r(7083),n=r(5175);const a={app:{label:"DSA Helden Erstellung"},home:{label:"Startseite"},creator:{label:"Helden Erstellung"},about:{label:"Info"}},l={de:a},u=(0,o.xr)((({app:e})=>{const t=(0,n.o)({locale:"de",messages:l});e.use(t)}))},5578:(e,t,r)=>{e.exports=r.p+"img/logo.815d883c.png"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var l=1/0;for(c=0;c<e.length;c++){for(var[o,n,a]=e[c],u=!0,i=0;i<o.length;i++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](o[i])))?o.splice(i--,1):(u=!1,a<l&&(l=a));if(u){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"===typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"===typeof o.then)return o}var a=Object.create(null);r.r(a);var l={};e=e||[null,t({}),t([]),t(t)];for(var u=2&n&&o;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((e=>l[e]=()=>o[e]));return l["default"]=()=>o,r.d(a,l),a}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.e=()=>Promise.resolve()})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e={143:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[l,u,i]=o,s=0;if(l.some((t=>0!==e[t]))){for(n in u)r.o(u,n)&&(r.m[n]=u[n]);if(i)var c=i(r)}for(t&&t(o);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[l[s]]=0;return r.O(c)},o=self["webpackChunkdsa_helden_erstellung"]=self["webpackChunkdsa_helden_erstellung"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(2603)));o=r.O(o)})();