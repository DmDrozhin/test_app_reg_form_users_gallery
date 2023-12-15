(function(){"use strict";var e={5877:function(e,t,a){var n=a(9242),r=a(3396);const s={class:"app"},i={class:"app__nav nav"},o={class:"nav__container"},u={class:"app__container"};function l(e,t,a,n,l,d){const p=(0,r.up)("ui-comp-nav-menu"),c=(0,r.up)("ui-loader"),m=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",i,[(0,r._)("div",o,[(0,r.Wm)(p,{class:"nav__ui-nav"})]),d.isLoading?((0,r.wg)(),(0,r.j4)(c,{key:0,class:"nav__loader"})):(0,r.kq)("",!0)]),(0,r._)("div",u,[(0,r.Wm)(m)])])}var d=a(7139);const p=e=>((0,r.dD)("data-v-90173320"),e=e(),(0,r.Cn)(),e),c={class:"ui-comp-nav-menu menu"},m={class:"menu__container"},f={class:"menu__wrapper"},g=p((()=>(0,r._)("a",{href:"#header"},[(0,r._)("div",{class:"menu__img"})],-1))),h={class:"menu__nav nav"},v={href:"#main"},b={href:"#footer"};function _(e,t,a,n,s,i){const o=(0,r.up)("ui-button-main");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",m,[(0,r._)("div",f,[g,(0,r._)("div",h,[(0,r._)("a",v,[(0,r.Wm)(o,{class:"menu__ui-button",isDisabled:s.isDisabled,title:s.btnNav1Name},{default:(0,r.w5)((()=>[(0,r.Uk)((0,d.zw)(s.btnNav1Name),1)])),_:1},8,["isDisabled","title"])]),(0,r._)("a",b,[(0,r.Wm)(o,{class:"menu__ui-button",isDisabled:s.isDisabled,title:s.btnNav2Name},{default:(0,r.w5)((()=>[(0,r.Uk)((0,d.zw)(s.btnNav2Name),1)])),_:1},8,["isDisabled","title"])])])])])])}const D=["name"];function y(e,t,a,n,s,i){return(0,r.wg)(),(0,r.iD)("button",{class:(0,d.C_)(["ui-button-main button",{"dis-btn":a.isDisabled}]),type:"button",name:a.title,onClick:t[0]||(t[0]=e=>i.handleClick())},[(0,r._)("p",{class:(0,d.C_)(["button__title",{"dis-txt":a.isDisabled}])},(0,d.zw)(a.title),3)],10,D)}var w={name:"ui-button-main",data(){return{}},props:{isDisabled:{type:Boolean,default:!0},title:{type:String||Number,default:"main btn"}},methods:{handleClick(){this.$emit("buttonClick",this.title)}}},k=a(89);const C=(0,k.Z)(w,[["render",y],["__scopeId","data-v-4cf0a30e"]]);var L=C,x={components:{uiButtonMain:L},name:"ui-comp-nav-menu",data(){return{btnNav1Name:"users",btnNav2Name:"sign up",isDisabled:!1}},methods:{},computed:{}};const z=(0,k.Z)(x,[["render",_],["__scopeId","data-v-90173320"]]);var N=z,E=a(5744),I=a(65),S={components:{uiCompNavMenu:N,uiLoader:E.Z},name:"App",computed:{...(0,I.Se)("serverData",{isLoading1:"isLoading"}),...(0,I.Se)("regData",{isLoading2:"isLoading"}),isLoading(){return!(!this.isLoading1&&!this.isLoading2)}}};const F=(0,k.Z)(S,[["render",l],["__scopeId","data-v-594615b7"]]);var V=F,j=a(2483);const q=[{path:"/",name:"main",component:()=>a.e(404).then(a.bind(a,5404))}],M=(0,j.p7)({history:(0,j.PO)("/test_app_reg_form_users_gallery/"),routes:q});var R=M;a(560);const T={namespaced:!0,state:{inpsData:{user:{sets:{type:"text",tabindex:1,disabled:!1,autofocus:!1,required:!0},name:"user",holder:"Your name",inpValue:"",regex:/^(?=.*[A-Za-z0-9]).{3,60}$/,err:0,errList:["User is required field","Please enter less then 60 and more then 3 characters","User with this name already exits"]},email:{sets:{type:"email",tabindex:2,disabled:!1,autofocus:!1,required:!0},name:"email",holder:"Email",inpValue:"",regex:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,err:0,errList:["Field is required","Please enter correct email","User with this phone or email already exist"]},phone:{sets:{type:"tel",tabindex:3,disabled:!1,autofocus:!1,required:!0},name:"phone",holder:"Phone",inpValue:"",regex:/^[\+]{0,1}380([0-9]{9})$/,err:0,errList:["Field is required","Please enter num in format +380 XX XXX XX XX","User with this phone or email already exist"]},radio:{sets:{type:"radio",tabindex:4,disabled:!1,autofocus:!1,required:!0},name:"radio",inpValue:"",valueId:"",labels:[],err:0,errList:["Field is required","Job position is not selected"]},fileInp:{sets:{type:"file",tabindex:4,disabled:!1,autofocus:!1,required:!0},name:"fileInp",holder:"Upload",inpName:"post-form-upload",accept:"image/jpeg, image/jpg",inpValue:"",fileName:"Upload your photo",limits:{max:524880,type:"image/jpeg",minW:70,minH:70},err:0,errList:["Not uploaded","Please upload: jpg/img, max. 5 Mb, min. 70 x 70 px"]}}},getters:{user:e=>e.inpsData.user,email:e=>e.inpsData.email,phone:e=>e.inpsData.phone,file:e=>e.inpsData.fileInp,radio:(e,t,a,n)=>{const r=a["serverData"].jobs,s=e.inpsData.radio;return r.success?s.labels=r.positions.map((e=>({label:e.name,isChecked:!1,disabled:!1}))):s.labels=void 0,s},getVals:e=>{let t=[];for(let a in e.inpsData)""===e.inpsData[a].inpValue?t.push(!1):t.push(!0);return t},getErrs:e=>{const t=e.inpsData;let a=[];for(let n in t)0===t[n].err?a.push(!0):a.push(!1);return a},someValsEmpty:(e,t)=>t.getVals.includes(!1),isErrors:(e,t)=>t.getErrs.includes(!1),formIsValid:(e,t)=>!t.someValsEmpty&&!t.isErrors,forUserReg:e=>{const t=e.inpsData,a=new FormData;return a.append("name",t.user.inpValue),a.append("email",t.email.inpValue),a.append("phone",t.phone.inpValue),a.append("position_id",+t.radio.valueId),a.append("photo",t.fileInp.inpValue),a}},mutations:{setInpData:(e,t)=>{let a=e.inpsData[t.name];a.err=t.err,a.inpValue=t.inpValue,t.fileName&&(a.fileName=t.fileName),t.valueId&&(a.valueId=t.valueId)},setRespErr:(e,t)=>{const a=e.inpsData;422==t&&(a.name.err=2,a.email.err=2,a.phone.err=2,a.photo.err=2,a.radio.err=2),409==t&&(a.email.err=3,a.phone.err=3)},clearForm:e=>{let t=e.inpsData;for(const a in t)t[a].inpValue="",t[a].err=0}},actions:{setInpData({commit:e},t){e("setInpData",t)},setRespErr({commit:e},t){e("setRespErr",t)},clearForm({commit:e}){e("clearForm")}}};var O=T,U=a(1076);const Z={namespaced:!0,state(){return{serverResp:"",error:"",users:{},count:6,jobs:{success:!0,positions:[{id:1,name:"Lawyer"},{id:2,name:"Content manager"},{id:3,name:"Security"},{id:4,name:"Designer"}]},urls:{urlStart:"https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6",urlJobs:"https://frontend-test-assignment-api.abz.agency/api/v1/positions",urlUsers:"https://frontend-test-assignment-api.abz.agency/api/v1/users"},isLoading:!1}},getters:{nextUrl:e=>{const t=e.users.total_users,a=Math.ceil(t/e.count),n=+e.users.page+1;return n<=a?`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${n}&count=${e.count}`:null},users:e=>e.users.users,respCode:e=>e.serverResp.status,loadStat:e=>e.loadStat,urls:e=>e.urls,isLoading:e=>e.isLoading},mutations:{setServerResp:(e,t)=>e.serverResp=t,saveRespData:(e,t)=>e[t.idn]=t.res,saveErr:(e,t)=>e.error=t,setLoader:(e,t)=>e.isLoading=t},actions:{getFromServ({commit:e},t){return e("setLoader",!0),U.Z.get(t.url).then((a=>{if(e("setServerResp",a),200===a.status){const n={res:a.data,idn:t.idn};e("saveRespData",n)}})).then((()=>e("setLoader",!1))).catch((t=>e("saveErr",t)))}}};var $=Z;const A={namespaced:!0,state:{urls:{urlToken:"https://frontend-test-assignment-api.abz.agency/api/v1/token",urlReg:"https://frontend-test-assignment-api.abz.agency/api/v1/users"},response:{user:{response:{status:""}},token:{data:{token:""},status:""}},errors:{user:{response:{status:""}},token:{status:""}},isLoading:!1},getters:{token:e=>e.response.token.data.token,codeTkn:e=>200===e.response.token.status,errTkn:e=>e.response.errors.token.status,codeUser:e=>200===e.response.user.status,errUser:e=>e.response.errors.user.status,isLoading:e=>e.isLoading},mutations:{saveResp:(e,t)=>e.response[t.idn]=t.res,saveErr:(e,t)=>e.errors[t.idn]=t.res,clear:e=>{e.response={},e.errors={}},setLoader:(e,t)=>e.isLoading=t},actions:{getToken({commit:e,state:t}){return e("setLoader",!0),U.Z.get(t.urls.urlToken).then((t=>{if(200===t.status){const a={res:t,idn:"token"};e("saveResp",a)}})).then((()=>e("setLoader",!1))).catch((t=>{const a={res:t,idn:"token"};e("saveErr",a),console.log("Err receiving *Token",t)}))},postNewUser({commit:e,state:t,getters:a,rootState:n,rootGetters:r}){const s=r["formData/forUserReg"],i=t.urls.urlReg,o=a.token;return e("setLoader",!0),(0,U.Z)({url:i,method:"POST",data:s,headers:{"Content-Type":"multipart/form-data",Token:o}}).then((t=>{if(t.status=200){const a={res:t,idn:"user"};return e("saveResp",a),!0}})).then((()=>e("setLoader",!1))).catch((t=>{const a={res:t,idn:"user"};e("saveErr",a);const n=t.response.status;e("formData/setRespErr",n,{root:!0}),console.log("Err receiving *nUser",t)}))}}};var P=A,B=(0,I.MT)({modules:{formData:O,serverData:$,regData:P}}),H={mounted(e,t){let a=e.innerHTML,n=a&&a.replace(/\D/g,"").match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);if(!n)return a;let r=`+${n[1]?n[1]+" ":""}(${n[2]?n[2]+") ":""}${n[3]}${n[4]?` ${n[4]}`:""}${n[5]?` ${n[5]}`:""}`;e.innerHTML=r},name:"phone-format"},X={mounted(e,t){const n="https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png";t.value===n?e.setAttribute("src",a(8972)):e.setAttribute("src",t.value)},name:"src-exceptions"},W=[H,X];const G={class:"ui-custom-input input"},J={class:"input__container"},Y=["name","type","placeholder","tabindex","disabled","autofocus","required"],K={key:0,class:"input__err-msg"};function Q(e,t,a,s,i,o){return(0,r.wg)(),(0,r.iD)("div",G,[(0,r._)("div",J,[(0,r._)("fieldset",{class:(0,d.C_)(["input__fieldset",{"err-brd":o.errMsg}])},[i.isFocused||a.inputData.inpValue?((0,r.wg)(),(0,r.iD)("legend",{key:0,class:(0,d.C_)(["input__legend",{"err-txt":o.errMsg}])},(0,d.zw)(a.inputData.holder),3)):(0,r.kq)("",!0),(0,r.wy)((0,r._)("input",{class:"input__input",name:"inp-form-"+a.inputData.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.inputData.inpValue=e),type:a.inputData.sets.type,placeholder:a.inputData.holder,tabindex:a.inputData.sets.tabindex,disabled:a.inputData.sets.disabled,autofocus:a.inputData.sets.autofocus,required:a.inputData.sets.required,onFocus:t[1]||(t[1]=e=>this.isFocused=!0),onBlur:t[2]||(t[2]=e=>this.isFocused=!1),onChange:t[3]||(t[3]=(...e)=>o.runHandler&&o.runHandler(...e))},null,40,Y),[[n.YZ,a.inputData.inpValue,void 0,{lazy:!0}]])],2),o.errMsg?((0,r.wg)(),(0,r.iD)("div",K,(0,d.zw)(o.errMsg),1)):(0,r.kq)("",!0)])])}var ee={name:"ui-custom-input",props:{inputData:{type:Object,default:()=>{}}},data(){return{isFocused:!1}},computed:{errMsg(){const e=this.inputData.err,t=this.inputData.errList;return!!e&&t[this.inputData.err-1]}},methods:{validate(e){return""===e?1:this.inputData.regex.test(e)?0:2},updateState(e){const t={};t.name=this.inputData.name,t.err=this.validate(e),t.inpValue=e,this.$store.dispatch("formData/setInpData",t)},runHandler(e){const t=e.target.value;this.updateState(t)}}};const te=(0,k.Z)(ee,[["render",Q],["__scopeId","data-v-01a5ef10"]]);var ae=te;const ne={class:"ui-custom-input-radio"},re={key:0,class:"container"},se=["id","name","type","tabindex","checked","disabled","value"],ie=["for"],oe={key:0,class:"err-msg"},ue={key:1,class:"err-load-msg"};function le(e,t,a,s,i,o){return(0,r.wg)(),(0,r.iD)("div",ne,[o.jobList?((0,r.wg)(),(0,r.iD)("div",re,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.jobList,((e,s)=>((0,r.wg)(),(0,r.iD)("div",{class:"radio",key:s},[(0,r._)("input",{id:s,name:"inp-form-"+a.inputData.name,type:a.inputData.sets.type,tabindex:a.inputData.sets.tabindex+s,checked:e.isChecked,disabled:e.disabled,value:e.label,onInput:t[0]||(t[0]=(0,n.iM)((e=>o.handleCheck(e)),["prevent"]))},null,40,se),(0,r._)("label",{for:s,class:"radio-label"},(0,d.zw)(e.label),9,ie)])))),128)),o.errMsg?((0,r.wg)(),(0,r.iD)("div",oe,(0,d.zw)(o.errMsg),1)):(0,r.kq)("",!0)])):((0,r.wg)(),(0,r.iD)("div",ue,(0,d.zw)(i.errLoading),1))])}var de={name:"ui-custom-input-radio",props:{inputData:{type:Object,default:()=>{}}},data(){return{errLoading:"Job positions info hasn't been uploaded !"}},computed:{errMsg(){const e=this.inputData.err,t=this.inputData.errList;return!!e&&t[this.inputData.err-1]},jobList(){return!!this.inputData.labels&&this.inputData.labels}},methods:{handleCheck(e){const t={};t.name=this.inputData.name,t.inpValue=e.target.value,t.valueId=+e.target.id+1,t.err=0,this.$store.dispatch("formData/setInpData",t)}}};const pe=(0,k.Z)(de,[["render",le],["__scopeId","data-v-4da3c1a2"]]);var ce=pe;const me={class:"ui-custom-input-file ui-input"},fe={class:"ui-input__container"},ge=["autofocus","required","disabled","name","accept"],he={for:"ui-input__input-file",class:"ui-input__ui-label ui-label"},ve={key:0,class:"ui-input__err-msg"};function be(e,t,a,n,s,i){return(0,r.wg)(),(0,r.iD)("div",me,[(0,r._)("div",fe,[(0,r._)("input",{class:"ui-input__input-file",id:"ui-input__input-file",type:"file",autofocus:a.inputData.sets.autofocus,required:a.inputData.sets.required,disabled:a.inputData.sets.isDisabled,name:"inp-form-"+a.inputData.name,accept:a.inputData.accept,onChange:t[0]||(t[0]=(...e)=>i.handleFile&&i.handleFile(...e))},null,40,ge),(0,r._)("label",he,[(0,r._)("div",{class:(0,d.C_)(["ui-label__button",{"err-brd":i.errMsg}])},(0,d.zw)(a.inputData.holder),3),(0,r._)("div",{class:(0,d.C_)(["ui-label__message",{"err-brd":i.errMsg}])},[(0,r._)("span",{class:(0,d.C_)({"focus-txt":s.gotFile})},(0,d.zw)(a.inputData.fileName),3)],2)]),i.errMsg?((0,r.wg)(),(0,r.iD)("div",ve,(0,d.zw)(i.errMsg),1)):(0,r.kq)("",!0)])])}var _e={name:"ui-custom-input-file",props:{inputData:{type:Object,default:()=>{}}},data(){return{gotFile:""}},computed:{errMsg(){const e=this.inputData.err,t=this.inputData.errList;return!!e&&t[this.inputData.err-1]}},methods:{async validate(e){const t=this.inputData.limits,a=await this.readFile(e);let n=e.type===t.type&&e.size<t.max,r=a.w>t.minW&&a.h>t.minH;return n&&r?0:2},readFile(e){return new Promise(((t,a)=>{const n=new FileReader;n.onload=e=>{const n=new Image;n.src=e.target.result,n.onload=()=>{t({w:n.width,h:n.height})},n.onerror=e=>a(console.error(e))},n.onerror=e=>a(consoler.error(e)),n.readAsDataURL(e)}))},async updateState(){try{const e={};e.name=this.inputData.name,e.inpValue=this.gotFile,e.fileName=this.gotFile.name,e.err=await this.validate(this.gotFile),this.$store.dispatch("formData/setInpData",e)}catch(e){console.error("Err update state. *Input file")}},handleFile(e){e&&(this.gotFile=e.target.files[0],this.updateState())}}};const De=(0,k.Z)(_e,[["render",be],["__scopeId","data-v-4834494e"]]);var ye=De;const we=e=>((0,r.dD)("data-v-f56c8f70"),e=e(),(0,r.Cn)(),e),ke=["width","height","viewBox","fill","transform"],Ce=we((()=>(0,r._)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1))),Le=we((()=>(0,r._)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1))),xe={id:"SVGRepo_iconCarrier"},ze=["fill"];function Ne(e,t,a,n,s,i){return(0,r.wg)(),(0,r.iD)("svg",{class:"ui-arrow-filled-icon",width:a.size,height:a.size,viewBox:a.viewBox,fill:a.color,xmlns:"http://www.w3.org/2000/svg",transform:a.direction},[Ce,Le,(0,r._)("g",xe,[(0,r._)("path",{d:"M12.2048 7.29258L18.1189 15.7412C18.49 16.2715 18.1107 17 17.4635 17L6.53652 17C5.88931 17 5.50998 16.2715 5.88114 15.7412L11.7952 7.29258C11.8947 7.1504 12.1053 7.1504 12.2048 7.29258Z",fill:a.color},null,8,ze)])],8,ke)}var Ee={name:"ui-arrow-filled-icon",props:{direction:{type:String,default:"rotate(0)",required:!0},size:{type:Number,default:25,required:!0},color:{type:String,default:"#1eb314"},viewBox:{type:String,default:"0 -5 24 24"}}};const Ie=(0,k.Z)(Ee,[["render",Ne],["__scopeId","data-v-f56c8f70"]]);var Se=Ie;const Fe=e=>((0,r.dD)("data-v-630b4ea2"),e=e(),(0,r.Cn)(),e),Ve={class:"ui-test block"},je=Fe((()=>(0,r._)("div",{class:"block__wrapper"},[(0,r._)("p",{class:"block__par-1"},"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum natus dolorum, sapiente porro nemo delectus earum quasi velit corporis ut quos deleniti temporibus et ea. Id, unde reiciendis. Autem, assumenda.")],-1))),qe=Fe((()=>(0,r._)("div",{class:"block__bl-2"}," tool-tip ",-1))),Me=[je,qe];function Re(e,t,a,n,s,i){return(0,r.wg)(),(0,r.iD)("div",Ve,Me)}var Te={name:"ui-test",data(){return{}},methods:{},computed:{}};const Oe=(0,k.Z)(Te,[["render",Re],["__scopeId","data-v-630b4ea2"]]);var Ue=Oe,Ze=[L,ae,ce,ye,Se,Ue];const $e=(0,n.ri)(V);Ze.forEach((e=>$e.component(e.name,e))),W.forEach((e=>$e.directive(e.name,e))),$e.use(B).use(R).mount("#app")},5744:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3396);const r=e=>((0,n.dD)("data-v-29e6c2c0"),e=e(),(0,n.Cn)(),e),s={id:"ui-loader",width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i=r((()=>(0,n._)("path",{d:"M24 2.4C24 1.07452 25.0772 -0.0124356 26.3961 0.119892C30.2962 0.511212 34.0543 1.85353 37.3337 4.04473C41.2805 6.68189 44.3566 10.4302 46.1731 14.8156C47.9896 19.201 48.4649 24.0266 47.5388 28.6822C46.6128 33.3377 44.327 37.6141 40.9706 40.9706C37.6141 44.327 33.3377 46.6128 28.6822 47.5388C24.0266 48.4649 19.201 47.9896 14.8156 46.1731C10.4302 44.3566 6.68188 41.2805 4.04473 37.3337C1.85353 34.0543 0.511211 30.2963 0.119892 26.3961C-0.0124351 25.0772 1.07452 24 2.4 24C3.72548 24 4.78454 25.0787 4.9498 26.3938C5.32038 29.343 6.37231 32.1774 8.03578 34.6669C10.1455 37.8244 13.1441 40.2853 16.6525 41.7385C20.1608 43.1917 24.0213 43.5719 27.7457 42.8311C31.4702 42.0902 34.8913 40.2616 37.5765 37.5765C40.2616 34.8913 42.0902 31.4702 42.8311 27.7457C43.5719 24.0213 43.1917 20.1608 41.7385 16.6525C40.2853 13.1441 37.8244 10.1455 34.667 8.03578C32.1774 6.37231 29.343 5.32039 26.3938 4.9498C25.0787 4.78454 24 3.72548 24 2.4Z",fill:"#00BDD3"},null,-1))),o=[i];function u(e,t,a,r,i,u){return(0,n.wg)(),(0,n.iD)("svg",s,o)}var l={name:"ui-loader",data(){return{}},methods:{},computed:{}},d=a(89);const p=(0,d.Z)(l,[["render",u],["__scopeId","data-v-29e6c2c0"]]);var c=p},8972:function(e,t,a){e.exports=a.p+"img/photo-cover.4a3d2f37.svg"}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,s){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],s=e[d][2];for(var o=!0,u=0;u<n.length;u++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(o=!1,s<i&&(i=s));if(o){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,r,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+".ebb35aca.js"}}(),function(){a.miniCssF=function(e){return"css/"+e+".4727cf8a.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="abz-agency-test:";a.l=function(n,r,s,i){if(e[n])e[n].push(r);else{var o,u;if(void 0!==s)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var p=l[d];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+s){o=p;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+s),o.src=n),e[n]=[r];var c=function(t,a){o.onerror=o.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(c.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=c.bind(null,o.onerror),o.onload=c.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/test_app_reg_form_users_gallery/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,a,n,r){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var i=function(a){if(s.onerror=s.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=o,s.parentNode&&s.parentNode.removeChild(s),r(u)}};return s.onerror=s.onload=i,s.href=t,a?a.parentNode.insertBefore(s,a.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=a[n],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],s=r.getAttribute("data-href");if(s===e||s===t)return r}},n=function(n){return new Promise((function(r,s){var i=a.miniCssF(n),o=a.p+i;if(t(i,o))return r();e(n,o,null,r,s)}))},r={143:0};a.f.miniCss=function(e,t){var a={404:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(a,n){r=e[t]=[a,n]}));n.push(r[2]=s);var i=a.p+a.u(t),o=new Error,u=function(n){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",o.name="ChunkLoadError",o.type=s,o.request=i,r[1](o)}};a.l(i,u,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,i=n[0],o=n[1],u=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(u)var d=u(a)}for(t&&t(n);l<i.length;l++)s=i[l],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},n=self["webpackChunkabz_agency_test"]=self["webpackChunkabz_agency_test"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5877)}));n=a.O(n)})();
//# sourceMappingURL=app.f1fffb4d.js.map