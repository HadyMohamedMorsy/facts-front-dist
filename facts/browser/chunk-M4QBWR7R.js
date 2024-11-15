import{c as se}from"./chunk-PXIU2W6D.js";import"./chunk-FIQLK5SS.js";import"./chunk-KMRITD64.js";import{G as ie,P as ne,Q as re,S as oe,a as Y,aa as ae,c as Z,e as ee,g as te,na as le}from"./chunk-G6IVAOBK.js";import{E as S,F as E,I as X,X as U,ga as M,ha as D,p as J,s as W}from"./chunk-ICZNYOR4.js";import"./chunk-V2BJOJJK.js";import{$b as f,Fb as q,Gb as z,Hb as G,Ib as K,Jb as r,Kb as o,Lb as P,M as L,Pb as B,Qb as y,Rb as T,X as F,_b as s,ac as w,bb as I,ca as O,gc as k,gd as H,ha as p,hb as t,la as b,ma as $,rc as d,s as N,sc as x,tc as Q,wa as V,wb as R,xa as A,zb as C}from"./chunk-RQGJT3HM.js";import{h as l,i as u,j as g}from"./chunk-JW2F22G4.js";var pe=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=$({type:i});static \u0275inj=O({imports:[H,ie,U,U]})}return i})();var me=(()=>{var a,e;let n=class n{constructor(){u(this,a);u(this,e);this.dialogRef=p(re),this.dialogConfig=p(ne),this.editData=this.dialogConfig.data,g(this,a,p(Y)),g(this,e,p(Z))}apply(){l(this,e).request("post","applicant-graduates/store",this.editData).subscribe({next:()=>{this.dialogRef.close(),l(this,a).setMessage({severity:"success",detail:"you success send request we will contact u"})},error:()=>{l(this,a).setMessage({severity:"error",detail:"there something wrong"})}})}cancel(){this.dialogRef.close()}};a=new WeakMap,e=new WeakMap,n.\u0275fac=function(m){return new(m||n)},n.\u0275cmp=b({type:n,selectors:[["app-dialog-accept"]],standalone:!0,features:[k],decls:9,vars:11,consts:[[1,""],[1,"py-10","px-6","mb-2","text-xl","uppercase","title-font","bg-[#eee]","text-black"],[1,"flex","justify-end","gap-3","items-center"],["styleClass","cta-btn px-3 py-1 mt-2 w-full uppercase",3,"onClick","label","outlined"],["styleClass","mt-2 px-3 py-1 w-full uppercase",3,"onClick","label","outlined"]],template:function(m,j){m&1&&(r(0,"div",0)(1,"p",1),s(2),d(3,"translate"),o(),r(4,"div",2)(5,"p-button",3),d(6,"translate"),y("onClick",function(){return j.cancel()}),o(),r(7,"p-button",4),d(8,"translate"),y("onClick",function(){return j.apply()}),o()()()),m&2&&(t(2),w(" ",x(3,5,"u will Apply this Course By Info Current User")," "),t(3),C("label",x(6,7,"Cancel"))("outlined",!0),t(2),C("label",x(8,9,"Apply Now"))("outlined",!0))},dependencies:[D,M,E,S],changeDetection:0});let i=n;return i})();function ge(i,a){if(i&1&&(r(0,"div")(1,"h3",13),s(2),o()()),i&2){let e=a.$implicit;t(2),f(e)}}function fe(i,a){if(i&1){let e=B();r(0,"div",0)(1,"div",1),P(2,"img",2),r(3,"div")(4,"h1",3),s(5),o(),r(6,"p",4),s(7),o(),r(8,"p",5),s(9),o()()(),r(10,"section")(11,"h2",6),s(12),d(13,"translate"),o(),r(14,"p",7),s(15),d(16,"translation"),o()(),r(17,"section",8)(18,"h2",6),s(19),d(20,"translate"),o(),r(21,"div",9),G(22,ge,3,1,"div",null,z),o()(),r(24,"section",8)(25,"h2",6),s(26),d(27,"translate"),o(),r(28,"div",10)(29,"a",11),s(30),d(31,"translate"),o(),r(32,"p-button",12),y("onClick",function(){V(e);let _=T();return A(_.apply(_.graduates().id))}),o()()()()}if(i&2){let e=T();t(2),C("src",e.graduates().featuredImage,I),t(3),w(" ",e.graduates().user.firstName+" "+e.graduates().user.lastName," "),t(2),f(e.graduates().user.phone_number),t(2),f(e.graduates().user.email),t(3),f(x(13,11,"About Me")),t(3),w(" ",Q(16,13,e.graduates(),"description")," "),t(4),f(x(20,16,"Courses")),t(3),K(e.graduates().courses),t(4),f(x(27,18,"Attachments")),t(3),C("href",e.graduates().attachment,I),t(),f(x(31,20,"download Attachments")),t(2),C("outlined",!0)}}var pt=(()=>{var a,e,n,_,v;let m=class m{constructor(){u(this,a);u(this,e);u(this,n);u(this,_);u(this,v);g(this,a,p(te)),g(this,e,p(J)),this.currentUser=p(ae).currentUser,g(this,n,p(W)),g(this,_,p(X)),this.graduates$=l(this,e).params.pipe(L(),F(h=>l(this,a).getListData(`graduates/${h.slug}`,"GET",void 0,void 0,void 0,void 0,`graduates/${h.slug}`).pipe(N(({data:c})=>c)))),this.graduates=ee(this.graduates$,{initialValue:null}),g(this,v,p(oe))}apply(h){if(this.currentUser())if(this.currentUser()&&this.currentUser()?.role.name==="user"){let c={returnUrl:l(this,n).url.replace(/^\/(en|ar)(\/|$)/,"/"),message:"you must register  as emplyeer"};l(this,n).navigate([l(this,_).translateRoute("/join-job")],{queryParams:c})}else{let c={created_by:+this.currentUser()?.id,graduate:+h};this.dialogRef=l(this,v).open(me,{header:"Interested in him",width:"65vw",contentStyle:{overflow:"auto"},breakpoints:{"960px":"75vw","640px":"90vw"},data:c})}else{let c={returnUrl:l(this,n).url.replace(/^\/(en|ar)(\/|$)/,"/"),message:"you must login first to subscribtion"};l(this,n).navigate([l(this,_).translateRoute("/login")],{queryParams:c})}}};a=new WeakMap,e=new WeakMap,n=new WeakMap,_=new WeakMap,v=new WeakMap,m.\u0275fac=function(c){return new(c||m)},m.\u0275cmp=b({type:m,selectors:[["app-graduate-person-profile"]],standalone:!0,features:[k],decls:1,vars:1,consts:[[1,"container","md:mt-32","mb-12"],[1,"flex","items-center","mb-6"],["alt","facts",1,"profile-pic","mr-6",3,"src"],[1,"text-3xl","font-bold","text-gray-900"],[1,"text-lg","text-gray-600"],[1,"text-gray-500","mt-2"],[1,"section-title","text-xl"],[1,"text-gray-700"],[1,"mt-8"],[1,"space-y-4"],[1,"flex","justify-between"],["download","",1,"cta-btn","uppercase","mt-3","inline-flex","w-auto","px-5",3,"href"],["styleClass","mt-2 px-4 py-2 w-full uppercase","label","Interested in him",3,"onClick","outlined"],[1,"font-semibold"]],template:function(c,de){c&1&&R(0,fe,33,22,"div",0),c&2&&q(de.graduates()?0:-1)},dependencies:[pe,E,S,se,le,D,M],styles:[".profile-pic[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%;border:4px solid #951914}.section-title[_ngcontent-%COMP%]{border-bottom:2px solid #951914;padding-bottom:4px;margin-bottom:12px;font-weight:600}.skill-bar[_ngcontent-%COMP%]{height:6px;background:#e5e7eb;border-radius:4px}.skill-fill[_ngcontent-%COMP%]{height:100%;background:#951914;border-radius:4px}"],changeDetection:0});let i=m;return i})();export{pt as default};