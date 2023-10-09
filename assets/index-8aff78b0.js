(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ll(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ie={},Sr=[],Rt=()=>{},$_=()=>!1,j_=/^on[^a-z]/,$o=t=>j_.test(t),ul=t=>t.startsWith("onUpdate:"),Le=Object.assign,hl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},z_=Object.prototype.hasOwnProperty,ae=(t,e)=>z_.call(t,e),K=Array.isArray,Cr=t=>jo(t)==="[object Map]",_d=t=>jo(t)==="[object Set]",J=t=>typeof t=="function",Fe=t=>typeof t=="string",fl=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",yd=t=>Re(t)&&J(t.then)&&J(t.catch),vd=Object.prototype.toString,jo=t=>vd.call(t),q_=t=>jo(t).slice(8,-1),Ed=t=>jo(t)==="[object Object]",dl=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ji=ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},H_=/-(\w)/g,Mr=zo(t=>t.replace(H_,(e,n)=>n?n.toUpperCase():"")),K_=/\B([A-Z])/g,Jr=zo(t=>t.replace(K_,"-$1").toLowerCase()),Id=zo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oa=zo(t=>t?`on${Id(t)}`:""),Bs=(t,e)=>!Object.is(t,e),Xi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},uo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},dc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ju;const pc=()=>Ju||(Ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pl(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?Y_(r):pl(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Fe(t))return t;if(Re(t))return t}}const W_=/;(?![^(]*\))/g,G_=/:([^]+)/,Q_=/\/\*[^]*?\*\//g;function Y_(t){const e={};return t.replace(Q_,"").split(W_).forEach(n=>{if(n){const r=n.split(G_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function gl(t){let e="";if(Fe(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const r=gl(t[n]);r&&(e+=r+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",X_=ll(J_);function wd(t){return!!t||t===""}const Z_=t=>Fe(t)?t:t==null?"":K(t)||Re(t)&&(t.toString===vd||!J(t.toString))?JSON.stringify(t,Td,2):String(t),Td=(t,e)=>e&&e.__v_isRef?Td(t,e.value):Cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:_d(e)?{[`Set(${e.size})`]:[...e.values()]}:Re(e)&&!K(e)&&!Ed(e)?String(e):e;let pt;class Ad{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=pt,!e&&pt&&(this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=pt;try{return pt=this,e()}finally{pt=n}}}on(){pt=this}off(){pt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Rd(t){return new Ad(t)}function ey(t,e=pt){e&&e.active&&e.effects.push(t)}function Pd(){return pt}function ty(t){pt&&pt.cleanups.push(t)}const ml=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sd=t=>(t.w&Dn)>0,Cd=t=>(t.n&Dn)>0,ny=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dn},ry=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Sd(s)&&!Cd(s)?s.delete(t):e[n++]=s,s.w&=~Dn,s.n&=~Dn}e.length=n}},ho=new WeakMap;let ms=0,Dn=1;const gc=30;let Tt;const Yn=Symbol(""),mc=Symbol("");class _l{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ey(this,r)}run(){if(!this.active)return this.fn();let e=Tt,n=An;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Tt,Tt=this,An=!0,Dn=1<<++ms,ms<=gc?ny(this):Xu(this),this.fn()}finally{ms<=gc&&ry(this),Dn=1<<--ms,Tt=this.parent,An=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Tt===this?this.deferStop=!0:this.active&&(Xu(this),this.onStop&&this.onStop(),this.active=!1)}}function Xu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let An=!0;const bd=[];function Xr(){bd.push(An),An=!1}function Zr(){const t=bd.pop();An=t===void 0?!0:t}function ht(t,e,n){if(An&&Tt){let r=ho.get(t);r||ho.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ml()),kd(s)}}function kd(t,e){let n=!1;ms<=gc?Cd(t)||(t.n|=Dn,n=!Sd(t)):n=!t.has(Tt),n&&(t.add(Tt),Tt.deps.push(t))}function rn(t,e,n,r,s,i){const o=ho.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?dl(n)&&a.push(o.get("length")):(a.push(o.get(Yn)),Cr(t)&&a.push(o.get(mc)));break;case"delete":K(t)||(a.push(o.get(Yn)),Cr(t)&&a.push(o.get(mc)));break;case"set":Cr(t)&&a.push(o.get(Yn));break}if(a.length===1)a[0]&&_c(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);_c(ml(c))}}function _c(t,e){const n=K(t)?t:[...t];for(const r of n)r.computed&&Zu(r);for(const r of n)r.computed||Zu(r)}function Zu(t,e){(t!==Tt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function sy(t,e){var n;return(n=ho.get(t))==null?void 0:n.get(e)}const iy=ll("__proto__,__v_isRef,__isVue"),Vd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fl)),oy=yl(),ay=yl(!1,!0),cy=yl(!0),eh=ly();function ly(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ce(this);for(let i=0,o=this.length;i<o;i++)ht(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ce)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xr();const r=ce(this)[e].apply(this,n);return Zr(),r}}),t}function uy(t){const e=ce(this);return ht(e,"has",t),e.hasOwnProperty(t)}function yl(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Py:xd:e?Md:Od).get(r))return r;const o=K(r);if(!t){if(o&&ae(eh,s))return Reflect.get(eh,s,i);if(s==="hasOwnProperty")return uy}const a=Reflect.get(r,s,i);return(fl(s)?Vd.has(s):iy(s))||(t||ht(r,"get",s),e)?a:be(a)?o&&dl(s)?a:a.value:Re(a)?t?Fd(a):fi(a):a}}const hy=Dd(),fy=Dd(!0);function Dd(t=!1){return function(n,r,s,i){let o=n[r];if(xr(o)&&be(o)&&!be(s))return!1;if(!t&&(!fo(s)&&!xr(s)&&(o=ce(o),s=ce(s)),!K(n)&&be(o)&&!be(s)))return o.value=s,!0;const a=K(n)&&dl(r)?Number(r)<n.length:ae(n,r),c=Reflect.set(n,r,s,i);return n===ce(i)&&(a?Bs(s,o)&&rn(n,"set",r,s):rn(n,"add",r,s)),c}}function dy(t,e){const n=ae(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&rn(t,"delete",e,void 0),r}function py(t,e){const n=Reflect.has(t,e);return(!fl(e)||!Vd.has(e))&&ht(t,"has",e),n}function gy(t){return ht(t,"iterate",K(t)?"length":Yn),Reflect.ownKeys(t)}const Nd={get:oy,set:hy,deleteProperty:dy,has:py,ownKeys:gy},my={get:cy,set(t,e){return!0},deleteProperty(t,e){return!0}},_y=Le({},Nd,{get:ay,set:fy}),vl=t=>t,qo=t=>Reflect.getPrototypeOf(t);function xi(t,e,n=!1,r=!1){t=t.__v_raw;const s=ce(t),i=ce(e);n||(e!==i&&ht(s,"get",e),ht(s,"get",i));const{has:o}=qo(s),a=r?vl:n?wl:$s;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Li(t,e=!1){const n=this.__v_raw,r=ce(n),s=ce(t);return e||(t!==s&&ht(r,"has",t),ht(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Fi(t,e=!1){return t=t.__v_raw,!e&&ht(ce(t),"iterate",Yn),Reflect.get(t,"size",t)}function th(t){t=ce(t);const e=ce(this);return qo(e).has.call(e,t)||(e.add(t),rn(e,"add",t,t)),this}function nh(t,e){e=ce(e);const n=ce(this),{has:r,get:s}=qo(n);let i=r.call(n,t);i||(t=ce(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Bs(e,o)&&rn(n,"set",t,e):rn(n,"add",t,e),this}function rh(t){const e=ce(this),{has:n,get:r}=qo(e);let s=n.call(e,t);s||(t=ce(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rn(e,"delete",t,void 0),i}function sh(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&rn(t,"clear",void 0,void 0),n}function Ui(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ce(o),c=e?vl:t?wl:$s;return!t&&ht(a,"iterate",Yn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Bi(t,e,n){return function(...r){const s=this.__v_raw,i=ce(s),o=Cr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?vl:e?wl:$s;return!e&&ht(i,"iterate",c?mc:Yn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function dn(t){return function(...e){return t==="delete"?!1:this}}function yy(){const t={get(i){return xi(this,i)},get size(){return Fi(this)},has:Li,add:th,set:nh,delete:rh,clear:sh,forEach:Ui(!1,!1)},e={get(i){return xi(this,i,!1,!0)},get size(){return Fi(this)},has:Li,add:th,set:nh,delete:rh,clear:sh,forEach:Ui(!1,!0)},n={get(i){return xi(this,i,!0)},get size(){return Fi(this,!0)},has(i){return Li.call(this,i,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:Ui(!0,!1)},r={get(i){return xi(this,i,!0,!0)},get size(){return Fi(this,!0)},has(i){return Li.call(this,i,!0)},add:dn("add"),set:dn("set"),delete:dn("delete"),clear:dn("clear"),forEach:Ui(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Bi(i,!1,!1),n[i]=Bi(i,!0,!1),e[i]=Bi(i,!1,!0),r[i]=Bi(i,!0,!0)}),[t,n,e,r]}const[vy,Ey,Iy,wy]=yy();function El(t,e){const n=e?t?wy:Iy:t?Ey:vy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ae(n,s)&&s in r?n:r,s,i)}const Ty={get:El(!1,!1)},Ay={get:El(!1,!0)},Ry={get:El(!0,!1)},Od=new WeakMap,Md=new WeakMap,xd=new WeakMap,Py=new WeakMap;function Sy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cy(t){return t.__v_skip||!Object.isExtensible(t)?0:Sy(q_(t))}function fi(t){return xr(t)?t:Il(t,!1,Nd,Ty,Od)}function Ld(t){return Il(t,!1,_y,Ay,Md)}function Fd(t){return Il(t,!0,my,Ry,xd)}function Il(t,e,n,r,s){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Cy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Rn(t){return xr(t)?Rn(t.__v_raw):!!(t&&t.__v_isReactive)}function xr(t){return!!(t&&t.__v_isReadonly)}function fo(t){return!!(t&&t.__v_isShallow)}function Ud(t){return Rn(t)||xr(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Ho(t){return uo(t,"__v_skip",!0),t}const $s=t=>Re(t)?fi(t):t,wl=t=>Re(t)?Fd(t):t;function Bd(t){An&&Tt&&(t=ce(t),kd(t.dep||(t.dep=ml())))}function $d(t,e){t=ce(t);const n=t.dep;n&&_c(n)}function be(t){return!!(t&&t.__v_isRef===!0)}function Pn(t){return jd(t,!1)}function by(t){return jd(t,!0)}function jd(t,e){return be(t)?t:new ky(t,e)}class ky{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:$s(e)}get value(){return Bd(this),this._value}set value(e){const n=this.__v_isShallow||fo(e)||xr(e);e=n?e:ce(e),Bs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$s(e),$d(this))}}function tn(t){return be(t)?t.value:t}const Vy={get:(t,e,n)=>tn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return be(s)&&!be(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function zd(t){return Rn(t)?t:new Proxy(t,Vy)}function Dy(t){const e=K(t)?new Array(t.length):{};for(const n in t)e[n]=Oy(t,n);return e}class Ny{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return sy(ce(this._object),this._key)}}function Oy(t,e,n){const r=t[e];return be(r)?r:new Ny(t,e,n)}class My{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new _l(e,()=>{this._dirty||(this._dirty=!0,$d(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ce(this);return Bd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function xy(t,e,n=!1){let r,s;const i=J(t);return i?(r=t,s=Rt):(r=t.get,s=t.set),new My(r,s,i||!s,n)}function Sn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ko(i,e,n)}return s}function Pt(t,e,n,r){if(J(t)){const i=Sn(t,e,n,r);return i&&yd(i)&&i.catch(o=>{Ko(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pt(t[i],e,n,r));return s}function Ko(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Sn(c,null,10,[t,o,a]);return}}Ly(t,n,s,r)}function Ly(t,e,n,r=!0){console.error(t)}let js=!1,yc=!1;const Je=[];let Lt=0;const br=[];let Yt=null,qn=0;const qd=Promise.resolve();let Tl=null;function Al(t){const e=Tl||qd;return t?e.then(this?t.bind(this):t):e}function Fy(t){let e=Lt+1,n=Je.length;for(;e<n;){const r=e+n>>>1;zs(Je[r])<t?e=r+1:n=r}return e}function Rl(t){(!Je.length||!Je.includes(t,js&&t.allowRecurse?Lt+1:Lt))&&(t.id==null?Je.push(t):Je.splice(Fy(t.id),0,t),Hd())}function Hd(){!js&&!yc&&(yc=!0,Tl=qd.then(Wd))}function Uy(t){const e=Je.indexOf(t);e>Lt&&Je.splice(e,1)}function By(t){K(t)?br.push(...t):(!Yt||!Yt.includes(t,t.allowRecurse?qn+1:qn))&&br.push(t),Hd()}function ih(t,e=js?Lt+1:0){for(;e<Je.length;e++){const n=Je[e];n&&n.pre&&(Je.splice(e,1),e--,n())}}function Kd(t){if(br.length){const e=[...new Set(br)];if(br.length=0,Yt){Yt.push(...e);return}for(Yt=e,Yt.sort((n,r)=>zs(n)-zs(r)),qn=0;qn<Yt.length;qn++)Yt[qn]();Yt=null,qn=0}}const zs=t=>t.id==null?1/0:t.id,$y=(t,e)=>{const n=zs(t)-zs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wd(t){yc=!1,js=!0,Je.sort($y);const e=Rt;try{for(Lt=0;Lt<Je.length;Lt++){const n=Je[Lt];n&&n.active!==!1&&Sn(n,null,14)}}finally{Lt=0,Je.length=0,Kd(),js=!1,Tl=null,(Je.length||br.length)&&Wd()}}function jy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Ie;f&&(s=n.map(g=>Fe(g)?g.trim():g)),h&&(s=n.map(dc))}let a,c=r[a=Oa(e)]||r[a=Oa(Mr(e))];!c&&i&&(c=r[a=Oa(Jr(e))]),c&&Pt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pt(l,t,6,s)}}function Gd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=Gd(l,e,!0);u&&(a=!0,Le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Re(t)&&r.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):Le(o,i),Re(t)&&r.set(t,o),o)}function Wo(t,e){return!t||!$o(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,Jr(e))||ae(t,e))}let Ze=null,Go=null;function po(t){const e=Ze;return Ze=t,Go=t&&t.type.__scopeId||null,e}function Qd(t){Go=t}function Yd(){Go=null}function Me(t,e=Ze,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&gh(-1);const i=po(e);let o;try{o=t(...s)}finally{po(i),r._d&&gh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ma(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:w}=t;let R,C;const D=po(t);try{if(n.shapeFlag&4){const x=s||r;R=xt(u.call(x,x,h,i,g,f,y)),C=c}else{const x=e;R=xt(x.length>1?x(i,{attrs:c,slots:a,emit:l}):x(i,null)),C=e.props?c:zy(c)}}catch(x){bs.length=0,Ko(x,t,1),R=me(Lr)}let z=R;if(C&&w!==!1){const x=Object.keys(C),{shapeFlag:Z}=z;x.length&&Z&7&&(o&&x.some(ul)&&(C=qy(C,o)),z=Fr(z,C))}return n.dirs&&(z=Fr(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),R=z,po(D),R}const zy=t=>{let e;for(const n in t)(n==="class"||n==="style"||$o(n))&&((e||(e={}))[n]=t[n]);return e},qy=(t,e)=>{const n={};for(const r in t)(!ul(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?oh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Wo(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?oh(r,o,l):!0:!!o;return!1}function oh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wo(n,i))return!0}return!1}function Ky({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Wy=t=>t.__isSuspense;function Gy(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):By(t)}const $i={};function Ps(t,e,n){return Jd(t,e,n)}function Jd(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ie){var a;const c=Pd()===((a=qe)==null?void 0:a.scope)?qe:null;let l,u=!1,h=!1;if(be(t)?(l=()=>t.value,u=fo(t)):Rn(t)?(l=()=>t,r=!0):K(t)?(h=!0,u=t.some(x=>Rn(x)||fo(x)),l=()=>t.map(x=>{if(be(x))return x.value;if(Rn(x))return Kn(x);if(J(x))return Sn(x,c,2)})):J(t)?e?l=()=>Sn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Pt(t,c,3,[g])}:l=Rt,e&&r){const x=l;l=()=>Kn(x())}let f,g=x=>{f=D.onStop=()=>{Sn(x,c,4)}},y;if(Ks)if(g=Rt,e?n&&Pt(e,c,3,[l(),h?[]:void 0,g]):l(),s==="sync"){const x=$v();y=x.__watcherHandles||(x.__watcherHandles=[])}else return Rt;let w=h?new Array(t.length).fill($i):$i;const R=()=>{if(D.active)if(e){const x=D.run();(r||u||(h?x.some((Z,_e)=>Bs(Z,w[_e])):Bs(x,w)))&&(f&&f(),Pt(e,c,3,[x,w===$i?void 0:h&&w[0]===$i?[]:w,g]),w=x)}else D.run()};R.allowRecurse=!!e;let C;s==="sync"?C=R:s==="post"?C=()=>ct(R,c&&c.suspense):(R.pre=!0,c&&(R.id=c.uid),C=()=>Rl(R));const D=new _l(l,C);e?n?R():w=D.run():s==="post"?ct(D.run.bind(D),c&&c.suspense):D.run();const z=()=>{D.stop(),c&&c.scope&&hl(c.scope.effects,D)};return y&&y.push(z),z}function Qy(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?Xd(r,t):()=>r[t]:t.bind(r,r);let i;J(e)?i=e:(i=e.handler,n=e);const o=qe;Ur(this);const a=Jd(s,i.bind(r),n);return o?Ur(o):Jn(),a}function Xd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Kn(t,e){if(!Re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),be(t))Kn(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)Kn(t[n],e);else if(_d(t)||Cr(t))t.forEach(n=>{Kn(n,e)});else if(Ed(t))for(const n in t)Kn(t[n],e);return t}function FC(t,e){const n=Ze;if(n===null)return t;const r=Xo(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ie]=e[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&Kn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function $n(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Xr(),Pt(c,n,8,[t.el,a,t,e]),Zr())}}function Zd(t,e){return J(t)?(()=>Le({name:t.name},e,{setup:t}))():t}const Ss=t=>!!t.type.__asyncLoader,ep=t=>t.type.__isKeepAlive;function Yy(t,e){tp(t,"a",e)}function Jy(t,e){tp(t,"da",e)}function tp(t,e,n=qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ep(s.parent.vnode)&&Xy(r,e,n,s),s=s.parent}}function Xy(t,e,n,r){const s=Qo(e,t,r,!0);np(()=>{hl(r[e],s)},n)}function Qo(t,e,n=qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Xr(),Ur(n);const a=Pt(e,n,t,o);return Jn(),Zr(),a});return r?s.unshift(i):s.push(i),i}}const un=t=>(e,n=qe)=>(!Ks||t==="sp")&&Qo(t,(...r)=>e(...r),n),Zy=un("bm"),ev=un("m"),tv=un("bu"),nv=un("u"),rv=un("bum"),np=un("um"),sv=un("sp"),iv=un("rtg"),ov=un("rtc");function av(t,e=qe){Qo("ec",t,e)}const cv=Symbol.for("v-ndc");function xa(t,e,n={},r,s){if(Ze.isCE||Ze.parent&&Ss(Ze.parent)&&Ze.parent.isCE)return e!=="default"&&(n.name=e),me("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Dt();const o=i&&rp(i(n)),a=Cv(gt,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function rp(t){return t.some(e=>mo(e)?!(e.type===Lr||e.type===gt&&!rp(e.children)):!0)?t:null}const vc=t=>t?pp(t)?Xo(t)||t.proxy:vc(t.parent):null,Cs=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vc(t.parent),$root:t=>vc(t.root),$emit:t=>t.emit,$options:t=>Pl(t),$forceUpdate:t=>t.f||(t.f=()=>Rl(t.update)),$nextTick:t=>t.n||(t.n=Al.bind(t.proxy)),$watch:t=>Qy.bind(t)}),La=(t,e)=>t!==Ie&&!t.__isScriptSetup&&ae(t,e),lv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(La(r,e))return o[e]=1,r[e];if(s!==Ie&&ae(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==Ie&&ae(n,e))return o[e]=4,n[e];Ec&&(o[e]=0)}}const u=Cs[e];let h,f;if(u)return e==="$attrs"&&ht(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&ae(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ae(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return La(s,e)?(s[e]=n,!0):r!==Ie&&ae(r,e)?(r[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&ae(t,o)||La(e,o)||(a=i[0])&&ae(a,o)||ae(r,o)||ae(Cs,o)||ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ah(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ec=!0;function uv(t){const e=Pl(t),n=t.proxy,r=t.ctx;Ec=!1,e.beforeCreate&&ch(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:w,deactivated:R,beforeDestroy:C,beforeUnmount:D,destroyed:z,unmounted:x,render:Z,renderTracked:_e,renderTriggered:Se,errorCaptured:re,serverPrefetch:X,expose:ve,inheritAttrs:Ke,components:ft,directives:yt,filters:Bn}=e;if(l&&hv(l,r,null),o)for(const ye in o){const he=o[ye];J(he)&&(r[ye]=he.bind(n))}if(s){const ye=s.call(n,n);Re(ye)&&(t.data=fi(ye))}if(Ec=!0,i)for(const ye in i){const he=i[ye],Gt=J(he)?he.bind(n,n):J(he.get)?he.get.bind(n,n):Rt,fn=!J(he)&&J(he.set)?he.set.bind(n):Rt,Nt=Et({get:Gt,set:fn});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:at=>Nt.value=at})}if(a)for(const ye in a)sp(a[ye],r,n,ye);if(c){const ye=J(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(he=>{Zi(he,ye[he])})}u&&ch(u,t,"c");function le(ye,he){K(he)?he.forEach(Gt=>ye(Gt.bind(n))):he&&ye(he.bind(n))}if(le(Zy,h),le(ev,f),le(tv,g),le(nv,y),le(Yy,w),le(Jy,R),le(av,re),le(ov,_e),le(iv,Se),le(rv,D),le(np,x),le(sv,X),K(ve))if(ve.length){const ye=t.exposed||(t.exposed={});ve.forEach(he=>{Object.defineProperty(ye,he,{get:()=>n[he],set:Gt=>n[he]=Gt})})}else t.exposed||(t.exposed={});Z&&t.render===Rt&&(t.render=Z),Ke!=null&&(t.inheritAttrs=Ke),ft&&(t.components=ft),yt&&(t.directives=yt)}function hv(t,e,n=Rt){K(t)&&(t=Ic(t));for(const r in t){const s=t[r];let i;Re(s)?"default"in s?i=$t(s.from||r,s.default,!0):i=$t(s.from||r):i=$t(s),be(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ch(t,e,n){Pt(K(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function sp(t,e,n,r){const s=r.includes(".")?Xd(n,r):()=>n[r];if(Fe(t)){const i=e[t];J(i)&&Ps(s,i)}else if(J(t))Ps(s,t.bind(n));else if(Re(t))if(K(t))t.forEach(i=>sp(i,e,n,r));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&Ps(s,i,t)}}function Pl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>go(c,l,o,!0)),go(c,e,o)),Re(e)&&i.set(e,c),c}function go(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&go(t,i,n,!0),s&&s.forEach(o=>go(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=fv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const fv={data:lh,props:uh,emits:uh,methods:_s,computed:_s,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:_s,directives:_s,watch:pv,provide:lh,inject:dv};function lh(t,e){return e?t?function(){return Le(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function dv(t,e){return _s(Ic(t),Ic(e))}function Ic(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function _s(t,e){return t?Le(Object.create(null),t,e):e}function uh(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:Le(Object.create(null),ah(t),ah(e??{})):e}function pv(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const r in e)n[r]=it(t[r],e[r]);return n}function ip(){return{app:null,config:{isNativeTag:$_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gv=0;function mv(t,e){return function(r,s=null){J(r)||(r=Le({},r)),s!=null&&!Re(s)&&(s=null);const i=ip(),o=new Set;let a=!1;const c=i.app={_uid:gv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:jv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=me(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Xo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){qs=c;try{return l()}finally{qs=null}}};return c}}let qs=null;function Zi(t,e){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[t]=e}}function $t(t,e,n=!1){const r=qe||Ze;if(r||qs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:qs._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&J(e)?e.call(r&&r.proxy):e}}function _v(){return!!(qe||Ze||qs)}function yv(t,e,n,r=!1){const s={},i={};uo(i,Jo,1),t.propsDefaults=Object.create(null),op(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ld(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function vv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ce(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Wo(t.emitsOptions,f))continue;const g=e[f];if(c)if(ae(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=Mr(f);s[y]=wc(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{op(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=Jr(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=wc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&rn(t,"set","$attrs")}function op(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ji(c))continue;const l=e[c];let u;s&&ae(s,u=Mr(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Wo(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ce(n),l=a||Ie;for(let u=0;u<i.length;u++){const h=i[u];n[h]=wc(s,c,h,l[h],t,!ae(l,h))}}return o}function wc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&J(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Ur(s),r=l[n]=c.call(null,e),Jn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Jr(n))&&(r=!0))}return r}function ap(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[f,g]=ap(h,e,!0);Le(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Re(t)&&r.set(t,Sr),Sr;if(K(i))for(let u=0;u<i.length;u++){const h=Mr(i[u]);hh(h)&&(o[h]=Ie)}else if(i)for(const u in i){const h=Mr(u);if(hh(h)){const f=i[u],g=o[h]=K(f)||J(f)?{type:f}:Le({},f);if(g){const y=ph(Boolean,g.type),w=ph(String,g.type);g[0]=y>-1,g[1]=w<0||y<w,(y>-1||ae(g,"default"))&&a.push(h)}}}const l=[o,a];return Re(t)&&r.set(t,l),l}function hh(t){return t[0]!=="$"}function fh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function dh(t,e){return fh(t)===fh(e)}function ph(t,e){return K(e)?e.findIndex(n=>dh(n,t)):J(e)&&dh(e,t)?0:-1}const cp=t=>t[0]==="_"||t==="$stable",Sl=t=>K(t)?t.map(xt):[xt(t)],Ev=(t,e,n)=>{if(e._n)return e;const r=Me((...s)=>Sl(e(...s)),n);return r._c=!1,r},lp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(cp(s))continue;const i=t[s];if(J(i))e[s]=Ev(s,i,r);else if(i!=null){const o=Sl(i);e[s]=()=>o}}},up=(t,e)=>{const n=Sl(e);t.slots.default=()=>n},Iv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),uo(e,"_",n)):lp(e,t.slots={})}else t.slots={},e&&up(t,e);uo(t.slots,Jo,1)},wv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Le(s,e),!n&&a===1&&delete s._):(i=!e.$stable,lp(e,s)),o=e}else e&&(up(t,e),o={default:1});if(i)for(const a in s)!cp(a)&&!(a in o)&&delete s[a]};function Tc(t,e,n,r,s=!1){if(K(t)){t.forEach((f,g)=>Tc(f,e&&(K(e)?e[g]:e),n,r,s));return}if(Ss(r)&&!s)return;const i=r.shapeFlag&4?Xo(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Fe(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):be(l)&&(l.value=null)),J(c))Sn(c,a,12,[o,u]);else{const f=Fe(c),g=be(c);if(f||g){const y=()=>{if(t.f){const w=f?ae(h,c)?h[c]:u[c]:c.value;s?K(w)&&hl(w,i):K(w)?w.includes(i)||w.push(i):f?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ae(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ct(y,n)):y()}}}const ct=Gy;function Tv(t){return Av(t)}function Av(t,e){const n=pc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Rt,insertStaticContent:y}=t,w=(d,p,m,_=null,I=null,T=null,N=!1,S=null,b=!!p.dynamicChildren)=>{if(d===p)return;d&&!us(d,p)&&(_=v(d),at(d,I,T,!0),d=null),p.patchFlag===-2&&(b=!1,p.dynamicChildren=null);const{type:P,ref:$,shapeFlag:F}=p;switch(P){case Yo:R(d,p,m,_);break;case Lr:C(d,p,m,_);break;case Fa:d==null&&D(p,m,_,N);break;case gt:ft(d,p,m,_,I,T,N,S,b);break;default:F&1?Z(d,p,m,_,I,T,N,S,b):F&6?yt(d,p,m,_,I,T,N,S,b):(F&64||F&128)&&P.process(d,p,m,_,I,T,N,S,b,k)}$!=null&&I&&Tc($,d&&d.ref,T,p||d,!p)},R=(d,p,m,_)=>{if(d==null)r(p.el=a(p.children),m,_);else{const I=p.el=d.el;p.children!==d.children&&l(I,p.children)}},C=(d,p,m,_)=>{d==null?r(p.el=c(p.children||""),m,_):p.el=d.el},D=(d,p,m,_)=>{[d.el,d.anchor]=y(d.children,p,m,_,d.el,d.anchor)},z=({el:d,anchor:p},m,_)=>{let I;for(;d&&d!==p;)I=f(d),r(d,m,_),d=I;r(p,m,_)},x=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},Z=(d,p,m,_,I,T,N,S,b)=>{N=N||p.type==="svg",d==null?_e(p,m,_,I,T,N,S,b):X(d,p,I,T,N,S,b)},_e=(d,p,m,_,I,T,N,S)=>{let b,P;const{type:$,props:F,shapeFlag:j,transition:G,dirs:ee}=d;if(b=d.el=o(d.type,T,F&&F.is,F),j&8?u(b,d.children):j&16&&re(d.children,b,null,_,I,T&&$!=="foreignObject",N,S),ee&&$n(d,null,_,"created"),Se(b,d,d.scopeId,N,_),F){for(const ge in F)ge!=="value"&&!Ji(ge)&&i(b,ge,null,F[ge],T,d.children,_,I,We);"value"in F&&i(b,"value",null,F.value),(P=F.onVnodeBeforeMount)&&Mt(P,_,d)}ee&&$n(d,null,_,"beforeMount");const Ee=(!I||I&&!I.pendingBranch)&&G&&!G.persisted;Ee&&G.beforeEnter(b),r(b,p,m),((P=F&&F.onVnodeMounted)||Ee||ee)&&ct(()=>{P&&Mt(P,_,d),Ee&&G.enter(b),ee&&$n(d,null,_,"mounted")},I)},Se=(d,p,m,_,I)=>{if(m&&g(d,m),_)for(let T=0;T<_.length;T++)g(d,_[T]);if(I){let T=I.subTree;if(p===T){const N=I.vnode;Se(d,N,N.scopeId,N.slotScopeIds,I.parent)}}},re=(d,p,m,_,I,T,N,S,b=0)=>{for(let P=b;P<d.length;P++){const $=d[P]=S?_n(d[P]):xt(d[P]);w(null,$,p,m,_,I,T,N,S)}},X=(d,p,m,_,I,T,N)=>{const S=p.el=d.el;let{patchFlag:b,dynamicChildren:P,dirs:$}=p;b|=d.patchFlag&16;const F=d.props||Ie,j=p.props||Ie;let G;m&&jn(m,!1),(G=j.onVnodeBeforeUpdate)&&Mt(G,m,p,d),$&&$n(p,d,m,"beforeUpdate"),m&&jn(m,!0);const ee=I&&p.type!=="foreignObject";if(P?ve(d.dynamicChildren,P,S,m,_,ee,T):N||he(d,p,S,null,m,_,ee,T,!1),b>0){if(b&16)Ke(S,p,F,j,m,_,I);else if(b&2&&F.class!==j.class&&i(S,"class",null,j.class,I),b&4&&i(S,"style",F.style,j.style,I),b&8){const Ee=p.dynamicProps;for(let ge=0;ge<Ee.length;ge++){const ke=Ee[ge],wt=F[ke],gr=j[ke];(gr!==wt||ke==="value")&&i(S,ke,wt,gr,I,d.children,m,_,We)}}b&1&&d.children!==p.children&&u(S,p.children)}else!N&&P==null&&Ke(S,p,F,j,m,_,I);((G=j.onVnodeUpdated)||$)&&ct(()=>{G&&Mt(G,m,p,d),$&&$n(p,d,m,"updated")},_)},ve=(d,p,m,_,I,T,N)=>{for(let S=0;S<p.length;S++){const b=d[S],P=p[S],$=b.el&&(b.type===gt||!us(b,P)||b.shapeFlag&70)?h(b.el):m;w(b,P,$,null,_,I,T,N,!0)}},Ke=(d,p,m,_,I,T,N)=>{if(m!==_){if(m!==Ie)for(const S in m)!Ji(S)&&!(S in _)&&i(d,S,m[S],null,N,p.children,I,T,We);for(const S in _){if(Ji(S))continue;const b=_[S],P=m[S];b!==P&&S!=="value"&&i(d,S,P,b,N,p.children,I,T,We)}"value"in _&&i(d,"value",m.value,_.value)}},ft=(d,p,m,_,I,T,N,S,b)=>{const P=p.el=d?d.el:a(""),$=p.anchor=d?d.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:G}=p;G&&(S=S?S.concat(G):G),d==null?(r(P,m,_),r($,m,_),re(p.children,m,$,I,T,N,S,b)):F>0&&F&64&&j&&d.dynamicChildren?(ve(d.dynamicChildren,j,m,I,T,N,S),(p.key!=null||I&&p===I.subTree)&&hp(d,p,!0)):he(d,p,m,$,I,T,N,S,b)},yt=(d,p,m,_,I,T,N,S,b)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?I.ctx.activate(p,m,_,N,b):Bn(p,m,_,I,T,N,b):vt(d,p,b)},Bn=(d,p,m,_,I,T,N)=>{const S=d.component=Ov(d,_,I);if(ep(d)&&(S.ctx.renderer=k),Mv(S),S.asyncDep){if(I&&I.registerDep(S,le),!d.el){const b=S.subTree=me(Lr);C(null,b,p,m)}return}le(S,d,p,m,I,T,N)},vt=(d,p,m)=>{const _=p.component=d.component;if(Hy(d,p,m))if(_.asyncDep&&!_.asyncResolved){ye(_,p,m);return}else _.next=p,Uy(_.update),_.update();else p.el=d.el,_.vnode=p},le=(d,p,m,_,I,T,N)=>{const S=()=>{if(d.isMounted){let{next:$,bu:F,u:j,parent:G,vnode:ee}=d,Ee=$,ge;jn(d,!1),$?($.el=ee.el,ye(d,$,N)):$=ee,F&&Xi(F),(ge=$.props&&$.props.onVnodeBeforeUpdate)&&Mt(ge,G,$,ee),jn(d,!0);const ke=Ma(d),wt=d.subTree;d.subTree=ke,w(wt,ke,h(wt.el),v(wt),d,I,T),$.el=ke.el,Ee===null&&Ky(d,ke.el),j&&ct(j,I),(ge=$.props&&$.props.onVnodeUpdated)&&ct(()=>Mt(ge,G,$,ee),I)}else{let $;const{el:F,props:j}=p,{bm:G,m:ee,parent:Ee}=d,ge=Ss(p);if(jn(d,!1),G&&Xi(G),!ge&&($=j&&j.onVnodeBeforeMount)&&Mt($,Ee,p),jn(d,!0),F&&fe){const ke=()=>{d.subTree=Ma(d),fe(F,d.subTree,d,I,null)};ge?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ke()):ke()}else{const ke=d.subTree=Ma(d);w(null,ke,m,_,d,I,T),p.el=ke.el}if(ee&&ct(ee,I),!ge&&($=j&&j.onVnodeMounted)){const ke=p;ct(()=>Mt($,Ee,ke),I)}(p.shapeFlag&256||Ee&&Ss(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&d.a&&ct(d.a,I),d.isMounted=!0,p=m=_=null}},b=d.effect=new _l(S,()=>Rl(P),d.scope),P=d.update=()=>b.run();P.id=d.uid,jn(d,!0),P()},ye=(d,p,m)=>{p.component=d;const _=d.vnode.props;d.vnode=p,d.next=null,vv(d,p.props,_,m),wv(d,p.children,m),Xr(),ih(),Zr()},he=(d,p,m,_,I,T,N,S,b=!1)=>{const P=d&&d.children,$=d?d.shapeFlag:0,F=p.children,{patchFlag:j,shapeFlag:G}=p;if(j>0){if(j&128){fn(P,F,m,_,I,T,N,S,b);return}else if(j&256){Gt(P,F,m,_,I,T,N,S,b);return}}G&8?($&16&&We(P,I,T),F!==P&&u(m,F)):$&16?G&16?fn(P,F,m,_,I,T,N,S,b):We(P,I,T,!0):($&8&&u(m,""),G&16&&re(F,m,_,I,T,N,S,b))},Gt=(d,p,m,_,I,T,N,S,b)=>{d=d||Sr,p=p||Sr;const P=d.length,$=p.length,F=Math.min(P,$);let j;for(j=0;j<F;j++){const G=p[j]=b?_n(p[j]):xt(p[j]);w(d[j],G,m,null,I,T,N,S,b)}P>$?We(d,I,T,!0,!1,F):re(p,m,_,I,T,N,S,b,F)},fn=(d,p,m,_,I,T,N,S,b)=>{let P=0;const $=p.length;let F=d.length-1,j=$-1;for(;P<=F&&P<=j;){const G=d[P],ee=p[P]=b?_n(p[P]):xt(p[P]);if(us(G,ee))w(G,ee,m,null,I,T,N,S,b);else break;P++}for(;P<=F&&P<=j;){const G=d[F],ee=p[j]=b?_n(p[j]):xt(p[j]);if(us(G,ee))w(G,ee,m,null,I,T,N,S,b);else break;F--,j--}if(P>F){if(P<=j){const G=j+1,ee=G<$?p[G].el:_;for(;P<=j;)w(null,p[P]=b?_n(p[P]):xt(p[P]),m,ee,I,T,N,S,b),P++}}else if(P>j)for(;P<=F;)at(d[P],I,T,!0),P++;else{const G=P,ee=P,Ee=new Map;for(P=ee;P<=j;P++){const dt=p[P]=b?_n(p[P]):xt(p[P]);dt.key!=null&&Ee.set(dt.key,P)}let ge,ke=0;const wt=j-ee+1;let gr=!1,Gu=0;const ls=new Array(wt);for(P=0;P<wt;P++)ls[P]=0;for(P=G;P<=F;P++){const dt=d[P];if(ke>=wt){at(dt,I,T,!0);continue}let Ot;if(dt.key!=null)Ot=Ee.get(dt.key);else for(ge=ee;ge<=j;ge++)if(ls[ge-ee]===0&&us(dt,p[ge])){Ot=ge;break}Ot===void 0?at(dt,I,T,!0):(ls[Ot-ee]=P+1,Ot>=Gu?Gu=Ot:gr=!0,w(dt,p[Ot],m,null,I,T,N,S,b),ke++)}const Qu=gr?Rv(ls):Sr;for(ge=Qu.length-1,P=wt-1;P>=0;P--){const dt=ee+P,Ot=p[dt],Yu=dt+1<$?p[dt+1].el:_;ls[P]===0?w(null,Ot,m,Yu,I,T,N,S,b):gr&&(ge<0||P!==Qu[ge]?Nt(Ot,m,Yu,2):ge--)}}},Nt=(d,p,m,_,I=null)=>{const{el:T,type:N,transition:S,children:b,shapeFlag:P}=d;if(P&6){Nt(d.component.subTree,p,m,_);return}if(P&128){d.suspense.move(p,m,_);return}if(P&64){N.move(d,p,m,k);return}if(N===gt){r(T,p,m);for(let F=0;F<b.length;F++)Nt(b[F],p,m,_);r(d.anchor,p,m);return}if(N===Fa){z(d,p,m);return}if(_!==2&&P&1&&S)if(_===0)S.beforeEnter(T),r(T,p,m),ct(()=>S.enter(T),I);else{const{leave:F,delayLeave:j,afterLeave:G}=S,ee=()=>r(T,p,m),Ee=()=>{F(T,()=>{ee(),G&&G()})};j?j(T,ee,Ee):Ee()}else r(T,p,m)},at=(d,p,m,_=!1,I=!1)=>{const{type:T,props:N,ref:S,children:b,dynamicChildren:P,shapeFlag:$,patchFlag:F,dirs:j}=d;if(S!=null&&Tc(S,null,m,d,!0),$&256){p.ctx.deactivate(d);return}const G=$&1&&j,ee=!Ss(d);let Ee;if(ee&&(Ee=N&&N.onVnodeBeforeUnmount)&&Mt(Ee,p,d),$&6)Mi(d.component,m,_);else{if($&128){d.suspense.unmount(m,_);return}G&&$n(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,m,I,k,_):P&&(T!==gt||F>0&&F&64)?We(P,p,m,!1,!0):(T===gt&&F&384||!I&&$&16)&&We(b,p,m),_&&dr(d)}(ee&&(Ee=N&&N.onVnodeUnmounted)||G)&&ct(()=>{Ee&&Mt(Ee,p,d),G&&$n(d,null,p,"unmounted")},m)},dr=d=>{const{type:p,el:m,anchor:_,transition:I}=d;if(p===gt){pr(m,_);return}if(p===Fa){x(d);return}const T=()=>{s(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:N,delayLeave:S}=I,b=()=>N(m,T);S?S(d.el,T,b):b()}else T()},pr=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},Mi=(d,p,m)=>{const{bum:_,scope:I,update:T,subTree:N,um:S}=d;_&&Xi(_),I.stop(),T&&(T.active=!1,at(N,d,p,m)),S&&ct(S,p),ct(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},We=(d,p,m,_=!1,I=!1,T=0)=>{for(let N=T;N<d.length;N++)at(d[N],p,m,_,I)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),M=(d,p,m)=>{d==null?p._vnode&&at(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,m),ih(),Kd(),p._vnode=d},k={p:w,um:at,m:Nt,r:dr,mt:Bn,mc:re,pc:he,pbc:ve,n:v,o:t};let U,fe;return e&&([U,fe]=e(k)),{render:M,hydrate:U,createApp:mv(M,U)}}function jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function hp(t,e,n=!1){const r=t.children,s=e.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=_n(s[i]),a.el=o.el),n||hp(o,a)),a.type===Yo&&(a.el=o.el)}}function Rv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Pv=t=>t.__isTeleport,gt=Symbol.for("v-fgt"),Yo=Symbol.for("v-txt"),Lr=Symbol.for("v-cmt"),Fa=Symbol.for("v-stc"),bs=[];let At=null;function Dt(t=!1){bs.push(At=t?null:[])}function Sv(){bs.pop(),At=bs[bs.length-1]||null}let Hs=1;function gh(t){Hs+=t}function fp(t){return t.dynamicChildren=Hs>0?At||Sr:null,Sv(),Hs>0&&At&&At.push(t),t}function Wt(t,e,n,r,s,i){return fp(ne(t,e,n,r,s,i,!0))}function Cv(t,e,n,r,s){return fp(me(t,e,n,r,s,!0))}function mo(t){return t?t.__v_isVNode===!0:!1}function us(t,e){return t.type===e.type&&t.key===e.key}const Jo="__vInternal",dp=({key:t})=>t??null,eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||be(t)||J(t)?{i:Ze,r:t,k:e,f:!!n}:t:null);function ne(t,e=null,n=null,r=0,s=null,i=t===gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dp(e),ref:e&&eo(e),scopeId:Go,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return a?(Cl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),Hs>0&&!o&&At&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&At.push(c),c}const me=bv;function bv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===cv)&&(t=Lr),mo(t)){const a=Fr(t,e,!0);return n&&Cl(a,n),Hs>0&&!i&&At&&(a.shapeFlag&6?At[At.indexOf(t)]=a:At.push(a)),a.patchFlag|=-2,a}if(Uv(t)&&(t=t.__vccOpts),e){e=kv(e);let{class:a,style:c}=e;a&&!Fe(a)&&(e.class=gl(a)),Re(c)&&(Ud(c)&&!K(c)&&(c=Le({},c)),e.style=pl(c))}const o=Fe(t)?1:Wy(t)?128:Pv(t)?64:Re(t)?4:J(t)?2:0;return ne(t,e,n,r,s,o,i,!0)}function kv(t){return t?Ud(t)||Jo in t?Le({},t):t:null}function Fr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Vv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&dp(a),ref:e&&e.ref?n&&s?K(s)?s.concat(eo(e)):[s,eo(e)]:eo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fr(t.ssContent),ssFallback:t.ssFallback&&Fr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function oe(t=" ",e=0){return me(Yo,null,t,e)}function xt(t){return t==null||typeof t=="boolean"?me(Lr):K(t)?me(gt,null,t.slice()):typeof t=="object"?_n(t):me(Yo,null,String(t))}function _n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fr(t)}function Cl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Cl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Jo in e)?e._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:Ze},n=32):(e=String(e),r&64?(n=16,e=[oe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=gl([e.class,r.class]));else if(s==="style")e.style=pl([e.style,r.style]);else if($o(s)){const i=e[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Mt(t,e,n,r=null){Pt(t,e,7,[n,r])}const Dv=ip();let Nv=0;function Ov(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Dv,i={uid:Nv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ad(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ap(r,s),emitsOptions:Gd(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jy.bind(null,i),t.ce&&t.ce(i),i}let qe=null,bl,mr,mh="__VUE_INSTANCE_SETTERS__";(mr=pc()[mh])||(mr=pc()[mh]=[]),mr.push(t=>qe=t),bl=t=>{mr.length>1?mr.forEach(e=>e(t)):mr[0](t)};const Ur=t=>{bl(t),t.scope.on()},Jn=()=>{qe&&qe.scope.off(),bl(null)};function pp(t){return t.vnode.shapeFlag&4}let Ks=!1;function Mv(t,e=!1){Ks=e;const{props:n,children:r}=t.vnode,s=pp(t);yv(t,n,s,e),Iv(t,r);const i=s?xv(t,e):void 0;return Ks=!1,i}function xv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ho(new Proxy(t.ctx,lv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Fv(t):null;Ur(t),Xr();const i=Sn(r,t,0,[t.props,s]);if(Zr(),Jn(),yd(i)){if(i.then(Jn,Jn),e)return i.then(o=>{_h(t,o,e)}).catch(o=>{Ko(o,t,0)});t.asyncDep=i}else _h(t,i,e)}else gp(t,e)}function _h(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=zd(e)),gp(t,n)}let yh;function gp(t,e,n){const r=t.type;if(!t.render){if(!e&&yh&&!r.render){const s=r.template||Pl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Le(Le({isCustomElement:i,delimiters:a},o),c);r.render=yh(s,l)}}t.render=r.render||Rt}Ur(t),Xr(),uv(t),Zr(),Jn()}function Lv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ht(t,"get","$attrs"),e[n]}}))}function Fv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Lv(t)},slots:t.slots,emit:t.emit,expose:e}}function Xo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(zd(Ho(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cs)return Cs[n](t)},has(e,n){return n in e||n in Cs}}))}function Uv(t){return J(t)&&"__vccOpts"in t}const Et=(t,e)=>xy(t,e,Ks);function mp(t,e,n){const r=arguments.length;return r===2?Re(e)&&!K(e)?mo(e)?me(t,null,[e]):me(t,e):me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mo(n)&&(n=[n]),me(t,e,n))}const Bv=Symbol.for("v-scx"),$v=()=>$t(Bv),jv="3.3.4",zv="http://www.w3.org/2000/svg",Hn=typeof document<"u"?document:null,vh=Hn&&Hn.createElement("template"),qv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Hn.createElementNS(zv,t):Hn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Hn.createTextNode(t),createComment:t=>Hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vh.innerHTML=r?`<svg>${t}</svg>`:t;const a=vh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Hv(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Kv(t,e,n){const r=t.style,s=Fe(n);if(n&&!s){if(e&&!Fe(e))for(const i in e)n[i]==null&&Ac(r,i,"");for(const i in n)Ac(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Eh=/\s*!important$/;function Ac(t,e,n){if(K(n))n.forEach(r=>Ac(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Wv(t,e);Eh.test(n)?t.setProperty(Jr(r),n.replace(Eh,""),"important"):t[r]=n}}const Ih=["Webkit","Moz","ms"],Ua={};function Wv(t,e){const n=Ua[e];if(n)return n;let r=Mr(e);if(r!=="filter"&&r in t)return Ua[e]=r;r=Id(r);for(let s=0;s<Ih.length;s++){const i=Ih[s]+r;if(i in t)return Ua[e]=i}return e}const wh="http://www.w3.org/1999/xlink";function Gv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wh,e.slice(6,e.length)):t.setAttributeNS(wh,e,n);else{const i=X_(e);n==null||i&&!wd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Qv(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=wd(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Er(t,e,n,r){t.addEventListener(e,n,r)}function Yv(t,e,n,r){t.removeEventListener(e,n,r)}function Jv(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Xv(e);if(r){const l=i[e]=tE(r,s);Er(t,a,l,c)}else o&&(Yv(t,a,o,c),i[e]=void 0)}}const Th=/(?:Once|Passive|Capture)$/;function Xv(t){let e;if(Th.test(t)){e={};let r;for(;r=t.match(Th);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jr(t.slice(2)),e]}let Ba=0;const Zv=Promise.resolve(),eE=()=>Ba||(Zv.then(()=>Ba=0),Ba=Date.now());function tE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pt(nE(r,n.value),e,5,[r])};return n.value=t,n.attached=eE(),n}function nE(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ah=/^on[a-z]/,rE=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Hv(t,r,s):e==="style"?Kv(t,n,r):$o(e)?ul(e)||Jv(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sE(t,e,r,s))?Qv(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Gv(t,e,r,s))};function sE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ah.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ah.test(e)&&Fe(n)?!1:e in t}const Rh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>Xi(e,n):e};function iE(t){t.target.composing=!0}function Ph(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const UC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Rh(s);const i=r||s.props&&s.props.type==="number";Er(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=dc(a)),t._assign(a)}),n&&Er(t,"change",()=>{t.value=t.value.trim()}),e||(Er(t,"compositionstart",iE),Er(t,"compositionend",Ph),Er(t,"change",Ph))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Rh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&dc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},oE=["ctrl","shift","alt","meta"],aE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>oE.some(n=>t[`${n}Key`]&&!e.includes(n))},BC=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=aE[e[s]];if(i&&i(n,e))return}return t(n,...r)},cE=Le({patchProp:rE},qv);let Sh;function lE(){return Sh||(Sh=Tv(cE))}const uE=(...t)=>{const e=lE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=hE(r);if(!s)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function hE(t){return Fe(t)?document.querySelector(t):t}var fE=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let _p;const Zo=t=>_p=t,yp=Symbol();function Rc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ks;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ks||(ks={}));function dE(){const t=Rd(!0),e=t.run(()=>Pn({}));let n=[],r=[];const s=Ho({install(i){Zo(s),s._a=i,i.provide(yp,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!fE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const vp=()=>{};function Ch(t,e,n,r=vp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Pd()&&ty(s),s}function _r(t,...e){t.slice().forEach(n=>{n(...e)})}const pE=t=>t();function Pc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Rc(s)&&Rc(r)&&t.hasOwnProperty(n)&&!be(r)&&!Rn(r)?t[n]=Pc(s,r):t[n]=r}return t}const gE=Symbol();function mE(t){return!Rc(t)||!t.hasOwnProperty(gE)}const{assign:mn}=Object;function _E(t){return!!(be(t)&&t.effect)}function yE(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Dy(n.state.value[t]);return mn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Ho(Et(()=>{Zo(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return c=Ep(t,l,e,n,r,!0),c}function Ep(t,e,n={},r,s,i){let o;const a=mn({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],g;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),Pn({});let w;function R(re){let X;l=u=!1,typeof re=="function"?(re(r.state.value[t]),X={type:ks.patchFunction,storeId:t,events:g}):(Pc(r.state.value[t],re),X={type:ks.patchObject,payload:re,storeId:t,events:g});const ve=w=Symbol();Al().then(()=>{w===ve&&(l=!0)}),u=!0,_r(h,X,r.state.value[t])}const C=i?function(){const{state:X}=n,ve=X?X():{};this.$patch(Ke=>{mn(Ke,ve)})}:vp;function D(){o.stop(),h=[],f=[],r._s.delete(t)}function z(re,X){return function(){Zo(r);const ve=Array.from(arguments),Ke=[],ft=[];function yt(le){Ke.push(le)}function Bn(le){ft.push(le)}_r(f,{args:ve,name:re,store:Z,after:yt,onError:Bn});let vt;try{vt=X.apply(this&&this.$id===t?this:Z,ve)}catch(le){throw _r(ft,le),le}return vt instanceof Promise?vt.then(le=>(_r(Ke,le),le)).catch(le=>(_r(ft,le),Promise.reject(le))):(_r(Ke,vt),vt)}}const x={_p:r,$id:t,$onAction:Ch.bind(null,f),$patch:R,$reset:C,$subscribe(re,X={}){const ve=Ch(h,re,X.detached,()=>Ke()),Ke=o.run(()=>Ps(()=>r.state.value[t],ft=>{(X.flush==="sync"?u:l)&&re({storeId:t,type:ks.direct,events:g},ft)},mn({},c,X)));return ve},$dispose:D},Z=fi(x);r._s.set(t,Z);const _e=r._a&&r._a.runWithContext||pE,Se=r._e.run(()=>(o=Rd(),_e(()=>o.run(e))));for(const re in Se){const X=Se[re];if(be(X)&&!_E(X)||Rn(X))i||(y&&mE(X)&&(be(X)?X.value=y[re]:Pc(X,y[re])),r.state.value[t][re]=X);else if(typeof X=="function"){const ve=z(re,X);Se[re]=ve,a.actions[re]=X}}return mn(Z,Se),mn(ce(Z),Se),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:re=>{R(X=>{mn(X,re)})}}),r._p.forEach(re=>{mn(Z,o.run(()=>re({store:Z,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(Z.$state,y),l=!0,u=!0,Z}function Ip(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=_v();return a=a||(l?$t(yp,null):null),a&&Zo(a),a=_p,a._s.has(r)||(i?Ep(r,e,s,a):yE(r,s,a)),a._s.get(r)}return o.$id=r,o}const vE="/fbvue3-exp/assets/logo-277e0e97.svg";/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ir=typeof window<"u";function EE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const de=Object.assign;function $a(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ct(s)?s.map(t):t(s)}return n}const Vs=()=>{},Ct=Array.isArray,IE=/\/$/,wE=t=>t.replace(IE,"");function ja(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=PE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function TE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function AE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Br(e.matched[r],n.matched[s])&&wp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Br(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!RE(t[n],e[n]))return!1;return!0}function RE(t,e){return Ct(t)?kh(t,e):Ct(e)?kh(e,t):t===e}function kh(t,e){return Ct(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function PE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Ws;(function(t){t.pop="pop",t.push="push"})(Ws||(Ws={}));var Ds;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ds||(Ds={}));function SE(t){if(!t)if(Ir){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wE(t)}const CE=/^[^#]+#/;function bE(t,e){return t.replace(CE,"#")+e}function kE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ea=()=>({left:window.pageXOffset,top:window.pageYOffset});function VE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=kE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Vh(t,e){return(history.state?history.state.position-e:-1)+t}const Sc=new Map;function DE(t,e){Sc.set(t,e)}function NE(t){const e=Sc.get(t);return Sc.delete(t),e}let OE=()=>location.protocol+"//"+location.host;function Tp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),bh(c,"")}return bh(n,t)+r+s}function ME(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=Tp(t,location),y=n.value,w=e.value;let R=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}R=w?f.position-w.position:0}else r(g);s.forEach(C=>{C(n.value,y,{delta:R,type:Ws.pop,direction:R?R>0?Ds.forward:Ds.back:Ds.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(de({},f.state,{scroll:ea()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Dh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ea():null}}function xE(t){const{history:e,location:n}=window,r={value:Tp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:OE()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=de({},e.state,Dh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=de({},s.value,e.state,{forward:c,scroll:ea()});i(u.current,u,!0);const h=de({},Dh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function LE(t){t=SE(t);const e=xE(t),n=ME(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=de({location:"",base:t,go:r,createHref:bE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function FE(t){return typeof t=="string"||t&&typeof t=="object"}function Ap(t){return typeof t=="string"||typeof t=="symbol"}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rp=Symbol("");var Nh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Nh||(Nh={}));function $r(t,e){return de(new Error,{type:t,[Rp]:!0},e)}function Qt(t,e){return t instanceof Error&&Rp in t&&(e==null||!!(t.type&e))}const Oh="[^/]+?",UE={sensitive:!1,strict:!1,start:!0,end:!0},BE=/[.+*?^${}()[\]/\\]/g;function $E(t,e){const n=de({},UE,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(BE,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:w,optional:R,regexp:C}=f;i.push({name:y,repeatable:w,optional:R});const D=C||Oh;if(D!==Oh){g+=10;try{new RegExp(`(${D})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${y}" (${D}): `+x.message)}}let z=w?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(z=R&&l.length<2?`(?:/${z})`:"/"+z),R&&(z+="?"),s+=z,g+=20,R&&(g+=-8),w&&(g+=-20),D===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:w,optional:R}=g,C=y in l?l[y]:"";if(Ct(C)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const D=Ct(C)?C.join("/"):C;if(!D)if(R)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function jE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function zE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=jE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Mh(r))return 1;if(Mh(s))return-1}return s.length-r.length}function Mh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qE={type:0,value:""},HE=/[a-zA-Z0-9_]/;function KE(t){if(!t)return[[]];if(t==="/")return[[qE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:HE.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function WE(t,e,n){const r=$E(KE(t.path),n),s=de(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function GE(t,e){const n=[],r=new Map;e=Fh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const g=!f,y=QE(u);y.aliasOf=f&&f.record;const w=Fh(e,u),R=[y];if("alias"in u){const z=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of z)R.push(de({},y,{components:f?f.record.components:y.components,path:x,aliasOf:f?f.record:y}))}let C,D;for(const z of R){const{path:x}=z;if(h&&x[0]!=="/"){const Z=h.record.path,_e=Z[Z.length-1]==="/"?"":"/";z.path=h.record.path+(x&&_e+x)}if(C=WE(z,h,w),f?f.alias.push(C):(D=D||C,D!==C&&D.alias.push(C),g&&u.name&&!Lh(C)&&o(u.name)),y.children){const Z=y.children;for(let _e=0;_e<Z.length;_e++)i(Z[_e],C,f&&f.children[_e])}f=f||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return D?()=>{o(D)}:Vs}function o(u){if(Ap(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&zE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Pp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Lh(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},y,w;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw $r(1,{location:u});w=f.record.name,g=de(xh(h.params,f.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&xh(u.params,f.keys.map(D=>D.name))),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(D=>D.re.test(y)),f&&(g=f.parse(y),w=f.record.name);else{if(f=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!f)throw $r(1,{location:u,currentLocation:h});w=f.record.name,g=de({},h.params,u.params),y=f.stringify(g)}const R=[];let C=f;for(;C;)R.unshift(C.record),C=C.parent;return{name:w,path:y,params:g,matched:R,meta:JE(R)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function xh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function QE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:YE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function YE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Lh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function JE(t){return t.reduce((e,n)=>de(e,n.meta),{})}function Fh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Pp(t,e){return e.children.some(n=>n===t||Pp(t,n))}const Sp=/#/g,XE=/&/g,ZE=/\//g,eI=/=/g,tI=/\?/g,Cp=/\+/g,nI=/%5B/g,rI=/%5D/g,bp=/%5E/g,sI=/%60/g,kp=/%7B/g,iI=/%7C/g,Vp=/%7D/g,oI=/%20/g;function kl(t){return encodeURI(""+t).replace(iI,"|").replace(nI,"[").replace(rI,"]")}function aI(t){return kl(t).replace(kp,"{").replace(Vp,"}").replace(bp,"^")}function Cc(t){return kl(t).replace(Cp,"%2B").replace(oI,"+").replace(Sp,"%23").replace(XE,"%26").replace(sI,"`").replace(kp,"{").replace(Vp,"}").replace(bp,"^")}function cI(t){return Cc(t).replace(eI,"%3D")}function lI(t){return kl(t).replace(Sp,"%23").replace(tI,"%3F")}function uI(t){return t==null?"":lI(t).replace(ZE,"%2F")}function _o(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function hI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Cp," "),o=i.indexOf("="),a=_o(o<0?i:i.slice(0,o)),c=o<0?null:_o(i.slice(o+1));if(a in e){let l=e[a];Ct(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Uh(t){let e="";for(let n in t){const r=t[n];if(n=cI(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ct(r)?r.map(i=>i&&Cc(i)):[r&&Cc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function fI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ct(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const dI=Symbol(""),Bh=Symbol(""),Vl=Symbol(""),Dp=Symbol(""),bc=Symbol("");function hs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a($r(4,{from:n,to:e})):h instanceof Error?a(h):FE(h)?a($r(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function za(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(pI(a)){const l=(a.__vccOpts||a)[e];l&&s.push(yn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=EE(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&yn(f,n,r,i,o)()}))}}return s}function pI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $h(t){const e=$t(Vl),n=$t(Dp),r=Et(()=>e.resolve(tn(t.to))),s=Et(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Br.bind(null,u));if(f>-1)return f;const g=jh(c[l-2]);return l>1&&jh(u)===g&&h[h.length-1].path!==g?h.findIndex(Br.bind(null,c[l-2])):f}),i=Et(()=>s.value>-1&&_I(n.params,r.value.params)),o=Et(()=>s.value>-1&&s.value===n.matched.length-1&&wp(n.params,r.value.params));function a(c={}){return mI(c)?e[tn(t.replace)?"replace":"push"](tn(t.to)).catch(Vs):Promise.resolve()}return{route:r,href:Et(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const gI=Zd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$h,setup(t,{slots:e}){const n=fi($h(t)),{options:r}=$t(Vl),s=Et(()=>({[zh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:mp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),kc=gI;function mI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _I(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ct(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function jh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zh=(t,e,n)=>t??e??n,yI=Zd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$t(bc),s=Et(()=>t.route||r.value),i=$t(Bh,0),o=Et(()=>{let l=tn(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Et(()=>s.value.matched[o.value]);Zi(Bh,Et(()=>o.value+1)),Zi(dI,a),Zi(bc,s);const c=Pn();return Ps(()=>[c.value,a.value,t.name],([l,u,h],[f,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Br(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return qh(n.default,{Component:f,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,R=mp(f,de({},y,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return qh(n.default,{Component:R,route:l})||R}}});function qh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Np=yI;function vI(t){const e=GE(t.routes,t),n=t.parseQuery||hI,r=t.stringifyQuery||Uh,s=t.history,i=hs(),o=hs(),a=hs(),c=by(pn);let l=pn;Ir&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$a.bind(null,v=>""+v),h=$a.bind(null,uI),f=$a.bind(null,_o);function g(v,M){let k,U;return Ap(v)?(k=e.getRecordMatcher(v),U=M):U=v,e.addRoute(U,k)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function w(){return e.getRoutes().map(v=>v.record)}function R(v){return!!e.getRecordMatcher(v)}function C(v,M){if(M=de({},M||c.value),typeof v=="string"){const m=ja(n,v,M.path),_=e.resolve({path:m.path},M),I=s.createHref(m.fullPath);return de(m,_,{params:f(_.params),hash:_o(m.hash),redirectedFrom:void 0,href:I})}let k;if("path"in v)k=de({},v,{path:ja(n,v.path,M.path).path});else{const m=de({},v.params);for(const _ in m)m[_]==null&&delete m[_];k=de({},v,{params:h(m)}),M.params=h(M.params)}const U=e.resolve(k,M),fe=v.hash||"";U.params=u(f(U.params));const d=TE(r,de({},v,{hash:aI(fe),path:U.path})),p=s.createHref(d);return de({fullPath:d,hash:fe,query:r===Uh?fI(v.query):v.query||{}},U,{redirectedFrom:void 0,href:p})}function D(v){return typeof v=="string"?ja(n,v,c.value.path):de({},v)}function z(v,M){if(l!==v)return $r(8,{from:M,to:v})}function x(v){return Se(v)}function Z(v){return x(de(D(v),{replace:!0}))}function _e(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:k}=M;let U=typeof k=="function"?k(v):k;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=D(U):{path:U},U.params={}),de({query:v.query,hash:v.hash,params:"path"in U?{}:v.params},U)}}function Se(v,M){const k=l=C(v),U=c.value,fe=v.state,d=v.force,p=v.replace===!0,m=_e(k);if(m)return Se(de(D(m),{state:typeof m=="object"?de({},fe,m.state):fe,force:d,replace:p}),M||k);const _=k;_.redirectedFrom=M;let I;return!d&&AE(r,U,k)&&(I=$r(16,{to:_,from:U}),Nt(U,U,!0,!1)),(I?Promise.resolve(I):ve(_,U)).catch(T=>Qt(T)?Qt(T,2)?T:fn(T):he(T,_,U)).then(T=>{if(T){if(Qt(T,2))return Se(de({replace:p},D(T.to),{state:typeof T.to=="object"?de({},fe,T.to.state):fe,force:d}),M||_)}else T=ft(_,U,!0,p,fe);return Ke(_,U,T),T})}function re(v,M){const k=z(v,M);return k?Promise.reject(k):Promise.resolve()}function X(v){const M=pr.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(v):v()}function ve(v,M){let k;const[U,fe,d]=EI(v,M);k=za(U.reverse(),"beforeRouteLeave",v,M);for(const m of U)m.leaveGuards.forEach(_=>{k.push(yn(_,v,M))});const p=re.bind(null,v,M);return k.push(p),We(k).then(()=>{k=[];for(const m of i.list())k.push(yn(m,v,M));return k.push(p),We(k)}).then(()=>{k=za(fe,"beforeRouteUpdate",v,M);for(const m of fe)m.updateGuards.forEach(_=>{k.push(yn(_,v,M))});return k.push(p),We(k)}).then(()=>{k=[];for(const m of d)if(m.beforeEnter)if(Ct(m.beforeEnter))for(const _ of m.beforeEnter)k.push(yn(_,v,M));else k.push(yn(m.beforeEnter,v,M));return k.push(p),We(k)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),k=za(d,"beforeRouteEnter",v,M),k.push(p),We(k))).then(()=>{k=[];for(const m of o.list())k.push(yn(m,v,M));return k.push(p),We(k)}).catch(m=>Qt(m,8)?m:Promise.reject(m))}function Ke(v,M,k){a.list().forEach(U=>X(()=>U(v,M,k)))}function ft(v,M,k,U,fe){const d=z(v,M);if(d)return d;const p=M===pn,m=Ir?history.state:{};k&&(U||p?s.replace(v.fullPath,de({scroll:p&&m&&m.scroll},fe)):s.push(v.fullPath,fe)),c.value=v,Nt(v,M,k,p),fn()}let yt;function Bn(){yt||(yt=s.listen((v,M,k)=>{if(!Mi.listening)return;const U=C(v),fe=_e(U);if(fe){Se(de(fe,{replace:!0}),U).catch(Vs);return}l=U;const d=c.value;Ir&&DE(Vh(d.fullPath,k.delta),ea()),ve(U,d).catch(p=>Qt(p,12)?p:Qt(p,2)?(Se(p.to,U).then(m=>{Qt(m,20)&&!k.delta&&k.type===Ws.pop&&s.go(-1,!1)}).catch(Vs),Promise.reject()):(k.delta&&s.go(-k.delta,!1),he(p,U,d))).then(p=>{p=p||ft(U,d,!1),p&&(k.delta&&!Qt(p,8)?s.go(-k.delta,!1):k.type===Ws.pop&&Qt(p,20)&&s.go(-1,!1)),Ke(U,d,p)}).catch(Vs)}))}let vt=hs(),le=hs(),ye;function he(v,M,k){fn(v);const U=le.list();return U.length?U.forEach(fe=>fe(v,M,k)):console.error(v),Promise.reject(v)}function Gt(){return ye&&c.value!==pn?Promise.resolve():new Promise((v,M)=>{vt.add([v,M])})}function fn(v){return ye||(ye=!v,Bn(),vt.list().forEach(([M,k])=>v?k(v):M()),vt.reset()),v}function Nt(v,M,k,U){const{scrollBehavior:fe}=t;if(!Ir||!fe)return Promise.resolve();const d=!k&&NE(Vh(v.fullPath,0))||(U||!k)&&history.state&&history.state.scroll||null;return Al().then(()=>fe(v,M,d)).then(p=>p&&VE(p)).catch(p=>he(p,v,M))}const at=v=>s.go(v);let dr;const pr=new Set,Mi={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:R,getRoutes:w,resolve:C,options:t,push:x,replace:Z,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:Gt,install(v){const M=this;v.component("RouterLink",kc),v.component("RouterView",Np),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>tn(c)}),Ir&&!dr&&c.value===pn&&(dr=!0,x(s.location).catch(fe=>{}));const k={};for(const fe in pn)Object.defineProperty(k,fe,{get:()=>c.value[fe],enumerable:!0});v.provide(Vl,M),v.provide(Dp,Ld(k)),v.provide(bc,c);const U=v.unmount;pr.add(v),v.unmount=function(){pr.delete(v),pr.size<1&&(l=pn,yt&&yt(),yt=null,c.value=pn,dr=!1,ye=!1),U()}}};function We(v){return v.reduce((M,k)=>M.then(()=>X(k)),Promise.resolve())}return Mi}function EI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Br(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Br(l,c))||s.push(c))}return[n,r,s]}const xn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},II=t=>(Qd("data-v-531db362"),t=t(),Yd(),t),wI={class:"greetings"},TI={class:"green"},AI=II(()=>ne("h3",null,[oe(" You’ve successfully created a project with "),ne("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite"),oe(" + "),ne("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),oe(". ")],-1)),RI={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(e,n)=>(Dt(),Wt("div",wI,[ne("h1",TI,Z_(t.msg),1),AI]))}},PI=xn(RI,[["__scopeId","data-v-531db362"]]);const SI=t=>(Qd("data-v-fc484609"),t=t(),Yd(),t),CI=SI(()=>ne("img",{alt:"Vue logo",class:"logo",src:vE,width:"125",height:"125"},null,-1)),bI={class:"wrapper"},kI={__name:"App",setup(t){return(e,n)=>(Dt(),Wt(gt,null,[ne("header",null,[CI,ne("div",bI,[me(PI,{msg:"You did it!"}),ne("nav",null,[me(tn(kc),{to:"/"},{default:Me(()=>[oe("Home")]),_:1}),me(tn(kc),{to:"/about"},{default:Me(()=>[oe("About")]),_:1})])])]),me(tn(Np))],64))}},VI=xn(kI,[["__scopeId","data-v-fc484609"]]),DI="modulepreload",NI=function(t){return"/fbvue3-exp/"+t},Hh={},qa=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=NI(i),i in Hh)return;Hh[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":DI,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};const OI={},MI={class:"item"},xI={class:"details"};function LI(t,e){return Dt(),Wt("div",MI,[ne("i",null,[xa(t.$slots,"icon",{},void 0,!0)]),ne("div",xI,[ne("h3",null,[xa(t.$slots,"heading",{},void 0,!0)]),xa(t.$slots,"default",{},void 0,!0)])])}const fs=xn(OI,[["render",LI],["__scopeId","data-v-40a5c0e5"]]),FI={},UI={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},BI=ne("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),$I=[BI];function jI(t,e){return Dt(),Wt("svg",UI,$I)}const zI=xn(FI,[["render",jI]]),qI={},HI={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},KI=ne("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),WI=[KI];function GI(t,e){return Dt(),Wt("svg",HI,WI)}const QI=xn(qI,[["render",GI]]),YI={},JI={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},XI=ne("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),ZI=[XI];function ew(t,e){return Dt(),Wt("svg",JI,ZI)}const tw=xn(YI,[["render",ew]]),nw={},rw={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},sw=ne("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),iw=[sw];function ow(t,e){return Dt(),Wt("svg",rw,iw)}const aw=xn(nw,[["render",ow]]),cw={},lw={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},uw=ne("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),hw=[uw];function fw(t,e){return Dt(),Wt("svg",lw,hw)}const dw=xn(cw,[["render",fw]]),pw=ne("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),gw=ne("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),mw=ne("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),_w=ne("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),yw=ne("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),vw=ne("a",{href:"https://on.cypress.io/component",target:"_blank",rel:"noopener"},"Cypress Component Testing",-1),Ew=ne("br",null,null,-1),Iw=ne("code",null,"README.md",-1),ww=ne("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),Tw=ne("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),Aw=ne("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),Rw=ne("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),Pw=ne("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),Sw=ne("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),Cw=ne("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),bw=ne("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),kw=ne("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),Vw=ne("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),Dw={__name:"TheWelcome",setup(t){return(e,n)=>(Dt(),Wt(gt,null,[me(fs,null,{icon:Me(()=>[me(zI)]),heading:Me(()=>[oe("Documentation")]),default:Me(()=>[oe(" Vue’s "),pw,oe(" provides you with all information you need to get started. ")]),_:1}),me(fs,null,{icon:Me(()=>[me(QI)]),heading:Me(()=>[oe("Tooling")]),default:Me(()=>[oe(" This project is served and bundled with "),gw,oe(". The recommended IDE setup is "),mw,oe(" + "),_w,oe(". If you need to test your components and web pages, check out "),yw,oe(" and "),vw,oe(". "),Ew,oe(" More instructions are available in "),Iw,oe(". ")]),_:1}),me(fs,null,{icon:Me(()=>[me(tw)]),heading:Me(()=>[oe("Ecosystem")]),default:Me(()=>[oe(" Get official tools and libraries for your project: "),ww,oe(", "),Tw,oe(", "),Aw,oe(", and "),Rw,oe(". If you need more resources, we suggest paying "),Pw,oe(" a visit. ")]),_:1}),me(fs,null,{icon:Me(()=>[me(aw)]),heading:Me(()=>[oe("Community")]),default:Me(()=>[oe(" Got stuck? Ask your question on "),Sw,oe(", our official Discord server, or "),Cw,oe(". You should also subscribe to "),bw,oe(" and follow the official "),kw,oe(" twitter account for latest news in the Vue world. ")]),_:1}),me(fs,null,{icon:Me(()=>[me(dw)]),heading:Me(()=>[oe("Support Vue")]),default:Me(()=>[oe(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),Vw,oe(". ")]),_:1})],64))}},Nw={__name:"HomeView",setup(t){return(e,n)=>(Dt(),Wt("main",null,[me(Dw)]))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Op=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ow=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Op(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ow(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Mw;const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xw=function(t){const e=Op(t);return Mp.encodeByteArray(e,!0)},yo=function(t){return xw(t).replace(/\./g,"")},xp=function(t){try{return Mp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fw=()=>Lw().__FIREBASE_DEFAULTS__,Uw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xp(t[1]);return e&&JSON.parse(e)},Dl=()=>{try{return Fw()||Uw()||Bw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lp=t=>{var e,n;return(n=(e=Dl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$w=t=>{const e=Lp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Fp=()=>{var t;return(t=Dl())===null||t===void 0?void 0:t.config},Up=t=>{var e;return(e=Dl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function zw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[yo(JSON.stringify(n)),yo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function Hw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ww(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gw(){try{return typeof indexedDB=="object"}catch{return!1}}function Qw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Yw,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,di.prototype.create)}}class di{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Jw(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new hn(s,a,r)}}function Jw(t,e){return t.replace(Xw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Xw=/\{\$([^}]+)}/g;function Zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Kh(i)&&Kh(o)){if(!vo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function vs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function eT(t,e){const n=new tT(t,e);return n.subscribe.bind(n)}class tT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ha),s.error===void 0&&(s.error=Ha),s.complete===void 0&&(s.complete=Ha);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ha(){}/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zn="[DEFAULT]";/**
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
 */class rT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iT(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sT(t){return t===zn?void 0:t}function iT(t){return t.instantiationMode==="EAGER"}/**
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
 */class oT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const aT={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},cT=se.INFO,lT={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},uT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nl{constructor(e){this.name=e,this._logLevel=cT,this._logHandler=uT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const hT=(t,e)=>e.some(n=>t instanceof n);let Wh,Gh;function fT(){return Wh||(Wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dT(){return Gh||(Gh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bp=new WeakMap,Vc=new WeakMap,$p=new WeakMap,Ka=new WeakMap,Ol=new WeakMap;function pT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bp.set(n,t)}).catch(()=>{}),Ol.set(e,t),e}function gT(t){if(Vc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vc.set(t,e)}let Dc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$p.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mT(t){Dc=t(Dc)}function _T(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wa(this),e,...n);return $p.set(r,e.sort?e.sort():[e]),Cn(r)}:dT().includes(t)?function(...e){return t.apply(Wa(this),e),Cn(Bp.get(this))}:function(...e){return Cn(t.apply(Wa(this),e))}}function yT(t){return typeof t=="function"?_T(t):(t instanceof IDBTransaction&&gT(t),hT(t,fT())?new Proxy(t,Dc):t)}function Cn(t){if(t instanceof IDBRequest)return pT(t);if(Ka.has(t))return Ka.get(t);const e=yT(t);return e!==t&&(Ka.set(t,e),Ol.set(e,t)),e}const Wa=t=>Ol.get(t);function vT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Cn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Cn(o.result),c.oldVersion,c.newVersion,Cn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ET=["get","getKey","getAll","getAllKeys","count"],IT=["put","add","delete","clear"],Ga=new Map;function Qh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ga.get(e))return Ga.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=IT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ET.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ga.set(e,i),i}mT(t=>({...t,get:(e,n,r)=>Qh(e,n)||t.get(e,n,r),has:(e,n)=>!!Qh(e,n)||t.has(e,n)}));/**
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
 */class wT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nc="@firebase/app",Yh="0.9.19";/**
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
 */const tr=new Nl("@firebase/app"),AT="@firebase/app-compat",RT="@firebase/analytics-compat",PT="@firebase/analytics",ST="@firebase/app-check-compat",CT="@firebase/app-check",bT="@firebase/auth",kT="@firebase/auth-compat",VT="@firebase/database",DT="@firebase/database-compat",NT="@firebase/functions",OT="@firebase/functions-compat",MT="@firebase/installations",xT="@firebase/installations-compat",LT="@firebase/messaging",FT="@firebase/messaging-compat",UT="@firebase/performance",BT="@firebase/performance-compat",$T="@firebase/remote-config",jT="@firebase/remote-config-compat",zT="@firebase/storage",qT="@firebase/storage-compat",HT="@firebase/firestore",KT="@firebase/firestore-compat",WT="firebase",GT="10.4.0";/**
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
 */const Oc="[DEFAULT]",QT={[Nc]:"fire-core",[AT]:"fire-core-compat",[PT]:"fire-analytics",[RT]:"fire-analytics-compat",[CT]:"fire-app-check",[ST]:"fire-app-check-compat",[bT]:"fire-auth",[kT]:"fire-auth-compat",[VT]:"fire-rtdb",[DT]:"fire-rtdb-compat",[NT]:"fire-fn",[OT]:"fire-fn-compat",[MT]:"fire-iid",[xT]:"fire-iid-compat",[LT]:"fire-fcm",[FT]:"fire-fcm-compat",[UT]:"fire-perf",[BT]:"fire-perf-compat",[$T]:"fire-rc",[jT]:"fire-rc-compat",[zT]:"fire-gcs",[qT]:"fire-gcs-compat",[HT]:"fire-fst",[KT]:"fire-fst-compat","fire-js":"fire-js",[WT]:"fire-js-all"};/**
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
 */const Eo=new Map,Mc=new Map;function YT(t,e){try{t.container.addComponent(e)}catch(n){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jr(t){const e=t.name;if(Mc.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;Mc.set(e,t);for(const n of Eo.values())YT(n,t);return!0}function Ml(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const JT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bn=new di("app","Firebase",JT);/**
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
 */class XT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const es=GT;function jp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw bn.create("bad-app-name",{appName:String(s)});if(n||(n=Fp()),!n)throw bn.create("no-options");const i=Eo.get(s);if(i){if(vo(n,i.options)&&vo(r,i.config))return i;throw bn.create("duplicate-app",{appName:s})}const o=new oT(s);for(const c of Mc.values())o.addComponent(c);const a=new XT(n,r,o);return Eo.set(s,a),a}function zp(t=Oc){const e=Eo.get(t);if(!e&&t===Oc&&Fp())return jp();if(!e)throw bn.create("no-app",{appName:t});return e}function kn(t,e,n){var r;let s=(r=QT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(a.join(" "));return}jr(new er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ZT="firebase-heartbeat-database",e0=1,Gs="firebase-heartbeat-store";let Qa=null;function qp(){return Qa||(Qa=vT(ZT,e0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gs)}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),Qa}async function t0(t){try{return await(await qp()).transaction(Gs).objectStore(Gs).get(Hp(t))}catch(e){if(e instanceof hn)tr.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tr.warn(n.message)}}}async function Jh(t,e){try{const r=(await qp()).transaction(Gs,"readwrite");await r.objectStore(Gs).put(e,Hp(t)),await r.done}catch(n){if(n instanceof hn)tr.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tr.warn(r.message)}}}function Hp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const n0=1024,r0=30*24*60*60*1e3;class s0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new o0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=r0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xh(),{heartbeatsToSend:n,unsentEntries:r}=i0(this._heartbeatsCache.heartbeats),s=yo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xh(){return new Date().toISOString().substring(0,10)}function i0(t,e=n0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class o0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gw()?Qw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await t0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zh(t){return yo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function a0(t){jr(new er("platform-logger",e=>new wT(e),"PRIVATE")),jr(new er("heartbeat",e=>new s0(e),"PRIVATE")),kn(Nc,Yh,t),kn(Nc,Yh,"esm2017"),kn("fire-js","")}a0("");var c0="firebase",l0="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn(c0,l0,"app");var u0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,xl=xl||{},W=u0||self;function ta(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function gi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function h0(t){return Object.prototype.hasOwnProperty.call(t,Ya)&&t[Ya]||(t[Ya]=++f0)}var Ya="closure_uid_"+(1e9*Math.random()>>>0),f0=0;function d0(t,e,n){return t.call.apply(t.bind,arguments)}function p0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=d0:et=p0,et.apply(null,arguments)}function ji(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Ln(){this.s=this.s,this.o=this.o}var g0=0;Ln.prototype.s=!1;Ln.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),g0!=0)&&h0(this)};Ln.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Kp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ll(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ef(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ta(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var m0=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",()=>{},e),W.removeEventListener("test",()=>{},e)}catch{}return t}();function Qs(t){return/^[\s\xa0]*$/.test(t)}function na(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Ft(t){return na().indexOf(t)!=-1}function Fl(t){return Fl[" "](t),t}Fl[" "]=function(){};function _0(t,e){var n=lA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var y0=Ft("Opera"),zr=Ft("Trident")||Ft("MSIE"),Wp=Ft("Edge"),xc=Wp||zr,Gp=Ft("Gecko")&&!(na().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge"))&&!(Ft("Trident")||Ft("MSIE"))&&!Ft("Edge"),v0=na().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge");function Qp(){var t=W.document;return t?t.documentMode:void 0}var Lc;e:{var Ja="",Xa=function(){var t=na();if(Gp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Wp)return/Edge\/([\d\.]+)/.exec(t);if(zr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(v0)return/WebKit\/(\S+)/.exec(t);if(y0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xa&&(Ja=Xa?Xa[1]:""),zr){var Za=Qp();if(Za!=null&&Za>parseFloat(Ja)){Lc=String(Za);break e}}Lc=Ja}var Fc;if(W.document&&zr){var tf=Qp();Fc=tf||parseInt(Lc,10)||void 0}else Fc=void 0;var E0=Fc;function Ys(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Gp){e:{try{Fl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:I0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ys.$.h.call(this)}}$e(Ys,tt);var I0={2:"touch",3:"pen",4:"mouse"};Ys.prototype.h=function(){Ys.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var mi="closure_listenable_"+(1e6*Math.random()|0),w0=0;function T0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++w0,this.fa=this.ia=!1}function ra(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ul(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function A0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Yp(t){const e={};for(const n in t)e[n]=t[n];return e}const nf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jp(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<nf.length;i++)n=nf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function sa(t){this.src=t,this.g={},this.h=0}sa.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Bc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new T0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Uc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Kp(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ra(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Bc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Bl="closure_lm_"+(1e6*Math.random()|0),ec={};function Xp(t,e,n,r,s){if(r&&r.once)return eg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Xp(t,e[i],n,r,s);return null}return n=zl(n),t&&t[mi]?t.O(e,n,gi(r)?!!r.capture:!!r,s):Zp(t,e,n,!1,r,s)}function Zp(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=gi(s)?!!s.capture:!!s,a=jl(t);if(a||(t[Bl]=a=new sa(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=R0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)m0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(ng(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function R0(){function t(n){return e.call(t.src,t.listener,n)}const e=P0;return t}function eg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)eg(t,e[i],n,r,s);return null}return n=zl(n),t&&t[mi]?t.P(e,n,gi(r)?!!r.capture:!!r,s):Zp(t,e,n,!0,r,s)}function tg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)tg(t,e[i],n,r,s);else r=gi(r)?!!r.capture:!!r,n=zl(n),t&&t[mi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Bc(i,n,r,s),-1<n&&(ra(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=jl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Bc(e,n,r,s)),(n=-1<t?e[t]:null)&&$l(n))}function $l(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[mi])Uc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ng(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jl(e))?(Uc(n,t),n.h==0&&(n.src=null,e[Bl]=null)):ra(t)}}}function ng(t){return t in ec?ec[t]:ec[t]="on"+t}function P0(t,e){if(t.fa)t=!0;else{e=new Ys(e,this);var n=t.listener,r=t.la||t.src;t.ia&&$l(t),t=n.call(r,e)}return t}function jl(t){return t=t[Bl],t instanceof sa?t:null}var tc="__closure_events_fn_"+(1e9*Math.random()>>>0);function zl(t){return typeof t=="function"?t:(t[tc]||(t[tc]=function(e){return t.handleEvent(e)}),t[tc])}function Be(){Ln.call(this),this.i=new sa(this),this.S=this,this.J=null}$e(Be,Ln);Be.prototype[mi]=!0;Be.prototype.removeEventListener=function(t,e,n,r){tg(this,t,e,n,r)};function He(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var s=e;e=new tt(r,t),Jp(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=zi(o,r,!0,e)&&s}if(o=e.g=t,s=zi(o,r,!0,e)&&s,s=zi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=zi(o,r,!1,e)&&s}Be.prototype.N=function(){if(Be.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ra(n[r]);delete t.g[e],t.h--}}this.J=null};Be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Be.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function zi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Uc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ql=W.JSON.stringify;class S0{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function C0(){var t=Hl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class b0{constructor(){this.h=this.g=null}add(e,n){const r=rg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var rg=new S0(()=>new k0,t=>t.reset());class k0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function V0(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function D0(t){W.setTimeout(()=>{throw t},0)}let Js,Xs=!1,Hl=new b0,sg=()=>{const t=W.Promise.resolve(void 0);Js=()=>{t.then(N0)}};var N0=()=>{for(var t;t=C0();){try{t.h.call(t.g)}catch(n){D0(n)}var e=rg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xs=!1};function ia(t,e){Be.call(this),this.h=t||1,this.g=e||W,this.j=et(this.qb,this),this.l=Date.now()}$e(ia,Be);V=ia.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),He(this,"tick"),this.ga&&(Kl(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Kl(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){ia.$.N.call(this),Kl(this),delete this.g};function Wl(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function ig(t){t.g=Wl(()=>{t.g=null,t.i&&(t.i=!1,ig(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class O0 extends Ln{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ig(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zs(t){Ln.call(this),this.h=t,this.g={}}$e(Zs,Ln);var rf=[];function og(t,e,n,r){Array.isArray(n)||(n&&(rf[0]=n.toString()),n=rf);for(var s=0;s<n.length;s++){var i=Xp(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function ag(t){Ul(t.g,function(e,n){this.g.hasOwnProperty(n)&&$l(e)},t),t.g={}}Zs.prototype.N=function(){Zs.$.N.call(this),ag(this)};Zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function oa(){this.g=!0}oa.prototype.Ea=function(){this.g=!1};function M0(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function x0(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Rr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+F0(t,n)+(r?" "+r:"")})}function L0(t,e){t.info(function(){return"TIMEOUT: "+e})}oa.prototype.info=function(){};function F0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ql(n)}catch{return e}}var ar={},sf=null;function aa(){return sf=sf||new Be}ar.Ta="serverreachability";function cg(t){tt.call(this,ar.Ta,t)}$e(cg,tt);function ei(t){const e=aa();He(e,new cg(e))}ar.STAT_EVENT="statevent";function lg(t,e){tt.call(this,ar.STAT_EVENT,t),this.stat=e}$e(lg,tt);function ot(t){const e=aa();He(e,new lg(e,t))}ar.Ua="timingevent";function ug(t,e){tt.call(this,ar.Ua,t),this.size=e}$e(ug,tt);function _i(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var ca={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},hg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gl(){}Gl.prototype.h=null;function of(t){return t.h||(t.h=t.i())}function fg(){}var yi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ql(){tt.call(this,"d")}$e(Ql,tt);function Yl(){tt.call(this,"c")}$e(Yl,tt);var $c;function la(){}$e(la,Gl);la.prototype.g=function(){return new XMLHttpRequest};la.prototype.i=function(){return{}};$c=new la;function vi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Zs(this),this.P=U0,t=xc?125:void 0,this.V=new ia(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dg}function dg(){this.i=null,this.g="",this.h=!1}var U0=45e3,jc={},Io={};V=vi.prototype;V.setTimeout=function(t){this.P=t};function zc(t,e,n){t.L=1,t.v=ha(sn(e)),t.s=n,t.S=!0,pg(t,null)}function pg(t,e){t.G=Date.now(),Ei(t),t.A=sn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),wg(n.i,"t",r),t.C=0,n=t.l.J,t.h=new dg,t.g=zg(t.l,n?e:null,!t.s),0<t.O&&(t.M=new O0(et(t.Pa,t,t.g),t.O)),og(t.U,t.g,"readystatechange",t.nb),e=t.I?Yp(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ei(),M0(t.j,t.u,t.A,t.m,t.W,t.s)}V.nb=function(t){t=t.target;const e=this.M;e&&Ut(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=Ut(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||xc||this.g&&(this.h.h||this.g.ja()||uf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ei(3):ei(2)),ua(this);var n=this.g.da();this.ca=n;t:if(gg(this)){var r=uf(this.g);t="";var s=r.length,i=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wn(this),Ns(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,x0(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qs(a)){var l=a;break t}}l=null}if(n=l)Rr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qc(this,n);else{this.i=!1,this.o=3,ot(12),Wn(this),Ns(this);break e}}this.S?(mg(this,u,o),xc&&this.i&&u==3&&(og(this.U,this.V,"tick",this.mb),this.V.start())):(Rr(this.j,this.m,o,null),qc(this,o)),u==4&&Wn(this),this.i&&!this.J&&(u==4?Ug(this.l,this):(this.i=!1,Ei(this)))}else oA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),Wn(this),Ns(this)}}}catch{}finally{}};function gg(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function mg(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=B0(t,n),s==Io){e==4&&(t.o=4,ot(14),r=!1),Rr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==jc){t.o=4,ot(15),Rr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Rr(t.j,t.m,s,null),qc(t,s);gg(t)&&s!=Io&&s!=jc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nu(e),e.M=!0,ot(11))):(Rr(t.j,t.m,n,"[Invalid Chunked Response]"),Wn(t),Ns(t))}V.mb=function(){if(this.g){var t=Ut(this.g),e=this.g.ja();this.C<e.length&&(ua(this),mg(this,t,e),this.i&&t!=4&&Ei(this))}};function B0(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Io:(n=Number(e.substring(n,r)),isNaN(n)?jc:(r+=1,r+n>e.length?Io:(e=e.slice(r,r+n),t.C=r+n,e)))}V.cancel=function(){this.J=!0,Wn(this)};function Ei(t){t.Y=Date.now()+t.P,_g(t,t.P)}function _g(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_i(et(t.lb,t),e)}function ua(t){t.B&&(W.clearTimeout(t.B),t.B=null)}V.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(L0(this.j,this.A),this.L!=2&&(ei(),ot(17)),Wn(this),this.o=2,Ns(this)):_g(this,this.Y-t)};function Ns(t){t.l.H==0||t.J||Ug(t.l,t)}function Wn(t){ua(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Kl(t.V),ag(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function qc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Hc(n.i,t))){if(!t.K&&Hc(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ao(n),ga(n);else break e;tu(n),ot(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=_i(et(n.ib,n),6e3));if(1>=Rg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Gn(n,11)}else if((t.K||n.g==t)&&Ao(n),!Qs(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Jl(i,i.h),i.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,we(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=jg(r,r.J?r.pa:null,r.Y),o.K){Pg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(ua(a),Ei(a)),r.g=o}else Lg(r);0<n.j.length&&ma(n)}else l[0]!="stop"&&l[0]!="close"||Gn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Gn(n,7):eu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ei(4)}catch{}}function $0(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ta(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function j0(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ta(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function yg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ta(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=j0(t),r=$0(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var vg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function z0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Xn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Xn){this.h=t.h,wo(this,t.j),this.s=t.s,this.g=t.g,To(this,t.m),this.l=t.l;var e=t.i,n=new ti;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),af(this,n),this.o=t.o}else t&&(e=String(t).match(vg))?(this.h=!1,wo(this,e[1]||"",!0),this.s=Es(e[2]||""),this.g=Es(e[3]||"",!0),To(this,e[4]),this.l=Es(e[5]||"",!0),af(this,e[6]||"",!0),this.o=Es(e[7]||"")):(this.h=!1,this.i=new ti(null,this.h))}Xn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Is(e,cf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Is(e,cf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Is(n,n.charAt(0)=="/"?K0:H0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Is(n,G0)),t.join("")};function sn(t){return new Xn(t)}function wo(t,e,n){t.j=n?Es(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function To(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function af(t,e,n){e instanceof ti?(t.i=e,Q0(t.i,t.h)):(n||(e=Is(e,W0)),t.i=new ti(e,t.h))}function we(t,e,n){t.i.set(e,n)}function ha(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Es(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Is(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,q0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function q0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var cf=/[#\/\?@]/g,H0=/[#\?:]/g,K0=/[#\?]/g,W0=/[#\?@]/g,G0=/#/g;function ti(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fn(t){t.g||(t.g=new Map,t.h=0,t.i&&z0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=ti.prototype;V.add=function(t,e){Fn(this),this.i=null,t=ts(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Eg(t,e){Fn(t),e=ts(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ig(t,e){return Fn(t),e=ts(t,e),t.g.has(e)}V.forEach=function(t,e){Fn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){Fn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){Fn(this);let e=[];if(typeof t=="string")Ig(this,t)&&(e=e.concat(this.g.get(ts(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Fn(this),this.i=null,t=ts(this,t),Ig(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function wg(t,e,n){Eg(t,e),0<n.length&&(t.i=null,t.g.set(ts(t,e),Ll(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ts(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Q0(t,e){e&&!t.j&&(Fn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Eg(this,r),wg(this,s,n))},t)),t.j=e}var Y0=class{constructor(t,e){this.g=t,this.map=e}};function Tg(t){this.l=t||J0,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var J0=10;function Ag(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Rg(t){return t.h?1:t.g?t.g.size:0}function Hc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jl(t,e){t.g?t.g.add(e):t.h=e}function Pg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Tg.prototype.cancel=function(){if(this.i=Sg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ll(t.i)}var X0=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function Z0(){this.g=new X0}function eA(t,e,n){const r=n||"";try{yg(t,function(s,i){let o=s;gi(s)&&(o=ql(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function tA(t,e){const n=new oa;if(W.Image){const r=new Image;r.onload=ji(qi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ji(qi,n,r,"TestLoadImage: error",!1,e),r.onabort=ji(qi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ji(qi,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function qi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function fa(t){this.l=t.ec||null,this.j=t.ob||!1}$e(fa,Gl);fa.prototype.g=function(){return new da(this.l,this.j)};fa.prototype.i=function(t){return function(){return t}}({});function da(t,e){Be.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Xl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(da,Be);var Xl=0;V=da.prototype;V.open=function(t,e){if(this.readyState!=Xl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ni(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ii(this)),this.readyState=Xl};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Cg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ii(this):ni(this),this.readyState==3&&Cg(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Ii(this))};V.Ya=function(t){this.g&&(this.response=t,Ii(this))};V.ka=function(){this.g&&Ii(this)};function Ii(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ni(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ni(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nA=W.JSON.parse;function Ce(t){Be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=bg,this.L=this.M=!1}$e(Ce,Be);var bg="",rA=/^https?$/i,sA=["POST","PUT"];V=Ce.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$c.g(),this.C=this.u?of(this.u):of($c),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){lf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=W.FormData&&t instanceof W.FormData,!(0<=Kp(sA,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Dg(this),0<this.B&&((this.L=iA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=Wl(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){lf(this,i)}};function iA(t){return zr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof xl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function lf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,kg(t),pa(t)}function kg(t){t.F||(t.F=!0,He(t,"complete"),He(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),pa(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pa(this,!0)),Ce.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?Vg(this):this.kb())};V.kb=function(){Vg(this)};function Vg(t){if(t.h&&typeof xl<"u"&&(!t.C[1]||Ut(t)!=4||t.da()!=2)){if(t.v&&Ut(t)==4)Wl(t.La,0,t);else if(He(t,"readystatechange"),Ut(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(vg)[1]||null;!s&&W.self&&W.self.location&&(s=W.self.location.protocol.slice(0,-1)),r=!rA.test(s?s.toLowerCase():"")}n=r}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var i=2<Ut(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",kg(t)}}finally{pa(t)}}}}function pa(t,e){if(t.g){Dg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=r}catch{}}}function Dg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function Ut(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nA(e)}};function uf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case bg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function oA(t){const e={};t=(t.g&&2<=Ut(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Qs(t[r]))continue;var n=V0(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}A0(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ng(t){let e="";return Ul(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ng(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function ds(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Og(t){this.Ga=0,this.j=[],this.l=new oa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ds("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ds("baseRetryDelayMs",5e3,t),this.hb=ds("retryDelaySeedMs",1e4,t),this.eb=ds("forwardChannelMaxRetries",2,t),this.xa=ds("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Tg(t&&t.concurrentRequestLimit),this.Ja=new Z0,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=Og.prototype;V.ra=8;V.H=1;function eu(t){if(Mg(t),t.H==3){var e=t.W++,n=sn(t.I);if(we(n,"SID",t.K),we(n,"RID",e),we(n,"TYPE","terminate"),wi(t,n),e=new vi(t,t.l,e),e.L=2,e.v=ha(sn(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=zg(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ei(e)}$g(t)}function ga(t){t.g&&(nu(t),t.g.cancel(),t.g=null)}function Mg(t){ga(t),t.u&&(W.clearTimeout(t.u),t.u=null),Ao(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function ma(t){if(!Ag(t.i)&&!t.m){t.m=!0;var e=t.Na;Js||sg(),Xs||(Js(),Xs=!0),Hl.add(e,t),t.C=0}}function aA(t,e){return Rg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=_i(et(t.Na,t,e),Bg(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new vi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Yp(i),Jp(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xg(this,s,e),n=sn(this.I),we(n,"RID",t),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),wi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Ng(i)))+"&"+e:this.o&&Zl(n,this.o,i)),Jl(this.i,s),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),s.aa=!0,zc(s,n,null)):zc(s,n,e),this.H=2}}else this.H==3&&(t?hf(this,t):this.j.length==0||Ag(this.i)||hf(this))};function hf(t,e){var n;e?n=e.m:n=t.W++;const r=sn(t.I);we(r,"SID",t.K),we(r,"RID",n),we(r,"AID",t.V),wi(t,r),t.o&&t.s&&Zl(r,t.o,t.s),n=new vi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=xg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Jl(t.i,n),zc(n,r,e)}function wi(t,e){t.na&&Ul(t.na,function(n,r){we(e,r,n)}),t.h&&yg({},function(n,r){we(e,r,n)})}function xg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?et(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{eA(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Lg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Js||sg(),Xs||(Js(),Xs=!0),Hl.add(e,t),t.A=0}}function tu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=_i(et(t.Ma,t),Bg(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,Fg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=_i(et(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),ga(this),Fg(this))};function nu(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Fg(t){t.g=new vi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=sn(t.wa);we(e,"RID","rpc"),we(e,"SID",t.K),we(e,"AID",t.V),we(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&we(e,"TO",t.qa),we(e,"TYPE","xmlhttp"),wi(t,e),t.o&&t.s&&Zl(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ha(sn(e)),n.s=null,n.S=!0,pg(n,t)}V.ib=function(){this.v!=null&&(this.v=null,ga(this),tu(this),ot(19))};function Ao(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Ug(t,e){var n=null;if(t.g==e){Ao(t),nu(t),t.g=null;var r=2}else if(Hc(t.i,e))n=e.F,Pg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=aa(),He(r,new ug(r,n)),ma(t)}else Lg(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&aA(t,e)||r==2&&tu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Gn(t,5);break;case 4:Gn(t,10);break;case 3:Gn(t,6);break;default:Gn(t,2)}}}function Bg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Gn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=et(t.pb,t);n||(n=new Xn("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||wo(n,"https"),ha(n)),tA(n.toString(),r)}else ot(2);t.H=0,t.h&&t.h.za(e),$g(t),Mg(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))};function $g(t){if(t.H=0,t.ma=[],t.h){const e=Sg(t.i);(e.length!=0||t.j.length!=0)&&(ef(t.ma,e),ef(t.ma,t.j),t.i.i.length=0,Ll(t.j),t.j.length=0),t.h.ya()}}function jg(t,e,n){var r=n instanceof Xn?sn(n):new Xn(n);if(r.g!="")e&&(r.g=e+"."+r.g),To(r,r.m);else{var s=W.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Xn(null);r&&wo(i,r),e&&(i.g=e),s&&To(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&we(r,n,e),we(r,"VER",t.ra),wi(t,r),r}function zg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ce(new fa({ob:!0})):new Ce(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function qg(){}V=qg.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Ro(){if(zr&&!(10<=Number(E0)))throw Error("Environmental error: no available transport.")}Ro.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){Be.call(this),this.g=new Og(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Qs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ns(this)}$e(_t,Be);_t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=jg(t,null,t.Y),ma(t)};_t.prototype.close=function(){eu(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ql(t),t=n);e.j.push(new Y0(e.fb++,t)),e.H==3&&ma(e)};_t.prototype.N=function(){this.g.h=null,delete this.j,eu(this.g),delete this.g,_t.$.N.call(this)};function Hg(t){Ql.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(Hg,Ql);function Kg(){Yl.call(this),this.status=1}$e(Kg,Yl);function ns(t){this.g=t}$e(ns,qg);ns.prototype.Ba=function(){He(this.g,"a")};ns.prototype.Aa=function(t){He(this.g,new Hg(t))};ns.prototype.za=function(t){He(this.g,new Kg)};ns.prototype.ya=function(){He(this.g,"b")};function cA(){this.blockSize=-1}function bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$e(bt,cA);bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function nc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}bt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)nc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){nc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){nc(this,r),s=0;break}}this.h=s,this.i+=e};bt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function pe(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var lA={};function ru(t){return-128<=t&&128>t?_0(t,function(e){return new pe([e|0],0>e?-1:0)}):new pe([t|0],0>t?-1:0)}function Bt(t){if(isNaN(t)||!isFinite(t))return kr;if(0>t)return ze(Bt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Kc;return new pe(e,0)}function Wg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ze(Wg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Bt(Math.pow(e,8)),r=kr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Bt(Math.pow(e,i)),r=r.R(i).add(Bt(o))):(r=r.R(n),r=r.add(Bt(o)))}return r}var Kc=4294967296,kr=ru(0),Wc=ru(1),ff=ru(16777216);V=pe.prototype;V.ea=function(){if(It(this))return-ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Kc+r)*e,e*=Kc}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Xt(this))return"0";if(It(this))return"-"+ze(this).toString(t);for(var e=Bt(Math.pow(t,6)),n=this,r="";;){var s=So(n,e).g;n=Po(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Xt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Xt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function It(t){return t.h==-1}V.X=function(t){return t=Po(this,t),It(t)?-1:Xt(t)?0:1};function ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new pe(n,~t.h).add(Wc)}V.abs=function(){return It(this)?ze(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new pe(n,n[n.length-1]&-2147483648?-1:0)};function Po(t,e){return t.add(ze(e))}V.R=function(t){if(Xt(this)||Xt(t))return kr;if(It(this))return It(t)?ze(this).R(ze(t)):ze(ze(this).R(t));if(It(t))return ze(this.R(ze(t)));if(0>this.X(ff)&&0>t.X(ff))return Bt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Hi(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Hi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Hi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Hi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new pe(n,0)};function Hi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ps(t,e){this.g=t,this.h=e}function So(t,e){if(Xt(e))throw Error("division by zero");if(Xt(t))return new ps(kr,kr);if(It(t))return e=So(ze(t),e),new ps(ze(e.g),ze(e.h));if(It(e))return e=So(t,ze(e)),new ps(ze(e.g),e.h);if(30<t.g.length){if(It(t)||It(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Wc,r=e;0>=r.X(t);)n=df(n),r=df(r);var s=yr(n,1),i=yr(r,1);for(r=yr(r,2),n=yr(n,2);!Xt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=yr(r,1),n=yr(n,1)}return e=Po(t,s.R(e)),new ps(s,e)}for(s=kr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Bt(n),o=i.R(e);It(o)||0<o.X(t);)n-=r,i=Bt(n),o=i.R(e);Xt(i)&&(i=Wc),s=s.add(i),t=Po(t,o)}return new ps(s,t)}V.gb=function(t){return So(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new pe(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new pe(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new pe(n,this.h^t.h)};function df(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new pe(n,t.h)}function yr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new pe(s,t.h)}Ro.prototype.createWebChannel=Ro.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;ca.NO_ERROR=0;ca.TIMEOUT=8;ca.HTTP_ERROR=6;hg.COMPLETE="complete";fg.EventType=yi;yi.OPEN="a";yi.CLOSE="b";yi.ERROR="c";yi.MESSAGE="d";Be.prototype.listen=Be.prototype.O;Ce.prototype.listenOnce=Ce.prototype.P;Ce.prototype.getLastError=Ce.prototype.Sa;Ce.prototype.getLastErrorCode=Ce.prototype.Ia;Ce.prototype.getStatus=Ce.prototype.da;Ce.prototype.getResponseJson=Ce.prototype.Wa;Ce.prototype.getResponseText=Ce.prototype.ja;Ce.prototype.send=Ce.prototype.ha;Ce.prototype.setWithCredentials=Ce.prototype.Oa;bt.prototype.digest=bt.prototype.l;bt.prototype.reset=bt.prototype.reset;bt.prototype.update=bt.prototype.j;pe.prototype.add=pe.prototype.add;pe.prototype.multiply=pe.prototype.R;pe.prototype.modulo=pe.prototype.gb;pe.prototype.compare=pe.prototype.X;pe.prototype.toNumber=pe.prototype.ea;pe.prototype.toString=pe.prototype.toString;pe.prototype.getBits=pe.prototype.D;pe.fromNumber=Bt;pe.fromString=Wg;var uA=function(){return new Ro},hA=function(){return aa()},rc=ca,fA=hg,dA=ar,pf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ki=fg,pA=Ce,gA=bt,Vr=pe;const gf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Nl("@firebase/firestore");function gs(){return nr.logLevel}function L(t,...e){if(nr.logLevel<=se.DEBUG){const n=e.map(su);nr.debug(`Firestore (${rs}): ${t}`,...n)}}function on(t,...e){if(nr.logLevel<=se.ERROR){const n=e.map(su);nr.error(`Firestore (${rs}): ${t}`,...n)}}function qr(t,...e){if(nr.logLevel<=se.WARN){const n=e.map(su);nr.warn(`Firestore (${rs}): ${t}`,...n)}}function su(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw on(e),new Error(e)}function Ae(t,e){t||H()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class _A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yA{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new Gg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new Qe(e)}}class vA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class EA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new IA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=TA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Hr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Oe(0,0))}static max(){return new Q(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ri.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ri?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends ri{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const AA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends ri{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return AA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new O(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new O(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new O(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(Te.fromString(e))}static fromName(e){return new B(Te.fromString(e).popFirst(5))}static empty(){return new B(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new Te(e.slice()))}}function RA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new Nn(s,B.empty(),e)}function PA(t){return new Nn(t.readTime,t.key,-1)}class Nn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nn(Q.min(),B.empty(),-1)}static max(){return new Nn(Q.max(),B.empty(),-1)}}function SA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==CA)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class iu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}iu.ae=-1;function _a(t){return t==null}function Co(t){return t===0&&1/t==-1/0}function kA(t){return typeof t=="number"&&Number.isInteger(t)&&!Co(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wi(this.root,e,this.comparator,!0)}}class Wi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??je.RED,this.left=s??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,n,r,s,i){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _f(this.data.getIterator())}getIteratorFrom(e){return new _f(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class _f{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new mt([])}unionWith(e){let n=new nt(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Jg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Jg("Invalid base64 string: "+i):i}}(e);return new st(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const VA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=VA.exec(t);if(Ae(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function rr(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function au(t){const e=t.mapValue.fields.__previous_value__;return ou(e)?au(e):e}function si(t){const e=On(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class ii{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ii("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ii&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ou(t)?4:NA(t)?9007199254740991:10:H()}function Kt(t,e){if(t===e)return!0;const n=sr(t);if(n!==sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return si(t).isEqual(si(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=On(s.timestampValue),a=On(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return rr(s.bytesValue).isEqual(rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=De(s.doubleValue),a=De(i.doubleValue);return o===a?Co(o)===Co(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Hr(t.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(mf(o)!==mf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Kt(o[c],a[c])))return!1;return!0}(t,e);default:return H()}}function oi(t,e){return(t.values||[]).find(n=>Kt(n,e))!==void 0}function Kr(t,e){if(t===e)return 0;const n=sr(t),r=sr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=De(i.integerValue||i.doubleValue),c=De(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return yf(t.timestampValue,e.timestampValue);case 4:return yf(si(t),si(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const a=rr(i),c=rr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ue(a[l],c[l]);if(u!==0)return u}return ue(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ue(De(i.latitude),De(o.latitude));return a!==0?a:ue(De(i.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Kr(a[l],c[l]);if(u)return u}return ue(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Gi.mapValue&&o===Gi.mapValue)return 0;if(i===Gi.mapValue)return 1;if(o===Gi.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=ue(c[h],u[h]);if(f!==0)return f;const g=Kr(a[c[h]],l[u[h]]);if(g!==0)return g}return ue(c.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function yf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=On(t),r=On(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function Wr(t){return Gc(t)}function Gc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=On(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return B.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gc(n.fields[o])}`;return s+"}"}(t.mapValue):H()}function vf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Qc(t){return!!t&&"integerValue"in t}function cu(t){return!!t&&"arrayValue"in t}function Ef(t){return!!t&&"nullValue"in t}function If(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function to(t){return!!t&&"mapValue"in t}function Os(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Os(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Os(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!to(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Os(n)}setAll(e){let n=Xe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Os(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());to(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];to(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new lt(Os(this.value))}}function Xg(t){const e=[];return cr(t.fields,(n,r)=>{const s=new Xe([n]);if(to(r)){const i=Xg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ye(e,0,Q.min(),Q.min(),Q.min(),lt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ye(e,1,n,Q.min(),r,s,0)}static newNoDocument(e,n){return new Ye(e,2,n,Q.min(),Q.min(),lt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,Q.min(),Q.min(),lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bo{constructor(e,n){this.position=e,this.inclusive=n}}function wf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=Kr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ms{constructor(e,n="asc"){this.field=e,this.dir=n}}function OA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Zg{}class Ne extends Zg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xA(e,n,r):n==="array-contains"?new UA(e,r):n==="in"?new BA(e,r):n==="not-in"?new $A(e,r):n==="array-contains-any"?new jA(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LA(e,r):new FA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Kr(n,this.value)):n!==null&&sr(this.value)===sr(n)&&this.matchesComparison(Kr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class kt extends Zg{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new kt(e,n)}matches(e){return em(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function em(t){return t.op==="and"}function tm(t){return MA(t)&&em(t)}function MA(t){for(const e of t.filters)if(e instanceof kt)return!1;return!0}function Yc(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Wr(t.value);if(tm(t))return t.filters.map(e=>Yc(e)).join(",");{const e=t.filters.map(n=>Yc(n)).join(",");return`${t.op}(${e})`}}function nm(t,e){return t instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.field.isEqual(s.field)&&Kt(r.value,s.value)}(t,e):t instanceof kt?function(r,s){return s instanceof kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&nm(o,s.filters[a]),!0):!1}(t,e):void H()}function rm(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Wr(n.value)}`}(t):t instanceof kt?function(n){return n.op.toString()+" {"+n.getFilters().map(rm).join(" ,")+"}"}(t):"Filter"}class xA extends Ne{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class LA extends Ne{constructor(e,n){super(e,"in",n),this.keys=sm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FA extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=sm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class UA extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cu(n)&&oi(n.arrayValue,this.value)}}class BA extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oi(this.value.arrayValue,n)}}class $A extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!oi(this.value.arrayValue,n)}}class jA extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>oi(this.value.arrayValue,r))}}/**
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
 */class zA{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Af(t,e=null,n=[],r=[],s=null,i=null,o=null){return new zA(t,e,n,r,s,i,o)}function lu(t){const e=Y(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),_a(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wr(r)).join(",")),e.he=n}return e.he}function uu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tf(t.startAt,e.startAt)&&Tf(t.endAt,e.endAt)}function Jc(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function qA(t,e,n,r,s,i,o,a){return new Ri(t,e,n,r,s,i,o,a)}function hu(t){return new Ri(t)}function Rf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function im(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function om(t){return t.collectionGroup!==null}function xs(t){const e=Y(t);if(e.Pe===null){e.Pe=[];const n=fu(e),r=im(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ms(n)),e.Pe.push(new Ms(Xe.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ms(Xe.keyField(),i))}}}return e.Pe}function jt(t){const e=Y(t);return e.Ie||(e.Ie=HA(e,xs(t))),e.Ie}function HA(t,e){if(t.limitType==="F")return Af(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ms(s.field,i)});const n=t.endAt?new bo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bo(t.startAt.position,t.startAt.inclusive):null;return Af(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xc(t,e){e.getFirstInequalityField(),fu(t);const n=t.filters.concat([e]);return new Ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zc(t,e,n){return new Ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ya(t,e){return uu(jt(t),jt(e))&&t.limitType===e.limitType}function am(t){return`${lu(jt(t))}|lt:${t.limitType}`}function wr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>rm(s)).join(", ")}]`),_a(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Wr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Wr(s)).join(",")),`Target(${r})`}(jt(t))}; limitType=${t.limitType})`}function va(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=wf(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,xs(r),s)||r.endAt&&!function(o,a,c){const l=wf(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,xs(r),s))}(t,e)}function KA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cm(t){return(e,n)=>{let r=!1;for(const s of xs(t)){const i=WA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function WA(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Kr(c,l):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Yg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new Pe(B.comparator);function an(){return GA}const lm=new Pe(B.comparator);function ws(...t){let e=lm;for(const n of t)e=e.insert(n.key,n);return e}function um(t){let e=lm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qn(){return Ls()}function hm(){return Ls()}function Ls(){return new ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const QA=new Pe(B.comparator),YA=new nt(B.comparator);function te(...t){let e=YA;for(const n of t)e=e.add(n);return e}const JA=new nt(ue);function XA(){return JA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Co(e)?"-0":e}}function dm(t){return{integerValue:""+t}}function ZA(t,e){return kA(e)?dm(e):fm(t,e)}/**
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
 */class Ea{constructor(){this._=void 0}}function e1(t,e,n){return t instanceof ko?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ou(i)&&(i=au(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ai?gm(t,e):t instanceof ci?mm(t,e):function(s,i){const o=pm(s,i),a=Pf(o)+Pf(s.Te);return Qc(o)&&Qc(s.Te)?dm(a):fm(s.serializer,a)}(t,e)}function t1(t,e,n){return t instanceof ai?gm(t,e):t instanceof ci?mm(t,e):n}function pm(t,e){return t instanceof Vo?function(r){return Qc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ko extends Ea{}class ai extends Ea{constructor(e){super(),this.elements=e}}function gm(t,e){const n=_m(e);for(const r of t.elements)n.some(s=>Kt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ci extends Ea{constructor(e){super(),this.elements=e}}function mm(t,e){let n=_m(e);for(const r of t.elements)n=n.filter(s=>!Kt(s,r));return{arrayValue:{values:n}}}class Vo extends Ea{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Pf(t){return De(t.integerValue||t.doubleValue)}function _m(t){return cu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function n1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ai&&s instanceof ai||r instanceof ci&&s instanceof ci?Hr(r.elements,s.elements,Kt):r instanceof Vo&&s instanceof Vo?Kt(r.Te,s.Te):r instanceof ko&&s instanceof ko}(t.transform,e.transform)}class r1{constructor(e,n){this.version=e,this.transformResults=n}}class St{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function no(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ia{}function ym(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new du(t.key,St.none()):new Pi(t.key,t.data,St.none());{const n=t.data,r=lt.empty();let s=new nt(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Un(t.key,r,new mt(s.toArray()),St.none())}}function s1(t,e,n){t instanceof Pi?function(s,i,o){const a=s.value.clone(),c=Cf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Un?function(s,i,o){if(!no(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Cf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(vm(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fs(t,e,n,r){return t instanceof Pi?function(i,o,a,c){if(!no(i.precondition,o))return a;const l=i.value.clone(),u=bf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Un?function(i,o,a,c){if(!no(i.precondition,o))return a;const l=bf(i.fieldTransforms,c,o),u=o.data;return u.setAll(vm(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return no(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function i1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=pm(r.transform,s||null);i!=null&&(n===null&&(n=lt.empty()),n.set(r.field,i))}return n||null}function Sf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hr(r,s,(i,o)=>n1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pi extends Ia{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Un extends Ia{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cf(t,e,n){const r=new Map;Ae(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,t1(o,a,n[s]))}return r}function bf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,e1(i,o,e))}return r}class du extends Ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class o1 extends Ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&s1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=ym(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,(n,r)=>Sf(n,r))&&Hr(this.baseMutations,e.baseMutations,(n,r)=>Sf(n,r))}}class pu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ae(e.mutations.length===r.length);let s=function(){return QA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new pu(e,n,r,s)}}/**
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
 */class c1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class l1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,ie;function u1(t){switch(t){default:return H();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Em(t){if(t===void 0)return on("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ve.OK:return E.OK;case Ve.CANCELLED:return E.CANCELLED;case Ve.UNKNOWN:return E.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return E.INTERNAL;case Ve.UNAVAILABLE:return E.UNAVAILABLE;case Ve.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ve.NOT_FOUND:return E.NOT_FOUND;case Ve.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ve.ABORTED:return E.ABORTED;case Ve.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ve.DATA_LOSS:return E.DATA_LOSS;default:return H()}}(ie=Ve||(Ve={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function h1(){return new TextEncoder}/**
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
 */const f1=new Vr([4294967295,4294967295],0);function kf(t){const e=h1().encode(t),n=new gA;return n.update(e),new Uint8Array(n.digest())}function Vf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vr([n,r],0),new Vr([s,i],0)]}class gu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ts(`Invalid padding: ${n}`);if(r<0)throw new Ts(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Vr.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(Vr.fromNumber(r)));return s.compare(f1)===1&&(s=new Vr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=kf(e),[r,s]=Vf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=kf(e),[r,s]=Vf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Si.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wa(Q.min(),s,new Pe(ue),an(),te())}}class Si{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Si(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class Im{constructor(e,n){this.targetId=e,this.ye=n}}class wm{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Df{constructor(){this.we=0,this.Se=Of(),this.be=st.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=te(),n=te(),r=te();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:H()}}),new Si(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Of()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class d1{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=an(),this.Ue=Nf(),this.We=new Pe(ue)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(Jc(i))if(r===0){const o=new B(i.path);this.je(n,o,Ye.newNoDocument(o,Q.min()))}else Ae(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=rr(r).toUint8Array()}catch(c){if(c instanceof Jg)return qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new gu(o,s,i)}catch(c){return qr(c instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&Jc(a.target)){const c=new B(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,Ye.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=te();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new wa(e,n,this.We,this.$e,r);return this.$e=an(),this.Ue=Nf(),this.We=new Pe(ue),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Df,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new nt(ue),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Df),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Nf(){return new Pe(B.comparator)}function Of(){return new Pe(B.comparator)}const p1=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),g1=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),m1=(()=>({and:"AND",or:"OR"}))();class _1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function el(t,e){return t.useProto3Json||_a(e)?e:{value:e}}function Do(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function y1(t,e){return Do(t,e.toTimestamp())}function zt(t){return Ae(!!t),Q.fromTimestamp(function(n){const r=On(n);return new Oe(r.seconds,r.nanos)}(t))}function mu(t,e){return function(r){return new Te(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Am(t){const e=Te.fromString(t);return Ae(Cm(e)),e}function tl(t,e){return mu(t.databaseId,e.path)}function sc(t,e){const n=Am(e);if(n.get(1)!==t.databaseId.projectId)throw new O(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(Rm(n))}function nl(t,e){return mu(t.databaseId,e)}function v1(t){const e=Am(t);return e.length===4?Te.emptyPath():Rm(e)}function rl(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rm(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mf(t,e,n){return{name:tl(t,e),fields:n.value.mapValue.fields}}function E1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ae(u===void 0||typeof u=="string"),st.fromBase64String(u||"")):(Ae(u===void 0||u instanceof Uint8Array),st.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:Em(l.code);return new O(u,l.message||"")}(o);n=new wm(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=sc(t,r.document.name),i=zt(r.document.updateTime),o=r.document.createTime?zt(r.document.createTime):Q.min(),a=new lt({mapValue:{fields:r.document.fields}}),c=Ye.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ro(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=sc(t,r.document),i=r.readTime?zt(r.readTime):Q.min(),o=Ye.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ro([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=sc(t,r.document),i=r.removedTargetIds||[];n=new ro([],i,s,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new l1(s,i),a=r.targetId;n=new Im(a,o)}}return n}function I1(t,e){let n;if(e instanceof Pi)n={update:Mf(t,e.key,e.value)};else if(e instanceof du)n={delete:tl(t,e.key)};else if(e instanceof Un)n={update:Mf(t,e.key,e.data),updateMask:k1(e.fieldMask)};else{if(!(e instanceof o1))return H();n={verify:tl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ko)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ai)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ci)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Vo)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:y1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(t,e.precondition)),n}function w1(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?zt(s.updateTime):zt(i);return o.isEqual(Q.min())&&(o=zt(i)),new r1(o,s.transformResults||[])}(n,e))):[]}function T1(t,e){return{documents:[nl(t,e.path)]}}function A1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=nl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=nl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Sm(kt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Tr(h.field),direction:S1(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=el(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function R1(t){let e=v1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=Pm(h);return f instanceof kt&&tm(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(y){return new Ms(Ar(y.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,_a(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,g=h.values||[];return new bo(g,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,g=h.values||[];return new bo(g,f)}(n.endAt)),qA(e,s,o,i,a,"F",c,l)}function P1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ar(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ar(n.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ar(n.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ar(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(Ar(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kt.create(n.compositeFilter.filters.map(r=>Pm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(t):H()}function S1(t){return p1[t]}function C1(t){return g1[t]}function b1(t){return m1[t]}function Tr(t){return{fieldPath:t.canonicalString()}}function Ar(t){return Xe.fromServerFormat(t.fieldPath)}function Sm(t){return t instanceof Ne?function(n){if(n.op==="=="){if(If(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NAN"}};if(Ef(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(If(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NOT_NAN"}};if(Ef(n.value))return{unaryFilter:{field:Tr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tr(n.field),op:C1(n.op),value:n.value}}}(t):t instanceof kt?function(n){const r=n.getFilters().map(s=>Sm(s));return r.length===1?r[0]:{compositeFilter:{op:b1(n.op),filters:r}}}(t):H()}function k1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Cm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n,r,s,i=Q.min(),o=Q.min(),a=st.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.ht=e}}function D1(t){const e=R1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zc(e,e.limit,"L"):e}/**
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
 */class N1{constructor(){this.an=new O1}addToCollectionParentIndex(e,n){return this.an.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Nn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Nn.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class O1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Gr(0)}static Ln(){return new Gr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(){this.changes=new ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class x1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Fs(r.mutation,s,mt.empty(),Oe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=Qn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ws();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=an();const o=Ls(),a=function(){return Ls()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Un)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Fs(u.mutation,l,u.mutation.getFieldMask(),Oe.now())):o.set(l.key,mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new x1(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ls();let s=new Pe((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||mt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||te()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=hm();u.forEach(f=>{if(!i.has(f)){const g=ym(n.get(f),r.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):om(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(Qn());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:um(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let s=ws();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ws();return this.indexManager.getCollectionParents(e,i).next(a=>A.forEach(a,c=>{const l=function(h,f){return new Ri(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Ye.newInvalidDocument(u)))});let a=ws();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Fs(u.mutation,l,mt.empty(),Oe.now()),va(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return A.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:zt(s.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:D1(s.bundledQuery),readTime:zt(s.readTime)}}(n)),A.resolve()}}/**
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
 */class U1{constructor(){this.overlays=new Pe(B.comparator),this.Pr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qn();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=Qn(),i=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Pe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Qn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Qn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return A.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new c1(n,r));let i=this.Pr.get(n);i===void 0&&(i=te(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(){this.Ir=new nt(xe.dr),this.Tr=new nt(xe.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new xe(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new xe(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new B(new Te([])),r=new xe(n,e),s=new xe(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new B(new Te([])),r=new xe(n,e),s=new xe(n,e+1);let i=te();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new xe(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return B.comparator(e.key,n.key)||ue(e.yr,n.yr)}static Er(e,n){return ue(e.yr,n.yr)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new nt(xe.dr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new a1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new xe(n,0),s=new xe(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ue);return n.forEach(s=>{const i=new xe(s,0),o=new xe(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),A.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const o=new xe(new B(i),0);let a=new nt(ue);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.yr)),!0)},o),A.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ae(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return A.forEach(n.mutations,s=>{const i=new xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new xe(n,0),s=this.Sr.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e){this.Fr=e,this.docs=function(){return new Pe(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=an();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ye.newInvalidDocument(s))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=an();const o=n.path,a=new B(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||SA(PA(u),r)<=0||(s.has(u.key)||va(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,s){H()}Mr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new j1(this)}getSize(e){return A.resolve(this.size)}}class j1 extends M1{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.persistence=e,this.Or=new ss(n=>lu(n),uu),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Nr=0,this.Br=new _u,this.targetCount=0,this.Lr=Gr.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),A.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Gr(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Qn(n),A.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n){this.kr={},this.overlays={},this.qr=new iu(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new z1(this),this.indexManager=new N1,this.remoteDocumentCache=function(s){return new $1(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new V1(n),this.Ur=new F1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new U1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new B1(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const s=new H1(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return A.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class H1 extends bA{constructor(e){super(),this.currentSequenceNumber=e}}class yu{constructor(e){this.persistence=e,this.jr=new _u,this.Hr=null}static Jr(e){return new yu(e)}get Yr(){if(this.Hr)return this.Hr;throw H()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),A.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Yr,r=>{const s=B.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,Q.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return A.or([()=>A.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vu(e,n.fromCache,r,s)}}/**
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
 */class K1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class W1{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new K1;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(gs()<=se.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",wr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),A.resolve()):(gs()<=se.DEBUG&&L("QueryEngine","Query:",wr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(gs()<=se.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",wr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jt(n))):A.resolve())}Hi(e,n){if(Rf(n))return A.resolve(null);let r=jt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Zc(n,null,"F"),r=jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,Zc(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,s){return Rf(n)||s.isEqual(Q.min())?A.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?A.resolve(null):(gs()<=se.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wr(n)),this.ts(e,o,n,RA(s,-1)).next(a=>a))})}Xi(e,n){let r=new nt(cm(e));return n.forEach((s,i)=>{va(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return gs()<=se.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",wr(n)),this.ji.getDocumentsMatchingQuery(e,n,Nn.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new Pe(ue),this.ss=new ss(i=>lu(i),uu),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new L1(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function Q1(t,e,n,r){return new G1(t,e,n,r)}async function bm(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=te();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function Y1(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let g=A.resolve();return f.forEach(y=>{g=g.next(()=>u.getEntry(c,y)).next(w=>{const R=l.docVersions.get(y);Ae(R!==null),w.version.compareTo(R)<0&&(h.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=te();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function km(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function J1(t,e){const n=Y(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(st.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(w,R,C){return w.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,g,u)&&a.push(n.Kr.updateTargetData(i,g))});let c=an(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(X1(i,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(Q.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.rs=s,i))}function X1(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=an();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:s}})}function Z1(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eR(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new Tn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function sl(t,e,n){const r=Y(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ai(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function xf(t,e,n){const r=Y(t);let s=Q.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=Y(c),f=h.ss.get(u);return f!==void 0?A.resolve(h.rs.get(f)):h.Kr.getTargetData(l,u)}(r,o,jt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:Q.min(),n?i:te())).next(a=>(tR(r,KA(e),a),{documents:a,Ps:i})))}function tR(t,e,n){let r=t.os.get(e)||Q.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class Lf{constructor(){this.activeTargetIds=XA()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nR{constructor(){this.ro=new Lf,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Lf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rR{so(e){}shutdown(){}}/**
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
 */class Ff{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qi=null;function ic(){return Qi===null?Qi=function(){return 268435456+Math.round(2147483648*Math.random())}():Qi++,"0x"+Qi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="WebChannelConnection";class oR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=ic(),c=this.Do(n,r);L("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,i,o),this.vo(n,c,l,s).then(u=>(L("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw qr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=sR[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=ic();return new Promise((o,a)=>{const c=new pA;c.setWithCredentials(!0),c.listenOnce(fA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case rc.NO_ERROR:const u=c.getResponseJson();L(Ge,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case rc.TIMEOUT:L(Ge,`RPC '${e}' ${i} timed out`),a(new O(E.DEADLINE_EXCEEDED,"Request time out"));break;case rc.HTTP_ERROR:const h=c.getStatus();if(L(Ge,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const y=function(R){const C=R.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(C)>=0?C:E.UNKNOWN}(g.status);a(new O(y,g.message))}else a(new O(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new O(E.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{L(Ge,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);L(Ge,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const s=ic(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uA(),a=hA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");L(Ge,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,g=!1;const y=new iR({ho:R=>{g?L(Ge,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(f||(L(Ge,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),L(Ge,`RPC '${e}' stream ${s} sending:`,R),h.send(R))},Po:()=>h.close()}),w=(R,C,D)=>{R.listen(C,z=>{try{D(z)}catch(x){setTimeout(()=>{throw x},0)}})};return w(h,Ki.EventType.OPEN,()=>{g||L(Ge,`RPC '${e}' stream ${s} transport opened.`)}),w(h,Ki.EventType.CLOSE,()=>{g||(g=!0,L(Ge,`RPC '${e}' stream ${s} transport closed`),y.mo())}),w(h,Ki.EventType.ERROR,R=>{g||(g=!0,qr(Ge,`RPC '${e}' stream ${s} transport errored:`,R),y.mo(new O(E.UNAVAILABLE,"The operation could not be completed")))}),w(h,Ki.EventType.MESSAGE,R=>{var C;if(!g){const D=R.data[0];Ae(!!D);const z=D,x=z.error||((C=z[0])===null||C===void 0?void 0:C.error);if(x){L(Ge,`RPC '${e}' stream ${s} received error:`,x);const Z=x.status;let _e=function(X){const ve=Ve[X];if(ve!==void 0)return Em(ve)}(Z),Se=x.message;_e===void 0&&(_e=E.INTERNAL,Se="Unknown error status: "+Z+" with message "+x.message),g=!0,y.mo(new O(_e,Se)),h.close()}else L(Ge,`RPC '${e}' stream ${s} received:`,D),y.fo(D)}}),w(a,dA.STAT_EVENT,R=>{R.stat===pf.PROXY?L(Ge,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===pf.NOPROXY&&L(Ge,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}function oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t){return new _1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,r,s,i,o,a,c){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Vm(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new O(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aR extends Dm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=E1(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?zt(o.readTime):Q.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=rl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Jc(c)?{documents:T1(i,c)}:{query:A1(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Tm(i,o.resumeToken);const l=el(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Q.min())>0){a.readTime=Do(i,o.snapshotVersion.toTimestamp());const l=el(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=P1(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=rl(this.serializer),n.removeTarget=e,this.n_(n)}}class cR extends Dm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=w1(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.T_(r,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=rl(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>I1(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new O(E.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(E.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(E.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class uR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(on(n),this.p_=!1):L("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{lr(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Y(c);l.F_.add(4),await Ci(l),l.O_.set("Unknown"),l.F_.delete(4),await Aa(l)}(this))})}),this.O_=new uR(r,s)}}async function Aa(t){if(lr(t))for(const e of t.M_)await e(!0)}async function Ci(t){for(const e of t.M_)await e(!1)}function Nm(t,e){const n=Y(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),wu(n)?Iu(n):is(n).Yo()&&Eu(n,e))}function Om(t,e){const n=Y(t),r=is(n);n.v_.delete(e),r.Yo()&&Mm(n,e),n.v_.size===0&&(r.Yo()?r.e_():lr(n)&&n.O_.set("Unknown"))}function Eu(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}is(t).l_(e)}function Mm(t,e){t.N_.Le(e),is(t).h_(e)}function Iu(t){t.N_=new d1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),is(t).start(),t.O_.y_()}function wu(t){return lr(t)&&!is(t).Jo()&&t.v_.size>0}function lr(t){return Y(t).F_.size===0}function xm(t){t.N_=void 0}async function fR(t){t.v_.forEach((e,n)=>{Eu(t,e)})}async function dR(t,e){xm(t),wu(t)?(t.O_.b_(e),Iu(t)):t.O_.set("Unknown")}async function pR(t,e,n){if(t.O_.set("Online"),e instanceof wm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await No(t,r)}else if(e instanceof ro?t.N_.Ge(e):e instanceof Im?t.N_.Xe(e):t.N_.He(e),!n.isEqual(Q.min()))try{const r=await km(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.v_.get(l);u&&i.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.v_.get(c);if(!u)return;i.v_.set(c,u.withResumeToken(st.EMPTY_BYTE_STRING,u.snapshotVersion)),Mm(i,c);const h=new Tn(u.target,c,l,u.sequenceNumber);Eu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await No(t,r)}}async function No(t,e,n){if(!Ai(e))throw e;t.F_.add(1),await Ci(t),t.O_.set("Offline"),n||(n=()=>km(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Aa(t)})}function Lm(t,e){return e().catch(n=>No(t,n,e))}async function Ra(t){const e=Y(t),n=Mn(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;gR(e);)try{const s=await Z1(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,mR(e,s)}catch(s){await No(e,s)}Fm(e)&&Um(e)}function gR(t){return lr(t)&&t.C_.length<10}function mR(t,e){t.C_.push(e);const n=Mn(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function Fm(t){return lr(t)&&!Mn(t).Jo()&&t.C_.length>0}function Um(t){Mn(t).start()}async function _R(t){Mn(t).A_()}async function yR(t){const e=Mn(t);for(const n of t.C_)e.d_(n.mutations)}async function vR(t,e,n){const r=t.C_.shift(),s=pu.from(r,e,n);await Lm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ra(t)}async function ER(t,e){e&&Mn(t).I_&&await async function(r,s){if(function(o){return u1(o)&&o!==E.ABORTED}(s.code)){const i=r.C_.shift();Mn(r).Xo(),await Lm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ra(r)}}(t,e),Fm(t)&&Um(t)}async function Uf(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=lr(n);n.F_.add(3),await Ci(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Aa(n)}async function IR(t,e){const n=Y(t);e?(n.F_.delete(2),await Aa(n)):e||(n.F_.add(2),await Ci(n),n.O_.set("Unknown"))}function is(t){return t.B_||(t.B_=function(n,r,s){const i=Y(n);return i.V_(),new aR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:fR.bind(null,t),Eo:dR.bind(null,t),c_:pR.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),wu(t)?Iu(t):t.O_.set("Unknown")):(await t.B_.stop(),xm(t))})),t.B_}function Mn(t){return t.L_||(t.L_=function(n,r,s){const i=Y(n);return i.V_(),new cR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:_R.bind(null,t),Eo:ER.bind(null,t),E_:yR.bind(null,t),T_:vR.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Ra(t)):(await t.L_.stop(),t.C_.length>0&&(L("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Tu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Au(t,e){if(on("AsyncQueue",`${e}: ${t}`),Ai(t))return new O(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=ws(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Dr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Dr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Dr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.k_=new Pe(B.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):H():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qr{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qr(e,n,Dr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this.Q_=void 0,this.listeners=[]}}class TR{constructor(){this.queries=new ss(e=>am(e),ya),this.onlineState="Unknown",this.K_=new Set}}async function Bm(t,e){const n=Y(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new wR),s)try{i.Q_=await n.onListen(r)}catch(o){const a=Au(o,`Initialization of query '${wr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&Ru(n)}async function $m(t,e){const n=Y(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function AR(t,e){const n=Y(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&Ru(n)}function RR(t,e,n){const r=Y(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ru(t){t.K_.forEach(e=>{e.next()})}class jm{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.key=e}}class qm{constructor(e){this.key=e}}class PR{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=te(),this.mutatedKeys=te(),this.ua=cm(e),this.ca=new Dr(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Bf,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),g=va(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let R=!1;f&&g?f.data.isEqual(g.data)?y!==w&&(r.track({type:3,doc:g}),R=!0):this.Ia(f,g)||(r.track({type:2,doc:g}),R=!0,(c&&this.ua(g,c)>0||l&&this.ua(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),R=!0):f&&!g&&(r.track({type:1,doc:f}),R=!0,(c||l)&&(a=!0)),R&&(g?(o=o.add(g),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((l,u)=>function(f,g){const y=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return y(f)-y(g)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,i.length!==0||c?{snapshot:new Qr(this.query,e.ca,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Bf,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=te(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new qm(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new zm(r))}),n}Ra(e){this.oa=e.Ps,this.aa=te();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Qr.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class SR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CR{constructor(e){this.key=e,this.ma=!1}}class bR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ss(a=>am(a),ya),this.pa=new Map,this.ya=new Set,this.wa=new Pe(B.comparator),this.Sa=new Map,this.ba=new _u,this.Da={},this.Ca=new Map,this.va=Gr.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function kR(t,e){const n=BR(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await eR(n.localStore,jt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await VR(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Nm(n.remoteStore,o)}return s}async function VR(t,e,n,r,s){t.Ma=(h,f,g)=>async function(w,R,C,D){let z=R.view.ha(C);z.es&&(z=await xf(w.localStore,R.query,!1).then(({documents:_e})=>R.view.ha(_e,z)));const x=D&&D.targetChanges.get(R.targetId),Z=R.view.applyChanges(z,w.isPrimaryClient,x);return jf(w,R.targetId,Z.Ea),Z.snapshot}(t,h,f,g);const i=await xf(t.localStore,e,!0),o=new PR(e,i.Ps),a=o.ha(i.documents),c=Si.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);jf(t,n,l.Ea);const u=new SR(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function DR(t,e){const n=Y(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!ya(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await sl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Om(n.remoteStore,r.targetId),il(n,r.targetId)}).catch(Ti)):(il(n,r.targetId),await sl(n.localStore,r.targetId,!0))}async function NR(t,e,n){const r=$R(t);try{const s=await function(o,a){const c=Y(o),l=Oe.now(),u=a.reduce((g,y)=>g.add(y.key),te());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=an(),w=te();return c._s.getEntries(g,u).next(R=>{y=R,y.forEach((C,D)=>{D.isValidDocument()||(w=w.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,y)).next(R=>{h=R;const C=[];for(const D of a){const z=i1(D,h.get(D.key).overlayedDocument);z!=null&&C.push(new Un(D.key,z,Xg(z.value.mapValue),St.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,C,a)}).next(R=>{f=R;const C=R.applyToLocalDocumentSet(h,w);return c.documentOverlayCache.saveOverlays(g,R.batchId,C)})}).then(()=>({batchId:f.batchId,changes:um(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Pe(ue)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await bi(r,s.changes),await Ra(r.remoteStore)}catch(s){const i=Au(s,"Failed to persist write");n.reject(i)}}async function Hm(t,e){const n=Y(t);try{const r=await J1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Ae(o.ma):s.removedDocuments.size>0&&(Ae(o.ma),o.ma=!1))}),await bi(n,r,e)}catch(r){await Ti(r)}}function $f(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Y(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.U_(a)&&(l=!0)}),l&&Ru(c)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OR(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Pe(B.comparator);o=o.insert(i,Ye.newNoDocument(i,Q.min()));const a=te().add(i),c=new wa(Q.min(),new Map,new Pe(ue),o,a);await Hm(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),Pu(r)}else await sl(r.localStore,e,!1).then(()=>il(r,e,n)).catch(Ti)}async function MR(t,e){const n=Y(t),r=e.batch.batchId;try{const s=await Y1(n.localStore,e);Wm(n,r,null),Km(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bi(n,s)}catch(s){await Ti(s)}}async function xR(t,e,n){const r=Y(t);try{const s=await function(o,a){const c=Y(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ae(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Wm(r,e,n),Km(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bi(r,s)}catch(s){await Ti(s)}}function Km(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function Wm(t,e,n){const r=Y(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function il(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||Gm(t,r)})}function Gm(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Om(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Pu(t))}function jf(t,e,n){for(const r of n)r instanceof zm?(t.ba.addReference(r.key,e),LR(t,r)):r instanceof qm?(L("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||Gm(t,r.key)):H()}function LR(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(L("SyncEngine","New document in limbo: "+n),t.ya.add(r),Pu(t))}function Pu(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new B(Te.fromString(e)),r=t.va.next();t.Sa.set(r,new CR(n)),t.wa=t.wa.insert(n,r),Nm(t.remoteStore,new Tn(jt(hu(n.path)),r,"TargetPurposeLimboResolution",iu.ae))}}async function bi(t,e,n){const r=Y(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=vu.$i(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(c,l){const u=Y(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(l,f=>A.forEach(f.Qi,g=>u.persistence.referenceDelegate.addReference(h,f.targetId,g)).next(()=>A.forEach(f.Ki,g=>u.persistence.referenceDelegate.removeReference(h,f.targetId,g)))))}catch(h){if(!Ai(h))throw h;L("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const g=u.rs.get(f),y=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(y);u.rs=u.rs.insert(f,w)}}}(r.localStore,i))}async function FR(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await bm(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new O(E.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bi(n,r.cs)}}function UR(t,e){const n=Y(t),r=n.Sa.get(e);if(r&&r.ma)return te().add(r.key);{let s=te();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function BR(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OR.bind(null,e),e.fa.c_=AR.bind(null,e.eventManager),e.fa.xa=RR.bind(null,e.eventManager),e}function $R(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xR.bind(null,e),e}class zf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ta(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Q1(this.persistence,new W1,e.initialUser,this.serializer)}createPersistence(e){return new q1(yu.Jr,this.serializer)}createSharedClientState(e){return new nR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$f(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FR.bind(null,this.syncEngine),await IR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TR}()}createDatastore(e){const n=Ta(e.databaseInfo.databaseId),r=function(i){return new oR(i)}(e.databaseInfo);return function(i,o,a,c){return new lR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new hR(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>$f(this.syncEngine,n,0),function(){return Ff.C()?new Ff:new rR}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new bR(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Y(n);L("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await Ci(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=Qg.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Au(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ac(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await bm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HR(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Uf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Uf(e.remoteStore,i)),t._onlineComponents=e}function qR(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function HR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await ac(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!qR(n))throw n;qr("Error using user provided cache. Falling back to memory cache: "+n),await ac(t,new zf)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await ac(t,new zf);return t._offlineComponents}async function Ym(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await qf(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await qf(t,new jR))),t._onlineComponents}function KR(t){return Ym(t).then(e=>e.syncEngine)}async function Jm(t){const e=await Ym(t),n=e.eventManager;return n.onListen=kR.bind(null,e.syncEngine),n.onUnlisten=DR.bind(null,e.syncEngine),n}function WR(t,e,n={}){const r=new nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Qm({next:f=>{o.enqueueAndForget(()=>$m(i,h));const g=f.docs.has(a);!g&&f.fromCache?l.reject(new O(E.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&f.fromCache&&c&&c.source==="server"?l.reject(new O(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new jm(hu(a.path),u,{includeMetadataChanges:!0,Z_:!0});return Bm(i,h)}(await Jm(t),t.asyncQueue,e,n,r)),r.promise}function GR(t,e,n={}){const r=new nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Qm({next:f=>{o.enqueueAndForget(()=>$m(i,h)),f.fromCache&&c.source==="server"?l.reject(new O(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new jm(a,u,{includeMetadataChanges:!0,Z_:!0});return Bm(i,h)}(await Jm(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Xm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t,e,n){if(!n)throw new O(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QR(t,e,n,r){if(e===!0&&r===!0)throw new O(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kf(t){if(!B.isDocumentKey(t))throw new O(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wf(t){if(B.isDocumentKey(t))throw new O(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pa(t);throw new O(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mA;switch(r.type){case"firstParty":return new EA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hf.get(n);r&&(L("ComponentProvider","Removing Datastore"),Hf.delete(n),r.terminate())}(this),Promise.resolve()}}function YR(t,e,n,r={}){var s;const i=(t=cn(t,Sa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Qe.MOCK_USER;else{a=zw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new O(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Qe(l)}t._authCredentials=new _A(new Gg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new os(this.firestore,e,this._query)}}class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class Vn extends os{constructor(e,n,r){super(e,n,hu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new B(e))}withConverter(e){return new Vn(this.firestore,e,this._path)}}function Qf(t,e,...n){if(t=Ue(t),Zm("collection","path",e),t instanceof Sa){const r=Te.fromString(e,...n);return Wf(r),new Vn(t,null,r)}{if(!(t instanceof ut||t instanceof Vn))throw new O(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Wf(r),new Vn(t.firestore,null,r)}}function As(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=Qg.V()),Zm("doc","path",e),t instanceof Sa){const r=Te.fromString(e,...n);return Kf(r),new ut(t,null,new B(r))}{if(!(t instanceof ut||t instanceof Vn))throw new O(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Kf(r),new ut(t.firestore,t instanceof Vn?t.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Vm(this,"async_queue_retry"),this.ou=()=>{const n=oc();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=oc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new nn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!Ai(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw on("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=Tu.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&H()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class as extends Sa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new JR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||e_(this),this._firestoreClient.terminate()}}function XR(t,e){const n=typeof t=="object"?t:zp(),r=typeof t=="string"?t:e||"(default)",s=Ml(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$w("firestore");i&&YR(s,...i)}return s}function Su(t){return t._firestoreClient||e_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function e_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new DA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Xm(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new zR(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yr(st.fromBase64String(e))}catch(n){throw new O(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Yr(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=/^__.*__$/;class eP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Un(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pi(e,this.data,n,this.fieldTransforms)}}class t_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Un(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function n_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class ku{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new ku(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Oo(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(n_(this.Tu)&&ZR.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class tP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ta(e)}wu(e,n,r,s=!1){return new ku({Tu:e,methodName:n,yu:r,path:Xe.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vu(t){const e=t._freezeSettings(),n=Ta(t._databaseId);return new tP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nP(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);Du("Data must be an object, but it was:",o,r);const a=r_(r,o);let c,l;if(i.merge)c=new mt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=ol(e,h,n);if(!o.contains(f))throw new O(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);i_(u,f)||u.push(f)}c=new mt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new eP(new lt(a),c,l)}class ba extends Cu{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ba}}function rP(t,e,n,r){const s=t.wu(1,e,n);Du("Data must be an object, but it was:",s,r);const i=[],o=lt.empty();cr(r,(c,l)=>{const u=Nu(e,c,n);l=Ue(l);const h=s.mu(u);if(l instanceof ba)i.push(u);else{const f=ki(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new mt(i);return new t_(o,a,s.fieldTransforms)}function sP(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[ol(e,r,n)],c=[s];if(i.length%2!=0)throw new O(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(ol(e,i[f])),c.push(i[f+1]);const l=[],u=lt.empty();for(let f=a.length-1;f>=0;--f)if(!i_(l,a[f])){const g=a[f];let y=c[f];y=Ue(y);const w=o.mu(g);if(y instanceof ba)l.push(g);else{const R=ki(y,w);R!=null&&(l.push(g),u.set(g,R))}}const h=new mt(l);return new t_(u,h,o.fieldTransforms)}function iP(t,e,n,r=!1){return ki(n,t.wu(r?4:3,e))}function ki(t,e){if(s_(t=Ue(t)))return Du("Unsupported field value:",e,t),r_(t,e);if(t instanceof Cu)return function(r,s){if(!n_(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=ki(a,s.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:Do(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Do(s.serializer,i)}}if(r instanceof bu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yr)return{bytesValue:Tm(s.serializer,r._byteString)};if(r instanceof ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${Pa(r)}`)}(t,e)}function r_(t,e){const n={};return Yg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cr(t,(r,s)=>{const i=ki(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function s_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof bu||t instanceof Yr||t instanceof ut||t instanceof Cu)}function Du(t,e,n){if(!s_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Pa(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function ol(t,e,n){if((e=Ue(e))instanceof Ca)return e._internalPath;if(typeof e=="string")return Nu(t,e);throw Oo("Field path arguments must be of type string or ",t,!1,void 0,n)}const oP=new RegExp("[~\\*/\\[\\]]");function Nu(t,e,n){if(e.search(oP)>=0)throw Oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ca(...e.split("."))._internalPath}catch{throw Oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new O(E.INVALID_ARGUMENT,a+t+c)}function i_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ou("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aP extends o_{data(){return super.data()}}function Ou(t,e){return typeof e=="string"?Nu(t,e):e instanceof Ca?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mu{}class lP extends Mu{}function uP(t,e,...n){let r=[];e instanceof Mu&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof xu).length,a=i.filter(c=>c instanceof ka).length;if(o>1||o>0&&a>0)throw new O(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ka extends lP{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ka(e,n,r)}_apply(e){const n=this._parse(e);return a_(e._query,n),new os(e.firestore,e.converter,Xc(e._query,n))}_parse(e){const n=Vu(e.firestore);return function(i,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new O(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Jf(h,u);const g=[];for(const y of h)g.push(Yf(c,i,y));f={arrayValue:{values:g}}}else f=Yf(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Jf(h,u),f=iP(a,o,h,u==="in"||u==="not-in");return Ne.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function hP(t,e,n){const r=e,s=Ou("where",t);return ka._create(s,r,n)}class xu extends Mu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)a_(o,c),o=Xc(o,c)}(e._query,n),new os(e.firestore,e.converter,Xc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Yf(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new O(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!om(e)&&n.indexOf("/")!==-1)throw new O(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!B.isDocumentKey(r))throw new O(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vf(t,new B(r))}if(n instanceof ut)return vf(t,n._key);throw new O(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pa(n)}.`)}function Jf(t,e){if(!Array.isArray(t)||t.length===0)throw new O(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function a_(t,e){if(e.isInequality()){const r=fu(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new O(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=im(t);i!==null&&fP(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function fP(t,e,n){if(!n.isEqual(e))throw new O(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class dP{convertValue(e,n="none"){switch(sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new bu(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=au(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const n=On(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);Ae(Cm(r));const s=new ii(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(n)||on(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class c_ extends o_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new so(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ou("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class so extends c_{data(e={}){return super.data(e)}}class gP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Rs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new so(this._firestore,this._userDataWriter,r.key,r,new Rs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new so(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Rs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new so(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Rs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:mP(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t){t=cn(t,ut);const e=cn(t.firestore,as);return WR(Su(e),t._key).then(n=>IP(e,t,n))}class l_ extends dP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function _P(t){t=cn(t,os);const e=cn(t.firestore,as),n=Su(e),r=new l_(e);return cP(t._query),GR(n,t._query).then(s=>new gP(e,r,t,s))}function yP(t,e,n,...r){t=cn(t,ut);const s=cn(t.firestore,as),i=Vu(s);let o;return o=typeof(e=Ue(e))=="string"||e instanceof Ca?sP(i,"updateDoc",t._key,e,n,r):rP(i,"updateDoc",t._key,e),Lu(s,[o.toMutation(t._key,St.exists(!0))])}function vP(t){return Lu(cn(t.firestore,as),[new du(t._key,St.none())])}function EP(t,e){const n=cn(t.firestore,as),r=As(t),s=pP(t.converter,e);return Lu(n,[nP(Vu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,St.exists(!1))]).then(()=>r)}function Lu(t,e){return function(r,s){const i=new nn;return r.asyncQueue.enqueueAndForget(async()=>NR(await KR(r),s,i)),i.promise}(Su(t),e)}function IP(t,e,n){const r=n.docs.get(e._key),s=new l_(t);return new c_(t,s,e._key,r,new Rs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){rs=s})(es),jr(new er("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new as(new yA(r.getProvider("auth-internal")),new wA(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new O(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ii(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),kn(gf,"4.2.0",e),kn(gf,"4.2.0","esm2017")})();function Fu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Xf(t){return t!==void 0&&t.enterprise!==void 0}class wP{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function u_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TP=u_,h_=new di("auth","Firebase",u_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Nl("@firebase/auth");function AP(t,...e){Mo.logLevel<=se.WARN&&Mo.warn(`Auth (${es}): ${t}`,...e)}function io(t,...e){Mo.logLevel<=se.ERROR&&Mo.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,...e){throw Uu(t,...e)}function qt(t,...e){return Uu(t,...e)}function RP(t,e,n){const r=Object.assign(Object.assign({},TP()),{[e]:n});return new di("auth","Firebase",r).create(e,{appName:t.name})}function Uu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return h_.create(t,...e)}function q(t,e,...n){if(!t)throw Uu(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw io(e),new Error(e)}function ln(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PP(){return Zf()==="http:"||Zf()==="https:"}function Zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PP()||Hw()||"connection"in navigator)?navigator.onLine:!0}function CP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,ln(n>e,"Short delay should be less than long delay!"),this.isMobile=qw()||Kw()}get(){return SP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t,e){ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=new Vi(3e4,6e4);function ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hr(t,e,n,r,s={}){return d_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=pi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),f_.fetch()(p_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function d_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bP),e);try{const s=new VP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Yi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Yi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw RP(t,u,l);Vt(t,u)}}catch(s){if(s instanceof hn)throw s;Vt(t,"network-request-failed",{message:String(s)})}}async function Di(t,e,n,r,s={}){const i=await hr(t,e,n,r,s);return"mfaPendingCredential"in i&&Vt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function p_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Bu(t.config,s):`${t.config.apiScheme}://${s}`}class VP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),kP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qt(t,e,r);return s.customData._tokenResponse=n,s}async function DP(t,e){return hr(t,"GET","/v2/recaptchaConfig",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(t,e){return hr(t,"POST","/v1/accounts:delete",e)}async function OP(t,e){return hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MP(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),s=$u(r);q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Us(lc(s.auth_time)),issuedAtTime:Us(lc(s.iat)),expirationTime:Us(lc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function lc(t){return Number(t)*1e3}function $u(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const s=xp(n);return s?JSON.parse(s):(io("Failed to decode base64 JWT payload"),null)}catch(s){return io("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function xP(t){const e=$u(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&LP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await li(t,OP(n,{idToken:r}));q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$P(i.providerUserInfo):[],a=BP(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new g_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function UP(t){const e=Ue(t);await xo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $P(t){return t.map(e=>{var{providerId:n}=e,r=Fu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e){const n=await d_(t,{},async()=>{const r=pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=p_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",f_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ui;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Fu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new g_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MP(this,e)}reload(){return UP(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,NP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:x,isAnonymous:Z,providerData:_e,stsTokenManager:Se}=n;q(z&&Se,e,"internal-error");const re=ui.fromJSON(this.name,Se);q(typeof z=="string",e,"internal-error"),gn(h,e.name),gn(f,e.name),q(typeof x=="boolean",e,"internal-error"),q(typeof Z=="boolean",e,"internal-error"),gn(g,e.name),gn(y,e.name),gn(w,e.name),gn(R,e.name),gn(C,e.name),gn(D,e.name);const X=new Zn({uid:z,auth:e,email:f,emailVerified:x,displayName:h,isAnonymous:Z,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:re,createdAt:C,lastLoginAt:D});return _e&&Array.isArray(_e)&&(X.providerData=_e.map(ve=>Object.assign({},ve))),R&&(X._redirectEventId=R),X}static async _fromIdTokenResponse(e,n,r=!1){const s=new ui;s.updateFromServerResponse(n);const i=new Zn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xo(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Map;function en(t){ln(t instanceof Function,"Expected a class definition");let e=ed.get(t);return e?(ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ed.set(t,e),e)}/**
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
 */class m_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m_.type="NONE";const td=m_;/**
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
 */function oo(t,e,n){return`firebase:${t}:${e}:${n}`}class Nr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=oo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Nr(en(td),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||en(td);const o=oo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Zn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Nr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Nr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(__(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I_(e))return"Blackberry";if(w_(e))return"Webos";if(ju(e))return"Safari";if((e.includes("chrome/")||y_(e))&&!e.includes("edge/"))return"Chrome";if(E_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function __(t=rt()){return/firefox\//i.test(t)}function ju(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y_(t=rt()){return/crios\//i.test(t)}function v_(t=rt()){return/iemobile/i.test(t)}function E_(t=rt()){return/android/i.test(t)}function I_(t=rt()){return/blackberry/i.test(t)}function w_(t=rt()){return/webos/i.test(t)}function Va(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zP(t=rt()){var e;return Va(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qP(){return Ww()&&document.documentMode===10}function T_(t=rt()){return Va(t)||E_(t)||w_(t)||I_(t)||/windows phone/i.test(t)||v_(t)}function HP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t,e=[]){let n;switch(t){case"Browser":n=nd(rt());break;case"Worker":n=`${nd(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
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
 */class KP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WP(t,e={}){return hr(t,"GET","/v2/passwordPolicy",ur(t,e))}/**
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
 */const GP=6;class QP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:GP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rd(this),this.idTokenSubscription=new rd(this),this.beforeStateQueue=new KP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Nr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WP(this),n=new QP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new di("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Nr.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&AP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fr(t){return Ue(t)}class rd{constructor(e){this.auth=e,this.observer=null,this.addObserver=eT(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function R_(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",JP().appendChild(r)})}function XP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ZP="https://www.google.com/recaptcha/enterprise.js?render=",eS="recaptcha-enterprise",tS="NO_RECAPTCHA";class nS{constructor(e){this.type=eS,this.auth=fr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{DP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new wP(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Xf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(tS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Xf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}R_(ZP+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Lo(t,e,n,r=!1){const s=new nS(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(t,e){const n=Ml(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vo(i,e??{}))return s;Vt(s,"already-initialized")}return n.initialize({options:e})}function sS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iS(t,e,n){const r=fr(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=P_(e),{host:o,port:a}=oS(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||aS()}function P_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oS(t){const e=P_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:sd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:sd(o)}}}function sd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function cS(t,e){return hr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(t,e){return Di(t,"POST","/v1/accounts:signInWithPassword",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(t,e){return Di(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}async function uS(t,e){return Di(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends zu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new hi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Lo(e,r,"signInWithPassword");return uc(e,s)}else return uc(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Lo(e,r,"signInWithPassword");return uc(e,i)}else return Promise.reject(s)});case"emailLink":return lS(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return cS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return uS(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t,e){return Di(t,"POST","/v1/accounts:signInWithIdp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="http://localhost";class ir extends zu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Fu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ir(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:hS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dS(t){const e=ys(vs(t)).link,n=e?ys(vs(e)).deep_link_id:null,r=ys(vs(t)).deep_link_id;return(r?ys(vs(r)).link:null)||r||n||e||t}class qu{constructor(e){var n,r,s,i,o,a;const c=ys(vs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=fS((s=c.mode)!==null&&s!==void 0?s:null);q(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dS(e);try{return new qu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.providerId=cs.PROVIDER_ID}static credential(e,n){return hi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qu.parseLink(n);return q(r,"argument-error"),hi._fromEmailAndCode(e,r.code,r.tenantId)}}cs.PROVIDER_ID="password";cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ni extends S_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Ni{constructor(){super("facebook.com")}static credential(e){return ir._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ir._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return En.credential(n,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Ni{constructor(){super("github.com")}static credential(e){return ir._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ni{constructor(){super("twitter.com")}static credential(e,n){return ir._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hc(t,e){return Di(t,"POST","/v1/accounts:signUp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Zn._fromIdTokenResponse(e,r,s),o=id(r);return new or({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=id(r);return new or({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function id(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends hn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fo(e,n,r,s)}}function C_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fo._fromErrorAndOperation(t,i,e,r):i})}async function pS(t,e,n=!1){const r=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return or._forOperation(t,"link",r)}/**
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
 */async function gS(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await li(t,C_(r,s,e,t),n);q(i.idToken,r,"internal-error");const o=$u(i.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),or._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(t,e,n=!1){const r="signIn",s=await C_(t,r,e),i=await or._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function mS(t,e){return b_(fr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(t){const e=fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _S(t,e,n){var r;const s=fr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Lo(s,i,"signUpPassword");o=hc(s,l)}else o=hc(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Lo(s,i,"signUpPassword");return hc(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&k_(t),l}),c=await or._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function yS(t,e,n){return mS(Ue(t),cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&k_(t),r})}function vS(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function ES(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function IS(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}function wS(t){return Ue(t).signOut()}const Uo="__sak";/**
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
 */class V_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uo,"1"),this.storage.removeItem(Uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(){const t=rt();return ju(t)||Va(t)}const AS=1e3,RS=10;class D_ extends V_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TS()&&HP(),this.fallbackToPolling=T_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,RS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}D_.type="LOCAL";const PS=D_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_ extends V_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}N_.type="SESSION";const O_=N_;/**
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
 */function SS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await SS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class CS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Hu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function bS(t){Ht().location.href=t}/**
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
 */function M_(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function kS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DS(){return M_()?self:null}/**
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
 */const x_="firebaseLocalStorageDb",NS=1,Bo="firebaseLocalStorage",L_="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Na(t,e){return t.transaction([Bo],e?"readwrite":"readonly").objectStore(Bo)}function OS(){const t=indexedDB.deleteDatabase(x_);return new Oi(t).toPromise()}function cl(){const t=indexedDB.open(x_,NS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bo,{keyPath:L_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bo)?e(r):(r.close(),await OS(),e(await cl()))})})}async function od(t,e,n){const r=Na(t,!0).put({[L_]:e,value:n});return new Oi(r).toPromise()}async function MS(t,e){const n=Na(t,!1).get(e),r=await new Oi(n).toPromise();return r===void 0?null:r.value}function ad(t,e){const n=Na(t,!0).delete(e);return new Oi(n).toPromise()}const xS=800,LS=3;class F_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return M_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Da._getInstance(DS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kS(),!this.activeServiceWorker)return;this.sender=new CS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cl();return await od(e,Uo,"1"),await ad(e,Uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>od(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>MS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ad(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Na(s,!1).getAll();return new Oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}F_.type="LOCAL";const FS=F_;new Vi(3e4,6e4);/**
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
 */function US(t,e){return e?en(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ku extends zu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BS(t){return b_(t.auth,new Ku(t),t.bypassAuthState)}function $S(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),gS(n,new Ku(t),t.bypassAuthState)}async function jS(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),pS(n,new Ku(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BS;case"linkViaPopup":case"linkViaRedirect":return jS;case"reauthViaPopup":case"reauthViaRedirect":return $S;default:Vt(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=new Vi(2e3,1e4);class Pr extends U_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=Hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zS.get())};e()}}Pr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="pendingRedirect",ao=new Map;class HS extends U_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const r=await KS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KS(t,e){const n=QS(e),r=GS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function WS(t,e){ao.set(t._key(),e)}function GS(t){return en(t._redirectPersistence)}function QS(t){return oo(qS,t.config.apiKey,t.name)}async function YS(t,e,n=!1){const r=fr(t),s=US(r,e),o=await new HS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=10*60*1e3;class XS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!B_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JS&&this.cachedEventUids.clear(),this.cachedEventUids.has(cd(e))}saveEventToCache(e){this.cachedEventUids.add(cd(e)),this.lastProcessedEventTime=Date.now()}}function cd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function B_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return B_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(t,e={}){return hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nC=/^https?/;async function rC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eC(t);for(const n of e)try{if(sC(n))return}catch{}Vt(t,"unauthorized-domain")}function sC(t){const e=al(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nC.test(n))return!1;if(tC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const iC=new Vi(3e4,6e4);function ld(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oC(t){return new Promise((e,n)=>{var r,s,i;function o(){ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ld(),n(qt(t,"network-request-failed"))},timeout:iC.get()})}if(!((s=(r=Ht().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ht().gapi)===null||i===void 0)&&i.load)o();else{const a=XP("iframefcb");return Ht()[a]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},R_(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw co=null,e})}let co=null;function aC(t){return co=co||oC(t),co}/**
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
 */const cC=new Vi(5e3,15e3),lC="__/auth/iframe",uC="emulator/auth/iframe",hC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dC(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bu(e,uC):`https://${t.config.authDomain}/${lC}`,r={apiKey:e.apiKey,appName:t.name,v:es},s=fC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${pi(r).slice(1)}`}async function pC(t){const e=await aC(t),n=Ht().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:dC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=Ht().setTimeout(()=>{i(o)},cC.get());function c(){Ht().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const gC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mC=500,_C=600,yC="_blank",vC="http://localhost";class ud{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EC(t,e,n,r=mC,s=_C){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},gC),{width:r.toString(),height:s.toString(),top:i,left:o}),l=rt().toLowerCase();n&&(a=y_(l)?yC:n),__(l)&&(e=e||vC,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(zP(l)&&a!=="_self")return IC(e||"",a),new ud(null);const h=window.open(e||"",a,u);q(h,t,"popup-blocked");try{h.focus()}catch{}return new ud(h)}function IC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wC="__/auth/handler",TC="emulator/auth/handler",AC=encodeURIComponent("fac");async function hd(t,e,n,r,s,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:s};if(e instanceof S_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ni){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${AC}=${encodeURIComponent(c)}`:"";return`${RC(t)}?${pi(a).slice(1)}${l}`}function RC({config:t}){return t.emulator?Bu(t,TC):`https://${t.authDomain}/${wC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="webStorageSupport";class PC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O_,this._completeRedirectFn=YS,this._overrideRedirectResult=WS}async _openPopup(e,n,r,s){var i;ln((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await hd(e,n,r,al(),s);return EC(e,o,Hu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await hd(e,n,r,al(),s);return bS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ln(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pC(e),r=new XS(e);return n.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fc,{type:fc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[fc];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return T_()||ju()||Va()}}const SC=PC;var fd="@firebase/auth",dd="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function kC(t){jr(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A_(t)},l=new YP(r,s,i,c);return sS(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jr(new er("auth-internal",e=>{const n=fr(e.getProvider("auth").getImmediate());return(r=>new CC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kn(fd,dd,bC(t)),kn(fd,dd,"esm2017")}/**
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
 */const VC=5*60,DC=Up("authIdTokenMaxAge")||VC;let pd=null;const NC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DC)return;const s=n==null?void 0:n.token;pd!==s&&(pd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function OC(t=zp()){const e=Ml(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rS(t,{popupRedirectResolver:SC,persistence:[FS,PS,O_]}),r=Up("authTokenSyncURL");if(r){const i=NC(r);ES(n,i,()=>i(n.currentUser)),vS(n,o=>i(o))}const s=Lp("auth");return s&&iS(n,`http://${s}`),n}kC("Browser");const MC={apiKey:"AIzaSyBEj_lvulwL921R6C-GKJN1eC4haiLIk0Q",authDomain:"vue3-2c548.firebaseapp.com",projectId:"vue3-2c548",storageBucket:"vue3-2c548.appspot.com",messagingSenderId:"975447172434",appId:"1:975447172434:web:d7afa045c68a84b2df468"};jp(MC);const vr=XR(),Jt=OC();let xC=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const gd=Ip("database",()=>{let t=Pn([]),e=Pn(!1);return{documents:t,loadingDoc:e,getUrls:async()=>{e.value=!0;try{const a=uP(Qf(vr,"urls"),hP("user","==",Jt.currentUser.uid));(await _P(a)).forEach(l=>{t.value.push({id:l.id,...l.data()})})}catch(a){console.log(a)}finally{e.value=!1}},leerUrl:async a=>{e.value=!0;try{const c=As(vr,"urls",a),l=await cc(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==Jt.currentUser.uid)throw new Error("No es dueño del documento");return l.data().name}catch(c){console.log(c.message)}finally{e.value=!1}},updateUrl:async(a,c)=>{e.value=!0;try{const l=As(vr,"urls",a),u=await cc(l);if(!u.exists())throw new Error("no existe el doc");if(u.data().user===Jt.currentUser.uid)await yP(l,{name:c}),t.value=t.value.map(h=>h.id===a?{...h,name:c}:h);else throw new Error("no eres el autor")}catch(l){console.log(l.message)}finally{e.value=!1}},addUrl:async a=>{try{const c={name:a,short:xC(6),user:Jt.currentUser.uid},l=await EP(Qf(vr,"urls"),c);t.value.push({...c,id:l.id})}catch(c){console.log(c)}},deleteUrl:async a=>{try{const c=As(vr,"urls",a),l=await cc(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==Jt.currentUser.uid)throw new Error("No es dueño del documento");await vP(As(vr,"urls",a)),t.value=t.value.filter(u=>u.id!==a)}catch(c){console.log(c.message)}}}}),LC=Ip("user",()=>{let t=Pn(null),e=Pn(!1),n=Pn(!1);return{loadingUser:e,loading:n,userData:t,registerUser:async(a,c)=>{e.value=!0;try{const{user:l}=await _S(Jt,a,c);t.value={email:l.email,uid:l.uid},lo.push("/")}catch(l){console.error(l),t.value=null}finally{e.value=!1}},loginUser:async(a,c)=>{e.value=!0;try{const{user:l}=await yS(Jt,a,c);t.value={email:l.email,uid:l.uid},lo.push("/about")}catch(l){l.code==="auth/user-not-found"?alert("No se encontró ningún usuario con esa dirección de correo electrónico."):l.code==="auth/wrong-password"?alert("Clave equivocada"):(console.log(l),t.value=null)}finally{e.value=!1}},logoutUser:async(a,c)=>{gd();try{await wS(Jt)}catch(l){console.log(l)}finally{t.value=null,n.value=!1,lo.push("/login")}},currentUser:()=>new Promise((a,c)=>{const l=IS(Jt,u=>{u?t.value={email:u.email,uid:u.uid}:(t.value=null,gd()),a(u),l()},u=>c(u))})}}),md=async(t,e,n)=>{const r=LC();r.loading=!0,await r.currentUser()?n("/about"):n(),r.loading=!1},lo=vI({history:LE("/fbvue3-exp/"),routes:[{path:"/",name:"home",component:Nw},{path:"/login",name:"login",component:()=>qa(()=>import("./Login-5941468e.js"),[]),beforeEnter:md},{path:"/register",name:"register",component:()=>qa(()=>import("./Register-489b589e.js"),[]),beforeEnter:md},{path:"/about",name:"about",component:()=>qa(()=>import("./AboutView-2cbc58fb.js"),["assets/AboutView-2cbc58fb.js","assets/AboutView-4d995ba2.css"])}]}),Wu=uE(VI);Wu.use(dE());Wu.use(lo);Wu.mount("#app");export{xn as _,ne as a,tn as b,Wt as c,BC as d,be as i,Dt as o,Pn as r,LC as u,UC as v,FC as w};
