import{c as E,a as V}from"./use-translate.4bd55976.js";import{m as h,c as A,t as D,w as I}from"./with-install.4d0ca77e.js";import{I as N}from"./index.43c21584.js";import{B as P}from"./index.d3837f2c.js";import{u as w}from"./use-placeholder.cab25a6f.js";import{A as y,x as L,e as t,r as U,o as z,a as $,w as l,C as e,h as C,t as x,d as j,F as q}from"./vue-libs.34a885a4.js";import{V as G}from"./index.bcf5d764.js";import{s as v}from"./index.a95e577f.js";import"./index.3e55758c.js";import"./constant.80c6de18.js";import"./use-route.d291d507.js";import"./index.cef67cd8.js";import"./use-height.b8da6b61.js";import"./on-popup-reopen.550cf80c.js";import"./use-expose.2b4664c4.js";import"./Checker.fc6667c7.js";import"./index.df58843c.js";import"./interceptor.442e99c6.js";import"./use-touch.d7fba47b.js";import"./use-lazy-render.a4c2132f.js";import"./index.0e81d5df.js";import"./mount-component.60637ff5.js";const[H,u,J]=E("submit-bar"),K={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:h("\xA5"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:h("danger"),buttonColor:String,suffixLabel:String,placeholder:Boolean,decimalLength:A(2),safeAreaInsetBottom:D},M=y({name:H,props:K,emits:["submit"],setup(o,{emit:i,slots:n}){const r=L(),b=w(r,u),k=()=>{const{price:a,label:c,currency:p,textAlign:F,suffixLabel:B,decimalLength:_}=o;if(typeof a=="number"){const S=(a/100).toFixed(+_).split("."),T=_?`.${S[1]}`:"";return t("div",{class:u("text"),style:{textAlign:F}},[t("span",null,[c||J("label")]),t("span",{class:u("price")},[p,t("span",{class:u("price-integer")},[S[0]]),T]),B&&t("span",{class:u("suffix-label")},[B])])}},m=()=>{var p;const{tip:a,tipIcon:c}=o;if(n.tip||a)return t("div",{class:u("tip")},[c&&t(N,{class:u("tip-icon"),name:c},null),a&&t("span",{class:u("tip-text")},[a]),(p=n.tip)==null?void 0:p.call(n)])},s=()=>i("submit"),f=()=>n.button?n.button():t(P,{round:!0,type:o.buttonType,text:o.buttonText,class:u("button",o.buttonType),color:o.buttonColor,loading:o.loading,disabled:o.disabled,onClick:s},null),g=()=>{var a,c;return t("div",{ref:r,class:[u(),{"van-safe-area-bottom":o.safeAreaInsetBottom}]},[(a=n.top)==null?void 0:a.call(n),m(),t("div",{class:u("bar")},[(c=n.default)==null?void 0:c.call(n),k(),f()])])};return()=>o.placeholder?b(g):g()}}),O=I(M),d=O,xt=y({__name:"index",setup(o){const i=V({"zh-CN":{tip1:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001",tip2:"\u4F60\u7684\u6536\u8D27\u5730\u5740\u4E0D\u652F\u6301\u914D\u9001, ",tip3:"\u4FEE\u6539\u5730\u5740",check:"\u5168\u9009",submit:"\u63D0\u4EA4\u8BA2\u5355",clickLink:"\u4FEE\u6539\u5730\u5740",clickButton:"\u70B9\u51FB\u6309\u94AE"},"en-US":{tip1:"Some tips",tip2:"Some tips, ",tip3:"Link",check:"Label",submit:"Submit",clickLink:"Click Link",clickButton:"Submit"}}),n=L(!0),r=()=>v(i("clickButton")),b=()=>v(i("clickLink"));return(k,m)=>{const s=U("demo-block");return z(),$(q,null,[t(s,{title:e(i)("basicUsage")},{default:l(()=>[t(e(d),{price:3050,"button-text":e(i)("submit"),onSubmit:r},null,8,["button-text"])]),_:1},8,["title"]),t(s,{title:e(i)("disabled")},{default:l(()=>[t(e(d),{disabled:"",price:3050,"button-text":e(i)("submit"),tip:e(i)("tip1"),"tip-icon":"info-o",onSubmit:r},null,8,["button-text","tip"])]),_:1},8,["title"]),t(s,{title:e(i)("loadingStatus")},{default:l(()=>[t(e(d),{loading:"",price:3050,"button-text":e(i)("submit"),onSubmit:r},null,8,["button-text"])]),_:1},8,["title"]),t(s,{title:e(i)("advancedUsage")},{default:l(()=>[t(e(d),{price:3050,"button-text":e(i)("submit"),onSubmit:r},{tip:l(()=>[C(x(e(i)("tip2"))+" ",1),j("span",{class:"edit-address",onClick:b},x(e(i)("tip3")),1)]),default:l(()=>[t(e(G),{modelValue:n.value,"onUpdate:modelValue":m[0]||(m[0]=f=>n.value=f)},{default:l(()=>[C(x(e(i)("check")),1)]),_:1},8,["modelValue"])]),_:1},8,["button-text"])]),_:1},8,["title"])],64)}}});export{xt as default};