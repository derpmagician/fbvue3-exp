(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ou(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Ce={},os=[],jt=()=>{},FE=()=>!1,UE=/^on[^a-z]/,ja=t=>UE.test(t),Nu=t=>t.startsWith("onUpdate:"),Qe=Object.assign,Du=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},BE=Object.prototype.hasOwnProperty,_e=(t,e)=>BE.call(t,e),X=Array.isArray,as=t=>$a(t)==="[object Map]",tg=t=>$a(t)==="[object Set]",oe=t=>typeof t=="function",He=t=>typeof t=="string",Vu=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",ng=t=>Ne(t)&&oe(t.then)&&oe(t.catch),rg=Object.prototype.toString,$a=t=>rg.call(t),jE=t=>$a(t).slice(8,-1),sg=t=>$a(t)==="[object Object]",Mu=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wo=Ou(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$E=/-(\w)/g,un=qa(t=>t.replace($E,(e,n)=>n?n.toUpperCase():"")),qE=/\B([A-Z])/g,ks=qa(t=>t.replace(qE,"-$1").toLowerCase()),Ha=qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qc=qa(t=>t?`on${Ha(t)}`:""),Ti=(t,e)=>!Object.is(t,e),Go=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ua=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let kd;const bl=()=>kd||(kd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lu(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=He(r)?WE(r):Lu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(He(t))return t;if(Ne(t))return t}}const HE=/;(?![^(]*\))/g,KE=/:([^]+)/,zE=/\/\*[^]*?\*\//g;function WE(t){const e={};return t.replace(zE,"").split(HE).forEach(n=>{if(n){const r=n.split(KE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zt(t){let e="";if(He(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const r=Zt(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const GE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",QE=Ou(GE);function ig(t){return!!t||t===""}const qO=t=>He(t)?t:t==null?"":X(t)||Ne(t)&&(t.toString===rg||!oe(t.toString))?JSON.stringify(t,og,2):String(t),og=(t,e)=>e&&e.__v_isRef?og(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:tg(e)?{[`Set(${e.size})`]:[...e.values()]}:Ne(e)&&!X(e)&&!sg(e)?String(e):e;let kt;class ag{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){kt=this}off(){kt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function cg(t){return new ag(t)}function YE(t,e=kt){e&&e.active&&e.effects.push(t)}function xu(){return kt}function lg(t){kt&&kt.cleanups.push(t)}const Fu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ug=t=>(t.w&Xn)>0,hg=t=>(t.n&Xn)>0,JE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Xn},XE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ug(s)&&!hg(s)?s.delete(t):e[n++]=s,s.w&=~Xn,s.n&=~Xn}e.length=n}},ha=new WeakMap;let Js=0,Xn=1;const kl=30;let Ut;const Ir=Symbol(""),Ol=Symbol("");class Uu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,YE(this,r)}run(){if(!this.active)return this.fn();let e=Ut,n=Hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ut,Ut=this,Hn=!0,Xn=1<<++Js,Js<=kl?JE(this):Od(this),this.fn()}finally{Js<=kl&&XE(this),Xn=1<<--Js,Ut=this.parent,Hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ut===this?this.deferStop=!0:this.active&&(Od(this),this.onStop&&this.onStop(),this.active=!1)}}function Od(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Hn=!0;const dg=[];function Os(){dg.push(Hn),Hn=!1}function Ns(){const t=dg.pop();Hn=t===void 0?!0:t}function Pt(t,e,n){if(Hn&&Ut){let r=ha.get(t);r||ha.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Fu()),fg(s)}}function fg(t,e){let n=!1;Js<=kl?hg(t)||(t.n|=Xn,n=!ug(t)):n=!t.has(Ut),n&&(t.add(Ut),Ut.deps.push(t))}function Tn(t,e,n,r,s,i){const o=ha.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?Mu(n)&&a.push(o.get("length")):(a.push(o.get(Ir)),as(t)&&a.push(o.get(Ol)));break;case"delete":X(t)||(a.push(o.get(Ir)),as(t)&&a.push(o.get(Ol)));break;case"set":as(t)&&a.push(o.get(Ir));break}if(a.length===1)a[0]&&Nl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Nl(Fu(c))}}function Nl(t,e){const n=X(t)?t:[...t];for(const r of n)r.computed&&Nd(r);for(const r of n)r.computed||Nd(r)}function Nd(t,e){(t!==Ut||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function ZE(t,e){var n;return(n=ha.get(t))==null?void 0:n.get(e)}const eI=Ou("__proto__,__v_isRef,__isVue"),pg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vu)),tI=Bu(),nI=Bu(!1,!0),rI=Bu(!0),Dd=sI();function sI(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)Pt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Os();const r=re(this)[e].apply(this,n);return Ns(),r}}),t}function iI(t){const e=re(this);return Pt(e,"has",t),e.hasOwnProperty(t)}function Bu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?II:vg:e?yg:_g).get(r))return r;const o=X(r);if(!t){if(o&&_e(Dd,s))return Reflect.get(Dd,s,i);if(s==="hasOwnProperty")return iI}const a=Reflect.get(r,s,i);return(Vu(s)?pg.has(s):eI(s))||(t||Pt(r,"get",s),e)?a:Ve(a)?o&&Mu(s)?a:a.value:Ne(a)?t?za(a):Qt(a):a}}const oI=gg(),aI=gg(!0);function gg(t=!1){return function(n,r,s,i){let o=n[r];if(gs(o)&&Ve(o)&&!Ve(s))return!1;if(!t&&(!da(s)&&!gs(s)&&(o=re(o),s=re(s)),!X(n)&&Ve(o)&&!Ve(s)))return o.value=s,!0;const a=X(n)&&Mu(r)?Number(r)<n.length:_e(n,r),c=Reflect.set(n,r,s,i);return n===re(i)&&(a?Ti(s,o)&&Tn(n,"set",r,s):Tn(n,"add",r,s)),c}}function cI(t,e){const n=_e(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Tn(t,"delete",e,void 0),r}function lI(t,e){const n=Reflect.has(t,e);return(!Vu(e)||!pg.has(e))&&Pt(t,"has",e),n}function uI(t){return Pt(t,"iterate",X(t)?"length":Ir),Reflect.ownKeys(t)}const mg={get:tI,set:oI,deleteProperty:cI,has:lI,ownKeys:uI},hI={get:rI,set(t,e){return!0},deleteProperty(t,e){return!0}},dI=Qe({},mg,{get:nI,set:aI}),ju=t=>t,Ka=t=>Reflect.getPrototypeOf(t);function Po(t,e,n=!1,r=!1){t=t.__v_raw;const s=re(t),i=re(e);n||(e!==i&&Pt(s,"get",e),Pt(s,"get",i));const{has:o}=Ka(s),a=r?ju:n?Hu:wi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function bo(t,e=!1){const n=this.__v_raw,r=re(n),s=re(t);return e||(t!==s&&Pt(r,"has",t),Pt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ko(t,e=!1){return t=t.__v_raw,!e&&Pt(re(t),"iterate",Ir),Reflect.get(t,"size",t)}function Vd(t){t=re(t);const e=re(this);return Ka(e).has.call(e,t)||(e.add(t),Tn(e,"add",t,t)),this}function Md(t,e){e=re(e);const n=re(this),{has:r,get:s}=Ka(n);let i=r.call(n,t);i||(t=re(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ti(e,o)&&Tn(n,"set",t,e):Tn(n,"add",t,e),this}function Ld(t){const e=re(this),{has:n,get:r}=Ka(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Tn(e,"delete",t,void 0),i}function xd(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Tn(t,"clear",void 0,void 0),n}function Oo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=e?ju:t?Hu:wi;return!t&&Pt(a,"iterate",Ir),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function No(t,e,n){return function(...r){const s=this.__v_raw,i=re(s),o=as(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ju:e?Hu:wi;return!e&&Pt(i,"iterate",c?Ol:Ir),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Nn(t){return function(...e){return t==="delete"?!1:this}}function fI(){const t={get(i){return Po(this,i)},get size(){return ko(this)},has:bo,add:Vd,set:Md,delete:Ld,clear:xd,forEach:Oo(!1,!1)},e={get(i){return Po(this,i,!1,!0)},get size(){return ko(this)},has:bo,add:Vd,set:Md,delete:Ld,clear:xd,forEach:Oo(!1,!0)},n={get(i){return Po(this,i,!0)},get size(){return ko(this,!0)},has(i){return bo.call(this,i,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:Oo(!0,!1)},r={get(i){return Po(this,i,!0,!0)},get size(){return ko(this,!0)},has(i){return bo.call(this,i,!0)},add:Nn("add"),set:Nn("set"),delete:Nn("delete"),clear:Nn("clear"),forEach:Oo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=No(i,!1,!1),n[i]=No(i,!0,!1),e[i]=No(i,!1,!0),r[i]=No(i,!0,!0)}),[t,n,e,r]}const[pI,gI,mI,_I]=fI();function $u(t,e){const n=e?t?_I:mI:t?gI:pI;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(_e(n,s)&&s in r?n:r,s,i)}const yI={get:$u(!1,!1)},vI={get:$u(!1,!0)},EI={get:$u(!0,!1)},_g=new WeakMap,yg=new WeakMap,vg=new WeakMap,II=new WeakMap;function TI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wI(t){return t.__v_skip||!Object.isExtensible(t)?0:TI(jE(t))}function Qt(t){return gs(t)?t:qu(t,!1,mg,yI,_g)}function Eg(t){return qu(t,!1,dI,vI,yg)}function za(t){return qu(t,!0,hI,EI,vg)}function qu(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=wI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Kn(t){return gs(t)?Kn(t.__v_raw):!!(t&&t.__v_isReactive)}function gs(t){return!!(t&&t.__v_isReadonly)}function da(t){return!!(t&&t.__v_isShallow)}function Ig(t){return Kn(t)||gs(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Wa(t){return ua(t,"__v_skip",!0),t}const wi=t=>Ne(t)?Qt(t):t,Hu=t=>Ne(t)?za(t):t;function Ku(t){Hn&&Ut&&(t=re(t),fg(t.dep||(t.dep=Fu())))}function zu(t,e){t=re(t);const n=t.dep;n&&Nl(n)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function xe(t){return wg(t,!1)}function Tg(t){return wg(t,!0)}function wg(t,e){return Ve(t)?t:new AI(t,e)}class AI{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:wi(e)}get value(){return Ku(this),this._value}set value(e){const n=this.__v_isShallow||da(e)||gs(e);e=n?e:re(e),Ti(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:wi(e),zu(this))}}function Ge(t){return Ve(t)?t.value:t}const RI={get:(t,e,n)=>Ge(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ve(s)&&!Ve(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ag(t){return Kn(t)?t:new Proxy(t,RI)}class SI{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Ku(this),()=>zu(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function CI(t){return new SI(t)}function PI(t){const e=X(t)?new Array(t.length):{};for(const n in t)e[n]=Rg(t,n);return e}class bI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ZE(re(this._object),this._key)}}class kI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function OI(t,e,n){return Ve(t)?t:oe(t)?new kI(t):Ne(t)&&arguments.length>1?Rg(t,e,n):xe(t)}function Rg(t,e,n){const r=t[e];return Ve(r)?r:new bI(t,e,n)}class NI{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Uu(e,()=>{this._dirty||(this._dirty=!0,zu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=re(this);return Ku(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function DI(t,e,n=!1){let r,s;const i=oe(t);return i?(r=t,s=jt):(r=t.get,s=t.set),new NI(r,s,i||!s,n)}function zn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ga(i,e,n)}return s}function $t(t,e,n,r){if(oe(t)){const i=zn(t,e,n,r);return i&&ng(i)&&i.catch(o=>{Ga(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push($t(t[i],e,n,r));return s}function Ga(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){zn(c,null,10,[t,o,a]);return}}VI(t,n,s,r)}function VI(t,e,n,r=!0){console.error(t)}let Ai=!1,Dl=!1;const lt=[];let en=0;const cs=[];let mn=null,gr=0;const Sg=Promise.resolve();let Wu=null;function Vr(t){const e=Wu||Sg;return t?e.then(this?t.bind(this):t):e}function MI(t){let e=en+1,n=lt.length;for(;e<n;){const r=e+n>>>1;Ri(lt[r])<t?e=r+1:n=r}return e}function Gu(t){(!lt.length||!lt.includes(t,Ai&&t.allowRecurse?en+1:en))&&(t.id==null?lt.push(t):lt.splice(MI(t.id),0,t),Cg())}function Cg(){!Ai&&!Dl&&(Dl=!0,Wu=Sg.then(bg))}function LI(t){const e=lt.indexOf(t);e>en&&lt.splice(e,1)}function xI(t){X(t)?cs.push(...t):(!mn||!mn.includes(t,t.allowRecurse?gr+1:gr))&&cs.push(t),Cg()}function Fd(t,e=Ai?en+1:0){for(;e<lt.length;e++){const n=lt[e];n&&n.pre&&(lt.splice(e,1),e--,n())}}function Pg(t){if(cs.length){const e=[...new Set(cs)];if(cs.length=0,mn){mn.push(...e);return}for(mn=e,mn.sort((n,r)=>Ri(n)-Ri(r)),gr=0;gr<mn.length;gr++)mn[gr]();mn=null,gr=0}}const Ri=t=>t.id==null?1/0:t.id,FI=(t,e)=>{const n=Ri(t)-Ri(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function bg(t){Dl=!1,Ai=!0,lt.sort(FI);const e=jt;try{for(en=0;en<lt.length;en++){const n=lt[en];n&&n.active!==!1&&zn(n,null,14)}}finally{en=0,lt.length=0,Pg(),Ai=!1,Wu=null,(lt.length||cs.length)&&bg()}}function UI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ce;d&&(s=n.map(g=>He(g)?g.trim():g)),h&&(s=n.map(Pl))}let a,c=r[a=Qc(e)]||r[a=Qc(un(e))];!c&&i&&(c=r[a=Qc(ks(e))]),c&&$t(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$t(l,t,6,s)}}function kg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!oe(t)){const c=l=>{const u=kg(l,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ne(t)&&r.set(t,null),null):(X(i)?i.forEach(c=>o[c]=null):Qe(o,i),Ne(t)&&r.set(t,o),o)}function Qa(t,e){return!t||!ja(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,ks(e))||_e(t,e))}let St=null,Og=null;function fa(t){const e=St;return St=t,Og=t&&t.type.__scopeId||null,e}function Yr(t,e=St,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Qd(-1);const i=fa(e);let o;try{o=t(...s)}finally{fa(i),r._d&&Qd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Yc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:v,inheritAttrs:E}=t;let A,P;const N=fa(t);try{if(n.shapeFlag&4){const O=s||r;A=Xt(u.call(O,O,h,i,g,d,v)),P=c}else{const O=e;A=Xt(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),P=e.props?c:BI(c)}}catch(O){ui.length=0,Ga(O,t,1),A=le(Rr)}let U=A;if(P&&E!==!1){const O=Object.keys(P),{shapeFlag:Q}=U;O.length&&Q&7&&(o&&O.some(Nu)&&(P=jI(P,o)),U=Sr(U,P))}return n.dirs&&(U=Sr(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),A=U,fa(N),A}const BI=t=>{let e;for(const n in t)(n==="class"||n==="style"||ja(n))&&((e||(e={}))[n]=t[n]);return e},jI=(t,e)=>{const n={};for(const r in t)(!Nu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function $I(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ud(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Qa(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ud(r,o,l):!0:!!o;return!1}function Ud(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Qa(n,i))return!0}return!1}function qI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const HI=t=>t.__isSuspense;function KI(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):xI(t)}function ci(t,e){return Qu(t,null,e)}const Do={};function Wn(t,e,n){return Qu(t,e,n)}function Qu(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ce){var a;const c=xu()===((a=$e)==null?void 0:a.scope)?$e:null;let l,u=!1,h=!1;if(Ve(t)?(l=()=>t.value,u=da(t)):Kn(t)?(l=()=>t,r=!0):X(t)?(h=!0,u=t.some(O=>Kn(O)||da(O)),l=()=>t.map(O=>{if(Ve(O))return O.value;if(Kn(O))return _r(O);if(oe(O))return zn(O,c,2)})):oe(t)?e?l=()=>zn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),$t(t,c,3,[g])}:l=jt,e&&r){const O=l;l=()=>_r(O())}let d,g=O=>{d=N.onStop=()=>{zn(O,c,4)}},v;if(bi)if(g=jt,e?n&&$t(e,c,3,[l(),h?[]:void 0,g]):l(),s==="sync"){const O=FT();v=O.__watcherHandles||(O.__watcherHandles=[])}else return jt;let E=h?new Array(t.length).fill(Do):Do;const A=()=>{if(N.active)if(e){const O=N.run();(r||u||(h?O.some((Q,se)=>Ti(Q,E[se])):Ti(O,E)))&&(d&&d(),$t(e,c,3,[O,E===Do?void 0:h&&E[0]===Do?[]:E,g]),E=O)}else N.run()};A.allowRecurse=!!e;let P;s==="sync"?P=A:s==="post"?P=()=>At(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),P=()=>Gu(A));const N=new Uu(l,P);e?n?A():E=N.run():s==="post"?At(N.run.bind(N),c&&c.suspense):N.run();const U=()=>{N.stop(),c&&c.scope&&Du(c.scope.effects,N)};return v&&v.push(U),U}function zI(t,e,n){const r=this.proxy,s=He(t)?t.includes(".")?Ng(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const o=$e;ms(this);const a=Qu(s,i.bind(r),n);return o?ms(o):Tr(),a}function Ng(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function _r(t,e){if(!Ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))_r(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)_r(t[n],e);else if(tg(t)||as(t))t.forEach(n=>{_r(n,e)});else if(sg(t))for(const n in t)_r(t[n],e);return t}function HO(t,e){const n=St;if(n===null)return t;const r=ec(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ce]=e[i];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&_r(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Os(),$t(c,n,8,[t.el,a,t,e]),Ns())}}function Ds(t,e){return oe(t)?(()=>Qe({name:t.name},e,{setup:t}))():t}const Qo=t=>!!t.type.__asyncLoader,Dg=t=>t.type.__isKeepAlive;function WI(t,e){Vg(t,"a",e)}function GI(t,e){Vg(t,"da",e)}function Vg(t,e,n=$e){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ya(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Dg(s.parent.vnode)&&QI(r,e,n,s),s=s.parent}}function QI(t,e,n,r){const s=Ya(e,t,r,!0);Ja(()=>{Du(r[e],s)},n)}function Ya(t,e,n=$e,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Os(),ms(n);const a=$t(e,n,t,o);return Tr(),Ns(),a});return r?s.unshift(i):s.push(i),i}}const Pn=t=>(e,n=$e)=>(!bi||t==="sp")&&Ya(t,(...r)=>e(...r),n),YI=Pn("bm"),Ji=Pn("m"),JI=Pn("bu"),XI=Pn("u"),ZI=Pn("bum"),Ja=Pn("um"),eT=Pn("sp"),tT=Pn("rtg"),nT=Pn("rtc");function rT(t,e=$e){Ya("ec",t,e)}const Mg="components";function sT(t,e){return oT(Mg,t,!0,e)||t}const iT=Symbol.for("v-ndc");function oT(t,e,n=!0,r=!1){const s=St||$e;if(s){const i=s.type;if(t===Mg){const a=MT(i,!1);if(a&&(a===e||a===un(e)||a===Ha(un(e))))return i}const o=Bd(s[t]||i[t],e)||Bd(s.appContext[t],e);return!o&&r?i:o}}function Bd(t,e){return t&&(t[e]||t[un(e)]||t[Ha(un(e))])}function KO(t,e,n,r){let s;const i=n&&n[r];if(X(t)||He(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Vl=t=>t?Wg(t)?ec(t)||t.proxy:Vl(t.parent):null,li=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vl(t.parent),$root:t=>Vl(t.root),$emit:t=>t.emit,$options:t=>Yu(t),$forceUpdate:t=>t.f||(t.f=()=>Gu(t.update)),$nextTick:t=>t.n||(t.n=Vr.bind(t.proxy)),$watch:t=>zI.bind(t)}),Jc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&_e(t,e),aT={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Jc(r,e))return o[e]=1,r[e];if(s!==Ce&&_e(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&_e(l,e))return o[e]=3,i[e];if(n!==Ce&&_e(n,e))return o[e]=4,n[e];Ml&&(o[e]=0)}}const u=li[e];let h,d;if(u)return e==="$attrs"&&Pt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&_e(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,_e(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Jc(s,e)?(s[e]=n,!0):r!==Ce&&_e(r,e)?(r[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&_e(t,o)||Jc(e,o)||(a=i[0])&&_e(a,o)||_e(r,o)||_e(li,o)||_e(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jd(t){return X(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ml=!0;function cT(t){const e=Yu(t),n=t.proxy,r=t.ctx;Ml=!1,e.beforeCreate&&$d(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:v,activated:E,deactivated:A,beforeDestroy:P,beforeUnmount:N,destroyed:U,unmounted:O,render:Q,renderTracked:se,renderTriggered:fe,errorCaptured:F,serverPrefetch:z,expose:ie,inheritAttrs:je,components:rt,directives:mt,filters:Yt}=e;if(l&&lT(l,r,null),o)for(const we in o){const ve=o[we];oe(ve)&&(r[we]=ve.bind(n))}if(s){const we=s.call(n,n);Ne(we)&&(t.data=Qt(we))}if(Ml=!0,i)for(const we in i){const ve=i[we],xt=oe(ve)?ve.bind(n,n):oe(ve.get)?ve.get.bind(n,n):jt,he=!oe(ve)&&oe(ve.set)?ve.set.bind(n):jt,Dt=ye({get:xt,set:he});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:st=>Dt.value=st})}if(a)for(const we in a)Lg(a[we],r,n,we);if(c){const we=oe(c)?c.call(n):c;Reflect.ownKeys(we).forEach(ve=>{Yo(ve,we[ve])})}u&&$d(u,t,"c");function ge(we,ve){X(ve)?ve.forEach(xt=>we(xt.bind(n))):ve&&we(ve.bind(n))}if(ge(YI,h),ge(Ji,d),ge(JI,g),ge(XI,v),ge(WI,E),ge(GI,A),ge(rT,F),ge(nT,se),ge(tT,fe),ge(ZI,N),ge(Ja,O),ge(eT,z),X(ie))if(ie.length){const we=t.exposed||(t.exposed={});ie.forEach(ve=>{Object.defineProperty(we,ve,{get:()=>n[ve],set:xt=>n[ve]=xt})})}else t.exposed||(t.exposed={});Q&&t.render===jt&&(t.render=Q),je!=null&&(t.inheritAttrs=je),rt&&(t.components=rt),mt&&(t.directives=mt)}function lT(t,e,n=jt){X(t)&&(t=Ll(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=qt(s.from||r,s.default,!0):i=qt(s.from||r):i=qt(s),Ve(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function $d(t,e,n){$t(X(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lg(t,e,n,r){const s=r.includes(".")?Ng(n,r):()=>n[r];if(He(t)){const i=e[t];oe(i)&&Wn(s,i)}else if(oe(t))Wn(s,t.bind(n));else if(Ne(t))if(X(t))t.forEach(i=>Lg(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&Wn(s,i,t)}}function Yu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>pa(c,l,o,!0)),pa(c,e,o)),Ne(e)&&i.set(e,c),c}function pa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&pa(t,i,n,!0),s&&s.forEach(o=>pa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=uT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const uT={data:qd,props:Hd,emits:Hd,methods:Xs,computed:Xs,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:Xs,directives:Xs,watch:dT,provide:qd,inject:hT};function qd(t,e){return e?t?function(){return Qe(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function hT(t,e){return Xs(Ll(t),Ll(e))}function Ll(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function Xs(t,e){return t?Qe(Object.create(null),t,e):e}function Hd(t,e){return t?X(t)&&X(e)?[...new Set([...t,...e])]:Qe(Object.create(null),jd(t),jd(e??{})):e}function dT(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=Et(t[r],e[r]);return n}function xg(){return{app:null,config:{isNativeTag:FE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fT=0;function pT(t,e){return function(r,s=null){oe(r)||(r=Qe({},r)),s!=null&&!Ne(s)&&(s=null);const i=xg(),o=new Set;let a=!1;const c=i.app={_uid:fT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:UT,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&oe(l.install)?(o.add(l),l.install(c,...u)):oe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=le(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ec(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Si=c;try{return l()}finally{Si=null}}};return c}}let Si=null;function Yo(t,e){if($e){let n=$e.provides;const r=$e.parent&&$e.parent.provides;r===n&&(n=$e.provides=Object.create(r)),n[t]=e}}function qt(t,e,n=!1){const r=$e||St;if(r||Si){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Si._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r&&r.proxy):e}}function gT(){return!!($e||St||Si)}function mT(t,e,n,r=!1){const s={},i={};ua(i,Za,1),t.propsDefaults=Object.create(null),Fg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Eg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function _T(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=re(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Qa(t.emitsOptions,d))continue;const g=e[d];if(c)if(_e(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const v=un(d);s[v]=xl(c,a,v,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{Fg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!_e(e,h)&&((u=ks(h))===h||!_e(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=xl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!_e(e,h))&&(delete i[h],l=!0)}l&&Tn(t,"set","$attrs")}function Fg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Wo(c))continue;const l=e[c];let u;s&&_e(s,u=un(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Qa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=re(n),l=a||Ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=xl(s,c,h,l[h],t,!_e(l,h))}}return o}function xl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=_e(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&oe(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(ms(s),r=l[n]=c.call(null,e),Tr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ks(n))&&(r=!0))}return r}function Ug(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!oe(t)){const u=h=>{c=!0;const[d,g]=Ug(h,e,!0);Qe(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ne(t)&&r.set(t,os),os;if(X(i))for(let u=0;u<i.length;u++){const h=un(i[u]);Kd(h)&&(o[h]=Ce)}else if(i)for(const u in i){const h=un(u);if(Kd(h)){const d=i[u],g=o[h]=X(d)||oe(d)?{type:d}:Qe({},d);if(g){const v=Gd(Boolean,g.type),E=Gd(String,g.type);g[0]=v>-1,g[1]=E<0||v<E,(v>-1||_e(g,"default"))&&a.push(h)}}}const l=[o,a];return Ne(t)&&r.set(t,l),l}function Kd(t){return t[0]!=="$"}function zd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Wd(t,e){return zd(t)===zd(e)}function Gd(t,e){return X(e)?e.findIndex(n=>Wd(n,t)):oe(e)&&Wd(e,t)?0:-1}const Bg=t=>t[0]==="_"||t==="$stable",Ju=t=>X(t)?t.map(Xt):[Xt(t)],yT=(t,e,n)=>{if(e._n)return e;const r=Yr((...s)=>Ju(e(...s)),n);return r._c=!1,r},jg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Bg(s))continue;const i=t[s];if(oe(i))e[s]=yT(s,i,r);else if(i!=null){const o=Ju(i);e[s]=()=>o}}},$g=(t,e)=>{const n=Ju(e);t.slots.default=()=>n},vT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),ua(e,"_",n)):jg(e,t.slots={})}else t.slots={},e&&$g(t,e);ua(t.slots,Za,1)},ET=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Qe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,jg(e,s)),o=e}else e&&($g(t,e),o={default:1});if(i)for(const a in s)!Bg(a)&&!(a in o)&&delete s[a]};function Fl(t,e,n,r,s=!1){if(X(t)){t.forEach((d,g)=>Fl(d,e&&(X(e)?e[g]:e),n,r,s));return}if(Qo(r)&&!s)return;const i=r.shapeFlag&4?ec(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(He(l)?(u[l]=null,_e(h,l)&&(h[l]=null)):Ve(l)&&(l.value=null)),oe(c))zn(c,a,12,[o,u]);else{const d=He(c),g=Ve(c);if(d||g){const v=()=>{if(t.f){const E=d?_e(h,c)?h[c]:u[c]:c.value;s?X(E)&&Du(E,i):X(E)?E.includes(i)||E.push(i):d?(u[c]=[i],_e(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,_e(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,At(v,n)):v()}}}const At=KI;function IT(t){return TT(t)}function TT(t,e){const n=bl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=jt,insertStaticContent:v}=t,E=(p,m,_,I=null,R=null,C=null,x=!1,D=null,V=!!m.dynamicChildren)=>{if(p===m)return;p&&!zs(p,m)&&(I=T(p),st(p,R,C,!0),p=null),m.patchFlag===-2&&(V=!1,m.dynamicChildren=null);const{type:b,ref:G,shapeFlag:$}=m;switch(b){case Xa:A(p,m,_,I);break;case Rr:P(p,m,_,I);break;case Xc:p==null&&N(m,_,I,x);break;case Ft:rt(p,m,_,I,R,C,x,D,V);break;default:$&1?Q(p,m,_,I,R,C,x,D,V):$&6?mt(p,m,_,I,R,C,x,D,V):($&64||$&128)&&b.process(p,m,_,I,R,C,x,D,V,M)}G!=null&&R&&Fl(G,p&&p.ref,C,m||p,!m)},A=(p,m,_,I)=>{if(p==null)r(m.el=a(m.children),_,I);else{const R=m.el=p.el;m.children!==p.children&&l(R,m.children)}},P=(p,m,_,I)=>{p==null?r(m.el=c(m.children||""),_,I):m.el=p.el},N=(p,m,_,I)=>{[p.el,p.anchor]=v(p.children,m,_,I,p.el,p.anchor)},U=({el:p,anchor:m},_,I)=>{let R;for(;p&&p!==m;)R=d(p),r(p,_,I),p=R;r(m,_,I)},O=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),s(p),p=_;s(m)},Q=(p,m,_,I,R,C,x,D,V)=>{x=x||m.type==="svg",p==null?se(m,_,I,R,C,x,D,V):z(p,m,R,C,x,D,V)},se=(p,m,_,I,R,C,x,D)=>{let V,b;const{type:G,props:$,shapeFlag:q,transition:J,dirs:ce}=p;if(V=p.el=o(p.type,C,$&&$.is,$),q&8?u(V,p.children):q&16&&F(p.children,V,null,I,R,C&&G!=="foreignObject",x,D),ce&&dr(p,null,I,"created"),fe(V,p,p.scopeId,x,I),$){for(const Ee in $)Ee!=="value"&&!Wo(Ee)&&i(V,Ee,null,$[Ee],C,p.children,I,R,Ke);"value"in $&&i(V,"value",null,$.value),(b=$.onVnodeBeforeMount)&&Jt(b,I,p)}ce&&dr(p,null,I,"beforeMount");const Ae=(!R||R&&!R.pendingBranch)&&J&&!J.persisted;Ae&&J.beforeEnter(V),r(V,m,_),((b=$&&$.onVnodeMounted)||Ae||ce)&&At(()=>{b&&Jt(b,I,p),Ae&&J.enter(V),ce&&dr(p,null,I,"mounted")},R)},fe=(p,m,_,I,R)=>{if(_&&g(p,_),I)for(let C=0;C<I.length;C++)g(p,I[C]);if(R){let C=R.subTree;if(m===C){const x=R.vnode;fe(p,x,x.scopeId,x.slotScopeIds,R.parent)}}},F=(p,m,_,I,R,C,x,D,V=0)=>{for(let b=V;b<p.length;b++){const G=p[b]=D?xn(p[b]):Xt(p[b]);E(null,G,m,_,I,R,C,x,D)}},z=(p,m,_,I,R,C,x)=>{const D=m.el=p.el;let{patchFlag:V,dynamicChildren:b,dirs:G}=m;V|=p.patchFlag&16;const $=p.props||Ce,q=m.props||Ce;let J;_&&fr(_,!1),(J=q.onVnodeBeforeUpdate)&&Jt(J,_,m,p),G&&dr(m,p,_,"beforeUpdate"),_&&fr(_,!0);const ce=R&&m.type!=="foreignObject";if(b?ie(p.dynamicChildren,b,D,_,I,ce,C):x||ve(p,m,D,null,_,I,ce,C,!1),V>0){if(V&16)je(D,m,$,q,_,I,R);else if(V&2&&$.class!==q.class&&i(D,"class",null,q.class,R),V&4&&i(D,"style",$.style,q.style,R),V&8){const Ae=m.dynamicProps;for(let Ee=0;Ee<Ae.length;Ee++){const De=Ae[Ee],bt=$[De],On=q[De];(On!==bt||De==="value")&&i(D,De,bt,On,R,p.children,_,I,Ke)}}V&1&&p.children!==m.children&&u(D,m.children)}else!x&&b==null&&je(D,m,$,q,_,I,R);((J=q.onVnodeUpdated)||G)&&At(()=>{J&&Jt(J,_,m,p),G&&dr(m,p,_,"updated")},I)},ie=(p,m,_,I,R,C,x)=>{for(let D=0;D<m.length;D++){const V=p[D],b=m[D],G=V.el&&(V.type===Ft||!zs(V,b)||V.shapeFlag&70)?h(V.el):_;E(V,b,G,null,I,R,C,x,!0)}},je=(p,m,_,I,R,C,x)=>{if(_!==I){if(_!==Ce)for(const D in _)!Wo(D)&&!(D in I)&&i(p,D,_[D],null,x,m.children,R,C,Ke);for(const D in I){if(Wo(D))continue;const V=I[D],b=_[D];V!==b&&D!=="value"&&i(p,D,b,V,x,m.children,R,C,Ke)}"value"in I&&i(p,"value",_.value,I.value)}},rt=(p,m,_,I,R,C,x,D,V)=>{const b=m.el=p?p.el:a(""),G=m.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:q,slotScopeIds:J}=m;J&&(D=D?D.concat(J):J),p==null?(r(b,_,I),r(G,_,I),F(m.children,_,G,R,C,x,D,V)):$>0&&$&64&&q&&p.dynamicChildren?(ie(p.dynamicChildren,q,_,R,C,x,D),(m.key!=null||R&&m===R.subTree)&&qg(p,m,!0)):ve(p,m,_,G,R,C,x,D,V)},mt=(p,m,_,I,R,C,x,D,V)=>{m.slotScopeIds=D,p==null?m.shapeFlag&512?R.ctx.activate(m,_,I,x,V):Yt(m,_,I,R,C,x,V):_t(p,m,V)},Yt=(p,m,_,I,R,C,x)=>{const D=p.component=kT(p,I,R);if(Dg(p)&&(D.ctx.renderer=M),OT(D),D.asyncDep){if(R&&R.registerDep(D,ge),!p.el){const V=D.subTree=le(Rr);P(null,V,m,_)}return}ge(D,p,m,_,R,C,x)},_t=(p,m,_)=>{const I=m.component=p.component;if($I(p,m,_))if(I.asyncDep&&!I.asyncResolved){we(I,m,_);return}else I.next=m,LI(I.update),I.update();else m.el=p.el,I.vnode=m},ge=(p,m,_,I,R,C,x)=>{const D=()=>{if(p.isMounted){let{next:G,bu:$,u:q,parent:J,vnode:ce}=p,Ae=G,Ee;fr(p,!1),G?(G.el=ce.el,we(p,G,x)):G=ce,$&&Go($),(Ee=G.props&&G.props.onVnodeBeforeUpdate)&&Jt(Ee,J,G,ce),fr(p,!0);const De=Yc(p),bt=p.subTree;p.subTree=De,E(bt,De,h(bt.el),T(bt),p,R,C),G.el=De.el,Ae===null&&qI(p,De.el),q&&At(q,R),(Ee=G.props&&G.props.onVnodeUpdated)&&At(()=>Jt(Ee,J,G,ce),R)}else{let G;const{el:$,props:q}=m,{bm:J,m:ce,parent:Ae}=p,Ee=Qo(m);if(fr(p,!1),J&&Go(J),!Ee&&(G=q&&q.onVnodeBeforeMount)&&Jt(G,Ae,m),fr(p,!0),$&&me){const De=()=>{p.subTree=Yc(p),me($,p.subTree,p,R,null)};Ee?m.type.__asyncLoader().then(()=>!p.isUnmounted&&De()):De()}else{const De=p.subTree=Yc(p);E(null,De,_,I,p,R,C),m.el=De.el}if(ce&&At(ce,R),!Ee&&(G=q&&q.onVnodeMounted)){const De=m;At(()=>Jt(G,Ae,De),R)}(m.shapeFlag&256||Ae&&Qo(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&p.a&&At(p.a,R),p.isMounted=!0,m=_=I=null}},V=p.effect=new Uu(D,()=>Gu(b),p.scope),b=p.update=()=>V.run();b.id=p.uid,fr(p,!0),b()},we=(p,m,_)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,_T(p,m.props,I,_),ET(p,m.children,_),Os(),Fd(),Ns()},ve=(p,m,_,I,R,C,x,D,V=!1)=>{const b=p&&p.children,G=p?p.shapeFlag:0,$=m.children,{patchFlag:q,shapeFlag:J}=m;if(q>0){if(q&128){he(b,$,_,I,R,C,x,D,V);return}else if(q&256){xt(b,$,_,I,R,C,x,D,V);return}}J&8?(G&16&&Ke(b,R,C),$!==b&&u(_,$)):G&16?J&16?he(b,$,_,I,R,C,x,D,V):Ke(b,R,C,!0):(G&8&&u(_,""),J&16&&F($,_,I,R,C,x,D,V))},xt=(p,m,_,I,R,C,x,D,V)=>{p=p||os,m=m||os;const b=p.length,G=m.length,$=Math.min(b,G);let q;for(q=0;q<$;q++){const J=m[q]=V?xn(m[q]):Xt(m[q]);E(p[q],J,_,null,R,C,x,D,V)}b>G?Ke(p,R,C,!0,!1,$):F(m,_,I,R,C,x,D,V,$)},he=(p,m,_,I,R,C,x,D,V)=>{let b=0;const G=m.length;let $=p.length-1,q=G-1;for(;b<=$&&b<=q;){const J=p[b],ce=m[b]=V?xn(m[b]):Xt(m[b]);if(zs(J,ce))E(J,ce,_,null,R,C,x,D,V);else break;b++}for(;b<=$&&b<=q;){const J=p[$],ce=m[q]=V?xn(m[q]):Xt(m[q]);if(zs(J,ce))E(J,ce,_,null,R,C,x,D,V);else break;$--,q--}if(b>$){if(b<=q){const J=q+1,ce=J<G?m[J].el:I;for(;b<=q;)E(null,m[b]=V?xn(m[b]):Xt(m[b]),_,ce,R,C,x,D,V),b++}}else if(b>q)for(;b<=$;)st(p[b],R,C,!0),b++;else{const J=b,ce=b,Ae=new Map;for(b=ce;b<=q;b++){const yt=m[b]=V?xn(m[b]):Xt(m[b]);yt.key!=null&&Ae.set(yt.key,b)}let Ee,De=0;const bt=q-ce+1;let On=!1,wo=0;const cr=new Array(bt);for(b=0;b<bt;b++)cr[b]=0;for(b=J;b<=$;b++){const yt=p[b];if(De>=bt){st(yt,R,C,!0);continue}let Vt;if(yt.key!=null)Vt=Ae.get(yt.key);else for(Ee=ce;Ee<=q;Ee++)if(cr[Ee-ce]===0&&zs(yt,m[Ee])){Vt=Ee;break}Vt===void 0?st(yt,R,C,!0):(cr[Vt-ce]=b+1,Vt>=wo?wo=Vt:On=!0,E(yt,m[Vt],_,null,R,C,x,D,V),De++)}const qs=On?wT(cr):os;for(Ee=qs.length-1,b=bt-1;b>=0;b--){const yt=ce+b,Vt=m[yt],jr=yt+1<G?m[yt+1].el:I;cr[b]===0?E(null,Vt,_,jr,R,C,x,D,V):On&&(Ee<0||b!==qs[Ee]?Dt(Vt,_,jr,2):Ee--)}}},Dt=(p,m,_,I,R=null)=>{const{el:C,type:x,transition:D,children:V,shapeFlag:b}=p;if(b&6){Dt(p.component.subTree,m,_,I);return}if(b&128){p.suspense.move(m,_,I);return}if(b&64){x.move(p,m,_,M);return}if(x===Ft){r(C,m,_);for(let $=0;$<V.length;$++)Dt(V[$],m,_,I);r(p.anchor,m,_);return}if(x===Xc){U(p,m,_);return}if(I!==2&&b&1&&D)if(I===0)D.beforeEnter(C),r(C,m,_),At(()=>D.enter(C),R);else{const{leave:$,delayLeave:q,afterLeave:J}=D,ce=()=>r(C,m,_),Ae=()=>{$(C,()=>{ce(),J&&J()})};q?q(C,ce,Ae):Ae()}else r(C,m,_)},st=(p,m,_,I=!1,R=!1)=>{const{type:C,props:x,ref:D,children:V,dynamicChildren:b,shapeFlag:G,patchFlag:$,dirs:q}=p;if(D!=null&&Fl(D,null,_,p,!0),G&256){m.ctx.deactivate(p);return}const J=G&1&&q,ce=!Qo(p);let Ae;if(ce&&(Ae=x&&x.onVnodeBeforeUnmount)&&Jt(Ae,m,p),G&6)ar(p.component,_,I);else{if(G&128){p.suspense.unmount(_,I);return}J&&dr(p,null,m,"beforeUnmount"),G&64?p.type.remove(p,m,_,R,M,I):b&&(C!==Ft||$>0&&$&64)?Ke(b,m,_,!1,!0):(C===Ft&&$&384||!R&&G&16)&&Ke(V,m,_),I&&it(p)}(ce&&(Ae=x&&x.onVnodeUnmounted)||J)&&At(()=>{Ae&&Jt(Ae,m,p),J&&dr(p,null,m,"unmounted")},_)},it=p=>{const{type:m,el:_,anchor:I,transition:R}=p;if(m===Ft){fn(_,I);return}if(m===Xc){O(p);return}const C=()=>{s(_),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(p.shapeFlag&1&&R&&!R.persisted){const{leave:x,delayLeave:D}=R,V=()=>x(_,C);D?D(p.el,C,V):V()}else C()},fn=(p,m)=>{let _;for(;p!==m;)_=d(p),s(p),p=_;s(m)},ar=(p,m,_)=>{const{bum:I,scope:R,update:C,subTree:x,um:D}=p;I&&Go(I),R.stop(),C&&(C.active=!1,st(x,p,m,_)),D&&At(D,m),At(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Ke=(p,m,_,I=!1,R=!1,C=0)=>{for(let x=C;x<p.length;x++)st(p[x],m,_,I,R)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),B=(p,m,_)=>{p==null?m._vnode&&st(m._vnode,null,null,!0):E(m._vnode||null,p,m,null,null,null,_),Fd(),Pg(),m._vnode=p},M={p:E,um:st,m:Dt,r:it,mt:Yt,mc:F,pc:ve,pbc:ie,n:T,o:t};let W,me;return e&&([W,me]=e(M)),{render:B,hydrate:W,createApp:pT(B,W)}}function fr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qg(t,e,n=!1){const r=t.children,s=e.children;if(X(r)&&X(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=xn(s[i]),a.el=o.el),n||qg(o,a)),a.type===Xa&&(a.el=o.el)}}function wT(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const AT=t=>t.__isTeleport,Ft=Symbol.for("v-fgt"),Xa=Symbol.for("v-txt"),Rr=Symbol.for("v-cmt"),Xc=Symbol.for("v-stc"),ui=[];let Bt=null;function Ln(t=!1){ui.push(Bt=t?null:[])}function RT(){ui.pop(),Bt=ui[ui.length-1]||null}let Ci=1;function Qd(t){Ci+=t}function Hg(t){return t.dynamicChildren=Ci>0?Bt||os:null,RT(),Ci>0&&Bt&&Bt.push(t),t}function Zs(t,e,n,r,s,i){return Hg(Zn(t,e,n,r,s,i,!0))}function Ul(t,e,n,r,s){return Hg(le(t,e,n,r,s,!0))}function Pi(t){return t?t.__v_isVNode===!0:!1}function zs(t,e){return t.type===e.type&&t.key===e.key}const Za="__vInternal",Kg=({key:t})=>t??null,Jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||Ve(t)||oe(t)?{i:St,r:t,k:e,f:!!n}:t:null);function Zn(t,e=null,n=null,r=0,s=null,i=t===Ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kg(e),ref:e&&Jo(e),scopeId:Og,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:St};return a?(Xu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=He(n)?8:16),Ci>0&&!o&&Bt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Bt.push(c),c}const le=ST;function ST(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===iT)&&(t=Rr),Pi(t)){const a=Sr(t,e,!0);return n&&Xu(a,n),Ci>0&&!i&&Bt&&(a.shapeFlag&6?Bt[Bt.indexOf(t)]=a:Bt.push(a)),a.patchFlag|=-2,a}if(LT(t)&&(t=t.__vccOpts),e){e=CT(e);let{class:a,style:c}=e;a&&!He(a)&&(e.class=Zt(a)),Ne(c)&&(Ig(c)&&!X(c)&&(c=Qe({},c)),e.style=Lu(c))}const o=He(t)?1:HI(t)?128:AT(t)?64:Ne(t)?4:oe(t)?2:0;return Zn(t,e,n,r,s,o,i,!0)}function CT(t){return t?Ig(t)||Za in t?Qe({},t):t:null}function Sr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?bn(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Kg(a),ref:e&&e.ref?n&&s?X(s)?s.concat(Jo(e)):[s,Jo(e)]:Jo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ft?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sr(t.ssContent),ssFallback:t.ssFallback&&Sr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Jr(t=" ",e=0){return le(Xa,null,t,e)}function Zc(t="",e=!1){return e?(Ln(),Ul(Rr,null,t)):le(Rr,null,t)}function Xt(t){return t==null||typeof t=="boolean"?le(Rr):X(t)?le(Ft,null,t.slice()):typeof t=="object"?xn(t):le(Xa,null,String(t))}function xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sr(t)}function Xu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Za in e)?e._ctx=St:s===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:St},n=32):(e=String(e),r&64?(n=16,e=[Jr(e)]):n=8);t.children=e,t.shapeFlag|=n}function bn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zt([e.class,r.class]));else if(s==="style")e.style=Lu([e.style,r.style]);else if(ja(s)){const i=e[s],o=r[s];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Jt(t,e,n,r=null){$t(t,e,7,[n,r])}const PT=xg();let bT=0;function kT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||PT,i={uid:bT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ag(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ug(r,s),emitsOptions:kg(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=UI.bind(null,i),t.ce&&t.ce(i),i}let $e=null;const zg=()=>$e||St;let Zu,zr,Yd="__VUE_INSTANCE_SETTERS__";(zr=bl()[Yd])||(zr=bl()[Yd]=[]),zr.push(t=>$e=t),Zu=t=>{zr.length>1?zr.forEach(e=>e(t)):zr[0](t)};const ms=t=>{Zu(t),t.scope.on()},Tr=()=>{$e&&$e.scope.off(),Zu(null)};function Wg(t){return t.vnode.shapeFlag&4}let bi=!1;function OT(t,e=!1){bi=e;const{props:n,children:r}=t.vnode,s=Wg(t);mT(t,n,s,e),vT(t,r);const i=s?NT(t,e):void 0;return bi=!1,i}function NT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Wa(new Proxy(t.ctx,aT));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?VT(t):null;ms(t),Os();const i=zn(r,t,0,[t.props,s]);if(Ns(),Tr(),ng(i)){if(i.then(Tr,Tr),e)return i.then(o=>{Jd(t,o,e)}).catch(o=>{Ga(o,t,0)});t.asyncDep=i}else Jd(t,i,e)}else Gg(t,e)}function Jd(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Ag(e)),Gg(t,n)}let Xd;function Gg(t,e,n){const r=t.type;if(!t.render){if(!e&&Xd&&!r.render){const s=r.template||Yu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Qe(Qe({isCustomElement:i,delimiters:a},o),c);r.render=Xd(s,l)}}t.render=r.render||jt}ms(t),Os(),cT(t),Ns(),Tr()}function DT(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Pt(t,"get","$attrs"),e[n]}}))}function VT(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return DT(t)},slots:t.slots,emit:t.emit,expose:e}}function ec(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ag(Wa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in li)return li[n](t)},has(e,n){return n in e||n in li}}))}function MT(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function LT(t){return oe(t)&&"__vccOpts"in t}const ye=(t,e)=>DI(t,e,bi);function rs(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!X(e)?Pi(e)?le(t,null,[e]):le(t,e):le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pi(n)&&(n=[n]),le(t,e,n))}const xT=Symbol.for("v-scx"),FT=()=>qt(xT),UT="3.3.4",BT="http://www.w3.org/2000/svg",mr=typeof document<"u"?document:null,Zd=mr&&mr.createElement("template"),jT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?mr.createElementNS(BT,t):mr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>mr.createTextNode(t),createComment:t=>mr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zd.innerHTML=r?`<svg>${t}</svg>`:t;const a=Zd.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function $T(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function qT(t,e,n){const r=t.style,s=He(n);if(n&&!s){if(e&&!He(e))for(const i in e)n[i]==null&&Bl(r,i,"");for(const i in n)Bl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ef=/\s*!important$/;function Bl(t,e,n){if(X(n))n.forEach(r=>Bl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=HT(t,e);ef.test(n)?t.setProperty(ks(r),n.replace(ef,""),"important"):t[r]=n}}const tf=["Webkit","Moz","ms"],el={};function HT(t,e){const n=el[e];if(n)return n;let r=un(e);if(r!=="filter"&&r in t)return el[e]=r;r=Ha(r);for(let s=0;s<tf.length;s++){const i=tf[s]+r;if(i in t)return el[e]=i}return e}const nf="http://www.w3.org/1999/xlink";function KT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(nf,e.slice(6,e.length)):t.setAttributeNS(nf,e,n);else{const i=QE(e);n==null||i&&!ig(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function zT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ig(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Xr(t,e,n,r){t.addEventListener(e,n,r)}function WT(t,e,n,r){t.removeEventListener(e,n,r)}function GT(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=QT(e);if(r){const l=i[e]=XT(r,s);Xr(t,a,l,c)}else o&&(WT(t,a,o,c),i[e]=void 0)}}const rf=/(?:Once|Passive|Capture)$/;function QT(t){let e;if(rf.test(t)){e={};let r;for(;r=t.match(rf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ks(t.slice(2)),e]}let tl=0;const YT=Promise.resolve(),JT=()=>tl||(YT.then(()=>tl=0),tl=Date.now());function XT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$t(ZT(r,n.value),e,5,[r])};return n.value=t,n.attached=JT(),n}function ZT(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const sf=/^on[a-z]/,ew=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?$T(t,r,s):e==="style"?qT(t,n,r):ja(e)?Nu(e)||GT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tw(t,e,r,s))?zT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),KT(t,e,r,s))};function tw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&sf.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||sf.test(e)&&He(n)?!1:e in t}const of=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>Go(e,n):e};function nw(t){t.target.composing=!0}function af(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zO={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=of(s);const i=r||s.props&&s.props.type==="number";Xr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Pl(a)),t._assign(a)}),n&&Xr(t,"change",()=>{t.value=t.value.trim()}),e||(Xr(t,"compositionstart",nw),Xr(t,"compositionend",af),Xr(t,"change",af))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=of(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Pl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},rw=["ctrl","shift","alt","meta"],sw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>rw.some(n=>t[`${n}Key`]&&!e.includes(n))},WO=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=sw[e[s]];if(i&&i(n,e))return}return t(n,...r)},iw=Qe({patchProp:ew},jT);let cf;function ow(){return cf||(cf=IT(iw))}const Qg=(...t)=>{const e=ow().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=aw(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function aw(t){return He(t)?document.querySelector(t):t}var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ga={exports:{}};ga.exports;(function(t,e){var n=200,r="__lodash_hash_undefined__",s=9007199254740991,i="[object Arguments]",o="[object Array]",a="[object Boolean]",c="[object Date]",l="[object Error]",u="[object Function]",h="[object GeneratorFunction]",d="[object Map]",g="[object Number]",v="[object Object]",E="[object Promise]",A="[object RegExp]",P="[object Set]",N="[object String]",U="[object Symbol]",O="[object WeakMap]",Q="[object ArrayBuffer]",se="[object DataView]",fe="[object Float32Array]",F="[object Float64Array]",z="[object Int8Array]",ie="[object Int16Array]",je="[object Int32Array]",rt="[object Uint8Array]",mt="[object Uint8ClampedArray]",Yt="[object Uint16Array]",_t="[object Uint32Array]",ge=/[\\^$.*+?()[\]{}|]/g,we=/\w*$/,ve=/^\[object .+?Constructor\]$/,xt=/^(?:0|[1-9]\d*)$/,he={};he[i]=he[o]=he[Q]=he[se]=he[a]=he[c]=he[fe]=he[F]=he[z]=he[ie]=he[je]=he[d]=he[g]=he[v]=he[A]=he[P]=he[N]=he[U]=he[rt]=he[mt]=he[Yt]=he[_t]=!0,he[l]=he[u]=he[O]=!1;var Dt=typeof Vo=="object"&&Vo&&Vo.Object===Object&&Vo,st=typeof self=="object"&&self&&self.Object===Object&&self,it=Dt||st||Function("return this")(),fn=e&&!e.nodeType&&e,ar=fn&&!0&&t&&!t.nodeType&&t,Ke=ar&&ar.exports===fn;function T(f,y){return f.set(y[0],y[1]),f}function B(f,y){return f.add(y),f}function M(f,y){for(var w=-1,K=f?f.length:0;++w<K&&y(f[w],w,f)!==!1;);return f}function W(f,y){for(var w=-1,K=y.length,ze=f.length;++w<K;)f[ze+w]=y[w];return f}function me(f,y,w,K){var ze=-1,vt=f?f.length:0;for(K&&vt&&(w=f[++ze]);++ze<vt;)w=y(w,f[ze],ze,f);return w}function p(f,y){for(var w=-1,K=Array(f);++w<f;)K[w]=y(w);return K}function m(f,y){return f==null?void 0:f[y]}function _(f){var y=!1;if(f!=null&&typeof f.toString!="function")try{y=!!(f+"")}catch{}return y}function I(f){var y=-1,w=Array(f.size);return f.forEach(function(K,ze){w[++y]=[ze,K]}),w}function R(f,y){return function(w){return f(y(w))}}function C(f){var y=-1,w=Array(f.size);return f.forEach(function(K){w[++y]=K}),w}var x=Array.prototype,D=Function.prototype,V=Object.prototype,b=it["__core-js_shared__"],G=function(){var f=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||"");return f?"Symbol(src)_1."+f:""}(),$=D.toString,q=V.hasOwnProperty,J=V.toString,ce=RegExp("^"+$.call(q).replace(ge,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ae=Ke?it.Buffer:void 0,Ee=it.Symbol,De=it.Uint8Array,bt=R(Object.getPrototypeOf,Object),On=Object.create,wo=V.propertyIsEnumerable,cr=x.splice,qs=Object.getOwnPropertySymbols,yt=Ae?Ae.isBuffer:void 0,Vt=R(Object.keys,Object),jr=Hr(it,"DataView"),Hs=Hr(it,"Map"),jc=Hr(it,"Promise"),$c=Hr(it,"Set"),qc=Hr(it,"WeakMap"),Ks=Hr(Object,"create"),Lv=hr(jr),xv=hr(Hs),Fv=hr(jc),Uv=hr($c),Bv=hr(qc),_d=Ee?Ee.prototype:void 0,yd=_d?_d.valueOf:void 0;function lr(f){var y=-1,w=f?f.length:0;for(this.clear();++y<w;){var K=f[y];this.set(K[0],K[1])}}function jv(){this.__data__=Ks?Ks(null):{}}function $v(f){return this.has(f)&&delete this.__data__[f]}function qv(f){var y=this.__data__;if(Ks){var w=y[f];return w===r?void 0:w}return q.call(y,f)?y[f]:void 0}function Hv(f){var y=this.__data__;return Ks?y[f]!==void 0:q.call(y,f)}function Kv(f,y){var w=this.__data__;return w[f]=Ks&&y===void 0?r:y,this}lr.prototype.clear=jv,lr.prototype.delete=$v,lr.prototype.get=qv,lr.prototype.has=Hv,lr.prototype.set=Kv;function pn(f){var y=-1,w=f?f.length:0;for(this.clear();++y<w;){var K=f[y];this.set(K[0],K[1])}}function zv(){this.__data__=[]}function Wv(f){var y=this.__data__,w=Ao(y,f);if(w<0)return!1;var K=y.length-1;return w==K?y.pop():cr.call(y,w,1),!0}function Gv(f){var y=this.__data__,w=Ao(y,f);return w<0?void 0:y[w][1]}function Qv(f){return Ao(this.__data__,f)>-1}function Yv(f,y){var w=this.__data__,K=Ao(w,f);return K<0?w.push([f,y]):w[K][1]=y,this}pn.prototype.clear=zv,pn.prototype.delete=Wv,pn.prototype.get=Gv,pn.prototype.has=Qv,pn.prototype.set=Yv;function $r(f){var y=-1,w=f?f.length:0;for(this.clear();++y<w;){var K=f[y];this.set(K[0],K[1])}}function Jv(){this.__data__={hash:new lr,map:new(Hs||pn),string:new lr}}function Xv(f){return Ro(this,f).delete(f)}function Zv(f){return Ro(this,f).get(f)}function eE(f){return Ro(this,f).has(f)}function tE(f,y){return Ro(this,f).set(f,y),this}$r.prototype.clear=Jv,$r.prototype.delete=Xv,$r.prototype.get=Zv,$r.prototype.has=eE,$r.prototype.set=tE;function qr(f){this.__data__=new pn(f)}function nE(){this.__data__=new pn}function rE(f){return this.__data__.delete(f)}function sE(f){return this.__data__.get(f)}function iE(f){return this.__data__.has(f)}function oE(f,y){var w=this.__data__;if(w instanceof pn){var K=w.__data__;if(!Hs||K.length<n-1)return K.push([f,y]),this;w=this.__data__=new $r(K)}return w.set(f,y),this}qr.prototype.clear=nE,qr.prototype.delete=rE,qr.prototype.get=sE,qr.prototype.has=iE,qr.prototype.set=oE;function aE(f,y){var w=zc(f)||OE(f)?p(f.length,String):[],K=w.length,ze=!!K;for(var vt in f)(y||q.call(f,vt))&&!(ze&&(vt=="length"||CE(vt,K)))&&w.push(vt);return w}function vd(f,y,w){var K=f[y];(!(q.call(f,y)&&wd(K,w))||w===void 0&&!(y in f))&&(f[y]=w)}function Ao(f,y){for(var w=f.length;w--;)if(wd(f[w][0],y))return w;return-1}function cE(f,y){return f&&Ed(y,Wc(y),f)}function Hc(f,y,w,K,ze,vt,Mt){var wt;if(K&&(wt=vt?K(f,ze,vt,Mt):K(f)),wt!==void 0)return wt;if(!So(f))return f;var Sd=zc(f);if(Sd){if(wt=AE(f),!y)return IE(f,wt)}else{var Kr=ur(f),Cd=Kr==u||Kr==h;if(DE(f))return pE(f,y);if(Kr==v||Kr==i||Cd&&!vt){if(_(f))return vt?f:{};if(wt=RE(Cd?{}:f),!y)return TE(f,cE(wt,f))}else{if(!he[Kr])return vt?f:{};wt=SE(f,Kr,Hc,y)}}Mt||(Mt=new qr);var Pd=Mt.get(f);if(Pd)return Pd;if(Mt.set(f,wt),!Sd)var bd=w?wE(f):Wc(f);return M(bd||f,function(Gc,Co){bd&&(Co=Gc,Gc=f[Co]),vd(wt,Co,Hc(Gc,y,w,K,Co,f,Mt))}),wt}function lE(f){return So(f)?On(f):{}}function uE(f,y,w){var K=y(f);return zc(f)?K:W(K,w(f))}function hE(f){return J.call(f)}function dE(f){if(!So(f)||bE(f))return!1;var y=Rd(f)||_(f)?ce:ve;return y.test(hr(f))}function fE(f){if(!Td(f))return Vt(f);var y=[];for(var w in Object(f))q.call(f,w)&&w!="constructor"&&y.push(w);return y}function pE(f,y){if(y)return f.slice();var w=new f.constructor(f.length);return f.copy(w),w}function Kc(f){var y=new f.constructor(f.byteLength);return new De(y).set(new De(f)),y}function gE(f,y){var w=y?Kc(f.buffer):f.buffer;return new f.constructor(w,f.byteOffset,f.byteLength)}function mE(f,y,w){var K=y?w(I(f),!0):I(f);return me(K,T,new f.constructor)}function _E(f){var y=new f.constructor(f.source,we.exec(f));return y.lastIndex=f.lastIndex,y}function yE(f,y,w){var K=y?w(C(f),!0):C(f);return me(K,B,new f.constructor)}function vE(f){return yd?Object(yd.call(f)):{}}function EE(f,y){var w=y?Kc(f.buffer):f.buffer;return new f.constructor(w,f.byteOffset,f.length)}function IE(f,y){var w=-1,K=f.length;for(y||(y=Array(K));++w<K;)y[w]=f[w];return y}function Ed(f,y,w,K){w||(w={});for(var ze=-1,vt=y.length;++ze<vt;){var Mt=y[ze],wt=K?K(w[Mt],f[Mt],Mt,w,f):void 0;vd(w,Mt,wt===void 0?f[Mt]:wt)}return w}function TE(f,y){return Ed(f,Id(f),y)}function wE(f){return uE(f,Wc,Id)}function Ro(f,y){var w=f.__data__;return PE(y)?w[typeof y=="string"?"string":"hash"]:w.map}function Hr(f,y){var w=m(f,y);return dE(w)?w:void 0}var Id=qs?R(qs,Object):LE,ur=hE;(jr&&ur(new jr(new ArrayBuffer(1)))!=se||Hs&&ur(new Hs)!=d||jc&&ur(jc.resolve())!=E||$c&&ur(new $c)!=P||qc&&ur(new qc)!=O)&&(ur=function(f){var y=J.call(f),w=y==v?f.constructor:void 0,K=w?hr(w):void 0;if(K)switch(K){case Lv:return se;case xv:return d;case Fv:return E;case Uv:return P;case Bv:return O}return y});function AE(f){var y=f.length,w=f.constructor(y);return y&&typeof f[0]=="string"&&q.call(f,"index")&&(w.index=f.index,w.input=f.input),w}function RE(f){return typeof f.constructor=="function"&&!Td(f)?lE(bt(f)):{}}function SE(f,y,w,K){var ze=f.constructor;switch(y){case Q:return Kc(f);case a:case c:return new ze(+f);case se:return gE(f,K);case fe:case F:case z:case ie:case je:case rt:case mt:case Yt:case _t:return EE(f,K);case d:return mE(f,K,w);case g:case N:return new ze(f);case A:return _E(f);case P:return yE(f,K,w);case U:return vE(f)}}function CE(f,y){return y=y??s,!!y&&(typeof f=="number"||xt.test(f))&&f>-1&&f%1==0&&f<y}function PE(f){var y=typeof f;return y=="string"||y=="number"||y=="symbol"||y=="boolean"?f!=="__proto__":f===null}function bE(f){return!!G&&G in f}function Td(f){var y=f&&f.constructor,w=typeof y=="function"&&y.prototype||V;return f===w}function hr(f){if(f!=null){try{return $.call(f)}catch{}try{return f+""}catch{}}return""}function kE(f){return Hc(f,!0,!0)}function wd(f,y){return f===y||f!==f&&y!==y}function OE(f){return NE(f)&&q.call(f,"callee")&&(!wo.call(f,"callee")||J.call(f)==i)}var zc=Array.isArray;function Ad(f){return f!=null&&VE(f.length)&&!Rd(f)}function NE(f){return ME(f)&&Ad(f)}var DE=yt||xE;function Rd(f){var y=So(f)?J.call(f):"";return y==u||y==h}function VE(f){return typeof f=="number"&&f>-1&&f%1==0&&f<=s}function So(f){var y=typeof f;return!!f&&(y=="object"||y=="function")}function ME(f){return!!f&&typeof f=="object"}function Wc(f){return Ad(f)?aE(f):fE(f)}function LE(){return[]}function xE(){return!1}t.exports=kE})(ga,ga.exports);var lw=ga.exports;const lf=cw(lw);function uw({store:t}){const e=lf(t.$state);t.$reset=()=>t.$patch(lf(e))}var hw=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Yg;const tc=t=>Yg=t,Jg=Symbol();function jl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var hi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(hi||(hi={}));function dw(){const t=cg(!0),e=t.run(()=>xe({}));let n=[],r=[];const s=Wa({install(i){tc(s),s._a=i,i.provide(Jg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!hw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Xg=()=>{};function uf(t,e,n,r=Xg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&xu()&&lg(s),s}function Wr(t,...e){t.slice().forEach(n=>{n(...e)})}const fw=t=>t();function $l(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];jl(s)&&jl(r)&&t.hasOwnProperty(n)&&!Ve(r)&&!Kn(r)?t[n]=$l(s,r):t[n]=r}return t}const pw=Symbol();function gw(t){return!jl(t)||!t.hasOwnProperty(pw)}const{assign:Mn}=Object;function mw(t){return!!(Ve(t)&&t.effect)}function _w(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=PI(n.state.value[t]);return Mn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=Wa(ye(()=>{tc(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return c=Zg(t,l,e,n,r,!0),c}function Zg(t,e,n={},r,s,i){let o;const a=Mn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],g;const v=r.state.value[t];!i&&!v&&(r.state.value[t]={}),xe({});let E;function A(F){let z;l=u=!1,typeof F=="function"?(F(r.state.value[t]),z={type:hi.patchFunction,storeId:t,events:g}):($l(r.state.value[t],F),z={type:hi.patchObject,payload:F,storeId:t,events:g});const ie=E=Symbol();Vr().then(()=>{E===ie&&(l=!0)}),u=!0,Wr(h,z,r.state.value[t])}const P=i?function(){const{state:z}=n,ie=z?z():{};this.$patch(je=>{Mn(je,ie)})}:Xg;function N(){o.stop(),h=[],d=[],r._s.delete(t)}function U(F,z){return function(){tc(r);const ie=Array.from(arguments),je=[],rt=[];function mt(ge){je.push(ge)}function Yt(ge){rt.push(ge)}Wr(d,{args:ie,name:F,store:Q,after:mt,onError:Yt});let _t;try{_t=z.apply(this&&this.$id===t?this:Q,ie)}catch(ge){throw Wr(rt,ge),ge}return _t instanceof Promise?_t.then(ge=>(Wr(je,ge),ge)).catch(ge=>(Wr(rt,ge),Promise.reject(ge))):(Wr(je,_t),_t)}}const O={_p:r,$id:t,$onAction:uf.bind(null,d),$patch:A,$reset:P,$subscribe(F,z={}){const ie=uf(h,F,z.detached,()=>je()),je=o.run(()=>Wn(()=>r.state.value[t],rt=>{(z.flush==="sync"?u:l)&&F({storeId:t,type:hi.direct,events:g},rt)},Mn({},c,z)));return ie},$dispose:N},Q=Qt(O);r._s.set(t,Q);const se=r._a&&r._a.runWithContext||fw,fe=r._e.run(()=>(o=cg(),se(()=>o.run(e))));for(const F in fe){const z=fe[F];if(Ve(z)&&!mw(z)||Kn(z))i||(v&&gw(z)&&(Ve(z)?z.value=v[F]:$l(z,v[F])),r.state.value[t][F]=z);else if(typeof z=="function"){const ie=U(F,z);fe[F]=ie,a.actions[F]=z}}return Mn(Q,fe),Mn(re(Q),fe),Object.defineProperty(Q,"$state",{get:()=>r.state.value[t],set:F=>{A(z=>{Mn(z,F)})}}),r._p.forEach(F=>{Mn(Q,o.run(()=>F({store:Q,app:r._a,pinia:r,options:a})))}),v&&i&&n.hydrate&&n.hydrate(Q.$state,v),l=!0,u=!0,Q}function em(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=gT();return a=a||(l?qt(Jg,null):null),a&&tc(a),a=Yg,a._s.has(r)||(i?Zg(r,e,s,a):_w(r,s,a)),a._s.get(r)}return o.$id=r,o}const Xi={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},_s={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},Tt={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},yw={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},tm={dangerouslyHTMLString:!1,multiple:!0,position:Xi.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},vw={rtl:!1,newestOnTop:!1,toastClassName:""},nm={...tm,...vw};({...tm,type:Tt.DEFAULT});var Te=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(Te||{}),ql=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(ql||{});const Ew={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},Iw={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},Tw={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},ww={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"};function rm(t){let e=Ew;if(!t||typeof t=="string")switch(t){case"flip":e=ww;break;case"zoom":e=Tw;break;case"slide":e=Iw;break}else e=t;return e}function Aw(t){return t.containerId||String(t.position)}const nc="will-unmount";function Rw(t=Xi.TOP_RIGHT){return!!document.querySelector(".".concat(Te.CSS_NAMESPACE,"__toast-container--").concat(t))}function Sw(t=Xi.TOP_RIGHT){return"".concat(Te.CSS_NAMESPACE,"__toast-container--").concat(t)}function Cw(t,e,n=!1){const r=["".concat(Te.CSS_NAMESPACE,"__toast-container"),"".concat(Te.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(Te.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return ls(e)?e({position:t,rtl:n,defaultClassName:r}):"".concat(r," ").concat(e||"")}function Pw(t){var e;const{position:n,containerClassName:r,rtl:s=!1,style:i={}}=t,o=Te.CSS_NAMESPACE,a=Sw(n),c=document.querySelector(".".concat(o)),l=document.querySelector(".".concat(a)),u=!!l&&!((e=l.className)!=null&&e.includes(nc)),h=c||document.createElement("div"),d=document.createElement("div");d.className=Cw(n,r,s),d.dataset.testid="".concat(Te.CSS_NAMESPACE,"__toast-container--").concat(n),d.id=Aw(t);for(const g in i)if(Object.prototype.hasOwnProperty.call(i,g)){const v=i[g];d.style[g]=v}return c||(h.className=Te.CSS_NAMESPACE,document.body.appendChild(h)),u||h.appendChild(d),d}function Hl(t){var e,n,r;const s=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(s);i&&i.removeEventListener("animationend",Hl,!1);try{ki[s].unmount(),(r=document.getElementById(s))==null||r.remove(),delete ki[s],delete Ze[s]}catch{}}const ki=Qt({});function bw(t,e){const n=document.getElementById(String(e));n&&(ki[n.id]=t)}function Kl(t,e=!0){const n=String(t);if(!ki[n])return;const r=document.getElementById(n);r&&r.classList.add(nc),e?(Ow(t),r&&r.addEventListener("animationend",Hl,!1)):Hl(n),hn.items=hn.items.filter(s=>s.containerId!==t)}function kw(t){for(const e in ki)Kl(e,t);hn.items=[]}function sm(t,e){const n=document.getElementById(t.toastId);if(n){let r=t;r={...r,...rm(r.transition)};const s=r.appendPosition?"".concat(r.exit,"--").concat(r.position):r.exit;n.className+=" ".concat(s),e&&e(n)}}function Ow(t){for(const e in Ze)if(e===t)for(const n of Ze[e]||[])sm(n)}function Nw(t){const e=Zi().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function eh(t){return document.getElementById(t)}function Dw(t){const e=eh(t.containerId);return e&&e.classList.contains(nc)}function hf(t){var e;const n=Pi(t.content)?re(t.content.props):null;return n??re((e=t.data)!=null?e:{})}function Vw(t){return t?hn.items.filter(e=>e.containerId===t).length>0:hn.items.length>0}function Mw(){if(hn.items.length>0){const t=hn.items.shift();Xo(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const Ze=Qt({}),hn=Qt({items:[]});function Zi(){const t=re(Ze);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function Lw(t){return Zi().find(e=>e.toastId===t)}function Xo(t,e={}){if(Dw(e)){const n=eh(e.containerId);n&&n.addEventListener("animationend",zl.bind(null,t,e),!1)}else zl(t,e)}function zl(t,e={}){const n=eh(e.containerId);n&&n.removeEventListener("animationend",zl.bind(null,t,e),!1);const r=Ze[e.containerId]||[],s=r.length>0;if(!s&&!Rw(e.position)){const i=Pw(e),o=Qg(t0,e);o.mount(i),bw(o,i.id)}s&&(e.position=r[0].position),Vr(()=>{e.updateId?sn.update(e):sn.add(t,e)})}const sn={add(t,e){const{containerId:n=""}=e;n&&(Ze[n]=Ze[n]||[],Ze[n].find(r=>r.toastId===e.toastId)||setTimeout(()=>{var r,s;e.newestOnTop?(r=Ze[n])==null||r.unshift(e):(s=Ze[n])==null||s.push(e),e.onOpen&&e.onOpen(hf(e))},e.delay||0))},remove(t){if(t){const e=Nw(t);if(e){const n=Ze[e];let r=n.find(s=>s.toastId===t);Ze[e]=n.filter(s=>s.toastId!==t),!Ze[e].length&&!Vw(e)&&Kl(e,!1),Mw(),Vr(()=>{r!=null&&r.onClose&&(r.onClose(hf(r)),r=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){Ze[e]=Ze[e]||[];const n=Ze[e].find(r=>r.toastId===t.toastId);n&&setTimeout(()=>{for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const s=t[r];n[r]=s}},t.delay||0)}},clear(t,e=!0){t?Kl(t,e):kw(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,r=document.getElementById(n);r&&(r.removeEventListener("animationend",sn.dismissCallback,!1),setTimeout(()=>{sn.remove(n)}))},dismiss(t){if(t){const e=Zi();for(const n of e)if(n.toastId===t){sm(n,r=>{r.addEventListener("animationend",sn.dismissCallback,!1)});break}}}},im=Qt({}),ma=Qt({});function om(){return Math.random().toString(36).substring(2,9)}function xw(t){return typeof t=="number"&&!isNaN(t)}function Wl(t){return typeof t=="string"}function ls(t){return typeof t=="function"}function rc(...t){return bn(...t)}function Zo(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function Fw(t={}){im["".concat(Te.CSS_NAMESPACE,"-default-options")]=t}function Uw(){return im["".concat(Te.CSS_NAMESPACE,"-default-options")]||nm}function Bw(){return document.documentElement.classList.contains("dark")?"dark":"light"}var ea=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(ea||{});const am={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:Xi.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:_s.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:Tt.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},jw={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:Tt.DEFAULT},theme:{type:String,required:!1,default:_s.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},$w=Ds({name:"ProgressBar",props:jw,setup(t,{attrs:e}){const n=xe(),r=ye(()=>t.hide?"true":"false"),s=ye(()=>({...e.style||{},animationDuration:"".concat(t.autoClose===!0?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"})),i=ye(()=>["".concat(Te.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(Te.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(Te.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(Te.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(Te.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(Te.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),o=ye(()=>"".concat(i.value," ").concat((e==null?void 0:e.class)||"")),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},c=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},l=ye(()=>t.controlledProgress?null:c),u=ye(()=>t.controlledProgress?c:null);return ci(()=>{n.value&&(a(),n.value.onanimationend=l.value,n.value.ontransitionend=u.value)}),()=>le("div",{ref:n,role:"progressbar","aria-hidden":r.value,"aria-label":"notification timer",class:o.value,style:s.value},null)}}),qw=Ds({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:_s.AUTO},type:{type:String,required:!1,default:_s.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>le("button",{class:"".concat(Te.CSS_NAMESPACE,"__close-button ").concat(Te.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[le("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[le("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),sc=({theme:t,type:e,path:n,...r})=>le("svg",bn({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-".concat(e,")")},r),[le("path",{d:n},null)]);function Hw(t){return le(sc,bn(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function Kw(t){return le(sc,bn(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function zw(t){return le(sc,bn(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function Ww(t){return le(sc,bn(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function Gw(){return le("div",{class:"".concat(Te.CSS_NAMESPACE,"__spinner")},null)}const Gl={info:Kw,warning:Hw,success:zw,error:Ww,spinner:Gw},Qw=t=>t in Gl;function Yw({theme:t,type:e,isLoading:n,icon:r}){let s;const i={theme:t,type:e};return n?s=Gl.spinner():r===!1?s=void 0:Zo(r)?s=re(r):ls(r)?s=r(i):Pi(r)?s=Sr(r,i):Wl(r)||xw(r)?s=r:Qw(e)&&(s=Gl[e](i)),s}const Jw=()=>{};function Xw(t,e,n=Te.COLLAPSE_DURATION){const{scrollHeight:r,style:s}=t,i=n;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition="all ".concat(i,"ms"),requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,i)})})}function Zw(t){const e=xe(!1),n=xe(!1),r=xe(!1),s=xe(ea.Enter),i=Qt({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||Te.COLLAPSE_DURATION}),o=i.done||Jw,a=ye(()=>i.appendPosition?"".concat(i.enter,"--").concat(i.position):i.enter),c=ye(()=>i.appendPosition?"".concat(i.exit,"--").concat(i.position):i.exit),l=ye(()=>t.pauseOnHover?{onMouseenter:A,onMouseleave:E}:{});function u(){const N=a.value.split(" ");d().addEventListener(ql.ENTRANCE_ANIMATION_END,E,{once:!0});const U=Q=>{const se=d();Q.target===se&&(se.dispatchEvent(new Event(ql.ENTRANCE_ANIMATION_END)),se.removeEventListener("animationend",U),se.removeEventListener("animationcancel",U),s.value===ea.Enter&&Q.type!=="animationcancel"&&se.classList.remove(...N))},O=()=>{const Q=d();Q.classList.add(...N),Q.addEventListener("animationend",U),Q.addEventListener("animationcancel",U)};t.pauseOnFocusLoss&&g(),O()}function h(){if(!d())return;const N=()=>{const O=d();O.removeEventListener("animationend",N),i.collapse?Xw(O,o,i.collapseDuration):o()},U=()=>{const O=d();s.value=ea.Exit,O&&(O.className+=" ".concat(c.value),O.addEventListener("animationend",N))};n.value||(r.value?N():setTimeout(U))}function d(){return t.toastRef.value}function g(){document.hasFocus()||A(),window.addEventListener("focus",E),window.addEventListener("blur",A)}function v(){window.removeEventListener("focus",E),window.removeEventListener("blur",A)}function E(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function A(){e.value=!1}function P(N){N&&(N.stopPropagation(),N.preventDefault()),n.value=!1}return ci(h),ci(()=>{const N=Zi();n.value=N.findIndex(U=>U.toastId===i.toastId)>-1}),ci(()=>{t.isLoading!==void 0&&(t.loading.value?A():E())}),Ji(u),Ja(()=>{t.pauseOnFocusLoss&&v()}),{isIn:n,isRunning:e,hideToast:P,eventHandlers:l}}const e0=Ds({name:"ToastItem",inheritAttrs:!1,props:am,setup(t){const e=xe(),n=ye(()=>!!t.isLoading),r=ye(()=>t.progress!==void 0&&t.progress!==null),s=ye(()=>Yw(t)),i=ye(()=>["".concat(Te.CSS_NAMESPACE,"__toast"),"".concat(Te.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(Te.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(Te.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:l}=Zw({toastRef:e,loading:n,done:()=>{sn.remove(t.toastId)},...rm(t.transition),...t});return()=>le("div",bn({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:u=>{t.closeOnClick&&c(),t.onClick&&t.onClick(u)}},l.value),[le("div",{role:t.role,"data-testid":"toast-body",class:"".concat(Te.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[s.value!=null&&le("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(Te.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(Te.CSS_NAMESPACE,"--animate-icon ").concat(Te.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[Zo(s.value)?rs(re(s.value),{theme:t.theme,type:t.type}):ls(s.value)?s.value({theme:t.theme,type:t.type}):s.value]),le("div",{"data-testid":"toast-content"},[Zo(t.content)?rs(re(t.content),{toastProps:re(t),closeToast:c,data:t.data}):ls(t.content)?t.content({toastProps:re(t),closeToast:c,data:t.data}):t.dangerouslyHTMLString?rs("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&le(qw,{theme:t.theme,closeToast:u=>{u.stopPropagation(),u.preventDefault(),c()}},null),Zo(t.closeButton)?rs(re(t.closeButton),{closeToast:c,type:t.type,theme:t.theme}):ls(t.closeButton)?t.closeButton({closeToast:c,type:t.type,theme:t.theme}):null,le($w,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:r.value,progress:t.progress,closeToast:t.isLoading?void 0:c},null)])}});let di=0;function cm(){typeof window>"u"||(di&&window.cancelAnimationFrame(di),di=window.requestAnimationFrame(cm),ma.lastUrl!==window.location.href&&(ma.lastUrl=window.location.href,sn.clear()))}const t0=Ds({name:"ToastifyContainer",inheritAttrs:!1,props:am,setup(t){const e=ye(()=>t.containerId),n=ye(()=>Ze[e.value]||[]),r=ye(()=>n.value.filter(s=>s.position===t.position));return Ji(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(cm)}),Ja(()=>{typeof window<"u"&&di&&(window.cancelAnimationFrame(di),ma.lastUrl="")}),()=>le(Ft,null,[r.value.map(s=>{const{toastId:i=""}=s;return le(e0,bn({key:i},s),null)})])}});let nl=!1;function lm(){const t=[];return Zi().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(nc)&&t.push(e)}),t}function n0(t){const e=lm().length,n=t??0;return n>0&&e+hn.items.length>=n}function r0(t){n0(t.limit)&&!t.updateId&&hn.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function rr(t,e,n={}){if(nl)return;n=rc(Uw(),{type:e},re(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=om()),n={...n,content:t,containerId:n.containerId||String(n.position)};const r=Number(n==null?void 0:n.progress);return r<0&&(n.progress=0),r>1&&(n.progress=1),n.theme==="auto"&&(n.theme=Bw()),r0(n),ma.lastUrl=window.location.href,n.multiple?hn.items.length?n.updateId&&Xo(t,n):Xo(t,n):(nl=!0,ke.clearAll(void 0,!1),setTimeout(()=>{Xo(t,n)},0),setTimeout(()=>{nl=!1},390)),n.toastId}const ke=(t,e)=>rr(t,Tt.DEFAULT,e);ke.info=(t,e)=>rr(t,Tt.DEFAULT,{...e,type:Tt.INFO});ke.error=(t,e)=>rr(t,Tt.DEFAULT,{...e,type:Tt.ERROR});ke.warning=(t,e)=>rr(t,Tt.DEFAULT,{...e,type:Tt.WARNING});ke.warn=ke.warning;ke.success=(t,e)=>rr(t,Tt.DEFAULT,{...e,type:Tt.SUCCESS});ke.loading=(t,e)=>rr(t,Tt.DEFAULT,rc(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));ke.dark=(t,e)=>rr(t,Tt.DEFAULT,rc(e,{theme:_s.DARK}));ke.remove=t=>{t?sn.dismiss(t):sn.clear()};ke.clearAll=(t,e)=>{sn.clear(t,e)};ke.isActive=t=>{let e=!1;return e=lm().findIndex(n=>n.toastId===t)>-1,e};ke.update=(t,e={})=>{setTimeout(()=>{const n=Lw(t);if(n){const r=re(n),{content:s}=r,i={...r,...e,toastId:e.toastId||t,updateId:om()},o=i.render||s;delete i.render,rr(o,i.type,i)}},0)};ke.done=t=>{ke.update(t,{isLoading:!1,progress:1})};ke.promise=s0;function s0(t,{pending:e,error:n,success:r},s){var i,o,a;let c;const l={...s||{},autoClose:!1};e&&(c=Wl(e)?ke.loading(e,l):ke.loading(e.render,{...l,...e}));const u={autoClose:(i=s==null?void 0:s.autoClose)!=null?i:!0,closeOnClick:(o=s==null?void 0:s.closeOnClick)!=null?o:!0,closeButton:(a=s==null?void 0:s.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},h=(g,v,E)=>{if(v==null){ke.remove(c);return}const A={type:g,...u,...s,data:E},P=Wl(v)?{render:v}:v;return c?ke.update(c,{...A,...P,isLoading:!1}):ke(P.render,{...A,...P,isLoading:!1}),E},d=ls(t)?t():t;return d.then(g=>{h("success",r,g)}).catch(g=>{h("error",n,g)}),d}ke.POSITION=Xi;ke.THEME=_s;ke.TYPE=Tt;ke.TRANSITIONS=yw;const um={install(t,e={}){i0(e)}};typeof window<"u"&&(window.Vue3Toastify=um);function i0(t={}){const e=rc(nm,t);Fw(e)}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Zr=typeof window<"u";function o0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Re=Object.assign;function rl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Kt(s)?s.map(t):t(s)}return n}const fi=()=>{},Kt=Array.isArray,a0=/\/$/,c0=t=>t.replace(a0,"");function sl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=d0(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function l0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function df(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function u0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ys(e.matched[r],n.matched[s])&&hm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!h0(t[n],e[n]))return!1;return!0}function h0(t,e){return Kt(t)?ff(t,e):Kt(e)?ff(e,t):t===e}function ff(t,e){return Kt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function d0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Oi;(function(t){t.pop="pop",t.push="push"})(Oi||(Oi={}));var pi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(pi||(pi={}));function f0(t){if(!t)if(Zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),c0(t)}const p0=/^[^#]+#/;function g0(t,e){return t.replace(p0,"#")+e}function m0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ic=()=>({left:window.pageXOffset,top:window.pageYOffset});function _0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=m0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function pf(t,e){return(history.state?history.state.position-e:-1)+t}const Ql=new Map;function y0(t,e){Ql.set(t,e)}function v0(t){const e=Ql.get(t);return Ql.delete(t),e}let E0=()=>location.protocol+"//"+location.host;function dm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),df(c,"")}return df(n,t)+r+s}function I0(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=dm(t,location),v=n.value,E=e.value;let A=0;if(d){if(n.value=g,e.value=d,o&&o===v){o=null;return}A=E?d.position-E.position:0}else r(g);s.forEach(P=>{P(n.value,v,{delta:A,type:Oi.pop,direction:A?A>0?pi.forward:pi.back:pi.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(Re({},d.state,{scroll:ic()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function gf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ic():null}}function T0(t){const{history:e,location:n}=window,r={value:dm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:E0()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=Re({},e.state,gf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Re({},s.value,e.state,{forward:c,scroll:ic()});i(u.current,u,!0);const h=Re({},gf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function w0(t){t=f0(t);const e=T0(t),n=I0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:g0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function A0(t){return typeof t=="string"||t&&typeof t=="object"}function fm(t){return typeof t=="string"||typeof t=="symbol"}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pm=Symbol("");var mf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mf||(mf={}));function vs(t,e){return Re(new Error,{type:t,[pm]:!0},e)}function gn(t,e){return t instanceof Error&&pm in t&&(e==null||!!(t.type&e))}const _f="[^/]+?",R0={sensitive:!1,strict:!1,start:!0,end:!0},S0=/[.+*?^${}()[\]/\\]/g;function C0(t,e){const n=Re({},R0,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(S0,"\\$&"),g+=40;else if(d.type===1){const{value:v,repeatable:E,optional:A,regexp:P}=d;i.push({name:v,repeatable:E,optional:A});const N=P||_f;if(N!==_f){g+=10;try{new RegExp(`(${N})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${v}" (${N}): `+O.message)}}let U=E?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(U=A&&l.length<2?`(?:/${U})`:"/"+U),A&&(U+="?"),s+=U,g+=20,A&&(g+=-8),E&&(g+=-20),N===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",v=i[d-1];h[v.name]=g&&v.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:v,repeatable:E,optional:A}=g,P=v in l?l[v]:"";if(Kt(P)&&!E)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const N=Kt(P)?P.join("/"):P;if(!N)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function P0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function b0(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=P0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(yf(r))return 1;if(yf(s))return-1}return s.length-r.length}function yf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const k0={type:0,value:""},O0=/[a-zA-Z0-9_]/;function N0(t){if(!t)return[[]];if(t==="/")return[[k0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:O0.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function D0(t,e,n){const r=C0(N0(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function V0(t,e){const n=[],r=new Map;e=If({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const g=!d,v=M0(u);v.aliasOf=d&&d.record;const E=If(e,u),A=[v];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of U)A.push(Re({},v,{components:d?d.record.components:v.components,path:O,aliasOf:d?d.record:v}))}let P,N;for(const U of A){const{path:O}=U;if(h&&O[0]!=="/"){const Q=h.record.path,se=Q[Q.length-1]==="/"?"":"/";U.path=h.record.path+(O&&se+O)}if(P=D0(U,h,E),d?d.alias.push(P):(N=N||P,N!==P&&N.alias.push(P),g&&u.name&&!Ef(P)&&o(u.name)),v.children){const Q=v.children;for(let se=0;se<Q.length;se++)i(Q[se],P,d&&d.children[se])}d=d||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return N?()=>{o(N)}:fi}function o(u){if(fm(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&b0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!gm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ef(u)&&r.set(u.record.name,u)}function l(u,h){let d,g={},v,E;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw vs(1,{location:u});E=d.record.name,g=Re(vf(h.params,d.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&vf(u.params,d.keys.map(N=>N.name))),v=d.stringify(g)}else if("path"in u)v=u.path,d=n.find(N=>N.re.test(v)),d&&(g=d.parse(v),E=d.record.name);else{if(d=h.name?r.get(h.name):n.find(N=>N.re.test(h.path)),!d)throw vs(1,{location:u,currentLocation:h});E=d.record.name,g=Re({},h.params,u.params),v=d.stringify(g)}const A=[];let P=d;for(;P;)A.unshift(P.record),P=P.parent;return{name:E,path:v,params:g,matched:A,meta:x0(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function vf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function M0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:L0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function L0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ef(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function x0(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function If(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function gm(t,e){return e.children.some(n=>n===t||gm(t,n))}const mm=/#/g,F0=/&/g,U0=/\//g,B0=/=/g,j0=/\?/g,_m=/\+/g,$0=/%5B/g,q0=/%5D/g,ym=/%5E/g,H0=/%60/g,vm=/%7B/g,K0=/%7C/g,Em=/%7D/g,z0=/%20/g;function th(t){return encodeURI(""+t).replace(K0,"|").replace($0,"[").replace(q0,"]")}function W0(t){return th(t).replace(vm,"{").replace(Em,"}").replace(ym,"^")}function Yl(t){return th(t).replace(_m,"%2B").replace(z0,"+").replace(mm,"%23").replace(F0,"%26").replace(H0,"`").replace(vm,"{").replace(Em,"}").replace(ym,"^")}function G0(t){return Yl(t).replace(B0,"%3D")}function Q0(t){return th(t).replace(mm,"%23").replace(j0,"%3F")}function Y0(t){return t==null?"":Q0(t).replace(U0,"%2F")}function _a(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function J0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(_m," "),o=i.indexOf("="),a=_a(o<0?i:i.slice(0,o)),c=o<0?null:_a(i.slice(o+1));if(a in e){let l=e[a];Kt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Tf(t){let e="";for(let n in t){const r=t[n];if(n=G0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Kt(r)?r.map(i=>i&&Yl(i)):[r&&Yl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function X0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Kt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Z0=Symbol(""),wf=Symbol(""),oc=Symbol(""),Im=Symbol(""),Jl=Symbol("");function Ws(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Fn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(vs(4,{from:n,to:e})):h instanceof Error?a(h):A0(h)?a(vs(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function il(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(eA(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Fn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=o0(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Fn(d,n,r,i,o)()}))}}return s}function eA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Af(t){const e=qt(oc),n=qt(Im),r=ye(()=>e.resolve(Ge(t.to))),s=ye(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ys.bind(null,u));if(d>-1)return d;const g=Rf(c[l-2]);return l>1&&Rf(u)===g&&h[h.length-1].path!==g?h.findIndex(ys.bind(null,c[l-2])):d}),i=ye(()=>s.value>-1&&sA(n.params,r.value.params)),o=ye(()=>s.value>-1&&s.value===n.matched.length-1&&hm(n.params,r.value.params));function a(c={}){return rA(c)?e[Ge(t.replace)?"replace":"push"](Ge(t.to)).catch(fi):Promise.resolve()}return{route:r,href:ye(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const tA=Ds({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Af,setup(t,{slots:e}){const n=Qt(Af(t)),{options:r}=qt(oc),s=ye(()=>({[Sf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:rs("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),nA=tA;function rA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Kt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Rf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sf=(t,e,n)=>t??e??n,iA=Ds({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=qt(Jl),s=ye(()=>t.route||r.value),i=qt(wf,0),o=ye(()=>{let l=Ge(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ye(()=>s.value.matched[o.value]);Yo(wf,ye(()=>o.value+1)),Yo(Z0,a),Yo(Jl,s);const c=xe();return Wn(()=>[c.value,a.value,t.name],([l,u,h],[d,g,v])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!ys(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Cf(n.default,{Component:d,route:l});const g=h.props[u],v=g?g===!0?l.params:typeof g=="function"?g(l):g:null,A=rs(d,Re({},v,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Cf(n.default,{Component:A,route:l})||A}}});function Cf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Tm=iA;function oA(t){const e=V0(t.routes,t),n=t.parseQuery||J0,r=t.stringifyQuery||Tf,s=t.history,i=Ws(),o=Ws(),a=Ws(),c=Tg(Dn);let l=Dn;Zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rl.bind(null,T=>""+T),h=rl.bind(null,Y0),d=rl.bind(null,_a);function g(T,B){let M,W;return fm(T)?(M=e.getRecordMatcher(T),W=B):W=T,e.addRoute(W,M)}function v(T){const B=e.getRecordMatcher(T);B&&e.removeRoute(B)}function E(){return e.getRoutes().map(T=>T.record)}function A(T){return!!e.getRecordMatcher(T)}function P(T,B){if(B=Re({},B||c.value),typeof T=="string"){const _=sl(n,T,B.path),I=e.resolve({path:_.path},B),R=s.createHref(_.fullPath);return Re(_,I,{params:d(I.params),hash:_a(_.hash),redirectedFrom:void 0,href:R})}let M;if("path"in T)M=Re({},T,{path:sl(n,T.path,B.path).path});else{const _=Re({},T.params);for(const I in _)_[I]==null&&delete _[I];M=Re({},T,{params:h(_)}),B.params=h(B.params)}const W=e.resolve(M,B),me=T.hash||"";W.params=u(d(W.params));const p=l0(r,Re({},T,{hash:W0(me),path:W.path})),m=s.createHref(p);return Re({fullPath:p,hash:me,query:r===Tf?X0(T.query):T.query||{}},W,{redirectedFrom:void 0,href:m})}function N(T){return typeof T=="string"?sl(n,T,c.value.path):Re({},T)}function U(T,B){if(l!==T)return vs(8,{from:B,to:T})}function O(T){return fe(T)}function Q(T){return O(Re(N(T),{replace:!0}))}function se(T){const B=T.matched[T.matched.length-1];if(B&&B.redirect){const{redirect:M}=B;let W=typeof M=="function"?M(T):M;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=N(W):{path:W},W.params={}),Re({query:T.query,hash:T.hash,params:"path"in W?{}:T.params},W)}}function fe(T,B){const M=l=P(T),W=c.value,me=T.state,p=T.force,m=T.replace===!0,_=se(M);if(_)return fe(Re(N(_),{state:typeof _=="object"?Re({},me,_.state):me,force:p,replace:m}),B||M);const I=M;I.redirectedFrom=B;let R;return!p&&u0(r,W,M)&&(R=vs(16,{to:I,from:W}),Dt(W,W,!0,!1)),(R?Promise.resolve(R):ie(I,W)).catch(C=>gn(C)?gn(C,2)?C:he(C):ve(C,I,W)).then(C=>{if(C){if(gn(C,2))return fe(Re({replace:m},N(C.to),{state:typeof C.to=="object"?Re({},me,C.to.state):me,force:p}),B||I)}else C=rt(I,W,!0,m,me);return je(I,W,C),C})}function F(T,B){const M=U(T,B);return M?Promise.reject(M):Promise.resolve()}function z(T){const B=fn.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(T):T()}function ie(T,B){let M;const[W,me,p]=aA(T,B);M=il(W.reverse(),"beforeRouteLeave",T,B);for(const _ of W)_.leaveGuards.forEach(I=>{M.push(Fn(I,T,B))});const m=F.bind(null,T,B);return M.push(m),Ke(M).then(()=>{M=[];for(const _ of i.list())M.push(Fn(_,T,B));return M.push(m),Ke(M)}).then(()=>{M=il(me,"beforeRouteUpdate",T,B);for(const _ of me)_.updateGuards.forEach(I=>{M.push(Fn(I,T,B))});return M.push(m),Ke(M)}).then(()=>{M=[];for(const _ of p)if(_.beforeEnter)if(Kt(_.beforeEnter))for(const I of _.beforeEnter)M.push(Fn(I,T,B));else M.push(Fn(_.beforeEnter,T,B));return M.push(m),Ke(M)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),M=il(p,"beforeRouteEnter",T,B),M.push(m),Ke(M))).then(()=>{M=[];for(const _ of o.list())M.push(Fn(_,T,B));return M.push(m),Ke(M)}).catch(_=>gn(_,8)?_:Promise.reject(_))}function je(T,B,M){a.list().forEach(W=>z(()=>W(T,B,M)))}function rt(T,B,M,W,me){const p=U(T,B);if(p)return p;const m=B===Dn,_=Zr?history.state:{};M&&(W||m?s.replace(T.fullPath,Re({scroll:m&&_&&_.scroll},me)):s.push(T.fullPath,me)),c.value=T,Dt(T,B,M,m),he()}let mt;function Yt(){mt||(mt=s.listen((T,B,M)=>{if(!ar.listening)return;const W=P(T),me=se(W);if(me){fe(Re(me,{replace:!0}),W).catch(fi);return}l=W;const p=c.value;Zr&&y0(pf(p.fullPath,M.delta),ic()),ie(W,p).catch(m=>gn(m,12)?m:gn(m,2)?(fe(m.to,W).then(_=>{gn(_,20)&&!M.delta&&M.type===Oi.pop&&s.go(-1,!1)}).catch(fi),Promise.reject()):(M.delta&&s.go(-M.delta,!1),ve(m,W,p))).then(m=>{m=m||rt(W,p,!1),m&&(M.delta&&!gn(m,8)?s.go(-M.delta,!1):M.type===Oi.pop&&gn(m,20)&&s.go(-1,!1)),je(W,p,m)}).catch(fi)}))}let _t=Ws(),ge=Ws(),we;function ve(T,B,M){he(T);const W=ge.list();return W.length?W.forEach(me=>me(T,B,M)):console.error(T),Promise.reject(T)}function xt(){return we&&c.value!==Dn?Promise.resolve():new Promise((T,B)=>{_t.add([T,B])})}function he(T){return we||(we=!T,Yt(),_t.list().forEach(([B,M])=>T?M(T):B()),_t.reset()),T}function Dt(T,B,M,W){const{scrollBehavior:me}=t;if(!Zr||!me)return Promise.resolve();const p=!M&&v0(pf(T.fullPath,0))||(W||!M)&&history.state&&history.state.scroll||null;return Vr().then(()=>me(T,B,p)).then(m=>m&&_0(m)).catch(m=>ve(m,T,B))}const st=T=>s.go(T);let it;const fn=new Set,ar={currentRoute:c,listening:!0,addRoute:g,removeRoute:v,hasRoute:A,getRoutes:E,resolve:P,options:t,push:O,replace:Q,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ge.add,isReady:xt,install(T){const B=this;T.component("RouterLink",nA),T.component("RouterView",Tm),T.config.globalProperties.$router=B,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Ge(c)}),Zr&&!it&&c.value===Dn&&(it=!0,O(s.location).catch(me=>{}));const M={};for(const me in Dn)Object.defineProperty(M,me,{get:()=>c.value[me],enumerable:!0});T.provide(oc,B),T.provide(Im,Eg(M)),T.provide(Jl,c);const W=T.unmount;fn.add(T),T.unmount=function(){fn.delete(T),fn.size<1&&(l=Dn,mt&&mt(),mt=null,c.value=Dn,it=!1,we=!1),W()}}};function Ke(T){return T.reduce((B,M)=>B.then(()=>z(M)),Promise.resolve())}return ar}function aA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ys(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ys(l,c))||s.push(c))}return[n,r,s]}function GO(){return qt(oc)}function wm(t){return xu()?(lg(t),!0):!1}function Es(t){return typeof t=="function"?t():Ge(t)}const cA=typeof window<"u"&&typeof document<"u",lA=Object.prototype.toString,uA=t=>lA.call(t)==="[object Object]",Am=()=>{};function hA(t,e){function n(...r){return new Promise((s,i)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(s).catch(i)})}return n}const Rm=t=>t();function dA(t=Rm){const e=xe(!0);function n(){e.value=!1}function r(){e.value=!0}const s=(...i)=>{e.value&&t(...i)};return{isActive:za(e),pause:n,resume:r,eventFilter:s}}function fA(...t){if(t.length!==1)return OI(...t);const e=t[0];return typeof e=="function"?za(CI(()=>({get:e,set:Am}))):xe(e)}function pA(t,e,n={}){const{eventFilter:r=Rm,...s}=n;return Wn(t,hA(r,e),s)}function gA(t,e,n={}){const{eventFilter:r,...s}=n,{eventFilter:i,pause:o,resume:a,isActive:c}=dA(r);return{stop:pA(t,e,{...s,eventFilter:i}),pause:o,resume:a,isActive:c}}function mA(t,e=!0){zg()?Ji(t):e?t():Vr(t)}function _A(t=!1,e={}){const{truthyValue:n=!0,falsyValue:r=!1}=e,s=Ve(t),i=xe(t);function o(a){if(arguments.length)return i.value=a,i.value;{const c=Es(n);return i.value=i.value===c?Es(r):c,i.value}}return s?o:[i,o]}function Sm(t){var e;const n=Es(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Ni=cA?window:void 0;function Pf(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=Ni):[e,n,r,s]=t,!e)return Am;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d,g)=>(u.addEventListener(h,d,g),()=>u.removeEventListener(h,d,g)),c=Wn(()=>[Sm(e),Es(s)],([u,h])=>{if(o(),!u)return;const d=uA(h)?{...h}:h;i.push(...n.flatMap(g=>r.map(v=>a(u,g,v,d))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return wm(l),l}function yA(){const t=xe(!1);return zg()&&Ji(()=>{t.value=!0}),t}function vA(t){const e=yA();return ye(()=>(e.value,!!t()))}function EA(t,e={}){const{window:n=Ni}=e,r=vA(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const i=xe(!1),o=l=>{i.value=l.matches},a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",o):s.removeListener(o))},c=ci(()=>{r.value&&(a(),s=n.matchMedia(Es(t)),"addEventListener"in s?s.addEventListener("change",o):s.addListener(o),i.value=s.matches)});return wm(()=>{c(),a(),s=void 0}),i}const Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Lo="__vueuse_ssr_handlers__",IA=TA();function TA(){return Lo in Mo||(Mo[Lo]=Mo[Lo]||{}),Mo[Lo]}function Cm(t,e){return IA[t]||e}function wA(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const AA={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},bf="vueuse-storage";function RA(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:l=!1,shallow:u,window:h=Ni,eventFilter:d,onError:g=F=>{console.error(F)}}=r,v=(u?Tg:xe)(e);if(!n)try{n=Cm("getDefaultStorage",()=>{var F;return(F=Ni)==null?void 0:F.localStorage})()}catch(F){g(F)}if(!n)return v;const E=Es(e),A=wA(E),P=(s=r.serializer)!=null?s:AA[A],{pause:N,resume:U}=gA(v,()=>O(v.value),{flush:i,deep:o,eventFilter:d});return h&&a&&(Pf(h,"storage",fe),Pf(h,bf,se)),fe(),v;function O(F){try{if(F==null)n.removeItem(t);else{const z=P.write(F),ie=n.getItem(t);ie!==z&&(n.setItem(t,z),h&&h.dispatchEvent(new CustomEvent(bf,{detail:{key:t,oldValue:ie,newValue:z,storageArea:n}})))}}catch(z){g(z)}}function Q(F){const z=F?F.newValue:n.getItem(t);if(z==null)return c&&E!==null&&n.setItem(t,P.write(E)),E;if(!F&&l){const ie=P.read(z);return typeof l=="function"?l(ie,E):A==="object"&&!Array.isArray(ie)?{...E,...ie}:ie}else return typeof z!="string"?z:P.read(z)}function se(F){fe(F.detail)}function fe(F){if(!(F&&F.storageArea!==n)){if(F&&F.key==null){v.value=E;return}if(!(F&&F.key!==t)){N();try{(F==null?void 0:F.newValue)!==P.write(v.value)&&(v.value=Q(F))}catch(z){g(z)}finally{F?Vr(U):U()}}}}}function SA(t){return EA("(prefers-color-scheme: dark)",t)}function CA(t={}){const{selector:e="html",attribute:n="class",initialValue:r="auto",window:s=Ni,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:c,emitAuto:l,disableTransition:u=!0}=t,h={auto:"",light:"light",dark:"dark",...t.modes||{}},d=SA({window:s}),g=ye(()=>d.value?"dark":"light"),v=c||(o==null?fA(r):RA(o,r,i,{window:s,listenToStorageChanges:a})),E=ye(()=>v.value==="auto"?g.value:v.value),A=Cm("updateHTMLAttrs",(O,Q,se)=>{const fe=typeof O=="string"?s==null?void 0:s.document.querySelector(O):Sm(O);if(!fe)return;let F;if(u){F=s.document.createElement("style");const z="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";F.appendChild(document.createTextNode(z)),s.document.head.appendChild(F)}if(Q==="class"){const z=se.split(/\s/g);Object.values(h).flatMap(ie=>(ie||"").split(/\s/g)).filter(Boolean).forEach(ie=>{z.includes(ie)?fe.classList.add(ie):fe.classList.remove(ie)})}else fe.setAttribute(Q,se);u&&(s.getComputedStyle(F).opacity,document.head.removeChild(F))});function P(O){var Q;A(e,n,(Q=h[O])!=null?Q:O)}function N(O){t.onChanged?t.onChanged(O,P):P(O)}Wn(E,N,{flush:"post",immediate:!0}),mA(()=>N(E.value));const U=ye({get(){return l?v.value:E.value},set(O){v.value=O}});try{return Object.assign(U,{store:v,system:g,state:E})}catch{return U}}function PA(t={}){const{valueDark:e="dark",valueLight:n=""}=t,r=CA({...t,onChanged:(i,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,i==="dark",o,i):o(i)},modes:{dark:e,light:n}});return ye({get(){return r.value==="dark"},set(i){const o=i?"dark":"light";r.system.value===o?r.value="auto":r.value=o}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Pm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new kA;const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OA=function(t){const e=Pm(t);return bm.encodeByteArray(e,!0)},ya=function(t){return OA(t).replace(/\./g,"")},km=function(t){try{return bm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function NA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DA=()=>NA().__FIREBASE_DEFAULTS__,VA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&km(t[1]);return e&&JSON.parse(e)},nh=()=>{try{return DA()||VA()||MA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Om=t=>{var e,n;return(n=(e=nh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LA=t=>{const e=Om(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nm=()=>{var t;return(t=nh())===null||t===void 0?void 0:t.config},Dm=t=>{var e;return(e=nh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function FA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ya(JSON.stringify(n)),ya(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function BA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $A(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qA(){try{return typeof indexedDB=="object"}catch{return!1}}function HA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KA,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zA(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new kn(s,a,r)}}function zA(t,e){return t.replace(WA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const WA=/\{\$([^}]+)}/g;function GA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function va(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(kf(i)&&kf(o)){if(!va(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function kf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ei(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ti(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function QA(t,e){const n=new YA(t,e);return n.subscribe.bind(n)}class YA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");JA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ol),s.error===void 0&&(s.error=ol),s.complete===void 0&&(s.complete=ol);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ol(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const pr="[DEFAULT]";/**
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
 */class XA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eR(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZA(t){return t===pr?void 0:t}function eR(t){return t.instantiationMode==="EAGER"}/**
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
 */class tR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const nR={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},rR=de.INFO,sR={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},iR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=sR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rh{constructor(e){this.name=e,this._logLevel=rR,this._logHandler=iR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const oR=(t,e)=>e.some(n=>t instanceof n);let Of,Nf;function aR(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cR(){return Nf||(Nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vm=new WeakMap,Xl=new WeakMap,Mm=new WeakMap,al=new WeakMap,sh=new WeakMap;function lR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vm.set(n,t)}).catch(()=>{}),sh.set(e,t),e}function uR(t){if(Xl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xl.set(t,e)}let Zl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hR(t){Zl=t(Zl)}function dR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cl(this),e,...n);return Mm.set(r,e.sort?e.sort():[e]),Gn(r)}:cR().includes(t)?function(...e){return t.apply(cl(this),e),Gn(Vm.get(this))}:function(...e){return Gn(t.apply(cl(this),e))}}function fR(t){return typeof t=="function"?dR(t):(t instanceof IDBTransaction&&uR(t),oR(t,aR())?new Proxy(t,Zl):t)}function Gn(t){if(t instanceof IDBRequest)return lR(t);if(al.has(t))return al.get(t);const e=fR(t);return e!==t&&(al.set(t,e),sh.set(e,t)),e}const cl=t=>sh.get(t);function pR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Gn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Gn(o.result),c.oldVersion,c.newVersion,Gn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const gR=["get","getKey","getAll","getAllKeys","count"],mR=["put","add","delete","clear"],ll=new Map;function Df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ll.get(e))return ll.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=mR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gR.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ll.set(e,i),i}hR(t=>({...t,get:(e,n,r)=>Df(e,n)||t.get(e,n,r),has:(e,n)=>!!Df(e,n)||t.has(e,n)}));/**
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
 */class _R{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eu="@firebase/app",Vf="0.9.19";/**
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
 */const Pr=new rh("@firebase/app"),vR="@firebase/app-compat",ER="@firebase/analytics-compat",IR="@firebase/analytics",TR="@firebase/app-check-compat",wR="@firebase/app-check",AR="@firebase/auth",RR="@firebase/auth-compat",SR="@firebase/database",CR="@firebase/database-compat",PR="@firebase/functions",bR="@firebase/functions-compat",kR="@firebase/installations",OR="@firebase/installations-compat",NR="@firebase/messaging",DR="@firebase/messaging-compat",VR="@firebase/performance",MR="@firebase/performance-compat",LR="@firebase/remote-config",xR="@firebase/remote-config-compat",FR="@firebase/storage",UR="@firebase/storage-compat",BR="@firebase/firestore",jR="@firebase/firestore-compat",$R="firebase",qR="10.4.0";/**
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
 */const tu="[DEFAULT]",HR={[eu]:"fire-core",[vR]:"fire-core-compat",[IR]:"fire-analytics",[ER]:"fire-analytics-compat",[wR]:"fire-app-check",[TR]:"fire-app-check-compat",[AR]:"fire-auth",[RR]:"fire-auth-compat",[SR]:"fire-rtdb",[CR]:"fire-rtdb-compat",[PR]:"fire-fn",[bR]:"fire-fn-compat",[kR]:"fire-iid",[OR]:"fire-iid-compat",[NR]:"fire-fcm",[DR]:"fire-fcm-compat",[VR]:"fire-perf",[MR]:"fire-perf-compat",[LR]:"fire-rc",[xR]:"fire-rc-compat",[FR]:"fire-gcs",[UR]:"fire-gcs-compat",[BR]:"fire-fst",[jR]:"fire-fst-compat","fire-js":"fire-js",[$R]:"fire-js-all"};/**
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
 */const Ea=new Map,nu=new Map;function KR(t,e){try{t.container.addComponent(e)}catch(n){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Is(t){const e=t.name;if(nu.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;nu.set(e,t);for(const n of Ea.values())KR(n,t);return!0}function ih(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new eo("app","Firebase",zR);/**
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
 */class WR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=qR;function Lm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Qn.create("bad-app-name",{appName:String(s)});if(n||(n=Nm()),!n)throw Qn.create("no-options");const i=Ea.get(s);if(i){if(va(n,i.options)&&va(r,i.config))return i;throw Qn.create("duplicate-app",{appName:s})}const o=new tR(s);for(const c of nu.values())o.addComponent(c);const a=new WR(n,r,o);return Ea.set(s,a),a}function xm(t=tu){const e=Ea.get(t);if(!e&&t===tu&&Nm())return Lm();if(!e)throw Qn.create("no-app",{appName:t});return e}function Yn(t,e,n){var r;let s=(r=HR[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(a.join(" "));return}Is(new Cr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const GR="firebase-heartbeat-database",QR=1,Di="firebase-heartbeat-store";let ul=null;function Fm(){return ul||(ul=pR(GR,QR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Di)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),ul}async function YR(t){try{return await(await Fm()).transaction(Di).objectStore(Di).get(Um(t))}catch(e){if(e instanceof kn)Pr.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(n.message)}}}async function Mf(t,e){try{const r=(await Fm()).transaction(Di,"readwrite");await r.objectStore(Di).put(e,Um(t)),await r.done}catch(n){if(n instanceof kn)Pr.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pr.warn(r.message)}}}function Um(t){return`${t.name}!${t.options.appId}`}/**
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
 */const JR=1024,XR=30*24*60*60*1e3;class ZR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=XR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lf(),{heartbeatsToSend:n,unsentEntries:r}=eS(this._heartbeatsCache.heartbeats),s=ya(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Lf(){return new Date().toISOString().substring(0,10)}function eS(t,e=JR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),xf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qA()?HA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await YR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Mf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xf(t){return ya(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nS(t){Is(new Cr("platform-logger",e=>new _R(e),"PRIVATE")),Is(new Cr("heartbeat",e=>new ZR(e),"PRIVATE")),Yn(eu,Vf,t),Yn(eu,Vf,"esm2017"),Yn("fire-js","")}nS("");var rS="firebase",sS="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn(rS,sS,"app");var iS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,oh=oh||{},te=iS||self;function ac(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function no(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function oS(t){return Object.prototype.hasOwnProperty.call(t,hl)&&t[hl]||(t[hl]=++aS)}var hl="closure_uid_"+(1e9*Math.random()>>>0),aS=0;function cS(t,e,n){return t.call.apply(t.bind,arguments)}function lS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=cS:ht=lS,ht.apply(null,arguments)}function xo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function sr(){this.s=this.s,this.o=this.o}var uS=0;sr.prototype.s=!1;sr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),uS!=0)&&oS(this)};sr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Bm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ah(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ff(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ac(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var hS=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{te.addEventListener("test",()=>{},e),te.removeEventListener("test",()=>{},e)}catch{}return t}();function Vi(t){return/^[\s\xa0]*$/.test(t)}function cc(){var t=te.navigator;return t&&(t=t.userAgent)?t:""}function tn(t){return cc().indexOf(t)!=-1}function ch(t){return ch[" "](t),t}ch[" "]=function(){};function dS(t,e){var n=sC;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var fS=tn("Opera"),Ts=tn("Trident")||tn("MSIE"),jm=tn("Edge"),ru=jm||Ts,$m=tn("Gecko")&&!(cc().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge"))&&!(tn("Trident")||tn("MSIE"))&&!tn("Edge"),pS=cc().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge");function qm(){var t=te.document;return t?t.documentMode:void 0}var su;e:{var dl="",fl=function(){var t=cc();if($m)return/rv:([^\);]+)(\)|;)/.exec(t);if(jm)return/Edge\/([\d\.]+)/.exec(t);if(Ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(pS)return/WebKit\/(\S+)/.exec(t);if(fS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(fl&&(dl=fl?fl[1]:""),Ts){var pl=qm();if(pl!=null&&pl>parseFloat(dl)){su=String(pl);break e}}su=dl}var iu;if(te.document&&Ts){var Uf=qm();iu=Uf||parseInt(su,10)||void 0}else iu=void 0;var gS=iu;function Mi(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($m){e:{try{ch(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:mS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Mi.$.h.call(this)}}Xe(Mi,dt);var mS={2:"touch",3:"pen",4:"mouse"};Mi.prototype.h=function(){Mi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ro="closure_listenable_"+(1e6*Math.random()|0),_S=0;function yS(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++_S,this.fa=this.ia=!1}function lc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function lh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function vS(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Hm(t){const e={};for(const n in t)e[n]=t[n];return e}const Bf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Km(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Bf.length;i++)n=Bf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function uc(t){this.src=t,this.g={},this.h=0}uc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=au(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new yS(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function ou(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Bm(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(lc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function au(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var uh="closure_lm_"+(1e6*Math.random()|0),gl={};function zm(t,e,n,r,s){if(r&&r.once)return Gm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)zm(t,e[i],n,r,s);return null}return n=fh(n),t&&t[ro]?t.O(e,n,no(r)?!!r.capture:!!r,s):Wm(t,e,n,!1,r,s)}function Wm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=no(s)?!!s.capture:!!s,a=dh(t);if(a||(t[uh]=a=new uc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=ES(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)hS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ym(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ES(){function t(n){return e.call(t.src,t.listener,n)}const e=IS;return t}function Gm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Gm(t,e[i],n,r,s);return null}return n=fh(n),t&&t[ro]?t.P(e,n,no(r)?!!r.capture:!!r,s):Wm(t,e,n,!0,r,s)}function Qm(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Qm(t,e[i],n,r,s);else r=no(r)?!!r.capture:!!r,n=fh(n),t&&t[ro]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=au(i,n,r,s),-1<n&&(lc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=dh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=au(e,n,r,s)),(n=-1<t?e[t]:null)&&hh(n))}function hh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ro])ou(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ym(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=dh(e))?(ou(n,t),n.h==0&&(n.src=null,e[uh]=null)):lc(t)}}}function Ym(t){return t in gl?gl[t]:gl[t]="on"+t}function IS(t,e){if(t.fa)t=!0;else{e=new Mi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&hh(t),t=n.call(r,e)}return t}function dh(t){return t=t[uh],t instanceof uc?t:null}var ml="__closure_events_fn_"+(1e9*Math.random()>>>0);function fh(t){return typeof t=="function"?t:(t[ml]||(t[ml]=function(e){return t.handleEvent(e)}),t[ml])}function Je(){sr.call(this),this.i=new uc(this),this.S=this,this.J=null}Xe(Je,sr);Je.prototype[ro]=!0;Je.prototype.removeEventListener=function(t,e,n,r){Qm(this,t,e,n,r)};function nt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var s=e;e=new dt(r,t),Km(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Fo(o,r,!0,e)&&s}if(o=e.g=t,s=Fo(o,r,!0,e)&&s,s=Fo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Fo(o,r,!1,e)&&s}Je.prototype.N=function(){if(Je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)lc(n[r]);delete t.g[e],t.h--}}this.J=null};Je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Fo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ou(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ph=te.JSON.stringify;class TS{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function wS(){var t=gh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class AS{constructor(){this.h=this.g=null}add(e,n){const r=Jm.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Jm=new TS(()=>new RS,t=>t.reset());class RS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function SS(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function CS(t){te.setTimeout(()=>{throw t},0)}let Li,xi=!1,gh=new AS,Xm=()=>{const t=te.Promise.resolve(void 0);Li=()=>{t.then(PS)}};var PS=()=>{for(var t;t=wS();){try{t.h.call(t.g)}catch(n){CS(n)}var e=Jm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xi=!1};function hc(t,e){Je.call(this),this.h=t||1,this.g=e||te,this.j=ht(this.qb,this),this.l=Date.now()}Xe(hc,Je);L=hc.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(mh(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function mh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){hc.$.N.call(this),mh(this),delete this.g};function _h(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:te.setTimeout(t,e||0)}function Zm(t){t.g=_h(()=>{t.g=null,t.i&&(t.i=!1,Zm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bS extends sr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Zm(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(t){sr.call(this),this.h=t,this.g={}}Xe(Fi,sr);var jf=[];function e_(t,e,n,r){Array.isArray(n)||(n&&(jf[0]=n.toString()),n=jf);for(var s=0;s<n.length;s++){var i=zm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function t_(t){lh(t.g,function(e,n){this.g.hasOwnProperty(n)&&hh(e)},t),t.g={}}Fi.prototype.N=function(){Fi.$.N.call(this),t_(this)};Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function dc(){this.g=!0}dc.prototype.Ea=function(){this.g=!1};function kS(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function OS(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function ss(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+DS(t,n)+(r?" "+r:"")})}function NS(t,e){t.info(function(){return"TIMEOUT: "+e})}dc.prototype.info=function(){};function DS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ph(n)}catch{return e}}var Mr={},$f=null;function fc(){return $f=$f||new Je}Mr.Ta="serverreachability";function n_(t){dt.call(this,Mr.Ta,t)}Xe(n_,dt);function Ui(t){const e=fc();nt(e,new n_(e))}Mr.STAT_EVENT="statevent";function r_(t,e){dt.call(this,Mr.STAT_EVENT,t),this.stat=e}Xe(r_,dt);function It(t){const e=fc();nt(e,new r_(e,t))}Mr.Ua="timingevent";function s_(t,e){dt.call(this,Mr.Ua,t),this.size=e}Xe(s_,dt);function so(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){t()},e)}var pc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},i_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function yh(){}yh.prototype.h=null;function qf(t){return t.h||(t.h=t.i())}function o_(){}var io={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function vh(){dt.call(this,"d")}Xe(vh,dt);function Eh(){dt.call(this,"c")}Xe(Eh,dt);var cu;function gc(){}Xe(gc,yh);gc.prototype.g=function(){return new XMLHttpRequest};gc.prototype.i=function(){return{}};cu=new gc;function oo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Fi(this),this.P=VS,t=ru?125:void 0,this.V=new hc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new a_}function a_(){this.i=null,this.g="",this.h=!1}var VS=45e3,lu={},Ia={};L=oo.prototype;L.setTimeout=function(t){this.P=t};function uu(t,e,n){t.L=1,t.v=_c(wn(e)),t.s=n,t.S=!0,c_(t,null)}function c_(t,e){t.G=Date.now(),ao(t),t.A=wn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),m_(n.i,"t",r),t.C=0,n=t.l.J,t.h=new a_,t.g=x_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new bS(ht(t.Pa,t,t.g),t.O)),e_(t.U,t.g,"readystatechange",t.nb),e=t.I?Hm(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ui(),kS(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&nn(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const u=nn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ru||this.g&&(this.h.h||this.g.ja()||Wf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ui(3):Ui(2)),mc(this);var n=this.g.da();this.ca=n;t:if(l_(this)){var r=Wf(this.g);t="";var s=r.length,i=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),gi(this);var o="";break t}this.h.i=new te.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,OS(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vi(a)){var l=a;break t}}l=null}if(n=l)ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hu(this,n);else{this.i=!1,this.o=3,It(12),yr(this),gi(this);break e}}this.S?(u_(this,u,o),ru&&this.i&&u==3&&(e_(this.U,this.V,"tick",this.mb),this.V.start())):(ss(this.j,this.m,o,null),hu(this,o)),u==4&&yr(this),this.i&&!this.J&&(u==4?D_(this.l,this):(this.i=!1,ao(this)))}else tC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,It(12)):(this.o=0,It(13)),yr(this),gi(this)}}}catch{}finally{}};function l_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function u_(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=MS(t,n),s==Ia){e==4&&(t.o=4,It(14),r=!1),ss(t.j,t.m,null,"[Incomplete Response]");break}else if(s==lu){t.o=4,It(15),ss(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ss(t.j,t.m,s,null),hu(t,s);l_(t)&&s!=Ia&&s!=lu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,It(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sh(e),e.M=!0,It(11))):(ss(t.j,t.m,n,"[Invalid Chunked Response]"),yr(t),gi(t))}L.mb=function(){if(this.g){var t=nn(this.g),e=this.g.ja();this.C<e.length&&(mc(this),u_(this,t,e),this.i&&t!=4&&ao(this))}};function MS(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ia:(n=Number(e.substring(n,r)),isNaN(n)?lu:(r+=1,r+n>e.length?Ia:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,yr(this)};function ao(t){t.Y=Date.now()+t.P,h_(t,t.P)}function h_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=so(ht(t.lb,t),e)}function mc(t){t.B&&(te.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(NS(this.j,this.A),this.L!=2&&(Ui(),It(17)),yr(this),this.o=2,gi(this)):h_(this,this.Y-t)};function gi(t){t.l.H==0||t.J||D_(t.l,t)}function yr(t){mc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,mh(t.V),t_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function hu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||du(n.i,t))){if(!t.K&&du(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Aa(n),Ic(n);else break e;Rh(n),It(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=so(ht(n.ib,n),6e3));if(1>=v_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else vr(n,11)}else if((t.K||n.g==t)&&Aa(n),!Vi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ih(i,i.h),i.h=null))}if(r.F){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Pe(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=L_(r,r.J?r.pa:null,r.Y),o.K){E_(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(mc(a),ao(a)),r.g=o}else O_(r);0<n.j.length&&Tc(n)}else l[0]!="stop"&&l[0]!="close"||vr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?vr(n,7):Ah(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ui(4)}catch{}}function LS(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ac(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function xS(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ac(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function d_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ac(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=xS(t),r=LS(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var f_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FS(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function wr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wr){this.h=t.h,Ta(this,t.j),this.s=t.s,this.g=t.g,wa(this,t.m),this.l=t.l;var e=t.i,n=new Bi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hf(this,n),this.o=t.o}else t&&(e=String(t).match(f_))?(this.h=!1,Ta(this,e[1]||"",!0),this.s=ni(e[2]||""),this.g=ni(e[3]||"",!0),wa(this,e[4]),this.l=ni(e[5]||"",!0),Hf(this,e[6]||"",!0),this.o=ni(e[7]||"")):(this.h=!1,this.i=new Bi(null,this.h))}wr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ri(e,Kf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ri(e,Kf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ri(n,n.charAt(0)=="/"?jS:BS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ri(n,qS)),t.join("")};function wn(t){return new wr(t)}function Ta(t,e,n){t.j=n?ni(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function wa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hf(t,e,n){e instanceof Bi?(t.i=e,HS(t.i,t.h)):(n||(e=ri(e,$S)),t.i=new Bi(e,t.h))}function Pe(t,e,n){t.i.set(e,n)}function _c(t){return Pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ni(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ri(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,US),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function US(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Kf=/[#\/\?@]/g,BS=/[#\?:]/g,jS=/[#\?]/g,$S=/[#\?@]/g,qS=/#/g;function Bi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ir(t){t.g||(t.g=new Map,t.h=0,t.i&&FS(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=Bi.prototype;L.add=function(t,e){ir(this),this.i=null,t=Ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function p_(t,e){ir(t),e=Ms(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function g_(t,e){return ir(t),e=Ms(t,e),t.g.has(e)}L.forEach=function(t,e){ir(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};L.ta=function(){ir(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};L.Z=function(t){ir(this);let e=[];if(typeof t=="string")g_(this,t)&&(e=e.concat(this.g.get(Ms(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return ir(this),this.i=null,t=Ms(this,t),g_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function m_(t,e,n){p_(t,e),0<n.length&&(t.i=null,t.g.set(Ms(t,e),ah(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function HS(t,e){e&&!t.j&&(ir(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(p_(this,r),m_(this,s,n))},t)),t.j=e}var KS=class{constructor(t,e){this.g=t,this.map=e}};function __(t){this.l=t||zS,te.PerformanceNavigationTiming?(t=te.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zS=10;function y_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function v_(t){return t.h?1:t.g?t.g.size:0}function du(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ih(t,e){t.g?t.g.add(e):t.h=e}function E_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}__.prototype.cancel=function(){if(this.i=I_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function I_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ah(t.i)}var WS=class{stringify(t){return te.JSON.stringify(t,void 0)}parse(t){return te.JSON.parse(t,void 0)}};function GS(){this.g=new WS}function QS(t,e,n){const r=n||"";try{d_(t,function(s,i){let o=s;no(s)&&(o=ph(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function YS(t,e){const n=new dc;if(te.Image){const r=new Image;r.onload=xo(Uo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=xo(Uo,n,r,"TestLoadImage: error",!1,e),r.onabort=xo(Uo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=xo(Uo,n,r,"TestLoadImage: timeout",!1,e),te.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Uo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function yc(t){this.l=t.ec||null,this.j=t.ob||!1}Xe(yc,yh);yc.prototype.g=function(){return new vc(this.l,this.j)};yc.prototype.i=function(t){return function(){return t}}({});function vc(t,e){Je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Th,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(vc,Je);var Th=0;L=vc.prototype;L.open=function(t,e){if(this.readyState!=Th)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ji(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||te).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,co(this)),this.readyState=Th};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof te.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;T_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function T_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?co(this):ji(this),this.readyState==3&&T_(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,co(this))};L.Ya=function(t){this.g&&(this.response=t,co(this))};L.ka=function(){this.g&&co(this)};function co(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ji(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ji(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var JS=te.JSON.parse;function Le(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=w_,this.L=this.M=!1}Xe(Le,Je);var w_="",XS=/^https?$/i,ZS=["POST","PUT"];L=Le.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():cu.g(),this.C=this.u?qf(this.u):qf(cu),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){zf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=te.FormData&&t instanceof te.FormData,!(0<=Bm(ZS,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{S_(this),0<this.B&&((this.L=eC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=_h(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){zf(this,i)}};function eC(t){return Ts&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof oh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function zf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,A_(t),Ec(t)}function A_(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),Ec(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ec(this,!0)),Le.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?R_(this):this.kb())};L.kb=function(){R_(this)};function R_(t){if(t.h&&typeof oh<"u"&&(!t.C[1]||nn(t)!=4||t.da()!=2)){if(t.v&&nn(t)==4)_h(t.La,0,t);else if(nt(t,"readystatechange"),nn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(f_)[1]||null;!s&&te.self&&te.self.location&&(s=te.self.location.protocol.slice(0,-1)),r=!XS.test(s?s.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var i=2<nn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",A_(t)}}finally{Ec(t)}}}}function Ec(t,e){if(t.g){S_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function S_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(te.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function nn(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),JS(e)}};function Wf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case w_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function tC(t){const e={};t=(t.g&&2<=nn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Vi(t[r]))continue;var n=SS(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}vS(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function C_(t){let e="";return lh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function wh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=C_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Pe(t,e,n))}function Gs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function P_(t){this.Ga=0,this.j=[],this.l=new dc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Gs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Gs("baseRetryDelayMs",5e3,t),this.hb=Gs("retryDelaySeedMs",1e4,t),this.eb=Gs("forwardChannelMaxRetries",2,t),this.xa=Gs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new __(t&&t.concurrentRequestLimit),this.Ja=new GS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=P_.prototype;L.ra=8;L.H=1;function Ah(t){if(b_(t),t.H==3){var e=t.W++,n=wn(t.I);if(Pe(n,"SID",t.K),Pe(n,"RID",e),Pe(n,"TYPE","terminate"),lo(t,n),e=new oo(t,t.l,e),e.L=2,e.v=_c(wn(n)),n=!1,te.navigator&&te.navigator.sendBeacon)try{n=te.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&te.Image&&(new Image().src=e.v,n=!0),n||(e.g=x_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ao(e)}M_(t)}function Ic(t){t.g&&(Sh(t),t.g.cancel(),t.g=null)}function b_(t){Ic(t),t.u&&(te.clearTimeout(t.u),t.u=null),Aa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&te.clearTimeout(t.m),t.m=null)}function Tc(t){if(!y_(t.i)&&!t.m){t.m=!0;var e=t.Na;Li||Xm(),xi||(Li(),xi=!0),gh.add(e,t),t.C=0}}function nC(t,e){return v_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=so(ht(t.Na,t,e),V_(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new oo(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Hm(i),Km(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=k_(this,s,e),n=wn(this.I),Pe(n,"RID",t),Pe(n,"CVER",22),this.F&&Pe(n,"X-HTTP-Session-Id",this.F),lo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(C_(i)))+"&"+e:this.o&&wh(n,this.o,i)),Ih(this.i,s),this.bb&&Pe(n,"TYPE","init"),this.P?(Pe(n,"$req",e),Pe(n,"SID","null"),s.aa=!0,uu(s,n,null)):uu(s,n,e),this.H=2}}else this.H==3&&(t?Gf(this,t):this.j.length==0||y_(this.i)||Gf(this))};function Gf(t,e){var n;e?n=e.m:n=t.W++;const r=wn(t.I);Pe(r,"SID",t.K),Pe(r,"RID",n),Pe(r,"AID",t.V),lo(t,r),t.o&&t.s&&wh(r,t.o,t.s),n=new oo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=k_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ih(t.i,n),uu(n,r,e)}function lo(t,e){t.na&&lh(t.na,function(n,r){Pe(e,r,n)}),t.h&&d_({},function(n,r){Pe(e,r,n)})}function k_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ht(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{QS(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function O_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Li||Xm(),xi||(Li(),xi=!0),gh.add(e,t),t.A=0}}function Rh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=so(ht(t.Ma,t),V_(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,N_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=so(ht(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,It(10),Ic(this),N_(this))};function Sh(t){t.B!=null&&(te.clearTimeout(t.B),t.B=null)}function N_(t){t.g=new oo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=wn(t.wa);Pe(e,"RID","rpc"),Pe(e,"SID",t.K),Pe(e,"AID",t.V),Pe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Pe(e,"TO",t.qa),Pe(e,"TYPE","xmlhttp"),lo(t,e),t.o&&t.s&&wh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=_c(wn(e)),n.s=null,n.S=!0,c_(n,t)}L.ib=function(){this.v!=null&&(this.v=null,Ic(this),Rh(this),It(19))};function Aa(t){t.v!=null&&(te.clearTimeout(t.v),t.v=null)}function D_(t,e){var n=null;if(t.g==e){Aa(t),Sh(t),t.g=null;var r=2}else if(du(t.i,e))n=e.F,E_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=fc(),nt(r,new s_(r,n)),Tc(t)}else O_(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&nC(t,e)||r==2&&Rh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:vr(t,5);break;case 4:vr(t,10);break;case 3:vr(t,6);break;default:vr(t,2)}}}function V_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function vr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ht(t.pb,t);n||(n=new wr("//www.google.com/images/cleardot.gif"),te.location&&te.location.protocol=="http"||Ta(n,"https"),_c(n)),YS(n.toString(),r)}else It(2);t.H=0,t.h&&t.h.za(e),M_(t),b_(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),It(2)):(this.l.info("Failed to ping google.com"),It(1))};function M_(t){if(t.H=0,t.ma=[],t.h){const e=I_(t.i);(e.length!=0||t.j.length!=0)&&(Ff(t.ma,e),Ff(t.ma,t.j),t.i.i.length=0,ah(t.j),t.j.length=0),t.h.ya()}}function L_(t,e,n){var r=n instanceof wr?wn(n):new wr(n);if(r.g!="")e&&(r.g=e+"."+r.g),wa(r,r.m);else{var s=te.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new wr(null);r&&Ta(i,r),e&&(i.g=e),s&&wa(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Pe(r,n,e),Pe(r,"VER",t.ra),lo(t,r),r}function x_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new yc({ob:!0})):new Le(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function F_(){}L=F_.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function Ra(){if(Ts&&!(10<=Number(gS)))throw Error("Environmental error: no available transport.")}Ra.prototype.g=function(t,e){return new Nt(t,e)};function Nt(t,e){Je.call(this),this.g=new P_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Vi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ls(this)}Xe(Nt,Je);Nt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;It(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=L_(t,null,t.Y),Tc(t)};Nt.prototype.close=function(){Ah(this.g)};Nt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ph(t),t=n);e.j.push(new KS(e.fb++,t)),e.H==3&&Tc(e)};Nt.prototype.N=function(){this.g.h=null,delete this.j,Ah(this.g),delete this.g,Nt.$.N.call(this)};function U_(t){vh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(U_,vh);function B_(){Eh.call(this),this.status=1}Xe(B_,Eh);function Ls(t){this.g=t}Xe(Ls,F_);Ls.prototype.Ba=function(){nt(this.g,"a")};Ls.prototype.Aa=function(t){nt(this.g,new U_(t))};Ls.prototype.za=function(t){nt(this.g,new B_)};Ls.prototype.ya=function(){nt(this.g,"b")};function rC(){this.blockSize=-1}function zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Xe(zt,rC);zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _l(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)_l(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){_l(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){_l(this,r),s=0;break}}this.h=s,this.i+=e};zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Se(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var sC={};function Ch(t){return-128<=t&&128>t?dS(t,function(e){return new Se([e|0],0>e?-1:0)}):new Se([t|0],0>t?-1:0)}function rn(t){if(isNaN(t)||!isFinite(t))return us;if(0>t)return tt(rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=fu;return new Se(e,0)}function j_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return tt(j_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rn(Math.pow(e,8)),r=us,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=rn(Math.pow(e,i)),r=r.R(i).add(rn(o))):(r=r.R(n),r=r.add(rn(o)))}return r}var fu=4294967296,us=Ch(0),pu=Ch(1),Qf=Ch(16777216);L=Se.prototype;L.ea=function(){if(Lt(this))return-tt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:fu+r)*e,e*=fu}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(yn(this))return"0";if(Lt(this))return"-"+tt(this).toString(t);for(var e=rn(Math.pow(t,6)),n=this,r="";;){var s=Ca(n,e).g;n=Sa(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,yn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function yn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Lt(t){return t.h==-1}L.X=function(t){return t=Sa(this,t),Lt(t)?-1:yn(t)?0:1};function tt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Se(n,~t.h).add(pu)}L.abs=function(){return Lt(this)?tt(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Se(n,n[n.length-1]&-2147483648?-1:0)};function Sa(t,e){return t.add(tt(e))}L.R=function(t){if(yn(this)||yn(t))return us;if(Lt(this))return Lt(t)?tt(this).R(tt(t)):tt(tt(this).R(t));if(Lt(t))return tt(this.R(tt(t)));if(0>this.X(Qf)&&0>t.X(Qf))return rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Bo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Bo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Bo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Bo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Se(n,0)};function Bo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Qs(t,e){this.g=t,this.h=e}function Ca(t,e){if(yn(e))throw Error("division by zero");if(yn(t))return new Qs(us,us);if(Lt(t))return e=Ca(tt(t),e),new Qs(tt(e.g),tt(e.h));if(Lt(e))return e=Ca(t,tt(e)),new Qs(tt(e.g),e.h);if(30<t.g.length){if(Lt(t)||Lt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pu,r=e;0>=r.X(t);)n=Yf(n),r=Yf(r);var s=Gr(n,1),i=Gr(r,1);for(r=Gr(r,2),n=Gr(n,2);!yn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Gr(r,1),n=Gr(n,1)}return e=Sa(t,s.R(e)),new Qs(s,e)}for(s=us;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=rn(n),o=i.R(e);Lt(o)||0<o.X(t);)n-=r,i=rn(n),o=i.R(e);yn(i)&&(i=pu),s=s.add(i),t=Sa(t,o)}return new Qs(s,t)}L.gb=function(t){return Ca(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Se(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Se(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Se(n,this.h^t.h)};function Yf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Se(n,t.h)}function Gr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Se(s,t.h)}Ra.prototype.createWebChannel=Ra.prototype.g;Nt.prototype.send=Nt.prototype.u;Nt.prototype.open=Nt.prototype.m;Nt.prototype.close=Nt.prototype.close;pc.NO_ERROR=0;pc.TIMEOUT=8;pc.HTTP_ERROR=6;i_.COMPLETE="complete";o_.EventType=io;io.OPEN="a";io.CLOSE="b";io.ERROR="c";io.MESSAGE="d";Je.prototype.listen=Je.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;zt.prototype.digest=zt.prototype.l;zt.prototype.reset=zt.prototype.reset;zt.prototype.update=zt.prototype.j;Se.prototype.add=Se.prototype.add;Se.prototype.multiply=Se.prototype.R;Se.prototype.modulo=Se.prototype.gb;Se.prototype.compare=Se.prototype.X;Se.prototype.toNumber=Se.prototype.ea;Se.prototype.toString=Se.prototype.toString;Se.prototype.getBits=Se.prototype.D;Se.fromNumber=rn;Se.fromString=j_;var iC=function(){return new Ra},oC=function(){return fc()},yl=pc,aC=i_,cC=Mr,Jf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jo=o_,lC=Le,uC=zt,hs=Se;const Xf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new rh("@firebase/firestore");function Ys(){return br.logLevel}function H(t,...e){if(br.logLevel<=de.DEBUG){const n=e.map(Ph);br.debug(`Firestore (${xs}): ${t}`,...n)}}function An(t,...e){if(br.logLevel<=de.ERROR){const n=e.map(Ph);br.error(`Firestore (${xs}): ${t}`,...n)}}function ws(t,...e){if(br.logLevel<=de.WARN){const n=e.map(Ph);br.warn(`Firestore (${xs}): ${t}`,...n)}}function Ph(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function Oe(t,e){t||ee()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class dC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fC{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new In;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new In,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new $_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new at(e)}}class pC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new pC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _C{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new mC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=yC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function As(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ne(e)}static min(){return new ne(new qe(0,0))}static max(){return new ne(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $i.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $i?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends $i{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const vC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends $i{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return vC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new j(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new j(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(be.fromString(e))}static fromName(e){return new Y(be.fromString(e).popFirst(5))}static empty(){return new Y(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new be(e.slice()))}}function EC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new er(s,Y.empty(),e)}function IC(t){return new er(t.readTime,t.key,-1)}class er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new er(ne.min(),Y.empty(),-1)}static max(){return new er(ne.max(),Y.empty(),-1)}}function TC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==wC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(s=>s?k.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new k((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new k((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ho(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}bh.ae=-1;function wc(t){return t==null}function Pa(t){return t===0&&1/t==-1/0}function RC(t){return typeof t=="number"&&Number.isInteger(t)&&!Pa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function H_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $o(this.root,e,this.comparator,!1)}getReverseIterator(){return new $o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $o(this.root,e,this.comparator,!0)}}class $o{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ep(this.data.getIterator())}getIteratorFrom(e){return new ep(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class ep{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new ft(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return As(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class K_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new K_("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const SC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=SC.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function kr(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Oh(t){const e=t.mapValue.fields.__previous_value__;return kh(e)?Oh(e):e}function qi(t){const e=tr(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Hi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Hi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Hi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kh(t)?4:PC(t)?9007199254740991:10:ee()}function dn(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qi(t).isEqual(qi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=tr(s.timestampValue),a=tr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return kr(s.bytesValue).isEqual(kr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ue(s.doubleValue),a=Ue(i.doubleValue);return o===a?Pa(o)===Pa(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return As(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Zf(o)!==Zf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!dn(o[c],a[c])))return!1;return!0}(t,e);default:return ee()}}function Ki(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ue(i.integerValue||i.doubleValue),c=Ue(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return tp(t.timestampValue,e.timestampValue);case 4:return tp(qi(t),qi(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const a=kr(i),c=kr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=Ie(a[l],c[l]);if(u!==0)return u}return Ie(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ie(Ue(i.latitude),Ue(o.latitude));return a!==0?a:Ie(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Rs(a[l],c[l]);if(u)return u}return Ie(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===qo.mapValue&&o===qo.mapValue)return 0;if(i===qo.mapValue)return 1;if(o===qo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=Ie(c[h],u[h]);if(d!==0)return d;const g=Rs(a[c[h]],l[u[h]]);if(g!==0)return g}return Ie(c.length,u.length)}(t.mapValue,e.mapValue);default:throw ee()}}function tp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=tr(t),r=tr(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function Ss(t){return gu(t)}function gu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=gu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${gu(n.fields[o])}`;return s+"}"}(t.mapValue):ee()}function np(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mu(t){return!!t&&"integerValue"in t}function Nh(t){return!!t&&"arrayValue"in t}function rp(t){return!!t&&"nullValue"in t}function sp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ta(t){return!!t&&"mapValue"in t}function mi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ta(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mi(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=mi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ta(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Rt(mi(this.value))}}function z_(t){const e=[];return Lr(t.fields,(n,r)=>{const s=new ut([n]);if(ta(r)){const i=z_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ct(e,0,ne.min(),ne.min(),ne.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,ne.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,ne.min(),ne.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,ne.min(),ne.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ba{constructor(e,n){this.position=e,this.inclusive=n}}function ip(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function op(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class _i{constructor(e,n="asc"){this.field=e,this.dir=n}}function bC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class W_{}class Be extends W_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OC(e,n,r):n==="array-contains"?new VC(e,r):n==="in"?new MC(e,r):n==="not-in"?new LC(e,r):n==="array-contains-any"?new xC(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NC(e,r):new DC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Wt extends W_{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Wt(e,n)}matches(e){return G_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function G_(t){return t.op==="and"}function Q_(t){return kC(t)&&G_(t)}function kC(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function _u(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(Q_(t))return t.filters.map(e=>_u(e)).join(",");{const e=t.filters.map(n=>_u(n)).join(",");return`${t.op}(${e})`}}function Y_(t,e){return t instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(t,e):t instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Y_(o,s.filters[a]),!0):!1}(t,e):void ee()}function J_(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(J_).join(" ,")+"}"}(t):"Filter"}class OC extends Be{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class NC extends Be{constructor(e,n){super(e,"in",n),this.keys=X_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DC extends Be{constructor(e,n){super(e,"not-in",n),this.keys=X_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function X_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class VC extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nh(n)&&Ki(n.arrayValue,this.value)}}class MC extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ki(this.value.arrayValue,n)}}class LC extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ki(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ki(this.value.arrayValue,n)}}class xC extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ki(this.value.arrayValue,r))}}/**
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
 */class FC{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function ap(t,e=null,n=[],r=[],s=null,i=null,o=null){return new FC(t,e,n,r,s,i,o)}function Dh(t){const e=ae(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_u(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.he=n}return e.he}function Vh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Y_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!op(t.startAt,e.startAt)&&op(t.endAt,e.endAt)}function yu(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function UC(t,e,n,r,s,i,o,a){return new fo(t,e,n,r,s,i,o,a)}function Mh(t){return new fo(t)}function cp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Z_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Lh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ey(t){return t.collectionGroup!==null}function yi(t){const e=ae(t);if(e.Pe===null){e.Pe=[];const n=Lh(e),r=Z_(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new _i(n)),e.Pe.push(new _i(ut.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new _i(ut.keyField(),i))}}}return e.Pe}function on(t){const e=ae(t);return e.Ie||(e.Ie=BC(e,yi(t))),e.Ie}function BC(t,e){if(t.limitType==="F")return ap(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new _i(s.field,i)});const n=t.endAt?new ba(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ba(t.startAt.position,t.startAt.inclusive):null;return ap(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vu(t,e){e.getFirstInequalityField(),Lh(t);const n=t.filters.concat([e]);return new fo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Eu(t,e,n){return new fo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ac(t,e){return Vh(on(t),on(e))&&t.limitType===e.limitType}function ty(t){return`${Dh(on(t))}|lt:${t.limitType}`}function es(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>J_(s)).join(", ")}]`),wc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ss(s)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function Rc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of yi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=ip(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,yi(r),s)||r.endAt&&!function(o,a,c){const l=ip(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,yi(r),s))}(t,e)}function jC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ny(t){return(e,n)=>{let r=!1;for(const s of yi(t)){const i=$C(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $C(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Rs(c,l):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return H_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=new Me(Y.comparator);function Rn(){return qC}const ry=new Me(Y.comparator);function si(...t){let e=ry;for(const n of t)e=e.insert(n.key,n);return e}function sy(t){let e=ry;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Er(){return vi()}function iy(){return vi()}function vi(){return new Fs(t=>t.toString(),(t,e)=>t.isEqual(e))}const HC=new Me(Y.comparator),KC=new ft(Y.comparator);function ue(...t){let e=KC;for(const n of t)e=e.add(n);return e}const zC=new ft(Ie);function WC(){return zC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pa(e)?"-0":e}}function ay(t){return{integerValue:""+t}}function GC(t,e){return RC(e)?ay(e):oy(t,e)}/**
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
 */class Sc{constructor(){this._=void 0}}function QC(t,e,n){return t instanceof ka?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kh(i)&&(i=Oh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof zi?ly(t,e):t instanceof Wi?uy(t,e):function(s,i){const o=cy(s,i),a=lp(o)+lp(s.Te);return mu(o)&&mu(s.Te)?ay(a):oy(s.serializer,a)}(t,e)}function YC(t,e,n){return t instanceof zi?ly(t,e):t instanceof Wi?uy(t,e):n}function cy(t,e){return t instanceof Oa?function(r){return mu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ka extends Sc{}class zi extends Sc{constructor(e){super(),this.elements=e}}function ly(t,e){const n=hy(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Wi extends Sc{constructor(e){super(),this.elements=e}}function uy(t,e){let n=hy(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class Oa extends Sc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function lp(t){return Ue(t.integerValue||t.doubleValue)}function hy(t){return Nh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function JC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof zi&&s instanceof zi||r instanceof Wi&&s instanceof Wi?As(r.elements,s.elements,dn):r instanceof Oa&&s instanceof Oa?dn(r.Te,s.Te):r instanceof ka&&s instanceof ka}(t.transform,e.transform)}class XC{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function na(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Cc{}function dy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xh(t.key,Ht.none()):new po(t.key,t.data,Ht.none());{const n=t.data,r=Rt.empty();let s=new ft(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new or(t.key,r,new Ot(s.toArray()),Ht.none())}}function ZC(t,e,n){t instanceof po?function(s,i,o){const a=s.value.clone(),c=hp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof or?function(s,i,o){if(!na(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=hp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(fy(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ei(t,e,n,r){return t instanceof po?function(i,o,a,c){if(!na(i.precondition,o))return a;const l=i.value.clone(),u=dp(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof or?function(i,o,a,c){if(!na(i.precondition,o))return a;const l=dp(i.fieldTransforms,c,o),u=o.data;return u.setAll(fy(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return na(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function eP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=cy(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function up(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&As(r,s,(i,o)=>JC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class po extends Cc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class or extends Cc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hp(t,e,n){const r=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,YC(o,a,n[s]))}return r}function dp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,QC(i,o,e))}return r}class xh extends Cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tP extends Cc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ZC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ei(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ei(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=iy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=dy(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&As(this.mutations,e.mutations,(n,r)=>up(n,r))&&As(this.baseMutations,e.baseMutations,(n,r)=>up(n,r))}}class Fh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length);let s=function(){return HC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Fh(e,n,r,s)}}/**
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
 */class rP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,pe;function iP(t){switch(t){default:return ee();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function py(t){if(t===void 0)return An("GRPC error has no .code"),S.UNKNOWN;switch(t){case Fe.OK:return S.OK;case Fe.CANCELLED:return S.CANCELLED;case Fe.UNKNOWN:return S.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return S.INTERNAL;case Fe.UNAVAILABLE:return S.UNAVAILABLE;case Fe.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Fe.NOT_FOUND:return S.NOT_FOUND;case Fe.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Fe.ABORTED:return S.ABORTED;case Fe.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Fe.DATA_LOSS:return S.DATA_LOSS;default:return ee()}}(pe=Fe||(Fe={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function oP(){return new TextEncoder}/**
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
 */const aP=new hs([4294967295,4294967295],0);function fp(t){const e=oP().encode(t),n=new uC;return n.update(e),new Uint8Array(n.digest())}function pp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hs([n,r],0),new hs([s,i],0)]}class Uh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ii(`Invalid padding: ${n}`);if(r<0)throw new ii(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ii(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ii(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=hs.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(hs.fromNumber(r)));return s.compare(aP)===1&&(s=new hs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=fp(e),[r,s]=pp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Uh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=fp(e),[r,s]=pp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pc(ne.min(),s,new Me(Ie),Rn(),ue())}}class go{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new go(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class gy{constructor(e,n){this.targetId=e,this.ye=n}}class my{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class gp{constructor(){this.we=0,this.Se=_p(),this.be=gt.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=ue(),n=ue(),r=ue();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new go(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=_p()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class cP{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Rn(),this.Ue=mp(),this.We=new Me(Ie)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(yu(i))if(r===0){const o=new Y(i.path);this.je(n,o,ct.newNoDocument(o,ne.min()))}else Oe(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=kr(r).toUint8Array()}catch(c){if(c instanceof K_)return ws("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Uh(o,s,i)}catch(c){return ws(c instanceof ii?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&yu(a.target)){const c=new Y(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,ct.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=ue();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Pc(e,n,this.We,this.$e,r);return this.$e=Rn(),this.Ue=mp(),this.We=new Me(Ie),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new gp,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ft(Ie),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new gp),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function mp(){return new Me(Y.comparator)}function _p(){return new Me(Y.comparator)}const lP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),hP=(()=>({and:"AND",or:"OR"}))();class dP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Iu(t,e){return t.useProto3Json||wc(e)?e:{value:e}}function Na(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _y(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fP(t,e){return Na(t,e.toTimestamp())}function an(t){return Oe(!!t),ne.fromTimestamp(function(n){const r=tr(n);return new qe(r.seconds,r.nanos)}(t))}function Bh(t,e){return function(r){return new be(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function yy(t){const e=be.fromString(t);return Oe(Ty(e)),e}function Tu(t,e){return Bh(t.databaseId,e.path)}function vl(t,e){const n=yy(e);if(n.get(1)!==t.databaseId.projectId)throw new j(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(vy(n))}function wu(t,e){return Bh(t.databaseId,e)}function pP(t){const e=yy(t);return e.length===4?be.emptyPath():vy(e)}function Au(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function vy(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yp(t,e,n){return{name:Tu(t,e),fields:n.value.mapValue.fields}}function gP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Oe(u===void 0||typeof u=="string"),gt.fromBase64String(u||"")):(Oe(u===void 0||u instanceof Uint8Array),gt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?S.UNKNOWN:py(l.code);return new j(u,l.message||"")}(o);n=new my(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=vl(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):ne.min(),a=new Rt({mapValue:{fields:r.document.fields}}),c=ct.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ra(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=vl(t,r.document),i=r.readTime?an(r.readTime):ne.min(),o=ct.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ra([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=vl(t,r.document),i=r.removedTargetIds||[];n=new ra([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new sP(s,i),a=r.targetId;n=new gy(a,o)}}return n}function mP(t,e){let n;if(e instanceof po)n={update:yp(t,e.key,e.value)};else if(e instanceof xh)n={delete:Tu(t,e.key)};else if(e instanceof or)n={update:yp(t,e.key,e.data),updateMask:RP(e.fieldMask)};else{if(!(e instanceof tP))return ee();n={verify:Tu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ka)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Wi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Oa)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function _P(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?an(s.updateTime):an(i);return o.isEqual(ne.min())&&(o=an(i)),new XC(o,s.transformResults||[])}(n,e))):[]}function yP(t,e){return{documents:[wu(t,e.path)]}}function vP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=wu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Iy(Wt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:ts(h.field),direction:TP(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Iu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function EP(t){let e=pP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Ey(h);return d instanceof Wt&&Q_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new _i(ns(v.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,wc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,g=h.values||[];return new ba(g,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,g=h.values||[];return new ba(g,d)}(n.endAt)),UC(e,s,o,i,a,"F",c,l)}function IP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ey(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ns(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ns(n.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ns(n.unaryFilter.field);return Be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ns(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Be.create(ns(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>Ey(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function TP(t){return lP[t]}function wP(t){return uP[t]}function AP(t){return hP[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ns(t){return ut.fromServerFormat(t.fieldPath)}function Iy(t){return t instanceof Be?function(n){if(n.op==="=="){if(sp(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NAN"}};if(rp(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sp(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NAN"}};if(rp(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(n.field),op:wP(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(s=>Iy(s));return r.length===1?r[0]:{compositeFilter:{op:AP(n.op),filters:r}}}(t):ee()}function RP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ty(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,s,i=ne.min(),o=ne.min(),a=gt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e){this.ht=e}}function CP(t){const e=EP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Eu(e,e.limit,"L"):e}/**
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
 */class PP{constructor(){this.an=new bP}addToCollectionParentIndex(e,n){return this.an.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(er.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(er.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class bP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ft(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ft(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Cs(0)}static Ln(){return new Cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(){this.changes=new Fs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class OP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ei(r.mutation,s,Ot.empty(),qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=Er();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=si();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Er();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Rn();const o=vi(),a=function(){return vi()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof or)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ei(u.mutation,l,u.mutation.getFieldMask(),qe.now())):o.set(l.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new OP(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=vi();let s=new Me((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ot.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ue()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=iy();u.forEach(d=>{if(!i.has(d)){const g=dy(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ey(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):k.resolve(Er());let a=-1,c=i;return o.next(l=>k.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ue())).next(u=>({batchId:a,changes:sy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=si();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=si();return this.indexManager.getCollectionParents(e,i).next(a=>k.forEach(a,c=>{const l=function(h,d){return new fo(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,ct.newInvalidDocument(u)))});let a=si();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Ei(u.mutation,l,Ot.empty(),qe.now()),Rc(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return k.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:CP(s.bundledQuery),readTime:an(s.readTime)}}(n)),k.resolve()}}/**
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
 */class VP{constructor(){this.overlays=new Me(Y.comparator),this.Pr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Er();return k.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const s=Er(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return k.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Er(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Er(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return k.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rP(n,r));let i=this.Pr.get(n);i===void 0&&(i=ue(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.Ir=new ft(We.dr),this.Tr=new ft(We.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new We(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new We(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new Y(new be([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new Y(new be([])),r=new We(n,e),s=new We(n,e+1);let i=ue();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return Y.comparator(e.key,n.key)||Ie(e.yr,n.yr)}static Er(e,n){return Ie(e.yr,n.yr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new ft(We.dr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nP(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new We(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(Ie);return n.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),k.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new We(new Y(i),0);let a=new ft(Ie);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.yr)),!0)},o),k.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return k.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new We(n,0),s=this.Sr.firstAfterOrEqual(r);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e){this.Fr=e,this.docs=function(){return new Me(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Rn();const o=n.path,a=new Y(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||TC(IC(u),r)<=0||(s.has(u.key)||Rc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee()}Mr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xP(this)}getSize(e){return k.resolve(this.size)}}class xP extends kP{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e){this.persistence=e,this.Or=new Fs(n=>Dh(n),Vh),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.Nr=0,this.Br=new jh,this.targetCount=0,this.Lr=Cs.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),k.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Qn(n),k.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n){this.kr={},this.overlays={},this.qr=new bh(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new FP(this),this.indexManager=new PP,this.remoteDocumentCache=function(s){return new LP(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new SP(n),this.Ur=new DP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new VP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new MP(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new BP(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return k.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class BP extends AC{constructor(e){super(),this.currentSequenceNumber=e}}class $h{constructor(e){this.persistence=e,this.jr=new jh,this.Hr=null}static Jr(e){return new $h(e)}get Yr(){if(this.Hr)return this.Hr;throw ee()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),k.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Yr,r=>{const s=Y.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,ne.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return k.or([()=>k.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qh(e,n.fromCache,r,s)}}/**
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
 */class jP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $P{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new jP;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(Ys()<=de.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),k.resolve()):(Ys()<=de.DEBUG&&H("QueryEngine","Query:",es(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(Ys()<=de.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):k.resolve())}Hi(e,n){if(cp(n))return k.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Eu(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,Eu(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,s){return cp(n)||s.isEqual(ne.min())?k.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?k.resolve(null):(Ys()<=de.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),es(n)),this.ts(e,o,n,EC(s,-1)).next(a=>a))})}Xi(e,n){let r=new ft(ny(e));return n.forEach((s,i)=>{Rc(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return Ys()<=de.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",es(n)),this.ji.getDocumentsMatchingQuery(e,n,er.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new Me(Ie),this.ss=new Fs(i=>Dh(i),Vh),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NP(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function HP(t,e,n,r){return new qP(t,e,n,r)}async function wy(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ue();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function KP(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let g=k.resolve();return d.forEach(v=>{g=g.next(()=>u.getEntry(c,v)).next(E=>{const A=l.docVersions.get(v);Oe(A!==null),E.version.compareTo(A)<0&&(h.applyToRemoteDocument(E,l),E.isValidDocument()&&(E.setReadTime(l.commitVersion),u.addEntry(E)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ue();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ay(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function zP(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(gt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(E,A,P){return E.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(d,g,u)&&a.push(n.Kr.updateTargetData(i,g))});let c=Rn(),l=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(WP(i,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(ne.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return k.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.rs=s,i))}function WP(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Rn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:s}})}function GP(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QP(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Ru(t,e,n){const r=ae(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ho(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function vp(t,e,n){const r=ae(t);let s=ne.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ae(c),d=h.ss.get(u);return d!==void 0?k.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,on(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:ne.min(),n?i:ue())).next(a=>(YP(r,jC(e),a),{documents:a,Ps:i})))}function YP(t,e,n){let r=t.os.get(e)||ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class Ep{constructor(){this.activeTargetIds=WC()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JP{constructor(){this.ro=new Ep,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new Ep,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XP{so(e){}shutdown(){}}/**
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
 */class Ip{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ho=null;function El(){return Ho===null?Ho=function(){return 268435456+Math.round(2147483648*Math.random())}():Ho++,"0x"+Ho.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class tb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=El(),c=this.Do(n,r);H("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,i,o),this.vo(n,c,l,s).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ws("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=ZP[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=El();return new Promise((o,a)=>{const c=new lC;c.setWithCredentials(!0),c.listenOnce(aC.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case yl.NO_ERROR:const u=c.getResponseJson();H(ot,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case yl.TIMEOUT:H(ot,`RPC '${e}' ${i} timed out`),a(new j(S.DEADLINE_EXCEEDED,"Request time out"));break;case yl.HTTP_ERROR:const h=c.getStatus();if(H(ot,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const v=function(A){const P=A.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(P)>=0?P:S.UNKNOWN}(g.status);a(new j(v,g.message))}else a(new j(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new j(S.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{H(ot,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);H(ot,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const s=El(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iC(),a=oC(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");H(ot,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,g=!1;const v=new eb({ho:A=>{g?H(ot,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(d||(H(ot,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),H(ot,`RPC '${e}' stream ${s} sending:`,A),h.send(A))},Po:()=>h.close()}),E=(A,P,N)=>{A.listen(P,U=>{try{N(U)}catch(O){setTimeout(()=>{throw O},0)}})};return E(h,jo.EventType.OPEN,()=>{g||H(ot,`RPC '${e}' stream ${s} transport opened.`)}),E(h,jo.EventType.CLOSE,()=>{g||(g=!0,H(ot,`RPC '${e}' stream ${s} transport closed`),v.mo())}),E(h,jo.EventType.ERROR,A=>{g||(g=!0,ws(ot,`RPC '${e}' stream ${s} transport errored:`,A),v.mo(new j(S.UNAVAILABLE,"The operation could not be completed")))}),E(h,jo.EventType.MESSAGE,A=>{var P;if(!g){const N=A.data[0];Oe(!!N);const U=N,O=U.error||((P=U[0])===null||P===void 0?void 0:P.error);if(O){H(ot,`RPC '${e}' stream ${s} received error:`,O);const Q=O.status;let se=function(z){const ie=Fe[z];if(ie!==void 0)return py(ie)}(Q),fe=O.message;se===void 0&&(se=S.INTERNAL,fe="Unknown error status: "+Q+" with message "+O.message),g=!0,v.mo(new j(se,fe)),h.close()}else H(ot,`RPC '${e}' stream ${s} received:`,N),v.fo(N)}}),E(a,cC.STAT_EVENT,A=>{A.stat===Jf.PROXY?H(ot,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===Jf.NOPROXY&&H(ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.Vo()},0),v}}function Il(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t){return new dP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n,r,s,i,o,a,c){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Ry(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new j(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nb extends Sy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=gP(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?an(o.readTime):ne.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=Au(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=yu(c)?{documents:yP(i,c)}:{query:vP(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=_y(i,o.resumeToken);const l=Iu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ne.min())>0){a.readTime=Na(i,o.snapshotVersion.toTimestamp());const l=Iu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=IP(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=Au(this.serializer),n.removeTarget=e,this.n_(n)}}class rb extends Sy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=_P(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.T_(r,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=Au(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mP(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new j(S.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(S.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(S.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class ib{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(An(n),this.p_=!1):H("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{xr(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ae(c);l.F_.add(4),await mo(l),l.O_.set("Unknown"),l.F_.delete(4),await kc(l)}(this))})}),this.O_=new ib(r,s)}}async function kc(t){if(xr(t))for(const e of t.M_)await e(!0)}async function mo(t){for(const e of t.M_)await e(!1)}function Cy(t,e){const n=ae(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),zh(n)?Kh(n):Us(n).Yo()&&Hh(n,e))}function Py(t,e){const n=ae(t),r=Us(n);n.v_.delete(e),r.Yo()&&by(n,e),n.v_.size===0&&(r.Yo()?r.e_():xr(n)&&n.O_.set("Unknown"))}function Hh(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Us(t).l_(e)}function by(t,e){t.N_.Le(e),Us(t).h_(e)}function Kh(t){t.N_=new cP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Us(t).start(),t.O_.y_()}function zh(t){return xr(t)&&!Us(t).Jo()&&t.v_.size>0}function xr(t){return ae(t).F_.size===0}function ky(t){t.N_=void 0}async function ab(t){t.v_.forEach((e,n)=>{Hh(t,e)})}async function cb(t,e){ky(t),zh(t)?(t.O_.b_(e),Kh(t)):t.O_.set("Unknown")}async function lb(t,e,n){if(t.O_.set("Online"),e instanceof my&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Da(t,r)}else if(e instanceof ra?t.N_.Ge(e):e instanceof gy?t.N_.Xe(e):t.N_.He(e),!n.isEqual(ne.min()))try{const r=await Ay(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.v_.get(l);u&&i.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.v_.get(c);if(!u)return;i.v_.set(c,u.withResumeToken(gt.EMPTY_BYTE_STRING,u.snapshotVersion)),by(i,c);const h=new qn(u.target,c,l,u.sequenceNumber);Hh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Da(t,r)}}async function Da(t,e,n){if(!ho(e))throw e;t.F_.add(1),await mo(t),t.O_.set("Offline"),n||(n=()=>Ay(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await kc(t)})}function Oy(t,e){return e().catch(n=>Da(t,n,e))}async function Oc(t){const e=ae(t),n=nr(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;ub(e);)try{const s=await GP(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,hb(e,s)}catch(s){await Da(e,s)}Ny(e)&&Dy(e)}function ub(t){return xr(t)&&t.C_.length<10}function hb(t,e){t.C_.push(e);const n=nr(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function Ny(t){return xr(t)&&!nr(t).Jo()&&t.C_.length>0}function Dy(t){nr(t).start()}async function db(t){nr(t).A_()}async function fb(t){const e=nr(t);for(const n of t.C_)e.d_(n.mutations)}async function pb(t,e,n){const r=t.C_.shift(),s=Fh.from(r,e,n);await Oy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Oc(t)}async function gb(t,e){e&&nr(t).I_&&await async function(r,s){if(function(o){return iP(o)&&o!==S.ABORTED}(s.code)){const i=r.C_.shift();nr(r).Xo(),await Oy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Oc(r)}}(t,e),Ny(t)&&Dy(t)}async function Tp(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=xr(n);n.F_.add(3),await mo(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await kc(n)}async function mb(t,e){const n=ae(t);e?(n.F_.delete(2),await kc(n)):e||(n.F_.add(2),await mo(n),n.O_.set("Unknown"))}function Us(t){return t.B_||(t.B_=function(n,r,s){const i=ae(n);return i.V_(),new nb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:ab.bind(null,t),Eo:cb.bind(null,t),c_:lb.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),zh(t)?Kh(t):t.O_.set("Unknown")):(await t.B_.stop(),ky(t))})),t.B_}function nr(t){return t.L_||(t.L_=function(n,r,s){const i=ae(n);return i.V_(),new rb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:db.bind(null,t),Eo:gb.bind(null,t),E_:fb.bind(null,t),T_:pb.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await Oc(t)):(await t.L_.stop(),t.C_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Wh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gh(t,e){if(An("AsyncQueue",`${e}: ${t}`),ho(t))return new j(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=si(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.k_=new Me(Y.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):ee():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ps{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ps(e,n,ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.Q_=void 0,this.listeners=[]}}class yb{constructor(){this.queries=new Fs(e=>ty(e),Ac),this.onlineState="Unknown",this.K_=new Set}}async function Vy(t,e){const n=ae(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new _b),s)try{i.Q_=await n.onListen(r)}catch(o){const a=Gh(o,`Initialization of query '${es(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&Qh(n)}async function My(t,e){const n=ae(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function vb(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&Qh(n)}function Eb(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Qh(t){t.K_.forEach(e=>{e.next()})}class Ly{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=Ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e){this.key=e}}class Fy{constructor(e){this.key=e}}class Ib{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ue(),this.mutatedKeys=ue(),this.ua=ny(e),this.ca=new ds(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new wp,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),g=Rc(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;d&&g?d.data.isEqual(g.data)?v!==E&&(r.track({type:3,doc:g}),A=!0):this.Ia(d,g)||(r.track({type:2,doc:g}),A=!0,(c&&this.ua(g,c)>0||l&&this.ua(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),A=!0):d&&!g&&(r.track({type:1,doc:d}),A=!0,(c||l)&&(a=!0)),A&&(g?(o=o.add(g),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((l,u)=>function(d,g){const v=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return v(d)-v(g)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,i.length!==0||c?{snapshot:new Ps(this.query,e.ca,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new wp,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=ue(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new Fy(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new xy(r))}),n}Ra(e){this.oa=e.Ps,this.aa=ue();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return Ps.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Tb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wb{constructor(e){this.key=e,this.ma=!1}}class Ab{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Fs(a=>ty(a),Ac),this.pa=new Map,this.ya=new Set,this.wa=new Me(Y.comparator),this.Sa=new Map,this.ba=new jh,this.Da={},this.Ca=new Map,this.va=Cs.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function Rb(t,e){const n=Mb(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await QP(n.localStore,on(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Sb(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Cy(n.remoteStore,o)}return s}async function Sb(t,e,n,r,s){t.Ma=(h,d,g)=>async function(E,A,P,N){let U=A.view.ha(P);U.es&&(U=await vp(E.localStore,A.query,!1).then(({documents:se})=>A.view.ha(se,U)));const O=N&&N.targetChanges.get(A.targetId),Q=A.view.applyChanges(U,E.isPrimaryClient,O);return Rp(E,A.targetId,Q.Ea),Q.snapshot}(t,h,d,g);const i=await vp(t.localStore,e,!0),o=new Ib(e,i.Ps),a=o.ha(i.documents),c=go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Rp(t,n,l.Ea);const u=new Tb(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function Cb(t,e){const n=ae(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Ac(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ru(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Py(n.remoteStore,r.targetId),Su(n,r.targetId)}).catch(uo)):(Su(n,r.targetId),await Ru(n.localStore,r.targetId,!0))}async function Pb(t,e,n){const r=Lb(t);try{const s=await function(o,a){const c=ae(o),l=qe.now(),u=a.reduce((g,v)=>g.add(v.key),ue());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let v=Rn(),E=ue();return c._s.getEntries(g,u).next(A=>{v=A,v.forEach((P,N)=>{N.isValidDocument()||(E=E.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,v)).next(A=>{h=A;const P=[];for(const N of a){const U=eP(N,h.get(N.key).overlayedDocument);U!=null&&P.push(new or(N.key,U,z_(U.value.mapValue),Ht.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,P,a)}).next(A=>{d=A;const P=A.applyToLocalDocumentSet(h,E);return c.documentOverlayCache.saveOverlays(g,A.batchId,P)})}).then(()=>({batchId:d.batchId,changes:sy(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Me(Ie)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await _o(r,s.changes),await Oc(r.remoteStore)}catch(s){const i=Gh(s,"Failed to persist write");n.reject(i)}}async function Uy(t,e){const n=ae(t);try{const r=await zP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?Oe(o.ma):s.removedDocuments.size>0&&(Oe(o.ma),o.ma=!1))}),await _o(n,r,e)}catch(r){await uo(r)}}function Ap(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ae(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&Qh(c)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bb(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Me(Y.comparator);o=o.insert(i,ct.newNoDocument(i,ne.min()));const a=ue().add(i),c=new Pc(ne.min(),new Map,new Me(Ie),o,a);await Uy(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),Yh(r)}else await Ru(r.localStore,e,!1).then(()=>Su(r,e,n)).catch(uo)}async function kb(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await KP(n.localStore,e);jy(n,r,null),By(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _o(n,s)}catch(s){await uo(s)}}async function Ob(t,e,n){const r=ae(t);try{const s=await function(o,a){const c=ae(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Oe(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);jy(r,e,n),By(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _o(r,s)}catch(s){await uo(s)}}function By(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function jy(t,e,n){const r=ae(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function Su(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||$y(t,r)})}function $y(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Py(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),Yh(t))}function Rp(t,e,n){for(const r of n)r instanceof xy?(t.ba.addReference(r.key,e),Nb(t,r)):r instanceof Fy?(H("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||$y(t,r.key)):ee()}function Nb(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(H("SyncEngine","New document in limbo: "+n),t.ya.add(r),Yh(t))}function Yh(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new Y(be.fromString(e)),r=t.va.next();t.Sa.set(r,new wb(n)),t.wa=t.wa.insert(n,r),Cy(t.remoteStore,new qn(on(Mh(n.path)),r,"TargetPurposeLimboResolution",bh.ae))}}async function _o(t,e,n){const r=ae(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=qh.$i(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(c,l){const u=ae(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(l,d=>k.forEach(d.Qi,g=>u.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>k.forEach(d.Ki,g=>u.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!ho(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const g=u.rs.get(d),v=g.snapshotVersion,E=g.withLastLimboFreeSnapshotVersion(v);u.rs=u.rs.insert(d,E)}}}(r.localStore,i))}async function Db(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await wy(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new j(S.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _o(n,r.cs)}}function Vb(t,e){const n=ae(t),r=n.Sa.get(e);if(r&&r.ma)return ue().add(r.key);{let s=ue();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function Mb(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bb.bind(null,e),e.fa.c_=vb.bind(null,e.eventManager),e.fa.xa=Eb.bind(null,e.eventManager),e}function Lb(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ob.bind(null,e),e}class Sp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return HP(this.persistence,new $P,e.initialUser,this.serializer)}createPersistence(e){return new UP($h.Jr,this.serializer)}createSharedClientState(e){return new JP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ap(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Db.bind(null,this.syncEngine),await mb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yb}()}createDatastore(e){const n=bc(e.databaseInfo.databaseId),r=function(i){return new tb(i)}(e.databaseInfo);return function(i,o,a,c){return new sb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new ob(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ap(this.syncEngine,n,0),function(){return Ip.C()?new Ip:new XP}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new Ab(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ae(n);H("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await mo(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=q_.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{H("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(H("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Tl(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await wy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Cp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bb(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Tp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Tp(e.remoteStore,i)),t._onlineComponents=e}function Ub(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Bb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Tl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ub(n))throw n;ws("Error using user provided cache. Falling back to memory cache: "+n),await Tl(t,new Sp)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Tl(t,new Sp);return t._offlineComponents}async function Hy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Cp(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Cp(t,new xb))),t._onlineComponents}function jb(t){return Hy(t).then(e=>e.syncEngine)}async function Ky(t){const e=await Hy(t),n=e.eventManager;return n.onListen=Rb.bind(null,e.syncEngine),n.onUnlisten=Cb.bind(null,e.syncEngine),n}function $b(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new qy({next:d=>{o.enqueueAndForget(()=>My(i,h));const g=d.docs.has(a);!g&&d.fromCache?l.reject(new j(S.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&c&&c.source==="server"?l.reject(new j(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Ly(Mh(a.path),u,{includeMetadataChanges:!0,Z_:!0});return Vy(i,h)}(await Ky(t),t.asyncQueue,e,n,r)),r.promise}function qb(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new qy({next:d=>{o.enqueueAndForget(()=>My(i,h)),d.fromCache&&c.source==="server"?l.reject(new j(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Ly(a,u,{includeMetadataChanges:!0,Z_:!0});return Vy(i,h)}(await Ky(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function zy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(t,e,n){if(!n)throw new j(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hb(t,e,n,r){if(e===!0&&r===!0)throw new j(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bp(t){if(!Y.isDocumentKey(t))throw new j(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kp(t){if(Y.isDocumentKey(t))throw new j(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nc(t);throw new j(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Op({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Op(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hC;switch(r.type){case"firstParty":return new gC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pp.get(n);r&&(H("ComponentProvider","Removing Datastore"),Pp.delete(n),r.terminate())}(this),Promise.resolve()}}function Kb(t,e,n,r={}){var s;const i=(t=Sn(t,Dc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=at.MOCK_USER;else{a=FA(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new j(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new at(l)}t._authCredentials=new dC(new $_(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bs(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class Jn extends Bs{constructor(e,n,r){super(e,n,Mh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new Y(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function Np(t,e,...n){if(t=Ye(t),Wy("collection","path",e),t instanceof Dc){const r=be.fromString(e,...n);return kp(r),new Jn(t,null,r)}{if(!(t instanceof Ct||t instanceof Jn))throw new j(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return kp(r),new Jn(t.firestore,null,r)}}function oi(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=q_.V()),Wy("doc","path",e),t instanceof Dc){const r=be.fromString(e,...n);return bp(r),new Ct(t,null,new Y(r))}{if(!(t instanceof Ct||t instanceof Jn))throw new j(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return bp(r),new Ct(t.firestore,t instanceof Jn?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Ry(this,"async_queue_retry"),this.ou=()=>{const n=Il();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Il();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Il();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new In;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!ho(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw An("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=Wh.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&ee()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}class js extends Dc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new zb}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gy(this),this._firestoreClient.terminate()}}function Wb(t,e){const n=typeof t=="object"?t:xm(),r=typeof t=="string"?t:e||"(default)",s=ih(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=LA("firestore");i&&Kb(s,...i)}return s}function Jh(t){return t._firestoreClient||Gy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gy(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new CC(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,zy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Fb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(gt.fromBase64String(e))}catch(n){throw new j(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=/^__.*__$/;class Qb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new or(e,this.data,this.fieldMask,n,this.fieldTransforms):new po(e,this.data,n,this.fieldTransforms)}}class Qy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new or(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Yy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class ed{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new ed(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return Va(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(Yy(this.Tu)&&Gb.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class Yb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bc(e)}wu(e,n,r,s=!1){return new ed({Tu:e,methodName:n,yu:r,path:ut.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function td(t){const e=t._freezeSettings(),n=bc(t._databaseId);return new Yb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Jb(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);nd("Data must be an object, but it was:",o,r);const a=Jy(r,o);let c,l;if(i.merge)c=new Ot(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Cu(e,h,n);if(!o.contains(d))throw new j(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Zy(u,d)||u.push(d)}c=new Ot(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Qb(new Rt(a),c,l)}class Mc extends Xh{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mc}}function Xb(t,e,n,r){const s=t.wu(1,e,n);nd("Data must be an object, but it was:",s,r);const i=[],o=Rt.empty();Lr(r,(c,l)=>{const u=rd(e,c,n);l=Ye(l);const h=s.mu(u);if(l instanceof Mc)i.push(u);else{const d=yo(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ot(i);return new Qy(o,a,s.fieldTransforms)}function Zb(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[Cu(e,r,n)],c=[s];if(i.length%2!=0)throw new j(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Cu(e,i[d])),c.push(i[d+1]);const l=[],u=Rt.empty();for(let d=a.length-1;d>=0;--d)if(!Zy(l,a[d])){const g=a[d];let v=c[d];v=Ye(v);const E=o.mu(g);if(v instanceof Mc)l.push(g);else{const A=yo(v,E);A!=null&&(l.push(g),u.set(g,A))}}const h=new Ot(l);return new Qy(u,h,o.fieldTransforms)}function e1(t,e,n,r=!1){return yo(n,t.wu(r?4:3,e))}function yo(t,e){if(Xy(t=Ye(t)))return nd("Unsupported field value:",e,t),Jy(t,e);if(t instanceof Xh)return function(r,s){if(!Yy(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=yo(a,s.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return GC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qe.fromDate(r);return{timestampValue:Na(s.serializer,i)}}if(r instanceof qe){const i=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Na(s.serializer,i)}}if(r instanceof Zh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bs)return{bytesValue:_y(s.serializer,r._byteString)};if(r instanceof Ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${Nc(r)}`)}(t,e)}function Jy(t,e){const n={};return H_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,s)=>{const i=yo(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Xy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof Zh||t instanceof bs||t instanceof Ct||t instanceof Xh)}function nd(t,e,n){if(!Xy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Nc(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Cu(t,e,n){if((e=Ye(e))instanceof Vc)return e._internalPath;if(typeof e=="string")return rd(t,e);throw Va("Field path arguments must be of type string or ",t,!1,void 0,n)}const t1=new RegExp("[~\\*/\\[\\]]");function rd(t,e,n){if(e.search(t1)>=0)throw Va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vc(...e.split("."))._internalPath}catch{throw Va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Va(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new j(S.INVALID_ARGUMENT,a+t+c)}function Zy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new n1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class n1 extends ev{data(){return super.data()}}function sd(t,e){return typeof e=="string"?rd(t,e):e instanceof Vc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class id{}class s1 extends id{}function i1(t,e,...n){let r=[];e instanceof id&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof od).length,a=i.filter(c=>c instanceof Lc).length;if(o>1||o>0&&a>0)throw new j(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Lc extends s1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lc(e,n,r)}_apply(e){const n=this._parse(e);return tv(e._query,n),new Bs(e.firestore,e.converter,vu(e._query,n))}_parse(e){const n=td(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new j(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Vp(h,u);const g=[];for(const v of h)g.push(Dp(c,i,v));d={arrayValue:{values:g}}}else d=Dp(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Vp(h,u),d=e1(a,o,h,u==="in"||u==="not-in");return Be.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function o1(t,e,n){const r=e,s=sd("where",t);return Lc._create(s,r,n)}class od extends id{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new od(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)tv(o,c),o=vu(o,c)}(e._query,n),new Bs(e.firestore,e.converter,vu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Dp(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new j(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ey(e)&&n.indexOf("/")!==-1)throw new j(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!Y.isDocumentKey(r))throw new j(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return np(t,new Y(r))}if(n instanceof Ct)return np(t,n._key);throw new j(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nc(n)}.`)}function Vp(t,e){if(!Array.isArray(t)||t.length===0)throw new j(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tv(t,e){if(e.isInequality()){const r=Lh(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new j(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Z_(t);i!==null&&a1(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function a1(t,e,n){if(!n.isEqual(e))throw new j(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class c1{convertValue(e,n="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Zh(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Oh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qi(e));default:return null}}convertTimestamp(e){const n=tr(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);Oe(Ty(r));const s=new Hi(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nv extends ev{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sa extends nv{data(e={}){return super.data(e)}}class u1{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ai(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sa(this._firestore,this._userDataWriter,r.key,r,new ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new sa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ai(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new sa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ai(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:h1(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function h1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t){t=Sn(t,Ct);const e=Sn(t.firestore,js);return $b(Jh(e),t._key).then(n=>m1(e,t,n))}class rv extends c1{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function d1(t){t=Sn(t,Bs);const e=Sn(t.firestore,js),n=Jh(e),r=new rv(e);return r1(t._query),qb(n,t._query).then(s=>new u1(e,r,t,s))}function f1(t,e,n,...r){t=Sn(t,Ct);const s=Sn(t.firestore,js),i=td(s);let o;return o=typeof(e=Ye(e))=="string"||e instanceof Vc?Zb(i,"updateDoc",t._key,e,n,r):Xb(i,"updateDoc",t._key,e),ad(s,[o.toMutation(t._key,Ht.exists(!0))])}function p1(t){return ad(Sn(t.firestore,js),[new xh(t._key,Ht.none())])}function g1(t,e){const n=Sn(t.firestore,js),r=oi(t),s=l1(t.converter,e);return ad(n,[Jb(td(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function ad(t,e){return function(r,s){const i=new In;return r.asyncQueue.enqueueAndForget(async()=>Pb(await jb(r),s,i)),i.promise}(Jh(t),e)}function m1(t,e,n){const r=n.docs.get(e._key),s=new rv(t);return new nv(t,s,e._key,r,new ai(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){xs=s})(Vs),Is(new Cr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new js(new fC(r.getProvider("auth-internal")),new _C(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new j(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Yn(Xf,"4.2.0",e),Yn(Xf,"4.2.0","esm2017")})();function cd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Mp(t){return t!==void 0&&t.enterprise!==void 0}class _1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function sv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const y1=sv,iv=new eo("auth","Firebase",sv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new rh("@firebase/auth");function v1(t,...e){Ma.logLevel<=de.WARN&&Ma.warn(`Auth (${Vs}): ${t}`,...e)}function ia(t,...e){Ma.logLevel<=de.ERROR&&Ma.error(`Auth (${Vs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw ld(t,...e)}function cn(t,...e){return ld(t,...e)}function E1(t,e,n){const r=Object.assign(Object.assign({},y1()),{[e]:n});return new eo("auth","Firebase",r).create(e,{appName:t.name})}function ld(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return iv.create(t,...e)}function Z(t,e,...n){if(!t)throw ld(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ia(e),new Error(e)}function Cn(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function I1(){return Lp()==="http:"||Lp()==="https:"}function Lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I1()||BA()||"connection"in navigator)?navigator.onLine:!0}function w1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=UA()||jA()}get(){return T1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=new vo(3e4,6e4);function Fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ur(t,e,n,r,s={}){return av(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=to(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ov.fetch()(cv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function av(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},A1),e);try{const s=new S1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ko(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ko(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ko(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ko(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw E1(t,u,l);Gt(t,u)}}catch(s){if(s instanceof kn)throw s;Gt(t,"network-request-failed",{message:String(s)})}}async function Eo(t,e,n,r,s={}){const i=await Ur(t,e,n,r,s);return"mfaPendingCredential"in i&&Gt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function cv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ud(t.config,s):`${t.config.apiScheme}://${s}`}class S1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),R1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}async function C1(t,e){return Ur(t,"GET","/v2/recaptchaConfig",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(t,e){return Ur(t,"POST","/v1/accounts:delete",e)}async function b1(t,e){return Ur(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function k1(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=hd(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ii(Al(s.auth_time)),issuedAtTime:Ii(Al(s.iat)),expirationTime:Ii(Al(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Al(t){return Number(t)*1e3}function hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ia("JWT malformed, contained fewer than 3 sections"),null;try{const s=km(n);return s?JSON.parse(s):(ia("Failed to decode base64 JWT payload"),null)}catch(s){return ia("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function O1(t){const e=hd(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&N1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function N1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function La(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Gi(t,b1(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?L1(i.providerUserInfo):[],a=M1(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new lv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function V1(t){const e=Ye(t);await La(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function L1(t){return t.map(e=>{var{providerId:n}=e,r=cd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(t,e){const n=await av(t,{},async()=>{const r=to({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=cv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ov.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):O1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await x1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qi;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qi,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ar{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=cd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new D1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gi(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return k1(this,e)}reload(){return V1(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await La(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gi(this,P1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:U,emailVerified:O,isAnonymous:Q,providerData:se,stsTokenManager:fe}=n;Z(U&&fe,e,"internal-error");const F=Qi.fromJSON(this.name,fe);Z(typeof U=="string",e,"internal-error"),Vn(h,e.name),Vn(d,e.name),Z(typeof O=="boolean",e,"internal-error"),Z(typeof Q=="boolean",e,"internal-error"),Vn(g,e.name),Vn(v,e.name),Vn(E,e.name),Vn(A,e.name),Vn(P,e.name),Vn(N,e.name);const z=new Ar({uid:U,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:Q,photoURL:v,phoneNumber:g,tenantId:E,stsTokenManager:F,createdAt:P,lastLoginAt:N});return se&&Array.isArray(se)&&(z.providerData=se.map(ie=>Object.assign({},ie))),A&&(z._redirectEventId=A),z}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qi;s.updateFromServerResponse(n);const i=new Ar({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await La(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=new Map;function En(t){Cn(t instanceof Function,"Expected a class definition");let e=xp.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xp.set(t,e),e)}/**
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
 */class uv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uv.type="NONE";const Fp=uv;/**
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
 */function oa(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=oa(this.userKey,s.apiKey,i),this.fullPersistenceKey=oa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ar._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(En(Fp),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||En(Fp);const o=oa(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ar._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fs(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new fs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gv(e))return"Blackberry";if(mv(e))return"Webos";if(dd(e))return"Safari";if((e.includes("chrome/")||dv(e))&&!e.includes("edge/"))return"Chrome";if(pv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hv(t=pt()){return/firefox\//i.test(t)}function dd(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dv(t=pt()){return/crios\//i.test(t)}function fv(t=pt()){return/iemobile/i.test(t)}function pv(t=pt()){return/android/i.test(t)}function gv(t=pt()){return/blackberry/i.test(t)}function mv(t=pt()){return/webos/i.test(t)}function xc(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function F1(t=pt()){var e;return xc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U1(){return $A()&&document.documentMode===10}function _v(t=pt()){return xc(t)||pv(t)||mv(t)||gv(t)||/windows phone/i.test(t)||fv(t)}function B1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t,e=[]){let n;switch(t){case"Browser":n=Up(pt());break;case"Worker":n=`${Up(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${r}`}/**
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
 */class j1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $1(t,e={}){return Ur(t,"GET","/v2/passwordPolicy",Fr(t,e))}/**
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
 */const q1=6;class H1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:q1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bp(this),this.idTokenSubscription=new Bp(this),this.beforeStateQueue=new j1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=iv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await La(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=w1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $1(this),n=new H1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&v1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Br(t){return Ye(t)}class Bp{constructor(e){this.auth=e,this.observer=null,this.addObserver=QA(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",z1().appendChild(r)})}function W1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const G1="https://www.google.com/recaptcha/enterprise.js?render=",Q1="recaptcha-enterprise",Y1="NO_RECAPTCHA";class J1{constructor(e){this.type=Q1,this.auth=Br(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{C1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new _1(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Mp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Y1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Mp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}vv(G1+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function xa(t,e,n,r=!1){const s=new J1(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(t,e){const n=ih(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(va(i,e??{}))return s;Gt(s,"already-initialized")}return n.initialize({options:e})}function Z1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ek(t,e,n){const r=Br(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Ev(e),{host:o,port:a}=tk(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||nk()}function Ev(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tk(t){const e=Ev(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jp(o)}}}function jp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function rk(t,e){return Ur(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rl(t,e){return Eo(t,"POST","/v1/accounts:signInWithPassword",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(t,e){return Eo(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}async function ik(t,e){return Eo(t,"POST","/v1/accounts:signInWithEmailLink",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends fd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Yi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await xa(e,r,"signInWithPassword");return Rl(e,s)}else return Rl(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await xa(e,r,"signInWithPassword");return Rl(e,i)}else return Promise.reject(s)});case"emailLink":return sk(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return rk(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ik(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e){return Eo(t,"POST","/v1/accounts:signInWithIdp",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="http://localhost";class Nr extends fd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=cd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:ok,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=to(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ck(t){const e=ei(ti(t)).link,n=e?ei(ti(e)).deep_link_id:null,r=ei(ti(t)).deep_link_id;return(r?ei(ti(r)).link:null)||r||n||e||t}class pd{constructor(e){var n,r,s,i,o,a;const c=ei(ti(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=ak((s=c.mode)!==null&&s!==void 0?s:null);Z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ck(e);try{return new pd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,n){return Yi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pd.parseLink(n);return Z(r,"argument-error"),Yi._fromEmailAndCode(e,r.code,r.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Io extends Iv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Io{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Io{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Io{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(t,e){return Eo(t,"POST","/v1/accounts:signUp",Fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ar._fromIdTokenResponse(e,r,s),o=$p(r);return new Dr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$p(r);return new Dr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $p(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fa(e,n,r,s)}}function Tv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fa._fromErrorAndOperation(t,i,e,r):i})}async function lk(t,e,n=!1){const r=await Gi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dr._forOperation(t,"link",r)}/**
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
 */async function uk(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Gi(t,Tv(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=hd(i.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),Dr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wv(t,e,n=!1){const r="signIn",s=await Tv(t,r,e),i=await Dr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function hk(t,e){return wv(Br(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(t){const e=Br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dk(t,e,n){var r;const s=Br(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await xa(s,i,"signUpPassword");o=Sl(s,l)}else o=Sl(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await xa(s,i,"signUpPassword");return Sl(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Av(t),l}),c=await Dr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function fk(t,e,n){return hk(Ye(t),$s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Av(t),r})}function pk(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function gk(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function mk(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function _k(t){return Ye(t).signOut()}const Ua="__sak";/**
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
 */class Rv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ua,"1"),this.storage.removeItem(Ua),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(){const t=pt();return dd(t)||xc(t)}const vk=1e3,Ek=10;class Sv extends Rv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yk()&&B1(),this.fallbackToPolling=_v(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);U1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ek):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sv.type="LOCAL";const Ik=Sv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv extends Rv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cv.type="SESSION";const Pv=Cv;/**
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
 */function Tk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Fc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Tk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=gd("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function Ak(t){ln().location.href=t}/**
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
 */function bv(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function Rk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ck(){return bv()?self:null}/**
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
 */const kv="firebaseLocalStorageDb",Pk=1,Ba="firebaseLocalStorage",Ov="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uc(t,e){return t.transaction([Ba],e?"readwrite":"readonly").objectStore(Ba)}function bk(){const t=indexedDB.deleteDatabase(kv);return new To(t).toPromise()}function bu(){const t=indexedDB.open(kv,Pk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ba,{keyPath:Ov})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ba)?e(r):(r.close(),await bk(),e(await bu()))})})}async function qp(t,e,n){const r=Uc(t,!0).put({[Ov]:e,value:n});return new To(r).toPromise()}async function kk(t,e){const n=Uc(t,!1).get(e),r=await new To(n).toPromise();return r===void 0?null:r.value}function Hp(t,e){const n=Uc(t,!0).delete(e);return new To(n).toPromise()}const Ok=800,Nk=3;class Nv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Nk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(Ck()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Rk(),!this.activeServiceWorker)return;this.sender=new wk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bu();return await qp(e,Ua,"1"),await Hp(e,Ua),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Uc(s,!1).getAll();return new To(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ok)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nv.type="LOCAL";const Dk=Nv;new vo(3e4,6e4);/**
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
 */function Vk(t,e){return e?En(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class md extends fd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Mk(t){return wv(t.auth,new md(t),t.bypassAuthState)}function Lk(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),uk(n,new md(t),t.bypassAuthState)}async function xk(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),lk(n,new md(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mk;case"linkViaPopup":case"linkViaRedirect":return xk;case"reauthViaPopup":case"reauthViaRedirect":return Lk;default:Gt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=new vo(2e3,1e4);class is extends Dv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fk.get())};e()}}is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk="pendingRedirect",aa=new Map;class Bk extends Dv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=aa.get(this.auth._key());if(!e){try{const r=await jk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}aa.set(this.auth._key(),e)}return this.bypassAuthState||aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jk(t,e){const n=Hk(e),r=qk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $k(t,e){aa.set(t._key(),e)}function qk(t){return En(t._redirectPersistence)}function Hk(t){return oa(Uk,t.config.apiKey,t.name)}async function Kk(t,e,n=!1){const r=Br(t),s=Vk(r,e),o=await new Bk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=10*60*1e3;class Wk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kp(e))}saveEventToCache(e){this.cachedEventUids.add(Kp(e)),this.lastProcessedEventTime=Date.now()}}function Kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e={}){return Ur(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jk=/^https?/;async function Xk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qk(t);for(const n of e)try{if(Zk(n))return}catch{}Gt(t,"unauthorized-domain")}function Zk(t){const e=Pu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jk.test(n))return!1;if(Yk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const eO=new vo(3e4,6e4);function zp(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tO(t){return new Promise((e,n)=>{var r,s,i;function o(){zp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zp(),n(cn(t,"network-request-failed"))},timeout:eO.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)o();else{const a=W1("iframefcb");return ln()[a]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},vv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ca=null,e})}let ca=null;function nO(t){return ca=ca||tO(t),ca}/**
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
 */const rO=new vo(5e3,15e3),sO="__/auth/iframe",iO="emulator/auth/iframe",oO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cO(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ud(e,iO):`https://${t.config.authDomain}/${sO}`,r={apiKey:e.apiKey,appName:t.name,v:Vs},s=aO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${to(r).slice(1)}`}async function lO(t){const e=await nO(t),n=ln().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:cO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),a=ln().setTimeout(()=>{i(o)},rO.get());function c(){ln().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const uO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hO=500,dO=600,fO="_blank",pO="http://localhost";class Wp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gO(t,e,n,r=hO,s=dO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},uO),{width:r.toString(),height:s.toString(),top:i,left:o}),l=pt().toLowerCase();n&&(a=dv(l)?fO:n),hv(l)&&(e=e||pO,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,v])=>`${d}${g}=${v},`,"");if(F1(l)&&a!=="_self")return mO(e||"",a),new Wp(null);const h=window.open(e||"",a,u);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new Wp(h)}function mO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _O="__/auth/handler",yO="emulator/auth/handler",vO=encodeURIComponent("fac");async function Gp(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vs,eventId:s};if(e instanceof Iv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Io){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${vO}=${encodeURIComponent(c)}`:"";return`${EO(t)}?${to(a).slice(1)}${l}`}function EO({config:t}){return t.emulator?ud(t,yO):`https://${t.authDomain}/${_O}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="webStorageSupport";class IO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pv,this._completeRedirectFn=Kk,this._overrideRedirectResult=$k}async _openPopup(e,n,r,s){var i;Cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Gp(e,n,r,Pu(),s);return gO(e,o,gd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Gp(e,n,r,Pu(),s);return Ak(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lO(e),r=new Wk(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cl,{type:Cl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Cl];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _v()||dd()||xc()}}const TO=IO;var Qp="@firebase/auth",Yp="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RO(t){Is(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yv(t)},l=new K1(r,s,i,c);return Z1(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Is(new Cr("auth-internal",e=>{const n=Br(e.getProvider("auth").getImmediate());return(r=>new wO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(Qp,Yp,AO(t)),Yn(Qp,Yp,"esm2017")}/**
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
 */const SO=5*60,CO=Dm("authIdTokenMaxAge")||SO;let Jp=null;const PO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CO)return;const s=n==null?void 0:n.token;Jp!==s&&(Jp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bO(t=xm()){const e=ih(t,"auth");if(e.isInitialized())return e.getImmediate();const n=X1(t,{popupRedirectResolver:TO,persistence:[Dk,Ik,Pv]}),r=Dm("authTokenSyncURL");if(r){const i=PO(r);gk(n,i,()=>i(n.currentUser)),pk(n,o=>i(o))}const s=Om("auth");return s&&ek(n,`http://${s}`),n}RO("Browser");const kO={apiKey:"AIzaSyBEj_lvulwL921R6C-GKJN1eC4haiLIk0Q",authDomain:"vue3-2c548.firebaseapp.com",projectId:"vue3-2c548",storageBucket:"vue3-2c548.appspot.com",messagingSenderId:"975447172434",appId:"1:975447172434:web:d7afa045c68a84b2df468"};Lm(kO);const Qr=Wb(),_n=bO(),OO="modulepreload",NO=function(t){return"/fbvue3-exp/"+t},Xp={},zo=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=NO(i),i in Xp)return;Xp[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":OO,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};const Zp=async(t,e,n)=>{const r=ku();r.loading=!0,await r.currentUser()?n("/about"):n(),r.loading=!1},la=oA({history:w0(),routes:[{path:"/",name:"home",component:()=>zo(()=>import("./HomeView-b2860db5.js"),[])},{path:"/login",name:"login",component:()=>zo(()=>import("./Login-f58c969c.js"),[]),beforeEnter:Zp},{path:"/register",name:"register",component:()=>zo(()=>import("./Register-b36afe80.js"),[]),beforeEnter:Zp},{path:"/about",name:"about",component:()=>zo(()=>import("./AboutView-e0026d55.js"),["assets/AboutView-e0026d55.js","assets/AboutView-b6cc1770.css"])}]});let DO=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const eg=em("database",()=>{let t=xe([]),e=xe(!1);return{documents:t,loadingDoc:e,getUrls:async()=>{e.value=!0;try{const a=i1(Np(Qr,"urls"),o1("user","==",_n.currentUser.uid));(await d1(a)).forEach(l=>{t.value.push({id:l.id,...l.data()})})}catch(a){console.log(a)}finally{e.value=!1}},leerUrl:async a=>{e.value=!0;try{const c=oi(Qr,"urls",a),l=await wl(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==_n.currentUser.uid)throw new Error("No es dueño del documento");return l.data().name}catch(c){console.log(c.message)}finally{e.value=!1}},updateUrl:async(a,c)=>{e.value=!0;try{const l=oi(Qr,"urls",a),u=await wl(l);if(!u.exists())throw new Error("no existe el doc");if(u.data().user===_n.currentUser.uid)await f1(l,{name:c}),t.value=t.value.map(h=>h.id===a?{...h,name:c}:h);else throw new Error("no eres el autor")}catch(l){console.log(l.message)}finally{e.value=!1}},addUrl:async a=>{try{const c={name:a,short:DO(6),user:_n.currentUser.uid},l=await g1(Np(Qr,"urls"),c);t.value.push({...c,id:l.id})}catch(c){console.log(c)}},deleteUrl:async a=>{try{const c=oi(Qr,"urls",a),l=await wl(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==_n.currentUser.uid)throw new Error("No es dueño del documento");await p1(oi(Qr,"urls",a)),t.value=t.value.filter(u=>u.id!==a)}catch(c){console.log(c.message)}}}}),ku=em("user",()=>{let t=xe(null),e=xe(!1),n=xe(!1);return{loadingUser:e,loading:n,userData:t,registerUser:async(a,c)=>{e.value=!0;try{const{user:l}=await dk(_n,a,c);t.value={email:l.email,uid:l.uid},la.push("/")}catch(l){console.error(l),t.value=null}finally{e.value=!1}},loginUser:async(a,c)=>{e.value=!0;try{const{user:l}=await fk(_n,a,c);t.value={email:l.email,uid:l.uid},la.push("/about")}catch(l){l.code==="auth/user-not-found"?alert("No se encontró ningún usuario con esa dirección de correo electrónico."):l.code==="auth/wrong-password"?alert("Clave equivocada"):(console.log(l),t.value=null)}finally{e.value=!1}},logoutUser:async(a,c)=>{eg();try{await _k(_n)}catch(l){console.log(l)}finally{t.value=null,n.value=!1,la.push("/login")}},currentUser:()=>new Promise((a,c)=>{const l=mk(_n,u=>{u?t.value={email:u.email,uid:u.uid}:(t.value=null,eg()),a(u),l()},u=>c(u))})}}),VO={class:"row"},MO={key:0,class:""},LO=Zn("label",{for:"lightChck"},"Cambiar luz",-1),xO=["checked"],FO={key:1},UO={__name:"CustomHeader",props:{isDark:{type:Boolean}},emits:["toggleDark"],setup(t){const e=ku();return(n,r)=>{const s=sT("router-link");return Ln(),Zs("header",null,[Zn("nav",VO,[Ge(ku).loading?(Ln(),Zs("div",FO,"Loading user...")):(Ln(),Zs("div",MO,[le(s,{to:"/",class:Zt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"])},{default:Yr(()=>[Jr("Home ")]),_:1},8,["class"]),le(s,{to:"/cssexperiment",class:Zt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"])},{default:Yr(()=>[Jr("Css Experiment ")]),_:1},8,["class"]),le(s,{to:"/about",class:Zt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"])},{default:Yr(()=>[Jr("About ")]),_:1},8,["class"]),LO,Zn("input",{id:"lightChck",type:"checkbox",name:"ligh_check",class:"me-2",checked:t.isDark,onChange:r[0]||(r[0]=i=>n.$emit("toggleDark"))},null,40,xO),Ge(e).userData?Zc("",!0):(Ln(),Ul(s,{key:0,to:"/login",class:Zt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"])},{default:Yr(()=>[Jr("Login ")]),_:1},8,["class"])),Ge(e).userData?Zc("",!0):(Ln(),Ul(s,{key:1,to:"/register",class:Zt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"])},{default:Yr(()=>[Jr("Register ")]),_:1},8,["class"])),Ge(e).userData?(Ln(),Zs("button",{key:2,class:"btn btn-primary",onClick:r[1]||(r[1]=(...i)=>Ge(e).logoutUser&&Ge(e).logoutUser(...i))},"Logout ")):Zc("",!0)]))])])}}};const BO=Zn("div",null,"Veamos 1",-1),jO={class:"container-fluid"},$O={__name:"App",setup(t){const e=PA({selector:"body",valueDark:"bd-dark",valueLight:"bd-light"}),n=_A(e);return(r,s)=>(Ln(),Zs(Ft,null,[le(UO,{isDark:Ge(e),onToggleDark:Ge(n),class:Zt(["container my-2 p-4",Ge(e)?"bg-dark":"bg-light"])},null,8,["isDark","onToggleDark","class"]),BO,Zn("div",jO,[Zn("main",{class:Zt(["container my-2 p-4",Ge(e)?"bg-dark":"bg-light"])},[le(Ge(Tm))],2)])],64))}},Bc=Qg($O),Mv=dw();Mv.use(uw);Bc.use(Mv);Bc.use(la);Bc.use(um);Bc.mount("#app");export{Ft as F,le as a,Zn as b,Zs as c,Ge as d,WO as e,ye as f,GO as g,eg as h,Ve as i,Ji as j,KO as k,ke as l,Jr as m,Ln as o,xe as r,qO as t,ku as u,zO as v,HO as w};
