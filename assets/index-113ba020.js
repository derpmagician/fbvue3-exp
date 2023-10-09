(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Kl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ae={},$r=[],xt=()=>{},Wv=()=>!1,zv=/^on[^a-z]/,pa=t=>zv.test(t),Wl=t=>t.startsWith("onUpdate:"),$e=Object.assign,zl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gv=Object.prototype.hasOwnProperty,ge=(t,e)=>Gv.call(t,e),ne=Array.isArray,js=t=>ga(t)==="[object Map]",Qv=t=>ga(t)==="[object Set]",ie=t=>typeof t=="function",Ye=t=>typeof t=="string",Gl=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",mp=t=>ke(t)&&ie(t.then)&&ie(t.catch),Yv=Object.prototype.toString,ga=t=>Yv.call(t),Jv=t=>ga(t).slice(8,-1),Xv=t=>ga(t)==="[object Object]",Ql=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,To=Kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zv=/-(\w)/g,Qr=ma(t=>t.replace(Zv,(e,n)=>n?n.toUpperCase():"")),eE=/\B([A-Z])/g,hs=ma(t=>t.replace(eE,"-$1").toLowerCase()),_p=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),_c=ma(t=>t?`on${_p(t)}`:""),ei=(t,e)=>!Object.is(t,e),Io=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zh;const Yc=()=>zh||(zh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yl(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?sE(r):Yl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ye(t))return t;if(ke(t))return t}}const tE=/;(?![^(]*\))/g,nE=/:([^]+)/,rE=/\/\*[^]*?\*\//g;function sE(t){const e={};return t.replace(rE,"").split(tE).forEach(n=>{if(n){const r=n.split(nE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function _a(t){let e="";if(Ye(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=_a(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oE=Kl(iE);function yp(t){return!!t||t===""}let At;class vp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ep(t){return new vp(t)}function aE(t,e=At){e&&e.active&&e.effects.push(t)}function Jl(){return At}function wp(t){At&&At.cleanups.push(t)}const Xl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Tp=t=>(t.w&$n)>0,Ip=t=>(t.n&$n)>0,cE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=$n},lE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Tp(s)&&!Ip(s)?s.delete(t):e[n++]=s,s.w&=~$n,s.n&=~$n}e.length=n}},Lo=new WeakMap;let ks=0,$n=1;const Jc=30;let Dt;const lr=Symbol(""),Xc=Symbol("");class Zl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,aE(this,r)}run(){if(!this.active)return this.fn();let e=Dt,n=Vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,Vn=!0,$n=1<<++ks,ks<=Jc?cE(this):Gh(this),this.fn()}finally{ks<=Jc&&lE(this),$n=1<<--ks,Dt=this.parent,Vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(Gh(this),this.onStop&&this.onStop(),this.active=!1)}}function Gh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Vn=!0;const Ap=[];function fs(){Ap.push(Vn),Vn=!1}function ds(){const t=Ap.pop();Vn=t===void 0?!0:t}function Tt(t,e,n){if(Vn&&Dt){let r=Lo.get(t);r||Lo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Xl()),Rp(s)}}function Rp(t,e){let n=!1;ks<=Jc?Ip(t)||(t.n|=$n,n=!Tp(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function pn(t,e,n,r,s,i){const o=Lo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?Ql(n)&&a.push(o.get("length")):(a.push(o.get(lr)),js(t)&&a.push(o.get(Xc)));break;case"delete":ne(t)||(a.push(o.get(lr)),js(t)&&a.push(o.get(Xc)));break;case"set":js(t)&&a.push(o.get(lr));break}if(a.length===1)a[0]&&Zc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Zc(Xl(c))}}function Zc(t,e){const n=ne(t)?t:[...t];for(const r of n)r.computed&&Qh(r);for(const r of n)r.computed||Qh(r)}function Qh(t,e){(t!==Dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function uE(t,e){var n;return(n=Lo.get(t))==null?void 0:n.get(e)}const hE=Kl("__proto__,__v_isRef,__isVue"),Pp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gl)),fE=eu(),dE=eu(!1,!0),pE=eu(!0),Yh=gE();function gE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=me(this);for(let i=0,o=this.length;i<o;i++)Tt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(me)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){fs();const r=me(this)[e].apply(this,n);return ds(),r}}),t}function mE(t){const e=me(this);return Tt(e,"has",t),e.hasOwnProperty(t)}function eu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?NE:kp:e?Op:bp).get(r))return r;const o=ne(r);if(!t){if(o&&ge(Yh,s))return Reflect.get(Yh,s,i);if(s==="hasOwnProperty")return mE}const a=Reflect.get(r,s,i);return(Gl(s)?Pp.has(s):hE(s))||(t||Tt(r,"get",s),e)?a:be(a)?o&&Ql(s)?a:a.value:ke(a)?t?va(a):nn(a):a}}const _E=Sp(),yE=Sp(!0);function Sp(t=!1){return function(n,r,s,i){let o=n[r];if(Yr(o)&&be(o)&&!be(s))return!1;if(!t&&(!Fo(s)&&!Yr(s)&&(o=me(o),s=me(s)),!ne(n)&&be(o)&&!be(s)))return o.value=s,!0;const a=ne(n)&&Ql(r)?Number(r)<n.length:ge(n,r),c=Reflect.set(n,r,s,i);return n===me(i)&&(a?ei(s,o)&&pn(n,"set",r,s):pn(n,"add",r,s)),c}}function vE(t,e){const n=ge(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&pn(t,"delete",e,void 0),r}function EE(t,e){const n=Reflect.has(t,e);return(!Gl(e)||!Pp.has(e))&&Tt(t,"has",e),n}function wE(t){return Tt(t,"iterate",ne(t)?"length":lr),Reflect.ownKeys(t)}const Cp={get:fE,set:_E,deleteProperty:vE,has:EE,ownKeys:wE},TE={get:pE,set(t,e){return!0},deleteProperty(t,e){return!0}},IE=$e({},Cp,{get:dE,set:yE}),tu=t=>t,ya=t=>Reflect.getPrototypeOf(t);function ro(t,e,n=!1,r=!1){t=t.__v_raw;const s=me(t),i=me(e);n||(e!==i&&Tt(s,"get",e),Tt(s,"get",i));const{has:o}=ya(s),a=r?tu:n?su:ti;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function so(t,e=!1){const n=this.__v_raw,r=me(n),s=me(t);return e||(t!==s&&Tt(r,"has",t),Tt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function io(t,e=!1){return t=t.__v_raw,!e&&Tt(me(t),"iterate",lr),Reflect.get(t,"size",t)}function Jh(t){t=me(t);const e=me(this);return ya(e).has.call(e,t)||(e.add(t),pn(e,"add",t,t)),this}function Xh(t,e){e=me(e);const n=me(this),{has:r,get:s}=ya(n);let i=r.call(n,t);i||(t=me(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ei(e,o)&&pn(n,"set",t,e):pn(n,"add",t,e),this}function Zh(t){const e=me(this),{has:n,get:r}=ya(e);let s=n.call(e,t);s||(t=me(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pn(e,"delete",t,void 0),i}function ef(){const t=me(this),e=t.size!==0,n=t.clear();return e&&pn(t,"clear",void 0,void 0),n}function oo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=me(o),c=e?tu:t?su:ti;return!t&&Tt(a,"iterate",lr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ao(t,e,n){return function(...r){const s=this.__v_raw,i=me(s),o=js(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?tu:e?su:ti;return!e&&Tt(i,"iterate",c?Xc:lr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){return t==="delete"?!1:this}}function AE(){const t={get(i){return ro(this,i)},get size(){return io(this)},has:so,add:Jh,set:Xh,delete:Zh,clear:ef,forEach:oo(!1,!1)},e={get(i){return ro(this,i,!1,!0)},get size(){return io(this)},has:so,add:Jh,set:Xh,delete:Zh,clear:ef,forEach:oo(!1,!0)},n={get(i){return ro(this,i,!0)},get size(){return io(this,!0)},has(i){return so.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:oo(!0,!1)},r={get(i){return ro(this,i,!0,!0)},get size(){return io(this,!0)},has(i){return so.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:oo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ao(i,!1,!1),n[i]=ao(i,!0,!1),e[i]=ao(i,!1,!0),r[i]=ao(i,!0,!0)}),[t,n,e,r]}const[RE,PE,SE,CE]=AE();function nu(t,e){const n=e?t?CE:SE:t?PE:RE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,i)}const bE={get:nu(!1,!1)},OE={get:nu(!1,!0)},kE={get:nu(!0,!1)},bp=new WeakMap,Op=new WeakMap,kp=new WeakMap,NE=new WeakMap;function DE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function VE(t){return t.__v_skip||!Object.isExtensible(t)?0:DE(Jv(t))}function nn(t){return Yr(t)?t:ru(t,!1,Cp,bE,bp)}function Np(t){return ru(t,!1,IE,OE,Op)}function va(t){return ru(t,!0,TE,kE,kp)}function ru(t,e,n,r,s){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=VE(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function xn(t){return Yr(t)?xn(t.__v_raw):!!(t&&t.__v_isReactive)}function Yr(t){return!!(t&&t.__v_isReadonly)}function Fo(t){return!!(t&&t.__v_isShallow)}function Dp(t){return xn(t)||Yr(t)}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Ea(t){return Mo(t,"__v_skip",!0),t}const ti=t=>ke(t)?nn(t):t,su=t=>ke(t)?va(t):t;function iu(t){Vn&&Dt&&(t=me(t),Rp(t.dep||(t.dep=Xl())))}function ou(t,e){t=me(t);const n=t.dep;n&&Zc(n)}function be(t){return!!(t&&t.__v_isRef===!0)}function _t(t){return xp(t,!1)}function Vp(t){return xp(t,!0)}function xp(t,e){return be(t)?t:new xE(t,e)}class xE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:ti(e)}get value(){return iu(this),this._value}set value(e){const n=this.__v_isShallow||Fo(e)||Yr(e);e=n?e:me(e),ei(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ti(e),ou(this))}}function fn(t){return be(t)?t.value:t}const ME={get:(t,e,n)=>fn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return be(s)&&!be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Mp(t){return xn(t)?t:new Proxy(t,ME)}class LE{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>iu(this),()=>ou(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function FE(t){return new LE(t)}function UE(t){const e=ne(t)?new Array(t.length):{};for(const n in t)e[n]=Lp(t,n);return e}class BE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return uE(me(this._object),this._key)}}class jE{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function $E(t,e,n){return be(t)?t:ie(t)?new jE(t):ke(t)&&arguments.length>1?Lp(t,e,n):_t(t)}function Lp(t,e,n){const r=t[e];return be(r)?r:new BE(t,e,n)}class qE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zl(e,()=>{this._dirty||(this._dirty=!0,ou(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=me(this);return iu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function HE(t,e,n=!1){let r,s;const i=ie(t);return i?(r=t,s=xt):(r=t.get,s=t.set),new qE(r,s,i||!s,n)}function Mn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){wa(i,e,n)}return s}function Mt(t,e,n,r){if(ie(t)){const i=Mn(t,e,n,r);return i&&mp(i)&&i.catch(o=>{wa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Mt(t[i],e,n,r));return s}function wa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Mn(c,null,10,[t,o,a]);return}}KE(t,n,s,r)}function KE(t,e,n,r=!0){console.error(t)}let ni=!1,el=!1;const rt=[];let Wt=0;const qr=[];let an=null,rr=0;const Fp=Promise.resolve();let au=null;function bi(t){const e=au||Fp;return t?e.then(this?t.bind(this):t):e}function WE(t){let e=Wt+1,n=rt.length;for(;e<n;){const r=e+n>>>1;ri(rt[r])<t?e=r+1:n=r}return e}function cu(t){(!rt.length||!rt.includes(t,ni&&t.allowRecurse?Wt+1:Wt))&&(t.id==null?rt.push(t):rt.splice(WE(t.id),0,t),Up())}function Up(){!ni&&!el&&(el=!0,au=Fp.then(jp))}function zE(t){const e=rt.indexOf(t);e>Wt&&rt.splice(e,1)}function GE(t){ne(t)?qr.push(...t):(!an||!an.includes(t,t.allowRecurse?rr+1:rr))&&qr.push(t),Up()}function tf(t,e=ni?Wt+1:0){for(;e<rt.length;e++){const n=rt[e];n&&n.pre&&(rt.splice(e,1),e--,n())}}function Bp(t){if(qr.length){const e=[...new Set(qr)];if(qr.length=0,an){an.push(...e);return}for(an=e,an.sort((n,r)=>ri(n)-ri(r)),rr=0;rr<an.length;rr++)an[rr]();an=null,rr=0}}const ri=t=>t.id==null?1/0:t.id,QE=(t,e)=>{const n=ri(t)-ri(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function jp(t){el=!1,ni=!0,rt.sort(QE);const e=xt;try{for(Wt=0;Wt<rt.length;Wt++){const n=rt[Wt];n&&n.active!==!1&&Mn(n,null,14)}}finally{Wt=0,rt.length=0,Bp(),ni=!1,au=null,(rt.length||qr.length)&&jp()}}function YE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ae;d&&(s=n.map(m=>Ye(m)?m.trim():m)),h&&(s=n.map(Qc))}let a,c=r[a=_c(e)]||r[a=_c(Qr(e))];!c&&i&&(c=r[a=_c(hs(e))]),c&&Mt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Mt(l,t,6,s)}}function $p(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=l=>{const u=$p(l,e,!0);u&&(a=!0,$e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ke(t)&&r.set(t,null),null):(ne(i)?i.forEach(c=>o[c]=null):$e(o,i),ke(t)&&r.set(t,o),o)}function Ta(t,e){return!t||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,hs(e))||ge(t,e))}let Rt=null,qp=null;function Uo(t){const e=Rt;return Rt=t,qp=t&&t.type.__scopeId||null,e}function JE(t,e=Rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ff(-1);const i=Uo(e);let o;try{o=t(...s)}finally{Uo(i),r._d&&ff(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:v,inheritAttrs:w}=t;let P,O;const V=Uo(t);try{if(n.shapeFlag&4){const N=s||r;P=Kt(u.call(N,N,h,i,m,d,v)),O=c}else{const N=e;P=Kt(N.length>1?N(i,{attrs:c,slots:a,emit:l}):N(i,null)),O=e.props?c:XE(c)}}catch(N){qs.length=0,wa(N,t,1),P=it(ii)}let K=P;if(O&&w!==!1){const N=Object.keys(O),{shapeFlag:J}=K;N.length&&J&7&&(o&&N.some(Wl)&&(O=ZE(O,o)),K=Jr(K,O))}return n.dirs&&(K=Jr(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),P=K,Uo(V),P}const XE=t=>{let e;for(const n in t)(n==="class"||n==="style"||pa(n))&&((e||(e={}))[n]=t[n]);return e},ZE=(t,e)=>{const n={};for(const r in t)(!Wl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ew(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?nf(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ta(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?nf(r,o,l):!0:!!o;return!1}function nf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ta(n,i))return!0}return!1}function tw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const nw=t=>t.__isSuspense;function rw(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):GE(t)}function sw(t,e){return lu(t,null,e)}const co={};function Ln(t,e,n){return lu(t,e,n)}function lu(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ae){var a;const c=Jl()===((a=je)==null?void 0:a.scope)?je:null;let l,u=!1,h=!1;if(be(t)?(l=()=>t.value,u=Fo(t)):xn(t)?(l=()=>t,r=!0):ne(t)?(h=!0,u=t.some(N=>xn(N)||Fo(N)),l=()=>t.map(N=>{if(be(N))return N.value;if(xn(N))return ir(N);if(ie(N))return Mn(N,c,2)})):ie(t)?e?l=()=>Mn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Mt(t,c,3,[m])}:l=xt,e&&r){const N=l;l=()=>ir(N())}let d,m=N=>{d=V.onStop=()=>{Mn(N,c,4)}},v;if(ci)if(m=xt,e?n&&Mt(e,c,3,[l(),h?[]:void 0,m]):l(),s==="sync"){const N=Yw();v=N.__watcherHandles||(N.__watcherHandles=[])}else return xt;let w=h?new Array(t.length).fill(co):co;const P=()=>{if(V.active)if(e){const N=V.run();(r||u||(h?N.some((J,ae)=>ei(J,w[ae])):ei(N,w)))&&(d&&d(),Mt(e,c,3,[N,w===co?void 0:h&&w[0]===co?[]:w,m]),w=N)}else V.run()};P.allowRecurse=!!e;let O;s==="sync"?O=P:s==="post"?O=()=>vt(P,c&&c.suspense):(P.pre=!0,c&&(P.id=c.uid),O=()=>cu(P));const V=new Zl(l,O);e?n?P():w=V.run():s==="post"?vt(V.run.bind(V),c&&c.suspense):V.run();const K=()=>{V.stop(),c&&c.scope&&zl(c.scope.effects,V)};return v&&v.push(K),K}function iw(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?Hp(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const o=je;Xr(this);const a=lu(s,i.bind(r),n);return o?Xr(o):ur(),a}function Hp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ir(t,e){if(!ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),be(t))ir(t.value,e);else if(ne(t))for(let n=0;n<t.length;n++)ir(t[n],e);else if(Qv(t)||js(t))t.forEach(n=>{ir(n,e)});else if(Xv(t))for(const n in t)ir(t[n],e);return t}function mO(t,e){const n=Rt;if(n===null)return t;const r=Pa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ae]=e[i];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&ir(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(fs(),Mt(c,n,8,[t.el,a,t,e]),ds())}}function uu(t,e){return ie(t)?(()=>$e({name:t.name},e,{setup:t}))():t}const Ao=t=>!!t.type.__asyncLoader,Kp=t=>t.type.__isKeepAlive;function ow(t,e){Wp(t,"a",e)}function aw(t,e){Wp(t,"da",e)}function Wp(t,e,n=je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ia(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Kp(s.parent.vnode)&&cw(r,e,n,s),s=s.parent}}function cw(t,e,n,r){const s=Ia(e,t,r,!0);zp(()=>{zl(r[e],s)},n)}function Ia(t,e,n=je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;fs(),Xr(n);const a=Mt(e,n,t,o);return ur(),ds(),a});return r?s.unshift(i):s.push(i),i}}const En=t=>(e,n=je)=>(!ci||t==="sp")&&Ia(t,(...r)=>e(...r),n),lw=En("bm"),hu=En("m"),uw=En("bu"),hw=En("u"),fw=En("bum"),zp=En("um"),dw=En("sp"),pw=En("rtg"),gw=En("rtc");function mw(t,e=je){Ia("ec",t,e)}const _w=Symbol.for("v-ndc"),tl=t=>t?ag(t)?Pa(t)||t.proxy:tl(t.parent):null,$s=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tl(t.parent),$root:t=>tl(t.root),$emit:t=>t.emit,$options:t=>fu(t),$forceUpdate:t=>t.f||(t.f=()=>cu(t.update)),$nextTick:t=>t.n||(t.n=bi.bind(t.proxy)),$watch:t=>iw.bind(t)}),vc=(t,e)=>t!==Ae&&!t.__isScriptSetup&&ge(t,e),yw={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(vc(r,e))return o[e]=1,r[e];if(s!==Ae&&ge(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ge(l,e))return o[e]=3,i[e];if(n!==Ae&&ge(n,e))return o[e]=4,n[e];nl&&(o[e]=0)}}const u=$s[e];let h,d;if(u)return e==="$attrs"&&Tt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&ge(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ge(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return vc(s,e)?(s[e]=n,!0):r!==Ae&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ae&&ge(t,o)||vc(e,o)||(a=i[0])&&ge(a,o)||ge(r,o)||ge($s,o)||ge(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rf(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nl=!0;function vw(t){const e=fu(t),n=t.proxy,r=t.ctx;nl=!1,e.beforeCreate&&sf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:v,activated:w,deactivated:P,beforeDestroy:O,beforeUnmount:V,destroyed:K,unmounted:N,render:J,renderTracked:ae,renderTriggered:he,errorCaptured:F,serverPrefetch:W,expose:re,inheritAttrs:Me,components:Je,directives:ht,filters:$t}=e;if(l&&Ew(l,r,null),o)for(const Ee in o){const _e=o[Ee];ie(_e)&&(r[Ee]=_e.bind(n))}if(s){const Ee=s.call(n,n);ke(Ee)&&(t.data=nn(Ee))}if(nl=!0,i)for(const Ee in i){const _e=i[Ee],Nt=ie(_e)?_e.bind(n,n):ie(_e.get)?_e.get.bind(n,n):xt,le=!ie(_e)&&ie(_e.set)?_e.set.bind(n):xt,Ct=Ge({get:Nt,set:le});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Xe=>Ct.value=Xe})}if(a)for(const Ee in a)Gp(a[Ee],r,n,Ee);if(c){const Ee=ie(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(_e=>{Ro(_e,Ee[_e])})}u&&sf(u,t,"c");function de(Ee,_e){ne(_e)?_e.forEach(Nt=>Ee(Nt.bind(n))):_e&&Ee(_e.bind(n))}if(de(lw,h),de(hu,d),de(uw,m),de(hw,v),de(ow,w),de(aw,P),de(mw,F),de(gw,ae),de(pw,he),de(fw,V),de(zp,N),de(dw,W),ne(re))if(re.length){const Ee=t.exposed||(t.exposed={});re.forEach(_e=>{Object.defineProperty(Ee,_e,{get:()=>n[_e],set:Nt=>n[_e]=Nt})})}else t.exposed||(t.exposed={});J&&t.render===xt&&(t.render=J),Me!=null&&(t.inheritAttrs=Me),Je&&(t.components=Je),ht&&(t.directives=ht)}function Ew(t,e,n=xt){ne(t)&&(t=rl(t));for(const r in t){const s=t[r];let i;ke(s)?"default"in s?i=Yt(s.from||r,s.default,!0):i=Yt(s.from||r):i=Yt(s),be(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sf(t,e,n){Mt(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Gp(t,e,n,r){const s=r.includes(".")?Hp(n,r):()=>n[r];if(Ye(t)){const i=e[t];ie(i)&&Ln(s,i)}else if(ie(t))Ln(s,t.bind(n));else if(ke(t))if(ne(t))t.forEach(i=>Gp(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&Ln(s,i,t)}}function fu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Bo(c,l,o,!0)),Bo(c,e,o)),ke(e)&&i.set(e,c),c}function Bo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Bo(t,i,n,!0),s&&s.forEach(o=>Bo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ww[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ww={data:of,props:af,emits:af,methods:Ns,computed:Ns,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Ns,directives:Ns,watch:Iw,provide:of,inject:Tw};function of(t,e){return e?t?function(){return $e(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function Tw(t,e){return Ns(rl(t),rl(e))}function rl(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ns(t,e){return t?$e(Object.create(null),t,e):e}function af(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:$e(Object.create(null),rf(t),rf(e??{})):e}function Iw(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function Qp(){return{app:null,config:{isNativeTag:Wv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Aw=0;function Rw(t,e){return function(r,s=null){ie(r)||(r=$e({},r)),s!=null&&!ke(s)&&(s=null);const i=Qp(),o=new Set;let a=!1;const c=i.app={_uid:Aw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ie(l.install)?(o.add(l),l.install(c,...u)):ie(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=it(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Pa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){si=c;try{return l()}finally{si=null}}};return c}}let si=null;function Ro(t,e){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[t]=e}}function Yt(t,e,n=!1){const r=je||Rt;if(r||si){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:si._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}function Pw(){return!!(je||Rt||si)}function Sw(t,e,n,r=!1){const s={},i={};Mo(i,Ra,1),t.propsDefaults=Object.create(null),Yp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Np(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Cw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=me(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ta(t.emitsOptions,d))continue;const m=e[d];if(c)if(ge(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const v=Qr(d);s[v]=sl(c,a,v,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Yp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ge(e,h)&&((u=hs(h))===h||!ge(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=sl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ge(e,h))&&(delete i[h],l=!0)}l&&pn(t,"set","$attrs")}function Yp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(To(c))continue;const l=e[c];let u;s&&ge(s,u=Qr(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ta(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=me(n),l=a||Ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=sl(s,c,h,l[h],t,!ge(l,h))}}return o}function sl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ie(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Xr(s),r=l[n]=c.call(null,e),ur())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===hs(n))&&(r=!0))}return r}function Jp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const u=h=>{c=!0;const[d,m]=Jp(h,e,!0);$e(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ke(t)&&r.set(t,$r),$r;if(ne(i))for(let u=0;u<i.length;u++){const h=Qr(i[u]);cf(h)&&(o[h]=Ae)}else if(i)for(const u in i){const h=Qr(u);if(cf(h)){const d=i[u],m=o[h]=ne(d)||ie(d)?{type:d}:$e({},d);if(m){const v=hf(Boolean,m.type),w=hf(String,m.type);m[0]=v>-1,m[1]=w<0||v<w,(v>-1||ge(m,"default"))&&a.push(h)}}}const l=[o,a];return ke(t)&&r.set(t,l),l}function cf(t){return t[0]!=="$"}function lf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function uf(t,e){return lf(t)===lf(e)}function hf(t,e){return ne(e)?e.findIndex(n=>uf(n,t)):ie(e)&&uf(e,t)?0:-1}const Xp=t=>t[0]==="_"||t==="$stable",du=t=>ne(t)?t.map(Kt):[Kt(t)],bw=(t,e,n)=>{if(e._n)return e;const r=JE((...s)=>du(e(...s)),n);return r._c=!1,r},Zp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Xp(s))continue;const i=t[s];if(ie(i))e[s]=bw(s,i,r);else if(i!=null){const o=du(i);e[s]=()=>o}}},eg=(t,e)=>{const n=du(e);t.slots.default=()=>n},Ow=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),Mo(e,"_",n)):Zp(e,t.slots={})}else t.slots={},e&&eg(t,e);Mo(t.slots,Ra,1)},kw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:($e(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Zp(e,s)),o=e}else e&&(eg(t,e),o={default:1});if(i)for(const a in s)!Xp(a)&&!(a in o)&&delete s[a]};function il(t,e,n,r,s=!1){if(ne(t)){t.forEach((d,m)=>il(d,e&&(ne(e)?e[m]:e),n,r,s));return}if(Ao(r)&&!s)return;const i=r.shapeFlag&4?Pa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ye(l)?(u[l]=null,ge(h,l)&&(h[l]=null)):be(l)&&(l.value=null)),ie(c))Mn(c,a,12,[o,u]);else{const d=Ye(c),m=be(c);if(d||m){const v=()=>{if(t.f){const w=d?ge(h,c)?h[c]:u[c]:c.value;s?ne(w)&&zl(w,i):ne(w)?w.includes(i)||w.push(i):d?(u[c]=[i],ge(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ge(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,vt(v,n)):v()}}}const vt=rw;function Nw(t){return Dw(t)}function Dw(t,e){const n=Yc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=xt,insertStaticContent:v}=t,w=(p,g,_,E=null,A=null,S=null,L=!1,k=null,D=!!g.dynamicChildren)=>{if(p===g)return;p&&!Ps(p,g)&&(E=T(p),Xe(p,A,S,!0),p=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:C,ref:G,shapeFlag:j}=g;switch(C){case Aa:P(p,g,_,E);break;case ii:O(p,g,_,E);break;case Ec:p==null&&V(g,_,E,L);break;case Ht:Je(p,g,_,E,A,S,L,k,D);break;default:j&1?J(p,g,_,E,A,S,L,k,D):j&6?ht(p,g,_,E,A,S,L,k,D):(j&64||j&128)&&C.process(p,g,_,E,A,S,L,k,D,x)}G!=null&&A&&il(G,p&&p.ref,S,g||p,!g)},P=(p,g,_,E)=>{if(p==null)r(g.el=a(g.children),_,E);else{const A=g.el=p.el;g.children!==p.children&&l(A,g.children)}},O=(p,g,_,E)=>{p==null?r(g.el=c(g.children||""),_,E):g.el=p.el},V=(p,g,_,E)=>{[p.el,p.anchor]=v(p.children,g,_,E,p.el,p.anchor)},K=({el:p,anchor:g},_,E)=>{let A;for(;p&&p!==g;)A=d(p),r(p,_,E),p=A;r(g,_,E)},N=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),s(p),p=_;s(g)},J=(p,g,_,E,A,S,L,k,D)=>{L=L||g.type==="svg",p==null?ae(g,_,E,A,S,L,k,D):W(p,g,A,S,L,k,D)},ae=(p,g,_,E,A,S,L,k)=>{let D,C;const{type:G,props:j,shapeFlag:$,transition:Y,dirs:oe}=p;if(D=p.el=o(p.type,S,j&&j.is,j),$&8?u(D,p.children):$&16&&F(p.children,D,null,E,A,S&&G!=="foreignObject",L,k),oe&&er(p,null,E,"created"),he(D,p,p.scopeId,L,E),j){for(const ye in j)ye!=="value"&&!To(ye)&&i(D,ye,null,j[ye],S,p.children,E,A,Fe);"value"in j&&i(D,"value",null,j.value),(C=j.onVnodeBeforeMount)&&qt(C,E,p)}oe&&er(p,null,E,"beforeMount");const we=(!A||A&&!A.pendingBranch)&&Y&&!Y.persisted;we&&Y.beforeEnter(D),r(D,g,_),((C=j&&j.onVnodeMounted)||we||oe)&&vt(()=>{C&&qt(C,E,p),we&&Y.enter(D),oe&&er(p,null,E,"mounted")},A)},he=(p,g,_,E,A)=>{if(_&&m(p,_),E)for(let S=0;S<E.length;S++)m(p,E[S]);if(A){let S=A.subTree;if(g===S){const L=A.vnode;he(p,L,L.scopeId,L.slotScopeIds,A.parent)}}},F=(p,g,_,E,A,S,L,k,D=0)=>{for(let C=D;C<p.length;C++){const G=p[C]=k?Sn(p[C]):Kt(p[C]);w(null,G,g,_,E,A,S,L,k)}},W=(p,g,_,E,A,S,L)=>{const k=g.el=p.el;let{patchFlag:D,dynamicChildren:C,dirs:G}=g;D|=p.patchFlag&16;const j=p.props||Ae,$=g.props||Ae;let Y;_&&tr(_,!1),(Y=$.onVnodeBeforeUpdate)&&qt(Y,_,g,p),G&&er(g,p,_,"beforeUpdate"),_&&tr(_,!0);const oe=A&&g.type!=="foreignObject";if(C?re(p.dynamicChildren,C,k,_,E,oe,S):L||_e(p,g,k,null,_,E,oe,S,!1),D>0){if(D&16)Me(k,g,j,$,_,E,A);else if(D&2&&j.class!==$.class&&i(k,"class",null,$.class,A),D&4&&i(k,"style",j.style,$.style,A),D&8){const we=g.dynamicProps;for(let ye=0;ye<we.length;ye++){const Ce=we[ye],It=j[Ce],Tn=$[Ce];(Tn!==It||Ce==="value")&&i(k,Ce,It,Tn,A,p.children,_,E,Fe)}}D&1&&p.children!==g.children&&u(k,g.children)}else!L&&C==null&&Me(k,g,j,$,_,E,A);((Y=$.onVnodeUpdated)||G)&&vt(()=>{Y&&qt(Y,_,g,p),G&&er(g,p,_,"updated")},E)},re=(p,g,_,E,A,S,L)=>{for(let k=0;k<g.length;k++){const D=p[k],C=g[k],G=D.el&&(D.type===Ht||!Ps(D,C)||D.shapeFlag&70)?h(D.el):_;w(D,C,G,null,E,A,S,L,!0)}},Me=(p,g,_,E,A,S,L)=>{if(_!==E){if(_!==Ae)for(const k in _)!To(k)&&!(k in E)&&i(p,k,_[k],null,L,g.children,A,S,Fe);for(const k in E){if(To(k))continue;const D=E[k],C=_[k];D!==C&&k!=="value"&&i(p,k,C,D,L,g.children,A,S,Fe)}"value"in E&&i(p,"value",_.value,E.value)}},Je=(p,g,_,E,A,S,L,k,D)=>{const C=g.el=p?p.el:a(""),G=g.anchor=p?p.anchor:a("");let{patchFlag:j,dynamicChildren:$,slotScopeIds:Y}=g;Y&&(k=k?k.concat(Y):Y),p==null?(r(C,_,E),r(G,_,E),F(g.children,_,G,A,S,L,k,D)):j>0&&j&64&&$&&p.dynamicChildren?(re(p.dynamicChildren,$,_,A,S,L,k),(g.key!=null||A&&g===A.subTree)&&tg(p,g,!0)):_e(p,g,_,G,A,S,L,k,D)},ht=(p,g,_,E,A,S,L,k,D)=>{g.slotScopeIds=k,p==null?g.shapeFlag&512?A.ctx.activate(g,_,E,L,D):$t(g,_,E,A,S,L,D):ft(p,g,D)},$t=(p,g,_,E,A,S,L)=>{const k=p.component=qw(p,E,A);if(Kp(p)&&(k.ctx.renderer=x),Hw(k),k.asyncDep){if(A&&A.registerDep(k,de),!p.el){const D=k.subTree=it(ii);O(null,D,g,_)}return}de(k,p,g,_,A,S,L)},ft=(p,g,_)=>{const E=g.component=p.component;if(ew(p,g,_))if(E.asyncDep&&!E.asyncResolved){Ee(E,g,_);return}else E.next=g,zE(E.update),E.update();else g.el=p.el,E.vnode=g},de=(p,g,_,E,A,S,L)=>{const k=()=>{if(p.isMounted){let{next:G,bu:j,u:$,parent:Y,vnode:oe}=p,we=G,ye;tr(p,!1),G?(G.el=oe.el,Ee(p,G,L)):G=oe,j&&Io(j),(ye=G.props&&G.props.onVnodeBeforeUpdate)&&qt(ye,Y,G,oe),tr(p,!0);const Ce=yc(p),It=p.subTree;p.subTree=Ce,w(It,Ce,h(It.el),T(It),p,A,S),G.el=Ce.el,we===null&&tw(p,Ce.el),$&&vt($,A),(ye=G.props&&G.props.onVnodeUpdated)&&vt(()=>qt(ye,Y,G,oe),A)}else{let G;const{el:j,props:$}=g,{bm:Y,m:oe,parent:we}=p,ye=Ao(g);if(tr(p,!1),Y&&Io(Y),!ye&&(G=$&&$.onVnodeBeforeMount)&&qt(G,we,g),tr(p,!0),j&&pe){const Ce=()=>{p.subTree=yc(p),pe(j,p.subTree,p,A,null)};ye?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ce()):Ce()}else{const Ce=p.subTree=yc(p);w(null,Ce,_,E,p,A,S),g.el=Ce.el}if(oe&&vt(oe,A),!ye&&(G=$&&$.onVnodeMounted)){const Ce=g;vt(()=>qt(G,we,Ce),A)}(g.shapeFlag&256||we&&Ao(we.vnode)&&we.vnode.shapeFlag&256)&&p.a&&vt(p.a,A),p.isMounted=!0,g=_=E=null}},D=p.effect=new Zl(k,()=>cu(C),p.scope),C=p.update=()=>D.run();C.id=p.uid,tr(p,!0),C()},Ee=(p,g,_)=>{g.component=p;const E=p.vnode.props;p.vnode=g,p.next=null,Cw(p,g.props,E,_),kw(p,g.children,_),fs(),tf(),ds()},_e=(p,g,_,E,A,S,L,k,D=!1)=>{const C=p&&p.children,G=p?p.shapeFlag:0,j=g.children,{patchFlag:$,shapeFlag:Y}=g;if($>0){if($&128){le(C,j,_,E,A,S,L,k,D);return}else if($&256){Nt(C,j,_,E,A,S,L,k,D);return}}Y&8?(G&16&&Fe(C,A,S),j!==C&&u(_,j)):G&16?Y&16?le(C,j,_,E,A,S,L,k,D):Fe(C,A,S,!0):(G&8&&u(_,""),Y&16&&F(j,_,E,A,S,L,k,D))},Nt=(p,g,_,E,A,S,L,k,D)=>{p=p||$r,g=g||$r;const C=p.length,G=g.length,j=Math.min(C,G);let $;for($=0;$<j;$++){const Y=g[$]=D?Sn(g[$]):Kt(g[$]);w(p[$],Y,_,null,A,S,L,k,D)}C>G?Fe(p,A,S,!0,!1,j):F(g,_,E,A,S,L,k,D,j)},le=(p,g,_,E,A,S,L,k,D)=>{let C=0;const G=g.length;let j=p.length-1,$=G-1;for(;C<=j&&C<=$;){const Y=p[C],oe=g[C]=D?Sn(g[C]):Kt(g[C]);if(Ps(Y,oe))w(Y,oe,_,null,A,S,L,k,D);else break;C++}for(;C<=j&&C<=$;){const Y=p[j],oe=g[$]=D?Sn(g[$]):Kt(g[$]);if(Ps(Y,oe))w(Y,oe,_,null,A,S,L,k,D);else break;j--,$--}if(C>j){if(C<=$){const Y=$+1,oe=Y<G?g[Y].el:E;for(;C<=$;)w(null,g[C]=D?Sn(g[C]):Kt(g[C]),_,oe,A,S,L,k,D),C++}}else if(C>$)for(;C<=j;)Xe(p[C],A,S,!0),C++;else{const Y=C,oe=C,we=new Map;for(C=oe;C<=$;C++){const dt=g[C]=D?Sn(g[C]):Kt(g[C]);dt.key!=null&&we.set(dt.key,C)}let ye,Ce=0;const It=$-oe+1;let Tn=!1,Xi=0;const Yn=new Array(It);for(C=0;C<It;C++)Yn[C]=0;for(C=Y;C<=j;C++){const dt=p[C];if(Ce>=It){Xe(dt,A,S,!0);continue}let bt;if(dt.key!=null)bt=we.get(dt.key);else for(ye=oe;ye<=$;ye++)if(Yn[ye-oe]===0&&Ps(dt,g[ye])){bt=ye;break}bt===void 0?Xe(dt,A,S,!0):(Yn[bt-oe]=C+1,bt>=Xi?Xi=bt:Tn=!0,w(dt,g[bt],_,null,A,S,L,k,D),Ce++)}const Is=Tn?Vw(Yn):$r;for(ye=Is.length-1,C=It-1;C>=0;C--){const dt=oe+C,bt=g[dt],Pr=dt+1<G?g[dt+1].el:E;Yn[C]===0?w(null,bt,_,Pr,A,S,L,k,D):Tn&&(ye<0||C!==Is[ye]?Ct(bt,_,Pr,2):ye--)}}},Ct=(p,g,_,E,A=null)=>{const{el:S,type:L,transition:k,children:D,shapeFlag:C}=p;if(C&6){Ct(p.component.subTree,g,_,E);return}if(C&128){p.suspense.move(g,_,E);return}if(C&64){L.move(p,g,_,x);return}if(L===Ht){r(S,g,_);for(let j=0;j<D.length;j++)Ct(D[j],g,_,E);r(p.anchor,g,_);return}if(L===Ec){K(p,g,_);return}if(E!==2&&C&1&&k)if(E===0)k.beforeEnter(S),r(S,g,_),vt(()=>k.enter(S),A);else{const{leave:j,delayLeave:$,afterLeave:Y}=k,oe=()=>r(S,g,_),we=()=>{j(S,()=>{oe(),Y&&Y()})};$?$(S,oe,we):we()}else r(S,g,_)},Xe=(p,g,_,E=!1,A=!1)=>{const{type:S,props:L,ref:k,children:D,dynamicChildren:C,shapeFlag:G,patchFlag:j,dirs:$}=p;if(k!=null&&il(k,null,_,p,!0),G&256){g.ctx.deactivate(p);return}const Y=G&1&&$,oe=!Ao(p);let we;if(oe&&(we=L&&L.onVnodeBeforeUnmount)&&qt(we,g,p),G&6)Qn(p.component,_,E);else{if(G&128){p.suspense.unmount(_,E);return}Y&&er(p,null,g,"beforeUnmount"),G&64?p.type.remove(p,g,_,A,x,E):C&&(S!==Ht||j>0&&j&64)?Fe(C,g,_,!1,!0):(S===Ht&&j&384||!A&&G&16)&&Fe(D,g,_),E&&Ze(p)}(oe&&(we=L&&L.onVnodeUnmounted)||Y)&&vt(()=>{we&&qt(we,g,p),Y&&er(p,null,g,"unmounted")},_)},Ze=p=>{const{type:g,el:_,anchor:E,transition:A}=p;if(g===Ht){rn(_,E);return}if(g===Ec){N(p);return}const S=()=>{s(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:L,delayLeave:k}=A,D=()=>L(_,S);k?k(p.el,S,D):D()}else S()},rn=(p,g)=>{let _;for(;p!==g;)_=d(p),s(p),p=_;s(g)},Qn=(p,g,_)=>{const{bum:E,scope:A,update:S,subTree:L,um:k}=p;E&&Io(E),A.stop(),S&&(S.active=!1,Xe(L,p,g,_)),k&&vt(k,g),vt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Fe=(p,g,_,E=!1,A=!1,S=0)=>{for(let L=S;L<p.length;L++)Xe(p[L],g,_,E,A)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),U=(p,g,_)=>{p==null?g._vnode&&Xe(g._vnode,null,null,!0):w(g._vnode||null,p,g,null,null,null,_),tf(),Bp(),g._vnode=p},x={p:w,um:Xe,m:Ct,r:Ze,mt:$t,mc:F,pc:_e,pbc:re,n:T,o:t};let z,pe;return e&&([z,pe]=e(x)),{render:U,hydrate:z,createApp:Rw(U,z)}}function tr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function tg(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Sn(s[i]),a.el=o.el),n||tg(o,a)),a.type===Aa&&(a.el=o.el)}}function Vw(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const xw=t=>t.__isTeleport,Ht=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),ii=Symbol.for("v-cmt"),Ec=Symbol.for("v-stc"),qs=[];let Vt=null;function ng(t=!1){qs.push(Vt=t?null:[])}function Mw(){qs.pop(),Vt=qs[qs.length-1]||null}let oi=1;function ff(t){oi+=t}function Lw(t){return t.dynamicChildren=oi>0?Vt||$r:null,Mw(),oi>0&&Vt&&Vt.push(t),t}function rg(t,e,n,r,s,i){return Lw(ai(t,e,n,r,s,i,!0))}function ol(t){return t?t.__v_isVNode===!0:!1}function Ps(t,e){return t.type===e.type&&t.key===e.key}const Ra="__vInternal",sg=({key:t})=>t??null,Po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||be(t)||ie(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function ai(t,e=null,n=null,r=0,s=null,i=t===Ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sg(e),ref:e&&Po(e),scopeId:qp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return a?(pu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ye(n)?8:16),oi>0&&!o&&Vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vt.push(c),c}const it=Fw;function Fw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===_w)&&(t=ii),ol(t)){const a=Jr(t,e,!0);return n&&pu(a,n),oi>0&&!i&&Vt&&(a.shapeFlag&6?Vt[Vt.indexOf(t)]=a:Vt.push(a)),a.patchFlag|=-2,a}if(Gw(t)&&(t=t.__vccOpts),e){e=Uw(e);let{class:a,style:c}=e;a&&!Ye(a)&&(e.class=_a(a)),ke(c)&&(Dp(c)&&!ne(c)&&(c=$e({},c)),e.style=Yl(c))}const o=Ye(t)?1:nw(t)?128:xw(t)?64:ke(t)?4:ie(t)?2:0;return ai(t,e,n,r,s,o,i,!0)}function Uw(t){return t?Dp(t)||Ra in t?$e({},t):t:null}function Jr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?ig(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&sg(a),ref:e&&e.ref?n&&s?ne(s)?s.concat(Po(e)):[s,Po(e)]:Po(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ht?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jr(t.ssContent),ssFallback:t.ssFallback&&Jr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Bw(t=" ",e=0){return it(Aa,null,t,e)}function Kt(t){return t==null||typeof t=="boolean"?it(ii):ne(t)?it(Ht,null,t.slice()):typeof t=="object"?Sn(t):it(Aa,null,String(t))}function Sn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jr(t)}function pu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ra in e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),r&64?(n=16,e=[Bw(e)]):n=8);t.children=e,t.shapeFlag|=n}function ig(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=_a([e.class,r.class]));else if(s==="style")e.style=Yl([e.style,r.style]);else if(pa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ne(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function qt(t,e,n,r=null){Mt(t,e,7,[n,r])}const jw=Qp();let $w=0;function qw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||jw,i={uid:$w++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jp(r,s),emitsOptions:$p(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=YE.bind(null,i),t.ce&&t.ce(i),i}let je=null;const og=()=>je||Rt;let gu,kr,df="__VUE_INSTANCE_SETTERS__";(kr=Yc()[df])||(kr=Yc()[df]=[]),kr.push(t=>je=t),gu=t=>{kr.length>1?kr.forEach(e=>e(t)):kr[0](t)};const Xr=t=>{gu(t),t.scope.on()},ur=()=>{je&&je.scope.off(),gu(null)};function ag(t){return t.vnode.shapeFlag&4}let ci=!1;function Hw(t,e=!1){ci=e;const{props:n,children:r}=t.vnode,s=ag(t);Sw(t,n,s,e),Ow(t,r);const i=s?Kw(t,e):void 0;return ci=!1,i}function Kw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ea(new Proxy(t.ctx,yw));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?zw(t):null;Xr(t),fs();const i=Mn(r,t,0,[t.props,s]);if(ds(),ur(),mp(i)){if(i.then(ur,ur),e)return i.then(o=>{pf(t,o,e)}).catch(o=>{wa(o,t,0)});t.asyncDep=i}else pf(t,i,e)}else cg(t,e)}function pf(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=Mp(e)),cg(t,n)}let gf;function cg(t,e,n){const r=t.type;if(!t.render){if(!e&&gf&&!r.render){const s=r.template||fu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=$e($e({isCustomElement:i,delimiters:a},o),c);r.render=gf(s,l)}}t.render=r.render||xt}Xr(t),fs(),vw(t),ds(),ur()}function Ww(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Tt(t,"get","$attrs"),e[n]}}))}function zw(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Ww(t)},slots:t.slots,emit:t.emit,expose:e}}function Pa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Mp(Ea(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $s)return $s[n](t)},has(e,n){return n in e||n in $s}}))}function Gw(t){return ie(t)&&"__vccOpts"in t}const Ge=(t,e)=>HE(t,e,ci);function lg(t,e,n){const r=arguments.length;return r===2?ke(e)&&!ne(e)?ol(e)?it(t,null,[e]):it(t,e):it(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ol(n)&&(n=[n]),it(t,e,n))}const Qw=Symbol.for("v-scx"),Yw=()=>Yt(Qw),Jw="3.3.4",Xw="http://www.w3.org/2000/svg",sr=typeof document<"u"?document:null,mf=sr&&sr.createElement("template"),Zw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?sr.createElementNS(Xw,t):sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mf.innerHTML=r?`<svg>${t}</svg>`:t;const a=mf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function eT(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function tT(t,e,n){const r=t.style,s=Ye(n);if(n&&!s){if(e&&!Ye(e))for(const i in e)n[i]==null&&al(r,i,"");for(const i in n)al(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const _f=/\s*!important$/;function al(t,e,n){if(ne(n))n.forEach(r=>al(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nT(t,e);_f.test(n)?t.setProperty(hs(r),n.replace(_f,""),"important"):t[r]=n}}const yf=["Webkit","Moz","ms"],wc={};function nT(t,e){const n=wc[e];if(n)return n;let r=Qr(e);if(r!=="filter"&&r in t)return wc[e]=r;r=_p(r);for(let s=0;s<yf.length;s++){const i=yf[s]+r;if(i in t)return wc[e]=i}return e}const vf="http://www.w3.org/1999/xlink";function rT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vf,e.slice(6,e.length)):t.setAttributeNS(vf,e,n);else{const i=oE(e);n==null||i&&!yp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function sT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=yp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function xr(t,e,n,r){t.addEventListener(e,n,r)}function iT(t,e,n,r){t.removeEventListener(e,n,r)}function oT(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=aT(e);if(r){const l=i[e]=uT(r,s);xr(t,a,l,c)}else o&&(iT(t,a,o,c),i[e]=void 0)}}const Ef=/(?:Once|Passive|Capture)$/;function aT(t){let e;if(Ef.test(t)){e={};let r;for(;r=t.match(Ef);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):hs(t.slice(2)),e]}let Tc=0;const cT=Promise.resolve(),lT=()=>Tc||(cT.then(()=>Tc=0),Tc=Date.now());function uT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Mt(hT(r,n.value),e,5,[r])};return n.value=t,n.attached=lT(),n}function hT(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wf=/^on[a-z]/,fT=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?eT(t,r,s):e==="style"?tT(t,n,r):pa(e)?Wl(e)||oT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dT(t,e,r,s))?sT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),rT(t,e,r,s))};function dT(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&wf.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wf.test(e)&&Ye(n)?!1:e in t}const Tf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>Io(e,n):e};function pT(t){t.target.composing=!0}function If(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _O={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Tf(s);const i=r||s.props&&s.props.type==="number";xr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Qc(a)),t._assign(a)}),n&&xr(t,"change",()=>{t.value=t.value.trim()}),e||(xr(t,"compositionstart",pT),xr(t,"compositionend",If),xr(t,"change",If))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Tf(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Qc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},gT=["ctrl","shift","alt","meta"],mT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gT.some(n=>t[`${n}Key`]&&!e.includes(n))},yO=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=mT[e[s]];if(i&&i(n,e))return}return t(n,...r)},_T=$e({patchProp:fT},Zw);let Af;function yT(){return Af||(Af=Nw(_T))}const vT=(...t)=>{const e=yT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ET(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ET(t){return Ye(t)?document.querySelector(t):t}var lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jo={exports:{}};jo.exports;(function(t,e){var n=200,r="__lodash_hash_undefined__",s=9007199254740991,i="[object Arguments]",o="[object Array]",a="[object Boolean]",c="[object Date]",l="[object Error]",u="[object Function]",h="[object GeneratorFunction]",d="[object Map]",m="[object Number]",v="[object Object]",w="[object Promise]",P="[object RegExp]",O="[object Set]",V="[object String]",K="[object Symbol]",N="[object WeakMap]",J="[object ArrayBuffer]",ae="[object DataView]",he="[object Float32Array]",F="[object Float64Array]",W="[object Int8Array]",re="[object Int16Array]",Me="[object Int32Array]",Je="[object Uint8Array]",ht="[object Uint8ClampedArray]",$t="[object Uint16Array]",ft="[object Uint32Array]",de=/[\\^$.*+?()[\]{}|]/g,Ee=/\w*$/,_e=/^\[object .+?Constructor\]$/,Nt=/^(?:0|[1-9]\d*)$/,le={};le[i]=le[o]=le[J]=le[ae]=le[a]=le[c]=le[he]=le[F]=le[W]=le[re]=le[Me]=le[d]=le[m]=le[v]=le[P]=le[O]=le[V]=le[K]=le[Je]=le[ht]=le[$t]=le[ft]=!0,le[l]=le[u]=le[N]=!1;var Ct=typeof lo=="object"&&lo&&lo.Object===Object&&lo,Xe=typeof self=="object"&&self&&self.Object===Object&&self,Ze=Ct||Xe||Function("return this")(),rn=e&&!e.nodeType&&e,Qn=rn&&!0&&t&&!t.nodeType&&t,Fe=Qn&&Qn.exports===rn;function T(f,y){return f.set(y[0],y[1]),f}function U(f,y){return f.add(y),f}function x(f,y){for(var I=-1,H=f?f.length:0;++I<H&&y(f[I],I,f)!==!1;);return f}function z(f,y){for(var I=-1,H=y.length,Ue=f.length;++I<H;)f[Ue+I]=y[I];return f}function pe(f,y,I,H){var Ue=-1,pt=f?f.length:0;for(H&&pt&&(I=f[++Ue]);++Ue<pt;)I=y(I,f[Ue],Ue,f);return I}function p(f,y){for(var I=-1,H=Array(f);++I<f;)H[I]=y(I);return H}function g(f,y){return f==null?void 0:f[y]}function _(f){var y=!1;if(f!=null&&typeof f.toString!="function")try{y=!!(f+"")}catch{}return y}function E(f){var y=-1,I=Array(f.size);return f.forEach(function(H,Ue){I[++y]=[Ue,H]}),I}function A(f,y){return function(I){return f(y(I))}}function S(f){var y=-1,I=Array(f.size);return f.forEach(function(H){I[++y]=H}),I}var L=Array.prototype,k=Function.prototype,D=Object.prototype,C=Ze["__core-js_shared__"],G=function(){var f=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||"");return f?"Symbol(src)_1."+f:""}(),j=k.toString,$=D.hasOwnProperty,Y=D.toString,oe=RegExp("^"+j.call($).replace(de,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),we=Fe?Ze.Buffer:void 0,ye=Ze.Symbol,Ce=Ze.Uint8Array,It=A(Object.getPrototypeOf,Object),Tn=Object.create,Xi=D.propertyIsEnumerable,Yn=L.splice,Is=Object.getOwnPropertySymbols,dt=we?we.isBuffer:void 0,bt=A(Object.keys,Object),Pr=br(Ze,"DataView"),As=br(Ze,"Map"),lc=br(Ze,"Promise"),uc=br(Ze,"Set"),hc=br(Ze,"WeakMap"),Rs=br(Object,"create"),Hy=Zn(Pr),Ky=Zn(As),Wy=Zn(lc),zy=Zn(uc),Gy=Zn(hc),Vh=ye?ye.prototype:void 0,xh=Vh?Vh.valueOf:void 0;function Jn(f){var y=-1,I=f?f.length:0;for(this.clear();++y<I;){var H=f[y];this.set(H[0],H[1])}}function Qy(){this.__data__=Rs?Rs(null):{}}function Yy(f){return this.has(f)&&delete this.__data__[f]}function Jy(f){var y=this.__data__;if(Rs){var I=y[f];return I===r?void 0:I}return $.call(y,f)?y[f]:void 0}function Xy(f){var y=this.__data__;return Rs?y[f]!==void 0:$.call(y,f)}function Zy(f,y){var I=this.__data__;return I[f]=Rs&&y===void 0?r:y,this}Jn.prototype.clear=Qy,Jn.prototype.delete=Yy,Jn.prototype.get=Jy,Jn.prototype.has=Xy,Jn.prototype.set=Zy;function sn(f){var y=-1,I=f?f.length:0;for(this.clear();++y<I;){var H=f[y];this.set(H[0],H[1])}}function ev(){this.__data__=[]}function tv(f){var y=this.__data__,I=Zi(y,f);if(I<0)return!1;var H=y.length-1;return I==H?y.pop():Yn.call(y,I,1),!0}function nv(f){var y=this.__data__,I=Zi(y,f);return I<0?void 0:y[I][1]}function rv(f){return Zi(this.__data__,f)>-1}function sv(f,y){var I=this.__data__,H=Zi(I,f);return H<0?I.push([f,y]):I[H][1]=y,this}sn.prototype.clear=ev,sn.prototype.delete=tv,sn.prototype.get=nv,sn.prototype.has=rv,sn.prototype.set=sv;function Sr(f){var y=-1,I=f?f.length:0;for(this.clear();++y<I;){var H=f[y];this.set(H[0],H[1])}}function iv(){this.__data__={hash:new Jn,map:new(As||sn),string:new Jn}}function ov(f){return eo(this,f).delete(f)}function av(f){return eo(this,f).get(f)}function cv(f){return eo(this,f).has(f)}function lv(f,y){return eo(this,f).set(f,y),this}Sr.prototype.clear=iv,Sr.prototype.delete=ov,Sr.prototype.get=av,Sr.prototype.has=cv,Sr.prototype.set=lv;function Cr(f){this.__data__=new sn(f)}function uv(){this.__data__=new sn}function hv(f){return this.__data__.delete(f)}function fv(f){return this.__data__.get(f)}function dv(f){return this.__data__.has(f)}function pv(f,y){var I=this.__data__;if(I instanceof sn){var H=I.__data__;if(!As||H.length<n-1)return H.push([f,y]),this;I=this.__data__=new Sr(H)}return I.set(f,y),this}Cr.prototype.clear=uv,Cr.prototype.delete=hv,Cr.prototype.get=fv,Cr.prototype.has=dv,Cr.prototype.set=pv;function gv(f,y){var I=pc(f)||Uv(f)?p(f.length,String):[],H=I.length,Ue=!!H;for(var pt in f)(y||$.call(f,pt))&&!(Ue&&(pt=="length"||xv(pt,H)))&&I.push(pt);return I}function Mh(f,y,I){var H=f[y];(!($.call(f,y)&&Bh(H,I))||I===void 0&&!(y in f))&&(f[y]=I)}function Zi(f,y){for(var I=f.length;I--;)if(Bh(f[I][0],y))return I;return-1}function mv(f,y){return f&&Lh(y,gc(y),f)}function fc(f,y,I,H,Ue,pt,Ot){var yt;if(H&&(yt=pt?H(f,Ue,pt,Ot):H(f)),yt!==void 0)return yt;if(!to(f))return f;var qh=pc(f);if(qh){if(yt=Nv(f),!y)return bv(f,yt)}else{var Or=Xn(f),Hh=Or==u||Or==h;if(jv(f))return Tv(f,y);if(Or==v||Or==i||Hh&&!pt){if(_(f))return pt?f:{};if(yt=Dv(Hh?{}:f),!y)return Ov(f,mv(yt,f))}else{if(!le[Or])return pt?f:{};yt=Vv(f,Or,fc,y)}}Ot||(Ot=new Cr);var Kh=Ot.get(f);if(Kh)return Kh;if(Ot.set(f,yt),!qh)var Wh=I?kv(f):gc(f);return x(Wh||f,function(mc,no){Wh&&(no=mc,mc=f[no]),Mh(yt,no,fc(mc,y,I,H,no,f,Ot))}),yt}function _v(f){return to(f)?Tn(f):{}}function yv(f,y,I){var H=y(f);return pc(f)?H:z(H,I(f))}function vv(f){return Y.call(f)}function Ev(f){if(!to(f)||Lv(f))return!1;var y=$h(f)||_(f)?oe:_e;return y.test(Zn(f))}function wv(f){if(!Uh(f))return bt(f);var y=[];for(var I in Object(f))$.call(f,I)&&I!="constructor"&&y.push(I);return y}function Tv(f,y){if(y)return f.slice();var I=new f.constructor(f.length);return f.copy(I),I}function dc(f){var y=new f.constructor(f.byteLength);return new Ce(y).set(new Ce(f)),y}function Iv(f,y){var I=y?dc(f.buffer):f.buffer;return new f.constructor(I,f.byteOffset,f.byteLength)}function Av(f,y,I){var H=y?I(E(f),!0):E(f);return pe(H,T,new f.constructor)}function Rv(f){var y=new f.constructor(f.source,Ee.exec(f));return y.lastIndex=f.lastIndex,y}function Pv(f,y,I){var H=y?I(S(f),!0):S(f);return pe(H,U,new f.constructor)}function Sv(f){return xh?Object(xh.call(f)):{}}function Cv(f,y){var I=y?dc(f.buffer):f.buffer;return new f.constructor(I,f.byteOffset,f.length)}function bv(f,y){var I=-1,H=f.length;for(y||(y=Array(H));++I<H;)y[I]=f[I];return y}function Lh(f,y,I,H){I||(I={});for(var Ue=-1,pt=y.length;++Ue<pt;){var Ot=y[Ue],yt=H?H(I[Ot],f[Ot],Ot,I,f):void 0;Mh(I,Ot,yt===void 0?f[Ot]:yt)}return I}function Ov(f,y){return Lh(f,Fh(f),y)}function kv(f){return yv(f,gc,Fh)}function eo(f,y){var I=f.__data__;return Mv(y)?I[typeof y=="string"?"string":"hash"]:I.map}function br(f,y){var I=g(f,y);return Ev(I)?I:void 0}var Fh=Is?A(Is,Object):Hv,Xn=vv;(Pr&&Xn(new Pr(new ArrayBuffer(1)))!=ae||As&&Xn(new As)!=d||lc&&Xn(lc.resolve())!=w||uc&&Xn(new uc)!=O||hc&&Xn(new hc)!=N)&&(Xn=function(f){var y=Y.call(f),I=y==v?f.constructor:void 0,H=I?Zn(I):void 0;if(H)switch(H){case Hy:return ae;case Ky:return d;case Wy:return w;case zy:return O;case Gy:return N}return y});function Nv(f){var y=f.length,I=f.constructor(y);return y&&typeof f[0]=="string"&&$.call(f,"index")&&(I.index=f.index,I.input=f.input),I}function Dv(f){return typeof f.constructor=="function"&&!Uh(f)?_v(It(f)):{}}function Vv(f,y,I,H){var Ue=f.constructor;switch(y){case J:return dc(f);case a:case c:return new Ue(+f);case ae:return Iv(f,H);case he:case F:case W:case re:case Me:case Je:case ht:case $t:case ft:return Cv(f,H);case d:return Av(f,H,I);case m:case V:return new Ue(f);case P:return Rv(f);case O:return Pv(f,H,I);case K:return Sv(f)}}function xv(f,y){return y=y??s,!!y&&(typeof f=="number"||Nt.test(f))&&f>-1&&f%1==0&&f<y}function Mv(f){var y=typeof f;return y=="string"||y=="number"||y=="symbol"||y=="boolean"?f!=="__proto__":f===null}function Lv(f){return!!G&&G in f}function Uh(f){var y=f&&f.constructor,I=typeof y=="function"&&y.prototype||D;return f===I}function Zn(f){if(f!=null){try{return j.call(f)}catch{}try{return f+""}catch{}}return""}function Fv(f){return fc(f,!0,!0)}function Bh(f,y){return f===y||f!==f&&y!==y}function Uv(f){return Bv(f)&&$.call(f,"callee")&&(!Xi.call(f,"callee")||Y.call(f)==i)}var pc=Array.isArray;function jh(f){return f!=null&&$v(f.length)&&!$h(f)}function Bv(f){return qv(f)&&jh(f)}var jv=dt||Kv;function $h(f){var y=to(f)?Y.call(f):"";return y==u||y==h}function $v(f){return typeof f=="number"&&f>-1&&f%1==0&&f<=s}function to(f){var y=typeof f;return!!f&&(y=="object"||y=="function")}function qv(f){return!!f&&typeof f=="object"}function gc(f){return jh(f)?gv(f):wv(f)}function Hv(){return[]}function Kv(){return!1}t.exports=Fv})(jo,jo.exports);var TT=jo.exports;const Rf=wT(TT);function IT({store:t}){const e=Rf(t.$state);t.$reset=()=>t.$patch(Rf(e))}var AT=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ug;const Sa=t=>ug=t,hg=Symbol();function cl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hs||(Hs={}));function RT(){const t=Ep(!0),e=t.run(()=>_t({}));let n=[],r=[];const s=Ea({install(i){Sa(s),s._a=i,i.provide(hg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!AT?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const fg=()=>{};function Pf(t,e,n,r=fg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Jl()&&wp(s),s}function Nr(t,...e){t.slice().forEach(n=>{n(...e)})}const PT=t=>t();function ll(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];cl(s)&&cl(r)&&t.hasOwnProperty(n)&&!be(r)&&!xn(r)?t[n]=ll(s,r):t[n]=r}return t}const ST=Symbol();function CT(t){return!cl(t)||!t.hasOwnProperty(ST)}const{assign:Pn}=Object;function bT(t){return!!(be(t)&&t.effect)}function OT(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=UE(n.state.value[t]);return Pn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Ea(Ge(()=>{Sa(n);const m=n._s.get(t);return o[d].call(m,m)})),h),{}))}return c=dg(t,l,e,n,r,!0),c}function dg(t,e,n={},r,s,i){let o;const a=Pn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],m;const v=r.state.value[t];!i&&!v&&(r.state.value[t]={}),_t({});let w;function P(F){let W;l=u=!1,typeof F=="function"?(F(r.state.value[t]),W={type:Hs.patchFunction,storeId:t,events:m}):(ll(r.state.value[t],F),W={type:Hs.patchObject,payload:F,storeId:t,events:m});const re=w=Symbol();bi().then(()=>{w===re&&(l=!0)}),u=!0,Nr(h,W,r.state.value[t])}const O=i?function(){const{state:W}=n,re=W?W():{};this.$patch(Me=>{Pn(Me,re)})}:fg;function V(){o.stop(),h=[],d=[],r._s.delete(t)}function K(F,W){return function(){Sa(r);const re=Array.from(arguments),Me=[],Je=[];function ht(de){Me.push(de)}function $t(de){Je.push(de)}Nr(d,{args:re,name:F,store:J,after:ht,onError:$t});let ft;try{ft=W.apply(this&&this.$id===t?this:J,re)}catch(de){throw Nr(Je,de),de}return ft instanceof Promise?ft.then(de=>(Nr(Me,de),de)).catch(de=>(Nr(Je,de),Promise.reject(de))):(Nr(Me,ft),ft)}}const N={_p:r,$id:t,$onAction:Pf.bind(null,d),$patch:P,$reset:O,$subscribe(F,W={}){const re=Pf(h,F,W.detached,()=>Me()),Me=o.run(()=>Ln(()=>r.state.value[t],Je=>{(W.flush==="sync"?u:l)&&F({storeId:t,type:Hs.direct,events:m},Je)},Pn({},c,W)));return re},$dispose:V},J=nn(N);r._s.set(t,J);const ae=r._a&&r._a.runWithContext||PT,he=r._e.run(()=>(o=Ep(),ae(()=>o.run(e))));for(const F in he){const W=he[F];if(be(W)&&!bT(W)||xn(W))i||(v&&CT(W)&&(be(W)?W.value=v[F]:ll(W,v[F])),r.state.value[t][F]=W);else if(typeof W=="function"){const re=K(F,W);he[F]=re,a.actions[F]=W}}return Pn(J,he),Pn(me(J),he),Object.defineProperty(J,"$state",{get:()=>r.state.value[t],set:F=>{P(W=>{Pn(W,F)})}}),r._p.forEach(F=>{Pn(J,o.run(()=>F({store:J,app:r._a,pinia:r,options:a})))}),v&&i&&n.hydrate&&n.hydrate(J.$state,v),l=!0,u=!0,J}function pg(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Pw();return a=a||(l?Yt(hg,null):null),a&&Sa(a),a=ug,a._s.has(r)||(i?dg(r,e,s,a):OT(r,s,a)),a._s.get(r)}return o.$id=r,o}const gg={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},$o={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},mu={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},mg={dangerouslyHTMLString:!1,multiple:!0,position:gg.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},kT={rtl:!1,newestOnTop:!1,toastClassName:""},NT={...mg,...kT};({...mg,type:mu.DEFAULT});var qo=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(qo||{});nn({});nn({});nn({items:[]});const DT=nn({});nn({});function VT(...t){return ig(...t)}function xT(t={}){DT["".concat(qo.CSS_NAMESPACE,"-default-options")]=t}gg.TOP_LEFT,$o.AUTO,mu.DEFAULT;mu.DEFAULT,$o.AUTO;$o.AUTO,$o.LIGHT;const _g={install(t,e={}){MT(e)}};typeof window<"u"&&(window.Vue3Toastify=_g);function MT(t={}){const e=VT(NT,t);xT(e)}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mr=typeof window<"u";function LT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function Ic(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ft(s)?s.map(t):t(s)}return n}const Ks=()=>{},Ft=Array.isArray,FT=/\/$/,UT=t=>t.replace(FT,"");function Ac(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=qT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function BT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Sf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zr(e.matched[r],n.matched[s])&&yg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function yg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$T(t[n],e[n]))return!1;return!0}function $T(t,e){return Ft(t)?Cf(t,e):Ft(e)?Cf(e,t):t===e}function Cf(t,e){return Ft(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var li;(function(t){t.pop="pop",t.push="push"})(li||(li={}));var Ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ws||(Ws={}));function HT(t){if(!t)if(Mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),UT(t)}const KT=/^[^#]+#/;function WT(t,e){return t.replace(KT,"#")+e}function zT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ca=()=>({left:window.pageXOffset,top:window.pageYOffset});function GT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bf(t,e){return(history.state?history.state.position-e:-1)+t}const ul=new Map;function QT(t,e){ul.set(t,e)}function YT(t){const e=ul.get(t);return ul.delete(t),e}let JT=()=>location.protocol+"//"+location.host;function vg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Sf(c,"")}return Sf(n,t)+r+s}function XT(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=vg(t,location),v=n.value,w=e.value;let P=0;if(d){if(n.value=m,e.value=d,o&&o===v){o=null;return}P=w?d.position-w.position:0}else r(m);s.forEach(O=>{O(n.value,v,{delta:P,type:li.pop,direction:P?P>0?Ws.forward:Ws.back:Ws.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(Te({},d.state,{scroll:Ca()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Of(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ca():null}}function ZT(t){const{history:e,location:n}=window,r={value:vg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:JT()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=Te({},e.state,Of(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Te({},s.value,e.state,{forward:c,scroll:Ca()});i(u.current,u,!0);const h=Te({},Of(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function eI(t){t=HT(t);const e=ZT(t),n=XT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Te({location:"",base:t,go:r,createHref:WT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function tI(t){return typeof t=="string"||t&&typeof t=="object"}function Eg(t){return typeof t=="string"||typeof t=="symbol"}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},wg=Symbol("");var kf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kf||(kf={}));function es(t,e){return Te(new Error,{type:t,[wg]:!0},e)}function on(t,e){return t instanceof Error&&wg in t&&(e==null||!!(t.type&e))}const Nf="[^/]+?",nI={sensitive:!1,strict:!1,start:!0,end:!0},rI=/[.+*?^${}()[\]/\\]/g;function sI(t,e){const n=Te({},nI,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(rI,"\\$&"),m+=40;else if(d.type===1){const{value:v,repeatable:w,optional:P,regexp:O}=d;i.push({name:v,repeatable:w,optional:P});const V=O||Nf;if(V!==Nf){m+=10;try{new RegExp(`(${V})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${v}" (${V}): `+N.message)}}let K=w?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;h||(K=P&&l.length<2?`(?:/${K})`:"/"+K),P&&(K+="?"),s+=K,m+=20,P&&(m+=-8),w&&(m+=-20),V===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",v=i[d-1];h[v.name]=m&&v.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:v,repeatable:w,optional:P}=m,O=v in l?l[v]:"";if(Ft(O)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const V=Ft(O)?O.join("/"):O;if(!V)if(P)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=V}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function iI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function oI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=iI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Df(r))return 1;if(Df(s))return-1}return s.length-r.length}function Df(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const aI={type:0,value:""},cI=/[a-zA-Z0-9_]/;function lI(t){if(!t)return[[]];if(t==="/")return[[aI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:cI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function uI(t,e,n){const r=sI(lI(t.path),n),s=Te(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function hI(t,e){const n=[],r=new Map;e=Mf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const m=!d,v=fI(u);v.aliasOf=d&&d.record;const w=Mf(e,u),P=[v];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of K)P.push(Te({},v,{components:d?d.record.components:v.components,path:N,aliasOf:d?d.record:v}))}let O,V;for(const K of P){const{path:N}=K;if(h&&N[0]!=="/"){const J=h.record.path,ae=J[J.length-1]==="/"?"":"/";K.path=h.record.path+(N&&ae+N)}if(O=uI(K,h,w),d?d.alias.push(O):(V=V||O,V!==O&&V.alias.push(O),m&&u.name&&!xf(O)&&o(u.name)),v.children){const J=v.children;for(let ae=0;ae<J.length;ae++)i(J[ae],O,d&&d.children[ae])}d=d||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return V?()=>{o(V)}:Ks}function o(u){if(Eg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&oI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Tg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!xf(u)&&r.set(u.record.name,u)}function l(u,h){let d,m={},v,w;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw es(1,{location:u});w=d.record.name,m=Te(Vf(h.params,d.keys.filter(V=>!V.optional).map(V=>V.name)),u.params&&Vf(u.params,d.keys.map(V=>V.name))),v=d.stringify(m)}else if("path"in u)v=u.path,d=n.find(V=>V.re.test(v)),d&&(m=d.parse(v),w=d.record.name);else{if(d=h.name?r.get(h.name):n.find(V=>V.re.test(h.path)),!d)throw es(1,{location:u,currentLocation:h});w=d.record.name,m=Te({},h.params,u.params),v=d.stringify(m)}const P=[];let O=d;for(;O;)P.unshift(O.record),O=O.parent;return{name:w,path:v,params:m,matched:P,meta:pI(P)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Vf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function fI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function dI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pI(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function Mf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Tg(t,e){return e.children.some(n=>n===t||Tg(t,n))}const Ig=/#/g,gI=/&/g,mI=/\//g,_I=/=/g,yI=/\?/g,Ag=/\+/g,vI=/%5B/g,EI=/%5D/g,Rg=/%5E/g,wI=/%60/g,Pg=/%7B/g,TI=/%7C/g,Sg=/%7D/g,II=/%20/g;function _u(t){return encodeURI(""+t).replace(TI,"|").replace(vI,"[").replace(EI,"]")}function AI(t){return _u(t).replace(Pg,"{").replace(Sg,"}").replace(Rg,"^")}function hl(t){return _u(t).replace(Ag,"%2B").replace(II,"+").replace(Ig,"%23").replace(gI,"%26").replace(wI,"`").replace(Pg,"{").replace(Sg,"}").replace(Rg,"^")}function RI(t){return hl(t).replace(_I,"%3D")}function PI(t){return _u(t).replace(Ig,"%23").replace(yI,"%3F")}function SI(t){return t==null?"":PI(t).replace(mI,"%2F")}function Ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function CI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ag," "),o=i.indexOf("="),a=Ho(o<0?i:i.slice(0,o)),c=o<0?null:Ho(i.slice(o+1));if(a in e){let l=e[a];Ft(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Lf(t){let e="";for(let n in t){const r=t[n];if(n=RI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ft(r)?r.map(i=>i&&hl(i)):[r&&hl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function bI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ft(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const OI=Symbol(""),Ff=Symbol(""),yu=Symbol(""),Cg=Symbol(""),fl=Symbol("");function Ss(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(es(4,{from:n,to:e})):h instanceof Error?a(h):tI(h)?a(es(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Rc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(kI(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Cn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=LT(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Cn(d,n,r,i,o)()}))}}return s}function kI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Uf(t){const e=Yt(yu),n=Yt(Cg),r=Ge(()=>e.resolve(fn(t.to))),s=Ge(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Zr.bind(null,u));if(d>-1)return d;const m=Bf(c[l-2]);return l>1&&Bf(u)===m&&h[h.length-1].path!==m?h.findIndex(Zr.bind(null,c[l-2])):d}),i=Ge(()=>s.value>-1&&xI(n.params,r.value.params)),o=Ge(()=>s.value>-1&&s.value===n.matched.length-1&&yg(n.params,r.value.params));function a(c={}){return VI(c)?e[fn(t.replace)?"replace":"push"](fn(t.to)).catch(Ks):Promise.resolve()}return{route:r,href:Ge(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const NI=uu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uf,setup(t,{slots:e}){const n=nn(Uf(t)),{options:r}=Yt(yu),s=Ge(()=>({[jf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:lg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),DI=NI;function VI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ft(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jf=(t,e,n)=>t??e??n,MI=uu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Yt(fl),s=Ge(()=>t.route||r.value),i=Yt(Ff,0),o=Ge(()=>{let l=fn(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ge(()=>s.value.matched[o.value]);Ro(Ff,Ge(()=>o.value+1)),Ro(OI,a),Ro(fl,s);const c=_t();return Ln(()=>[c.value,a.value,t.name],([l,u,h],[d,m,v])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Zr(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return $f(n.default,{Component:d,route:l});const m=h.props[u],v=m?m===!0?l.params:typeof m=="function"?m(l):m:null,P=lg(d,Te({},v,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return $f(n.default,{Component:P,route:l})||P}}});function $f(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bg=MI;function LI(t){const e=hI(t.routes,t),n=t.parseQuery||CI,r=t.stringifyQuery||Lf,s=t.history,i=Ss(),o=Ss(),a=Ss(),c=Vp(An);let l=An;Mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ic.bind(null,T=>""+T),h=Ic.bind(null,SI),d=Ic.bind(null,Ho);function m(T,U){let x,z;return Eg(T)?(x=e.getRecordMatcher(T),z=U):z=T,e.addRoute(z,x)}function v(T){const U=e.getRecordMatcher(T);U&&e.removeRoute(U)}function w(){return e.getRoutes().map(T=>T.record)}function P(T){return!!e.getRecordMatcher(T)}function O(T,U){if(U=Te({},U||c.value),typeof T=="string"){const _=Ac(n,T,U.path),E=e.resolve({path:_.path},U),A=s.createHref(_.fullPath);return Te(_,E,{params:d(E.params),hash:Ho(_.hash),redirectedFrom:void 0,href:A})}let x;if("path"in T)x=Te({},T,{path:Ac(n,T.path,U.path).path});else{const _=Te({},T.params);for(const E in _)_[E]==null&&delete _[E];x=Te({},T,{params:h(_)}),U.params=h(U.params)}const z=e.resolve(x,U),pe=T.hash||"";z.params=u(d(z.params));const p=BT(r,Te({},T,{hash:AI(pe),path:z.path})),g=s.createHref(p);return Te({fullPath:p,hash:pe,query:r===Lf?bI(T.query):T.query||{}},z,{redirectedFrom:void 0,href:g})}function V(T){return typeof T=="string"?Ac(n,T,c.value.path):Te({},T)}function K(T,U){if(l!==T)return es(8,{from:U,to:T})}function N(T){return he(T)}function J(T){return N(Te(V(T),{replace:!0}))}function ae(T){const U=T.matched[T.matched.length-1];if(U&&U.redirect){const{redirect:x}=U;let z=typeof x=="function"?x(T):x;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=V(z):{path:z},z.params={}),Te({query:T.query,hash:T.hash,params:"path"in z?{}:T.params},z)}}function he(T,U){const x=l=O(T),z=c.value,pe=T.state,p=T.force,g=T.replace===!0,_=ae(x);if(_)return he(Te(V(_),{state:typeof _=="object"?Te({},pe,_.state):pe,force:p,replace:g}),U||x);const E=x;E.redirectedFrom=U;let A;return!p&&jT(r,z,x)&&(A=es(16,{to:E,from:z}),Ct(z,z,!0,!1)),(A?Promise.resolve(A):re(E,z)).catch(S=>on(S)?on(S,2)?S:le(S):_e(S,E,z)).then(S=>{if(S){if(on(S,2))return he(Te({replace:g},V(S.to),{state:typeof S.to=="object"?Te({},pe,S.to.state):pe,force:p}),U||E)}else S=Je(E,z,!0,g,pe);return Me(E,z,S),S})}function F(T,U){const x=K(T,U);return x?Promise.reject(x):Promise.resolve()}function W(T){const U=rn.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(T):T()}function re(T,U){let x;const[z,pe,p]=FI(T,U);x=Rc(z.reverse(),"beforeRouteLeave",T,U);for(const _ of z)_.leaveGuards.forEach(E=>{x.push(Cn(E,T,U))});const g=F.bind(null,T,U);return x.push(g),Fe(x).then(()=>{x=[];for(const _ of i.list())x.push(Cn(_,T,U));return x.push(g),Fe(x)}).then(()=>{x=Rc(pe,"beforeRouteUpdate",T,U);for(const _ of pe)_.updateGuards.forEach(E=>{x.push(Cn(E,T,U))});return x.push(g),Fe(x)}).then(()=>{x=[];for(const _ of p)if(_.beforeEnter)if(Ft(_.beforeEnter))for(const E of _.beforeEnter)x.push(Cn(E,T,U));else x.push(Cn(_.beforeEnter,T,U));return x.push(g),Fe(x)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),x=Rc(p,"beforeRouteEnter",T,U),x.push(g),Fe(x))).then(()=>{x=[];for(const _ of o.list())x.push(Cn(_,T,U));return x.push(g),Fe(x)}).catch(_=>on(_,8)?_:Promise.reject(_))}function Me(T,U,x){a.list().forEach(z=>W(()=>z(T,U,x)))}function Je(T,U,x,z,pe){const p=K(T,U);if(p)return p;const g=U===An,_=Mr?history.state:{};x&&(z||g?s.replace(T.fullPath,Te({scroll:g&&_&&_.scroll},pe)):s.push(T.fullPath,pe)),c.value=T,Ct(T,U,x,g),le()}let ht;function $t(){ht||(ht=s.listen((T,U,x)=>{if(!Qn.listening)return;const z=O(T),pe=ae(z);if(pe){he(Te(pe,{replace:!0}),z).catch(Ks);return}l=z;const p=c.value;Mr&&QT(bf(p.fullPath,x.delta),Ca()),re(z,p).catch(g=>on(g,12)?g:on(g,2)?(he(g.to,z).then(_=>{on(_,20)&&!x.delta&&x.type===li.pop&&s.go(-1,!1)}).catch(Ks),Promise.reject()):(x.delta&&s.go(-x.delta,!1),_e(g,z,p))).then(g=>{g=g||Je(z,p,!1),g&&(x.delta&&!on(g,8)?s.go(-x.delta,!1):x.type===li.pop&&on(g,20)&&s.go(-1,!1)),Me(z,p,g)}).catch(Ks)}))}let ft=Ss(),de=Ss(),Ee;function _e(T,U,x){le(T);const z=de.list();return z.length?z.forEach(pe=>pe(T,U,x)):console.error(T),Promise.reject(T)}function Nt(){return Ee&&c.value!==An?Promise.resolve():new Promise((T,U)=>{ft.add([T,U])})}function le(T){return Ee||(Ee=!T,$t(),ft.list().forEach(([U,x])=>T?x(T):U()),ft.reset()),T}function Ct(T,U,x,z){const{scrollBehavior:pe}=t;if(!Mr||!pe)return Promise.resolve();const p=!x&&YT(bf(T.fullPath,0))||(z||!x)&&history.state&&history.state.scroll||null;return bi().then(()=>pe(T,U,p)).then(g=>g&&GT(g)).catch(g=>_e(g,T,U))}const Xe=T=>s.go(T);let Ze;const rn=new Set,Qn={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,hasRoute:P,getRoutes:w,resolve:O,options:t,push:N,replace:J,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:Nt,install(T){const U=this;T.component("RouterLink",DI),T.component("RouterView",bg),T.config.globalProperties.$router=U,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>fn(c)}),Mr&&!Ze&&c.value===An&&(Ze=!0,N(s.location).catch(pe=>{}));const x={};for(const pe in An)Object.defineProperty(x,pe,{get:()=>c.value[pe],enumerable:!0});T.provide(yu,U),T.provide(Cg,Np(x)),T.provide(fl,c);const z=T.unmount;rn.add(T),T.unmount=function(){rn.delete(T),rn.size<1&&(l=An,ht&&ht(),ht=null,c.value=An,Ze=!1,Ee=!1),z()}}};function Fe(T){return T.reduce((U,x)=>U.then(()=>W(x)),Promise.resolve())}return Qn}function FI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Zr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Zr(l,c))||s.push(c))}return[n,r,s]}function Og(t){return Jl()?(wp(t),!0):!1}function ts(t){return typeof t=="function"?t():fn(t)}const UI=typeof window<"u"&&typeof document<"u",BI=Object.prototype.toString,jI=t=>BI.call(t)==="[object Object]",kg=()=>{};function $I(t,e){function n(...r){return new Promise((s,i)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(s).catch(i)})}return n}const Ng=t=>t();function qI(t=Ng){const e=_t(!0);function n(){e.value=!1}function r(){e.value=!0}const s=(...i)=>{e.value&&t(...i)};return{isActive:va(e),pause:n,resume:r,eventFilter:s}}function HI(...t){if(t.length!==1)return $E(...t);const e=t[0];return typeof e=="function"?va(FE(()=>({get:e,set:kg}))):_t(e)}function KI(t,e,n={}){const{eventFilter:r=Ng,...s}=n;return Ln(t,$I(r,e),s)}function WI(t,e,n={}){const{eventFilter:r,...s}=n,{eventFilter:i,pause:o,resume:a,isActive:c}=qI(r);return{stop:KI(t,e,{...s,eventFilter:i}),pause:o,resume:a,isActive:c}}function zI(t,e=!0){og()?hu(t):e?t():bi(t)}function GI(t=!1,e={}){const{truthyValue:n=!0,falsyValue:r=!1}=e,s=be(t),i=_t(t);function o(a){if(arguments.length)return i.value=a,i.value;{const c=ts(n);return i.value=i.value===c?ts(r):c,i.value}}return s?o:[i,o]}function Dg(t){var e;const n=ts(t);return(e=n==null?void 0:n.$el)!=null?e:n}const ui=UI?window:void 0;function qf(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=ui):[e,n,r,s]=t,!e)return kg;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d,m)=>(u.addEventListener(h,d,m),()=>u.removeEventListener(h,d,m)),c=Ln(()=>[Dg(e),ts(s)],([u,h])=>{if(o(),!u)return;const d=jI(h)?{...h}:h;i.push(...n.flatMap(m=>r.map(v=>a(u,m,v,d))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return Og(l),l}function QI(){const t=_t(!1);return og()&&hu(()=>{t.value=!0}),t}function YI(t){const e=QI();return Ge(()=>(e.value,!!t()))}function JI(t,e={}){const{window:n=ui}=e,r=YI(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const i=_t(!1),o=l=>{i.value=l.matches},a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",o):s.removeListener(o))},c=sw(()=>{r.value&&(a(),s=n.matchMedia(ts(t)),"addEventListener"in s?s.addEventListener("change",o):s.addListener(o),i.value=s.matches)});return Og(()=>{c(),a(),s=void 0}),i}const uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ho="__vueuse_ssr_handlers__",XI=ZI();function ZI(){return ho in uo||(uo[ho]=uo[ho]||{}),uo[ho]}function Vg(t,e){return XI[t]||e}function eA(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const tA={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Hf="vueuse-storage";function nA(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:l=!1,shallow:u,window:h=ui,eventFilter:d,onError:m=F=>{console.error(F)}}=r,v=(u?Vp:_t)(e);if(!n)try{n=Vg("getDefaultStorage",()=>{var F;return(F=ui)==null?void 0:F.localStorage})()}catch(F){m(F)}if(!n)return v;const w=ts(e),P=eA(w),O=(s=r.serializer)!=null?s:tA[P],{pause:V,resume:K}=WI(v,()=>N(v.value),{flush:i,deep:o,eventFilter:d});return h&&a&&(qf(h,"storage",he),qf(h,Hf,ae)),he(),v;function N(F){try{if(F==null)n.removeItem(t);else{const W=O.write(F),re=n.getItem(t);re!==W&&(n.setItem(t,W),h&&h.dispatchEvent(new CustomEvent(Hf,{detail:{key:t,oldValue:re,newValue:W,storageArea:n}})))}}catch(W){m(W)}}function J(F){const W=F?F.newValue:n.getItem(t);if(W==null)return c&&w!==null&&n.setItem(t,O.write(w)),w;if(!F&&l){const re=O.read(W);return typeof l=="function"?l(re,w):P==="object"&&!Array.isArray(re)?{...w,...re}:re}else return typeof W!="string"?W:O.read(W)}function ae(F){he(F.detail)}function he(F){if(!(F&&F.storageArea!==n)){if(F&&F.key==null){v.value=w;return}if(!(F&&F.key!==t)){V();try{(F==null?void 0:F.newValue)!==O.write(v.value)&&(v.value=J(F))}catch(W){m(W)}finally{F?bi(K):K()}}}}}function rA(t){return JI("(prefers-color-scheme: dark)",t)}function sA(t={}){const{selector:e="html",attribute:n="class",initialValue:r="auto",window:s=ui,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:c,emitAuto:l,disableTransition:u=!0}=t,h={auto:"",light:"light",dark:"dark",...t.modes||{}},d=rA({window:s}),m=Ge(()=>d.value?"dark":"light"),v=c||(o==null?HI(r):nA(o,r,i,{window:s,listenToStorageChanges:a})),w=Ge(()=>v.value==="auto"?m.value:v.value),P=Vg("updateHTMLAttrs",(N,J,ae)=>{const he=typeof N=="string"?s==null?void 0:s.document.querySelector(N):Dg(N);if(!he)return;let F;if(u){F=s.document.createElement("style");const W="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";F.appendChild(document.createTextNode(W)),s.document.head.appendChild(F)}if(J==="class"){const W=ae.split(/\s/g);Object.values(h).flatMap(re=>(re||"").split(/\s/g)).filter(Boolean).forEach(re=>{W.includes(re)?he.classList.add(re):he.classList.remove(re)})}else he.setAttribute(J,ae);u&&(s.getComputedStyle(F).opacity,document.head.removeChild(F))});function O(N){var J;P(e,n,(J=h[N])!=null?J:N)}function V(N){t.onChanged?t.onChanged(N,O):O(N)}Ln(w,V,{flush:"post",immediate:!0}),zI(()=>V(w.value));const K=Ge({get(){return l?v.value:w.value},set(N){v.value=N}});try{return Object.assign(K,{store:v,system:m,state:w})}catch{return K}}function iA(t={}){const{valueDark:e="dark",valueLight:n=""}=t,r=sA({...t,onChanged:(i,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,i==="dark",o,i):o(i)},modes:{dark:e,light:n}});return Ge({get(){return r.value==="dark"},set(i){const o=i?"dark":"light";r.system.value===o?r.value="auto":r.value=o}})}/**
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
 */const xg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},oA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new aA;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cA=function(t){const e=xg(t);return Mg.encodeByteArray(e,!0)},Ko=function(t){return cA(t).replace(/\./g,"")},Lg=function(t){try{return Mg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uA=()=>lA().__FIREBASE_DEFAULTS__,hA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lg(t[1]);return e&&JSON.parse(e)},vu=()=>{try{return uA()||hA()||fA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fg=t=>{var e,n;return(n=(e=vu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dA=t=>{const e=Fg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ug=()=>{var t;return(t=vu())===null||t===void 0?void 0:t.config},Bg=t=>{var e;return(e=vu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class pA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ko(JSON.stringify(n)),Ko(JSON.stringify(o)),a].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function _A(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vA(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EA(){try{return typeof indexedDB=="object"}catch{return!1}}function wA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const TA="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TA,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?IA(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wn(s,a,r)}}function IA(t,e){return t.replace(AA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const AA=/\{\$([^}]+)}/g;function RA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Kf(i)&&Kf(o)){if(!Wo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kf(t){return t!==null&&typeof t=="object"}/**
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
 */function ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ds(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Vs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PA(t,e){const n=new SA(t,e);return n.subscribe.bind(n)}class SA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Pc),s.error===void 0&&(s.error=Pc),s.complete===void 0&&(s.complete=Pc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pc(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nr="[DEFAULT]";/**
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
 */class bA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kA(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OA(t){return t===nr?void 0:t}function kA(t){return t.instantiationMode==="EAGER"}/**
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
 */class NA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const DA={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},VA=ue.INFO,xA={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},MA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eu{constructor(e){this.name=e,this._logLevel=VA,this._logHandler=MA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const LA=(t,e)=>e.some(n=>t instanceof n);let Wf,zf;function FA(){return Wf||(Wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UA(){return zf||(zf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jg=new WeakMap,dl=new WeakMap,$g=new WeakMap,Sc=new WeakMap,wu=new WeakMap;function BA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jg.set(n,t)}).catch(()=>{}),wu.set(e,t),e}function jA(t){if(dl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});dl.set(t,e)}let pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$g.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $A(t){pl=t(pl)}function qA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return $g.set(r,e.sort?e.sort():[e]),Fn(r)}:UA().includes(t)?function(...e){return t.apply(Cc(this),e),Fn(jg.get(this))}:function(...e){return Fn(t.apply(Cc(this),e))}}function HA(t){return typeof t=="function"?qA(t):(t instanceof IDBTransaction&&jA(t),LA(t,FA())?new Proxy(t,pl):t)}function Fn(t){if(t instanceof IDBRequest)return BA(t);if(Sc.has(t))return Sc.get(t);const e=HA(t);return e!==t&&(Sc.set(t,e),wu.set(e,t)),e}const Cc=t=>wu.get(t);function KA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Fn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Fn(o.result),c.oldVersion,c.newVersion,Fn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const WA=["get","getKey","getAll","getAllKeys","count"],zA=["put","add","delete","clear"],bc=new Map;function Gf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||WA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return bc.set(e,i),i}$A(t=>({...t,get:(e,n,r)=>Gf(e,n)||t.get(e,n,r),has:(e,n)=>!!Gf(e,n)||t.has(e,n)}));/**
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
 */class GA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gl="@firebase/app",Qf="0.9.19";/**
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
 */const pr=new Eu("@firebase/app"),YA="@firebase/app-compat",JA="@firebase/analytics-compat",XA="@firebase/analytics",ZA="@firebase/app-check-compat",e0="@firebase/app-check",t0="@firebase/auth",n0="@firebase/auth-compat",r0="@firebase/database",s0="@firebase/database-compat",i0="@firebase/functions",o0="@firebase/functions-compat",a0="@firebase/installations",c0="@firebase/installations-compat",l0="@firebase/messaging",u0="@firebase/messaging-compat",h0="@firebase/performance",f0="@firebase/performance-compat",d0="@firebase/remote-config",p0="@firebase/remote-config-compat",g0="@firebase/storage",m0="@firebase/storage-compat",_0="@firebase/firestore",y0="@firebase/firestore-compat",v0="firebase",E0="10.4.0";/**
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
 */const ml="[DEFAULT]",w0={[gl]:"fire-core",[YA]:"fire-core-compat",[XA]:"fire-analytics",[JA]:"fire-analytics-compat",[e0]:"fire-app-check",[ZA]:"fire-app-check-compat",[t0]:"fire-auth",[n0]:"fire-auth-compat",[r0]:"fire-rtdb",[s0]:"fire-rtdb-compat",[i0]:"fire-fn",[o0]:"fire-fn-compat",[a0]:"fire-iid",[c0]:"fire-iid-compat",[l0]:"fire-fcm",[u0]:"fire-fcm-compat",[h0]:"fire-perf",[f0]:"fire-perf-compat",[d0]:"fire-rc",[p0]:"fire-rc-compat",[g0]:"fire-gcs",[m0]:"fire-gcs-compat",[_0]:"fire-fst",[y0]:"fire-fst-compat","fire-js":"fire-js",[v0]:"fire-js-all"};/**
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
 */const zo=new Map,_l=new Map;function T0(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(_l.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;_l.set(e,t);for(const n of zo.values())T0(n,t);return!0}function Tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const I0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Un=new Oi("app","Firebase",I0);/**
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
 */class A0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=E0;function qg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ml,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(n||(n=Ug()),!n)throw Un.create("no-options");const i=zo.get(s);if(i){if(Wo(n,i.options)&&Wo(r,i.config))return i;throw Un.create("duplicate-app",{appName:s})}const o=new NA(s);for(const c of _l.values())o.addComponent(c);const a=new A0(n,r,o);return zo.set(s,a),a}function Hg(t=ml){const e=zo.get(t);if(!e&&t===ml&&Ug())return qg();if(!e)throw Un.create("no-app",{appName:t});return e}function Bn(t,e,n){var r;let s=(r=w0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}ns(new dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const R0="firebase-heartbeat-database",P0=1,hi="firebase-heartbeat-store";let Oc=null;function Kg(){return Oc||(Oc=KA(R0,P0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hi)}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),Oc}async function S0(t){try{return await(await Kg()).transaction(hi).objectStore(hi).get(Wg(t))}catch(e){if(e instanceof wn)pr.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function Yf(t,e){try{const r=(await Kg()).transaction(hi,"readwrite");await r.objectStore(hi).put(e,Wg(t)),await r.done}catch(n){if(n instanceof wn)pr.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function Wg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const C0=1024,b0=30*24*60*60*1e3;class O0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new N0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=b0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jf(),{heartbeatsToSend:n,unsentEntries:r}=k0(this._heartbeatsCache.heartbeats),s=Ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Jf(){return new Date().toISOString().substring(0,10)}function k0(t,e=C0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class N0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EA()?wA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await S0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xf(t){return Ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function D0(t){ns(new dr("platform-logger",e=>new GA(e),"PRIVATE")),ns(new dr("heartbeat",e=>new O0(e),"PRIVATE")),Bn(gl,Qf,t),Bn(gl,Qf,"esm2017"),Bn("fire-js","")}D0("");var V0="firebase",x0="10.4.0";/**
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
 */Bn(V0,x0,"app");var M0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Iu=Iu||{},ee=M0||self;function ba(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ni(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function L0(t){return Object.prototype.hasOwnProperty.call(t,kc)&&t[kc]||(t[kc]=++F0)}var kc="closure_uid_"+(1e9*Math.random()>>>0),F0=0;function U0(t,e,n){return t.call.apply(t.bind,arguments)}function B0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ot(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=U0:ot=B0,ot.apply(null,arguments)}function fo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Wn(){this.s=this.s,this.o=this.o}var j0=0;Wn.prototype.s=!1;Wn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),j0!=0)&&L0(this)};Wn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Au(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Zf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ba(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var $0=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ee.addEventListener("test",()=>{},e),ee.removeEventListener("test",()=>{},e)}catch{}return t}();function fi(t){return/^[\s\xa0]*$/.test(t)}function Oa(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function zt(t){return Oa().indexOf(t)!=-1}function Ru(t){return Ru[" "](t),t}Ru[" "]=function(){};function q0(t,e){var n=xR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var H0=zt("Opera"),rs=zt("Trident")||zt("MSIE"),Gg=zt("Edge"),yl=Gg||rs,Qg=zt("Gecko")&&!(Oa().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),K0=Oa().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function Yg(){var t=ee.document;return t?t.documentMode:void 0}var vl;e:{var Nc="",Dc=function(){var t=Oa();if(Qg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Gg)return/Edge\/([\d\.]+)/.exec(t);if(rs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(K0)return/WebKit\/(\S+)/.exec(t);if(H0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dc&&(Nc=Dc?Dc[1]:""),rs){var Vc=Yg();if(Vc!=null&&Vc>parseFloat(Nc)){vl=String(Vc);break e}}vl=Nc}var El;if(ee.document&&rs){var ed=Yg();El=ed||parseInt(vl,10)||void 0}else El=void 0;var W0=El;function di(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Qg){e:{try{Ru(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:z0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&di.$.h.call(this)}}Ke(di,at);var z0={2:"touch",3:"pen",4:"mouse"};di.prototype.h=function(){di.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Di="closure_listenable_"+(1e6*Math.random()|0),G0=0;function Q0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++G0,this.fa=this.ia=!1}function ka(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Pu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Y0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Jg(t){const e={};for(const n in t)e[n]=t[n];return e}const td="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<td.length;i++)n=td[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Na(t){this.src=t,this.g={},this.h=0}Na.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Tl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Q0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function wl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=zg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ka(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Su="closure_lm_"+(1e6*Math.random()|0),xc={};function Zg(t,e,n,r,s){if(r&&r.once)return tm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Zg(t,e[i],n,r,s);return null}return n=Ou(n),t&&t[Di]?t.O(e,n,Ni(r)?!!r.capture:!!r,s):em(t,e,n,!1,r,s)}function em(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ni(s)?!!s.capture:!!s,a=bu(t);if(a||(t[Su]=a=new Na(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=J0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)$0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(rm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function J0(){function t(n){return e.call(t.src,t.listener,n)}const e=X0;return t}function tm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)tm(t,e[i],n,r,s);return null}return n=Ou(n),t&&t[Di]?t.P(e,n,Ni(r)?!!r.capture:!!r,s):em(t,e,n,!0,r,s)}function nm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)nm(t,e[i],n,r,s);else r=Ni(r)?!!r.capture:!!r,n=Ou(n),t&&t[Di]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Tl(i,n,r,s),-1<n&&(ka(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=bu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tl(e,n,r,s)),(n=-1<t?e[t]:null)&&Cu(n))}function Cu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Di])wl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(rm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bu(e))?(wl(n,t),n.h==0&&(n.src=null,e[Su]=null)):ka(t)}}}function rm(t){return t in xc?xc[t]:xc[t]="on"+t}function X0(t,e){if(t.fa)t=!0;else{e=new di(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Cu(t),t=n.call(r,e)}return t}function bu(t){return t=t[Su],t instanceof Na?t:null}var Mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ou(t){return typeof t=="function"?t:(t[Mc]||(t[Mc]=function(e){return t.handleEvent(e)}),t[Mc])}function He(){Wn.call(this),this.i=new Na(this),this.S=this,this.J=null}Ke(He,Wn);He.prototype[Di]=!0;He.prototype.removeEventListener=function(t,e,n,r){nm(this,t,e,n,r)};function Qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var s=e;e=new at(r,t),Xg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=po(o,r,!0,e)&&s}if(o=e.g=t,s=po(o,r,!0,e)&&s,s=po(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=po(o,r,!1,e)&&s}He.prototype.N=function(){if(He.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ka(n[r]);delete t.g[e],t.h--}}this.J=null};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function po(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&wl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ku=ee.JSON.stringify;class Z0{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function eR(){var t=Nu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class tR{constructor(){this.h=this.g=null}add(e,n){const r=sm.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var sm=new Z0(()=>new nR,t=>t.reset());class nR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function sR(t){ee.setTimeout(()=>{throw t},0)}let pi,gi=!1,Nu=new tR,im=()=>{const t=ee.Promise.resolve(void 0);pi=()=>{t.then(iR)}};var iR=()=>{for(var t;t=eR();){try{t.h.call(t.g)}catch(n){sR(n)}var e=sm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gi=!1};function Da(t,e){He.call(this),this.h=t||1,this.g=e||ee,this.j=ot(this.qb,this),this.l=Date.now()}Ke(Da,He);M=Da.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&(Du(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Du(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Da.$.N.call(this),Du(this),delete this.g};function Vu(t,e,n){if(typeof t=="function")n&&(t=ot(t,n));else if(t&&typeof t.handleEvent=="function")t=ot(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function om(t){t.g=Vu(()=>{t.g=null,t.i&&(t.i=!1,om(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class oR extends Wn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:om(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(t){Wn.call(this),this.h=t,this.g={}}Ke(mi,Wn);var nd=[];function am(t,e,n,r){Array.isArray(n)||(n&&(nd[0]=n.toString()),n=nd);for(var s=0;s<n.length;s++){var i=Zg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function cm(t){Pu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Cu(e)},t),t.g={}}mi.prototype.N=function(){mi.$.N.call(this),cm(this)};mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Va(){this.g=!0}Va.prototype.Ea=function(){this.g=!1};function aR(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function cR(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+uR(t,n)+(r?" "+r:"")})}function lR(t,e){t.info(function(){return"TIMEOUT: "+e})}Va.prototype.info=function(){};function uR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ku(n)}catch{return e}}var Er={},rd=null;function xa(){return rd=rd||new He}Er.Ta="serverreachability";function lm(t){at.call(this,Er.Ta,t)}Ke(lm,at);function _i(t){const e=xa();Qe(e,new lm(e))}Er.STAT_EVENT="statevent";function um(t,e){at.call(this,Er.STAT_EVENT,t),this.stat=e}Ke(um,at);function mt(t){const e=xa();Qe(e,new um(e,t))}Er.Ua="timingevent";function hm(t,e){at.call(this,Er.Ua,t),this.size=e}Ke(hm,at);function Vi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var Ma={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function xu(){}xu.prototype.h=null;function sd(t){return t.h||(t.h=t.i())}function dm(){}var xi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Mu(){at.call(this,"d")}Ke(Mu,at);function Lu(){at.call(this,"c")}Ke(Lu,at);var Il;function La(){}Ke(La,xu);La.prototype.g=function(){return new XMLHttpRequest};La.prototype.i=function(){return{}};Il=new La;function Mi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new mi(this),this.P=hR,t=yl?125:void 0,this.V=new Da(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new pm}function pm(){this.i=null,this.g="",this.h=!1}var hR=45e3,Al={},Go={};M=Mi.prototype;M.setTimeout=function(t){this.P=t};function Rl(t,e,n){t.L=1,t.v=Ua(gn(e)),t.s=n,t.S=!0,gm(t,null)}function gm(t,e){t.G=Date.now(),Li(t),t.A=gn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Im(n.i,"t",r),t.C=0,n=t.l.J,t.h=new pm,t.g=Hm(t.l,n?e:null,!t.s),0<t.O&&(t.M=new oR(ot(t.Pa,t,t.g),t.O)),am(t.U,t.g,"readystatechange",t.nb),e=t.I?Jg(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),_i(),aR(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&Gt(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=Gt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||yl||this.g&&(this.h.h||this.g.ja()||cd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?_i(3):_i(2)),Fa(this);var n=this.g.da();this.ca=n;t:if(mm(this)){var r=cd(this.g);t="";var s=r.length,i=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),zs(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,cR(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fi(a)){var l=a;break t}}l=null}if(n=l)Br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pl(this,n);else{this.i=!1,this.o=3,mt(12),or(this),zs(this);break e}}this.S?(_m(this,u,o),yl&&this.i&&u==3&&(am(this.U,this.V,"tick",this.mb),this.V.start())):(Br(this.j,this.m,o,null),Pl(this,o)),u==4&&or(this),this.i&&!this.J&&(u==4?Bm(this.l,this):(this.i=!1,Li(this)))}else NR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mt(12)):(this.o=0,mt(13)),or(this),zs(this)}}}catch{}finally{}};function mm(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function _m(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=fR(t,n),s==Go){e==4&&(t.o=4,mt(14),r=!1),Br(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Al){t.o=4,mt(15),Br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Br(t.j,t.m,s,null),Pl(t,s);mm(t)&&s!=Go&&s!=Al&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),qu(e),e.M=!0,mt(11))):(Br(t.j,t.m,n,"[Invalid Chunked Response]"),or(t),zs(t))}M.mb=function(){if(this.g){var t=Gt(this.g),e=this.g.ja();this.C<e.length&&(Fa(this),_m(this,t,e),this.i&&t!=4&&Li(this))}};function fR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Go:(n=Number(e.substring(n,r)),isNaN(n)?Al:(r+=1,r+n>e.length?Go:(e=e.slice(r,r+n),t.C=r+n,e)))}M.cancel=function(){this.J=!0,or(this)};function Li(t){t.Y=Date.now()+t.P,ym(t,t.P)}function ym(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vi(ot(t.lb,t),e)}function Fa(t){t.B&&(ee.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(lR(this.j,this.A),this.L!=2&&(_i(),mt(17)),or(this),this.o=2,zs(this)):ym(this,this.Y-t)};function zs(t){t.l.H==0||t.J||Bm(t.l,t)}function or(t){Fa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Du(t.V),cm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Pl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Sl(n.i,t))){if(!t.K&&Sl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Jo(n),qa(n);else break e;$u(n),mt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Vi(ot(n.ib,n),6e3));if(1>=Pm(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ar(n,11)}else if((t.K||n.g==t)&&Jo(n),!fi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Fu(i,i.h),i.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Re(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=qm(r,r.J?r.pa:null,r.Y),o.K){Sm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Fa(a),Li(a)),r.g=o}else Fm(r);0<n.j.length&&Ha(n)}else l[0]!="stop"&&l[0]!="close"||ar(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ar(n,7):ju(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}_i(4)}catch{}}function dR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ba(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function pR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ba(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function vm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ba(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pR(t),r=dR(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function hr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hr){this.h=t.h,Qo(this,t.j),this.s=t.s,this.g=t.g,Yo(this,t.m),this.l=t.l;var e=t.i,n=new yi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),id(this,n),this.o=t.o}else t&&(e=String(t).match(Em))?(this.h=!1,Qo(this,e[1]||"",!0),this.s=xs(e[2]||""),this.g=xs(e[3]||"",!0),Yo(this,e[4]),this.l=xs(e[5]||"",!0),id(this,e[6]||"",!0),this.o=xs(e[7]||"")):(this.h=!1,this.i=new yi(null,this.h))}hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ms(e,od,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ms(e,od,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ms(n,n.charAt(0)=="/"?yR:_R,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ms(n,ER)),t.join("")};function gn(t){return new hr(t)}function Qo(t,e,n){t.j=n?xs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function id(t,e,n){e instanceof yi?(t.i=e,wR(t.i,t.h)):(n||(e=Ms(e,vR)),t.i=new yi(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Ua(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ms(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,mR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var od=/[#\/\?@]/g,_R=/[#\?:]/g,yR=/[#\?]/g,vR=/[#\?@]/g,ER=/#/g;function yi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zn(t){t.g||(t.g=new Map,t.h=0,t.i&&gR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=yi.prototype;M.add=function(t,e){zn(this),this.i=null,t=gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wm(t,e){zn(t),e=gs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Tm(t,e){return zn(t),e=gs(t,e),t.g.has(e)}M.forEach=function(t,e){zn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};M.ta=function(){zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};M.Z=function(t){zn(this);let e=[];if(typeof t=="string")Tm(this,t)&&(e=e.concat(this.g.get(gs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return zn(this),this.i=null,t=gs(this,t),Tm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Im(t,e,n){wm(t,e),0<n.length&&(t.i=null,t.g.set(gs(t,e),Au(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wR(t,e){e&&!t.j&&(zn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(wm(this,r),Im(this,s,n))},t)),t.j=e}var TR=class{constructor(t,e){this.g=t,this.map=e}};function Am(t){this.l=t||IR,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var IR=10;function Rm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Pm(t){return t.h?1:t.g?t.g.size:0}function Sl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fu(t,e){t.g?t.g.add(e):t.h=e}function Sm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Am.prototype.cancel=function(){if(this.i=Cm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Cm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Au(t.i)}var AR=class{stringify(t){return ee.JSON.stringify(t,void 0)}parse(t){return ee.JSON.parse(t,void 0)}};function RR(){this.g=new AR}function PR(t,e,n){const r=n||"";try{vm(t,function(s,i){let o=s;Ni(s)&&(o=ku(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function SR(t,e){const n=new Va;if(ee.Image){const r=new Image;r.onload=fo(go,n,r,"TestLoadImage: loaded",!0,e),r.onerror=fo(go,n,r,"TestLoadImage: error",!1,e),r.onabort=fo(go,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=fo(go,n,r,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function go(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ba(t){this.l=t.ec||null,this.j=t.ob||!1}Ke(Ba,xu);Ba.prototype.g=function(){return new ja(this.l,this.j)};Ba.prototype.i=function(t){return function(){return t}}({});function ja(t,e){He.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Uu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(ja,He);var Uu=0;M=ja.prototype;M.open=function(t,e){if(this.readyState!=Uu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vi(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=Uu};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function bm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fi(this):vi(this),this.readyState==3&&bm(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Fi(this))};M.Ya=function(t){this.g&&(this.response=t,Fi(this))};M.ka=function(){this.g&&Fi(this)};function Fi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vi(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var CR=ee.JSON.parse;function Ne(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Om,this.L=this.M=!1}Ke(Ne,He);var Om="",bR=/^https?$/i,OR=["POST","PUT"];M=Ne.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Il.g(),this.C=this.u?sd(this.u):sd(Il),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){ad(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ee.FormData&&t instanceof ee.FormData,!(0<=zg(OR,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Dm(this),0<this.B&&((this.L=kR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=Vu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ad(this,i)}};function kR(t){return rs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Iu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function ad(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,km(t),$a(t)}function km(t){t.F||(t.F=!0,Qe(t,"complete"),Qe(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),$a(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$a(this,!0)),Ne.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?Nm(this):this.kb())};M.kb=function(){Nm(this)};function Nm(t){if(t.h&&typeof Iu<"u"&&(!t.C[1]||Gt(t)!=4||t.da()!=2)){if(t.v&&Gt(t)==4)Vu(t.La,0,t);else if(Qe(t,"readystatechange"),Gt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Em)[1]||null;!s&&ee.self&&ee.self.location&&(s=ee.self.location.protocol.slice(0,-1)),r=!bR.test(s?s.toLowerCase():"")}n=r}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var i=2<Gt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",km(t)}}finally{$a(t)}}}}function $a(t,e){if(t.g){Dm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Dm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function Gt(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),CR(e)}};function cd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Om:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function NR(t){const e={};t=(t.g&&2<=Gt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(fi(t[r]))continue;var n=rR(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}Y0(e,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Vm(t){let e="";return Pu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Vm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Cs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xm(t){this.Ga=0,this.j=[],this.l=new Va,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Cs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Cs("baseRetryDelayMs",5e3,t),this.hb=Cs("retryDelaySeedMs",1e4,t),this.eb=Cs("forwardChannelMaxRetries",2,t),this.xa=Cs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Am(t&&t.concurrentRequestLimit),this.Ja=new RR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=xm.prototype;M.ra=8;M.H=1;function ju(t){if(Mm(t),t.H==3){var e=t.W++,n=gn(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),Ui(t,n),e=new Mi(t,t.l,e),e.L=2,e.v=Ua(gn(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon)try{n=ee.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ee.Image&&(new Image().src=e.v,n=!0),n||(e.g=Hm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Li(e)}$m(t)}function qa(t){t.g&&(qu(t),t.g.cancel(),t.g=null)}function Mm(t){qa(t),t.u&&(ee.clearTimeout(t.u),t.u=null),Jo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function Ha(t){if(!Rm(t.i)&&!t.m){t.m=!0;var e=t.Na;pi||im(),gi||(pi(),gi=!0),Nu.add(e,t),t.C=0}}function DR(t,e){return Pm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Vi(ot(t.Na,t,e),jm(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Mi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Jg(i),Xg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Lm(this,s,e),n=gn(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),Ui(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Vm(i)))+"&"+e:this.o&&Bu(n,this.o,i)),Fu(this.i,s),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),s.aa=!0,Rl(s,n,null)):Rl(s,n,e),this.H=2}}else this.H==3&&(t?ld(this,t):this.j.length==0||Rm(this.i)||ld(this))};function ld(t,e){var n;e?n=e.m:n=t.W++;const r=gn(t.I);Re(r,"SID",t.K),Re(r,"RID",n),Re(r,"AID",t.V),Ui(t,r),t.o&&t.s&&Bu(r,t.o,t.s),n=new Mi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Lm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Fu(t.i,n),Rl(n,r,e)}function Ui(t,e){t.na&&Pu(t.na,function(n,r){Re(e,r,n)}),t.h&&vm({},function(n,r){Re(e,r,n)})}function Lm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ot(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{PR(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Fm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;pi||im(),gi||(pi(),gi=!0),Nu.add(e,t),t.A=0}}function $u(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Vi(ot(t.Ma,t),jm(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,Um(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Vi(ot(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,mt(10),qa(this),Um(this))};function qu(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function Um(t){t.g=new Mi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=gn(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),Ui(t,e),t.o&&t.s&&Bu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ua(gn(e)),n.s=null,n.S=!0,gm(n,t)}M.ib=function(){this.v!=null&&(this.v=null,qa(this),$u(this),mt(19))};function Jo(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function Bm(t,e){var n=null;if(t.g==e){Jo(t),qu(t),t.g=null;var r=2}else if(Sl(t.i,e))n=e.F,Sm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=xa(),Qe(r,new hm(r,n)),Ha(t)}else Fm(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&DR(t,e)||r==2&&$u(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ar(t,5);break;case 4:ar(t,10);break;case 3:ar(t,6);break;default:ar(t,2)}}}function jm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ar(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ot(t.pb,t);n||(n=new hr("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Qo(n,"https"),Ua(n)),SR(n.toString(),r)}else mt(2);t.H=0,t.h&&t.h.za(e),$m(t),Mm(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),mt(2)):(this.l.info("Failed to ping google.com"),mt(1))};function $m(t){if(t.H=0,t.ma=[],t.h){const e=Cm(t.i);(e.length!=0||t.j.length!=0)&&(Zf(t.ma,e),Zf(t.ma,t.j),t.i.i.length=0,Au(t.j),t.j.length=0),t.h.ya()}}function qm(t,e,n){var r=n instanceof hr?gn(n):new hr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Yo(r,r.m);else{var s=ee.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new hr(null);r&&Qo(i,r),e&&(i.g=e),s&&Yo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Re(r,n,e),Re(r,"VER",t.ra),Ui(t,r),r}function Hm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ne(new Ba({ob:!0})):new Ne(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function Km(){}M=Km.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Xo(){if(rs&&!(10<=Number(W0)))throw Error("Environmental error: no available transport.")}Xo.prototype.g=function(t,e){return new St(t,e)};function St(t,e){He.call(this),this.g=new xm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!fi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ms(this)}Ke(St,He);St.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;mt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=qm(t,null,t.Y),Ha(t)};St.prototype.close=function(){ju(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ku(t),t=n);e.j.push(new TR(e.fb++,t)),e.H==3&&Ha(e)};St.prototype.N=function(){this.g.h=null,delete this.j,ju(this.g),delete this.g,St.$.N.call(this)};function Wm(t){Mu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(Wm,Mu);function zm(){Lu.call(this),this.status=1}Ke(zm,Lu);function ms(t){this.g=t}Ke(ms,Km);ms.prototype.Ba=function(){Qe(this.g,"a")};ms.prototype.Aa=function(t){Qe(this.g,new Wm(t))};ms.prototype.za=function(t){Qe(this.g,new zm)};ms.prototype.ya=function(){Qe(this.g,"b")};function VR(){this.blockSize=-1}function Ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ke(Ut,VR);Ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Lc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ut.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Lc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Lc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Lc(this,r),s=0;break}}this.h=s,this.i+=e};Ut.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ie(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var xR={};function Hu(t){return-128<=t&&128>t?q0(t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function Qt(t){if(isNaN(t)||!isFinite(t))return Hr;if(0>t)return ze(Qt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cl;return new Ie(e,0)}function Gm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ze(Gm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Qt(Math.pow(e,8)),r=Hr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Qt(Math.pow(e,i)),r=r.R(i).add(Qt(o))):(r=r.R(n),r=r.add(Qt(o)))}return r}var Cl=4294967296,Hr=Hu(0),bl=Hu(1),ud=Hu(16777216);M=Ie.prototype;M.ea=function(){if(kt(this))return-ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cl+r)*e,e*=Cl}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ln(this))return"0";if(kt(this))return"-"+ze(this).toString(t);for(var e=Qt(Math.pow(t,6)),n=this,r="";;){var s=ea(n,e).g;n=Zo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,ln(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ln(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kt(t){return t.h==-1}M.X=function(t){return t=Zo(this,t),kt(t)?-1:ln(t)?0:1};function ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ie(n,~t.h).add(bl)}M.abs=function(){return kt(this)?ze(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function Zo(t,e){return t.add(ze(e))}M.R=function(t){if(ln(this)||ln(t))return Hr;if(kt(this))return kt(t)?ze(this).R(ze(t)):ze(ze(this).R(t));if(kt(t))return ze(this.R(ze(t)));if(0>this.X(ud)&&0>t.X(ud))return Qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,mo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,mo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,mo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,mo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ie(n,0)};function mo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function bs(t,e){this.g=t,this.h=e}function ea(t,e){if(ln(e))throw Error("division by zero");if(ln(t))return new bs(Hr,Hr);if(kt(t))return e=ea(ze(t),e),new bs(ze(e.g),ze(e.h));if(kt(e))return e=ea(t,ze(e)),new bs(ze(e.g),e.h);if(30<t.g.length){if(kt(t)||kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=bl,r=e;0>=r.X(t);)n=hd(n),r=hd(r);var s=Dr(n,1),i=Dr(r,1);for(r=Dr(r,2),n=Dr(n,2);!ln(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Dr(r,1),n=Dr(n,1)}return e=Zo(t,s.R(e)),new bs(s,e)}for(s=Hr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Qt(n),o=i.R(e);kt(o)||0<o.X(t);)n-=r,i=Qt(n),o=i.R(e);ln(i)&&(i=bl),s=s.add(i),t=Zo(t,o)}return new bs(s,t)}M.gb=function(t){return ea(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ie(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ie(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ie(n,this.h^t.h)};function hd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ie(n,t.h)}function Dr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ie(s,t.h)}Xo.prototype.createWebChannel=Xo.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;Ma.NO_ERROR=0;Ma.TIMEOUT=8;Ma.HTTP_ERROR=6;fm.COMPLETE="complete";dm.EventType=xi;xi.OPEN="a";xi.CLOSE="b";xi.ERROR="c";xi.MESSAGE="d";He.prototype.listen=He.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;Ut.prototype.digest=Ut.prototype.l;Ut.prototype.reset=Ut.prototype.reset;Ut.prototype.update=Ut.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=Qt;Ie.fromString=Gm;var MR=function(){return new Xo},LR=function(){return xa()},Fc=Ma,FR=fm,UR=Er,fd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_o=dm,BR=Ne,jR=Ut,Kr=Ie;const dd="@firebase/firestore";/**
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
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let _s="10.4.0";/**
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
 */const gr=new Eu("@firebase/firestore");function Os(){return gr.logLevel}function q(t,...e){if(gr.logLevel<=ue.DEBUG){const n=e.map(Ku);gr.debug(`Firestore (${_s}): ${t}`,...n)}}function mn(t,...e){if(gr.logLevel<=ue.ERROR){const n=e.map(Ku);gr.error(`Firestore (${_s}): ${t}`,...n)}}function ss(t,...e){if(gr.logLevel<=ue.WARN){const n=e.map(Ku);gr.warn(`Firestore (${_s}): ${t}`,...n)}}function Ku(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function Se(t,e){t||Z()}function se(t,e){return t}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Qm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $R{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class qR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HR{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new Qm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new tt(e)}}class KR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class WR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new KR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new zR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function QR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ym{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=QR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function is(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Le(0,0))}static max(){return new te(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ei{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ei.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ei?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends Ei{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const YR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Ei{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return YR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new B(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new B(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Pe.fromString(e))}static fromName(e){return new Q(Pe.fromString(e).popFirst(5))}static empty(){return new Q(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Pe(e.slice()))}}function JR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new qn(s,Q.empty(),e)}function XR(t){return new qn(t.readTime,t.key,-1)}class qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qn(te.min(),Q.empty(),-1)}static max(){return new qn(te.max(),Q.empty(),-1)}}function ZR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const eP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Bi(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==eP)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(s=>s?b.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new b((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new b((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ji(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Wu.ae=-1;function Ka(t){return t==null}function ta(t){return t===0&&1/t==-1/0}function nP(t){return typeof t=="number"&&Number.isInteger(t)&&!ta(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function pd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Jm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yo(this.root,e,this.comparator,!0)}}class yo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gd(this.data.getIterator())}getIteratorFrom(e){return new gd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class gd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new ct(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Xm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Xm("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const rP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(Se(!!t),typeof t=="string"){let e=0;const n=rP.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */function zu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gu(t){const e=t.mapValue.fields.__previous_value__;return zu(e)?Gu(e):e}function wi(t){const e=Hn(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class sP{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ti&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zu(t)?4:iP(t)?9007199254740991:10:Z()}function tn(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wi(t).isEqual(wi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hn(s.timestampValue),a=Hn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return mr(s.bytesValue).isEqual(mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),a=Ve(i.doubleValue);return o===a?ta(o)===ta(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(pd(o)!==pd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!tn(o[c],a[c])))return!1;return!0}(t,e);default:return Z()}}function Ii(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ve(i.integerValue||i.doubleValue),c=Ve(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return md(t.timestampValue,e.timestampValue);case 4:return md(wi(t),wi(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const a=mr(i),c=mr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ve(a[l],c[l]);if(u!==0)return u}return ve(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(Ve(i.latitude),Ve(o.latitude));return a!==0?a:ve(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=os(a[l],c[l]);if(u)return u}return ve(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===vo.mapValue&&o===vo.mapValue)return 0;if(i===vo.mapValue)return 1;if(o===vo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ve(c[h],u[h]);if(d!==0)return d;const m=os(a[c[h]],l[u[h]]);if(m!==0)return m}return ve(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Z()}}function md(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Hn(t),r=Hn(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function as(t){return Ol(t)}function Ol(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ol(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ol(n.fields[o])}`;return s+"}"}(t.mapValue):Z()}function _d(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kl(t){return!!t&&"integerValue"in t}function Qu(t){return!!t&&"arrayValue"in t}function yd(t){return!!t&&"nullValue"in t}function vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function So(t){return!!t&&"mapValue"in t}function Gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!So(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Gs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());So(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];So(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){wr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(Gs(this.value))}}function Zm(t){const e=[];return wr(t.fields,(n,r)=>{const s=new st([n]);if(So(r)){const i=Zm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Pt(e)}/**
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
 */class nt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new nt(e,0,te.min(),te.min(),te.min(),Et.empty(),0)}static newFoundDocument(e,n,r,s){return new nt(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new nt(e,2,n,te.min(),te.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,te.min(),te.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class na{constructor(e,n){this.position=e,this.inclusive=n}}function Ed(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=os(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function oP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class e_{}class xe extends e_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cP(e,n,r):n==="array-contains"?new hP(e,r):n==="in"?new fP(e,r):n==="not-in"?new dP(e,r):n==="array-contains-any"?new pP(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lP(e,r):new uP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(os(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Bt extends e_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Bt(e,n)}matches(e){return t_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function t_(t){return t.op==="and"}function n_(t){return aP(t)&&t_(t)}function aP(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function Nl(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+as(t.value);if(n_(t))return t.filters.map(e=>Nl(e)).join(",");{const e=t.filters.map(n=>Nl(n)).join(",");return`${t.op}(${e})`}}function r_(t,e){return t instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&tn(r.value,s.value)}(t,e):t instanceof Bt?function(r,s){return s instanceof Bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&r_(o,s.filters[a]),!0):!1}(t,e):void Z()}function s_(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`}(t):t instanceof Bt?function(n){return n.op.toString()+" {"+n.getFilters().map(s_).join(" ,")+"}"}(t):"Filter"}class cP extends xe{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class lP extends xe{constructor(e,n){super(e,"in",n),this.keys=i_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uP extends xe{constructor(e,n){super(e,"not-in",n),this.keys=i_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function i_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class hP extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qu(n)&&Ii(n.arrayValue,this.value)}}class fP extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ii(this.value.arrayValue,n)}}class dP extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ii(this.value.arrayValue,n)}}class pP extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ii(this.value.arrayValue,r))}}/**
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
 */class gP{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Td(t,e=null,n=[],r=[],s=null,i=null,o=null){return new gP(t,e,n,r,s,i,o)}function Yu(t){const e=se(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>as(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>as(r)).join(",")),e.he=n}return e.he}function Ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!r_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wd(t.startAt,e.startAt)&&wd(t.endAt,e.endAt)}function Dl(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class $i{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function mP(t,e,n,r,s,i,o,a){return new $i(t,e,n,r,s,i,o,a)}function Xu(t){return new $i(t)}function Id(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function o_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function a_(t){return t.collectionGroup!==null}function Ys(t){const e=se(t);if(e.Pe===null){e.Pe=[];const n=Zu(e),r=o_(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Qs(n)),e.Pe.push(new Qs(st.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Qs(st.keyField(),i))}}}return e.Pe}function Jt(t){const e=se(t);return e.Ie||(e.Ie=_P(e,Ys(t))),e.Ie}function _P(t,e){if(t.limitType==="F")return Td(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qs(s.field,i)});const n=t.endAt?new na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new na(t.startAt.position,t.startAt.inclusive):null;return Td(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vl(t,e){e.getFirstInequalityField(),Zu(t);const n=t.filters.concat([e]);return new $i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xl(t,e,n){return new $i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wa(t,e){return Ju(Jt(t),Jt(e))&&t.limitType===e.limitType}function c_(t){return`${Yu(Jt(t))}|lt:${t.limitType}`}function Lr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>s_(s)).join(", ")}]`),Ka(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>as(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>as(s)).join(",")),`Target(${r})`}(Jt(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ys(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Ed(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ys(r),s)||r.endAt&&!function(o,a,c){const l=Ed(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ys(r),s))}(t,e)}function yP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function l_(t){return(e,n)=>{let r=!1;for(const s of Ys(t)){const i=vP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function vP(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?os(c,l):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Jm(this.inner)}size(){return this.innerSize}}/**
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
 */const EP=new Oe(Q.comparator);function _n(){return EP}const u_=new Oe(Q.comparator);function Ls(...t){let e=u_;for(const n of t)e=e.insert(n.key,n);return e}function h_(t){let e=u_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Js()}function f_(){return Js()}function Js(){return new ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const wP=new Oe(Q.comparator),TP=new ct(Q.comparator);function ce(...t){let e=TP;for(const n of t)e=e.add(n);return e}const IP=new ct(ve);function AP(){return IP}/**
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
 */function d_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ta(e)?"-0":e}}function p_(t){return{integerValue:""+t}}function RP(t,e){return nP(e)?p_(e):d_(t,e)}/**
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
 */class Ga{constructor(){this._=void 0}}function PP(t,e,n){return t instanceof ra?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zu(i)&&(i=Gu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ai?m_(t,e):t instanceof Ri?__(t,e):function(s,i){const o=g_(s,i),a=Ad(o)+Ad(s.Te);return kl(o)&&kl(s.Te)?p_(a):d_(s.serializer,a)}(t,e)}function SP(t,e,n){return t instanceof Ai?m_(t,e):t instanceof Ri?__(t,e):n}function g_(t,e){return t instanceof sa?function(r){return kl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ra extends Ga{}class Ai extends Ga{constructor(e){super(),this.elements=e}}function m_(t,e){const n=y_(e);for(const r of t.elements)n.some(s=>tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ri extends Ga{constructor(e){super(),this.elements=e}}function __(t,e){let n=y_(e);for(const r of t.elements)n=n.filter(s=>!tn(s,r));return{arrayValue:{values:n}}}class sa extends Ga{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Ad(t){return Ve(t.integerValue||t.doubleValue)}function y_(t){return Qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function CP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ai&&s instanceof Ai||r instanceof Ri&&s instanceof Ri?is(r.elements,s.elements,tn):r instanceof sa&&s instanceof sa?tn(r.Te,s.Te):r instanceof ra&&s instanceof ra}(t.transform,e.transform)}class bP{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qa{}function v_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eh(t.key,Lt.none()):new qi(t.key,t.data,Lt.none());{const n=t.data,r=Et.empty();let s=new ct(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Gn(t.key,r,new Pt(s.toArray()),Lt.none())}}function OP(t,e,n){t instanceof qi?function(s,i,o){const a=s.value.clone(),c=Pd(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Gn?function(s,i,o){if(!Co(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Pd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(E_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xs(t,e,n,r){return t instanceof qi?function(i,o,a,c){if(!Co(i.precondition,o))return a;const l=i.value.clone(),u=Sd(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gn?function(i,o,a,c){if(!Co(i.precondition,o))return a;const l=Sd(i.fieldTransforms,c,o),u=o.data;return u.setAll(E_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Co(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function kP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=g_(r.transform,s||null);i!=null&&(n===null&&(n=Et.empty()),n.set(r.field,i))}return n||null}function Rd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&is(r,s,(i,o)=>CP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qi extends Qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gn extends Qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function E_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pd(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,SP(o,a,n[s]))}return r}function Sd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,PP(i,o,e))}return r}class eh extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class NP extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class DP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=f_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=v_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(n,r)=>Rd(n,r))&&is(this.baseMutations,e.baseMutations,(n,r)=>Rd(n,r))}}class th{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=function(){return wP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new th(e,n,r,s)}}/**
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
 */class VP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,fe;function MP(t){switch(t){default:return Z();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function w_(t){if(t===void 0)return mn("GRPC error has no .code"),R.UNKNOWN;switch(t){case De.OK:return R.OK;case De.CANCELLED:return R.CANCELLED;case De.UNKNOWN:return R.UNKNOWN;case De.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case De.INTERNAL:return R.INTERNAL;case De.UNAVAILABLE:return R.UNAVAILABLE;case De.UNAUTHENTICATED:return R.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case De.NOT_FOUND:return R.NOT_FOUND;case De.ALREADY_EXISTS:return R.ALREADY_EXISTS;case De.PERMISSION_DENIED:return R.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case De.ABORTED:return R.ABORTED;case De.OUT_OF_RANGE:return R.OUT_OF_RANGE;case De.UNIMPLEMENTED:return R.UNIMPLEMENTED;case De.DATA_LOSS:return R.DATA_LOSS;default:return Z()}}(fe=De||(De={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function LP(){return new TextEncoder}/**
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
 */const FP=new Kr([4294967295,4294967295],0);function Cd(t){const e=LP().encode(t),n=new jR;return n.update(e),new Uint8Array(n.digest())}function bd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([s,i],0)]}class nh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fs(`Invalid padding: ${n}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Kr.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Kr.fromNumber(r)));return s.compare(FP)===1&&(s=new Kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Cd(e),[r,s]=bd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new nh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Cd(e),[r,s]=bd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Hi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ya(te.min(),s,new Oe(ve),_n(),ce())}}class Hi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Hi(r,n,ce(),ce(),ce())}}/**
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
 */class bo{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class T_{constructor(e,n){this.targetId=e,this.ye=n}}class I_{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Od{constructor(){this.we=0,this.Se=Nd(),this.be=ut.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=ce(),n=ce(),r=ce();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z()}}),new Hi(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Nd()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class UP{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=_n(),this.Ue=kd(),this.We=new Oe(ve)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Dl(i))if(r===0){const o=new Q(i.path);this.je(n,o,nt.newNoDocument(o,te.min()))}else Se(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=mr(r).toUint8Array()}catch(c){if(c instanceof Xm)return ss("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new nh(o,s,i)}catch(c){return ss(c instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Dl(a.target)){const c=new Q(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,nt.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=ce();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Ya(e,n,this.We,this.$e,r);return this.$e=_n(),this.Ue=kd(),this.We=new Oe(ve),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Od,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ct(ve),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Od),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function kd(){return new Oe(Q.comparator)}function Nd(){return new Oe(Q.comparator)}const BP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$P=(()=>({and:"AND",or:"OR"}))();class qP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ml(t,e){return t.useProto3Json||Ka(e)?e:{value:e}}function ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function A_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function HP(t,e){return ia(t,e.toTimestamp())}function Xt(t){return Se(!!t),te.fromTimestamp(function(n){const r=Hn(n);return new Le(r.seconds,r.nanos)}(t))}function rh(t,e){return function(r){return new Pe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function R_(t){const e=Pe.fromString(t);return Se(b_(e)),e}function Ll(t,e){return rh(t.databaseId,e.path)}function Uc(t,e){const n=R_(e);if(n.get(1)!==t.databaseId.projectId)throw new B(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(P_(n))}function Fl(t,e){return rh(t.databaseId,e)}function KP(t){const e=R_(t);return e.length===4?Pe.emptyPath():P_(e)}function Ul(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function P_(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dd(t,e,n){return{name:Ll(t,e),fields:n.value.mapValue.fields}}function WP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Se(u===void 0||typeof u=="string"),ut.fromBase64String(u||"")):(Se(u===void 0||u instanceof Uint8Array),ut.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:w_(l.code);return new B(u,l.message||"")}(o);n=new I_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Uc(t,r.document.name),i=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):te.min(),a=new Et({mapValue:{fields:r.document.fields}}),c=nt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new bo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Uc(t,r.document),i=r.readTime?Xt(r.readTime):te.min(),o=nt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Uc(t,r.document),i=r.removedTargetIds||[];n=new bo([],i,s,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new xP(s,i),a=r.targetId;n=new T_(a,o)}}return n}function zP(t,e){let n;if(e instanceof qi)n={update:Dd(t,e.key,e.value)};else if(e instanceof eh)n={delete:Ll(t,e.key)};else if(e instanceof Gn)n={update:Dd(t,e.key,e.data),updateMask:nS(e.fieldMask)};else{if(!(e instanceof NP))return Z();n={verify:Ll(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ra)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ai)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ri)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:HP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function GP(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Xt(s.updateTime):Xt(i);return o.isEqual(te.min())&&(o=Xt(i)),new bP(o,s.transformResults||[])}(n,e))):[]}function QP(t,e){return{documents:[Fl(t,e.path)]}}function YP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return C_(Bt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Fr(h.field),direction:ZP(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ml(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function JP(t){let e=KP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=S_(h);return d instanceof Bt&&n_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Qs(Ur(v.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ka(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new na(m,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,m=h.values||[];return new na(m,d)}(n.endAt)),mP(e,s,o,i,a,"F",c,l)}function XP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function S_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ur(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ur(n.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(n.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ur(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(Ur(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bt.create(n.compositeFilter.filters.map(r=>S_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function ZP(t){return BP[t]}function eS(t){return jP[t]}function tS(t){return $P[t]}function Fr(t){return{fieldPath:t.canonicalString()}}function Ur(t){return st.fromServerFormat(t.fieldPath)}function C_(t){return t instanceof xe?function(n){if(n.op==="=="){if(vd(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NAN"}};if(yd(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vd(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NAN"}};if(yd(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(n.field),op:eS(n.op),value:n.value}}}(t):t instanceof Bt?function(n){const r=n.getFilters().map(s=>C_(s));return r.length===1?r[0]:{compositeFilter:{op:tS(n.op),filters:r}}}(t):Z()}function nS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function b_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Dn{constructor(e,n,r,s,i=te.min(),o=te.min(),a=ut.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rS{constructor(e){this.ht=e}}function sS(t){const e=JP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xl(e,e.limit,"L"):e}/**
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
 */class iS{constructor(){this.an=new oS}addToCollectionParentIndex(e,n){return this.an.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(qn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class oS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(Pe.comparator)).toArray()}}/**
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
 */class cs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new cs(0)}static Ln(){return new cs(-1)}}/**
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
 */class aS{constructor(){this.changes=new ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class lS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Xs(r.mutation,s,Pt.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ls();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=_n();const o=Js(),a=function(){return Js()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Gn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Xs(u.mutation,l,u.mutation.getFieldMask(),Le.now())):o.set(l.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new cS(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Js();let s=new Oe((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Pt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ce()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=f_();u.forEach(d=>{if(!i.has(d)){const m=v_(n.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):a_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(cr());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:h_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=Ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ls();return this.indexManager.getCollectionParents(e,i).next(a=>b.forEach(a,c=>{const l=function(h,d){return new $i(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,nt.newInvalidDocument(u)))});let a=Ls();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Xs(u.mutation,l,Pt.empty(),Le.now()),za(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class uS{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return b.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:sS(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),b.resolve()}}/**
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
 */class hS{constructor(){this.overlays=new Oe(Q.comparator),this.Pr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=cr(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Oe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=cr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=cr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return b.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VP(n,r));let i=this.Pr.get(n);i===void 0&&(i=ce(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
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
 */class sh{constructor(){this.Ir=new ct(Be.dr),this.Tr=new ct(Be.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Be(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new Q(new Pe([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new Q(new Pe([])),r=new Be(n,e),s=new Be(n,e+1);let i=ce();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return Q.comparator(e.key,n.key)||ve(e.yr,n.yr)}static Er(e,n){return ve(e.yr,n.yr)||Q.comparator(e.key,n.key)}}/**
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
 */class fS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new ct(Be.dr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DP(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new Be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(ve);return n.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new Be(new Q(i),0);let a=new ct(ve);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.yr)),!0)},o),b.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return b.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Be(n,0),s=this.Sr.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class dS{constructor(e){this.Fr=e,this.docs=function(){return new Oe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=_n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=_n();const o=n.path,a=new Q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||ZR(XR(u),r)<=0||(s.has(u.key)||za(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z()}Mr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pS(this)}getSize(e){return b.resolve(this.size)}}class pS extends aS{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class gS{constructor(e){this.persistence=e,this.Or=new ys(n=>Yu(n),Ju),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Nr=0,this.Br=new sh,this.targetCount=0,this.Lr=cs.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),b.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new cs(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Qn(n),b.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
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
 */class mS{constructor(e,n){this.kr={},this.overlays={},this.qr=new Wu(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new gS(this),this.indexManager=new iS,this.remoteDocumentCache=function(s){return new dS(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new rS(n),this.Ur=new uS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new fS(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new _S(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return b.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class _S extends tP{constructor(e){super(),this.currentSequenceNumber=e}}class ih{constructor(e){this.persistence=e,this.jr=new sh,this.Hr=null}static Jr(e){return new ih(e)}get Yr(){if(this.Hr)return this.Hr;throw Z()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),b.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Yr,r=>{const s=Q.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return b.or([()=>b.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class oh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new oh(e,n.fromCache,r,s)}}/**
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
 */class yS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class vS{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new yS;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(Os()<=ue.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Lr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),b.resolve()):(Os()<=ue.DEBUG&&q("QueryEngine","Query:",Lr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(Os()<=ue.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Lr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(n))):b.resolve())}Hi(e,n){if(Id(n))return b.resolve(null);let r=Jt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=xl(n,null,"F"),r=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,xl(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,s){return Id(n)||s.isEqual(te.min())?b.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?b.resolve(null):(Os()<=ue.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lr(n)),this.ts(e,o,n,JR(s,-1)).next(a=>a))})}Xi(e,n){let r=new ct(l_(e));return n.forEach((s,i)=>{za(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return Os()<=ue.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Lr(n)),this.ji.getDocumentsMatchingQuery(e,n,qn.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class ES{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new Oe(ve),this.ss=new ys(i=>Yu(i),Ju),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lS(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function wS(t,e,n,r){return new ES(t,e,n,r)}async function O_(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ce();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function TS(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let m=b.resolve();return d.forEach(v=>{m=m.next(()=>u.getEntry(c,v)).next(w=>{const P=l.docVersions.get(v);Se(P!==null),w.version.compareTo(P)<0&&(h.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ce();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function k_(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function IS(t,e){const n=se(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(ut.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(w,P,O){return w.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(d,m,u)&&a.push(n.Kr.updateTargetData(i,m))});let c=_n(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(AS(i,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(te.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.rs=s,i))}function AS(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=_n();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:s}})}function RS(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function PS(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new Dn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Bl(t,e,n){const r=se(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ji(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function Vd(t,e,n){const r=se(t);let s=te.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=se(c),d=h.ss.get(u);return d!==void 0?b.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,Jt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:ce())).next(a=>(SS(r,yP(e),a),{documents:a,Ps:i})))}function SS(t,e,n){let r=t.os.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class xd{constructor(){this.activeTargetIds=AP()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CS{constructor(){this.ro=new xd,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new xd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bS{so(e){}shutdown(){}}/**
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
 */class Md{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Eo=null;function Bc(){return Eo===null?Eo=function(){return 268435456+Math.round(2147483648*Math.random())}():Eo++,"0x"+Eo.toString(16)}/**
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
 */const OS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class kS{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const et="WebChannelConnection";class NS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=Bc(),c=this.Do(n,r);q("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,i,o),this.vo(n,c,l,s).then(u=>(q("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ss("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=OS[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Bc();return new Promise((o,a)=>{const c=new BR;c.setWithCredentials(!0),c.listenOnce(FR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fc.NO_ERROR:const u=c.getResponseJson();q(et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Fc.TIMEOUT:q(et,`RPC '${e}' ${i} timed out`),a(new B(R.DEADLINE_EXCEEDED,"Request time out"));break;case Fc.HTTP_ERROR:const h=c.getStatus();if(q(et,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(P){const O=P.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(O)>=0?O:R.UNKNOWN}(m.status);a(new B(v,m.message))}else a(new B(R.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new B(R.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{q(et,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);q(et,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const s=Bc(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=MR(),a=LR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");q(et,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,m=!1;const v=new kS({ho:P=>{m?q(et,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(d||(q(et,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),q(et,`RPC '${e}' stream ${s} sending:`,P),h.send(P))},Po:()=>h.close()}),w=(P,O,V)=>{P.listen(O,K=>{try{V(K)}catch(N){setTimeout(()=>{throw N},0)}})};return w(h,_o.EventType.OPEN,()=>{m||q(et,`RPC '${e}' stream ${s} transport opened.`)}),w(h,_o.EventType.CLOSE,()=>{m||(m=!0,q(et,`RPC '${e}' stream ${s} transport closed`),v.mo())}),w(h,_o.EventType.ERROR,P=>{m||(m=!0,ss(et,`RPC '${e}' stream ${s} transport errored:`,P),v.mo(new B(R.UNAVAILABLE,"The operation could not be completed")))}),w(h,_o.EventType.MESSAGE,P=>{var O;if(!m){const V=P.data[0];Se(!!V);const K=V,N=K.error||((O=K[0])===null||O===void 0?void 0:O.error);if(N){q(et,`RPC '${e}' stream ${s} received error:`,N);const J=N.status;let ae=function(W){const re=De[W];if(re!==void 0)return w_(re)}(J),he=N.message;ae===void 0&&(ae=R.INTERNAL,he="Unknown error status: "+J+" with message "+N.message),m=!0,v.mo(new B(ae,he)),h.close()}else q(et,`RPC '${e}' stream ${s} received:`,V),v.fo(V)}}),w(a,UR.STAT_EVENT,P=>{P.stat===fd.PROXY?q(et,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===fd.NOPROXY&&q(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.Vo()},0),v}}function jc(){return typeof document<"u"?document:null}/**
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
 */function Ja(t){return new qP(t,!0)}/**
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
 */class N_{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class D_{constructor(e,n,r,s,i,o,a,c){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new N_(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new B(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DS extends D_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=WP(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Xt(o.readTime):te.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=Ul(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Dl(c)?{documents:QP(i,c)}:{query:YP(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=A_(i,o.resumeToken);const l=Ml(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=ia(i,o.snapshotVersion.toTimestamp());const l=Ml(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=XP(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=Ul(this.serializer),n.removeTarget=e,this.n_(n)}}class VS extends D_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=GP(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.T_(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Ul(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>zP(this.serializer,r))};this.n_(n)}}/**
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
 */class xS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new B(R.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(R.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(R.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class MS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(mn(n),this.p_=!1):q("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class LS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{Tr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=se(c);l.F_.add(4),await Ki(l),l.O_.set("Unknown"),l.F_.delete(4),await Xa(l)}(this))})}),this.O_=new MS(r,s)}}async function Xa(t){if(Tr(t))for(const e of t.M_)await e(!0)}async function Ki(t){for(const e of t.M_)await e(!1)}function V_(t,e){const n=se(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),lh(n)?ch(n):vs(n).Yo()&&ah(n,e))}function x_(t,e){const n=se(t),r=vs(n);n.v_.delete(e),r.Yo()&&M_(n,e),n.v_.size===0&&(r.Yo()?r.e_():Tr(n)&&n.O_.set("Unknown"))}function ah(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vs(t).l_(e)}function M_(t,e){t.N_.Le(e),vs(t).h_(e)}function ch(t){t.N_=new UP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),vs(t).start(),t.O_.y_()}function lh(t){return Tr(t)&&!vs(t).Jo()&&t.v_.size>0}function Tr(t){return se(t).F_.size===0}function L_(t){t.N_=void 0}async function FS(t){t.v_.forEach((e,n)=>{ah(t,e)})}async function US(t,e){L_(t),lh(t)?(t.O_.b_(e),ch(t)):t.O_.set("Unknown")}async function BS(t,e,n){if(t.O_.set("Online"),e instanceof I_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oa(t,r)}else if(e instanceof bo?t.N_.Ge(e):e instanceof T_?t.N_.Xe(e):t.N_.He(e),!n.isEqual(te.min()))try{const r=await k_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.v_.get(l);u&&i.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.v_.get(c);if(!u)return;i.v_.set(c,u.withResumeToken(ut.EMPTY_BYTE_STRING,u.snapshotVersion)),M_(i,c);const h=new Dn(u.target,c,l,u.sequenceNumber);ah(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await oa(t,r)}}async function oa(t,e,n){if(!ji(e))throw e;t.F_.add(1),await Ki(t),t.O_.set("Offline"),n||(n=()=>k_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Xa(t)})}function F_(t,e){return e().catch(n=>oa(t,n,e))}async function Za(t){const e=se(t),n=Kn(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;jS(e);)try{const s=await RS(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,$S(e,s)}catch(s){await oa(e,s)}U_(e)&&B_(e)}function jS(t){return Tr(t)&&t.C_.length<10}function $S(t,e){t.C_.push(e);const n=Kn(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function U_(t){return Tr(t)&&!Kn(t).Jo()&&t.C_.length>0}function B_(t){Kn(t).start()}async function qS(t){Kn(t).A_()}async function HS(t){const e=Kn(t);for(const n of t.C_)e.d_(n.mutations)}async function KS(t,e,n){const r=t.C_.shift(),s=th.from(r,e,n);await F_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Za(t)}async function WS(t,e){e&&Kn(t).I_&&await async function(r,s){if(function(o){return MP(o)&&o!==R.ABORTED}(s.code)){const i=r.C_.shift();Kn(r).Xo(),await F_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Za(r)}}(t,e),U_(t)&&B_(t)}async function Ld(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Tr(n);n.F_.add(3),await Ki(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Xa(n)}async function zS(t,e){const n=se(t);e?(n.F_.delete(2),await Xa(n)):e||(n.F_.add(2),await Ki(n),n.O_.set("Unknown"))}function vs(t){return t.B_||(t.B_=function(n,r,s){const i=se(n);return i.V_(),new DS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:FS.bind(null,t),Eo:US.bind(null,t),c_:BS.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),lh(t)?ch(t):t.O_.set("Unknown")):(await t.B_.stop(),L_(t))})),t.B_}function Kn(t){return t.L_||(t.L_=function(n,r,s){const i=se(n);return i.V_(),new VS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:qS.bind(null,t),Eo:WS.bind(null,t),E_:HS.bind(null,t),T_:KS.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Za(t)):(await t.L_.stop(),t.C_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class uh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new uh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hh(t,e){if(mn("AsyncQueue",`${e}: ${t}`),ji(t))return new B(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Wr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Ls(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Wr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fd{constructor(){this.k_=new Oe(Q.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):Z():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ls{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ls(e,n,Wr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class GS{constructor(){this.Q_=void 0,this.listeners=[]}}class QS{constructor(){this.queries=new ys(e=>c_(e),Wa),this.onlineState="Unknown",this.K_=new Set}}async function j_(t,e){const n=se(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new GS),s)try{i.Q_=await n.onListen(r)}catch(o){const a=hh(o,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&fh(n)}async function $_(t,e){const n=se(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function YS(t,e){const n=se(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&fh(n)}function JS(t,e,n){const r=se(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function fh(t){t.K_.forEach(e=>{e.next()})}class q_{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class H_{constructor(e){this.key=e}}class K_{constructor(e){this.key=e}}class XS{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ce(),this.mutatedKeys=ce(),this.ua=l_(e),this.ca=new Wr(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Fd,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),m=za(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let P=!1;d&&m?d.data.isEqual(m.data)?v!==w&&(r.track({type:3,doc:m}),P=!0):this.Ia(d,m)||(r.track({type:2,doc:m}),P=!0,(c&&this.ua(m,c)>0||l&&this.ua(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),P=!0):d&&!m&&(r.track({type:1,doc:d}),P=!0,(c||l)&&(a=!0)),P&&(m?(o=o.add(m),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((l,u)=>function(d,m){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return v(d)-v(m)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,i.length!==0||c?{snapshot:new ls(this.query,e.ca,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Fd,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=ce(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new K_(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new H_(r))}),n}Ra(e){this.oa=e.Ps,this.aa=ce();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return ls.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class ZS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class eC{constructor(e){this.key=e,this.ma=!1}}class tC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ys(a=>c_(a),Wa),this.pa=new Map,this.ya=new Set,this.wa=new Oe(Q.comparator),this.Sa=new Map,this.ba=new sh,this.Da={},this.Ca=new Map,this.va=cs.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function nC(t,e){const n=fC(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await PS(n.localStore,Jt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await rC(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&V_(n.remoteStore,o)}return s}async function rC(t,e,n,r,s){t.Ma=(h,d,m)=>async function(w,P,O,V){let K=P.view.ha(O);K.es&&(K=await Vd(w.localStore,P.query,!1).then(({documents:ae})=>P.view.ha(ae,K)));const N=V&&V.targetChanges.get(P.targetId),J=P.view.applyChanges(K,w.isPrimaryClient,N);return Bd(w,P.targetId,J.Ea),J.snapshot}(t,h,d,m);const i=await Vd(t.localStore,e,!0),o=new XS(e,i.Ps),a=o.ha(i.documents),c=Hi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Bd(t,n,l.Ea);const u=new ZS(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function sC(t,e){const n=se(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Wa(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Bl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),x_(n.remoteStore,r.targetId),jl(n,r.targetId)}).catch(Bi)):(jl(n,r.targetId),await Bl(n.localStore,r.targetId,!0))}async function iC(t,e,n){const r=dC(t);try{const s=await function(o,a){const c=se(o),l=Le.now(),u=a.reduce((m,v)=>m.add(v.key),ce());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=_n(),w=ce();return c._s.getEntries(m,u).next(P=>{v=P,v.forEach((O,V)=>{V.isValidDocument()||(w=w.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,v)).next(P=>{h=P;const O=[];for(const V of a){const K=kP(V,h.get(V.key).overlayedDocument);K!=null&&O.push(new Gn(V.key,K,Zm(K.value.mapValue),Lt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,O,a)}).next(P=>{d=P;const O=P.applyToLocalDocumentSet(h,w);return c.documentOverlayCache.saveOverlays(m,P.batchId,O)})}).then(()=>({batchId:d.batchId,changes:h_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Oe(ve)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await Wi(r,s.changes),await Za(r.remoteStore)}catch(s){const i=hh(s,"Failed to persist write");n.reject(i)}}async function W_(t,e){const n=se(t);try{const r=await IS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Se(o.ma):s.removedDocuments.size>0&&(Se(o.ma),o.ma=!1))}),await Wi(n,r,e)}catch(r){await Bi(r)}}function Ud(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=se(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&fh(c)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function oC(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Oe(Q.comparator);o=o.insert(i,nt.newNoDocument(i,te.min()));const a=ce().add(i),c=new Ya(te.min(),new Map,new Oe(ve),o,a);await W_(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),dh(r)}else await Bl(r.localStore,e,!1).then(()=>jl(r,e,n)).catch(Bi)}async function aC(t,e){const n=se(t),r=e.batch.batchId;try{const s=await TS(n.localStore,e);G_(n,r,null),z_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wi(n,s)}catch(s){await Bi(s)}}async function cC(t,e,n){const r=se(t);try{const s=await function(o,a){const c=se(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Se(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);G_(r,e,n),z_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wi(r,s)}catch(s){await Bi(s)}}function z_(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function G_(t,e,n){const r=se(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function jl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||Q_(t,r)})}function Q_(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(x_(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),dh(t))}function Bd(t,e,n){for(const r of n)r instanceof H_?(t.ba.addReference(r.key,e),lC(t,r)):r instanceof K_?(q("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||Q_(t,r.key)):Z()}function lC(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(q("SyncEngine","New document in limbo: "+n),t.ya.add(r),dh(t))}function dh(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new Q(Pe.fromString(e)),r=t.va.next();t.Sa.set(r,new eC(n)),t.wa=t.wa.insert(n,r),V_(t.remoteStore,new Dn(Jt(Xu(n.path)),r,"TargetPurposeLimboResolution",Wu.ae))}}async function Wi(t,e,n){const r=se(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=oh.$i(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(c,l){const u=se(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(l,d=>b.forEach(d.Qi,m=>u.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>b.forEach(d.Ki,m=>u.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!ji(h))throw h;q("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const m=u.rs.get(d),v=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(v);u.rs=u.rs.insert(d,w)}}}(r.localStore,i))}async function uC(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await O_(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new B(R.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wi(n,r.cs)}}function hC(t,e){const n=se(t),r=n.Sa.get(e);if(r&&r.ma)return ce().add(r.key);{let s=ce();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function fC(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=W_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=oC.bind(null,e),e.fa.c_=YS.bind(null,e.eventManager),e.fa.xa=JS.bind(null,e.eventManager),e}function dC(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=aC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cC.bind(null,e),e}class jd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ja(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return wS(this.persistence,new vS,e.initialUser,this.serializer)}createPersistence(e){return new mS(ih.Jr,this.serializer)}createSharedClientState(e){return new CS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ud(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uC.bind(null,this.syncEngine),await zS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QS}()}createDatastore(e){const n=Ja(e.databaseInfo.databaseId),r=function(i){return new NS(i)}(e.databaseInfo);return function(i,o,a,c){return new xS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new LS(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ud(this.syncEngine,n,0),function(){return Md.C()?new Md:new bS}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new tC(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=se(n);q("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Ki(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Y_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):mn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class gC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=Ym.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{q("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(q("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $c(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await O_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $d(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _C(t);q("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Ld(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Ld(e.remoteStore,i)),t._onlineComponents=e}function mC(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function _C(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await $c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!mC(n))throw n;ss("Error using user provided cache. Falling back to memory cache: "+n),await $c(t,new jd)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await $c(t,new jd);return t._offlineComponents}async function J_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await $d(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await $d(t,new pC))),t._onlineComponents}function yC(t){return J_(t).then(e=>e.syncEngine)}async function X_(t){const e=await J_(t),n=e.eventManager;return n.onListen=nC.bind(null,e.syncEngine),n.onUnlisten=sC.bind(null,e.syncEngine),n}function vC(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Y_({next:d=>{o.enqueueAndForget(()=>$_(i,h));const m=d.docs.has(a);!m&&d.fromCache?l.reject(new B(R.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?l.reject(new B(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new q_(Xu(a.path),u,{includeMetadataChanges:!0,Z_:!0});return j_(i,h)}(await X_(t),t.asyncQueue,e,n,r)),r.promise}function EC(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Y_({next:d=>{o.enqueueAndForget(()=>$_(i,h)),d.fromCache&&c.source==="server"?l.reject(new B(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new q_(a,u,{includeMetadataChanges:!0,Z_:!0});return j_(i,h)}(await X_(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Z_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const qd=new Map;/**
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
 */function ey(t,e,n){if(!n)throw new B(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wC(t,e,n,r){if(e===!0&&r===!0)throw new B(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hd(t){if(!Q.isDocumentKey(t))throw new B(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kd(t){if(Q.isDocumentKey(t))throw new B(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ec(t);throw new B(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Wd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Z_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $R;switch(r.type){case"firstParty":return new WR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qd.get(n);r&&(q("ComponentProvider","Removing Datastore"),qd.delete(n),r.terminate())}(this),Promise.resolve()}}function TC(t,e,n,r={}){var s;const i=(t=yn(t,tc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ss("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=tt.MOCK_USER;else{a=gA(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new B(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new tt(l)}t._authCredentials=new qR(new Qm(a,c))}}/**
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
 */class Es{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Es(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class jn extends Es{constructor(e,n,r){super(e,n,Xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new Q(e))}withConverter(e){return new jn(this.firestore,e,this._path)}}function zd(t,e,...n){if(t=qe(t),ey("collection","path",e),t instanceof tc){const r=Pe.fromString(e,...n);return Kd(r),new jn(t,null,r)}{if(!(t instanceof wt||t instanceof jn))throw new B(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Kd(r),new jn(t.firestore,null,r)}}function Us(t,e,...n){if(t=qe(t),arguments.length===1&&(e=Ym.V()),ey("doc","path",e),t instanceof tc){const r=Pe.fromString(e,...n);return Hd(r),new wt(t,null,new Q(r))}{if(!(t instanceof wt||t instanceof jn))throw new B(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Hd(r),new wt(t.firestore,t instanceof jn?t.converter:null,new Q(r))}}/**
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
 */class IC{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new N_(this,"async_queue_retry"),this.ou=()=>{const n=jc();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=jc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new dn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!ji(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw mn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=uh.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&Z()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class ws extends tc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new IC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ty(this),this._firestoreClient.terminate()}}function AC(t,e){const n=typeof t=="object"?t:Hg(),r=typeof t=="string"?t:e||"(default)",s=Tu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=dA("firestore");i&&TC(s,...i)}return s}function ph(t){return t._firestoreClient||ty(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ty(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new sP(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Z_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new gC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new us(ut.fromBase64String(e))}catch(n){throw new B(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new us(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class nc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gh{constructor(e){this._methodName=e}}/**
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
 */class mh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */const RC=/^__.*__$/;class PC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gn(e,this.data,this.fieldMask,n,this.fieldTransforms):new qi(e,this.data,n,this.fieldTransforms)}}class ny{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Gn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ry(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class _h{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new _h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return aa(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(ry(this.Tu)&&RC.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class SC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ja(e)}wu(e,n,r,s=!1){return new _h({Tu:e,methodName:n,yu:r,path:st.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yh(t){const e=t._freezeSettings(),n=Ja(t._databaseId);return new SC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CC(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);vh("Data must be an object, but it was:",o,r);const a=sy(r,o);let c,l;if(i.merge)c=new Pt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=$l(e,h,n);if(!o.contains(d))throw new B(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);oy(u,d)||u.push(d)}c=new Pt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new PC(new Et(a),c,l)}class rc extends gh{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rc}}function bC(t,e,n,r){const s=t.wu(1,e,n);vh("Data must be an object, but it was:",s,r);const i=[],o=Et.empty();wr(r,(c,l)=>{const u=Eh(e,c,n);l=qe(l);const h=s.mu(u);if(l instanceof rc)i.push(u);else{const d=zi(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Pt(i);return new ny(o,a,s.fieldTransforms)}function OC(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[$l(e,r,n)],c=[s];if(i.length%2!=0)throw new B(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push($l(e,i[d])),c.push(i[d+1]);const l=[],u=Et.empty();for(let d=a.length-1;d>=0;--d)if(!oy(l,a[d])){const m=a[d];let v=c[d];v=qe(v);const w=o.mu(m);if(v instanceof rc)l.push(m);else{const P=zi(v,w);P!=null&&(l.push(m),u.set(m,P))}}const h=new Pt(l);return new ny(u,h,o.fieldTransforms)}function kC(t,e,n,r=!1){return zi(n,t.wu(r?4:3,e))}function zi(t,e){if(iy(t=qe(t)))return vh("Unsupported field value:",e,t),sy(t,e);if(t instanceof gh)return function(r,s){if(!ry(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=zi(a,s.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:ia(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ia(s.serializer,i)}}if(r instanceof mh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof us)return{bytesValue:A_(s.serializer,r._byteString)};if(r instanceof wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${ec(r)}`)}(t,e)}function sy(t,e){const n={};return Jm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,(r,s)=>{const i=zi(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function iy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof mh||t instanceof us||t instanceof wt||t instanceof gh)}function vh(t,e,n){if(!iy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ec(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function $l(t,e,n){if((e=qe(e))instanceof nc)return e._internalPath;if(typeof e=="string")return Eh(t,e);throw aa("Field path arguments must be of type string or ",t,!1,void 0,n)}const NC=new RegExp("[~\\*/\\[\\]]");function Eh(t,e,n){if(e.search(NC)>=0)throw aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function aa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new B(R.INVALID_ARGUMENT,a+t+c)}function oy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ay{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DC extends ay{data(){return super.data()}}function wh(t,e){return typeof e=="string"?Eh(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
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
 */function VC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Th{}class xC extends Th{}function MC(t,e,...n){let r=[];e instanceof Th&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Ih).length,a=i.filter(c=>c instanceof sc).length;if(o>1||o>0&&a>0)throw new B(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class sc extends xC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sc(e,n,r)}_apply(e){const n=this._parse(e);return cy(e._query,n),new Es(e.firestore,e.converter,Vl(e._query,n))}_parse(e){const n=yh(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Qd(h,u);const m=[];for(const v of h)m.push(Gd(c,i,v));d={arrayValue:{values:m}}}else d=Gd(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Qd(h,u),d=kC(a,o,h,u==="in"||u==="not-in");return xe.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function LC(t,e,n){const r=e,s=wh("where",t);return sc._create(s,r,n)}class Ih extends Th{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ih(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Bt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)cy(o,c),o=Vl(o,c)}(e._query,n),new Es(e.firestore,e.converter,Vl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Gd(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new B(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!a_(e)&&n.indexOf("/")!==-1)throw new B(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!Q.isDocumentKey(r))throw new B(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _d(t,new Q(r))}if(n instanceof wt)return _d(t,n._key);throw new B(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ec(n)}.`)}function Qd(t,e){if(!Array.isArray(t)||t.length===0)throw new B(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cy(t,e){if(e.isInequality()){const r=Zu(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new B(R.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=o_(t);i!==null&&FC(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function FC(t,e,n){if(!n.isEqual(e))throw new B(R.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class UC{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new mh(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wi(e));default:return null}}convertTimestamp(e){const n=Hn(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);Se(b_(r));const s=new Ti(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function BC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ly extends ay{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Oo extends ly{data(e={}){return super.data(e)}}class jC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Bs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Oo(this._firestore,this._userDataWriter,r.key,r,new Bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Oo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Bs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Oo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Bs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:$C(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $C(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function qc(t){t=yn(t,wt);const e=yn(t.firestore,ws);return vC(ph(e),t._key).then(n=>zC(e,t,n))}class uy extends UC{constructor(e){super(),this.firestore=e}convertBytes(e){return new us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function qC(t){t=yn(t,Es);const e=yn(t.firestore,ws),n=ph(e),r=new uy(e);return VC(t._query),EC(n,t._query).then(s=>new jC(e,r,t,s))}function HC(t,e,n,...r){t=yn(t,wt);const s=yn(t.firestore,ws),i=yh(s);let o;return o=typeof(e=qe(e))=="string"||e instanceof nc?OC(i,"updateDoc",t._key,e,n,r):bC(i,"updateDoc",t._key,e),Ah(s,[o.toMutation(t._key,Lt.exists(!0))])}function KC(t){return Ah(yn(t.firestore,ws),[new eh(t._key,Lt.none())])}function WC(t,e){const n=yn(t.firestore,ws),r=Us(t),s=BC(t.converter,e);return Ah(n,[CC(yh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function Ah(t,e){return function(r,s){const i=new dn;return r.asyncQueue.enqueueAndForget(async()=>iC(await yC(r),s,i)),i.promise}(ph(t),e)}function zC(t,e,n){const r=n.docs.get(e._key),s=new uy(t);return new ly(t,s,e._key,r,new Bs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){_s=s})(ps),ns(new dr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ws(new HR(r.getProvider("auth-internal")),new GR(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new B(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ti(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Bn(dd,"4.2.0",e),Bn(dd,"4.2.0","esm2017")})();function Rh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Yd(t){return t!==void 0&&t.enterprise!==void 0}class GC{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function hy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QC=hy,fy=new Oi("auth","Firebase",hy());/**
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
 */const ca=new Eu("@firebase/auth");function YC(t,...e){ca.logLevel<=ue.WARN&&ca.warn(`Auth (${ps}): ${t}`,...e)}function ko(t,...e){ca.logLevel<=ue.ERROR&&ca.error(`Auth (${ps}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw Ph(t,...e)}function Zt(t,...e){return Ph(t,...e)}function JC(t,e,n){const r=Object.assign(Object.assign({},QC()),{[e]:n});return new Oi("auth","Firebase",r).create(e,{appName:t.name})}function Ph(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fy.create(t,...e)}function X(t,e,...n){if(!t)throw Ph(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function vn(t,e){t||un(e)}/**
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
 */function ql(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function XC(){return Jd()==="http:"||Jd()==="https:"}function Jd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ZC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XC()||_A()||"connection"in navigator)?navigator.onLine:!0}function eb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=mA()||yA()}get(){return ZC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sh(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class dy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nb=new Gi(3e4,6e4);function Ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ar(t,e,n,r,s={}){return py(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ki(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),dy.fetch()(gy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function py(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tb),e);try{const s=new rb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw wo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw JC(t,u,l);jt(t,u)}}catch(s){if(s instanceof wn)throw s;jt(t,"network-request-failed",{message:String(s)})}}async function Qi(t,e,n,r,s={}){const i=await Ar(t,e,n,r,s);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Sh(t.config,s):`${t.config.apiScheme}://${s}`}class rb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),nb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}async function sb(t,e){return Ar(t,"GET","/v2/recaptchaConfig",Ir(t,e))}/**
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
 */async function ib(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function ob(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ab(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=Ch(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zs(Hc(s.auth_time)),issuedAtTime:Zs(Hc(s.iat)),expirationTime:Zs(Hc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hc(t){return Number(t)*1e3}function Ch(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lg(n);return s?JSON.parse(s):(ko("Failed to decode base64 JWT payload"),null)}catch(s){return ko("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cb(t){const e=Ch(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&lb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ub{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class my{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function la(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Pi(t,ob(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?db(i.providerUserInfo):[],a=fb(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new my(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function hb(t){const e=qe(t);await la(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function db(t){return t.map(e=>{var{providerId:n}=e,r=Rh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function pb(t,e){const n=await py(t,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=gy(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Si;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function Rn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Rh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ub(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new my(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ab(this,e)}reload(){return hb(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await la(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pi(this,ib(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,V=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:N,isAnonymous:J,providerData:ae,stsTokenManager:he}=n;X(K&&he,e,"internal-error");const F=Si.fromJSON(this.name,he);X(typeof K=="string",e,"internal-error"),Rn(h,e.name),Rn(d,e.name),X(typeof N=="boolean",e,"internal-error"),X(typeof J=="boolean",e,"internal-error"),Rn(m,e.name),Rn(v,e.name),Rn(w,e.name),Rn(P,e.name),Rn(O,e.name),Rn(V,e.name);const W=new fr({uid:K,auth:e,email:d,emailVerified:N,displayName:h,isAnonymous:J,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:F,createdAt:O,lastLoginAt:V});return ae&&Array.isArray(ae)&&(W.providerData=ae.map(re=>Object.assign({},re))),P&&(W._redirectEventId=P),W}static async _fromIdTokenResponse(e,n,r=!1){const s=new Si;s.updateFromServerResponse(n);const i=new fr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await la(i),i}}/**
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
 */const Xd=new Map;function hn(t){vn(t instanceof Function,"Expected a class definition");let e=Xd.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xd.set(t,e),e)}/**
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
 */class _y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_y.type="NONE";const Zd=_y;/**
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
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=No(this.userKey,s.apiKey,i),this.fullPersistenceKey=No("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(hn(Zd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||hn(Zd);const o=No(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=fr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new zr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new zr(i,e,r))}}/**
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
 */function ep(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ey(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ty(e))return"Blackberry";if(Iy(e))return"Webos";if(bh(e))return"Safari";if((e.includes("chrome/")||vy(e))&&!e.includes("edge/"))return"Chrome";if(wy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yy(t=lt()){return/firefox\//i.test(t)}function bh(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vy(t=lt()){return/crios\//i.test(t)}function Ey(t=lt()){return/iemobile/i.test(t)}function wy(t=lt()){return/android/i.test(t)}function Ty(t=lt()){return/blackberry/i.test(t)}function Iy(t=lt()){return/webos/i.test(t)}function ic(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gb(t=lt()){var e;return ic(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mb(){return vA()&&document.documentMode===10}function Ay(t=lt()){return ic(t)||wy(t)||Iy(t)||Ty(t)||/windows phone/i.test(t)||Ey(t)}function _b(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ry(t,e=[]){let n;switch(t){case"Browser":n=ep(lt());break;case"Worker":n=`${ep(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class yb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vb(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",Ir(t,e))}/**
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
 */const Eb=6;class wb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Eb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Tb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tp(this),this.idTokenSubscription=new tp(this),this.beforeStateQueue=new yb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await la(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vb(this),n=new wb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ry(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rr(t){return qe(t)}class tp{constructor(e){this.auth=e,this.observer=null,this.addObserver=PA(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Ib(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Py(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ib().appendChild(r)})}function Ab(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Rb="https://www.google.com/recaptcha/enterprise.js?render=",Pb="recaptcha-enterprise",Sb="NO_RECAPTCHA";class Cb{constructor(e){this.type=Pb,this.auth=Rr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{sb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new GC(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Yd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Sb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Yd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Py(Rb+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ua(t,e,n,r=!1){const s=new Cb(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function bb(t,e){const n=Tu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wo(i,e??{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function Ob(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kb(t,e,n){const r=Rr(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Sy(e),{host:o,port:a}=Nb(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Db()}function Sy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nb(t){const e=Sy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:np(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:np(o)}}}function np(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Db(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Oh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}async function Vb(t,e){return Ar(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Kc(t,e){return Qi(t,"POST","/v1/accounts:signInWithPassword",Ir(t,e))}/**
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
 */async function xb(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}async function Mb(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}/**
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
 */class Ci extends Oh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ci(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ci(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await ua(e,r,"signInWithPassword");return Kc(e,s)}else return Kc(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await ua(e,r,"signInWithPassword");return Kc(e,i)}else return Promise.reject(s)});case"emailLink":return xb(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Vb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Mb(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gr(t,e){return Qi(t,"POST","/v1/accounts:signInWithIdp",Ir(t,e))}/**
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
 */const Lb="http://localhost";class yr extends Oh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Rh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:Lb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
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
 */function Fb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ub(t){const e=Ds(Vs(t)).link,n=e?Ds(Vs(e)).deep_link_id:null,r=Ds(Vs(t)).deep_link_id;return(r?Ds(Vs(r)).link:null)||r||n||e||t}class kh{constructor(e){var n,r,s,i,o,a;const c=Ds(Vs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Fb((s=c.mode)!==null&&s!==void 0?s:null);X(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Ub(e);try{return new kh(n)}catch{return null}}}/**
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
 */class Ts{constructor(){this.providerId=Ts.PROVIDER_ID}static credential(e,n){return Ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kh.parseLink(n);return X(r,"argument-error"),Ci._fromEmailAndCode(e,r.code,r.tenantId)}}Ts.PROVIDER_ID="password";Ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Cy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yi extends Cy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bn extends Yi{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class On extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
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
 */class kn extends Yi{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
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
 */class Nn extends Yi{constructor(){super("twitter.com")}static credential(e,n){return yr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
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
 */async function Wc(t,e){return Qi(t,"POST","/v1/accounts:signUp",Ir(t,e))}/**
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
 */class vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fr._fromIdTokenResponse(e,r,s),o=rp(r);return new vr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=rp(r);return new vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function rp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ha extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ha.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ha(e,n,r,s)}}function by(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ha._fromErrorAndOperation(t,i,e,r):i})}async function Bb(t,e,n=!1){const r=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vr._forOperation(t,"link",r)}/**
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
 */async function jb(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Pi(t,by(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=Ch(i.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),vr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
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
 */async function Oy(t,e,n=!1){const r="signIn",s=await by(t,r,e),i=await vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function $b(t,e){return Oy(Rr(t),e)}/**
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
 */async function ky(t){const e=Rr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qb(t,e,n){var r;const s=Rr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await ua(s,i,"signUpPassword");o=Wc(s,l)}else o=Wc(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ua(s,i,"signUpPassword");return Wc(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ky(t),l}),c=await vr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Hb(t,e,n){return $b(qe(t),Ts.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ky(t),r})}function Kb(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function Wb(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function zb(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function Gb(t){return qe(t).signOut()}const fa="__sak";/**
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
 */class Ny{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fa,"1"),this.storage.removeItem(fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Qb(){const t=lt();return bh(t)||ic(t)}const Yb=1e3,Jb=10;class Dy extends Ny{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Qb()&&_b(),this.fallbackToPolling=Ay(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Jb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Yb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dy.type="LOCAL";const Xb=Dy;/**
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
 */class Vy extends Ny{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vy.type="SESSION";const xy=Vy;/**
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
 */function Zb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new oc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Zb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oc.receivers=[];/**
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
 */function Nh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class e1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Nh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function en(){return window}function t1(t){en().location.href=t}/**
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
 */function My(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function n1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function s1(){return My()?self:null}/**
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
 */const Ly="firebaseLocalStorageDb",i1=1,da="firebaseLocalStorage",Fy="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ac(t,e){return t.transaction([da],e?"readwrite":"readonly").objectStore(da)}function o1(){const t=indexedDB.deleteDatabase(Ly);return new Ji(t).toPromise()}function Hl(){const t=indexedDB.open(Ly,i1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(da,{keyPath:Fy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(da)?e(r):(r.close(),await o1(),e(await Hl()))})})}async function sp(t,e,n){const r=ac(t,!0).put({[Fy]:e,value:n});return new Ji(r).toPromise()}async function a1(t,e){const n=ac(t,!1).get(e),r=await new Ji(n).toPromise();return r===void 0?null:r.value}function ip(t,e){const n=ac(t,!0).delete(e);return new Ji(n).toPromise()}const c1=800,l1=3;class Uy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>l1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return My()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oc._getInstance(s1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await n1(),!this.activeServiceWorker)return;this.sender=new e1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hl();return await sp(e,fa,"1"),await ip(e,fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>a1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ip(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ac(s,!1).getAll();return new Ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),c1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Uy.type="LOCAL";const u1=Uy;new Gi(3e4,6e4);/**
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
 */function h1(t,e){return e?hn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Dh extends Oh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function f1(t){return Oy(t.auth,new Dh(t),t.bypassAuthState)}function d1(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),jb(n,new Dh(t),t.bypassAuthState)}async function p1(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),Bb(n,new Dh(t),t.bypassAuthState)}/**
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
 */class By{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return f1;case"linkViaPopup":case"linkViaRedirect":return p1;case"reauthViaPopup":case"reauthViaRedirect":return d1;default:jt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const g1=new Gi(2e3,1e4);class jr extends By{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Nh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,g1.get())};e()}}jr.currentPopupAction=null;/**
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
 */const m1="pendingRedirect",Do=new Map;class _1 extends By{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const r=await y1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y1(t,e){const n=w1(e),r=E1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function v1(t,e){Do.set(t._key(),e)}function E1(t){return hn(t._redirectPersistence)}function w1(t){return No(m1,t.config.apiKey,t.name)}async function T1(t,e,n=!1){const r=Rr(t),s=h1(r,e),o=await new _1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const I1=10*60*1e3;class A1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=I1&&this.cachedEventUids.clear(),this.cachedEventUids.has(op(e))}saveEventToCache(e){this.cachedEventUids.add(op(e)),this.lastProcessedEventTime=Date.now()}}function op(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function R1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jy(t);default:return!1}}/**
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
 */async function P1(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
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
 */const S1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,C1=/^https?/;async function b1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await P1(t);for(const n of e)try{if(O1(n))return}catch{}jt(t,"unauthorized-domain")}function O1(t){const e=ql(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!C1.test(n))return!1;if(S1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const k1=new Gi(3e4,6e4);function ap(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function N1(t){return new Promise((e,n)=>{var r,s,i;function o(){ap(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ap(),n(Zt(t,"network-request-failed"))},timeout:k1.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)o();else{const a=Ab("iframefcb");return en()[a]=()=>{gapi.load?o():n(Zt(t,"network-request-failed"))},Py(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Vo=null,e})}let Vo=null;function D1(t){return Vo=Vo||N1(t),Vo}/**
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
 */const V1=new Gi(5e3,15e3),x1="__/auth/iframe",M1="emulator/auth/iframe",L1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function U1(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sh(e,M1):`https://${t.config.authDomain}/${x1}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=F1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ki(r).slice(1)}`}async function B1(t){const e=await D1(t),n=en().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:U1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:L1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),a=en().setTimeout(()=>{i(o)},V1.get());function c(){en().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const j1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$1=500,q1=600,H1="_blank",K1="http://localhost";class cp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function W1(t,e,n,r=$1,s=q1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},j1),{width:r.toString(),height:s.toString(),top:i,left:o}),l=lt().toLowerCase();n&&(a=vy(l)?H1:n),yy(l)&&(e=e||K1,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(gb(l)&&a!=="_self")return z1(e||"",a),new cp(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new cp(h)}function z1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const G1="__/auth/handler",Q1="emulator/auth/handler",Y1=encodeURIComponent("fac");async function lp(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof Cy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Yi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Y1}=${encodeURIComponent(c)}`:"";return`${J1(t)}?${ki(a).slice(1)}${l}`}function J1({config:t}){return t.emulator?Sh(t,Q1):`https://${t.authDomain}/${G1}`}/**
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
 */const zc="webStorageSupport";class X1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xy,this._completeRedirectFn=T1,this._overrideRedirectResult=v1}async _openPopup(e,n,r,s){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await lp(e,n,r,ql(),s);return W1(e,o,Nh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await lp(e,n,r,ql(),s);return t1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await B1(e),r=new A1(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zc,{type:zc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zc];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ay()||bh()||ic()}}const Z1=X1;var up="@firebase/auth",hp="1.3.0";/**
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
 */class eO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nO(t){ns(new dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ry(t)},l=new Tb(r,s,i,c);return Ob(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ns(new dr("auth-internal",e=>{const n=Rr(e.getProvider("auth").getImmediate());return(r=>new eO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(up,hp,tO(t)),Bn(up,hp,"esm2017")}/**
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
 */const rO=5*60,sO=Bg("authIdTokenMaxAge")||rO;let fp=null;const iO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sO)return;const s=n==null?void 0:n.token;fp!==s&&(fp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function oO(t=Hg()){const e=Tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bb(t,{popupRedirectResolver:Z1,persistence:[u1,Xb,xy]}),r=Bg("authTokenSyncURL");if(r){const i=iO(r);Wb(n,i,()=>i(n.currentUser)),Kb(n,o=>i(o))}const s=Fg("auth");return s&&kb(n,`http://${s}`),n}nO("Browser");const aO={apiKey:"AIzaSyBEj_lvulwL921R6C-GKJN1eC4haiLIk0Q",authDomain:"vue3-2c548.firebaseapp.com",projectId:"vue3-2c548",storageBucket:"vue3-2c548.appspot.com",messagingSenderId:"975447172434",appId:"1:975447172434:web:d7afa045c68a84b2df468"};qg(aO);const Vr=AC(),cn=oO(),cO="modulepreload",lO=function(t){return"/fbvue3-exp/"+t},dp={},Gc=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=lO(i),i in dp)return;dp[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":cO,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};const uO={__name:"TheWelcome",setup(t){return(e,n)=>" welcome "}},hO={__name:"HomeView",setup(t){return(e,n)=>(ng(),rg("main",null,[it(uO)]))}},pp=async(t,e,n)=>{const r=$y();r.loading=!0,await r.currentUser()?n("/about"):n(),r.loading=!1},xo=LI({history:eI("/fbvue3-exp/"),routes:[{path:"/",name:"home",component:hO},{path:"/login",name:"login",component:()=>Gc(()=>import("./Login-3649244b.js"),[]),beforeEnter:pp},{path:"/register",name:"register",component:()=>Gc(()=>import("./Register-4aa35b7c.js"),[]),beforeEnter:pp},{path:"/about",name:"about",component:()=>Gc(()=>import("./AboutView-038a0bd1.js"),["assets/AboutView-038a0bd1.js","assets/AboutView-4d995ba2.css"])}]});let fO=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const gp=pg("database",()=>{let t=_t([]),e=_t(!1);return{documents:t,loadingDoc:e,getUrls:async()=>{e.value=!0;try{const a=MC(zd(Vr,"urls"),LC("user","==",cn.currentUser.uid));(await qC(a)).forEach(l=>{t.value.push({id:l.id,...l.data()})})}catch(a){console.log(a)}finally{e.value=!1}},leerUrl:async a=>{e.value=!0;try{const c=Us(Vr,"urls",a),l=await qc(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==cn.currentUser.uid)throw new Error("No es dueño del documento");return l.data().name}catch(c){console.log(c.message)}finally{e.value=!1}},updateUrl:async(a,c)=>{e.value=!0;try{const l=Us(Vr,"urls",a),u=await qc(l);if(!u.exists())throw new Error("no existe el doc");if(u.data().user===cn.currentUser.uid)await HC(l,{name:c}),t.value=t.value.map(h=>h.id===a?{...h,name:c}:h);else throw new Error("no eres el autor")}catch(l){console.log(l.message)}finally{e.value=!1}},addUrl:async a=>{try{const c={name:a,short:fO(6),user:cn.currentUser.uid},l=await WC(zd(Vr,"urls"),c);t.value.push({...c,id:l.id})}catch(c){console.log(c)}},deleteUrl:async a=>{try{const c=Us(Vr,"urls",a),l=await qc(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==cn.currentUser.uid)throw new Error("No es dueño del documento");await KC(Us(Vr,"urls",a)),t.value=t.value.filter(u=>u.id!==a)}catch(c){console.log(c.message)}}}}),$y=pg("user",()=>{let t=_t(null),e=_t(!1),n=_t(!1);return{loadingUser:e,loading:n,userData:t,registerUser:async(a,c)=>{e.value=!0;try{const{user:l}=await qb(cn,a,c);t.value={email:l.email,uid:l.uid},xo.push("/")}catch(l){console.error(l),t.value=null}finally{e.value=!1}},loginUser:async(a,c)=>{e.value=!0;try{const{user:l}=await Hb(cn,a,c);t.value={email:l.email,uid:l.uid},xo.push("/about")}catch(l){l.code==="auth/user-not-found"?alert("No se encontró ningún usuario con esa dirección de correo electrónico."):l.code==="auth/wrong-password"?alert("Clave equivocada"):(console.log(l),t.value=null)}finally{e.value=!1}},logoutUser:async(a,c)=>{gp();try{await Gb(cn)}catch(l){console.log(l)}finally{t.value=null,n.value=!1,xo.push("/login")}},currentUser:()=>new Promise((a,c)=>{const l=zb(cn,u=>{u?t.value={email:u.email,uid:u.uid}:(t.value=null,gp()),a(u),l()},u=>c(u))})}});const dO=ai("div",null,"Veamos2",-1),pO={class:"container-fluid"},gO={__name:"App",setup(t){$y();const e=iA({selector:"body",valueDark:"bd-dark",valueLight:"bd-light"});return GI(e),(n,r)=>(ng(),rg(Ht,null,[dO,ai("div",pO,[ai("main",{class:_a(["container my-2 p-4",fn(e)?"bg-dark":"bg-light"])},[it(fn(bg))],2)])],64))}},cc=vT(gO),qy=RT();qy.use(IT);cc.use(qy);cc.use(xo);cc.use(_g);cc.mount("#app");export{ai as a,fn as b,rg as c,yO as d,be as i,ng as o,_t as r,$y as u,_O as v,mO as w};
