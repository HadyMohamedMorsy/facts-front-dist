import{m as F}from"./chunk-ICZNYOR4.js";import{Ca as S,Ja as r,Jb as z,Kb as T,Lb as L,Tc as V,U as v,_c as N,ab as w,ba as b,ca as E,ea as C,ga as d,gc as x,hb as M,ib as a,la as y,ma as q,o as m,q as g,qb as h,va as O,x as p,zb as u}from"./chunk-RQGJT3HM.js";import{l}from"./chunk-JW2F22G4.js";var c={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"],["table"]]},f=new C("config",{providedIn:"root",factory:()=>({modules:c})});var D=(()=>{let e=class e{constructor(i,t){this.config=t,this.quill$=p(()=>l(this,null,function*(){if(!this.Quill){let o=this.document.addEventListener;this.document.addEventListener=this.document.__zone_symbol__addEventListener||this.document.addEventListener;let s=yield import("./chunk-NL2GGDCY.js");this.document.addEventListener=o,this.Quill=s.default?.default??s.default??s}return this.config.customOptions?.forEach(o=>{let s=this.Quill.import(o.import);s.whitelist=o.whitelist,this.Quill.register(s,!0,this.config.suppressGlobalRegisterWarning)}),yield this.registerCustomModules(this.Quill,this.config.customModules,this.config.suppressGlobalRegisterWarning)})).pipe(v({bufferSize:1,refCount:!0})),this.document=i.get(V),this.config||(this.config={modules:c})}getQuill(){return this.quill$}registerCustomModules(i,t,o){return l(this,null,function*(){if(Array.isArray(t))for(let{implementation:s,path:R}of t)m(s)&&(s=yield g(s)),i.register(R,s,o);return i})}};e.\u0275fac=function(t){return new(t||e)(d(S),d(f,8))},e.\u0275prov=b({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var we=(()=>{let e=class e{constructor(i,t){this.sanitizer=i,this.service=t,this.content=r(""),this.theme=r(void 0),this.sanitize=r(void 0),this.innerHTML=h(""),this.themeClass=h("ql-snow")}ngOnChanges(i){if(i.theme){let t=i.theme.currentValue||(this.service.config.theme?this.service.config.theme:"snow");this.themeClass.set(`ql-${t} ngx-quill-view-html`)}else if(!this.theme()){let t=this.service.config.theme?this.service.config.theme:"snow";this.themeClass.set(`ql-${t} ngx-quill-view-html`)}if(i.content){let t=i.content.currentValue,s=([!0,!1].includes(this.sanitize())?this.sanitize():this.service.config.sanitize||!1)?t:this.sanitizer.bypassSecurityTrustHtml(t);this.innerHTML.set(s)}}};e.\u0275fac=function(t){return new(t||e)(a(F),a(D))},e.\u0275cmp=y({type:e,selectors:[["quill-view-html"]],inputs:{content:[1,"content"],theme:[1,"theme"],sanitize:[1,"sanitize"]},standalone:!0,features:[O,x],decls:2,vars:2,consts:[[1,"ql-container",3,"ngClass"],[1,"ql-editor",3,"innerHTML"]],template:function(t,o){t&1&&(z(0,"div",0),L(1,"div",1),T()),t&2&&(u("ngClass",o.themeClass()),M(),u("innerHTML",o.innerHTML(),w))},dependencies:[N],styles:[`.ql-container.ngx-quill-view-html{border:0}
`],encapsulation:2});let n=e;return n})();var Me=(()=>{let e=class e{static forRoot(i){return{ngModule:e,providers:[{provide:f,useValue:i}]}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=q({type:e}),e.\u0275inj=E({});let n=e;return n})();export{we as a,Me as b};
