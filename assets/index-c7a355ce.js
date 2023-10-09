(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ul(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ae={},jr=[],Vt=()=>{},bv=()=>!1,Ov=/^on[^a-z]/,la=t=>Ov.test(t),Bl=t=>t.startsWith("onUpdate:"),je=Object.assign,jl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kv=Object.prototype.hasOwnProperty,fe=(t,e)=>kv.call(t,e),Z=Array.isArray,Us=t=>ua(t)==="[object Map]",Nv=t=>ua(t)==="[object Set]",re=t=>typeof t=="function",Qe=t=>typeof t=="string",$l=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",sp=t=>Ne(t)&&re(t.then)&&re(t.catch),Dv=Object.prototype.toString,ua=t=>Dv.call(t),Vv=t=>ua(t).slice(8,-1),xv=t=>ua(t)==="[object Object]",ql=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_o=Ul(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Mv=/-(\w)/g,Gr=ha(t=>t.replace(Mv,(e,n)=>n?n.toUpperCase():"")),Lv=/\B([A-Z])/g,ls=ha(t=>t.replace(Lv,"-$1").toLowerCase()),ip=ha(t=>t.charAt(0).toUpperCase()+t.slice(1)),hc=ha(t=>t?`on${ip(t)}`:""),Zs=(t,e)=>!Object.is(t,e),yo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ko=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Lh;const Hc=()=>Lh||(Lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hl(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?jv(r):Hl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Qe(t))return t;if(Ne(t))return t}}const Fv=/;(?![^(]*\))/g,Uv=/:([^]+)/,Bv=/\/\*[^]*?\*\//g;function jv(t){const e={};return t.replace(Bv,"").split(Fv).forEach(n=>{if(n){const r=n.split(Uv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function fa(t){let e="";if(Qe(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=fa(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $v="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qv=Ul($v);function op(t){return!!t||t===""}let Tt;class ap{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function cp(t){return new ap(t)}function Hv(t,e=Tt){e&&e.active&&e.effects.push(t)}function lp(){return Tt}function Kv(t){Tt&&Tt.cleanups.push(t)}const Kl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},up=t=>(t.w&Bn)>0,hp=t=>(t.n&Bn)>0,Wv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bn},zv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];up(s)&&!hp(s)?s.delete(t):e[n++]=s,s.w&=~Bn,s.n&=~Bn}e.length=n}},No=new WeakMap;let bs=0,Bn=1;const Kc=30;let Nt;const ar=Symbol(""),Wc=Symbol("");class Wl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hv(this,r)}run(){if(!this.active)return this.fn();let e=Nt,n=Nn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nt,Nt=this,Nn=!0,Bn=1<<++bs,bs<=Kc?Wv(this):Fh(this),this.fn()}finally{bs<=Kc&&zv(this),Bn=1<<--bs,Nt=this.parent,Nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Nt===this?this.deferStop=!0:this.active&&(Fh(this),this.onStop&&this.onStop(),this.active=!1)}}function Fh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Nn=!0;const fp=[];function us(){fp.push(Nn),Nn=!1}function hs(){const t=fp.pop();Nn=t===void 0?!0:t}function Et(t,e,n){if(Nn&&Nt){let r=No.get(t);r||No.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Kl()),dp(s)}}function dp(t,e){let n=!1;bs<=Kc?hp(t)||(t.n|=Bn,n=!up(t)):n=!t.has(Nt),n&&(t.add(Nt),Nt.deps.push(t))}function fn(t,e,n,r,s,i){const o=No.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?ql(n)&&a.push(o.get("length")):(a.push(o.get(ar)),Us(t)&&a.push(o.get(Wc)));break;case"delete":Z(t)||(a.push(o.get(ar)),Us(t)&&a.push(o.get(Wc)));break;case"set":Us(t)&&a.push(o.get(ar));break}if(a.length===1)a[0]&&zc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);zc(Kl(c))}}function zc(t,e){const n=Z(t)?t:[...t];for(const r of n)r.computed&&Uh(r);for(const r of n)r.computed||Uh(r)}function Uh(t,e){(t!==Nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Gv(t,e){var n;return(n=No.get(t))==null?void 0:n.get(e)}const Qv=Ul("__proto__,__v_isRef,__isVue"),pp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($l)),Yv=zl(),Jv=zl(!1,!0),Xv=zl(!0),Bh=Zv();function Zv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=de(this);for(let i=0,o=this.length;i<o;i++)Et(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(de)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){us();const r=de(this)[e].apply(this,n);return hs(),r}}),t}function eE(t){const e=de(this);return Et(e,"has",t),e.hasOwnProperty(t)}function zl(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?mE:vp:e?yp:_p).get(r))return r;const o=Z(r);if(!t){if(o&&fe(Bh,s))return Reflect.get(Bh,s,i);if(s==="hasOwnProperty")return eE}const a=Reflect.get(r,s,i);return($l(s)?pp.has(s):Qv(s))||(t||Et(r,"get",s),e)?a:ke(a)?o&&ql(s)?a:a.value:Ne(a)?t?Ip(a):tn(a):a}}const tE=gp(),nE=gp(!0);function gp(t=!1){return function(n,r,s,i){let o=n[r];if(Qr(o)&&ke(o)&&!ke(s))return!1;if(!t&&(!Do(s)&&!Qr(s)&&(o=de(o),s=de(s)),!Z(n)&&ke(o)&&!ke(s)))return o.value=s,!0;const a=Z(n)&&ql(r)?Number(r)<n.length:fe(n,r),c=Reflect.set(n,r,s,i);return n===de(i)&&(a?Zs(s,o)&&fn(n,"set",r,s):fn(n,"add",r,s)),c}}function rE(t,e){const n=fe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&fn(t,"delete",e,void 0),r}function sE(t,e){const n=Reflect.has(t,e);return(!$l(e)||!pp.has(e))&&Et(t,"has",e),n}function iE(t){return Et(t,"iterate",Z(t)?"length":ar),Reflect.ownKeys(t)}const mp={get:Yv,set:tE,deleteProperty:rE,has:sE,ownKeys:iE},oE={get:Xv,set(t,e){return!0},deleteProperty(t,e){return!0}},aE=je({},mp,{get:Jv,set:nE}),Gl=t=>t,da=t=>Reflect.getPrototypeOf(t);function eo(t,e,n=!1,r=!1){t=t.__v_raw;const s=de(t),i=de(e);n||(e!==i&&Et(s,"get",e),Et(s,"get",i));const{has:o}=da(s),a=r?Gl:n?Jl:ei;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function to(t,e=!1){const n=this.__v_raw,r=de(n),s=de(t);return e||(t!==s&&Et(r,"has",t),Et(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function no(t,e=!1){return t=t.__v_raw,!e&&Et(de(t),"iterate",ar),Reflect.get(t,"size",t)}function jh(t){t=de(t);const e=de(this);return da(e).has.call(e,t)||(e.add(t),fn(e,"add",t,t)),this}function $h(t,e){e=de(e);const n=de(this),{has:r,get:s}=da(n);let i=r.call(n,t);i||(t=de(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Zs(e,o)&&fn(n,"set",t,e):fn(n,"add",t,e),this}function qh(t){const e=de(this),{has:n,get:r}=da(e);let s=n.call(e,t);s||(t=de(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&fn(e,"delete",t,void 0),i}function Hh(){const t=de(this),e=t.size!==0,n=t.clear();return e&&fn(t,"clear",void 0,void 0),n}function ro(t,e){return function(r,s){const i=this,o=i.__v_raw,a=de(o),c=e?Gl:t?Jl:ei;return!t&&Et(a,"iterate",ar),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function so(t,e,n){return function(...r){const s=this.__v_raw,i=de(s),o=Us(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Gl:e?Jl:ei;return!e&&Et(i,"iterate",c?Wc:ar),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){return t==="delete"?!1:this}}function cE(){const t={get(i){return eo(this,i)},get size(){return no(this)},has:to,add:jh,set:$h,delete:qh,clear:Hh,forEach:ro(!1,!1)},e={get(i){return eo(this,i,!1,!0)},get size(){return no(this)},has:to,add:jh,set:$h,delete:qh,clear:Hh,forEach:ro(!1,!0)},n={get(i){return eo(this,i,!0)},get size(){return no(this,!0)},has(i){return to.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:ro(!0,!1)},r={get(i){return eo(this,i,!0,!0)},get size(){return no(this,!0)},has(i){return to.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:ro(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=so(i,!1,!1),n[i]=so(i,!0,!1),e[i]=so(i,!1,!0),r[i]=so(i,!0,!0)}),[t,n,e,r]}const[lE,uE,hE,fE]=cE();function Ql(t,e){const n=e?t?fE:hE:t?uE:lE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(fe(n,s)&&s in r?n:r,s,i)}const dE={get:Ql(!1,!1)},pE={get:Ql(!1,!0)},gE={get:Ql(!0,!1)},_p=new WeakMap,yp=new WeakMap,vp=new WeakMap,mE=new WeakMap;function _E(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yE(t){return t.__v_skip||!Object.isExtensible(t)?0:_E(Vv(t))}function tn(t){return Qr(t)?t:Yl(t,!1,mp,dE,_p)}function Ep(t){return Yl(t,!1,aE,pE,yp)}function Ip(t){return Yl(t,!0,oE,gE,vp)}function Yl(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=yE(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Dn(t){return Qr(t)?Dn(t.__v_raw):!!(t&&t.__v_isReactive)}function Qr(t){return!!(t&&t.__v_isReadonly)}function Do(t){return!!(t&&t.__v_isShallow)}function Tp(t){return Dn(t)||Qr(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function pa(t){return ko(t,"__v_skip",!0),t}const ei=t=>Ne(t)?tn(t):t,Jl=t=>Ne(t)?Ip(t):t;function wp(t){Nn&&Nt&&(t=de(t),dp(t.dep||(t.dep=Kl())))}function Ap(t,e){t=de(t);const n=t.dep;n&&zc(n)}function ke(t){return!!(t&&t.__v_isRef===!0)}function Vn(t){return Rp(t,!1)}function vE(t){return Rp(t,!0)}function Rp(t,e){return ke(t)?t:new EE(t,e)}class EE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:ei(e)}get value(){return wp(this),this._value}set value(e){const n=this.__v_isShallow||Do(e)||Qr(e);e=n?e:de(e),Zs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ei(e),Ap(this))}}function cr(t){return ke(t)?t.value:t}const IE={get:(t,e,n)=>cr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ke(s)&&!ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Pp(t){return Dn(t)?t:new Proxy(t,IE)}function TE(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=AE(t,n);return e}class wE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Gv(de(this._object),this._key)}}function AE(t,e,n){const r=t[e];return ke(r)?r:new wE(t,e,n)}class RE{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Wl(e,()=>{this._dirty||(this._dirty=!0,Ap(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=de(this);return wp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function PE(t,e,n=!1){let r,s;const i=re(t);return i?(r=t,s=Vt):(r=t.get,s=t.set),new RE(r,s,i||!s,n)}function xn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ga(i,e,n)}return s}function xt(t,e,n,r){if(re(t)){const i=xn(t,e,n,r);return i&&sp(i)&&i.catch(o=>{ga(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(xt(t[i],e,n,r));return s}function ga(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){xn(c,null,10,[t,o,a]);return}}SE(t,n,s,r)}function SE(t,e,n,r=!0){console.error(t)}let ti=!1,Gc=!1;const nt=[];let Kt=0;const $r=[];let on=null,tr=0;const Sp=Promise.resolve();let Xl=null;function Zl(t){const e=Xl||Sp;return t?e.then(this?t.bind(this):t):e}function CE(t){let e=Kt+1,n=nt.length;for(;e<n;){const r=e+n>>>1;ni(nt[r])<t?e=r+1:n=r}return e}function eu(t){(!nt.length||!nt.includes(t,ti&&t.allowRecurse?Kt+1:Kt))&&(t.id==null?nt.push(t):nt.splice(CE(t.id),0,t),Cp())}function Cp(){!ti&&!Gc&&(Gc=!0,Xl=Sp.then(Op))}function bE(t){const e=nt.indexOf(t);e>Kt&&nt.splice(e,1)}function OE(t){Z(t)?$r.push(...t):(!on||!on.includes(t,t.allowRecurse?tr+1:tr))&&$r.push(t),Cp()}function Kh(t,e=ti?Kt+1:0){for(;e<nt.length;e++){const n=nt[e];n&&n.pre&&(nt.splice(e,1),e--,n())}}function bp(t){if($r.length){const e=[...new Set($r)];if($r.length=0,on){on.push(...e);return}for(on=e,on.sort((n,r)=>ni(n)-ni(r)),tr=0;tr<on.length;tr++)on[tr]();on=null,tr=0}}const ni=t=>t.id==null?1/0:t.id,kE=(t,e)=>{const n=ni(t)-ni(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Op(t){Gc=!1,ti=!0,nt.sort(kE);const e=Vt;try{for(Kt=0;Kt<nt.length;Kt++){const n=nt[Kt];n&&n.active!==!1&&xn(n,null,14)}}finally{Kt=0,nt.length=0,bp(),ti=!1,Xl=null,(nt.length||$r.length)&&Op()}}function NE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ae;d&&(s=n.map(m=>Qe(m)?m.trim():m)),h&&(s=n.map(qc))}let a,c=r[a=hc(e)]||r[a=hc(Gr(e))];!c&&i&&(c=r[a=hc(ls(e))]),c&&xt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xt(l,t,6,s)}}function kp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!re(t)){const c=l=>{const u=kp(l,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ne(t)&&r.set(t,null),null):(Z(i)?i.forEach(c=>o[c]=null):je(o,i),Ne(t)&&r.set(t,o),o)}function ma(t,e){return!t||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,ls(e))||fe(t,e))}let Ot=null,Np=null;function Vo(t){const e=Ot;return Ot=t,Np=t&&t.type.__scopeId||null,e}function DE(t,e=Ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&tf(-1);const i=Vo(e);let o;try{o=t(...s)}finally{Vo(i),r._d&&tf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function fc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:E,inheritAttrs:R}=t;let S,k;const x=Vo(t);try{if(n.shapeFlag&4){const L=s||r;S=Ht(u.call(L,L,h,i,m,d,E)),k=c}else{const L=e;S=Ht(L.length>1?L(i,{attrs:c,slots:a,emit:l}):L(i,null)),k=e.props?c:VE(c)}}catch(L){$s.length=0,ga(L,t,1),S=st(si)}let W=S;if(k&&R!==!1){const L=Object.keys(k),{shapeFlag:ne}=W;L.length&&ne&7&&(o&&L.some(Bl)&&(k=xE(k,o)),W=Yr(W,k))}return n.dirs&&(W=Yr(W),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),S=W,Vo(x),S}const VE=t=>{let e;for(const n in t)(n==="class"||n==="style"||la(n))&&((e||(e={}))[n]=t[n]);return e},xE=(t,e)=>{const n={};for(const r in t)(!Bl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ME(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Wh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!ma(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Wh(r,o,l):!0:!!o;return!1}function Wh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ma(n,i))return!0}return!1}function LE({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const FE=t=>t.__isSuspense;function UE(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):OE(t)}const io={};function Bs(t,e,n){return Dp(t,e,n)}function Dp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ae){var a;const c=lp()===((a=ze)==null?void 0:a.scope)?ze:null;let l,u=!1,h=!1;if(ke(t)?(l=()=>t.value,u=Do(t)):Dn(t)?(l=()=>t,r=!0):Z(t)?(h=!0,u=t.some(L=>Dn(L)||Do(L)),l=()=>t.map(L=>{if(ke(L))return L.value;if(Dn(L))return rr(L);if(re(L))return xn(L,c,2)})):re(t)?e?l=()=>xn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),xt(t,c,3,[m])}:l=Vt,e&&r){const L=l;l=()=>rr(L())}let d,m=L=>{d=x.onStop=()=>{xn(L,c,4)}},E;if(ai)if(m=Vt,e?n&&xt(e,c,3,[l(),h?[]:void 0,m]):l(),s==="sync"){const L=NI();E=L.__watcherHandles||(L.__watcherHandles=[])}else return Vt;let R=h?new Array(t.length).fill(io):io;const S=()=>{if(x.active)if(e){const L=x.run();(r||u||(h?L.some((ne,pe)=>Zs(ne,R[pe])):Zs(L,R)))&&(d&&d(),xt(e,c,3,[L,R===io?void 0:h&&R[0]===io?[]:R,m]),R=L)}else x.run()};S.allowRecurse=!!e;let k;s==="sync"?k=S:s==="post"?k=()=>_t(S,c&&c.suspense):(S.pre=!0,c&&(S.id=c.uid),k=()=>eu(S));const x=new Wl(l,k);e?n?S():R=x.run():s==="post"?_t(x.run.bind(x),c&&c.suspense):x.run();const W=()=>{x.stop(),c&&c.scope&&jl(c.scope.effects,x)};return E&&E.push(W),W}function BE(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?Vp(r,t):()=>r[t]:t.bind(r,r);let i;re(e)?i=e:(i=e.handler,n=e);const o=ze;Jr(this);const a=Dp(s,i.bind(r),n);return o?Jr(o):lr(),a}function Vp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function rr(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ke(t))rr(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)rr(t[n],e);else if(Nv(t)||Us(t))t.forEach(n=>{rr(n,e)});else if(xv(t))for(const n in t)rr(t[n],e);return t}function N1(t,e){const n=Ot;if(n===null)return t;const r=Ea(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ae]=e[i];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&rr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Xn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(us(),xt(c,n,8,[t.el,a,t,e]),hs())}}function tu(t,e){return re(t)?(()=>je({name:t.name},e,{setup:t}))():t}const vo=t=>!!t.type.__asyncLoader,xp=t=>t.type.__isKeepAlive;function jE(t,e){Mp(t,"a",e)}function $E(t,e){Mp(t,"da",e)}function Mp(t,e,n=ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(_a(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xp(s.parent.vnode)&&qE(r,e,n,s),s=s.parent}}function qE(t,e,n,r){const s=_a(e,t,r,!0);Lp(()=>{jl(r[e],s)},n)}function _a(t,e,n=ze,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;us(),Jr(n);const a=xt(e,n,t,o);return lr(),hs(),a});return r?s.unshift(i):s.push(i),i}}const yn=t=>(e,n=ze)=>(!ai||t==="sp")&&_a(t,(...r)=>e(...r),n),HE=yn("bm"),KE=yn("m"),WE=yn("bu"),zE=yn("u"),GE=yn("bum"),Lp=yn("um"),QE=yn("sp"),YE=yn("rtg"),JE=yn("rtc");function XE(t,e=ze){_a("ec",t,e)}const ZE=Symbol.for("v-ndc"),Qc=t=>t?Yp(t)?Ea(t)||t.proxy:Qc(t.parent):null,js=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qc(t.parent),$root:t=>Qc(t.root),$emit:t=>t.emit,$options:t=>nu(t),$forceUpdate:t=>t.f||(t.f=()=>eu(t.update)),$nextTick:t=>t.n||(t.n=Zl.bind(t.proxy)),$watch:t=>BE.bind(t)}),dc=(t,e)=>t!==Ae&&!t.__isScriptSetup&&fe(t,e),eI={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(dc(r,e))return o[e]=1,r[e];if(s!==Ae&&fe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&fe(l,e))return o[e]=3,i[e];if(n!==Ae&&fe(n,e))return o[e]=4,n[e];Yc&&(o[e]=0)}}const u=js[e];let h,d;if(u)return e==="$attrs"&&Et(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&fe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,fe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return dc(s,e)?(s[e]=n,!0):r!==Ae&&fe(r,e)?(r[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ae&&fe(t,o)||dc(e,o)||(a=i[0])&&fe(a,o)||fe(r,o)||fe(js,o)||fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zh(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yc=!0;function tI(t){const e=nu(t),n=t.proxy,r=t.ctx;Yc=!1,e.beforeCreate&&Gh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:E,activated:R,deactivated:S,beforeDestroy:k,beforeUnmount:x,destroyed:W,unmounted:L,render:ne,renderTracked:pe,renderTriggered:we,errorCaptured:se,serverPrefetch:ee,expose:ye,inheritAttrs:Me,components:Ye,directives:ut,filters:jt}=e;if(l&&nI(l,r,null),o)for(const ve in o){const ge=o[ve];re(ge)&&(r[ve]=ge.bind(n))}if(s){const ve=s.call(n,n);Ne(ve)&&(t.data=tn(ve))}if(Yc=!0,i)for(const ve in i){const ge=i[ve],kt=re(ge)?ge.bind(n,n):re(ge.get)?ge.get.bind(n,n):Vt,ae=!re(ge)&&re(ge.set)?ge.set.bind(n):Vt,Rt=Ct({get:kt,set:ae});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:Je=>Rt.value=Je})}if(a)for(const ve in a)Fp(a[ve],r,n,ve);if(c){const ve=re(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(ge=>{Eo(ge,ve[ge])})}u&&Gh(u,t,"c");function ue(ve,ge){Z(ge)?ge.forEach(kt=>ve(kt.bind(n))):ge&&ve(ge.bind(n))}if(ue(HE,h),ue(KE,d),ue(WE,m),ue(zE,E),ue(jE,R),ue($E,S),ue(XE,se),ue(JE,pe),ue(YE,we),ue(GE,x),ue(Lp,L),ue(QE,ee),Z(ye))if(ye.length){const ve=t.exposed||(t.exposed={});ye.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>n[ge],set:kt=>n[ge]=kt})})}else t.exposed||(t.exposed={});ne&&t.render===Vt&&(t.render=ne),Me!=null&&(t.inheritAttrs=Me),Ye&&(t.components=Ye),ut&&(t.directives=ut)}function nI(t,e,n=Vt){Z(t)&&(t=Jc(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=Qt(s.from||r,s.default,!0):i=Qt(s.from||r):i=Qt(s),ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Gh(t,e,n){xt(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fp(t,e,n,r){const s=r.includes(".")?Vp(n,r):()=>n[r];if(Qe(t)){const i=e[t];re(i)&&Bs(s,i)}else if(re(t))Bs(s,t.bind(n));else if(Ne(t))if(Z(t))t.forEach(i=>Fp(i,e,n,r));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&Bs(s,i,t)}}function nu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>xo(c,l,o,!0)),xo(c,e,o)),Ne(e)&&i.set(e,c),c}function xo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xo(t,i,n,!0),s&&s.forEach(o=>xo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=rI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const rI={data:Qh,props:Yh,emits:Yh,methods:Os,computed:Os,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Os,directives:Os,watch:iI,provide:Qh,inject:sI};function Qh(t,e){return e?t?function(){return je(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function sI(t,e){return Os(Jc(t),Jc(e))}function Jc(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Os(t,e){return t?je(Object.create(null),t,e):e}function Yh(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:je(Object.create(null),zh(t),zh(e??{})):e}function iI(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function Up(){return{app:null,config:{isNativeTag:bv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oI=0;function aI(t,e){return function(r,s=null){re(r)||(r=je({},r)),s!=null&&!Ne(s)&&(s=null);const i=Up(),o=new Set;let a=!1;const c=i.app={_uid:oI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:DI,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&re(l.install)?(o.add(l),l.install(c,...u)):re(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=st(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ea(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){ri=c;try{return l()}finally{ri=null}}};return c}}let ri=null;function Eo(t,e){if(ze){let n=ze.provides;const r=ze.parent&&ze.parent.provides;r===n&&(n=ze.provides=Object.create(r)),n[t]=e}}function Qt(t,e,n=!1){const r=ze||Ot;if(r||ri){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ri._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&re(e)?e.call(r&&r.proxy):e}}function cI(){return!!(ze||Ot||ri)}function lI(t,e,n,r=!1){const s={},i={};ko(i,va,1),t.propsDefaults=Object.create(null),Bp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ep(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function uI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=de(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ma(t.emitsOptions,d))continue;const m=e[d];if(c)if(fe(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const E=Gr(d);s[E]=Xc(c,a,E,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{Bp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!fe(e,h)&&((u=ls(h))===h||!fe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Xc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!fe(e,h))&&(delete i[h],l=!0)}l&&fn(t,"set","$attrs")}function Bp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(_o(c))continue;const l=e[c];let u;s&&fe(s,u=Gr(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ma(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=de(n),l=a||Ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Xc(s,c,h,l[h],t,!fe(l,h))}}return o}function Xc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&re(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Jr(s),r=l[n]=c.call(null,e),lr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ls(n))&&(r=!0))}return r}function jp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!re(t)){const u=h=>{c=!0;const[d,m]=jp(h,e,!0);je(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ne(t)&&r.set(t,jr),jr;if(Z(i))for(let u=0;u<i.length;u++){const h=Gr(i[u]);Jh(h)&&(o[h]=Ae)}else if(i)for(const u in i){const h=Gr(u);if(Jh(h)){const d=i[u],m=o[h]=Z(d)||re(d)?{type:d}:je({},d);if(m){const E=ef(Boolean,m.type),R=ef(String,m.type);m[0]=E>-1,m[1]=R<0||E<R,(E>-1||fe(m,"default"))&&a.push(h)}}}const l=[o,a];return Ne(t)&&r.set(t,l),l}function Jh(t){return t[0]!=="$"}function Xh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Zh(t,e){return Xh(t)===Xh(e)}function ef(t,e){return Z(e)?e.findIndex(n=>Zh(n,t)):re(e)&&Zh(e,t)?0:-1}const $p=t=>t[0]==="_"||t==="$stable",ru=t=>Z(t)?t.map(Ht):[Ht(t)],hI=(t,e,n)=>{if(e._n)return e;const r=DE((...s)=>ru(e(...s)),n);return r._c=!1,r},qp=(t,e,n)=>{const r=t._ctx;for(const s in t){if($p(s))continue;const i=t[s];if(re(i))e[s]=hI(s,i,r);else if(i!=null){const o=ru(i);e[s]=()=>o}}},Hp=(t,e)=>{const n=ru(e);t.slots.default=()=>n},fI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),ko(e,"_",n)):qp(e,t.slots={})}else t.slots={},e&&Hp(t,e);ko(t.slots,va,1)},dI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,qp(e,s)),o=e}else e&&(Hp(t,e),o={default:1});if(i)for(const a in s)!$p(a)&&!(a in o)&&delete s[a]};function Zc(t,e,n,r,s=!1){if(Z(t)){t.forEach((d,m)=>Zc(d,e&&(Z(e)?e[m]:e),n,r,s));return}if(vo(r)&&!s)return;const i=r.shapeFlag&4?Ea(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Qe(l)?(u[l]=null,fe(h,l)&&(h[l]=null)):ke(l)&&(l.value=null)),re(c))xn(c,a,12,[o,u]);else{const d=Qe(c),m=ke(c);if(d||m){const E=()=>{if(t.f){const R=d?fe(h,c)?h[c]:u[c]:c.value;s?Z(R)&&jl(R,i):Z(R)?R.includes(i)||R.push(i):d?(u[c]=[i],fe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,fe(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,_t(E,n)):E()}}}const _t=UE;function pI(t){return gI(t)}function gI(t,e){const n=Hc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Vt,insertStaticContent:E}=t,R=(p,g,_,v=null,w=null,P=null,M=!1,O=null,N=!!g.dynamicChildren)=>{if(p===g)return;p&&!As(p,g)&&(v=I(p),Je(p,w,P,!0),p=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:C,ref:K,shapeFlag:B}=g;switch(C){case ya:S(p,g,_,v);break;case si:k(p,g,_,v);break;case pc:p==null&&x(g,_,v,M);break;case qt:Ye(p,g,_,v,w,P,M,O,N);break;default:B&1?ne(p,g,_,v,w,P,M,O,N):B&6?ut(p,g,_,v,w,P,M,O,N):(B&64||B&128)&&C.process(p,g,_,v,w,P,M,O,N,D)}K!=null&&w&&Zc(K,p&&p.ref,P,g||p,!g)},S=(p,g,_,v)=>{if(p==null)r(g.el=a(g.children),_,v);else{const w=g.el=p.el;g.children!==p.children&&l(w,g.children)}},k=(p,g,_,v)=>{p==null?r(g.el=c(g.children||""),_,v):g.el=p.el},x=(p,g,_,v)=>{[p.el,p.anchor]=E(p.children,g,_,v,p.el,p.anchor)},W=({el:p,anchor:g},_,v)=>{let w;for(;p&&p!==g;)w=d(p),r(p,_,v),p=w;r(g,_,v)},L=({el:p,anchor:g})=>{let _;for(;p&&p!==g;)_=d(p),s(p),p=_;s(g)},ne=(p,g,_,v,w,P,M,O,N)=>{M=M||g.type==="svg",p==null?pe(g,_,v,w,P,M,O,N):ee(p,g,w,P,M,O,N)},pe=(p,g,_,v,w,P,M,O)=>{let N,C;const{type:K,props:B,shapeFlag:j,transition:G,dirs:ie}=p;if(N=p.el=o(p.type,P,B&&B.is,B),j&8?u(N,p.children):j&16&&se(p.children,N,null,v,w,P&&K!=="foreignObject",M,O),ie&&Xn(p,null,v,"created"),we(N,p,p.scopeId,M,v),B){for(const me in B)me!=="value"&&!_o(me)&&i(N,me,null,B[me],P,p.children,v,w,Fe);"value"in B&&i(N,"value",null,B.value),(C=B.onVnodeBeforeMount)&&$t(C,v,p)}ie&&Xn(p,null,v,"beforeMount");const Ee=(!w||w&&!w.pendingBranch)&&G&&!G.persisted;Ee&&G.beforeEnter(N),r(N,g,_),((C=B&&B.onVnodeMounted)||Ee||ie)&&_t(()=>{C&&$t(C,v,p),Ee&&G.enter(N),ie&&Xn(p,null,v,"mounted")},w)},we=(p,g,_,v,w)=>{if(_&&m(p,_),v)for(let P=0;P<v.length;P++)m(p,v[P]);if(w){let P=w.subTree;if(g===P){const M=w.vnode;we(p,M,M.scopeId,M.slotScopeIds,w.parent)}}},se=(p,g,_,v,w,P,M,O,N=0)=>{for(let C=N;C<p.length;C++){const K=p[C]=O?Rn(p[C]):Ht(p[C]);R(null,K,g,_,v,w,P,M,O)}},ee=(p,g,_,v,w,P,M)=>{const O=g.el=p.el;let{patchFlag:N,dynamicChildren:C,dirs:K}=g;N|=p.patchFlag&16;const B=p.props||Ae,j=g.props||Ae;let G;_&&Zn(_,!1),(G=j.onVnodeBeforeUpdate)&&$t(G,_,g,p),K&&Xn(g,p,_,"beforeUpdate"),_&&Zn(_,!0);const ie=w&&g.type!=="foreignObject";if(C?ye(p.dynamicChildren,C,O,_,v,ie,P):M||ge(p,g,O,null,_,v,ie,P,!1),N>0){if(N&16)Me(O,g,B,j,_,v,w);else if(N&2&&B.class!==j.class&&i(O,"class",null,j.class,w),N&4&&i(O,"style",B.style,j.style,w),N&8){const Ee=g.dynamicProps;for(let me=0;me<Ee.length;me++){const Ce=Ee[me],It=B[Ce],En=j[Ce];(En!==It||Ce==="value")&&i(O,Ce,It,En,w,p.children,_,v,Fe)}}N&1&&p.children!==g.children&&u(O,g.children)}else!M&&C==null&&Me(O,g,B,j,_,v,w);((G=j.onVnodeUpdated)||K)&&_t(()=>{G&&$t(G,_,g,p),K&&Xn(g,p,_,"updated")},v)},ye=(p,g,_,v,w,P,M)=>{for(let O=0;O<g.length;O++){const N=p[O],C=g[O],K=N.el&&(N.type===qt||!As(N,C)||N.shapeFlag&70)?h(N.el):_;R(N,C,K,null,v,w,P,M,!0)}},Me=(p,g,_,v,w,P,M)=>{if(_!==v){if(_!==Ae)for(const O in _)!_o(O)&&!(O in v)&&i(p,O,_[O],null,M,g.children,w,P,Fe);for(const O in v){if(_o(O))continue;const N=v[O],C=_[O];N!==C&&O!=="value"&&i(p,O,C,N,M,g.children,w,P,Fe)}"value"in v&&i(p,"value",_.value,v.value)}},Ye=(p,g,_,v,w,P,M,O,N)=>{const C=g.el=p?p.el:a(""),K=g.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:j,slotScopeIds:G}=g;G&&(O=O?O.concat(G):G),p==null?(r(C,_,v),r(K,_,v),se(g.children,_,K,w,P,M,O,N)):B>0&&B&64&&j&&p.dynamicChildren?(ye(p.dynamicChildren,j,_,w,P,M,O),(g.key!=null||w&&g===w.subTree)&&Kp(p,g,!0)):ge(p,g,_,K,w,P,M,O,N)},ut=(p,g,_,v,w,P,M,O,N)=>{g.slotScopeIds=O,p==null?g.shapeFlag&512?w.ctx.activate(g,_,v,M,N):jt(g,_,v,w,P,M,N):ht(p,g,N)},jt=(p,g,_,v,w,P,M)=>{const O=p.component=RI(p,v,w);if(xp(p)&&(O.ctx.renderer=D),PI(O),O.asyncDep){if(w&&w.registerDep(O,ue),!p.el){const N=O.subTree=st(si);k(null,N,g,_)}return}ue(O,p,g,_,w,P,M)},ht=(p,g,_)=>{const v=g.component=p.component;if(ME(p,g,_))if(v.asyncDep&&!v.asyncResolved){ve(v,g,_);return}else v.next=g,bE(v.update),v.update();else g.el=p.el,v.vnode=g},ue=(p,g,_,v,w,P,M)=>{const O=()=>{if(p.isMounted){let{next:K,bu:B,u:j,parent:G,vnode:ie}=p,Ee=K,me;Zn(p,!1),K?(K.el=ie.el,ve(p,K,M)):K=ie,B&&yo(B),(me=K.props&&K.props.onVnodeBeforeUpdate)&&$t(me,G,K,ie),Zn(p,!0);const Ce=fc(p),It=p.subTree;p.subTree=Ce,R(It,Ce,h(It.el),I(It),p,w,P),K.el=Ce.el,Ee===null&&LE(p,Ce.el),j&&_t(j,w),(me=K.props&&K.props.onVnodeUpdated)&&_t(()=>$t(me,G,K,ie),w)}else{let K;const{el:B,props:j}=g,{bm:G,m:ie,parent:Ee}=p,me=vo(g);if(Zn(p,!1),G&&yo(G),!me&&(K=j&&j.onVnodeBeforeMount)&&$t(K,Ee,g),Zn(p,!0),B&&he){const Ce=()=>{p.subTree=fc(p),he(B,p.subTree,p,w,null)};me?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ce()):Ce()}else{const Ce=p.subTree=fc(p);R(null,Ce,_,v,p,w,P),g.el=Ce.el}if(ie&&_t(ie,w),!me&&(K=j&&j.onVnodeMounted)){const Ce=g;_t(()=>$t(K,Ee,Ce),w)}(g.shapeFlag&256||Ee&&vo(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&p.a&&_t(p.a,w),p.isMounted=!0,g=_=v=null}},N=p.effect=new Wl(O,()=>eu(C),p.scope),C=p.update=()=>N.run();C.id=p.uid,Zn(p,!0),C()},ve=(p,g,_)=>{g.component=p;const v=p.vnode.props;p.vnode=g,p.next=null,uI(p,g.props,v,_),dI(p,g.children,_),us(),Kh(),hs()},ge=(p,g,_,v,w,P,M,O,N=!1)=>{const C=p&&p.children,K=p?p.shapeFlag:0,B=g.children,{patchFlag:j,shapeFlag:G}=g;if(j>0){if(j&128){ae(C,B,_,v,w,P,M,O,N);return}else if(j&256){kt(C,B,_,v,w,P,M,O,N);return}}G&8?(K&16&&Fe(C,w,P),B!==C&&u(_,B)):K&16?G&16?ae(C,B,_,v,w,P,M,O,N):Fe(C,w,P,!0):(K&8&&u(_,""),G&16&&se(B,_,v,w,P,M,O,N))},kt=(p,g,_,v,w,P,M,O,N)=>{p=p||jr,g=g||jr;const C=p.length,K=g.length,B=Math.min(C,K);let j;for(j=0;j<B;j++){const G=g[j]=N?Rn(g[j]):Ht(g[j]);R(p[j],G,_,null,w,P,M,O,N)}C>K?Fe(p,w,P,!0,!1,B):se(g,_,v,w,P,M,O,N,B)},ae=(p,g,_,v,w,P,M,O,N)=>{let C=0;const K=g.length;let B=p.length-1,j=K-1;for(;C<=B&&C<=j;){const G=p[C],ie=g[C]=N?Rn(g[C]):Ht(g[C]);if(As(G,ie))R(G,ie,_,null,w,P,M,O,N);else break;C++}for(;C<=B&&C<=j;){const G=p[B],ie=g[j]=N?Rn(g[j]):Ht(g[j]);if(As(G,ie))R(G,ie,_,null,w,P,M,O,N);else break;B--,j--}if(C>B){if(C<=j){const G=j+1,ie=G<K?g[G].el:v;for(;C<=j;)R(null,g[C]=N?Rn(g[C]):Ht(g[C]),_,ie,w,P,M,O,N),C++}}else if(C>j)for(;C<=B;)Je(p[C],w,P,!0),C++;else{const G=C,ie=C,Ee=new Map;for(C=ie;C<=j;C++){const ft=g[C]=N?Rn(g[C]):Ht(g[C]);ft.key!=null&&Ee.set(ft.key,C)}let me,Ce=0;const It=j-ie+1;let En=!1,Qi=0;const Gn=new Array(It);for(C=0;C<It;C++)Gn[C]=0;for(C=G;C<=B;C++){const ft=p[C];if(Ce>=It){Je(ft,w,P,!0);continue}let Pt;if(ft.key!=null)Pt=Ee.get(ft.key);else for(me=ie;me<=j;me++)if(Gn[me-ie]===0&&As(ft,g[me])){Pt=me;break}Pt===void 0?Je(ft,w,P,!0):(Gn[Pt-ie]=C+1,Pt>=Qi?Qi=Pt:En=!0,R(ft,g[Pt],_,null,w,P,M,O,N),Ce++)}const Is=En?mI(Gn):jr;for(me=Is.length-1,C=It-1;C>=0;C--){const ft=ie+C,Pt=g[ft],Rr=ft+1<K?g[ft+1].el:v;Gn[C]===0?R(null,Pt,_,Rr,w,P,M,O,N):En&&(me<0||C!==Is[me]?Rt(Pt,_,Rr,2):me--)}}},Rt=(p,g,_,v,w=null)=>{const{el:P,type:M,transition:O,children:N,shapeFlag:C}=p;if(C&6){Rt(p.component.subTree,g,_,v);return}if(C&128){p.suspense.move(g,_,v);return}if(C&64){M.move(p,g,_,D);return}if(M===qt){r(P,g,_);for(let B=0;B<N.length;B++)Rt(N[B],g,_,v);r(p.anchor,g,_);return}if(M===pc){W(p,g,_);return}if(v!==2&&C&1&&O)if(v===0)O.beforeEnter(P),r(P,g,_),_t(()=>O.enter(P),w);else{const{leave:B,delayLeave:j,afterLeave:G}=O,ie=()=>r(P,g,_),Ee=()=>{B(P,()=>{ie(),G&&G()})};j?j(P,ie,Ee):Ee()}else r(P,g,_)},Je=(p,g,_,v=!1,w=!1)=>{const{type:P,props:M,ref:O,children:N,dynamicChildren:C,shapeFlag:K,patchFlag:B,dirs:j}=p;if(O!=null&&Zc(O,null,_,p,!0),K&256){g.ctx.deactivate(p);return}const G=K&1&&j,ie=!vo(p);let Ee;if(ie&&(Ee=M&&M.onVnodeBeforeUnmount)&&$t(Ee,g,p),K&6)zn(p.component,_,v);else{if(K&128){p.suspense.unmount(_,v);return}G&&Xn(p,null,g,"beforeUnmount"),K&64?p.type.remove(p,g,_,w,D,v):C&&(P!==qt||B>0&&B&64)?Fe(C,g,_,!1,!0):(P===qt&&B&384||!w&&K&16)&&Fe(N,g,_),v&&Xe(p)}(ie&&(Ee=M&&M.onVnodeUnmounted)||G)&&_t(()=>{Ee&&$t(Ee,g,p),G&&Xn(p,null,g,"unmounted")},_)},Xe=p=>{const{type:g,el:_,anchor:v,transition:w}=p;if(g===qt){nn(_,v);return}if(g===pc){L(p);return}const P=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(p.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:O}=w,N=()=>M(_,P);O?O(p.el,P,N):N()}else P()},nn=(p,g)=>{let _;for(;p!==g;)_=d(p),s(p),p=_;s(g)},zn=(p,g,_)=>{const{bum:v,scope:w,update:P,subTree:M,um:O}=p;v&&yo(v),w.stop(),P&&(P.active=!1,Je(M,p,g,_)),O&&_t(O,g),_t(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Fe=(p,g,_,v=!1,w=!1,P=0)=>{for(let M=P;M<p.length;M++)Je(p[M],g,_,v,w)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),F=(p,g,_)=>{p==null?g._vnode&&Je(g._vnode,null,null,!0):R(g._vnode||null,p,g,null,null,null,_),Kh(),bp(),g._vnode=p},D={p:R,um:Je,m:Rt,r:Xe,mt:jt,mc:se,pc:ge,pbc:ye,n:I,o:t};let H,he;return e&&([H,he]=e(D)),{render:F,hydrate:H,createApp:aI(F,H)}}function Zn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Kp(t,e,n=!1){const r=t.children,s=e.children;if(Z(r)&&Z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rn(s[i]),a.el=o.el),n||Kp(o,a)),a.type===ya&&(a.el=o.el)}}function mI(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const _I=t=>t.__isTeleport,qt=Symbol.for("v-fgt"),ya=Symbol.for("v-txt"),si=Symbol.for("v-cmt"),pc=Symbol.for("v-stc"),$s=[];let Dt=null;function Wp(t=!1){$s.push(Dt=t?null:[])}function yI(){$s.pop(),Dt=$s[$s.length-1]||null}let ii=1;function tf(t){ii+=t}function vI(t){return t.dynamicChildren=ii>0?Dt||jr:null,yI(),ii>0&&Dt&&Dt.push(t),t}function zp(t,e,n,r,s,i){return vI(oi(t,e,n,r,s,i,!0))}function el(t){return t?t.__v_isVNode===!0:!1}function As(t,e){return t.type===e.type&&t.key===e.key}const va="__vInternal",Gp=({key:t})=>t??null,Io=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||ke(t)||re(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function oi(t,e=null,n=null,r=0,s=null,i=t===qt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gp(e),ref:e&&Io(e),scopeId:Np,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return a?(su(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),ii>0&&!o&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const st=EI;function EI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ZE)&&(t=si),el(t)){const a=Yr(t,e,!0);return n&&su(a,n),ii>0&&!i&&Dt&&(a.shapeFlag&6?Dt[Dt.indexOf(t)]=a:Dt.push(a)),a.patchFlag|=-2,a}if(OI(t)&&(t=t.__vccOpts),e){e=II(e);let{class:a,style:c}=e;a&&!Qe(a)&&(e.class=fa(a)),Ne(c)&&(Tp(c)&&!Z(c)&&(c=je({},c)),e.style=Hl(c))}const o=Qe(t)?1:FE(t)?128:_I(t)?64:Ne(t)?4:re(t)?2:0;return oi(t,e,n,r,s,o,i,!0)}function II(t){return t?Tp(t)||va in t?je({},t):t:null}function Yr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Qp(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Gp(a),ref:e&&e.ref?n&&s?Z(s)?s.concat(Io(e)):[s,Io(e)]:Io(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yr(t.ssContent),ssFallback:t.ssFallback&&Yr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function TI(t=" ",e=0){return st(ya,null,t,e)}function Ht(t){return t==null||typeof t=="boolean"?st(si):Z(t)?st(qt,null,t.slice()):typeof t=="object"?Rn(t):st(ya,null,String(t))}function Rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yr(t)}function su(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),su(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(va in e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[TI(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qp(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=fa([e.class,r.class]));else if(s==="style")e.style=Hl([e.style,r.style]);else if(la(s)){const i=e[s],o=r[s];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $t(t,e,n,r=null){xt(t,e,7,[n,r])}const wI=Up();let AI=0;function RI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wI,i={uid:AI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ap(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jp(r,s),emitsOptions:kp(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=NE.bind(null,i),t.ce&&t.ce(i),i}let ze=null,iu,Or,nf="__VUE_INSTANCE_SETTERS__";(Or=Hc()[nf])||(Or=Hc()[nf]=[]),Or.push(t=>ze=t),iu=t=>{Or.length>1?Or.forEach(e=>e(t)):Or[0](t)};const Jr=t=>{iu(t),t.scope.on()},lr=()=>{ze&&ze.scope.off(),iu(null)};function Yp(t){return t.vnode.shapeFlag&4}let ai=!1;function PI(t,e=!1){ai=e;const{props:n,children:r}=t.vnode,s=Yp(t);lI(t,n,s,e),fI(t,r);const i=s?SI(t,e):void 0;return ai=!1,i}function SI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=pa(new Proxy(t.ctx,eI));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?bI(t):null;Jr(t),us();const i=xn(r,t,0,[t.props,s]);if(hs(),lr(),sp(i)){if(i.then(lr,lr),e)return i.then(o=>{rf(t,o,e)}).catch(o=>{ga(o,t,0)});t.asyncDep=i}else rf(t,i,e)}else Jp(t,e)}function rf(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Pp(e)),Jp(t,n)}let sf;function Jp(t,e,n){const r=t.type;if(!t.render){if(!e&&sf&&!r.render){const s=r.template||nu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=je(je({isCustomElement:i,delimiters:a},o),c);r.render=sf(s,l)}}t.render=r.render||Vt}Jr(t),us(),tI(t),hs(),lr()}function CI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Et(t,"get","$attrs"),e[n]}}))}function bI(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return CI(t)},slots:t.slots,emit:t.emit,expose:e}}function Ea(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Pp(pa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in js)return js[n](t)},has(e,n){return n in e||n in js}}))}function OI(t){return re(t)&&"__vccOpts"in t}const Ct=(t,e)=>PE(t,e,ai);function Xp(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!Z(e)?el(e)?st(t,null,[e]):st(t,e):st(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&el(n)&&(n=[n]),st(t,e,n))}const kI=Symbol.for("v-scx"),NI=()=>Qt(kI),DI="3.3.4",VI="http://www.w3.org/2000/svg",nr=typeof document<"u"?document:null,of=nr&&nr.createElement("template"),xI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?nr.createElementNS(VI,t):nr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>nr.createTextNode(t),createComment:t=>nr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{of.innerHTML=r?`<svg>${t}</svg>`:t;const a=of.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function MI(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function LI(t,e,n){const r=t.style,s=Qe(n);if(n&&!s){if(e&&!Qe(e))for(const i in e)n[i]==null&&tl(r,i,"");for(const i in n)tl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const af=/\s*!important$/;function tl(t,e,n){if(Z(n))n.forEach(r=>tl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=FI(t,e);af.test(n)?t.setProperty(ls(r),n.replace(af,""),"important"):t[r]=n}}const cf=["Webkit","Moz","ms"],gc={};function FI(t,e){const n=gc[e];if(n)return n;let r=Gr(e);if(r!=="filter"&&r in t)return gc[e]=r;r=ip(r);for(let s=0;s<cf.length;s++){const i=cf[s]+r;if(i in t)return gc[e]=i}return e}const lf="http://www.w3.org/1999/xlink";function UI(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(lf,e.slice(6,e.length)):t.setAttributeNS(lf,e,n);else{const i=qv(e);n==null||i&&!op(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function BI(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=op(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Vr(t,e,n,r){t.addEventListener(e,n,r)}function jI(t,e,n,r){t.removeEventListener(e,n,r)}function $I(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=qI(e);if(r){const l=i[e]=WI(r,s);Vr(t,a,l,c)}else o&&(jI(t,a,o,c),i[e]=void 0)}}const uf=/(?:Once|Passive|Capture)$/;function qI(t){let e;if(uf.test(t)){e={};let r;for(;r=t.match(uf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ls(t.slice(2)),e]}let mc=0;const HI=Promise.resolve(),KI=()=>mc||(HI.then(()=>mc=0),mc=Date.now());function WI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xt(zI(r,n.value),e,5,[r])};return n.value=t,n.attached=KI(),n}function zI(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const hf=/^on[a-z]/,GI=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?MI(t,r,s):e==="style"?LI(t,n,r):la(e)?Bl(e)||$I(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):QI(t,e,r,s))?BI(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),UI(t,e,r,s))};function QI(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&hf.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||hf.test(e)&&Qe(n)?!1:e in t}const ff=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>yo(e,n):e};function YI(t){t.target.composing=!0}function df(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const D1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ff(s);const i=r||s.props&&s.props.type==="number";Vr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=qc(a)),t._assign(a)}),n&&Vr(t,"change",()=>{t.value=t.value.trim()}),e||(Vr(t,"compositionstart",YI),Vr(t,"compositionend",df),Vr(t,"change",df))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ff(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&qc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},JI=["ctrl","shift","alt","meta"],XI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>JI.some(n=>t[`${n}Key`]&&!e.includes(n))},V1=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=XI[e[s]];if(i&&i(n,e))return}return t(n,...r)},ZI=je({patchProp:GI},xI);let pf;function eT(){return pf||(pf=pI(ZI))}const tT=(...t)=>{const e=eT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=nT(r);if(!s)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nT(t){return Qe(t)?document.querySelector(t):t}var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mo={exports:{}};Mo.exports;(function(t,e){var n=200,r="__lodash_hash_undefined__",s=9007199254740991,i="[object Arguments]",o="[object Array]",a="[object Boolean]",c="[object Date]",l="[object Error]",u="[object Function]",h="[object GeneratorFunction]",d="[object Map]",m="[object Number]",E="[object Object]",R="[object Promise]",S="[object RegExp]",k="[object Set]",x="[object String]",W="[object Symbol]",L="[object WeakMap]",ne="[object ArrayBuffer]",pe="[object DataView]",we="[object Float32Array]",se="[object Float64Array]",ee="[object Int8Array]",ye="[object Int16Array]",Me="[object Int32Array]",Ye="[object Uint8Array]",ut="[object Uint8ClampedArray]",jt="[object Uint16Array]",ht="[object Uint32Array]",ue=/[\\^$.*+?()[\]{}|]/g,ve=/\w*$/,ge=/^\[object .+?Constructor\]$/,kt=/^(?:0|[1-9]\d*)$/,ae={};ae[i]=ae[o]=ae[ne]=ae[pe]=ae[a]=ae[c]=ae[we]=ae[se]=ae[ee]=ae[ye]=ae[Me]=ae[d]=ae[m]=ae[E]=ae[S]=ae[k]=ae[x]=ae[W]=ae[Ye]=ae[ut]=ae[jt]=ae[ht]=!0,ae[l]=ae[u]=ae[L]=!1;var Rt=typeof oo=="object"&&oo&&oo.Object===Object&&oo,Je=typeof self=="object"&&self&&self.Object===Object&&self,Xe=Rt||Je||Function("return this")(),nn=e&&!e.nodeType&&e,zn=nn&&!0&&t&&!t.nodeType&&t,Fe=zn&&zn.exports===nn;function I(f,y){return f.set(y[0],y[1]),f}function F(f,y){return f.add(y),f}function D(f,y){for(var T=-1,q=f?f.length:0;++T<q&&y(f[T],T,f)!==!1;);return f}function H(f,y){for(var T=-1,q=y.length,Ue=f.length;++T<q;)f[Ue+T]=y[T];return f}function he(f,y,T,q){var Ue=-1,dt=f?f.length:0;for(q&&dt&&(T=f[++Ue]);++Ue<dt;)T=y(T,f[Ue],Ue,f);return T}function p(f,y){for(var T=-1,q=Array(f);++T<f;)q[T]=y(T);return q}function g(f,y){return f==null?void 0:f[y]}function _(f){var y=!1;if(f!=null&&typeof f.toString!="function")try{y=!!(f+"")}catch{}return y}function v(f){var y=-1,T=Array(f.size);return f.forEach(function(q,Ue){T[++y]=[Ue,q]}),T}function w(f,y){return function(T){return f(y(T))}}function P(f){var y=-1,T=Array(f.size);return f.forEach(function(q){T[++y]=q}),T}var M=Array.prototype,O=Function.prototype,N=Object.prototype,C=Xe["__core-js_shared__"],K=function(){var f=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||"");return f?"Symbol(src)_1."+f:""}(),B=O.toString,j=N.hasOwnProperty,G=N.toString,ie=RegExp("^"+B.call(j).replace(ue,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ee=Fe?Xe.Buffer:void 0,me=Xe.Symbol,Ce=Xe.Uint8Array,It=w(Object.getPrototypeOf,Object),En=Object.create,Qi=N.propertyIsEnumerable,Gn=M.splice,Is=Object.getOwnPropertySymbols,ft=Ee?Ee.isBuffer:void 0,Pt=w(Object.keys,Object),Rr=Cr(Xe,"DataView"),Ts=Cr(Xe,"Map"),rc=Cr(Xe,"Promise"),sc=Cr(Xe,"Set"),ic=Cr(Xe,"WeakMap"),ws=Cr(Object,"create"),Sy=Jn(Rr),Cy=Jn(Ts),by=Jn(rc),Oy=Jn(sc),ky=Jn(ic),Ah=me?me.prototype:void 0,Rh=Ah?Ah.valueOf:void 0;function Qn(f){var y=-1,T=f?f.length:0;for(this.clear();++y<T;){var q=f[y];this.set(q[0],q[1])}}function Ny(){this.__data__=ws?ws(null):{}}function Dy(f){return this.has(f)&&delete this.__data__[f]}function Vy(f){var y=this.__data__;if(ws){var T=y[f];return T===r?void 0:T}return j.call(y,f)?y[f]:void 0}function xy(f){var y=this.__data__;return ws?y[f]!==void 0:j.call(y,f)}function My(f,y){var T=this.__data__;return T[f]=ws&&y===void 0?r:y,this}Qn.prototype.clear=Ny,Qn.prototype.delete=Dy,Qn.prototype.get=Vy,Qn.prototype.has=xy,Qn.prototype.set=My;function rn(f){var y=-1,T=f?f.length:0;for(this.clear();++y<T;){var q=f[y];this.set(q[0],q[1])}}function Ly(){this.__data__=[]}function Fy(f){var y=this.__data__,T=Yi(y,f);if(T<0)return!1;var q=y.length-1;return T==q?y.pop():Gn.call(y,T,1),!0}function Uy(f){var y=this.__data__,T=Yi(y,f);return T<0?void 0:y[T][1]}function By(f){return Yi(this.__data__,f)>-1}function jy(f,y){var T=this.__data__,q=Yi(T,f);return q<0?T.push([f,y]):T[q][1]=y,this}rn.prototype.clear=Ly,rn.prototype.delete=Fy,rn.prototype.get=Uy,rn.prototype.has=By,rn.prototype.set=jy;function Pr(f){var y=-1,T=f?f.length:0;for(this.clear();++y<T;){var q=f[y];this.set(q[0],q[1])}}function $y(){this.__data__={hash:new Qn,map:new(Ts||rn),string:new Qn}}function qy(f){return Ji(this,f).delete(f)}function Hy(f){return Ji(this,f).get(f)}function Ky(f){return Ji(this,f).has(f)}function Wy(f,y){return Ji(this,f).set(f,y),this}Pr.prototype.clear=$y,Pr.prototype.delete=qy,Pr.prototype.get=Hy,Pr.prototype.has=Ky,Pr.prototype.set=Wy;function Sr(f){this.__data__=new rn(f)}function zy(){this.__data__=new rn}function Gy(f){return this.__data__.delete(f)}function Qy(f){return this.__data__.get(f)}function Yy(f){return this.__data__.has(f)}function Jy(f,y){var T=this.__data__;if(T instanceof rn){var q=T.__data__;if(!Ts||q.length<n-1)return q.push([f,y]),this;T=this.__data__=new Pr(q)}return T.set(f,y),this}Sr.prototype.clear=zy,Sr.prototype.delete=Gy,Sr.prototype.get=Qy,Sr.prototype.has=Yy,Sr.prototype.set=Jy;function Xy(f,y){var T=cc(f)||Tv(f)?p(f.length,String):[],q=T.length,Ue=!!q;for(var dt in f)(y||j.call(f,dt))&&!(Ue&&(dt=="length"||yv(dt,q)))&&T.push(dt);return T}function Ph(f,y,T){var q=f[y];(!(j.call(f,y)&&Oh(q,T))||T===void 0&&!(y in f))&&(f[y]=T)}function Yi(f,y){for(var T=f.length;T--;)if(Oh(f[T][0],y))return T;return-1}function Zy(f,y){return f&&Sh(y,lc(y),f)}function oc(f,y,T,q,Ue,dt,St){var mt;if(q&&(mt=dt?q(f,Ue,dt,St):q(f)),mt!==void 0)return mt;if(!Xi(f))return f;var Dh=cc(f);if(Dh){if(mt=gv(f),!y)return fv(f,mt)}else{var br=Yn(f),Vh=br==u||br==h;if(Av(f))return iv(f,y);if(br==E||br==i||Vh&&!dt){if(_(f))return dt?f:{};if(mt=mv(Vh?{}:f),!y)return dv(f,Zy(mt,f))}else{if(!ae[br])return dt?f:{};mt=_v(f,br,oc,y)}}St||(St=new Sr);var xh=St.get(f);if(xh)return xh;if(St.set(f,mt),!Dh)var Mh=T?pv(f):lc(f);return D(Mh||f,function(uc,Zi){Mh&&(Zi=uc,uc=f[Zi]),Ph(mt,Zi,oc(uc,y,T,q,Zi,f,St))}),mt}function ev(f){return Xi(f)?En(f):{}}function tv(f,y,T){var q=y(f);return cc(f)?q:H(q,T(f))}function nv(f){return G.call(f)}function rv(f){if(!Xi(f)||Ev(f))return!1;var y=Nh(f)||_(f)?ie:ge;return y.test(Jn(f))}function sv(f){if(!bh(f))return Pt(f);var y=[];for(var T in Object(f))j.call(f,T)&&T!="constructor"&&y.push(T);return y}function iv(f,y){if(y)return f.slice();var T=new f.constructor(f.length);return f.copy(T),T}function ac(f){var y=new f.constructor(f.byteLength);return new Ce(y).set(new Ce(f)),y}function ov(f,y){var T=y?ac(f.buffer):f.buffer;return new f.constructor(T,f.byteOffset,f.byteLength)}function av(f,y,T){var q=y?T(v(f),!0):v(f);return he(q,I,new f.constructor)}function cv(f){var y=new f.constructor(f.source,ve.exec(f));return y.lastIndex=f.lastIndex,y}function lv(f,y,T){var q=y?T(P(f),!0):P(f);return he(q,F,new f.constructor)}function uv(f){return Rh?Object(Rh.call(f)):{}}function hv(f,y){var T=y?ac(f.buffer):f.buffer;return new f.constructor(T,f.byteOffset,f.length)}function fv(f,y){var T=-1,q=f.length;for(y||(y=Array(q));++T<q;)y[T]=f[T];return y}function Sh(f,y,T,q){T||(T={});for(var Ue=-1,dt=y.length;++Ue<dt;){var St=y[Ue],mt=q?q(T[St],f[St],St,T,f):void 0;Ph(T,St,mt===void 0?f[St]:mt)}return T}function dv(f,y){return Sh(f,Ch(f),y)}function pv(f){return tv(f,lc,Ch)}function Ji(f,y){var T=f.__data__;return vv(y)?T[typeof y=="string"?"string":"hash"]:T.map}function Cr(f,y){var T=g(f,y);return rv(T)?T:void 0}var Ch=Is?w(Is,Object):Sv,Yn=nv;(Rr&&Yn(new Rr(new ArrayBuffer(1)))!=pe||Ts&&Yn(new Ts)!=d||rc&&Yn(rc.resolve())!=R||sc&&Yn(new sc)!=k||ic&&Yn(new ic)!=L)&&(Yn=function(f){var y=G.call(f),T=y==E?f.constructor:void 0,q=T?Jn(T):void 0;if(q)switch(q){case Sy:return pe;case Cy:return d;case by:return R;case Oy:return k;case ky:return L}return y});function gv(f){var y=f.length,T=f.constructor(y);return y&&typeof f[0]=="string"&&j.call(f,"index")&&(T.index=f.index,T.input=f.input),T}function mv(f){return typeof f.constructor=="function"&&!bh(f)?ev(It(f)):{}}function _v(f,y,T,q){var Ue=f.constructor;switch(y){case ne:return ac(f);case a:case c:return new Ue(+f);case pe:return ov(f,q);case we:case se:case ee:case ye:case Me:case Ye:case ut:case jt:case ht:return hv(f,q);case d:return av(f,q,T);case m:case x:return new Ue(f);case S:return cv(f);case k:return lv(f,q,T);case W:return uv(f)}}function yv(f,y){return y=y??s,!!y&&(typeof f=="number"||kt.test(f))&&f>-1&&f%1==0&&f<y}function vv(f){var y=typeof f;return y=="string"||y=="number"||y=="symbol"||y=="boolean"?f!=="__proto__":f===null}function Ev(f){return!!K&&K in f}function bh(f){var y=f&&f.constructor,T=typeof y=="function"&&y.prototype||N;return f===T}function Jn(f){if(f!=null){try{return B.call(f)}catch{}try{return f+""}catch{}}return""}function Iv(f){return oc(f,!0,!0)}function Oh(f,y){return f===y||f!==f&&y!==y}function Tv(f){return wv(f)&&j.call(f,"callee")&&(!Qi.call(f,"callee")||G.call(f)==i)}var cc=Array.isArray;function kh(f){return f!=null&&Rv(f.length)&&!Nh(f)}function wv(f){return Pv(f)&&kh(f)}var Av=ft||Cv;function Nh(f){var y=Xi(f)?G.call(f):"";return y==u||y==h}function Rv(f){return typeof f=="number"&&f>-1&&f%1==0&&f<=s}function Xi(f){var y=typeof f;return!!f&&(y=="object"||y=="function")}function Pv(f){return!!f&&typeof f=="object"}function lc(f){return kh(f)?Xy(f):sv(f)}function Sv(){return[]}function Cv(){return!1}t.exports=Iv})(Mo,Mo.exports);var sT=Mo.exports;const gf=rT(sT);function iT({store:t}){const e=gf(t.$state);t.$reset=()=>t.$patch(gf(e))}var oT=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Zp;const Ia=t=>Zp=t,eg=Symbol();function nl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qs||(qs={}));function aT(){const t=cp(!0),e=t.run(()=>Vn({}));let n=[],r=[];const s=pa({install(i){Ia(s),s._a=i,i.provide(eg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!oT?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const tg=()=>{};function mf(t,e,n,r=tg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&lp()&&Kv(s),s}function kr(t,...e){t.slice().forEach(n=>{n(...e)})}const cT=t=>t();function rl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];nl(s)&&nl(r)&&t.hasOwnProperty(n)&&!ke(r)&&!Dn(r)?t[n]=rl(s,r):t[n]=r}return t}const lT=Symbol();function uT(t){return!nl(t)||!t.hasOwnProperty(lT)}const{assign:An}=Object;function hT(t){return!!(ke(t)&&t.effect)}function fT(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=TE(n.state.value[t]);return An(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=pa(Ct(()=>{Ia(n);const m=n._s.get(t);return o[d].call(m,m)})),h),{}))}return c=ng(t,l,e,n,r,!0),c}function ng(t,e,n={},r,s,i){let o;const a=An({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],m;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),Vn({});let R;function S(se){let ee;l=u=!1,typeof se=="function"?(se(r.state.value[t]),ee={type:qs.patchFunction,storeId:t,events:m}):(rl(r.state.value[t],se),ee={type:qs.patchObject,payload:se,storeId:t,events:m});const ye=R=Symbol();Zl().then(()=>{R===ye&&(l=!0)}),u=!0,kr(h,ee,r.state.value[t])}const k=i?function(){const{state:ee}=n,ye=ee?ee():{};this.$patch(Me=>{An(Me,ye)})}:tg;function x(){o.stop(),h=[],d=[],r._s.delete(t)}function W(se,ee){return function(){Ia(r);const ye=Array.from(arguments),Me=[],Ye=[];function ut(ue){Me.push(ue)}function jt(ue){Ye.push(ue)}kr(d,{args:ye,name:se,store:ne,after:ut,onError:jt});let ht;try{ht=ee.apply(this&&this.$id===t?this:ne,ye)}catch(ue){throw kr(Ye,ue),ue}return ht instanceof Promise?ht.then(ue=>(kr(Me,ue),ue)).catch(ue=>(kr(Ye,ue),Promise.reject(ue))):(kr(Me,ht),ht)}}const L={_p:r,$id:t,$onAction:mf.bind(null,d),$patch:S,$reset:k,$subscribe(se,ee={}){const ye=mf(h,se,ee.detached,()=>Me()),Me=o.run(()=>Bs(()=>r.state.value[t],Ye=>{(ee.flush==="sync"?u:l)&&se({storeId:t,type:qs.direct,events:m},Ye)},An({},c,ee)));return ye},$dispose:x},ne=tn(L);r._s.set(t,ne);const pe=r._a&&r._a.runWithContext||cT,we=r._e.run(()=>(o=cp(),pe(()=>o.run(e))));for(const se in we){const ee=we[se];if(ke(ee)&&!hT(ee)||Dn(ee))i||(E&&uT(ee)&&(ke(ee)?ee.value=E[se]:rl(ee,E[se])),r.state.value[t][se]=ee);else if(typeof ee=="function"){const ye=W(se,ee);we[se]=ye,a.actions[se]=ee}}return An(ne,we),An(de(ne),we),Object.defineProperty(ne,"$state",{get:()=>r.state.value[t],set:se=>{S(ee=>{An(ee,se)})}}),r._p.forEach(se=>{An(ne,o.run(()=>se({store:ne,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(ne.$state,E),l=!0,u=!0,ne}function rg(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=cI();return a=a||(l?Qt(eg,null):null),a&&Ia(a),a=Zp,a._s.has(r)||(i?ng(r,e,s,a):fT(r,s,a)),a._s.get(r)}return o.$id=r,o}const sg={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Lo={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},ou={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},ig={dangerouslyHTMLString:!1,multiple:!0,position:sg.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},dT={rtl:!1,newestOnTop:!1,toastClassName:""},pT={...ig,...dT};({...ig,type:ou.DEFAULT});var Fo=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(Fo||{});tn({});tn({});tn({items:[]});const gT=tn({});tn({});function mT(...t){return Qp(...t)}function _T(t={}){gT["".concat(Fo.CSS_NAMESPACE,"-default-options")]=t}sg.TOP_LEFT,Lo.AUTO,ou.DEFAULT;ou.DEFAULT,Lo.AUTO;Lo.AUTO,Lo.LIGHT;const og={install(t,e={}){yT(e)}};typeof window<"u"&&(window.Vue3Toastify=og);function yT(t={}){const e=mT(pT,t);_T(e)}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const xr=typeof window<"u";function vT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function _c(t,e){const n={};for(const r in e){const s=e[r];n[r]=Lt(s)?s.map(t):t(s)}return n}const Hs=()=>{},Lt=Array.isArray,ET=/\/$/,IT=t=>t.replace(ET,"");function yc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=RT(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function TT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _f(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function wT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Xr(e.matched[r],n.matched[s])&&ag(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ag(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!AT(t[n],e[n]))return!1;return!0}function AT(t,e){return Lt(t)?yf(t,e):Lt(e)?yf(e,t):t===e}function yf(t,e){return Lt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function RT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var ci;(function(t){t.pop="pop",t.push="push"})(ci||(ci={}));var Ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ks||(Ks={}));function PT(t){if(!t)if(xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),IT(t)}const ST=/^[^#]+#/;function CT(t,e){return t.replace(ST,"#")+e}function bT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ta=()=>({left:window.pageXOffset,top:window.pageYOffset});function OT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=bT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vf(t,e){return(history.state?history.state.position-e:-1)+t}const sl=new Map;function kT(t,e){sl.set(t,e)}function NT(t){const e=sl.get(t);return sl.delete(t),e}let DT=()=>location.protocol+"//"+location.host;function cg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),_f(c,"")}return _f(n,t)+r+s}function VT(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=cg(t,location),E=n.value,R=e.value;let S=0;if(d){if(n.value=m,e.value=d,o&&o===E){o=null;return}S=R?d.position-R.position:0}else r(m);s.forEach(k=>{k(n.value,E,{delta:S,type:ci.pop,direction:S?S>0?Ks.forward:Ks.back:Ks.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const E=s.indexOf(d);E>-1&&s.splice(E,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(Ie({},d.state,{scroll:Ta()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Ef(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ta():null}}function xT(t){const{history:e,location:n}=window,r={value:cg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:DT()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=Ie({},e.state,Ef(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Ie({},s.value,e.state,{forward:c,scroll:Ta()});i(u.current,u,!0);const h=Ie({},Ef(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function MT(t){t=PT(t);const e=xT(t),n=VT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ie({location:"",base:t,go:r,createHref:CT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function LT(t){return typeof t=="string"||t&&typeof t=="object"}function lg(t){return typeof t=="string"||typeof t=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ug=Symbol("");var If;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(If||(If={}));function Zr(t,e){return Ie(new Error,{type:t,[ug]:!0},e)}function sn(t,e){return t instanceof Error&&ug in t&&(e==null||!!(t.type&e))}const Tf="[^/]+?",FT={sensitive:!1,strict:!1,start:!0,end:!0},UT=/[.+*?^${}()[\]/\\]/g;function BT(t,e){const n=Ie({},FT,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(UT,"\\$&"),m+=40;else if(d.type===1){const{value:E,repeatable:R,optional:S,regexp:k}=d;i.push({name:E,repeatable:R,optional:S});const x=k||Tf;if(x!==Tf){m+=10;try{new RegExp(`(${x})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${E}" (${x}): `+L.message)}}let W=R?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(W=S&&l.length<2?`(?:/${W})`:"/"+W),S&&(W+="?"),s+=W,m+=20,S&&(m+=-8),R&&(m+=-20),x===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",E=i[d-1];h[E.name]=m&&E.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:E,repeatable:R,optional:S}=m,k=E in l?l[E]:"";if(Lt(k)&&!R)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const x=Lt(k)?k.join("/"):k;if(!x)if(S)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function jT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function $T(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=jT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(wf(r))return 1;if(wf(s))return-1}return s.length-r.length}function wf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qT={type:0,value:""},HT=/[a-zA-Z0-9_]/;function KT(t){if(!t)return[[]];if(t==="/")return[[qT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:HT.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function WT(t,e,n){const r=BT(KT(t.path),n),s=Ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function zT(t,e){const n=[],r=new Map;e=Pf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const m=!d,E=GT(u);E.aliasOf=d&&d.record;const R=Pf(e,u),S=[E];if("alias"in u){const W=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of W)S.push(Ie({},E,{components:d?d.record.components:E.components,path:L,aliasOf:d?d.record:E}))}let k,x;for(const W of S){const{path:L}=W;if(h&&L[0]!=="/"){const ne=h.record.path,pe=ne[ne.length-1]==="/"?"":"/";W.path=h.record.path+(L&&pe+L)}if(k=WT(W,h,R),d?d.alias.push(k):(x=x||k,x!==k&&x.alias.push(k),m&&u.name&&!Rf(k)&&o(u.name)),E.children){const ne=E.children;for(let pe=0;pe<ne.length;pe++)i(ne[pe],k,d&&d.children[pe])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return x?()=>{o(x)}:Hs}function o(u){if(lg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&$T(u,n[h])>=0&&(u.record.path!==n[h].record.path||!hg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Rf(u)&&r.set(u.record.name,u)}function l(u,h){let d,m={},E,R;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Zr(1,{location:u});R=d.record.name,m=Ie(Af(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Af(u.params,d.keys.map(x=>x.name))),E=d.stringify(m)}else if("path"in u)E=u.path,d=n.find(x=>x.re.test(E)),d&&(m=d.parse(E),R=d.record.name);else{if(d=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw Zr(1,{location:u,currentLocation:h});R=d.record.name,m=Ie({},h.params,u.params),E=d.stringify(m)}const S=[];let k=d;for(;k;)S.unshift(k.record),k=k.parent;return{name:R,path:E,params:m,matched:S,meta:YT(S)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Af(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function GT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:QT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function QT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Rf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function YT(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function Pf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function hg(t,e){return e.children.some(n=>n===t||hg(t,n))}const fg=/#/g,JT=/&/g,XT=/\//g,ZT=/=/g,ew=/\?/g,dg=/\+/g,tw=/%5B/g,nw=/%5D/g,pg=/%5E/g,rw=/%60/g,gg=/%7B/g,sw=/%7C/g,mg=/%7D/g,iw=/%20/g;function au(t){return encodeURI(""+t).replace(sw,"|").replace(tw,"[").replace(nw,"]")}function ow(t){return au(t).replace(gg,"{").replace(mg,"}").replace(pg,"^")}function il(t){return au(t).replace(dg,"%2B").replace(iw,"+").replace(fg,"%23").replace(JT,"%26").replace(rw,"`").replace(gg,"{").replace(mg,"}").replace(pg,"^")}function aw(t){return il(t).replace(ZT,"%3D")}function cw(t){return au(t).replace(fg,"%23").replace(ew,"%3F")}function lw(t){return t==null?"":cw(t).replace(XT,"%2F")}function Uo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function uw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(dg," "),o=i.indexOf("="),a=Uo(o<0?i:i.slice(0,o)),c=o<0?null:Uo(i.slice(o+1));if(a in e){let l=e[a];Lt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Sf(t){let e="";for(let n in t){const r=t[n];if(n=aw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Lt(r)?r.map(i=>i&&il(i)):[r&&il(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function hw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Lt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const fw=Symbol(""),Cf=Symbol(""),cu=Symbol(""),_g=Symbol(""),ol=Symbol("");function Rs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Zr(4,{from:n,to:e})):h instanceof Error?a(h):LT(h)?a(Zr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function vc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(dw(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Pn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=vT(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Pn(d,n,r,i,o)()}))}}return s}function dw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bf(t){const e=Qt(cu),n=Qt(_g),r=Ct(()=>e.resolve(cr(t.to))),s=Ct(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Xr.bind(null,u));if(d>-1)return d;const m=Of(c[l-2]);return l>1&&Of(u)===m&&h[h.length-1].path!==m?h.findIndex(Xr.bind(null,c[l-2])):d}),i=Ct(()=>s.value>-1&&_w(n.params,r.value.params)),o=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&ag(n.params,r.value.params));function a(c={}){return mw(c)?e[cr(t.replace)?"replace":"push"](cr(t.to)).catch(Hs):Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const pw=tu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bf,setup(t,{slots:e}){const n=tn(bf(t)),{options:r}=Qt(cu),s=Ct(()=>({[kf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[kf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Xp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),gw=pw;function mw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _w(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Lt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Of(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kf=(t,e,n)=>t??e??n,yw=tu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Qt(ol),s=Ct(()=>t.route||r.value),i=Qt(Cf,0),o=Ct(()=>{let l=cr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ct(()=>s.value.matched[o.value]);Eo(Cf,Ct(()=>o.value+1)),Eo(fw,a),Eo(ol,s);const c=Vn();return Bs(()=>[c.value,a.value,t.name],([l,u,h],[d,m,E])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Xr(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(R=>R(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Nf(n.default,{Component:d,route:l});const m=h.props[u],E=m?m===!0?l.params:typeof m=="function"?m(l):m:null,S=Xp(d,Ie({},E,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Nf(n.default,{Component:S,route:l})||S}}});function Nf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const yg=yw;function vw(t){const e=zT(t.routes,t),n=t.parseQuery||uw,r=t.stringifyQuery||Sf,s=t.history,i=Rs(),o=Rs(),a=Rs(),c=vE(Tn);let l=Tn;xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_c.bind(null,I=>""+I),h=_c.bind(null,lw),d=_c.bind(null,Uo);function m(I,F){let D,H;return lg(I)?(D=e.getRecordMatcher(I),H=F):H=I,e.addRoute(H,D)}function E(I){const F=e.getRecordMatcher(I);F&&e.removeRoute(F)}function R(){return e.getRoutes().map(I=>I.record)}function S(I){return!!e.getRecordMatcher(I)}function k(I,F){if(F=Ie({},F||c.value),typeof I=="string"){const _=yc(n,I,F.path),v=e.resolve({path:_.path},F),w=s.createHref(_.fullPath);return Ie(_,v,{params:d(v.params),hash:Uo(_.hash),redirectedFrom:void 0,href:w})}let D;if("path"in I)D=Ie({},I,{path:yc(n,I.path,F.path).path});else{const _=Ie({},I.params);for(const v in _)_[v]==null&&delete _[v];D=Ie({},I,{params:h(_)}),F.params=h(F.params)}const H=e.resolve(D,F),he=I.hash||"";H.params=u(d(H.params));const p=TT(r,Ie({},I,{hash:ow(he),path:H.path})),g=s.createHref(p);return Ie({fullPath:p,hash:he,query:r===Sf?hw(I.query):I.query||{}},H,{redirectedFrom:void 0,href:g})}function x(I){return typeof I=="string"?yc(n,I,c.value.path):Ie({},I)}function W(I,F){if(l!==I)return Zr(8,{from:F,to:I})}function L(I){return we(I)}function ne(I){return L(Ie(x(I),{replace:!0}))}function pe(I){const F=I.matched[I.matched.length-1];if(F&&F.redirect){const{redirect:D}=F;let H=typeof D=="function"?D(I):D;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=x(H):{path:H},H.params={}),Ie({query:I.query,hash:I.hash,params:"path"in H?{}:I.params},H)}}function we(I,F){const D=l=k(I),H=c.value,he=I.state,p=I.force,g=I.replace===!0,_=pe(D);if(_)return we(Ie(x(_),{state:typeof _=="object"?Ie({},he,_.state):he,force:p,replace:g}),F||D);const v=D;v.redirectedFrom=F;let w;return!p&&wT(r,H,D)&&(w=Zr(16,{to:v,from:H}),Rt(H,H,!0,!1)),(w?Promise.resolve(w):ye(v,H)).catch(P=>sn(P)?sn(P,2)?P:ae(P):ge(P,v,H)).then(P=>{if(P){if(sn(P,2))return we(Ie({replace:g},x(P.to),{state:typeof P.to=="object"?Ie({},he,P.to.state):he,force:p}),F||v)}else P=Ye(v,H,!0,g,he);return Me(v,H,P),P})}function se(I,F){const D=W(I,F);return D?Promise.reject(D):Promise.resolve()}function ee(I){const F=nn.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(I):I()}function ye(I,F){let D;const[H,he,p]=Ew(I,F);D=vc(H.reverse(),"beforeRouteLeave",I,F);for(const _ of H)_.leaveGuards.forEach(v=>{D.push(Pn(v,I,F))});const g=se.bind(null,I,F);return D.push(g),Fe(D).then(()=>{D=[];for(const _ of i.list())D.push(Pn(_,I,F));return D.push(g),Fe(D)}).then(()=>{D=vc(he,"beforeRouteUpdate",I,F);for(const _ of he)_.updateGuards.forEach(v=>{D.push(Pn(v,I,F))});return D.push(g),Fe(D)}).then(()=>{D=[];for(const _ of p)if(_.beforeEnter)if(Lt(_.beforeEnter))for(const v of _.beforeEnter)D.push(Pn(v,I,F));else D.push(Pn(_.beforeEnter,I,F));return D.push(g),Fe(D)}).then(()=>(I.matched.forEach(_=>_.enterCallbacks={}),D=vc(p,"beforeRouteEnter",I,F),D.push(g),Fe(D))).then(()=>{D=[];for(const _ of o.list())D.push(Pn(_,I,F));return D.push(g),Fe(D)}).catch(_=>sn(_,8)?_:Promise.reject(_))}function Me(I,F,D){a.list().forEach(H=>ee(()=>H(I,F,D)))}function Ye(I,F,D,H,he){const p=W(I,F);if(p)return p;const g=F===Tn,_=xr?history.state:{};D&&(H||g?s.replace(I.fullPath,Ie({scroll:g&&_&&_.scroll},he)):s.push(I.fullPath,he)),c.value=I,Rt(I,F,D,g),ae()}let ut;function jt(){ut||(ut=s.listen((I,F,D)=>{if(!zn.listening)return;const H=k(I),he=pe(H);if(he){we(Ie(he,{replace:!0}),H).catch(Hs);return}l=H;const p=c.value;xr&&kT(vf(p.fullPath,D.delta),Ta()),ye(H,p).catch(g=>sn(g,12)?g:sn(g,2)?(we(g.to,H).then(_=>{sn(_,20)&&!D.delta&&D.type===ci.pop&&s.go(-1,!1)}).catch(Hs),Promise.reject()):(D.delta&&s.go(-D.delta,!1),ge(g,H,p))).then(g=>{g=g||Ye(H,p,!1),g&&(D.delta&&!sn(g,8)?s.go(-D.delta,!1):D.type===ci.pop&&sn(g,20)&&s.go(-1,!1)),Me(H,p,g)}).catch(Hs)}))}let ht=Rs(),ue=Rs(),ve;function ge(I,F,D){ae(I);const H=ue.list();return H.length?H.forEach(he=>he(I,F,D)):console.error(I),Promise.reject(I)}function kt(){return ve&&c.value!==Tn?Promise.resolve():new Promise((I,F)=>{ht.add([I,F])})}function ae(I){return ve||(ve=!I,jt(),ht.list().forEach(([F,D])=>I?D(I):F()),ht.reset()),I}function Rt(I,F,D,H){const{scrollBehavior:he}=t;if(!xr||!he)return Promise.resolve();const p=!D&&NT(vf(I.fullPath,0))||(H||!D)&&history.state&&history.state.scroll||null;return Zl().then(()=>he(I,F,p)).then(g=>g&&OT(g)).catch(g=>ge(g,I,F))}const Je=I=>s.go(I);let Xe;const nn=new Set,zn={currentRoute:c,listening:!0,addRoute:m,removeRoute:E,hasRoute:S,getRoutes:R,resolve:k,options:t,push:L,replace:ne,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:kt,install(I){const F=this;I.component("RouterLink",gw),I.component("RouterView",yg),I.config.globalProperties.$router=F,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>cr(c)}),xr&&!Xe&&c.value===Tn&&(Xe=!0,L(s.location).catch(he=>{}));const D={};for(const he in Tn)Object.defineProperty(D,he,{get:()=>c.value[he],enumerable:!0});I.provide(cu,F),I.provide(_g,Ep(D)),I.provide(ol,c);const H=I.unmount;nn.add(I),I.unmount=function(){nn.delete(I),nn.size<1&&(l=Tn,ut&&ut(),ut=null,c.value=Tn,Xe=!1,ve=!1),H()}}};function Fe(I){return I.reduce((F,D)=>F.then(()=>ee(D)),Promise.resolve())}return zn}function Ew(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Xr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Xr(l,c))||s.push(c))}return[n,r,s]}/**
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
 */const vg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Iw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Iw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Tw;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const E=l<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Tw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ww=function(t){const e=vg(t);return Eg.encodeByteArray(e,!0)},Bo=function(t){return ww(t).replace(/\./g,"")},Ig=function(t){try{return Eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Aw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rw=()=>Aw().__FIREBASE_DEFAULTS__,Pw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ig(t[1]);return e&&JSON.parse(e)},lu=()=>{try{return Rw()||Pw()||Sw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tg=t=>{var e,n;return(n=(e=lu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cw=t=>{const e=Tg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wg=()=>{var t;return(t=lu())===null||t===void 0?void 0:t.config},Ag=t=>{var e;return(e=lu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class bw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ow(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Bo(JSON.stringify(n)),Bo(JSON.stringify(o)),a].join(".")}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function Nw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vw(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Mw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Lw="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Lw,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Fw(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vn(s,a,r)}}function Fw(t,e){return t.replace(Uw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Uw=/\{\$([^}]+)}/g;function Bw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Df(i)&&Df(o)){if(!jo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Df(t){return t!==null&&typeof t=="object"}/**
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
 */function Ci(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ns(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jw(t,e){const n=new $w(t,e);return n.subscribe.bind(n)}class $w{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ec),s.error===void 0&&(s.error=Ec),s.complete===void 0&&(s.complete=Ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const er="[DEFAULT]";/**
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
 */class Hw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ww(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kw(t){return t===er?void 0:t}function Ww(t){return t.instantiationMode==="EAGER"}/**
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
 */class zw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const Gw={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Qw=ce.INFO,Yw={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},Jw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Yw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uu{constructor(e){this.name=e,this._logLevel=Qw,this._logHandler=Jw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const Xw=(t,e)=>e.some(n=>t instanceof n);let Vf,xf;function Zw(){return Vf||(Vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eA(){return xf||(xf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rg=new WeakMap,al=new WeakMap,Pg=new WeakMap,Ic=new WeakMap,hu=new WeakMap;function tA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rg.set(n,t)}).catch(()=>{}),hu.set(e,t),e}function nA(t){if(al.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});al.set(t,e)}let cl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return al.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rA(t){cl=t(cl)}function sA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tc(this),e,...n);return Pg.set(r,e.sort?e.sort():[e]),Mn(r)}:eA().includes(t)?function(...e){return t.apply(Tc(this),e),Mn(Rg.get(this))}:function(...e){return Mn(t.apply(Tc(this),e))}}function iA(t){return typeof t=="function"?sA(t):(t instanceof IDBTransaction&&nA(t),Xw(t,Zw())?new Proxy(t,cl):t)}function Mn(t){if(t instanceof IDBRequest)return tA(t);if(Ic.has(t))return Ic.get(t);const e=iA(t);return e!==t&&(Ic.set(t,e),hu.set(e,t)),e}const Tc=t=>hu.get(t);function oA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Mn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Mn(o.result),c.oldVersion,c.newVersion,Mn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const aA=["get","getKey","getAll","getAllKeys","count"],cA=["put","add","delete","clear"],wc=new Map;function Mf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wc.get(e))return wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||aA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return wc.set(e,i),i}rA(t=>({...t,get:(e,n,r)=>Mf(e,n)||t.get(e,n,r),has:(e,n)=>!!Mf(e,n)||t.has(e,n)}));/**
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
 */class lA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ll="@firebase/app",Lf="0.9.19";/**
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
 */const dr=new uu("@firebase/app"),hA="@firebase/app-compat",fA="@firebase/analytics-compat",dA="@firebase/analytics",pA="@firebase/app-check-compat",gA="@firebase/app-check",mA="@firebase/auth",_A="@firebase/auth-compat",yA="@firebase/database",vA="@firebase/database-compat",EA="@firebase/functions",IA="@firebase/functions-compat",TA="@firebase/installations",wA="@firebase/installations-compat",AA="@firebase/messaging",RA="@firebase/messaging-compat",PA="@firebase/performance",SA="@firebase/performance-compat",CA="@firebase/remote-config",bA="@firebase/remote-config-compat",OA="@firebase/storage",kA="@firebase/storage-compat",NA="@firebase/firestore",DA="@firebase/firestore-compat",VA="firebase",xA="10.4.0";/**
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
 */const ul="[DEFAULT]",MA={[ll]:"fire-core",[hA]:"fire-core-compat",[dA]:"fire-analytics",[fA]:"fire-analytics-compat",[gA]:"fire-app-check",[pA]:"fire-app-check-compat",[mA]:"fire-auth",[_A]:"fire-auth-compat",[yA]:"fire-rtdb",[vA]:"fire-rtdb-compat",[EA]:"fire-fn",[IA]:"fire-fn-compat",[TA]:"fire-iid",[wA]:"fire-iid-compat",[AA]:"fire-fcm",[RA]:"fire-fcm-compat",[PA]:"fire-perf",[SA]:"fire-perf-compat",[CA]:"fire-rc",[bA]:"fire-rc-compat",[OA]:"fire-gcs",[kA]:"fire-gcs-compat",[NA]:"fire-fst",[DA]:"fire-fst-compat","fire-js":"fire-js",[VA]:"fire-js-all"};/**
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
 */const $o=new Map,hl=new Map;function LA(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(hl.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;hl.set(e,t);for(const n of $o.values())LA(n,t);return!0}function fu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const FA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ln=new Si("app","Firebase",FA);/**
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
 */class UA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=xA;function Sg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ul,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ln.create("bad-app-name",{appName:String(s)});if(n||(n=wg()),!n)throw Ln.create("no-options");const i=$o.get(s);if(i){if(jo(n,i.options)&&jo(r,i.config))return i;throw Ln.create("duplicate-app",{appName:s})}const o=new zw(s);for(const c of hl.values())o.addComponent(c);const a=new UA(n,r,o);return $o.set(s,a),a}function Cg(t=ul){const e=$o.get(t);if(!e&&t===ul&&wg())return Sg();if(!e)throw Ln.create("no-app",{appName:t});return e}function Fn(t,e,n){var r;let s=(r=MA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(a.join(" "));return}es(new fr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const BA="firebase-heartbeat-database",jA=1,li="firebase-heartbeat-store";let Ac=null;function bg(){return Ac||(Ac=oA(BA,jA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(li)}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),Ac}async function $A(t){try{return await(await bg()).transaction(li).objectStore(li).get(Og(t))}catch(e){if(e instanceof vn)dr.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function Ff(t,e){try{const r=(await bg()).transaction(li,"readwrite");await r.objectStore(li).put(e,Og(t)),await r.done}catch(n){if(n instanceof vn)dr.warn(n.message);else{const r=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(r.message)}}}function Og(t){return`${t.name}!${t.options.appId}`}/**
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
 */const qA=1024,HA=30*24*60*60*1e3;class KA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Uf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=HA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uf(),{heartbeatsToSend:n,unsentEntries:r}=WA(this._heartbeatsCache.heartbeats),s=Bo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Uf(){return new Date().toISOString().substring(0,10)}function WA(t,e=qA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Bf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xw()?Mw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $A(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bf(t){return Bo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function GA(t){es(new fr("platform-logger",e=>new lA(e),"PRIVATE")),es(new fr("heartbeat",e=>new KA(e),"PRIVATE")),Fn(ll,Lf,t),Fn(ll,Lf,"esm2017"),Fn("fire-js","")}GA("");var QA="firebase",YA="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn(QA,YA,"app");var JA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,du=du||{},J=JA||self;function wa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function XA(t){return Object.prototype.hasOwnProperty.call(t,Rc)&&t[Rc]||(t[Rc]=++ZA)}var Rc="closure_uid_"+(1e9*Math.random()>>>0),ZA=0;function e0(t,e,n){return t.call.apply(t.bind,arguments)}function t0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function it(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=e0:it=t0,it.apply(null,arguments)}function ao(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function He(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Hn(){this.s=this.s,this.o=this.o}var n0=0;Hn.prototype.s=!1;Hn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),n0!=0)&&XA(this)};Hn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function jf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(wa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var r0=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function ui(t){return/^[\s\xa0]*$/.test(t)}function Aa(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function Wt(t){return Aa().indexOf(t)!=-1}function gu(t){return gu[" "](t),t}gu[" "]=function(){};function s0(t,e){var n=Y0;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var i0=Wt("Opera"),ts=Wt("Trident")||Wt("MSIE"),Ng=Wt("Edge"),fl=Ng||ts,Dg=Wt("Gecko")&&!(Aa().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge"))&&!(Wt("Trident")||Wt("MSIE"))&&!Wt("Edge"),o0=Aa().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge");function Vg(){var t=J.document;return t?t.documentMode:void 0}var dl;e:{var Pc="",Sc=function(){var t=Aa();if(Dg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ng)return/Edge\/([\d\.]+)/.exec(t);if(ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(o0)return/WebKit\/(\S+)/.exec(t);if(i0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Sc&&(Pc=Sc?Sc[1]:""),ts){var Cc=Vg();if(Cc!=null&&Cc>parseFloat(Pc)){dl=String(Cc);break e}}dl=Pc}var pl;if(J.document&&ts){var $f=Vg();pl=$f||parseInt(dl,10)||void 0}else pl=void 0;var a0=pl;function hi(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Dg){e:{try{gu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:c0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&hi.$.h.call(this)}}He(hi,ot);var c0={2:"touch",3:"pen",4:"mouse"};hi.prototype.h=function(){hi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oi="closure_listenable_"+(1e6*Math.random()|0),l0=0;function u0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++l0,this.fa=this.ia=!1}function Ra(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function mu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function h0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xg(t){const e={};for(const n in t)e[n]=t[n];return e}const qf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<qf.length;i++)n=qf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Pa(t){this.src=t,this.g={},this.h=0}Pa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ml(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new u0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function gl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=kg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ra(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ml(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var _u="closure_lm_"+(1e6*Math.random()|0),bc={};function Lg(t,e,n,r,s){if(r&&r.once)return Ug(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Lg(t,e[i],n,r,s);return null}return n=Eu(n),t&&t[Oi]?t.O(e,n,bi(r)?!!r.capture:!!r,s):Fg(t,e,n,!1,r,s)}function Fg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=bi(s)?!!s.capture:!!s,a=vu(t);if(a||(t[_u]=a=new Pa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=f0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)r0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(jg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function f0(){function t(n){return e.call(t.src,t.listener,n)}const e=d0;return t}function Ug(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ug(t,e[i],n,r,s);return null}return n=Eu(n),t&&t[Oi]?t.P(e,n,bi(r)?!!r.capture:!!r,s):Fg(t,e,n,!0,r,s)}function Bg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Bg(t,e[i],n,r,s);else r=bi(r)?!!r.capture:!!r,n=Eu(n),t&&t[Oi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ml(i,n,r,s),-1<n&&(Ra(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=vu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ml(e,n,r,s)),(n=-1<t?e[t]:null)&&yu(n))}function yu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Oi])gl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(jg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vu(e))?(gl(n,t),n.h==0&&(n.src=null,e[_u]=null)):Ra(t)}}}function jg(t){return t in bc?bc[t]:bc[t]="on"+t}function d0(t,e){if(t.fa)t=!0;else{e=new hi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&yu(t),t=n.call(r,e)}return t}function vu(t){return t=t[_u],t instanceof Pa?t:null}var Oc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eu(t){return typeof t=="function"?t:(t[Oc]||(t[Oc]=function(e){return t.handleEvent(e)}),t[Oc])}function qe(){Hn.call(this),this.i=new Pa(this),this.S=this,this.J=null}He(qe,Hn);qe.prototype[Oi]=!0;qe.prototype.removeEventListener=function(t,e,n,r){Bg(this,t,e,n,r)};function Ge(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var s=e;e=new ot(r,t),Mg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=co(o,r,!0,e)&&s}if(o=e.g=t,s=co(o,r,!0,e)&&s,s=co(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=co(o,r,!1,e)&&s}qe.prototype.N=function(){if(qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ra(n[r]);delete t.g[e],t.h--}}this.J=null};qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function co(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&gl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Iu=J.JSON.stringify;class p0{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function g0(){var t=Tu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class m0{constructor(){this.h=this.g=null}add(e,n){const r=$g.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var $g=new p0(()=>new _0,t=>t.reset());class _0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function y0(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function v0(t){J.setTimeout(()=>{throw t},0)}let fi,di=!1,Tu=new m0,qg=()=>{const t=J.Promise.resolve(void 0);fi=()=>{t.then(E0)}};var E0=()=>{for(var t;t=g0();){try{t.h.call(t.g)}catch(n){v0(n)}var e=$g;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}di=!1};function Sa(t,e){qe.call(this),this.h=t||1,this.g=e||J,this.j=it(this.qb,this),this.l=Date.now()}He(Sa,qe);V=Sa.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ge(this,"tick"),this.ga&&(wu(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Sa.$.N.call(this),wu(this),delete this.g};function Au(t,e,n){if(typeof t=="function")n&&(t=it(t,n));else if(t&&typeof t.handleEvent=="function")t=it(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function Hg(t){t.g=Au(()=>{t.g=null,t.i&&(t.i=!1,Hg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class I0 extends Hn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Hg(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pi(t){Hn.call(this),this.h=t,this.g={}}He(pi,Hn);var Hf=[];function Kg(t,e,n,r){Array.isArray(n)||(n&&(Hf[0]=n.toString()),n=Hf);for(var s=0;s<n.length;s++){var i=Lg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Wg(t){mu(t.g,function(e,n){this.g.hasOwnProperty(n)&&yu(e)},t),t.g={}}pi.prototype.N=function(){pi.$.N.call(this),Wg(this)};pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ca(){this.g=!0}Ca.prototype.Ea=function(){this.g=!1};function T0(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function w0(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ur(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+R0(t,n)+(r?" "+r:"")})}function A0(t,e){t.info(function(){return"TIMEOUT: "+e})}Ca.prototype.info=function(){};function R0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Iu(n)}catch{return e}}var vr={},Kf=null;function ba(){return Kf=Kf||new qe}vr.Ta="serverreachability";function zg(t){ot.call(this,vr.Ta,t)}He(zg,ot);function gi(t){const e=ba();Ge(e,new zg(e))}vr.STAT_EVENT="statevent";function Gg(t,e){ot.call(this,vr.STAT_EVENT,t),this.stat=e}He(Gg,ot);function gt(t){const e=ba();Ge(e,new Gg(e,t))}vr.Ua="timingevent";function Qg(t,e){ot.call(this,vr.Ua,t),this.size=e}He(Qg,ot);function ki(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Oa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Yg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ru(){}Ru.prototype.h=null;function Wf(t){return t.h||(t.h=t.i())}function Jg(){}var Ni={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Pu(){ot.call(this,"d")}He(Pu,ot);function Su(){ot.call(this,"c")}He(Su,ot);var _l;function ka(){}He(ka,Ru);ka.prototype.g=function(){return new XMLHttpRequest};ka.prototype.i=function(){return{}};_l=new ka;function Di(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new pi(this),this.P=P0,t=fl?125:void 0,this.V=new Sa(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Xg}function Xg(){this.i=null,this.g="",this.h=!1}var P0=45e3,yl={},qo={};V=Di.prototype;V.setTimeout=function(t){this.P=t};function vl(t,e,n){t.L=1,t.v=Da(dn(e)),t.s=n,t.S=!0,Zg(t,null)}function Zg(t,e){t.G=Date.now(),Vi(t),t.A=dn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),am(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Xg,t.g=Cm(t.l,n?e:null,!t.s),0<t.O&&(t.M=new I0(it(t.Pa,t,t.g),t.O)),Kg(t.U,t.g,"readystatechange",t.nb),e=t.I?xg(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),gi(),T0(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&zt(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=zt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||fl||this.g&&(this.h.h||this.g.ja()||Yf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?gi(3):gi(2)),Na(this);var n=this.g.da();this.ca=n;t:if(em(this)){var r=Yf(this.g);t="";var s=r.length,i=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),Ws(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,w0(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ui(a)){var l=a;break t}}l=null}if(n=l)Ur(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,El(this,n);else{this.i=!1,this.o=3,gt(12),sr(this),Ws(this);break e}}this.S?(tm(this,u,o),fl&&this.i&&u==3&&(Kg(this.U,this.V,"tick",this.mb),this.V.start())):(Ur(this.j,this.m,o,null),El(this,o)),u==4&&sr(this),this.i&&!this.J&&(u==4?Am(this.l,this):(this.i=!1,Vi(this)))}else z0(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),sr(this),Ws(this)}}}catch{}finally{}};function em(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function tm(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=S0(t,n),s==qo){e==4&&(t.o=4,gt(14),r=!1),Ur(t.j,t.m,null,"[Incomplete Response]");break}else if(s==yl){t.o=4,gt(15),Ur(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ur(t.j,t.m,s,null),El(t,s);em(t)&&s!=qo&&s!=yl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Du(e),e.M=!0,gt(11))):(Ur(t.j,t.m,n,"[Invalid Chunked Response]"),sr(t),Ws(t))}V.mb=function(){if(this.g){var t=zt(this.g),e=this.g.ja();this.C<e.length&&(Na(this),tm(this,t,e),this.i&&t!=4&&Vi(this))}};function S0(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?qo:(n=Number(e.substring(n,r)),isNaN(n)?yl:(r+=1,r+n>e.length?qo:(e=e.slice(r,r+n),t.C=r+n,e)))}V.cancel=function(){this.J=!0,sr(this)};function Vi(t){t.Y=Date.now()+t.P,nm(t,t.P)}function nm(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ki(it(t.lb,t),e)}function Na(t){t.B&&(J.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(A0(this.j,this.A),this.L!=2&&(gi(),gt(17)),sr(this),this.o=2,Ws(this)):nm(this,this.Y-t)};function Ws(t){t.l.H==0||t.J||Am(t.l,t)}function sr(t){Na(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,wu(t.V),Wg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function El(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Il(n.i,t))){if(!t.K&&Il(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Wo(n),La(n);else break e;Nu(n),gt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ki(it(n.ib,n),6e3));if(1>=um(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ir(n,11)}else if((t.K||n.g==t)&&Wo(n),!ui(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const E=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Cu(i,i.h),i.h=null))}if(r.F){const R=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,Re(r.I,r.F,R))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Sm(r,r.J?r.pa:null,r.Y),o.K){hm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Na(a),Vi(a)),r.g=o}else Tm(r);0<n.j.length&&Fa(n)}else l[0]!="stop"&&l[0]!="close"||ir(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ir(n,7):ku(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}gi(4)}catch{}}function C0(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(wa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function b0(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(wa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function rm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=b0(t),r=C0(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var sm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function O0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ur(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ur){this.h=t.h,Ho(this,t.j),this.s=t.s,this.g=t.g,Ko(this,t.m),this.l=t.l;var e=t.i,n=new mi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),zf(this,n),this.o=t.o}else t&&(e=String(t).match(sm))?(this.h=!1,Ho(this,e[1]||"",!0),this.s=Ds(e[2]||""),this.g=Ds(e[3]||"",!0),Ko(this,e[4]),this.l=Ds(e[5]||"",!0),zf(this,e[6]||"",!0),this.o=Ds(e[7]||"")):(this.h=!1,this.i=new mi(null,this.h))}ur.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Vs(e,Gf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Vs(e,Gf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Vs(n,n.charAt(0)=="/"?D0:N0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Vs(n,x0)),t.join("")};function dn(t){return new ur(t)}function Ho(t,e,n){t.j=n?Ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ko(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function zf(t,e,n){e instanceof mi?(t.i=e,M0(t.i,t.h)):(n||(e=Vs(e,V0)),t.i=new mi(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Da(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,k0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function k0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gf=/[#\/\?@]/g,N0=/[#\?:]/g,D0=/[#\?]/g,V0=/[#\?@]/g,x0=/#/g;function mi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Kn(t){t.g||(t.g=new Map,t.h=0,t.i&&O0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=mi.prototype;V.add=function(t,e){Kn(this),this.i=null,t=ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function im(t,e){Kn(t),e=ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function om(t,e){return Kn(t),e=ds(t,e),t.g.has(e)}V.forEach=function(t,e){Kn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){Kn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){Kn(this);let e=[];if(typeof t=="string")om(this,t)&&(e=e.concat(this.g.get(ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Kn(this),this.i=null,t=ds(this,t),om(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function am(t,e,n){im(t,e),0<n.length&&(t.i=null,t.g.set(ds(t,e),pu(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function M0(t,e){e&&!t.j&&(Kn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(im(this,r),am(this,s,n))},t)),t.j=e}var L0=class{constructor(t,e){this.g=t,this.map=e}};function cm(t){this.l=t||F0,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var F0=10;function lm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function um(t){return t.h?1:t.g?t.g.size:0}function Il(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Cu(t,e){t.g?t.g.add(e):t.h=e}function hm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cm.prototype.cancel=function(){if(this.i=fm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return pu(t.i)}var U0=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function B0(){this.g=new U0}function j0(t,e,n){const r=n||"";try{rm(t,function(s,i){let o=s;bi(s)&&(o=Iu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function $0(t,e){const n=new Ca;if(J.Image){const r=new Image;r.onload=ao(lo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ao(lo,n,r,"TestLoadImage: error",!1,e),r.onabort=ao(lo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ao(lo,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function lo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Va(t){this.l=t.ec||null,this.j=t.ob||!1}He(Va,Ru);Va.prototype.g=function(){return new xa(this.l,this.j)};Va.prototype.i=function(t){return function(){return t}}({});function xa(t,e){qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=bu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(xa,qe);var bu=0;V=xa.prototype;V.open=function(t,e){if(this.readyState!=bu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_i(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=bu};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function dm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xi(this):_i(this),this.readyState==3&&dm(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,xi(this))};V.Ya=function(t){this.g&&(this.response=t,xi(this))};V.ka=function(){this.g&&xi(this)};function xi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_i(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _i(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var q0=J.JSON.parse;function Oe(t){qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pm,this.L=this.M=!1}He(Oe,qe);var pm="",H0=/^https?$/i,K0=["POST","PUT"];V=Oe.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_l.g(),this.C=this.u?Wf(this.u):Wf(_l),this.g.onreadystatechange=it(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Qf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=J.FormData&&t instanceof J.FormData,!(0<=kg(K0,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_m(this),0<this.B&&((this.L=W0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.ua,this)):this.A=Au(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Qf(this,i)}};function W0(t){return ts&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof du<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function Qf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gm(t),Ma(t)}function gm(t){t.F||(t.F=!0,Ge(t,"complete"),Ge(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Ma(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ma(this,!0)),Oe.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?mm(this):this.kb())};V.kb=function(){mm(this)};function mm(t){if(t.h&&typeof du<"u"&&(!t.C[1]||zt(t)!=4||t.da()!=2)){if(t.v&&zt(t)==4)Au(t.La,0,t);else if(Ge(t,"readystatechange"),zt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(sm)[1]||null;!s&&J.self&&J.self.location&&(s=J.self.location.protocol.slice(0,-1)),r=!H0.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var i=2<zt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",gm(t)}}finally{Ma(t)}}}}function Ma(t,e){if(t.g){_m(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function _m(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function zt(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),q0(e)}};function Yf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case pm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function z0(t){const e={};t=(t.g&&2<=zt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ui(t[r]))continue;var n=y0(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}h0(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ym(t){let e="";return mu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ou(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ym(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Ps(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vm(t){this.Ga=0,this.j=[],this.l=new Ca,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ps("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ps("baseRetryDelayMs",5e3,t),this.hb=Ps("retryDelaySeedMs",1e4,t),this.eb=Ps("forwardChannelMaxRetries",2,t),this.xa=Ps("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cm(t&&t.concurrentRequestLimit),this.Ja=new B0,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=vm.prototype;V.ra=8;V.H=1;function ku(t){if(Em(t),t.H==3){var e=t.W++,n=dn(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),Mi(t,n),e=new Di(t,t.l,e),e.L=2,e.v=Da(dn(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=Cm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Vi(e)}Pm(t)}function La(t){t.g&&(Du(t),t.g.cancel(),t.g=null)}function Em(t){La(t),t.u&&(J.clearTimeout(t.u),t.u=null),Wo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Fa(t){if(!lm(t.i)&&!t.m){t.m=!0;var e=t.Na;fi||qg(),di||(fi(),di=!0),Tu.add(e,t),t.C=0}}function G0(t,e){return um(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ki(it(t.Na,t,e),Rm(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Di(this,this.l,t);let i=this.s;if(this.U&&(i?(i=xg(i),Mg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Im(this,s,e),n=dn(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),Mi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(ym(i)))+"&"+e:this.o&&Ou(n,this.o,i)),Cu(this.i,s),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),s.aa=!0,vl(s,n,null)):vl(s,n,e),this.H=2}}else this.H==3&&(t?Jf(this,t):this.j.length==0||lm(this.i)||Jf(this))};function Jf(t,e){var n;e?n=e.m:n=t.W++;const r=dn(t.I);Re(r,"SID",t.K),Re(r,"RID",n),Re(r,"AID",t.V),Mi(t,r),t.o&&t.s&&Ou(r,t.o,t.s),n=new Di(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Im(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Cu(t.i,n),vl(n,r,e)}function Mi(t,e){t.na&&mu(t.na,function(n,r){Re(e,r,n)}),t.h&&rm({},function(n,r){Re(e,r,n)})}function Im(t,e,n){n=Math.min(t.j.length,n);var r=t.h?it(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{j0(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Tm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;fi||qg(),di||(fi(),di=!0),Tu.add(e,t),t.A=0}}function Nu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ki(it(t.Ma,t),Rm(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,wm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ki(it(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),La(this),wm(this))};function Du(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function wm(t){t.g=new Di(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dn(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),Mi(t,e),t.o&&t.s&&Ou(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Da(dn(e)),n.s=null,n.S=!0,Zg(n,t)}V.ib=function(){this.v!=null&&(this.v=null,La(this),Nu(this),gt(19))};function Wo(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function Am(t,e){var n=null;if(t.g==e){Wo(t),Du(t),t.g=null;var r=2}else if(Il(t.i,e))n=e.F,hm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=ba(),Ge(r,new Qg(r,n)),Fa(t)}else Tm(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&G0(t,e)||r==2&&Nu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ir(t,5);break;case 4:ir(t,10);break;case 3:ir(t,6);break;default:ir(t,2)}}}function Rm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ir(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=it(t.pb,t);n||(n=new ur("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Ho(n,"https"),Da(n)),$0(n.toString(),r)}else gt(2);t.H=0,t.h&&t.h.za(e),Pm(t),Em(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function Pm(t){if(t.H=0,t.ma=[],t.h){const e=fm(t.i);(e.length!=0||t.j.length!=0)&&(jf(t.ma,e),jf(t.ma,t.j),t.i.i.length=0,pu(t.j),t.j.length=0),t.h.ya()}}function Sm(t,e,n){var r=n instanceof ur?dn(n):new ur(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ko(r,r.m);else{var s=J.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new ur(null);r&&Ho(i,r),e&&(i.g=e),s&&Ko(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Re(r,n,e),Re(r,"VER",t.ra),Mi(t,r),r}function Cm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Oe(new Va({ob:!0})):new Oe(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function bm(){}V=bm.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function zo(){if(ts&&!(10<=Number(a0)))throw Error("Environmental error: no available transport.")}zo.prototype.g=function(t,e){return new At(t,e)};function At(t,e){qe.call(this),this.g=new vm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ui(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ui(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ps(this)}He(At,qe);At.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;gt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Sm(t,null,t.Y),Fa(t)};At.prototype.close=function(){ku(this.g)};At.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Iu(t),t=n);e.j.push(new L0(e.fb++,t)),e.H==3&&Fa(e)};At.prototype.N=function(){this.g.h=null,delete this.j,ku(this.g),delete this.g,At.$.N.call(this)};function Om(t){Pu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(Om,Pu);function km(){Su.call(this),this.status=1}He(km,Su);function ps(t){this.g=t}He(ps,bm);ps.prototype.Ba=function(){Ge(this.g,"a")};ps.prototype.Aa=function(t){Ge(this.g,new Om(t))};ps.prototype.za=function(t){Ge(this.g,new km)};ps.prototype.ya=function(){Ge(this.g,"b")};function Q0(){this.blockSize=-1}function Ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}He(Ft,Q0);Ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function kc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ft.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)kc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){kc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){kc(this,r),s=0;break}}this.h=s,this.i+=e};Ft.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Te(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Y0={};function Vu(t){return-128<=t&&128>t?s0(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Gt(t){if(isNaN(t)||!isFinite(t))return qr;if(0>t)return We(Gt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Tl;return new Te(e,0)}function Nm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return We(Nm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Gt(Math.pow(e,8)),r=qr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Gt(Math.pow(e,i)),r=r.R(i).add(Gt(o))):(r=r.R(n),r=r.add(Gt(o)))}return r}var Tl=4294967296,qr=Vu(0),wl=Vu(1),Xf=Vu(16777216);V=Te.prototype;V.ea=function(){if(bt(this))return-We(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Tl+r)*e,e*=Tl}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cn(this))return"0";if(bt(this))return"-"+We(this).toString(t);for(var e=Gt(Math.pow(t,6)),n=this,r="";;){var s=Qo(n,e).g;n=Go(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,cn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function bt(t){return t.h==-1}V.X=function(t){return t=Go(this,t),bt(t)?-1:cn(t)?0:1};function We(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Te(n,~t.h).add(wl)}V.abs=function(){return bt(this)?We(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function Go(t,e){return t.add(We(e))}V.R=function(t){if(cn(this)||cn(t))return qr;if(bt(this))return bt(t)?We(this).R(We(t)):We(We(this).R(t));if(bt(t))return We(this.R(We(t)));if(0>this.X(Xf)&&0>t.X(Xf))return Gt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,uo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,uo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,uo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,uo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Te(n,0)};function uo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ss(t,e){this.g=t,this.h=e}function Qo(t,e){if(cn(e))throw Error("division by zero");if(cn(t))return new Ss(qr,qr);if(bt(t))return e=Qo(We(t),e),new Ss(We(e.g),We(e.h));if(bt(e))return e=Qo(t,We(e)),new Ss(We(e.g),e.h);if(30<t.g.length){if(bt(t)||bt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=wl,r=e;0>=r.X(t);)n=Zf(n),r=Zf(r);var s=Nr(n,1),i=Nr(r,1);for(r=Nr(r,2),n=Nr(n,2);!cn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Nr(r,1),n=Nr(n,1)}return e=Go(t,s.R(e)),new Ss(s,e)}for(s=qr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Gt(n),o=i.R(e);bt(o)||0<o.X(t);)n-=r,i=Gt(n),o=i.R(e);cn(i)&&(i=wl),s=s.add(i),t=Go(t,o)}return new Ss(s,t)}V.gb=function(t){return Qo(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Te(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Te(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Te(n,this.h^t.h)};function Zf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Te(n,t.h)}function Nr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Te(s,t.h)}zo.prototype.createWebChannel=zo.prototype.g;At.prototype.send=At.prototype.u;At.prototype.open=At.prototype.m;At.prototype.close=At.prototype.close;Oa.NO_ERROR=0;Oa.TIMEOUT=8;Oa.HTTP_ERROR=6;Yg.COMPLETE="complete";Jg.EventType=Ni;Ni.OPEN="a";Ni.CLOSE="b";Ni.ERROR="c";Ni.MESSAGE="d";qe.prototype.listen=qe.prototype.O;Oe.prototype.listenOnce=Oe.prototype.P;Oe.prototype.getLastError=Oe.prototype.Sa;Oe.prototype.getLastErrorCode=Oe.prototype.Ia;Oe.prototype.getStatus=Oe.prototype.da;Oe.prototype.getResponseJson=Oe.prototype.Wa;Oe.prototype.getResponseText=Oe.prototype.ja;Oe.prototype.send=Oe.prototype.ha;Oe.prototype.setWithCredentials=Oe.prototype.Oa;Ft.prototype.digest=Ft.prototype.l;Ft.prototype.reset=Ft.prototype.reset;Ft.prototype.update=Ft.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Gt;Te.fromString=Nm;var J0=function(){return new zo},X0=function(){return ba()},Nc=Oa,Z0=Yg,eR=vr,ed={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ho=Jg,tR=Oe,nR=Ft,Hr=Te;const td="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let gs="10.4.0";/**
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
 */const pr=new uu("@firebase/firestore");function Cs(){return pr.logLevel}function $(t,...e){if(pr.logLevel<=ce.DEBUG){const n=e.map(xu);pr.debug(`Firestore (${gs}): ${t}`,...n)}}function pn(t,...e){if(pr.logLevel<=ce.ERROR){const n=e.map(xu);pr.error(`Firestore (${gs}): ${t}`,...n)}}function ns(t,...e){if(pr.logLevel<=ce.WARN){const n=e.map(xu);pr.warn(`Firestore (${gs}): ${t}`,...n)}}function xu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: `+t;throw pn(e),new Error(e)}function Se(t,e){t||Y()}function te(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Dm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class sR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iR{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new Dm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new et(e)}}class oR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class aR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new oR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new cR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Vm{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=uR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function rs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Le(0,0))}static max(){return new X(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class yi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends yi{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const hR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends yi{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return hR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Pe.fromString(e))}static fromName(e){return new z(Pe.fromString(e).popFirst(5))}static empty(){return new z(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Pe(e.slice()))}}function fR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new jn(s,z.empty(),e)}function dR(t){return new jn(t.readTime,t.key,-1)}class jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jn(X.min(),z.empty(),-1)}static max(){return new jn(X.max(),z.empty(),-1)}}function pR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Li(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==gR)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(s=>s?b.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new b((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new b((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Fi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Mu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Mu.ae=-1;function Ua(t){return t==null}function Yo(t){return t===0&&1/t==-1/0}function _R(t){return typeof t=="number"&&Number.isInteger(t)&&!Yo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function nd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Er(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class be{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fo(this.root,e,this.comparator,!0)}}class fo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=s??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ke(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rd(this.data.getIterator())}getIteratorFrom(e){return new rd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class rd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new wt([])}unionWith(e){let n=new at(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Mm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Mm("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const yR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $n(t){if(Se(!!t),typeof t=="string"){let e=0;const n=yR.exec(t);if(Se(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gr(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fu(t){const e=t.mapValue.fields.__previous_value__;return Lu(e)?Fu(e):e}function vi(t){const e=$n(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class vR{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lu(t)?4:ER(t)?9007199254740991:10:Y()}function en(t,e){if(t===e)return!0;const n=mr(t);if(n!==mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vi(t).isEqual(vi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=$n(s.timestampValue),a=$n(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return gr(s.bytesValue).isEqual(gr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),a=Ve(i.doubleValue);return o===a?Yo(o)===Yo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(nd(o)!==nd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!en(o[c],a[c])))return!1;return!0}(t,e);default:return Y()}}function Ii(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=mr(t),r=mr(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ve(i.integerValue||i.doubleValue),c=Ve(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return sd(t.timestampValue,e.timestampValue);case 4:return sd(vi(t),vi(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(i,o){const a=gr(i),c=gr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=_e(a[l],c[l]);if(u!==0)return u}return _e(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=_e(Ve(i.latitude),Ve(o.latitude));return a!==0?a:_e(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=ss(a[l],c[l]);if(u)return u}return _e(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===po.mapValue&&o===po.mapValue)return 0;if(i===po.mapValue)return 1;if(o===po.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=_e(c[h],u[h]);if(d!==0)return d;const m=ss(a[c[h]],l[u[h]]);if(m!==0)return m}return _e(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function sd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=$n(t),r=$n(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function is(t){return Al(t)}function Al(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$n(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Al(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Al(n.fields[o])}`;return s+"}"}(t.mapValue):Y()}function id(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Rl(t){return!!t&&"integerValue"in t}function Uu(t){return!!t&&"arrayValue"in t}function od(t){return!!t&&"nullValue"in t}function ad(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function To(t){return!!t&&"mapValue"in t}function zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Er(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ER(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!To(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=zs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());To(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];To(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Er(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new yt(zs(this.value))}}function Lm(t){const e=[];return Er(t.fields,(n,r)=>{const s=new rt([n]);if(To(r)){const i=Lm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new wt(e)}/**
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
 */class tt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,X.min(),X.min(),X.min(),yt.empty(),0)}static newFoundDocument(e,n,r,s){return new tt(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new tt(e,2,n,X.min(),X.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,X.min(),X.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jo{constructor(e,n){this.position=e,this.inclusive=n}}function cd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ld(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function IR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Fm{}class xe extends Fm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wR(e,n,r):n==="array-contains"?new PR(e,r):n==="in"?new SR(e,r):n==="not-in"?new CR(e,r):n==="array-contains-any"?new bR(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AR(e,r):new RR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&mr(this.value)===mr(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ut extends Fm{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Ut(e,n)}matches(e){return Um(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Um(t){return t.op==="and"}function Bm(t){return TR(t)&&Um(t)}function TR(t){for(const e of t.filters)if(e instanceof Ut)return!1;return!0}function Pl(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+is(t.value);if(Bm(t))return t.filters.map(e=>Pl(e)).join(",");{const e=t.filters.map(n=>Pl(n)).join(",");return`${t.op}(${e})`}}function jm(t,e){return t instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)}(t,e):t instanceof Ut?function(r,s){return s instanceof Ut&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&jm(o,s.filters[a]),!0):!1}(t,e):void Y()}function $m(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${is(n.value)}`}(t):t instanceof Ut?function(n){return n.op.toString()+" {"+n.getFilters().map($m).join(" ,")+"}"}(t):"Filter"}class wR extends xe{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class AR extends xe{constructor(e,n){super(e,"in",n),this.keys=qm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class RR extends xe{constructor(e,n){super(e,"not-in",n),this.keys=qm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class PR extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uu(n)&&Ii(n.arrayValue,this.value)}}class SR extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ii(this.value.arrayValue,n)}}class CR extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ii(this.value.arrayValue,n)}}class bR extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ii(this.value.arrayValue,r))}}/**
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
 */class OR{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function ud(t,e=null,n=[],r=[],s=null,i=null,o=null){return new OR(t,e,n,r,s,i,o)}function Bu(t){const e=te(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ua(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>is(r)).join(",")),e.he=n}return e.he}function ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ld(t.startAt,e.startAt)&&ld(t.endAt,e.endAt)}function Sl(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ui{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function kR(t,e,n,r,s,i,o,a){return new Ui(t,e,n,r,s,i,o,a)}function $u(t){return new Ui(t)}function hd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Hm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function qu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Km(t){return t.collectionGroup!==null}function Qs(t){const e=te(t);if(e.Pe===null){e.Pe=[];const n=qu(e),r=Hm(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Gs(n)),e.Pe.push(new Gs(rt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Gs(rt.keyField(),i))}}}return e.Pe}function Yt(t){const e=te(t);return e.Ie||(e.Ie=NR(e,Qs(t))),e.Ie}function NR(t,e){if(t.limitType==="F")return ud(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Gs(s.field,i)});const n=t.endAt?new Jo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jo(t.startAt.position,t.startAt.inclusive):null;return ud(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Cl(t,e){e.getFirstInequalityField(),qu(t);const n=t.filters.concat([e]);return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bl(t,e,n){return new Ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ba(t,e){return ju(Yt(t),Yt(e))&&t.limitType===e.limitType}function Wm(t){return`${Bu(Yt(t))}|lt:${t.limitType}`}function Mr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>$m(s)).join(", ")}]`),Ua(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>is(s)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function ja(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=cd(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Qs(r),s)||r.endAt&&!function(o,a,c){const l=cd(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Qs(r),s))}(t,e)}function DR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zm(t){return(e,n)=>{let r=!1;for(const s of Qs(t)){const i=VR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function VR(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?ss(c,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
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
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Er(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xm(this.inner)}size(){return this.innerSize}}/**
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
 */const xR=new be(z.comparator);function gn(){return xR}const Gm=new be(z.comparator);function xs(...t){let e=Gm;for(const n of t)e=e.insert(n.key,n);return e}function Qm(t){let e=Gm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function or(){return Ys()}function Ym(){return Ys()}function Ys(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const MR=new be(z.comparator),LR=new at(z.comparator);function oe(...t){let e=LR;for(const n of t)e=e.add(n);return e}const FR=new at(_e);function UR(){return FR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yo(e)?"-0":e}}function Xm(t){return{integerValue:""+t}}function BR(t,e){return _R(e)?Xm(e):Jm(t,e)}/**
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
 */class $a{constructor(){this._=void 0}}function jR(t,e,n){return t instanceof Xo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Lu(i)&&(i=Fu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ti?e_(t,e):t instanceof wi?t_(t,e):function(s,i){const o=Zm(s,i),a=fd(o)+fd(s.Te);return Rl(o)&&Rl(s.Te)?Xm(a):Jm(s.serializer,a)}(t,e)}function $R(t,e,n){return t instanceof Ti?e_(t,e):t instanceof wi?t_(t,e):n}function Zm(t,e){return t instanceof Zo?function(r){return Rl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Xo extends $a{}class Ti extends $a{constructor(e){super(),this.elements=e}}function e_(t,e){const n=n_(e);for(const r of t.elements)n.some(s=>en(s,r))||n.push(r);return{arrayValue:{values:n}}}class wi extends $a{constructor(e){super(),this.elements=e}}function t_(t,e){let n=n_(e);for(const r of t.elements)n=n.filter(s=>!en(s,r));return{arrayValue:{values:n}}}class Zo extends $a{constructor(e,n){super(),this.serializer=e,this.Te=n}}function fd(t){return Ve(t.integerValue||t.doubleValue)}function n_(t){return Uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ti&&s instanceof Ti||r instanceof wi&&s instanceof wi?rs(r.elements,s.elements,en):r instanceof Zo&&s instanceof Zo?en(r.Te,s.Te):r instanceof Xo&&s instanceof Xo}(t.transform,e.transform)}class HR{constructor(e,n){this.version=e,this.transformResults=n}}class Mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mt}static exists(e){return new Mt(void 0,e)}static updateTime(e){return new Mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qa{}function r_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hu(t.key,Mt.none()):new Bi(t.key,t.data,Mt.none());{const n=t.data,r=yt.empty();let s=new at(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Wn(t.key,r,new wt(s.toArray()),Mt.none())}}function KR(t,e,n){t instanceof Bi?function(s,i,o){const a=s.value.clone(),c=pd(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Wn?function(s,i,o){if(!wo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=pd(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(s_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Js(t,e,n,r){return t instanceof Bi?function(i,o,a,c){if(!wo(i.precondition,o))return a;const l=i.value.clone(),u=gd(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Wn?function(i,o,a,c){if(!wo(i.precondition,o))return a;const l=gd(i.fieldTransforms,c,o),u=o.data;return u.setAll(s_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return wo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function WR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Zm(r.transform,s||null);i!=null&&(n===null&&(n=yt.empty()),n.set(r.field,i))}return n||null}function dd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,(i,o)=>qR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bi extends qa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wn extends qa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function s_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function pd(t,e,n){const r=new Map;Se(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,$R(o,a,n[s]))}return r}function gd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,jR(i,o,e))}return r}class Hu extends qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zR extends qa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class GR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&KR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ym();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=r_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(n,r)=>dd(n,r))&&rs(this.baseMutations,e.baseMutations,(n,r)=>dd(n,r))}}class Ku{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length);let s=function(){return MR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ku(e,n,r,s)}}/**
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
 */class QR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class YR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,le;function JR(t){switch(t){default:return Y();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function i_(t){if(t===void 0)return pn("GRPC error has no .code"),A.UNKNOWN;switch(t){case De.OK:return A.OK;case De.CANCELLED:return A.CANCELLED;case De.UNKNOWN:return A.UNKNOWN;case De.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case De.INTERNAL:return A.INTERNAL;case De.UNAVAILABLE:return A.UNAVAILABLE;case De.UNAUTHENTICATED:return A.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case De.NOT_FOUND:return A.NOT_FOUND;case De.ALREADY_EXISTS:return A.ALREADY_EXISTS;case De.PERMISSION_DENIED:return A.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case De.ABORTED:return A.ABORTED;case De.OUT_OF_RANGE:return A.OUT_OF_RANGE;case De.UNIMPLEMENTED:return A.UNIMPLEMENTED;case De.DATA_LOSS:return A.DATA_LOSS;default:return Y()}}(le=De||(De={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function XR(){return new TextEncoder}/**
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
 */const ZR=new Hr([4294967295,4294967295],0);function md(t){const e=XR().encode(t),n=new nR;return n.update(e),new Uint8Array(n.digest())}function _d(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([s,i],0)]}class Wu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ms(`Invalid padding: ${n}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Hr.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Hr.fromNumber(r)));return s.compare(ZR)===1&&(s=new Hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=md(e),[r,s]=_d(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=md(e),[r,s]=_d(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ha{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ji.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ha(X.min(),s,new be(_e),gn(),oe())}}class ji{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ji(r,n,oe(),oe(),oe())}}/**
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
 */class Ao{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class o_{constructor(e,n){this.targetId=e,this.ye=n}}class a_{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class yd{constructor(){this.we=0,this.Se=Ed(),this.be=lt.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=oe(),n=oe(),r=oe();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new ji(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Ed()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class eP{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=gn(),this.Ue=vd(),this.We=new be(_e)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Sl(i))if(r===0){const o=new z(i.path);this.je(n,o,tt.newNoDocument(o,X.min()))}else Se(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=gr(r).toUint8Array()}catch(c){if(c instanceof Mm)return ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Wu(o,s,i)}catch(c){return ns(c instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Sl(a.target)){const c=new z(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,tt.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=oe();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Ha(e,n,this.We,this.$e,r);return this.$e=gn(),this.Ue=vd(),this.We=new be(_e),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new yd,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new at(_e),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new yd),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function vd(){return new be(z.comparator)}function Ed(){return new be(z.comparator)}const tP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rP=(()=>({and:"AND",or:"OR"}))();class sP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ol(t,e){return t.useProto3Json||Ua(e)?e:{value:e}}function ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function c_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iP(t,e){return ea(t,e.toTimestamp())}function Jt(t){return Se(!!t),X.fromTimestamp(function(n){const r=$n(n);return new Le(r.seconds,r.nanos)}(t))}function zu(t,e){return function(r){return new Pe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function l_(t){const e=Pe.fromString(t);return Se(d_(e)),e}function kl(t,e){return zu(t.databaseId,e.path)}function Dc(t,e){const n=l_(e);if(n.get(1)!==t.databaseId.projectId)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(u_(n))}function Nl(t,e){return zu(t.databaseId,e)}function oP(t){const e=l_(t);return e.length===4?Pe.emptyPath():u_(e)}function Dl(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function u_(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Id(t,e,n){return{name:kl(t,e),fields:n.value.mapValue.fields}}function aP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Se(u===void 0||typeof u=="string"),lt.fromBase64String(u||"")):(Se(u===void 0||u instanceof Uint8Array),lt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:i_(l.code);return new U(u,l.message||"")}(o);n=new a_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Dc(t,r.document.name),i=Jt(r.document.updateTime),o=r.document.createTime?Jt(r.document.createTime):X.min(),a=new yt({mapValue:{fields:r.document.fields}}),c=tt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ao(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Dc(t,r.document),i=r.readTime?Jt(r.readTime):X.min(),o=tt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ao([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Dc(t,r.document),i=r.removedTargetIds||[];n=new Ao([],i,s,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new YR(s,i),a=r.targetId;n=new o_(a,o)}}return n}function cP(t,e){let n;if(e instanceof Bi)n={update:Id(t,e.key,e.value)};else if(e instanceof Hu)n={delete:kl(t,e.key)};else if(e instanceof Wn)n={update:Id(t,e.key,e.data),updateMask:_P(e.fieldMask)};else{if(!(e instanceof zR))return Y();n={verify:kl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ti)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:iP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function lP(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Jt(s.updateTime):Jt(i);return o.isEqual(X.min())&&(o=Jt(i)),new HR(o,s.transformResults||[])}(n,e))):[]}function uP(t,e){return{documents:[Nl(t,e.path)]}}function hP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Nl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return f_(Ut.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Lr(h.field),direction:pP(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ol(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function fP(t){let e=oP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=h_(h);return d instanceof Ut&&Bm(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(E){return new Gs(Fr(E.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ua(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new Jo(m,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,m=h.values||[];return new Jo(m,d)}(n.endAt)),kR(e,s,o,i,a,"F",c,l)}function dP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function h_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(Fr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ut.create(n.compositeFilter.filters.map(r=>h_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function pP(t){return tP[t]}function gP(t){return nP[t]}function mP(t){return rP[t]}function Lr(t){return{fieldPath:t.canonicalString()}}function Fr(t){return rt.fromServerFormat(t.fieldPath)}function f_(t){return t instanceof xe?function(n){if(n.op==="=="){if(ad(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NAN"}};if(od(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ad(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NAN"}};if(od(n.value))return{unaryFilter:{field:Lr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lr(n.field),op:gP(n.op),value:n.value}}}(t):t instanceof Ut?function(n){const r=n.getFilters().map(s=>f_(s));return r.length===1?r[0]:{compositeFilter:{op:mP(n.op),filters:r}}}(t):Y()}function _P(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function d_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class kn{constructor(e,n,r,s,i=X.min(),o=X.min(),a=lt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yP{constructor(e){this.ht=e}}function vP(t){const e=fP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bl(e,e.limit,"L"):e}/**
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
 */class EP{constructor(){this.an=new IP}addToCollectionParentIndex(e,n){return this.an.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(jn.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class IP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Pe.comparator)).toArray()}}/**
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
 */class os{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new os(0)}static Ln(){return new os(-1)}}/**
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
 */class TP{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class AP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Js(r.mutation,s,wt.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=or();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=xs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=gn();const o=Ys(),a=function(){return Ys()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Wn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Js(u.mutation,l,u.mutation.getFieldMask(),Le.now())):o.set(l.key,wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new wP(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ys();let s=new be((o,a)=>o-a),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||wt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||oe()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Ym();u.forEach(d=>{if(!i.has(d)){const m=r_(n.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Km(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):b.resolve(or());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?b.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,oe())).next(u=>({batchId:a,changes:Qm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let s=xs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=xs();return this.indexManager.getCollectionParents(e,i).next(a=>b.forEach(a,c=>{const l=function(h,d){return new Ui(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,tt.newInvalidDocument(u)))});let a=xs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Js(u.mutation,l,wt.empty(),Le.now()),ja(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return b.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Jt(s.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:vP(s.bundledQuery),readTime:Jt(s.readTime)}}(n)),b.resolve()}}/**
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
 */class PP{constructor(){this.overlays=new be(z.comparator),this.Pr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=or();return b.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const s=or(),i=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return b.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=or(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=or(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return b.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new QR(n,r));let i=this.Pr.get(n);i===void 0&&(i=oe(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
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
 */class Gu{constructor(){this.Ir=new at(Be.dr),this.Tr=new at(Be.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new Be(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new Be(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new z(new Pe([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new z(new Pe([])),r=new Be(n,e),s=new Be(n,e+1);let i=oe();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return z.comparator(e.key,n.key)||_e(e.yr,n.yr)}static Er(e,n){return _e(e.yr,n.yr)||z.comparator(e.key,n.key)}}/**
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
 */class SP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new at(Be.dr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GR(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new Be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(_e);return n.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;z.isDocumentKey(i)||(i=i.child(""));const o=new Be(new z(i),0);let a=new at(_e);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.yr)),!0)},o),b.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Se(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return b.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new Be(n,0),s=this.Sr.firstAfterOrEqual(r);return b.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class CP{constructor(e){this.Fr=e,this.docs=function(){return new be(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=gn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=gn();const o=n.path,a=new z(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||pR(dR(u),r)<=0||(s.has(u.key)||ja(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y()}Mr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bP(this)}getSize(e){return b.resolve(this.size)}}class bP extends TP{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
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
 */class OP{constructor(e){this.persistence=e,this.Or=new ms(n=>Bu(n),ju),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Gu,this.targetCount=0,this.Lr=os.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),b.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new os(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Qn(n),b.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),b.waitFor(i).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
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
 */class kP{constructor(e,n){this.kr={},this.overlays={},this.qr=new Mu(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new OP(this),this.indexManager=new EP,this.remoteDocumentCache=function(s){return new CP(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new yP(n),this.Ur=new RP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new SP(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new NP(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return b.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class NP extends mR{constructor(e){super(),this.currentSequenceNumber=e}}class Qu{constructor(e){this.persistence=e,this.jr=new Gu,this.Hr=null}static Jr(e){return new Qu(e)}get Yr(){if(this.Hr)return this.Hr;throw Y()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),b.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Yr,r=>{const s=z.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return b.or([()=>b.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
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
 */class Yu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yu(e,n.fromCache,r,s)}}/**
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
 */class DP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class VP{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new DP;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(Cs()<=ce.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Mr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),b.resolve()):(Cs()<=ce.DEBUG&&$("QueryEngine","Query:",Mr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(Cs()<=ce.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Mr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):b.resolve())}Hi(e,n){if(hd(n))return b.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=bl(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,bl(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,s){return hd(n)||s.isEqual(X.min())?b.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?b.resolve(null):(Cs()<=ce.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mr(n)),this.ts(e,o,n,fR(s,-1)).next(a=>a))})}Xi(e,n){let r=new at(zm(e));return n.forEach((s,i)=>{ja(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return Cs()<=ce.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Mr(n)),this.ji.getDocumentsMatchingQuery(e,n,jn.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new be(_e),this.ss=new ms(i=>Bu(i),ju),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AP(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function MP(t,e,n,r){return new xP(t,e,n,r)}async function p_(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=oe();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function LP(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let m=b.resolve();return d.forEach(E=>{m=m.next(()=>u.getEntry(c,E)).next(R=>{const S=l.docVersions.get(E);Se(S!==null),R.version.compareTo(S)<0&&(h.applyToRemoteDocument(R,l),R.isValidDocument()&&(R.setReadTime(l.commitVersion),u.addEntry(R)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=oe();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function g_(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function FP(t,e){const n=te(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(lt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(R,S,k){return R.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,m,u)&&a.push(n.Kr.updateTargetData(i,m))});let c=gn(),l=oe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(UP(i,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(X.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.rs=s,i))}function UP(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=gn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:s}})}function BP(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jP(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,b.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Vl(t,e,n){const r=te(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fi(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function Td(t,e,n){const r=te(t);let s=X.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=te(c),d=h.ss.get(u);return d!==void 0?b.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,Yt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:oe())).next(a=>($P(r,DR(e),a),{documents:a,Ps:i})))}function $P(t,e,n){let r=t.os.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class wd{constructor(){this.activeTargetIds=UR()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qP{constructor(){this.ro=new wd,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new wd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class HP{so(e){}shutdown(){}}/**
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
 */class Ad{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let go=null;function Vc(){return go===null?go=function(){return 268435456+Math.round(2147483648*Math.random())}():go++,"0x"+go.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class WP{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const Ze="WebChannelConnection";class zP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=Vc(),c=this.Do(n,r);$("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,i,o),this.vo(n,c,l,s).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ns("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=KP[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Vc();return new Promise((o,a)=>{const c=new tR;c.setWithCredentials(!0),c.listenOnce(Z0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Nc.NO_ERROR:const u=c.getResponseJson();$(Ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Nc.TIMEOUT:$(Ze,`RPC '${e}' ${i} timed out`),a(new U(A.DEADLINE_EXCEEDED,"Request time out"));break;case Nc.HTTP_ERROR:const h=c.getStatus();if($(Ze,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const E=function(S){const k=S.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(k)>=0?k:A.UNKNOWN}(m.status);a(new U(E,m.message))}else a(new U(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(A.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(Ze,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);$(Ze,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const s=Vc(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=J0(),a=X0(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");$(Ze,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,m=!1;const E=new WP({ho:S=>{m?$(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(d||($(Ze,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),$(Ze,`RPC '${e}' stream ${s} sending:`,S),h.send(S))},Po:()=>h.close()}),R=(S,k,x)=>{S.listen(k,W=>{try{x(W)}catch(L){setTimeout(()=>{throw L},0)}})};return R(h,ho.EventType.OPEN,()=>{m||$(Ze,`RPC '${e}' stream ${s} transport opened.`)}),R(h,ho.EventType.CLOSE,()=>{m||(m=!0,$(Ze,`RPC '${e}' stream ${s} transport closed`),E.mo())}),R(h,ho.EventType.ERROR,S=>{m||(m=!0,ns(Ze,`RPC '${e}' stream ${s} transport errored:`,S),E.mo(new U(A.UNAVAILABLE,"The operation could not be completed")))}),R(h,ho.EventType.MESSAGE,S=>{var k;if(!m){const x=S.data[0];Se(!!x);const W=x,L=W.error||((k=W[0])===null||k===void 0?void 0:k.error);if(L){$(Ze,`RPC '${e}' stream ${s} received error:`,L);const ne=L.status;let pe=function(ee){const ye=De[ee];if(ye!==void 0)return i_(ye)}(ne),we=L.message;pe===void 0&&(pe=A.INTERNAL,we="Unknown error status: "+ne+" with message "+L.message),m=!0,E.mo(new U(pe,we)),h.close()}else $(Ze,`RPC '${e}' stream ${s} received:`,x),E.fo(x)}}),R(a,eR.STAT_EVENT,S=>{S.stat===ed.PROXY?$(Ze,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===ed.NOPROXY&&$(Ze,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.Vo()},0),E}}function xc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t){return new sP(t,!0)}/**
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
 */class m_{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
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
 */class __{constructor(e,n,r,s,i,o,a,c){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new m_(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(pn(n.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new U(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GP extends __{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=aP(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Jt(o.readTime):X.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=Dl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Sl(c)?{documents:uP(i,c)}:{query:hP(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=c_(i,o.resumeToken);const l=Ol(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=ea(i,o.snapshotVersion.toTimestamp());const l=Ol(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=dP(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=Dl(this.serializer),n.removeTarget=e,this.n_(n)}}class QP extends __{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=lP(e.writeResults,e.commitTime),r=Jt(e.commitTime);return this.listener.T_(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Dl(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cP(this.serializer,r))};this.n_(n)}}/**
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
 */class YP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(A.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(A.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class JP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(pn(n),this.p_=!1):$("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class XP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{Ir(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=te(c);l.F_.add(4),await $i(l),l.O_.set("Unknown"),l.F_.delete(4),await Wa(l)}(this))})}),this.O_=new JP(r,s)}}async function Wa(t){if(Ir(t))for(const e of t.M_)await e(!0)}async function $i(t){for(const e of t.M_)await e(!1)}function y_(t,e){const n=te(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),Zu(n)?Xu(n):_s(n).Yo()&&Ju(n,e))}function v_(t,e){const n=te(t),r=_s(n);n.v_.delete(e),r.Yo()&&E_(n,e),n.v_.size===0&&(r.Yo()?r.e_():Ir(n)&&n.O_.set("Unknown"))}function Ju(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_s(t).l_(e)}function E_(t,e){t.N_.Le(e),_s(t).h_(e)}function Xu(t){t.N_=new eP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),_s(t).start(),t.O_.y_()}function Zu(t){return Ir(t)&&!_s(t).Jo()&&t.v_.size>0}function Ir(t){return te(t).F_.size===0}function I_(t){t.N_=void 0}async function ZP(t){t.v_.forEach((e,n)=>{Ju(t,e)})}async function eS(t,e){I_(t),Zu(t)?(t.O_.b_(e),Xu(t)):t.O_.set("Unknown")}async function tS(t,e,n){if(t.O_.set("Online"),e instanceof a_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ta(t,r)}else if(e instanceof Ao?t.N_.Ge(e):e instanceof o_?t.N_.Xe(e):t.N_.He(e),!n.isEqual(X.min()))try{const r=await g_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.v_.get(l);u&&i.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.v_.get(c);if(!u)return;i.v_.set(c,u.withResumeToken(lt.EMPTY_BYTE_STRING,u.snapshotVersion)),E_(i,c);const h=new kn(u.target,c,l,u.sequenceNumber);Ju(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await ta(t,r)}}async function ta(t,e,n){if(!Fi(e))throw e;t.F_.add(1),await $i(t),t.O_.set("Offline"),n||(n=()=>g_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Wa(t)})}function T_(t,e){return e().catch(n=>ta(t,n,e))}async function za(t){const e=te(t),n=qn(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;nS(e);)try{const s=await BP(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,rS(e,s)}catch(s){await ta(e,s)}w_(e)&&A_(e)}function nS(t){return Ir(t)&&t.C_.length<10}function rS(t,e){t.C_.push(e);const n=qn(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function w_(t){return Ir(t)&&!qn(t).Jo()&&t.C_.length>0}function A_(t){qn(t).start()}async function sS(t){qn(t).A_()}async function iS(t){const e=qn(t);for(const n of t.C_)e.d_(n.mutations)}async function oS(t,e,n){const r=t.C_.shift(),s=Ku.from(r,e,n);await T_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await za(t)}async function aS(t,e){e&&qn(t).I_&&await async function(r,s){if(function(o){return JR(o)&&o!==A.ABORTED}(s.code)){const i=r.C_.shift();qn(r).Xo(),await T_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await za(r)}}(t,e),w_(t)&&A_(t)}async function Rd(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Ir(n);n.F_.add(3),await $i(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Wa(n)}async function cS(t,e){const n=te(t);e?(n.F_.delete(2),await Wa(n)):e||(n.F_.add(2),await $i(n),n.O_.set("Unknown"))}function _s(t){return t.B_||(t.B_=function(n,r,s){const i=te(n);return i.V_(),new GP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:ZP.bind(null,t),Eo:eS.bind(null,t),c_:tS.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),Zu(t)?Xu(t):t.O_.set("Unknown")):(await t.B_.stop(),I_(t))})),t.B_}function qn(t){return t.L_||(t.L_=function(n,r,s){const i=te(n);return i.V_(),new QP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:sS.bind(null,t),Eo:aS.bind(null,t),E_:iS.bind(null,t),T_:oS.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await za(t)):(await t.L_.stop(),t.C_.length>0&&($("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
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
 */class eh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new eh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function th(t,e){if(pn("AsyncQueue",`${e}: ${t}`),Fi(t))return new U(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Kr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=xs(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new Kr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Kr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Pd{constructor(){this.k_=new be(z.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):Y():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class as{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new as(e,n,Kr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ba(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class lS{constructor(){this.Q_=void 0,this.listeners=[]}}class uS{constructor(){this.queries=new ms(e=>Wm(e),Ba),this.onlineState="Unknown",this.K_=new Set}}async function R_(t,e){const n=te(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new lS),s)try{i.Q_=await n.onListen(r)}catch(o){const a=th(o,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&nh(n)}async function P_(t,e){const n=te(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function hS(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&nh(n)}function fS(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function nh(t){t.K_.forEach(e=>{e.next()})}class S_{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class C_{constructor(e){this.key=e}}class b_{constructor(e){this.key=e}}class dS{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=oe(),this.mutatedKeys=oe(),this.ua=zm(e),this.ca=new Kr(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Pd,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),m=ja(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;d&&m?d.data.isEqual(m.data)?E!==R&&(r.track({type:3,doc:m}),S=!0):this.Ia(d,m)||(r.track({type:2,doc:m}),S=!0,(c&&this.ua(m,c)>0||l&&this.ua(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),S=!0):d&&!m&&(r.track({type:1,doc:d}),S=!0,(c||l)&&(a=!0)),S&&(m?(o=o.add(m),i=R?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((l,u)=>function(d,m){const E=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return E(d)-E(m)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,i.length!==0||c?{snapshot:new as(this.query,e.ca,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Pd,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=oe(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new b_(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new C_(r))}),n}Ra(e){this.oa=e.Ps,this.aa=oe();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return as.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class pS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gS{constructor(e){this.key=e,this.ma=!1}}class mS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ms(a=>Wm(a),Ba),this.pa=new Map,this.ya=new Set,this.wa=new be(z.comparator),this.Sa=new Map,this.ba=new Gu,this.Da={},this.Ca=new Map,this.va=os.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function _S(t,e){const n=SS(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await jP(n.localStore,Yt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await yS(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&y_(n.remoteStore,o)}return s}async function yS(t,e,n,r,s){t.Ma=(h,d,m)=>async function(R,S,k,x){let W=S.view.ha(k);W.es&&(W=await Td(R.localStore,S.query,!1).then(({documents:pe})=>S.view.ha(pe,W)));const L=x&&x.targetChanges.get(S.targetId),ne=S.view.applyChanges(W,R.isPrimaryClient,L);return Cd(R,S.targetId,ne.Ea),ne.snapshot}(t,h,d,m);const i=await Td(t.localStore,e,!0),o=new dS(e,i.Ps),a=o.ha(i.documents),c=ji.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Cd(t,n,l.Ea);const u=new pS(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function vS(t,e){const n=te(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Ba(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Vl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),v_(n.remoteStore,r.targetId),xl(n,r.targetId)}).catch(Li)):(xl(n,r.targetId),await Vl(n.localStore,r.targetId,!0))}async function ES(t,e,n){const r=CS(t);try{const s=await function(o,a){const c=te(o),l=Le.now(),u=a.reduce((m,E)=>m.add(E.key),oe());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let E=gn(),R=oe();return c._s.getEntries(m,u).next(S=>{E=S,E.forEach((k,x)=>{x.isValidDocument()||(R=R.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,E)).next(S=>{h=S;const k=[];for(const x of a){const W=WR(x,h.get(x.key).overlayedDocument);W!=null&&k.push(new Wn(x.key,W,Lm(W.value.mapValue),Mt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,k,a)}).next(S=>{d=S;const k=S.applyToLocalDocumentSet(h,R);return c.documentOverlayCache.saveOverlays(m,S.batchId,k)})}).then(()=>({batchId:d.batchId,changes:Qm(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new be(_e)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await qi(r,s.changes),await za(r.remoteStore)}catch(s){const i=th(s,"Failed to persist write");n.reject(i)}}async function O_(t,e){const n=te(t);try{const r=await FP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Se(o.ma):s.removedDocuments.size>0&&(Se(o.ma),o.ma=!1))}),await qi(n,r,e)}catch(r){await Li(r)}}function Sd(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=te(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&nh(c)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IS(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new be(z.comparator);o=o.insert(i,tt.newNoDocument(i,X.min()));const a=oe().add(i),c=new Ha(X.min(),new Map,new be(_e),o,a);await O_(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),rh(r)}else await Vl(r.localStore,e,!1).then(()=>xl(r,e,n)).catch(Li)}async function TS(t,e){const n=te(t),r=e.batch.batchId;try{const s=await LP(n.localStore,e);N_(n,r,null),k_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qi(n,s)}catch(s){await Li(s)}}async function wS(t,e,n){const r=te(t);try{const s=await function(o,a){const c=te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Se(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);N_(r,e,n),k_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qi(r,s)}catch(s){await Li(s)}}function k_(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function N_(t,e,n){const r=te(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function xl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||D_(t,r)})}function D_(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(v_(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),rh(t))}function Cd(t,e,n){for(const r of n)r instanceof C_?(t.ba.addReference(r.key,e),AS(t,r)):r instanceof b_?($("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||D_(t,r.key)):Y()}function AS(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||($("SyncEngine","New document in limbo: "+n),t.ya.add(r),rh(t))}function rh(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new z(Pe.fromString(e)),r=t.va.next();t.Sa.set(r,new gS(n)),t.wa=t.wa.insert(n,r),y_(t.remoteStore,new kn(Yt($u(n.path)),r,"TargetPurposeLimboResolution",Mu.ae))}}async function qi(t,e,n){const r=te(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Yu.$i(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(c,l){const u=te(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>b.forEach(l,d=>b.forEach(d.Qi,m=>u.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>b.forEach(d.Ki,m=>u.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Fi(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const m=u.rs.get(d),E=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(E);u.rs=u.rs.insert(d,R)}}}(r.localStore,i))}async function RS(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await p_(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new U(A.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qi(n,r.cs)}}function PS(t,e){const n=te(t),r=n.Sa.get(e);if(r&&r.ma)return oe().add(r.key);{let s=oe();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function SS(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=O_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IS.bind(null,e),e.fa.c_=hS.bind(null,e.eventManager),e.fa.xa=fS.bind(null,e.eventManager),e}function CS(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wS.bind(null,e),e}class bd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ka(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return MP(this.persistence,new VP,e.initialUser,this.serializer)}createPersistence(e){return new kP(Qu.Jr,this.serializer)}createSharedClientState(e){return new qP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RS.bind(null,this.syncEngine),await cS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uS}()}createDatastore(e){const n=Ka(e.databaseInfo.databaseId),r=function(i){return new zP(i)}(e.databaseInfo);return function(i,o,a,c){return new YP(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new XP(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Sd(this.syncEngine,n,0),function(){return Ad.C()?new Ad:new HP}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new mS(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=te(n);$("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await $i(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class V_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):pn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class OS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=Vm.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=th(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Mc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await p_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Od(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NS(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Rd(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Rd(e.remoteStore,i)),t._onlineComponents=e}function kS(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function NS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!kS(n))throw n;ns("Error using user provided cache. Falling back to memory cache: "+n),await Mc(t,new bd)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Mc(t,new bd);return t._offlineComponents}async function x_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Od(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Od(t,new bS))),t._onlineComponents}function DS(t){return x_(t).then(e=>e.syncEngine)}async function M_(t){const e=await x_(t),n=e.eventManager;return n.onListen=_S.bind(null,e.syncEngine),n.onUnlisten=vS.bind(null,e.syncEngine),n}function VS(t,e,n={}){const r=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new V_({next:d=>{o.enqueueAndForget(()=>P_(i,h));const m=d.docs.has(a);!m&&d.fromCache?l.reject(new U(A.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?l.reject(new U(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new S_($u(a.path),u,{includeMetadataChanges:!0,Z_:!0});return R_(i,h)}(await M_(t),t.asyncQueue,e,n,r)),r.promise}function xS(t,e,n={}){const r=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new V_({next:d=>{o.enqueueAndForget(()=>P_(i,h)),d.fromCache&&c.source==="server"?l.reject(new U(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new S_(a,u,{includeMetadataChanges:!0,Z_:!0});return R_(i,h)}(await M_(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function L_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=new Map;/**
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
 */function F_(t,e,n){if(!n)throw new U(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MS(t,e,n,r){if(e===!0&&r===!0)throw new U(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nd(t){if(!z.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dd(t){if(z.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ga(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ga(t);throw new U(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=L_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new rR;switch(r.type){case"firstParty":return new aR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=kd.get(n);r&&($("ComponentProvider","Removing Datastore"),kd.delete(n),r.terminate())}(this),Promise.resolve()}}function LS(t,e,n,r={}){var s;const i=(t=mn(t,Qa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=et.MOCK_USER;else{a=Ow(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new U(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new et(l)}t._authCredentials=new sR(new Dm(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Un extends ys{constructor(e,n,r){super(e,n,$u(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new z(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function xd(t,e,...n){if(t=$e(t),F_("collection","path",e),t instanceof Qa){const r=Pe.fromString(e,...n);return Dd(r),new Un(t,null,r)}{if(!(t instanceof vt||t instanceof Un))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Dd(r),new Un(t.firestore,null,r)}}function Ls(t,e,...n){if(t=$e(t),arguments.length===1&&(e=Vm.V()),F_("doc","path",e),t instanceof Qa){const r=Pe.fromString(e,...n);return Nd(r),new vt(t,null,new z(r))}{if(!(t instanceof vt||t instanceof Un))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Nd(r),new vt(t.firestore,t instanceof Un?t.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new m_(this,"async_queue_retry"),this.ou=()=>{const n=xc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=xc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new hn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Fi(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=eh.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&Y()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class vs extends Qa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new FS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||U_(this),this._firestoreClient.terminate()}}function US(t,e){const n=typeof t=="object"?t:Cg(),r=typeof t=="string"?t:e||"(default)",s=fu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Cw("firestore");i&&LS(s,...i)}return s}function sh(t){return t._firestoreClient||U_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function U_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new vR(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,L_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new OS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(lt.fromBase64String(e))}catch(n){throw new U(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this._methodName=e}}/**
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
 */class oh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */const BS=/^__.*__$/;class jS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Wn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bi(e,this.data,n,this.fieldTransforms)}}class B_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Wn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function j_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class ah{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new ah(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return na(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(j_(this.Tu)&&BS.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class $S{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ka(e)}wu(e,n,r,s=!1){return new ah({Tu:e,methodName:n,yu:r,path:rt.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ch(t){const e=t._freezeSettings(),n=Ka(t._databaseId);return new $S(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qS(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);lh("Data must be an object, but it was:",o,r);const a=$_(r,o);let c,l;if(i.merge)c=new wt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Ml(e,h,n);if(!o.contains(d))throw new U(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);H_(u,d)||u.push(d)}c=new wt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new jS(new yt(a),c,l)}class Ja extends ih{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ja}}function HS(t,e,n,r){const s=t.wu(1,e,n);lh("Data must be an object, but it was:",s,r);const i=[],o=yt.empty();Er(r,(c,l)=>{const u=uh(e,c,n);l=$e(l);const h=s.mu(u);if(l instanceof Ja)i.push(u);else{const d=Hi(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new wt(i);return new B_(o,a,s.fieldTransforms)}function KS(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[Ml(e,r,n)],c=[s];if(i.length%2!=0)throw new U(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ml(e,i[d])),c.push(i[d+1]);const l=[],u=yt.empty();for(let d=a.length-1;d>=0;--d)if(!H_(l,a[d])){const m=a[d];let E=c[d];E=$e(E);const R=o.mu(m);if(E instanceof Ja)l.push(m);else{const S=Hi(E,R);S!=null&&(l.push(m),u.set(m,S))}}const h=new wt(l);return new B_(u,h,o.fieldTransforms)}function WS(t,e,n,r=!1){return Hi(n,t.wu(r?4:3,e))}function Hi(t,e){if(q_(t=$e(t)))return lh("Unsupported field value:",e,t),$_(t,e);if(t instanceof ih)return function(r,s){if(!j_(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Hi(a,s.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:ea(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ea(s.serializer,i)}}if(r instanceof oh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:c_(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${Ga(r)}`)}(t,e)}function $_(t,e){const n={};return xm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Er(t,(r,s)=>{const i=Hi(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function q_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof oh||t instanceof cs||t instanceof vt||t instanceof ih)}function lh(t,e,n){if(!q_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ga(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Ml(t,e,n){if((e=$e(e))instanceof Ya)return e._internalPath;if(typeof e=="string")return uh(t,e);throw na("Field path arguments must be of type string or ",t,!1,void 0,n)}const zS=new RegExp("[~\\*/\\[\\]]");function uh(t,e,n){if(e.search(zS)>=0)throw na(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ya(...e.split("."))._internalPath}catch{throw na(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function na(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(A.INVALID_ARGUMENT,a+t+c)}function H_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class GS extends K_{data(){return super.data()}}function hh(t,e){return typeof e=="string"?uh(t,e):e instanceof Ya?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fh{}class YS extends fh{}function JS(t,e,...n){let r=[];e instanceof fh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof dh).length,a=i.filter(c=>c instanceof Xa).length;if(o>1||o>0&&a>0)throw new U(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Xa extends YS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xa(e,n,r)}_apply(e){const n=this._parse(e);return W_(e._query,n),new ys(e.firestore,e.converter,Cl(e._query,n))}_parse(e){const n=ch(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ld(h,u);const m=[];for(const E of h)m.push(Md(c,i,E));d={arrayValue:{values:m}}}else d=Md(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ld(h,u),d=WS(a,o,h,u==="in"||u==="not-in");return xe.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function XS(t,e,n){const r=e,s=hh("where",t);return Xa._create(s,r,n)}class dh extends fh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new dh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ut.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)W_(o,c),o=Cl(o,c)}(e._query,n),new ys(e.firestore,e.converter,Cl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Md(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new U(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Km(e)&&n.indexOf("/")!==-1)throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Pe.fromString(n));if(!z.isDocumentKey(r))throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return id(t,new z(r))}if(n instanceof vt)return id(t,n._key);throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ga(n)}.`)}function Ld(t,e){if(!Array.isArray(t)||t.length===0)throw new U(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function W_(t,e){if(e.isInequality()){const r=qu(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new U(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Hm(t);i!==null&&ZS(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ZS(t,e,n){if(!n.isEqual(e))throw new U(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class eC{convertValue(e,n="none"){switch(mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Er(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new oh(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vi(e));default:return null}}convertTimestamp(e){const n=$n(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);Se(d_(r));const s=new Ei(r.get(1),r.get(3)),i=new z(r.popFirst(5));return s.isEqual(n)||pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class z_ extends K_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ro extends z_{data(e={}){return super.data(e)}}class nC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Fs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ro(this._firestore,this._userDataWriter,r.key,r,new Fs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ro(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Fs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Ro(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Fs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:rC(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(t){t=mn(t,vt);const e=mn(t.firestore,vs);return VS(sh(e),t._key).then(n=>cC(e,t,n))}class G_ extends eC{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function sC(t){t=mn(t,ys);const e=mn(t.firestore,vs),n=sh(e),r=new G_(e);return QS(t._query),xS(n,t._query).then(s=>new nC(e,r,t,s))}function iC(t,e,n,...r){t=mn(t,vt);const s=mn(t.firestore,vs),i=ch(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof Ya?KS(i,"updateDoc",t._key,e,n,r):HS(i,"updateDoc",t._key,e),ph(s,[o.toMutation(t._key,Mt.exists(!0))])}function oC(t){return ph(mn(t.firestore,vs),[new Hu(t._key,Mt.none())])}function aC(t,e){const n=mn(t.firestore,vs),r=Ls(t),s=tC(t.converter,e);return ph(n,[qS(ch(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Mt.exists(!1))]).then(()=>r)}function ph(t,e){return function(r,s){const i=new hn;return r.asyncQueue.enqueueAndForget(async()=>ES(await DS(r),s,i)),i.promise}(sh(t),e)}function cC(t,e,n){const r=n.docs.get(e._key),s=new G_(t);return new z_(t,s,e._key,r,new Fs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){gs=s})(fs),es(new fr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new vs(new iR(r.getProvider("auth-internal")),new lR(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Fn(td,"4.2.0",e),Fn(td,"4.2.0","esm2017")})();function gh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Fd(t){return t!==void 0&&t.enterprise!==void 0}class lC{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Q_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uC=Q_,Y_=new Si("auth","Firebase",Q_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new uu("@firebase/auth");function hC(t,...e){ra.logLevel<=ce.WARN&&ra.warn(`Auth (${fs}): ${t}`,...e)}function Po(t,...e){ra.logLevel<=ce.ERROR&&ra.error(`Auth (${fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw mh(t,...e)}function Xt(t,...e){return mh(t,...e)}function fC(t,e,n){const r=Object.assign(Object.assign({},uC()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function mh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Y_.create(t,...e)}function Q(t,e,...n){if(!t)throw mh(e,...n)}function ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function _n(t,e){t||ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dC(){return Ud()==="http:"||Ud()==="https:"}function Ud(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dC()||Nw()||"connection"in navigator)?navigator.onLine:!0}function gC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=kw()||Dw()}get(){return pC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=new Ki(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wr(t,e,n,r,s={}){return X_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ci(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),J_.fetch()(Z_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function X_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mC),e);try{const s=new yC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw fC(t,u,l);Bt(t,u)}}catch(s){if(s instanceof vn)throw s;Bt(t,"network-request-failed",{message:String(s)})}}async function Wi(t,e,n,r,s={}){const i=await wr(t,e,n,r,s);return"mfaPendingCredential"in i&&Bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Z_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?_h(t.config,s):`${t.config.apiScheme}://${s}`}class yC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),_C.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Xt(t,e,r);return s.customData._tokenResponse=n,s}async function vC(t,e){return wr(t,"GET","/v2/recaptchaConfig",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function IC(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TC(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=yh(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(Fc(s.auth_time)),issuedAtTime:Xs(Fc(s.iat)),expirationTime:Xs(Fc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Fc(t){return Number(t)*1e3}function yh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ig(n);return s?JSON.parse(s):(Po("Failed to decode base64 JWT payload"),null)}catch(s){return Po("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wC(t){const e=yh(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&AC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function sa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ai(t,IC(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?CC(i.providerUserInfo):[],a=SC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ey(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function PC(t){const e=$e(t);await sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function CC(t){return t.map(e=>{var{providerId:n}=e,r=gh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bC(t,e){const n=await X_(t,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Z_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",J_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await bC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ri;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ri,this.toJSON())}_performRefresh(){return ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ey(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ai(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TC(this,e)}reload(){return PC(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ai(this,EC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:W,emailVerified:L,isAnonymous:ne,providerData:pe,stsTokenManager:we}=n;Q(W&&we,e,"internal-error");const se=Ri.fromJSON(this.name,we);Q(typeof W=="string",e,"internal-error"),wn(h,e.name),wn(d,e.name),Q(typeof L=="boolean",e,"internal-error"),Q(typeof ne=="boolean",e,"internal-error"),wn(m,e.name),wn(E,e.name),wn(R,e.name),wn(S,e.name),wn(k,e.name),wn(x,e.name);const ee=new hr({uid:W,auth:e,email:d,emailVerified:L,displayName:h,isAnonymous:ne,photoURL:E,phoneNumber:m,tenantId:R,stsTokenManager:se,createdAt:k,lastLoginAt:x});return pe&&Array.isArray(pe)&&(ee.providerData=pe.map(ye=>Object.assign({},ye))),S&&(ee._redirectEventId=S),ee}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ri;s.updateFromServerResponse(n);const i=new hr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await sa(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=new Map;function un(t){_n(t instanceof Function,"Expected a class definition");let e=Bd.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bd.set(t,e),e)}/**
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
 */class ty{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ty.type="NONE";const jd=ty;/**
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
 */function So(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=So(this.userKey,s.apiKey,i),this.fullPersistenceKey=So("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wr(un(jd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||un(jd);const o=So(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=hr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Wr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Wr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ny(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oy(e))return"Blackberry";if(ay(e))return"Webos";if(vh(e))return"Safari";if((e.includes("chrome/")||ry(e))&&!e.includes("edge/"))return"Chrome";if(iy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ny(t=ct()){return/firefox\//i.test(t)}function vh(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ry(t=ct()){return/crios\//i.test(t)}function sy(t=ct()){return/iemobile/i.test(t)}function iy(t=ct()){return/android/i.test(t)}function oy(t=ct()){return/blackberry/i.test(t)}function ay(t=ct()){return/webos/i.test(t)}function Za(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OC(t=ct()){var e;return Za(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kC(){return Vw()&&document.documentMode===10}function cy(t=ct()){return Za(t)||iy(t)||ay(t)||oy(t)||/windows phone/i.test(t)||sy(t)}function NC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e=[]){let n;switch(t){case"Browser":n=$d(ct());break;case"Worker":n=`${$d(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
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
 */class DC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function VC(t,e={}){return wr(t,"GET","/v2/passwordPolicy",Tr(t,e))}/**
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
 */const xC=6;class MC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qd(this),this.idTokenSubscription=new qd(this),this.beforeStateQueue=new DC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Y_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VC(this),n=new MC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ly(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ar(t){return $e(t)}class qd{constructor(e){this.auth=e,this.observer=null,this.addObserver=jw(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function uy(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Xt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",FC().appendChild(r)})}function UC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const BC="https://www.google.com/recaptcha/enterprise.js?render=",jC="recaptcha-enterprise",$C="NO_RECAPTCHA";class qC{constructor(e){this.type=jC,this.auth=Ar(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{vC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new lC(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Fd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o($C)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Fd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}uy(BC+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function ia(t,e,n,r=!1){const s=new qC(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t,e){const n=fu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(jo(i,e??{}))return s;Bt(s,"already-initialized")}return n.initialize({options:e})}function KC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WC(t,e,n){const r=Ar(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=hy(e),{host:o,port:a}=zC(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||GC()}function hy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zC(t){const e=hy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Hd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Hd(o)}}}function Hd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ln("not implemented")}_getIdTokenResponse(e){return ln("not implemented")}_linkToIdToken(e,n){return ln("not implemented")}_getReauthenticationResolver(e){return ln("not implemented")}}async function QC(t,e){return wr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(t,e){return Wi(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YC(t,e){return Wi(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function JC(t,e){return Wi(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Eh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Pi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await ia(e,r,"signInWithPassword");return Uc(e,s)}else return Uc(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await ia(e,r,"signInWithPassword");return Uc(e,i)}else return Promise.reject(s)});case"emailLink":return YC(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return QC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return JC(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(t,e){return Wi(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC="http://localhost";class _r extends Eh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zr(e,n)}buildRequest(){const e={requestUri:XC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eb(t){const e=ks(Ns(t)).link,n=e?ks(Ns(e)).deep_link_id:null,r=ks(Ns(t)).deep_link_id;return(r?ks(Ns(r)).link:null)||r||n||e||t}class Ih{constructor(e){var n,r,s,i,o,a;const c=ks(Ns(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=ZC((s=c.mode)!==null&&s!==void 0?s:null);Q(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=eb(e);try{return new Ih(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.providerId=Es.PROVIDER_ID}static credential(e,n){return Pi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ih.parseLink(n);return Q(r,"argument-error"),Pi._fromEmailAndCode(e,r.code,r.tenantId)}}Es.PROVIDER_ID="password";Es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zi extends fy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends zi{constructor(){super("facebook.com")}static credential(e){return _r._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _r._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends zi{constructor(){super("github.com")}static credential(e){return _r._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends zi{constructor(){super("twitter.com")}static credential(e,n){return _r._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bc(t,e){return Wi(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hr._fromIdTokenResponse(e,r,s),o=Kd(r);return new yr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Kd(r);return new yr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Kd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new oa(e,n,r,s)}}function dy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(t,i,e,r):i})}async function tb(t,e,n=!1){const r=await Ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yr._forOperation(t,"link",r)}/**
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
 */async function nb(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Ai(t,dy(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=yh(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),yr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(t,e,n=!1){const r="signIn",s=await dy(t,r,e),i=await yr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function rb(t,e){return py(Ar(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gy(t){const e=Ar(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sb(t,e,n){var r;const s=Ar(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await ia(s,i,"signUpPassword");o=Bc(s,l)}else o=Bc(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ia(s,i,"signUpPassword");return Bc(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gy(t),l}),c=await yr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function ib(t,e,n){return rb($e(t),Es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gy(t),r})}function ob(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function ab(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function cb(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function lb(t){return $e(t).signOut()}const aa="__sak";/**
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
 */class my{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){const t=ct();return vh(t)||Za(t)}const hb=1e3,fb=10;class _y extends my{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ub()&&NC(),this.fallbackToPolling=cy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_y.type="LOCAL";const db=_y;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy extends my{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yy.type="SESSION";const vy=yy;/**
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
 */function pb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await pb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Th("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function mb(t){Zt().location.href=t}/**
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
 */function Ey(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function _b(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vb(){return Ey()?self:null}/**
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
 */const Iy="firebaseLocalStorageDb",Eb=1,ca="firebaseLocalStorage",Ty="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([ca],e?"readwrite":"readonly").objectStore(ca)}function Ib(){const t=indexedDB.deleteDatabase(Iy);return new Gi(t).toPromise()}function Fl(){const t=indexedDB.open(Iy,Eb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ca,{keyPath:Ty})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ca)?e(r):(r.close(),await Ib(),e(await Fl()))})})}async function Wd(t,e,n){const r=tc(t,!0).put({[Ty]:e,value:n});return new Gi(r).toPromise()}async function Tb(t,e){const n=tc(t,!1).get(e),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function zd(t,e){const n=tc(t,!0).delete(e);return new Gi(n).toPromise()}const wb=800,Ab=3;class wy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ab)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(vb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _b(),!this.activeServiceWorker)return;this.sender=new gb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fl();return await Wd(e,aa,"1"),await zd(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Tb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=tc(s,!1).getAll();return new Gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wy.type="LOCAL";const Rb=wy;new Ki(3e4,6e4);/**
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
 */function Pb(t,e){return e?un(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wh extends Eh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Sb(t){return py(t.auth,new wh(t),t.bypassAuthState)}function Cb(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),nb(n,new wh(t),t.bypassAuthState)}async function bb(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),tb(n,new wh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sb;case"linkViaPopup":case"linkViaRedirect":return bb;case"reauthViaPopup":case"reauthViaRedirect":return Cb;default:Bt(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=new Ki(2e3,1e4);class Br extends Ay{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=Th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ob.get())};e()}}Br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="pendingRedirect",Co=new Map;class Nb extends Ay{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await Db(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Db(t,e){const n=Mb(e),r=xb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Vb(t,e){Co.set(t._key(),e)}function xb(t){return un(t._redirectPersistence)}function Mb(t){return So(kb,t.config.apiKey,t.name)}async function Lb(t,e,n=!1){const r=Ar(t),s=Pb(r,e),o=await new Nb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=10*60*1e3;class Ub{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ry(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gd(e))}saveEventToCache(e){this.cachedEventUids.add(Gd(e)),this.lastProcessedEventTime=Date.now()}}function Gd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ry({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ry(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qb=/^https?/;async function Hb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jb(t);for(const n of e)try{if(Kb(n))return}catch{}Bt(t,"unauthorized-domain")}function Kb(t){const e=Ll(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qb.test(n))return!1;if($b.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Wb=new Ki(3e4,6e4);function Qd(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zb(t){return new Promise((e,n)=>{var r,s,i;function o(){Qd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qd(),n(Xt(t,"network-request-failed"))},timeout:Wb.get()})}if(!((s=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)o();else{const a=UC("iframefcb");return Zt()[a]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},uy(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw bo=null,e})}let bo=null;function Gb(t){return bo=bo||zb(t),bo}/**
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
 */const Qb=new Ki(5e3,15e3),Yb="__/auth/iframe",Jb="emulator/auth/iframe",Xb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e1(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_h(e,Jb):`https://${t.config.authDomain}/${Yb}`,r={apiKey:e.apiKey,appName:t.name,v:fs},s=Zb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ci(r).slice(1)}`}async function t1(t){const e=await Gb(t),n=Zt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:e1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),a=Zt().setTimeout(()=>{i(o)},Qb.get());function c(){Zt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const n1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},r1=500,s1=600,i1="_blank",o1="http://localhost";class Yd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function a1(t,e,n,r=r1,s=s1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},n1),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ct().toLowerCase();n&&(a=ry(l)?i1:n),ny(l)&&(e=e||o1,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,E])=>`${d}${m}=${E},`,"");if(OC(l)&&a!=="_self")return c1(e||"",a),new Yd(null);const h=window.open(e||"",a,u);Q(h,t,"popup-blocked");try{h.focus()}catch{}return new Yd(h)}function c1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const l1="__/auth/handler",u1="emulator/auth/handler",h1=encodeURIComponent("fac");async function Jd(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:s};if(e instanceof fy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof zi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${h1}=${encodeURIComponent(c)}`:"";return`${f1(t)}?${Ci(a).slice(1)}${l}`}function f1({config:t}){return t.emulator?_h(t,u1):`https://${t.authDomain}/${l1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="webStorageSupport";class d1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vy,this._completeRedirectFn=Lb,this._overrideRedirectResult=Vb}async _openPopup(e,n,r,s){var i;_n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Jd(e,n,r,Ll(),s);return a1(e,o,Th())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Jd(e,n,r,Ll(),s);return mb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(_n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await t1(e),r=new Ub(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[jc];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Hb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cy()||vh()||Za()}}const p1=d1;var Xd="@firebase/auth",Zd="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _1(t){es(new fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ly(t)},l=new LC(r,s,i,c);return KC(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new fr("auth-internal",e=>{const n=Ar(e.getProvider("auth").getImmediate());return(r=>new g1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(Xd,Zd,m1(t)),Fn(Xd,Zd,"esm2017")}/**
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
 */const y1=5*60,v1=Ag("authIdTokenMaxAge")||y1;let ep=null;const E1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>v1)return;const s=n==null?void 0:n.token;ep!==s&&(ep=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function I1(t=Cg()){const e=fu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HC(t,{popupRedirectResolver:p1,persistence:[Rb,db,vy]}),r=Ag("authTokenSyncURL");if(r){const i=E1(r);ab(n,i,()=>i(n.currentUser)),ob(n,o=>i(o))}const s=Tg("auth");return s&&WC(n,`http://${s}`),n}_1("Browser");const T1={apiKey:"AIzaSyBEj_lvulwL921R6C-GKJN1eC4haiLIk0Q",authDomain:"vue3-2c548.firebaseapp.com",projectId:"vue3-2c548",storageBucket:"vue3-2c548.appspot.com",messagingSenderId:"975447172434",appId:"1:975447172434:web:d7afa045c68a84b2df468"};Sg(T1);const Dr=US(),an=I1(),w1="modulepreload",A1=function(t){return"/fbvue3-exp/"+t},tp={},$c=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=A1(i),i in tp)return;tp[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":w1,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};const R1={__name:"TheWelcome",setup(t){return(e,n)=>" welcome "}},P1={__name:"HomeView",setup(t){return(e,n)=>(Wp(),zp("main",null,[st(R1)]))}},np=async(t,e,n)=>{const r=C1();r.loading=!0,await r.currentUser()?n("/about"):n(),r.loading=!1},Oo=vw({history:MT("/fbvue3-exp/"),routes:[{path:"/",name:"home",component:P1},{path:"/login",name:"login",component:()=>$c(()=>import("./Login-45e06544.js"),[]),beforeEnter:np},{path:"/register",name:"register",component:()=>$c(()=>import("./Register-ddcac39a.js"),[]),beforeEnter:np},{path:"/about",name:"about",component:()=>$c(()=>import("./AboutView-2bcdda76.js"),["assets/AboutView-2bcdda76.js","assets/AboutView-4d995ba2.css"])}]});let S1=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const rp=rg("database",()=>{let t=Vn([]),e=Vn(!1);return{documents:t,loadingDoc:e,getUrls:async()=>{e.value=!0;try{const a=JS(xd(Dr,"urls"),XS("user","==",an.currentUser.uid));(await sC(a)).forEach(l=>{t.value.push({id:l.id,...l.data()})})}catch(a){console.log(a)}finally{e.value=!1}},leerUrl:async a=>{e.value=!0;try{const c=Ls(Dr,"urls",a),l=await Lc(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==an.currentUser.uid)throw new Error("No es dueño del documento");return l.data().name}catch(c){console.log(c.message)}finally{e.value=!1}},updateUrl:async(a,c)=>{e.value=!0;try{const l=Ls(Dr,"urls",a),u=await Lc(l);if(!u.exists())throw new Error("no existe el doc");if(u.data().user===an.currentUser.uid)await iC(l,{name:c}),t.value=t.value.map(h=>h.id===a?{...h,name:c}:h);else throw new Error("no eres el autor")}catch(l){console.log(l.message)}finally{e.value=!1}},addUrl:async a=>{try{const c={name:a,short:S1(6),user:an.currentUser.uid},l=await aC(xd(Dr,"urls"),c);t.value.push({...c,id:l.id})}catch(c){console.log(c)}},deleteUrl:async a=>{try{const c=Ls(Dr,"urls",a),l=await Lc(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==an.currentUser.uid)throw new Error("No es dueño del documento");await oC(Ls(Dr,"urls",a)),t.value=t.value.filter(u=>u.id!==a)}catch(c){console.log(c.message)}}}}),C1=rg("user",()=>{let t=Vn(null),e=Vn(!1),n=Vn(!1);return{loadingUser:e,loading:n,userData:t,registerUser:async(a,c)=>{e.value=!0;try{const{user:l}=await sb(an,a,c);t.value={email:l.email,uid:l.uid},Oo.push("/")}catch(l){console.error(l),t.value=null}finally{e.value=!1}},loginUser:async(a,c)=>{e.value=!0;try{const{user:l}=await ib(an,a,c);t.value={email:l.email,uid:l.uid},Oo.push("/about")}catch(l){l.code==="auth/user-not-found"?alert("No se encontró ningún usuario con esa dirección de correo electrónico."):l.code==="auth/wrong-password"?alert("Clave equivocada"):(console.log(l),t.value=null)}finally{e.value=!1}},logoutUser:async(a,c)=>{rp();try{await lb(an)}catch(l){console.log(l)}finally{t.value=null,n.value=!1,Oo.push("/login")}},currentUser:()=>new Promise((a,c)=>{const l=cb(an,u=>{u?t.value={email:u.email,uid:u.uid}:(t.value=null,rp()),a(u),l()},u=>c(u))})}});const b1=oi("div",null,"Veamos",-1),O1={class:"container-fluid"},k1={__name:"App",setup(t){return(e,n)=>(Wp(),zp(qt,null,[b1,oi("div",O1,[oi("main",{class:fa(["container my-2 p-4",e.isDark?"bg-dark":"bg-light"])},[st(cr(yg))],2)])],64))}},nc=tT(k1),Py=aT();Py.use(iT);nc.use(Py);nc.use(Oo);nc.use(og);nc.mount("#app");export{oi as a,cr as b,zp as c,V1 as d,ke as i,Wp as o,Vn as r,C1 as u,D1 as v,N1 as w};
