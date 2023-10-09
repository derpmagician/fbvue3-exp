(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Kl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ae={},$r=[],xt=()=>{},Yv=()=>!1,Jv=/^on[^a-z]/,pa=t=>Jv.test(t),Wl=t=>t.startsWith("onUpdate:"),$e=Object.assign,zl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Xv=Object.prototype.hasOwnProperty,ge=(t,e)=>Xv.call(t,e),ee=Array.isArray,qr=t=>ga(t)==="[object Map]",mp=t=>ga(t)==="[object Set]",ie=t=>typeof t=="function",qe=t=>typeof t=="string",Gl=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",_p=t=>Ce(t)&&ie(t.then)&&ie(t.catch),yp=Object.prototype.toString,ga=t=>yp.call(t),Zv=t=>ga(t).slice(8,-1),vp=t=>ga(t)==="[object Object]",Ql=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,To=Kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},eE=/-(\w)/g,Jr=ma(t=>t.replace(eE,(e,n)=>n?n.toUpperCase():"")),tE=/\B([A-Z])/g,ds=ma(t=>t.replace(tE,"-$1").toLowerCase()),Ep=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),_c=ma(t=>t?`on${Ep(t)}`:""),ti=(t,e)=>!Object.is(t,e),Io=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zh;const Yc=()=>zh||(zh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yl(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?iE(r):Yl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(qe(t))return t;if(Ce(t))return t}}const nE=/;(?![^(]*\))/g,rE=/:([^]+)/,sE=/\/\*[^]*?\*\//g;function iE(t){const e={};return t.replace(sE,"").split(nE).forEach(n=>{if(n){const r=n.split(rE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function _a(t){let e="";if(qe(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const r=_a(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const oE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",aE=Kl(oE);function wp(t){return!!t||t===""}const cE=t=>qe(t)?t:t==null?"":ee(t)||Ce(t)&&(t.toString===yp||!ie(t.toString))?JSON.stringify(t,Tp,2):String(t),Tp=(t,e)=>e&&e.__v_isRef?Tp(t,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:mp(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!ee(e)&&!vp(e)?String(e):e;let At;class Ip{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ap(t){return new Ip(t)}function lE(t,e=At){e&&e.active&&e.effects.push(t)}function Jl(){return At}function Rp(t){At&&At.cleanups.push(t)}const Xl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sp=t=>(t.w&$n)>0,Pp=t=>(t.n&$n)>0,uE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=$n},hE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Sp(s)&&!Pp(s)?s.delete(t):e[n++]=s,s.w&=~$n,s.n&=~$n}e.length=n}},Lo=new WeakMap;let Ds=0,$n=1;const Jc=30;let Dt;const lr=Symbol(""),Xc=Symbol("");class Zl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lE(this,r)}run(){if(!this.active)return this.fn();let e=Dt,n=Vn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Dt,Dt=this,Vn=!0,$n=1<<++Ds,Ds<=Jc?uE(this):Gh(this),this.fn()}finally{Ds<=Jc&&hE(this),$n=1<<--Ds,Dt=this.parent,Vn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(Gh(this),this.onStop&&this.onStop(),this.active=!1)}}function Gh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Vn=!0;const Cp=[];function ps(){Cp.push(Vn),Vn=!1}function gs(){const t=Cp.pop();Vn=t===void 0?!0:t}function Tt(t,e,n){if(Vn&&Dt){let r=Lo.get(t);r||Lo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Xl()),bp(s)}}function bp(t,e){let n=!1;Ds<=Jc?Pp(t)||(t.n|=$n,n=!Sp(t)):n=!t.has(Dt),n&&(t.add(Dt),Dt.deps.push(t))}function pn(t,e,n,r,s,i){const o=Lo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ee(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ee(t)?Ql(n)&&a.push(o.get("length")):(a.push(o.get(lr)),qr(t)&&a.push(o.get(Xc)));break;case"delete":ee(t)||(a.push(o.get(lr)),qr(t)&&a.push(o.get(Xc)));break;case"set":qr(t)&&a.push(o.get(lr));break}if(a.length===1)a[0]&&Zc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Zc(Xl(c))}}function Zc(t,e){const n=ee(t)?t:[...t];for(const r of n)r.computed&&Qh(r);for(const r of n)r.computed||Qh(r)}function Qh(t,e){(t!==Dt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function fE(t,e){var n;return(n=Lo.get(t))==null?void 0:n.get(e)}const dE=Kl("__proto__,__v_isRef,__isVue"),Op=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gl)),pE=eu(),gE=eu(!1,!0),mE=eu(!0),Yh=_E();function _E(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=me(this);for(let i=0,o=this.length;i<o;i++)Tt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(me)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ps();const r=me(this)[e].apply(this,n);return gs(),r}}),t}function yE(t){const e=me(this);return Tt(e,"has",t),e.hasOwnProperty(t)}function eu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?VE:xp:e?Vp:Dp).get(r))return r;const o=ee(r);if(!t){if(o&&ge(Yh,s))return Reflect.get(Yh,s,i);if(s==="hasOwnProperty")return yE}const a=Reflect.get(r,s,i);return(Gl(s)?Op.has(s):dE(s))||(t||Tt(r,"get",s),e)?a:Oe(a)?o&&Ql(s)?a:a.value:Ce(a)?t?va(a):rn(a):a}}const vE=kp(),EE=kp(!0);function kp(t=!1){return function(n,r,s,i){let o=n[r];if(Xr(o)&&Oe(o)&&!Oe(s))return!1;if(!t&&(!Fo(s)&&!Xr(s)&&(o=me(o),s=me(s)),!ee(n)&&Oe(o)&&!Oe(s)))return o.value=s,!0;const a=ee(n)&&Ql(r)?Number(r)<n.length:ge(n,r),c=Reflect.set(n,r,s,i);return n===me(i)&&(a?ti(s,o)&&pn(n,"set",r,s):pn(n,"add",r,s)),c}}function wE(t,e){const n=ge(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&pn(t,"delete",e,void 0),r}function TE(t,e){const n=Reflect.has(t,e);return(!Gl(e)||!Op.has(e))&&Tt(t,"has",e),n}function IE(t){return Tt(t,"iterate",ee(t)?"length":lr),Reflect.ownKeys(t)}const Np={get:pE,set:vE,deleteProperty:wE,has:TE,ownKeys:IE},AE={get:mE,set(t,e){return!0},deleteProperty(t,e){return!0}},RE=$e({},Np,{get:gE,set:EE}),tu=t=>t,ya=t=>Reflect.getPrototypeOf(t);function ro(t,e,n=!1,r=!1){t=t.__v_raw;const s=me(t),i=me(e);n||(e!==i&&Tt(s,"get",e),Tt(s,"get",i));const{has:o}=ya(s),a=r?tu:n?su:ni;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function so(t,e=!1){const n=this.__v_raw,r=me(n),s=me(t);return e||(t!==s&&Tt(r,"has",t),Tt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function io(t,e=!1){return t=t.__v_raw,!e&&Tt(me(t),"iterate",lr),Reflect.get(t,"size",t)}function Jh(t){t=me(t);const e=me(this);return ya(e).has.call(e,t)||(e.add(t),pn(e,"add",t,t)),this}function Xh(t,e){e=me(e);const n=me(this),{has:r,get:s}=ya(n);let i=r.call(n,t);i||(t=me(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ti(e,o)&&pn(n,"set",t,e):pn(n,"add",t,e),this}function Zh(t){const e=me(this),{has:n,get:r}=ya(e);let s=n.call(e,t);s||(t=me(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pn(e,"delete",t,void 0),i}function ef(){const t=me(this),e=t.size!==0,n=t.clear();return e&&pn(t,"clear",void 0,void 0),n}function oo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=me(o),c=e?tu:t?su:ni;return!t&&Tt(a,"iterate",lr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ao(t,e,n){return function(...r){const s=this.__v_raw,i=me(s),o=qr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?tu:e?su:ni;return!e&&Tt(i,"iterate",c?Xc:lr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){return t==="delete"?!1:this}}function SE(){const t={get(i){return ro(this,i)},get size(){return io(this)},has:so,add:Jh,set:Xh,delete:Zh,clear:ef,forEach:oo(!1,!1)},e={get(i){return ro(this,i,!1,!0)},get size(){return io(this)},has:so,add:Jh,set:Xh,delete:Zh,clear:ef,forEach:oo(!1,!0)},n={get(i){return ro(this,i,!0)},get size(){return io(this,!0)},has(i){return so.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:oo(!0,!1)},r={get(i){return ro(this,i,!0,!0)},get size(){return io(this,!0)},has(i){return so.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:oo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ao(i,!1,!1),n[i]=ao(i,!0,!1),e[i]=ao(i,!1,!0),r[i]=ao(i,!0,!0)}),[t,n,e,r]}const[PE,CE,bE,OE]=SE();function nu(t,e){const n=e?t?OE:bE:t?CE:PE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ge(n,s)&&s in r?n:r,s,i)}const kE={get:nu(!1,!1)},NE={get:nu(!1,!0)},DE={get:nu(!0,!1)},Dp=new WeakMap,Vp=new WeakMap,xp=new WeakMap,VE=new WeakMap;function xE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ME(t){return t.__v_skip||!Object.isExtensible(t)?0:xE(Zv(t))}function rn(t){return Xr(t)?t:ru(t,!1,Np,kE,Dp)}function Mp(t){return ru(t,!1,RE,NE,Vp)}function va(t){return ru(t,!0,AE,DE,xp)}function ru(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=ME(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function xn(t){return Xr(t)?xn(t.__v_raw):!!(t&&t.__v_isReactive)}function Xr(t){return!!(t&&t.__v_isReadonly)}function Fo(t){return!!(t&&t.__v_isShallow)}function Lp(t){return xn(t)||Xr(t)}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function Ea(t){return Mo(t,"__v_skip",!0),t}const ni=t=>Ce(t)?rn(t):t,su=t=>Ce(t)?va(t):t;function iu(t){Vn&&Dt&&(t=me(t),bp(t.dep||(t.dep=Xl())))}function ou(t,e){t=me(t);const n=t.dep;n&&Zc(n)}function Oe(t){return!!(t&&t.__v_isRef===!0)}function _t(t){return Up(t,!1)}function Fp(t){return Up(t,!0)}function Up(t,e){return Oe(t)?t:new LE(t,e)}class LE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:ni(e)}get value(){return iu(this),this._value}set value(e){const n=this.__v_isShallow||Fo(e)||Xr(e);e=n?e:me(e),ti(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ni(e),ou(this))}}function Yt(t){return Oe(t)?t.value:t}const FE={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Oe(s)&&!Oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bp(t){return xn(t)?t:new Proxy(t,FE)}class UE{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>iu(this),()=>ou(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function BE(t){return new UE(t)}function jE(t){const e=ee(t)?new Array(t.length):{};for(const n in t)e[n]=jp(t,n);return e}class $E{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fE(me(this._object),this._key)}}class qE{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function HE(t,e,n){return Oe(t)?t:ie(t)?new qE(t):Ce(t)&&arguments.length>1?jp(t,e,n):_t(t)}function jp(t,e,n){const r=t[e];return Oe(r)?r:new $E(t,e,n)}class KE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Zl(e,()=>{this._dirty||(this._dirty=!0,ou(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=me(this);return iu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function WE(t,e,n=!1){let r,s;const i=ie(t);return i?(r=t,s=xt):(r=t.get,s=t.set),new KE(r,s,i||!s,n)}function Mn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){wa(i,e,n)}return s}function Mt(t,e,n,r){if(ie(t)){const i=Mn(t,e,n,r);return i&&_p(i)&&i.catch(o=>{wa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Mt(t[i],e,n,r));return s}function wa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Mn(c,null,10,[t,o,a]);return}}zE(t,n,s,r)}function zE(t,e,n,r=!0){console.error(t)}let ri=!1,el=!1;const rt=[];let Wt=0;const Hr=[];let cn=null,rr=0;const $p=Promise.resolve();let au=null;function bi(t){const e=au||$p;return t?e.then(this?t.bind(this):t):e}function GE(t){let e=Wt+1,n=rt.length;for(;e<n;){const r=e+n>>>1;si(rt[r])<t?e=r+1:n=r}return e}function cu(t){(!rt.length||!rt.includes(t,ri&&t.allowRecurse?Wt+1:Wt))&&(t.id==null?rt.push(t):rt.splice(GE(t.id),0,t),qp())}function qp(){!ri&&!el&&(el=!0,au=$p.then(Kp))}function QE(t){const e=rt.indexOf(t);e>Wt&&rt.splice(e,1)}function YE(t){ee(t)?Hr.push(...t):(!cn||!cn.includes(t,t.allowRecurse?rr+1:rr))&&Hr.push(t),qp()}function tf(t,e=ri?Wt+1:0){for(;e<rt.length;e++){const n=rt[e];n&&n.pre&&(rt.splice(e,1),e--,n())}}function Hp(t){if(Hr.length){const e=[...new Set(Hr)];if(Hr.length=0,cn){cn.push(...e);return}for(cn=e,cn.sort((n,r)=>si(n)-si(r)),rr=0;rr<cn.length;rr++)cn[rr]();cn=null,rr=0}}const si=t=>t.id==null?1/0:t.id,JE=(t,e)=>{const n=si(t)-si(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Kp(t){el=!1,ri=!0,rt.sort(JE);const e=xt;try{for(Wt=0;Wt<rt.length;Wt++){const n=rt[Wt];n&&n.active!==!1&&Mn(n,null,14)}}finally{Wt=0,rt.length=0,Hp(),ri=!1,au=null,(rt.length||Hr.length)&&Kp()}}function XE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ae;d&&(s=n.map(m=>qe(m)?m.trim():m)),h&&(s=n.map(Qc))}let a,c=r[a=_c(e)]||r[a=_c(Jr(e))];!c&&i&&(c=r[a=_c(ds(e))]),c&&Mt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Mt(l,t,6,s)}}function Wp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ie(t)){const c=l=>{const u=Wp(l,e,!0);u&&(a=!0,$e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&r.set(t,null),null):(ee(i)?i.forEach(c=>o[c]=null):$e(o,i),Ce(t)&&r.set(t,o),o)}function Ta(t,e){return!t||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,ds(e))||ge(t,e))}let Rt=null,zp=null;function Uo(t){const e=Rt;return Rt=t,zp=t&&t.type.__scopeId||null,e}function ZE(t,e=Rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ff(-1);const i=Uo(e);let o;try{o=t(...s)}finally{Uo(i),r._d&&ff(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:v,inheritAttrs:w}=t;let S,O;const V=Uo(t);try{if(n.shapeFlag&4){const N=s||r;S=Kt(u.call(N,N,h,i,m,d,v)),O=c}else{const N=e;S=Kt(N.length>1?N(i,{attrs:c,slots:a,emit:l}):N(i,null)),O=e.props?c:ew(c)}}catch(N){Hs.length=0,wa(N,t,1),S=it(oi)}let K=S;if(O&&w!==!1){const N=Object.keys(O),{shapeFlag:J}=K;N.length&&J&7&&(o&&N.some(Wl)&&(O=tw(O,o)),K=Zr(K,O))}return n.dirs&&(K=Zr(K),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&(K.transition=n.transition),S=K,Uo(V),S}const ew=t=>{let e;for(const n in t)(n==="class"||n==="style"||pa(n))&&((e||(e={}))[n]=t[n]);return e},tw=(t,e)=>{const n={};for(const r in t)(!Wl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function nw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?nf(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ta(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?nf(r,o,l):!0:!!o;return!1}function nf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ta(n,i))return!0}return!1}function rw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sw=t=>t.__isSuspense;function iw(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):YE(t)}function ow(t,e){return lu(t,null,e)}const co={};function Ln(t,e,n){return lu(t,e,n)}function lu(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ae){var a;const c=Jl()===((a=je)==null?void 0:a.scope)?je:null;let l,u=!1,h=!1;if(Oe(t)?(l=()=>t.value,u=Fo(t)):xn(t)?(l=()=>t,r=!0):ee(t)?(h=!0,u=t.some(N=>xn(N)||Fo(N)),l=()=>t.map(N=>{if(Oe(N))return N.value;if(xn(N))return ir(N);if(ie(N))return Mn(N,c,2)})):ie(t)?e?l=()=>Mn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Mt(t,c,3,[m])}:l=xt,e&&r){const N=l;l=()=>ir(N())}let d,m=N=>{d=V.onStop=()=>{Mn(N,c,4)}},v;if(ci)if(m=xt,e?n&&Mt(e,c,3,[l(),h?[]:void 0,m]):l(),s==="sync"){const N=Xw();v=N.__watcherHandles||(N.__watcherHandles=[])}else return xt;let w=h?new Array(t.length).fill(co):co;const S=()=>{if(V.active)if(e){const N=V.run();(r||u||(h?N.some((J,ae)=>ti(J,w[ae])):ti(N,w)))&&(d&&d(),Mt(e,c,3,[N,w===co?void 0:h&&w[0]===co?[]:w,m]),w=N)}else V.run()};S.allowRecurse=!!e;let O;s==="sync"?O=S:s==="post"?O=()=>vt(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),O=()=>cu(S));const V=new Zl(l,O);e?n?S():w=V.run():s==="post"?vt(V.run.bind(V),c&&c.suspense):V.run();const K=()=>{V.stop(),c&&c.scope&&zl(c.scope.effects,V)};return v&&v.push(K),K}function aw(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?Gp(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const o=je;es(this);const a=lu(s,i.bind(r),n);return o?es(o):ur(),a}function Gp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ir(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Oe(t))ir(t.value,e);else if(ee(t))for(let n=0;n<t.length;n++)ir(t[n],e);else if(mp(t)||qr(t))t.forEach(n=>{ir(n,e)});else if(vp(t))for(const n in t)ir(t[n],e);return t}function yO(t,e){const n=Rt;if(n===null)return t;const r=Sa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ae]=e[i];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&ir(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function er(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ps(),Mt(c,n,8,[t.el,a,t,e]),gs())}}function uu(t,e){return ie(t)?(()=>$e({name:t.name},e,{setup:t}))():t}const Ao=t=>!!t.type.__asyncLoader,Qp=t=>t.type.__isKeepAlive;function cw(t,e){Yp(t,"a",e)}function lw(t,e){Yp(t,"da",e)}function Yp(t,e,n=je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ia(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Qp(s.parent.vnode)&&uw(r,e,n,s),s=s.parent}}function uw(t,e,n,r){const s=Ia(e,t,r,!0);Jp(()=>{zl(r[e],s)},n)}function Ia(t,e,n=je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ps(),es(n);const a=Mt(e,n,t,o);return ur(),gs(),a});return r?s.unshift(i):s.push(i),i}}const En=t=>(e,n=je)=>(!ci||t==="sp")&&Ia(t,(...r)=>e(...r),n),hw=En("bm"),hu=En("m"),fw=En("bu"),dw=En("u"),pw=En("bum"),Jp=En("um"),gw=En("sp"),mw=En("rtg"),_w=En("rtc");function yw(t,e=je){Ia("ec",t,e)}const vw=Symbol.for("v-ndc"),tl=t=>t?hg(t)?Sa(t)||t.proxy:tl(t.parent):null,qs=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tl(t.parent),$root:t=>tl(t.root),$emit:t=>t.emit,$options:t=>fu(t),$forceUpdate:t=>t.f||(t.f=()=>cu(t.update)),$nextTick:t=>t.n||(t.n=bi.bind(t.proxy)),$watch:t=>aw.bind(t)}),vc=(t,e)=>t!==Ae&&!t.__isScriptSetup&&ge(t,e),Ew={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(vc(r,e))return o[e]=1,r[e];if(s!==Ae&&ge(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ge(l,e))return o[e]=3,i[e];if(n!==Ae&&ge(n,e))return o[e]=4,n[e];nl&&(o[e]=0)}}const u=qs[e];let h,d;if(u)return e==="$attrs"&&Tt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&ge(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ge(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return vc(s,e)?(s[e]=n,!0):r!==Ae&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ae&&ge(t,o)||vc(e,o)||(a=i[0])&&ge(a,o)||ge(r,o)||ge(qs,o)||ge(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rf(t){return ee(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nl=!0;function ww(t){const e=fu(t),n=t.proxy,r=t.ctx;nl=!1,e.beforeCreate&&sf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:v,activated:w,deactivated:S,beforeDestroy:O,beforeUnmount:V,destroyed:K,unmounted:N,render:J,renderTracked:ae,renderTriggered:he,errorCaptured:F,serverPrefetch:W,expose:re,inheritAttrs:Me,components:Je,directives:ht,filters:$t}=e;if(l&&Tw(l,r,null),o)for(const Ee in o){const _e=o[Ee];ie(_e)&&(r[Ee]=_e.bind(n))}if(s){const Ee=s.call(n,n);Ce(Ee)&&(t.data=rn(Ee))}if(nl=!0,i)for(const Ee in i){const _e=i[Ee],Nt=ie(_e)?_e.bind(n,n):ie(_e.get)?_e.get.bind(n,n):xt,le=!ie(_e)&&ie(_e.set)?_e.set.bind(n):xt,Ct=Qe({get:Nt,set:le});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Xe=>Ct.value=Xe})}if(a)for(const Ee in a)Xp(a[Ee],r,n,Ee);if(c){const Ee=ie(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(_e=>{Ro(_e,Ee[_e])})}u&&sf(u,t,"c");function de(Ee,_e){ee(_e)?_e.forEach(Nt=>Ee(Nt.bind(n))):_e&&Ee(_e.bind(n))}if(de(hw,h),de(hu,d),de(fw,m),de(dw,v),de(cw,w),de(lw,S),de(yw,F),de(_w,ae),de(mw,he),de(pw,V),de(Jp,N),de(gw,W),ee(re))if(re.length){const Ee=t.exposed||(t.exposed={});re.forEach(_e=>{Object.defineProperty(Ee,_e,{get:()=>n[_e],set:Nt=>n[_e]=Nt})})}else t.exposed||(t.exposed={});J&&t.render===xt&&(t.render=J),Me!=null&&(t.inheritAttrs=Me),Je&&(t.components=Je),ht&&(t.directives=ht)}function Tw(t,e,n=xt){ee(t)&&(t=rl(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=Jt(s.from||r,s.default,!0):i=Jt(s.from||r):i=Jt(s),Oe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sf(t,e,n){Mt(ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xp(t,e,n,r){const s=r.includes(".")?Gp(n,r):()=>n[r];if(qe(t)){const i=e[t];ie(i)&&Ln(s,i)}else if(ie(t))Ln(s,t.bind(n));else if(Ce(t))if(ee(t))t.forEach(i=>Xp(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&Ln(s,i,t)}}function fu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Bo(c,l,o,!0)),Bo(c,e,o)),Ce(e)&&i.set(e,c),c}function Bo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Bo(t,i,n,!0),s&&s.forEach(o=>Bo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Iw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Iw={data:of,props:af,emits:af,methods:Vs,computed:Vs,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Vs,directives:Vs,watch:Rw,provide:of,inject:Aw};function of(t,e){return e?t?function(){return $e(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function Aw(t,e){return Vs(rl(t),rl(e))}function rl(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vs(t,e){return t?$e(Object.create(null),t,e):e}function af(t,e){return t?ee(t)&&ee(e)?[...new Set([...t,...e])]:$e(Object.create(null),rf(t),rf(e??{})):e}function Rw(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const r in e)n[r]=gt(t[r],e[r]);return n}function Zp(){return{app:null,config:{isNativeTag:Yv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sw=0;function Pw(t,e){return function(r,s=null){ie(r)||(r=$e({},r)),s!=null&&!Ce(s)&&(s=null);const i=Zp(),o=new Set;let a=!1;const c=i.app={_uid:Sw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Zw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ie(l.install)?(o.add(l),l.install(c,...u)):ie(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=it(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Sa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){ii=c;try{return l()}finally{ii=null}}};return c}}let ii=null;function Ro(t,e){if(je){let n=je.provides;const r=je.parent&&je.parent.provides;r===n&&(n=je.provides=Object.create(r)),n[t]=e}}function Jt(t,e,n=!1){const r=je||Rt;if(r||ii){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ii._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}function Cw(){return!!(je||Rt||ii)}function bw(t,e,n,r=!1){const s={},i={};Mo(i,Ra,1),t.propsDefaults=Object.create(null),eg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Mp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ow(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=me(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ta(t.emitsOptions,d))continue;const m=e[d];if(c)if(ge(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const v=Jr(d);s[v]=sl(c,a,v,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{eg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ge(e,h)&&((u=ds(h))===h||!ge(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=sl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ge(e,h))&&(delete i[h],l=!0)}l&&pn(t,"set","$attrs")}function eg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(To(c))continue;const l=e[c];let u;s&&ge(s,u=Jr(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ta(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=me(n),l=a||Ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=sl(s,c,h,l[h],t,!ge(l,h))}}return o}function sl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ie(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(es(s),r=l[n]=c.call(null,e),ur())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ds(n))&&(r=!0))}return r}function tg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ie(t)){const u=h=>{c=!0;const[d,m]=tg(h,e,!0);$e(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ce(t)&&r.set(t,$r),$r;if(ee(i))for(let u=0;u<i.length;u++){const h=Jr(i[u]);cf(h)&&(o[h]=Ae)}else if(i)for(const u in i){const h=Jr(u);if(cf(h)){const d=i[u],m=o[h]=ee(d)||ie(d)?{type:d}:$e({},d);if(m){const v=hf(Boolean,m.type),w=hf(String,m.type);m[0]=v>-1,m[1]=w<0||v<w,(v>-1||ge(m,"default"))&&a.push(h)}}}const l=[o,a];return Ce(t)&&r.set(t,l),l}function cf(t){return t[0]!=="$"}function lf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function uf(t,e){return lf(t)===lf(e)}function hf(t,e){return ee(e)?e.findIndex(n=>uf(n,t)):ie(e)&&uf(e,t)?0:-1}const ng=t=>t[0]==="_"||t==="$stable",du=t=>ee(t)?t.map(Kt):[Kt(t)],kw=(t,e,n)=>{if(e._n)return e;const r=ZE((...s)=>du(e(...s)),n);return r._c=!1,r},rg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ng(s))continue;const i=t[s];if(ie(i))e[s]=kw(s,i,r);else if(i!=null){const o=du(i);e[s]=()=>o}}},sg=(t,e)=>{const n=du(e);t.slots.default=()=>n},Nw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),Mo(e,"_",n)):rg(e,t.slots={})}else t.slots={},e&&sg(t,e);Mo(t.slots,Ra,1)},Dw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:($e(s,e),!n&&a===1&&delete s._):(i=!e.$stable,rg(e,s)),o=e}else e&&(sg(t,e),o={default:1});if(i)for(const a in s)!ng(a)&&!(a in o)&&delete s[a]};function il(t,e,n,r,s=!1){if(ee(t)){t.forEach((d,m)=>il(d,e&&(ee(e)?e[m]:e),n,r,s));return}if(Ao(r)&&!s)return;const i=r.shapeFlag&4?Sa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(qe(l)?(u[l]=null,ge(h,l)&&(h[l]=null)):Oe(l)&&(l.value=null)),ie(c))Mn(c,a,12,[o,u]);else{const d=qe(c),m=Oe(c);if(d||m){const v=()=>{if(t.f){const w=d?ge(h,c)?h[c]:u[c]:c.value;s?ee(w)&&zl(w,i):ee(w)?w.includes(i)||w.push(i):d?(u[c]=[i],ge(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ge(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,vt(v,n)):v()}}}const vt=iw;function Vw(t){return xw(t)}function xw(t,e){const n=Yc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=xt,insertStaticContent:v}=t,w=(p,g,_,E=null,A=null,P=null,L=!1,k=null,D=!!g.dynamicChildren)=>{if(p===g)return;p&&!Cs(p,g)&&(E=T(p),Xe(p,A,P,!0),p=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:C,ref:G,shapeFlag:j}=g;switch(C){case Aa:S(p,g,_,E);break;case oi:O(p,g,_,E);break;case Ec:p==null&&V(g,_,E,L);break;case Ht:Je(p,g,_,E,A,P,L,k,D);break;default:j&1?J(p,g,_,E,A,P,L,k,D):j&6?ht(p,g,_,E,A,P,L,k,D):(j&64||j&128)&&C.process(p,g,_,E,A,P,L,k,D,x)}G!=null&&A&&il(G,p&&p.ref,P,g||p,!g)},S=(p,g,_,E)=>{if(p==null)r(g.el=a(g.children),_,E);else{const A=g.el=p.el;g.children!==p.children&&l(A,g.children)}},O=(p,g,_,E)=>{p==null?r(g.el=c(g.children||""),_,E):g.el=p.el},V=(p,g,_,E)=>{[p.el,p.anchor]=v(p.children,g,_,E,p.el,p.anchor)},K=({el:p,anchor:g},_,E)=>{let A;for(;p&&p!==g;)A=d(p),r(p,_,E),p=A;r(g,_,E)},N=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),s(p),p=_;s(g)},J=(p,g,_,E,A,P,L,k,D)=>{L=L||g.type==="svg",p==null?ae(g,_,E,A,P,L,k,D):W(p,g,A,P,L,k,D)},ae=(p,g,_,E,A,P,L,k)=>{let D,C;const{type:G,props:j,shapeFlag:$,transition:Y,dirs:oe}=p;if(D=p.el=o(p.type,P,j&&j.is,j),$&8?u(D,p.children):$&16&&F(p.children,D,null,E,A,P&&G!=="foreignObject",L,k),oe&&er(p,null,E,"created"),he(D,p,p.scopeId,L,E),j){for(const ye in j)ye!=="value"&&!To(ye)&&i(D,ye,null,j[ye],P,p.children,E,A,Fe);"value"in j&&i(D,"value",null,j.value),(C=j.onVnodeBeforeMount)&&qt(C,E,p)}oe&&er(p,null,E,"beforeMount");const we=(!A||A&&!A.pendingBranch)&&Y&&!Y.persisted;we&&Y.beforeEnter(D),r(D,g,_),((C=j&&j.onVnodeMounted)||we||oe)&&vt(()=>{C&&qt(C,E,p),we&&Y.enter(D),oe&&er(p,null,E,"mounted")},A)},he=(p,g,_,E,A)=>{if(_&&m(p,_),E)for(let P=0;P<E.length;P++)m(p,E[P]);if(A){let P=A.subTree;if(g===P){const L=A.vnode;he(p,L,L.scopeId,L.slotScopeIds,A.parent)}}},F=(p,g,_,E,A,P,L,k,D=0)=>{for(let C=D;C<p.length;C++){const G=p[C]=k?Pn(p[C]):Kt(p[C]);w(null,G,g,_,E,A,P,L,k)}},W=(p,g,_,E,A,P,L)=>{const k=g.el=p.el;let{patchFlag:D,dynamicChildren:C,dirs:G}=g;D|=p.patchFlag&16;const j=p.props||Ae,$=g.props||Ae;let Y;_&&tr(_,!1),(Y=$.onVnodeBeforeUpdate)&&qt(Y,_,g,p),G&&er(g,p,_,"beforeUpdate"),_&&tr(_,!0);const oe=A&&g.type!=="foreignObject";if(C?re(p.dynamicChildren,C,k,_,E,oe,P):L||_e(p,g,k,null,_,E,oe,P,!1),D>0){if(D&16)Me(k,g,j,$,_,E,A);else if(D&2&&j.class!==$.class&&i(k,"class",null,$.class,A),D&4&&i(k,"style",j.style,$.style,A),D&8){const we=g.dynamicProps;for(let ye=0;ye<we.length;ye++){const be=we[ye],It=j[be],Tn=$[be];(Tn!==It||be==="value")&&i(k,be,It,Tn,A,p.children,_,E,Fe)}}D&1&&p.children!==g.children&&u(k,g.children)}else!L&&C==null&&Me(k,g,j,$,_,E,A);((Y=$.onVnodeUpdated)||G)&&vt(()=>{Y&&qt(Y,_,g,p),G&&er(g,p,_,"updated")},E)},re=(p,g,_,E,A,P,L)=>{for(let k=0;k<g.length;k++){const D=p[k],C=g[k],G=D.el&&(D.type===Ht||!Cs(D,C)||D.shapeFlag&70)?h(D.el):_;w(D,C,G,null,E,A,P,L,!0)}},Me=(p,g,_,E,A,P,L)=>{if(_!==E){if(_!==Ae)for(const k in _)!To(k)&&!(k in E)&&i(p,k,_[k],null,L,g.children,A,P,Fe);for(const k in E){if(To(k))continue;const D=E[k],C=_[k];D!==C&&k!=="value"&&i(p,k,C,D,L,g.children,A,P,Fe)}"value"in E&&i(p,"value",_.value,E.value)}},Je=(p,g,_,E,A,P,L,k,D)=>{const C=g.el=p?p.el:a(""),G=g.anchor=p?p.anchor:a("");let{patchFlag:j,dynamicChildren:$,slotScopeIds:Y}=g;Y&&(k=k?k.concat(Y):Y),p==null?(r(C,_,E),r(G,_,E),F(g.children,_,G,A,P,L,k,D)):j>0&&j&64&&$&&p.dynamicChildren?(re(p.dynamicChildren,$,_,A,P,L,k),(g.key!=null||A&&g===A.subTree)&&ig(p,g,!0)):_e(p,g,_,G,A,P,L,k,D)},ht=(p,g,_,E,A,P,L,k,D)=>{g.slotScopeIds=k,p==null?g.shapeFlag&512?A.ctx.activate(g,_,E,L,D):$t(g,_,E,A,P,L,D):ft(p,g,D)},$t=(p,g,_,E,A,P,L)=>{const k=p.component=Kw(p,E,A);if(Qp(p)&&(k.ctx.renderer=x),Ww(k),k.asyncDep){if(A&&A.registerDep(k,de),!p.el){const D=k.subTree=it(oi);O(null,D,g,_)}return}de(k,p,g,_,A,P,L)},ft=(p,g,_)=>{const E=g.component=p.component;if(nw(p,g,_))if(E.asyncDep&&!E.asyncResolved){Ee(E,g,_);return}else E.next=g,QE(E.update),E.update();else g.el=p.el,E.vnode=g},de=(p,g,_,E,A,P,L)=>{const k=()=>{if(p.isMounted){let{next:G,bu:j,u:$,parent:Y,vnode:oe}=p,we=G,ye;tr(p,!1),G?(G.el=oe.el,Ee(p,G,L)):G=oe,j&&Io(j),(ye=G.props&&G.props.onVnodeBeforeUpdate)&&qt(ye,Y,G,oe),tr(p,!0);const be=yc(p),It=p.subTree;p.subTree=be,w(It,be,h(It.el),T(It),p,A,P),G.el=be.el,we===null&&rw(p,be.el),$&&vt($,A),(ye=G.props&&G.props.onVnodeUpdated)&&vt(()=>qt(ye,Y,G,oe),A)}else{let G;const{el:j,props:$}=g,{bm:Y,m:oe,parent:we}=p,ye=Ao(g);if(tr(p,!1),Y&&Io(Y),!ye&&(G=$&&$.onVnodeBeforeMount)&&qt(G,we,g),tr(p,!0),j&&pe){const be=()=>{p.subTree=yc(p),pe(j,p.subTree,p,A,null)};ye?g.type.__asyncLoader().then(()=>!p.isUnmounted&&be()):be()}else{const be=p.subTree=yc(p);w(null,be,_,E,p,A,P),g.el=be.el}if(oe&&vt(oe,A),!ye&&(G=$&&$.onVnodeMounted)){const be=g;vt(()=>qt(G,we,be),A)}(g.shapeFlag&256||we&&Ao(we.vnode)&&we.vnode.shapeFlag&256)&&p.a&&vt(p.a,A),p.isMounted=!0,g=_=E=null}},D=p.effect=new Zl(k,()=>cu(C),p.scope),C=p.update=()=>D.run();C.id=p.uid,tr(p,!0),C()},Ee=(p,g,_)=>{g.component=p;const E=p.vnode.props;p.vnode=g,p.next=null,Ow(p,g.props,E,_),Dw(p,g.children,_),ps(),tf(),gs()},_e=(p,g,_,E,A,P,L,k,D=!1)=>{const C=p&&p.children,G=p?p.shapeFlag:0,j=g.children,{patchFlag:$,shapeFlag:Y}=g;if($>0){if($&128){le(C,j,_,E,A,P,L,k,D);return}else if($&256){Nt(C,j,_,E,A,P,L,k,D);return}}Y&8?(G&16&&Fe(C,A,P),j!==C&&u(_,j)):G&16?Y&16?le(C,j,_,E,A,P,L,k,D):Fe(C,A,P,!0):(G&8&&u(_,""),Y&16&&F(j,_,E,A,P,L,k,D))},Nt=(p,g,_,E,A,P,L,k,D)=>{p=p||$r,g=g||$r;const C=p.length,G=g.length,j=Math.min(C,G);let $;for($=0;$<j;$++){const Y=g[$]=D?Pn(g[$]):Kt(g[$]);w(p[$],Y,_,null,A,P,L,k,D)}C>G?Fe(p,A,P,!0,!1,j):F(g,_,E,A,P,L,k,D,j)},le=(p,g,_,E,A,P,L,k,D)=>{let C=0;const G=g.length;let j=p.length-1,$=G-1;for(;C<=j&&C<=$;){const Y=p[C],oe=g[C]=D?Pn(g[C]):Kt(g[C]);if(Cs(Y,oe))w(Y,oe,_,null,A,P,L,k,D);else break;C++}for(;C<=j&&C<=$;){const Y=p[j],oe=g[$]=D?Pn(g[$]):Kt(g[$]);if(Cs(Y,oe))w(Y,oe,_,null,A,P,L,k,D);else break;j--,$--}if(C>j){if(C<=$){const Y=$+1,oe=Y<G?g[Y].el:E;for(;C<=$;)w(null,g[C]=D?Pn(g[C]):Kt(g[C]),_,oe,A,P,L,k,D),C++}}else if(C>$)for(;C<=j;)Xe(p[C],A,P,!0),C++;else{const Y=C,oe=C,we=new Map;for(C=oe;C<=$;C++){const dt=g[C]=D?Pn(g[C]):Kt(g[C]);dt.key!=null&&we.set(dt.key,C)}let ye,be=0;const It=$-oe+1;let Tn=!1,Xi=0;const Yn=new Array(It);for(C=0;C<It;C++)Yn[C]=0;for(C=Y;C<=j;C++){const dt=p[C];if(be>=It){Xe(dt,A,P,!0);continue}let bt;if(dt.key!=null)bt=we.get(dt.key);else for(ye=oe;ye<=$;ye++)if(Yn[ye-oe]===0&&Cs(dt,g[ye])){bt=ye;break}bt===void 0?Xe(dt,A,P,!0):(Yn[bt-oe]=C+1,bt>=Xi?Xi=bt:Tn=!0,w(dt,g[bt],_,null,A,P,L,k,D),be++)}const Rs=Tn?Mw(Yn):$r;for(ye=Rs.length-1,C=It-1;C>=0;C--){const dt=oe+C,bt=g[dt],Sr=dt+1<G?g[dt+1].el:E;Yn[C]===0?w(null,bt,_,Sr,A,P,L,k,D):Tn&&(ye<0||C!==Rs[ye]?Ct(bt,_,Sr,2):ye--)}}},Ct=(p,g,_,E,A=null)=>{const{el:P,type:L,transition:k,children:D,shapeFlag:C}=p;if(C&6){Ct(p.component.subTree,g,_,E);return}if(C&128){p.suspense.move(g,_,E);return}if(C&64){L.move(p,g,_,x);return}if(L===Ht){r(P,g,_);for(let j=0;j<D.length;j++)Ct(D[j],g,_,E);r(p.anchor,g,_);return}if(L===Ec){K(p,g,_);return}if(E!==2&&C&1&&k)if(E===0)k.beforeEnter(P),r(P,g,_),vt(()=>k.enter(P),A);else{const{leave:j,delayLeave:$,afterLeave:Y}=k,oe=()=>r(P,g,_),we=()=>{j(P,()=>{oe(),Y&&Y()})};$?$(P,oe,we):we()}else r(P,g,_)},Xe=(p,g,_,E=!1,A=!1)=>{const{type:P,props:L,ref:k,children:D,dynamicChildren:C,shapeFlag:G,patchFlag:j,dirs:$}=p;if(k!=null&&il(k,null,_,p,!0),G&256){g.ctx.deactivate(p);return}const Y=G&1&&$,oe=!Ao(p);let we;if(oe&&(we=L&&L.onVnodeBeforeUnmount)&&qt(we,g,p),G&6)Qn(p.component,_,E);else{if(G&128){p.suspense.unmount(_,E);return}Y&&er(p,null,g,"beforeUnmount"),G&64?p.type.remove(p,g,_,A,x,E):C&&(P!==Ht||j>0&&j&64)?Fe(C,g,_,!1,!0):(P===Ht&&j&384||!A&&G&16)&&Fe(D,g,_),E&&Ze(p)}(oe&&(we=L&&L.onVnodeUnmounted)||Y)&&vt(()=>{we&&qt(we,g,p),Y&&er(p,null,g,"unmounted")},_)},Ze=p=>{const{type:g,el:_,anchor:E,transition:A}=p;if(g===Ht){sn(_,E);return}if(g===Ec){N(p);return}const P=()=>{s(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(p.shapeFlag&1&&A&&!A.persisted){const{leave:L,delayLeave:k}=A,D=()=>L(_,P);k?k(p.el,P,D):D()}else P()},sn=(p,g)=>{let _;for(;p!==g;)_=d(p),s(p),p=_;s(g)},Qn=(p,g,_)=>{const{bum:E,scope:A,update:P,subTree:L,um:k}=p;E&&Io(E),A.stop(),P&&(P.active=!1,Xe(L,p,g,_)),k&&vt(k,g),vt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Fe=(p,g,_,E=!1,A=!1,P=0)=>{for(let L=P;L<p.length;L++)Xe(p[L],g,_,E,A)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),U=(p,g,_)=>{p==null?g._vnode&&Xe(g._vnode,null,null,!0):w(g._vnode||null,p,g,null,null,null,_),tf(),Hp(),g._vnode=p},x={p:w,um:Xe,m:Ct,r:Ze,mt:$t,mc:F,pc:_e,pbc:re,n:T,o:t};let z,pe;return e&&([z,pe]=e(x)),{render:U,hydrate:z,createApp:Pw(U,z)}}function tr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ig(t,e,n=!1){const r=t.children,s=e.children;if(ee(r)&&ee(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Pn(s[i]),a.el=o.el),n||ig(o,a)),a.type===Aa&&(a.el=o.el)}}function Mw(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Lw=t=>t.__isTeleport,Ht=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),oi=Symbol.for("v-cmt"),Ec=Symbol.for("v-stc"),Hs=[];let Vt=null;function og(t=!1){Hs.push(Vt=t?null:[])}function Fw(){Hs.pop(),Vt=Hs[Hs.length-1]||null}let ai=1;function ff(t){ai+=t}function Uw(t){return t.dynamicChildren=ai>0?Vt||$r:null,Fw(),ai>0&&Vt&&Vt.push(t),t}function ag(t,e,n,r,s,i){return Uw(Kr(t,e,n,r,s,i,!0))}function ol(t){return t?t.__v_isVNode===!0:!1}function Cs(t,e){return t.type===e.type&&t.key===e.key}const Ra="__vInternal",cg=({key:t})=>t??null,So=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||Oe(t)||ie(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function Kr(t,e=null,n=null,r=0,s=null,i=t===Ht?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cg(e),ref:e&&So(e),scopeId:zp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return a?(pu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),ai>0&&!o&&Vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vt.push(c),c}const it=Bw;function Bw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===vw)&&(t=oi),ol(t)){const a=Zr(t,e,!0);return n&&pu(a,n),ai>0&&!i&&Vt&&(a.shapeFlag&6?Vt[Vt.indexOf(t)]=a:Vt.push(a)),a.patchFlag|=-2,a}if(Yw(t)&&(t=t.__vccOpts),e){e=jw(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=_a(a)),Ce(c)&&(Lp(c)&&!ee(c)&&(c=$e({},c)),e.style=Yl(c))}const o=qe(t)?1:sw(t)?128:Lw(t)?64:Ce(t)?4:ie(t)?2:0;return Kr(t,e,n,r,s,o,i,!0)}function jw(t){return t?Lp(t)||Ra in t?$e({},t):t:null}function Zr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?lg(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&cg(a),ref:e&&e.ref?n&&s?ee(s)?s.concat(So(e)):[s,So(e)]:So(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ht?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function $w(t=" ",e=0){return it(Aa,null,t,e)}function Kt(t){return t==null||typeof t=="boolean"?it(oi):ee(t)?it(Ht,null,t.slice()):typeof t=="object"?Pn(t):it(Aa,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function pu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),pu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ra in e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),r&64?(n=16,e=[$w(e)]):n=8);t.children=e,t.shapeFlag|=n}function lg(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=_a([e.class,r.class]));else if(s==="style")e.style=Yl([e.style,r.style]);else if(pa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function qt(t,e,n,r=null){Mt(t,e,7,[n,r])}const qw=Zp();let Hw=0;function Kw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||qw,i={uid:Hw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tg(r,s),emitsOptions:Wp(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=XE.bind(null,i),t.ce&&t.ce(i),i}let je=null;const ug=()=>je||Rt;let gu,kr,df="__VUE_INSTANCE_SETTERS__";(kr=Yc()[df])||(kr=Yc()[df]=[]),kr.push(t=>je=t),gu=t=>{kr.length>1?kr.forEach(e=>e(t)):kr[0](t)};const es=t=>{gu(t),t.scope.on()},ur=()=>{je&&je.scope.off(),gu(null)};function hg(t){return t.vnode.shapeFlag&4}let ci=!1;function Ww(t,e=!1){ci=e;const{props:n,children:r}=t.vnode,s=hg(t);bw(t,n,s,e),Nw(t,r);const i=s?zw(t,e):void 0;return ci=!1,i}function zw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ea(new Proxy(t.ctx,Ew));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Qw(t):null;es(t),ps();const i=Mn(r,t,0,[t.props,s]);if(gs(),ur(),_p(i)){if(i.then(ur,ur),e)return i.then(o=>{pf(t,o,e)}).catch(o=>{wa(o,t,0)});t.asyncDep=i}else pf(t,i,e)}else fg(t,e)}function pf(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Bp(e)),fg(t,n)}let gf;function fg(t,e,n){const r=t.type;if(!t.render){if(!e&&gf&&!r.render){const s=r.template||fu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=$e($e({isCustomElement:i,delimiters:a},o),c);r.render=gf(s,l)}}t.render=r.render||xt}es(t),ps(),ww(t),gs(),ur()}function Gw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Tt(t,"get","$attrs"),e[n]}}))}function Qw(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Gw(t)},slots:t.slots,emit:t.emit,expose:e}}function Sa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bp(Ea(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qs)return qs[n](t)},has(e,n){return n in e||n in qs}}))}function Yw(t){return ie(t)&&"__vccOpts"in t}const Qe=(t,e)=>WE(t,e,ci);function dg(t,e,n){const r=arguments.length;return r===2?Ce(e)&&!ee(e)?ol(e)?it(t,null,[e]):it(t,e):it(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ol(n)&&(n=[n]),it(t,e,n))}const Jw=Symbol.for("v-scx"),Xw=()=>Jt(Jw),Zw="3.3.4",eT="http://www.w3.org/2000/svg",sr=typeof document<"u"?document:null,mf=sr&&sr.createElement("template"),tT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?sr.createElementNS(eT,t):sr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>sr.createTextNode(t),createComment:t=>sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mf.innerHTML=r?`<svg>${t}</svg>`:t;const a=mf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function nT(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function rT(t,e,n){const r=t.style,s=qe(n);if(n&&!s){if(e&&!qe(e))for(const i in e)n[i]==null&&al(r,i,"");for(const i in n)al(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const _f=/\s*!important$/;function al(t,e,n){if(ee(n))n.forEach(r=>al(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=sT(t,e);_f.test(n)?t.setProperty(ds(r),n.replace(_f,""),"important"):t[r]=n}}const yf=["Webkit","Moz","ms"],wc={};function sT(t,e){const n=wc[e];if(n)return n;let r=Jr(e);if(r!=="filter"&&r in t)return wc[e]=r;r=Ep(r);for(let s=0;s<yf.length;s++){const i=yf[s]+r;if(i in t)return wc[e]=i}return e}const vf="http://www.w3.org/1999/xlink";function iT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vf,e.slice(6,e.length)):t.setAttributeNS(vf,e,n);else{const i=aE(e);n==null||i&&!wp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function oT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=wp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function xr(t,e,n,r){t.addEventListener(e,n,r)}function aT(t,e,n,r){t.removeEventListener(e,n,r)}function cT(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=lT(e);if(r){const l=i[e]=fT(r,s);xr(t,a,l,c)}else o&&(aT(t,a,o,c),i[e]=void 0)}}const Ef=/(?:Once|Passive|Capture)$/;function lT(t){let e;if(Ef.test(t)){e={};let r;for(;r=t.match(Ef);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ds(t.slice(2)),e]}let Tc=0;const uT=Promise.resolve(),hT=()=>Tc||(uT.then(()=>Tc=0),Tc=Date.now());function fT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Mt(dT(r,n.value),e,5,[r])};return n.value=t,n.attached=hT(),n}function dT(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wf=/^on[a-z]/,pT=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?nT(t,r,s):e==="style"?rT(t,n,r):pa(e)?Wl(e)||cT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gT(t,e,r,s))?oT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),iT(t,e,r,s))};function gT(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&wf.test(e)&&ie(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wf.test(e)&&qe(n)?!1:e in t}const Tf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>Io(e,n):e};function mT(t){t.target.composing=!0}function If(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vO={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Tf(s);const i=r||s.props&&s.props.type==="number";xr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Qc(a)),t._assign(a)}),n&&xr(t,"change",()=>{t.value=t.value.trim()}),e||(xr(t,"compositionstart",mT),xr(t,"compositionend",If),xr(t,"change",If))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Tf(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Qc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},_T=["ctrl","shift","alt","meta"],yT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>_T.some(n=>t[`${n}Key`]&&!e.includes(n))},EO=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=yT[e[s]];if(i&&i(n,e))return}return t(n,...r)},vT=$e({patchProp:pT},tT);let Af;function ET(){return Af||(Af=Vw(vT))}const wT=(...t)=>{const e=ET().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=TT(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function TT(t){return qe(t)?document.querySelector(t):t}var lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function IT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jo={exports:{}};jo.exports;(function(t,e){var n=200,r="__lodash_hash_undefined__",s=9007199254740991,i="[object Arguments]",o="[object Array]",a="[object Boolean]",c="[object Date]",l="[object Error]",u="[object Function]",h="[object GeneratorFunction]",d="[object Map]",m="[object Number]",v="[object Object]",w="[object Promise]",S="[object RegExp]",O="[object Set]",V="[object String]",K="[object Symbol]",N="[object WeakMap]",J="[object ArrayBuffer]",ae="[object DataView]",he="[object Float32Array]",F="[object Float64Array]",W="[object Int8Array]",re="[object Int16Array]",Me="[object Int32Array]",Je="[object Uint8Array]",ht="[object Uint8ClampedArray]",$t="[object Uint16Array]",ft="[object Uint32Array]",de=/[\\^$.*+?()[\]{}|]/g,Ee=/\w*$/,_e=/^\[object .+?Constructor\]$/,Nt=/^(?:0|[1-9]\d*)$/,le={};le[i]=le[o]=le[J]=le[ae]=le[a]=le[c]=le[he]=le[F]=le[W]=le[re]=le[Me]=le[d]=le[m]=le[v]=le[S]=le[O]=le[V]=le[K]=le[Je]=le[ht]=le[$t]=le[ft]=!0,le[l]=le[u]=le[N]=!1;var Ct=typeof lo=="object"&&lo&&lo.Object===Object&&lo,Xe=typeof self=="object"&&self&&self.Object===Object&&self,Ze=Ct||Xe||Function("return this")(),sn=e&&!e.nodeType&&e,Qn=sn&&!0&&t&&!t.nodeType&&t,Fe=Qn&&Qn.exports===sn;function T(f,y){return f.set(y[0],y[1]),f}function U(f,y){return f.add(y),f}function x(f,y){for(var I=-1,H=f?f.length:0;++I<H&&y(f[I],I,f)!==!1;);return f}function z(f,y){for(var I=-1,H=y.length,Ue=f.length;++I<H;)f[Ue+I]=y[I];return f}function pe(f,y,I,H){var Ue=-1,pt=f?f.length:0;for(H&&pt&&(I=f[++Ue]);++Ue<pt;)I=y(I,f[Ue],Ue,f);return I}function p(f,y){for(var I=-1,H=Array(f);++I<f;)H[I]=y(I);return H}function g(f,y){return f==null?void 0:f[y]}function _(f){var y=!1;if(f!=null&&typeof f.toString!="function")try{y=!!(f+"")}catch{}return y}function E(f){var y=-1,I=Array(f.size);return f.forEach(function(H,Ue){I[++y]=[Ue,H]}),I}function A(f,y){return function(I){return f(y(I))}}function P(f){var y=-1,I=Array(f.size);return f.forEach(function(H){I[++y]=H}),I}var L=Array.prototype,k=Function.prototype,D=Object.prototype,C=Ze["__core-js_shared__"],G=function(){var f=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||"");return f?"Symbol(src)_1."+f:""}(),j=k.toString,$=D.hasOwnProperty,Y=D.toString,oe=RegExp("^"+j.call($).replace(de,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),we=Fe?Ze.Buffer:void 0,ye=Ze.Symbol,be=Ze.Uint8Array,It=A(Object.getPrototypeOf,Object),Tn=Object.create,Xi=D.propertyIsEnumerable,Yn=L.splice,Rs=Object.getOwnPropertySymbols,dt=we?we.isBuffer:void 0,bt=A(Object.keys,Object),Sr=br(Ze,"DataView"),Ss=br(Ze,"Map"),lc=br(Ze,"Promise"),uc=br(Ze,"Set"),hc=br(Ze,"WeakMap"),Ps=br(Object,"create"),Gy=Zn(Sr),Qy=Zn(Ss),Yy=Zn(lc),Jy=Zn(uc),Xy=Zn(hc),Vh=ye?ye.prototype:void 0,xh=Vh?Vh.valueOf:void 0;function Jn(f){var y=-1,I=f?f.length:0;for(this.clear();++y<I;){var H=f[y];this.set(H[0],H[1])}}function Zy(){this.__data__=Ps?Ps(null):{}}function ev(f){return this.has(f)&&delete this.__data__[f]}function tv(f){var y=this.__data__;if(Ps){var I=y[f];return I===r?void 0:I}return $.call(y,f)?y[f]:void 0}function nv(f){var y=this.__data__;return Ps?y[f]!==void 0:$.call(y,f)}function rv(f,y){var I=this.__data__;return I[f]=Ps&&y===void 0?r:y,this}Jn.prototype.clear=Zy,Jn.prototype.delete=ev,Jn.prototype.get=tv,Jn.prototype.has=nv,Jn.prototype.set=rv;function on(f){var y=-1,I=f?f.length:0;for(this.clear();++y<I;){var H=f[y];this.set(H[0],H[1])}}function sv(){this.__data__=[]}function iv(f){var y=this.__data__,I=Zi(y,f);if(I<0)return!1;var H=y.length-1;return I==H?y.pop():Yn.call(y,I,1),!0}function ov(f){var y=this.__data__,I=Zi(y,f);return I<0?void 0:y[I][1]}function av(f){return Zi(this.__data__,f)>-1}function cv(f,y){var I=this.__data__,H=Zi(I,f);return H<0?I.push([f,y]):I[H][1]=y,this}on.prototype.clear=sv,on.prototype.delete=iv,on.prototype.get=ov,on.prototype.has=av,on.prototype.set=cv;function Pr(f){var y=-1,I=f?f.length:0;for(this.clear();++y<I;){var H=f[y];this.set(H[0],H[1])}}function lv(){this.__data__={hash:new Jn,map:new(Ss||on),string:new Jn}}function uv(f){return eo(this,f).delete(f)}function hv(f){return eo(this,f).get(f)}function fv(f){return eo(this,f).has(f)}function dv(f,y){return eo(this,f).set(f,y),this}Pr.prototype.clear=lv,Pr.prototype.delete=uv,Pr.prototype.get=hv,Pr.prototype.has=fv,Pr.prototype.set=dv;function Cr(f){this.__data__=new on(f)}function pv(){this.__data__=new on}function gv(f){return this.__data__.delete(f)}function mv(f){return this.__data__.get(f)}function _v(f){return this.__data__.has(f)}function yv(f,y){var I=this.__data__;if(I instanceof on){var H=I.__data__;if(!Ss||H.length<n-1)return H.push([f,y]),this;I=this.__data__=new Pr(H)}return I.set(f,y),this}Cr.prototype.clear=pv,Cr.prototype.delete=gv,Cr.prototype.get=mv,Cr.prototype.has=_v,Cr.prototype.set=yv;function vv(f,y){var I=pc(f)||qv(f)?p(f.length,String):[],H=I.length,Ue=!!H;for(var pt in f)(y||$.call(f,pt))&&!(Ue&&(pt=="length"||Uv(pt,H)))&&I.push(pt);return I}function Mh(f,y,I){var H=f[y];(!($.call(f,y)&&Bh(H,I))||I===void 0&&!(y in f))&&(f[y]=I)}function Zi(f,y){for(var I=f.length;I--;)if(Bh(f[I][0],y))return I;return-1}function Ev(f,y){return f&&Lh(y,gc(y),f)}function fc(f,y,I,H,Ue,pt,Ot){var yt;if(H&&(yt=pt?H(f,Ue,pt,Ot):H(f)),yt!==void 0)return yt;if(!to(f))return f;var qh=pc(f);if(qh){if(yt=Mv(f),!y)return Dv(f,yt)}else{var Or=Xn(f),Hh=Or==u||Or==h;if(Kv(f))return Sv(f,y);if(Or==v||Or==i||Hh&&!pt){if(_(f))return pt?f:{};if(yt=Lv(Hh?{}:f),!y)return Vv(f,Ev(yt,f))}else{if(!le[Or])return pt?f:{};yt=Fv(f,Or,fc,y)}}Ot||(Ot=new Cr);var Kh=Ot.get(f);if(Kh)return Kh;if(Ot.set(f,yt),!qh)var Wh=I?xv(f):gc(f);return x(Wh||f,function(mc,no){Wh&&(no=mc,mc=f[no]),Mh(yt,no,fc(mc,y,I,H,no,f,Ot))}),yt}function wv(f){return to(f)?Tn(f):{}}function Tv(f,y,I){var H=y(f);return pc(f)?H:z(H,I(f))}function Iv(f){return Y.call(f)}function Av(f){if(!to(f)||jv(f))return!1;var y=$h(f)||_(f)?oe:_e;return y.test(Zn(f))}function Rv(f){if(!Uh(f))return bt(f);var y=[];for(var I in Object(f))$.call(f,I)&&I!="constructor"&&y.push(I);return y}function Sv(f,y){if(y)return f.slice();var I=new f.constructor(f.length);return f.copy(I),I}function dc(f){var y=new f.constructor(f.byteLength);return new be(y).set(new be(f)),y}function Pv(f,y){var I=y?dc(f.buffer):f.buffer;return new f.constructor(I,f.byteOffset,f.byteLength)}function Cv(f,y,I){var H=y?I(E(f),!0):E(f);return pe(H,T,new f.constructor)}function bv(f){var y=new f.constructor(f.source,Ee.exec(f));return y.lastIndex=f.lastIndex,y}function Ov(f,y,I){var H=y?I(P(f),!0):P(f);return pe(H,U,new f.constructor)}function kv(f){return xh?Object(xh.call(f)):{}}function Nv(f,y){var I=y?dc(f.buffer):f.buffer;return new f.constructor(I,f.byteOffset,f.length)}function Dv(f,y){var I=-1,H=f.length;for(y||(y=Array(H));++I<H;)y[I]=f[I];return y}function Lh(f,y,I,H){I||(I={});for(var Ue=-1,pt=y.length;++Ue<pt;){var Ot=y[Ue],yt=H?H(I[Ot],f[Ot],Ot,I,f):void 0;Mh(I,Ot,yt===void 0?f[Ot]:yt)}return I}function Vv(f,y){return Lh(f,Fh(f),y)}function xv(f){return Tv(f,gc,Fh)}function eo(f,y){var I=f.__data__;return Bv(y)?I[typeof y=="string"?"string":"hash"]:I.map}function br(f,y){var I=g(f,y);return Av(I)?I:void 0}var Fh=Rs?A(Rs,Object):Gv,Xn=Iv;(Sr&&Xn(new Sr(new ArrayBuffer(1)))!=ae||Ss&&Xn(new Ss)!=d||lc&&Xn(lc.resolve())!=w||uc&&Xn(new uc)!=O||hc&&Xn(new hc)!=N)&&(Xn=function(f){var y=Y.call(f),I=y==v?f.constructor:void 0,H=I?Zn(I):void 0;if(H)switch(H){case Gy:return ae;case Qy:return d;case Yy:return w;case Jy:return O;case Xy:return N}return y});function Mv(f){var y=f.length,I=f.constructor(y);return y&&typeof f[0]=="string"&&$.call(f,"index")&&(I.index=f.index,I.input=f.input),I}function Lv(f){return typeof f.constructor=="function"&&!Uh(f)?wv(It(f)):{}}function Fv(f,y,I,H){var Ue=f.constructor;switch(y){case J:return dc(f);case a:case c:return new Ue(+f);case ae:return Pv(f,H);case he:case F:case W:case re:case Me:case Je:case ht:case $t:case ft:return Nv(f,H);case d:return Cv(f,H,I);case m:case V:return new Ue(f);case S:return bv(f);case O:return Ov(f,H,I);case K:return kv(f)}}function Uv(f,y){return y=y??s,!!y&&(typeof f=="number"||Nt.test(f))&&f>-1&&f%1==0&&f<y}function Bv(f){var y=typeof f;return y=="string"||y=="number"||y=="symbol"||y=="boolean"?f!=="__proto__":f===null}function jv(f){return!!G&&G in f}function Uh(f){var y=f&&f.constructor,I=typeof y=="function"&&y.prototype||D;return f===I}function Zn(f){if(f!=null){try{return j.call(f)}catch{}try{return f+""}catch{}}return""}function $v(f){return fc(f,!0,!0)}function Bh(f,y){return f===y||f!==f&&y!==y}function qv(f){return Hv(f)&&$.call(f,"callee")&&(!Xi.call(f,"callee")||Y.call(f)==i)}var pc=Array.isArray;function jh(f){return f!=null&&Wv(f.length)&&!$h(f)}function Hv(f){return zv(f)&&jh(f)}var Kv=dt||Qv;function $h(f){var y=to(f)?Y.call(f):"";return y==u||y==h}function Wv(f){return typeof f=="number"&&f>-1&&f%1==0&&f<=s}function to(f){var y=typeof f;return!!f&&(y=="object"||y=="function")}function zv(f){return!!f&&typeof f=="object"}function gc(f){return jh(f)?vv(f):Rv(f)}function Gv(){return[]}function Qv(){return!1}t.exports=$v})(jo,jo.exports);var AT=jo.exports;const Rf=IT(AT);function RT({store:t}){const e=Rf(t.$state);t.$reset=()=>t.$patch(Rf(e))}var ST=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let pg;const Pa=t=>pg=t,gg=Symbol();function cl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ks;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ks||(Ks={}));function PT(){const t=Ap(!0),e=t.run(()=>_t({}));let n=[],r=[];const s=Ea({install(i){Pa(s),s._a=i,i.provide(gg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!ST?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const mg=()=>{};function Sf(t,e,n,r=mg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Jl()&&Rp(s),s}function Nr(t,...e){t.slice().forEach(n=>{n(...e)})}const CT=t=>t();function ll(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];cl(s)&&cl(r)&&t.hasOwnProperty(n)&&!Oe(r)&&!xn(r)?t[n]=ll(s,r):t[n]=r}return t}const bT=Symbol();function OT(t){return!cl(t)||!t.hasOwnProperty(bT)}const{assign:Sn}=Object;function kT(t){return!!(Oe(t)&&t.effect)}function NT(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=jE(n.state.value[t]);return Sn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Ea(Qe(()=>{Pa(n);const m=n._s.get(t);return o[d].call(m,m)})),h),{}))}return c=_g(t,l,e,n,r,!0),c}function _g(t,e,n={},r,s,i){let o;const a=Sn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],m;const v=r.state.value[t];!i&&!v&&(r.state.value[t]={}),_t({});let w;function S(F){let W;l=u=!1,typeof F=="function"?(F(r.state.value[t]),W={type:Ks.patchFunction,storeId:t,events:m}):(ll(r.state.value[t],F),W={type:Ks.patchObject,payload:F,storeId:t,events:m});const re=w=Symbol();bi().then(()=>{w===re&&(l=!0)}),u=!0,Nr(h,W,r.state.value[t])}const O=i?function(){const{state:W}=n,re=W?W():{};this.$patch(Me=>{Sn(Me,re)})}:mg;function V(){o.stop(),h=[],d=[],r._s.delete(t)}function K(F,W){return function(){Pa(r);const re=Array.from(arguments),Me=[],Je=[];function ht(de){Me.push(de)}function $t(de){Je.push(de)}Nr(d,{args:re,name:F,store:J,after:ht,onError:$t});let ft;try{ft=W.apply(this&&this.$id===t?this:J,re)}catch(de){throw Nr(Je,de),de}return ft instanceof Promise?ft.then(de=>(Nr(Me,de),de)).catch(de=>(Nr(Je,de),Promise.reject(de))):(Nr(Me,ft),ft)}}const N={_p:r,$id:t,$onAction:Sf.bind(null,d),$patch:S,$reset:O,$subscribe(F,W={}){const re=Sf(h,F,W.detached,()=>Me()),Me=o.run(()=>Ln(()=>r.state.value[t],Je=>{(W.flush==="sync"?u:l)&&F({storeId:t,type:Ks.direct,events:m},Je)},Sn({},c,W)));return re},$dispose:V},J=rn(N);r._s.set(t,J);const ae=r._a&&r._a.runWithContext||CT,he=r._e.run(()=>(o=Ap(),ae(()=>o.run(e))));for(const F in he){const W=he[F];if(Oe(W)&&!kT(W)||xn(W))i||(v&&OT(W)&&(Oe(W)?W.value=v[F]:ll(W,v[F])),r.state.value[t][F]=W);else if(typeof W=="function"){const re=K(F,W);he[F]=re,a.actions[F]=W}}return Sn(J,he),Sn(me(J),he),Object.defineProperty(J,"$state",{get:()=>r.state.value[t],set:F=>{S(W=>{Sn(W,F)})}}),r._p.forEach(F=>{Sn(J,o.run(()=>F({store:J,app:r._a,pinia:r,options:a})))}),v&&i&&n.hydrate&&n.hydrate(J.$state,v),l=!0,u=!0,J}function yg(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Cw();return a=a||(l?Jt(gg,null):null),a&&Pa(a),a=pg,a._s.has(r)||(i?_g(r,e,s,a):NT(r,s,a)),a._s.get(r)}return o.$id=r,o}const vg={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},$o={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},mu={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Eg={dangerouslyHTMLString:!1,multiple:!0,position:vg.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},DT={rtl:!1,newestOnTop:!1,toastClassName:""},VT={...Eg,...DT};({...Eg,type:mu.DEFAULT});var qo=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(qo||{});rn({});rn({});rn({items:[]});const xT=rn({});rn({});function MT(...t){return lg(...t)}function LT(t={}){xT["".concat(qo.CSS_NAMESPACE,"-default-options")]=t}vg.TOP_LEFT,$o.AUTO,mu.DEFAULT;mu.DEFAULT,$o.AUTO;$o.AUTO,$o.LIGHT;const wg={install(t,e={}){FT(e)}};typeof window<"u"&&(window.Vue3Toastify=wg);function FT(t={}){const e=MT(VT,t);LT(e)}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Mr=typeof window<"u";function UT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function Ic(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ft(s)?s.map(t):t(s)}return n}const Ws=()=>{},Ft=Array.isArray,BT=/\/$/,jT=t=>t.replace(BT,"");function Ac(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=KT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function $T(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ts(e.matched[r],n.matched[s])&&Tg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!HT(t[n],e[n]))return!1;return!0}function HT(t,e){return Ft(t)?Cf(t,e):Ft(e)?Cf(e,t):t===e}function Cf(t,e){return Ft(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function KT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var li;(function(t){t.pop="pop",t.push="push"})(li||(li={}));var zs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zs||(zs={}));function WT(t){if(!t)if(Mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jT(t)}const zT=/^[^#]+#/;function GT(t,e){return t.replace(zT,"#")+e}function QT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ca=()=>({left:window.pageXOffset,top:window.pageYOffset});function YT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=QT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bf(t,e){return(history.state?history.state.position-e:-1)+t}const ul=new Map;function JT(t,e){ul.set(t,e)}function XT(t){const e=ul.get(t);return ul.delete(t),e}let ZT=()=>location.protocol+"//"+location.host;function Ig(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Pf(c,"")}return Pf(n,t)+r+s}function eI(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=Ig(t,location),v=n.value,w=e.value;let S=0;if(d){if(n.value=m,e.value=d,o&&o===v){o=null;return}S=w?d.position-w.position:0}else r(m);s.forEach(O=>{O(n.value,v,{delta:S,type:li.pop,direction:S?S>0?zs.forward:zs.back:zs.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(Te({},d.state,{scroll:Ca()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Of(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ca():null}}function tI(t){const{history:e,location:n}=window,r={value:Ig(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:ZT()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=Te({},e.state,Of(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Te({},s.value,e.state,{forward:c,scroll:Ca()});i(u.current,u,!0);const h=Te({},Of(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function nI(t){t=WT(t);const e=tI(t),n=eI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Te({location:"",base:t,go:r,createHref:GT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function rI(t){return typeof t=="string"||t&&typeof t=="object"}function Ag(t){return typeof t=="string"||typeof t=="symbol"}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rg=Symbol("");var kf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kf||(kf={}));function ns(t,e){return Te(new Error,{type:t,[Rg]:!0},e)}function an(t,e){return t instanceof Error&&Rg in t&&(e==null||!!(t.type&e))}const Nf="[^/]+?",sI={sensitive:!1,strict:!1,start:!0,end:!0},iI=/[.+*?^${}()[\]/\\]/g;function oI(t,e){const n=Te({},sI,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(iI,"\\$&"),m+=40;else if(d.type===1){const{value:v,repeatable:w,optional:S,regexp:O}=d;i.push({name:v,repeatable:w,optional:S});const V=O||Nf;if(V!==Nf){m+=10;try{new RegExp(`(${V})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${v}" (${V}): `+N.message)}}let K=w?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;h||(K=S&&l.length<2?`(?:/${K})`:"/"+K),S&&(K+="?"),s+=K,m+=20,S&&(m+=-8),w&&(m+=-20),V===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",v=i[d-1];h[v.name]=m&&v.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:v,repeatable:w,optional:S}=m,O=v in l?l[v]:"";if(Ft(O)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const V=Ft(O)?O.join("/"):O;if(!V)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=V}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function aI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function cI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=aI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Df(r))return 1;if(Df(s))return-1}return s.length-r.length}function Df(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lI={type:0,value:""},uI=/[a-zA-Z0-9_]/;function hI(t){if(!t)return[[]];if(t==="/")return[[lI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:uI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function fI(t,e,n){const r=oI(hI(t.path),n),s=Te(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function dI(t,e){const n=[],r=new Map;e=Mf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const m=!d,v=pI(u);v.aliasOf=d&&d.record;const w=Mf(e,u),S=[v];if("alias"in u){const K=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of K)S.push(Te({},v,{components:d?d.record.components:v.components,path:N,aliasOf:d?d.record:v}))}let O,V;for(const K of S){const{path:N}=K;if(h&&N[0]!=="/"){const J=h.record.path,ae=J[J.length-1]==="/"?"":"/";K.path=h.record.path+(N&&ae+N)}if(O=fI(K,h,w),d?d.alias.push(O):(V=V||O,V!==O&&V.alias.push(O),m&&u.name&&!xf(O)&&o(u.name)),v.children){const J=v.children;for(let ae=0;ae<J.length;ae++)i(J[ae],O,d&&d.children[ae])}d=d||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return V?()=>{o(V)}:Ws}function o(u){if(Ag(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&cI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Sg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!xf(u)&&r.set(u.record.name,u)}function l(u,h){let d,m={},v,w;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ns(1,{location:u});w=d.record.name,m=Te(Vf(h.params,d.keys.filter(V=>!V.optional).map(V=>V.name)),u.params&&Vf(u.params,d.keys.map(V=>V.name))),v=d.stringify(m)}else if("path"in u)v=u.path,d=n.find(V=>V.re.test(v)),d&&(m=d.parse(v),w=d.record.name);else{if(d=h.name?r.get(h.name):n.find(V=>V.re.test(h.path)),!d)throw ns(1,{location:u,currentLocation:h});w=d.record.name,m=Te({},h.params,u.params),v=d.stringify(m)}const S=[];let O=d;for(;O;)S.unshift(O.record),O=O.parent;return{name:w,path:v,params:m,matched:S,meta:mI(S)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Vf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function pI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function gI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mI(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function Mf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Sg(t,e){return e.children.some(n=>n===t||Sg(t,n))}const Pg=/#/g,_I=/&/g,yI=/\//g,vI=/=/g,EI=/\?/g,Cg=/\+/g,wI=/%5B/g,TI=/%5D/g,bg=/%5E/g,II=/%60/g,Og=/%7B/g,AI=/%7C/g,kg=/%7D/g,RI=/%20/g;function _u(t){return encodeURI(""+t).replace(AI,"|").replace(wI,"[").replace(TI,"]")}function SI(t){return _u(t).replace(Og,"{").replace(kg,"}").replace(bg,"^")}function hl(t){return _u(t).replace(Cg,"%2B").replace(RI,"+").replace(Pg,"%23").replace(_I,"%26").replace(II,"`").replace(Og,"{").replace(kg,"}").replace(bg,"^")}function PI(t){return hl(t).replace(vI,"%3D")}function CI(t){return _u(t).replace(Pg,"%23").replace(EI,"%3F")}function bI(t){return t==null?"":CI(t).replace(yI,"%2F")}function Ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function OI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Cg," "),o=i.indexOf("="),a=Ho(o<0?i:i.slice(0,o)),c=o<0?null:Ho(i.slice(o+1));if(a in e){let l=e[a];Ft(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Lf(t){let e="";for(let n in t){const r=t[n];if(n=PI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ft(r)?r.map(i=>i&&hl(i)):[r&&hl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ft(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const NI=Symbol(""),Ff=Symbol(""),yu=Symbol(""),Ng=Symbol(""),fl=Symbol("");function bs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ns(4,{from:n,to:e})):h instanceof Error?a(h):rI(h)?a(ns(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Rc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(DI(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Cn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=UT(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Cn(d,n,r,i,o)()}))}}return s}function DI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Uf(t){const e=Jt(yu),n=Jt(Ng),r=Qe(()=>e.resolve(Yt(t.to))),s=Qe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ts.bind(null,u));if(d>-1)return d;const m=Bf(c[l-2]);return l>1&&Bf(u)===m&&h[h.length-1].path!==m?h.findIndex(ts.bind(null,c[l-2])):d}),i=Qe(()=>s.value>-1&&LI(n.params,r.value.params)),o=Qe(()=>s.value>-1&&s.value===n.matched.length-1&&Tg(n.params,r.value.params));function a(c={}){return MI(c)?e[Yt(t.replace)?"replace":"push"](Yt(t.to)).catch(Ws):Promise.resolve()}return{route:r,href:Qe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const VI=uu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uf,setup(t,{slots:e}){const n=rn(Uf(t)),{options:r}=Jt(yu),s=Qe(()=>({[jf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:dg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),xI=VI;function MI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function LI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ft(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jf=(t,e,n)=>t??e??n,FI=uu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Jt(fl),s=Qe(()=>t.route||r.value),i=Jt(Ff,0),o=Qe(()=>{let l=Yt(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Qe(()=>s.value.matched[o.value]);Ro(Ff,Qe(()=>o.value+1)),Ro(NI,a),Ro(fl,s);const c=_t();return Ln(()=>[c.value,a.value,t.name],([l,u,h],[d,m,v])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!ts(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return $f(n.default,{Component:d,route:l});const m=h.props[u],v=m?m===!0?l.params:typeof m=="function"?m(l):m:null,S=dg(d,Te({},v,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return $f(n.default,{Component:S,route:l})||S}}});function $f(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Dg=FI;function UI(t){const e=dI(t.routes,t),n=t.parseQuery||OI,r=t.stringifyQuery||Lf,s=t.history,i=bs(),o=bs(),a=bs(),c=Fp(An);let l=An;Mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ic.bind(null,T=>""+T),h=Ic.bind(null,bI),d=Ic.bind(null,Ho);function m(T,U){let x,z;return Ag(T)?(x=e.getRecordMatcher(T),z=U):z=T,e.addRoute(z,x)}function v(T){const U=e.getRecordMatcher(T);U&&e.removeRoute(U)}function w(){return e.getRoutes().map(T=>T.record)}function S(T){return!!e.getRecordMatcher(T)}function O(T,U){if(U=Te({},U||c.value),typeof T=="string"){const _=Ac(n,T,U.path),E=e.resolve({path:_.path},U),A=s.createHref(_.fullPath);return Te(_,E,{params:d(E.params),hash:Ho(_.hash),redirectedFrom:void 0,href:A})}let x;if("path"in T)x=Te({},T,{path:Ac(n,T.path,U.path).path});else{const _=Te({},T.params);for(const E in _)_[E]==null&&delete _[E];x=Te({},T,{params:h(_)}),U.params=h(U.params)}const z=e.resolve(x,U),pe=T.hash||"";z.params=u(d(z.params));const p=$T(r,Te({},T,{hash:SI(pe),path:z.path})),g=s.createHref(p);return Te({fullPath:p,hash:pe,query:r===Lf?kI(T.query):T.query||{}},z,{redirectedFrom:void 0,href:g})}function V(T){return typeof T=="string"?Ac(n,T,c.value.path):Te({},T)}function K(T,U){if(l!==T)return ns(8,{from:U,to:T})}function N(T){return he(T)}function J(T){return N(Te(V(T),{replace:!0}))}function ae(T){const U=T.matched[T.matched.length-1];if(U&&U.redirect){const{redirect:x}=U;let z=typeof x=="function"?x(T):x;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=V(z):{path:z},z.params={}),Te({query:T.query,hash:T.hash,params:"path"in z?{}:T.params},z)}}function he(T,U){const x=l=O(T),z=c.value,pe=T.state,p=T.force,g=T.replace===!0,_=ae(x);if(_)return he(Te(V(_),{state:typeof _=="object"?Te({},pe,_.state):pe,force:p,replace:g}),U||x);const E=x;E.redirectedFrom=U;let A;return!p&&qT(r,z,x)&&(A=ns(16,{to:E,from:z}),Ct(z,z,!0,!1)),(A?Promise.resolve(A):re(E,z)).catch(P=>an(P)?an(P,2)?P:le(P):_e(P,E,z)).then(P=>{if(P){if(an(P,2))return he(Te({replace:g},V(P.to),{state:typeof P.to=="object"?Te({},pe,P.to.state):pe,force:p}),U||E)}else P=Je(E,z,!0,g,pe);return Me(E,z,P),P})}function F(T,U){const x=K(T,U);return x?Promise.reject(x):Promise.resolve()}function W(T){const U=sn.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(T):T()}function re(T,U){let x;const[z,pe,p]=BI(T,U);x=Rc(z.reverse(),"beforeRouteLeave",T,U);for(const _ of z)_.leaveGuards.forEach(E=>{x.push(Cn(E,T,U))});const g=F.bind(null,T,U);return x.push(g),Fe(x).then(()=>{x=[];for(const _ of i.list())x.push(Cn(_,T,U));return x.push(g),Fe(x)}).then(()=>{x=Rc(pe,"beforeRouteUpdate",T,U);for(const _ of pe)_.updateGuards.forEach(E=>{x.push(Cn(E,T,U))});return x.push(g),Fe(x)}).then(()=>{x=[];for(const _ of p)if(_.beforeEnter)if(Ft(_.beforeEnter))for(const E of _.beforeEnter)x.push(Cn(E,T,U));else x.push(Cn(_.beforeEnter,T,U));return x.push(g),Fe(x)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),x=Rc(p,"beforeRouteEnter",T,U),x.push(g),Fe(x))).then(()=>{x=[];for(const _ of o.list())x.push(Cn(_,T,U));return x.push(g),Fe(x)}).catch(_=>an(_,8)?_:Promise.reject(_))}function Me(T,U,x){a.list().forEach(z=>W(()=>z(T,U,x)))}function Je(T,U,x,z,pe){const p=K(T,U);if(p)return p;const g=U===An,_=Mr?history.state:{};x&&(z||g?s.replace(T.fullPath,Te({scroll:g&&_&&_.scroll},pe)):s.push(T.fullPath,pe)),c.value=T,Ct(T,U,x,g),le()}let ht;function $t(){ht||(ht=s.listen((T,U,x)=>{if(!Qn.listening)return;const z=O(T),pe=ae(z);if(pe){he(Te(pe,{replace:!0}),z).catch(Ws);return}l=z;const p=c.value;Mr&&JT(bf(p.fullPath,x.delta),Ca()),re(z,p).catch(g=>an(g,12)?g:an(g,2)?(he(g.to,z).then(_=>{an(_,20)&&!x.delta&&x.type===li.pop&&s.go(-1,!1)}).catch(Ws),Promise.reject()):(x.delta&&s.go(-x.delta,!1),_e(g,z,p))).then(g=>{g=g||Je(z,p,!1),g&&(x.delta&&!an(g,8)?s.go(-x.delta,!1):x.type===li.pop&&an(g,20)&&s.go(-1,!1)),Me(z,p,g)}).catch(Ws)}))}let ft=bs(),de=bs(),Ee;function _e(T,U,x){le(T);const z=de.list();return z.length?z.forEach(pe=>pe(T,U,x)):console.error(T),Promise.reject(T)}function Nt(){return Ee&&c.value!==An?Promise.resolve():new Promise((T,U)=>{ft.add([T,U])})}function le(T){return Ee||(Ee=!T,$t(),ft.list().forEach(([U,x])=>T?x(T):U()),ft.reset()),T}function Ct(T,U,x,z){const{scrollBehavior:pe}=t;if(!Mr||!pe)return Promise.resolve();const p=!x&&XT(bf(T.fullPath,0))||(z||!x)&&history.state&&history.state.scroll||null;return bi().then(()=>pe(T,U,p)).then(g=>g&&YT(g)).catch(g=>_e(g,T,U))}const Xe=T=>s.go(T);let Ze;const sn=new Set,Qn={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,hasRoute:S,getRoutes:w,resolve:O,options:t,push:N,replace:J,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:Nt,install(T){const U=this;T.component("RouterLink",xI),T.component("RouterView",Dg),T.config.globalProperties.$router=U,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(c)}),Mr&&!Ze&&c.value===An&&(Ze=!0,N(s.location).catch(pe=>{}));const x={};for(const pe in An)Object.defineProperty(x,pe,{get:()=>c.value[pe],enumerable:!0});T.provide(yu,U),T.provide(Ng,Mp(x)),T.provide(fl,c);const z=T.unmount;sn.add(T),T.unmount=function(){sn.delete(T),sn.size<1&&(l=An,ht&&ht(),ht=null,c.value=An,Ze=!1,Ee=!1),z()}}};function Fe(T){return T.reduce((U,x)=>U.then(()=>W(x)),Promise.resolve())}return Qn}function BI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ts(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ts(l,c))||s.push(c))}return[n,r,s]}function Vg(t){return Jl()?(Rp(t),!0):!1}function rs(t){return typeof t=="function"?t():Yt(t)}const jI=typeof window<"u"&&typeof document<"u",$I=Object.prototype.toString,qI=t=>$I.call(t)==="[object Object]",xg=()=>{};function HI(t,e){function n(...r){return new Promise((s,i)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(s).catch(i)})}return n}const Mg=t=>t();function KI(t=Mg){const e=_t(!0);function n(){e.value=!1}function r(){e.value=!0}const s=(...i)=>{e.value&&t(...i)};return{isActive:va(e),pause:n,resume:r,eventFilter:s}}function WI(...t){if(t.length!==1)return HE(...t);const e=t[0];return typeof e=="function"?va(BE(()=>({get:e,set:xg}))):_t(e)}function zI(t,e,n={}){const{eventFilter:r=Mg,...s}=n;return Ln(t,HI(r,e),s)}function GI(t,e,n={}){const{eventFilter:r,...s}=n,{eventFilter:i,pause:o,resume:a,isActive:c}=KI(r);return{stop:zI(t,e,{...s,eventFilter:i}),pause:o,resume:a,isActive:c}}function QI(t,e=!0){ug()?hu(t):e?t():bi(t)}function YI(t=!1,e={}){const{truthyValue:n=!0,falsyValue:r=!1}=e,s=Oe(t),i=_t(t);function o(a){if(arguments.length)return i.value=a,i.value;{const c=rs(n);return i.value=i.value===c?rs(r):c,i.value}}return s?o:[i,o]}function Lg(t){var e;const n=rs(t);return(e=n==null?void 0:n.$el)!=null?e:n}const ui=jI?window:void 0;function qf(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=ui):[e,n,r,s]=t,!e)return xg;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d,m)=>(u.addEventListener(h,d,m),()=>u.removeEventListener(h,d,m)),c=Ln(()=>[Lg(e),rs(s)],([u,h])=>{if(o(),!u)return;const d=qI(h)?{...h}:h;i.push(...n.flatMap(m=>r.map(v=>a(u,m,v,d))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return Vg(l),l}function JI(){const t=_t(!1);return ug()&&hu(()=>{t.value=!0}),t}function XI(t){const e=JI();return Qe(()=>(e.value,!!t()))}function ZI(t,e={}){const{window:n=ui}=e,r=XI(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const i=_t(!1),o=l=>{i.value=l.matches},a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",o):s.removeListener(o))},c=ow(()=>{r.value&&(a(),s=n.matchMedia(rs(t)),"addEventListener"in s?s.addEventListener("change",o):s.addListener(o),i.value=s.matches)});return Vg(()=>{c(),a(),s=void 0}),i}const uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ho="__vueuse_ssr_handlers__",eA=tA();function tA(){return ho in uo||(uo[ho]=uo[ho]||{}),uo[ho]}function Fg(t,e){return eA[t]||e}function nA(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const rA={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Hf="vueuse-storage";function sA(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:l=!1,shallow:u,window:h=ui,eventFilter:d,onError:m=F=>{console.error(F)}}=r,v=(u?Fp:_t)(e);if(!n)try{n=Fg("getDefaultStorage",()=>{var F;return(F=ui)==null?void 0:F.localStorage})()}catch(F){m(F)}if(!n)return v;const w=rs(e),S=nA(w),O=(s=r.serializer)!=null?s:rA[S],{pause:V,resume:K}=GI(v,()=>N(v.value),{flush:i,deep:o,eventFilter:d});return h&&a&&(qf(h,"storage",he),qf(h,Hf,ae)),he(),v;function N(F){try{if(F==null)n.removeItem(t);else{const W=O.write(F),re=n.getItem(t);re!==W&&(n.setItem(t,W),h&&h.dispatchEvent(new CustomEvent(Hf,{detail:{key:t,oldValue:re,newValue:W,storageArea:n}})))}}catch(W){m(W)}}function J(F){const W=F?F.newValue:n.getItem(t);if(W==null)return c&&w!==null&&n.setItem(t,O.write(w)),w;if(!F&&l){const re=O.read(W);return typeof l=="function"?l(re,w):S==="object"&&!Array.isArray(re)?{...w,...re}:re}else return typeof W!="string"?W:O.read(W)}function ae(F){he(F.detail)}function he(F){if(!(F&&F.storageArea!==n)){if(F&&F.key==null){v.value=w;return}if(!(F&&F.key!==t)){V();try{(F==null?void 0:F.newValue)!==O.write(v.value)&&(v.value=J(F))}catch(W){m(W)}finally{F?bi(K):K()}}}}}function iA(t){return ZI("(prefers-color-scheme: dark)",t)}function oA(t={}){const{selector:e="html",attribute:n="class",initialValue:r="auto",window:s=ui,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:c,emitAuto:l,disableTransition:u=!0}=t,h={auto:"",light:"light",dark:"dark",...t.modes||{}},d=iA({window:s}),m=Qe(()=>d.value?"dark":"light"),v=c||(o==null?WI(r):sA(o,r,i,{window:s,listenToStorageChanges:a})),w=Qe(()=>v.value==="auto"?m.value:v.value),S=Fg("updateHTMLAttrs",(N,J,ae)=>{const he=typeof N=="string"?s==null?void 0:s.document.querySelector(N):Lg(N);if(!he)return;let F;if(u){F=s.document.createElement("style");const W="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";F.appendChild(document.createTextNode(W)),s.document.head.appendChild(F)}if(J==="class"){const W=ae.split(/\s/g);Object.values(h).flatMap(re=>(re||"").split(/\s/g)).filter(Boolean).forEach(re=>{W.includes(re)?he.classList.add(re):he.classList.remove(re)})}else he.setAttribute(J,ae);u&&(s.getComputedStyle(F).opacity,document.head.removeChild(F))});function O(N){var J;S(e,n,(J=h[N])!=null?J:N)}function V(N){t.onChanged?t.onChanged(N,O):O(N)}Ln(w,V,{flush:"post",immediate:!0}),QI(()=>V(w.value));const K=Qe({get(){return l?v.value:w.value},set(N){v.value=N}});try{return Object.assign(K,{store:v,system:m,state:w})}catch{return K}}function aA(t={}){const{valueDark:e="dark",valueLight:n=""}=t,r=oA({...t,onChanged:(i,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,i==="dark",o,i):o(i)},modes:{dark:e,light:n}});return Qe({get(){return r.value==="dark"},set(i){const o=i?"dark":"light";r.system.value===o?r.value="auto":r.value=o}})}/**
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
 */const Ug=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ug(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new lA;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uA=function(t){const e=Ug(t);return Bg.encodeByteArray(e,!0)},Ko=function(t){return uA(t).replace(/\./g,"")},jg=function(t){try{return Bg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fA=()=>hA().__FIREBASE_DEFAULTS__,dA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jg(t[1]);return e&&JSON.parse(e)},vu=()=>{try{return fA()||dA()||pA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$g=t=>{var e,n;return(n=(e=vu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gA=t=>{const e=$g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qg=()=>{var t;return(t=vu())===null||t===void 0?void 0:t.config},Hg=t=>{var e;return(e=vu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class mA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _A(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ko(JSON.stringify(n)),Ko(JSON.stringify(o)),a].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function vA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function EA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wA(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TA(){try{return typeof indexedDB=="object"}catch{return!1}}function IA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const AA="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=AA,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?RA(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wn(s,a,r)}}function RA(t,e){return t.replace(SA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const SA=/\{\$([^}]+)}/g;function PA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Kf(i)&&Kf(o)){if(!Wo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kf(t){return t!==null&&typeof t=="object"}/**
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
 */function ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ms(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function CA(t,e){const n=new bA(t,e);return n.subscribe.bind(n)}class bA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sc),s.error===void 0&&(s.error=Sc),s.complete===void 0&&(s.complete=Sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sc(){}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class kA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DA(e))try{this.getOrInitializeService({instanceIdentifier:nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nr){return this.instances.has(e)}getOptions(e=nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nr){return this.component?this.component.multipleInstances?e:nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NA(t){return t===nr?void 0:t}function DA(t){return t.instantiationMode==="EAGER"}/**
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
 */class VA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const xA={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},MA=ue.INFO,LA={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},FA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=LA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eu{constructor(e){this.name=e,this._logLevel=MA,this._logHandler=FA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const UA=(t,e)=>e.some(n=>t instanceof n);let Wf,zf;function BA(){return Wf||(Wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jA(){return zf||(zf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kg=new WeakMap,dl=new WeakMap,Wg=new WeakMap,Pc=new WeakMap,wu=new WeakMap;function $A(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kg.set(n,t)}).catch(()=>{}),wu.set(e,t),e}function qA(t){if(dl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});dl.set(t,e)}let pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HA(t){pl=t(pl)}function KA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return Wg.set(r,e.sort?e.sort():[e]),Fn(r)}:jA().includes(t)?function(...e){return t.apply(Cc(this),e),Fn(Kg.get(this))}:function(...e){return Fn(t.apply(Cc(this),e))}}function WA(t){return typeof t=="function"?KA(t):(t instanceof IDBTransaction&&qA(t),UA(t,BA())?new Proxy(t,pl):t)}function Fn(t){if(t instanceof IDBRequest)return $A(t);if(Pc.has(t))return Pc.get(t);const e=WA(t);return e!==t&&(Pc.set(t,e),wu.set(e,t)),e}const Cc=t=>wu.get(t);function zA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Fn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Fn(o.result),c.oldVersion,c.newVersion,Fn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const GA=["get","getKey","getAll","getAllKeys","count"],QA=["put","add","delete","clear"],bc=new Map;function Gf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=QA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return bc.set(e,i),i}HA(t=>({...t,get:(e,n,r)=>Gf(e,n)||t.get(e,n,r),has:(e,n)=>!!Gf(e,n)||t.has(e,n)}));/**
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
 */class YA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gl="@firebase/app",Qf="0.9.19";/**
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
 */const pr=new Eu("@firebase/app"),XA="@firebase/app-compat",ZA="@firebase/analytics-compat",e0="@firebase/analytics",t0="@firebase/app-check-compat",n0="@firebase/app-check",r0="@firebase/auth",s0="@firebase/auth-compat",i0="@firebase/database",o0="@firebase/database-compat",a0="@firebase/functions",c0="@firebase/functions-compat",l0="@firebase/installations",u0="@firebase/installations-compat",h0="@firebase/messaging",f0="@firebase/messaging-compat",d0="@firebase/performance",p0="@firebase/performance-compat",g0="@firebase/remote-config",m0="@firebase/remote-config-compat",_0="@firebase/storage",y0="@firebase/storage-compat",v0="@firebase/firestore",E0="@firebase/firestore-compat",w0="firebase",T0="10.4.0";/**
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
 */const ml="[DEFAULT]",I0={[gl]:"fire-core",[XA]:"fire-core-compat",[e0]:"fire-analytics",[ZA]:"fire-analytics-compat",[n0]:"fire-app-check",[t0]:"fire-app-check-compat",[r0]:"fire-auth",[s0]:"fire-auth-compat",[i0]:"fire-rtdb",[o0]:"fire-rtdb-compat",[a0]:"fire-fn",[c0]:"fire-fn-compat",[l0]:"fire-iid",[u0]:"fire-iid-compat",[h0]:"fire-fcm",[f0]:"fire-fcm-compat",[d0]:"fire-perf",[p0]:"fire-perf-compat",[g0]:"fire-rc",[m0]:"fire-rc-compat",[_0]:"fire-gcs",[y0]:"fire-gcs-compat",[v0]:"fire-fst",[E0]:"fire-fst-compat","fire-js":"fire-js",[w0]:"fire-js-all"};/**
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
 */const zo=new Map,_l=new Map;function A0(t,e){try{t.container.addComponent(e)}catch(n){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(_l.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;_l.set(e,t);for(const n of zo.values())A0(n,t);return!0}function Tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const R0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Un=new Oi("app","Firebase",R0);/**
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
 */class S0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const ms=T0;function zg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ml,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(n||(n=qg()),!n)throw Un.create("no-options");const i=zo.get(s);if(i){if(Wo(n,i.options)&&Wo(r,i.config))return i;throw Un.create("duplicate-app",{appName:s})}const o=new VA(s);for(const c of _l.values())o.addComponent(c);const a=new S0(n,r,o);return zo.set(s,a),a}function Gg(t=ml){const e=zo.get(t);if(!e&&t===ml&&qg())return zg();if(!e)throw Un.create("no-app",{appName:t});return e}function Bn(t,e,n){var r;let s=(r=I0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}ss(new dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const P0="firebase-heartbeat-database",C0=1,hi="firebase-heartbeat-store";let Oc=null;function Qg(){return Oc||(Oc=zA(P0,C0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hi)}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),Oc}async function b0(t){try{return await(await Qg()).transaction(hi).objectStore(hi).get(Yg(t))}catch(e){if(e instanceof wn)pr.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(n.message)}}}async function Yf(t,e){try{const r=(await Qg()).transaction(hi,"readwrite");await r.objectStore(hi).put(e,Yg(t)),await r.done}catch(n){if(n instanceof wn)pr.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function Yg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const O0=1024,k0=30*24*60*60*1e3;class N0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new V0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=k0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jf(),{heartbeatsToSend:n,unsentEntries:r}=D0(this._heartbeatsCache.heartbeats),s=Ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Jf(){return new Date().toISOString().substring(0,10)}function D0(t,e=O0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class V0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TA()?IA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await b0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xf(t){return Ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function x0(t){ss(new dr("platform-logger",e=>new YA(e),"PRIVATE")),ss(new dr("heartbeat",e=>new N0(e),"PRIVATE")),Bn(gl,Qf,t),Bn(gl,Qf,"esm2017"),Bn("fire-js","")}x0("");var M0="firebase",L0="10.4.0";/**
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
 */Bn(M0,L0,"app");var F0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Iu=Iu||{},te=F0||self;function ba(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ni(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function U0(t){return Object.prototype.hasOwnProperty.call(t,kc)&&t[kc]||(t[kc]=++B0)}var kc="closure_uid_"+(1e9*Math.random()>>>0),B0=0;function j0(t,e,n){return t.call.apply(t.bind,arguments)}function $0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ot(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=j0:ot=$0,ot.apply(null,arguments)}function fo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function We(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Wn(){this.s=this.s,this.o=this.o}var q0=0;Wn.prototype.s=!1;Wn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),q0!=0)&&U0(this)};Wn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Au(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Zf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ba(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var H0=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function fi(t){return/^[\s\xa0]*$/.test(t)}function Oa(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function zt(t){return Oa().indexOf(t)!=-1}function Ru(t){return Ru[" "](t),t}Ru[" "]=function(){};function K0(t,e){var n=LR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var W0=zt("Opera"),is=zt("Trident")||zt("MSIE"),Xg=zt("Edge"),yl=Xg||is,Zg=zt("Gecko")&&!(Oa().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge"))&&!(zt("Trident")||zt("MSIE"))&&!zt("Edge"),z0=Oa().toLowerCase().indexOf("webkit")!=-1&&!zt("Edge");function em(){var t=te.document;return t?t.documentMode:void 0}var vl;e:{var Nc="",Dc=function(){var t=Oa();if(Zg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xg)return/Edge\/([\d\.]+)/.exec(t);if(is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(z0)return/WebKit\/(\S+)/.exec(t);if(W0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dc&&(Nc=Dc?Dc[1]:""),is){var Vc=em();if(Vc!=null&&Vc>parseFloat(Nc)){vl=String(Vc);break e}}vl=Nc}var El;if(te.document&&is){var ed=em();El=ed||parseInt(vl,10)||void 0}else El=void 0;var G0=El;function di(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Zg){e:{try{Ru(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Q0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&di.$.h.call(this)}}We(di,at);var Q0={2:"touch",3:"pen",4:"mouse"};di.prototype.h=function(){di.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Di="closure_listenable_"+(1e6*Math.random()|0),Y0=0;function J0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++Y0,this.fa=this.ia=!1}function ka(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Su(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function X0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function tm(t){const e={};for(const n in t)e[n]=t[n];return e}const td="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<td.length;i++)n=td[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Na(t){this.src=t,this.g={},this.h=0}Na.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Tl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new J0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function wl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Jg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ka(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Pu="closure_lm_"+(1e6*Math.random()|0),xc={};function rm(t,e,n,r,s){if(r&&r.once)return im(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)rm(t,e[i],n,r,s);return null}return n=Ou(n),t&&t[Di]?t.O(e,n,Ni(r)?!!r.capture:!!r,s):sm(t,e,n,!1,r,s)}function sm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ni(s)?!!s.capture:!!s,a=bu(t);if(a||(t[Pu]=a=new Na(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Z0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)H0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(am(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Z0(){function t(n){return e.call(t.src,t.listener,n)}const e=eR;return t}function im(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)im(t,e[i],n,r,s);return null}return n=Ou(n),t&&t[Di]?t.P(e,n,Ni(r)?!!r.capture:!!r,s):sm(t,e,n,!0,r,s)}function om(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)om(t,e[i],n,r,s);else r=Ni(r)?!!r.capture:!!r,n=Ou(n),t&&t[Di]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Tl(i,n,r,s),-1<n&&(ka(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=bu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tl(e,n,r,s)),(n=-1<t?e[t]:null)&&Cu(n))}function Cu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Di])wl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(am(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bu(e))?(wl(n,t),n.h==0&&(n.src=null,e[Pu]=null)):ka(t)}}}function am(t){return t in xc?xc[t]:xc[t]="on"+t}function eR(t,e){if(t.fa)t=!0;else{e=new di(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Cu(t),t=n.call(r,e)}return t}function bu(t){return t=t[Pu],t instanceof Na?t:null}var Mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ou(t){return typeof t=="function"?t:(t[Mc]||(t[Mc]=function(e){return t.handleEvent(e)}),t[Mc])}function Ke(){Wn.call(this),this.i=new Na(this),this.S=this,this.J=null}We(Ke,Wn);Ke.prototype[Di]=!0;Ke.prototype.removeEventListener=function(t,e,n,r){om(this,t,e,n,r)};function Ye(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var s=e;e=new at(r,t),nm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=po(o,r,!0,e)&&s}if(o=e.g=t,s=po(o,r,!0,e)&&s,s=po(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=po(o,r,!1,e)&&s}Ke.prototype.N=function(){if(Ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ka(n[r]);delete t.g[e],t.h--}}this.J=null};Ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function po(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&wl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ku=te.JSON.stringify;class tR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function nR(){var t=Nu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class rR{constructor(){this.h=this.g=null}add(e,n){const r=cm.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var cm=new tR(()=>new sR,t=>t.reset());class sR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function iR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function oR(t){te.setTimeout(()=>{throw t},0)}let pi,gi=!1,Nu=new rR,lm=()=>{const t=te.Promise.resolve(void 0);pi=()=>{t.then(aR)}};var aR=()=>{for(var t;t=nR();){try{t.h.call(t.g)}catch(n){oR(n)}var e=cm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}gi=!1};function Da(t,e){Ke.call(this),this.h=t||1,this.g=e||te,this.j=ot(this.qb,this),this.l=Date.now()}We(Da,Ke);M=Da.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ye(this,"tick"),this.ga&&(Du(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Du(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Da.$.N.call(this),Du(this),delete this.g};function Vu(t,e,n){if(typeof t=="function")n&&(t=ot(t,n));else if(t&&typeof t.handleEvent=="function")t=ot(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function um(t){t.g=Vu(()=>{t.g=null,t.i&&(t.i=!1,um(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class cR extends Wn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:um(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(t){Wn.call(this),this.h=t,this.g={}}We(mi,Wn);var nd=[];function hm(t,e,n,r){Array.isArray(n)||(n&&(nd[0]=n.toString()),n=nd);for(var s=0;s<n.length;s++){var i=rm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function fm(t){Su(t.g,function(e,n){this.g.hasOwnProperty(n)&&Cu(e)},t),t.g={}}mi.prototype.N=function(){mi.$.N.call(this),fm(this)};mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Va(){this.g=!0}Va.prototype.Ea=function(){this.g=!1};function lR(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function uR(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+fR(t,n)+(r?" "+r:"")})}function hR(t,e){t.info(function(){return"TIMEOUT: "+e})}Va.prototype.info=function(){};function fR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ku(n)}catch{return e}}var Er={},rd=null;function xa(){return rd=rd||new Ke}Er.Ta="serverreachability";function dm(t){at.call(this,Er.Ta,t)}We(dm,at);function _i(t){const e=xa();Ye(e,new dm(e))}Er.STAT_EVENT="statevent";function pm(t,e){at.call(this,Er.STAT_EVENT,t),this.stat=e}We(pm,at);function mt(t){const e=xa();Ye(e,new pm(e,t))}Er.Ua="timingevent";function gm(t,e){at.call(this,Er.Ua,t),this.size=e}We(gm,at);function Vi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var Ma={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},mm={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function xu(){}xu.prototype.h=null;function sd(t){return t.h||(t.h=t.i())}function _m(){}var xi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Mu(){at.call(this,"d")}We(Mu,at);function Lu(){at.call(this,"c")}We(Lu,at);var Il;function La(){}We(La,xu);La.prototype.g=function(){return new XMLHttpRequest};La.prototype.i=function(){return{}};Il=new La;function Mi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new mi(this),this.P=dR,t=yl?125:void 0,this.V=new Da(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ym}function ym(){this.i=null,this.g="",this.h=!1}var dR=45e3,Al={},Go={};M=Mi.prototype;M.setTimeout=function(t){this.P=t};function Rl(t,e,n){t.L=1,t.v=Ua(gn(e)),t.s=n,t.S=!0,vm(t,null)}function vm(t,e){t.G=Date.now(),Li(t),t.A=gn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Pm(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ym,t.g=Gm(t.l,n?e:null,!t.s),0<t.O&&(t.M=new cR(ot(t.Pa,t,t.g),t.O)),hm(t.U,t.g,"readystatechange",t.nb),e=t.I?tm(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),_i(),lR(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&Gt(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=Gt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||yl||this.g&&(this.h.h||this.g.ja()||cd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?_i(3):_i(2)),Fa(this);var n=this.g.da();this.ca=n;t:if(Em(this)){var r=cd(this.g);t="";var s=r.length,i=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Gs(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,uR(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fi(a)){var l=a;break t}}l=null}if(n=l)Br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sl(this,n);else{this.i=!1,this.o=3,mt(12),or(this),Gs(this);break e}}this.S?(wm(this,u,o),yl&&this.i&&u==3&&(hm(this.U,this.V,"tick",this.mb),this.V.start())):(Br(this.j,this.m,o,null),Sl(this,o)),u==4&&or(this),this.i&&!this.J&&(u==4?Hm(this.l,this):(this.i=!1,Li(this)))}else VR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mt(12)):(this.o=0,mt(13)),or(this),Gs(this)}}}catch{}finally{}};function Em(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function wm(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=pR(t,n),s==Go){e==4&&(t.o=4,mt(14),r=!1),Br(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Al){t.o=4,mt(15),Br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Br(t.j,t.m,s,null),Sl(t,s);Em(t)&&s!=Go&&s!=Al&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),qu(e),e.M=!0,mt(11))):(Br(t.j,t.m,n,"[Invalid Chunked Response]"),or(t),Gs(t))}M.mb=function(){if(this.g){var t=Gt(this.g),e=this.g.ja();this.C<e.length&&(Fa(this),wm(this,t,e),this.i&&t!=4&&Li(this))}};function pR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Go:(n=Number(e.substring(n,r)),isNaN(n)?Al:(r+=1,r+n>e.length?Go:(e=e.slice(r,r+n),t.C=r+n,e)))}M.cancel=function(){this.J=!0,or(this)};function Li(t){t.Y=Date.now()+t.P,Tm(t,t.P)}function Tm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vi(ot(t.lb,t),e)}function Fa(t){t.B&&(te.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(hR(this.j,this.A),this.L!=2&&(_i(),mt(17)),or(this),this.o=2,Gs(this)):Tm(this,this.Y-t)};function Gs(t){t.l.H==0||t.J||Hm(t.l,t)}function or(t){Fa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Du(t.V),fm(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Sl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Pl(n.i,t))){if(!t.K&&Pl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Jo(n),qa(n);else break e;$u(n),mt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Vi(ot(n.ib,n),6e3));if(1>=Om(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ar(n,11)}else if((t.K||n.g==t)&&Jo(n),!fi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Fu(i,i.h),i.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Re(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=zm(r,r.J?r.pa:null,r.Y),o.K){km(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Fa(a),Li(a)),r.g=o}else $m(r);0<n.j.length&&Ha(n)}else l[0]!="stop"&&l[0]!="close"||ar(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ar(n,7):ju(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}_i(4)}catch{}}function gR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ba(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function mR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ba(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Im(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ba(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=mR(t),r=gR(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Am=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _R(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function hr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hr){this.h=t.h,Qo(this,t.j),this.s=t.s,this.g=t.g,Yo(this,t.m),this.l=t.l;var e=t.i,n=new yi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),id(this,n),this.o=t.o}else t&&(e=String(t).match(Am))?(this.h=!1,Qo(this,e[1]||"",!0),this.s=Ls(e[2]||""),this.g=Ls(e[3]||"",!0),Yo(this,e[4]),this.l=Ls(e[5]||"",!0),id(this,e[6]||"",!0),this.o=Ls(e[7]||"")):(this.h=!1,this.i=new yi(null,this.h))}hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fs(e,od,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fs(e,od,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fs(n,n.charAt(0)=="/"?ER:vR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fs(n,TR)),t.join("")};function gn(t){return new hr(t)}function Qo(t,e,n){t.j=n?Ls(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function id(t,e,n){e instanceof yi?(t.i=e,IR(t.i,t.h)):(n||(e=Fs(e,wR)),t.i=new yi(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Ua(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ls(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,yR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function yR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var od=/[#\/\?@]/g,vR=/[#\?:]/g,ER=/[#\?]/g,wR=/[#\?@]/g,TR=/#/g;function yi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zn(t){t.g||(t.g=new Map,t.h=0,t.i&&_R(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=yi.prototype;M.add=function(t,e){zn(this),this.i=null,t=_s(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rm(t,e){zn(t),e=_s(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Sm(t,e){return zn(t),e=_s(t,e),t.g.has(e)}M.forEach=function(t,e){zn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};M.ta=function(){zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};M.Z=function(t){zn(this);let e=[];if(typeof t=="string")Sm(this,t)&&(e=e.concat(this.g.get(_s(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return zn(this),this.i=null,t=_s(this,t),Sm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Pm(t,e,n){Rm(t,e),0<n.length&&(t.i=null,t.g.set(_s(t,e),Au(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function _s(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function IR(t,e){e&&!t.j&&(zn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Rm(this,r),Pm(this,s,n))},t)),t.j=e}var AR=class{constructor(t,e){this.g=t,this.map=e}};function Cm(t){this.l=t||RR,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var RR=10;function bm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Om(t){return t.h?1:t.g?t.g.size:0}function Pl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fu(t,e){t.g?t.g.add(e):t.h=e}function km(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Cm.prototype.cancel=function(){if(this.i=Nm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Nm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Au(t.i)}var SR=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function PR(){this.g=new SR}function CR(t,e,n){const r=n||"";try{Im(t,function(s,i){let o=s;Ni(s)&&(o=ku(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function bR(t,e){const n=new Va;if(te.Image){const r=new Image;r.onload=fo(go,n,r,"TestLoadImage: loaded",!0,e),r.onerror=fo(go,n,r,"TestLoadImage: error",!1,e),r.onabort=fo(go,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=fo(go,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function go(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ba(t){this.l=t.ec||null,this.j=t.ob||!1}We(Ba,xu);Ba.prototype.g=function(){return new ja(this.l,this.j)};Ba.prototype.i=function(t){return function(){return t}}({});function ja(t,e){Ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Uu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We(ja,Ke);var Uu=0;M=ja.prototype;M.open=function(t,e){if(this.readyState!=Uu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vi(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=Uu};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Dm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fi(this):vi(this),this.readyState==3&&Dm(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Fi(this))};M.Ya=function(t){this.g&&(this.response=t,Fi(this))};M.ka=function(){this.g&&Fi(this)};function Fi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vi(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OR=te.JSON.parse;function Ne(t){Ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Vm,this.L=this.M=!1}We(Ne,Ke);var Vm="",kR=/^https?$/i,NR=["POST","PUT"];M=Ne.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Il.g(),this.C=this.u?sd(this.u):sd(Il),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){ad(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=te.FormData&&t instanceof te.FormData,!(0<=Jg(NR,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Lm(this),0<this.B&&((this.L=DR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=Vu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ad(this,i)}};function DR(t){return is&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof Iu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))};function ad(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xm(t),$a(t)}function xm(t){t.F||(t.F=!0,Ye(t,"complete"),Ye(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),$a(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$a(this,!0)),Ne.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?Mm(this):this.kb())};M.kb=function(){Mm(this)};function Mm(t){if(t.h&&typeof Iu<"u"&&(!t.C[1]||Gt(t)!=4||t.da()!=2)){if(t.v&&Gt(t)==4)Vu(t.La,0,t);else if(Ye(t,"readystatechange"),Gt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Am)[1]||null;!s&&te.self&&te.self.location&&(s=te.self.location.protocol.slice(0,-1)),r=!kR.test(s?s.toLowerCase():"")}n=r}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var i=2<Gt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",xm(t)}}finally{$a(t)}}}}function $a(t,e){if(t.g){Lm(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=r}catch{}}}function Lm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function Gt(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OR(e)}};function cd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Vm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function VR(t){const e={};t=(t.g&&2<=Gt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(fi(t[r]))continue;var n=iR(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}X0(e,function(r){return r.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fm(t){let e="";return Su(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Fm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Os(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Um(t){this.Ga=0,this.j=[],this.l=new Va,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Os("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Os("baseRetryDelayMs",5e3,t),this.hb=Os("retryDelaySeedMs",1e4,t),this.eb=Os("forwardChannelMaxRetries",2,t),this.xa=Os("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Cm(t&&t.concurrentRequestLimit),this.Ja=new PR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=Um.prototype;M.ra=8;M.H=1;function ju(t){if(Bm(t),t.H==3){var e=t.W++,n=gn(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),Ui(t,n),e=new Mi(t,t.l,e),e.L=2,e.v=Ua(gn(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=Gm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Li(e)}Wm(t)}function qa(t){t.g&&(qu(t),t.g.cancel(),t.g=null)}function Bm(t){qa(t),t.u&&(te.clearTimeout(t.u),t.u=null),Jo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Ha(t){if(!bm(t.i)&&!t.m){t.m=!0;var e=t.Na;pi||lm(),gi||(pi(),gi=!0),Nu.add(e,t),t.C=0}}function xR(t,e){return Om(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Vi(ot(t.Na,t,e),Km(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Mi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=tm(i),nm(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jm(this,s,e),n=gn(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),Ui(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Fm(i)))+"&"+e:this.o&&Bu(n,this.o,i)),Fu(this.i,s),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),s.aa=!0,Rl(s,n,null)):Rl(s,n,e),this.H=2}}else this.H==3&&(t?ld(this,t):this.j.length==0||bm(this.i)||ld(this))};function ld(t,e){var n;e?n=e.m:n=t.W++;const r=gn(t.I);Re(r,"SID",t.K),Re(r,"RID",n),Re(r,"AID",t.V),Ui(t,r),t.o&&t.s&&Bu(r,t.o,t.s),n=new Mi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=jm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Fu(t.i,n),Rl(n,r,e)}function Ui(t,e){t.na&&Su(t.na,function(n,r){Re(e,r,n)}),t.h&&Im({},function(n,r){Re(e,r,n)})}function jm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ot(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{CR(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function $m(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;pi||lm(),gi||(pi(),gi=!0),Nu.add(e,t),t.A=0}}function $u(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Vi(ot(t.Ma,t),Km(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,qm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Vi(ot(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,mt(10),qa(this),qm(this))};function qu(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function qm(t){t.g=new Mi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=gn(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),Ui(t,e),t.o&&t.s&&Bu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ua(gn(e)),n.s=null,n.S=!0,vm(n,t)}M.ib=function(){this.v!=null&&(this.v=null,qa(this),$u(this),mt(19))};function Jo(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function Hm(t,e){var n=null;if(t.g==e){Jo(t),qu(t),t.g=null;var r=2}else if(Pl(t.i,e))n=e.F,km(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=xa(),Ye(r,new gm(r,n)),Ha(t)}else $m(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&xR(t,e)||r==2&&$u(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ar(t,5);break;case 4:ar(t,10);break;case 3:ar(t,6);break;default:ar(t,2)}}}function Km(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ar(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ot(t.pb,t);n||(n=new hr("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Qo(n,"https"),Ua(n)),bR(n.toString(),r)}else mt(2);t.H=0,t.h&&t.h.za(e),Wm(t),Bm(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),mt(2)):(this.l.info("Failed to ping google.com"),mt(1))};function Wm(t){if(t.H=0,t.ma=[],t.h){const e=Nm(t.i);(e.length!=0||t.j.length!=0)&&(Zf(t.ma,e),Zf(t.ma,t.j),t.i.i.length=0,Au(t.j),t.j.length=0),t.h.ya()}}function zm(t,e,n){var r=n instanceof hr?gn(n):new hr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Yo(r,r.m);else{var s=te.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new hr(null);r&&Qo(i,r),e&&(i.g=e),s&&Yo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Re(r,n,e),Re(r,"VER",t.ra),Ui(t,r),r}function Gm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ne(new Ba({ob:!0})):new Ne(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function Qm(){}M=Qm.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Xo(){if(is&&!(10<=Number(G0)))throw Error("Environmental error: no available transport.")}Xo.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){Ke.call(this),this.g=new Um(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!fi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!fi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ys(this)}We(Pt,Ke);Pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;mt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=zm(t,null,t.Y),Ha(t)};Pt.prototype.close=function(){ju(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ku(t),t=n);e.j.push(new AR(e.fb++,t)),e.H==3&&Ha(e)};Pt.prototype.N=function(){this.g.h=null,delete this.j,ju(this.g),delete this.g,Pt.$.N.call(this)};function Ym(t){Mu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(Ym,Mu);function Jm(){Lu.call(this),this.status=1}We(Jm,Lu);function ys(t){this.g=t}We(ys,Qm);ys.prototype.Ba=function(){Ye(this.g,"a")};ys.prototype.Aa=function(t){Ye(this.g,new Ym(t))};ys.prototype.za=function(t){Ye(this.g,new Jm)};ys.prototype.ya=function(){Ye(this.g,"b")};function MR(){this.blockSize=-1}function Ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}We(Ut,MR);Ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Lc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ut.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Lc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Lc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Lc(this,r),s=0;break}}this.h=s,this.i+=e};Ut.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ie(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var LR={};function Hu(t){return-128<=t&&128>t?K0(t,function(e){return new Ie([e|0],0>e?-1:0)}):new Ie([t|0],0>t?-1:0)}function Qt(t){if(isNaN(t)||!isFinite(t))return Wr;if(0>t)return Ge(Qt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Cl;return new Ie(e,0)}function Xm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ge(Xm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Qt(Math.pow(e,8)),r=Wr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Qt(Math.pow(e,i)),r=r.R(i).add(Qt(o))):(r=r.R(n),r=r.add(Qt(o)))}return r}var Cl=4294967296,Wr=Hu(0),bl=Hu(1),ud=Hu(16777216);M=Ie.prototype;M.ea=function(){if(kt(this))return-Ge(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Cl+r)*e,e*=Cl}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(un(this))return"0";if(kt(this))return"-"+Ge(this).toString(t);for(var e=Qt(Math.pow(t,6)),n=this,r="";;){var s=ea(n,e).g;n=Zo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,un(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function un(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function kt(t){return t.h==-1}M.X=function(t){return t=Zo(this,t),kt(t)?-1:un(t)?0:1};function Ge(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ie(n,~t.h).add(bl)}M.abs=function(){return kt(this)?Ge(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ie(n,n[n.length-1]&-2147483648?-1:0)};function Zo(t,e){return t.add(Ge(e))}M.R=function(t){if(un(this)||un(t))return Wr;if(kt(this))return kt(t)?Ge(this).R(Ge(t)):Ge(Ge(this).R(t));if(kt(t))return Ge(this.R(Ge(t)));if(0>this.X(ud)&&0>t.X(ud))return Qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,mo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,mo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,mo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,mo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ie(n,0)};function mo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ks(t,e){this.g=t,this.h=e}function ea(t,e){if(un(e))throw Error("division by zero");if(un(t))return new ks(Wr,Wr);if(kt(t))return e=ea(Ge(t),e),new ks(Ge(e.g),Ge(e.h));if(kt(e))return e=ea(t,Ge(e)),new ks(Ge(e.g),e.h);if(30<t.g.length){if(kt(t)||kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=bl,r=e;0>=r.X(t);)n=hd(n),r=hd(r);var s=Dr(n,1),i=Dr(r,1);for(r=Dr(r,2),n=Dr(n,2);!un(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Dr(r,1),n=Dr(n,1)}return e=Zo(t,s.R(e)),new ks(s,e)}for(s=Wr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Qt(n),o=i.R(e);kt(o)||0<o.X(t);)n-=r,i=Qt(n),o=i.R(e);un(i)&&(i=bl),s=s.add(i),t=Zo(t,o)}return new ks(s,t)}M.gb=function(t){return ea(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ie(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ie(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ie(n,this.h^t.h)};function hd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ie(n,t.h)}function Dr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ie(s,t.h)}Xo.prototype.createWebChannel=Xo.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;Ma.NO_ERROR=0;Ma.TIMEOUT=8;Ma.HTTP_ERROR=6;mm.COMPLETE="complete";_m.EventType=xi;xi.OPEN="a";xi.CLOSE="b";xi.ERROR="c";xi.MESSAGE="d";Ke.prototype.listen=Ke.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;Ut.prototype.digest=Ut.prototype.l;Ut.prototype.reset=Ut.prototype.reset;Ut.prototype.update=Ut.prototype.j;Ie.prototype.add=Ie.prototype.add;Ie.prototype.multiply=Ie.prototype.R;Ie.prototype.modulo=Ie.prototype.gb;Ie.prototype.compare=Ie.prototype.X;Ie.prototype.toNumber=Ie.prototype.ea;Ie.prototype.toString=Ie.prototype.toString;Ie.prototype.getBits=Ie.prototype.D;Ie.fromNumber=Qt;Ie.fromString=Xm;var FR=function(){return new Xo},UR=function(){return xa()},Fc=Ma,BR=mm,jR=Er,fd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_o=_m,$R=Ne,qR=Ut,zr=Ie;const dd="@firebase/firestore";/**
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
 */let vs="10.4.0";/**
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
 */const gr=new Eu("@firebase/firestore");function Ns(){return gr.logLevel}function q(t,...e){if(gr.logLevel<=ue.DEBUG){const n=e.map(Ku);gr.debug(`Firestore (${vs}): ${t}`,...n)}}function mn(t,...e){if(gr.logLevel<=ue.ERROR){const n=e.map(Ku);gr.error(`Firestore (${vs}): ${t}`,...n)}}function os(t,...e){if(gr.logLevel<=ue.WARN){const n=e.map(Ku);gr.warn(`Firestore (${vs}): ${t}`,...n)}}function Ku(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+t;throw mn(e),new Error(e)}function Pe(t,e){t||Z()}function se(t,e){return t}/**
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
 */class Zm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class KR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WR{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new dn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new Zm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new tt(e)}}class zR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class GR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class QR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class YR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.R=n.token,new QR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function JR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class e_{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=JR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function as(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Le(0,0))}static max(){return new ne(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ei{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ei.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ei?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Ei{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const XR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Ei{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return XR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new B(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new B(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Se.fromString(e))}static fromName(e){return new Q(Se.fromString(e).popFirst(5))}static empty(){return new Q(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Se(e.slice()))}}function ZR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new qn(s,Q.empty(),e)}function eS(t){return new qn(t.readTime,t.key,-1)}class qn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new qn(ne.min(),Q.empty(),-1)}static max(){return new qn(ne.max(),Q.empty(),-1)}}function tS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const nS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Bi(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==nS)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Wu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Wu.ae=-1;function Ka(t){return t==null}function ta(t){return t===0&&1/t==-1/0}function sS(t){return typeof t=="number"&&Number.isInteger(t)&&!ta(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function pd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function t_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yo(this.root,e,this.comparator,!0)}}class yo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gd(this.data.getIterator())}getIteratorFrom(e){return new gd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class gd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class St{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new St([])}unionWith(e){let n=new ct(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class n_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new n_("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const iS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=iS.exec(t);if(Pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */class oS{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ti&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zu(t)?4:aS(t)?9007199254740991:10:Z()}function nn(t,e){if(t===e)return!0;const n=_r(t);if(n!==_r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wi(t).isEqual(wi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hn(s.timestampValue),a=Hn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return mr(s.bytesValue).isEqual(mr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),a=Ve(i.doubleValue);return o===a?ta(o)===ta(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(pd(o)!==pd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!nn(o[c],a[c])))return!1;return!0}(t,e);default:return Z()}}function Ii(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function cs(t,e){if(t===e)return 0;const n=_r(t),r=_r(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ve(i.integerValue||i.doubleValue),c=Ve(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return md(t.timestampValue,e.timestampValue);case 4:return md(wi(t),wi(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,o){const a=mr(i),c=mr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ve(a[l],c[l]);if(u!==0)return u}return ve(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ve(Ve(i.latitude),Ve(o.latitude));return a!==0?a:ve(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=cs(a[l],c[l]);if(u)return u}return ve(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===vo.mapValue&&o===vo.mapValue)return 0;if(i===vo.mapValue)return 1;if(o===vo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ve(c[h],u[h]);if(d!==0)return d;const m=cs(a[c[h]],l[u[h]]);if(m!==0)return m}return ve(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Z()}}function md(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Hn(t),r=Hn(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function ls(t){return Ol(t)}function Ol(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ol(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ol(n.fields[o])}`;return s+"}"}(t.mapValue):Z()}function _d(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kl(t){return!!t&&"integerValue"in t}function Qu(t){return!!t&&"arrayValue"in t}function yd(t){return!!t&&"nullValue"in t}function vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Po(t){return!!t&&"mapValue"in t}function Qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function aS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Po(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Qs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Po(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Po(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){wr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(Qs(this.value))}}function r_(t){const e=[];return wr(t.fields,(n,r)=>{const s=new st([n]);if(Po(r)){const i=r_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new St(e)}/**
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
 */class nt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new nt(e,0,ne.min(),ne.min(),ne.min(),Et.empty(),0)}static newFoundDocument(e,n,r,s){return new nt(e,1,n,ne.min(),r,s,0)}static newNoDocument(e,n){return new nt(e,2,n,ne.min(),ne.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,ne.min(),ne.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class na{constructor(e,n){this.position=e,this.inclusive=n}}function Ed(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=cs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ys{constructor(e,n="asc"){this.field=e,this.dir=n}}function cS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class s_{}class xe extends s_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uS(e,n,r):n==="array-contains"?new dS(e,r):n==="in"?new pS(e,r):n==="not-in"?new gS(e,r):n==="array-contains-any"?new mS(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new hS(e,r):new fS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(cs(n,this.value)):n!==null&&_r(this.value)===_r(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Bt extends s_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Bt(e,n)}matches(e){return i_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function i_(t){return t.op==="and"}function o_(t){return lS(t)&&i_(t)}function lS(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function Nl(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+ls(t.value);if(o_(t))return t.filters.map(e=>Nl(e)).join(",");{const e=t.filters.map(n=>Nl(n)).join(",");return`${t.op}(${e})`}}function a_(t,e){return t instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&nn(r.value,s.value)}(t,e):t instanceof Bt?function(r,s){return s instanceof Bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&a_(o,s.filters[a]),!0):!1}(t,e):void Z()}function c_(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${ls(n.value)}`}(t):t instanceof Bt?function(n){return n.op.toString()+" {"+n.getFilters().map(c_).join(" ,")+"}"}(t):"Filter"}class uS extends xe{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class hS extends xe{constructor(e,n){super(e,"in",n),this.keys=l_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fS extends xe{constructor(e,n){super(e,"not-in",n),this.keys=l_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function l_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class dS extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qu(n)&&Ii(n.arrayValue,this.value)}}class pS extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ii(this.value.arrayValue,n)}}class gS extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ii(this.value.arrayValue,n)}}class mS extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ii(this.value.arrayValue,r))}}/**
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
 */class _S{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Td(t,e=null,n=[],r=[],s=null,i=null,o=null){return new _S(t,e,n,r,s,i,o)}function Yu(t){const e=se(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ka(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ls(r)).join(",")),e.he=n}return e.he}function Ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wd(t.startAt,e.startAt)&&wd(t.endAt,e.endAt)}function Dl(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class $i{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function yS(t,e,n,r,s,i,o,a){return new $i(t,e,n,r,s,i,o,a)}function Xu(t){return new $i(t)}function Id(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function u_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function h_(t){return t.collectionGroup!==null}function Js(t){const e=se(t);if(e.Pe===null){e.Pe=[];const n=Zu(e),r=u_(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ys(n)),e.Pe.push(new Ys(st.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ys(st.keyField(),i))}}}return e.Pe}function Xt(t){const e=se(t);return e.Ie||(e.Ie=vS(e,Js(t))),e.Ie}function vS(t,e){if(t.limitType==="F")return Td(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ys(s.field,i)});const n=t.endAt?new na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new na(t.startAt.position,t.startAt.inclusive):null;return Td(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vl(t,e){e.getFirstInequalityField(),Zu(t);const n=t.filters.concat([e]);return new $i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xl(t,e,n){return new $i(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wa(t,e){return Ju(Xt(t),Xt(e))&&t.limitType===e.limitType}function f_(t){return`${Yu(Xt(t))}|lt:${t.limitType}`}function Lr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>c_(s)).join(", ")}]`),Ka(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ls(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ls(s)).join(",")),`Target(${r})`}(Xt(t))}; limitType=${t.limitType})`}function za(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Js(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Ed(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Js(r),s)||r.endAt&&!function(o,a,c){const l=Ed(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Js(r),s))}(t,e)}function ES(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function d_(t){return(e,n)=>{let r=!1;for(const s of Js(t)){const i=wS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wS(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?cs(c,l):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class Es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return t_(this.inner)}size(){return this.innerSize}}/**
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
 */const TS=new ke(Q.comparator);function _n(){return TS}const p_=new ke(Q.comparator);function Us(...t){let e=p_;for(const n of t)e=e.insert(n.key,n);return e}function g_(t){let e=p_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Xs()}function m_(){return Xs()}function Xs(){return new Es(t=>t.toString(),(t,e)=>t.isEqual(e))}const IS=new ke(Q.comparator),AS=new ct(Q.comparator);function ce(...t){let e=AS;for(const n of t)e=e.add(n);return e}const RS=new ct(ve);function SS(){return RS}/**
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
 */function __(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ta(e)?"-0":e}}function y_(t){return{integerValue:""+t}}function PS(t,e){return sS(e)?y_(e):__(t,e)}/**
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
 */class Ga{constructor(){this._=void 0}}function CS(t,e,n){return t instanceof ra?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zu(i)&&(i=Gu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ai?E_(t,e):t instanceof Ri?w_(t,e):function(s,i){const o=v_(s,i),a=Ad(o)+Ad(s.Te);return kl(o)&&kl(s.Te)?y_(a):__(s.serializer,a)}(t,e)}function bS(t,e,n){return t instanceof Ai?E_(t,e):t instanceof Ri?w_(t,e):n}function v_(t,e){return t instanceof sa?function(r){return kl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ra extends Ga{}class Ai extends Ga{constructor(e){super(),this.elements=e}}function E_(t,e){const n=T_(e);for(const r of t.elements)n.some(s=>nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ri extends Ga{constructor(e){super(),this.elements=e}}function w_(t,e){let n=T_(e);for(const r of t.elements)n=n.filter(s=>!nn(s,r));return{arrayValue:{values:n}}}class sa extends Ga{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Ad(t){return Ve(t.integerValue||t.doubleValue)}function T_(t){return Qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ai&&s instanceof Ai||r instanceof Ri&&s instanceof Ri?as(r.elements,s.elements,nn):r instanceof sa&&s instanceof sa?nn(r.Te,s.Te):r instanceof ra&&s instanceof ra}(t.transform,e.transform)}class kS{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Co(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Qa{}function I_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eh(t.key,Lt.none()):new qi(t.key,t.data,Lt.none());{const n=t.data,r=Et.empty();let s=new ct(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Gn(t.key,r,new St(s.toArray()),Lt.none())}}function NS(t,e,n){t instanceof qi?function(s,i,o){const a=s.value.clone(),c=Sd(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Gn?function(s,i,o){if(!Co(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Sd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(A_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zs(t,e,n,r){return t instanceof qi?function(i,o,a,c){if(!Co(i.precondition,o))return a;const l=i.value.clone(),u=Pd(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Gn?function(i,o,a,c){if(!Co(i.precondition,o))return a;const l=Pd(i.fieldTransforms,c,o),u=o.data;return u.setAll(A_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Co(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function DS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=v_(r.transform,s||null);i!=null&&(n===null&&(n=Et.empty()),n.set(r.field,i))}return n||null}function Rd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&as(r,s,(i,o)=>OS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qi extends Qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gn extends Qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function A_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sd(t,e,n){const r=new Map;Pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,bS(o,a,n[s]))}return r}function Pd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,CS(i,o,e))}return r}class eh extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VS extends Qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&NS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=m_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=I_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>Rd(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>Rd(n,r))}}class th{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Pe(e.mutations.length===r.length);let s=function(){return IS}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new th(e,n,r,s)}}/**
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
 */class MS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class LS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,fe;function FS(t){switch(t){default:return Z();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function R_(t){if(t===void 0)return mn("GRPC error has no .code"),R.UNKNOWN;switch(t){case De.OK:return R.OK;case De.CANCELLED:return R.CANCELLED;case De.UNKNOWN:return R.UNKNOWN;case De.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case De.INTERNAL:return R.INTERNAL;case De.UNAVAILABLE:return R.UNAVAILABLE;case De.UNAUTHENTICATED:return R.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case De.NOT_FOUND:return R.NOT_FOUND;case De.ALREADY_EXISTS:return R.ALREADY_EXISTS;case De.PERMISSION_DENIED:return R.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case De.ABORTED:return R.ABORTED;case De.OUT_OF_RANGE:return R.OUT_OF_RANGE;case De.UNIMPLEMENTED:return R.UNIMPLEMENTED;case De.DATA_LOSS:return R.DATA_LOSS;default:return Z()}}(fe=De||(De={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function US(){return new TextEncoder}/**
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
 */const BS=new zr([4294967295,4294967295],0);function Cd(t){const e=US().encode(t),n=new qR;return n.update(e),new Uint8Array(n.digest())}function bd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new zr([n,r],0),new zr([s,i],0)]}class nh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bs(`Invalid padding: ${n}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=zr.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(zr.fromNumber(r)));return s.compare(BS)===1&&(s=new zr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Cd(e),[r,s]=bd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new nh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Cd(e),[r,s]=bd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Hi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ya(ne.min(),s,new ke(ve),_n(),ce())}}class Hi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Hi(r,n,ce(),ce(),ce())}}/**
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
 */class bo{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class S_{constructor(e,n){this.targetId=e,this.ye=n}}class P_{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Od{constructor(){this.we=0,this.Se=Nd(),this.be=ut.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=ce(),n=ce(),r=ce();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z()}}),new Hi(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Nd()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class jS{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=_n(),this.Ue=kd(),this.We=new ke(ve)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Dl(i))if(r===0){const o=new Q(i.path);this.je(n,o,nt.newNoDocument(o,ne.min()))}else Pe(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=mr(r).toUint8Array()}catch(c){if(c instanceof n_)return os("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new nh(o,s,i)}catch(c){return os(c instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Dl(a.target)){const c=new Q(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,nt.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=ce();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Ya(e,n,this.We,this.$e,r);return this.$e=_n(),this.Ue=kd(),this.We=new ke(ve),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Od,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ct(ve),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Od),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function kd(){return new ke(Q.comparator)}function Nd(){return new ke(Q.comparator)}const $S=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),HS=(()=>({and:"AND",or:"OR"}))();class KS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ml(t,e){return t.useProto3Json||Ka(e)?e:{value:e}}function ia(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WS(t,e){return ia(t,e.toTimestamp())}function Zt(t){return Pe(!!t),ne.fromTimestamp(function(n){const r=Hn(n);return new Le(r.seconds,r.nanos)}(t))}function rh(t,e){return function(r){return new Se(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function b_(t){const e=Se.fromString(t);return Pe(D_(e)),e}function Ll(t,e){return rh(t.databaseId,e.path)}function Uc(t,e){const n=b_(e);if(n.get(1)!==t.databaseId.projectId)throw new B(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(O_(n))}function Fl(t,e){return rh(t.databaseId,e)}function zS(t){const e=b_(t);return e.length===4?Se.emptyPath():O_(e)}function Ul(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function O_(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dd(t,e,n){return{name:Ll(t,e),fields:n.value.mapValue.fields}}function GS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Pe(u===void 0||typeof u=="string"),ut.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Uint8Array),ut.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:R_(l.code);return new B(u,l.message||"")}(o);n=new P_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Uc(t,r.document.name),i=Zt(r.document.updateTime),o=r.document.createTime?Zt(r.document.createTime):ne.min(),a=new Et({mapValue:{fields:r.document.fields}}),c=nt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new bo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Uc(t,r.document),i=r.readTime?Zt(r.readTime):ne.min(),o=nt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new bo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Uc(t,r.document),i=r.removedTargetIds||[];n=new bo([],i,s,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new LS(s,i),a=r.targetId;n=new S_(a,o)}}return n}function QS(t,e){let n;if(e instanceof qi)n={update:Dd(t,e.key,e.value)};else if(e instanceof eh)n={delete:Ll(t,e.key)};else if(e instanceof Gn)n={update:Dd(t,e.key,e.data),updateMask:sP(e.fieldMask)};else{if(!(e instanceof VS))return Z();n={verify:Ll(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ra)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ai)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ri)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:WS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function YS(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Zt(s.updateTime):Zt(i);return o.isEqual(ne.min())&&(o=Zt(i)),new kS(o,s.transformResults||[])}(n,e))):[]}function JS(t,e){return{documents:[Fl(t,e.path)]}}function XS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return N_(Bt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Fr(h.field),direction:tP(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ml(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ZS(t){let e=zS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Pe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=k_(h);return d instanceof Bt&&o_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Ys(Ur(v.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ka(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new na(m,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,m=h.values||[];return new na(m,d)}(n.endAt)),yS(e,s,o,i,a,"F",c,l)}function eP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function k_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ur(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ur(n.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(n.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ur(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(Ur(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bt.create(n.compositeFilter.filters.map(r=>k_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function tP(t){return $S[t]}function nP(t){return qS[t]}function rP(t){return HS[t]}function Fr(t){return{fieldPath:t.canonicalString()}}function Ur(t){return st.fromServerFormat(t.fieldPath)}function N_(t){return t instanceof xe?function(n){if(n.op==="=="){if(vd(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NAN"}};if(yd(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vd(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NAN"}};if(yd(n.value))return{unaryFilter:{field:Fr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fr(n.field),op:nP(n.op),value:n.value}}}(t):t instanceof Bt?function(n){const r=n.getFilters().map(s=>N_(s));return r.length===1?r[0]:{compositeFilter:{op:rP(n.op),filters:r}}}(t):Z()}function sP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function D_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Dn{constructor(e,n,r,s,i=ne.min(),o=ne.min(),a=ut.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iP{constructor(e){this.ht=e}}function oP(t){const e=ZS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xl(e,e.limit,"L"):e}/**
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
 */class aP{constructor(){this.an=new cP}addToCollectionParentIndex(e,n){return this.an.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(qn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class cP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(Se.comparator)).toArray()}}/**
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
 */class us{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new us(0)}static Ln(){return new us(-1)}}/**
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
 */class lP{constructor(){this.changes=new Es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class uP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class hP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Zs(r.mutation,s,St.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Us();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=_n();const o=Xs(),a=function(){return Xs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Gn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Zs(u.mutation,l,u.mutation.getFieldMask(),Le.now())):o.set(l.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new uP(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Xs();let s=new ke((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||St.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ce()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=m_();u.forEach(d=>{if(!i.has(d)){const m=I_(n.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):h_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(cr());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:g_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Us();return this.indexManager.getCollectionParents(e,i).next(a=>b.forEach(a,c=>{const l=function(h,d){return new $i(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,nt.newInvalidDocument(u)))});let a=Us();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Zs(u.mutation,l,St.empty(),Le.now()),za(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class fP{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return b.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Zt(s.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:oP(s.bundledQuery),readTime:Zt(s.readTime)}}(n)),b.resolve()}}/**
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
 */class dP{constructor(){this.overlays=new ke(Q.comparator),this.Pr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=cr(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=cr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=cr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return b.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new MS(n,r));let i=this.Pr.get(n);i===void 0&&(i=ce(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
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
 */class sh{constructor(){this.Ir=new ct(Be.dr),this.Tr=new ct(Be.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Be(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new Q(new Se([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new Q(new Se([])),r=new Be(n,e),s=new Be(n,e+1);let i=ce();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return Q.comparator(e.key,n.key)||ve(e.yr,n.yr)}static Er(e,n){return ve(e.yr,n.yr)||Q.comparator(e.key,n.key)}}/**
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
 */class pP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new ct(Be.dr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xS(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new Be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(ve);return n.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new Be(new Q(i),0);let a=new ct(ve);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.yr)),!0)},o),b.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Pe(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return b.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Be(n,0),s=this.Sr.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gP{constructor(e){this.Fr=e,this.docs=function(){return new ke(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=_n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=_n();const o=n.path,a=new Q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||tS(eS(u),r)<=0||(s.has(u.key)||za(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z()}Mr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mP(this)}getSize(e){return b.resolve(this.size)}}class mP extends lP{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class _P{constructor(e){this.persistence=e,this.Or=new Es(n=>Yu(n),Ju),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Nr=0,this.Br=new sh,this.targetCount=0,this.Lr=us.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),b.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new us(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Qn(n),b.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
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
 */class yP{constructor(e,n){this.kr={},this.overlays={},this.qr=new Wu(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new _P(this),this.indexManager=new aP,this.remoteDocumentCache=function(s){return new gP(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new iP(n),this.Ur=new fP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new pP(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new vP(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return b.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class vP extends rS{constructor(e){super(),this.currentSequenceNumber=e}}class ih{constructor(e){this.persistence=e,this.jr=new sh,this.Hr=null}static Jr(e){return new ih(e)}get Yr(){if(this.Hr)return this.Hr;throw Z()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),b.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Yr,r=>{const s=Q.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,ne.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return b.or([()=>b.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class EP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class wP{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new EP;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(Ns()<=ue.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Lr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),b.resolve()):(Ns()<=ue.DEBUG&&q("QueryEngine","Query:",Lr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(Ns()<=ue.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Lr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(n))):b.resolve())}Hi(e,n){if(Id(n))return b.resolve(null);let r=Xt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=xl(n,null,"F"),r=Xt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,xl(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,s){return Id(n)||s.isEqual(ne.min())?b.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?b.resolve(null):(Ns()<=ue.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Lr(n)),this.ts(e,o,n,ZR(s,-1)).next(a=>a))})}Xi(e,n){let r=new ct(d_(e));return n.forEach((s,i)=>{za(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return Ns()<=ue.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Lr(n)),this.ji.getDocumentsMatchingQuery(e,n,qn.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class TP{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new ke(ve),this.ss=new Es(i=>Yu(i),Ju),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hP(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function IP(t,e,n,r){return new TP(t,e,n,r)}async function V_(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ce();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function AP(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let m=b.resolve();return d.forEach(v=>{m=m.next(()=>u.getEntry(c,v)).next(w=>{const S=l.docVersions.get(v);Pe(S!==null),w.version.compareTo(S)<0&&(h.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ce();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function x_(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function RP(t,e){const n=se(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(ut.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(w,S,O){return w.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(d,m,u)&&a.push(n.Kr.updateTargetData(i,m))});let c=_n(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(SP(i,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(ne.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.rs=s,i))}function SP(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=_n();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:s}})}function PP(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function CP(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new Dn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Bl(t,e,n){const r=se(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ji(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function Vd(t,e,n){const r=se(t);let s=ne.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=se(c),d=h.ss.get(u);return d!==void 0?b.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,Xt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:ne.min(),n?i:ce())).next(a=>(bP(r,ES(e),a),{documents:a,Ps:i})))}function bP(t,e,n){let r=t.os.get(e)||ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class xd{constructor(){this.activeTargetIds=SS()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OP{constructor(){this.ro=new xd,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new xd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class kP{so(e){}shutdown(){}}/**
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
 */const NP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class DP{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const et="WebChannelConnection";class VP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=Bc(),c=this.Do(n,r);q("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,i,o),this.vo(n,c,l,s).then(u=>(q("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw os("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=NP[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Bc();return new Promise((o,a)=>{const c=new $R;c.setWithCredentials(!0),c.listenOnce(BR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fc.NO_ERROR:const u=c.getResponseJson();q(et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Fc.TIMEOUT:q(et,`RPC '${e}' ${i} timed out`),a(new B(R.DEADLINE_EXCEEDED,"Request time out"));break;case Fc.HTTP_ERROR:const h=c.getStatus();if(q(et,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(S){const O=S.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(O)>=0?O:R.UNKNOWN}(m.status);a(new B(v,m.message))}else a(new B(R.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new B(R.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{q(et,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);q(et,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const s=Bc(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=FR(),a=UR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");q(et,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,m=!1;const v=new DP({ho:S=>{m?q(et,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(d||(q(et,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),q(et,`RPC '${e}' stream ${s} sending:`,S),h.send(S))},Po:()=>h.close()}),w=(S,O,V)=>{S.listen(O,K=>{try{V(K)}catch(N){setTimeout(()=>{throw N},0)}})};return w(h,_o.EventType.OPEN,()=>{m||q(et,`RPC '${e}' stream ${s} transport opened.`)}),w(h,_o.EventType.CLOSE,()=>{m||(m=!0,q(et,`RPC '${e}' stream ${s} transport closed`),v.mo())}),w(h,_o.EventType.ERROR,S=>{m||(m=!0,os(et,`RPC '${e}' stream ${s} transport errored:`,S),v.mo(new B(R.UNAVAILABLE,"The operation could not be completed")))}),w(h,_o.EventType.MESSAGE,S=>{var O;if(!m){const V=S.data[0];Pe(!!V);const K=V,N=K.error||((O=K[0])===null||O===void 0?void 0:O.error);if(N){q(et,`RPC '${e}' stream ${s} received error:`,N);const J=N.status;let ae=function(W){const re=De[W];if(re!==void 0)return R_(re)}(J),he=N.message;ae===void 0&&(ae=R.INTERNAL,he="Unknown error status: "+J+" with message "+N.message),m=!0,v.mo(new B(ae,he)),h.close()}else q(et,`RPC '${e}' stream ${s} received:`,V),v.fo(V)}}),w(a,jR.STAT_EVENT,S=>{S.stat===fd.PROXY?q(et,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===fd.NOPROXY&&q(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.Vo()},0),v}}function jc(){return typeof document<"u"?document:null}/**
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
 */function Ja(t){return new KS(t,!0)}/**
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
 */class M_{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class L_{constructor(e,n,r,s,i,o,a,c){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new M_(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(mn(n.toString()),mn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new B(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xP extends L_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=GS(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Zt(o.readTime):ne.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=Ul(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Dl(c)?{documents:JS(i,c)}:{query:XS(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=C_(i,o.resumeToken);const l=Ml(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ne.min())>0){a.readTime=ia(i,o.snapshotVersion.toTimestamp());const l=Ml(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=eP(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=Ul(this.serializer),n.removeTarget=e,this.n_(n)}}class MP extends L_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=YS(e.writeResults,e.commitTime),r=Zt(e.commitTime);return this.listener.T_(r,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Ul(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QS(this.serializer,r))};this.n_(n)}}/**
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
 */class LP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new B(R.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(R.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(R.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class FP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class UP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{Tr(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=se(c);l.F_.add(4),await Ki(l),l.O_.set("Unknown"),l.F_.delete(4),await Xa(l)}(this))})}),this.O_=new FP(r,s)}}async function Xa(t){if(Tr(t))for(const e of t.M_)await e(!0)}async function Ki(t){for(const e of t.M_)await e(!1)}function F_(t,e){const n=se(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),lh(n)?ch(n):ws(n).Yo()&&ah(n,e))}function U_(t,e){const n=se(t),r=ws(n);n.v_.delete(e),r.Yo()&&B_(n,e),n.v_.size===0&&(r.Yo()?r.e_():Tr(n)&&n.O_.set("Unknown"))}function ah(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).l_(e)}function B_(t,e){t.N_.Le(e),ws(t).h_(e)}function ch(t){t.N_=new jS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.O_.y_()}function lh(t){return Tr(t)&&!ws(t).Jo()&&t.v_.size>0}function Tr(t){return se(t).F_.size===0}function j_(t){t.N_=void 0}async function BP(t){t.v_.forEach((e,n)=>{ah(t,e)})}async function jP(t,e){j_(t),lh(t)?(t.O_.b_(e),ch(t)):t.O_.set("Unknown")}async function $P(t,e,n){if(t.O_.set("Online"),e instanceof P_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oa(t,r)}else if(e instanceof bo?t.N_.Ge(e):e instanceof S_?t.N_.Xe(e):t.N_.He(e),!n.isEqual(ne.min()))try{const r=await x_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.v_.get(l);u&&i.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.v_.get(c);if(!u)return;i.v_.set(c,u.withResumeToken(ut.EMPTY_BYTE_STRING,u.snapshotVersion)),B_(i,c);const h=new Dn(u.target,c,l,u.sequenceNumber);ah(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await oa(t,r)}}async function oa(t,e,n){if(!ji(e))throw e;t.F_.add(1),await Ki(t),t.O_.set("Offline"),n||(n=()=>x_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Xa(t)})}function $_(t,e){return e().catch(n=>oa(t,n,e))}async function Za(t){const e=se(t),n=Kn(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;qP(e);)try{const s=await PP(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,HP(e,s)}catch(s){await oa(e,s)}q_(e)&&H_(e)}function qP(t){return Tr(t)&&t.C_.length<10}function HP(t,e){t.C_.push(e);const n=Kn(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function q_(t){return Tr(t)&&!Kn(t).Jo()&&t.C_.length>0}function H_(t){Kn(t).start()}async function KP(t){Kn(t).A_()}async function WP(t){const e=Kn(t);for(const n of t.C_)e.d_(n.mutations)}async function zP(t,e,n){const r=t.C_.shift(),s=th.from(r,e,n);await $_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Za(t)}async function GP(t,e){e&&Kn(t).I_&&await async function(r,s){if(function(o){return FS(o)&&o!==R.ABORTED}(s.code)){const i=r.C_.shift();Kn(r).Xo(),await $_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Za(r)}}(t,e),q_(t)&&H_(t)}async function Ld(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Tr(n);n.F_.add(3),await Ki(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Xa(n)}async function QP(t,e){const n=se(t);e?(n.F_.delete(2),await Xa(n)):e||(n.F_.add(2),await Ki(n),n.O_.set("Unknown"))}function ws(t){return t.B_||(t.B_=function(n,r,s){const i=se(n);return i.V_(),new xP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:BP.bind(null,t),Eo:jP.bind(null,t),c_:$P.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),lh(t)?ch(t):t.O_.set("Unknown")):(await t.B_.stop(),j_(t))})),t.B_}function Kn(t){return t.L_||(t.L_=function(n,r,s){const i=se(n);return i.V_(),new MP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:KP.bind(null,t),Eo:GP.bind(null,t),E_:WP.bind(null,t),T_:zP.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Za(t)):(await t.L_.stop(),t.C_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class Gr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Us(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new Gr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fd{constructor(){this.k_=new ke(Q.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):Z():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new hs(e,n,Gr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class YP{constructor(){this.Q_=void 0,this.listeners=[]}}class JP{constructor(){this.queries=new Es(e=>f_(e),Wa),this.onlineState="Unknown",this.K_=new Set}}async function K_(t,e){const n=se(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new YP),s)try{i.Q_=await n.onListen(r)}catch(o){const a=hh(o,`Initialization of query '${Lr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&fh(n)}async function W_(t,e){const n=se(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function XP(t,e){const n=se(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&fh(n)}function ZP(t,e,n){const r=se(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function fh(t){t.K_.forEach(e=>{e.next()})}class z_{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class G_{constructor(e){this.key=e}}class Q_{constructor(e){this.key=e}}class eC{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ce(),this.mutatedKeys=ce(),this.ua=d_(e),this.ca=new Gr(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Fd,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),m=za(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;d&&m?d.data.isEqual(m.data)?v!==w&&(r.track({type:3,doc:m}),S=!0):this.Ia(d,m)||(r.track({type:2,doc:m}),S=!0,(c&&this.ua(m,c)>0||l&&this.ua(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),S=!0):d&&!m&&(r.track({type:1,doc:d}),S=!0,(c||l)&&(a=!0)),S&&(m?(o=o.add(m),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((l,u)=>function(d,m){const v=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return v(d)-v(m)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,i.length!==0||c?{snapshot:new hs(this.query,e.ca,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Fd,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=ce(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new Q_(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new G_(r))}),n}Ra(e){this.oa=e.Ps,this.aa=ce();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return hs.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class tC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class nC{constructor(e){this.key=e,this.ma=!1}}class rC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Es(a=>f_(a),Wa),this.pa=new Map,this.ya=new Set,this.wa=new ke(Q.comparator),this.Sa=new Map,this.ba=new sh,this.Da={},this.Ca=new Map,this.va=us.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function sC(t,e){const n=pC(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await CP(n.localStore,Xt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await iC(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&F_(n.remoteStore,o)}return s}async function iC(t,e,n,r,s){t.Ma=(h,d,m)=>async function(w,S,O,V){let K=S.view.ha(O);K.es&&(K=await Vd(w.localStore,S.query,!1).then(({documents:ae})=>S.view.ha(ae,K)));const N=V&&V.targetChanges.get(S.targetId),J=S.view.applyChanges(K,w.isPrimaryClient,N);return Bd(w,S.targetId,J.Ea),J.snapshot}(t,h,d,m);const i=await Vd(t.localStore,e,!0),o=new eC(e,i.Ps),a=o.ha(i.documents),c=Hi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Bd(t,n,l.Ea);const u=new tC(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function oC(t,e){const n=se(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Wa(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Bl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),U_(n.remoteStore,r.targetId),jl(n,r.targetId)}).catch(Bi)):(jl(n,r.targetId),await Bl(n.localStore,r.targetId,!0))}async function aC(t,e,n){const r=gC(t);try{const s=await function(o,a){const c=se(o),l=Le.now(),u=a.reduce((m,v)=>m.add(v.key),ce());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=_n(),w=ce();return c._s.getEntries(m,u).next(S=>{v=S,v.forEach((O,V)=>{V.isValidDocument()||(w=w.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,v)).next(S=>{h=S;const O=[];for(const V of a){const K=DS(V,h.get(V.key).overlayedDocument);K!=null&&O.push(new Gn(V.key,K,r_(K.value.mapValue),Lt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,O,a)}).next(S=>{d=S;const O=S.applyToLocalDocumentSet(h,w);return c.documentOverlayCache.saveOverlays(m,S.batchId,O)})}).then(()=>({batchId:d.batchId,changes:g_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new ke(ve)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await Wi(r,s.changes),await Za(r.remoteStore)}catch(s){const i=hh(s,"Failed to persist write");n.reject(i)}}async function Y_(t,e){const n=se(t);try{const r=await RP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Pe(o.ma):s.removedDocuments.size>0&&(Pe(o.ma),o.ma=!1))}),await Wi(n,r,e)}catch(r){await Bi(r)}}function Ud(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=se(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&fh(c)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cC(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new ke(Q.comparator);o=o.insert(i,nt.newNoDocument(i,ne.min()));const a=ce().add(i),c=new Ya(ne.min(),new Map,new ke(ve),o,a);await Y_(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),dh(r)}else await Bl(r.localStore,e,!1).then(()=>jl(r,e,n)).catch(Bi)}async function lC(t,e){const n=se(t),r=e.batch.batchId;try{const s=await AP(n.localStore,e);X_(n,r,null),J_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wi(n,s)}catch(s){await Bi(s)}}async function uC(t,e,n){const r=se(t);try{const s=await function(o,a){const c=se(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Pe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);X_(r,e,n),J_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wi(r,s)}catch(s){await Bi(s)}}function J_(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function X_(t,e,n){const r=se(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function jl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||Z_(t,r)})}function Z_(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(U_(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),dh(t))}function Bd(t,e,n){for(const r of n)r instanceof G_?(t.ba.addReference(r.key,e),hC(t,r)):r instanceof Q_?(q("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||Z_(t,r.key)):Z()}function hC(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(q("SyncEngine","New document in limbo: "+n),t.ya.add(r),dh(t))}function dh(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new Q(Se.fromString(e)),r=t.va.next();t.Sa.set(r,new nC(n)),t.wa=t.wa.insert(n,r),F_(t.remoteStore,new Dn(Xt(Xu(n.path)),r,"TargetPurposeLimboResolution",Wu.ae))}}async function Wi(t,e,n){const r=se(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=oh.$i(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(c,l){const u=se(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(l,d=>b.forEach(d.Qi,m=>u.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>b.forEach(d.Ki,m=>u.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!ji(h))throw h;q("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const m=u.rs.get(d),v=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(v);u.rs=u.rs.insert(d,w)}}}(r.localStore,i))}async function fC(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await V_(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new B(R.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wi(n,r.cs)}}function dC(t,e){const n=se(t),r=n.Sa.get(e);if(r&&r.ma)return ce().add(r.key);{let s=ce();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function pC(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Y_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cC.bind(null,e),e.fa.c_=XP.bind(null,e.eventManager),e.fa.xa=ZP.bind(null,e.eventManager),e}function gC(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uC.bind(null,e),e}class jd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ja(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return IP(this.persistence,new wP,e.initialUser,this.serializer)}createPersistence(e){return new yP(ih.Jr,this.serializer)}createSharedClientState(e){return new OP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ud(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fC.bind(null,this.syncEngine),await QP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JP}()}createDatastore(e){const n=Ja(e.databaseInfo.databaseId),r=function(i){return new VP(i)}(e.databaseInfo);return function(i,o,a,c){return new LP(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new UP(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ud(this.syncEngine,n,0),function(){return Md.C()?new Md:new kP}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new rC(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=se(n);q("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Ki(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
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
 */class ey{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):mn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class _C{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=e_.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{q("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(q("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $c(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await V_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $d(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vC(t);q("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Ld(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Ld(e.remoteStore,i)),t._onlineComponents=e}function yC(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function vC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await $c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!yC(n))throw n;os("Error using user provided cache. Falling back to memory cache: "+n),await $c(t,new jd)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await $c(t,new jd);return t._offlineComponents}async function ty(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await $d(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await $d(t,new mC))),t._onlineComponents}function EC(t){return ty(t).then(e=>e.syncEngine)}async function ny(t){const e=await ty(t),n=e.eventManager;return n.onListen=sC.bind(null,e.syncEngine),n.onUnlisten=oC.bind(null,e.syncEngine),n}function wC(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new ey({next:d=>{o.enqueueAndForget(()=>W_(i,h));const m=d.docs.has(a);!m&&d.fromCache?l.reject(new B(R.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?l.reject(new B(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new z_(Xu(a.path),u,{includeMetadataChanges:!0,Z_:!0});return K_(i,h)}(await ny(t),t.asyncQueue,e,n,r)),r.promise}function TC(t,e,n={}){const r=new dn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new ey({next:d=>{o.enqueueAndForget(()=>W_(i,h)),d.fromCache&&c.source==="server"?l.reject(new B(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new z_(a,u,{includeMetadataChanges:!0,Z_:!0});return K_(i,h)}(await ny(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function ry(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */function sy(t,e,n){if(!n)throw new B(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IC(t,e,n,r){if(e===!0&&r===!0)throw new B(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hd(t){if(!Q.isDocumentKey(t))throw new B(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kd(t){if(Q.isDocumentKey(t))throw new B(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ec(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ec(t);throw new B(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Wd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ry((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new B(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HR;switch(r.type){case"firstParty":return new GR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qd.get(n);r&&(q("ComponentProvider","Removing Datastore"),qd.delete(n),r.terminate())}(this),Promise.resolve()}}function AC(t,e,n,r={}){var s;const i=(t=yn(t,tc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=tt.MOCK_USER;else{a=_A(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new B(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new tt(l)}t._authCredentials=new KR(new Zm(a,c))}}/**
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
 */class Ts{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ts(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class jn extends Ts{constructor(e,n,r){super(e,n,Xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new Q(e))}withConverter(e){return new jn(this.firestore,e,this._path)}}function zd(t,e,...n){if(t=He(t),sy("collection","path",e),t instanceof tc){const r=Se.fromString(e,...n);return Kd(r),new jn(t,null,r)}{if(!(t instanceof wt||t instanceof jn))throw new B(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Kd(r),new jn(t.firestore,null,r)}}function js(t,e,...n){if(t=He(t),arguments.length===1&&(e=e_.V()),sy("doc","path",e),t instanceof tc){const r=Se.fromString(e,...n);return Hd(r),new wt(t,null,new Q(r))}{if(!(t instanceof wt||t instanceof jn))throw new B(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Hd(r),new wt(t.firestore,t instanceof jn?t.converter:null,new Q(r))}}/**
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
 */class RC{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new M_(this,"async_queue_retry"),this.ou=()=>{const n=jc();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=jc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=jc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new dn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!ji(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw mn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=uh.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&Z()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class Is extends tc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new RC}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||iy(this),this._firestoreClient.terminate()}}function SC(t,e){const n=typeof t=="object"?t:Gg(),r=typeof t=="string"?t:e||"(default)",s=Tu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gA("firestore");i&&AC(s,...i)}return s}function ph(t){return t._firestoreClient||iy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function iy(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new oS(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ry(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new _C(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fs(ut.fromBase64String(e))}catch(n){throw new B(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fs(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */const PC=/^__.*__$/;class CC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Gn(e,this.data,this.fieldMask,n,this.fieldTransforms):new qi(e,this.data,n,this.fieldTransforms)}}class oy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Gn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ay(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class _h{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new _h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return aa(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(ay(this.Tu)&&PC.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class bC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ja(e)}wu(e,n,r,s=!1){return new _h({Tu:e,methodName:n,yu:r,path:st.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yh(t){const e=t._freezeSettings(),n=Ja(t._databaseId);return new bC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OC(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);vh("Data must be an object, but it was:",o,r);const a=cy(r,o);let c,l;if(i.merge)c=new St(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=$l(e,h,n);if(!o.contains(d))throw new B(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);uy(u,d)||u.push(d)}c=new St(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new CC(new Et(a),c,l)}class rc extends gh{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof rc}}function kC(t,e,n,r){const s=t.wu(1,e,n);vh("Data must be an object, but it was:",s,r);const i=[],o=Et.empty();wr(r,(c,l)=>{const u=Eh(e,c,n);l=He(l);const h=s.mu(u);if(l instanceof rc)i.push(u);else{const d=zi(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new St(i);return new oy(o,a,s.fieldTransforms)}function NC(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[$l(e,r,n)],c=[s];if(i.length%2!=0)throw new B(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push($l(e,i[d])),c.push(i[d+1]);const l=[],u=Et.empty();for(let d=a.length-1;d>=0;--d)if(!uy(l,a[d])){const m=a[d];let v=c[d];v=He(v);const w=o.mu(m);if(v instanceof rc)l.push(m);else{const S=zi(v,w);S!=null&&(l.push(m),u.set(m,S))}}const h=new St(l);return new oy(u,h,o.fieldTransforms)}function DC(t,e,n,r=!1){return zi(n,t.wu(r?4:3,e))}function zi(t,e){if(ly(t=He(t)))return vh("Unsupported field value:",e,t),cy(t,e);if(t instanceof gh)return function(r,s){if(!ay(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=zi(a,s.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return PS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:ia(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ia(s.serializer,i)}}if(r instanceof mh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fs)return{bytesValue:C_(s.serializer,r._byteString)};if(r instanceof wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${ec(r)}`)}(t,e)}function cy(t,e){const n={};return t_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,(r,s)=>{const i=zi(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ly(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof mh||t instanceof fs||t instanceof wt||t instanceof gh)}function vh(t,e,n){if(!ly(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ec(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function $l(t,e,n){if((e=He(e))instanceof nc)return e._internalPath;if(typeof e=="string")return Eh(t,e);throw aa("Field path arguments must be of type string or ",t,!1,void 0,n)}const VC=new RegExp("[~\\*/\\[\\]]");function Eh(t,e,n){if(e.search(VC)>=0)throw aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nc(...e.split("."))._internalPath}catch{throw aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function aa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new B(R.INVALID_ARGUMENT,a+t+c)}function uy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class hy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xC extends hy{data(){return super.data()}}function wh(t,e){return typeof e=="string"?Eh(t,e):e instanceof nc?e._internalPath:e._delegate._internalPath}/**
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
 */function MC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Th{}class LC extends Th{}function FC(t,e,...n){let r=[];e instanceof Th&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Ih).length,a=i.filter(c=>c instanceof sc).length;if(o>1||o>0&&a>0)throw new B(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class sc extends LC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sc(e,n,r)}_apply(e){const n=this._parse(e);return fy(e._query,n),new Ts(e.firestore,e.converter,Vl(e._query,n))}_parse(e){const n=yh(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new B(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Qd(h,u);const m=[];for(const v of h)m.push(Gd(c,i,v));d={arrayValue:{values:m}}}else d=Gd(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Qd(h,u),d=DC(a,o,h,u==="in"||u==="not-in");return xe.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function UC(t,e,n){const r=e,s=wh("where",t);return sc._create(s,r,n)}class Ih extends Th{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ih(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Bt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)fy(o,c),o=Vl(o,c)}(e._query,n),new Ts(e.firestore,e.converter,Vl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Gd(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new B(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!h_(e)&&n.indexOf("/")!==-1)throw new B(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!Q.isDocumentKey(r))throw new B(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return _d(t,new Q(r))}if(n instanceof wt)return _d(t,n._key);throw new B(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ec(n)}.`)}function Qd(t,e){if(!Array.isArray(t)||t.length===0)throw new B(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fy(t,e){if(e.isInequality()){const r=Zu(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new B(R.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=u_(t);i!==null&&BC(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function BC(t,e,n){if(!n.isEqual(e))throw new B(R.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class jC{convertValue(e,n="none"){switch(_r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new mh(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wi(e));default:return null}}convertTimestamp(e){const n=Hn(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Pe(D_(r));const s=new Ti(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function $C(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class $s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dy extends hy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Oo extends dy{data(e={}){return super.data(e)}}class qC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new $s(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Oo(this._firestore,this._userDataWriter,r.key,r,new $s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Oo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new $s(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Oo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new $s(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:HC(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function qc(t){t=yn(t,wt);const e=yn(t.firestore,Is);return wC(ph(e),t._key).then(n=>QC(e,t,n))}class py extends jC{constructor(e){super(),this.firestore=e}convertBytes(e){return new fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function KC(t){t=yn(t,Ts);const e=yn(t.firestore,Is),n=ph(e),r=new py(e);return MC(t._query),TC(n,t._query).then(s=>new qC(e,r,t,s))}function WC(t,e,n,...r){t=yn(t,wt);const s=yn(t.firestore,Is),i=yh(s);let o;return o=typeof(e=He(e))=="string"||e instanceof nc?NC(i,"updateDoc",t._key,e,n,r):kC(i,"updateDoc",t._key,e),Ah(s,[o.toMutation(t._key,Lt.exists(!0))])}function zC(t){return Ah(yn(t.firestore,Is),[new eh(t._key,Lt.none())])}function GC(t,e){const n=yn(t.firestore,Is),r=js(t),s=$C(t.converter,e);return Ah(n,[OC(yh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function Ah(t,e){return function(r,s){const i=new dn;return r.asyncQueue.enqueueAndForget(async()=>aC(await EC(r),s,i)),i.promise}(ph(t),e)}function QC(t,e,n){const r=n.docs.get(e._key),s=new py(t);return new dy(t,s,e._key,r,new $s(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){vs=s})(ms),ss(new dr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Is(new WR(r.getProvider("auth-internal")),new YR(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new B(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ti(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Bn(dd,"4.2.0",e),Bn(dd,"4.2.0","esm2017")})();function Rh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Yd(t){return t!==void 0&&t.enterprise!==void 0}class YC{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function gy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JC=gy,my=new Oi("auth","Firebase",gy());/**
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
 */const ca=new Eu("@firebase/auth");function XC(t,...e){ca.logLevel<=ue.WARN&&ca.warn(`Auth (${ms}): ${t}`,...e)}function ko(t,...e){ca.logLevel<=ue.ERROR&&ca.error(`Auth (${ms}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw Sh(t,...e)}function en(t,...e){return Sh(t,...e)}function ZC(t,e,n){const r=Object.assign(Object.assign({},JC()),{[e]:n});return new Oi("auth","Firebase",r).create(e,{appName:t.name})}function Sh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return my.create(t,...e)}function X(t,e,...n){if(!t)throw Sh(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function vn(t,e){t||hn(e)}/**
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
 */function ql(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eb(){return Jd()==="http:"||Jd()==="https:"}function Jd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function tb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eb()||vA()||"connection"in navigator)?navigator.onLine:!0}function nb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=yA()||EA()}get(){return tb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ph(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _y{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sb=new Gi(3e4,6e4);function Ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ar(t,e,n,r,s={}){return yy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ki(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),_y.fetch()(vy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function yy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rb),e);try{const s=new ib(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw wo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ZC(t,u,l);jt(t,u)}}catch(s){if(s instanceof wn)throw s;jt(t,"network-request-failed",{message:String(s)})}}async function Qi(t,e,n,r,s={}){const i=await Ar(t,e,n,r,s);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ph(t.config,s):`${t.config.apiScheme}://${s}`}class ib{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),sb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=en(t,e,r);return s.customData._tokenResponse=n,s}async function ob(t,e){return Ar(t,"GET","/v2/recaptchaConfig",Ir(t,e))}/**
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
 */async function ab(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function cb(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lb(t,e=!1){const n=He(t),r=await n.getIdToken(e),s=Ch(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ei(Hc(s.auth_time)),issuedAtTime:ei(Hc(s.iat)),expirationTime:ei(Hc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hc(t){return Number(t)*1e3}function Ch(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const s=jg(n);return s?JSON.parse(s):(ko("Failed to decode base64 JWT payload"),null)}catch(s){return ko("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ub(t){const e=Ch(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Si(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&hb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ey{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function la(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Si(t,cb(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?gb(i.providerUserInfo):[],a=pb(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ey(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function db(t){const e=He(t);await la(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function gb(t){return t.map(e=>{var{providerId:n}=e,r=Rh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mb(t,e){const n=await yy(t,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=vy(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_y.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ub(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await mb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Pi;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
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
 */function Rn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Rh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ey(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Si(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lb(this,e)}reload(){return db(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await la(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Si(this,ab(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,V=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:N,isAnonymous:J,providerData:ae,stsTokenManager:he}=n;X(K&&he,e,"internal-error");const F=Pi.fromJSON(this.name,he);X(typeof K=="string",e,"internal-error"),Rn(h,e.name),Rn(d,e.name),X(typeof N=="boolean",e,"internal-error"),X(typeof J=="boolean",e,"internal-error"),Rn(m,e.name),Rn(v,e.name),Rn(w,e.name),Rn(S,e.name),Rn(O,e.name),Rn(V,e.name);const W=new fr({uid:K,auth:e,email:d,emailVerified:N,displayName:h,isAnonymous:J,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:F,createdAt:O,lastLoginAt:V});return ae&&Array.isArray(ae)&&(W.providerData=ae.map(re=>Object.assign({},re))),S&&(W._redirectEventId=S),W}static async _fromIdTokenResponse(e,n,r=!1){const s=new Pi;s.updateFromServerResponse(n);const i=new fr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await la(i),i}}/**
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
 */const Xd=new Map;function fn(t){vn(t instanceof Function,"Expected a class definition");let e=Xd.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xd.set(t,e),e)}/**
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
 */class wy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wy.type="NONE";const Zd=wy;/**
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
 */function No(t,e,n){return`firebase:${t}:${e}:${n}`}class Qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=No(this.userKey,s.apiKey,i),this.fullPersistenceKey=No("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qr(fn(Zd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||fn(Zd);const o=No(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=fr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Qr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Qr(i,e,r))}}/**
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
 */function ep(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ay(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ty(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sy(e))return"Blackberry";if(Py(e))return"Webos";if(bh(e))return"Safari";if((e.includes("chrome/")||Iy(e))&&!e.includes("edge/"))return"Chrome";if(Ry(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ty(t=lt()){return/firefox\//i.test(t)}function bh(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Iy(t=lt()){return/crios\//i.test(t)}function Ay(t=lt()){return/iemobile/i.test(t)}function Ry(t=lt()){return/android/i.test(t)}function Sy(t=lt()){return/blackberry/i.test(t)}function Py(t=lt()){return/webos/i.test(t)}function ic(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _b(t=lt()){var e;return ic(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yb(){return wA()&&document.documentMode===10}function Cy(t=lt()){return ic(t)||Ry(t)||Py(t)||Sy(t)||/windows phone/i.test(t)||Ay(t)}function vb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function by(t,e=[]){let n;switch(t){case"Browser":n=ep(lt());break;case"Worker":n=`${ep(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${r}`}/**
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
 */class Eb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wb(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",Ir(t,e))}/**
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
 */const Tb=6;class Ib{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Tb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Ab{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tp(this),this.idTokenSubscription=new tp(this),this.beforeStateQueue=new Eb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=my,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await la(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wb(this),n=new Ib(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=by(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rr(t){return He(t)}class tp{constructor(e){this.auth=e,this.observer=null,this.addObserver=CA(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Rb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Oy(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=en("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Rb().appendChild(r)})}function Sb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Pb="https://www.google.com/recaptcha/enterprise.js?render=",Cb="recaptcha-enterprise",bb="NO_RECAPTCHA";class Ob{constructor(e){this.type=Cb,this.auth=Rr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ob(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new YC(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Yd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(bb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Yd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Oy(Pb+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ua(t,e,n,r=!1){const s=new Ob(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function kb(t,e){const n=Tu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wo(i,e??{}))return s;jt(s,"already-initialized")}return n.initialize({options:e})}function Nb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Db(t,e,n){const r=Rr(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ky(e),{host:o,port:a}=Vb(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||xb()}function ky(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Vb(t){const e=ky(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:np(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:np(o)}}}function np(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Oh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}async function Mb(t,e){return Ar(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Lb(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}async function Fb(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}/**
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
 */class Ci extends Oh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ci(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ci(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await ua(e,r,"signInWithPassword");return Kc(e,s)}else return Kc(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await ua(e,r,"signInWithPassword");return Kc(e,i)}else return Promise.reject(s)});case"emailLink":return Lb(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Mb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fb(e,{idToken:n,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Yr(t,e){return Qi(t,"POST","/v1/accounts:signInWithIdp",Ir(t,e))}/**
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
 */const Ub="http://localhost";class yr extends Oh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Rh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:Ub,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
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
 */function Bb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jb(t){const e=xs(Ms(t)).link,n=e?xs(Ms(e)).deep_link_id:null,r=xs(Ms(t)).deep_link_id;return(r?xs(Ms(r)).link:null)||r||n||e||t}class kh{constructor(e){var n,r,s,i,o,a;const c=xs(Ms(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Bb((s=c.mode)!==null&&s!==void 0?s:null);X(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=jb(e);try{return new kh(n)}catch{return null}}}/**
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
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return Ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kh.parseLink(n);return X(r,"argument-error"),Ci._fromEmailAndCode(e,r.code,r.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ny{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yi extends Ny{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ha extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ha.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ha(e,n,r,s)}}function Dy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ha._fromErrorAndOperation(t,i,e,r):i})}async function $b(t,e,n=!1){const r=await Si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vr._forOperation(t,"link",r)}/**
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
 */async function qb(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Si(t,Dy(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=Ch(i.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),vr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
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
 */async function Vy(t,e,n=!1){const r="signIn",s=await Dy(t,r,e),i=await vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Hb(t,e){return Vy(Rr(t),e)}/**
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
 */async function xy(t){const e=Rr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Kb(t,e,n){var r;const s=Rr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await ua(s,i,"signUpPassword");o=Wc(s,l)}else o=Wc(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ua(s,i,"signUpPassword");return Wc(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&xy(t),l}),c=await vr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function Wb(t,e,n){return Hb(He(t),As.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xy(t),r})}function zb(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function Gb(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function Qb(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function Yb(t){return He(t).signOut()}const fa="__sak";/**
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
 */class My{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fa,"1"),this.storage.removeItem(fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Jb(){const t=lt();return bh(t)||ic(t)}const Xb=1e3,Zb=10;class Ly extends My{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jb()&&vb(),this.fallbackToPolling=Cy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Zb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ly.type="LOCAL";const e1=Ly;/**
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
 */class Fy extends My{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fy.type="SESSION";const Uy=Fy;/**
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
 */function t1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new oc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await t1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oc.receivers=[];/**
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
 */class n1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Nh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tn(){return window}function r1(t){tn().location.href=t}/**
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
 */function By(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function s1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function i1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function o1(){return By()?self:null}/**
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
 */const jy="firebaseLocalStorageDb",a1=1,da="firebaseLocalStorage",$y="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ac(t,e){return t.transaction([da],e?"readwrite":"readonly").objectStore(da)}function c1(){const t=indexedDB.deleteDatabase(jy);return new Ji(t).toPromise()}function Hl(){const t=indexedDB.open(jy,a1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(da,{keyPath:$y})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(da)?e(r):(r.close(),await c1(),e(await Hl()))})})}async function sp(t,e,n){const r=ac(t,!0).put({[$y]:e,value:n});return new Ji(r).toPromise()}async function l1(t,e){const n=ac(t,!1).get(e),r=await new Ji(n).toPromise();return r===void 0?null:r.value}function ip(t,e){const n=ac(t,!0).delete(e);return new Ji(n).toPromise()}const u1=800,h1=3;class qy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>h1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return By()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oc._getInstance(o1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await s1(),!this.activeServiceWorker)return;this.sender=new n1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||i1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hl();return await sp(e,fa,"1"),await ip(e,fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>l1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ip(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ac(s,!1).getAll();return new Ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qy.type="LOCAL";const f1=qy;new Gi(3e4,6e4);/**
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
 */function d1(t,e){return e?fn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Dh extends Oh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function p1(t){return Vy(t.auth,new Dh(t),t.bypassAuthState)}function g1(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),qb(n,new Dh(t),t.bypassAuthState)}async function m1(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),$b(n,new Dh(t),t.bypassAuthState)}/**
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
 */class Hy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p1;case"linkViaPopup":case"linkViaRedirect":return m1;case"reauthViaPopup":case"reauthViaRedirect":return g1;default:jt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _1=new Gi(2e3,1e4);class jr extends Hy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Nh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_1.get())};e()}}jr.currentPopupAction=null;/**
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
 */const y1="pendingRedirect",Do=new Map;class v1 extends Hy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const r=await E1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function E1(t,e){const n=I1(e),r=T1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function w1(t,e){Do.set(t._key(),e)}function T1(t){return fn(t._redirectPersistence)}function I1(t){return No(y1,t.config.apiKey,t.name)}async function A1(t,e,n=!1){const r=Rr(t),s=d1(r,e),o=await new v1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const R1=10*60*1e3;class S1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!P1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ky(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=R1&&this.cachedEventUids.clear(),this.cachedEventUids.has(op(e))}saveEventToCache(e){this.cachedEventUids.add(op(e)),this.lastProcessedEventTime=Date.now()}}function op(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ky({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function P1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ky(t);default:return!1}}/**
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
 */async function C1(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
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
 */const b1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,O1=/^https?/;async function k1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await C1(t);for(const n of e)try{if(N1(n))return}catch{}jt(t,"unauthorized-domain")}function N1(t){const e=ql(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!O1.test(n))return!1;if(b1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const D1=new Gi(3e4,6e4);function ap(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function V1(t){return new Promise((e,n)=>{var r,s,i;function o(){ap(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ap(),n(en(t,"network-request-failed"))},timeout:D1.get()})}if(!((s=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tn().gapi)===null||i===void 0)&&i.load)o();else{const a=Sb("iframefcb");return tn()[a]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},Oy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Vo=null,e})}let Vo=null;function x1(t){return Vo=Vo||V1(t),Vo}/**
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
 */const M1=new Gi(5e3,15e3),L1="__/auth/iframe",F1="emulator/auth/iframe",U1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j1(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ph(e,F1):`https://${t.config.authDomain}/${L1}`,r={apiKey:e.apiKey,appName:t.name,v:ms},s=B1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ki(r).slice(1)}`}async function $1(t){const e=await x1(t),n=tn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:j1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=tn().setTimeout(()=>{i(o)},M1.get());function c(){tn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const q1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},H1=500,K1=600,W1="_blank",z1="http://localhost";class cp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function G1(t,e,n,r=H1,s=K1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},q1),{width:r.toString(),height:s.toString(),top:i,left:o}),l=lt().toLowerCase();n&&(a=Iy(l)?W1:n),Ty(l)&&(e=e||z1,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(_b(l)&&a!=="_self")return Q1(e||"",a),new cp(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new cp(h)}function Q1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Y1="__/auth/handler",J1="emulator/auth/handler",X1=encodeURIComponent("fac");async function lp(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ms,eventId:s};if(e instanceof Ny){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",PA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Yi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${X1}=${encodeURIComponent(c)}`:"";return`${Z1(t)}?${ki(a).slice(1)}${l}`}function Z1({config:t}){return t.emulator?Ph(t,J1):`https://${t.authDomain}/${Y1}`}/**
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
 */const zc="webStorageSupport";class eO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uy,this._completeRedirectFn=A1,this._overrideRedirectResult=w1}async _openPopup(e,n,r,s){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await lp(e,n,r,ql(),s);return G1(e,o,Nh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await lp(e,n,r,ql(),s);return r1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $1(e),r=new S1(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zc,{type:zc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zc];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=k1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cy()||bh()||ic()}}const tO=eO;var up="@firebase/auth",hp="1.3.0";/**
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
 */class nO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sO(t){ss(new dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:by(t)},l=new Ab(r,s,i,c);return Nb(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ss(new dr("auth-internal",e=>{const n=Rr(e.getProvider("auth").getImmediate());return(r=>new nO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(up,hp,rO(t)),Bn(up,hp,"esm2017")}/**
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
 */const iO=5*60,oO=Hg("authIdTokenMaxAge")||iO;let fp=null;const aO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oO)return;const s=n==null?void 0:n.token;fp!==s&&(fp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cO(t=Gg()){const e=Tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kb(t,{popupRedirectResolver:tO,persistence:[f1,e1,Uy]}),r=Hg("authTokenSyncURL");if(r){const i=aO(r);Gb(n,i,()=>i(n.currentUser)),zb(n,o=>i(o))}const s=$g("auth");return s&&Db(n,`http://${s}`),n}sO("Browser");const lO={apiKey:"AIzaSyBEj_lvulwL921R6C-GKJN1eC4haiLIk0Q",authDomain:"vue3-2c548.firebaseapp.com",projectId:"vue3-2c548",storageBucket:"vue3-2c548.appspot.com",messagingSenderId:"975447172434",appId:"1:975447172434:web:d7afa045c68a84b2df468"};zg(lO);const Vr=SC(),ln=cO(),uO="modulepreload",hO=function(t){return"/fbvue3-exp/"+t},dp={},Gc=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=hO(i),i in dp)return;dp[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":uO,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};const fO={__name:"TheWelcome",setup(t){return(e,n)=>" welcome "}},dO={__name:"HomeView",setup(t){return(e,n)=>(og(),ag("main",null,[it(fO)]))}},pp=async(t,e,n)=>{const r=Wy();r.loading=!0,await r.currentUser()?n("/about"):n(),r.loading=!1},xo=UI({history:nI("/fbvue3-exp/"),routes:[{path:"/",name:"home",component:dO},{path:"/login",name:"login",component:()=>Gc(()=>import("./Login-6b736e13.js"),[]),beforeEnter:pp},{path:"/register",name:"register",component:()=>Gc(()=>import("./Register-9584648d.js"),[]),beforeEnter:pp},{path:"/about",name:"about",component:()=>Gc(()=>import("./AboutView-f606786d.js"),["assets/AboutView-f606786d.js","assets/AboutView-4d995ba2.css"])}]});let pO=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const gp=yg("database",()=>{let t=_t([]),e=_t(!1);return{documents:t,loadingDoc:e,getUrls:async()=>{e.value=!0;try{const a=FC(zd(Vr,"urls"),UC("user","==",ln.currentUser.uid));(await KC(a)).forEach(l=>{t.value.push({id:l.id,...l.data()})})}catch(a){console.log(a)}finally{e.value=!1}},leerUrl:async a=>{e.value=!0;try{const c=js(Vr,"urls",a),l=await qc(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==ln.currentUser.uid)throw new Error("No es dueño del documento");return l.data().name}catch(c){console.log(c.message)}finally{e.value=!1}},updateUrl:async(a,c)=>{e.value=!0;try{const l=js(Vr,"urls",a),u=await qc(l);if(!u.exists())throw new Error("no existe el doc");if(u.data().user===ln.currentUser.uid)await WC(l,{name:c}),t.value=t.value.map(h=>h.id===a?{...h,name:c}:h);else throw new Error("no eres el autor")}catch(l){console.log(l.message)}finally{e.value=!1}},addUrl:async a=>{try{const c={name:a,short:pO(6),user:ln.currentUser.uid},l=await GC(zd(Vr,"urls"),c);t.value.push({...c,id:l.id})}catch(c){console.log(c)}},deleteUrl:async a=>{try{const c=js(Vr,"urls",a),l=await qc(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==ln.currentUser.uid)throw new Error("No es dueño del documento");await zC(js(Vr,"urls",a)),t.value=t.value.filter(u=>u.id!==a)}catch(c){console.log(c.message)}}}}),Wy=yg("user",()=>{let t=_t(null),e=_t(!1),n=_t(!1);return{loadingUser:e,loading:n,userData:t,registerUser:async(a,c)=>{e.value=!0;try{const{user:l}=await Kb(ln,a,c);t.value={email:l.email,uid:l.uid},xo.push("/")}catch(l){console.error(l),t.value=null}finally{e.value=!1}},loginUser:async(a,c)=>{e.value=!0;try{const{user:l}=await Wb(ln,a,c);t.value={email:l.email,uid:l.uid},xo.push("/about")}catch(l){l.code==="auth/user-not-found"?alert("No se encontró ningún usuario con esa dirección de correo electrónico."):l.code==="auth/wrong-password"?alert("Clave equivocada"):(console.log(l),t.value=null)}finally{e.value=!1}},logoutUser:async(a,c)=>{gp();try{await Yb(ln)}catch(l){console.log(l)}finally{t.value=null,n.value=!1,xo.push("/login")}},currentUser:()=>new Promise((a,c)=>{const l=Qb(ln,u=>{u?t.value={email:u.email,uid:u.uid}:(t.value=null,gp()),a(u),l()},u=>c(u))})}});const gO=Kr("div",null,"Veamos2",-1),mO={class:"container-fluid"},_O={__name:"App",setup(t){const e=Wy(),n=aA({selector:"body",valueDark:"bd-dark",valueLight:"bd-light"});return YI(n),(r,s)=>(og(),ag(Ht,null,[gO,Kr("div",null,cE(Yt(e)),1),Kr("div",mO,[Kr("main",{class:_a(["container my-2 p-4",Yt(n)?"bg-dark":"bg-light"])},[it(Yt(Dg))],2)])],64))}},cc=wT(_O),zy=PT();zy.use(RT);cc.use(zy);cc.use(xo);cc.use(wg);cc.mount("#app");export{Kr as a,Yt as b,ag as c,EO as d,Oe as i,og as o,_t as r,Wy as u,vO as v,yO as w};
