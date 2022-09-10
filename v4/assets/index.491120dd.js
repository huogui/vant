import{V as r,b as d}from"./index.6dd08cc0.js";import{V as S}from"./index.073943e5.js";import{V as z}from"./index.d16595ff.js";import{c as k}from"./index.e41a59ee.js";import{a as U}from"./use-translate.c56bc05e.js";import{A,x as m,r as B,o as F,a as D,e as a,w as o,C as e,h as i,t as n,d as I,F as w}from"./vue-libs.a3cd7f61.js";import"./with-install.2d06a5b3.js";import"./Checker.9689d982.js";import"./index.710c79e5.js";import"./constant.80c6de18.js";import"./use-route.7a9317f3.js";const L=["src"],N=["src"],P=A({__name:"index",setup(R){const l=U({"zh-CN":{radio:"\u5355\u9009\u6846",text1:"\u672A\u9009\u4E2D\u7981\u7528",text2:"\u9009\u4E2D\u4E14\u7981\u7528",withCell:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528",horizontal:"\u6C34\u5E73\u6392\u5217",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customShape:"\u81EA\u5B9A\u4E49\u5F62\u72B6",customIconSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",disableLabel:"\u7981\u7528\u6587\u672C\u70B9\u51FB"},"en-US":{radio:"Radio",text1:"Disabled",text2:"Disabled and checked",withCell:"Inside a Cell",horizontal:"Hrizontal",customIcon:"Custom Icon",customColor:"Custom Color",customShape:"Custom Shape",customIconSize:"Custom Icon Size",disableLabel:"Disable label click"}}),p=m("1"),f=m("2"),V=m("1"),_=m("1"),c=m("1"),v=m("1"),C=m("1"),b=m("1"),g=m("1"),E=k("user-active.png"),x=k("user-inactive.png");return(h,u)=>{const s=B("demo-block");return F(),D(w,null,[a(s,{title:e(l)("basicUsage")},{default:o(()=>[a(e(r),{modelValue:p.value,"onUpdate:modelValue":u[0]||(u[0]=t=>p.value=t),class:"demo-radio-group"},{default:o(()=>[a(e(d),{name:"1"},{default:o(()=>[i(n(e(l)("radio"))+" 1",1)]),_:1}),a(e(d),{name:"2"},{default:o(()=>[i(n(e(l)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(s,{title:e(l)("horizontal")},{default:o(()=>[a(e(r),{modelValue:g.value,"onUpdate:modelValue":u[1]||(u[1]=t=>g.value=t),class:"demo-radio-group",direction:"horizontal"},{default:o(()=>[a(e(d),{name:"1"},{default:o(()=>[i(n(e(l)("radio"))+" 1",1)]),_:1}),a(e(d),{name:"2"},{default:o(()=>[i(n(e(l)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(s,{title:e(l)("disabled")},{default:o(()=>[a(e(r),{modelValue:f.value,"onUpdate:modelValue":u[2]||(u[2]=t=>f.value=t),class:"demo-radio-group",disabled:""},{default:o(()=>[a(e(d),{name:"1"},{default:o(()=>[i(n(e(l)("radio"))+" 1",1)]),_:1}),a(e(d),{name:"2"},{default:o(()=>[i(n(e(l)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(s,{title:e(l)("customShape")},{default:o(()=>[a(e(r),{modelValue:C.value,"onUpdate:modelValue":u[3]||(u[3]=t=>C.value=t),class:"demo-radio-group"},{default:o(()=>[a(e(d),{name:"1",shape:"square"},{default:o(()=>[i(n(e(l)("radio"))+" 1",1)]),_:1}),a(e(d),{name:"2",shape:"square"},{default:o(()=>[i(n(e(l)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(s,{title:e(l)("customColor")},{default:o(()=>[a(e(r),{modelValue:V.value,"onUpdate:modelValue":u[4]||(u[4]=t=>V.value=t),class:"demo-radio-group"},{default:o(()=>[a(e(d),{name:"1","checked-color":"#ee0a24"},{default:o(()=>[i(n(e(l)("radio"))+" 1 ",1)]),_:1}),a(e(d),{name:"2","checked-color":"#ee0a24"},{default:o(()=>[i(n(e(l)("radio"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(s,{title:e(l)("customIconSize")},{default:o(()=>[a(e(r),{modelValue:b.value,"onUpdate:modelValue":u[5]||(u[5]=t=>b.value=t),class:"demo-radio-group"},{default:o(()=>[a(e(d),{name:"1","icon-size":"24px"},{default:o(()=>[i(n(e(l)("radio"))+" 1 ",1)]),_:1}),a(e(d),{name:"2","icon-size":"24px"},{default:o(()=>[i(n(e(l)("radio"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(s,{title:e(l)("customIcon")},{default:o(()=>[a(e(r),{modelValue:_.value,"onUpdate:modelValue":u[6]||(u[6]=t=>_.value=t),class:"demo-radio-group"},{default:o(()=>[a(e(d),{name:"1"},{icon:o(({checked:t})=>[I("img",{src:t?e(E):e(x)},null,8,L)]),default:o(()=>[i(n(e(l)("radio"))+" 1 ",1)]),_:1}),a(e(d),{name:"2"},{icon:o(({checked:t})=>[I("img",{src:t?e(E):e(x)},null,8,N)]),default:o(()=>[i(n(e(l)("radio"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(s,{title:e(l)("disableLabel")},{default:o(()=>[a(e(r),{modelValue:v.value,"onUpdate:modelValue":u[7]||(u[7]=t=>v.value=t),class:"demo-radio-group"},{default:o(()=>[a(e(d),{name:"1","label-disabled":""},{default:o(()=>[i(n(e(l)("radio"))+" 1",1)]),_:1}),a(e(d),{name:"2","label-disabled":""},{default:o(()=>[i(n(e(l)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(s,{title:e(l)("withCell")},{default:o(()=>[a(e(r),{modelValue:c.value,"onUpdate:modelValue":u[10]||(u[10]=t=>c.value=t)},{default:o(()=>[a(e(S),{inset:""},{default:o(()=>[a(e(z),{clickable:"",title:e(l)("radio")+1,onClick:u[8]||(u[8]=t=>c.value="1")},{"right-icon":o(()=>[a(e(d),{name:"1"})]),_:1},8,["title"]),a(e(z),{clickable:"",title:e(l)("radio")+2,onClick:u[9]||(u[9]=t=>c.value="2")},{"right-icon":o(()=>[a(e(d),{name:"2"})]),_:1},8,["title"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{P as default};