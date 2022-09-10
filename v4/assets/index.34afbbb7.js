import{c as k,h as u,i as B,d as E}from"./use-translate.4bd55976.js";import{n as d,t as L,m as P,w as $}from"./with-install.4d0ca77e.js";import{I as D}from"./index.43c21584.js";import{A as V,x as f,P as j,D as C,y as N,J as R,e as o,j as U,V as q,B as z,q as A}from"./vue-libs.34a885a4.js";const[F,a]=k("image"),J={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:L,errorIcon:P("photo-fail"),iconPrefix:String,showLoading:L,loadingIcon:P("photo")},T=V({name:F,props:J,emits:["load","error"],setup(e,{emit:g,slots:n}){const i=f(!1),t=f(!0),s=f(),{$Lazyload:c}=j().proxy,S=C(()=>{const r={width:u(e.width),height:u(e.height)};return B(e.radius)&&(r.overflow="hidden",r.borderRadius=u(e.radius)),r});N(()=>e.src,()=>{i.value=!1,t.value=!0});const m=r=>{t.value=!1,g("load",r)},h=r=>{i.value=!0,t.value=!1,g("error",r)},v=(r,l,y)=>y?y():o(D,{name:r,size:e.iconSize,class:l,classPrefix:e.iconPrefix},null),b=()=>{if(t.value&&e.showLoading)return o("div",{class:a("loading")},[v(e.loadingIcon,a("loading-icon"),n.loading)]);if(i.value&&e.showError)return o("div",{class:a("error")},[v(e.errorIcon,a("error-icon"),n.error)])},x=()=>{if(i.value||!e.src)return;const r={alt:e.alt,class:a("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?U(o("img",z({ref:s},r),null),[[q("lazy"),e.src]]):o("img",z({src:e.src,onLoad:m,onError:h},r),null)},I=({el:r})=>{const l=()=>{r===s.value&&t.value&&m()};s.value?l():A(l)},w=({el:r})=>{r===s.value&&!i.value&&h()};return c&&E&&(c.$on("loaded",I),c.$on("error",w),R(()=>{c.$off("loaded",I),c.$off("error",w)})),()=>{var r;return o("div",{class:a({round:e.round,block:e.block}),style:S.value},[x(),b(),(r=n.default)==null?void 0:r.call(n)])}}}),_=$(T),O=_;export{_ as I,O as V};