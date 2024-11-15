import './polyfills.server.mjs';
import{a as q}from"./chunk-WPBEJL6X.mjs";import{da as Q}from"./chunk-IRQAKFXM.mjs";import{C as h,p as Z,w as ee,y as te,z as ne}from"./chunk-LRA4SYKP.mjs";import{c as Y,d as N,f as M,g as j,h as R}from"./chunk-34PEHLBT.mjs";import{Ab as d,Bb as a,Db as H,Fa as f,Fb as I,Ka as D,Kc as O,Lb as m,Mb as b,Nb as _,Ob as v,Pb as y,Qb as k,Rc as C,Sb as F,Sc as G,Tb as l,Ub as L,Vb as T,Xb as A,Zb as x,_b as S,aa as B,ac as z,ca as U,cc as V,jb as c,jd as P,kb as u,kc as g,la as E,ma as $,md as J,nd as K,od as W,rd as X,vb as w,yb as p}from"./chunk-G5AH7SIV.mjs";var ae=["*",[["p-header"]]],oe=["*","p-header"],ce=i=>({$implicit:i}),ie=i=>({transitionParams:i}),re=i=>({value:"visible",params:i}),se=i=>({value:"hidden",params:i});function le(i,s){if(i&1&&_(0,"span",11),i&2){let e=l(3);I(e.accordion.collapseIcon),a("ngClass",e.iconClass),d("aria-hidden",!0)}}function de(i,s){if(i&1&&_(0,"ChevronDownIcon",11),i&2){let e=l(3);a("ngClass",e.iconClass),d("aria-hidden",!0)}}function pe(i,s){if(i&1&&(v(0),p(1,le,1,4,"span",9)(2,de,1,2,"ChevronDownIcon",10),y()),i&2){let e=l(2);c(),a("ngIf",e.accordion.collapseIcon),c(),a("ngIf",!e.accordion.collapseIcon)}}function he(i,s){if(i&1&&_(0,"span",11),i&2){let e=l(3);I(e.accordion.expandIcon),a("ngClass",e.iconClass),d("aria-hidden",!0)}}function ue(i,s){if(i&1&&_(0,"ChevronRightIcon",11),i&2){let e=l(3);a("ngClass",e.iconClass),d("aria-hidden",!0)}}function ge(i,s){if(i&1&&(v(0),p(1,he,1,4,"span",9)(2,ue,1,2,"ChevronRightIcon",10),y()),i&2){let e=l(2);c(),a("ngIf",e.accordion.expandIcon),c(),a("ngIf",!e.accordion.expandIcon)}}function fe(i,s){if(i&1&&(v(0),p(1,pe,3,2,"ng-container",3)(2,ge,3,2,"ng-container",3),y()),i&2){let e=l();c(),a("ngIf",e.selected),c(),a("ngIf",!e.selected)}}function me(i,s){}function be(i,s){i&1&&p(0,me,0,0,"ng-template")}function _e(i,s){if(i&1&&(m(0,"span",12),z(1),b()),i&2){let e=l();c(),V(" ",e.header," ")}}function ve(i,s){i&1&&k(0)}function ye(i,s){i&1&&T(0,1,["*ngIf","hasHeaderFacet"])}function Ce(i,s){i&1&&k(0)}function Ie(i,s){if(i&1&&(v(0),p(1,Ce,1,0,"ng-container",6),y()),i&2){let e=l();c(),a("ngTemplateOutlet",e.contentTemplate)}}var Te=["*"],Ae=(()=>{class i{el;changeDetector;id;header;headerStyle;tabStyle;contentStyle;tabStyleClass;headerStyleClass;contentStyleClass;disabled;cache=!0;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";iconPos="start";get selected(){return this._selected}set selected(e){this._selected=e,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.changeDetector.detectChanges())}headerAriaLevel=2;selectedChange=new f;headerFacet;templates;_selected=!1;get iconClass(){return this.iconPos==="end"?"p-accordion-toggle-icon-end":"p-accordion-toggle-icon"}contentTemplate;headerTemplate;iconTemplate;loaded=!1;accordion;constructor(e,n,t){this.el=n,this.changeDetector=t,this.accordion=e,this.id=Z()}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}toggle(e){if(this.disabled)return!1;let n=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:e,index:n});else{if(!this.accordion.multiple)for(var t=0;t<this.accordion.tabs.length;t++)this.accordion.tabs[t].selected&&(this.accordion.tabs[t].selected=!1,this.accordion.tabs[t].selectedChange.emit(!1),this.accordion.tabs[t].changeDetector.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:e,index:n})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.changeDetector.markForCheck(),e?.preventDefault()}findTabIndex(){let e=-1;for(var n=0;n<this.accordion.tabs.length;n++)if(this.accordion.tabs[n]==this){e=n;break}return e}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onKeydown(e){switch(e.code){case"Enter":case"Space":this.toggle(e),e.preventDefault();break;default:break}}getTabHeaderActionId(e){return`${e}_header_action`}getTabContentId(e){return`${e}_content`}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}static \u0275fac=function(n){return new(n||i)(u(B(()=>xe)),u(D),u(O))};static \u0275cmp=E({type:i,selectors:[["p-accordionTab"]],contentQueries:function(n,t,o){if(n&1&&(A(o,ee,4),A(o,te,4)),n&2){let r;x(r=S())&&(t.headerFacet=r),x(r=S())&&(t.templates=r)}},hostAttrs:[1,"p-element"],inputs:{id:"id",header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:[2,"disabled","disabled",C],cache:[2,"cache","cache",C],transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected",headerAriaLevel:[2,"headerAriaLevel","headerAriaLevel",G]},outputs:{selectedChange:"selectedChange"},features:[w],ngContentSelectors:oe,decls:12,vars:44,consts:[[1,"p-accordion-tab",3,"ngClass","ngStyle"],["role","heading",1,"p-accordion-header"],["role","button",1,"p-accordion-header-link",3,"click","keydown","ngClass","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-accordion-header-text",4,"ngIf"],[4,"ngTemplateOutlet"],["role","region",1,"p-toggleable-content"],[1,"p-accordion-content",3,"ngClass","ngStyle"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-accordion-header-text"]],template:function(n,t){n&1&&(L(ae),m(0,"div",0)(1,"div",1)(2,"a",2),F("click",function(r){return t.toggle(r)})("keydown",function(r){return t.onKeydown(r)}),p(3,fe,3,2,"ng-container",3)(4,be,1,0,null,4)(5,_e,2,1,"span",5)(6,ve,1,0,"ng-container",6)(7,ye,1,0,"ng-content",3),b()(),m(8,"div",7)(9,"div",8),T(10),p(11,Ie,2,1,"ng-container",3),b()()()),n&2&&(H("p-accordion-tab-active",t.selected),a("ngClass",t.tabStyleClass)("ngStyle",t.tabStyle),d("data-pc-name","accordiontab"),c(),H("p-highlight",t.selected)("p-disabled",t.disabled),d("aria-level",t.headerAriaLevel)("data-p-disabled",t.disabled)("data-pc-section","header"),c(),a("ngClass",t.headerStyleClass)("ngStyle",t.headerStyle),d("tabindex",t.disabled?null:0)("id",t.getTabHeaderActionId(t.id))("aria-controls",t.getTabContentId(t.id))("aria-expanded",t.selected)("aria-disabled",t.disabled)("data-pc-section","headeraction"),c(),a("ngIf",!t.iconTemplate),c(),a("ngTemplateOutlet",t.iconTemplate)("ngTemplateOutletContext",g(34,ce,t.selected)),c(),a("ngIf",!t.hasHeaderFacet),c(),a("ngTemplateOutlet",t.headerTemplate),c(),a("ngIf",t.hasHeaderFacet),c(),a("@tabContent",t.selected?g(38,re,g(36,ie,t.transitionOptions)):g(42,se,g(40,ie,t.transitionOptions))),d("id",t.getTabContentId(t.id))("aria-hidden",!t.selected)("aria-labelledby",t.getTabHeaderActionId(t.id))("data-pc-section","toggleablecontent"),c(),a("ngClass",t.contentStyleClass)("ngStyle",t.contentStyle),c(2),a("ngIf",t.contentTemplate&&(t.cache?t.loaded:t.selected)))},dependencies:()=>[P,J,W,K,q,Q],styles:[`@layer primeng{.p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}}
`],encapsulation:2,data:{animation:[Y("tabContent",[j("hidden",M({height:"0",visibility:"hidden"})),j("visible",M({height:"*",visibility:"visible"})),R("visible <=> hidden",[N("{{transitionParams}}")]),R("void => *",N(0))])]},changeDetection:0})}return i})(),xe=(()=>{class i{el;changeDetector;multiple=!1;style;styleClass;expandIcon;collapseIcon;get activeIndex(){return this._activeIndex}set activeIndex(e){if(this._activeIndex=e,this.preventActiveIndexPropagation){this.preventActiveIndexPropagation=!1;return}this.updateSelectionState()}selectOnFocus=!1;get headerAriaLevel(){return this._headerAriaLevel}set headerAriaLevel(e){typeof e=="number"&&e>0?this._headerAriaLevel=e:this._headerAriaLevel!==2&&(this._headerAriaLevel=2)}onClose=new f;onOpen=new f;activeIndexChange=new f;tabList;tabListSubscription=null;_activeIndex;_headerAriaLevel=2;preventActiveIndexPropagation=!1;tabs=[];constructor(e,n){this.el=e,this.changeDetector=n}onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}focusedElementIsAccordionHeader(){return document.activeElement.tagName.toLowerCase()==="a"&&document.activeElement.classList.contains("p-accordion-header-link")}onTabArrowDownKey(e){if(this.focusedElementIsAccordionHeader()){let n=this.findNextHeaderAction(e.target.parentElement.parentElement.parentElement);n?this.changeFocusedTab(n):this.onTabHomeKey(e),e.preventDefault()}}onTabArrowUpKey(e){if(this.focusedElementIsAccordionHeader()){let n=this.findPrevHeaderAction(e.target.parentElement.parentElement.parentElement);n?this.changeFocusedTab(n):this.onTabEndKey(e),e.preventDefault()}}onTabHomeKey(e){let n=this.findFirstHeaderAction();this.changeFocusedTab(n),e.preventDefault()}changeFocusedTab(e){e&&(h.focus(e),this.selectOnFocus&&this.tabs.forEach((n,t)=>{let o=this.multiple?this._activeIndex.includes(t):t===this._activeIndex;this.multiple?(this._activeIndex||(this._activeIndex=[]),n.id==e.id&&(n.selected=!n.selected,this._activeIndex.includes(t)?this._activeIndex=this._activeIndex.filter(r=>r!==t):this._activeIndex.push(t))):n.id==e.id?(n.selected=!n.selected,this._activeIndex=t):n.selected=!1,n.selectedChange.emit(o),this.activeIndexChange.emit(this._activeIndex),n.changeDetector.markForCheck()}))}findNextHeaderAction(e,n=!1){let t=n?e:e.nextElementSibling,o=h.findSingle(t,'[data-pc-section="header"]');return o?h.getAttribute(o,"data-p-disabled")?this.findNextHeaderAction(o.parentElement.parentElement):h.findSingle(o,'[data-pc-section="headeraction"]'):null}findPrevHeaderAction(e,n=!1){let t=n?e:e.previousElementSibling,o=h.findSingle(t,'[data-pc-section="header"]');return o?h.getAttribute(o,"data-p-disabled")?this.findPrevHeaderAction(o.parentElement.parentElement):h.findSingle(o,'[data-pc-section="headeraction"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild.childNodes[0];return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.firstElementChild.childNodes,n=e[e.length-1];return this.findPrevHeaderAction(n,!0)}onTabEndKey(e){let n=this.findLastHeaderAction();this.changeFocusedTab(n),e.preventDefault()}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(e=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.tabs.forEach(e=>{e.headerAriaLevel=this._headerAriaLevel}),this.updateSelectionState(),this.changeDetector.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&this._activeIndex!=null)for(let e=0;e<this.tabs.length;e++){let n=this.multiple?this._activeIndex.includes(e):e===this._activeIndex;n!==this.tabs[e].selected&&(this.tabs[e].selected=n,this.tabs[e].selectedChange.emit(n),this.tabs[e].changeDetector.markForCheck())}}isTabActive(e){return this.multiple?this._activeIndex&&this._activeIndex.includes(e):this._activeIndex===e}getTabProp(e,n){return e.props?e.props[n]:void 0}updateActiveIndex(){let e=this.multiple?[]:null;this.tabs.forEach((n,t)=>{if(n.selected)if(this.multiple)e.push(t);else{e=t;return}}),this.preventActiveIndexPropagation=!0,this._activeIndex=e,this.activeIndexChange.emit(e)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}static \u0275fac=function(n){return new(n||i)(u(D),u(O))};static \u0275cmp=E({type:i,selectors:[["p-accordion"]],contentQueries:function(n,t,o){if(n&1&&A(o,Ae,5),n&2){let r;x(r=S())&&(t.tabList=r)}},hostAttrs:[1,"p-element"],hostBindings:function(n,t){n&1&&F("keydown",function(r){return t.onKeydown(r)})},inputs:{multiple:[2,"multiple","multiple",C],style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex",selectOnFocus:[2,"selectOnFocus","selectOnFocus",C],headerAriaLevel:"headerAriaLevel"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},features:[w],ngContentSelectors:Te,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(n,t){n&1&&(L(),m(0,"div",0),T(1),b()),n&2&&(I(t.styleClass),a("ngClass","p-accordion p-component")("ngStyle",t.style))},dependencies:[P,K],encapsulation:2,changeDetection:0})}return i})(),$e=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=$({type:i});static \u0275inj=U({imports:[X,q,Q,ne]})}return i})();export{Ae as a,xe as b,$e as c};