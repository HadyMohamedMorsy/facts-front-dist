import{a as G}from"./chunk-EX2TGDSR.js";import"./chunk-AEEHQREX.js";import{a as A}from"./chunk-6SW26JCA.js";import{a as q}from"./chunk-RXHJUPY2.js";import{e as $,na as w}from"./chunk-BDABOUIL.js";import{E as B,F as _,J as O,K as U,t as W}from"./chunk-ICZNYOR4.js";import"./chunk-V2BJOJJK.js";import{$b as P,Fb as y,Ja as h,Jb as r,Kb as l,Lb as m,Pb as M,Rb as v,_b as c,ac as b,bb as L,cc as j,dc as R,ec as V,gc as C,ha as I,hb as n,la as x,qb as E,rc as o,sc as d,tc as g,wa as k,wb as u,wc as F,xa as z,zb as p}from"./chunk-RQGJT3HM.js";import{a as S,b as T}from"./chunk-JW2F22G4.js";function Q(t,e){if(t&1&&(r(0,"a",0),o(1,"localize"),m(2,"img",1),r(3,"div",2)(4,"h1",3),c(5),o(6,"translation"),l(),r(7,"p",4),c(8),o(9,"translation"),l(),r(10,"div",5)(11,"a",6),o(12,"localize"),c(13),o(14,"translate"),l()()()()),t&2){let i=v();p("routerLink",d(1,6,"/blog/"+i.blog().slug)),n(2),p("src",i.blog().featuredImage,L),n(3),b(" ",g(6,8,i.blog(),"title")," "),n(3),b(" ",g(9,11,i.blog(),"short_description")," "),n(3),p("routerLink",d(12,14,"/blog/"+i.blog().slug)),n(2),P(d(14,16,"Read more"))}}var H=(()=>{let e=class e{constructor(){this.blog=h()}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=x({type:e,selectors:[["app-blog-card"]],inputs:{blog:[1,"blog"]},standalone:!0,features:[C],decls:1,vars:1,consts:[[1,"block",3,"routerLink"],["alt","",1,"object-cover","object-center","w-full","h-64","rounded-lg","lg:h-80",3,"src"],[1,"mt-2"],[1,"mt-1","text-xl","font-semibold","text-gray-800"],[1,"mt-2","text-gray-500"],[1,"flex","items-center","justify-between","mt-4"],[1,"inline-block","text-[#ce0b10]","underline","hover:text-[#1b3f92]",3,"routerLink"]],template:function(a,s){a&1&&u(0,Q,15,18,"a",0),a&2&&y(s.blog()?0:-1)},dependencies:[W,_,B,U,O,w],changeDetection:0});let t=e;return t})();function X(t,e){if(t&1&&(m(0,"app-banner",1),o(1,"translation"),o(2,"translation")),t&2){let i=v();p("bannerImage",i.banner().featuredImage)("bannerTitle",g(1,3,i.banner(),"title"))("bannerShortDescription",g(2,6,i.banner(),"short_description"))}}function Y(t,e){if(t&1&&(r(0,"div",8),m(1,"app-blog-card",9),l()),t&2){let i=e.$implicit;n(),p("blog",i)}}var ye=(()=>{let e=class e{constructor(){this.banner$=I(A).getBanner("Blogs"),this.banner=$(this.banner$,{initialValue:null}),this.filters=E({}),this.slug=h("")}ngOnInit(){this.filters.update(f=>T(S({},f),{filters:{slug:this.slug()}}))}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=x({type:e,selectors:[["app-blog"]],inputs:{slug:[1,"slug"]},standalone:!0,features:[C],decls:11,vars:5,consts:[["viewBodyTemplate",""],[3,"bannerImage","bannerTitle","bannerShortDescription"],[1,"bg-white"],[1,"container","px-6","py-10","mx-auto"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-semibold","text-gray-800","capitalize","lg:text-3xl"],[1,"my-8","border-gray-200","dark:border-gray-700"],["endpoint","magazine/magazines/blogs",3,"filtersDataChange","filtersData"],[1,"md:col-span-4","col-span-12"],[3,"blog"]],template:function(a,s){if(a&1){let J=M();u(0,X,3,9,"app-banner",1),r(1,"section",2)(2,"div",3)(3,"div",4)(4,"h1",5),c(5),o(6,"translate"),l()(),m(7,"hr",6),r(8,"app-data-view",7),V("filtersDataChange",function(D){return k(J),R(s.filters,D)||(s.filters=D),z(D)}),u(9,Y,2,1,"ng-template",null,0,F),l()()()}a&2&&(y(s.banner()?0:-1),n(5),b(" ",d(6,3,"blogs")," "),n(3),j("filtersData",s.filters))},dependencies:[q,H,G,_,B,w],changeDetection:0});let t=e;return t})();export{ye as default};