"use strict";(self["webpackChunkabz_agency_test"]=self["webpackChunkabz_agency_test"]||[]).push([[515],{8515:function(e,t,s){s.r(t),s.d(t,{default:function(){return Se}});var a=s(3396);const r={class:"main-page page"},i={class:"page__container"};function o(e,t,s,o,n,l){const d=(0,a.up)("comp-header"),u=(0,a.up)("comp-main"),c=(0,a.up)("comp-footer");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",i,[(0,a.Wm)(d),(0,a.Wm)(u),(0,a.Wm)(c)])])}var n=s(7139);const l={class:"comp-header block",id:"header"},d={class:"block__header header"},u={class:"header__container"},c={class:"header__wrapper"},p={class:"header__title"},m={class:"header__title-adds"},_={href:"#footer"};function h(e,t,s,r,i,o){const h=(0,a.up)("ui-button-main");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("header",d,[(0,a._)("div",u,[(0,a._)("div",c,[(0,a._)("h1",p,(0,n.zw)(i.title),1),(0,a._)("p",m,(0,n.zw)(i.titleAdds),1),(0,a._)("a",_,[(0,a.Wm)(h,{class:"header__button",isDisabled:i.isDisabled,title:i.btnTopName},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(i.btnTopName),1)])),_:1},8,["isDisabled","title"])])])])])])}var g={name:"comp-header",data(){return{title:"test assignment for front-end developer",titleAdds:"What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.",btnTopName:"sign up",isDisabled:!1}}},v=s(89);const f=(0,v.Z)(g,[["render",h],["__scopeId","data-v-741dcf42"]]);var w=f;const b={class:"comp-main main",id:"main"},k={class:"main__container"},C={class:"main__wrapper"},D={class:"main__title"},y={key:0,class:"main__gallery"},S={key:1,class:"main__err-msg"};function T(e,t,s,r,i,o){(0,a.up)("ui-loader");const l=(0,a.up)("ui-comp-user-card"),d=(0,a.up)("ui-button-main");return(0,a.wg)(),(0,a.iD)("main",b,[(0,a._)("div",k,[(0,a.kq)("",!0),(0,a._)("div",C,[(0,a._)("h1",D,(0,n.zw)(i.title),1),e.users?((0,a.wg)(),(0,a.iD)("div",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.users,(e=>((0,a.wg)(),(0,a.j4)(l,{class:"main__ui-card",key:e.id,userCard:e},null,8,["userCard"])))),128))])):((0,a.wg)(),(0,a.iD)("div",S,(0,n.zw)(i.errMessage),1)),e.nextUrl?((0,a.wg)(),(0,a.j4)(d,{key:2,class:"main__button",isDisabled:!e.nextUrl,title:"Show more",onButtonClick:t[0]||(t[0]=e=>o.handleClick())},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.btnBotName),1)])),_:1},8,["isDisabled"])):(0,a.kq)("",!0)])])])}const U={class:"ui-comp-user-card card"},z={class:"card__container"},x={class:"card__wrapper user"},I={class:"user__reg-date"},W={class:"user__photo"},H={alt:"user photo"},F={class:"user__name"},O={class:"user__mid-wrapper"},j={class:"user__job"},q={class:"user__email-tooltip block"},L={class:"user__phone"};function M(e,t,s,r,i,o){const l=(0,a.Q2)("src-exceptions"),d=(0,a.Q2)("phone-format");return(0,a.wg)(),(0,a.iD)("div",U,[(0,a._)("div",z,[(0,a._)("div",x,[(0,a._)("div",I,(0,n.zw)(o.date),1),(0,a._)("div",W,[(0,a.wy)((0,a._)("img",H,null,512),[[l,s.userCard.photo]])]),(0,a._)("p",F,(0,n.zw)(s.userCard.name),1),(0,a._)("div",O,[(0,a._)("p",j,(0,n.zw)(s.userCard.position),1),(0,a._)("p",{class:"user__email rel",id:"email",onMouseover:t[0]||(t[0]=(...e)=>o.handleHover&&o.handleHover(...e)),onMouseleave:t[1]||(t[1]=(...e)=>o.handleHover&&o.handleHover(...e))},(0,n.zw)(s.userCard.email),33),(0,a._)("div",q,[i.toolTip.isHover&&"email"===i.toolTip.el?((0,a.wg)(),(0,a.iD)("p",{key:0,class:"block__tooltip",style:(0,n.j5)(o.tipPosition)},(0,n.zw)(s.userCard.email),5)):(0,a.kq)("",!0)]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("p",L,[(0,a.Uk)((0,n.zw)(s.userCard.phone),1)])),[[d]])])])])])}var Z={name:"ui-comp-user-card",props:{userCard:{type:Object,default:()=>{}}},data(){return{cont:"some content",toolTip:{isHover:!1,el:"",x:0},altImg:s(8972),isImgOk:!0,except:"https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png"}},computed:{tipPosition(){return{transform:`translateX(${this.toolTip.x-20}px)`}},photo(){return this.isImgOk?this.userCard.photo:this.altImg},date(){return new Date(this.userCard.registration_timestamp).toDateString()}},methods:{handleErr(e){this.isImgOk=!1},handleHover(e){""!==e.target.id&&("mouseover"===e.type&&(this.toolTip.isHover=!0,this.toolTip.el=e.target.id,this.toolTip.x=e.offsetX),"mouseleave"===e.type&&(this.toolTip={}))}}};const B=(0,v.Z)(Z,[["render",M],["__scopeId","data-v-472ad9fe"]]);var N=B;const E=e=>((0,a.dD)("data-v-29e6c2c0"),e=e(),(0,a.Cn)(),e),P={id:"ui-loader",width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},V=E((()=>(0,a._)("path",{d:"M24 2.4C24 1.07452 25.0772 -0.0124356 26.3961 0.119892C30.2962 0.511212 34.0543 1.85353 37.3337 4.04473C41.2805 6.68189 44.3566 10.4302 46.1731 14.8156C47.9896 19.201 48.4649 24.0266 47.5388 28.6822C46.6128 33.3377 44.327 37.6141 40.9706 40.9706C37.6141 44.327 33.3377 46.6128 28.6822 47.5388C24.0266 48.4649 19.201 47.9896 14.8156 46.1731C10.4302 44.3566 6.68188 41.2805 4.04473 37.3337C1.85353 34.0543 0.511211 30.2963 0.119892 26.3961C-0.0124351 25.0772 1.07452 24 2.4 24C3.72548 24 4.78454 25.0787 4.9498 26.3938C5.32038 29.343 6.37231 32.1774 8.03578 34.6669C10.1455 37.8244 13.1441 40.2853 16.6525 41.7385C20.1608 43.1917 24.0213 43.5719 27.7457 42.8311C31.4702 42.0902 34.8913 40.2616 37.5765 37.5765C40.2616 34.8913 42.0902 31.4702 42.8311 27.7457C43.5719 24.0213 43.1917 20.1608 41.7385 16.6525C40.2853 13.1441 37.8244 10.1455 34.667 8.03578C32.1774 6.37231 29.343 5.32039 26.3938 4.9498C25.0787 4.78454 24 3.72548 24 2.4Z",fill:"#00BDD3"},null,-1))),A=[V];function J(e,t,s,r,i,o){return(0,a.wg)(),(0,a.iD)("svg",P,A)}var Q={name:"ui-loader",data(){return{}},methods:{},computed:{}};const X=(0,v.Z)(Q,[["render",J],["__scopeId","data-v-29e6c2c0"]]);var G=X,K=s(65),R={components:{uiCompUserCard:N,uiLoader:G},name:"comp-main",data(){return{title:"Working with GET request",errMessage:"Users info hasn't been loaded"}},computed:{...(0,K.Se)("serverData",["users","urls","nextUrl"]),next(){return null!==this.nextUrl}},methods:{...(0,K.nv)("serverData",["getFromServ"]),handleClick(){this.next&&this.getFromServ({url:this.nextUrl,idn:"users"})}},mounted(){this.getFromServ({url:this.urls.urlStart,idn:"users"})}};const Y=(0,v.Z)(R,[["render",T],["__scopeId","data-v-42ee7a5a"]]);var $=Y,ee=s(9242);const te=e=>((0,a.dD)("data-v-2b025b80"),e=e(),(0,a.Cn)(),e),se={class:"comp-footer footer",id:"footer"},ae={key:0,class:"footer__container"},re={class:"footer__post-form block"},ie={class:"block__wrapper"},oe={class:"block__title"},ne={class:"block__container"},le={class:"ui-form__radio-wrapper"},de=te((()=>(0,a._)("p",{class:"ui-form__radio-title"}," Select your position ",-1)));function ue(e,t,s,r,i,o){const l=(0,a.up)("ui-loader"),d=(0,a.up)("ui-custom-input"),u=(0,a.up)("ui-custom-input-radio"),c=(0,a.up)("ui-custom-input-file"),p=(0,a.up)("ui-button-main"),m=(0,a.up)("ui-comp-reg-success");return(0,a.wg)(),(0,a.iD)("footer",se,[((0,a.wg)(),(0,a.j4)(ee.W3,{name:"fade",key:252},{default:(0,a.w5)((()=>[this.codeUser?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",ae,[i.isLoaderOn?((0,a.wg)(),(0,a.j4)(l,{key:0,class:"footer__loader"})):(0,a.kq)("",!0),(0,a._)("div",re,[(0,a._)("div",ie,[(0,a._)("div",oe,(0,n.zw)(i.formTitle),1),(0,a._)("div",ne,[(0,a._)("form",{class:"block__ui-form ui-form",name:"user-post",onSubmit:t[0]||(t[0]=(0,ee.iM)((()=>{}),["prevent","stop"])),enctype:"multipart/form-data"},[(0,a.Wm)(d,{class:"ui-form__name",inputData:e.user},null,8,["inputData"]),(0,a.Wm)(d,{class:"ui-form__email",inputData:e.email},null,8,["inputData"]),(0,a.Wm)(d,{class:"ui-form__phone",inputData:e.phone},null,8,["inputData"]),(0,a._)("div",le,[de,(0,a.Wm)(u,{class:"ui-form__inp-radio",inputData:e.radio},null,8,["inputData"])]),(0,a.Wm)(c,{class:"ui-form__inp-file",inputData:e.file},null,8,["inputData"]),(0,a.Wm)(p,{class:"ui-form__sign-up-button",isDisabled:!e.formIsValid,title:"Sign up",onButtonClick:o.handleSignUp},null,8,["isDisabled","onButtonClick"])],32)])])])]))])),_:1})),(0,a.Wm)(ee.uT,{name:"fade"},{default:(0,a.w5)((()=>[this.codeUser?((0,a.wg)(),(0,a.j4)(m,{key:0})):(0,a.kq)("",!0)])),_:1})])}const ce=e=>((0,a.dD)("data-v-58b87004"),e=e(),(0,a.Cn)(),e),pe={class:"ui-comp-reg-success reg-success"},me={class:"reg-success__wrapper"},_e={class:"reg-success__title"},he=ce((()=>(0,a._)("div",{class:"reg-success__container"},[(0,a._)("div",{class:"reg-success__image",type:"image"})],-1)));function ge(e,t,s,r,i,o){return(0,a.wg)(),(0,a.iD)("div",pe,[(0,a._)("div",me,[(0,a._)("div",_e,(0,n.zw)(i.title),1),he])])}var ve={name:"ui-comp-reg-success",data(){return{title:"user successfully registered"}},methods:{},computed:{}};const fe=(0,v.Z)(ve,[["render",ge],["__scopeId","data-v-58b87004"]]);var we=fe,be={components:{uiCompRegSuccess:we,uiLoader:G},name:"comp-footer",data(){return{formTitle:"Working with POST request",isLoaderOn:!1,test:!1}},computed:{...(0,K.Se)("serverData",["urls"]),...(0,K.Se)("regData",["codeUser","codeTkn"]),...(0,K.Se)("formData",["user","email","phone","file","radio","formIsValid"])},watch:{},methods:{...(0,K.nv)("formData",["clearForm"]),...(0,K.nv)("serverData",["getFromServ"]),...(0,K.nv)("regData",["getToken","postNewUser"]),async handleSignUp(){if(this.formIsValid)try{this.isLoaderOn=!0,await this.getToken(),await this.postNewUser(),await this.getFromServ({url:this.urls.urlStart,idn:"users"}),this.clearForm(),this.isLoaderOn=!1}catch(e){console.log("HandleSingUp* Err",e),this.isLoaderOn=!1}},runtest(){this.test=!this.test}},mounted(){this.getFromServ({url:this.urls.urlJobs,idn:"jobs"})}};const ke=(0,v.Z)(be,[["render",ue],["__scopeId","data-v-2b025b80"]]);var Ce=ke,De={components:{CompHeader:w,CompMain:$,CompFooter:Ce},name:"main-page",data(){return{}},computed:{},methods:{handleClick(){console.log("main page bottom button")}}};const ye=(0,v.Z)(De,[["render",o],["__scopeId","data-v-53e7ccb4"]]);var Se=ye}}]);
//# sourceMappingURL=515.5b00a060.js.map