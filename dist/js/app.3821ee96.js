(function(){"use strict";var t={1507:function(t,n,e){var r=e(9242),a=e(3396);const o=t=>((0,a.dD)("data-v-fe5a5f44"),t=t(),(0,a.Cn)(),t),i={class:"app"},s=o((()=>(0,a._)("div",{class:"app__top-strip"},null,-1))),u={class:"app__container"};function l(t,n,e,r,o,l){const c=(0,a.up)("ui-comp-nav-menu"),d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",i,[s,(0,a.Wm)(c,{class:"app__ui-nav"}),(0,a._)("div",u,[(0,a.Wm)(d,{class:"app__router-screen"})])])}const c=t=>((0,a.dD)("data-v-21ae81f0"),t=t(),(0,a.Cn)(),t),d={class:"ui-comp-nav-menu menu"},p={class:"menu__wrapper"},_=c((()=>(0,a._)("div",{class:"menu__img"},null,-1))),b={class:"menu__nav nav"};function f(t,n,e,r,o,i){const s=(0,a.up)("ui-button-main");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",p,[_,(0,a._)("div",b,[(0,a.Wm)(s,{class:"menu__ui-button",isDisabled:o.isDisabled,title:o.button1,onButtonClick:n[0]||(n[0]=n=>t.handleClick(1))},null,8,["isDisabled","title"]),(0,a.Wm)(s,{class:"menu__ui-button",isDisabled:o.isDisabled,title:o.button2,onButtonClick:n[1]||(n[1]=n=>t.handleClick(2))},null,8,["isDisabled","title"])])])])}var m=e(7139);function v(t,n,e,r,o,i){return(0,a.wg)(),(0,a.iD)("div",{class:(0,m.C_)(["ui-button-main button",{"disabled-base":e.isDisabled}]),onClick:n[0]||(n[0]=t=>i.handleClick())},[(0,a._)("p",{class:(0,m.C_)(["button__title",{"disabled-txt":e.isDisabled}])},(0,m.zw)(e.title),3)],2)}var h={name:"ui-button-main",data(){return{}},props:{isDisabled:{type:Boolean,default:!1},title:{type:String||Number,default:"button title"}},methods:{handleClick(){this.$emit("buttonClick")}}},g=e(89);const w=(0,g.Z)(h,[["render",v],["__scopeId","data-v-f4677960"]]);var y=w,k={components:{uiButtonMain:y},name:"ui-comp-nav-menu",data(){return{button1:"Users",button2:"Sing Up",isDisabled:!1}},methods:{},computed:{}};const C=(0,g.Z)(k,[["render",f],["__scopeId","data-v-21ae81f0"]]);var E=C,D={components:{uiCompNavMenu:E},name:"App"};const x=(0,g.Z)(D,[["render",l],["__scopeId","data-v-fe5a5f44"]]);var O=x,S=e(2483);const B=t=>((0,a.dD)("data-v-3f8d94a6"),t=t(),(0,a.Cn)(),t),z={class:"main-page page"},I={class:"page__container"},W={class:"page__header header"},N={class:"header__container"},Z={class:"header__wrapper"},T={class:"header__title"},j={class:"header__title-adds"},A={class:"page__main main"},M={class:"inputs__upload upload"},U=B((()=>(0,a._)("br",null,null,-1))),P=B((()=>(0,a._)("hr",null,null,-1))),H=B((()=>(0,a._)("br",null,null,-1))),L={class:"page__footer"},F={class:"footer__post-wrapper post"},R={class:"post__inputs-wrapper inputs"},$={class:"inputs__upload upload"},q=B((()=>(0,a._)("br",null,null,-1))),G=B((()=>(0,a._)("hr",null,null,-1))),J=B((()=>(0,a._)("br",null,null,-1))),V=B((()=>(0,a._)("br",null,null,-1))),K=B((()=>(0,a._)("br",null,null,-1))),Q=B((()=>(0,a._)("hr",null,null,-1))),X=B((()=>(0,a._)("br",null,null,-1))),Y=B((()=>(0,a._)("br",null,null,-1)));function tt(t,n,e,r,o,i){const s=(0,a.up)("ui-button-main"),u=(0,a.up)("ui-comp-upload");return(0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("div",I,[(0,a._)("header",W,[(0,a._)("div",N,[(0,a._)("div",Z,[(0,a._)("h1",T,(0,m.zw)(o.title),1),(0,a._)("p",j,(0,m.zw)(o.titleAdds),1),(0,a.Wm)(s,{class:"header__button",isDisabled:!1,title:o.button1,onButtonClick:n[0]||(n[0]=n=>t.handleClick())},null,8,["title"])])])]),(0,a._)("main",A,[(0,a._)("div",M,[U,P,H,(0,a.Wm)(u)])]),(0,a._)("footer",L,[(0,a._)("section",F,[(0,a._)("div",R,[(0,a._)("div",$,[q,G,J,(0,a.Wm)(u)]),V,K,Q,X,Y])])])])])}const nt={class:"input__textarea"};function et(t,n,e,r,o,i){return(0,a.wg)(),(0,a.iD)("div",{class:(0,m.C_)(["ui-input-textarea input",{"error-base":e.isError}])},[(0,a._)("textarea",nt,"\r\n      "+(0,m.zw)(e.text)+"\r\n    ",1)],2)}var rt={name:"ui-input-textarea",data(){return{}},props:{isError:{type:Boolean,default:!0},text:{type:String||Number,default:"upload your photo"}},methods:{}};const at=(0,g.Z)(rt,[["render",et],["__scopeId","data-v-4a782b08"]]);var ot=at,it={components:{uiInputTextarea:ot},name:"main-page",data(){return{title:"test assignment for front-end developer",titleAdds:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.",button1:"Sing up"}},computed:{},methods:{}};const st=(0,g.Z)(it,[["render",tt],["__scopeId","data-v-3f8d94a6"]]);var ut=st;const lt=[{path:"/",name:"home",component:ut}],ct=(0,S.p7)({history:(0,S.PO)({NODE_ENV:"production",BASE_URL:"/test-work-abz-agency/"}.GP_BASE_URL),routes:lt});var dt=ct,pt=e(65),_t=(0,pt.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const bt={class:"ui-comp-upload block"};function ft(t,n,e,r,o,i){const s=(0,a.up)("ui-button-input"),u=(0,a.up)("ui-custom-input");return(0,a.wg)(),(0,a.iD)("div",bt,[(0,a.Wm)(s,{class:"block__button",isError:o.isError,title:o.btnTitle,hint:o.btnHint},null,8,["isError","title","hint"]),(0,a.Wm)(u,{class:"block__textarea",isError:o.isError,placeholder:o.placeholder},null,8,["isError","placeholder"])])}var mt={name:"ui-comp-upload",data(){return{isError:!0,btnTitle:"button",btnHint:"error txt",placeholder:"upload your photo"}},methods:{},computed:{}};const vt=(0,g.Z)(mt,[["render",ft],["__scopeId","data-v-738a2330"]]);var ht=vt,gt=[ht];const wt={class:"button__title"};function yt(t,n,e,r,o,i){const s=(0,a.up)("ui-bottom-hint");return(0,a.wg)(),(0,a.iD)("div",{class:(0,m.C_)(["ui-button-input button",{"error-base":e.isError}]),onClick:n[0]||(n[0]=t=>i.handleClick())},[(0,a._)("p",wt,(0,m.zw)(e.title),1),e.isError?((0,a.wg)(),(0,a.j4)(s,{key:0,class:"button__ui-error-hint",isError:e.isError,hint:e.hint},null,8,["isError","hint"])):(0,a.kq)("",!0)],2)}var kt={name:"ui-button-input",data(){return{}},props:{isError:{type:Boolean,default:!0},title:{type:String||Number,default:"button title"},hint:{type:String||Number,default:"parent hint text"}},methods:{handleClick(){this.$emit("buttonClick")}}};const Ct=(0,g.Z)(kt,[["render",yt],["__scopeId","data-v-1dffd9e0"]]);var Et=Ct;const Dt={class:"ui-bottom-hint hint"},xt={class:"hint__wrapper"};function Ot(t,n,e,r,o,i){return(0,a.wg)(),(0,a.iD)("div",Dt,[(0,a._)("div",xt,[(0,a._)("span",{class:(0,m.C_)(["hint__txt",{"if-error":e.isError}])},(0,m.zw)(e.hint),3)])])}var St={name:"ui-bottom-hint",data(){return{}},props:{isError:{type:Boolean,default:!1},hint:{type:String||Number,default:"error text"}}};const Bt=(0,g.Z)(St,[["render",Ot],["__scopeId","data-v-5a6abb8e"]]);var zt=Bt;const It={class:"input__content"};function Wt(t,n,e,r,o,i){return(0,a.wg)(),(0,a.iD)("div",{class:(0,m.C_)(["ui-custom-input input",{"error-base":e.isError}])},[(0,a._)("div",It,(0,m.zw)(e.content),1)],2)}var Nt={name:"ui-custom-input",data(){return{}},props:{isError:{type:Boolean,default:!0},content:{type:String||Number,default:"upload your photo"}},methods:{}};const Zt=(0,g.Z)(Nt,[["render",Wt],["__scopeId","data-v-e124bf4a"]]);var Tt=Zt,jt=[y,Et,zt,Tt,ot];const At=[...gt,...jt],Mt=(0,r.ri)(O);At.forEach((t=>Mt.component(t.name,t))),Mt.use(_t).use(dt).mount("#app")}},n={};function e(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return t[r].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(n,r,a,o){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],o=t[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(e.O).every((function(t){return e.O[t](r[u])}))?r.splice(u--,1):(s=!1,o<i&&(i=o));if(s){t.splice(c--,1);var l=a();void 0!==l&&(n=l)}}return n}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[r,a,o]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var a,o,i=r[0],s=r[1],u=r[2],l=0;if(i.some((function(n){return 0!==t[n]}))){for(a in s)e.o(s,a)&&(e.m[a]=s[a]);if(u)var c=u(e)}for(n&&n(r);l<i.length;l++)o=i[l],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(c)},r=self["webpackChunk_2023_11_29_abz_agency_test"]=self["webpackChunk_2023_11_29_abz_agency_test"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(1507)}));r=e.O(r)})();
//# sourceMappingURL=app.3821ee96.js.map