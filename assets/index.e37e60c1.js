import{c as F,b as W,M as j,i as H,Y as K,n as Q,H as Y,Q as L,u as Z,t as q,a as G}from"./use-translate.813c82b8.js";import{t as B,n as J,c as X,m as ee,w as M,b as te,u as z}from"./with-install.ed706383.js";import{H as oe}from"./constant.80c6de18.js";import{u as le}from"./use-id.ae1b43c7.js";import{z as U,D as b,C as T,e as o,H as ne,j as ae,v as ue,Q as ie,R as se,r as re,o as de,a as ce,w as c,B as t,d as pe,h as me,t as ve,F as fe}from"./vue-libs.e99ed056.js";import{u as Ce}from"./use-expose.f2ccb00a.js";import{C as I}from"./index.73a4398f.js";import{I as we}from"./index.b854190e.js";import{P as Ve}from"./index.a230d5bc.js";import{S as _}from"./index.55089af2.js";import{B as xe}from"./index.a8d195a5.js";import"./use-route.ffc287bb.js";import"./interceptor.ffa245cd.js";import"./use-touch.1aeb3848.js";import"./use-lazy-render.925a18cc.js";import"./on-popup-reopen.8597ae62.js";import"./index.9efe88fe.js";import"./index.04ba88cf.js";const[N,E]=F("dropdown-menu"),be={overlay:B,zIndex:J,duration:X(.2),direction:ee("down"),activeColor:String,closeOnClickOutside:B,closeOnClickOverlay:B},$=Symbol(N);var ge=U({name:N,props:be,setup(a,{slots:u}){const v=le(),i=b(),p=b(),r=b(0),{children:s,linkChildren:w}=W($),V=j(i),g=T(()=>s.some(e=>e.state.showWrapper)),y=T(()=>{if(g.value&&H(a.zIndex))return{zIndex:+a.zIndex+1}}),l=()=>{a.closeOnClickOutside&&s.forEach(e=>{e.toggle(!1)})},f=()=>{if(p.value){const e=Y(p);a.direction==="down"?r.value=e.bottom:r.value=L.value-e.top}},n=()=>{g.value&&f()},A=e=>{s.forEach((d,m)=>{m===e?(f(),d.toggle()):d.state.showPopup&&d.toggle(!1,{immediate:!0})})},P=(e,d)=>{const{showPopup:m}=e.state,{disabled:x,titleClass:O}=e;return o("div",{id:`${v}-${d}`,role:"button",tabindex:x?void 0:0,class:[E("item",{disabled:x}),{[oe]:!x}],onClick:()=>{x||A(d)}},[o("span",{class:[E("title",{down:m===(a.direction==="down"),active:m}),O],style:{color:m?a.activeColor:""}},[o("div",{class:"van-ellipsis"},[e.renderTitle()])])])};return w({id:v,props:a,offset:r}),K(i,l),Q("scroll",n,{target:V}),()=>{var e;return o("div",{ref:i,class:E()},[o("div",{ref:p,style:y.value,class:E("bar",{opened:g.value})},[s.map(P)]),(e=u.default)==null?void 0:e.call(u)])}}});const k=M(ge);function ye(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!ie(a)}const[Oe,h]=F("dropdown-item"),ke={title:String,options:te(),disabled:Boolean,teleport:[String,Object],lazyRender:B,modelValue:z,titleClass:z};var Pe=U({name:Oe,props:ke,emits:["open","opened","close","closed","change","update:modelValue"],setup(a,{emit:u,slots:v}){const i=ne({showPopup:!1,transition:!0,showWrapper:!1}),{parent:p,index:r}=Z($);if(!p)return;const s=e=>()=>u(e),w=s("open"),V=s("close"),g=s("opened"),y=()=>{i.showWrapper=!1,u("closed")},l=e=>{a.teleport&&e.stopPropagation()},f=(e=!i.showPopup,d={})=>{e!==i.showPopup&&(i.showPopup=e,i.transition=!d.immediate,e&&(i.showWrapper=!0))},n=()=>{if(v.title)return v.title();if(a.title)return a.title;const e=a.options.find(d=>d.value===a.modelValue);return e?e.text:""},A=e=>{const{activeColor:d}=p.props,m=e.value===a.modelValue,x=()=>{i.showPopup=!1,e.value!==a.modelValue&&(u("update:modelValue",e.value),u("change",e.value))},O=()=>{if(m)return o(we,{class:h("icon"),color:d,name:"success"},null)};return o(I,{role:"menuitem",key:e.value,icon:e.icon,title:e.text,class:h("option",{active:m}),style:{color:m?d:""},tabindex:m?0:-1,clickable:!0,onClick:x},{value:O})},P=()=>{const{offset:e}=p,{zIndex:d,overlay:m,duration:x,direction:O,closeOnClickOverlay:R}=p.props,S=q(d);return O==="down"?S.top=`${e.value}px`:S.bottom=`${e.value}px`,ae(o("div",{style:S,class:h([O]),onClick:l},[o(Ve,{show:i.showPopup,"onUpdate:show":D=>i.showPopup=D,role:"menu",class:h("content"),overlay:m,position:O==="down"?"top":"bottom",duration:i.transition?x:0,lazyRender:a.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${p.id}-${r.value}`,closeOnClickOverlay:R,onOpen:w,onClose:V,onOpened:g,onClosed:y},{default:()=>{var D;return[a.options.map(A),(D=v.default)==null?void 0:D.call(v)]}})]),[[ue,i.showWrapper]])};return Ce({state:i,toggle:f,renderTitle:n}),()=>{if(a.teleport){let e;return o(se,{to:a.teleport},ye(e=P())?e:{default:()=>[e]})}return P()}}});const C=M(Pe),De={style:{padding:"5px 16px"}},Ke=U({name:"index",setup(a){const u=G({"zh-CN":{disableMenu:"\u7981\u7528\u83DC\u5355",switchTitle1:"\u5305\u90AE",switchTitle2:"\u56E2\u8D2D",itemTitle:"\u7B5B\u9009",expandDirection:"\u5411\u4E0A\u5C55\u5F00",customContent:"\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9",customActiveColor:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u6001\u989C\u8272",option1:[{text:"\u5168\u90E8\u5546\u54C1",value:0},{text:"\u65B0\u6B3E\u5546\u54C1",value:1},{text:"\u6D3B\u52A8\u5546\u54C1",value:2}],option2:[{text:"\u9ED8\u8BA4\u6392\u5E8F",value:"a"},{text:"\u597D\u8BC4\u6392\u5E8F",value:"b"},{text:"\u9500\u91CF\u6392\u5E8F",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}}),v=b(),i=b(!0),p=b(!1),r=b(0),s=b("a"),w=T(()=>u("option1")),V=T(()=>u("option2")),g=()=>{var y;(y=v.value)==null||y.toggle()};return(y,l)=>{const f=re("demo-block");return de(),ce(fe,null,[o(f,{title:t(u)("basicUsage")},{default:c(()=>[o(t(k),null,{default:c(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=n=>r.value=n),options:t(w)},null,8,["modelValue","options"]),o(t(C),{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=n=>s.value=n),options:t(V)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("customContent")},{default:c(()=>[o(t(k),null,{default:c(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=n=>r.value=n),options:t(w)},null,8,["modelValue","options"]),o(t(C),{title:t(u)("itemTitle"),ref_key:"item",ref:v},{default:c(()=>[o(t(I),{center:"",title:t(u)("switchTitle1")},{"right-icon":c(()=>[o(t(_),{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=n=>i.value=n),size:"24","active-color":"#ee0a24"},null,8,["modelValue"])]),_:1},8,["title"]),o(t(I),{center:"",title:t(u)("switchTitle2")},{"right-icon":c(()=>[o(t(_),{modelValue:p.value,"onUpdate:modelValue":l[4]||(l[4]=n=>p.value=n),size:"24","active-color":"#ee0a24"},null,8,["modelValue"])]),_:1},8,["title"]),pe("div",De,[o(t(xe),{type:"danger",block:"",round:"",style:{height:"40px"},onClick:g},{default:c(()=>[me(ve(t(u)("confirm")),1)]),_:1})])]),_:1},8,["title"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("customActiveColor")},{default:c(()=>[o(t(k),{"active-color":"#1989fa"},{default:c(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[5]||(l[5]=n=>r.value=n),options:t(w)},null,8,["modelValue","options"]),o(t(C),{modelValue:s.value,"onUpdate:modelValue":l[6]||(l[6]=n=>s.value=n),options:t(V)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("expandDirection")},{default:c(()=>[o(t(k),{direction:"up"},{default:c(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[7]||(l[7]=n=>r.value=n),options:t(w)},null,8,["modelValue","options"]),o(t(C),{modelValue:s.value,"onUpdate:modelValue":l[8]||(l[8]=n=>s.value=n),options:t(V)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("disableMenu")},{default:c(()=>[o(t(k),null,{default:c(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[9]||(l[9]=n=>r.value=n),disabled:"",options:t(w)},null,8,["modelValue","options"]),o(t(C),{modelValue:s.value,"onUpdate:modelValue":l[10]||(l[10]=n=>s.value=n),disabled:"",options:t(V)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"])],64)}}});export{Ke as default};