import{a as k}from"./chunk-PEDCQSFU.js";import{a as j}from"./chunk-WDNP65PY.js";import{a as V}from"./chunk-KMRITD64.js";import{e as b,g as M,na as P,sa as A}from"./chunk-G6IVAOBK.js";import{E,F as L}from"./chunk-ICZNYOR4.js";import"./chunk-V2BJOJJK.js";import{Fb as B,Gb as D,Hb as _,Ib as I,Jb as c,Kb as o,Lb as l,Rb as F,_b as d,ac as f,gc as $,ha as m,hb as r,la as v,rc as i,s as S,sc as u,tc as h,wb as y,zb as s}from"./chunk-RQGJT3HM.js";import{h as C,i as g,j as x}from"./chunk-JW2F22G4.js";function w(t,n){if(t&1&&(l(0,"app-banner",0),i(1,"translation"),i(2,"translation")),t&2){let e=F();s("bannerImage",e.banner().featuredImage)("bannerTitle",h(1,3,e.banner(),"title"))("bannerShortDescription",h(2,6,e.banner(),"short_description"))}}function H(t,n){if(t&1&&l(0,"app-team-card",6),t&2){let e=n.$implicit;s("person",e)}}var Y=(()=>{var n;let e=class e{constructor(){g(this,n);this.banner$=m(j).getBanner("Team"),x(this,n,m(M)),this.banner=b(this.banner$,{initialValue:null}),this.team$=C(this,n).getListData("team/front/index","POST",{start:0,length:6},void 0,void 0,void 0,"team/front/index").pipe(S(({data:p})=>p)),this.contents=b(this.team$,{initialValue:[]})}};n=new WeakMap,e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=v({type:e,selectors:[["app-team"]],standalone:!0,features:[$],decls:12,vars:7,consts:[[3,"bannerImage","bannerTitle","bannerShortDescription"],[1,"my-20"],[1,"container"],["styleClassWrapper","mb-14 text-center"],["subHeader",""],["title",""],[3,"person"]],template:function(a,T){a&1&&(y(0,w,3,9,"app-banner",0),c(1,"section",1)(2,"div",2)(3,"app-section-title",3)(4,"span",4),d(5),i(6,"translate"),o(),c(7,"span",5),d(8),i(9,"translate"),o()(),_(10,H,1,1,"app-team-card",6,D),o()()),a&2&&(B(T.banner()?0:-1),r(5),f("",u(6,3,"FACTS Academy")," "),r(3),f(" ",u(9,5,"Facts Team")," "),r(2),I(T.contents()))},dependencies:[V,P,k,L,E,A],changeDetection:0});let t=e;return t})();export{Y as default};