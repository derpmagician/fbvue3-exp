(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Mu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Pe={},cs=[],Kt=()=>{},$E=()=>!1,qE=/^on[^a-z]/,qa=t=>qE.test(t),xu=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Lu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},HE=Object.prototype.hasOwnProperty,_e=(t,e)=>HE.call(t,e),X=Array.isArray,ls=t=>Ha(t)==="[object Map]",og=t=>Ha(t)==="[object Set]",oe=t=>typeof t=="function",Ke=t=>typeof t=="string",Fu=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",ag=t=>Ne(t)&&oe(t.then)&&oe(t.catch),cg=Object.prototype.toString,Ha=t=>cg.call(t),KE=t=>Ha(t).slice(8,-1),lg=t=>Ha(t)==="[object Object]",Uu=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Go=Mu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ka=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zE=/-(\w)/g,dn=Ka(t=>t.replace(zE,(e,n)=>n?n.toUpperCase():"")),WE=/\B([A-Z])/g,Ds=Ka(t=>t.replace(WE,"-$1").toLowerCase()),za=Ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zc=Ka(t=>t?`on${za(t)}`:""),Si=(t,e)=>!Object.is(t,e),Qo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ha=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Dl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Dd;const Vl=()=>Dd||(Dd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bu(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?JE(r):Bu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ke(t))return t;if(Ne(t))return t}}const GE=/;(?![^(]*\))/g,QE=/:([^]+)/,YE=/\/\*[^]*?\*\//g;function JE(t){const e={};return t.replace(YE,"").split(GE).forEach(n=>{if(n){const r=n.split(QE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Nt(t){let e="";if(Ke(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const r=Nt(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const XE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ZE=Mu(XE);function ug(t){return!!t||t===""}const WO=t=>Ke(t)?t:t==null?"":X(t)||Ne(t)&&(t.toString===cg||!oe(t.toString))?JSON.stringify(t,hg,2):String(t),hg=(t,e)=>e&&e.__v_isRef?hg(t,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:og(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!X(e)&&!lg(e)?String(e):e;let Ot;class dg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function fg(t){return new dg(t)}function eI(t,e=Ot){e&&e.active&&e.effects.push(t)}function ju(){return Ot}function pg(t){Ot&&Ot.cleanups.push(t)}const $u=t=>{const e=new Set(t);return e.w=0,e.n=0,e},gg=t=>(t.w&nr)>0,mg=t=>(t.n&nr)>0,tI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=nr},nI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];gg(s)&&!mg(s)?s.delete(t):e[n++]=s,s.w&=~nr,s.n&=~nr}e.length=n}},da=new WeakMap;let ti=0,nr=1;const Ml=30;let qt;const Rr=Symbol(""),xl=Symbol("");class qu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,eI(this,r)}run(){if(!this.active)return this.fn();let e=qt,n=Gn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,Gn=!0,nr=1<<++ti,ti<=Ml?tI(this):Vd(this),this.fn()}finally{ti<=Ml&&nI(this),nr=1<<--ti,qt=this.parent,Gn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(Vd(this),this.onStop&&this.onStop(),this.active=!1)}}function Vd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Gn=!0;const _g=[];function Vs(){_g.push(Gn),Gn=!1}function Ms(){const t=_g.pop();Gn=t===void 0?!0:t}function bt(t,e,n){if(Gn&&qt){let r=da.get(t);r||da.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=$u()),yg(s)}}function yg(t,e){let n=!1;ti<=Ml?mg(t)||(t.n|=nr,n=!gg(t)):n=!t.has(qt),n&&(t.add(qt),qt.deps.push(t))}function Sn(t,e,n,r,s,i){const o=da.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?Uu(n)&&a.push(o.get("length")):(a.push(o.get(Rr)),ls(t)&&a.push(o.get(xl)));break;case"delete":X(t)||(a.push(o.get(Rr)),ls(t)&&a.push(o.get(xl)));break;case"set":ls(t)&&a.push(o.get(Rr));break}if(a.length===1)a[0]&&Ll(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ll($u(c))}}function Ll(t,e){const n=X(t)?t:[...t];for(const r of n)r.computed&&Md(r);for(const r of n)r.computed||Md(r)}function Md(t,e){(t!==qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function rI(t,e){var n;return(n=da.get(t))==null?void 0:n.get(e)}const sI=Mu("__proto__,__v_isRef,__isVue"),vg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fu)),iI=Hu(),oI=Hu(!1,!0),aI=Hu(!0),xd=cI();function cI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)bt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Vs();const r=re(this)[e].apply(this,n);return Ms(),r}}),t}function lI(t){const e=re(this);return bt(e,"has",t),e.hasOwnProperty(t)}function Hu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?RI:Ag:e?wg:Tg).get(r))return r;const o=X(r);if(!t){if(o&&_e(xd,s))return Reflect.get(xd,s,i);if(s==="hasOwnProperty")return lI}const a=Reflect.get(r,s,i);return(Fu(s)?vg.has(s):sI(s))||(t||bt(r,"get",s),e)?a:Ve(a)?o&&Uu(s)?a:a.value:Ne(a)?t?Ga(a):Xt(a):a}}const uI=Eg(),hI=Eg(!0);function Eg(t=!1){return function(n,r,s,i){let o=n[r];if(_s(o)&&Ve(o)&&!Ve(s))return!1;if(!t&&(!fa(s)&&!_s(s)&&(o=re(o),s=re(s)),!X(n)&&Ve(o)&&!Ve(s)))return o.value=s,!0;const a=X(n)&&Uu(r)?Number(r)<n.length:_e(n,r),c=Reflect.set(n,r,s,i);return n===re(i)&&(a?Si(s,o)&&Sn(n,"set",r,s):Sn(n,"add",r,s)),c}}function dI(t,e){const n=_e(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Sn(t,"delete",e,void 0),r}function fI(t,e){const n=Reflect.has(t,e);return(!Fu(e)||!vg.has(e))&&bt(t,"has",e),n}function pI(t){return bt(t,"iterate",X(t)?"length":Rr),Reflect.ownKeys(t)}const Ig={get:iI,set:uI,deleteProperty:dI,has:fI,ownKeys:pI},gI={get:aI,set(t,e){return!0},deleteProperty(t,e){return!0}},mI=Ye({},Ig,{get:oI,set:hI}),Ku=t=>t,Wa=t=>Reflect.getPrototypeOf(t);function ko(t,e,n=!1,r=!1){t=t.__v_raw;const s=re(t),i=re(e);n||(e!==i&&bt(s,"get",e),bt(s,"get",i));const{has:o}=Wa(s),a=r?Ku:n?Gu:Pi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Oo(t,e=!1){const n=this.__v_raw,r=re(n),s=re(t);return e||(t!==s&&bt(r,"has",t),bt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function No(t,e=!1){return t=t.__v_raw,!e&&bt(re(t),"iterate",Rr),Reflect.get(t,"size",t)}function Ld(t){t=re(t);const e=re(this);return Wa(e).has.call(e,t)||(e.add(t),Sn(e,"add",t,t)),this}function Fd(t,e){e=re(e);const n=re(this),{has:r,get:s}=Wa(n);let i=r.call(n,t);i||(t=re(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Si(e,o)&&Sn(n,"set",t,e):Sn(n,"add",t,e),this}function Ud(t){const e=re(this),{has:n,get:r}=Wa(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Sn(e,"delete",t,void 0),i}function Bd(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Sn(t,"clear",void 0,void 0),n}function Do(t,e){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=e?Ku:t?Gu:Pi;return!t&&bt(a,"iterate",Rr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Vo(t,e,n){return function(...r){const s=this.__v_raw,i=re(s),o=ls(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ku:e?Gu:Pi;return!e&&bt(i,"iterate",c?xl:Rr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function xn(t){return function(...e){return t==="delete"?!1:this}}function _I(){const t={get(i){return ko(this,i)},get size(){return No(this)},has:Oo,add:Ld,set:Fd,delete:Ud,clear:Bd,forEach:Do(!1,!1)},e={get(i){return ko(this,i,!1,!0)},get size(){return No(this)},has:Oo,add:Ld,set:Fd,delete:Ud,clear:Bd,forEach:Do(!1,!0)},n={get(i){return ko(this,i,!0)},get size(){return No(this,!0)},has(i){return Oo.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:Do(!0,!1)},r={get(i){return ko(this,i,!0,!0)},get size(){return No(this,!0)},has(i){return Oo.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:Do(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Vo(i,!1,!1),n[i]=Vo(i,!0,!1),e[i]=Vo(i,!1,!0),r[i]=Vo(i,!0,!0)}),[t,n,e,r]}const[yI,vI,EI,II]=_I();function zu(t,e){const n=e?t?II:EI:t?vI:yI;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(_e(n,s)&&s in r?n:r,s,i)}const TI={get:zu(!1,!1)},wI={get:zu(!1,!0)},AI={get:zu(!0,!1)},Tg=new WeakMap,wg=new WeakMap,Ag=new WeakMap,RI=new WeakMap;function SI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function PI(t){return t.__v_skip||!Object.isExtensible(t)?0:SI(KE(t))}function Xt(t){return _s(t)?t:Wu(t,!1,Ig,TI,Tg)}function Rg(t){return Wu(t,!1,mI,wI,wg)}function Ga(t){return Wu(t,!0,gI,AI,Ag)}function Wu(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=PI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Qn(t){return _s(t)?Qn(t.__v_raw):!!(t&&t.__v_isReactive)}function _s(t){return!!(t&&t.__v_isReadonly)}function fa(t){return!!(t&&t.__v_isShallow)}function Sg(t){return Qn(t)||_s(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Qa(t){return ha(t,"__v_skip",!0),t}const Pi=t=>Ne(t)?Xt(t):t,Gu=t=>Ne(t)?Ga(t):t;function Qu(t){Gn&&qt&&(t=re(t),yg(t.dep||(t.dep=$u())))}function Yu(t,e){t=re(t);const n=t.dep;n&&Ll(n)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function Fe(t){return Cg(t,!1)}function Pg(t){return Cg(t,!0)}function Cg(t,e){return Ve(t)?t:new CI(t,e)}class CI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Pi(e)}get value(){return Qu(this),this._value}set value(e){const n=this.__v_isShallow||fa(e)||_s(e);e=n?e:re(e),Si(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Pi(e),Yu(this))}}function Qe(t){return Ve(t)?t.value:t}const bI={get:(t,e,n)=>Qe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ve(s)&&!Ve(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function bg(t){return Qn(t)?t:new Proxy(t,bI)}class kI{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Qu(this),()=>Yu(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function OI(t){return new kI(t)}function NI(t){const e=X(t)?new Array(t.length):{};for(const n in t)e[n]=kg(t,n);return e}class DI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return rI(re(this._object),this._key)}}class VI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function MI(t,e,n){return Ve(t)?t:oe(t)?new VI(t):Ne(t)&&arguments.length>1?kg(t,e,n):Fe(t)}function kg(t,e,n){const r=t[e];return Ve(r)?r:new DI(t,e,n)}class xI{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new qu(e,()=>{this._dirty||(this._dirty=!0,Yu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=re(this);return Qu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function LI(t,e,n=!1){let r,s;const i=oe(t);return i?(r=t,s=Kt):(r=t.get,s=t.set),new xI(r,s,i||!s,n)}function Yn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ya(i,e,n)}return s}function zt(t,e,n,r){if(oe(t)){const i=Yn(t,e,n,r);return i&&ag(i)&&i.catch(o=>{Ya(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(zt(t[i],e,n,r));return s}function Ya(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Yn(c,null,10,[t,o,a]);return}}FI(t,n,s,r)}function FI(t,e,n,r=!0){console.error(t)}let Ci=!1,Fl=!1;const ut=[];let nn=0;const us=[];let En=null,vr=0;const Og=Promise.resolve();let Ju=null;function Fr(t){const e=Ju||Og;return t?e.then(this?t.bind(this):t):e}function UI(t){let e=nn+1,n=ut.length;for(;e<n;){const r=e+n>>>1;bi(ut[r])<t?e=r+1:n=r}return e}function Xu(t){(!ut.length||!ut.includes(t,Ci&&t.allowRecurse?nn+1:nn))&&(t.id==null?ut.push(t):ut.splice(UI(t.id),0,t),Ng())}function Ng(){!Ci&&!Fl&&(Fl=!0,Ju=Og.then(Vg))}function BI(t){const e=ut.indexOf(t);e>nn&&ut.splice(e,1)}function jI(t){X(t)?us.push(...t):(!En||!En.includes(t,t.allowRecurse?vr+1:vr))&&us.push(t),Ng()}function jd(t,e=Ci?nn+1:0){for(;e<ut.length;e++){const n=ut[e];n&&n.pre&&(ut.splice(e,1),e--,n())}}function Dg(t){if(us.length){const e=[...new Set(us)];if(us.length=0,En){En.push(...e);return}for(En=e,En.sort((n,r)=>bi(n)-bi(r)),vr=0;vr<En.length;vr++)En[vr]();En=null,vr=0}}const bi=t=>t.id==null?1/0:t.id,$I=(t,e)=>{const n=bi(t)-bi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Vg(t){Fl=!1,Ci=!0,ut.sort($I);const e=Kt;try{for(nn=0;nn<ut.length;nn++){const n=ut[nn];n&&n.active!==!1&&Yn(n,null,14)}}finally{nn=0,ut.length=0,Dg(),Ci=!1,Ju=null,(ut.length||us.length)&&Vg()}}function qI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Pe;d&&(s=n.map(g=>Ke(g)?g.trim():g)),h&&(s=n.map(Dl))}let a,c=r[a=Zc(e)]||r[a=Zc(dn(e))];!c&&i&&(c=r[a=Zc(Ds(e))]),c&&zt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zt(l,t,6,s)}}function Mg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!oe(t)){const c=l=>{const u=Mg(l,e,!0);u&&(a=!0,Ye(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ne(t)&&r.set(t,null),null):(X(i)?i.forEach(c=>o[c]=null):Ye(o,i),Ne(t)&&r.set(t,o),o)}function Ja(t,e){return!t||!qa(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,Ds(e))||_e(t,e))}let Pt=null,xg=null;function pa(t){const e=Pt;return Pt=t,xg=t&&t.type.__scopeId||null,e}function yn(t,e=Pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Xd(-1);const i=pa(e);let o;try{o=t(...s)}finally{pa(i),r._d&&Xd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function el(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:E}=t;let A,C;const N=pa(t);try{if(n.shapeFlag&4){const O=s||r;A=tn(u.call(O,O,h,i,g,d,v)),C=c}else{const O=e;A=tn(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),C=e.props?c:HI(c)}}catch(O){pi.length=0,Ya(O,t,1),A=ce(br)}let U=A;if(C&&E!==!1){const O=Object.keys(C),{shapeFlag:Q}=U;O.length&&Q&7&&(o&&O.some(xu)&&(C=KI(C,o)),U=kr(U,C))}return n.dirs&&(U=kr(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),A=U,pa(N),A}const HI=t=>{let e;for(const n in t)(n==="class"||n==="style"||qa(n))&&((e||(e={}))[n]=t[n]);return e},KI=(t,e)=>{const n={};for(const r in t)(!xu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$d(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ja(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$d(r,o,l):!0:!!o;return!1}function $d(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ja(n,i))return!0}return!1}function WI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const GI=t=>t.__isSuspense;function QI(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):jI(t)}function di(t,e){return Zu(t,null,e)}const Mo={};function Jn(t,e,n){return Zu(t,e,n)}function Zu(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Pe){var a;const c=ju()===((a=qe)==null?void 0:a.scope)?qe:null;let l,u=!1,h=!1;if(Ve(t)?(l=()=>t.value,u=fa(t)):Qn(t)?(l=()=>t,r=!0):X(t)?(h=!0,u=t.some(O=>Qn(O)||fa(O)),l=()=>t.map(O=>{if(Ve(O))return O.value;if(Qn(O))return Ir(O);if(oe(O))return Yn(O,c,2)})):oe(t)?e?l=()=>Yn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),zt(t,c,3,[g])}:l=Kt,e&&r){const O=l;l=()=>Ir(O())}let d,g=O=>{d=N.onStop=()=>{Yn(O,c,4)}},v;if(Di)if(g=Kt,e?n&&zt(e,c,3,[l(),h?[]:void 0,g]):l(),s==="sync"){const O=$T();v=O.__watcherHandles||(O.__watcherHandles=[])}else return Kt;let E=h?new Array(t.length).fill(Mo):Mo;const A=()=>{if(N.active)if(e){const O=N.run();(r||u||(h?O.some((Q,se)=>Si(Q,E[se])):Si(O,E)))&&(d&&d(),zt(e,c,3,[O,E===Mo?void 0:h&&E[0]===Mo?[]:E,g]),E=O)}else N.run()};A.allowRecurse=!!e;let C;s==="sync"?C=A:s==="post"?C=()=>Rt(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),C=()=>Xu(A));const N=new qu(l,C);e?n?A():E=N.run():s==="post"?Rt(N.run.bind(N),c&&c.suspense):N.run();const U=()=>{N.stop(),c&&c.scope&&Lu(c.scope.effects,N)};return v&&v.push(U),U}function YI(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?Lg(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const o=qe;ys(this);const a=Zu(s,i.bind(r),n);return o?ys(o):Sr(),a}function Lg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ir(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))Ir(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)Ir(t[n],e);else if(og(t)||ls(t))t.forEach(n=>{Ir(n,e)});else if(lg(t))for(const n in t)Ir(t[n],e);return t}function GO(t,e){const n=Pt;if(n===null)return t;const r=nc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Pe]=e[i];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&Ir(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function gr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Vs(),zt(c,n,8,[t.el,a,t,e]),Ms())}}function xs(t,e){return oe(t)?(()=>Ye({name:t.name},e,{setup:t}))():t}const Yo=t=>!!t.type.__asyncLoader,Fg=t=>t.type.__isKeepAlive;function JI(t,e){Ug(t,"a",e)}function XI(t,e){Ug(t,"da",e)}function Ug(t,e,n=qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Fg(s.parent.vnode)&&ZI(r,e,n,s),s=s.parent}}function ZI(t,e,n,r){const s=Xa(e,t,r,!0);Za(()=>{Lu(r[e],s)},n)}function Xa(t,e,n=qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Vs(),ys(n);const a=zt(e,n,t,o);return Sr(),Ms(),a});return r?s.unshift(i):s.push(i),i}}const Nn=t=>(e,n=qe)=>(!Di||t==="sp")&&Xa(t,(...r)=>e(...r),n),eT=Nn("bm"),eo=Nn("m"),tT=Nn("bu"),nT=Nn("u"),rT=Nn("bum"),Za=Nn("um"),sT=Nn("sp"),iT=Nn("rtg"),oT=Nn("rtc");function aT(t,e=qe){Xa("ec",t,e)}const Bg="components";function cT(t,e){return uT(Bg,t,!0,e)||t}const lT=Symbol.for("v-ndc");function uT(t,e,n=!0,r=!1){const s=Pt||qe;if(s){const i=s.type;if(t===Bg){const a=UT(i,!1);if(a&&(a===e||a===dn(e)||a===za(dn(e))))return i}const o=qd(s[t]||i[t],e)||qd(s.appContext[t],e);return!o&&r?i:o}}function qd(t,e){return t&&(t[e]||t[dn(e)]||t[za(dn(e))])}function QO(t,e,n,r){let s;const i=n&&n[r];if(X(t)||Ke(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ul=t=>t?Xg(t)?nc(t)||t.proxy:Ul(t.parent):null,fi=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ul(t.parent),$root:t=>Ul(t.root),$emit:t=>t.emit,$options:t=>eh(t),$forceUpdate:t=>t.f||(t.f=()=>Xu(t.update)),$nextTick:t=>t.n||(t.n=Fr.bind(t.proxy)),$watch:t=>YI.bind(t)}),tl=(t,e)=>t!==Pe&&!t.__isScriptSetup&&_e(t,e),hT={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(tl(r,e))return o[e]=1,r[e];if(s!==Pe&&_e(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&_e(l,e))return o[e]=3,i[e];if(n!==Pe&&_e(n,e))return o[e]=4,n[e];Bl&&(o[e]=0)}}const u=fi[e];let h,d;if(u)return e==="$attrs"&&bt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&_e(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,_e(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return tl(s,e)?(s[e]=n,!0):r!==Pe&&_e(r,e)?(r[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Pe&&_e(t,o)||tl(e,o)||(a=i[0])&&_e(a,o)||_e(r,o)||_e(fi,o)||_e(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Hd(t){return X(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Bl=!0;function dT(t){const e=eh(t),n=t.proxy,r=t.ctx;Bl=!1,e.beforeCreate&&Kd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:E,deactivated:A,beforeDestroy:C,beforeUnmount:N,destroyed:U,unmounted:O,render:Q,renderTracked:se,renderTriggered:fe,errorCaptured:F,serverPrefetch:z,expose:ie,inheritAttrs:$e,components:st,directives:_t,filters:Zt}=e;if(l&&fT(l,r,null),o)for(const we in o){const ve=o[we];oe(ve)&&(r[we]=ve.bind(n))}if(s){const we=s.call(n,n);Ne(we)&&(t.data=Xt(we))}if(Bl=!0,i)for(const we in i){const ve=i[we],Bt=oe(ve)?ve.bind(n,n):oe(ve.get)?ve.get.bind(n,n):Kt,he=!oe(ve)&&oe(ve.set)?ve.set.bind(n):Kt,Mt=ye({get:Bt,set:he});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:it=>Mt.value=it})}if(a)for(const we in a)jg(a[we],r,n,we);if(c){const we=oe(c)?c.call(n):c;Reflect.ownKeys(we).forEach(ve=>{Jo(ve,we[ve])})}u&&Kd(u,t,"c");function ge(we,ve){X(ve)?ve.forEach(Bt=>we(Bt.bind(n))):ve&&we(ve.bind(n))}if(ge(eT,h),ge(eo,d),ge(tT,g),ge(nT,v),ge(JI,E),ge(XI,A),ge(aT,F),ge(oT,se),ge(iT,fe),ge(rT,N),ge(Za,O),ge(sT,z),X(ie))if(ie.length){const we=t.exposed||(t.exposed={});ie.forEach(ve=>{Object.defineProperty(we,ve,{get:()=>n[ve],set:Bt=>n[ve]=Bt})})}else t.exposed||(t.exposed={});Q&&t.render===Kt&&(t.render=Q),$e!=null&&(t.inheritAttrs=$e),st&&(t.components=st),_t&&(t.directives=_t)}function fT(t,e,n=Kt){X(t)&&(t=jl(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=Ut(s.from||r,s.default,!0):i=Ut(s.from||r):i=Ut(s),Ve(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Kd(t,e,n){zt(X(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function jg(t,e,n,r){const s=r.includes(".")?Lg(n,r):()=>n[r];if(Ke(t)){const i=e[t];oe(i)&&Jn(s,i)}else if(oe(t))Jn(s,t.bind(n));else if(Ne(t))if(X(t))t.forEach(i=>jg(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&Jn(s,i,t)}}function eh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>ga(c,l,o,!0)),ga(c,e,o)),Ne(e)&&i.set(e,c),c}function ga(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ga(t,i,n,!0),s&&s.forEach(o=>ga(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=pT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const pT={data:zd,props:Wd,emits:Wd,methods:ni,computed:ni,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:ni,directives:ni,watch:mT,provide:zd,inject:gT};function zd(t,e){return e?t?function(){return Ye(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function gT(t,e){return ni(jl(t),jl(e))}function jl(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function ni(t,e){return t?Ye(Object.create(null),t,e):e}function Wd(t,e){return t?X(t)&&X(e)?[...new Set([...t,...e])]:Ye(Object.create(null),Hd(t),Hd(e??{})):e}function mT(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function $g(){return{app:null,config:{isNativeTag:$E,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _T=0;function yT(t,e){return function(r,s=null){oe(r)||(r=Ye({},r)),s!=null&&!Ne(s)&&(s=null);const i=$g(),o=new Set;let a=!1;const c=i.app={_uid:_T++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:qT,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&oe(l.install)?(o.add(l),l.install(c,...u)):oe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ce(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,nc(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){ki=c;try{return l()}finally{ki=null}}};return c}}let ki=null;function Jo(t,e){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[t]=e}}function Ut(t,e,n=!1){const r=qe||Pt;if(r||ki){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ki._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r&&r.proxy):e}}function vT(){return!!(qe||Pt||ki)}function ET(t,e,n,r=!1){const s={},i={};ha(i,tc,1),t.propsDefaults=Object.create(null),qg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Rg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function IT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=re(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ja(t.emitsOptions,d))continue;const g=e[d];if(c)if(_e(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const v=dn(d);s[v]=$l(c,a,v,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{qg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!_e(e,h)&&((u=Ds(h))===h||!_e(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=$l(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!_e(e,h))&&(delete i[h],l=!0)}l&&Sn(t,"set","$attrs")}function qg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Go(c))continue;const l=e[c];let u;s&&_e(s,u=dn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ja(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=re(n),l=a||Pe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=$l(s,c,h,l[h],t,!_e(l,h))}}return o}function $l(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=_e(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&oe(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(ys(s),r=l[n]=c.call(null,e),Sr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ds(n))&&(r=!0))}return r}function Hg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!oe(t)){const u=h=>{c=!0;const[d,g]=Hg(h,e,!0);Ye(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ne(t)&&r.set(t,cs),cs;if(X(i))for(let u=0;u<i.length;u++){const h=dn(i[u]);Gd(h)&&(o[h]=Pe)}else if(i)for(const u in i){const h=dn(u);if(Gd(h)){const d=i[u],g=o[h]=X(d)||oe(d)?{type:d}:Ye({},d);if(g){const v=Jd(Boolean,g.type),E=Jd(String,g.type);g[0]=v>-1,g[1]=E<0||v<E,(v>-1||_e(g,"default"))&&a.push(h)}}}const l=[o,a];return Ne(t)&&r.set(t,l),l}function Gd(t){return t[0]!=="$"}function Qd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Yd(t,e){return Qd(t)===Qd(e)}function Jd(t,e){return X(e)?e.findIndex(n=>Yd(n,t)):oe(e)&&Yd(e,t)?0:-1}const Kg=t=>t[0]==="_"||t==="$stable",th=t=>X(t)?t.map(tn):[tn(t)],TT=(t,e,n)=>{if(e._n)return e;const r=yn((...s)=>th(e(...s)),n);return r._c=!1,r},zg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kg(s))continue;const i=t[s];if(oe(i))e[s]=TT(s,i,r);else if(i!=null){const o=th(i);e[s]=()=>o}}},Wg=(t,e)=>{const n=th(e);t.slots.default=()=>n},wT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),ha(e,"_",n)):zg(e,t.slots={})}else t.slots={},e&&Wg(t,e);ha(t.slots,tc,1)},AT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Pe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ye(s,e),!n&&a===1&&delete s._):(i=!e.$stable,zg(e,s)),o=e}else e&&(Wg(t,e),o={default:1});if(i)for(const a in s)!Kg(a)&&!(a in o)&&delete s[a]};function ql(t,e,n,r,s=!1){if(X(t)){t.forEach((d,g)=>ql(d,e&&(X(e)?e[g]:e),n,r,s));return}if(Yo(r)&&!s)return;const i=r.shapeFlag&4?nc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ke(l)?(u[l]=null,_e(h,l)&&(h[l]=null)):Ve(l)&&(l.value=null)),oe(c))Yn(c,a,12,[o,u]);else{const d=Ke(c),g=Ve(c);if(d||g){const v=()=>{if(t.f){const E=d?_e(h,c)?h[c]:u[c]:c.value;s?X(E)&&Lu(E,i):X(E)?E.includes(i)||E.push(i):d?(u[c]=[i],_e(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,_e(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Rt(v,n)):v()}}}const Rt=QI;function RT(t){return ST(t)}function ST(t,e){const n=Vl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Kt,insertStaticContent:v}=t,E=(p,m,_,I=null,R=null,P=null,L=!1,D=null,V=!!m.dynamicChildren)=>{if(p===m)return;p&&!Ys(p,m)&&(I=T(p),it(p,R,P,!0),p=null),m.patchFlag===-2&&(V=!1,m.dynamicChildren=null);const{type:b,ref:G,shapeFlag:$}=m;switch(b){case ec:A(p,m,_,I);break;case br:C(p,m,_,I);break;case nl:p==null&&N(m,_,I,L);break;case $t:st(p,m,_,I,R,P,L,D,V);break;default:$&1?Q(p,m,_,I,R,P,L,D,V):$&6?_t(p,m,_,I,R,P,L,D,V):($&64||$&128)&&b.process(p,m,_,I,R,P,L,D,V,M)}G!=null&&R&&ql(G,p&&p.ref,P,m||p,!m)},A=(p,m,_,I)=>{if(p==null)r(m.el=a(m.children),_,I);else{const R=m.el=p.el;m.children!==p.children&&l(R,m.children)}},C=(p,m,_,I)=>{p==null?r(m.el=c(m.children||""),_,I):m.el=p.el},N=(p,m,_,I)=>{[p.el,p.anchor]=v(p.children,m,_,I,p.el,p.anchor)},U=({el:p,anchor:m},_,I)=>{let R;for(;p&&p!==m;)R=d(p),r(p,_,I),p=R;r(m,_,I)},O=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),s(p),p=_;s(m)},Q=(p,m,_,I,R,P,L,D,V)=>{L=L||m.type==="svg",p==null?se(m,_,I,R,P,L,D,V):z(p,m,R,P,L,D,V)},se=(p,m,_,I,R,P,L,D)=>{let V,b;const{type:G,props:$,shapeFlag:q,transition:J,dirs:le}=p;if(V=p.el=o(p.type,P,$&&$.is,$),q&8?u(V,p.children):q&16&&F(p.children,V,null,I,R,P&&G!=="foreignObject",L,D),le&&gr(p,null,I,"created"),fe(V,p,p.scopeId,L,I),$){for(const Ee in $)Ee!=="value"&&!Go(Ee)&&i(V,Ee,null,$[Ee],P,p.children,I,R,ze);"value"in $&&i(V,"value",null,$.value),(b=$.onVnodeBeforeMount)&&en(b,I,p)}le&&gr(p,null,I,"beforeMount");const Ae=(!R||R&&!R.pendingBranch)&&J&&!J.persisted;Ae&&J.beforeEnter(V),r(V,m,_),((b=$&&$.onVnodeMounted)||Ae||le)&&Rt(()=>{b&&en(b,I,p),Ae&&J.enter(V),le&&gr(p,null,I,"mounted")},R)},fe=(p,m,_,I,R)=>{if(_&&g(p,_),I)for(let P=0;P<I.length;P++)g(p,I[P]);if(R){let P=R.subTree;if(m===P){const L=R.vnode;fe(p,L,L.scopeId,L.slotScopeIds,R.parent)}}},F=(p,m,_,I,R,P,L,D,V=0)=>{for(let b=V;b<p.length;b++){const G=p[b]=D?jn(p[b]):tn(p[b]);E(null,G,m,_,I,R,P,L,D)}},z=(p,m,_,I,R,P,L)=>{const D=m.el=p.el;let{patchFlag:V,dynamicChildren:b,dirs:G}=m;V|=p.patchFlag&16;const $=p.props||Pe,q=m.props||Pe;let J;_&&mr(_,!1),(J=q.onVnodeBeforeUpdate)&&en(J,_,m,p),G&&gr(m,p,_,"beforeUpdate"),_&&mr(_,!0);const le=R&&m.type!=="foreignObject";if(b?ie(p.dynamicChildren,b,D,_,I,le,P):L||ve(p,m,D,null,_,I,le,P,!1),V>0){if(V&16)$e(D,m,$,q,_,I,R);else if(V&2&&$.class!==q.class&&i(D,"class",null,q.class,R),V&4&&i(D,"style",$.style,q.style,R),V&8){const Ae=m.dynamicProps;for(let Ee=0;Ee<Ae.length;Ee++){const De=Ae[Ee],kt=$[De],Mn=q[De];(Mn!==kt||De==="value")&&i(D,De,kt,Mn,R,p.children,_,I,ze)}}V&1&&p.children!==m.children&&u(D,m.children)}else!L&&b==null&&$e(D,m,$,q,_,I,R);((J=q.onVnodeUpdated)||G)&&Rt(()=>{J&&en(J,_,m,p),G&&gr(m,p,_,"updated")},I)},ie=(p,m,_,I,R,P,L)=>{for(let D=0;D<m.length;D++){const V=p[D],b=m[D],G=V.el&&(V.type===$t||!Ys(V,b)||V.shapeFlag&70)?h(V.el):_;E(V,b,G,null,I,R,P,L,!0)}},$e=(p,m,_,I,R,P,L)=>{if(_!==I){if(_!==Pe)for(const D in _)!Go(D)&&!(D in I)&&i(p,D,_[D],null,L,m.children,R,P,ze);for(const D in I){if(Go(D))continue;const V=I[D],b=_[D];V!==b&&D!=="value"&&i(p,D,b,V,L,m.children,R,P,ze)}"value"in I&&i(p,"value",_.value,I.value)}},st=(p,m,_,I,R,P,L,D,V)=>{const b=m.el=p?p.el:a(""),G=m.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:q,slotScopeIds:J}=m;J&&(D=D?D.concat(J):J),p==null?(r(b,_,I),r(G,_,I),F(m.children,_,G,R,P,L,D,V)):$>0&&$&64&&q&&p.dynamicChildren?(ie(p.dynamicChildren,q,_,R,P,L,D),(m.key!=null||R&&m===R.subTree)&&Gg(p,m,!0)):ve(p,m,_,G,R,P,L,D,V)},_t=(p,m,_,I,R,P,L,D,V)=>{m.slotScopeIds=D,p==null?m.shapeFlag&512?R.ctx.activate(m,_,I,L,V):Zt(m,_,I,R,P,L,V):yt(p,m,V)},Zt=(p,m,_,I,R,P,L)=>{const D=p.component=VT(p,I,R);if(Fg(p)&&(D.ctx.renderer=M),MT(D),D.asyncDep){if(R&&R.registerDep(D,ge),!p.el){const V=D.subTree=ce(br);C(null,V,m,_)}return}ge(D,p,m,_,R,P,L)},yt=(p,m,_)=>{const I=m.component=p.component;if(zI(p,m,_))if(I.asyncDep&&!I.asyncResolved){we(I,m,_);return}else I.next=m,BI(I.update),I.update();else m.el=p.el,I.vnode=m},ge=(p,m,_,I,R,P,L)=>{const D=()=>{if(p.isMounted){let{next:G,bu:$,u:q,parent:J,vnode:le}=p,Ae=G,Ee;mr(p,!1),G?(G.el=le.el,we(p,G,L)):G=le,$&&Qo($),(Ee=G.props&&G.props.onVnodeBeforeUpdate)&&en(Ee,J,G,le),mr(p,!0);const De=el(p),kt=p.subTree;p.subTree=De,E(kt,De,h(kt.el),T(kt),p,R,P),G.el=De.el,Ae===null&&WI(p,De.el),q&&Rt(q,R),(Ee=G.props&&G.props.onVnodeUpdated)&&Rt(()=>en(Ee,J,G,le),R)}else{let G;const{el:$,props:q}=m,{bm:J,m:le,parent:Ae}=p,Ee=Yo(m);if(mr(p,!1),J&&Qo(J),!Ee&&(G=q&&q.onVnodeBeforeMount)&&en(G,Ae,m),mr(p,!0),$&&me){const De=()=>{p.subTree=el(p),me($,p.subTree,p,R,null)};Ee?m.type.__asyncLoader().then(()=>!p.isUnmounted&&De()):De()}else{const De=p.subTree=el(p);E(null,De,_,I,p,R,P),m.el=De.el}if(le&&Rt(le,R),!Ee&&(G=q&&q.onVnodeMounted)){const De=m;Rt(()=>en(G,Ae,De),R)}(m.shapeFlag&256||Ae&&Yo(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&p.a&&Rt(p.a,R),p.isMounted=!0,m=_=I=null}},V=p.effect=new qu(D,()=>Xu(b),p.scope),b=p.update=()=>V.run();b.id=p.uid,mr(p,!0),b()},we=(p,m,_)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,IT(p,m.props,I,_),AT(p,m.children,_),Vs(),jd(),Ms()},ve=(p,m,_,I,R,P,L,D,V=!1)=>{const b=p&&p.children,G=p?p.shapeFlag:0,$=m.children,{patchFlag:q,shapeFlag:J}=m;if(q>0){if(q&128){he(b,$,_,I,R,P,L,D,V);return}else if(q&256){Bt(b,$,_,I,R,P,L,D,V);return}}J&8?(G&16&&ze(b,R,P),$!==b&&u(_,$)):G&16?J&16?he(b,$,_,I,R,P,L,D,V):ze(b,R,P,!0):(G&8&&u(_,""),J&16&&F($,_,I,R,P,L,D,V))},Bt=(p,m,_,I,R,P,L,D,V)=>{p=p||cs,m=m||cs;const b=p.length,G=m.length,$=Math.min(b,G);let q;for(q=0;q<$;q++){const J=m[q]=V?jn(m[q]):tn(m[q]);E(p[q],J,_,null,R,P,L,D,V)}b>G?ze(p,R,P,!0,!1,$):F(m,_,I,R,P,L,D,V,$)},he=(p,m,_,I,R,P,L,D,V)=>{let b=0;const G=m.length;let $=p.length-1,q=G-1;for(;b<=$&&b<=q;){const J=p[b],le=m[b]=V?jn(m[b]):tn(m[b]);if(Ys(J,le))E(J,le,_,null,R,P,L,D,V);else break;b++}for(;b<=$&&b<=q;){const J=p[$],le=m[q]=V?jn(m[q]):tn(m[q]);if(Ys(J,le))E(J,le,_,null,R,P,L,D,V);else break;$--,q--}if(b>$){if(b<=q){const J=q+1,le=J<G?m[J].el:I;for(;b<=q;)E(null,m[b]=V?jn(m[b]):tn(m[b]),_,le,R,P,L,D,V),b++}}else if(b>q)for(;b<=$;)it(p[b],R,P,!0),b++;else{const J=b,le=b,Ae=new Map;for(b=le;b<=q;b++){const vt=m[b]=V?jn(m[b]):tn(m[b]);vt.key!=null&&Ae.set(vt.key,b)}let Ee,De=0;const kt=q-le+1;let Mn=!1,Ro=0;const hr=new Array(kt);for(b=0;b<kt;b++)hr[b]=0;for(b=J;b<=$;b++){const vt=p[b];if(De>=kt){it(vt,R,P,!0);continue}let xt;if(vt.key!=null)xt=Ae.get(vt.key);else for(Ee=le;Ee<=q;Ee++)if(hr[Ee-le]===0&&Ys(vt,m[Ee])){xt=Ee;break}xt===void 0?it(vt,R,P,!0):(hr[xt-le]=b+1,xt>=Ro?Ro=xt:Mn=!0,E(vt,m[xt],_,null,R,P,L,D,V),De++)}const Ws=Mn?PT(hr):cs;for(Ee=Ws.length-1,b=kt-1;b>=0;b--){const vt=le+b,xt=m[vt],Kr=vt+1<G?m[vt+1].el:I;hr[b]===0?E(null,xt,_,Kr,R,P,L,D,V):Mn&&(Ee<0||b!==Ws[Ee]?Mt(xt,_,Kr,2):Ee--)}}},Mt=(p,m,_,I,R=null)=>{const{el:P,type:L,transition:D,children:V,shapeFlag:b}=p;if(b&6){Mt(p.component.subTree,m,_,I);return}if(b&128){p.suspense.move(m,_,I);return}if(b&64){L.move(p,m,_,M);return}if(L===$t){r(P,m,_);for(let $=0;$<V.length;$++)Mt(V[$],m,_,I);r(p.anchor,m,_);return}if(L===nl){U(p,m,_);return}if(I!==2&&b&1&&D)if(I===0)D.beforeEnter(P),r(P,m,_),Rt(()=>D.enter(P),R);else{const{leave:$,delayLeave:q,afterLeave:J}=D,le=()=>r(P,m,_),Ae=()=>{$(P,()=>{le(),J&&J()})};q?q(P,le,Ae):Ae()}else r(P,m,_)},it=(p,m,_,I=!1,R=!1)=>{const{type:P,props:L,ref:D,children:V,dynamicChildren:b,shapeFlag:G,patchFlag:$,dirs:q}=p;if(D!=null&&ql(D,null,_,p,!0),G&256){m.ctx.deactivate(p);return}const J=G&1&&q,le=!Yo(p);let Ae;if(le&&(Ae=L&&L.onVnodeBeforeUnmount)&&en(Ae,m,p),G&6)ur(p.component,_,I);else{if(G&128){p.suspense.unmount(_,I);return}J&&gr(p,null,m,"beforeUnmount"),G&64?p.type.remove(p,m,_,R,M,I):b&&(P!==$t||$>0&&$&64)?ze(b,m,_,!1,!0):(P===$t&&$&384||!R&&G&16)&&ze(V,m,_),I&&ot(p)}(le&&(Ae=L&&L.onVnodeUnmounted)||J)&&Rt(()=>{Ae&&en(Ae,m,p),J&&gr(p,null,m,"unmounted")},_)},ot=p=>{const{type:m,el:_,anchor:I,transition:R}=p;if(m===$t){gn(_,I);return}if(m===nl){O(p);return}const P=()=>{s(_),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:L,delayLeave:D}=R,V=()=>L(_,P);D?D(p.el,P,V):V()}else P()},gn=(p,m)=>{let _;for(;p!==m;)_=d(p),s(p),p=_;s(m)},ur=(p,m,_)=>{const{bum:I,scope:R,update:P,subTree:L,um:D}=p;I&&Qo(I),R.stop(),P&&(P.active=!1,it(L,p,m,_)),D&&Rt(D,m),Rt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},ze=(p,m,_,I=!1,R=!1,P=0)=>{for(let L=P;L<p.length;L++)it(p[L],m,_,I,R)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),B=(p,m,_)=>{p==null?m._vnode&&it(m._vnode,null,null,!0):E(m._vnode||null,p,m,null,null,null,_),jd(),Dg(),m._vnode=p},M={p:E,um:it,m:Mt,r:ot,mt:Zt,mc:F,pc:ve,pbc:ie,n:T,o:t};let W,me;return e&&([W,me]=e(M)),{render:B,hydrate:W,createApp:yT(B,W)}}function mr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Gg(t,e,n=!1){const r=t.children,s=e.children;if(X(r)&&X(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=jn(s[i]),a.el=o.el),n||Gg(o,a)),a.type===ec&&(a.el=o.el)}}function PT(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const CT=t=>t.__isTeleport,$t=Symbol.for("v-fgt"),ec=Symbol.for("v-txt"),br=Symbol.for("v-cmt"),nl=Symbol.for("v-stc"),pi=[];let Ht=null;function Bn(t=!1){pi.push(Ht=t?null:[])}function bT(){pi.pop(),Ht=pi[pi.length-1]||null}let Oi=1;function Xd(t){Oi+=t}function Qg(t){return t.dynamicChildren=Oi>0?Ht||cs:null,bT(),Oi>0&&Ht&&Ht.push(t),t}function ri(t,e,n,r,s,i){return Qg(Le(t,e,n,r,s,i,!0))}function Hl(t,e,n,r,s){return Qg(ce(t,e,n,r,s,!0))}function Ni(t){return t?t.__v_isVNode===!0:!1}function Ys(t,e){return t.type===e.type&&t.key===e.key}const tc="__vInternal",Yg=({key:t})=>t??null,Xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||Ve(t)||oe(t)?{i:Pt,r:t,k:e,f:!!n}:t:null);function Le(t,e=null,n=null,r=0,s=null,i=t===$t?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yg(e),ref:e&&Xo(e),scopeId:xg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pt};return a?(nh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ke(n)?8:16),Oi>0&&!o&&Ht&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ht.push(c),c}const ce=kT;function kT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===lT)&&(t=br),Ni(t)){const a=kr(t,e,!0);return n&&nh(a,n),Oi>0&&!i&&Ht&&(a.shapeFlag&6?Ht[Ht.indexOf(t)]=a:Ht.push(a)),a.patchFlag|=-2,a}if(BT(t)&&(t=t.__vccOpts),e){e=OT(e);let{class:a,style:c}=e;a&&!Ke(a)&&(e.class=Nt(a)),Ne(c)&&(Sg(c)&&!X(c)&&(c=Ye({},c)),e.style=Bu(c))}const o=Ke(t)?1:GI(t)?128:CT(t)?64:Ne(t)?4:oe(t)?2:0;return Le(t,e,n,r,s,o,i,!0)}function OT(t){return t?Sg(t)||tc in t?Ye({},t):t:null}function kr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Dn(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Yg(a),ref:e&&e.ref?n&&s?X(s)?s.concat(Xo(e)):[s,Xo(e)]:Xo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$t?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kr(t.ssContent),ssFallback:t.ssFallback&&kr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function vn(t=" ",e=0){return ce(ec,null,t,e)}function rl(t="",e=!1){return e?(Bn(),Hl(br,null,t)):ce(br,null,t)}function tn(t){return t==null||typeof t=="boolean"?ce(br):X(t)?ce($t,null,t.slice()):typeof t=="object"?jn(t):ce(ec,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kr(t)}function nh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),nh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(tc in e)?e._ctx=Pt:s===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[vn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Dn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Nt([e.class,r.class]));else if(s==="style")e.style=Bu([e.style,r.style]);else if(qa(s)){const i=e[s],o=r[s];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){zt(t,e,7,[n,r])}const NT=$g();let DT=0;function VT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||NT,i={uid:DT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new dg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hg(r,s),emitsOptions:Mg(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=qI.bind(null,i),t.ce&&t.ce(i),i}let qe=null;const Jg=()=>qe||Pt;let rh,Yr,Zd="__VUE_INSTANCE_SETTERS__";(Yr=Vl()[Zd])||(Yr=Vl()[Zd]=[]),Yr.push(t=>qe=t),rh=t=>{Yr.length>1?Yr.forEach(e=>e(t)):Yr[0](t)};const ys=t=>{rh(t),t.scope.on()},Sr=()=>{qe&&qe.scope.off(),rh(null)};function Xg(t){return t.vnode.shapeFlag&4}let Di=!1;function MT(t,e=!1){Di=e;const{props:n,children:r}=t.vnode,s=Xg(t);ET(t,n,s,e),wT(t,r);const i=s?xT(t,e):void 0;return Di=!1,i}function xT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Qa(new Proxy(t.ctx,hT));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?FT(t):null;ys(t),Vs();const i=Yn(r,t,0,[t.props,s]);if(Ms(),Sr(),ag(i)){if(i.then(Sr,Sr),e)return i.then(o=>{ef(t,o,e)}).catch(o=>{Ya(o,t,0)});t.asyncDep=i}else ef(t,i,e)}else Zg(t,e)}function ef(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=bg(e)),Zg(t,n)}let tf;function Zg(t,e,n){const r=t.type;if(!t.render){if(!e&&tf&&!r.render){const s=r.template||eh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ye(Ye({isCustomElement:i,delimiters:a},o),c);r.render=tf(s,l)}}t.render=r.render||Kt}ys(t),Vs(),dT(t),Ms(),Sr()}function LT(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return bt(t,"get","$attrs"),e[n]}}))}function FT(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return LT(t)},slots:t.slots,emit:t.emit,expose:e}}function nc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(bg(Qa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in fi)return fi[n](t)},has(e,n){return n in e||n in fi}}))}function UT(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function BT(t){return oe(t)&&"__vccOpts"in t}const ye=(t,e)=>LI(t,e,Di);function is(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!X(e)?Ni(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ni(n)&&(n=[n]),ce(t,e,n))}const jT=Symbol.for("v-scx"),$T=()=>Ut(jT),qT="3.3.4",HT="http://www.w3.org/2000/svg",Er=typeof document<"u"?document:null,nf=Er&&Er.createElement("template"),KT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Er.createElementNS(HT,t):Er.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Er.createTextNode(t),createComment:t=>Er.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Er.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{nf.innerHTML=r?`<svg>${t}</svg>`:t;const a=nf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function zT(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function WT(t,e,n){const r=t.style,s=Ke(n);if(n&&!s){if(e&&!Ke(e))for(const i in e)n[i]==null&&Kl(r,i,"");for(const i in n)Kl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const rf=/\s*!important$/;function Kl(t,e,n){if(X(n))n.forEach(r=>Kl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=GT(t,e);rf.test(n)?t.setProperty(Ds(r),n.replace(rf,""),"important"):t[r]=n}}const sf=["Webkit","Moz","ms"],sl={};function GT(t,e){const n=sl[e];if(n)return n;let r=dn(e);if(r!=="filter"&&r in t)return sl[e]=r;r=za(r);for(let s=0;s<sf.length;s++){const i=sf[s]+r;if(i in t)return sl[e]=i}return e}const of="http://www.w3.org/1999/xlink";function QT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(of,e.slice(6,e.length)):t.setAttributeNS(of,e,n);else{const i=ZE(e);n==null||i&&!ug(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function YT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ug(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function es(t,e,n,r){t.addEventListener(e,n,r)}function JT(t,e,n,r){t.removeEventListener(e,n,r)}function XT(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=ZT(e);if(r){const l=i[e]=nw(r,s);es(t,a,l,c)}else o&&(JT(t,a,o,c),i[e]=void 0)}}const af=/(?:Once|Passive|Capture)$/;function ZT(t){let e;if(af.test(t)){e={};let r;for(;r=t.match(af);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ds(t.slice(2)),e]}let il=0;const ew=Promise.resolve(),tw=()=>il||(ew.then(()=>il=0),il=Date.now());function nw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;zt(rw(r,n.value),e,5,[r])};return n.value=t,n.attached=tw(),n}function rw(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const cf=/^on[a-z]/,sw=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?zT(t,r,s):e==="style"?WT(t,n,r):qa(e)?xu(e)||XT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):iw(t,e,r,s))?YT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),QT(t,e,r,s))};function iw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&cf.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||cf.test(e)&&Ke(n)?!1:e in t}const lf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>Qo(e,n):e};function ow(t){t.target.composing=!0}function uf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const YO={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=lf(s);const i=r||s.props&&s.props.type==="number";es(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Dl(a)),t._assign(a)}),n&&es(t,"change",()=>{t.value=t.value.trim()}),e||(es(t,"compositionstart",ow),es(t,"compositionend",uf),es(t,"change",uf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=lf(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Dl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},aw=["ctrl","shift","alt","meta"],cw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>aw.some(n=>t[`${n}Key`]&&!e.includes(n))},JO=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=cw[e[s]];if(i&&i(n,e))return}return t(n,...r)},lw=Ye({patchProp:sw},KT);let hf;function uw(){return hf||(hf=RT(lw))}const em=(...t)=>{const e=uw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=hw(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function hw(t){return Ke(t)?document.querySelector(t):t}var xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ma={exports:{}};ma.exports;(function(t,e){var n=200,r="__lodash_hash_undefined__",s=9007199254740991,i="[object Arguments]",o="[object Array]",a="[object Boolean]",c="[object Date]",l="[object Error]",u="[object Function]",h="[object GeneratorFunction]",d="[object Map]",g="[object Number]",v="[object Object]",E="[object Promise]",A="[object RegExp]",C="[object Set]",N="[object String]",U="[object Symbol]",O="[object WeakMap]",Q="[object ArrayBuffer]",se="[object DataView]",fe="[object Float32Array]",F="[object Float64Array]",z="[object Int8Array]",ie="[object Int16Array]",$e="[object Int32Array]",st="[object Uint8Array]",_t="[object Uint8ClampedArray]",Zt="[object Uint16Array]",yt="[object Uint32Array]",ge=/[\\^$.*+?()[\]{}|]/g,we=/\w*$/,ve=/^\[object .+?Constructor\]$/,Bt=/^(?:0|[1-9]\d*)$/,he={};he[i]=he[o]=he[Q]=he[se]=he[a]=he[c]=he[fe]=he[F]=he[z]=he[ie]=he[$e]=he[d]=he[g]=he[v]=he[A]=he[C]=he[N]=he[U]=he[st]=he[_t]=he[Zt]=he[yt]=!0,he[l]=he[u]=he[O]=!1;var Mt=typeof xo=="object"&&xo&&xo.Object===Object&&xo,it=typeof self=="object"&&self&&self.Object===Object&&self,ot=Mt||it||Function("return this")(),gn=e&&!e.nodeType&&e,ur=gn&&!0&&t&&!t.nodeType&&t,ze=ur&&ur.exports===gn;function T(f,y){return f.set(y[0],y[1]),f}function B(f,y){return f.add(y),f}function M(f,y){for(var w=-1,K=f?f.length:0;++w<K&&y(f[w],w,f)!==!1;);return f}function W(f,y){for(var w=-1,K=y.length,We=f.length;++w<K;)f[We+w]=y[w];return f}function me(f,y,w,K){var We=-1,Et=f?f.length:0;for(K&&Et&&(w=f[++We]);++We<Et;)w=y(w,f[We],We,f);return w}function p(f,y){for(var w=-1,K=Array(f);++w<f;)K[w]=y(w);return K}function m(f,y){return f==null?void 0:f[y]}function _(f){var y=!1;if(f!=null&&typeof f.toString!="function")try{y=!!(f+"")}catch{}return y}function I(f){var y=-1,w=Array(f.size);return f.forEach(function(K,We){w[++y]=[We,K]}),w}function R(f,y){return function(w){return f(y(w))}}function P(f){var y=-1,w=Array(f.size);return f.forEach(function(K){w[++y]=K}),w}var L=Array.prototype,D=Function.prototype,V=Object.prototype,b=ot["__core-js_shared__"],G=function(){var f=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||"");return f?"Symbol(src)_1."+f:""}(),$=D.toString,q=V.hasOwnProperty,J=V.toString,le=RegExp("^"+$.call(q).replace(ge,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ae=ze?ot.Buffer:void 0,Ee=ot.Symbol,De=ot.Uint8Array,kt=R(Object.getPrototypeOf,Object),Mn=Object.create,Ro=V.propertyIsEnumerable,hr=L.splice,Ws=Object.getOwnPropertySymbols,vt=Ae?Ae.isBuffer:void 0,xt=R(Object.keys,Object),Kr=Gr(ot,"DataView"),Gs=Gr(ot,"Map"),Kc=Gr(ot,"Promise"),zc=Gr(ot,"Set"),Wc=Gr(ot,"WeakMap"),Qs=Gr(Object,"create"),Bv=pr(Kr),jv=pr(Gs),$v=pr(Kc),qv=pr(zc),Hv=pr(Wc),Ed=Ee?Ee.prototype:void 0,Id=Ed?Ed.valueOf:void 0;function dr(f){var y=-1,w=f?f.length:0;for(this.clear();++y<w;){var K=f[y];this.set(K[0],K[1])}}function Kv(){this.__data__=Qs?Qs(null):{}}function zv(f){return this.has(f)&&delete this.__data__[f]}function Wv(f){var y=this.__data__;if(Qs){var w=y[f];return w===r?void 0:w}return q.call(y,f)?y[f]:void 0}function Gv(f){var y=this.__data__;return Qs?y[f]!==void 0:q.call(y,f)}function Qv(f,y){var w=this.__data__;return w[f]=Qs&&y===void 0?r:y,this}dr.prototype.clear=Kv,dr.prototype.delete=zv,dr.prototype.get=Wv,dr.prototype.has=Gv,dr.prototype.set=Qv;function mn(f){var y=-1,w=f?f.length:0;for(this.clear();++y<w;){var K=f[y];this.set(K[0],K[1])}}function Yv(){this.__data__=[]}function Jv(f){var y=this.__data__,w=So(y,f);if(w<0)return!1;var K=y.length-1;return w==K?y.pop():hr.call(y,w,1),!0}function Xv(f){var y=this.__data__,w=So(y,f);return w<0?void 0:y[w][1]}function Zv(f){return So(this.__data__,f)>-1}function eE(f,y){var w=this.__data__,K=So(w,f);return K<0?w.push([f,y]):w[K][1]=y,this}mn.prototype.clear=Yv,mn.prototype.delete=Jv,mn.prototype.get=Xv,mn.prototype.has=Zv,mn.prototype.set=eE;function zr(f){var y=-1,w=f?f.length:0;for(this.clear();++y<w;){var K=f[y];this.set(K[0],K[1])}}function tE(){this.__data__={hash:new dr,map:new(Gs||mn),string:new dr}}function nE(f){return Po(this,f).delete(f)}function rE(f){return Po(this,f).get(f)}function sE(f){return Po(this,f).has(f)}function iE(f,y){return Po(this,f).set(f,y),this}zr.prototype.clear=tE,zr.prototype.delete=nE,zr.prototype.get=rE,zr.prototype.has=sE,zr.prototype.set=iE;function Wr(f){this.__data__=new mn(f)}function oE(){this.__data__=new mn}function aE(f){return this.__data__.delete(f)}function cE(f){return this.__data__.get(f)}function lE(f){return this.__data__.has(f)}function uE(f,y){var w=this.__data__;if(w instanceof mn){var K=w.__data__;if(!Gs||K.length<n-1)return K.push([f,y]),this;w=this.__data__=new zr(K)}return w.set(f,y),this}Wr.prototype.clear=oE,Wr.prototype.delete=aE,Wr.prototype.get=cE,Wr.prototype.has=lE,Wr.prototype.set=uE;function hE(f,y){var w=Yc(f)||ME(f)?p(f.length,String):[],K=w.length,We=!!K;for(var Et in f)(y||q.call(f,Et))&&!(We&&(Et=="length"||OE(Et,K)))&&w.push(Et);return w}function Td(f,y,w){var K=f[y];(!(q.call(f,y)&&Sd(K,w))||w===void 0&&!(y in f))&&(f[y]=w)}function So(f,y){for(var w=f.length;w--;)if(Sd(f[w][0],y))return w;return-1}function dE(f,y){return f&&wd(y,Jc(y),f)}function Gc(f,y,w,K,We,Et,Lt){var At;if(K&&(At=Et?K(f,We,Et,Lt):K(f)),At!==void 0)return At;if(!Co(f))return f;var bd=Yc(f);if(bd){if(At=CE(f),!y)return RE(f,At)}else{var Qr=fr(f),kd=Qr==u||Qr==h;if(LE(f))return yE(f,y);if(Qr==v||Qr==i||kd&&!Et){if(_(f))return Et?f:{};if(At=bE(kd?{}:f),!y)return SE(f,dE(At,f))}else{if(!he[Qr])return Et?f:{};At=kE(f,Qr,Gc,y)}}Lt||(Lt=new Wr);var Od=Lt.get(f);if(Od)return Od;if(Lt.set(f,At),!bd)var Nd=w?PE(f):Jc(f);return M(Nd||f,function(Xc,bo){Nd&&(bo=Xc,Xc=f[bo]),Td(At,bo,Gc(Xc,y,w,K,bo,f,Lt))}),At}function fE(f){return Co(f)?Mn(f):{}}function pE(f,y,w){var K=y(f);return Yc(f)?K:W(K,w(f))}function gE(f){return J.call(f)}function mE(f){if(!Co(f)||DE(f))return!1;var y=Cd(f)||_(f)?le:ve;return y.test(pr(f))}function _E(f){if(!Rd(f))return xt(f);var y=[];for(var w in Object(f))q.call(f,w)&&w!="constructor"&&y.push(w);return y}function yE(f,y){if(y)return f.slice();var w=new f.constructor(f.length);return f.copy(w),w}function Qc(f){var y=new f.constructor(f.byteLength);return new De(y).set(new De(f)),y}function vE(f,y){var w=y?Qc(f.buffer):f.buffer;return new f.constructor(w,f.byteOffset,f.byteLength)}function EE(f,y,w){var K=y?w(I(f),!0):I(f);return me(K,T,new f.constructor)}function IE(f){var y=new f.constructor(f.source,we.exec(f));return y.lastIndex=f.lastIndex,y}function TE(f,y,w){var K=y?w(P(f),!0):P(f);return me(K,B,new f.constructor)}function wE(f){return Id?Object(Id.call(f)):{}}function AE(f,y){var w=y?Qc(f.buffer):f.buffer;return new f.constructor(w,f.byteOffset,f.length)}function RE(f,y){var w=-1,K=f.length;for(y||(y=Array(K));++w<K;)y[w]=f[w];return y}function wd(f,y,w,K){w||(w={});for(var We=-1,Et=y.length;++We<Et;){var Lt=y[We],At=K?K(w[Lt],f[Lt],Lt,w,f):void 0;Td(w,Lt,At===void 0?f[Lt]:At)}return w}function SE(f,y){return wd(f,Ad(f),y)}function PE(f){return pE(f,Jc,Ad)}function Po(f,y){var w=f.__data__;return NE(y)?w[typeof y=="string"?"string":"hash"]:w.map}function Gr(f,y){var w=m(f,y);return mE(w)?w:void 0}var Ad=Ws?R(Ws,Object):BE,fr=gE;(Kr&&fr(new Kr(new ArrayBuffer(1)))!=se||Gs&&fr(new Gs)!=d||Kc&&fr(Kc.resolve())!=E||zc&&fr(new zc)!=C||Wc&&fr(new Wc)!=O)&&(fr=function(f){var y=J.call(f),w=y==v?f.constructor:void 0,K=w?pr(w):void 0;if(K)switch(K){case Bv:return se;case jv:return d;case $v:return E;case qv:return C;case Hv:return O}return y});function CE(f){var y=f.length,w=f.constructor(y);return y&&typeof f[0]=="string"&&q.call(f,"index")&&(w.index=f.index,w.input=f.input),w}function bE(f){return typeof f.constructor=="function"&&!Rd(f)?fE(kt(f)):{}}function kE(f,y,w,K){var We=f.constructor;switch(y){case Q:return Qc(f);case a:case c:return new We(+f);case se:return vE(f,K);case fe:case F:case z:case ie:case $e:case st:case _t:case Zt:case yt:return AE(f,K);case d:return EE(f,K,w);case g:case N:return new We(f);case A:return IE(f);case C:return TE(f,K,w);case U:return wE(f)}}function OE(f,y){return y=y??s,!!y&&(typeof f=="number"||Bt.test(f))&&f>-1&&f%1==0&&f<y}function NE(f){var y=typeof f;return y=="string"||y=="number"||y=="symbol"||y=="boolean"?f!=="__proto__":f===null}function DE(f){return!!G&&G in f}function Rd(f){var y=f&&f.constructor,w=typeof y=="function"&&y.prototype||V;return f===w}function pr(f){if(f!=null){try{return $.call(f)}catch{}try{return f+""}catch{}}return""}function VE(f){return Gc(f,!0,!0)}function Sd(f,y){return f===y||f!==f&&y!==y}function ME(f){return xE(f)&&q.call(f,"callee")&&(!Ro.call(f,"callee")||J.call(f)==i)}var Yc=Array.isArray;function Pd(f){return f!=null&&FE(f.length)&&!Cd(f)}function xE(f){return UE(f)&&Pd(f)}var LE=vt||jE;function Cd(f){var y=Co(f)?J.call(f):"";return y==u||y==h}function FE(f){return typeof f=="number"&&f>-1&&f%1==0&&f<=s}function Co(f){var y=typeof f;return!!f&&(y=="object"||y=="function")}function UE(f){return!!f&&typeof f=="object"}function Jc(f){return Pd(f)?hE(f):_E(f)}function BE(){return[]}function jE(){return!1}t.exports=VE})(ma,ma.exports);var fw=ma.exports;const df=dw(fw);function pw({store:t}){const e=df(t.$state);t.$reset=()=>t.$patch(df(e))}var gw=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let tm;const rc=t=>tm=t,nm=Symbol();function zl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var gi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(gi||(gi={}));function mw(){const t=fg(!0),e=t.run(()=>Fe({}));let n=[],r=[];const s=Qa({install(i){rc(s),s._a=i,i.provide(nm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!gw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const rm=()=>{};function ff(t,e,n,r=rm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ju()&&pg(s),s}function Jr(t,...e){t.slice().forEach(n=>{n(...e)})}const _w=t=>t();function Wl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];zl(s)&&zl(r)&&t.hasOwnProperty(n)&&!Ve(r)&&!Qn(r)?t[n]=Wl(s,r):t[n]=r}return t}const yw=Symbol();function vw(t){return!zl(t)||!t.hasOwnProperty(yw)}const{assign:Un}=Object;function Ew(t){return!!(Ve(t)&&t.effect)}function Iw(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=NI(n.state.value[t]);return Un(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Qa(ye(()=>{rc(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return c=sm(t,l,e,n,r,!0),c}function sm(t,e,n={},r,s,i){let o;const a=Un({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],g;const v=r.state.value[t];!i&&!v&&(r.state.value[t]={}),Fe({});let E;function A(F){let z;l=u=!1,typeof F=="function"?(F(r.state.value[t]),z={type:gi.patchFunction,storeId:t,events:g}):(Wl(r.state.value[t],F),z={type:gi.patchObject,payload:F,storeId:t,events:g});const ie=E=Symbol();Fr().then(()=>{E===ie&&(l=!0)}),u=!0,Jr(h,z,r.state.value[t])}const C=i?function(){const{state:z}=n,ie=z?z():{};this.$patch($e=>{Un($e,ie)})}:rm;function N(){o.stop(),h=[],d=[],r._s.delete(t)}function U(F,z){return function(){rc(r);const ie=Array.from(arguments),$e=[],st=[];function _t(ge){$e.push(ge)}function Zt(ge){st.push(ge)}Jr(d,{args:ie,name:F,store:Q,after:_t,onError:Zt});let yt;try{yt=z.apply(this&&this.$id===t?this:Q,ie)}catch(ge){throw Jr(st,ge),ge}return yt instanceof Promise?yt.then(ge=>(Jr($e,ge),ge)).catch(ge=>(Jr(st,ge),Promise.reject(ge))):(Jr($e,yt),yt)}}const O={_p:r,$id:t,$onAction:ff.bind(null,d),$patch:A,$reset:C,$subscribe(F,z={}){const ie=ff(h,F,z.detached,()=>$e()),$e=o.run(()=>Jn(()=>r.state.value[t],st=>{(z.flush==="sync"?u:l)&&F({storeId:t,type:gi.direct,events:g},st)},Un({},c,z)));return ie},$dispose:N},Q=Xt(O);r._s.set(t,Q);const se=r._a&&r._a.runWithContext||_w,fe=r._e.run(()=>(o=fg(),se(()=>o.run(e))));for(const F in fe){const z=fe[F];if(Ve(z)&&!Ew(z)||Qn(z))i||(v&&vw(z)&&(Ve(z)?z.value=v[F]:Wl(z,v[F])),r.state.value[t][F]=z);else if(typeof z=="function"){const ie=U(F,z);fe[F]=ie,a.actions[F]=z}}return Un(Q,fe),Un(re(Q),fe),Object.defineProperty(Q,"$state",{get:()=>r.state.value[t],set:F=>{A(z=>{Un(z,F)})}}),r._p.forEach(F=>{Un(Q,o.run(()=>F({store:Q,app:r._a,pinia:r,options:a})))}),v&&i&&n.hydrate&&n.hydrate(Q.$state,v),l=!0,u=!0,Q}function im(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=vT();return a=a||(l?Ut(nm,null):null),a&&rc(a),a=tm,a._s.has(r)||(i?sm(r,e,s,a):Iw(r,s,a)),a._s.get(r)}return o.$id=r,o}const to={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},vs={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},wt={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Tw={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},om={dangerouslyHTMLString:!1,multiple:!0,position:to.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},ww={rtl:!1,newestOnTop:!1,toastClassName:""},am={...om,...ww};({...om,type:wt.DEFAULT});var Te=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(Te||{}),Gl=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(Gl||{});const Aw={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},Rw={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},Sw={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},Pw={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"};function cm(t){let e=Aw;if(!t||typeof t=="string")switch(t){case"flip":e=Pw;break;case"zoom":e=Sw;break;case"slide":e=Rw;break}else e=t;return e}function Cw(t){return t.containerId||String(t.position)}const sc="will-unmount";function bw(t=to.TOP_RIGHT){return!!document.querySelector(".".concat(Te.CSS_NAMESPACE,"__toast-container--").concat(t))}function kw(t=to.TOP_RIGHT){return"".concat(Te.CSS_NAMESPACE,"__toast-container--").concat(t)}function Ow(t,e,n=!1){const r=["".concat(Te.CSS_NAMESPACE,"__toast-container"),"".concat(Te.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(Te.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return hs(e)?e({position:t,rtl:n,defaultClassName:r}):"".concat(r," ").concat(e||"")}function Nw(t){var e;const{position:n,containerClassName:r,rtl:s=!1,style:i={}}=t,o=Te.CSS_NAMESPACE,a=kw(n),c=document.querySelector(".".concat(o)),l=document.querySelector(".".concat(a)),u=!!l&&!((e=l.className)!=null&&e.includes(sc)),h=c||document.createElement("div"),d=document.createElement("div");d.className=Ow(n,r,s),d.dataset.testid="".concat(Te.CSS_NAMESPACE,"__toast-container--").concat(n),d.id=Cw(t);for(const g in i)if(Object.prototype.hasOwnProperty.call(i,g)){const v=i[g];d.style[g]=v}return c||(h.className=Te.CSS_NAMESPACE,document.body.appendChild(h)),u||h.appendChild(d),d}function Ql(t){var e,n,r;const s=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(s);i&&i.removeEventListener("animationend",Ql,!1);try{Vi[s].unmount(),(r=document.getElementById(s))==null||r.remove(),delete Vi[s],delete et[s]}catch{}}const Vi=Xt({});function Dw(t,e){const n=document.getElementById(String(e));n&&(Vi[n.id]=t)}function Yl(t,e=!0){const n=String(t);if(!Vi[n])return;const r=document.getElementById(n);r&&r.classList.add(sc),e?(Mw(t),r&&r.addEventListener("animationend",Ql,!1)):Ql(n),fn.items=fn.items.filter(s=>s.containerId!==t)}function Vw(t){for(const e in Vi)Yl(e,t);fn.items=[]}function lm(t,e){const n=document.getElementById(t.toastId);if(n){let r=t;r={...r,...cm(r.transition)};const s=r.appendPosition?"".concat(r.exit,"--").concat(r.position):r.exit;n.className+=" ".concat(s),e&&e(n)}}function Mw(t){for(const e in et)if(e===t)for(const n of et[e]||[])lm(n)}function xw(t){const e=no().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function sh(t){return document.getElementById(t)}function Lw(t){const e=sh(t.containerId);return e&&e.classList.contains(sc)}function pf(t){var e;const n=Ni(t.content)?re(t.content.props):null;return n??re((e=t.data)!=null?e:{})}function Fw(t){return t?fn.items.filter(e=>e.containerId===t).length>0:fn.items.length>0}function Uw(){if(fn.items.length>0){const t=fn.items.shift();Zo(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const et=Xt({}),fn=Xt({items:[]});function no(){const t=re(et);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function Bw(t){return no().find(e=>e.toastId===t)}function Zo(t,e={}){if(Lw(e)){const n=sh(e.containerId);n&&n.addEventListener("animationend",Jl.bind(null,t,e),!1)}else Jl(t,e)}function Jl(t,e={}){const n=sh(e.containerId);n&&n.removeEventListener("animationend",Jl.bind(null,t,e),!1);const r=et[e.containerId]||[],s=r.length>0;if(!s&&!bw(e.position)){const i=Nw(e),o=em(i0,e);o.mount(i),Dw(o,i.id)}s&&(e.position=r[0].position),Fr(()=>{e.updateId?an.update(e):an.add(t,e)})}const an={add(t,e){const{containerId:n=""}=e;n&&(et[n]=et[n]||[],et[n].find(r=>r.toastId===e.toastId)||setTimeout(()=>{var r,s;e.newestOnTop?(r=et[n])==null||r.unshift(e):(s=et[n])==null||s.push(e),e.onOpen&&e.onOpen(pf(e))},e.delay||0))},remove(t){if(t){const e=xw(t);if(e){const n=et[e];let r=n.find(s=>s.toastId===t);et[e]=n.filter(s=>s.toastId!==t),!et[e].length&&!Fw(e)&&Yl(e,!1),Uw(),Fr(()=>{r!=null&&r.onClose&&(r.onClose(pf(r)),r=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){et[e]=et[e]||[];const n=et[e].find(r=>r.toastId===t.toastId);n&&setTimeout(()=>{for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const s=t[r];n[r]=s}},t.delay||0)}},clear(t,e=!0){t?Yl(t,e):Vw(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,r=document.getElementById(n);r&&(r.removeEventListener("animationend",an.dismissCallback,!1),setTimeout(()=>{an.remove(n)}))},dismiss(t){if(t){const e=no();for(const n of e)if(n.toastId===t){lm(n,r=>{r.addEventListener("animationend",an.dismissCallback,!1)});break}}}},um=Xt({}),_a=Xt({});function hm(){return Math.random().toString(36).substring(2,9)}function jw(t){return typeof t=="number"&&!isNaN(t)}function Xl(t){return typeof t=="string"}function hs(t){return typeof t=="function"}function ic(...t){return Dn(...t)}function ea(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function $w(t={}){um["".concat(Te.CSS_NAMESPACE,"-default-options")]=t}function qw(){return um["".concat(Te.CSS_NAMESPACE,"-default-options")]||am}function Hw(){return document.documentElement.classList.contains("dark")?"dark":"light"}var ta=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(ta||{});const dm={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:to.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:vs.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:wt.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},Kw={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:wt.DEFAULT},theme:{type:String,required:!1,default:vs.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},zw=xs({name:"ProgressBar",props:Kw,setup(t,{attrs:e}){const n=Fe(),r=ye(()=>t.hide?"true":"false"),s=ye(()=>({...e.style||{},animationDuration:"".concat(t.autoClose===!0?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"})),i=ye(()=>["".concat(Te.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(Te.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(Te.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(Te.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(Te.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(Te.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),o=ye(()=>"".concat(i.value," ").concat((e==null?void 0:e.class)||"")),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},c=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},l=ye(()=>t.controlledProgress?null:c),u=ye(()=>t.controlledProgress?c:null);return di(()=>{n.value&&(a(),n.value.onanimationend=l.value,n.value.ontransitionend=u.value)}),()=>ce("div",{ref:n,role:"progressbar","aria-hidden":r.value,"aria-label":"notification timer",class:o.value,style:s.value},null)}}),Ww=xs({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:vs.AUTO},type:{type:String,required:!1,default:vs.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>ce("button",{class:"".concat(Te.CSS_NAMESPACE,"__close-button ").concat(Te.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[ce("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[ce("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),oc=({theme:t,type:e,path:n,...r})=>ce("svg",Dn({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-".concat(e,")")},r),[ce("path",{d:n},null)]);function Gw(t){return ce(oc,Dn(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function Qw(t){return ce(oc,Dn(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function Yw(t){return ce(oc,Dn(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function Jw(t){return ce(oc,Dn(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function Xw(){return ce("div",{class:"".concat(Te.CSS_NAMESPACE,"__spinner")},null)}const Zl={info:Qw,warning:Gw,success:Yw,error:Jw,spinner:Xw},Zw=t=>t in Zl;function e0({theme:t,type:e,isLoading:n,icon:r}){let s;const i={theme:t,type:e};return n?s=Zl.spinner():r===!1?s=void 0:ea(r)?s=re(r):hs(r)?s=r(i):Ni(r)?s=kr(r,i):Xl(r)||jw(r)?s=r:Zw(e)&&(s=Zl[e](i)),s}const t0=()=>{};function n0(t,e,n=Te.COLLAPSE_DURATION){const{scrollHeight:r,style:s}=t,i=n;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition="all ".concat(i,"ms"),requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,i)})})}function r0(t){const e=Fe(!1),n=Fe(!1),r=Fe(!1),s=Fe(ta.Enter),i=Xt({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||Te.COLLAPSE_DURATION}),o=i.done||t0,a=ye(()=>i.appendPosition?"".concat(i.enter,"--").concat(i.position):i.enter),c=ye(()=>i.appendPosition?"".concat(i.exit,"--").concat(i.position):i.exit),l=ye(()=>t.pauseOnHover?{onMouseenter:A,onMouseleave:E}:{});function u(){const N=a.value.split(" ");d().addEventListener(Gl.ENTRANCE_ANIMATION_END,E,{once:!0});const U=Q=>{const se=d();Q.target===se&&(se.dispatchEvent(new Event(Gl.ENTRANCE_ANIMATION_END)),se.removeEventListener("animationend",U),se.removeEventListener("animationcancel",U),s.value===ta.Enter&&Q.type!=="animationcancel"&&se.classList.remove(...N))},O=()=>{const Q=d();Q.classList.add(...N),Q.addEventListener("animationend",U),Q.addEventListener("animationcancel",U)};t.pauseOnFocusLoss&&g(),O()}function h(){if(!d())return;const N=()=>{const O=d();O.removeEventListener("animationend",N),i.collapse?n0(O,o,i.collapseDuration):o()},U=()=>{const O=d();s.value=ta.Exit,O&&(O.className+=" ".concat(c.value),O.addEventListener("animationend",N))};n.value||(r.value?N():setTimeout(U))}function d(){return t.toastRef.value}function g(){document.hasFocus()||A(),window.addEventListener("focus",E),window.addEventListener("blur",A)}function v(){window.removeEventListener("focus",E),window.removeEventListener("blur",A)}function E(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function A(){e.value=!1}function C(N){N&&(N.stopPropagation(),N.preventDefault()),n.value=!1}return di(h),di(()=>{const N=no();n.value=N.findIndex(U=>U.toastId===i.toastId)>-1}),di(()=>{t.isLoading!==void 0&&(t.loading.value?A():E())}),eo(u),Za(()=>{t.pauseOnFocusLoss&&v()}),{isIn:n,isRunning:e,hideToast:C,eventHandlers:l}}const s0=xs({name:"ToastItem",inheritAttrs:!1,props:dm,setup(t){const e=Fe(),n=ye(()=>!!t.isLoading),r=ye(()=>t.progress!==void 0&&t.progress!==null),s=ye(()=>e0(t)),i=ye(()=>["".concat(Te.CSS_NAMESPACE,"__toast"),"".concat(Te.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(Te.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(Te.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:l}=r0({toastRef:e,loading:n,done:()=>{an.remove(t.toastId)},...cm(t.transition),...t});return()=>ce("div",Dn({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:u=>{t.closeOnClick&&c(),t.onClick&&t.onClick(u)}},l.value),[ce("div",{role:t.role,"data-testid":"toast-body",class:"".concat(Te.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[s.value!=null&&ce("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(Te.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(Te.CSS_NAMESPACE,"--animate-icon ").concat(Te.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[ea(s.value)?is(re(s.value),{theme:t.theme,type:t.type}):hs(s.value)?s.value({theme:t.theme,type:t.type}):s.value]),ce("div",{"data-testid":"toast-content"},[ea(t.content)?is(re(t.content),{toastProps:re(t),closeToast:c,data:t.data}):hs(t.content)?t.content({toastProps:re(t),closeToast:c,data:t.data}):t.dangerouslyHTMLString?is("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&ce(Ww,{theme:t.theme,closeToast:u=>{u.stopPropagation(),u.preventDefault(),c()}},null),ea(t.closeButton)?is(re(t.closeButton),{closeToast:c,type:t.type,theme:t.theme}):hs(t.closeButton)?t.closeButton({closeToast:c,type:t.type,theme:t.theme}):null,ce(zw,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:r.value,progress:t.progress,closeToast:t.isLoading?void 0:c},null)])}});let mi=0;function fm(){typeof window>"u"||(mi&&window.cancelAnimationFrame(mi),mi=window.requestAnimationFrame(fm),_a.lastUrl!==window.location.href&&(_a.lastUrl=window.location.href,an.clear()))}const i0=xs({name:"ToastifyContainer",inheritAttrs:!1,props:dm,setup(t){const e=ye(()=>t.containerId),n=ye(()=>et[e.value]||[]),r=ye(()=>n.value.filter(s=>s.position===t.position));return eo(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(fm)}),Za(()=>{typeof window<"u"&&mi&&(window.cancelAnimationFrame(mi),_a.lastUrl="")}),()=>ce($t,null,[r.value.map(s=>{const{toastId:i=""}=s;return ce(s0,Dn({key:i},s),null)})])}});let ol=!1;function pm(){const t=[];return no().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(sc)&&t.push(e)}),t}function o0(t){const e=pm().length,n=t??0;return n>0&&e+fn.items.length>=n}function a0(t){o0(t.limit)&&!t.updateId&&fn.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function or(t,e,n={}){if(ol)return;n=ic(qw(),{type:e},re(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=hm()),n={...n,content:t,containerId:n.containerId||String(n.position)};const r=Number(n==null?void 0:n.progress);return r<0&&(n.progress=0),r>1&&(n.progress=1),n.theme==="auto"&&(n.theme=Hw()),a0(n),_a.lastUrl=window.location.href,n.multiple?fn.items.length?n.updateId&&Zo(t,n):Zo(t,n):(ol=!0,ke.clearAll(void 0,!1),setTimeout(()=>{Zo(t,n)},0),setTimeout(()=>{ol=!1},390)),n.toastId}const ke=(t,e)=>or(t,wt.DEFAULT,e);ke.info=(t,e)=>or(t,wt.DEFAULT,{...e,type:wt.INFO});ke.error=(t,e)=>or(t,wt.DEFAULT,{...e,type:wt.ERROR});ke.warning=(t,e)=>or(t,wt.DEFAULT,{...e,type:wt.WARNING});ke.warn=ke.warning;ke.success=(t,e)=>or(t,wt.DEFAULT,{...e,type:wt.SUCCESS});ke.loading=(t,e)=>or(t,wt.DEFAULT,ic(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));ke.dark=(t,e)=>or(t,wt.DEFAULT,ic(e,{theme:vs.DARK}));ke.remove=t=>{t?an.dismiss(t):an.clear()};ke.clearAll=(t,e)=>{an.clear(t,e)};ke.isActive=t=>{let e=!1;return e=pm().findIndex(n=>n.toastId===t)>-1,e};ke.update=(t,e={})=>{setTimeout(()=>{const n=Bw(t);if(n){const r=re(n),{content:s}=r,i={...r,...e,toastId:e.toastId||t,updateId:hm()},o=i.render||s;delete i.render,or(o,i.type,i)}},0)};ke.done=t=>{ke.update(t,{isLoading:!1,progress:1})};ke.promise=c0;function c0(t,{pending:e,error:n,success:r},s){var i,o,a;let c;const l={...s||{},autoClose:!1};e&&(c=Xl(e)?ke.loading(e,l):ke.loading(e.render,{...l,...e}));const u={autoClose:(i=s==null?void 0:s.autoClose)!=null?i:!0,closeOnClick:(o=s==null?void 0:s.closeOnClick)!=null?o:!0,closeButton:(a=s==null?void 0:s.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},h=(g,v,E)=>{if(v==null){ke.remove(c);return}const A={type:g,...u,...s,data:E},C=Xl(v)?{render:v}:v;return c?ke.update(c,{...A,...C,isLoading:!1}):ke(C.render,{...A,...C,isLoading:!1}),E},d=hs(t)?t():t;return d.then(g=>{h("success",r,g)}).catch(g=>{h("error",n,g)}),d}ke.POSITION=to;ke.THEME=vs;ke.TYPE=wt;ke.TRANSITIONS=Tw;const gm={install(t,e={}){l0(e)}};typeof window<"u"&&(window.Vue3Toastify=gm);function l0(t={}){const e=ic(am,t);$w(e)}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ts=typeof window<"u";function u0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function al(t,e){const n={};for(const r in e){const s=e[r];n[r]=Gt(s)?s.map(t):t(s)}return n}const _i=()=>{},Gt=Array.isArray,h0=/\/$/,d0=t=>t.replace(h0,"");function cl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=m0(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function f0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function gf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function p0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Es(e.matched[r],n.matched[s])&&mm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!g0(t[n],e[n]))return!1;return!0}function g0(t,e){return Gt(t)?mf(t,e):Gt(e)?mf(e,t):t===e}function mf(t,e){return Gt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function m0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Mi;(function(t){t.pop="pop",t.push="push"})(Mi||(Mi={}));var yi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yi||(yi={}));function _0(t){if(!t)if(ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),d0(t)}const y0=/^[^#]+#/;function v0(t,e){return t.replace(y0,"#")+e}function E0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ac=()=>({left:window.pageXOffset,top:window.pageYOffset});function I0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=E0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function _f(t,e){return(history.state?history.state.position-e:-1)+t}const eu=new Map;function T0(t,e){eu.set(t,e)}function w0(t){const e=eu.get(t);return eu.delete(t),e}let A0=()=>location.protocol+"//"+location.host;function _m(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),gf(c,"")}return gf(n,t)+r+s}function R0(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=_m(t,location),v=n.value,E=e.value;let A=0;if(d){if(n.value=g,e.value=d,o&&o===v){o=null;return}A=E?d.position-E.position:0}else r(g);s.forEach(C=>{C(n.value,v,{delta:A,type:Mi.pop,direction:A?A>0?yi.forward:yi.back:yi.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(Re({},d.state,{scroll:ac()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function yf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ac():null}}function S0(t){const{history:e,location:n}=window,r={value:_m(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:A0()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=Re({},e.state,yf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Re({},s.value,e.state,{forward:c,scroll:ac()});i(u.current,u,!0);const h=Re({},yf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function P0(t){t=_0(t);const e=S0(t),n=R0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:v0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function C0(t){return typeof t=="string"||t&&typeof t=="object"}function ym(t){return typeof t=="string"||typeof t=="symbol"}const Ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vm=Symbol("");var vf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vf||(vf={}));function Is(t,e){return Re(new Error,{type:t,[vm]:!0},e)}function _n(t,e){return t instanceof Error&&vm in t&&(e==null||!!(t.type&e))}const Ef="[^/]+?",b0={sensitive:!1,strict:!1,start:!0,end:!0},k0=/[.+*?^${}()[\]/\\]/g;function O0(t,e){const n=Re({},b0,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(k0,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:E,optional:A,regexp:C}=d;i.push({name:v,repeatable:E,optional:A});const N=C||Ef;if(N!==Ef){g+=10;try{new RegExp(`(${N})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${v}" (${N}): `+O.message)}}let U=E?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(U=A&&l.length<2?`(?:/${U})`:"/"+U),A&&(U+="?"),s+=U,g+=20,A&&(g+=-8),E&&(g+=-20),N===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",v=i[d-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:E,optional:A}=g,C=v in l?l[v]:"";if(Gt(C)&&!E)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const N=Gt(C)?C.join("/"):C;if(!N)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function N0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function D0(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=N0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(If(r))return 1;if(If(s))return-1}return s.length-r.length}function If(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const V0={type:0,value:""},M0=/[a-zA-Z0-9_]/;function x0(t){if(!t)return[[]];if(t==="/")return[[V0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:M0.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function L0(t,e,n){const r=O0(x0(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function F0(t,e){const n=[],r=new Map;e=Af({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const g=!d,v=U0(u);v.aliasOf=d&&d.record;const E=Af(e,u),A=[v];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of U)A.push(Re({},v,{components:d?d.record.components:v.components,path:O,aliasOf:d?d.record:v}))}let C,N;for(const U of A){const{path:O}=U;if(h&&O[0]!=="/"){const Q=h.record.path,se=Q[Q.length-1]==="/"?"":"/";U.path=h.record.path+(O&&se+O)}if(C=L0(U,h,E),d?d.alias.push(C):(N=N||C,N!==C&&N.alias.push(C),g&&u.name&&!wf(C)&&o(u.name)),v.children){const Q=v.children;for(let se=0;se<Q.length;se++)i(Q[se],C,d&&d.children[se])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return N?()=>{o(N)}:_i}function o(u){if(ym(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&D0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Em(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!wf(u)&&r.set(u.record.name,u)}function l(u,h){let d,g={},v,E;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Is(1,{location:u});E=d.record.name,g=Re(Tf(h.params,d.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Tf(u.params,d.keys.map(N=>N.name))),v=d.stringify(g)}else if("path"in u)v=u.path,d=n.find(N=>N.re.test(v)),d&&(g=d.parse(v),E=d.record.name);else{if(d=h.name?r.get(h.name):n.find(N=>N.re.test(h.path)),!d)throw Is(1,{location:u,currentLocation:h});E=d.record.name,g=Re({},h.params,u.params),v=d.stringify(g)}const A=[];let C=d;for(;C;)A.unshift(C.record),C=C.parent;return{name:E,path:v,params:g,matched:A,meta:j0(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Tf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function U0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:B0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function B0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function wf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function j0(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function Af(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Em(t,e){return e.children.some(n=>n===t||Em(t,n))}const Im=/#/g,$0=/&/g,q0=/\//g,H0=/=/g,K0=/\?/g,Tm=/\+/g,z0=/%5B/g,W0=/%5D/g,wm=/%5E/g,G0=/%60/g,Am=/%7B/g,Q0=/%7C/g,Rm=/%7D/g,Y0=/%20/g;function ih(t){return encodeURI(""+t).replace(Q0,"|").replace(z0,"[").replace(W0,"]")}function J0(t){return ih(t).replace(Am,"{").replace(Rm,"}").replace(wm,"^")}function tu(t){return ih(t).replace(Tm,"%2B").replace(Y0,"+").replace(Im,"%23").replace($0,"%26").replace(G0,"`").replace(Am,"{").replace(Rm,"}").replace(wm,"^")}function X0(t){return tu(t).replace(H0,"%3D")}function Z0(t){return ih(t).replace(Im,"%23").replace(K0,"%3F")}function eA(t){return t==null?"":Z0(t).replace(q0,"%2F")}function ya(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function tA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Tm," "),o=i.indexOf("="),a=ya(o<0?i:i.slice(0,o)),c=o<0?null:ya(i.slice(o+1));if(a in e){let l=e[a];Gt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Rf(t){let e="";for(let n in t){const r=t[n];if(n=X0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Gt(r)?r.map(i=>i&&tu(i)):[r&&tu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function nA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Gt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const rA=Symbol(""),Sf=Symbol(""),cc=Symbol(""),oh=Symbol(""),nu=Symbol("");function Js(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function $n(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Is(4,{from:n,to:e})):h instanceof Error?a(h):C0(h)?a(Is(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function ll(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(sA(a)){const l=(a.__vccOpts||a)[e];l&&s.push($n(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=u0(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&$n(d,n,r,i,o)()}))}}return s}function sA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pf(t){const e=Ut(cc),n=Ut(oh),r=ye(()=>e.resolve(Qe(t.to))),s=ye(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Es.bind(null,u));if(d>-1)return d;const g=Cf(c[l-2]);return l>1&&Cf(u)===g&&h[h.length-1].path!==g?h.findIndex(Es.bind(null,c[l-2])):d}),i=ye(()=>s.value>-1&&cA(n.params,r.value.params)),o=ye(()=>s.value>-1&&s.value===n.matched.length-1&&mm(n.params,r.value.params));function a(c={}){return aA(c)?e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(_i):Promise.resolve()}return{route:r,href:ye(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const iA=xs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pf,setup(t,{slots:e}){const n=Xt(Pf(t)),{options:r}=Ut(cc),s=ye(()=>({[bf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[bf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:is("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),oA=iA;function aA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Gt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Cf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bf=(t,e,n)=>t??e??n,lA=xs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ut(nu),s=ye(()=>t.route||r.value),i=Ut(Sf,0),o=ye(()=>{let l=Qe(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ye(()=>s.value.matched[o.value]);Jo(Sf,ye(()=>o.value+1)),Jo(rA,a),Jo(nu,s);const c=Fe();return Jn(()=>[c.value,a.value,t.name],([l,u,h],[d,g,v])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Es(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return kf(n.default,{Component:d,route:l});const g=h.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,A=is(d,Re({},v,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return kf(n.default,{Component:A,route:l})||A}}});function kf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sm=lA;function uA(t){const e=F0(t.routes,t),n=t.parseQuery||tA,r=t.stringifyQuery||Rf,s=t.history,i=Js(),o=Js(),a=Js(),c=Pg(Ln);let l=Ln;ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=al.bind(null,T=>""+T),h=al.bind(null,eA),d=al.bind(null,ya);function g(T,B){let M,W;return ym(T)?(M=e.getRecordMatcher(T),W=B):W=T,e.addRoute(W,M)}function v(T){const B=e.getRecordMatcher(T);B&&e.removeRoute(B)}function E(){return e.getRoutes().map(T=>T.record)}function A(T){return!!e.getRecordMatcher(T)}function C(T,B){if(B=Re({},B||c.value),typeof T=="string"){const _=cl(n,T,B.path),I=e.resolve({path:_.path},B),R=s.createHref(_.fullPath);return Re(_,I,{params:d(I.params),hash:ya(_.hash),redirectedFrom:void 0,href:R})}let M;if("path"in T)M=Re({},T,{path:cl(n,T.path,B.path).path});else{const _=Re({},T.params);for(const I in _)_[I]==null&&delete _[I];M=Re({},T,{params:h(_)}),B.params=h(B.params)}const W=e.resolve(M,B),me=T.hash||"";W.params=u(d(W.params));const p=f0(r,Re({},T,{hash:J0(me),path:W.path})),m=s.createHref(p);return Re({fullPath:p,hash:me,query:r===Rf?nA(T.query):T.query||{}},W,{redirectedFrom:void 0,href:m})}function N(T){return typeof T=="string"?cl(n,T,c.value.path):Re({},T)}function U(T,B){if(l!==T)return Is(8,{from:B,to:T})}function O(T){return fe(T)}function Q(T){return O(Re(N(T),{replace:!0}))}function se(T){const B=T.matched[T.matched.length-1];if(B&&B.redirect){const{redirect:M}=B;let W=typeof M=="function"?M(T):M;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=N(W):{path:W},W.params={}),Re({query:T.query,hash:T.hash,params:"path"in W?{}:T.params},W)}}function fe(T,B){const M=l=C(T),W=c.value,me=T.state,p=T.force,m=T.replace===!0,_=se(M);if(_)return fe(Re(N(_),{state:typeof _=="object"?Re({},me,_.state):me,force:p,replace:m}),B||M);const I=M;I.redirectedFrom=B;let R;return!p&&p0(r,W,M)&&(R=Is(16,{to:I,from:W}),Mt(W,W,!0,!1)),(R?Promise.resolve(R):ie(I,W)).catch(P=>_n(P)?_n(P,2)?P:he(P):ve(P,I,W)).then(P=>{if(P){if(_n(P,2))return fe(Re({replace:m},N(P.to),{state:typeof P.to=="object"?Re({},me,P.to.state):me,force:p}),B||I)}else P=st(I,W,!0,m,me);return $e(I,W,P),P})}function F(T,B){const M=U(T,B);return M?Promise.reject(M):Promise.resolve()}function z(T){const B=gn.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(T):T()}function ie(T,B){let M;const[W,me,p]=hA(T,B);M=ll(W.reverse(),"beforeRouteLeave",T,B);for(const _ of W)_.leaveGuards.forEach(I=>{M.push($n(I,T,B))});const m=F.bind(null,T,B);return M.push(m),ze(M).then(()=>{M=[];for(const _ of i.list())M.push($n(_,T,B));return M.push(m),ze(M)}).then(()=>{M=ll(me,"beforeRouteUpdate",T,B);for(const _ of me)_.updateGuards.forEach(I=>{M.push($n(I,T,B))});return M.push(m),ze(M)}).then(()=>{M=[];for(const _ of p)if(_.beforeEnter)if(Gt(_.beforeEnter))for(const I of _.beforeEnter)M.push($n(I,T,B));else M.push($n(_.beforeEnter,T,B));return M.push(m),ze(M)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),M=ll(p,"beforeRouteEnter",T,B),M.push(m),ze(M))).then(()=>{M=[];for(const _ of o.list())M.push($n(_,T,B));return M.push(m),ze(M)}).catch(_=>_n(_,8)?_:Promise.reject(_))}function $e(T,B,M){a.list().forEach(W=>z(()=>W(T,B,M)))}function st(T,B,M,W,me){const p=U(T,B);if(p)return p;const m=B===Ln,_=ts?history.state:{};M&&(W||m?s.replace(T.fullPath,Re({scroll:m&&_&&_.scroll},me)):s.push(T.fullPath,me)),c.value=T,Mt(T,B,M,m),he()}let _t;function Zt(){_t||(_t=s.listen((T,B,M)=>{if(!ur.listening)return;const W=C(T),me=se(W);if(me){fe(Re(me,{replace:!0}),W).catch(_i);return}l=W;const p=c.value;ts&&T0(_f(p.fullPath,M.delta),ac()),ie(W,p).catch(m=>_n(m,12)?m:_n(m,2)?(fe(m.to,W).then(_=>{_n(_,20)&&!M.delta&&M.type===Mi.pop&&s.go(-1,!1)}).catch(_i),Promise.reject()):(M.delta&&s.go(-M.delta,!1),ve(m,W,p))).then(m=>{m=m||st(W,p,!1),m&&(M.delta&&!_n(m,8)?s.go(-M.delta,!1):M.type===Mi.pop&&_n(m,20)&&s.go(-1,!1)),$e(W,p,m)}).catch(_i)}))}let yt=Js(),ge=Js(),we;function ve(T,B,M){he(T);const W=ge.list();return W.length?W.forEach(me=>me(T,B,M)):console.error(T),Promise.reject(T)}function Bt(){return we&&c.value!==Ln?Promise.resolve():new Promise((T,B)=>{yt.add([T,B])})}function he(T){return we||(we=!T,Zt(),yt.list().forEach(([B,M])=>T?M(T):B()),yt.reset()),T}function Mt(T,B,M,W){const{scrollBehavior:me}=t;if(!ts||!me)return Promise.resolve();const p=!M&&w0(_f(T.fullPath,0))||(W||!M)&&history.state&&history.state.scroll||null;return Fr().then(()=>me(T,B,p)).then(m=>m&&I0(m)).catch(m=>ve(m,T,B))}const it=T=>s.go(T);let ot;const gn=new Set,ur={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:A,getRoutes:E,resolve:C,options:t,push:O,replace:Q,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ge.add,isReady:Bt,install(T){const B=this;T.component("RouterLink",oA),T.component("RouterView",Sm),T.config.globalProperties.$router=B,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(c)}),ts&&!ot&&c.value===Ln&&(ot=!0,O(s.location).catch(me=>{}));const M={};for(const me in Ln)Object.defineProperty(M,me,{get:()=>c.value[me],enumerable:!0});T.provide(cc,B),T.provide(oh,Rg(M)),T.provide(nu,c);const W=T.unmount;gn.add(T),T.unmount=function(){gn.delete(T),gn.size<1&&(l=Ln,_t&&_t(),_t=null,c.value=Ln,ot=!1,we=!1),W()}}};function ze(T){return T.reduce((B,M)=>B.then(()=>z(M)),Promise.resolve())}return ur}function hA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Es(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Es(l,c))||s.push(c))}return[n,r,s]}function XO(){return Ut(cc)}function ZO(){return Ut(oh)}function Pm(t){return ju()?(pg(t),!0):!1}function Ts(t){return typeof t=="function"?t():Qe(t)}const dA=typeof window<"u"&&typeof document<"u",fA=Object.prototype.toString,pA=t=>fA.call(t)==="[object Object]",Cm=()=>{};function gA(t,e){function n(...r){return new Promise((s,i)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(s).catch(i)})}return n}const bm=t=>t();function mA(t=bm){const e=Fe(!0);function n(){e.value=!1}function r(){e.value=!0}const s=(...i)=>{e.value&&t(...i)};return{isActive:Ga(e),pause:n,resume:r,eventFilter:s}}function _A(...t){if(t.length!==1)return MI(...t);const e=t[0];return typeof e=="function"?Ga(OI(()=>({get:e,set:Cm}))):Fe(e)}function yA(t,e,n={}){const{eventFilter:r=bm,...s}=n;return Jn(t,gA(r,e),s)}function vA(t,e,n={}){const{eventFilter:r,...s}=n,{eventFilter:i,pause:o,resume:a,isActive:c}=mA(r);return{stop:yA(t,e,{...s,eventFilter:i}),pause:o,resume:a,isActive:c}}function EA(t,e=!0){Jg()?eo(t):e?t():Fr(t)}function IA(t=!1,e={}){const{truthyValue:n=!0,falsyValue:r=!1}=e,s=Ve(t),i=Fe(t);function o(a){if(arguments.length)return i.value=a,i.value;{const c=Ts(n);return i.value=i.value===c?Ts(r):c,i.value}}return s?o:[i,o]}function km(t){var e;const n=Ts(t);return(e=n==null?void 0:n.$el)!=null?e:n}const xi=dA?window:void 0;function Of(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=xi):[e,n,r,s]=t,!e)return Cm;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d,g)=>(u.addEventListener(h,d,g),()=>u.removeEventListener(h,d,g)),c=Jn(()=>[km(e),Ts(s)],([u,h])=>{if(o(),!u)return;const d=pA(h)?{...h}:h;i.push(...n.flatMap(g=>r.map(v=>a(u,g,v,d))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return Pm(l),l}function TA(){const t=Fe(!1);return Jg()&&eo(()=>{t.value=!0}),t}function wA(t){const e=TA();return ye(()=>(e.value,!!t()))}function AA(t,e={}){const{window:n=xi}=e,r=wA(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const i=Fe(!1),o=l=>{i.value=l.matches},a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",o):s.removeListener(o))},c=di(()=>{r.value&&(a(),s=n.matchMedia(Ts(t)),"addEventListener"in s?s.addEventListener("change",o):s.addListener(o),i.value=s.matches)});return Pm(()=>{c(),a(),s=void 0}),i}const Lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Fo="__vueuse_ssr_handlers__",RA=SA();function SA(){return Fo in Lo||(Lo[Fo]=Lo[Fo]||{}),Lo[Fo]}function Om(t,e){return RA[t]||e}function PA(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const CA={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Nf="vueuse-storage";function bA(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:l=!1,shallow:u,window:h=xi,eventFilter:d,onError:g=F=>{console.error(F)}}=r,v=(u?Pg:Fe)(e);if(!n)try{n=Om("getDefaultStorage",()=>{var F;return(F=xi)==null?void 0:F.localStorage})()}catch(F){g(F)}if(!n)return v;const E=Ts(e),A=PA(E),C=(s=r.serializer)!=null?s:CA[A],{pause:N,resume:U}=vA(v,()=>O(v.value),{flush:i,deep:o,eventFilter:d});return h&&a&&(Of(h,"storage",fe),Of(h,Nf,se)),fe(),v;function O(F){try{if(F==null)n.removeItem(t);else{const z=C.write(F),ie=n.getItem(t);ie!==z&&(n.setItem(t,z),h&&h.dispatchEvent(new CustomEvent(Nf,{detail:{key:t,oldValue:ie,newValue:z,storageArea:n}})))}}catch(z){g(z)}}function Q(F){const z=F?F.newValue:n.getItem(t);if(z==null)return c&&E!==null&&n.setItem(t,C.write(E)),E;if(!F&&l){const ie=C.read(z);return typeof l=="function"?l(ie,E):A==="object"&&!Array.isArray(ie)?{...E,...ie}:ie}else return typeof z!="string"?z:C.read(z)}function se(F){fe(F.detail)}function fe(F){if(!(F&&F.storageArea!==n)){if(F&&F.key==null){v.value=E;return}if(!(F&&F.key!==t)){N();try{(F==null?void 0:F.newValue)!==C.write(v.value)&&(v.value=Q(F))}catch(z){g(z)}finally{F?Fr(U):U()}}}}}function kA(t){return AA("(prefers-color-scheme: dark)",t)}function OA(t={}){const{selector:e="html",attribute:n="class",initialValue:r="auto",window:s=xi,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:c,emitAuto:l,disableTransition:u=!0}=t,h={auto:"",light:"light",dark:"dark",...t.modes||{}},d=kA({window:s}),g=ye(()=>d.value?"dark":"light"),v=c||(o==null?_A(r):bA(o,r,i,{window:s,listenToStorageChanges:a})),E=ye(()=>v.value==="auto"?g.value:v.value),A=Om("updateHTMLAttrs",(O,Q,se)=>{const fe=typeof O=="string"?s==null?void 0:s.document.querySelector(O):km(O);if(!fe)return;let F;if(u){F=s.document.createElement("style");const z="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";F.appendChild(document.createTextNode(z)),s.document.head.appendChild(F)}if(Q==="class"){const z=se.split(/\s/g);Object.values(h).flatMap(ie=>(ie||"").split(/\s/g)).filter(Boolean).forEach(ie=>{z.includes(ie)?fe.classList.add(ie):fe.classList.remove(ie)})}else fe.setAttribute(Q,se);u&&(s.getComputedStyle(F).opacity,document.head.removeChild(F))});function C(O){var Q;A(e,n,(Q=h[O])!=null?Q:O)}function N(O){t.onChanged?t.onChanged(O,C):C(O)}Jn(E,N,{flush:"post",immediate:!0}),EA(()=>N(E.value));const U=ye({get(){return l?v.value:E.value},set(O){v.value=O}});try{return Object.assign(U,{store:v,system:g,state:E})}catch{return U}}function NA(t={}){const{valueDark:e="dark",valueLight:n=""}=t,r=OA({...t,onChanged:(i,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,i==="dark",o,i):o(i)},modes:{dark:e,light:n}});return ye({get(){return r.value==="dark"},set(i){const o=i?"dark":"light";r.system.value===o?r.value="auto":r.value=o}})}/**
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
 */const Nm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},DA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new VA;const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MA=function(t){const e=Nm(t);return Dm.encodeByteArray(e,!0)},va=function(t){return MA(t).replace(/\./g,"")},Vm=function(t){try{return Dm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LA=()=>xA().__FIREBASE_DEFAULTS__,FA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vm(t[1]);return e&&JSON.parse(e)},ah=()=>{try{return LA()||FA()||UA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mm=t=>{var e,n;return(n=(e=ah())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},BA=t=>{const e=Mm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xm=()=>{var t;return(t=ah())===null||t===void 0?void 0:t.config},Lm=t=>{var e;return(e=ah())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $A(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[va(JSON.stringify(n)),va(JSON.stringify(o)),a].join(".")}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function HA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zA(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WA(){try{return typeof indexedDB=="object"}catch{return!1}}function GA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const QA="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QA,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ro.prototype.create)}}class ro{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?YA(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Vn(s,a,r)}}function YA(t,e){return t.replace(JA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const JA=/\{\$([^}]+)}/g;function XA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ea(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Df(i)&&Df(o)){if(!Ea(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Df(t){return t!==null&&typeof t=="object"}/**
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
 */function so(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function si(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ZA(t,e){const n=new eR(t,e);return n.subscribe.bind(n)}class eR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ul),s.error===void 0&&(s.error=ul),s.complete===void 0&&(s.complete=ul);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ul(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class Or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yr="[DEFAULT]";/**
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
 */class nR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sR(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rR(t){return t===yr?void 0:t}function sR(t){return t.instantiationMode==="EAGER"}/**
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
 */class iR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const oR={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},aR=de.INFO,cR={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},lR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ch{constructor(e){this.name=e,this._logLevel=aR,this._logHandler=lR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const uR=(t,e)=>e.some(n=>t instanceof n);let Vf,Mf;function hR(){return Vf||(Vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dR(){return Mf||(Mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fm=new WeakMap,ru=new WeakMap,Um=new WeakMap,hl=new WeakMap,lh=new WeakMap;function fR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fm.set(n,t)}).catch(()=>{}),lh.set(e,t),e}function pR(t){if(ru.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ru.set(t,e)}let su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Um.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gR(t){su=t(su)}function mR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dl(this),e,...n);return Um.set(r,e.sort?e.sort():[e]),Xn(r)}:dR().includes(t)?function(...e){return t.apply(dl(this),e),Xn(Fm.get(this))}:function(...e){return Xn(t.apply(dl(this),e))}}function _R(t){return typeof t=="function"?mR(t):(t instanceof IDBTransaction&&pR(t),uR(t,hR())?new Proxy(t,su):t)}function Xn(t){if(t instanceof IDBRequest)return fR(t);if(hl.has(t))return hl.get(t);const e=_R(t);return e!==t&&(hl.set(t,e),lh.set(e,t)),e}const dl=t=>lh.get(t);function yR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Xn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xn(o.result),c.oldVersion,c.newVersion,Xn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const vR=["get","getKey","getAll","getAllKeys","count"],ER=["put","add","delete","clear"],fl=new Map;function xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fl.get(e))return fl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ER.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vR.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return fl.set(e,i),i}gR(t=>({...t,get:(e,n,r)=>xf(e,n)||t.get(e,n,r),has:(e,n)=>!!xf(e,n)||t.has(e,n)}));/**
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
 */class IR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const iu="@firebase/app",Lf="0.9.19";/**
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
 */const Nr=new ch("@firebase/app"),wR="@firebase/app-compat",AR="@firebase/analytics-compat",RR="@firebase/analytics",SR="@firebase/app-check-compat",PR="@firebase/app-check",CR="@firebase/auth",bR="@firebase/auth-compat",kR="@firebase/database",OR="@firebase/database-compat",NR="@firebase/functions",DR="@firebase/functions-compat",VR="@firebase/installations",MR="@firebase/installations-compat",xR="@firebase/messaging",LR="@firebase/messaging-compat",FR="@firebase/performance",UR="@firebase/performance-compat",BR="@firebase/remote-config",jR="@firebase/remote-config-compat",$R="@firebase/storage",qR="@firebase/storage-compat",HR="@firebase/firestore",KR="@firebase/firestore-compat",zR="firebase",WR="10.4.0";/**
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
 */const ou="[DEFAULT]",GR={[iu]:"fire-core",[wR]:"fire-core-compat",[RR]:"fire-analytics",[AR]:"fire-analytics-compat",[PR]:"fire-app-check",[SR]:"fire-app-check-compat",[CR]:"fire-auth",[bR]:"fire-auth-compat",[kR]:"fire-rtdb",[OR]:"fire-rtdb-compat",[NR]:"fire-fn",[DR]:"fire-fn-compat",[VR]:"fire-iid",[MR]:"fire-iid-compat",[xR]:"fire-fcm",[LR]:"fire-fcm-compat",[FR]:"fire-perf",[UR]:"fire-perf-compat",[BR]:"fire-rc",[jR]:"fire-rc-compat",[$R]:"fire-gcs",[qR]:"fire-gcs-compat",[HR]:"fire-fst",[KR]:"fire-fst-compat","fire-js":"fire-js",[zR]:"fire-js-all"};/**
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
 */const Ia=new Map,au=new Map;function QR(t,e){try{t.container.addComponent(e)}catch(n){Nr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if(au.has(e))return Nr.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,t);for(const n of Ia.values())QR(n,t);return!0}function uh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const YR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zn=new ro("app","Firebase",YR);/**
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
 */class JR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=WR;function Bm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ou,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Zn.create("bad-app-name",{appName:String(s)});if(n||(n=xm()),!n)throw Zn.create("no-options");const i=Ia.get(s);if(i){if(Ea(n,i.options)&&Ea(r,i.config))return i;throw Zn.create("duplicate-app",{appName:s})}const o=new iR(s);for(const c of au.values())o.addComponent(c);const a=new JR(n,r,o);return Ia.set(s,a),a}function jm(t=ou){const e=Ia.get(t);if(!e&&t===ou&&xm())return Bm();if(!e)throw Zn.create("no-app",{appName:t});return e}function er(t,e,n){var r;let s=(r=GR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nr.warn(a.join(" "));return}ws(new Or(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const XR="firebase-heartbeat-database",ZR=1,Li="firebase-heartbeat-store";let pl=null;function $m(){return pl||(pl=yR(XR,ZR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Li)}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),pl}async function eS(t){try{return await(await $m()).transaction(Li).objectStore(Li).get(qm(t))}catch(e){if(e instanceof Vn)Nr.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nr.warn(n.message)}}}async function Ff(t,e){try{const r=(await $m()).transaction(Li,"readwrite");await r.objectStore(Li).put(e,qm(t)),await r.done}catch(n){if(n instanceof Vn)Nr.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nr.warn(r.message)}}}function qm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tS=1024,nS=30*24*60*60*1e3;class rS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Uf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=nS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uf(),{heartbeatsToSend:n,unsentEntries:r}=sS(this._heartbeatsCache.heartbeats),s=va(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Uf(){return new Date().toISOString().substring(0,10)}function sS(t,e=tS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Bf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WA()?GA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bf(t){return va(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oS(t){ws(new Or("platform-logger",e=>new IR(e),"PRIVATE")),ws(new Or("heartbeat",e=>new rS(e),"PRIVATE")),er(iu,Lf,t),er(iu,Lf,"esm2017"),er("fire-js","")}oS("");var aS="firebase",cS="10.4.0";/**
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
 */er(aS,cS,"app");var lS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,hh=hh||{},te=lS||self;function lc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function io(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uS(t){return Object.prototype.hasOwnProperty.call(t,gl)&&t[gl]||(t[gl]=++hS)}var gl="closure_uid_"+(1e9*Math.random()>>>0),hS=0;function dS(t,e,n){return t.call.apply(t.bind,arguments)}function fS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function dt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=dS:dt=fS,dt.apply(null,arguments)}function Uo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function ar(){this.s=this.s,this.o=this.o}var pS=0;ar.prototype.s=!1;ar.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),pS!=0)&&uS(this)};ar.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function jf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(lc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var gS=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function Fi(t){return/^[\s\xa0]*$/.test(t)}function uc(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function rn(t){return uc().indexOf(t)!=-1}function fh(t){return fh[" "](t),t}fh[" "]=function(){};function mS(t,e){var n=cP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var _S=rn("Opera"),As=rn("Trident")||rn("MSIE"),Km=rn("Edge"),cu=Km||As,zm=rn("Gecko")&&!(uc().toLowerCase().indexOf("webkit")!=-1&&!rn("Edge"))&&!(rn("Trident")||rn("MSIE"))&&!rn("Edge"),yS=uc().toLowerCase().indexOf("webkit")!=-1&&!rn("Edge");function Wm(){var t=te.document;return t?t.documentMode:void 0}var lu;e:{var ml="",_l=function(){var t=uc();if(zm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Km)return/Edge\/([\d\.]+)/.exec(t);if(As)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yS)return/WebKit\/(\S+)/.exec(t);if(_S)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(_l&&(ml=_l?_l[1]:""),As){var yl=Wm();if(yl!=null&&yl>parseFloat(ml)){lu=String(yl);break e}}lu=ml}var uu;if(te.document&&As){var $f=Wm();uu=$f||parseInt(lu,10)||void 0}else uu=void 0;var vS=uu;function Ui(t,e){if(ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zm){e:{try{fh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ES[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ui.$.h.call(this)}}Ze(Ui,ft);var ES={2:"touch",3:"pen",4:"mouse"};Ui.prototype.h=function(){Ui.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var oo="closure_listenable_"+(1e6*Math.random()|0),IS=0;function TS(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++IS,this.fa=this.ia=!1}function hc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ph(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function wS(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Gm(t){const e={};for(const n in t)e[n]=t[n];return e}const qf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<qf.length;i++)n=qf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function dc(t){this.src=t,this.g={},this.h=0}dc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=du(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new TS(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function hu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Hm(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(hc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function du(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var gh="closure_lm_"+(1e6*Math.random()|0),vl={};function Ym(t,e,n,r,s){if(r&&r.once)return Xm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ym(t,e[i],n,r,s);return null}return n=yh(n),t&&t[oo]?t.O(e,n,io(r)?!!r.capture:!!r,s):Jm(t,e,n,!1,r,s)}function Jm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=io(s)?!!s.capture:!!s,a=_h(t);if(a||(t[gh]=a=new dc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=AS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)gS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(e_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function AS(){function t(n){return e.call(t.src,t.listener,n)}const e=RS;return t}function Xm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Xm(t,e[i],n,r,s);return null}return n=yh(n),t&&t[oo]?t.P(e,n,io(r)?!!r.capture:!!r,s):Jm(t,e,n,!0,r,s)}function Zm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Zm(t,e[i],n,r,s);else r=io(r)?!!r.capture:!!r,n=yh(n),t&&t[oo]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=du(i,n,r,s),-1<n&&(hc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=_h(t))&&(e=t.g[e.toString()],t=-1,e&&(t=du(e,n,r,s)),(n=-1<t?e[t]:null)&&mh(n))}function mh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[oo])hu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(e_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=_h(e))?(hu(n,t),n.h==0&&(n.src=null,e[gh]=null)):hc(t)}}}function e_(t){return t in vl?vl[t]:vl[t]="on"+t}function RS(t,e){if(t.fa)t=!0;else{e=new Ui(e,this);var n=t.listener,r=t.la||t.src;t.ia&&mh(t),t=n.call(r,e)}return t}function _h(t){return t=t[gh],t instanceof dc?t:null}var El="__closure_events_fn_"+(1e9*Math.random()>>>0);function yh(t){return typeof t=="function"?t:(t[El]||(t[El]=function(e){return t.handleEvent(e)}),t[El])}function Xe(){ar.call(this),this.i=new dc(this),this.S=this,this.J=null}Ze(Xe,ar);Xe.prototype[oo]=!0;Xe.prototype.removeEventListener=function(t,e,n,r){Zm(this,t,e,n,r)};function rt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ft(e,t);else if(e instanceof ft)e.target=e.target||t;else{var s=e;e=new ft(r,t),Qm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Bo(o,r,!0,e)&&s}if(o=e.g=t,s=Bo(o,r,!0,e)&&s,s=Bo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Bo(o,r,!1,e)&&s}Xe.prototype.N=function(){if(Xe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)hc(n[r]);delete t.g[e],t.h--}}this.J=null};Xe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Xe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Bo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&hu(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var vh=te.JSON.stringify;class SS{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function PS(){var t=Eh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class CS{constructor(){this.h=this.g=null}add(e,n){const r=t_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var t_=new SS(()=>new bS,t=>t.reset());class bS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kS(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function OS(t){te.setTimeout(()=>{throw t},0)}let Bi,ji=!1,Eh=new CS,n_=()=>{const t=te.Promise.resolve(void 0);Bi=()=>{t.then(NS)}};var NS=()=>{for(var t;t=PS();){try{t.h.call(t.g)}catch(n){OS(n)}var e=t_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ji=!1};function fc(t,e){Xe.call(this),this.h=t||1,this.g=e||te,this.j=dt(this.qb,this),this.l=Date.now()}Ze(fc,Xe);x=fc.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),rt(this,"tick"),this.ga&&(Ih(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ih(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){fc.$.N.call(this),Ih(this),delete this.g};function Th(t,e,n){if(typeof t=="function")n&&(t=dt(t,n));else if(t&&typeof t.handleEvent=="function")t=dt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function r_(t){t.g=Th(()=>{t.g=null,t.i&&(t.i=!1,r_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class DS extends ar{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:r_(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $i(t){ar.call(this),this.h=t,this.g={}}Ze($i,ar);var Hf=[];function s_(t,e,n,r){Array.isArray(n)||(n&&(Hf[0]=n.toString()),n=Hf);for(var s=0;s<n.length;s++){var i=Ym(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function i_(t){ph(t.g,function(e,n){this.g.hasOwnProperty(n)&&mh(e)},t),t.g={}}$i.prototype.N=function(){$i.$.N.call(this),i_(this)};$i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function pc(){this.g=!0}pc.prototype.Ea=function(){this.g=!1};function VS(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function MS(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function os(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LS(t,n)+(r?" "+r:"")})}function xS(t,e){t.info(function(){return"TIMEOUT: "+e})}pc.prototype.info=function(){};function LS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return vh(n)}catch{return e}}var Ur={},Kf=null;function gc(){return Kf=Kf||new Xe}Ur.Ta="serverreachability";function o_(t){ft.call(this,Ur.Ta,t)}Ze(o_,ft);function qi(t){const e=gc();rt(e,new o_(e))}Ur.STAT_EVENT="statevent";function a_(t,e){ft.call(this,Ur.STAT_EVENT,t),this.stat=e}Ze(a_,ft);function Tt(t){const e=gc();rt(e,new a_(e,t))}Ur.Ua="timingevent";function c_(t,e){ft.call(this,Ur.Ua,t),this.size=e}Ze(c_,ft);function ao(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var mc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},l_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wh(){}wh.prototype.h=null;function zf(t){return t.h||(t.h=t.i())}function u_(){}var co={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ah(){ft.call(this,"d")}Ze(Ah,ft);function Rh(){ft.call(this,"c")}Ze(Rh,ft);var fu;function _c(){}Ze(_c,wh);_c.prototype.g=function(){return new XMLHttpRequest};_c.prototype.i=function(){return{}};fu=new _c;function lo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new $i(this),this.P=FS,t=cu?125:void 0,this.V=new fc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new h_}function h_(){this.i=null,this.g="",this.h=!1}var FS=45e3,pu={},Ta={};x=lo.prototype;x.setTimeout=function(t){this.P=t};function gu(t,e,n){t.L=1,t.v=vc(Pn(e)),t.s=n,t.S=!0,d_(t,null)}function d_(t,e){t.G=Date.now(),uo(t),t.A=Pn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),E_(n.i,"t",r),t.C=0,n=t.l.J,t.h=new h_,t.g=j_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new DS(dt(t.Pa,t,t.g),t.O)),s_(t.U,t.g,"readystatechange",t.nb),e=t.I?Gm(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),qi(),VS(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&sn(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=sn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||cu||this.g&&(this.h.h||this.g.ja()||Yf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?qi(3):qi(2)),yc(this);var n=this.g.da();this.ca=n;t:if(f_(this)){var r=Yf(this.g);t="";var s=r.length,i=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tr(this),vi(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,MS(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fi(a)){var l=a;break t}}l=null}if(n=l)os(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mu(this,n);else{this.i=!1,this.o=3,Tt(12),Tr(this),vi(this);break e}}this.S?(p_(this,u,o),cu&&this.i&&u==3&&(s_(this.U,this.V,"tick",this.mb),this.V.start())):(os(this.j,this.m,o,null),mu(this,o)),u==4&&Tr(this),this.i&&!this.J&&(u==4?L_(this.l,this):(this.i=!1,uo(this)))}else iP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Tt(12)):(this.o=0,Tt(13)),Tr(this),vi(this)}}}catch{}finally{}};function f_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function p_(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=US(t,n),s==Ta){e==4&&(t.o=4,Tt(14),r=!1),os(t.j,t.m,null,"[Incomplete Response]");break}else if(s==pu){t.o=4,Tt(15),os(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else os(t.j,t.m,s,null),mu(t,s);f_(t)&&s!=Ta&&s!=pu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Tt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Oh(e),e.M=!0,Tt(11))):(os(t.j,t.m,n,"[Invalid Chunked Response]"),Tr(t),vi(t))}x.mb=function(){if(this.g){var t=sn(this.g),e=this.g.ja();this.C<e.length&&(yc(this),p_(this,t,e),this.i&&t!=4&&uo(this))}};function US(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ta:(n=Number(e.substring(n,r)),isNaN(n)?pu:(r+=1,r+n>e.length?Ta:(e=e.slice(r,r+n),t.C=r+n,e)))}x.cancel=function(){this.J=!0,Tr(this)};function uo(t){t.Y=Date.now()+t.P,g_(t,t.P)}function g_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ao(dt(t.lb,t),e)}function yc(t){t.B&&(te.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xS(this.j,this.A),this.L!=2&&(qi(),Tt(17)),Tr(this),this.o=2,vi(this)):g_(this,this.Y-t)};function vi(t){t.l.H==0||t.J||L_(t.l,t)}function Tr(t){yc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ih(t.V),i_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function mu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||_u(n.i,t))){if(!t.K&&_u(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ra(n),wc(n);else break e;kh(n),Tt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ao(dt(n.ib,n),6e3));if(1>=w_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else wr(n,11)}else if((t.K||n.g==t)&&Ra(n),!Fi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Sh(i,i.h),i.h=null))}if(r.F){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Ce(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=B_(r,r.J?r.pa:null,r.Y),o.K){A_(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(yc(a),uo(a)),r.g=o}else M_(r);0<n.j.length&&Ac(n)}else l[0]!="stop"&&l[0]!="close"||wr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?wr(n,7):bh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}qi(4)}catch{}}function BS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(lc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function jS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(lc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function m_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(lc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=jS(t),r=BS(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var __=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $S(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Pr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pr){this.h=t.h,wa(this,t.j),this.s=t.s,this.g=t.g,Aa(this,t.m),this.l=t.l;var e=t.i,n=new Hi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wf(this,n),this.o=t.o}else t&&(e=String(t).match(__))?(this.h=!1,wa(this,e[1]||"",!0),this.s=oi(e[2]||""),this.g=oi(e[3]||"",!0),Aa(this,e[4]),this.l=oi(e[5]||"",!0),Wf(this,e[6]||"",!0),this.o=oi(e[7]||"")):(this.h=!1,this.i=new Hi(null,this.h))}Pr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ai(e,Gf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ai(e,Gf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ai(n,n.charAt(0)=="/"?KS:HS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ai(n,WS)),t.join("")};function Pn(t){return new Pr(t)}function wa(t,e,n){t.j=n?oi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Aa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wf(t,e,n){e instanceof Hi?(t.i=e,GS(t.i,t.h)):(n||(e=ai(e,zS)),t.i=new Hi(e,t.h))}function Ce(t,e,n){t.i.set(e,n)}function vc(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function oi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ai(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gf=/[#\/\?@]/g,HS=/[#\?:]/g,KS=/[#\?]/g,zS=/[#\?@]/g,WS=/#/g;function Hi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function cr(t){t.g||(t.g=new Map,t.h=0,t.i&&$S(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Hi.prototype;x.add=function(t,e){cr(this),this.i=null,t=Fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function y_(t,e){cr(t),e=Fs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function v_(t,e){return cr(t),e=Fs(t,e),t.g.has(e)}x.forEach=function(t,e){cr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};x.ta=function(){cr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};x.Z=function(t){cr(this);let e=[];if(typeof t=="string")v_(this,t)&&(e=e.concat(this.g.get(Fs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return cr(this),this.i=null,t=Fs(this,t),v_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function E_(t,e,n){y_(t,e),0<n.length&&(t.i=null,t.g.set(Fs(t,e),dh(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function GS(t,e){e&&!t.j&&(cr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(y_(this,r),E_(this,s,n))},t)),t.j=e}var QS=class{constructor(t,e){this.g=t,this.map=e}};function I_(t){this.l=t||YS,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YS=10;function T_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function w_(t){return t.h?1:t.g?t.g.size:0}function _u(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sh(t,e){t.g?t.g.add(e):t.h=e}function A_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}I_.prototype.cancel=function(){if(this.i=R_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function R_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return dh(t.i)}var JS=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function XS(){this.g=new JS}function ZS(t,e,n){const r=n||"";try{m_(t,function(s,i){let o=s;io(s)&&(o=vh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function eP(t,e){const n=new pc;if(te.Image){const r=new Image;r.onload=Uo(jo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Uo(jo,n,r,"TestLoadImage: error",!1,e),r.onabort=Uo(jo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Uo(jo,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function jo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ec(t){this.l=t.ec||null,this.j=t.ob||!1}Ze(Ec,wh);Ec.prototype.g=function(){return new Ic(this.l,this.j)};Ec.prototype.i=function(t){return function(){return t}}({});function Ic(t,e){Xe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ph,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(Ic,Xe);var Ph=0;x=Ic.prototype;x.open=function(t,e){if(this.readyState!=Ph)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ki(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ho(this)),this.readyState=Ph};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ki(this)),this.g&&(this.readyState=3,Ki(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;S_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function S_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ho(this):Ki(this),this.readyState==3&&S_(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,ho(this))};x.Ya=function(t){this.g&&(this.response=t,ho(this))};x.ka=function(){this.g&&ho(this)};function ho(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ki(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ki(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var tP=te.JSON.parse;function xe(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=P_,this.L=this.M=!1}Ze(xe,Xe);var P_="",nP=/^https?$/i,rP=["POST","PUT"];x=xe.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fu.g(),this.C=this.u?zf(this.u):zf(fu),this.g.onreadystatechange=dt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Qf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=te.FormData&&t instanceof te.FormData,!(0<=Hm(rP,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{k_(this),0<this.B&&((this.L=sP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.ua,this)):this.A=Th(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Qf(this,i)}};function sP(t){return As&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof hh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function Qf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,C_(t),Tc(t)}function C_(t){t.F||(t.F=!0,rt(t,"complete"),rt(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,rt(this,"complete"),rt(this,"abort"),Tc(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tc(this,!0)),xe.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?b_(this):this.kb())};x.kb=function(){b_(this)};function b_(t){if(t.h&&typeof hh<"u"&&(!t.C[1]||sn(t)!=4||t.da()!=2)){if(t.v&&sn(t)==4)Th(t.La,0,t);else if(rt(t,"readystatechange"),sn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(__)[1]||null;!s&&te.self&&te.self.location&&(s=te.self.location.protocol.slice(0,-1)),r=!nP.test(s?s.toLowerCase():"")}n=r}if(n)rt(t,"complete"),rt(t,"success");else{t.m=6;try{var i=2<sn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",C_(t)}}finally{Tc(t)}}}}function Tc(t,e){if(t.g){k_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||rt(t,"ready");try{n.onreadystatechange=r}catch{}}}function k_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function sn(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),tP(e)}};function Yf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case P_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function iP(t){const e={};t=(t.g&&2<=sn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Fi(t[r]))continue;var n=kS(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}wS(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function O_(t){let e="";return ph(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ch(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=O_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ce(t,e,n))}function Xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function N_(t){this.Ga=0,this.j=[],this.l=new pc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Xs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Xs("baseRetryDelayMs",5e3,t),this.hb=Xs("retryDelaySeedMs",1e4,t),this.eb=Xs("forwardChannelMaxRetries",2,t),this.xa=Xs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new I_(t&&t.concurrentRequestLimit),this.Ja=new XS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=N_.prototype;x.ra=8;x.H=1;function bh(t){if(D_(t),t.H==3){var e=t.W++,n=Pn(t.I);if(Ce(n,"SID",t.K),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),fo(t,n),e=new lo(t,t.l,e),e.L=2,e.v=vc(Pn(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=j_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),uo(e)}U_(t)}function wc(t){t.g&&(Oh(t),t.g.cancel(),t.g=null)}function D_(t){wc(t),t.u&&(te.clearTimeout(t.u),t.u=null),Ra(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Ac(t){if(!T_(t.i)&&!t.m){t.m=!0;var e=t.Na;Bi||n_(),ji||(Bi(),ji=!0),Eh.add(e,t),t.C=0}}function oP(t,e){return w_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ao(dt(t.Na,t,e),F_(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new lo(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Gm(i),Qm(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=V_(this,s,e),n=Pn(this.I),Ce(n,"RID",t),Ce(n,"CVER",22),this.F&&Ce(n,"X-HTTP-Session-Id",this.F),fo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(O_(i)))+"&"+e:this.o&&Ch(n,this.o,i)),Sh(this.i,s),this.bb&&Ce(n,"TYPE","init"),this.P?(Ce(n,"$req",e),Ce(n,"SID","null"),s.aa=!0,gu(s,n,null)):gu(s,n,e),this.H=2}}else this.H==3&&(t?Jf(this,t):this.j.length==0||T_(this.i)||Jf(this))};function Jf(t,e){var n;e?n=e.m:n=t.W++;const r=Pn(t.I);Ce(r,"SID",t.K),Ce(r,"RID",n),Ce(r,"AID",t.V),fo(t,r),t.o&&t.s&&Ch(r,t.o,t.s),n=new lo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=V_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Sh(t.i,n),gu(n,r,e)}function fo(t,e){t.na&&ph(t.na,function(n,r){Ce(e,r,n)}),t.h&&m_({},function(n,r){Ce(e,r,n)})}function V_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?dt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{ZS(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function M_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Bi||n_(),ji||(Bi(),ji=!0),Eh.add(e,t),t.A=0}}function kh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ao(dt(t.Ma,t),F_(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,x_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ao(dt(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Tt(10),wc(this),x_(this))};function Oh(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function x_(t){t.g=new lo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Pn(t.wa);Ce(e,"RID","rpc"),Ce(e,"SID",t.K),Ce(e,"AID",t.V),Ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ce(e,"TO",t.qa),Ce(e,"TYPE","xmlhttp"),fo(t,e),t.o&&t.s&&Ch(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=vc(Pn(e)),n.s=null,n.S=!0,d_(n,t)}x.ib=function(){this.v!=null&&(this.v=null,wc(this),kh(this),Tt(19))};function Ra(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function L_(t,e){var n=null;if(t.g==e){Ra(t),Oh(t),t.g=null;var r=2}else if(_u(t.i,e))n=e.F,A_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=gc(),rt(r,new c_(r,n)),Ac(t)}else M_(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&oP(t,e)||r==2&&kh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:wr(t,5);break;case 4:wr(t,10);break;case 3:wr(t,6);break;default:wr(t,2)}}}function F_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function wr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=dt(t.pb,t);n||(n=new Pr("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||wa(n,"https"),vc(n)),eP(n.toString(),r)}else Tt(2);t.H=0,t.h&&t.h.za(e),U_(t),D_(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Tt(2)):(this.l.info("Failed to ping google.com"),Tt(1))};function U_(t){if(t.H=0,t.ma=[],t.h){const e=R_(t.i);(e.length!=0||t.j.length!=0)&&(jf(t.ma,e),jf(t.ma,t.j),t.i.i.length=0,dh(t.j),t.j.length=0),t.h.ya()}}function B_(t,e,n){var r=n instanceof Pr?Pn(n):new Pr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Aa(r,r.m);else{var s=te.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Pr(null);r&&wa(i,r),e&&(i.g=e),s&&Aa(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ce(r,n,e),Ce(r,"VER",t.ra),fo(t,r),r}function j_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new xe(new Ec({ob:!0})):new xe(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function $_(){}x=$_.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Sa(){if(As&&!(10<=Number(vS)))throw Error("Environmental error: no available transport.")}Sa.prototype.g=function(t,e){return new Vt(t,e)};function Vt(t,e){Xe.call(this),this.g=new N_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Fi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Us(this)}Ze(Vt,Xe);Vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Tt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=B_(t,null,t.Y),Ac(t)};Vt.prototype.close=function(){bh(this.g)};Vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=vh(t),t=n);e.j.push(new QS(e.fb++,t)),e.H==3&&Ac(e)};Vt.prototype.N=function(){this.g.h=null,delete this.j,bh(this.g),delete this.g,Vt.$.N.call(this)};function q_(t){Ah.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(q_,Ah);function H_(){Rh.call(this),this.status=1}Ze(H_,Rh);function Us(t){this.g=t}Ze(Us,$_);Us.prototype.Ba=function(){rt(this.g,"a")};Us.prototype.Aa=function(t){rt(this.g,new q_(t))};Us.prototype.za=function(t){rt(this.g,new H_)};Us.prototype.ya=function(){rt(this.g,"b")};function aP(){this.blockSize=-1}function Qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ze(Qt,aP);Qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Il(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Il(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Il(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Il(this,r),s=0;break}}this.h=s,this.i+=e};Qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Se(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var cP={};function Nh(t){return-128<=t&&128>t?mS(t,function(e){return new Se([e|0],0>e?-1:0)}):new Se([t|0],0>t?-1:0)}function on(t){if(isNaN(t)||!isFinite(t))return ds;if(0>t)return nt(on(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=yu;return new Se(e,0)}function K_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return nt(K_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=on(Math.pow(e,8)),r=ds,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=on(Math.pow(e,i)),r=r.R(i).add(on(o))):(r=r.R(n),r=r.add(on(o)))}return r}var yu=4294967296,ds=Nh(0),vu=Nh(1),Xf=Nh(16777216);x=Se.prototype;x.ea=function(){if(Ft(this))return-nt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:yu+r)*e,e*=yu}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Tn(this))return"0";if(Ft(this))return"-"+nt(this).toString(t);for(var e=on(Math.pow(t,6)),n=this,r="";;){var s=Ca(n,e).g;n=Pa(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Tn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Tn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ft(t){return t.h==-1}x.X=function(t){return t=Pa(this,t),Ft(t)?-1:Tn(t)?0:1};function nt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Se(n,~t.h).add(vu)}x.abs=function(){return Ft(this)?nt(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Se(n,n[n.length-1]&-2147483648?-1:0)};function Pa(t,e){return t.add(nt(e))}x.R=function(t){if(Tn(this)||Tn(t))return ds;if(Ft(this))return Ft(t)?nt(this).R(nt(t)):nt(nt(this).R(t));if(Ft(t))return nt(this.R(nt(t)));if(0>this.X(Xf)&&0>t.X(Xf))return on(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,$o(n,2*r+2*s),n[2*r+2*s+1]+=i*c,$o(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,$o(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,$o(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Se(n,0)};function $o(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Zs(t,e){this.g=t,this.h=e}function Ca(t,e){if(Tn(e))throw Error("division by zero");if(Tn(t))return new Zs(ds,ds);if(Ft(t))return e=Ca(nt(t),e),new Zs(nt(e.g),nt(e.h));if(Ft(e))return e=Ca(t,nt(e)),new Zs(nt(e.g),e.h);if(30<t.g.length){if(Ft(t)||Ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=vu,r=e;0>=r.X(t);)n=Zf(n),r=Zf(r);var s=Xr(n,1),i=Xr(r,1);for(r=Xr(r,2),n=Xr(n,2);!Tn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Xr(r,1),n=Xr(n,1)}return e=Pa(t,s.R(e)),new Zs(s,e)}for(s=ds;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=on(n),o=i.R(e);Ft(o)||0<o.X(t);)n-=r,i=on(n),o=i.R(e);Tn(i)&&(i=vu),s=s.add(i),t=Pa(t,o)}return new Zs(s,t)}x.gb=function(t){return Ca(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Se(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Se(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Se(n,this.h^t.h)};function Zf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Se(n,t.h)}function Xr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Se(s,t.h)}Sa.prototype.createWebChannel=Sa.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;mc.NO_ERROR=0;mc.TIMEOUT=8;mc.HTTP_ERROR=6;l_.COMPLETE="complete";u_.EventType=co;co.OPEN="a";co.CLOSE="b";co.ERROR="c";co.MESSAGE="d";Xe.prototype.listen=Xe.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;Qt.prototype.digest=Qt.prototype.l;Qt.prototype.reset=Qt.prototype.reset;Qt.prototype.update=Qt.prototype.j;Se.prototype.add=Se.prototype.add;Se.prototype.multiply=Se.prototype.R;Se.prototype.modulo=Se.prototype.gb;Se.prototype.compare=Se.prototype.X;Se.prototype.toNumber=Se.prototype.ea;Se.prototype.toString=Se.prototype.toString;Se.prototype.getBits=Se.prototype.D;Se.fromNumber=on;Se.fromString=K_;var lP=function(){return new Sa},uP=function(){return gc()},Tl=mc,hP=l_,dP=Ur,ep={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qo=u_,fP=xe,pP=Qt,fs=Se;const tp="@firebase/firestore";/**
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
 */class ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
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
 */let Bs="10.4.0";/**
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
 */const Dr=new ch("@firebase/firestore");function ei(){return Dr.logLevel}function H(t,...e){if(Dr.logLevel<=de.DEBUG){const n=e.map(Dh);Dr.debug(`Firestore (${Bs}): ${t}`,...n)}}function Cn(t,...e){if(Dr.logLevel<=de.ERROR){const n=e.map(Dh);Dr.error(`Firestore (${Bs}): ${t}`,...n)}}function Rs(t,...e){if(Dr.logLevel<=de.WARN){const n=e.map(Dh);Dr.warn(`Firestore (${Bs}): ${t}`,...n)}}function Dh(t){if(typeof t=="string")return t;try{/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${Bs}) INTERNAL ASSERTION FAILED: `+t;throw Cn(e),new Error(e)}function Oe(t,e){t||ee()}function ae(t,e){return t}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class z_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class mP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _P{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new z_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new ct(e)}}class yP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new yP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new EP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function TP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class W_{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=TP(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Ss(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new He(0,0))}static max(){return new ne(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends zi{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const wP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends zi{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return wP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(be.fromString(e))}static fromName(e){return new Y(be.fromString(e).popFirst(5))}static empty(){return new Y(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new be(e.slice()))}}function AP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new rr(s,Y.empty(),e)}function RP(t){return new rr(t.readTime,t.key,-1)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(ne.min(),Y.empty(),-1)}static max(){return new rr(ne.max(),Y.empty(),-1)}}function SP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const PP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function po(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==PP)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(s=>s?k.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new k((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new k((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function go(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Vh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Vh.ae=-1;function Rc(t){return t==null}function ba(t){return t===0&&1/t==-1/0}function bP(t){return typeof t=="number"&&Number.isInteger(t)&&!ba(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function np(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function G_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Me{constructor(e,n){this.comparator=e,this.root=n||tt.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ho(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ho(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ho(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ho(this.root,e,this.comparator,!0)}}class Ho{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??tt.EMPTY,this.right=i??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rp(this.data.getIterator())}getIteratorFrom(e){return new rp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class rp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dt{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new pt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Q_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Q_("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const kP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=kP.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vr(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */function Mh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xh(t){const e=t.mapValue.fields.__previous_value__;return Mh(e)?xh(e):e}function Wi(t){const e=sr(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class OP{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ko={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mh(t)?4:NP(t)?9007199254740991:10:ee()}function pn(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wi(t).isEqual(Wi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=sr(s.timestampValue),a=sr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Vr(s.bytesValue).isEqual(Vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),a=Be(i.doubleValue);return o===a?ba(o)===ba(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ss(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(np(o)!==np(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!pn(o[c],a[c])))return!1;return!0}(t,e);default:return ee()}}function Qi(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function Ps(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Be(i.integerValue||i.doubleValue),c=Be(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return sp(t.timestampValue,e.timestampValue);case 4:return sp(Wi(t),Wi(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Vr(i),c=Vr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=Ie(a[l],c[l]);if(u!==0)return u}return Ie(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ie(Be(i.latitude),Be(o.latitude));return a!==0?a:Ie(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ps(a[l],c[l]);if(u)return u}return Ie(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ko.mapValue&&o===Ko.mapValue)return 0;if(i===Ko.mapValue)return 1;if(o===Ko.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=Ie(c[h],u[h]);if(d!==0)return d;const g=Ps(a[c[h]],l[u[h]]);if(g!==0)return g}return Ie(c.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function sp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=sr(t),r=sr(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function Cs(t){return Eu(t)}function Eu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Eu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Eu(n.fields[o])}`;return s+"}"}(t.mapValue):ee()}function ip(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Iu(t){return!!t&&"integerValue"in t}function Lh(t){return!!t&&"arrayValue"in t}function op(t){return!!t&&"nullValue"in t}function ap(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function na(t){return!!t&&"mapValue"in t}function Ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!na(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ei(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ei(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());na(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];na(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new St(Ei(this.value))}}function Y_(t){const e=[];return Br(t.fields,(n,r)=>{const s=new ht([n]);if(na(r)){const i=Y_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Dt(e)}/**
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
 */class lt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new lt(e,0,ne.min(),ne.min(),ne.min(),St.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,ne.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,ne.min(),ne.min(),St.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,ne.min(),ne.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ka{constructor(e,n){this.position=e,this.inclusive=n}}function cp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Ps(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function DP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class J_{}class je extends J_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MP(e,n,r):n==="array-contains"?new FP(e,r):n==="in"?new UP(e,r):n==="not-in"?new BP(e,r):n==="array-contains-any"?new jP(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xP(e,r):new LP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ps(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Yt extends J_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Yt(e,n)}matches(e){return X_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function X_(t){return t.op==="and"}function Z_(t){return VP(t)&&X_(t)}function VP(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function Tu(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(Z_(t))return t.filters.map(e=>Tu(e)).join(",");{const e=t.filters.map(n=>Tu(n)).join(",");return`${t.op}(${e})`}}function ey(t,e){return t instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)}(t,e):t instanceof Yt?function(r,s){return s instanceof Yt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&ey(o,s.filters[a]),!0):!1}(t,e):void ee()}function ty(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${Cs(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(ty).join(" ,")+"}"}(t):"Filter"}class MP extends je{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class xP extends je{constructor(e,n){super(e,"in",n),this.keys=ny("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LP extends je{constructor(e,n){super(e,"not-in",n),this.keys=ny("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ny(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class FP extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lh(n)&&Qi(n.arrayValue,this.value)}}class UP extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qi(this.value.arrayValue,n)}}class BP extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qi(this.value.arrayValue,n)}}class jP extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qi(this.value.arrayValue,r))}}/**
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
 */class $P{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function up(t,e=null,n=[],r=[],s=null,i=null,o=null){return new $P(t,e,n,r,s,i,o)}function Fh(t){const e=ae(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.he=n}return e.he}function Uh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ey(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lp(t.startAt,e.startAt)&&lp(t.endAt,e.endAt)}function wu(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class mo{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function qP(t,e,n,r,s,i,o,a){return new mo(t,e,n,r,s,i,o,a)}function Bh(t){return new mo(t)}function hp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ry(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function sy(t){return t.collectionGroup!==null}function Ti(t){const e=ae(t);if(e.Pe===null){e.Pe=[];const n=jh(e),r=ry(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ii(n)),e.Pe.push(new Ii(ht.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ii(ht.keyField(),i))}}}return e.Pe}function cn(t){const e=ae(t);return e.Ie||(e.Ie=HP(e,Ti(t))),e.Ie}function HP(t,e){if(t.limitType==="F")return up(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ii(s.field,i)});const n=t.endAt?new ka(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ka(t.startAt.position,t.startAt.inclusive):null;return up(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Au(t,e){e.getFirstInequalityField(),jh(t);const n=t.filters.concat([e]);return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ru(t,e,n){return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sc(t,e){return Uh(cn(t),cn(e))&&t.limitType===e.limitType}function iy(t){return`${Fh(cn(t))}|lt:${t.limitType}`}function ns(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ty(s)).join(", ")}]`),Rc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Cs(s)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function Pc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=cp(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ti(r),s)||r.endAt&&!function(o,a,c){const l=cp(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ti(r),s))}(t,e)}function KP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function oy(t){return(e,n)=>{let r=!1;for(const s of Ti(t)){const i=zP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zP(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Ps(c,l):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return G_(this.inner)}size(){return this.innerSize}}/**
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
 */const WP=new Me(Y.comparator);function bn(){return WP}const ay=new Me(Y.comparator);function ci(...t){let e=ay;for(const n of t)e=e.insert(n.key,n);return e}function cy(t){let e=ay;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ar(){return wi()}function ly(){return wi()}function wi(){return new js(t=>t.toString(),(t,e)=>t.isEqual(e))}const GP=new Me(Y.comparator),QP=new pt(Y.comparator);function ue(...t){let e=QP;for(const n of t)e=e.add(n);return e}const YP=new pt(Ie);function JP(){return YP}/**
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
 */function uy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ba(e)?"-0":e}}function hy(t){return{integerValue:""+t}}function XP(t,e){return bP(e)?hy(e):uy(t,e)}/**
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
 */class Cc{constructor(){this._=void 0}}function ZP(t,e,n){return t instanceof Oa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mh(i)&&(i=xh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof bs?fy(t,e):t instanceof Yi?py(t,e):function(s,i){const o=dy(s,i),a=dp(o)+dp(s.Te);return Iu(o)&&Iu(s.Te)?hy(a):uy(s.serializer,a)}(t,e)}function eC(t,e,n){return t instanceof bs?fy(t,e):t instanceof Yi?py(t,e):n}function dy(t,e){return t instanceof Na?function(r){return Iu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Oa extends Cc{}class bs extends Cc{constructor(e){super(),this.elements=e}}function fy(t,e){const n=gy(e);for(const r of t.elements)n.some(s=>pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Yi extends Cc{constructor(e){super(),this.elements=e}}function py(t,e){let n=gy(e);for(const r of t.elements)n=n.filter(s=>!pn(s,r));return{arrayValue:{values:n}}}class Na extends Cc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function dp(t){return Be(t.integerValue||t.doubleValue)}function gy(t){return Lh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class tC{constructor(e,n){this.field=e,this.transform=n}}function nC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof bs&&s instanceof bs||r instanceof Yi&&s instanceof Yi?Ss(r.elements,s.elements,pn):r instanceof Na&&s instanceof Na?pn(r.Te,s.Te):r instanceof Oa&&s instanceof Oa}(t.transform,e.transform)}class rC{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ra(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bc{}function my(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $h(t.key,Wt.none()):new _o(t.key,t.data,Wt.none());{const n=t.data,r=St.empty();let s=new pt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new lr(t.key,r,new Dt(s.toArray()),Wt.none())}}function sC(t,e,n){t instanceof _o?function(s,i,o){const a=s.value.clone(),c=pp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof lr?function(s,i,o){if(!ra(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=pp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(_y(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ai(t,e,n,r){return t instanceof _o?function(i,o,a,c){if(!ra(i.precondition,o))return a;const l=i.value.clone(),u=gp(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof lr?function(i,o,a,c){if(!ra(i.precondition,o))return a;const l=gp(i.fieldTransforms,c,o),u=o.data;return u.setAll(_y(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ra(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function iC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=dy(r.transform,s||null);i!=null&&(n===null&&(n=St.empty()),n.set(r.field,i))}return n||null}function fp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ss(r,s,(i,o)=>nC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _o extends bc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class lr extends bc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _y(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function pp(t,e,n){const r=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,eC(o,a,n[s]))}return r}function gp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ZP(i,o,e))}return r}class $h extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oC extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ai(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ai(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ly();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=my(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&Ss(this.mutations,e.mutations,(n,r)=>fp(n,r))&&Ss(this.baseMutations,e.baseMutations,(n,r)=>fp(n,r))}}class qh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length);let s=function(){return GP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new qh(e,n,r,s)}}/**
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
 */class cC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ue,pe;function uC(t){switch(t){default:return ee();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function yy(t){if(t===void 0)return Cn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ue.OK:return S.OK;case Ue.CANCELLED:return S.CANCELLED;case Ue.UNKNOWN:return S.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return S.INTERNAL;case Ue.UNAVAILABLE:return S.UNAVAILABLE;case Ue.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ue.NOT_FOUND:return S.NOT_FOUND;case Ue.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ue.ABORTED:return S.ABORTED;case Ue.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ue.DATA_LOSS:return S.DATA_LOSS;default:return ee()}}(pe=Ue||(Ue={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hC(){return new TextEncoder}/**
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
 */const dC=new fs([4294967295,4294967295],0);function mp(t){const e=hC().encode(t),n=new pP;return n.update(e),new Uint8Array(n.digest())}function _p(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new fs([n,r],0),new fs([s,i],0)]}class Hh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new li(`Invalid padding: ${n}`);if(r<0)throw new li(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new li(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new li(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=fs.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(fs.fromNumber(r)));return s.compare(dC)===1&&(s=new fs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=mp(e),[r,s]=_p(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Hh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=mp(e),[r,s]=_p(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class li extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,yo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kc(ne.min(),s,new Me(Ie),bn(),ue())}}class yo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new yo(r,n,ue(),ue(),ue())}}/**
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
 */class sa{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class vy{constructor(e,n){this.targetId=e,this.ye=n}}class Ey{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class yp{constructor(){this.we=0,this.Se=Ep(),this.be=mt.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=ue(),n=ue(),r=ue();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new yo(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Ep()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class fC{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=bn(),this.Ue=vp(),this.We=new Me(Ie)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(wu(i))if(r===0){const o=new Y(i.path);this.je(n,o,lt.newNoDocument(o,ne.min()))}else Oe(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Vr(r).toUint8Array()}catch(c){if(c instanceof Q_)return Rs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Hh(o,s,i)}catch(c){return Rs(c instanceof li?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&wu(a.target)){const c=new Y(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,lt.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=ue();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new kc(e,n,this.We,this.$e,r);return this.$e=bn(),this.Ue=vp(),this.We=new Me(Ie),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new yp,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new pt(Ie),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new yp),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function vp(){return new Me(Y.comparator)}function Ep(){return new Me(Y.comparator)}const pC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),mC=(()=>({and:"AND",or:"OR"}))();class _C{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Su(t,e){return t.useProto3Json||Rc(e)?e:{value:e}}function Da(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Iy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yC(t,e){return Da(t,e.toTimestamp())}function ln(t){return Oe(!!t),ne.fromTimestamp(function(n){const r=sr(n);return new He(r.seconds,r.nanos)}(t))}function Kh(t,e){return function(r){return new be(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Ty(t){const e=be.fromString(t);return Oe(Sy(e)),e}function Pu(t,e){return Kh(t.databaseId,e.path)}function wl(t,e){const n=Ty(e);if(n.get(1)!==t.databaseId.projectId)throw new j(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(wy(n))}function Cu(t,e){return Kh(t.databaseId,e)}function vC(t){const e=Ty(t);return e.length===4?be.emptyPath():wy(e)}function bu(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wy(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ip(t,e,n){return{name:Pu(t,e),fields:n.value.mapValue.fields}}function EC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Oe(u===void 0||typeof u=="string"),mt.fromBase64String(u||"")):(Oe(u===void 0||u instanceof Uint8Array),mt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?S.UNKNOWN:yy(l.code);return new j(u,l.message||"")}(o);n=new Ey(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wl(t,r.document.name),i=ln(r.document.updateTime),o=r.document.createTime?ln(r.document.createTime):ne.min(),a=new St({mapValue:{fields:r.document.fields}}),c=lt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new sa(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wl(t,r.document),i=r.readTime?ln(r.readTime):ne.min(),o=lt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new sa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wl(t,r.document),i=r.removedTargetIds||[];n=new sa([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lC(s,i),a=r.targetId;n=new vy(a,o)}}return n}function IC(t,e){let n;if(e instanceof _o)n={update:Ip(t,e.key,e.value)};else if(e instanceof $h)n={delete:Pu(t,e.key)};else if(e instanceof lr)n={update:Ip(t,e.key,e.data),updateMask:kC(e.fieldMask)};else{if(!(e instanceof oC))return ee();n={verify:Pu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Oa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof bs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Yi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Na)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:yC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function TC(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?ln(s.updateTime):ln(i);return o.isEqual(ne.min())&&(o=ln(i)),new rC(o,s.transformResults||[])}(n,e))):[]}function wC(t,e){return{documents:[Cu(t,e.path)]}}function AC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Cu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Ry(Yt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:rs(h.field),direction:PC(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Su(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function RC(t){let e=vC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Ay(h);return d instanceof Yt&&Z_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Ii(ss(v.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Rc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,g=h.values||[];return new ka(g,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,g=h.values||[];return new ka(g,d)}(n.endAt)),qP(e,s,o,i,a,"F",c,l)}function SC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ay(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ss(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ss(n.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ss(n.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ss(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return je.create(ss(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>Ay(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function PC(t){return pC[t]}function CC(t){return gC[t]}function bC(t){return mC[t]}function rs(t){return{fieldPath:t.canonicalString()}}function ss(t){return ht.fromServerFormat(t.fieldPath)}function Ry(t){return t instanceof je?function(n){if(n.op==="=="){if(ap(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NAN"}};if(op(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ap(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NAN"}};if(op(n.value))return{unaryFilter:{field:rs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(n.field),op:CC(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(s=>Ry(s));return r.length===1?r[0]:{compositeFilter:{op:bC(n.op),filters:r}}}(t):ee()}function kC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Wn{constructor(e,n,r,s,i=ne.min(),o=ne.min(),a=mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class OC{constructor(e){this.ht=e}}function NC(t){const e=RC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ru(e,e.limit,"L"):e}/**
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
 */class DC{constructor(){this.an=new VC}addToCollectionParentIndex(e,n){return this.an.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(rr.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class VC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new pt(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pt(be.comparator)).toArray()}}/**
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
 */class ks{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new ks(0)}static Ln(){return new ks(-1)}}/**
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
 */class MC{constructor(){this.changes=new js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class xC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class LC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ai(r.mutation,s,Dt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=Ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ci();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=bn();const o=wi(),a=function(){return wi()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof lr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ai(u.mutation,l,u.mutation.getFieldMask(),He.now())):o.set(l.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new xC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=wi();let s=new Me((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Dt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ue()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ly();u.forEach(d=>{if(!i.has(d)){const g=my(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):k.resolve(Ar());let a=-1,c=i;return o.next(l=>k.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ue())).next(u=>({batchId:a,changes:cy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=ci();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ci();return this.indexManager.getCollectionParents(e,i).next(a=>k.forEach(a,c=>{const l=function(h,d){return new mo(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,lt.newInvalidDocument(u)))});let a=ci();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Ai(u.mutation,l,Dt.empty(),He.now()),Pc(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class FC{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return k.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ln(s.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:NC(s.bundledQuery),readTime:ln(s.readTime)}}(n)),k.resolve()}}/**
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
 */class UC{constructor(){this.overlays=new Me(Y.comparator),this.Pr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return k.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const s=Ar(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return k.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Ar(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Ar(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return k.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cC(n,r));let i=this.Pr.get(n);i===void 0&&(i=ue(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
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
 */class zh{constructor(){this.Ir=new pt(Ge.dr),this.Tr=new pt(Ge.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Ge(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new Y(new be([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new Y(new be([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=ue();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return Y.comparator(e.key,n.key)||Ie(e.yr,n.yr)}static Er(e,n){return Ie(e.yr,n.yr)||Y.comparator(e.key,n.key)}}/**
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
 */class BC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new pt(Ge.dr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aC(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new Ge(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(Ie);return n.forEach(s=>{const i=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new Ge(new Y(i),0);let a=new pt(Ie);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.yr)),!0)},o),k.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return k.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Ge(n,0),s=this.Sr.firstAfterOrEqual(r);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jC{constructor(e){this.Fr=e,this.docs=function(){return new Me(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=bn();const o=n.path,a=new Y(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||SP(RP(u),r)<=0||(s.has(u.key)||Pc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee()}Mr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $C(this)}getSize(e){return k.resolve(this.size)}}class $C extends MC{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class qC{constructor(e){this.persistence=e,this.Or=new js(n=>Fh(n),Uh),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Nr=0,this.Br=new zh,this.targetCount=0,this.Lr=ks.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),k.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ks(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Qn(n),k.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Br.containsKey(n))}}/**
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
 */class HC{constructor(e,n){this.kr={},this.overlays={},this.qr=new Vh(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new qC(this),this.indexManager=new DC,this.remoteDocumentCache=function(s){return new jC(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new OC(n),this.Ur=new FC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new BC(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new KC(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return k.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class KC extends CP{constructor(e){super(),this.currentSequenceNumber=e}}class Wh{constructor(e){this.persistence=e,this.jr=new zh,this.Hr=null}static Jr(e){return new Wh(e)}get Yr(){if(this.Hr)return this.Hr;throw ee()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),k.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Yr,r=>{const s=Y.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,ne.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return k.or([()=>k.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class Gh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gh(e,n.fromCache,r,s)}}/**
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
 */class zC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class WC{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new zC;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(ei()<=de.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ns(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),k.resolve()):(ei()<=de.DEBUG&&H("QueryEngine","Query:",ns(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(ei()<=de.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ns(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):k.resolve())}Hi(e,n){if(hp(n))return k.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ru(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,Ru(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,s){return hp(n)||s.isEqual(ne.min())?k.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?k.resolve(null):(ei()<=de.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ns(n)),this.ts(e,o,n,AP(s,-1)).next(a=>a))})}Xi(e,n){let r=new pt(oy(e));return n.forEach((s,i)=>{Pc(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return ei()<=de.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ns(n)),this.ji.getDocumentsMatchingQuery(e,n,rr.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class GC{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new Me(Ie),this.ss=new js(i=>Fh(i),Uh),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LC(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function QC(t,e,n,r){return new GC(t,e,n,r)}async function Py(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ue();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function YC(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let g=k.resolve();return d.forEach(v=>{g=g.next(()=>u.getEntry(c,v)).next(E=>{const A=l.docVersions.get(v);Oe(A!==null),E.version.compareTo(A)<0&&(h.applyToRemoteDocument(E,l),E.isValidDocument()&&(E.setReadTime(l.commitVersion),u.addEntry(E)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ue();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Cy(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function JC(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(mt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(E,A,C){return E.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,g,u)&&a.push(n.Kr.updateTargetData(i,g))});let c=bn(),l=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(XC(i,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(ne.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return k.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.rs=s,i))}function XC(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=bn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:s}})}function ZC(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eb(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function ku(t,e,n){const r=ae(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!go(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function Tp(t,e,n){const r=ae(t);let s=ne.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ae(c),d=h.ss.get(u);return d!==void 0?k.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,cn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:ne.min(),n?i:ue())).next(a=>(tb(r,KP(e),a),{documents:a,Ps:i})))}function tb(t,e,n){let r=t.os.get(e)||ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class wp{constructor(){this.activeTargetIds=JP()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nb{constructor(){this.ro=new wp,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new wp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rb{so(e){}shutdown(){}}/**
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
 */class Ap{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zo=null;function Al(){return zo===null?zo=function(){return 268435456+Math.round(2147483648*Math.random())}():zo++,"0x"+zo.toString(16)}/**
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
 */const sb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ib{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const at="WebChannelConnection";class ob extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=Al(),c=this.Do(n,r);H("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,i,o),this.vo(n,c,l,s).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Rs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=sb[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Al();return new Promise((o,a)=>{const c=new fP;c.setWithCredentials(!0),c.listenOnce(hP.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Tl.NO_ERROR:const u=c.getResponseJson();H(at,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Tl.TIMEOUT:H(at,`RPC '${e}' ${i} timed out`),a(new j(S.DEADLINE_EXCEEDED,"Request time out"));break;case Tl.HTTP_ERROR:const h=c.getStatus();if(H(at,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(A){const C=A.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(C)>=0?C:S.UNKNOWN}(g.status);a(new j(v,g.message))}else a(new j(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new j(S.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{H(at,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);H(at,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const s=Al(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lP(),a=uP(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");H(at,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,g=!1;const v=new ib({ho:A=>{g?H(at,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(d||(H(at,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),H(at,`RPC '${e}' stream ${s} sending:`,A),h.send(A))},Po:()=>h.close()}),E=(A,C,N)=>{A.listen(C,U=>{try{N(U)}catch(O){setTimeout(()=>{throw O},0)}})};return E(h,qo.EventType.OPEN,()=>{g||H(at,`RPC '${e}' stream ${s} transport opened.`)}),E(h,qo.EventType.CLOSE,()=>{g||(g=!0,H(at,`RPC '${e}' stream ${s} transport closed`),v.mo())}),E(h,qo.EventType.ERROR,A=>{g||(g=!0,Rs(at,`RPC '${e}' stream ${s} transport errored:`,A),v.mo(new j(S.UNAVAILABLE,"The operation could not be completed")))}),E(h,qo.EventType.MESSAGE,A=>{var C;if(!g){const N=A.data[0];Oe(!!N);const U=N,O=U.error||((C=U[0])===null||C===void 0?void 0:C.error);if(O){H(at,`RPC '${e}' stream ${s} received error:`,O);const Q=O.status;let se=function(z){const ie=Ue[z];if(ie!==void 0)return yy(ie)}(Q),fe=O.message;se===void 0&&(se=S.INTERNAL,fe="Unknown error status: "+Q+" with message "+O.message),g=!0,v.mo(new j(se,fe)),h.close()}else H(at,`RPC '${e}' stream ${s} received:`,N),v.fo(N)}}),E(a,dP.STAT_EVENT,A=>{A.stat===ep.PROXY?H(at,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===ep.NOPROXY&&H(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.Vo()},0),v}}function Rl(){return typeof document<"u"?document:null}/**
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
 */function Oc(t){return new _C(t,!0)}/**
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
 */class by{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class ky{constructor(e,n,r,s,i,o,a,c){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new by(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new j(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ab extends ky{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=EC(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?ln(o.readTime):ne.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=bu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=wu(c)?{documents:wC(i,c)}:{query:AC(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Iy(i,o.resumeToken);const l=Su(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ne.min())>0){a.readTime=Da(i,o.snapshotVersion.toTimestamp());const l=Su(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=SC(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=bu(this.serializer),n.removeTarget=e,this.n_(n)}}class cb extends ky{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=TC(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.T_(r,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=bu(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IC(this.serializer,r))};this.n_(n)}}/**
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
 */class lb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new j(S.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(S.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(S.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class ub{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Cn(n),this.p_=!1):H("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class hb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{jr(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ae(c);l.F_.add(4),await vo(l),l.O_.set("Unknown"),l.F_.delete(4),await Nc(l)}(this))})}),this.O_=new ub(r,s)}}async function Nc(t){if(jr(t))for(const e of t.M_)await e(!0)}async function vo(t){for(const e of t.M_)await e(!1)}function Oy(t,e){const n=ae(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Jh(n)?Yh(n):$s(n).Yo()&&Qh(n,e))}function Ny(t,e){const n=ae(t),r=$s(n);n.v_.delete(e),r.Yo()&&Dy(n,e),n.v_.size===0&&(r.Yo()?r.e_():jr(n)&&n.O_.set("Unknown"))}function Qh(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}$s(t).l_(e)}function Dy(t,e){t.N_.Le(e),$s(t).h_(e)}function Yh(t){t.N_=new fC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.O_.y_()}function Jh(t){return jr(t)&&!$s(t).Jo()&&t.v_.size>0}function jr(t){return ae(t).F_.size===0}function Vy(t){t.N_=void 0}async function db(t){t.v_.forEach((e,n)=>{Qh(t,e)})}async function fb(t,e){Vy(t),Jh(t)?(t.O_.b_(e),Yh(t)):t.O_.set("Unknown")}async function pb(t,e,n){if(t.O_.set("Online"),e instanceof Ey&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Va(t,r)}else if(e instanceof sa?t.N_.Ge(e):e instanceof vy?t.N_.Xe(e):t.N_.He(e),!n.isEqual(ne.min()))try{const r=await Cy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.v_.get(l);u&&i.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.v_.get(c);if(!u)return;i.v_.set(c,u.withResumeToken(mt.EMPTY_BYTE_STRING,u.snapshotVersion)),Dy(i,c);const h=new Wn(u.target,c,l,u.sequenceNumber);Qh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Va(t,r)}}async function Va(t,e,n){if(!go(e))throw e;t.F_.add(1),await vo(t),t.O_.set("Offline"),n||(n=()=>Cy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Nc(t)})}function My(t,e){return e().catch(n=>Va(t,n,e))}async function Dc(t){const e=ae(t),n=ir(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;gb(e);)try{const s=await ZC(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,mb(e,s)}catch(s){await Va(e,s)}xy(e)&&Ly(e)}function gb(t){return jr(t)&&t.C_.length<10}function mb(t,e){t.C_.push(e);const n=ir(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function xy(t){return jr(t)&&!ir(t).Jo()&&t.C_.length>0}function Ly(t){ir(t).start()}async function _b(t){ir(t).A_()}async function yb(t){const e=ir(t);for(const n of t.C_)e.d_(n.mutations)}async function vb(t,e,n){const r=t.C_.shift(),s=qh.from(r,e,n);await My(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Dc(t)}async function Eb(t,e){e&&ir(t).I_&&await async function(r,s){if(function(o){return uC(o)&&o!==S.ABORTED}(s.code)){const i=r.C_.shift();ir(r).Xo(),await My(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Dc(r)}}(t,e),xy(t)&&Ly(t)}async function Rp(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=jr(n);n.F_.add(3),await vo(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Nc(n)}async function Ib(t,e){const n=ae(t);e?(n.F_.delete(2),await Nc(n)):e||(n.F_.add(2),await vo(n),n.O_.set("Unknown"))}function $s(t){return t.B_||(t.B_=function(n,r,s){const i=ae(n);return i.V_(),new ab(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:db.bind(null,t),Eo:fb.bind(null,t),c_:pb.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Jh(t)?Yh(t):t.O_.set("Unknown")):(await t.B_.stop(),Vy(t))})),t.B_}function ir(t){return t.L_||(t.L_=function(n,r,s){const i=ae(n);return i.V_(),new cb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:_b.bind(null,t),Eo:Eb.bind(null,t),E_:yb.bind(null,t),T_:vb.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Dc(t)):(await t.L_.stop(),t.C_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class Xh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Xh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zh(t,e){if(Cn("AsyncQueue",`${e}: ${t}`),go(t))return new j(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ps{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=ci(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new ps(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ps)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ps;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Sp{constructor(){this.k_=new Me(Y.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):ee():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Os{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Os(e,n,ps.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Tb{constructor(){this.Q_=void 0,this.listeners=[]}}class wb{constructor(){this.queries=new js(e=>iy(e),Sc),this.onlineState="Unknown",this.K_=new Set}}async function Fy(t,e){const n=ae(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Tb),s)try{i.Q_=await n.onListen(r)}catch(o){const a=Zh(o,`Initialization of query '${ns(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&ed(n)}async function Uy(t,e){const n=ae(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Ab(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&ed(n)}function Rb(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function ed(t){t.K_.forEach(e=>{e.next()})}class By{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class jy{constructor(e){this.key=e}}class $y{constructor(e){this.key=e}}class Sb{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ue(),this.mutatedKeys=ue(),this.ua=oy(e),this.ca=new ps(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Sp,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),g=Pc(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;d&&g?d.data.isEqual(g.data)?v!==E&&(r.track({type:3,doc:g}),A=!0):this.Ia(d,g)||(r.track({type:2,doc:g}),A=!0,(c&&this.ua(g,c)>0||l&&this.ua(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),A=!0):d&&!g&&(r.track({type:1,doc:d}),A=!0,(c||l)&&(a=!0)),A&&(g?(o=o.add(g),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((l,u)=>function(d,g){const v=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return v(d)-v(g)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,i.length!==0||c?{snapshot:new Os(this.query,e.ca,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Sp,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=ue(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new $y(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new jy(r))}),n}Ra(e){this.oa=e.Ps,this.aa=ue();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Os.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Pb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Cb{constructor(e){this.key=e,this.ma=!1}}class bb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new js(a=>iy(a),Sc),this.pa=new Map,this.ya=new Set,this.wa=new Me(Y.comparator),this.Sa=new Map,this.ba=new zh,this.Da={},this.Ca=new Map,this.va=ks.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function kb(t,e){const n=Bb(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await eb(n.localStore,cn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Ob(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Oy(n.remoteStore,o)}return s}async function Ob(t,e,n,r,s){t.Ma=(h,d,g)=>async function(E,A,C,N){let U=A.view.ha(C);U.es&&(U=await Tp(E.localStore,A.query,!1).then(({documents:se})=>A.view.ha(se,U)));const O=N&&N.targetChanges.get(A.targetId),Q=A.view.applyChanges(U,E.isPrimaryClient,O);return Cp(E,A.targetId,Q.Ea),Q.snapshot}(t,h,d,g);const i=await Tp(t.localStore,e,!0),o=new Sb(e,i.Ps),a=o.ha(i.documents),c=yo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Cp(t,n,l.Ea);const u=new Pb(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function Nb(t,e){const n=ae(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Sc(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ku(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ny(n.remoteStore,r.targetId),Ou(n,r.targetId)}).catch(po)):(Ou(n,r.targetId),await ku(n.localStore,r.targetId,!0))}async function Db(t,e,n){const r=jb(t);try{const s=await function(o,a){const c=ae(o),l=He.now(),u=a.reduce((g,v)=>g.add(v.key),ue());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let v=bn(),E=ue();return c._s.getEntries(g,u).next(A=>{v=A,v.forEach((C,N)=>{N.isValidDocument()||(E=E.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,v)).next(A=>{h=A;const C=[];for(const N of a){const U=iC(N,h.get(N.key).overlayedDocument);U!=null&&C.push(new lr(N.key,U,Y_(U.value.mapValue),Wt.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,C,a)}).next(A=>{d=A;const C=A.applyToLocalDocumentSet(h,E);return c.documentOverlayCache.saveOverlays(g,A.batchId,C)})}).then(()=>({batchId:d.batchId,changes:cy(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Me(Ie)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await Eo(r,s.changes),await Dc(r.remoteStore)}catch(s){const i=Zh(s,"Failed to persist write");n.reject(i)}}async function qy(t,e){const n=ae(t);try{const r=await JC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Oe(o.ma):s.removedDocuments.size>0&&(Oe(o.ma),o.ma=!1))}),await Eo(n,r,e)}catch(r){await po(r)}}function Pp(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ae(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&ed(c)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vb(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Me(Y.comparator);o=o.insert(i,lt.newNoDocument(i,ne.min()));const a=ue().add(i),c=new kc(ne.min(),new Map,new Me(Ie),o,a);await qy(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),td(r)}else await ku(r.localStore,e,!1).then(()=>Ou(r,e,n)).catch(po)}async function Mb(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await YC(n.localStore,e);Ky(n,r,null),Hy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Eo(n,s)}catch(s){await po(s)}}async function xb(t,e,n){const r=ae(t);try{const s=await function(o,a){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Oe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Ky(r,e,n),Hy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Eo(r,s)}catch(s){await po(s)}}function Hy(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function Ky(t,e,n){const r=ae(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function Ou(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||zy(t,r)})}function zy(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Ny(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),td(t))}function Cp(t,e,n){for(const r of n)r instanceof jy?(t.ba.addReference(r.key,e),Lb(t,r)):r instanceof $y?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||zy(t,r.key)):ee()}function Lb(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(H("SyncEngine","New document in limbo: "+n),t.ya.add(r),td(t))}function td(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new Y(be.fromString(e)),r=t.va.next();t.Sa.set(r,new Cb(n)),t.wa=t.wa.insert(n,r),Oy(t.remoteStore,new Wn(cn(Bh(n.path)),r,"TargetPurposeLimboResolution",Vh.ae))}}async function Eo(t,e,n){const r=ae(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Gh.$i(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(c,l){const u=ae(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(l,d=>k.forEach(d.Qi,g=>u.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>k.forEach(d.Ki,g=>u.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!go(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const g=u.rs.get(d),v=g.snapshotVersion,E=g.withLastLimboFreeSnapshotVersion(v);u.rs=u.rs.insert(d,E)}}}(r.localStore,i))}async function Fb(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Py(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new j(S.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Eo(n,r.cs)}}function Ub(t,e){const n=ae(t),r=n.Sa.get(e);if(r&&r.ma)return ue().add(r.key);{let s=ue();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function Bb(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ub.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vb.bind(null,e),e.fa.c_=Ab.bind(null,e.eventManager),e.fa.xa=Rb.bind(null,e.eventManager),e}function jb(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xb.bind(null,e),e}class bp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return QC(this.persistence,new WC,e.initialUser,this.serializer)}createPersistence(e){return new HC(Wh.Jr,this.serializer)}createSharedClientState(e){return new nb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $b{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fb.bind(null,this.syncEngine),await Ib(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wb}()}createDatastore(e){const n=Oc(e.databaseInfo.databaseId),r=function(i){return new ob(i)}(e.databaseInfo);return function(i,o,a,c){return new lb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new hb(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Pp(this.syncEngine,n,0),function(){return Ap.C()?new Ap:new rb}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new bb(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ae(n);H("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await vo(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Wy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class qb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=W_.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sl(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Py(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Kb(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Rp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Rp(e.remoteStore,i)),t._onlineComponents=e}function Hb(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Kb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Sl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Hb(n))throw n;Rs("Error using user provided cache. Falling back to memory cache: "+n),await Sl(t,new bp)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Sl(t,new bp);return t._offlineComponents}async function Gy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await kp(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await kp(t,new $b))),t._onlineComponents}function zb(t){return Gy(t).then(e=>e.syncEngine)}async function Qy(t){const e=await Gy(t),n=e.eventManager;return n.onListen=kb.bind(null,e.syncEngine),n.onUnlisten=Nb.bind(null,e.syncEngine),n}function Wb(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Wy({next:d=>{o.enqueueAndForget(()=>Uy(i,h));const g=d.docs.has(a);!g&&d.fromCache?l.reject(new j(S.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&c&&c.source==="server"?l.reject(new j(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new By(Bh(a.path),u,{includeMetadataChanges:!0,Z_:!0});return Fy(i,h)}(await Qy(t),t.asyncQueue,e,n,r)),r.promise}function Gb(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Wy({next:d=>{o.enqueueAndForget(()=>Uy(i,h)),d.fromCache&&c.source==="server"?l.reject(new j(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new By(a,u,{includeMetadataChanges:!0,Z_:!0});return Fy(i,h)}(await Qy(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Yy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Op=new Map;/**
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
 */function Jy(t,e,n){if(!n)throw new j(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qb(t,e,n,r){if(e===!0&&r===!0)throw new j(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Np(t){if(!Y.isDocumentKey(t))throw new j(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dp(t){if(Y.isDocumentKey(t))throw new j(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function kn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vc(t);throw new j(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Vp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Mc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gP;switch(r.type){case"firstParty":return new vP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Op.get(n);r&&(H("ComponentProvider","Removing Datastore"),Op.delete(n),r.terminate())}(this),Promise.resolve()}}function Yb(t,e,n,r={}){var s;const i=(t=kn(t,Mc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ct.MOCK_USER;else{a=$A(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new j(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ct(l)}t._authCredentials=new mP(new z_(a,c))}}/**
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
 */class qs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qs(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class tr extends qs{constructor(e,n,r){super(e,n,Bh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new Y(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}function Pl(t,e,...n){if(t=Je(t),Jy("collection","path",e),t instanceof Mc){const r=be.fromString(e,...n);return Dp(r),new tr(t,null,r)}{if(!(t instanceof Ct||t instanceof tr))throw new j(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Dp(r),new tr(t.firestore,null,r)}}function ui(t,e,...n){if(t=Je(t),arguments.length===1&&(e=W_.V()),Jy("doc","path",e),t instanceof Mc){const r=be.fromString(e,...n);return Np(r),new Ct(t,null,new Y(r))}{if(!(t instanceof Ct||t instanceof tr))throw new j(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Np(r),new Ct(t.firestore,t instanceof tr?t.converter:null,new Y(r))}}/**
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
 */class Jb{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new by(this,"async_queue_retry"),this.ou=()=>{const n=Rl();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Rl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Rl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Rn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!go(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Cn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=Xh.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&ee()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class Hs extends Mc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Jb}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xy(this),this._firestoreClient.terminate()}}function Xb(t,e){const n=typeof t=="object"?t:jm(),r=typeof t=="string"?t:e||"(default)",s=uh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=BA("firestore");i&&Yb(s,...i)}return s}function nd(t){return t._firestoreClient||Xy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Xy(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new OP(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Yy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new qb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ns{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ns(mt.fromBase64String(e))}catch(n){throw new j(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ns(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Lc{constructor(e){this._methodName=e}}/**
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
 */class rd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */const Zb=/^__.*__$/;class e1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new _o(e,this.data,n,this.fieldTransforms)}}class Zy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ev(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Fc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Fc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Ma(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(ev(this.Tu)&&Zb.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class t1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Oc(e)}wu(e,n,r,s=!1){return new Fc({Tu:e,methodName:n,yu:r,path:ht.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sd(t){const e=t._freezeSettings(),n=Oc(t._databaseId);return new t1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function n1(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);id("Data must be an object, but it was:",o,r);const a=tv(r,o);let c,l;if(i.merge)c=new Dt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Nu(e,h,n);if(!o.contains(d))throw new j(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);rv(u,d)||u.push(d)}c=new Dt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new e1(new St(a),c,l)}class Uc extends Lc{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uc}}function r1(t,e,n){return new Fc({Tu:3,yu:e.settings.yu,methodName:t._methodName,Ru:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class s1 extends Lc{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=r1(this,e,!0),r=this.Su.map(i=>Ks(i,n)),s=new bs(r);return new tC(e.path,s)}isEqual(e){return this===e}}function i1(t,e,n,r){const s=t.wu(1,e,n);id("Data must be an object, but it was:",s,r);const i=[],o=St.empty();Br(r,(c,l)=>{const u=od(e,c,n);l=Je(l);const h=s.mu(u);if(l instanceof Uc)i.push(u);else{const d=Ks(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Dt(i);return new Zy(o,a,s.fieldTransforms)}function o1(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[Nu(e,r,n)],c=[s];if(i.length%2!=0)throw new j(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Nu(e,i[d])),c.push(i[d+1]);const l=[],u=St.empty();for(let d=a.length-1;d>=0;--d)if(!rv(l,a[d])){const g=a[d];let v=c[d];v=Je(v);const E=o.mu(g);if(v instanceof Uc)l.push(g);else{const A=Ks(v,E);A!=null&&(l.push(g),u.set(g,A))}}const h=new Dt(l);return new Zy(u,h,o.fieldTransforms)}function a1(t,e,n,r=!1){return Ks(n,t.wu(r?4:3,e))}function Ks(t,e){if(nv(t=Je(t)))return id("Unsupported field value:",e,t),tv(t,e);if(t instanceof Lc)return function(r,s){if(!ev(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Ks(a,s.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return XP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:Da(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Da(s.serializer,i)}}if(r instanceof rd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ns)return{bytesValue:Iy(s.serializer,r._byteString)};if(r instanceof Ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${Vc(r)}`)}(t,e)}function tv(t,e){const n={};return G_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(r,s)=>{const i=Ks(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function nv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof rd||t instanceof Ns||t instanceof Ct||t instanceof Lc)}function id(t,e,n){if(!nv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Vc(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Nu(t,e,n){if((e=Je(e))instanceof xc)return e._internalPath;if(typeof e=="string")return od(t,e);throw Ma("Field path arguments must be of type string or ",t,!1,void 0,n)}const c1=new RegExp("[~\\*/\\[\\]]");function od(t,e,n){if(e.search(c1)>=0)throw Ma(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xc(...e.split("."))._internalPath}catch{throw Ma(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ma(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new j(S.INVALID_ARGUMENT,a+t+c)}function rv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class sv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new l1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ad("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class l1 extends sv{data(){return super.data()}}function ad(t,e){return typeof e=="string"?od(t,e):e instanceof xc?e._internalPath:e._delegate._internalPath}/**
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
 */function u1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cd{}class h1 extends cd{}function Mp(t,e,...n){let r=[];e instanceof cd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof ld).length,a=i.filter(c=>c instanceof Bc).length;if(o>1||o>0&&a>0)throw new j(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Bc extends h1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bc(e,n,r)}_apply(e){const n=this._parse(e);return iv(e._query,n),new qs(e.firestore,e.converter,Au(e._query,n))}_parse(e){const n=sd(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new j(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Fp(h,u);const g=[];for(const v of h)g.push(Lp(c,i,v));d={arrayValue:{values:g}}}else d=Lp(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Fp(h,u),d=a1(a,o,h,u==="in"||u==="not-in");return je.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xp(t,e,n){const r=e,s=ad("where",t);return Bc._create(s,r,n)}class ld extends cd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ld(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)iv(o,c),o=Au(o,c)}(e._query,n),new qs(e.firestore,e.converter,Au(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Lp(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new j(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sy(e)&&n.indexOf("/")!==-1)throw new j(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!Y.isDocumentKey(r))throw new j(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ip(t,new Y(r))}if(n instanceof Ct)return ip(t,n._key);throw new j(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vc(n)}.`)}function Fp(t,e){if(!Array.isArray(t)||t.length===0)throw new j(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iv(t,e){if(e.isInequality()){const r=jh(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new j(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=ry(t);i!==null&&d1(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function d1(t,e,n){if(!n.isEqual(e))throw new j(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class f1{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new rd(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wi(e));default:return null}}convertTimestamp(e){const n=sr(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);Oe(Sy(r));const s=new Gi(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||Cn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function p1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class hi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ov extends sv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ad("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ia extends ov{data(e={}){return super.data(e)}}class g1{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new hi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ia(this._firestore,this._userDataWriter,r.key,r,new hi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new ia(s._firestore,s._userDataWriter,a.doc.key,a.doc,new hi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new ia(s._firestore,s._userDataWriter,a.doc.key,a.doc,new hi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:m1(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function m1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
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
 */function Cl(t){t=kn(t,Ct);const e=kn(t.firestore,Hs);return Wb(nd(e),t._key).then(n=>E1(e,t,n))}class av extends f1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ns(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function Up(t){t=kn(t,qs);const e=kn(t.firestore,Hs),n=nd(e),r=new av(e);return u1(t._query),Gb(n,t._query).then(s=>new g1(e,r,t,s))}function _1(t,e,n,...r){t=kn(t,Ct);const s=kn(t.firestore,Hs),i=sd(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof xc?o1(i,"updateDoc",t._key,e,n,r):i1(i,"updateDoc",t._key,e),ud(s,[o.toMutation(t._key,Wt.exists(!0))])}function y1(t){return ud(kn(t.firestore,Hs),[new $h(t._key,Wt.none())])}function v1(t,e){const n=kn(t.firestore,Hs),r=ui(t),s=p1(t.converter,e);return ud(n,[n1(sd(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function ud(t,e){return function(r,s){const i=new Rn;return r.asyncQueue.enqueueAndForget(async()=>Db(await zb(r),s,i)),i.promise}(nd(t),e)}function E1(t,e,n){const r=n.docs.get(e._key),s=new av(t);return new ov(t,s,e._key,r,new hi(n.hasPendingWrites,n.fromCache),e.converter)}function rN(...t){return new s1("arrayUnion",t)}(function(e,n=!0){(function(s){Bs=s})(Ls),ws(new Or("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Hs(new _P(r.getProvider("auth-internal")),new IP(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new j(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),er(tp,"4.2.0",e),er(tp,"4.2.0","esm2017")})();function hd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Bp(t){return t!==void 0&&t.enterprise!==void 0}class I1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function cv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T1=cv,lv=new ro("auth","Firebase",cv());/**
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
 */const xa=new ch("@firebase/auth");function w1(t,...e){xa.logLevel<=de.WARN&&xa.warn(`Auth (${Ls}): ${t}`,...e)}function oa(t,...e){xa.logLevel<=de.ERROR&&xa.error(`Auth (${Ls}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw dd(t,...e)}function un(t,...e){return dd(t,...e)}function A1(t,e,n){const r=Object.assign(Object.assign({},T1()),{[e]:n});return new ro("auth","Firebase",r).create(e,{appName:t.name})}function dd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lv.create(t,...e)}function Z(t,e,...n){if(!t)throw dd(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oa(e),new Error(e)}function On(t,e){t||wn(e)}/**
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
 */function Du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function R1(){return jp()==="http:"||jp()==="https:"}function jp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function S1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(R1()||HA()||"connection"in navigator)?navigator.onLine:!0}function P1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Io{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=qA()||KA()}get(){return S1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fd(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const C1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const b1=new Io(3e4,6e4);function $r(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qr(t,e,n,r,s={}){return hv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=so(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),uv.fetch()(dv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function hv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},C1),e);try{const s=new k1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Wo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Wo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw A1(t,u,l);Jt(t,u)}}catch(s){if(s instanceof Vn)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function To(t,e,n,r,s={}){const i=await qr(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function dv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?fd(t.config,s):`${t.config.apiScheme}://${s}`}class k1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),b1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}async function O1(t,e){return qr(t,"GET","/v2/recaptchaConfig",$r(t,e))}/**
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
 */async function N1(t,e){return qr(t,"POST","/v1/accounts:delete",e)}async function D1(t,e){return qr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function V1(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=pd(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ri(bl(s.auth_time)),issuedAtTime:Ri(bl(s.iat)),expirationTime:Ri(bl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bl(t){return Number(t)*1e3}function pd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vm(n);return s?JSON.parse(s):(oa("Failed to decode base64 JWT payload"),null)}catch(s){return oa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function M1(t){const e=pd(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&x1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function x1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class L1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function La(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ji(t,D1(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?B1(i.providerUserInfo):[],a=U1(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new fv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function F1(t){const e=Je(t);await La(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function B1(t){return t.map(e=>{var{providerId:n}=e,r=hd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function j1(t,e){const n=await hv(t,{},async()=>{const r=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=dv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Xi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):M1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await j1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Xi;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xi,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Fn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=hd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new L1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new fv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ji(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return V1(this,e)}reload(){return F1(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await La(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ji(this,N1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:O,isAnonymous:Q,providerData:se,stsTokenManager:fe}=n;Z(U&&fe,e,"internal-error");const F=Xi.fromJSON(this.name,fe);Z(typeof U=="string",e,"internal-error"),Fn(h,e.name),Fn(d,e.name),Z(typeof O=="boolean",e,"internal-error"),Z(typeof Q=="boolean",e,"internal-error"),Fn(g,e.name),Fn(v,e.name),Fn(E,e.name),Fn(A,e.name),Fn(C,e.name),Fn(N,e.name);const z=new Cr({uid:U,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:Q,photoURL:v,phoneNumber:g,tenantId:E,stsTokenManager:F,createdAt:C,lastLoginAt:N});return se&&Array.isArray(se)&&(z.providerData=se.map(ie=>Object.assign({},ie))),A&&(z._redirectEventId=A),z}static async _fromIdTokenResponse(e,n,r=!1){const s=new Xi;s.updateFromServerResponse(n);const i=new Cr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await La(i),i}}/**
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
 */const $p=new Map;function An(t){On(t instanceof Function,"Expected a class definition");let e=$p.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$p.set(t,e),e)}/**
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
 */class pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pv.type="NONE";const qp=pv;/**
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
 */function aa(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=aa(this.userKey,s.apiKey,i),this.fullPersistenceKey=aa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gs(An(qp),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||An(qp);const o=aa(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Cr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new gs(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new gs(i,e,r))}}/**
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
 */function Hp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_v(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vv(e))return"Blackberry";if(Ev(e))return"Webos";if(gd(e))return"Safari";if((e.includes("chrome/")||mv(e))&&!e.includes("edge/"))return"Chrome";if(yv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gv(t=gt()){return/firefox\//i.test(t)}function gd(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function mv(t=gt()){return/crios\//i.test(t)}function _v(t=gt()){return/iemobile/i.test(t)}function yv(t=gt()){return/android/i.test(t)}function vv(t=gt()){return/blackberry/i.test(t)}function Ev(t=gt()){return/webos/i.test(t)}function jc(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $1(t=gt()){var e;return jc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function q1(){return zA()&&document.documentMode===10}function Iv(t=gt()){return jc(t)||yv(t)||Ev(t)||vv(t)||/windows phone/i.test(t)||_v(t)}function H1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Tv(t,e=[]){let n;switch(t){case"Browser":n=Hp(gt());break;case"Worker":n=`${Hp(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
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
 */class K1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function z1(t,e={}){return qr(t,"GET","/v2/passwordPolicy",$r(t,e))}/**
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
 */const W1=6;class G1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:W1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Q1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kp(this),this.idTokenSubscription=new Kp(this),this.beforeStateQueue=new K1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await La(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await z1(this),n=new G1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ro("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&w1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hr(t){return Je(t)}class Kp{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZA(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Y1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Y1().appendChild(r)})}function J1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const X1="https://www.google.com/recaptcha/enterprise.js?render=",Z1="recaptcha-enterprise",ek="NO_RECAPTCHA";class tk{constructor(e){this.type=Z1,this.auth=Hr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{O1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new I1(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Bp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(ek)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Bp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}wv(X1+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Fa(t,e,n,r=!1){const s=new tk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function nk(t,e){const n=uh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ea(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function rk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sk(t,e,n){const r=Hr(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Av(e),{host:o,port:a}=ik(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ok()}function Av(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ik(t){const e=Av(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zp(o)}}}function zp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ok(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class md{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function ak(t,e){return qr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function kl(t,e){return To(t,"POST","/v1/accounts:signInWithPassword",$r(t,e))}/**
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
 */async function ck(t,e){return To(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}async function lk(t,e){return To(t,"POST","/v1/accounts:signInWithEmailLink",$r(t,e))}/**
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
 */class Zi extends md{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Zi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Fa(e,r,"signInWithPassword");return kl(e,s)}else return kl(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Fa(e,r,"signInWithPassword");return kl(e,i)}else return Promise.reject(s)});case"emailLink":return ck(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ak(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lk(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ms(t,e){return To(t,"POST","/v1/accounts:signInWithIdp",$r(t,e))}/**
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
 */const uk="http://localhost";class xr extends md{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=hd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ms(e,n)}buildRequest(){const e={requestUri:uk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
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
 */function hk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dk(t){const e=si(ii(t)).link,n=e?si(ii(e)).deep_link_id:null,r=si(ii(t)).deep_link_id;return(r?si(ii(r)).link:null)||r||n||e||t}class _d{constructor(e){var n,r,s,i,o,a;const c=si(ii(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=hk((s=c.mode)!==null&&s!==void 0?s:null);Z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dk(e);try{return new _d(n)}catch{return null}}}/**
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
 */class zs{constructor(){this.providerId=zs.PROVIDER_ID}static credential(e,n){return Zi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_d.parseLink(n);return Z(r,"argument-error"),Zi._fromEmailAndCode(e,r.code,r.tenantId)}}zs.PROVIDER_ID="password";zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wo extends Rv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends wo{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class Kn extends wo{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class zn extends wo{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
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
 */async function Ol(t,e){return To(t,"POST","/v1/accounts:signUp",$r(t,e))}/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cr._fromIdTokenResponse(e,r,s),o=Wp(r);return new Lr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wp(r);return new Lr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ua extends Vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ua.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ua(e,n,r,s)}}function Sv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ua._fromErrorAndOperation(t,i,e,r):i})}async function fk(t,e,n=!1){const r=await Ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",r)}/**
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
 */async function pk(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ji(t,Sv(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=pd(i.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),Lr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
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
 */async function Pv(t,e,n=!1){const r="signIn",s=await Sv(t,r,e),i=await Lr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function gk(t,e){return Pv(Hr(t),e)}/**
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
 */async function Cv(t){const e=Hr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mk(t,e,n){var r;const s=Hr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Fa(s,i,"signUpPassword");o=Ol(s,l)}else o=Ol(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Fa(s,i,"signUpPassword");return Ol(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Cv(t),l}),c=await Lr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function _k(t,e,n){return gk(Je(t),zs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cv(t),r})}function yk(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function vk(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function Ek(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function Ik(t){return Je(t).signOut()}const Ba="__sak";/**
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
 */class bv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ba,"1"),this.storage.removeItem(Ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Tk(){const t=gt();return gd(t)||jc(t)}const wk=1e3,Ak=10;class kv extends bv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tk()&&H1(),this.fallbackToPolling=Iv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);q1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ak):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kv.type="LOCAL";const Rk=kv;/**
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
 */class Ov extends bv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ov.type="SESSION";const Nv=Ov;/**
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
 */function Sk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $c(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Sk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$c.receivers=[];/**
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
 */function yd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Pk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=yd("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hn(){return window}function Ck(t){hn().location.href=t}/**
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
 */function Dv(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function bk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ok(){return Dv()?self:null}/**
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
 */const Vv="firebaseLocalStorageDb",Nk=1,ja="firebaseLocalStorage",Mv="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qc(t,e){return t.transaction([ja],e?"readwrite":"readonly").objectStore(ja)}function Dk(){const t=indexedDB.deleteDatabase(Vv);return new Ao(t).toPromise()}function Vu(){const t=indexedDB.open(Vv,Nk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ja,{keyPath:Mv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ja)?e(r):(r.close(),await Dk(),e(await Vu()))})})}async function Gp(t,e,n){const r=qc(t,!0).put({[Mv]:e,value:n});return new Ao(r).toPromise()}async function Vk(t,e){const n=qc(t,!1).get(e),r=await new Ao(n).toPromise();return r===void 0?null:r.value}function Qp(t,e){const n=qc(t,!0).delete(e);return new Ao(n).toPromise()}const Mk=800,xk=3;class xv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$c._getInstance(Ok()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await bk(),!this.activeServiceWorker)return;this.sender=new Pk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vu();return await Gp(e,Ba,"1"),await Qp(e,Ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=qc(s,!1).getAll();return new Ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xv.type="LOCAL";const Lk=xv;new Io(3e4,6e4);/**
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
 */function Fk(t,e){return e?An(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vd extends md{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Uk(t){return Pv(t.auth,new vd(t),t.bypassAuthState)}function Bk(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),pk(n,new vd(t),t.bypassAuthState)}async function jk(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),fk(n,new vd(t),t.bypassAuthState)}/**
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
 */class Lv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uk;case"linkViaPopup":case"linkViaRedirect":return jk;case"reauthViaPopup":case"reauthViaRedirect":return Bk;default:Jt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $k=new Io(2e3,1e4);class as extends Lv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$k.get())};e()}}as.currentPopupAction=null;/**
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
 */const qk="pendingRedirect",ca=new Map;class Hk extends Lv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ca.get(this.auth._key());if(!e){try{const r=await Kk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ca.set(this.auth._key(),e)}return this.bypassAuthState||ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kk(t,e){const n=Gk(e),r=Wk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function zk(t,e){ca.set(t._key(),e)}function Wk(t){return An(t._redirectPersistence)}function Gk(t){return aa(qk,t.config.apiKey,t.name)}async function Qk(t,e,n=!1){const r=Hr(t),s=Fk(r,e),o=await new Hk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Yk=10*60*1e3;class Jk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yp(e))}saveEventToCache(e){this.cachedEventUids.add(Yp(e)),this.lastProcessedEventTime=Date.now()}}function Yp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fv(t);default:return!1}}/**
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
 */async function Zk(t,e={}){return qr(t,"GET","/v1/projects",e)}/**
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
 */const eO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tO=/^https?/;async function nO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Zk(t);for(const n of e)try{if(rO(n))return}catch{}Jt(t,"unauthorized-domain")}function rO(t){const e=Du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tO.test(n))return!1;if(eO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const sO=new Io(3e4,6e4);function Jp(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iO(t){return new Promise((e,n)=>{var r,s,i;function o(){Jp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jp(),n(un(t,"network-request-failed"))},timeout:sO.get()})}if(!((s=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=hn().gapi)===null||i===void 0)&&i.load)o();else{const a=J1("iframefcb");return hn()[a]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},wv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw la=null,e})}let la=null;function oO(t){return la=la||iO(t),la}/**
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
 */const aO=new Io(5e3,15e3),cO="__/auth/iframe",lO="emulator/auth/iframe",uO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dO(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fd(e,lO):`https://${t.config.authDomain}/${cO}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},s=hO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${so(r).slice(1)}`}async function fO(t){const e=await oO(t),n=hn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:dO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),a=hn().setTimeout(()=>{i(o)},aO.get());function c(){hn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const pO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gO=500,mO=600,_O="_blank",yO="http://localhost";class Xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vO(t,e,n,r=gO,s=mO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},pO),{width:r.toString(),height:s.toString(),top:i,left:o}),l=gt().toLowerCase();n&&(a=mv(l)?_O:n),gv(l)&&(e=e||yO,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if($1(l)&&a!=="_self")return EO(e||"",a),new Xp(null);const h=window.open(e||"",a,u);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Xp(h)}function EO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const IO="__/auth/handler",TO="emulator/auth/handler",wO=encodeURIComponent("fac");async function Zp(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:s};if(e instanceof Rv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof wo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${wO}=${encodeURIComponent(c)}`:"";return`${AO(t)}?${so(a).slice(1)}${l}`}function AO({config:t}){return t.emulator?fd(t,TO):`https://${t.authDomain}/${IO}`}/**
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
 */const Nl="webStorageSupport";class RO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nv,this._completeRedirectFn=Qk,this._overrideRedirectResult=zk}async _openPopup(e,n,r,s){var i;On((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Zp(e,n,r,Du(),s);return vO(e,o,yd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Zp(e,n,r,Du(),s);return Ck(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fO(e),r=new Jk(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nl,{type:Nl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Nl];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Iv()||gd()||jc()}}const SO=RO;var eg="@firebase/auth",tg="1.3.0";/**
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
 */class PO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function CO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bO(t){ws(new Or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tv(t)},l=new Q1(r,s,i,c);return rk(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ws(new Or("auth-internal",e=>{const n=Hr(e.getProvider("auth").getImmediate());return(r=>new PO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),er(eg,tg,CO(t)),er(eg,tg,"esm2017")}/**
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
 */const kO=5*60,OO=Lm("authIdTokenMaxAge")||kO;let ng=null;const NO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OO)return;const s=n==null?void 0:n.token;ng!==s&&(ng=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function DO(t=jm()){const e=uh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nk(t,{popupRedirectResolver:SO,persistence:[Lk,Rk,Nv]}),r=Lm("authTokenSyncURL");if(r){const i=NO(r);vk(n,i,()=>i(n.currentUser)),yk(n,o=>i(o))}const s=Mm("auth");return s&&sk(n,`http://${s}`),n}bO("Browser");const VO={apiKey:"AIzaSyBEj_lvulwL921R6C-GKJN1eC4haiLIk0Q",authDomain:"vue3-2c548.firebaseapp.com",projectId:"vue3-2c548",storageBucket:"vue3-2c548.appspot.com",messagingSenderId:"975447172434",appId:"1:975447172434:web:d7afa045c68a84b2df468"};Bm(VO);const _r=Xb(),In=DO(),MO="modulepreload",xO=function(t){return"/fbvue3-exp/"+t},rg={},jt=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=xO(i),i in rg)return;rg[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":MO,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};const Zr=async(t,e,n)=>{const r=$a();r.loading=!0,await r.currentUser()?n():n("/login"),r.loading=!1},sg=async(t,e,n)=>{const r=$a();r.loading=!0,await r.currentUser()?n("/about"):n(),r.loading=!1},ua=uA({history:P0(),routes:[{path:"/",name:"home",component:()=>jt(()=>import("./HomeView-d6482bfe.js"),[])},{path:"/savedlinks",name:"savedlinks",component:()=>jt(()=>import("./SavedLinks-baca3cdb.js"),["assets/SavedLinks-baca3cdb.js","assets/isValidUrl-d3f578a2.js","assets/triggerToast-ec45c4ab.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Zr},{path:"/login",name:"login",component:()=>jt(()=>import("./Login-697ec587.js"),["assets/Login-697ec587.js","assets/triggerToast-ec45c4ab.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:sg},{path:"/register",name:"register",component:()=>jt(()=>import("./Register-a6c71aeb.js"),[]),beforeEnter:sg},{path:"/about",name:"about",component:()=>jt(()=>import("./AboutView-5f26f09c.js"),["assets/AboutView-5f26f09c.js","assets/isValidUrl-d3f578a2.js","assets/triggerToast-ec45c4ab.js","assets/triggerToast-b6cc1770.css"])},{path:"/editlink/:id",name:"editlink",component:()=>jt(()=>import("./EditLink-723c7754.js"),["assets/EditLink-723c7754.js","assets/isValidUrl-d3f578a2.js","assets/triggerToast-ec45c4ab.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Zr},{path:"/cssexperiment",name:"cssexperiment",component:()=>jt(()=>import("./CssExperimentView-32d0f0bb.js"),["assets/CssExperimentView-32d0f0bb.js","assets/CssExperimentView-7ebbd2c9.css"])},{path:"/urlcollection",name:"Urlcollection",component:()=>jt(()=>import("./UrlCollection-6ea38171.js"),["assets/UrlCollection-6ea38171.js","assets/colUrls-310cd009.js","assets/isValidUrl-d3f578a2.js","assets/triggerToast-ec45c4ab.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Zr},{path:"/editurlcollection:id",name:"editurlcollection",component:()=>jt(()=>import("./EditUrlCollection-c0f993ad.js"),["assets/EditUrlCollection-c0f993ad.js","assets/colUrls-310cd009.js","assets/isValidUrl-d3f578a2.js","assets/triggerToast-ec45c4ab.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Zr},{path:"/blog",name:"blog",component:()=>jt(()=>import("./Blog-f7fcd418.js"),["assets/Blog-f7fcd418.js","assets/blogPosts-a6765f60.js","assets/triggerToast-ec45c4ab.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Zr},{path:"/editblog/:id",name:"editblog",component:()=>jt(()=>import("./EditBlog-6417fb15.js"),["assets/EditBlog-6417fb15.js","assets/blogPosts-a6765f60.js","assets/triggerToast-ec45c4ab.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:Zr}]});let LO=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const ig=im("database",()=>{let t=Fe([]),e=Fe(!1);return{documents:t,loadingDoc:e,getUrls:async()=>{e.value=!0;try{const a=Mp(Pl(_r,"urls"),xp("user","==",In.currentUser.uid));(await Up(a)).forEach(l=>{t.value.push({id:l.id,...l.data()})})}catch(a){console.log(a)}finally{e.value=!1}},leerUrl:async a=>{e.value=!0;try{const c=ui(_r,"urls",a),l=await Cl(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==In.currentUser.uid)throw new Error("No es dueño del documento");return l.data().name}catch(c){console.log(c.message)}finally{e.value=!1}},updateUrl:async(a,c)=>{e.value=!0;try{const l=ui(_r,"urls",a),u=await Cl(l);if(!u.exists())throw new Error("no existe el doc");if(u.data().user===In.currentUser.uid)await _1(l,{name:c}),t.value=t.value.map(h=>h.id===a?{...h,name:c}:h);else throw new Error("no eres el autor")}catch(l){console.log(l.message)}finally{e.value=!1}},addUrl:async a=>{try{let c,l;do{c=LO(8);const d=Pl(_r,"urls"),g=Mp(d,xp("short","==",c));l=!(await Up(g)).empty}while(l);const u={name:a,short:c,user:In.currentUser.uid},h=await v1(Pl(_r,"urls"),u);t.value.push({...u,id:h.id})}catch(c){console.log(c)}},deleteUrl:async a=>{try{const c=ui(_r,"urls",a),l=await Cl(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==In.currentUser.uid)throw new Error("No es dueño del documento");await y1(ui(_r,"urls",a)),t.value=t.value.filter(u=>u.id!==a)}catch(c){console.log(c.message)}}}}),$a=im("user",()=>{let t=Fe(null),e=Fe(!1),n=Fe(!1);return{loadingUser:e,loading:n,userData:t,registerUser:async(a,c)=>{e.value=!0;try{const{user:l}=await mk(In,a,c);t.value={email:l.email,uid:l.uid},ua.push("/")}catch(l){console.error(l),t.value=null}finally{e.value=!1}},loginUser:async(a,c)=>{e.value=!0;try{const{user:l}=await _k(In,a,c);t.value={email:l.email,uid:l.uid},ua.push("/savedlinks")}catch(l){l.code==="auth/user-not-found"?alert("No se encontró ningún usuario con esa dirección de correo electrónico."):l.code==="auth/wrong-password"?alert("Clave equivocada"):(console.log(l),t.value=null)}finally{e.value=!1}},logoutUser:async(a,c)=>{ig();try{await Ik(In)}catch(l){console.log(l)}finally{t.value=null,n.value=!1,ua.push("/login")}},currentUser:()=>new Promise((a,c)=>{const l=Ek(In,u=>{u?t.value={email:u.email,uid:u.uid}:(t.value=null,ig()),a(u),l()},u=>c(u))})}});const FO={class:"row"},UO={key:0,class:"d-flex"},BO=["checked"],jO=Le("label",{for:"swc",class:"swc-label me-2","aria-label":"cambio de modo oscuro",tabindex:"7"},[Le("span",{class:"swc-inner"}),Le("span",{class:"swc-switch"}),Le("span",{class:"swc-switch-mask"})],-1),$O={key:1},qO={__name:"CustomHeader",props:{isDark:{type:Boolean}},emits:["toggleDark"],setup(t){const e=$a();return(n,r)=>{const s=cT("router-link");return Bn(),ri("header",null,[Le("nav",FO,[Qe($a).loading?(Bn(),ri("div",$O,"Loading user...")):(Bn(),ri("ul",UO,[Le("li",null,[ce(s,{to:"/",class:Nt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"1"},{default:yn(()=>[vn("Home ")]),_:1},8,["class"])]),Le("li",null,[ce(s,{to:"/blog",class:Nt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"1"},{default:yn(()=>[vn("Blog ")]),_:1},8,["class"])]),Le("li",null,[ce(s,{to:"/savedlinks",class:Nt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"2"},{default:yn(()=>[vn("My Links ")]),_:1},8,["class"])]),Le("li",null,[ce(s,{to:"/cssexperiment",class:Nt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"]),tabindex:"3"},{default:yn(()=>[vn("Css tricks ")]),_:1},8,["class"])]),Le("li",null,[ce(s,{to:"/about",class:Nt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"]),tabindex:"5"},{default:yn(()=>[vn("About ")]),_:1},8,["class"])]),Le("li",null,[ce(s,{to:"/urlcollection",class:Nt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"]),tabindex:"6"},{default:yn(()=>[vn("My Urls ")]),_:1},8,["class"])]),Le("li",null,[Le("input",{type:"checkbox",id:"swc",class:"swc-checkbox",checked:t.isDark,onChange:r[0]||(r[0]=i=>n.$emit("toggleDark"))},null,40,BO),jO]),Le("li",null,[Qe(e).userData?rl("",!0):(Bn(),Hl(s,{key:0,to:"/login",class:Nt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"])},{default:yn(()=>[vn("Login ")]),_:1},8,["class"]))]),Le("li",null,[Qe(e).userData?rl("",!0):(Bn(),Hl(s,{key:0,to:"/register",class:Nt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"])},{default:yn(()=>[vn("Register ")]),_:1},8,["class"]))]),Le("li",null,[Qe(e).userData?(Bn(),ri("button",{key:0,class:"btn btn-primary",onClick:r[1]||(r[1]=(...i)=>Qe(e).logoutUser&&Qe(e).logoutUser(...i))},"Logout ")):rl("",!0)])]))])])}}};const HO=Le("div",null,"Veamos",-1),KO={class:"container-fluid"},zO={__name:"App",setup(t){const e=NA({selector:"body",valueDark:"bd-dark",valueLight:"bd-light"}),n=IA(e);return(r,s)=>(Bn(),ri($t,null,[ce(qO,{isDark:Qe(e),onToggleDark:Qe(n),class:Nt(["container my-2 p-4",Qe(e)?"bg-dark":"bg-light"])},null,8,["isDark","onToggleDark","class"]),HO,Le("div",KO,[Le("main",{class:Nt(["container my-2 p-4",Qe(e)?"bg-dark":"bg-light"])},[ce(Qe(Sm))],2)])],64))}},Hc=em(zO),Uv=mw();Uv.use(pw);Hc.use(Uv);Hc.use(ua);Hc.use(gm);Hc.mount("#app");export{In as A,Up as B,ui as C,Cl as D,LO as E,$t as F,_1 as G,rN as H,v1 as I,y1 as J,ye as K,xo as L,dw as M,ke as N,ce as a,XO as b,ri as c,ig as d,eo as e,Le as f,Qe as g,GO as h,QO as i,vn as j,Ve as k,ZO as l,Bu as m,Nt as n,Bn as o,Jn as p,im as q,Fe as r,Mp as s,WO as t,$a as u,YO as v,JO as w,Pl as x,_r as y,xp as z};
