(function(){"use strict";var t={511:function(t,r,o){var e=o(9242),n=o(3396);const i={class:"app"},s={class:"app__container"};function l(t,r,o,e,l,a){const u=(0,n.up)("ui-comp-nav-menu"),c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(u,{class:"app__ui-nav"}),(0,n._)("div",s,[(0,n.Wm)(c)])])}const a=t=>((0,n.dD)("data-v-c8d3fea0"),t=t(),(0,n.Cn)(),t),u={class:"ui-comp-nav-menu menu"},c={class:"menu__container"},d={class:"menu__wrapper"},p=a((()=>(0,n._)("div",{class:"menu__img"},null,-1))),_={class:"menu__nav nav"};function h(t,r,o,e,i,s){const l=(0,n.up)("ui-button-main");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",c,[(0,n._)("div",d,[p,(0,n._)("div",_,[(0,n.Wm)(l,{class:"menu__ui-button",isDisabled:i.isDisabled,title:i.button1,onButtonClick:r[0]||(r[0]=r=>t.handleClick(1))},null,8,["isDisabled","title"]),(0,n.Wm)(l,{class:"menu__ui-button",isDisabled:i.isDisabled,title:i.button2,onButtonClick:r[1]||(r[1]=r=>t.handleClick(2))},null,8,["isDisabled","title"])])])])])}var b=o(7139);function m(t,r,o,e,i,s){return(0,n.wg)(),(0,n.iD)("div",{class:(0,b.C_)(["ui-button-main button",{"disabled-base":o.isDisabled}]),onClick:r[0]||(r[0]=t=>s.handleClick())},[(0,n._)("p",{class:(0,b.C_)(["button__title",{"disabled-txt":o.isDisabled}])},(0,b.zw)(o.title),3)],2)}var v={name:"ui-button-main",data(){return{}},props:{isDisabled:{type:Boolean,default:!1},title:{type:String||Number,default:"button title"}},methods:{handleClick(){this.$emit("buttonClick")}}},f=o(89);const g=(0,f.Z)(v,[["render",m],["__scopeId","data-v-5e8c61cc"]]);var C=g,k={components:{uiButtonMain:C},name:"ui-comp-nav-menu",data(){return{button1:"Users",button2:"Sing Up",isDisabled:!1}},methods:{},computed:{}};const w=(0,f.Z)(k,[["render",h],["__scopeId","data-v-c8d3fea0"]]);var y=w,O={components:{uiCompNavMenu:y},name:"App"};const x=(0,f.Z)(O,[["render",l],["__scopeId","data-v-2048f4e9"]]);var E=x,S=o(2483);const D=t=>((0,n.dD)("data-v-1b23390f"),t=t(),(0,n.Cn)(),t),F={class:"main-page page"},B={class:"page__container"},L=D((()=>(0,n._)("main",{class:"page__main main"},[(0,n._)("div",{class:"main__container"},[(0,n._)("div",{class:"inputs__upload upload"},[(0,n._)("br"),(0,n._)("hr"),(0,n._)("br"),(0,n._)("br"),(0,n._)("hr"),(0,n._)("br")])])],-1))),j={class:"page__footer footer"},R={class:"footer__container"},I={class:"footer__post-form form"},T={class:"form__wrapper"},W={class:"form__title"},Z={class:"form__container"},z={class:"form__inputs-block"},M=D((()=>(0,n._)("br",null,null,-1))),N=D((()=>(0,n._)("hr",null,null,-1))),q=D((()=>(0,n._)("br",null,null,-1))),U=D((()=>(0,n._)("br",null,null,-1))),H=D((()=>(0,n._)("br",null,null,-1))),P=D((()=>(0,n._)("hr",null,null,-1))),A=D((()=>(0,n._)("br",null,null,-1))),$=D((()=>(0,n._)("br",null,null,-1))),J=D((()=>(0,n._)("br",null,null,-1))),G=D((()=>(0,n._)("br",null,null,-1))),K=D((()=>(0,n._)("hr",null,null,-1))),Q=D((()=>(0,n._)("br",null,null,-1))),V=D((()=>(0,n._)("br",null,null,-1)));function X(t,r,o,e,i,s){const l=(0,n.up)("ui-comp-header"),a=(0,n.up)("ui-comp-upload-block"),u=(0,n.up)("ui-custom-input-2");return(0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("div",B,[(0,n.Wm)(l),L,(0,n._)("footer",j,[(0,n._)("div",R,[(0,n._)("div",I,[(0,n._)("div",T,[(0,n._)("div",W,(0,b.zw)(i.formTitle),1),(0,n._)("div",Z,[(0,n._)("div",z,[M,N,q,(0,n.Wm)(a),U,H,P,A,$,(0,n.Wm)(u),J,G,K,Q,V])])])])])])])])}const Y={class:"ui-comp-header block"},tt={class:"block__header header"},rt={class:"header__container"},ot={class:"header__wrapper"},et={class:"header__title"},nt={class:"header__title-adds"};function it(t,r,o,e,i,s){const l=(0,n.up)("ui-button-main");return(0,n.wg)(),(0,n.iD)("div",Y,[(0,n._)("header",tt,[(0,n._)("div",rt,[(0,n._)("div",ot,[(0,n._)("h1",et,(0,b.zw)(i.title),1),(0,n._)("p",nt,(0,b.zw)(i.titleAdds),1),(0,n.Wm)(l,{class:"header__button",isDisabled:i.isDisabled,title:i.button1,onButtonClick:r[0]||(r[0]=r=>t.handleClick())},null,8,["isDisabled","title"])])])])])}var st={name:"ui-comp-header",data(){return{title:"test assignment for front-end developer",titleAdds:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.",button1:"Sing up",isDisabled:!1}},methods:{},computed:{}};const lt=(0,f.Z)(st,[["render",it],["__scopeId","data-v-22626737"]]);var at=lt,ut={components:{uiCompHeader:at},name:"main-page",data(){return{formTitle:"Working with POST request"}},computed:{},methods:{}};const ct=(0,f.Z)(ut,[["render",X],["__scopeId","data-v-1b23390f"]]);var dt=ct;const pt=[{path:"/",name:"home",component:dt}],_t=(0,S.p7)({history:(0,S.PO)("/test-work-abz-agency/"),routes:pt});var ht=_t,bt=o(65),mt=(0,bt.MT)({state:{colors:{norm:"#000000de",normWt:"#ffffffde",normInp:"#D0CFCF",err:"#CB3D40"}},getters:{COLORS:t=>t.colors},mutations:{},actions:{},modules:{}});const vt={class:"ui-comp-upload-block block"},ft={class:"block__test-btn"},gt={class:"block__wrapper"};function Ct(t,r,o,e,i,s){const l=(0,n.up)("ui-custom-input-button"),a=(0,n.up)("ui-custom-input-txt-area");return(0,n.wg)(),(0,n.iD)("div",vt,[(0,n._)("div",ft,[(0,n._)("button",{onClick:r[0]||(r[0]=(...t)=>s.toggleError&&s.toggleError(...t))},"Toggle")]),(0,n._)("div",gt,[(0,n.Wm)(l,{class:"block__button",isError:i.isError,title:i.btnTitle,hint:i.btnHint,onButtonClick:r[1]||(r[1]=t=>s.handleClick())},null,8,["isError","title","hint"]),(0,n.Wm)(a,{class:"block__textarea",isError:i.isError,placeholder:i.placeholder},null,8,["isError","placeholder"])])])}var kt={name:"ui-comp-upload-block",data(){return{isError:!0,btnTitle:"Upload",btnHint:"error txt",placeholder:"upload your photo"}},methods:{toggleError(){this.isError=!this.isError},handleClick(){console.log("Clicked-UpLoad-block!!!")}},computed:{}};const wt=(0,f.Z)(kt,[["render",Ct],["__scopeId","data-v-b587a8d4"]]);var yt=wt,Ot=[yt];const xt={class:"ui-hint-bottom hint"},Et={class:"hint__wrapper"},St={class:"hint__txt"};function Dt(t,r,o,e,i,s){return(0,n.wg)(),(0,n.iD)("div",xt,[(0,n._)("div",Et,[(0,n._)("span",St,(0,b.zw)(o.hint),1)])])}const Ft={name:"ui-hint-bottom",data(){return{}},props:{isError:{type:Boolean,default:!1},hint:{type:String||Number,default:"error text"},color:{type:String,default:"#7E7E7E"}}},Bt=()=>{(0,e.sj)((t=>({"3b26b80d":t.color})))},Lt=Ft.setup;Ft.setup=Lt?(t,r)=>(Bt(),Lt(t,r)):Bt;var jt=Ft;const Rt=(0,f.Z)(jt,[["render",Dt],["__scopeId","data-v-7aabc5be"]]);var It=Rt;const Tt={class:"ui-hint-top hint"},Wt={class:"hint__wrapper"};function Zt(t,r,o,e,i,s){return(0,n.wg)(),(0,n.iD)("div",Tt,[(0,n._)("div",Wt,[(0,n._)("span",{class:(0,b.C_)(["hint__txt",{"if-error":o.isError}])},(0,b.zw)(o.hint),3)])])}const zt={name:"ui-hint-top",data(){return{}},props:{isError:{type:Boolean,default:!1},hint:{type:String||Number,default:"error text"},color:{type:String,default:"#7E7E7E"}}},Mt=()=>{(0,e.sj)((t=>({f19fbff2:t.color})))},Nt=zt.setup;zt.setup=Nt?(t,r)=>(Mt(),Nt(t,r)):Mt;var qt=zt;const Ut=(0,f.Z)(qt,[["render",Zt],["__scopeId","data-v-533bc29c"]]);var Ht=Ut;const Pt={class:"ui-custom-input-2 input"},At={class:"input__test-btn"},$t={class:"input__container"},Jt=["value"];function Gt(t,r,o,e,i,s){const l=(0,n.up)("ui-hint-top"),a=(0,n.up)("ui-hint-bottom");return(0,n.wg)(),(0,n.iD)("div",Pt,[(0,n._)("div",At,[(0,n._)("button",{onClick:r[0]||(r[0]=(...t)=>s.toggle&&s.toggle(...t))},"Toggle")]),(0,n._)("div",$t,[i.isFocused?((0,n.wg)(),(0,n.j4)(l,{key:0,class:"input__hint",isError:i.flag,hint:i.hintTop,color:s.currColor},null,8,["isError","hint","color"])):(0,n.kq)("",!0),(0,n._)("input",{type:"text",value:i.value,class:"input__input",style:(0,b.j5)(s.border),onFocus:r[1]||(r[1]=(...t)=>s.setFocus&&s.setFocus(...t)),onBlur:r[2]||(r[2]=(...t)=>s.setFocus&&s.setFocus(...t))},null,44,Jt),i.flag?((0,n.wg)(),(0,n.j4)(a,{key:1,class:"input__hint",isError:i.flag,hint:i.hintBottom,color:s.currColor},null,8,["isError","hint","color"])):(0,n.kq)("",!0)])])}var Kt={name:"ui-custom-input-2",data(){return{value:"upload",flag:!0,hintTop:"top label",hintBottom:"err txt",isFocused:!1}},watch:{isFocused(t,r){console.log("new value =>",t,"old value =>",r)}},props:{isError:{type:Boolean,default:!0},content:{type:String||Number,default:"upload"}},computed:{...(0,bt.Se)(["COLORS"]),border(){return this.flag?{"border-width":"2px","border-style":"solid","border-color":this.COLORS.err,padding:"13px 13px 13px 15px"}:{"border-width":"1px","border-style":"solid","border-color":this.COLORS.normInp}},currColor(){return this.flag?this.COLORS.err:this.COLORS.norm}},methods:{toggle(){this.flag=!this.flag},setFocus(t){"focus"===t.type?this.isFocused=!0:"blur"===t.type&&(this.isFocused=!1)}}};const Qt=(0,f.Z)(Kt,[["render",Gt],["__scopeId","data-v-4d5163b6"]]);var Vt=Qt;const Xt={class:"ui-custom-input-button input"},Yt={class:"input__container"},tr=["value"];function rr(t,r,o,i,s,l){const a=(0,n.up)("ui-hint-bottom");return(0,n.wg)(),(0,n.iD)("div",Xt,[(0,n._)("div",Yt,[(0,n._)("input",{class:"input__input",type:"button",value:s.value,style:(0,b.j5)(l.border),onClick:r[0]||(r[0]=(0,e.iM)(((...t)=>l.handleClick&&l.handleClick(...t)),["prevent"]))},null,12,tr),o.isError?((0,n.wg)(),(0,n.j4)(a,{key:0,class:"input__hint-bottom",isError:o.isError,hint:s.hintBottom,color:l.currColor},null,8,["isError","hint","color"])):(0,n.kq)("",!0)])])}const or={name:"ui-custom-input-button",props:{isError:{type:Boolean,default:!0},content:{type:String||Number,default:"upload"}},data(){return{value:"upload",hintBottom:"err txt"}},computed:{...(0,bt.Se)(["COLORS"]),border(){return this.isError?{"border-width":"2px","border-style":"solid","border-color":this.COLORS.err,padding:"13px 13px 13px 15px"}:{"border-width":"1px","border-color":this.COLORS.norm}},currColor(){return this.isError?this.COLORS.err:this.COLORS.norm}},methods:{handleClick(){this.$emit("buttonClick")}}},er=()=>{(0,e.sj)((t=>({"553dc772":t.currColor})))},nr=or.setup;or.setup=nr?(t,r)=>(er(),nr(t,r)):er;var ir=or;const sr=(0,f.Z)(ir,[["render",rr],["__scopeId","data-v-11d07708"]]);var lr=sr;const ar={class:"ui-custom-input-txt-area input"},ur={class:"input__container"},cr=["value"];function dr(t,r,o,e,i,s){const l=(0,n.up)("ui-hint-bottom");return(0,n.wg)(),(0,n.iD)("div",ar,[(0,n._)("div",ur,[(0,n._)("textarea",{class:"input__input",rows:"1",value:o.placeholder,style:(0,b.j5)(s.border),onFocus:r[0]||(r[0]=(...t)=>s.setFocus&&s.setFocus(...t)),onBlur:r[1]||(r[1]=(...t)=>s.setFocus&&s.setFocus(...t))},null,44,cr),o.isError?((0,n.wg)(),(0,n.j4)(l,{key:0,class:"input__hint-bottom",isError:o.isError,hint:i.hintBottom,color:s.currColor},null,8,["isError","hint","color"])):(0,n.kq)("",!0)])])}var pr={name:"ui-custom-input-txt-area",props:{isError:{type:Boolean,default:!0},placeholder:{type:String,default:"upload"}},data(){return{value:"upload",hintBottom:"err txt",isFocused:!1}},computed:{...(0,bt.Se)(["COLORS"]),border(){return this.isError?{"border-width":"2px 2px 2px 0","border-style":"solid","border-color":this.COLORS.err,padding:"13px 13px 13px 16px"}:{"border-width":"1px 1px 1px 0","border-color":this.COLORS.normInp}},currColor(){return this.isError?this.COLORS.err:this.COLORS.norm}},methods:{setFocus(t){"focus"===t.type?this.isFocused=!0:"blur"===t.type&&(this.isFocused=!1)}}};const _r=(0,f.Z)(pr,[["render",dr],["__scopeId","data-v-3a83889a"]]);var hr=_r,br=[C,It,Ht,Vt,lr,hr];const mr=[...Ot,...br],vr=(0,e.ri)(E);mr.forEach((t=>vr.component(t.name,t))),vr.use(mt).use(ht).mount("#app")}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(r,e,n,i){if(!e){var s=1/0;for(c=0;c<t.length;c++){e=t[c][0],n=t[c][1],i=t[c][2];for(var l=!0,a=0;a<e.length;a++)(!1&i||s>=i)&&Object.keys(o.O).every((function(t){return o.O[t](e[a])}))?e.splice(a--,1):(l=!1,i<s&&(s=i));if(l){t.splice(c--,1);var u=n();void 0!==u&&(r=u)}}return r}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[e,n,i]}}(),function(){o.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(r,{a:r}),r}}(),function(){o.d=function(t,r){for(var e in r)o.o(r,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){var t={143:0};o.O.j=function(r){return 0===t[r]};var r=function(r,e){var n,i,s=e[0],l=e[1],a=e[2],u=0;if(s.some((function(r){return 0!==t[r]}))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(a)var c=a(o)}for(r&&r(e);u<s.length;u++)i=s[u],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},e=self["webpackChunk_2023_11_29_abz_agency_test"]=self["webpackChunk_2023_11_29_abz_agency_test"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(511)}));e=o.O(e)})();
//# sourceMappingURL=app.6eab7476.js.map