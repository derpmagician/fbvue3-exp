(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Gu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ue={},ms=[],Jt=()=>{},pT=()=>!1,gT=/^on[^a-z]/,ec=t=>gT.test(t),Qu=t=>t.startsWith("onUpdate:"),ot=Object.assign,Yu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mT=Object.prototype.hasOwnProperty,Pe=(t,e)=>mT.call(t,e),le=Array.isArray,_s=t=>tc(t)==="[object Map]",Rg=t=>tc(t)==="[object Set]",ve=t=>typeof t=="function",nt=t=>typeof t=="string",Ju=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",bg=t=>ze(t)&&ve(t.then)&&ve(t.catch),Cg=Object.prototype.toString,tc=t=>Cg.call(t),_T=t=>tc(t).slice(8,-1),Pg=t=>tc(t)==="[object Object]",Xu=t=>nt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ta=Gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),nc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yT=/-(\w)/g,vn=nc(t=>t.replace(yT,(e,n)=>n?n.toUpperCase():"")),vT=/\B([A-Z])/g,js=nc(t=>t.replace(vT,"-$1").toLowerCase()),rc=nc(t=>t.charAt(0).toUpperCase()+t.slice(1)),pl=nc(t=>t?`on${rc(t)}`:""),Mi=(t,e)=>!Object.is(t,e),na=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},va=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Kl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yd;const Wl=()=>Yd||(Yd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zu(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=nt(r)?wT(r):Zu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(nt(t))return t;if(ze(t))return t}}const ET=/;(?![^(]*\))/g,TT=/:([^]+)/,IT=/\/\*[^]*?\*\//g;function wT(t){const e={};return t.replace(IT,"").split(ET).forEach(n=>{if(n){const r=n.split(TT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Dt(t){let e="";if(nt(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=Dt(t[n]);r&&(e+=r+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const AT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ST=Gu(AT);function Og(t){return!!t||t===""}const CD=t=>nt(t)?t:t==null?"":le(t)||ze(t)&&(t.toString===Cg||!ve(t.toString))?JSON.stringify(t,kg,2):String(t),kg=(t,e)=>e&&e.__v_isRef?kg(t,e.value):_s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Rg(e)?{[`Set(${e.size})`]:[...e.values()]}:ze(e)&&!le(e)&&!Pg(e)?String(e):e;let Ft;class Dg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ng(t){return new Dg(t)}function RT(t,e=Ft){e&&e.active&&e.effects.push(t)}function eh(){return Ft}function Mg(t){Ft&&Ft.cleanups.push(t)}const th=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Vg=t=>(t.w&cr)>0,xg=t=>(t.n&cr)>0,bT=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=cr},CT=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Vg(s)&&!xg(s)?s.delete(t):e[n++]=s,s.w&=~cr,s.n&=~cr}e.length=n}},Ea=new WeakMap;let li=0,cr=1;const Gl=30;let Qt;const kr=Symbol(""),Ql=Symbol("");class nh{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,RT(this,r)}run(){if(!this.active)return this.fn();let e=Qt,n=tr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qt,Qt=this,tr=!0,cr=1<<++li,li<=Gl?bT(this):Jd(this),this.fn()}finally{li<=Gl&&CT(this),cr=1<<--li,Qt=this.parent,tr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qt===this?this.deferStop=!0:this.active&&(Jd(this),this.onStop&&this.onStop(),this.active=!1)}}function Jd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let tr=!0;const Lg=[];function qs(){Lg.push(tr),tr=!1}function zs(){const t=Lg.pop();tr=t===void 0?!0:t}function xt(t,e,n){if(tr&&Qt){let r=Ea.get(t);r||Ea.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=th()),Fg(s)}}function Fg(t,e){let n=!1;li<=Gl?xg(t)||(t.n|=cr,n=!Vg(t)):n=!t.has(Qt),n&&(t.add(Qt),Qt.deps.push(t))}function On(t,e,n,r,s,i){const o=Ea.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&le(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":le(t)?Xu(n)&&a.push(o.get("length")):(a.push(o.get(kr)),_s(t)&&a.push(o.get(Ql)));break;case"delete":le(t)||(a.push(o.get(kr)),_s(t)&&a.push(o.get(Ql)));break;case"set":_s(t)&&a.push(o.get(kr));break}if(a.length===1)a[0]&&Yl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Yl(th(c))}}function Yl(t,e){const n=le(t)?t:[...t];for(const r of n)r.computed&&Xd(r);for(const r of n)r.computed||Xd(r)}function Xd(t,e){(t!==Qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function PT(t,e){var n;return(n=Ea.get(t))==null?void 0:n.get(e)}const OT=Gu("__proto__,__v_isRef,__isVue"),Ug=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ju)),kT=rh(),DT=rh(!1,!0),NT=rh(!0),Zd=MT();function MT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ge(this);for(let i=0,o=this.length;i<o;i++)xt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ge)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qs();const r=ge(this)[e].apply(this,n);return zs(),r}}),t}function VT(t){const e=ge(this);return xt(e,"has",t),e.hasOwnProperty(t)}function rh(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?JT:zg:e?qg:jg).get(r))return r;const o=le(r);if(!t){if(o&&Pe(Zd,s))return Reflect.get(Zd,s,i);if(s==="hasOwnProperty")return VT}const a=Reflect.get(r,s,i);return(Ju(s)?Ug.has(s):OT(s))||(t||xt(r,"get",s),e)?a:We(a)?o&&Xu(s)?a:a.value:ze(a)?t?ic(a):rn(a):a}}const xT=Bg(),LT=Bg(!0);function Bg(t=!1){return function(n,r,s,i){let o=n[r];if(Rs(o)&&We(o)&&!We(s))return!1;if(!t&&(!Ta(s)&&!Rs(s)&&(o=ge(o),s=ge(s)),!le(n)&&We(o)&&!We(s)))return o.value=s,!0;const a=le(n)&&Xu(r)?Number(r)<n.length:Pe(n,r),c=Reflect.set(n,r,s,i);return n===ge(i)&&(a?Mi(s,o)&&On(n,"set",r,s):On(n,"add",r,s)),c}}function FT(t,e){const n=Pe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&On(t,"delete",e,void 0),r}function UT(t,e){const n=Reflect.has(t,e);return(!Ju(e)||!Ug.has(e))&&xt(t,"has",e),n}function BT(t){return xt(t,"iterate",le(t)?"length":kr),Reflect.ownKeys(t)}const $g={get:kT,set:xT,deleteProperty:FT,has:UT,ownKeys:BT},$T={get:NT,set(t,e){return!0},deleteProperty(t,e){return!0}},jT=ot({},$g,{get:DT,set:LT}),sh=t=>t,sc=t=>Reflect.getPrototypeOf(t);function Lo(t,e,n=!1,r=!1){t=t.__v_raw;const s=ge(t),i=ge(e);n||(e!==i&&xt(s,"get",e),xt(s,"get",i));const{has:o}=sc(s),a=r?sh:n?ah:Vi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Fo(t,e=!1){const n=this.__v_raw,r=ge(n),s=ge(t);return e||(t!==s&&xt(r,"has",t),xt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Uo(t,e=!1){return t=t.__v_raw,!e&&xt(ge(t),"iterate",kr),Reflect.get(t,"size",t)}function ef(t){t=ge(t);const e=ge(this);return sc(e).has.call(e,t)||(e.add(t),On(e,"add",t,t)),this}function tf(t,e){e=ge(e);const n=ge(this),{has:r,get:s}=sc(n);let i=r.call(n,t);i||(t=ge(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Mi(e,o)&&On(n,"set",t,e):On(n,"add",t,e),this}function nf(t){const e=ge(this),{has:n,get:r}=sc(e);let s=n.call(e,t);s||(t=ge(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&On(e,"delete",t,void 0),i}function rf(){const t=ge(this),e=t.size!==0,n=t.clear();return e&&On(t,"clear",void 0,void 0),n}function Bo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ge(o),c=e?sh:t?ah:Vi;return!t&&xt(a,"iterate",kr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function $o(t,e,n){return function(...r){const s=this.__v_raw,i=ge(s),o=_s(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?sh:e?ah:Vi;return!e&&xt(i,"iterate",c?Ql:kr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function jn(t){return function(...e){return t==="delete"?!1:this}}function qT(){const t={get(i){return Lo(this,i)},get size(){return Uo(this)},has:Fo,add:ef,set:tf,delete:nf,clear:rf,forEach:Bo(!1,!1)},e={get(i){return Lo(this,i,!1,!0)},get size(){return Uo(this)},has:Fo,add:ef,set:tf,delete:nf,clear:rf,forEach:Bo(!1,!0)},n={get(i){return Lo(this,i,!0)},get size(){return Uo(this,!0)},has(i){return Fo.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Bo(!0,!1)},r={get(i){return Lo(this,i,!0,!0)},get size(){return Uo(this,!0)},has(i){return Fo.call(this,i,!0)},add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear"),forEach:Bo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=$o(i,!1,!1),n[i]=$o(i,!0,!1),e[i]=$o(i,!1,!0),r[i]=$o(i,!0,!0)}),[t,n,e,r]}const[zT,HT,KT,WT]=qT();function ih(t,e){const n=e?t?WT:KT:t?HT:zT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const GT={get:ih(!1,!1)},QT={get:ih(!1,!0)},YT={get:ih(!0,!1)},jg=new WeakMap,qg=new WeakMap,zg=new WeakMap,JT=new WeakMap;function XT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ZT(t){return t.__v_skip||!Object.isExtensible(t)?0:XT(_T(t))}function rn(t){return Rs(t)?t:oh(t,!1,$g,GT,jg)}function Hg(t){return oh(t,!1,jT,QT,qg)}function ic(t){return oh(t,!0,$T,YT,zg)}function oh(t,e,n,r,s){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ZT(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function nr(t){return Rs(t)?nr(t.__v_raw):!!(t&&t.__v_isReactive)}function Rs(t){return!!(t&&t.__v_isReadonly)}function Ta(t){return!!(t&&t.__v_isShallow)}function Kg(t){return nr(t)||Rs(t)}function ge(t){const e=t&&t.__v_raw;return e?ge(e):t}function oc(t){return va(t,"__v_skip",!0),t}const Vi=t=>ze(t)?rn(t):t,ah=t=>ze(t)?ic(t):t;function ch(t){tr&&Qt&&(t=ge(t),Fg(t.dep||(t.dep=th())))}function lh(t,e){t=ge(t);const n=t.dep;n&&Yl(n)}function We(t){return!!(t&&t.__v_isRef===!0)}function Le(t){return Gg(t,!1)}function Wg(t){return Gg(t,!0)}function Gg(t,e){return We(t)?t:new eI(t,e)}class eI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ge(e),this._value=n?e:Vi(e)}get value(){return ch(this),this._value}set value(e){const n=this.__v_isShallow||Ta(e)||Rs(e);e=n?e:ge(e),Mi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Vi(e),lh(this))}}function ht(t){return We(t)?t.value:t}const tI={get:(t,e,n)=>ht(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return We(s)&&!We(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qg(t){return nr(t)?t:new Proxy(t,tI)}class nI{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>ch(this),()=>lh(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function rI(t){return new nI(t)}function sI(t){const e=le(t)?new Array(t.length):{};for(const n in t)e[n]=Yg(t,n);return e}class iI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return PT(ge(this._object),this._key)}}class oI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function aI(t,e,n){return We(t)?t:ve(t)?new oI(t):ze(t)&&arguments.length>1?Yg(t,e,n):Le(t)}function Yg(t,e,n){const r=t[e];return We(r)?r:new iI(t,e,n)}class cI{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new nh(e,()=>{this._dirty||(this._dirty=!0,lh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ge(this);return ch(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function lI(t,e,n=!1){let r,s;const i=ve(t);return i?(r=t,s=Jt):(r=t.get,s=t.set),new cI(r,s,i||!s,n)}function rr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ac(i,e,n)}return s}function Xt(t,e,n,r){if(ve(t)){const i=rr(t,e,n,r);return i&&bg(i)&&i.catch(o=>{ac(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Xt(t[i],e,n,r));return s}function ac(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){rr(c,null,10,[t,o,a]);return}}uI(t,n,s,r)}function uI(t,e,n,r=!0){console.error(t)}let xi=!1,Jl=!1;const _t=[];let un=0;const ys=[];let An=null,Ar=0;const Jg=Promise.resolve();let uh=null;function zr(t){const e=uh||Jg;return t?e.then(this?t.bind(this):t):e}function hI(t){let e=un+1,n=_t.length;for(;e<n;){const r=e+n>>>1;Li(_t[r])<t?e=r+1:n=r}return e}function hh(t){(!_t.length||!_t.includes(t,xi&&t.allowRecurse?un+1:un))&&(t.id==null?_t.push(t):_t.splice(hI(t.id),0,t),Xg())}function Xg(){!xi&&!Jl&&(Jl=!0,uh=Jg.then(em))}function dI(t){const e=_t.indexOf(t);e>un&&_t.splice(e,1)}function fI(t){le(t)?ys.push(...t):(!An||!An.includes(t,t.allowRecurse?Ar+1:Ar))&&ys.push(t),Xg()}function sf(t,e=xi?un+1:0){for(;e<_t.length;e++){const n=_t[e];n&&n.pre&&(_t.splice(e,1),e--,n())}}function Zg(t){if(ys.length){const e=[...new Set(ys)];if(ys.length=0,An){An.push(...e);return}for(An=e,An.sort((n,r)=>Li(n)-Li(r)),Ar=0;Ar<An.length;Ar++)An[Ar]();An=null,Ar=0}}const Li=t=>t.id==null?1/0:t.id,pI=(t,e)=>{const n=Li(t)-Li(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function em(t){Jl=!1,xi=!0,_t.sort(pI);const e=Jt;try{for(un=0;un<_t.length;un++){const n=_t[un];n&&n.active!==!1&&rr(n,null,14)}}finally{un=0,_t.length=0,Zg(),xi=!1,uh=null,(_t.length||ys.length)&&em()}}function gI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ue;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ue;d&&(s=n.map(p=>nt(p)?p.trim():p)),h&&(s=n.map(Kl))}let a,c=r[a=pl(e)]||r[a=pl(vn(e))];!c&&i&&(c=r[a=pl(js(e))]),c&&Xt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xt(l,t,6,s)}}function tm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ve(t)){const c=l=>{const u=tm(l,e,!0);u&&(a=!0,ot(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ze(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):ot(o,i),ze(t)&&r.set(t,o),o)}function cc(t,e){return!t||!ec(e)?!1:(e=e.slice(2).replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,js(e))||Pe(t,e))}let Mt=null,nm=null;function Ia(t){const e=Mt;return Mt=t,nm=t&&t.type.__scopeId||null,e}function on(t,e=Mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&mf(-1);const i=Ia(e);let o;try{o=t(...s)}finally{Ia(i),r._d&&mf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:y,inheritAttrs:E}=t;let A,C;const x=Ia(t);try{if(n.shapeFlag&4){const L=s||r;A=cn(u.call(L,L,h,i,p,d,y)),C=c}else{const L=e;A=cn(L.length>1?L(i,{attrs:c,slots:a,emit:l}):L(i,null)),C=e.props?c:mI(c)}}catch(L){Ii.length=0,ac(L,t,1),A=ae(Vr)}let z=A;if(C&&E!==!1){const L=Object.keys(C),{shapeFlag:J}=z;L.length&&J&7&&(o&&L.some(Qu)&&(C=_I(C,o)),z=xr(z,C))}return n.dirs&&(z=xr(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),A=z,Ia(x),A}const mI=t=>{let e;for(const n in t)(n==="class"||n==="style"||ec(n))&&((e||(e={}))[n]=t[n]);return e},_I=(t,e)=>{const n={};for(const r in t)(!Qu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function yI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?of(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!cc(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?of(r,o,l):!0:!!o;return!1}function of(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!cc(n,i))return!0}return!1}function vI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const EI=t=>t.__isSuspense;function TI(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):fI(t)}function Ei(t,e){return dh(t,null,e)}const jo={};function Ht(t,e,n){return dh(t,e,n)}function dh(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ue){var a;const c=eh()===((a=tt)==null?void 0:a.scope)?tt:null;let l,u=!1,h=!1;if(We(t)?(l=()=>t.value,u=Ta(t)):nr(t)?(l=()=>t,r=!0):le(t)?(h=!0,u=t.some(L=>nr(L)||Ta(L)),l=()=>t.map(L=>{if(We(L))return L.value;if(nr(L))return Rr(L);if(ve(L))return rr(L,c,2)})):ve(t)?e?l=()=>rr(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Xt(t,c,3,[p])}:l=Jt,e&&r){const L=l;l=()=>Rr(L())}let d,p=L=>{d=x.onStop=()=>{rr(L,c,4)}},y;if($i)if(p=Jt,e?n&&Xt(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const L=uw();y=L.__watcherHandles||(L.__watcherHandles=[])}else return Jt;let E=h?new Array(t.length).fill(jo):jo;const A=()=>{if(x.active)if(e){const L=x.run();(r||u||(h?L.some((J,re)=>Mi(J,E[re])):Mi(L,E)))&&(d&&d(),Xt(e,c,3,[L,E===jo?void 0:h&&E[0]===jo?[]:E,p]),E=L)}else x.run()};A.allowRecurse=!!e;let C;s==="sync"?C=A:s==="post"?C=()=>kt(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),C=()=>hh(A));const x=new nh(l,C);e?n?A():E=x.run():s==="post"?kt(x.run.bind(x),c&&c.suspense):x.run();const z=()=>{x.stop(),c&&c.scope&&Yu(c.scope.effects,x)};return y&&y.push(z),z}function II(t,e,n){const r=this.proxy,s=nt(t)?t.includes(".")?rm(r,t):()=>r[t]:t.bind(r,r);let i;ve(e)?i=e:(i=e.handler,n=e);const o=tt;bs(this);const a=dh(s,i.bind(r),n);return o?bs(o):Dr(),a}function rm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Rr(t,e){if(!ze(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),We(t))Rr(t.value,e);else if(le(t))for(let n=0;n<t.length;n++)Rr(t[n],e);else if(Rg(t)||_s(t))t.forEach(n=>{Rr(n,e)});else if(Pg(t))for(const n in t)Rr(t[n],e);return t}function PD(t,e){const n=Mt;if(n===null)return t;const r=dc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ue]=e[i];o&&(ve(o)&&(o={mounted:o,updated:o}),o.deep&&Rr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(qs(),Xt(c,n,8,[t.el,a,t,e]),zs())}}function xn(t,e){return ve(t)?(()=>ot({name:t.name},e,{setup:t}))():t}const ra=t=>!!t.type.__asyncLoader,sm=t=>t.type.__isKeepAlive;function im(t,e){om(t,"a",e)}function wI(t,e){om(t,"da",e)}function om(t,e,n=tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(lc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)sm(s.parent.vnode)&&AI(r,e,n,s),s=s.parent}}function AI(t,e,n,r){const s=lc(e,t,r,!0);Hs(()=>{Yu(r[e],s)},n)}function lc(t,e,n=tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qs(),bs(n);const a=Xt(e,n,t,o);return Dr(),zs(),a});return r?s.unshift(i):s.push(i),i}}const Ln=t=>(e,n=tt)=>(!$i||t==="sp")&&lc(t,(...r)=>e(...r),n),am=Ln("bm"),Hr=Ln("m"),SI=Ln("bu"),cm=Ln("u"),RI=Ln("bum"),Hs=Ln("um"),bI=Ln("sp"),CI=Ln("rtg"),PI=Ln("rtc");function OI(t,e=tt){lc("ec",t,e)}const lm="components";function um(t,e){return DI(lm,t,!0,e)||t}const kI=Symbol.for("v-ndc");function DI(t,e,n=!0,r=!1){const s=Mt||tt;if(s){const i=s.type;if(t===lm){const a=aw(i,!1);if(a&&(a===e||a===vn(e)||a===rc(vn(e))))return i}const o=af(s[t]||i[t],e)||af(s.appContext[t],e);return!o&&r?i:o}}function af(t,e){return t&&(t[e]||t[vn(e)]||t[rc(vn(e))])}function OD(t,e,n,r){let s;const i=n&&n[r];if(le(t)||nt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ze(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Xl=t=>t?Im(t)?dc(t)||t.proxy:Xl(t.parent):null,Ti=ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xl(t.parent),$root:t=>Xl(t.root),$emit:t=>t.emit,$options:t=>fh(t),$forceUpdate:t=>t.f||(t.f=()=>hh(t.update)),$nextTick:t=>t.n||(t.n=zr.bind(t.proxy)),$watch:t=>II.bind(t)}),ml=(t,e)=>t!==Ue&&!t.__isScriptSetup&&Pe(t,e),NI={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ml(r,e))return o[e]=1,r[e];if(s!==Ue&&Pe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Pe(l,e))return o[e]=3,i[e];if(n!==Ue&&Pe(n,e))return o[e]=4,n[e];Zl&&(o[e]=0)}}const u=Ti[e];let h,d;if(u)return e==="$attrs"&&xt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ue&&Pe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,Pe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ml(s,e)?(s[e]=n,!0):r!==Ue&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ue&&Pe(t,o)||ml(e,o)||(a=i[0])&&Pe(a,o)||Pe(r,o)||Pe(Ti,o)||Pe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cf(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zl=!0;function MI(t){const e=fh(t),n=t.proxy,r=t.ctx;Zl=!1,e.beforeCreate&&lf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:y,activated:E,deactivated:A,beforeDestroy:C,beforeUnmount:x,destroyed:z,unmounted:L,render:J,renderTracked:re,renderTriggered:Te,errorCaptured:q,serverPrefetch:Q,expose:Y,inheritAttrs:oe,components:He,directives:fe,filters:D}=e;if(l&&VI(l,r,null),o)for(const M in o){const O=o[M];ve(O)&&(r[M]=O.bind(n))}if(s){const M=s.call(n,n);ze(M)&&(t.data=rn(M))}if(Zl=!0,i)for(const M in i){const O=i[M],ne=ve(O)?O.bind(n,n):ve(O.get)?O.get.bind(n,n):Jt,$=!ve(O)&&ve(O.set)?O.set.bind(n):Jt,me=be({get:ne,set:$});Object.defineProperty(r,M,{enumerable:!0,configurable:!0,get:()=>me.value,set:ye=>me.value=ye})}if(a)for(const M in a)hm(a[M],r,n,M);if(c){const M=ve(c)?c.call(n):c;Reflect.ownKeys(M).forEach(O=>{sa(O,M[O])})}u&&lf(u,t,"c");function w(M,O){le(O)?O.forEach(ne=>M(ne.bind(n))):O&&M(O.bind(n))}if(w(am,h),w(Hr,d),w(SI,p),w(cm,y),w(im,E),w(wI,A),w(OI,q),w(PI,re),w(CI,Te),w(RI,x),w(Hs,L),w(bI,Q),le(Y))if(Y.length){const M=t.exposed||(t.exposed={});Y.forEach(O=>{Object.defineProperty(M,O,{get:()=>n[O],set:ne=>n[O]=ne})})}else t.exposed||(t.exposed={});J&&t.render===Jt&&(t.render=J),oe!=null&&(t.inheritAttrs=oe),He&&(t.components=He),fe&&(t.directives=fe)}function VI(t,e,n=Jt){le(t)&&(t=eu(t));for(const r in t){const s=t[r];let i;ze(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),We(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function lf(t,e,n){Xt(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hm(t,e,n,r){const s=r.includes(".")?rm(n,r):()=>n[r];if(nt(t)){const i=e[t];ve(i)&&Ht(s,i)}else if(ve(t))Ht(s,t.bind(n));else if(ze(t))if(le(t))t.forEach(i=>hm(i,e,n,r));else{const i=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(i)&&Ht(s,i,t)}}function fh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>wa(c,l,o,!0)),wa(c,e,o)),ze(e)&&i.set(e,c),c}function wa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wa(t,i,n,!0),s&&s.forEach(o=>wa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=xI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xI={data:uf,props:hf,emits:hf,methods:ui,computed:ui,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:ui,directives:ui,watch:FI,provide:uf,inject:LI};function uf(t,e){return e?t?function(){return ot(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function LI(t,e){return ui(eu(t),eu(e))}function eu(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function ui(t,e){return t?ot(Object.create(null),t,e):e}function hf(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:ot(Object.create(null),cf(t),cf(e??{})):e}function FI(t,e){if(!t)return e;if(!e)return t;const n=ot(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function dm(){return{app:null,config:{isNativeTag:pT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let UI=0;function BI(t,e){return function(r,s=null){ve(r)||(r=ot({},r)),s!=null&&!ze(s)&&(s=null);const i=dm(),o=new Set;let a=!1;const c=i.app={_uid:UI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:hw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ve(l.install)?(o.add(l),l.install(c,...u)):ve(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ae(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,dc(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Fi=c;try{return l()}finally{Fi=null}}};return c}}let Fi=null;function sa(t,e){if(tt){let n=tt.provides;const r=tt.parent&&tt.parent.provides;r===n&&(n=tt.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=tt||Mt;if(r||Fi){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Fi._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}function $I(){return!!(tt||Mt||Fi)}function jI(t,e,n,r=!1){const s={},i={};va(i,hc,1),t.propsDefaults=Object.create(null),fm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Hg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ge(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(cc(t.emitsOptions,d))continue;const p=e[d];if(c)if(Pe(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const y=vn(d);s[y]=tu(c,a,y,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{fm(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!Pe(e,h)&&((u=js(h))===h||!Pe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=tu(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Pe(e,h))&&(delete i[h],l=!0)}l&&On(t,"set","$attrs")}function fm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ta(c))continue;const l=e[c];let u;s&&Pe(s,u=vn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:cc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ge(n),l=a||Ue;for(let u=0;u<i.length;u++){const h=i[u];n[h]=tu(s,c,h,l[h],t,!Pe(l,h))}}return o}function tu(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Pe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ve(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(bs(s),r=l[n]=c.call(null,e),Dr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===js(n))&&(r=!0))}return r}function pm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ve(t)){const u=h=>{c=!0;const[d,p]=pm(h,e,!0);ot(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ze(t)&&r.set(t,ms),ms;if(le(i))for(let u=0;u<i.length;u++){const h=vn(i[u]);df(h)&&(o[h]=Ue)}else if(i)for(const u in i){const h=vn(u);if(df(h)){const d=i[u],p=o[h]=le(d)||ve(d)?{type:d}:ot({},d);if(p){const y=gf(Boolean,p.type),E=gf(String,p.type);p[0]=y>-1,p[1]=E<0||y<E,(y>-1||Pe(p,"default"))&&a.push(h)}}}const l=[o,a];return ze(t)&&r.set(t,l),l}function df(t){return t[0]!=="$"}function ff(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function pf(t,e){return ff(t)===ff(e)}function gf(t,e){return le(e)?e.findIndex(n=>pf(n,t)):ve(e)&&pf(e,t)?0:-1}const gm=t=>t[0]==="_"||t==="$stable",ph=t=>le(t)?t.map(cn):[cn(t)],zI=(t,e,n)=>{if(e._n)return e;const r=on((...s)=>ph(e(...s)),n);return r._c=!1,r},mm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(gm(s))continue;const i=t[s];if(ve(i))e[s]=zI(s,i,r);else if(i!=null){const o=ph(i);e[s]=()=>o}}},_m=(t,e)=>{const n=ph(e);t.slots.default=()=>n},HI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ge(e),va(e,"_",n)):mm(e,t.slots={})}else t.slots={},e&&_m(t,e);va(t.slots,hc,1)},KI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ue;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ot(s,e),!n&&a===1&&delete s._):(i=!e.$stable,mm(e,s)),o=e}else e&&(_m(t,e),o={default:1});if(i)for(const a in s)!gm(a)&&!(a in o)&&delete s[a]};function nu(t,e,n,r,s=!1){if(le(t)){t.forEach((d,p)=>nu(d,e&&(le(e)?e[p]:e),n,r,s));return}if(ra(r)&&!s)return;const i=r.shapeFlag&4?dc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ue?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(nt(l)?(u[l]=null,Pe(h,l)&&(h[l]=null)):We(l)&&(l.value=null)),ve(c))rr(c,a,12,[o,u]);else{const d=nt(c),p=We(c);if(d||p){const y=()=>{if(t.f){const E=d?Pe(h,c)?h[c]:u[c]:c.value;s?le(E)&&Yu(E,i):le(E)?E.includes(i)||E.push(i):d?(u[c]=[i],Pe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,Pe(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,kt(y,n)):y()}}}const kt=TI;function WI(t){return GI(t)}function GI(t,e){const n=Wl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Jt,insertStaticContent:y}=t,E=(g,m,_,I=null,b=null,k=null,W=!1,U=null,B=!!m.dynamicChildren)=>{if(g===m)return;g&&!si(g,m)&&(I=T(g),ye(g,b,k,!0),g=null),m.patchFlag===-2&&(B=!1,m.dynamicChildren=null);const{type:N,ref:se,shapeFlag:X}=m;switch(N){case uc:A(g,m,_,I);break;case Vr:C(g,m,_,I);break;case _l:g==null&&x(m,_,I,W);break;case Gt:He(g,m,_,I,b,k,W,U,B);break;default:X&1?J(g,m,_,I,b,k,W,U,B):X&6?fe(g,m,_,I,b,k,W,U,B):(X&64||X&128)&&N.process(g,m,_,I,b,k,W,U,B,F)}se!=null&&b&&nu(se,g&&g.ref,k,m||g,!m)},A=(g,m,_,I)=>{if(g==null)r(m.el=a(m.children),_,I);else{const b=m.el=g.el;m.children!==g.children&&l(b,m.children)}},C=(g,m,_,I)=>{g==null?r(m.el=c(m.children||""),_,I):m.el=g.el},x=(g,m,_,I)=>{[g.el,g.anchor]=y(g.children,m,_,I,g.el,g.anchor)},z=({el:g,anchor:m},_,I)=>{let b;for(;g&&g!==m;)b=d(g),r(g,_,I),g=b;r(m,_,I)},L=({el:g,anchor:m})=>{let _;for(;g&&g!==m;)_=d(g),s(g),g=_;s(m)},J=(g,m,_,I,b,k,W,U,B)=>{W=W||m.type==="svg",g==null?re(m,_,I,b,k,W,U,B):Q(g,m,b,k,W,U,B)},re=(g,m,_,I,b,k,W,U)=>{let B,N;const{type:se,props:X,shapeFlag:Z,transition:ce,dirs:we}=g;if(B=g.el=o(g.type,k,X&&X.is,X),Z&8?u(B,g.children):Z&16&&q(g.children,B,null,I,b,k&&se!=="foreignObject",W,U),we&&Er(g,null,I,"created"),Te(B,g,g.scopeId,W,I),X){for(const ke in X)ke!=="value"&&!ta(ke)&&i(B,ke,null,X[ke],k,g.children,I,b,Se);"value"in X&&i(B,"value",null,X.value),(N=X.onVnodeBeforeMount)&&sn(N,I,g)}we&&Er(g,null,I,"beforeMount");const Me=(!b||b&&!b.pendingBranch)&&ce&&!ce.persisted;Me&&ce.beforeEnter(B),r(B,m,_),((N=X&&X.onVnodeMounted)||Me||we)&&kt(()=>{N&&sn(N,I,g),Me&&ce.enter(B),we&&Er(g,null,I,"mounted")},b)},Te=(g,m,_,I,b)=>{if(_&&p(g,_),I)for(let k=0;k<I.length;k++)p(g,I[k]);if(b){let k=b.subTree;if(m===k){const W=b.vnode;Te(g,W,W.scopeId,W.slotScopeIds,b.parent)}}},q=(g,m,_,I,b,k,W,U,B=0)=>{for(let N=B;N<g.length;N++){const se=g[N]=U?Gn(g[N]):cn(g[N]);E(null,se,m,_,I,b,k,W,U)}},Q=(g,m,_,I,b,k,W)=>{const U=m.el=g.el;let{patchFlag:B,dynamicChildren:N,dirs:se}=m;B|=g.patchFlag&16;const X=g.props||Ue,Z=m.props||Ue;let ce;_&&Tr(_,!1),(ce=Z.onVnodeBeforeUpdate)&&sn(ce,_,m,g),se&&Er(m,g,_,"beforeUpdate"),_&&Tr(_,!0);const we=b&&m.type!=="foreignObject";if(N?Y(g.dynamicChildren,N,U,_,I,we,k):W||O(g,m,U,null,_,I,we,k,!1),B>0){if(B&16)oe(U,m,X,Z,_,I,b);else if(B&2&&X.class!==Z.class&&i(U,"class",null,Z.class,b),B&4&&i(U,"style",X.style,Z.style,b),B&8){const Me=m.dynamicProps;for(let ke=0;ke<Me.length;ke++){const Ke=Me[ke],Lt=X[Ke],$n=Z[Ke];($n!==Lt||Ke==="value")&&i(U,Ke,Lt,$n,b,g.children,_,I,Se)}}B&1&&g.children!==m.children&&u(U,m.children)}else!W&&N==null&&oe(U,m,X,Z,_,I,b);((ce=Z.onVnodeUpdated)||se)&&kt(()=>{ce&&sn(ce,_,m,g),se&&Er(m,g,_,"updated")},I)},Y=(g,m,_,I,b,k,W)=>{for(let U=0;U<m.length;U++){const B=g[U],N=m[U],se=B.el&&(B.type===Gt||!si(B,N)||B.shapeFlag&70)?h(B.el):_;E(B,N,se,null,I,b,k,W,!0)}},oe=(g,m,_,I,b,k,W)=>{if(_!==I){if(_!==Ue)for(const U in _)!ta(U)&&!(U in I)&&i(g,U,_[U],null,W,m.children,b,k,Se);for(const U in I){if(ta(U))continue;const B=I[U],N=_[U];B!==N&&U!=="value"&&i(g,U,N,B,W,m.children,b,k,Se)}"value"in I&&i(g,"value",_.value,I.value)}},He=(g,m,_,I,b,k,W,U,B)=>{const N=m.el=g?g.el:a(""),se=m.anchor=g?g.anchor:a("");let{patchFlag:X,dynamicChildren:Z,slotScopeIds:ce}=m;ce&&(U=U?U.concat(ce):ce),g==null?(r(N,_,I),r(se,_,I),q(m.children,_,se,b,k,W,U,B)):X>0&&X&64&&Z&&g.dynamicChildren?(Y(g.dynamicChildren,Z,_,b,k,W,U),(m.key!=null||b&&m===b.subTree)&&ym(g,m,!0)):O(g,m,_,se,b,k,W,U,B)},fe=(g,m,_,I,b,k,W,U,B)=>{m.slotScopeIds=U,g==null?m.shapeFlag&512?b.ctx.activate(m,_,I,W,B):D(m,_,I,b,k,W,B):P(g,m,B)},D=(g,m,_,I,b,k,W)=>{const U=g.component=nw(g,I,b);if(sm(g)&&(U.ctx.renderer=F),rw(U),U.asyncDep){if(b&&b.registerDep(U,w),!g.el){const B=U.subTree=ae(Vr);C(null,B,m,_)}return}w(U,g,m,_,b,k,W)},P=(g,m,_)=>{const I=m.component=g.component;if(yI(g,m,_))if(I.asyncDep&&!I.asyncResolved){M(I,m,_);return}else I.next=m,dI(I.update),I.update();else m.el=g.el,I.vnode=m},w=(g,m,_,I,b,k,W)=>{const U=()=>{if(g.isMounted){let{next:se,bu:X,u:Z,parent:ce,vnode:we}=g,Me=se,ke;Tr(g,!1),se?(se.el=we.el,M(g,se,W)):se=we,X&&na(X),(ke=se.props&&se.props.onVnodeBeforeUpdate)&&sn(ke,ce,se,we),Tr(g,!0);const Ke=gl(g),Lt=g.subTree;g.subTree=Ke,E(Lt,Ke,h(Lt.el),T(Lt),g,b,k),se.el=Ke.el,Me===null&&vI(g,Ke.el),Z&&kt(Z,b),(ke=se.props&&se.props.onVnodeUpdated)&&kt(()=>sn(ke,ce,se,we),b)}else{let se;const{el:X,props:Z}=m,{bm:ce,m:we,parent:Me}=g,ke=ra(m);if(Tr(g,!1),ce&&na(ce),!ke&&(se=Z&&Z.onVnodeBeforeMount)&&sn(se,Me,m),Tr(g,!0),X&&_e){const Ke=()=>{g.subTree=gl(g),_e(X,g.subTree,g,b,null)};ke?m.type.__asyncLoader().then(()=>!g.isUnmounted&&Ke()):Ke()}else{const Ke=g.subTree=gl(g);E(null,Ke,_,I,g,b,k),m.el=Ke.el}if(we&&kt(we,b),!ke&&(se=Z&&Z.onVnodeMounted)){const Ke=m;kt(()=>sn(se,Me,Ke),b)}(m.shapeFlag&256||Me&&ra(Me.vnode)&&Me.vnode.shapeFlag&256)&&g.a&&kt(g.a,b),g.isMounted=!0,m=_=I=null}},B=g.effect=new nh(U,()=>hh(N),g.scope),N=g.update=()=>B.run();N.id=g.uid,Tr(g,!0),N()},M=(g,m,_)=>{m.component=g;const I=g.vnode.props;g.vnode=m,g.next=null,qI(g,m.props,I,_),KI(g,m.children,_),qs(),sf(),zs()},O=(g,m,_,I,b,k,W,U,B=!1)=>{const N=g&&g.children,se=g?g.shapeFlag:0,X=m.children,{patchFlag:Z,shapeFlag:ce}=m;if(Z>0){if(Z&128){$(N,X,_,I,b,k,W,U,B);return}else if(Z&256){ne(N,X,_,I,b,k,W,U,B);return}}ce&8?(se&16&&Se(N,b,k),X!==N&&u(_,X)):se&16?ce&16?$(N,X,_,I,b,k,W,U,B):Se(N,b,k,!0):(se&8&&u(_,""),ce&16&&q(X,_,I,b,k,W,U,B))},ne=(g,m,_,I,b,k,W,U,B)=>{g=g||ms,m=m||ms;const N=g.length,se=m.length,X=Math.min(N,se);let Z;for(Z=0;Z<X;Z++){const ce=m[Z]=B?Gn(m[Z]):cn(m[Z]);E(g[Z],ce,_,null,b,k,W,U,B)}N>se?Se(g,b,k,!0,!1,X):q(m,_,I,b,k,W,U,B,X)},$=(g,m,_,I,b,k,W,U,B)=>{let N=0;const se=m.length;let X=g.length-1,Z=se-1;for(;N<=X&&N<=Z;){const ce=g[N],we=m[N]=B?Gn(m[N]):cn(m[N]);if(si(ce,we))E(ce,we,_,null,b,k,W,U,B);else break;N++}for(;N<=X&&N<=Z;){const ce=g[X],we=m[Z]=B?Gn(m[Z]):cn(m[Z]);if(si(ce,we))E(ce,we,_,null,b,k,W,U,B);else break;X--,Z--}if(N>X){if(N<=Z){const ce=Z+1,we=ce<se?m[ce].el:I;for(;N<=Z;)E(null,m[N]=B?Gn(m[N]):cn(m[N]),_,we,b,k,W,U,B),N++}}else if(N>Z)for(;N<=X;)ye(g[N],b,k,!0),N++;else{const ce=N,we=N,Me=new Map;for(N=we;N<=Z;N++){const St=m[N]=B?Gn(m[N]):cn(m[N]);St.key!=null&&Me.set(St.key,N)}let ke,Ke=0;const Lt=Z-we+1;let $n=!1,Do=0;const mr=new Array(Lt);for(N=0;N<Lt;N++)mr[N]=0;for(N=ce;N<=X;N++){const St=g[N];if(Ke>=Lt){ye(St,b,k,!0);continue}let $t;if(St.key!=null)$t=Me.get(St.key);else for(ke=we;ke<=Z;ke++)if(mr[ke-we]===0&&si(St,m[ke])){$t=ke;break}$t===void 0?ye(St,b,k,!0):(mr[$t-we]=N+1,$t>=Do?Do=$t:$n=!0,E(St,m[$t],_,null,b,k,W,U,B),Ke++)}const ti=$n?QI(mr):ms;for(ke=ti.length-1,N=Lt-1;N>=0;N--){const St=we+N,$t=m[St],Xr=St+1<se?m[St+1].el:I;mr[N]===0?E(null,$t,_,Xr,b,k,W,U,B):$n&&(ke<0||N!==ti[ke]?me($t,_,Xr,2):ke--)}}},me=(g,m,_,I,b=null)=>{const{el:k,type:W,transition:U,children:B,shapeFlag:N}=g;if(N&6){me(g.component.subTree,m,_,I);return}if(N&128){g.suspense.move(m,_,I);return}if(N&64){W.move(g,m,_,F);return}if(W===Gt){r(k,m,_);for(let X=0;X<B.length;X++)me(B[X],m,_,I);r(g.anchor,m,_);return}if(W===_l){z(g,m,_);return}if(I!==2&&N&1&&U)if(I===0)U.beforeEnter(k),r(k,m,_),kt(()=>U.enter(k),b);else{const{leave:X,delayLeave:Z,afterLeave:ce}=U,we=()=>r(k,m,_),Me=()=>{X(k,()=>{we(),ce&&ce()})};Z?Z(k,we,Me):Me()}else r(k,m,_)},ye=(g,m,_,I=!1,b=!1)=>{const{type:k,props:W,ref:U,children:B,dynamicChildren:N,shapeFlag:se,patchFlag:X,dirs:Z}=g;if(U!=null&&nu(U,null,_,g,!0),se&256){m.ctx.deactivate(g);return}const ce=se&1&&Z,we=!ra(g);let Me;if(we&&(Me=W&&W.onVnodeBeforeUnmount)&&sn(Me,m,g),se&6)Fe(g.component,_,I);else{if(se&128){g.suspense.unmount(_,I);return}ce&&Er(g,null,m,"beforeUnmount"),se&64?g.type.remove(g,m,_,b,F,I):N&&(k!==Gt||X>0&&X&64)?Se(N,m,_,!1,!0):(k===Gt&&X&384||!b&&se&16)&&Se(B,m,_),I&&Ie(g)}(we&&(Me=W&&W.onVnodeUnmounted)||ce)&&kt(()=>{Me&&sn(Me,m,g),ce&&Er(g,null,m,"unmounted")},_)},Ie=g=>{const{type:m,el:_,anchor:I,transition:b}=g;if(m===Gt){Oe(_,I);return}if(m===_l){L(g);return}const k=()=>{s(_),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(g.shapeFlag&1&&b&&!b.persisted){const{leave:W,delayLeave:U}=b,B=()=>W(_,k);U?U(g.el,k,B):B()}else k()},Oe=(g,m)=>{let _;for(;g!==m;)_=d(g),s(g),g=_;s(m)},Fe=(g,m,_)=>{const{bum:I,scope:b,update:k,subTree:W,um:U}=g;I&&na(I),b.stop(),k&&(k.active=!1,ye(W,g,m,_)),U&&kt(U,m),kt(()=>{g.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Se=(g,m,_,I=!1,b=!1,k=0)=>{for(let W=k;W<g.length;W++)ye(g[W],m,_,I,b)},T=g=>g.shapeFlag&6?T(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),j=(g,m,_)=>{g==null?m._vnode&&ye(m._vnode,null,null,!0):E(m._vnode||null,g,m,null,null,null,_),sf(),Zg(),m._vnode=g},F={p:E,um:ye,m:me,r:Ie,mt:D,mc:q,pc:O,pbc:Y,n:T,o:t};let H,_e;return e&&([H,_e]=e(F)),{render:j,hydrate:H,createApp:BI(j,H)}}function Tr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ym(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Gn(s[i]),a.el=o.el),n||ym(o,a)),a.type===uc&&(a.el=o.el)}}function QI(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const YI=t=>t.__isTeleport,Gt=Symbol.for("v-fgt"),uc=Symbol.for("v-txt"),Vr=Symbol.for("v-cmt"),_l=Symbol.for("v-stc"),Ii=[];let Yt=null;function Wn(t=!1){Ii.push(Yt=t?null:[])}function JI(){Ii.pop(),Yt=Ii[Ii.length-1]||null}let Ui=1;function mf(t){Ui+=t}function vm(t){return t.dynamicChildren=Ui>0?Yt||ms:null,JI(),Ui>0&&Yt&&Yt.push(t),t}function hi(t,e,n,r,s,i){return vm(Ye(t,e,n,r,s,i,!0))}function ru(t,e,n,r,s){return vm(ae(t,e,n,r,s,!0))}function Bi(t){return t?t.__v_isVNode===!0:!1}function si(t,e){return t.type===e.type&&t.key===e.key}const hc="__vInternal",Em=({key:t})=>t??null,ia=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?nt(t)||We(t)||ve(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function Ye(t,e=null,n=null,r=0,s=null,i=t===Gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Em(e),ref:e&&ia(e),scopeId:nm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return a?(gh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=nt(n)?8:16),Ui>0&&!o&&Yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Yt.push(c),c}const ae=XI;function XI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===kI)&&(t=Vr),Bi(t)){const a=xr(t,e,!0);return n&&gh(a,n),Ui>0&&!i&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(cw(t)&&(t=t.__vccOpts),e){e=ZI(e);let{class:a,style:c}=e;a&&!nt(a)&&(e.class=Dt(a)),ze(c)&&(Kg(c)&&!le(c)&&(c=ot({},c)),e.style=Zu(c))}const o=nt(t)?1:EI(t)?128:YI(t)?64:ze(t)?4:ve(t)?2:0;return Ye(t,e,n,r,s,o,i,!0)}function ZI(t){return t?Kg(t)||hc in t?ot({},t):t:null}function xr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Fn(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Em(a),ref:e&&e.ref?n&&s?le(s)?s.concat(ia(e)):[s,ia(e)]:ia(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xr(t.ssContent),ssFallback:t.ssFallback&&xr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function an(t=" ",e=0){return ae(uc,null,t,e)}function yl(t="",e=!1){return e?(Wn(),ru(Vr,null,t)):ae(Vr,null,t)}function cn(t){return t==null||typeof t=="boolean"?ae(Vr):le(t)?ae(Gt,null,t.slice()):typeof t=="object"?Gn(t):ae(uc,null,String(t))}function Gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:xr(t)}function gh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),gh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(hc in e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),r&64?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Dt([e.class,r.class]));else if(s==="style")e.style=Zu([e.style,r.style]);else if(ec(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){Xt(t,e,7,[n,r])}const ew=dm();let tw=0;function nw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ew,i={uid:tw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pm(r,s),emitsOptions:tm(r,s),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gI.bind(null,i),t.ce&&t.ce(i),i}let tt=null;const Tm=()=>tt||Mt;let mh,rs,_f="__VUE_INSTANCE_SETTERS__";(rs=Wl()[_f])||(rs=Wl()[_f]=[]),rs.push(t=>tt=t),mh=t=>{rs.length>1?rs.forEach(e=>e(t)):rs[0](t)};const bs=t=>{mh(t),t.scope.on()},Dr=()=>{tt&&tt.scope.off(),mh(null)};function Im(t){return t.vnode.shapeFlag&4}let $i=!1;function rw(t,e=!1){$i=e;const{props:n,children:r}=t.vnode,s=Im(t);jI(t,n,s,e),HI(t,r);const i=s?sw(t,e):void 0;return $i=!1,i}function sw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=oc(new Proxy(t.ctx,NI));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ow(t):null;bs(t),qs();const i=rr(r,t,0,[t.props,s]);if(zs(),Dr(),bg(i)){if(i.then(Dr,Dr),e)return i.then(o=>{yf(t,o,e)}).catch(o=>{ac(o,t,0)});t.asyncDep=i}else yf(t,i,e)}else wm(t,e)}function yf(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=Qg(e)),wm(t,n)}let vf;function wm(t,e,n){const r=t.type;if(!t.render){if(!e&&vf&&!r.render){const s=r.template||fh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ot(ot({isCustomElement:i,delimiters:a},o),c);r.render=vf(s,l)}}t.render=r.render||Jt}bs(t),qs(),MI(t),zs(),Dr()}function iw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return xt(t,"get","$attrs"),e[n]}}))}function ow(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return iw(t)},slots:t.slots,emit:t.emit,expose:e}}function dc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qg(oc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ti)return Ti[n](t)},has(e,n){return n in e||n in Ti}}))}function aw(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function cw(t){return ve(t)&&"__vccOpts"in t}const be=(t,e)=>lI(t,e,$i);function ds(t,e,n){const r=arguments.length;return r===2?ze(e)&&!le(e)?Bi(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Bi(n)&&(n=[n]),ae(t,e,n))}const lw=Symbol.for("v-scx"),uw=()=>Kt(lw),hw="3.3.4",dw="http://www.w3.org/2000/svg",Sr=typeof document<"u"?document:null,Ef=Sr&&Sr.createElement("template"),fw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Sr.createElementNS(dw,t):Sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Sr.createTextNode(t),createComment:t=>Sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ef.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ef.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function pw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function gw(t,e,n){const r=t.style,s=nt(n);if(n&&!s){if(e&&!nt(e))for(const i in e)n[i]==null&&su(r,i,"");for(const i in n)su(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Tf=/\s*!important$/;function su(t,e,n){if(le(n))n.forEach(r=>su(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mw(t,e);Tf.test(n)?t.setProperty(js(r),n.replace(Tf,""),"important"):t[r]=n}}const If=["Webkit","Moz","ms"],vl={};function mw(t,e){const n=vl[e];if(n)return n;let r=vn(e);if(r!=="filter"&&r in t)return vl[e]=r;r=rc(r);for(let s=0;s<If.length;s++){const i=If[s]+r;if(i in t)return vl[e]=i}return e}const wf="http://www.w3.org/1999/xlink";function _w(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wf,e.slice(6,e.length)):t.setAttributeNS(wf,e,n);else{const i=ST(e);n==null||i&&!Og(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function yw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Og(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function as(t,e,n,r){t.addEventListener(e,n,r)}function vw(t,e,n,r){t.removeEventListener(e,n,r)}function Ew(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Tw(e);if(r){const l=i[e]=Aw(r,s);as(t,a,l,c)}else o&&(vw(t,a,o,c),i[e]=void 0)}}const Af=/(?:Once|Passive|Capture)$/;function Tw(t){let e;if(Af.test(t)){e={};let r;for(;r=t.match(Af);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):js(t.slice(2)),e]}let El=0;const Iw=Promise.resolve(),ww=()=>El||(Iw.then(()=>El=0),El=Date.now());function Aw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xt(Sw(r,n.value),e,5,[r])};return n.value=t,n.attached=ww(),n}function Sw(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Sf=/^on[a-z]/,Rw=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?pw(t,r,s):e==="style"?gw(t,n,r):ec(e)?Qu(e)||Ew(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bw(t,e,r,s))?yw(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_w(t,e,r,s))};function bw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Sf.test(e)&&ve(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Sf.test(e)&&nt(n)?!1:e in t}const Rf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>na(e,n):e};function Cw(t){t.target.composing=!0}function bf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kD={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Rf(s);const i=r||s.props&&s.props.type==="number";as(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Kl(a)),t._assign(a)}),n&&as(t,"change",()=>{t.value=t.value.trim()}),e||(as(t,"compositionstart",Cw),as(t,"compositionend",bf),as(t,"change",bf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Rf(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Kl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Pw=["ctrl","shift","alt","meta"],Ow={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pw.some(n=>t[`${n}Key`]&&!e.includes(n))},DD=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Ow[e[s]];if(i&&i(n,e))return}return t(n,...r)},kw=ot({patchProp:Rw},fw);let Cf;function Dw(){return Cf||(Cf=WI(kw))}const Am=(...t)=>{const e=Dw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Nw(r);if(!s)return;const i=e._component;!ve(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Nw(t){return nt(t)?document.querySelector(t):t}var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Aa={exports:{}};Aa.exports;(function(t,e){var n=200,r="__lodash_hash_undefined__",s=9007199254740991,i="[object Arguments]",o="[object Array]",a="[object Boolean]",c="[object Date]",l="[object Error]",u="[object Function]",h="[object GeneratorFunction]",d="[object Map]",p="[object Number]",y="[object Object]",E="[object Promise]",A="[object RegExp]",C="[object Set]",x="[object String]",z="[object Symbol]",L="[object WeakMap]",J="[object ArrayBuffer]",re="[object DataView]",Te="[object Float32Array]",q="[object Float64Array]",Q="[object Int8Array]",Y="[object Int16Array]",oe="[object Int32Array]",He="[object Uint8Array]",fe="[object Uint8ClampedArray]",D="[object Uint16Array]",P="[object Uint32Array]",w=/[\\^$.*+?()[\]{}|]/g,M=/\w*$/,O=/^\[object .+?Constructor\]$/,ne=/^(?:0|[1-9]\d*)$/,$={};$[i]=$[o]=$[J]=$[re]=$[a]=$[c]=$[Te]=$[q]=$[Q]=$[Y]=$[oe]=$[d]=$[p]=$[y]=$[A]=$[C]=$[x]=$[z]=$[He]=$[fe]=$[D]=$[P]=!0,$[l]=$[u]=$[L]=!1;var me=typeof di=="object"&&di&&di.Object===Object&&di,ye=typeof self=="object"&&self&&self.Object===Object&&self,Ie=me||ye||Function("return this")(),Oe=e&&!e.nodeType&&e,Fe=Oe&&!0&&t&&!t.nodeType&&t,Se=Fe&&Fe.exports===Oe;function T(f,v){return f.set(v[0],v[1]),f}function j(f,v){return f.add(v),f}function F(f,v){for(var S=-1,te=f?f.length:0;++S<te&&v(f[S],S,f)!==!1;);return f}function H(f,v){for(var S=-1,te=v.length,st=f.length;++S<te;)f[st+S]=v[S];return f}function _e(f,v,S,te){var st=-1,Rt=f?f.length:0;for(te&&Rt&&(S=f[++st]);++st<Rt;)S=v(S,f[st],st,f);return S}function g(f,v){for(var S=-1,te=Array(f);++S<f;)te[S]=v(S);return te}function m(f,v){return f==null?void 0:f[v]}function _(f){var v=!1;if(f!=null&&typeof f.toString!="function")try{v=!!(f+"")}catch{}return v}function I(f){var v=-1,S=Array(f.size);return f.forEach(function(te,st){S[++v]=[st,te]}),S}function b(f,v){return function(S){return f(v(S))}}function k(f){var v=-1,S=Array(f.size);return f.forEach(function(te){S[++v]=te}),S}var W=Array.prototype,U=Function.prototype,B=Object.prototype,N=Ie["__core-js_shared__"],se=function(){var f=/[^.]+$/.exec(N&&N.keys&&N.keys.IE_PROTO||"");return f?"Symbol(src)_1."+f:""}(),X=U.toString,Z=B.hasOwnProperty,ce=B.toString,we=RegExp("^"+X.call(Z).replace(w,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Me=Se?Ie.Buffer:void 0,ke=Ie.Symbol,Ke=Ie.Uint8Array,Lt=b(Object.getPrototypeOf,Object),$n=Object.create,Do=B.propertyIsEnumerable,mr=W.splice,ti=Object.getOwnPropertySymbols,St=Me?Me.isBuffer:void 0,$t=b(Object.keys,Object),Xr=ts(Ie,"DataView"),ni=ts(Ie,"Map"),ol=ts(Ie,"Promise"),al=ts(Ie,"Set"),cl=ts(Ie,"WeakMap"),ri=ts(Object,"create"),dE=vr(Xr),fE=vr(ni),pE=vr(ol),gE=vr(al),mE=vr(cl),Ld=ke?ke.prototype:void 0,Fd=Ld?Ld.valueOf:void 0;function _r(f){var v=-1,S=f?f.length:0;for(this.clear();++v<S;){var te=f[v];this.set(te[0],te[1])}}function _E(){this.__data__=ri?ri(null):{}}function yE(f){return this.has(f)&&delete this.__data__[f]}function vE(f){var v=this.__data__;if(ri){var S=v[f];return S===r?void 0:S}return Z.call(v,f)?v[f]:void 0}function EE(f){var v=this.__data__;return ri?v[f]!==void 0:Z.call(v,f)}function TE(f,v){var S=this.__data__;return S[f]=ri&&v===void 0?r:v,this}_r.prototype.clear=_E,_r.prototype.delete=yE,_r.prototype.get=vE,_r.prototype.has=EE,_r.prototype.set=TE;function In(f){var v=-1,S=f?f.length:0;for(this.clear();++v<S;){var te=f[v];this.set(te[0],te[1])}}function IE(){this.__data__=[]}function wE(f){var v=this.__data__,S=No(v,f);if(S<0)return!1;var te=v.length-1;return S==te?v.pop():mr.call(v,S,1),!0}function AE(f){var v=this.__data__,S=No(v,f);return S<0?void 0:v[S][1]}function SE(f){return No(this.__data__,f)>-1}function RE(f,v){var S=this.__data__,te=No(S,f);return te<0?S.push([f,v]):S[te][1]=v,this}In.prototype.clear=IE,In.prototype.delete=wE,In.prototype.get=AE,In.prototype.has=SE,In.prototype.set=RE;function Zr(f){var v=-1,S=f?f.length:0;for(this.clear();++v<S;){var te=f[v];this.set(te[0],te[1])}}function bE(){this.__data__={hash:new _r,map:new(ni||In),string:new _r}}function CE(f){return Mo(this,f).delete(f)}function PE(f){return Mo(this,f).get(f)}function OE(f){return Mo(this,f).has(f)}function kE(f,v){return Mo(this,f).set(f,v),this}Zr.prototype.clear=bE,Zr.prototype.delete=CE,Zr.prototype.get=PE,Zr.prototype.has=OE,Zr.prototype.set=kE;function es(f){this.__data__=new In(f)}function DE(){this.__data__=new In}function NE(f){return this.__data__.delete(f)}function ME(f){return this.__data__.get(f)}function VE(f){return this.__data__.has(f)}function xE(f,v){var S=this.__data__;if(S instanceof In){var te=S.__data__;if(!ni||te.length<n-1)return te.push([f,v]),this;S=this.__data__=new Zr(te)}return S.set(f,v),this}es.prototype.clear=DE,es.prototype.delete=NE,es.prototype.get=ME,es.prototype.has=VE,es.prototype.set=xE;function LE(f,v){var S=hl(f)||aT(f)?g(f.length,String):[],te=S.length,st=!!te;for(var Rt in f)(v||Z.call(f,Rt))&&!(st&&(Rt=="length"||rT(Rt,te)))&&S.push(Rt);return S}function Ud(f,v,S){var te=f[v];(!(Z.call(f,v)&&qd(te,S))||S===void 0&&!(v in f))&&(f[v]=S)}function No(f,v){for(var S=f.length;S--;)if(qd(f[S][0],v))return S;return-1}function FE(f,v){return f&&Bd(v,dl(v),f)}function ll(f,v,S,te,st,Rt,jt){var Ot;if(te&&(Ot=Rt?te(f,st,Rt,jt):te(f)),Ot!==void 0)return Ot;if(!Vo(f))return f;var Kd=hl(f);if(Kd){if(Ot=eT(f),!v)return JE(f,Ot)}else{var ns=yr(f),Wd=ns==u||ns==h;if(lT(f))return zE(f,v);if(ns==y||ns==i||Wd&&!Rt){if(_(f))return Rt?f:{};if(Ot=tT(Wd?{}:f),!v)return XE(f,FE(Ot,f))}else{if(!$[ns])return Rt?f:{};Ot=nT(f,ns,ll,v)}}jt||(jt=new es);var Gd=jt.get(f);if(Gd)return Gd;if(jt.set(f,Ot),!Kd)var Qd=S?ZE(f):dl(f);return F(Qd||f,function(fl,xo){Qd&&(xo=fl,fl=f[xo]),Ud(Ot,xo,ll(fl,v,S,te,xo,f,jt))}),Ot}function UE(f){return Vo(f)?$n(f):{}}function BE(f,v,S){var te=v(f);return hl(f)?te:H(te,S(f))}function $E(f){return ce.call(f)}function jE(f){if(!Vo(f)||iT(f))return!1;var v=Hd(f)||_(f)?we:O;return v.test(vr(f))}function qE(f){if(!jd(f))return $t(f);var v=[];for(var S in Object(f))Z.call(f,S)&&S!="constructor"&&v.push(S);return v}function zE(f,v){if(v)return f.slice();var S=new f.constructor(f.length);return f.copy(S),S}function ul(f){var v=new f.constructor(f.byteLength);return new Ke(v).set(new Ke(f)),v}function HE(f,v){var S=v?ul(f.buffer):f.buffer;return new f.constructor(S,f.byteOffset,f.byteLength)}function KE(f,v,S){var te=v?S(I(f),!0):I(f);return _e(te,T,new f.constructor)}function WE(f){var v=new f.constructor(f.source,M.exec(f));return v.lastIndex=f.lastIndex,v}function GE(f,v,S){var te=v?S(k(f),!0):k(f);return _e(te,j,new f.constructor)}function QE(f){return Fd?Object(Fd.call(f)):{}}function YE(f,v){var S=v?ul(f.buffer):f.buffer;return new f.constructor(S,f.byteOffset,f.length)}function JE(f,v){var S=-1,te=f.length;for(v||(v=Array(te));++S<te;)v[S]=f[S];return v}function Bd(f,v,S,te){S||(S={});for(var st=-1,Rt=v.length;++st<Rt;){var jt=v[st],Ot=te?te(S[jt],f[jt],jt,S,f):void 0;Ud(S,jt,Ot===void 0?f[jt]:Ot)}return S}function XE(f,v){return Bd(f,$d(f),v)}function ZE(f){return BE(f,dl,$d)}function Mo(f,v){var S=f.__data__;return sT(v)?S[typeof v=="string"?"string":"hash"]:S.map}function ts(f,v){var S=m(f,v);return jE(S)?S:void 0}var $d=ti?b(ti,Object):dT,yr=$E;(Xr&&yr(new Xr(new ArrayBuffer(1)))!=re||ni&&yr(new ni)!=d||ol&&yr(ol.resolve())!=E||al&&yr(new al)!=C||cl&&yr(new cl)!=L)&&(yr=function(f){var v=ce.call(f),S=v==y?f.constructor:void 0,te=S?vr(S):void 0;if(te)switch(te){case dE:return re;case fE:return d;case pE:return E;case gE:return C;case mE:return L}return v});function eT(f){var v=f.length,S=f.constructor(v);return v&&typeof f[0]=="string"&&Z.call(f,"index")&&(S.index=f.index,S.input=f.input),S}function tT(f){return typeof f.constructor=="function"&&!jd(f)?UE(Lt(f)):{}}function nT(f,v,S,te){var st=f.constructor;switch(v){case J:return ul(f);case a:case c:return new st(+f);case re:return HE(f,te);case Te:case q:case Q:case Y:case oe:case He:case fe:case D:case P:return YE(f,te);case d:return KE(f,te,S);case p:case x:return new st(f);case A:return WE(f);case C:return GE(f,te,S);case z:return QE(f)}}function rT(f,v){return v=v??s,!!v&&(typeof f=="number"||ne.test(f))&&f>-1&&f%1==0&&f<v}function sT(f){var v=typeof f;return v=="string"||v=="number"||v=="symbol"||v=="boolean"?f!=="__proto__":f===null}function iT(f){return!!se&&se in f}function jd(f){var v=f&&f.constructor,S=typeof v=="function"&&v.prototype||B;return f===S}function vr(f){if(f!=null){try{return X.call(f)}catch{}try{return f+""}catch{}}return""}function oT(f){return ll(f,!0,!0)}function qd(f,v){return f===v||f!==f&&v!==v}function aT(f){return cT(f)&&Z.call(f,"callee")&&(!Do.call(f,"callee")||ce.call(f)==i)}var hl=Array.isArray;function zd(f){return f!=null&&uT(f.length)&&!Hd(f)}function cT(f){return hT(f)&&zd(f)}var lT=St||fT;function Hd(f){var v=Vo(f)?ce.call(f):"";return v==u||v==h}function uT(f){return typeof f=="number"&&f>-1&&f%1==0&&f<=s}function Vo(f){var v=typeof f;return!!f&&(v=="object"||v=="function")}function hT(f){return!!f&&typeof f=="object"}function dl(f){return zd(f)?LE(f):qE(f)}function dT(){return[]}function fT(){return!1}t.exports=oT})(Aa,Aa.exports);var Mw=Aa.exports;const Pf=Sm(Mw);function Vw({store:t}){const e=Pf(t.$state);t.$reset=()=>t.$patch(Pf(e))}var xw=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Rm;const fc=t=>Rm=t,bm=Symbol();function iu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var wi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(wi||(wi={}));function Lw(){const t=Ng(!0),e=t.run(()=>Le({}));let n=[],r=[];const s=oc({install(i){fc(s),s._a=i,i.provide(bm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!xw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Cm=()=>{};function Of(t,e,n,r=Cm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&eh()&&Mg(s),s}function ss(t,...e){t.slice().forEach(n=>{n(...e)})}const Fw=t=>t();function ou(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];iu(s)&&iu(r)&&t.hasOwnProperty(n)&&!We(r)&&!nr(r)?t[n]=ou(s,r):t[n]=r}return t}const Uw=Symbol();function Bw(t){return!iu(t)||!t.hasOwnProperty(Uw)}const{assign:Kn}=Object;function $w(t){return!!(We(t)&&t.effect)}function jw(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=sI(n.state.value[t]);return Kn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=oc(be(()=>{fc(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=Pm(t,l,e,n,r,!0),c}function Pm(t,e,n={},r,s,i){let o;const a=Kn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],p;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),Le({});let E;function A(q){let Q;l=u=!1,typeof q=="function"?(q(r.state.value[t]),Q={type:wi.patchFunction,storeId:t,events:p}):(ou(r.state.value[t],q),Q={type:wi.patchObject,payload:q,storeId:t,events:p});const Y=E=Symbol();zr().then(()=>{E===Y&&(l=!0)}),u=!0,ss(h,Q,r.state.value[t])}const C=i?function(){const{state:Q}=n,Y=Q?Q():{};this.$patch(oe=>{Kn(oe,Y)})}:Cm;function x(){o.stop(),h=[],d=[],r._s.delete(t)}function z(q,Q){return function(){fc(r);const Y=Array.from(arguments),oe=[],He=[];function fe(w){oe.push(w)}function D(w){He.push(w)}ss(d,{args:Y,name:q,store:J,after:fe,onError:D});let P;try{P=Q.apply(this&&this.$id===t?this:J,Y)}catch(w){throw ss(He,w),w}return P instanceof Promise?P.then(w=>(ss(oe,w),w)).catch(w=>(ss(He,w),Promise.reject(w))):(ss(oe,P),P)}}const L={_p:r,$id:t,$onAction:Of.bind(null,d),$patch:A,$reset:C,$subscribe(q,Q={}){const Y=Of(h,q,Q.detached,()=>oe()),oe=o.run(()=>Ht(()=>r.state.value[t],He=>{(Q.flush==="sync"?u:l)&&q({storeId:t,type:wi.direct,events:p},He)},Kn({},c,Q)));return Y},$dispose:x},J=rn(L);r._s.set(t,J);const re=r._a&&r._a.runWithContext||Fw,Te=r._e.run(()=>(o=Ng(),re(()=>o.run(e))));for(const q in Te){const Q=Te[q];if(We(Q)&&!$w(Q)||nr(Q))i||(y&&Bw(Q)&&(We(Q)?Q.value=y[q]:ou(Q,y[q])),r.state.value[t][q]=Q);else if(typeof Q=="function"){const Y=z(q,Q);Te[q]=Y,a.actions[q]=Q}}return Kn(J,Te),Kn(ge(J),Te),Object.defineProperty(J,"$state",{get:()=>r.state.value[t],set:q=>{A(Q=>{Kn(Q,q)})}}),r._p.forEach(q=>{Kn(J,o.run(()=>q({store:J,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(J.$state,y),l=!0,u=!0,J}function _h(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=$I();return a=a||(l?Kt(bm,null):null),a&&fc(a),a=Rm,a._s.has(r)||(i?Pm(r,e,s,a):jw(r,s,a)),a._s.get(r)}return o.$id=r,o}const co={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Cs={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},Pt={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},qw={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},Om={dangerouslyHTMLString:!1,multiple:!0,position:co.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},zw={rtl:!1,newestOnTop:!1,toastClassName:""},km={...Om,...zw};({...Om,type:Pt.DEFAULT});var Ne=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(Ne||{}),au=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(au||{});const Hw={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},Kw={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},Ww={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},Gw={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"};function Dm(t){let e=Hw;if(!t||typeof t=="string")switch(t){case"flip":e=Gw;break;case"zoom":e=Ww;break;case"slide":e=Kw;break}else e=t;return e}function Qw(t){return t.containerId||String(t.position)}const pc="will-unmount";function Yw(t=co.TOP_RIGHT){return!!document.querySelector(".".concat(Ne.CSS_NAMESPACE,"__toast-container--").concat(t))}function Jw(t=co.TOP_RIGHT){return"".concat(Ne.CSS_NAMESPACE,"__toast-container--").concat(t)}function Xw(t,e,n=!1){const r=["".concat(Ne.CSS_NAMESPACE,"__toast-container"),"".concat(Ne.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(Ne.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return vs(e)?e({position:t,rtl:n,defaultClassName:r}):"".concat(r," ").concat(e||"")}function Zw(t){var e;const{position:n,containerClassName:r,rtl:s=!1,style:i={}}=t,o=Ne.CSS_NAMESPACE,a=Jw(n),c=document.querySelector(".".concat(o)),l=document.querySelector(".".concat(a)),u=!!l&&!((e=l.className)!=null&&e.includes(pc)),h=c||document.createElement("div"),d=document.createElement("div");d.className=Xw(n,r,s),d.dataset.testid="".concat(Ne.CSS_NAMESPACE,"__toast-container--").concat(n),d.id=Qw(t);for(const p in i)if(Object.prototype.hasOwnProperty.call(i,p)){const y=i[p];d.style[p]=y}return c||(h.className=Ne.CSS_NAMESPACE,document.body.appendChild(h)),u||h.appendChild(d),d}function cu(t){var e,n,r;const s=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(s);i&&i.removeEventListener("animationend",cu,!1);try{ji[s].unmount(),(r=document.getElementById(s))==null||r.remove(),delete ji[s],delete lt[s]}catch{}}const ji=rn({});function e0(t,e){const n=document.getElementById(String(e));n&&(ji[n.id]=t)}function lu(t,e=!0){const n=String(t);if(!ji[n])return;const r=document.getElementById(n);r&&r.classList.add(pc),e?(n0(t),r&&r.addEventListener("animationend",cu,!1)):cu(n),En.items=En.items.filter(s=>s.containerId!==t)}function t0(t){for(const e in ji)lu(e,t);En.items=[]}function Nm(t,e){const n=document.getElementById(t.toastId);if(n){let r=t;r={...r,...Dm(r.transition)};const s=r.appendPosition?"".concat(r.exit,"--").concat(r.position):r.exit;n.className+=" ".concat(s),e&&e(n)}}function n0(t){for(const e in lt)if(e===t)for(const n of lt[e]||[])Nm(n)}function r0(t){const e=lo().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function yh(t){return document.getElementById(t)}function s0(t){const e=yh(t.containerId);return e&&e.classList.contains(pc)}function kf(t){var e;const n=Bi(t.content)?ge(t.content.props):null;return n??ge((e=t.data)!=null?e:{})}function i0(t){return t?En.items.filter(e=>e.containerId===t).length>0:En.items.length>0}function o0(){if(En.items.length>0){const t=En.items.shift();oa(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const lt=rn({}),En=rn({items:[]});function lo(){const t=ge(lt);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function a0(t){return lo().find(e=>e.toastId===t)}function oa(t,e={}){if(s0(e)){const n=yh(e.containerId);n&&n.addEventListener("animationend",uu.bind(null,t,e),!1)}else uu(t,e)}function uu(t,e={}){const n=yh(e.containerId);n&&n.removeEventListener("animationend",uu.bind(null,t,e),!1);const r=lt[e.containerId]||[],s=r.length>0;if(!s&&!Yw(e.position)){const i=Zw(e),o=Am(R0,e);o.mount(i),e0(o,i.id)}s&&(e.position=r[0].position),zr(()=>{e.updateId?pn.update(e):pn.add(t,e)})}const pn={add(t,e){const{containerId:n=""}=e;n&&(lt[n]=lt[n]||[],lt[n].find(r=>r.toastId===e.toastId)||setTimeout(()=>{var r,s;e.newestOnTop?(r=lt[n])==null||r.unshift(e):(s=lt[n])==null||s.push(e),e.onOpen&&e.onOpen(kf(e))},e.delay||0))},remove(t){if(t){const e=r0(t);if(e){const n=lt[e];let r=n.find(s=>s.toastId===t);lt[e]=n.filter(s=>s.toastId!==t),!lt[e].length&&!i0(e)&&lu(e,!1),o0(),zr(()=>{r!=null&&r.onClose&&(r.onClose(kf(r)),r=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){lt[e]=lt[e]||[];const n=lt[e].find(r=>r.toastId===t.toastId);n&&setTimeout(()=>{for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const s=t[r];n[r]=s}},t.delay||0)}},clear(t,e=!0){t?lu(t,e):t0(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,r=document.getElementById(n);r&&(r.removeEventListener("animationend",pn.dismissCallback,!1),setTimeout(()=>{pn.remove(n)}))},dismiss(t){if(t){const e=lo();for(const n of e)if(n.toastId===t){Nm(n,r=>{r.addEventListener("animationend",pn.dismissCallback,!1)});break}}}},Mm=rn({}),Sa=rn({});function Vm(){return Math.random().toString(36).substring(2,9)}function c0(t){return typeof t=="number"&&!isNaN(t)}function hu(t){return typeof t=="string"}function vs(t){return typeof t=="function"}function gc(...t){return Fn(...t)}function aa(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function l0(t={}){Mm["".concat(Ne.CSS_NAMESPACE,"-default-options")]=t}function u0(){return Mm["".concat(Ne.CSS_NAMESPACE,"-default-options")]||km}function h0(){return document.documentElement.classList.contains("dark")?"dark":"light"}var ca=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(ca||{});const xm={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:co.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:Cs.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:Pt.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},d0={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:Pt.DEFAULT},theme:{type:String,required:!1,default:Cs.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},f0=xn({name:"ProgressBar",props:d0,setup(t,{attrs:e}){const n=Le(),r=be(()=>t.hide?"true":"false"),s=be(()=>({...e.style||{},animationDuration:"".concat(t.autoClose===!0?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"})),i=be(()=>["".concat(Ne.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(Ne.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(Ne.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(Ne.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(Ne.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(Ne.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),o=be(()=>"".concat(i.value," ").concat((e==null?void 0:e.class)||"")),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},c=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},l=be(()=>t.controlledProgress?null:c),u=be(()=>t.controlledProgress?c:null);return Ei(()=>{n.value&&(a(),n.value.onanimationend=l.value,n.value.ontransitionend=u.value)}),()=>ae("div",{ref:n,role:"progressbar","aria-hidden":r.value,"aria-label":"notification timer",class:o.value,style:s.value},null)}}),p0=xn({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:Cs.AUTO},type:{type:String,required:!1,default:Cs.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>ae("button",{class:"".concat(Ne.CSS_NAMESPACE,"__close-button ").concat(Ne.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[ae("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[ae("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),mc=({theme:t,type:e,path:n,...r})=>ae("svg",Fn({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-".concat(e,")")},r),[ae("path",{d:n},null)]);function g0(t){return ae(mc,Fn(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function m0(t){return ae(mc,Fn(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function _0(t){return ae(mc,Fn(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function y0(t){return ae(mc,Fn(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function v0(){return ae("div",{class:"".concat(Ne.CSS_NAMESPACE,"__spinner")},null)}const du={info:m0,warning:g0,success:_0,error:y0,spinner:v0},E0=t=>t in du;function T0({theme:t,type:e,isLoading:n,icon:r}){let s;const i={theme:t,type:e};return n?s=du.spinner():r===!1?s=void 0:aa(r)?s=ge(r):vs(r)?s=r(i):Bi(r)?s=xr(r,i):hu(r)||c0(r)?s=r:E0(e)&&(s=du[e](i)),s}const I0=()=>{};function w0(t,e,n=Ne.COLLAPSE_DURATION){const{scrollHeight:r,style:s}=t,i=n;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition="all ".concat(i,"ms"),requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,i)})})}function A0(t){const e=Le(!1),n=Le(!1),r=Le(!1),s=Le(ca.Enter),i=rn({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||Ne.COLLAPSE_DURATION}),o=i.done||I0,a=be(()=>i.appendPosition?"".concat(i.enter,"--").concat(i.position):i.enter),c=be(()=>i.appendPosition?"".concat(i.exit,"--").concat(i.position):i.exit),l=be(()=>t.pauseOnHover?{onMouseenter:A,onMouseleave:E}:{});function u(){const x=a.value.split(" ");d().addEventListener(au.ENTRANCE_ANIMATION_END,E,{once:!0});const z=J=>{const re=d();J.target===re&&(re.dispatchEvent(new Event(au.ENTRANCE_ANIMATION_END)),re.removeEventListener("animationend",z),re.removeEventListener("animationcancel",z),s.value===ca.Enter&&J.type!=="animationcancel"&&re.classList.remove(...x))},L=()=>{const J=d();J.classList.add(...x),J.addEventListener("animationend",z),J.addEventListener("animationcancel",z)};t.pauseOnFocusLoss&&p(),L()}function h(){if(!d())return;const x=()=>{const L=d();L.removeEventListener("animationend",x),i.collapse?w0(L,o,i.collapseDuration):o()},z=()=>{const L=d();s.value=ca.Exit,L&&(L.className+=" ".concat(c.value),L.addEventListener("animationend",x))};n.value||(r.value?x():setTimeout(z))}function d(){return t.toastRef.value}function p(){document.hasFocus()||A(),window.addEventListener("focus",E),window.addEventListener("blur",A)}function y(){window.removeEventListener("focus",E),window.removeEventListener("blur",A)}function E(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function A(){e.value=!1}function C(x){x&&(x.stopPropagation(),x.preventDefault()),n.value=!1}return Ei(h),Ei(()=>{const x=lo();n.value=x.findIndex(z=>z.toastId===i.toastId)>-1}),Ei(()=>{t.isLoading!==void 0&&(t.loading.value?A():E())}),Hr(u),Hs(()=>{t.pauseOnFocusLoss&&y()}),{isIn:n,isRunning:e,hideToast:C,eventHandlers:l}}const S0=xn({name:"ToastItem",inheritAttrs:!1,props:xm,setup(t){const e=Le(),n=be(()=>!!t.isLoading),r=be(()=>t.progress!==void 0&&t.progress!==null),s=be(()=>T0(t)),i=be(()=>["".concat(Ne.CSS_NAMESPACE,"__toast"),"".concat(Ne.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(Ne.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(Ne.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:l}=A0({toastRef:e,loading:n,done:()=>{pn.remove(t.toastId)},...Dm(t.transition),...t});return()=>ae("div",Fn({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:u=>{t.closeOnClick&&c(),t.onClick&&t.onClick(u)}},l.value),[ae("div",{role:t.role,"data-testid":"toast-body",class:"".concat(Ne.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[s.value!=null&&ae("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(Ne.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(Ne.CSS_NAMESPACE,"--animate-icon ").concat(Ne.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[aa(s.value)?ds(ge(s.value),{theme:t.theme,type:t.type}):vs(s.value)?s.value({theme:t.theme,type:t.type}):s.value]),ae("div",{"data-testid":"toast-content"},[aa(t.content)?ds(ge(t.content),{toastProps:ge(t),closeToast:c,data:t.data}):vs(t.content)?t.content({toastProps:ge(t),closeToast:c,data:t.data}):t.dangerouslyHTMLString?ds("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&ae(p0,{theme:t.theme,closeToast:u=>{u.stopPropagation(),u.preventDefault(),c()}},null),aa(t.closeButton)?ds(ge(t.closeButton),{closeToast:c,type:t.type,theme:t.theme}):vs(t.closeButton)?t.closeButton({closeToast:c,type:t.type,theme:t.theme}):null,ae(f0,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:r.value,progress:t.progress,closeToast:t.isLoading?void 0:c},null)])}});let Ai=0;function Lm(){typeof window>"u"||(Ai&&window.cancelAnimationFrame(Ai),Ai=window.requestAnimationFrame(Lm),Sa.lastUrl!==window.location.href&&(Sa.lastUrl=window.location.href,pn.clear()))}const R0=xn({name:"ToastifyContainer",inheritAttrs:!1,props:xm,setup(t){const e=be(()=>t.containerId),n=be(()=>lt[e.value]||[]),r=be(()=>n.value.filter(s=>s.position===t.position));return Hr(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(Lm)}),Hs(()=>{typeof window<"u"&&Ai&&(window.cancelAnimationFrame(Ai),Sa.lastUrl="")}),()=>ae(Gt,null,[r.value.map(s=>{const{toastId:i=""}=s;return ae(S0,Fn({key:i},s),null)})])}});let Tl=!1;function Fm(){const t=[];return lo().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(pc)&&t.push(e)}),t}function b0(t){const e=Fm().length,n=t??0;return n>0&&e+En.items.length>=n}function C0(t){b0(t.limit)&&!t.updateId&&En.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function dr(t,e,n={}){if(Tl)return;n=gc(u0(),{type:e},ge(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Vm()),n={...n,content:t,containerId:n.containerId||String(n.position)};const r=Number(n==null?void 0:n.progress);return r<0&&(n.progress=0),r>1&&(n.progress=1),n.theme==="auto"&&(n.theme=h0()),C0(n),Sa.lastUrl=window.location.href,n.multiple?En.items.length?n.updateId&&oa(t,n):oa(t,n):(Tl=!0,je.clearAll(void 0,!1),setTimeout(()=>{oa(t,n)},0),setTimeout(()=>{Tl=!1},390)),n.toastId}const je=(t,e)=>dr(t,Pt.DEFAULT,e);je.info=(t,e)=>dr(t,Pt.DEFAULT,{...e,type:Pt.INFO});je.error=(t,e)=>dr(t,Pt.DEFAULT,{...e,type:Pt.ERROR});je.warning=(t,e)=>dr(t,Pt.DEFAULT,{...e,type:Pt.WARNING});je.warn=je.warning;je.success=(t,e)=>dr(t,Pt.DEFAULT,{...e,type:Pt.SUCCESS});je.loading=(t,e)=>dr(t,Pt.DEFAULT,gc(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));je.dark=(t,e)=>dr(t,Pt.DEFAULT,gc(e,{theme:Cs.DARK}));je.remove=t=>{t?pn.dismiss(t):pn.clear()};je.clearAll=(t,e)=>{pn.clear(t,e)};je.isActive=t=>{let e=!1;return e=Fm().findIndex(n=>n.toastId===t)>-1,e};je.update=(t,e={})=>{setTimeout(()=>{const n=a0(t);if(n){const r=ge(n),{content:s}=r,i={...r,...e,toastId:e.toastId||t,updateId:Vm()},o=i.render||s;delete i.render,dr(o,i.type,i)}},0)};je.done=t=>{je.update(t,{isLoading:!1,progress:1})};je.promise=P0;function P0(t,{pending:e,error:n,success:r},s){var i,o,a;let c;const l={...s||{},autoClose:!1};e&&(c=hu(e)?je.loading(e,l):je.loading(e.render,{...l,...e}));const u={autoClose:(i=s==null?void 0:s.autoClose)!=null?i:!0,closeOnClick:(o=s==null?void 0:s.closeOnClick)!=null?o:!0,closeButton:(a=s==null?void 0:s.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},h=(p,y,E)=>{if(y==null){je.remove(c);return}const A={type:p,...u,...s,data:E},C=hu(y)?{render:y}:y;return c?je.update(c,{...A,...C,isLoading:!1}):je(C.render,{...A,...C,isLoading:!1}),E},d=vs(t)?t():t;return d.then(p=>{h("success",r,p)}).catch(p=>{h("error",n,p)}),d}je.POSITION=co;je.THEME=Cs;je.TYPE=Pt;je.TRANSITIONS=qw;const Um={install(t,e={}){O0(e)}};typeof window<"u"&&(window.Vue3Toastify=Um);function O0(t={}){const e=gc(km,t);l0(e)}function Df(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function qo(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Df(Object(n),!0).forEach(function(r){N0(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Df(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function k0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Nf(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function D0(t,e,n){return e&&Nf(t.prototype,e),n&&Nf(t,n),t}function N0(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M0(t){return V0(t)||x0(t)||L0(t)||F0()}function V0(t){if(Array.isArray(t))return fu(t)}function x0(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function L0(t,e){if(t){if(typeof t=="string")return fu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fu(t,e)}}function fu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function F0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var is={FRONT:"FRONT",BEHIND:"BEHIND"},Ir={INIT:"INIT",FIXED:"FIXED",DYNAMIC:"DYNAMIC"},Mf=2,U0=function(){function t(e,n){k0(this,t),this.init(e,n)}return D0(t,[{key:"init",value:function(n,r){this.param=n,this.callUpdate=r,this.sizes=new Map,this.firstRangeTotalSize=0,this.firstRangeAverageSize=0,this.lastCalcIndex=0,this.fixedSizeValue=0,this.calcType=Ir.INIT,this.offset=0,this.direction="",this.range=Object.create(null),n&&this.checkRange(0,n.keeps-1)}},{key:"destroy",value:function(){this.init(null,null)}},{key:"getRange",value:function(){var n=Object.create(null);return n.start=this.range.start,n.end=this.range.end,n.padFront=this.range.padFront,n.padBehind=this.range.padBehind,n}},{key:"isBehind",value:function(){return this.direction===is.BEHIND}},{key:"isFront",value:function(){return this.direction===is.FRONT}},{key:"getOffset",value:function(n){return(n<1?0:this.getIndexOffset(n))+this.param.slotHeaderSize}},{key:"updateParam",value:function(n,r){var s=this;this.param&&n in this.param&&(n==="uniqueIds"&&this.sizes.forEach(function(i,o){r.includes(o)||s.sizes.delete(o)}),this.param[n]=r)}},{key:"saveSize",value:function(n,r){this.sizes.set(n,r),this.calcType===Ir.INIT?(this.fixedSizeValue=r,this.calcType=Ir.FIXED):this.calcType===Ir.FIXED&&this.fixedSizeValue!==r&&(this.calcType=Ir.DYNAMIC,delete this.fixedSizeValue),this.calcType!==Ir.FIXED&&typeof this.firstRangeTotalSize<"u"&&(this.sizes.size<Math.min(this.param.keeps,this.param.uniqueIds.length)?(this.firstRangeTotalSize=M0(this.sizes.values()).reduce(function(s,i){return s+i},0),this.firstRangeAverageSize=Math.round(this.firstRangeTotalSize/this.sizes.size)):delete this.firstRangeTotalSize)}},{key:"handleDataSourcesChange",value:function(){var n=this.range.start;this.isFront()?n=n-Mf:this.isBehind()&&(n=n+Mf),n=Math.max(n,0),this.updateRange(this.range.start,this.getEndByStart(n))}},{key:"handleSlotSizeChange",value:function(){this.handleDataSourcesChange()}},{key:"handleScroll",value:function(n){this.direction=n<this.offset?is.FRONT:is.BEHIND,this.offset=n,this.param&&(this.direction===is.FRONT?this.handleFront():this.direction===is.BEHIND&&this.handleBehind())}},{key:"handleFront",value:function(){var n=this.getScrollOvers();if(!(n>this.range.start)){var r=Math.max(n-this.param.buffer,0);this.checkRange(r,this.getEndByStart(r))}}},{key:"handleBehind",value:function(){var n=this.getScrollOvers();n<this.range.start+this.param.buffer||this.checkRange(n,this.getEndByStart(n))}},{key:"getScrollOvers",value:function(){var n=this.offset-this.param.slotHeaderSize;if(n<=0)return 0;if(this.isFixedType())return Math.floor(n/this.fixedSizeValue);for(var r=0,s=0,i=0,o=this.param.uniqueIds.length;r<=o;){if(s=r+Math.floor((o-r)/2),i=this.getIndexOffset(s),i===n)return s;i<n?r=s+1:i>n&&(o=s-1)}return r>0?--r:0}},{key:"getIndexOffset",value:function(n){if(!n)return 0;for(var r=0,s=0,i=0;i<n;i++)s=this.sizes.get(this.param.uniqueIds[i]),r=r+(typeof s=="number"?s:this.getEstimateSize());return this.lastCalcIndex=Math.max(this.lastCalcIndex,n-1),this.lastCalcIndex=Math.min(this.lastCalcIndex,this.getLastIndex()),r}},{key:"isFixedType",value:function(){return this.calcType===Ir.FIXED}},{key:"getLastIndex",value:function(){return this.param.uniqueIds.length-1}},{key:"checkRange",value:function(n,r){var s=this.param.keeps,i=this.param.uniqueIds.length;i<=s?(n=0,r=this.getLastIndex()):r-n<s-1&&(n=r-s+1),this.range.start!==n&&this.updateRange(n,r)}},{key:"updateRange",value:function(n,r){this.range.start=n,this.range.end=r,this.range.padFront=this.getPadFront(),this.range.padBehind=this.getPadBehind(),this.callUpdate(this.getRange())}},{key:"getEndByStart",value:function(n){var r=n+this.param.keeps-1,s=Math.min(r,this.getLastIndex());return s}},{key:"getPadFront",value:function(){return this.isFixedType()?this.fixedSizeValue*this.range.start:this.getIndexOffset(this.range.start)}},{key:"getPadBehind",value:function(){var n=this.range.end,r=this.getLastIndex();return this.isFixedType()?(r-n)*this.fixedSizeValue:this.lastCalcIndex===r?this.getIndexOffset(r)-this.getIndexOffset(n):(r-n)*this.getEstimateSize()}},{key:"getEstimateSize",value:function(){return this.isFixedType()?this.fixedSizeValue:this.firstRangeAverageSize||this.param.estimateSize}}]),t}(),B0={dataKey:{type:[String,Function],required:!0},dataSources:{type:Array,required:!0,default:function(){return[]}},dataComponent:{type:[Object,Function],required:!0},keeps:{type:Number,default:30},extraProps:{type:Object},estimateSize:{type:Number,default:50},direction:{type:String,default:"vertical"},start:{type:Number,default:0},offset:{type:Number,default:0},topThreshold:{type:Number,default:0},bottomThreshold:{type:Number,default:0},pageMode:{type:Boolean,default:!1},rootTag:{type:String,default:"div"},wrapTag:{type:String,default:"div"},wrapClass:{type:String,default:"wrap"},wrapStyle:{type:Object},itemTag:{type:String,default:"div"},itemClass:{type:String,default:""},itemClassAdd:{type:Function},itemStyle:{type:Object},headerTag:{type:String,default:"div"},headerClass:{type:String,default:""},headerStyle:{type:Object},footerTag:{type:String,default:"div"},footerClass:{type:String,default:""},footerStyle:{type:Object},itemScopedSlots:{type:Object}},$0={index:{type:Number},event:{type:String},tag:{type:String},horizontal:{type:Boolean},source:{type:Object},component:{type:[Object,Function]},uniqueKey:{type:[String,Number]},extraProps:{type:Object},scopedSlots:{type:Object}},j0={event:{type:String},uniqueKey:{type:String},tag:{type:String},horizontal:{type:Boolean}},Bm=function(e,n,r){var s=null,i=be(function(){return e.horizontal?"offsetWidth":"offsetHeight"}),o=function(){return n.value?n.value[i.value]:0},a=function(){var l=e.event,u=e.uniqueKey,h=e.hasInitial;r(l,u,o(),h)};Hr(function(){typeof ResizeObserver<"u"&&(s=new ResizeObserver(function(){a()}),n.value&&s.observe(n.value))}),cm(function(){a()}),Hs(function(){s&&(s.disconnect(),s=null)})},q0=xn({name:"VirtualListItem",props:$0,emits:["itemResize"],setup:function(e,n){var r=n.emit,s=Le(null);return Bm(e,s,r),function(){var i=e.tag,o=e.component,a=e.extraProps,c=a===void 0?{}:a,l=e.index,u=e.source,h=e.scopedSlots,d=h===void 0?{}:h,p=e.uniqueKey,y=qo(qo({},c),{},{source:u,index:l});return ae(i,{key:p,ref:s},{default:function(){return[ae(o,qo(qo({},y),{},{scopedSlots:d}),null)]}})}}}),Vf=xn({name:"VirtualListSlot",props:j0,emits:["slotResize"],setup:function(e,n){var r=n.slots,s=n.emit,i=Le(null);return Bm(e,i,s),function(){var o,a=e.tag,c=e.uniqueKey;return ae(a,{ref:i,key:c},{default:function(){return[(o=r.default)===null||o===void 0?void 0:o.call(r)]}})}}}),Si;(function(t){t.ITEM="itemResize",t.SLOT="slotResize"})(Si||(Si={}));var fs;(function(t){t.HEADER="thead",t.FOOTER="tfoot"})(fs||(fs={}));var z0=xn({name:"VirtualList",props:B0,setup:function(e,n){var r=n.emit,s=n.slots,i=n.expose,o=e.direction==="horizontal",a=o?"scrollLeft":"scrollTop",c=Le(null),l=Le(),u=Le(null),h;Ht(function(){return e.dataSources.length},function(){h.updateParam("uniqueIds",x()),h.handleDataSourcesChange()}),Ht(function(){return e.keeps},function(fe){h.updateParam("keeps",fe),h.handleSlotSizeChange()}),Ht(function(){return e.start},function(fe){J(fe)}),Ht(function(){return e.offset},function(fe){return re(fe)});var d=function(D){return h.sizes.get(D)},p=function(){return e.pageMode?document.documentElement[a]||document.body[a]:l.value?Math.ceil(l.value[a]):0},y=function(){var D=o?"clientWidth":"clientHeight";return e.pageMode?document.documentElement[D]||document.body[D]:l.value?Math.ceil(l.value[D]):0},E=function(){var D=o?"scrollWidth":"scrollHeight";return e.pageMode?document.documentElement[D]||document.body[D]:l.value?Math.ceil(l.value[D]):0},A=function(D,P,w,M){r("scroll",M,h.getRange()),h.isFront()&&e.dataSources.length&&D-e.topThreshold<=0?r("totop"):h.isBehind()&&D+P+e.bottomThreshold>=w&&r("tobottom")},C=function(D){var P=p(),w=y(),M=E();P<0||P+w>M+1||!M||(h.handleScroll(P),A(P,w,M,D))},x=function(){var D=e.dataKey,P=e.dataSources,w=P===void 0?[]:P;return w.map(function(M){return typeof D=="function"?D(M):M[D]})},z=function(D){c.value=D},L=function(){h=new U0({slotHeaderSize:0,slotFooterSize:0,keeps:e.keeps,estimateSize:e.estimateSize,buffer:Math.round(e.keeps/3),uniqueIds:x()},z),c.value=h.getRange()},J=function(D){if(D>=e.dataSources.length-1)Y();else{var P=h.getOffset(D);re(P)}},re=function(D){e.pageMode?(document.body[a]=D,document.documentElement[a]=D):l.value&&(l.value[a]=D)},Te=function(){for(var D=[],P=c.value,w=P.start,M=P.end,O=e.dataSources,ne=e.dataKey,$=e.itemClass,me=e.itemTag,ye=e.itemStyle,Ie=e.extraProps,Oe=e.dataComponent,Fe=e.itemScopedSlots,Se=w;Se<=M;Se++){var T=O[Se];if(T){var j=typeof ne=="function"?ne(T):T[ne];typeof j=="string"||typeof j=="number"?D.push(ae(q0,{index:Se,tag:me,event:Si.ITEM,horizontal:o,uniqueKey:j,source:T,extraProps:Ie,component:Oe,scopedSlots:Fe,style:ye,class:"".concat($).concat(e.itemClassAdd?" "+e.itemClassAdd(Se):""),onItemResize:q},null)):console.warn("Cannot get the data-key '".concat(ne,"' from data-sources."))}else console.warn("Cannot get the index '".concat(Se,"' from data-sources."))}return D},q=function(D,P){h.saveSize(D,P),r("resized",D,P)},Q=function(D,P,w){D===fs.HEADER?h.updateParam("slotHeaderSize",P):D===fs.FOOTER&&h.updateParam("slotFooterSize",P),w&&h.handleSlotSizeChange()},Y=function fe(){if(u.value){var D=u.value[o?"offsetLeft":"offsetTop"];re(D),setTimeout(function(){p()+y()<E()&&fe()},3)}},oe=function(){if(l.value){var D=l.value.getBoundingClientRect(),P=l.value.ownerDocument.defaultView,w=o?D.left+P.pageXOffset:D.top+P.pageYOffset;h.updateParam("slotHeaderSize",w)}},He=function(){return h.sizes.size};return am(function(){L()}),im(function(){re(h.offset)}),Hr(function(){e.start?J(e.start):e.offset&&re(e.offset),e.pageMode&&(oe(),document.addEventListener("scroll",C,{passive:!1}))}),Hs(function(){h.destroy(),e.pageMode&&document.removeEventListener("scroll",C)}),i({scrollToBottom:Y,getSizes:He,getSize:d,getOffset:p,getScrollSize:E,getClientSize:y,scrollToOffset:re,scrollToIndex:J}),function(){var fe=e.pageMode,D=e.rootTag,P=e.wrapTag,w=e.wrapClass,M=e.wrapStyle,O=e.headerTag,ne=e.headerClass,$=e.headerStyle,me=e.footerTag,ye=e.footerClass,Ie=e.footerStyle,Oe=c.value,Fe=Oe.padFront,Se=Oe.padBehind,T={padding:o?"0px ".concat(Se,"px 0px ").concat(Fe,"px"):"".concat(Fe,"px 0px ").concat(Se,"px")},j=M?Object.assign({},M,T):T,F=s.header,H=s.footer;return ae(D,{ref:l,onScroll:!fe&&C},{default:function(){return[F&&ae(Vf,{class:ne,style:$,tag:O,event:Si.SLOT,uniqueKey:fs.HEADER,onSlotResize:Q},{default:function(){return[F()]}}),ae(P,{class:w,style:j},{default:function(){return[Te()]}}),H&&ae(Vf,{class:ye,style:Ie,tag:me,event:Si.SLOT,uniqueKey:fs.FOOTER,onSlotResize:Q},{default:function(){return[H()]}}),ae("div",{ref:u,style:{width:o?"0px":"100%",height:o?"100%":"0px"}},null)]}})}}});function $m(t){return eh()?(Mg(t),!0):!1}function Ps(t){return typeof t=="function"?t():ht(t)}const H0=typeof window<"u"&&typeof document<"u",K0=Object.prototype.toString,W0=t=>K0.call(t)==="[object Object]",jm=()=>{};function G0(t,e){function n(...r){return new Promise((s,i)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(s).catch(i)})}return n}const qm=t=>t();function Q0(t=qm){const e=Le(!0);function n(){e.value=!1}function r(){e.value=!0}const s=(...i)=>{e.value&&t(...i)};return{isActive:ic(e),pause:n,resume:r,eventFilter:s}}function Y0(...t){if(t.length!==1)return aI(...t);const e=t[0];return typeof e=="function"?ic(rI(()=>({get:e,set:jm}))):Le(e)}function J0(t,e,n={}){const{eventFilter:r=qm,...s}=n;return Ht(t,G0(r,e),s)}function X0(t,e,n={}){const{eventFilter:r,...s}=n,{eventFilter:i,pause:o,resume:a,isActive:c}=Q0(r);return{stop:J0(t,e,{...s,eventFilter:i}),pause:o,resume:a,isActive:c}}function Z0(t,e=!0){Tm()?Hr(t):e?t():zr(t)}function eA(t=!1,e={}){const{truthyValue:n=!0,falsyValue:r=!1}=e,s=We(t),i=Le(t);function o(a){if(arguments.length)return i.value=a,i.value;{const c=Ps(n);return i.value=i.value===c?Ps(r):c,i.value}}return s?o:[i,o]}function zm(t){var e;const n=Ps(t);return(e=n==null?void 0:n.$el)!=null?e:n}const qi=H0?window:void 0;function xf(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=qi):[e,n,r,s]=t,!e)return jm;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d,p)=>(u.addEventListener(h,d,p),()=>u.removeEventListener(h,d,p)),c=Ht(()=>[zm(e),Ps(s)],([u,h])=>{if(o(),!u)return;const d=W0(h)?{...h}:h;i.push(...n.flatMap(p=>r.map(y=>a(u,p,y,d))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return $m(l),l}function tA(){const t=Le(!1);return Tm()&&Hr(()=>{t.value=!0}),t}function nA(t){const e=tA();return be(()=>(e.value,!!t()))}function rA(t,e={}){const{window:n=qi}=e,r=nA(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const i=Le(!1),o=l=>{i.value=l.matches},a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",o):s.removeListener(o))},c=Ei(()=>{r.value&&(a(),s=n.matchMedia(Ps(t)),"addEventListener"in s?s.addEventListener("change",o):s.addListener(o),i.value=s.matches)});return $m(()=>{c(),a(),s=void 0}),i}const zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ho="__vueuse_ssr_handlers__",sA=iA();function iA(){return Ho in zo||(zo[Ho]=zo[Ho]||{}),zo[Ho]}function Hm(t,e){return sA[t]||e}function oA(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const aA={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Lf="vueuse-storage";function cA(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:l=!1,shallow:u,window:h=qi,eventFilter:d,onError:p=q=>{console.error(q)}}=r,y=(u?Wg:Le)(e);if(!n)try{n=Hm("getDefaultStorage",()=>{var q;return(q=qi)==null?void 0:q.localStorage})()}catch(q){p(q)}if(!n)return y;const E=Ps(e),A=oA(E),C=(s=r.serializer)!=null?s:aA[A],{pause:x,resume:z}=X0(y,()=>L(y.value),{flush:i,deep:o,eventFilter:d});return h&&a&&(xf(h,"storage",Te),xf(h,Lf,re)),Te(),y;function L(q){try{if(q==null)n.removeItem(t);else{const Q=C.write(q),Y=n.getItem(t);Y!==Q&&(n.setItem(t,Q),h&&h.dispatchEvent(new CustomEvent(Lf,{detail:{key:t,oldValue:Y,newValue:Q,storageArea:n}})))}}catch(Q){p(Q)}}function J(q){const Q=q?q.newValue:n.getItem(t);if(Q==null)return c&&E!==null&&n.setItem(t,C.write(E)),E;if(!q&&l){const Y=C.read(Q);return typeof l=="function"?l(Y,E):A==="object"&&!Array.isArray(Y)?{...E,...Y}:Y}else return typeof Q!="string"?Q:C.read(Q)}function re(q){Te(q.detail)}function Te(q){if(!(q&&q.storageArea!==n)){if(q&&q.key==null){y.value=E;return}if(!(q&&q.key!==t)){x();try{(q==null?void 0:q.newValue)!==C.write(y.value)&&(y.value=J(q))}catch(Q){p(Q)}finally{q?zr(z):z()}}}}}function lA(t){return rA("(prefers-color-scheme: dark)",t)}function uA(t={}){const{selector:e="html",attribute:n="class",initialValue:r="auto",window:s=qi,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:c,emitAuto:l,disableTransition:u=!0}=t,h={auto:"",light:"light",dark:"dark",...t.modes||{}},d=lA({window:s}),p=be(()=>d.value?"dark":"light"),y=c||(o==null?Y0(r):cA(o,r,i,{window:s,listenToStorageChanges:a})),E=be(()=>y.value==="auto"?p.value:y.value),A=Hm("updateHTMLAttrs",(L,J,re)=>{const Te=typeof L=="string"?s==null?void 0:s.document.querySelector(L):zm(L);if(!Te)return;let q;if(u){q=s.document.createElement("style");const Q="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";q.appendChild(document.createTextNode(Q)),s.document.head.appendChild(q)}if(J==="class"){const Q=re.split(/\s/g);Object.values(h).flatMap(Y=>(Y||"").split(/\s/g)).filter(Boolean).forEach(Y=>{Q.includes(Y)?Te.classList.add(Y):Te.classList.remove(Y)})}else Te.setAttribute(J,re);u&&(s.getComputedStyle(q).opacity,document.head.removeChild(q))});function C(L){var J;A(e,n,(J=h[L])!=null?J:L)}function x(L){t.onChanged?t.onChanged(L,C):C(L)}Ht(E,x,{flush:"post",immediate:!0}),Z0(()=>x(E.value));const z=be({get(){return l?y.value:E.value},set(L){y.value=L}});try{return Object.assign(z,{store:y,system:p,state:E})}catch{return z}}function hA(t={}){const{valueDark:e="dark",valueLight:n=""}=t,r=uA({...t,onChanged:(i,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,i==="dark",o,i):o(i)},modes:{dark:e,light:n}});return be({get(){return r.value==="dark"},set(i){const o=i?"dark":"light";r.system.value===o?r.value="auto":r.value=o}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Km(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new fA;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pA=function(t){const e=Km(t);return Wm.encodeByteArray(e,!0)},Ra=function(t){return pA(t).replace(/\./g,"")},Gm=function(t){try{return Wm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=()=>gA().__FIREBASE_DEFAULTS__,_A=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gm(t[1]);return e&&JSON.parse(e)},vh=()=>{try{return mA()||_A()||yA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qm=t=>{var e,n;return(n=(e=vh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vA=t=>{const e=Qm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ym=()=>{var t;return(t=vh())===null||t===void 0?void 0:t.config},Jm=t=>{var e;return(e=vh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ra(JSON.stringify(n)),Ra(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function wA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SA(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RA(){try{return typeof indexedDB=="object"}catch{return!1}}function bA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CA,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?PA(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Un(s,a,r)}}function PA(t,e){return t.replace(OA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const OA=/\{\$([^}]+)}/g;function kA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ba(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ff(i)&&Ff(o)){if(!ba(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ff(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DA(t,e){const n=new NA(t,e);return n.subscribe.bind(n)}class NA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Il),s.error===void 0&&(s.error=Il),s.complete===void 0&&(s.complete=Il);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Il(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new EA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LA(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xA(t){return t===wr?void 0:t}function LA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const UA={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},BA=Re.INFO,$A={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},jA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$A[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eh{constructor(e){this.name=e,this._logLevel=BA,this._logHandler=jA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const qA=(t,e)=>e.some(n=>t instanceof n);let Uf,Bf;function zA(){return Uf||(Uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HA(){return Bf||(Bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xm=new WeakMap,pu=new WeakMap,Zm=new WeakMap,wl=new WeakMap,Th=new WeakMap;function KA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xm.set(n,t)}).catch(()=>{}),Th.set(e,t),e}function WA(t){if(pu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pu.set(t,e)}let gu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GA(t){gu=t(gu)}function QA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Al(this),e,...n);return Zm.set(r,e.sort?e.sort():[e]),sr(r)}:HA().includes(t)?function(...e){return t.apply(Al(this),e),sr(Xm.get(this))}:function(...e){return sr(t.apply(Al(this),e))}}function YA(t){return typeof t=="function"?QA(t):(t instanceof IDBTransaction&&WA(t),qA(t,zA())?new Proxy(t,gu):t)}function sr(t){if(t instanceof IDBRequest)return KA(t);if(wl.has(t))return wl.get(t);const e=YA(t);return e!==t&&(wl.set(t,e),Th.set(e,t)),e}const Al=t=>Th.get(t);function JA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=sr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(sr(o.result),c.oldVersion,c.newVersion,sr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const XA=["get","getKey","getAll","getAllKeys","count"],ZA=["put","add","delete","clear"],Sl=new Map;function $f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sl.get(e))return Sl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ZA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||XA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Sl.set(e,i),i}GA(t=>({...t,get:(e,n,r)=>$f(e,n)||t.get(e,n,r),has:(e,n)=>!!$f(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mu="@firebase/app",jf="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Eh("@firebase/app"),nS="@firebase/app-compat",rS="@firebase/analytics-compat",sS="@firebase/analytics",iS="@firebase/app-check-compat",oS="@firebase/app-check",aS="@firebase/auth",cS="@firebase/auth-compat",lS="@firebase/database",uS="@firebase/database-compat",hS="@firebase/functions",dS="@firebase/functions-compat",fS="@firebase/installations",pS="@firebase/installations-compat",gS="@firebase/messaging",mS="@firebase/messaging-compat",_S="@firebase/performance",yS="@firebase/performance-compat",vS="@firebase/remote-config",ES="@firebase/remote-config-compat",TS="@firebase/storage",IS="@firebase/storage-compat",wS="@firebase/firestore",AS="@firebase/firestore-compat",SS="firebase",RS="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="[DEFAULT]",bS={[mu]:"fire-core",[nS]:"fire-core-compat",[sS]:"fire-analytics",[rS]:"fire-analytics-compat",[oS]:"fire-app-check",[iS]:"fire-app-check-compat",[aS]:"fire-auth",[cS]:"fire-auth-compat",[lS]:"fire-rtdb",[uS]:"fire-rtdb-compat",[hS]:"fire-fn",[dS]:"fire-fn-compat",[fS]:"fire-iid",[pS]:"fire-iid-compat",[gS]:"fire-fcm",[mS]:"fire-fcm-compat",[_S]:"fire-perf",[yS]:"fire-perf-compat",[vS]:"fire-rc",[ES]:"fire-rc-compat",[TS]:"fire-gcs",[IS]:"fire-gcs-compat",[wS]:"fire-fst",[AS]:"fire-fst-compat","fire-js":"fire-js",[SS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Map,yu=new Map;function CS(t,e){try{t.container.addComponent(e)}catch(n){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(yu.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;yu.set(e,t);for(const n of Ca.values())CS(n,t);return!0}function Ih(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ir=new uo("app","Firebase",PS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=RS;function e_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_u,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(n||(n=Ym()),!n)throw ir.create("no-options");const i=Ca.get(s);if(i){if(ba(n,i.options)&&ba(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new FA(s);for(const c of yu.values())o.addComponent(c);const a=new OS(n,r,o);return Ca.set(s,a),a}function t_(t=_u){const e=Ca.get(t);if(!e&&t===_u&&Ym())return e_();if(!e)throw ir.create("no-app",{appName:t});return e}function or(t,e,n){var r;let s=(r=bS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(a.join(" "));return}Os(new Lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="firebase-heartbeat-database",DS=1,zi="firebase-heartbeat-store";let Rl=null;function n_(){return Rl||(Rl=JA(kS,DS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zi)}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),Rl}async function NS(t){try{return await(await n_()).transaction(zi).objectStore(zi).get(r_(t))}catch(e){if(e instanceof Un)Fr.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fr.warn(n.message)}}}async function qf(t,e){try{const r=(await n_()).transaction(zi,"readwrite");await r.objectStore(zi).put(e,r_(t)),await r.done}catch(n){if(n instanceof Un)Fr.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fr.warn(r.message)}}}function r_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=1024,VS=30*24*60*60*1e3;class xS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=VS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zf(),{heartbeatsToSend:n,unsentEntries:r}=LS(this._heartbeatsCache.heartbeats),s=Ra(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zf(){return new Date().toISOString().substring(0,10)}function LS(t,e=MS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Hf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Hf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RA()?bA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await NS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hf(t){return Ra(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t){Os(new Lr("platform-logger",e=>new eS(e),"PRIVATE")),Os(new Lr("heartbeat",e=>new xS(e),"PRIVATE")),or(mu,jf,t),or(mu,jf,"esm2017"),or("fire-js","")}US("");var BS="firebase",$S="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or(BS,$S,"app");var jS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,wh=wh||{},de=jS||self;function _c(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function fo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function qS(t){return Object.prototype.hasOwnProperty.call(t,bl)&&t[bl]||(t[bl]=++zS)}var bl="closure_uid_"+(1e9*Math.random()>>>0),zS=0;function HS(t,e,n){return t.call.apply(t.bind,arguments)}function KS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=HS:vt=KS,vt.apply(null,arguments)}function Ko(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ct(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function fr(){this.s=this.s,this.o=this.o}var WS=0;fr.prototype.s=!1;fr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),WS!=0)&&qS(this)};fr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const s_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ah(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Kf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_c(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var GS=function(){if(!de.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{de.addEventListener("test",()=>{},e),de.removeEventListener("test",()=>{},e)}catch{}return t}();function Hi(t){return/^[\s\xa0]*$/.test(t)}function yc(){var t=de.navigator;return t&&(t=t.userAgent)?t:""}function hn(t){return yc().indexOf(t)!=-1}function Sh(t){return Sh[" "](t),t}Sh[" "]=function(){};function QS(t,e){var n=$R;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var YS=hn("Opera"),ks=hn("Trident")||hn("MSIE"),i_=hn("Edge"),vu=i_||ks,o_=hn("Gecko")&&!(yc().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge"))&&!(hn("Trident")||hn("MSIE"))&&!hn("Edge"),JS=yc().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge");function a_(){var t=de.document;return t?t.documentMode:void 0}var Eu;e:{var Cl="",Pl=function(){var t=yc();if(o_)return/rv:([^\);]+)(\)|;)/.exec(t);if(i_)return/Edge\/([\d\.]+)/.exec(t);if(ks)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(JS)return/WebKit\/(\S+)/.exec(t);if(YS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Pl&&(Cl=Pl?Pl[1]:""),ks){var Ol=a_();if(Ol!=null&&Ol>parseFloat(Cl)){Eu=String(Ol);break e}}Eu=Cl}var Tu;if(de.document&&ks){var Wf=a_();Tu=Wf||parseInt(Eu,10)||void 0}else Tu=void 0;var XS=Tu;function Ki(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(o_){e:{try{Sh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ZS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ki.$.h.call(this)}}ct(Ki,Et);var ZS={2:"touch",3:"pen",4:"mouse"};Ki.prototype.h=function(){Ki.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var po="closure_listenable_"+(1e6*Math.random()|0),eR=0;function tR(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++eR,this.fa=this.ia=!1}function vc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Rh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function nR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function c_(t){const e={};for(const n in t)e[n]=t[n];return e}const Gf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function l_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Gf.length;i++)n=Gf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ec(t){this.src=t,this.g={},this.h=0}Ec.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=wu(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new tR(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Iu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=s_(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(vc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var bh="closure_lm_"+(1e6*Math.random()|0),kl={};function u_(t,e,n,r,s){if(r&&r.once)return d_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)u_(t,e[i],n,r,s);return null}return n=Oh(n),t&&t[po]?t.O(e,n,fo(r)?!!r.capture:!!r,s):h_(t,e,n,!1,r,s)}function h_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=fo(s)?!!s.capture:!!s,a=Ph(t);if(a||(t[bh]=a=new Ec(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=rR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)GS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(p_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rR(){function t(n){return e.call(t.src,t.listener,n)}const e=sR;return t}function d_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)d_(t,e[i],n,r,s);return null}return n=Oh(n),t&&t[po]?t.P(e,n,fo(r)?!!r.capture:!!r,s):h_(t,e,n,!0,r,s)}function f_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)f_(t,e[i],n,r,s);else r=fo(r)?!!r.capture:!!r,n=Oh(n),t&&t[po]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=wu(i,n,r,s),-1<n&&(vc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ph(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wu(e,n,r,s)),(n=-1<t?e[t]:null)&&Ch(n))}function Ch(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[po])Iu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(p_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ph(e))?(Iu(n,t),n.h==0&&(n.src=null,e[bh]=null)):vc(t)}}}function p_(t){return t in kl?kl[t]:kl[t]="on"+t}function sR(t,e){if(t.fa)t=!0;else{e=new Ki(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ch(t),t=n.call(r,e)}return t}function Ph(t){return t=t[bh],t instanceof Ec?t:null}var Dl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oh(t){return typeof t=="function"?t:(t[Dl]||(t[Dl]=function(e){return t.handleEvent(e)}),t[Dl])}function at(){fr.call(this),this.i=new Ec(this),this.S=this,this.J=null}ct(at,fr);at.prototype[po]=!0;at.prototype.removeEventListener=function(t,e,n,r){f_(this,t,e,n,r)};function ft(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var s=e;e=new Et(r,t),l_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Wo(o,r,!0,e)&&s}if(o=e.g=t,s=Wo(o,r,!0,e)&&s,s=Wo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Wo(o,r,!1,e)&&s}at.prototype.N=function(){if(at.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)vc(n[r]);delete t.g[e],t.h--}}this.J=null};at.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};at.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Wo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Iu(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var kh=de.JSON.stringify;class iR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function oR(){var t=Dh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class aR{constructor(){this.h=this.g=null}add(e,n){const r=g_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var g_=new iR(()=>new cR,t=>t.reset());class cR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function uR(t){de.setTimeout(()=>{throw t},0)}let Wi,Gi=!1,Dh=new aR,m_=()=>{const t=de.Promise.resolve(void 0);Wi=()=>{t.then(hR)}};var hR=()=>{for(var t;t=oR();){try{t.h.call(t.g)}catch(n){uR(n)}var e=g_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gi=!1};function Tc(t,e){at.call(this),this.h=t||1,this.g=e||de,this.j=vt(this.qb,this),this.l=Date.now()}ct(Tc,at);K=Tc.prototype;K.ga=!1;K.T=null;K.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ft(this,"tick"),this.ga&&(Nh(this),this.start()))}};K.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Nh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}K.N=function(){Tc.$.N.call(this),Nh(this),delete this.g};function Mh(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:de.setTimeout(t,e||0)}function __(t){t.g=Mh(()=>{t.g=null,t.i&&(t.i=!1,__(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dR extends fr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:__(this)}N(){super.N(),this.g&&(de.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(t){fr.call(this),this.h=t,this.g={}}ct(Qi,fr);var Qf=[];function y_(t,e,n,r){Array.isArray(n)||(n&&(Qf[0]=n.toString()),n=Qf);for(var s=0;s<n.length;s++){var i=u_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function v_(t){Rh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ch(e)},t),t.g={}}Qi.prototype.N=function(){Qi.$.N.call(this),v_(this)};Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ic(){this.g=!0}Ic.prototype.Ea=function(){this.g=!1};function fR(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function pR(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function ps(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+mR(t,n)+(r?" "+r:"")})}function gR(t,e){t.info(function(){return"TIMEOUT: "+e})}Ic.prototype.info=function(){};function mR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return kh(n)}catch{return e}}var Kr={},Yf=null;function wc(){return Yf=Yf||new at}Kr.Ta="serverreachability";function E_(t){Et.call(this,Kr.Ta,t)}ct(E_,Et);function Yi(t){const e=wc();ft(e,new E_(e))}Kr.STAT_EVENT="statevent";function T_(t,e){Et.call(this,Kr.STAT_EVENT,t),this.stat=e}ct(T_,Et);function Ct(t){const e=wc();ft(e,new T_(e,t))}Kr.Ua="timingevent";function I_(t,e){Et.call(this,Kr.Ua,t),this.size=e}ct(I_,Et);function go(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return de.setTimeout(function(){t()},e)}var Ac={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},w_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Vh(){}Vh.prototype.h=null;function Jf(t){return t.h||(t.h=t.i())}function A_(){}var mo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xh(){Et.call(this,"d")}ct(xh,Et);function Lh(){Et.call(this,"c")}ct(Lh,Et);var Au;function Sc(){}ct(Sc,Vh);Sc.prototype.g=function(){return new XMLHttpRequest};Sc.prototype.i=function(){return{}};Au=new Sc;function _o(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Qi(this),this.P=_R,t=vu?125:void 0,this.V=new Tc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new S_}function S_(){this.i=null,this.g="",this.h=!1}var _R=45e3,Su={},Pa={};K=_o.prototype;K.setTimeout=function(t){this.P=t};function Ru(t,e,n){t.L=1,t.v=bc(kn(e)),t.s=n,t.S=!0,R_(t,null)}function R_(t,e){t.G=Date.now(),yo(t),t.A=kn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),M_(n.i,"t",r),t.C=0,n=t.l.J,t.h=new S_,t.g=ty(t.l,n?e:null,!t.s),0<t.O&&(t.M=new dR(vt(t.Pa,t,t.g),t.O)),y_(t.U,t.g,"readystatechange",t.nb),e=t.I?c_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Yi(),fR(t.j,t.u,t.A,t.m,t.W,t.s)}K.nb=function(t){t=t.target;const e=this.M;e&&dn(t)==3?e.l():this.Pa(t)};K.Pa=function(t){try{if(t==this.g)e:{const u=dn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||vu||this.g&&(this.h.h||this.g.ja()||tp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Yi(3):Yi(2)),Rc(this);var n=this.g.da();this.ca=n;t:if(b_(this)){var r=tp(this.g);t="";var s=r.length,i=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){br(this),Ri(this);var o="";break t}this.h.i=new de.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,pR(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hi(a)){var l=a;break t}}l=null}if(n=l)ps(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bu(this,n);else{this.i=!1,this.o=3,Ct(12),br(this),Ri(this);break e}}this.S?(C_(this,u,o),vu&&this.i&&u==3&&(y_(this.U,this.V,"tick",this.mb),this.V.start())):(ps(this.j,this.m,o,null),bu(this,o)),u==4&&br(this),this.i&&!this.J&&(u==4?J_(this.l,this):(this.i=!1,yo(this)))}else FR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ct(12)):(this.o=0,Ct(13)),br(this),Ri(this)}}}catch{}finally{}};function b_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function C_(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=yR(t,n),s==Pa){e==4&&(t.o=4,Ct(14),r=!1),ps(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Su){t.o=4,Ct(15),ps(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ps(t.j,t.m,s,null),bu(t,s);b_(t)&&s!=Pa&&s!=Su&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),qh(e),e.M=!0,Ct(11))):(ps(t.j,t.m,n,"[Invalid Chunked Response]"),br(t),Ri(t))}K.mb=function(){if(this.g){var t=dn(this.g),e=this.g.ja();this.C<e.length&&(Rc(this),C_(this,t,e),this.i&&t!=4&&yo(this))}};function yR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Pa:(n=Number(e.substring(n,r)),isNaN(n)?Su:(r+=1,r+n>e.length?Pa:(e=e.slice(r,r+n),t.C=r+n,e)))}K.cancel=function(){this.J=!0,br(this)};function yo(t){t.Y=Date.now()+t.P,P_(t,t.P)}function P_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=go(vt(t.lb,t),e)}function Rc(t){t.B&&(de.clearTimeout(t.B),t.B=null)}K.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(gR(this.j,this.A),this.L!=2&&(Yi(),Ct(17)),br(this),this.o=2,Ri(this)):P_(this,this.Y-t)};function Ri(t){t.l.H==0||t.J||J_(t.l,t)}function br(t){Rc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Nh(t.V),v_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function bu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Cu(n.i,t))){if(!t.K&&Cu(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Da(n),kc(n);else break e;jh(n),Ct(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=go(vt(n.ib,n),6e3));if(1>=L_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Cr(n,11)}else if((t.K||n.g==t)&&Da(n),!Hi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Fh(i,i.h),i.h=null))}if(r.F){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Be(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ey(r,r.J?r.pa:null,r.Y),o.K){F_(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Rc(a),yo(a)),r.g=o}else Q_(r);0<n.j.length&&Dc(n)}else l[0]!="stop"&&l[0]!="close"||Cr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Cr(n,7):$h(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Yi(4)}catch{}}function vR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ER(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(_c(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function O_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_c(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ER(t),r=vR(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var k_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Nr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Nr){this.h=t.h,Oa(this,t.j),this.s=t.s,this.g=t.g,ka(this,t.m),this.l=t.l;var e=t.i,n=new Ji;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xf(this,n),this.o=t.o}else t&&(e=String(t).match(k_))?(this.h=!1,Oa(this,e[1]||"",!0),this.s=gi(e[2]||""),this.g=gi(e[3]||"",!0),ka(this,e[4]),this.l=gi(e[5]||"",!0),Xf(this,e[6]||"",!0),this.o=gi(e[7]||"")):(this.h=!1,this.i=new Ji(null,this.h))}Nr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(mi(e,Zf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(mi(e,Zf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(mi(n,n.charAt(0)=="/"?AR:wR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",mi(n,RR)),t.join("")};function kn(t){return new Nr(t)}function Oa(t,e,n){t.j=n?gi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ka(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xf(t,e,n){e instanceof Ji?(t.i=e,bR(t.i,t.h)):(n||(e=mi(e,SR)),t.i=new Ji(e,t.h))}function Be(t,e,n){t.i.set(e,n)}function bc(t){return Be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function mi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,IR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function IR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Zf=/[#\/\?@]/g,wR=/[#\?:]/g,AR=/[#\?]/g,SR=/[#\?@]/g,RR=/#/g;function Ji(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pr(t){t.g||(t.g=new Map,t.h=0,t.i&&TR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=Ji.prototype;K.add=function(t,e){pr(this),this.i=null,t=Ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function D_(t,e){pr(t),e=Ws(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function N_(t,e){return pr(t),e=Ws(t,e),t.g.has(e)}K.forEach=function(t,e){pr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};K.ta=function(){pr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};K.Z=function(t){pr(this);let e=[];if(typeof t=="string")N_(this,t)&&(e=e.concat(this.g.get(Ws(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return pr(this),this.i=null,t=Ws(this,t),N_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function M_(t,e,n){D_(t,e),0<n.length&&(t.i=null,t.g.set(Ws(t,e),Ah(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bR(t,e){e&&!t.j&&(pr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(D_(this,r),M_(this,s,n))},t)),t.j=e}var CR=class{constructor(t,e){this.g=t,this.map=e}};function V_(t){this.l=t||PR,de.PerformanceNavigationTiming?(t=de.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(de.g&&de.g.Ka&&de.g.Ka()&&de.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var PR=10;function x_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function L_(t){return t.h?1:t.g?t.g.size:0}function Cu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fh(t,e){t.g?t.g.add(e):t.h=e}function F_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}V_.prototype.cancel=function(){if(this.i=U_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function U_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ah(t.i)}var OR=class{stringify(t){return de.JSON.stringify(t,void 0)}parse(t){return de.JSON.parse(t,void 0)}};function kR(){this.g=new OR}function DR(t,e,n){const r=n||"";try{O_(t,function(s,i){let o=s;fo(s)&&(o=kh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function NR(t,e){const n=new Ic;if(de.Image){const r=new Image;r.onload=Ko(Go,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ko(Go,n,r,"TestLoadImage: error",!1,e),r.onabort=Ko(Go,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ko(Go,n,r,"TestLoadImage: timeout",!1,e),de.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Go(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Cc(t){this.l=t.ec||null,this.j=t.ob||!1}ct(Cc,Vh);Cc.prototype.g=function(){return new Pc(this.l,this.j)};Cc.prototype.i=function(t){return function(){return t}}({});function Pc(t,e){at.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Uh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(Pc,at);var Uh=0;K=Pc.prototype;K.open=function(t,e){if(this.readyState!=Uh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Xi(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||de).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vo(this)),this.readyState=Uh};K.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xi(this)),this.g&&(this.readyState=3,Xi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof de.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;B_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function B_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}K.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vo(this):Xi(this),this.readyState==3&&B_(this)}};K.Za=function(t){this.g&&(this.response=this.responseText=t,vo(this))};K.Ya=function(t){this.g&&(this.response=t,vo(this))};K.ka=function(){this.g&&vo(this)};function vo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Xi(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Xi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Pc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var MR=de.JSON.parse;function Qe(t){at.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=$_,this.L=this.M=!1}ct(Qe,at);var $_="",VR=/^https?$/i,xR=["POST","PUT"];K=Qe.prototype;K.Oa=function(t){this.M=t};K.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Au.g(),this.C=this.u?Jf(this.u):Jf(Au),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){ep(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=de.FormData&&t instanceof de.FormData,!(0<=s_(xR,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{z_(this),0<this.B&&((this.L=LR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=Mh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ep(this,i)}};function LR(t){return ks&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.ua=function(){typeof wh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function ep(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,j_(t),Oc(t)}function j_(t){t.F||(t.F=!0,ft(t,"complete"),ft(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),Oc(this))};K.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oc(this,!0)),Qe.$.N.call(this)};K.La=function(){this.s||(this.G||this.v||this.l?q_(this):this.kb())};K.kb=function(){q_(this)};function q_(t){if(t.h&&typeof wh<"u"&&(!t.C[1]||dn(t)!=4||t.da()!=2)){if(t.v&&dn(t)==4)Mh(t.La,0,t);else if(ft(t,"readystatechange"),dn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(k_)[1]||null;!s&&de.self&&de.self.location&&(s=de.self.location.protocol.slice(0,-1)),r=!VR.test(s?s.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var i=2<dn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",j_(t)}}finally{Oc(t)}}}}function Oc(t,e){if(t.g){z_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function z_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(de.clearTimeout(t.A),t.A=null)}K.isActive=function(){return!!this.g};function dn(t){return t.g?t.g.readyState:0}K.da=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}};K.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),MR(e)}};function tp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case $_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function FR(t){const e={};t=(t.g&&2<=dn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Hi(t[r]))continue;var n=lR(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}nR(e,function(r){return r.join(", ")})}K.Ia=function(){return this.m};K.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function H_(t){let e="";return Rh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=H_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Be(t,e,n))}function ii(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function K_(t){this.Ga=0,this.j=[],this.l=new Ic,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ii("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ii("baseRetryDelayMs",5e3,t),this.hb=ii("retryDelaySeedMs",1e4,t),this.eb=ii("forwardChannelMaxRetries",2,t),this.xa=ii("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new V_(t&&t.concurrentRequestLimit),this.Ja=new kR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}K=K_.prototype;K.ra=8;K.H=1;function $h(t){if(W_(t),t.H==3){var e=t.W++,n=kn(t.I);if(Be(n,"SID",t.K),Be(n,"RID",e),Be(n,"TYPE","terminate"),Eo(t,n),e=new _o(t,t.l,e),e.L=2,e.v=bc(kn(n)),n=!1,de.navigator&&de.navigator.sendBeacon)try{n=de.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&de.Image&&(new Image().src=e.v,n=!0),n||(e.g=ty(e.l,null),e.g.ha(e.v)),e.G=Date.now(),yo(e)}Z_(t)}function kc(t){t.g&&(qh(t),t.g.cancel(),t.g=null)}function W_(t){kc(t),t.u&&(de.clearTimeout(t.u),t.u=null),Da(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&de.clearTimeout(t.m),t.m=null)}function Dc(t){if(!x_(t.i)&&!t.m){t.m=!0;var e=t.Na;Wi||m_(),Gi||(Wi(),Gi=!0),Dh.add(e,t),t.C=0}}function UR(t,e){return L_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=go(vt(t.Na,t,e),X_(t,t.C)),t.C++,!0)}K.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new _o(this,this.l,t);let i=this.s;if(this.U&&(i?(i=c_(i),l_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=G_(this,s,e),n=kn(this.I),Be(n,"RID",t),Be(n,"CVER",22),this.F&&Be(n,"X-HTTP-Session-Id",this.F),Eo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(H_(i)))+"&"+e:this.o&&Bh(n,this.o,i)),Fh(this.i,s),this.bb&&Be(n,"TYPE","init"),this.P?(Be(n,"$req",e),Be(n,"SID","null"),s.aa=!0,Ru(s,n,null)):Ru(s,n,e),this.H=2}}else this.H==3&&(t?np(this,t):this.j.length==0||x_(this.i)||np(this))};function np(t,e){var n;e?n=e.m:n=t.W++;const r=kn(t.I);Be(r,"SID",t.K),Be(r,"RID",n),Be(r,"AID",t.V),Eo(t,r),t.o&&t.s&&Bh(r,t.o,t.s),n=new _o(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=G_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Fh(t.i,n),Ru(n,r,e)}function Eo(t,e){t.na&&Rh(t.na,function(n,r){Be(e,r,n)}),t.h&&O_({},function(n,r){Be(e,r,n)})}function G_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?vt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{DR(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Q_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Wi||m_(),Gi||(Wi(),Gi=!0),Dh.add(e,t),t.A=0}}function jh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=go(vt(t.Ma,t),X_(t,t.A)),t.A++,!0)}K.Ma=function(){if(this.u=null,Y_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=go(vt(this.jb,this),t)}};K.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ct(10),kc(this),Y_(this))};function qh(t){t.B!=null&&(de.clearTimeout(t.B),t.B=null)}function Y_(t){t.g=new _o(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=kn(t.wa);Be(e,"RID","rpc"),Be(e,"SID",t.K),Be(e,"AID",t.V),Be(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Be(e,"TO",t.qa),Be(e,"TYPE","xmlhttp"),Eo(t,e),t.o&&t.s&&Bh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=bc(kn(e)),n.s=null,n.S=!0,R_(n,t)}K.ib=function(){this.v!=null&&(this.v=null,kc(this),jh(this),Ct(19))};function Da(t){t.v!=null&&(de.clearTimeout(t.v),t.v=null)}function J_(t,e){var n=null;if(t.g==e){Da(t),qh(t),t.g=null;var r=2}else if(Cu(t.i,e))n=e.F,F_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=wc(),ft(r,new I_(r,n)),Dc(t)}else Q_(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&UR(t,e)||r==2&&jh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Cr(t,5);break;case 4:Cr(t,10);break;case 3:Cr(t,6);break;default:Cr(t,2)}}}function X_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Cr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=vt(t.pb,t);n||(n=new Nr("//www.google.com/images/cleardot.gif"),de.location&&de.location.protocol=="http"||Oa(n,"https"),bc(n)),NR(n.toString(),r)}else Ct(2);t.H=0,t.h&&t.h.za(e),Z_(t),W_(t)}K.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ct(2)):(this.l.info("Failed to ping google.com"),Ct(1))};function Z_(t){if(t.H=0,t.ma=[],t.h){const e=U_(t.i);(e.length!=0||t.j.length!=0)&&(Kf(t.ma,e),Kf(t.ma,t.j),t.i.i.length=0,Ah(t.j),t.j.length=0),t.h.ya()}}function ey(t,e,n){var r=n instanceof Nr?kn(n):new Nr(n);if(r.g!="")e&&(r.g=e+"."+r.g),ka(r,r.m);else{var s=de.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Nr(null);r&&Oa(i,r),e&&(i.g=e),s&&ka(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Be(r,n,e),Be(r,"VER",t.ra),Eo(t,r),r}function ty(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Qe(new Cc({ob:!0})):new Qe(t.va),e.Oa(t.J),e}K.isActive=function(){return!!this.h&&this.h.isActive(this)};function ny(){}K=ny.prototype;K.Ba=function(){};K.Aa=function(){};K.za=function(){};K.ya=function(){};K.isActive=function(){return!0};K.Va=function(){};function Na(){if(ks&&!(10<=Number(XS)))throw Error("Environmental error: no available transport.")}Na.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){at.call(this),this.g=new K_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Hi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Hi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Gs(this)}ct(Bt,at);Bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ey(t,null,t.Y),Dc(t)};Bt.prototype.close=function(){$h(this.g)};Bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=kh(t),t=n);e.j.push(new CR(e.fb++,t)),e.H==3&&Dc(e)};Bt.prototype.N=function(){this.g.h=null,delete this.j,$h(this.g),delete this.g,Bt.$.N.call(this)};function ry(t){xh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ct(ry,xh);function sy(){Lh.call(this),this.status=1}ct(sy,Lh);function Gs(t){this.g=t}ct(Gs,ny);Gs.prototype.Ba=function(){ft(this.g,"a")};Gs.prototype.Aa=function(t){ft(this.g,new ry(t))};Gs.prototype.za=function(t){ft(this.g,new sy)};Gs.prototype.ya=function(){ft(this.g,"b")};function BR(){this.blockSize=-1}function Zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ct(Zt,BR);Zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Nl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Nl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Nl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Nl(this,r),s=0;break}}this.h=s,this.i+=e};Zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function xe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var $R={};function zh(t){return-128<=t&&128>t?QS(t,function(e){return new xe([e|0],0>e?-1:0)}):new xe([t|0],0>t?-1:0)}function fn(t){if(isNaN(t)||!isFinite(t))return Es;if(0>t)return dt(fn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Pu;return new xe(e,0)}function iy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return dt(iy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=fn(Math.pow(e,8)),r=Es,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=fn(Math.pow(e,i)),r=r.R(i).add(fn(o))):(r=r.R(n),r=r.add(fn(o)))}return r}var Pu=4294967296,Es=zh(0),Ou=zh(1),rp=zh(16777216);K=xe.prototype;K.ea=function(){if(zt(this))return-dt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Pu+r)*e,e*=Pu}return t};K.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Rn(this))return"0";if(zt(this))return"-"+dt(this).toString(t);for(var e=fn(Math.pow(t,6)),n=this,r="";;){var s=Va(n,e).g;n=Ma(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Rn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};K.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Rn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function zt(t){return t.h==-1}K.X=function(t){return t=Ma(this,t),zt(t)?-1:Rn(t)?0:1};function dt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new xe(n,~t.h).add(Ou)}K.abs=function(){return zt(this)?dt(this):this};K.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new xe(n,n[n.length-1]&-2147483648?-1:0)};function Ma(t,e){return t.add(dt(e))}K.R=function(t){if(Rn(this)||Rn(t))return Es;if(zt(this))return zt(t)?dt(this).R(dt(t)):dt(dt(this).R(t));if(zt(t))return dt(this.R(dt(t)));if(0>this.X(rp)&&0>t.X(rp))return fn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Qo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Qo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Qo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Qo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new xe(n,0)};function Qo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function oi(t,e){this.g=t,this.h=e}function Va(t,e){if(Rn(e))throw Error("division by zero");if(Rn(t))return new oi(Es,Es);if(zt(t))return e=Va(dt(t),e),new oi(dt(e.g),dt(e.h));if(zt(e))return e=Va(t,dt(e)),new oi(dt(e.g),e.h);if(30<t.g.length){if(zt(t)||zt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ou,r=e;0>=r.X(t);)n=sp(n),r=sp(r);var s=os(n,1),i=os(r,1);for(r=os(r,2),n=os(n,2);!Rn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=os(r,1),n=os(n,1)}return e=Ma(t,s.R(e)),new oi(s,e)}for(s=Es;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=fn(n),o=i.R(e);zt(o)||0<o.X(t);)n-=r,i=fn(n),o=i.R(e);Rn(i)&&(i=Ou),s=s.add(i),t=Ma(t,o)}return new oi(s,t)}K.gb=function(t){return Va(this,t).h};K.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new xe(n,this.h&t.h)};K.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new xe(n,this.h|t.h)};K.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new xe(n,this.h^t.h)};function sp(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new xe(n,t.h)}function os(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new xe(s,t.h)}Na.prototype.createWebChannel=Na.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;Ac.NO_ERROR=0;Ac.TIMEOUT=8;Ac.HTTP_ERROR=6;w_.COMPLETE="complete";A_.EventType=mo;mo.OPEN="a";mo.CLOSE="b";mo.ERROR="c";mo.MESSAGE="d";at.prototype.listen=at.prototype.O;Qe.prototype.listenOnce=Qe.prototype.P;Qe.prototype.getLastError=Qe.prototype.Sa;Qe.prototype.getLastErrorCode=Qe.prototype.Ia;Qe.prototype.getStatus=Qe.prototype.da;Qe.prototype.getResponseJson=Qe.prototype.Wa;Qe.prototype.getResponseText=Qe.prototype.ja;Qe.prototype.send=Qe.prototype.ha;Qe.prototype.setWithCredentials=Qe.prototype.Oa;Zt.prototype.digest=Zt.prototype.l;Zt.prototype.reset=Zt.prototype.reset;Zt.prototype.update=Zt.prototype.j;xe.prototype.add=xe.prototype.add;xe.prototype.multiply=xe.prototype.R;xe.prototype.modulo=xe.prototype.gb;xe.prototype.compare=xe.prototype.X;xe.prototype.toNumber=xe.prototype.ea;xe.prototype.toString=xe.prototype.toString;xe.prototype.getBits=xe.prototype.D;xe.fromNumber=fn;xe.fromString=iy;var jR=function(){return new Na},qR=function(){return wc()},Ml=Ac,zR=w_,HR=Kr,ip={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Yo=A_,KR=Qe,WR=Zt,Ts=xe;const op="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Eh("@firebase/firestore");function ai(){return Ur.logLevel}function ee(t,...e){if(Ur.logLevel<=Re.DEBUG){const n=e.map(Hh);Ur.debug(`Firestore (${Qs}): ${t}`,...n)}}function Dn(t,...e){if(Ur.logLevel<=Re.ERROR){const n=e.map(Hh);Ur.error(`Firestore (${Qs}): ${t}`,...n)}}function Ds(t,...e){if(Ur.logLevel<=Re.WARN){const n=e.map(Hh);Ur.warn(`Firestore (${Qs}): ${t}`,...n)}}function Hh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${Qs}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function qe(t,e){t||he()}function Ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class QR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YR{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string"),new oy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string"),new gt(e)}}class JR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new JR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(qe(typeof n.token=="string"),this.R=n.token,new ZR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=tb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function De(t,e){return t<e?-1:t>e?1:0}function Ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new et(0,0))}static max(){return new pe(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends Zi{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const nb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Zi{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return nb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new G(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new G(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new G(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new G(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie($e.fromString(e))}static fromName(e){return new ie($e.fromString(e).popFirst(5))}static empty(){return new ie($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new $e(e.slice()))}}function rb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new lr(s,ie.empty(),e)}function sb(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(pe.min(),ie.empty(),-1)}static max(){return new lr(pe.max(),ie.empty(),-1)}}function ib(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:De(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ab{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==ob)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Io(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Kh.ae=-1;function Nc(t){return t==null}function xa(t){return t===0&&1/t==-1/0}function cb(t){return typeof t=="number"&&Number.isInteger(t)&&!xa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jo(this.root,e,this.comparator,!0)}}class Jo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new cp(this.data.getIterator())}getIteratorFrom(e){return new cp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class cp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new Tt(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ly("Invalid base64 string: "+i):i}}(e);return new At(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const lb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(qe(!!t),typeof t=="string"){let e=0;const n=lb.exec(t);if(qe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Br(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gh(t){const e=t.mapValue.fields.__previous_value__;return Wh(e)?Gh(e):e}function eo(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class to{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new to("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof to&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wh(t)?4:hb(t)?9007199254740991:10:he()}function Tn(t,e){if(t===e)return!0;const n=$r(t);if(n!==$r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return eo(t).isEqual(eo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ur(s.timestampValue),a=ur(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Br(s.bytesValue).isEqual(Br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Xe(s.doubleValue),a=Xe(i.doubleValue);return o===a?xa(o)===xa(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(ap(o)!==ap(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Tn(o[c],a[c])))return!1;return!0}(t,e);default:return he()}}function no(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function Ms(t,e){if(t===e)return 0;const n=$r(t),r=$r(e);if(n!==r)return De(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return De(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Xe(i.integerValue||i.doubleValue),c=Xe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return lp(t.timestampValue,e.timestampValue);case 4:return lp(eo(t),eo(e));case 5:return De(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Br(i),c=Br(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=De(a[l],c[l]);if(u!==0)return u}return De(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=De(Xe(i.latitude),Xe(o.latitude));return a!==0?a:De(Xe(i.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ms(a[l],c[l]);if(u)return u}return De(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Xo.mapValue&&o===Xo.mapValue)return 0;if(i===Xo.mapValue)return 1;if(o===Xo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=De(c[h],u[h]);if(d!==0)return d;const p=Ms(a[c[h]],l[u[h]]);if(p!==0)return p}return De(c.length,u.length)}(t.mapValue,e.mapValue);default:throw he()}}function lp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return De(t,e);const n=ur(t),r=ur(e),s=De(n.seconds,r.seconds);return s!==0?s:De(n.nanos,r.nanos)}function Vs(t){return ku(t)}function ku(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ku(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ku(n.fields[o])}`;return s+"}"}(t.mapValue):he()}function up(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Du(t){return!!t&&"integerValue"in t}function Qh(t){return!!t&&"arrayValue"in t}function hp(t){return!!t&&"nullValue"in t}function dp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function la(t){return!!t&&"mapValue"in t}function bi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!la(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bi(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=bi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());la(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];la(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Wr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(bi(this.value))}}function uy(t){const e=[];return Wr(t.fields,(n,r)=>{const s=new yt([n]);if(la(r)){const i=uy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new mt(e,0,pe.min(),pe.min(),pe.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,pe.min(),pe.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,pe.min(),pe.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n){this.position=e,this.inclusive=n}}function fp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=Ms(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n="asc"){this.field=e,this.dir=n}}function db(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{}class Ze extends hy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pb(e,n,r):n==="array-contains"?new _b(e,r):n==="in"?new yb(e,r):n==="not-in"?new vb(e,r):n==="array-contains-any"?new Eb(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gb(e,r):new mb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ms(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.matchesComparison(Ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class en extends hy{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new en(e,n)}matches(e){return dy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function dy(t){return t.op==="and"}function fy(t){return fb(t)&&dy(t)}function fb(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function Nu(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(fy(t))return t.filters.map(e=>Nu(e)).join(",");{const e=t.filters.map(n=>Nu(n)).join(",");return`${t.op}(${e})`}}function py(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&py(o,s.filters[a]),!0):!1}(t,e):void he()}function gy(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(gy).join(" ,")+"}"}(t):"Filter"}class pb extends Ze{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class gb extends Ze{constructor(e,n){super(e,"in",n),this.keys=my("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mb extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=my("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function my(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class _b extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qh(n)&&no(n.arrayValue,this.value)}}class yb extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&no(this.value.arrayValue,n)}}class vb extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(no(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!no(this.value.arrayValue,n)}}class Eb extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>no(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function gp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Tb(t,e,n,r,s,i,o)}function Yh(t){const e=Ee(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vs(r)).join(",")),e.he=n}return e.he}function Jh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!db(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!py(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pp(t.startAt,e.startAt)&&pp(t.endAt,e.endAt)}function Mu(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Ib(t,e,n,r,s,i,o,a){return new Ys(t,e,n,r,s,i,o,a)}function Mc(t){return new Ys(t)}function mp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Xh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function _y(t){return t.collectionGroup!==null}function Ci(t){const e=Ee(t);if(e.Pe===null){e.Pe=[];const n=Vc(e),r=Xh(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Is(n)),e.Pe.push(new Is(yt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Is(yt.keyField(),i))}}}return e.Pe}function gn(t){const e=Ee(t);return e.Ie||(e.Ie=wb(e,Ci(t))),e.Ie}function wb(t,e){if(t.limitType==="F")return gp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Is(s.field,i)});const n=t.endAt?new La(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new La(t.startAt.position,t.startAt.inclusive):null;return gp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vu(t,e){e.getFirstInequalityField(),Vc(t);const n=t.filters.concat([e]);return new Ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fa(t,e,n){return new Ys(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xc(t,e){return Jh(gn(t),gn(e))&&t.limitType===e.limitType}function yy(t){return`${Yh(gn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gy(s)).join(", ")}]`),Nc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Vs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Vs(s)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function Lc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ie.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=fp(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ci(r),s)||r.endAt&&!function(o,a,c){const l=fp(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ci(r),s))}(t,e)}function Ab(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vy(t){return(e,n)=>{let r=!1;for(const s of Ci(t)){const i=Sb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Sb(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Ms(c,l):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Wr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return cy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=new Ge(ie.comparator);function Nn(){return Rb}const Ey=new Ge(ie.comparator);function _i(...t){let e=Ey;for(const n of t)e=e.insert(n.key,n);return e}function Ty(t){let e=Ey;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pr(){return Pi()}function Iy(){return Pi()}function Pi(){return new Js(t=>t.toString(),(t,e)=>t.isEqual(e))}const bb=new Ge(ie.comparator),Cb=new Tt(ie.comparator);function Ae(...t){let e=Cb;for(const n of t)e=e.add(n);return e}const Pb=new Tt(De);function Ob(){return Pb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xa(e)?"-0":e}}function Ay(t){return{integerValue:""+t}}function kb(t,e){return cb(e)?Ay(e):wy(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this._=void 0}}function Db(t,e,n){return t instanceof Ua?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wh(i)&&(i=Gh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof xs?Ry(t,e):t instanceof ro?by(t,e):function(s,i){const o=Sy(s,i),a=_p(o)+_p(s.Te);return Du(o)&&Du(s.Te)?Ay(a):wy(s.serializer,a)}(t,e)}function Nb(t,e,n){return t instanceof xs?Ry(t,e):t instanceof ro?by(t,e):n}function Sy(t,e){return t instanceof Ba?function(r){return Du(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ua extends Fc{}class xs extends Fc{constructor(e){super(),this.elements=e}}function Ry(t,e){const n=Cy(e);for(const r of t.elements)n.some(s=>Tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ro extends Fc{constructor(e){super(),this.elements=e}}function by(t,e){let n=Cy(e);for(const r of t.elements)n=n.filter(s=>!Tn(s,r));return{arrayValue:{values:n}}}class Ba extends Fc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function _p(t){return Xe(t.integerValue||t.doubleValue)}function Cy(t){return Qh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n){this.field=e,this.transform=n}}function Vb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof xs&&s instanceof xs||r instanceof ro&&s instanceof ro?Ns(r.elements,s.elements,Tn):r instanceof Ba&&s instanceof Ba?Tn(r.Te,s.Te):r instanceof Ua&&s instanceof Ua}(t.transform,e.transform)}class xb{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uc{}function Py(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zh(t.key,Wt.none()):new wo(t.key,t.data,Wt.none());{const n=t.data,r=Nt.empty();let s=new Tt(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new gr(t.key,r,new Ut(s.toArray()),Wt.none())}}function Lb(t,e,n){t instanceof wo?function(s,i,o){const a=s.value.clone(),c=vp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(s,i,o){if(!ua(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=vp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Oy(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oi(t,e,n,r){return t instanceof wo?function(i,o,a,c){if(!ua(i.precondition,o))return a;const l=i.value.clone(),u=Ep(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(i,o,a,c){if(!ua(i.precondition,o))return a;const l=Ep(i.fieldTransforms,c,o),u=o.data;return u.setAll(Oy(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ua(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Fb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Sy(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function yp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ns(r,s,(i,o)=>Vb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wo extends Uc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gr extends Uc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Oy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vp(t,e,n){const r=new Map;qe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Nb(o,a,n[s]))}return r}function Ep(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Db(i,o,e))}return r}class Zh extends Uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ub extends Uc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Lb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Iy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Py(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(n,r)=>yp(n,r))&&Ns(this.baseMutations,e.baseMutations,(n,r)=>yp(n,r))}}class ed{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){qe(e.mutations.length===r.length);let s=function(){return bb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ed(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,Ce;function qb(t){switch(t){default:return he();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function ky(t){if(t===void 0)return Dn("GRPC error has no .code"),R.UNKNOWN;switch(t){case Je.OK:return R.OK;case Je.CANCELLED:return R.CANCELLED;case Je.UNKNOWN:return R.UNKNOWN;case Je.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Je.INTERNAL:return R.INTERNAL;case Je.UNAVAILABLE:return R.UNAVAILABLE;case Je.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Je.NOT_FOUND:return R.NOT_FOUND;case Je.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Je.ABORTED:return R.ABORTED;case Je.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Je.DATA_LOSS:return R.DATA_LOSS;default:return he()}}(Ce=Je||(Je={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=new Ts([4294967295,4294967295],0);function Tp(t){const e=zb().encode(t),n=new WR;return n.update(e),new Uint8Array(n.digest())}function Ip(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ts([n,r],0),new Ts([s,i],0)]}class td{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yi(`Invalid padding: ${n}`);if(r<0)throw new yi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yi(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Ts.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Ts.fromNumber(r)));return s.compare(Hb)===1&&(s=new Ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Tp(e),[r,s]=Ip(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new td(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Tp(e),[r,s]=Ip(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bc(pe.min(),s,new Ge(De),Nn(),Ae())}}class Ao{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ao(r,n,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class Dy{constructor(e,n){this.targetId=e,this.ye=n}}class Ny{constructor(e,n,r=At.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wp{constructor(){this.we=0,this.Se=Sp(),this.be=At.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=Ae(),n=Ae(),r=Ae();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new Ao(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Sp()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class Kb{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Nn(),this.Ue=Ap(),this.We=new Ge(De)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Mu(i))if(r===0){const o=new ie(i.path);this.je(n,o,mt.newNoDocument(o,pe.min()))}else qe(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Br(r).toUint8Array()}catch(c){if(c instanceof ly)return Ds("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new td(o,s,i)}catch(c){return Ds(c instanceof yi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Mu(a.target)){const c=new ie(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,mt.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=Ae();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Bc(e,n,this.We,this.$e,r);return this.$e=Nn(),this.Ue=Ap(),this.We=new Ge(De),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new wp,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Tt(De),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new wp),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Ap(){return new Ge(ie.comparator)}function Sp(){return new Ge(ie.comparator)}const Wb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Gb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Qb=(()=>({and:"AND",or:"OR"}))();class Yb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xu(t,e){return t.useProto3Json||Nc(e)?e:{value:e}}function $a(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function My(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Jb(t,e){return $a(t,e.toTimestamp())}function mn(t){return qe(!!t),pe.fromTimestamp(function(n){const r=ur(n);return new et(r.seconds,r.nanos)}(t))}function nd(t,e){return function(r){return new $e(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Vy(t){const e=$e.fromString(t);return qe(Uy(e)),e}function Lu(t,e){return nd(t.databaseId,e.path)}function Vl(t,e){const n=Vy(e);if(n.get(1)!==t.databaseId.projectId)throw new G(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(xy(n))}function Fu(t,e){return nd(t.databaseId,e)}function Xb(t){const e=Vy(t);return e.length===4?$e.emptyPath():xy(e)}function Uu(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xy(t){return qe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rp(t,e,n){return{name:Lu(t,e),fields:n.value.mapValue.fields}}function Zb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(qe(u===void 0||typeof u=="string"),At.fromBase64String(u||"")):(qe(u===void 0||u instanceof Uint8Array),At.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:ky(l.code);return new G(u,l.message||"")}(o);n=new Ny(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vl(t,r.document.name),i=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):pe.min(),a=new Nt({mapValue:{fields:r.document.fields}}),c=mt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ha(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Vl(t,r.document),i=r.readTime?mn(r.readTime):pe.min(),o=mt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Vl(t,r.document),i=r.removedTargetIds||[];n=new ha([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new jb(s,i),a=r.targetId;n=new Dy(a,o)}}return n}function eC(t,e){let n;if(e instanceof wo)n={update:Rp(t,e.key,e.value)};else if(e instanceof Zh)n={delete:Lu(t,e.key)};else if(e instanceof gr)n={update:Rp(t,e.key,e.data),updateMask:lC(e.fieldMask)};else{if(!(e instanceof Ub))return he();n={verify:Lu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ua)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ba)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Jb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:he()}(t,e.precondition)),n}function tC(t,e){return t&&t.length>0?(qe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?mn(s.updateTime):mn(i);return o.isEqual(pe.min())&&(o=mn(i)),new xb(o,s.transformResults||[])}(n,e))):[]}function nC(t,e){return{documents:[Fu(t,e.path)]}}function rC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Fy(en.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:ls(h.field),direction:oC(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=xu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function sC(t){let e=Xb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){qe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Ly(h);return d instanceof en&&fy(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Is(us(y.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Nc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new La(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new La(p,d)}(n.endAt)),Ib(e,s,o,i,a,"F",c,l)}function iC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ly(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=us(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=us(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=us(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=us(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(us(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>Ly(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function oC(t){return Wb[t]}function aC(t){return Gb[t]}function cC(t){return Qb[t]}function ls(t){return{fieldPath:t.canonicalString()}}function us(t){return yt.fromServerFormat(t.fieldPath)}function Fy(t){return t instanceof Ze?function(n){if(n.op==="=="){if(dp(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(hp(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dp(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(hp(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:aC(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>Fy(s));return r.length===1?r[0]:{compositeFilter:{op:cC(n.op),filters:r}}}(t):he()}function lC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r,s,i=pe.min(),o=pe.min(),a=At.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.ht=e}}function hC(t){const e=sC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this.an=new fC}addToCollectionParentIndex(e,n){return this.an.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(lr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class fC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Tt($e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Tt($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Ls(0)}static Ln(){return new Ls(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.changes=new Js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Oi(r.mutation,s,Ut.empty(),et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=Pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=_i();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Nn();const o=Pi(),a=function(){return Pi()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof gr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Oi(u.mutation,l,u.mutation.getFieldMask(),et.now())):o.set(l.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new gC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Pi();let s=new Ge((o,a)=>o-a),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ut.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||Ae()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Iy();u.forEach(d=>{if(!i.has(d)){const p=Py(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_y(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(Pr());let a=-1,c=i;return o.next(l=>V.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?V.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Ae())).next(u=>({batchId:a,changes:Ty(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let s=_i();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=_i();return this.indexManager.getCollectionParents(e,i).next(a=>V.forEach(a,c=>{const l=function(h,d){return new Ys(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,mt.newInvalidDocument(u)))});let a=_i();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Oi(u.mutation,l,Ut.empty(),et.now()),Lc(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return V.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:hC(s.bundledQuery),readTime:mn(s.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.overlays=new Ge(ie.comparator),this.Pr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pr();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=Pr(),i=n.length+1,o=new ie(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Pr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Pr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return V.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $b(n,r));let i=this.Pr.get(n);i===void 0&&(i=Ae(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.Ir=new Tt(it.dr),this.Tr=new Tt(it.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new it(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new it(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new ie(new $e([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new ie(new $e([])),r=new it(n,e),s=new it(n,e+1);let i=Ae();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return ie.comparator(e.key,n.key)||De(e.yr,n.yr)}static Er(e,n){return De(e.yr,n.yr)||ie.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new Tt(it.dr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bb(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new it(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(De);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ie.isDocumentKey(i)||(i=i.child(""));const o=new it(new ie(i),0);let a=new Tt(De);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.yr)),!0)},o),V.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){qe(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return V.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new it(n,0),s=this.Sr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.Fr=e,this.docs=function(){return new Ge(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Nn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Nn();const o=n.path,a=new ie(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||ib(sb(u),r)<=0||(s.has(u.key)||Lc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Mr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TC(this)}getSize(e){return V.resolve(this.size)}}class TC extends pC{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.persistence=e,this.Or=new Js(n=>Yh(n),Jh),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Nr=0,this.Br=new rd,this.targetCount=0,this.Lr=Ls.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),V.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Qn(n),V.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.kr={},this.overlays={},this.qr=new Kh(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new IC(this),this.indexManager=new dC,this.remoteDocumentCache=function(s){return new EC(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new uC(n),this.Ur=new _C(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new vC(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new AC(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return V.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class AC extends ab{constructor(e){super(),this.currentSequenceNumber=e}}class sd{constructor(e){this.persistence=e,this.jr=new rd,this.Hr=null}static Jr(e){return new sd(e)}get Yr(){if(this.Hr)return this.Hr;throw he()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),V.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Yr,r=>{const s=ie.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return V.or([()=>V.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new id(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new SC;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(ai()<=Re.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),V.resolve()):(ai()<=Re.DEBUG&&ee("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(ai()<=Re.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):V.resolve())}Hi(e,n){if(mp(n))return V.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Fa(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ae(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,Fa(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,s){return mp(n)||s.isEqual(pe.min())?V.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?V.resolve(null):(ai()<=Re.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cs(n)),this.ts(e,o,n,rb(s,-1)).next(a=>a))})}Xi(e,n){let r=new Tt(vy(e));return n.forEach((s,i)=>{Lc(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return ai()<=Re.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",cs(n)),this.ji.getDocumentsMatchingQuery(e,n,lr.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new Ge(De),this.ss=new Js(i=>Yh(i),Jh),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mC(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function CC(t,e,n,r){return new bC(t,e,n,r)}async function By(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Ae();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function PC(t,e){const n=Ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=V.resolve();return d.forEach(y=>{p=p.next(()=>u.getEntry(c,y)).next(E=>{const A=l.docVersions.get(y);qe(A!==null),E.version.compareTo(A)<0&&(h.applyToRemoteDocument(E,l),E.isValidDocument()&&(E.setReadTime(l.commitVersion),u.addEntry(E)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ae();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function $y(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function OC(t,e){const n=Ee(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(At.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(E,A,C){return E.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,p,u)&&a.push(n.Kr.updateTargetData(i,p))});let c=Nn(),l=Ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(kC(i,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(pe.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return V.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.rs=s,i))}function kC(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Nn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:s}})}function DC(t,e){const n=Ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function NC(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Bu(t,e,n){const r=Ee(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Io(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function bp(t,e,n){const r=Ee(t);let s=pe.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=Ee(c),d=h.ss.get(u);return d!==void 0?V.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,gn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Ae())).next(a=>(MC(r,Ab(e),a),{documents:a,Ps:i})))}function MC(t,e,n){let r=t.os.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class Cp{constructor(){this.activeTargetIds=Ob()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VC{constructor(){this.ro=new Cp,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Cp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo=null;function xl(){return Zo===null?Zo=function(){return 268435456+Math.round(2147483648*Math.random())}():Zo++,"0x"+Zo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class UC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=xl(),c=this.Do(n,r);ee("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,i,o),this.vo(n,c,l,s).then(u=>(ee("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ds("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=LC[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=xl();return new Promise((o,a)=>{const c=new KR;c.setWithCredentials(!0),c.listenOnce(zR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ml.NO_ERROR:const u=c.getResponseJson();ee(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ml.TIMEOUT:ee(pt,`RPC '${e}' ${i} timed out`),a(new G(R.DEADLINE_EXCEEDED,"Request time out"));break;case Ml.HTTP_ERROR:const h=c.getStatus();if(ee(pt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(A){const C=A.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(C)>=0?C:R.UNKNOWN}(p.status);a(new G(y,p.message))}else a(new G(R.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new G(R.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{ee(pt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);ee(pt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const s=xl(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jR(),a=qR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");ee(pt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const y=new FC({ho:A=>{p?ee(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(d||(ee(pt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),ee(pt,`RPC '${e}' stream ${s} sending:`,A),h.send(A))},Po:()=>h.close()}),E=(A,C,x)=>{A.listen(C,z=>{try{x(z)}catch(L){setTimeout(()=>{throw L},0)}})};return E(h,Yo.EventType.OPEN,()=>{p||ee(pt,`RPC '${e}' stream ${s} transport opened.`)}),E(h,Yo.EventType.CLOSE,()=>{p||(p=!0,ee(pt,`RPC '${e}' stream ${s} transport closed`),y.mo())}),E(h,Yo.EventType.ERROR,A=>{p||(p=!0,Ds(pt,`RPC '${e}' stream ${s} transport errored:`,A),y.mo(new G(R.UNAVAILABLE,"The operation could not be completed")))}),E(h,Yo.EventType.MESSAGE,A=>{var C;if(!p){const x=A.data[0];qe(!!x);const z=x,L=z.error||((C=z[0])===null||C===void 0?void 0:C.error);if(L){ee(pt,`RPC '${e}' stream ${s} received error:`,L);const J=L.status;let re=function(Q){const Y=Je[Q];if(Y!==void 0)return ky(Y)}(J),Te=L.message;re===void 0&&(re=R.INTERNAL,Te="Unknown error status: "+J+" with message "+L.message),p=!0,y.mo(new G(re,Te)),h.close()}else ee(pt,`RPC '${e}' stream ${s} received:`,x),y.fo(x)}}),E(a,HR.STAT_EVENT,A=>{A.stat===ip.PROXY?ee(pt,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===ip.NOPROXY&&ee(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}function Ll(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t){return new Yb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n,r,s,i,o,a,c){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new jy(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new G(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BC extends qy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=Zb(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?mn(o.readTime):pe.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=Uu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Mu(c)?{documents:nC(i,c)}:{query:rC(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=My(i,o.resumeToken);const l=xu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(pe.min())>0){a.readTime=$a(i,o.snapshotVersion.toTimestamp());const l=xu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=iC(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=Uu(this.serializer),n.removeTarget=e,this.n_(n)}}class $C extends qy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=tC(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.T_(r,n)}return qe(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Uu(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>eC(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new G(R.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(R.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(R.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class qC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Dn(n),this.p_=!1):ee("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Ee(c);l.F_.add(4),await So(l),l.O_.set("Unknown"),l.F_.delete(4),await jc(l)}(this))})}),this.O_=new qC(r,s)}}async function jc(t){if(Gr(t))for(const e of t.M_)await e(!0)}async function So(t){for(const e of t.M_)await e(!1)}function zy(t,e){const n=Ee(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),cd(n)?ad(n):Xs(n).Yo()&&od(n,e))}function Hy(t,e){const n=Ee(t),r=Xs(n);n.v_.delete(e),r.Yo()&&Ky(n,e),n.v_.size===0&&(r.Yo()?r.e_():Gr(n)&&n.O_.set("Unknown"))}function od(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xs(t).l_(e)}function Ky(t,e){t.N_.Le(e),Xs(t).h_(e)}function ad(t){t.N_=new Kb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Xs(t).start(),t.O_.y_()}function cd(t){return Gr(t)&&!Xs(t).Jo()&&t.v_.size>0}function Gr(t){return Ee(t).F_.size===0}function Wy(t){t.N_=void 0}async function HC(t){t.v_.forEach((e,n)=>{od(t,e)})}async function KC(t,e){Wy(t),cd(t)?(t.O_.b_(e),ad(t)):t.O_.set("Unknown")}async function WC(t,e,n){if(t.O_.set("Online"),e instanceof Ny&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ja(t,r)}else if(e instanceof ha?t.N_.Ge(e):e instanceof Dy?t.N_.Xe(e):t.N_.He(e),!n.isEqual(pe.min()))try{const r=await $y(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.v_.get(l);u&&i.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.v_.get(c);if(!u)return;i.v_.set(c,u.withResumeToken(At.EMPTY_BYTE_STRING,u.snapshotVersion)),Ky(i,c);const h=new er(u.target,c,l,u.sequenceNumber);od(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await ja(t,r)}}async function ja(t,e,n){if(!Io(e))throw e;t.F_.add(1),await So(t),t.O_.set("Offline"),n||(n=()=>$y(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await jc(t)})}function Gy(t,e){return e().catch(n=>ja(t,n,e))}async function qc(t){const e=Ee(t),n=hr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;GC(e);)try{const s=await DC(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,QC(e,s)}catch(s){await ja(e,s)}Qy(e)&&Yy(e)}function GC(t){return Gr(t)&&t.C_.length<10}function QC(t,e){t.C_.push(e);const n=hr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function Qy(t){return Gr(t)&&!hr(t).Jo()&&t.C_.length>0}function Yy(t){hr(t).start()}async function YC(t){hr(t).A_()}async function JC(t){const e=hr(t);for(const n of t.C_)e.d_(n.mutations)}async function XC(t,e,n){const r=t.C_.shift(),s=ed.from(r,e,n);await Gy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await qc(t)}async function ZC(t,e){e&&hr(t).I_&&await async function(r,s){if(function(o){return qb(o)&&o!==R.ABORTED}(s.code)){const i=r.C_.shift();hr(r).Xo(),await Gy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await qc(r)}}(t,e),Qy(t)&&Yy(t)}async function Op(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=Gr(n);n.F_.add(3),await So(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await jc(n)}async function eP(t,e){const n=Ee(t);e?(n.F_.delete(2),await jc(n)):e||(n.F_.add(2),await So(n),n.O_.set("Unknown"))}function Xs(t){return t.B_||(t.B_=function(n,r,s){const i=Ee(n);return i.V_(),new BC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:HC.bind(null,t),Eo:KC.bind(null,t),c_:WC.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),cd(t)?ad(t):t.O_.set("Unknown")):(await t.B_.stop(),Wy(t))})),t.B_}function hr(t){return t.L_||(t.L_=function(n,r,s){const i=Ee(n);return i.V_(),new $C(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:YC.bind(null,t),Eo:ZC.bind(null,t),E_:JC.bind(null,t),T_:XC.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await qc(t)):(await t.L_.stop(),t.C_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ld(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ud(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),Io(t))return new G(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=_i(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new ws(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.k_=new Ge(ie.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):he():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fs(e,n,ws.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(){this.Q_=void 0,this.listeners=[]}}class nP{constructor(){this.queries=new Js(e=>yy(e),xc),this.onlineState="Unknown",this.K_=new Set}}async function hd(t,e){const n=Ee(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new tP),s)try{i.Q_=await n.onListen(r)}catch(o){const a=ud(o,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&fd(n)}async function dd(t,e){const n=Ee(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function rP(t,e){const n=Ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&fd(n)}function sP(t,e,n){const r=Ee(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function fd(t){t.K_.forEach(e=>{e.next()})}class pd{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.key=e}}class Xy{constructor(e){this.key=e}}class iP{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Ae(),this.mutatedKeys=Ae(),this.ua=vy(e),this.ca=new ws(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new kp,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Lc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let A=!1;d&&p?d.data.isEqual(p.data)?y!==E&&(r.track({type:3,doc:p}),A=!0):this.Ia(d,p)||(r.track({type:2,doc:p}),A=!0,(c&&this.ua(p,c)>0||l&&this.ua(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),A=!0):d&&!p&&(r.track({type:1,doc:d}),A=!0,(c||l)&&(a=!0)),A&&(p?(o=o.add(p),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((l,u)=>function(d,p){const y=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return y(d)-y(p)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,i.length!==0||c?{snapshot:new Fs(this.query,e.ca,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new kp,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=Ae(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new Xy(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new Jy(r))}),n}Ra(e){this.oa=e.Ps,this.aa=Ae();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Fs.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class oP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aP{constructor(e){this.key=e,this.ma=!1}}class cP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Js(a=>yy(a),xc),this.pa=new Map,this.ya=new Set,this.wa=new Ge(ie.comparator),this.Sa=new Map,this.ba=new rd,this.Da={},this.Ca=new Map,this.va=Ls.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function lP(t,e){const n=vP(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await NC(n.localStore,gn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await uP(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&zy(n.remoteStore,o)}return s}async function uP(t,e,n,r,s){t.Ma=(h,d,p)=>async function(E,A,C,x){let z=A.view.ha(C);z.es&&(z=await bp(E.localStore,A.query,!1).then(({documents:re})=>A.view.ha(re,z)));const L=x&&x.targetChanges.get(A.targetId),J=A.view.applyChanges(z,E.isPrimaryClient,L);return Np(E,A.targetId,J.Ea),J.snapshot}(t,h,d,p);const i=await bp(t.localStore,e,!0),o=new iP(e,i.Ps),a=o.ha(i.documents),c=Ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Np(t,n,l.Ea);const u=new oP(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function hP(t,e){const n=Ee(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!xc(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Bu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Hy(n.remoteStore,r.targetId),$u(n,r.targetId)}).catch(To)):($u(n,r.targetId),await Bu(n.localStore,r.targetId,!0))}async function dP(t,e,n){const r=EP(t);try{const s=await function(o,a){const c=Ee(o),l=et.now(),u=a.reduce((p,y)=>p.add(y.key),Ae());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Nn(),E=Ae();return c._s.getEntries(p,u).next(A=>{y=A,y.forEach((C,x)=>{x.isValidDocument()||(E=E.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,y)).next(A=>{h=A;const C=[];for(const x of a){const z=Fb(x,h.get(x.key).overlayedDocument);z!=null&&C.push(new gr(x.key,z,uy(z.value.mapValue),Wt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,C,a)}).next(A=>{d=A;const C=A.applyToLocalDocumentSet(h,E);return c.documentOverlayCache.saveOverlays(p,A.batchId,C)})}).then(()=>({batchId:d.batchId,changes:Ty(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Ge(De)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await Ro(r,s.changes),await qc(r.remoteStore)}catch(s){const i=ud(s,"Failed to persist write");n.reject(i)}}async function Zy(t,e){const n=Ee(t);try{const r=await OC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(qe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?qe(o.ma):s.removedDocuments.size>0&&(qe(o.ma),o.ma=!1))}),await Ro(n,r,e)}catch(r){await To(r)}}function Dp(t,e,n){const r=Ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Ee(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&fd(c)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fP(t,e,n){const r=Ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Ge(ie.comparator);o=o.insert(i,mt.newNoDocument(i,pe.min()));const a=Ae().add(i),c=new Bc(pe.min(),new Map,new Ge(De),o,a);await Zy(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),gd(r)}else await Bu(r.localStore,e,!1).then(()=>$u(r,e,n)).catch(To)}async function pP(t,e){const n=Ee(t),r=e.batch.batchId;try{const s=await PC(n.localStore,e);tv(n,r,null),ev(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ro(n,s)}catch(s){await To(s)}}async function gP(t,e,n){const r=Ee(t);try{const s=await function(o,a){const c=Ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(qe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);tv(r,e,n),ev(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ro(r,s)}catch(s){await To(s)}}function ev(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function tv(t,e,n){const r=Ee(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function $u(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||nv(t,r)})}function nv(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Hy(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),gd(t))}function Np(t,e,n){for(const r of n)r instanceof Jy?(t.ba.addReference(r.key,e),mP(t,r)):r instanceof Xy?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||nv(t,r.key)):he()}function mP(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.ya.add(r),gd(t))}function gd(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new ie($e.fromString(e)),r=t.va.next();t.Sa.set(r,new aP(n)),t.wa=t.wa.insert(n,r),zy(t.remoteStore,new er(gn(Mc(n.path)),r,"TargetPurposeLimboResolution",Kh.ae))}}async function Ro(t,e,n){const r=Ee(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=id.$i(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(c,l){const u=Ee(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>V.forEach(l,d=>V.forEach(d.Qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>V.forEach(d.Ki,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Io(h))throw h;ee("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.rs.get(d),y=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(y);u.rs=u.rs.insert(d,E)}}}(r.localStore,i))}async function _P(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await By(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new G(R.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ro(n,r.cs)}}function yP(t,e){const n=Ee(t),r=n.Sa.get(e);if(r&&r.ma)return Ae().add(r.key);{let s=Ae();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function vP(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fP.bind(null,e),e.fa.c_=rP.bind(null,e.eventManager),e.fa.xa=sP.bind(null,e.eventManager),e}function EP(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gP.bind(null,e),e}class Mp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=$c(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return CC(this.persistence,new RC,e.initialUser,this.serializer)}createPersistence(e){return new wC(sd.Jr,this.serializer)}createSharedClientState(e){return new VC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_P.bind(null,this.syncEngine),await eP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nP}()}createDatastore(e){const n=$c(e.databaseInfo.databaseId),r=function(i){return new UC(i)}(e.databaseInfo);return function(i,o,a,c){return new jC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new zC(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Dp(this.syncEngine,n,0),function(){return Pp.C()?new Pp:new xC}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new cP(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Ee(n);ee("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await So(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=ay.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ee("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ee("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ud(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fl(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await By(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AP(t);ee("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Op(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Op(e.remoteStore,i)),t._onlineComponents=e}function wP(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function AP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!wP(n))throw n;Ds("Error using user provided cache. Falling back to memory cache: "+n),await Fl(t,new Mp)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Fl(t,new Mp);return t._offlineComponents}async function rv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Vp(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Vp(t,new TP))),t._onlineComponents}function SP(t){return rv(t).then(e=>e.syncEngine)}async function qa(t){const e=await rv(t),n=e.eventManager;return n.onListen=lP.bind(null,e.syncEngine),n.onUnlisten=hP.bind(null,e.syncEngine),n}function RP(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new md({next:d=>{o.enqueueAndForget(()=>dd(i,h));const p=d.docs.has(a);!p&&d.fromCache?l.reject(new G(R.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&c&&c.source==="server"?l.reject(new G(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new pd(Mc(a.path),u,{includeMetadataChanges:!0,Z_:!0});return hd(i,h)}(await qa(t),t.asyncQueue,e,n,r)),r.promise}function bP(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new md({next:d=>{o.enqueueAndForget(()=>dd(i,h)),d.fromCache&&c.source==="server"?l.reject(new G(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new pd(a,u,{includeMetadataChanges:!0,Z_:!0});return hd(i,h)}(await qa(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t,e,n){if(!n)throw new G(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CP(t,e,n,r){if(e===!0&&r===!0)throw new G(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lp(t){if(!ie.isDocumentKey(t))throw new G(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fp(t){if(ie.isDocumentKey(t))throw new G(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zc(t);throw new G(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function PP(t,e){if(e<=0)throw new G(R.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Up({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Up(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new GR;switch(r.type){case"firstParty":return new XR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xp.get(n);r&&(ee("ComponentProvider","Removing Datastore"),xp.delete(n),r.terminate())}(this),Promise.resolve()}}function OP(t,e,n,r={}){var s;const i=(t=Vt(t,Hc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=gt.MOCK_USER;else{a=TA(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new G(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new gt(l)}t._authCredentials=new QR(new oy(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bn(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class ar extends Bn{constructor(e,n,r){super(e,n,Mc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new ie(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function za(t,e,...n){if(t=rt(t),iv("collection","path",e),t instanceof Hc){const r=$e.fromString(e,...n);return Fp(r),new ar(t,null,r)}{if(!(t instanceof It||t instanceof ar))throw new G(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Fp(r),new ar(t.firestore,null,r)}}function Or(t,e,...n){if(t=rt(t),arguments.length===1&&(e=ay.V()),iv("doc","path",e),t instanceof Hc){const r=$e.fromString(e,...n);return Lp(r),new It(t,null,new ie(r))}{if(!(t instanceof It||t instanceof ar))throw new G(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Lp(r),new It(t.firestore,t instanceof ar?t.converter:null,new ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new jy(this,"async_queue_retry"),this.ou=()=>{const n=Ll();n&&ee("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Ll();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Ll();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Pn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Io(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Dn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=ld.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&he()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}function Bp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Mn extends Hc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new kP}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ov(this),this._firestoreClient.terminate()}}function DP(t,e){const n=typeof t=="object"?t:t_(),r=typeof t=="string"?t:e||"(default)",s=Ih(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vA("firestore");i&&OP(s,...i)}return s}function Kc(t){return t._firestoreClient||ov(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ov(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new ub(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,sv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new IP(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Us(At.fromBase64String(e))}catch(n){throw new G(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Us(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP=/^__.*__$/;class MP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wo(e,this.data,n,this.fieldTransforms)}}class av{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class Qc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Qc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Ha(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(cv(this.Tu)&&NP.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class VP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$c(e)}wu(e,n,r,s=!1){return new Qc({Tu:e,methodName:n,yu:r,path:yt.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yc(t){const e=t._freezeSettings(),n=$c(t._databaseId);return new VP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lv(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);yd("Data must be an object, but it was:",o,r);const a=uv(r,o);let c,l;if(i.merge)c=new Ut(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=ju(e,h,n);if(!o.contains(d))throw new G(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);dv(u,d)||u.push(d)}c=new Ut(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new MP(new Nt(a),c,l)}class Jc extends Gc{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jc}}function xP(t,e,n){return new Qc({Tu:3,yu:e.settings.yu,methodName:t._methodName,Ru:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class LP extends Gc{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=xP(this,e,!0),r=this.Su.map(i=>Zs(i,n)),s=new xs(r);return new Mb(e.path,s)}isEqual(e){return this===e}}function FP(t,e,n,r){const s=t.wu(1,e,n);yd("Data must be an object, but it was:",s,r);const i=[],o=Nt.empty();Wr(r,(c,l)=>{const u=vd(e,c,n);l=rt(l);const h=s.mu(u);if(l instanceof Jc)i.push(u);else{const d=Zs(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ut(i);return new av(o,a,s.fieldTransforms)}function UP(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[ju(e,r,n)],c=[s];if(i.length%2!=0)throw new G(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(ju(e,i[d])),c.push(i[d+1]);const l=[],u=Nt.empty();for(let d=a.length-1;d>=0;--d)if(!dv(l,a[d])){const p=a[d];let y=c[d];y=rt(y);const E=o.mu(p);if(y instanceof Jc)l.push(p);else{const A=Zs(y,E);A!=null&&(l.push(p),u.set(p,A))}}const h=new Ut(l);return new av(u,h,o.fieldTransforms)}function BP(t,e,n,r=!1){return Zs(n,t.wu(r?4:3,e))}function Zs(t,e){if(hv(t=rt(t)))return yd("Unsupported field value:",e,t),uv(t,e);if(t instanceof Gc)return function(r,s){if(!cv(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Zs(a,s.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=et.fromDate(r);return{timestampValue:$a(s.serializer,i)}}if(r instanceof et){const i=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$a(s.serializer,i)}}if(r instanceof _d)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Us)return{bytesValue:My(s.serializer,r._byteString)};if(r instanceof It){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nd(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${zc(r)}`)}(t,e)}function uv(t,e){const n={};return cy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wr(t,(r,s)=>{const i=Zs(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function hv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof _d||t instanceof Us||t instanceof It||t instanceof Gc)}function yd(t,e,n){if(!hv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=zc(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function ju(t,e,n){if((e=rt(e))instanceof Wc)return e._internalPath;if(typeof e=="string")return vd(t,e);throw Ha("Field path arguments must be of type string or ",t,!1,void 0,n)}const $P=new RegExp("[~\\*/\\[\\]]");function vd(t,e,n){if(e.search($P)>=0)throw Ha(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wc(...e.split("."))._internalPath}catch{throw Ha(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ha(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new G(R.INVALID_ARGUMENT,a+t+c)}function dv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jP extends fv{data(){return super.data()}}function Xc(t,e){return typeof e=="string"?vd(t,e):e instanceof Wc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ed{}class Td extends Ed{}function gv(t,e,...n){let r=[];e instanceof Ed&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Id).length,a=i.filter(c=>c instanceof Zc).length;if(o>1||o>0&&a>0)throw new G(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Zc extends Td{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zc(e,n,r)}_apply(e){const n=this._parse(e);return mv(e._query,n),new Bn(e.firestore,e.converter,Vu(e._query,n))}_parse(e){const n=Yc(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new G(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){jp(h,u);const p=[];for(const y of h)p.push($p(c,i,y));d={arrayValue:{values:p}}}else d=$p(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||jp(h,u),d=BP(a,o,h,u==="in"||u==="not-in");return Ze.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qP(t,e,n){const r=e,s=Xc("where",t);return Zc._create(s,r,n)}class Id extends Ed{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Id(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)mv(o,c),o=Vu(o,c)}(e._query,n),new Bn(e.firestore,e.converter,Vu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wd extends Td{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new wd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new G(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Is(i,o);return function(l,u){if(Xh(l)===null){const h=Vc(l);h!==null&&_v(l,h,u.field)}}(s,a),a}(e._query,this._field,this._direction);return new Bn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ys(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function zP(t,e="asc"){const n=e,r=Xc("orderBy",t);return wd._create(r,n)}class Ad extends Td{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ad(e,n,r)}_apply(e){return new Bn(e.firestore,e.converter,Fa(e._query,this._limit,this._limitType))}}function HP(t){return PP("limit",t),Ad._create("limit",t,"F")}function $p(t,e,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new G(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_y(e)&&n.indexOf("/")!==-1)throw new G(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child($e.fromString(n));if(!ie.isDocumentKey(r))throw new G(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return up(t,new ie(r))}if(n instanceof It)return up(t,n._key);throw new G(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zc(n)}.`)}function jp(t,e){if(!Array.isArray(t)||t.length===0)throw new G(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mv(t,e){if(e.isInequality()){const r=Vc(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new G(R.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Xh(t);i!==null&&_v(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function _v(t,e,n){if(!n.isEqual(e))throw new G(R.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class KP{convertValue(e,n="none"){switch($r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Wr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new _d(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(eo(e));default:return null}}convertTimestamp(e){const n=ur(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);qe(Uy(r));const s=new to(r.get(1),r.get(3)),i=new ie(r.popFirst(5));return s.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vv extends fv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class da extends vv{data(e={}){return super.data(e)}}class Ev{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new vi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new da(this._firestore,this._userDataWriter,r.key,r,new vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new da(s._firestore,s._userDataWriter,a.doc.key,a.doc,new vi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new da(s._firestore,s._userDataWriter,a.doc.key,a.doc,new vi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:WP(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t){t=Vt(t,It);const e=Vt(t.firestore,Mn);return RP(Kc(e),t._key).then(n=>Iv(e,t,n))}class Sd extends KP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function GP(t){t=Vt(t,Bn);const e=Vt(t.firestore,Mn),n=Kc(e),r=new Sd(e);return pv(t._query),bP(n,t._query).then(s=>new Ev(e,r,t,s))}function QP(t,e,n){t=Vt(t,It);const r=Vt(t.firestore,Mn),s=yv(t.converter,e,n);return el(r,[lv(Yc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Wt.none())])}function qp(t,e,n,...r){t=Vt(t,It);const s=Vt(t.firestore,Mn),i=Yc(s);let o;return o=typeof(e=rt(e))=="string"||e instanceof Wc?UP(i,"updateDoc",t._key,e,n,r):FP(i,"updateDoc",t._key,e),el(s,[o.toMutation(t._key,Wt.exists(!0))])}function YP(t){return el(Vt(t.firestore,Mn),[new Zh(t._key,Wt.none())])}function Tv(t,e){const n=Vt(t.firestore,Mn),r=Or(t),s=yv(t.converter,e);return el(n,[lv(Yc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function JP(t,...e){var n,r,s;t=rt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Bp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Bp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof It)l=Vt(t.firestore,Mn),u=Mc(t._key.path),c={next:h=>{e[o]&&e[o](Iv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Vt(t,Bn);l=Vt(h.firestore,Mn),u=h._query;const d=new Sd(l);c={next:p=>{e[o]&&e[o](new Ev(l,d,h,p))},error:e[o+1],complete:e[o+2]},pv(t._query)}return function(d,p,y,E){const A=new md(E),C=new pd(p,A,y);return d.asyncQueue.enqueueAndForget(async()=>hd(await qa(d),C)),()=>{A.La(),d.asyncQueue.enqueueAndForget(async()=>dd(await qa(d),C))}}(Kc(l),u,a,c)}function el(t,e){return function(r,s){const i=new Pn;return r.asyncQueue.enqueueAndForget(async()=>dP(await SP(r),s,i)),i.promise}(Kc(t),e)}function Iv(t,e,n){const r=n.docs.get(e._key),s=new Sd(t);return new vv(t,s,e._key,r,new vi(n.hasPendingWrites,n.fromCache),e.converter)}function xD(...t){return new LP("arrayUnion",t)}(function(e,n=!0){(function(s){Qs=s})(Ks),Os(new Lr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Mn(new YR(r.getProvider("auth-internal")),new eb(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new G(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new to(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),or(op,"4.2.0",e),or(op,"4.2.0","esm2017")})();function Rd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function zp(t){return t!==void 0&&t.enterprise!==void 0}class XP{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function wv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZP=wv,Av=new uo("auth","Firebase",wv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new Eh("@firebase/auth");function e1(t,...e){Ka.logLevel<=Re.WARN&&Ka.warn(`Auth (${Ks}): ${t}`,...e)}function pa(t,...e){Ka.logLevel<=Re.ERROR&&Ka.error(`Auth (${Ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw bd(t,...e)}function _n(t,...e){return bd(t,...e)}function t1(t,e,n){const r=Object.assign(Object.assign({},ZP()),{[e]:n});return new uo("auth","Firebase",r).create(e,{appName:t.name})}function bd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Av.create(t,...e)}function ue(t,e,...n){if(!t)throw bd(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pa(e),new Error(e)}function Vn(t,e){t||bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function n1(){return Hp()==="http:"||Hp()==="https:"}function Hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(n1()||wA()||"connection"in navigator)?navigator.onLine:!0}function s1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=IA()||AA()}get(){return r1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=new bo(3e4,6e4);function Qr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yr(t,e,n,r,s={}){return Rv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ho(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Sv.fetch()(bv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Rv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},i1),e);try{const s=new a1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ea(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ea(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ea(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ea(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw t1(t,u,l);tn(t,u)}}catch(s){if(s instanceof Un)throw s;tn(t,"network-request-failed",{message:String(s)})}}async function Co(t,e,n,r,s={}){const i=await Yr(t,e,n,r,s);return"mfaPendingCredential"in i&&tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function bv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Cd(t.config,s):`${t.config.apiScheme}://${s}`}class a1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),o1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=_n(t,e,r);return s.customData._tokenResponse=n,s}async function c1(t,e){return Yr(t,"GET","/v2/recaptchaConfig",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e){return Yr(t,"POST","/v1/accounts:delete",e)}async function u1(t,e){return Yr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function h1(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=Pd(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ki(Ul(s.auth_time)),issuedAtTime:ki(Ul(s.iat)),expirationTime:ki(Ul(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ul(t){return Number(t)*1e3}function Pd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gm(n);return s?JSON.parse(s):(pa("Failed to decode base64 JWT payload"),null)}catch(s){return pa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function d1(t){const e=Pd(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&f1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function f1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await so(t,u1(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_1(i.providerUserInfo):[],a=m1(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Cv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function g1(t){const e=rt(t);await Wa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function m1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _1(t){return t.map(e=>{var{providerId:n}=e,r=Rd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(t,e){const n=await Rv(t,{},async()=>{const r=ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=bv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):d1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ue(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await y1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new io;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new p1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await so(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return h1(this,e)}reload(){return g1(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await so(this,l1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:L,isAnonymous:J,providerData:re,stsTokenManager:Te}=n;ue(z&&Te,e,"internal-error");const q=io.fromJSON(this.name,Te);ue(typeof z=="string",e,"internal-error"),qn(h,e.name),qn(d,e.name),ue(typeof L=="boolean",e,"internal-error"),ue(typeof J=="boolean",e,"internal-error"),qn(p,e.name),qn(y,e.name),qn(E,e.name),qn(A,e.name),qn(C,e.name),qn(x,e.name);const Q=new Mr({uid:z,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:J,photoURL:y,phoneNumber:p,tenantId:E,stsTokenManager:q,createdAt:C,lastLoginAt:x});return re&&Array.isArray(re)&&(Q.providerData=re.map(Y=>Object.assign({},Y))),A&&(Q._redirectEventId=A),Q}static async _fromIdTokenResponse(e,n,r=!1){const s=new io;s.updateFromServerResponse(n);const i=new Mr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wa(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new Map;function Cn(t){Vn(t instanceof Function,"Expected a class definition");let e=Kp.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pv.type="NONE";const Wp=Pv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t,e,n){return`firebase:${t}:${e}:${n}`}class As{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ga(this.userKey,s.apiKey,i),this.fullPersistenceKey=ga("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new As(Cn(Wp),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Cn(Wp);const o=ga(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Mr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new As(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new As(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ov(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mv(e))return"Blackberry";if(Vv(e))return"Webos";if(Od(e))return"Safari";if((e.includes("chrome/")||kv(e))&&!e.includes("edge/"))return"Chrome";if(Nv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ov(t=wt()){return/firefox\//i.test(t)}function Od(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kv(t=wt()){return/crios\//i.test(t)}function Dv(t=wt()){return/iemobile/i.test(t)}function Nv(t=wt()){return/android/i.test(t)}function Mv(t=wt()){return/blackberry/i.test(t)}function Vv(t=wt()){return/webos/i.test(t)}function tl(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function v1(t=wt()){var e;return tl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function E1(){return SA()&&document.documentMode===10}function xv(t=wt()){return tl(t)||Nv(t)||Vv(t)||Mv(t)||/windows phone/i.test(t)||Dv(t)}function T1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e=[]){let n;switch(t){case"Browser":n=Gp(wt());break;case"Worker":n=`${Gp(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(t,e={}){return Yr(t,"GET","/v2/passwordPolicy",Qr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=6;class S1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:A1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qp(this),this.idTokenSubscription=new Qp(this),this.beforeStateQueue=new I1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await As.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=s1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await w1(this),n=new S1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new uo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await As.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&e1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jr(t){return rt(t)}class Qp{constructor(e){this.auth=e,this.observer=null,this.addObserver=DA(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Fv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=_n("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",b1().appendChild(r)})}function C1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const P1="https://www.google.com/recaptcha/enterprise.js?render=",O1="recaptcha-enterprise",k1="NO_RECAPTCHA";class D1{constructor(e){this.type=O1,this.auth=Jr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{c1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new XP(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;zp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(k1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&zp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Fv(P1+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ga(t,e,n,r=!1){const s=new D1(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t,e){const n=Ih(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ba(i,e??{}))return s;tn(s,"already-initialized")}return n.initialize({options:e})}function M1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function V1(t,e,n){const r=Jr(t);ue(r._canInitEmulator,r,"emulator-config-failed"),ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Uv(e),{host:o,port:a}=x1(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||L1()}function Uv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function x1(t){const e=Uv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Yp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Yp(o)}}}function Yp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function L1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}async function F1(t,e){return Yr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(t,e){return Co(t,"POST","/v1/accounts:signInWithPassword",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(t,e){return Co(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}async function B1(t,e){return Co(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends kd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Ga(e,r,"signInWithPassword");return Bl(e,s)}else return Bl(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Ga(e,r,"signInWithPassword");return Bl(e,i)}else return Promise.reject(s)});case"emailLink":return U1(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return F1(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return B1(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t,e){return Co(t,"POST","/v1/accounts:signInWithIdp",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="http://localhost";class jr extends kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Rd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new jr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ss(e,n)}buildRequest(){const e={requestUri:$1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function q1(t){const e=fi(pi(t)).link,n=e?fi(pi(e)).deep_link_id:null,r=fi(pi(t)).deep_link_id;return(r?fi(pi(r)).link:null)||r||n||e||t}class Dd{constructor(e){var n,r,s,i,o,a;const c=fi(pi(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=j1((s=c.mode)!==null&&s!==void 0?s:null);ue(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=q1(e);try{return new Dd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.providerId=ei.PROVIDER_ID}static credential(e,n){return oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dd.parseLink(n);return ue(r,"argument-error"),oo._fromEmailAndCode(e,r.code,r.tenantId)}}ei.PROVIDER_ID="password";ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Bv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Po{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Po{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Po{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t,e){return Co(t,"POST","/v1/accounts:signUp",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Mr._fromIdTokenResponse(e,r,s),o=Jp(r);return new qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Jp(r);return new qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Jp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends Un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qa(e,n,r,s)}}function $v(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qa._fromErrorAndOperation(t,i,e,r):i})}async function z1(t,e,n=!1){const r=await so(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await so(t,$v(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=Pd(i.idToken);ue(o,r,"internal-error");const{sub:a}=o;return ue(t.uid===a,r,"user-mismatch"),qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(t,e,n=!1){const r="signIn",s=await $v(t,r,e),i=await qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function K1(t,e){return jv(Jr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(t){const e=Jr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function W1(t,e,n){var r;const s=Jr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Ga(s,i,"signUpPassword");o=$l(s,l)}else o=$l(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ga(s,i,"signUpPassword");return $l(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&qv(t),l}),c=await qr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function G1(t,e,n){return K1(rt(t),ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qv(t),r})}function Q1(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function Y1(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function J1(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function X1(t){return rt(t).signOut()}const Ya="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ya,"1"),this.storage.removeItem(Ya),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(){const t=wt();return Od(t)||tl(t)}const eO=1e3,tO=10;class Hv extends zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Z1()&&T1(),this.fallbackToPolling=xv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);E1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hv.type="LOCAL";const nO=Hv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv extends zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kv.type="SESSION";const Wv=Kv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await rO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Nd("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return window}function iO(t){yn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function oO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cO(){return Gv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="firebaseLocalStorageDb",lO=1,Ja="firebaseLocalStorage",Yv="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rl(t,e){return t.transaction([Ja],e?"readwrite":"readonly").objectStore(Ja)}function uO(){const t=indexedDB.deleteDatabase(Qv);return new Oo(t).toPromise()}function zu(){const t=indexedDB.open(Qv,lO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ja,{keyPath:Yv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ja)?e(r):(r.close(),await uO(),e(await zu()))})})}async function Xp(t,e,n){const r=rl(t,!0).put({[Yv]:e,value:n});return new Oo(r).toPromise()}async function hO(t,e){const n=rl(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function Zp(t,e){const n=rl(t,!0).delete(e);return new Oo(n).toPromise()}const dO=800,fO=3;class Jv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nl._getInstance(cO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oO(),!this.activeServiceWorker)return;this.sender=new sO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zu();return await Xp(e,Ya,"1"),await Zp(e,Ya),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rl(s,!1).getAll();return new Oo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jv.type="LOCAL";const pO=Jv;new bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t,e){return e?Cn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md extends kd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mO(t){return jv(t.auth,new Md(t),t.bypassAuthState)}function _O(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),H1(n,new Md(t),t.bypassAuthState)}async function yO(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),z1(n,new Md(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mO;case"linkViaPopup":case"linkViaRedirect":return yO;case"reauthViaPopup":case"reauthViaRedirect":return _O;default:tn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=new bo(2e3,1e4);class gs extends Xv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Nd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vO.get())};e()}}gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO="pendingRedirect",ma=new Map;class TO extends Xv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ma.get(this.auth._key());if(!e){try{const r=await IO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ma.set(this.auth._key(),e)}return this.bypassAuthState||ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IO(t,e){const n=SO(e),r=AO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wO(t,e){ma.set(t._key(),e)}function AO(t){return Cn(t._redirectPersistence)}function SO(t){return ga(EO,t.config.apiKey,t.name)}async function RO(t,e,n=!1){const r=Jr(t),s=gO(r,e),o=await new TO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=10*60*1e3;class CO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bO&&this.cachedEventUids.clear(),this.cachedEventUids.has(eg(e))}saveEventToCache(e){this.cachedEventUids.add(eg(e)),this.lastProcessedEventTime=Date.now()}}function eg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t,e={}){return Yr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DO=/^https?/;async function NO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OO(t);for(const n of e)try{if(MO(n))return}catch{}tn(t,"unauthorized-domain")}function MO(t){const e=qu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DO.test(n))return!1;if(kO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=new bo(3e4,6e4);function tg(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xO(t){return new Promise((e,n)=>{var r,s,i;function o(){tg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tg(),n(_n(t,"network-request-failed"))},timeout:VO.get()})}if(!((s=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=yn().gapi)===null||i===void 0)&&i.load)o();else{const a=C1("iframefcb");return yn()[a]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},Fv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw _a=null,e})}let _a=null;function LO(t){return _a=_a||xO(t),_a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=new bo(5e3,15e3),UO="__/auth/iframe",BO="emulator/auth/iframe",$O={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qO(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cd(e,BO):`https://${t.config.authDomain}/${UO}`,r={apiKey:e.apiKey,appName:t.name,v:Ks},s=jO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ho(r).slice(1)}`}async function zO(t){const e=await LO(t),n=yn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:qO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$O,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),a=yn().setTimeout(()=>{i(o)},FO.get());function c(){yn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KO=500,WO=600,GO="_blank",QO="http://localhost";class ng{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YO(t,e,n,r=KO,s=WO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},HO),{width:r.toString(),height:s.toString(),top:i,left:o}),l=wt().toLowerCase();n&&(a=kv(l)?GO:n),Ov(l)&&(e=e||QO,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(v1(l)&&a!=="_self")return JO(e||"",a),new ng(null);const h=window.open(e||"",a,u);ue(h,t,"popup-blocked");try{h.focus()}catch{}return new ng(h)}function JO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO="__/auth/handler",ZO="emulator/auth/handler",ek=encodeURIComponent("fac");async function rg(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ks,eventId:s};if(e instanceof Bv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Po){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${ek}=${encodeURIComponent(c)}`:"";return`${tk(t)}?${ho(a).slice(1)}${l}`}function tk({config:t}){return t.emulator?Cd(t,ZO):`https://${t.authDomain}/${XO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="webStorageSupport";class nk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wv,this._completeRedirectFn=RO,this._overrideRedirectResult=wO}async _openPopup(e,n,r,s){var i;Vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await rg(e,n,r,qu(),s);return YO(e,o,Nd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await rg(e,n,r,qu(),s);return iO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zO(e),r=new CO(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jl,{type:jl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[jl];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xv()||Od()||tl()}}const rk=nk;var sg="@firebase/auth",ig="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ok(t){Os(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lv(t)},l=new R1(r,s,i,c);return M1(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Os(new Lr("auth-internal",e=>{const n=Jr(e.getProvider("auth").getImmediate());return(r=>new sk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(sg,ig,ik(t)),or(sg,ig,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=5*60,ck=Jm("authIdTokenMaxAge")||ak;let og=null;const lk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ck)return;const s=n==null?void 0:n.token;og!==s&&(og=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uk(t=t_()){const e=Ih(t,"auth");if(e.isInitialized())return e.getImmediate();const n=N1(t,{popupRedirectResolver:rk,persistence:[pO,nO,Wv]}),r=Jm("authTokenSyncURL");if(r){const i=lk(r);Y1(n,i,()=>i(n.currentUser)),Q1(n,o=>i(o))}const s=Qm("auth");return s&&V1(n,`http://${s}`),n}ok("Browser");const hk={apiKey:"AIzaSyBEj_lvulwL921R6C-GKJN1eC4haiLIk0Q",authDomain:"vue3-2c548.firebaseapp.com",projectId:"vue3-2c548",storageBucket:"vue3-2c548.appspot.com",messagingSenderId:"975447172434",appId:"1:975447172434:web:d7afa045c68a84b2df468"};e_(hk);const ln=DP(),Sn=uk(),dk="modulepreload",fk=function(t){return"/fbvue3-exp/"+t},ag={},qt=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=fk(i),i in ag)return;ag[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":dk,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof window<"u";function pk(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ve=Object.assign;function ql(t,e){const n={};for(const r in e){const s=e[r];n[r]=nn(s)?s.map(t):t(s)}return n}const Di=()=>{},nn=Array.isArray,gk=/\/$/,mk=t=>t.replace(gk,"");function zl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Ek(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function _k(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yk(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Bs(e.matched[r],n.matched[s])&&eE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function eE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vk(t[n],e[n]))return!1;return!0}function vk(t,e){return nn(t)?lg(t,e):nn(e)?lg(e,t):t===e}function lg(t,e){return nn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ek(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ao;(function(t){t.pop="pop",t.push="push"})(ao||(ao={}));var Ni;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ni||(Ni={}));function Tk(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mk(t)}const Ik=/^[^#]+#/;function wk(t,e){return t.replace(Ik,"#")+e}function Ak(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const sl=()=>({left:window.pageXOffset,top:window.pageYOffset});function Sk(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ak(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ug(t,e){return(history.state?history.state.position-e:-1)+t}const Hu=new Map;function Rk(t,e){Hu.set(t,e)}function bk(t){const e=Hu.get(t);return Hu.delete(t),e}let Ck=()=>location.protocol+"//"+location.host;function tE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),cg(c,"")}return cg(n,t)+r+s}function Pk(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=tE(t,location),y=n.value,E=e.value;let A=0;if(d){if(n.value=p,e.value=d,o&&o===y){o=null;return}A=E?d.position-E.position:0}else r(p);s.forEach(C=>{C(n.value,y,{delta:A,type:ao.pop,direction:A?A>0?Ni.forward:Ni.back:Ni.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(Ve({},d.state,{scroll:sl()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function hg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?sl():null}}function Ok(t){const{history:e,location:n}=window,r={value:tE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Ck()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=Ve({},e.state,hg(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Ve({},s.value,e.state,{forward:c,scroll:sl()});i(u.current,u,!0);const h=Ve({},hg(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function kk(t){t=Tk(t);const e=Ok(t),n=Pk(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ve({location:"",base:t,go:r,createHref:wk.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Dk(t){return typeof t=="string"||t&&typeof t=="object"}function nE(t){return typeof t=="string"||typeof t=="symbol"}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rE=Symbol("");var dg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dg||(dg={}));function $s(t,e){return Ve(new Error,{type:t,[rE]:!0},e)}function wn(t,e){return t instanceof Error&&rE in t&&(e==null||!!(t.type&e))}const fg="[^/]+?",Nk={sensitive:!1,strict:!1,start:!0,end:!0},Mk=/[.+*?^${}()[\]/\\]/g;function Vk(t,e){const n=Ve({},Nk,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Mk,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:E,optional:A,regexp:C}=d;i.push({name:y,repeatable:E,optional:A});const x=C||fg;if(x!==fg){p+=10;try{new RegExp(`(${x})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+L.message)}}let z=E?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(z=A&&l.length<2?`(?:/${z})`:"/"+z),A&&(z+="?"),s+=z,p+=20,A&&(p+=-8),E&&(p+=-20),x===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=i[d-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:E,optional:A}=p,C=y in l?l[y]:"";if(nn(C)&&!E)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=nn(C)?C.join("/"):C;if(!x)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function xk(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Lk(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=xk(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(pg(r))return 1;if(pg(s))return-1}return s.length-r.length}function pg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Fk={type:0,value:""},Uk=/[a-zA-Z0-9_]/;function Bk(t){if(!t)return[[]];if(t==="/")return[[Fk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Uk.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function $k(t,e,n){const r=Vk(Bk(t.path),n),s=Ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function jk(t,e){const n=[],r=new Map;e=_g({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,y=qk(u);y.aliasOf=d&&d.record;const E=_g(e,u),A=[y];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of z)A.push(Ve({},y,{components:d?d.record.components:y.components,path:L,aliasOf:d?d.record:y}))}let C,x;for(const z of A){const{path:L}=z;if(h&&L[0]!=="/"){const J=h.record.path,re=J[J.length-1]==="/"?"":"/";z.path=h.record.path+(L&&re+L)}if(C=$k(z,h,E),d?d.alias.push(C):(x=x||C,x!==C&&x.alias.push(C),p&&u.name&&!mg(C)&&o(u.name)),y.children){const J=y.children;for(let re=0;re<J.length;re++)i(J[re],C,d&&d.children[re])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return x?()=>{o(x)}:Di}function o(u){if(nE(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Lk(u,n[h])>=0&&(u.record.path!==n[h].record.path||!sE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!mg(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},y,E;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw $s(1,{location:u});E=d.record.name,p=Ve(gg(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&gg(u.params,d.keys.map(x=>x.name))),y=d.stringify(p)}else if("path"in u)y=u.path,d=n.find(x=>x.re.test(y)),d&&(p=d.parse(y),E=d.record.name);else{if(d=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw $s(1,{location:u,currentLocation:h});E=d.record.name,p=Ve({},h.params,u.params),y=d.stringify(p)}const A=[];let C=d;for(;C;)A.unshift(C.record),C=C.parent;return{name:E,path:y,params:p,matched:A,meta:Hk(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function gg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function qk(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:zk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function zk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function mg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Hk(t){return t.reduce((e,n)=>Ve(e,n.meta),{})}function _g(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function sE(t,e){return e.children.some(n=>n===t||sE(t,n))}const iE=/#/g,Kk=/&/g,Wk=/\//g,Gk=/=/g,Qk=/\?/g,oE=/\+/g,Yk=/%5B/g,Jk=/%5D/g,aE=/%5E/g,Xk=/%60/g,cE=/%7B/g,Zk=/%7C/g,lE=/%7D/g,eD=/%20/g;function Vd(t){return encodeURI(""+t).replace(Zk,"|").replace(Yk,"[").replace(Jk,"]")}function tD(t){return Vd(t).replace(cE,"{").replace(lE,"}").replace(aE,"^")}function Ku(t){return Vd(t).replace(oE,"%2B").replace(eD,"+").replace(iE,"%23").replace(Kk,"%26").replace(Xk,"`").replace(cE,"{").replace(lE,"}").replace(aE,"^")}function nD(t){return Ku(t).replace(Gk,"%3D")}function rD(t){return Vd(t).replace(iE,"%23").replace(Qk,"%3F")}function sD(t){return t==null?"":rD(t).replace(Wk,"%2F")}function Xa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function iD(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(oE," "),o=i.indexOf("="),a=Xa(o<0?i:i.slice(0,o)),c=o<0?null:Xa(i.slice(o+1));if(a in e){let l=e[a];nn(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function yg(t){let e="";for(let n in t){const r=t[n];if(n=nD(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(r)?r.map(i=>i&&Ku(i)):[r&&Ku(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function oD(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=nn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const aD=Symbol(""),vg=Symbol(""),il=Symbol(""),xd=Symbol(""),Wu=Symbol("");function ci(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a($s(4,{from:n,to:e})):h instanceof Error?a(h):Dk(h)?a($s(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Hl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(cD(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Qn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=pk(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Qn(d,n,r,i,o)()}))}}return s}function cD(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Eg(t){const e=Kt(il),n=Kt(xd),r=be(()=>e.resolve(ht(t.to))),s=be(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Bs.bind(null,u));if(d>-1)return d;const p=Tg(c[l-2]);return l>1&&Tg(u)===p&&h[h.length-1].path!==p?h.findIndex(Bs.bind(null,c[l-2])):d}),i=be(()=>s.value>-1&&dD(n.params,r.value.params)),o=be(()=>s.value>-1&&s.value===n.matched.length-1&&eE(n.params,r.value.params));function a(c={}){return hD(c)?e[ht(t.replace)?"replace":"push"](ht(t.to)).catch(Di):Promise.resolve()}return{route:r,href:be(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const lD=xn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Eg,setup(t,{slots:e}){const n=rn(Eg(t)),{options:r}=Kt(il),s=be(()=>({[Ig(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ig(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ds("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),uD=lD;function hD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dD(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!nn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Tg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ig=(t,e,n)=>t??e??n,fD=xn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Kt(Wu),s=be(()=>t.route||r.value),i=Kt(vg,0),o=be(()=>{let l=ht(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=be(()=>s.value.matched[o.value]);sa(vg,be(()=>o.value+1)),sa(aD,a),sa(Wu,s);const c=Le();return Ht(()=>[c.value,a.value,t.name],([l,u,h],[d,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Bs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return wg(n.default,{Component:d,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,A=ds(d,Ve({},y,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return wg(n.default,{Component:A,route:l})||A}}});function wg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pD=fD;function gD(t){const e=jk(t.routes,t),n=t.parseQuery||iD,r=t.stringifyQuery||yg,s=t.history,i=ci(),o=ci(),a=ci(),c=Wg(zn);let l=zn;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ql.bind(null,T=>""+T),h=ql.bind(null,sD),d=ql.bind(null,Xa);function p(T,j){let F,H;return nE(T)?(F=e.getRecordMatcher(T),H=j):H=T,e.addRoute(H,F)}function y(T){const j=e.getRecordMatcher(T);j&&e.removeRoute(j)}function E(){return e.getRoutes().map(T=>T.record)}function A(T){return!!e.getRecordMatcher(T)}function C(T,j){if(j=Ve({},j||c.value),typeof T=="string"){const _=zl(n,T,j.path),I=e.resolve({path:_.path},j),b=s.createHref(_.fullPath);return Ve(_,I,{params:d(I.params),hash:Xa(_.hash),redirectedFrom:void 0,href:b})}let F;if("path"in T)F=Ve({},T,{path:zl(n,T.path,j.path).path});else{const _=Ve({},T.params);for(const I in _)_[I]==null&&delete _[I];F=Ve({},T,{params:h(_)}),j.params=h(j.params)}const H=e.resolve(F,j),_e=T.hash||"";H.params=u(d(H.params));const g=_k(r,Ve({},T,{hash:tD(_e),path:H.path})),m=s.createHref(g);return Ve({fullPath:g,hash:_e,query:r===yg?oD(T.query):T.query||{}},H,{redirectedFrom:void 0,href:m})}function x(T){return typeof T=="string"?zl(n,T,c.value.path):Ve({},T)}function z(T,j){if(l!==T)return $s(8,{from:j,to:T})}function L(T){return Te(T)}function J(T){return L(Ve(x(T),{replace:!0}))}function re(T){const j=T.matched[T.matched.length-1];if(j&&j.redirect){const{redirect:F}=j;let H=typeof F=="function"?F(T):F;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=x(H):{path:H},H.params={}),Ve({query:T.query,hash:T.hash,params:"path"in H?{}:T.params},H)}}function Te(T,j){const F=l=C(T),H=c.value,_e=T.state,g=T.force,m=T.replace===!0,_=re(F);if(_)return Te(Ve(x(_),{state:typeof _=="object"?Ve({},_e,_.state):_e,force:g,replace:m}),j||F);const I=F;I.redirectedFrom=j;let b;return!g&&yk(r,H,F)&&(b=$s(16,{to:I,from:H}),me(H,H,!0,!1)),(b?Promise.resolve(b):Y(I,H)).catch(k=>wn(k)?wn(k,2)?k:$(k):O(k,I,H)).then(k=>{if(k){if(wn(k,2))return Te(Ve({replace:m},x(k.to),{state:typeof k.to=="object"?Ve({},_e,k.to.state):_e,force:g}),j||I)}else k=He(I,H,!0,m,_e);return oe(I,H,k),k})}function q(T,j){const F=z(T,j);return F?Promise.reject(F):Promise.resolve()}function Q(T){const j=Oe.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(T):T()}function Y(T,j){let F;const[H,_e,g]=mD(T,j);F=Hl(H.reverse(),"beforeRouteLeave",T,j);for(const _ of H)_.leaveGuards.forEach(I=>{F.push(Qn(I,T,j))});const m=q.bind(null,T,j);return F.push(m),Se(F).then(()=>{F=[];for(const _ of i.list())F.push(Qn(_,T,j));return F.push(m),Se(F)}).then(()=>{F=Hl(_e,"beforeRouteUpdate",T,j);for(const _ of _e)_.updateGuards.forEach(I=>{F.push(Qn(I,T,j))});return F.push(m),Se(F)}).then(()=>{F=[];for(const _ of g)if(_.beforeEnter)if(nn(_.beforeEnter))for(const I of _.beforeEnter)F.push(Qn(I,T,j));else F.push(Qn(_.beforeEnter,T,j));return F.push(m),Se(F)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),F=Hl(g,"beforeRouteEnter",T,j),F.push(m),Se(F))).then(()=>{F=[];for(const _ of o.list())F.push(Qn(_,T,j));return F.push(m),Se(F)}).catch(_=>wn(_,8)?_:Promise.reject(_))}function oe(T,j,F){a.list().forEach(H=>Q(()=>H(T,j,F)))}function He(T,j,F,H,_e){const g=z(T,j);if(g)return g;const m=j===zn,_=hs?history.state:{};F&&(H||m?s.replace(T.fullPath,Ve({scroll:m&&_&&_.scroll},_e)):s.push(T.fullPath,_e)),c.value=T,me(T,j,F,m),$()}let fe;function D(){fe||(fe=s.listen((T,j,F)=>{if(!Fe.listening)return;const H=C(T),_e=re(H);if(_e){Te(Ve(_e,{replace:!0}),H).catch(Di);return}l=H;const g=c.value;hs&&Rk(ug(g.fullPath,F.delta),sl()),Y(H,g).catch(m=>wn(m,12)?m:wn(m,2)?(Te(m.to,H).then(_=>{wn(_,20)&&!F.delta&&F.type===ao.pop&&s.go(-1,!1)}).catch(Di),Promise.reject()):(F.delta&&s.go(-F.delta,!1),O(m,H,g))).then(m=>{m=m||He(H,g,!1),m&&(F.delta&&!wn(m,8)?s.go(-F.delta,!1):F.type===ao.pop&&wn(m,20)&&s.go(-1,!1)),oe(H,g,m)}).catch(Di)}))}let P=ci(),w=ci(),M;function O(T,j,F){$(T);const H=w.list();return H.length?H.forEach(_e=>_e(T,j,F)):console.error(T),Promise.reject(T)}function ne(){return M&&c.value!==zn?Promise.resolve():new Promise((T,j)=>{P.add([T,j])})}function $(T){return M||(M=!T,D(),P.list().forEach(([j,F])=>T?F(T):j()),P.reset()),T}function me(T,j,F,H){const{scrollBehavior:_e}=t;if(!hs||!_e)return Promise.resolve();const g=!F&&bk(ug(T.fullPath,0))||(H||!F)&&history.state&&history.state.scroll||null;return zr().then(()=>_e(T,j,g)).then(m=>m&&Sk(m)).catch(m=>O(m,T,j))}const ye=T=>s.go(T);let Ie;const Oe=new Set,Fe={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:A,getRoutes:E,resolve:C,options:t,push:L,replace:J,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:w.add,isReady:ne,install(T){const j=this;T.component("RouterLink",uD),T.component("RouterView",pD),T.config.globalProperties.$router=j,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(c)}),hs&&!Ie&&c.value===zn&&(Ie=!0,L(s.location).catch(_e=>{}));const F={};for(const _e in zn)Object.defineProperty(F,_e,{get:()=>c.value[_e],enumerable:!0});T.provide(il,j),T.provide(xd,Hg(F)),T.provide(Wu,c);const H=T.unmount;Oe.add(T),T.unmount=function(){Oe.delete(T),Oe.size<1&&(l=zn,fe&&fe(),fe=null,c.value=zn,Ie=!1,M=!1),H()}}};function Se(T){return T.reduce((j,F)=>j.then(()=>Q(F)),Promise.resolve())}return Fe}function mD(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Bs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Bs(l,c))||s.push(c))}return[n,r,s]}function LD(){return Kt(il)}function FD(){return Kt(xd)}const Hn=async(t,e,n)=>{const r=Za();r.loading=!0,await r.currentUser()?n():n("/login"),r.loading=!1},Ag=async(t,e,n)=>{const r=Za();r.loading=!0,await r.currentUser()?n("/"):n(),r.loading=!1},ya=gD({history:kk("/fbvue3-exp/"),routes:[{path:"/",name:"home",component:()=>qt(()=>import("./HomeView-7aef7bbe.js"),[])},{path:"/savedlinks",name:"savedlinks",component:()=>qt(()=>import("./SavedLinks-0236208c.js"),["assets/SavedLinks-0236208c.js","assets/isValidUrl-8a2d7616.js","assets/triggerToast-bcf6dd6c.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Hn},{path:"/login",name:"login",component:()=>qt(()=>import("./Login-efda7adf.js"),["assets/Login-efda7adf.js","assets/triggerToast-bcf6dd6c.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Ag},{path:"/register",name:"register",component:()=>qt(()=>import("./Register-ff9c02da.js"),["assets/Register-ff9c02da.js","assets/triggerToast-bcf6dd6c.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Ag},{path:"/editlink/:id",name:"editlink",component:()=>qt(()=>import("./EditLink-0d10205d.js"),["assets/EditLink-0d10205d.js","assets/isValidUrl-8a2d7616.js","assets/triggerToast-bcf6dd6c.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Hn},{path:"/cssexperiment",name:"cssexperiment",component:()=>qt(()=>import("./CssExperimentView-911f93ef.js"),["assets/CssExperimentView-911f93ef.js","assets/CssExperimentView-7ebbd2c9.css"])},{path:"/chat",name:"chat",component:()=>qt(()=>import("./Chat-2ef4626c.js"),["assets/Chat-2ef4626c.js","assets/Chat-c98cd6f3.css"]),beforeEnter:Hn},{path:"/urlcollection",name:"urlcollection",component:()=>qt(()=>import("./UrlCollection-8f1f598e.js"),["assets/UrlCollection-8f1f598e.js","assets/colUrls-290702d8.js","assets/isValidUrl-8a2d7616.js","assets/triggerToast-bcf6dd6c.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Hn},{path:"/editurlcollection:id",name:"editurlcollection",component:()=>qt(()=>import("./EditUrlCollection-2046056b.js"),["assets/EditUrlCollection-2046056b.js","assets/colUrls-290702d8.js","assets/isValidUrl-8a2d7616.js","assets/triggerToast-bcf6dd6c.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Hn},{path:"/blog",name:"blog",component:()=>qt(()=>import("./Blog-2ce682dd.js"),["assets/Blog-2ce682dd.js","assets/blogPosts-e036b51c.js","assets/triggerToast-bcf6dd6c.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Hn},{path:"/editblog/:id",name:"editblog",component:()=>qt(()=>import("./EditBlog-ce780b35.js"),["assets/EditBlog-ce780b35.js","assets/blogPosts-e036b51c.js","assets/triggerToast-bcf6dd6c.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Hn},{path:"/myblogposts",name:"myblogposts",component:()=>qt(()=>import("./MyBlogPosts-80a5727b.js"),["assets/MyBlogPosts-80a5727b.js","assets/blogPosts-e036b51c.js","assets/triggerToast-bcf6dd6c.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Hn}]}),Sg=_h("database",()=>{let t=Le([]),e=Le(!1);return{documents:t,loadingDoc:e,getUrls:async()=>{e.value=!0;const a=za(ln,"urls");try{const c=gv(a,qP("user","==",Sn.currentUser.uid));(await GP(c)).forEach(u=>{t.value.push({id:u.id,...u.data()})})}catch(c){console.log(c)}finally{e.value=!1}},leerUrl:async a=>{e.value=!0;try{const c=Or(ln,"urls",a),l=await fa(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==Sn.currentUser.uid)throw new Error("No es dueño del documento");return l.data().name}catch(c){console.log(c.message)}finally{e.value=!1}},updateUrl:async(a,c)=>{e.value=!0;try{const l=Or(ln,"urls",a),u=await fa(l);if(!u.exists())throw new Error("no existe el doc");if(u.data().user===Sn.currentUser.uid)await qp(l,{name:c}),t.value=t.value.map(h=>h.id===a?{...h,name:c}:h);else throw new Error("no eres el autor")}catch(l){console.log(l.message)}finally{e.value=!1}},addUrl:async a=>{try{const c=za(ln,"urls"),l={name:a,user:Sn.currentUser.uid},u=await Tv(c,l),h=u.id;await qp(u,{short:h}),t.value.push({...l,id:h,short:h})}catch(c){console.log(c)}},deleteUrl:async a=>{try{const c=Or(ln,"urls",a),l=await fa(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==Sn.currentUser.uid)throw new Error("No es dueño del documento");await YP(Or(ln,"urls",a)),t.value=t.value.filter(u=>u.id!==a)}catch(c){console.log(c.message)}}}});var uE={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(di,function(){var n=1e3,r=6e4,s=36e5,i="millisecond",o="second",a="minute",c="hour",l="day",u="week",h="month",d="quarter",p="year",y="date",E="Invalid Date",A=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,C=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,x={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(D){var P=["th","st","nd","rd"],w=D%100;return"["+D+(P[(w-20)%10]||P[w]||P[0])+"]"}},z=function(D,P,w){var M=String(D);return!M||M.length>=P?D:""+Array(P+1-M.length).join(w)+D},L={s:z,z:function(D){var P=-D.utcOffset(),w=Math.abs(P),M=Math.floor(w/60),O=w%60;return(P<=0?"+":"-")+z(M,2,"0")+":"+z(O,2,"0")},m:function D(P,w){if(P.date()<w.date())return-D(w,P);var M=12*(w.year()-P.year())+(w.month()-P.month()),O=P.clone().add(M,h),ne=w-O<0,$=P.clone().add(M+(ne?-1:1),h);return+(-(M+(w-O)/(ne?O-$:$-O))||0)},a:function(D){return D<0?Math.ceil(D)||0:Math.floor(D)},p:function(D){return{M:h,y:p,w:u,d:l,D:y,h:c,m:a,s:o,ms:i,Q:d}[D]||String(D||"").toLowerCase().replace(/s$/,"")},u:function(D){return D===void 0}},J="en",re={};re[J]=x;var Te="$isDayjsObject",q=function(D){return D instanceof He||!(!D||!D[Te])},Q=function D(P,w,M){var O;if(!P)return J;if(typeof P=="string"){var ne=P.toLowerCase();re[ne]&&(O=ne),w&&(re[ne]=w,O=ne);var $=P.split("-");if(!O&&$.length>1)return D($[0])}else{var me=P.name;re[me]=P,O=me}return!M&&O&&(J=O),O||!M&&J},Y=function(D,P){if(q(D))return D.clone();var w=typeof P=="object"?P:{};return w.date=D,w.args=arguments,new He(w)},oe=L;oe.l=Q,oe.i=q,oe.w=function(D,P){return Y(D,{locale:P.$L,utc:P.$u,x:P.$x,$offset:P.$offset})};var He=function(){function D(w){this.$L=Q(w.locale,null,!0),this.parse(w),this.$x=this.$x||w.x||{},this[Te]=!0}var P=D.prototype;return P.parse=function(w){this.$d=function(M){var O=M.date,ne=M.utc;if(O===null)return new Date(NaN);if(oe.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var $=O.match(A);if($){var me=$[2]-1||0,ye=($[7]||"0").substring(0,3);return ne?new Date(Date.UTC($[1],me,$[3]||1,$[4]||0,$[5]||0,$[6]||0,ye)):new Date($[1],me,$[3]||1,$[4]||0,$[5]||0,$[6]||0,ye)}}return new Date(O)}(w),this.init()},P.init=function(){var w=this.$d;this.$y=w.getFullYear(),this.$M=w.getMonth(),this.$D=w.getDate(),this.$W=w.getDay(),this.$H=w.getHours(),this.$m=w.getMinutes(),this.$s=w.getSeconds(),this.$ms=w.getMilliseconds()},P.$utils=function(){return oe},P.isValid=function(){return this.$d.toString()!==E},P.isSame=function(w,M){var O=Y(w);return this.startOf(M)<=O&&O<=this.endOf(M)},P.isAfter=function(w,M){return Y(w)<this.startOf(M)},P.isBefore=function(w,M){return this.endOf(M)<Y(w)},P.$g=function(w,M,O){return oe.u(w)?this[M]:this.set(O,w)},P.unix=function(){return Math.floor(this.valueOf()/1e3)},P.valueOf=function(){return this.$d.getTime()},P.startOf=function(w,M){var O=this,ne=!!oe.u(M)||M,$=oe.p(w),me=function(F,H){var _e=oe.w(O.$u?Date.UTC(O.$y,H,F):new Date(O.$y,H,F),O);return ne?_e:_e.endOf(l)},ye=function(F,H){return oe.w(O.toDate()[F].apply(O.toDate("s"),(ne?[0,0,0,0]:[23,59,59,999]).slice(H)),O)},Ie=this.$W,Oe=this.$M,Fe=this.$D,Se="set"+(this.$u?"UTC":"");switch($){case p:return ne?me(1,0):me(31,11);case h:return ne?me(1,Oe):me(0,Oe+1);case u:var T=this.$locale().weekStart||0,j=(Ie<T?Ie+7:Ie)-T;return me(ne?Fe-j:Fe+(6-j),Oe);case l:case y:return ye(Se+"Hours",0);case c:return ye(Se+"Minutes",1);case a:return ye(Se+"Seconds",2);case o:return ye(Se+"Milliseconds",3);default:return this.clone()}},P.endOf=function(w){return this.startOf(w,!1)},P.$set=function(w,M){var O,ne=oe.p(w),$="set"+(this.$u?"UTC":""),me=(O={},O[l]=$+"Date",O[y]=$+"Date",O[h]=$+"Month",O[p]=$+"FullYear",O[c]=$+"Hours",O[a]=$+"Minutes",O[o]=$+"Seconds",O[i]=$+"Milliseconds",O)[ne],ye=ne===l?this.$D+(M-this.$W):M;if(ne===h||ne===p){var Ie=this.clone().set(y,1);Ie.$d[me](ye),Ie.init(),this.$d=Ie.set(y,Math.min(this.$D,Ie.daysInMonth())).$d}else me&&this.$d[me](ye);return this.init(),this},P.set=function(w,M){return this.clone().$set(w,M)},P.get=function(w){return this[oe.p(w)]()},P.add=function(w,M){var O,ne=this;w=Number(w);var $=oe.p(M),me=function(Oe){var Fe=Y(ne);return oe.w(Fe.date(Fe.date()+Math.round(Oe*w)),ne)};if($===h)return this.set(h,this.$M+w);if($===p)return this.set(p,this.$y+w);if($===l)return me(1);if($===u)return me(7);var ye=(O={},O[a]=r,O[c]=s,O[o]=n,O)[$]||1,Ie=this.$d.getTime()+w*ye;return oe.w(Ie,this)},P.subtract=function(w,M){return this.add(-1*w,M)},P.format=function(w){var M=this,O=this.$locale();if(!this.isValid())return O.invalidDate||E;var ne=w||"YYYY-MM-DDTHH:mm:ssZ",$=oe.z(this),me=this.$H,ye=this.$m,Ie=this.$M,Oe=O.weekdays,Fe=O.months,Se=O.meridiem,T=function(H,_e,g,m){return H&&(H[_e]||H(M,ne))||g[_e].slice(0,m)},j=function(H){return oe.s(me%12||12,H,"0")},F=Se||function(H,_e,g){var m=H<12?"AM":"PM";return g?m.toLowerCase():m};return ne.replace(C,function(H,_e){return _e||function(g){switch(g){case"YY":return String(M.$y).slice(-2);case"YYYY":return oe.s(M.$y,4,"0");case"M":return Ie+1;case"MM":return oe.s(Ie+1,2,"0");case"MMM":return T(O.monthsShort,Ie,Fe,3);case"MMMM":return T(Fe,Ie);case"D":return M.$D;case"DD":return oe.s(M.$D,2,"0");case"d":return String(M.$W);case"dd":return T(O.weekdaysMin,M.$W,Oe,2);case"ddd":return T(O.weekdaysShort,M.$W,Oe,3);case"dddd":return Oe[M.$W];case"H":return String(me);case"HH":return oe.s(me,2,"0");case"h":return j(1);case"hh":return j(2);case"a":return F(me,ye,!0);case"A":return F(me,ye,!1);case"m":return String(ye);case"mm":return oe.s(ye,2,"0");case"s":return String(M.$s);case"ss":return oe.s(M.$s,2,"0");case"SSS":return oe.s(M.$ms,3,"0");case"Z":return $}return null}(H)||$.replace(":","")})},P.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},P.diff=function(w,M,O){var ne,$=this,me=oe.p(M),ye=Y(w),Ie=(ye.utcOffset()-this.utcOffset())*r,Oe=this-ye,Fe=function(){return oe.m($,ye)};switch(me){case p:ne=Fe()/12;break;case h:ne=Fe();break;case d:ne=Fe()/3;break;case u:ne=(Oe-Ie)/6048e5;break;case l:ne=(Oe-Ie)/864e5;break;case c:ne=Oe/s;break;case a:ne=Oe/r;break;case o:ne=Oe/n;break;default:ne=Oe}return O?ne:oe.a(ne)},P.daysInMonth=function(){return this.endOf(h).$D},P.$locale=function(){return re[this.$L]},P.locale=function(w,M){if(!w)return this.$L;var O=this.clone(),ne=Q(w,M,!0);return ne&&(O.$L=ne),O},P.clone=function(){return oe.w(this.$d,this)},P.toDate=function(){return new Date(this.valueOf())},P.toJSON=function(){return this.isValid()?this.toISOString():null},P.toISOString=function(){return this.$d.toISOString()},P.toString=function(){return this.$d.toUTCString()},D}(),fe=He.prototype;return Y.prototype=fe,[["$ms",i],["$s",o],["$m",a],["$H",c],["$W",l],["$M",h],["$y",p],["$D",y]].forEach(function(D){fe[D[1]]=function(P){return this.$g(P,D[0],D[1])}}),Y.extend=function(D,P){return D.$i||(D(P,He,Y),D.$i=!0),Y},Y.locale=Q,Y.isDayjs=q,Y.unix=function(D){return Y(1e3*D)},Y.en=re[J],Y.Ls=re,Y.p={},Y})})(uE);var _D=uE.exports;const yD=Sm(_D),vD=_h("chatmsgs",()=>{let t=Le([]),e=Le(!1),n=null;const r=be(()=>[...t.value].reverse());return{documents:t,reversedDocuments:r,loadingDoc:e,getAllMsgs:()=>{e.value=!0;try{const o=gv(za(ln,"chats"),zP("createdAt","desc"),HP(17));return n=JP(o,a=>{t.value=a.docs.map(c=>({id:c.id,...c.data()})),e.value=!1}),n}catch(o){console.log(o),e.value=!1}},sendMsgs:async(o,a)=>{try{const c=yD().toDate(),l=et.fromDate(c),u={msg:o,sender:a,createdAt:l};await Tv(za(ln,"chats"),u)}catch(c){console.error("Error enviando mensaje: ",c)}}}}),Za=_h("user",()=>{let t=Le(null),e=Le(!1),n=Le(!1);return{loadingUser:e,loading:n,userData:t,registerUser:async(a,c,l)=>{e.value=!0;try{const{user:u}=await W1(Sn,a,c);t.value={email:u.email,uid:u.uid,nombre:l},await QP(Or(ln,"users",u.uid),{nombre:l,email:u.email,uid:u.uid}),ya.push("/")}catch(u){console.error(u),t.value=null}finally{e.value=!1}},loginUser:async(a,c)=>{e.value=!0;try{const{user:l}=await G1(Sn,a,c);t.value={email:l.email,uid:l.uid},ya.push("/")}catch(l){l.code==="auth/user-not-found"?alert("No se encontró ningún usuario con esa dirección de correo electrónico."):l.code==="auth/wrong-password"?alert("Clave equivocada"):(console.log(l),t.value=null)}finally{e.value=!1}},logoutUser:async(a,c)=>{Sg(),vD();try{await X1(Sn)}catch(l){console.log(l)}finally{t.value=null,n.value=!1,ya.push("/login")}},currentUser:()=>new Promise((a,c)=>{const l=J1(Sn,async u=>{if(u){const h=Or(ln,"users",u.uid),p=(await fa(h)).data();t.value={email:u.email,uid:u.uid,nombre:p.nombre}}else t.value=null,Sg();a(u),l()},u=>c(u))})}});const ED={class:"navbar navbar-expand-md expand-sm row"},TD={key:0,class:"d-flex"},ID=["checked"],wD=Ye("label",{for:"swc",class:"swc-label me-2","aria-label":"cambio a modo oscuro o claro",tabindex:"7"},[Ye("span",{class:"swc-inner"}),Ye("span",{class:"swc-switch"}),Ye("span",{class:"swc-switch-mask"})],-1),AD={key:1},SD={__name:"CustomHeader",props:{isDark:{type:Boolean}},emits:["toggleDark"],setup(t){const e=Za();return(n,r)=>{const s=um("router-link");return Wn(),hi("header",null,[Ye("nav",ED,[ht(Za).loading?(Wn(),hi("div",AD,"Loading user...")):(Wn(),hi("ul",TD,[Ye("li",null,[ae(s,{to:"/",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"1"},{default:on(()=>[an("Inicio ")]),_:1},8,["class"])]),Ye("li",null,[ae(s,{to:"/blog",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"2"},{default:on(()=>[an("Blog ")]),_:1},8,["class"])]),Ye("li",null,[ae(s,{to:"/myblogposts",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"2"},{default:on(()=>[an("Mi Blog Personal ")]),_:1},8,["class"])]),Ye("li",null,[ae(s,{to:"/chat",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"3"},{default:on(()=>[an("Chat ")]),_:1},8,["class"])]),Ye("li",null,[ae(s,{to:"/savedlinks",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"4"},{default:on(()=>[an("Mis Links ")]),_:1},8,["class"])]),Ye("li",null,[ae(s,{to:"/cssexperiment",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"]),tabindex:"5"},{default:on(()=>[an("Css tricks ")]),_:1},8,["class"])]),Ye("li",null,[ae(s,{to:"/urlcollection",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"]),tabindex:"7"},{default:on(()=>[an("Mis Urls ")]),_:1},8,["class"])]),Ye("li",null,[Ye("input",{type:"checkbox",id:"swc",class:"swc-checkbox",checked:t.isDark,onChange:r[0]||(r[0]=i=>n.$emit("toggleDark"))},null,40,ID),wD]),Ye("li",null,[ht(e).userData?yl("",!0):(Wn(),ru(s,{key:0,to:"/login",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"])},{default:on(()=>[an("Login ")]),_:1},8,["class"]))]),Ye("li",null,[ht(e).userData?yl("",!0):(Wn(),ru(s,{key:0,to:"/register",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"])},{default:on(()=>[an("Register ")]),_:1},8,["class"]))]),Ye("li",null,[ht(e).userData?(Wn(),hi("button",{key:0,class:"btn btn-primary",onClick:r[1]||(r[1]=(...i)=>ht(e).logoutUser&&ht(e).logoutUser(...i))},"Logout ")):yl("",!0)])]))])])}}};const RD={class:"container-fluid"},bD={__name:"App",setup(t){const e=hA({selector:"body",valueDark:"bd-dark",valueLight:"bd-light"}),n=eA(e);return(r,s)=>{const i=um("RouterView");return Wn(),hi(Gt,null,[ae(SD,{isDark:ht(e),onToggleDark:ht(n),class:Dt(["container my-2 p-4",ht(e)?"bg-dark":"bg-light"])},null,8,["isDark","onToggleDark","class"]),Ye("div",RD,[Ye("main",{class:Dt(["container my-2 p-4",ht(e)?"bg-dark":"bg-light"])},[ae(i)],2)])],64)}}},ko=Am(bD),hE=Lw();hE.use(Vw);ko.use(hE);ko.use(ya);ko.use(Um);ko.component("virtual-list",z0);ko.mount("#app");export{ln as A,zP as B,HP as C,JP as D,Tv as E,Gt as F,Ht as G,_h as H,qP as I,Sn as J,GP as K,Or as L,fa as M,qp as N,xD as O,YP as P,je as Q,et as T,Wn as a,Ye as b,hi as c,an as d,ht as e,yl as f,ae as g,LD as h,Sg as i,PD as j,OD as k,We as l,FD as m,Dt as n,Hr as o,Zu as p,yD as q,Le as r,be as s,CD as t,Za as u,kD as v,DD as w,Hs as x,gv as y,za as z};
