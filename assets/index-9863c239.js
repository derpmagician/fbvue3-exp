(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function qu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const xe={},ds=[],Jt=()=>{},rw=()=>!1,sw=/^on[^a-z]/,Ga=t=>sw.test(t),Hu=t=>t.startsWith("onUpdate:"),at=Object.assign,Ku=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iw=Object.prototype.hasOwnProperty,be=(t,e)=>iw.call(t,e),ce=Array.isArray,fs=t=>Qa(t)==="[object Map]",vg=t=>Qa(t)==="[object Set]",ge=t=>typeof t=="function",tt=t=>typeof t=="string",zu=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Eg=t=>Be(t)&&ge(t.then)&&ge(t.catch),wg=Object.prototype.toString,Qa=t=>wg.call(t),ow=t=>Qa(t).slice(8,-1),Ig=t=>Qa(t)==="[object Object]",Wu=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yo=qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ya=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},aw=/-(\w)/g,yn=Ya(t=>t.replace(aw,(e,n)=>n?n.toUpperCase():"")),cw=/\B([A-Z])/g,Fs=Ya(t=>t.replace(cw,"-$1").toLowerCase()),Ja=Ya(t=>t.charAt(0).toUpperCase()+t.slice(1)),ll=Ya(t=>t?`on${Ja(t)}`:""),Ci=(t,e)=>!Object.is(t,e),Jo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},pa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Bl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zd;const jl=()=>zd||(zd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gu(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=tt(r)?dw(r):Gu(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(tt(t))return t;if(Be(t))return t}}const lw=/;(?![^(]*\))/g,uw=/:([^]+)/,hw=/\/\*[^]*?\*\//g;function dw(t){const e={};return t.replace(hw,"").split(lw).forEach(n=>{if(n){const r=n.split(uw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Dt(t){let e="";if(tt(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Dt(t[n]);r&&(e+=r+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pw=qu(fw);function Tg(t){return!!t||t===""}const lD=t=>tt(t)?t:t==null?"":ce(t)||Be(t)&&(t.toString===wg||!ge(t.toString))?JSON.stringify(t,Ag,2):String(t),Ag=(t,e)=>e&&e.__v_isRef?Ag(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:vg(e)?{[`Set(${e.size})`]:[...e.values()]}:Be(e)&&!ce(e)&&!Ig(e)?String(e):e;let Ft;class Rg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ft;try{return Ft=this,e()}finally{Ft=n}}}on(){Ft=this}off(){Ft=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sg(t){return new Rg(t)}function gw(t,e=Ft){e&&e.active&&e.effects.push(t)}function Qu(){return Ft}function bg(t){Ft&&Ft.cleanups.push(t)}const Yu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Pg=t=>(t.w&ar)>0,Cg=t=>(t.n&ar)>0,mw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ar},_w=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Pg(s)&&!Cg(s)?s.delete(t):e[n++]=s,s.w&=~ar,s.n&=~ar}e.length=n}},ga=new WeakMap;let ii=0,ar=1;const ql=30;let Qt;const Cr=Symbol(""),Hl=Symbol("");class Ju{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,gw(this,r)}run(){if(!this.active)return this.fn();let e=Qt,n=Zn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Qt,Qt=this,Zn=!0,ar=1<<++ii,ii<=ql?mw(this):Wd(this),this.fn()}finally{ii<=ql&&_w(this),ar=1<<--ii,Qt=this.parent,Zn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Qt===this?this.deferStop=!0:this.active&&(Wd(this),this.onStop&&this.onStop(),this.active=!1)}}function Wd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Zn=!0;const Og=[];function Us(){Og.push(Zn),Zn=!1}function $s(){const t=Og.pop();Zn=t===void 0?!0:t}function xt(t,e,n){if(Zn&&Qt){let r=ga.get(t);r||ga.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Yu()),kg(s)}}function kg(t,e){let n=!1;ii<=ql?Cg(t)||(t.n|=ar,n=!Pg(t)):n=!t.has(Qt),n&&(t.add(Qt),Qt.deps.push(t))}function Cn(t,e,n,r,s,i){const o=ga.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ce(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ce(t)?Wu(n)&&a.push(o.get("length")):(a.push(o.get(Cr)),fs(t)&&a.push(o.get(Hl)));break;case"delete":ce(t)||(a.push(o.get(Cr)),fs(t)&&a.push(o.get(Hl)));break;case"set":fs(t)&&a.push(o.get(Cr));break}if(a.length===1)a[0]&&Kl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Kl(Yu(c))}}function Kl(t,e){const n=ce(t)?t:[...t];for(const r of n)r.computed&&Gd(r);for(const r of n)r.computed||Gd(r)}function Gd(t,e){(t!==Qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function yw(t,e){var n;return(n=ga.get(t))==null?void 0:n.get(e)}const vw=qu("__proto__,__v_isRef,__isVue"),Dg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(zu)),Ew=Xu(),ww=Xu(!1,!0),Iw=Xu(!0),Qd=Tw();function Tw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=fe(this);for(let i=0,o=this.length;i<o;i++)xt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(fe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Us();const r=fe(this)[e].apply(this,n);return $s(),r}}),t}function Aw(t){const e=fe(this);return xt(e,"has",t),e.hasOwnProperty(t)}function Xu(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?$w:Lg:e?xg:Mg).get(r))return r;const o=ce(r);if(!t){if(o&&be(Qd,s))return Reflect.get(Qd,s,i);if(s==="hasOwnProperty")return Aw}const a=Reflect.get(r,s,i);return(zu(s)?Dg.has(s):vw(s))||(t||xt(r,"get",s),e)?a:qe(a)?o&&Wu(s)?a:a.value:Be(a)?t?Za(a):rn(a):a}}const Rw=Ng(),Sw=Ng(!0);function Ng(t=!1){return function(n,r,s,i){let o=n[r];if(Is(o)&&qe(o)&&!qe(s))return!1;if(!t&&(!ma(s)&&!Is(s)&&(o=fe(o),s=fe(s)),!ce(n)&&qe(o)&&!qe(s)))return o.value=s,!0;const a=ce(n)&&Wu(r)?Number(r)<n.length:be(n,r),c=Reflect.set(n,r,s,i);return n===fe(i)&&(a?Ci(s,o)&&Cn(n,"set",r,s):Cn(n,"add",r,s)),c}}function bw(t,e){const n=be(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Cn(t,"delete",e,void 0),r}function Pw(t,e){const n=Reflect.has(t,e);return(!zu(e)||!Dg.has(e))&&xt(t,"has",e),n}function Cw(t){return xt(t,"iterate",ce(t)?"length":Cr),Reflect.ownKeys(t)}const Vg={get:Ew,set:Rw,deleteProperty:bw,has:Pw,ownKeys:Cw},Ow={get:Iw,set(t,e){return!0},deleteProperty(t,e){return!0}},kw=at({},Vg,{get:ww,set:Sw}),Zu=t=>t,Xa=t=>Reflect.getPrototypeOf(t);function No(t,e,n=!1,r=!1){t=t.__v_raw;const s=fe(t),i=fe(e);n||(e!==i&&xt(s,"get",e),xt(s,"get",i));const{has:o}=Xa(s),a=r?Zu:n?nh:Oi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Vo(t,e=!1){const n=this.__v_raw,r=fe(n),s=fe(t);return e||(t!==s&&xt(r,"has",t),xt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Mo(t,e=!1){return t=t.__v_raw,!e&&xt(fe(t),"iterate",Cr),Reflect.get(t,"size",t)}function Yd(t){t=fe(t);const e=fe(this);return Xa(e).has.call(e,t)||(e.add(t),Cn(e,"add",t,t)),this}function Jd(t,e){e=fe(e);const n=fe(this),{has:r,get:s}=Xa(n);let i=r.call(n,t);i||(t=fe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ci(e,o)&&Cn(n,"set",t,e):Cn(n,"add",t,e),this}function Xd(t){const e=fe(this),{has:n,get:r}=Xa(e);let s=n.call(e,t);s||(t=fe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Cn(e,"delete",t,void 0),i}function Zd(){const t=fe(this),e=t.size!==0,n=t.clear();return e&&Cn(t,"clear",void 0,void 0),n}function xo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=fe(o),c=e?Zu:t?nh:Oi;return!t&&xt(a,"iterate",Cr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Lo(t,e,n){return function(...r){const s=this.__v_raw,i=fe(s),o=fs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Zu:e?nh:Oi;return!e&&xt(i,"iterate",c?Hl:Cr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function $n(t){return function(...e){return t==="delete"?!1:this}}function Dw(){const t={get(i){return No(this,i)},get size(){return Mo(this)},has:Vo,add:Yd,set:Jd,delete:Xd,clear:Zd,forEach:xo(!1,!1)},e={get(i){return No(this,i,!1,!0)},get size(){return Mo(this)},has:Vo,add:Yd,set:Jd,delete:Xd,clear:Zd,forEach:xo(!1,!0)},n={get(i){return No(this,i,!0)},get size(){return Mo(this,!0)},has(i){return Vo.call(this,i,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:xo(!0,!1)},r={get(i){return No(this,i,!0,!0)},get size(){return Mo(this,!0)},has(i){return Vo.call(this,i,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Lo(i,!1,!1),n[i]=Lo(i,!0,!1),e[i]=Lo(i,!1,!0),r[i]=Lo(i,!0,!0)}),[t,n,e,r]}const[Nw,Vw,Mw,xw]=Dw();function eh(t,e){const n=e?t?xw:Mw:t?Vw:Nw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const Lw={get:eh(!1,!1)},Fw={get:eh(!1,!0)},Uw={get:eh(!0,!1)},Mg=new WeakMap,xg=new WeakMap,Lg=new WeakMap,$w=new WeakMap;function Bw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jw(t){return t.__v_skip||!Object.isExtensible(t)?0:Bw(ow(t))}function rn(t){return Is(t)?t:th(t,!1,Vg,Lw,Mg)}function Fg(t){return th(t,!1,kw,Fw,xg)}function Za(t){return th(t,!0,Ow,Uw,Lg)}function th(t,e,n,r,s){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=jw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function er(t){return Is(t)?er(t.__v_raw):!!(t&&t.__v_isReactive)}function Is(t){return!!(t&&t.__v_isReadonly)}function ma(t){return!!(t&&t.__v_isShallow)}function Ug(t){return er(t)||Is(t)}function fe(t){const e=t&&t.__v_raw;return e?fe(e):t}function ec(t){return pa(t,"__v_skip",!0),t}const Oi=t=>Be(t)?rn(t):t,nh=t=>Be(t)?Za(t):t;function rh(t){Zn&&Qt&&(t=fe(t),kg(t.dep||(t.dep=Yu())))}function sh(t,e){t=fe(t);const n=t.dep;n&&Kl(n)}function qe(t){return!!(t&&t.__v_isRef===!0)}function He(t){return Bg(t,!1)}function $g(t){return Bg(t,!0)}function Bg(t,e){return qe(t)?t:new qw(t,e)}class qw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:fe(e),this._value=n?e:Oi(e)}get value(){return rh(this),this._value}set value(e){const n=this.__v_isShallow||ma(e)||Is(e);e=n?e:fe(e),Ci(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Oi(e),sh(this))}}function ot(t){return qe(t)?t.value:t}const Hw={get:(t,e,n)=>ot(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return qe(s)&&!qe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jg(t){return er(t)?t:new Proxy(t,Hw)}class Kw{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>rh(this),()=>sh(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function zw(t){return new Kw(t)}function Ww(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=qg(t,n);return e}class Gw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return yw(fe(this._object),this._key)}}class Qw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Yw(t,e,n){return qe(t)?t:ge(t)?new Qw(t):Be(t)&&arguments.length>1?qg(t,e,n):He(t)}function qg(t,e,n){const r=t[e];return qe(r)?r:new Gw(t,e,n)}class Jw{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ju(e,()=>{this._dirty||(this._dirty=!0,sh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=fe(this);return rh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Xw(t,e,n=!1){let r,s;const i=ge(t);return i?(r=t,s=Jt):(r=t.get,s=t.set),new Jw(r,s,i||!s,n)}function tr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){tc(i,e,n)}return s}function Xt(t,e,n,r){if(ge(t)){const i=tr(t,e,n,r);return i&&Eg(i)&&i.catch(o=>{tc(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Xt(t[i],e,n,r));return s}function tc(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){tr(c,null,10,[t,o,a]);return}}Zw(t,n,s,r)}function Zw(t,e,n,r=!0){console.error(t)}let ki=!1,zl=!1;const _t=[];let ln=0;const ps=[];let Tn=null,Ir=0;const Hg=Promise.resolve();let ih=null;function jr(t){const e=ih||Hg;return t?e.then(this?t.bind(this):t):e}function eI(t){let e=ln+1,n=_t.length;for(;e<n;){const r=e+n>>>1;Di(_t[r])<t?e=r+1:n=r}return e}function oh(t){(!_t.length||!_t.includes(t,ki&&t.allowRecurse?ln+1:ln))&&(t.id==null?_t.push(t):_t.splice(eI(t.id),0,t),Kg())}function Kg(){!ki&&!zl&&(zl=!0,ih=Hg.then(Wg))}function tI(t){const e=_t.indexOf(t);e>ln&&_t.splice(e,1)}function nI(t){ce(t)?ps.push(...t):(!Tn||!Tn.includes(t,t.allowRecurse?Ir+1:Ir))&&ps.push(t),Kg()}function ef(t,e=ki?ln+1:0){for(;e<_t.length;e++){const n=_t[e];n&&n.pre&&(_t.splice(e,1),e--,n())}}function zg(t){if(ps.length){const e=[...new Set(ps)];if(ps.length=0,Tn){Tn.push(...e);return}for(Tn=e,Tn.sort((n,r)=>Di(n)-Di(r)),Ir=0;Ir<Tn.length;Ir++)Tn[Ir]();Tn=null,Ir=0}}const Di=t=>t.id==null?1/0:t.id,rI=(t,e)=>{const n=Di(t)-Di(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wg(t){zl=!1,ki=!0,_t.sort(rI);const e=Jt;try{for(ln=0;ln<_t.length;ln++){const n=_t[ln];n&&n.active!==!1&&tr(n,null,14)}}finally{ln=0,_t.length=0,zg(),ki=!1,ih=null,(_t.length||ps.length)&&Wg()}}function sI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||xe;d&&(s=n.map(p=>tt(p)?p.trim():p)),h&&(s=n.map(Bl))}let a,c=r[a=ll(e)]||r[a=ll(yn(e))];!c&&i&&(c=r[a=ll(Fs(e))]),c&&Xt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Xt(l,t,6,s)}}function Gg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ge(t)){const c=l=>{const u=Gg(l,e,!0);u&&(a=!0,at(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Be(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):at(o,i),Be(t)&&r.set(t,o),o)}function nc(t,e){return!t||!Ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Fs(e))||be(t,e))}let Vt=null,Qg=null;function _a(t){const e=Vt;return Vt=t,Qg=t&&t.type.__scopeId||null,e}function on(t,e=Vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&df(-1);const i=_a(e);let o;try{o=t(...s)}finally{_a(i),r._d&&df(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ul(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:y,inheritAttrs:E}=t;let T,P;const V=_a(t);try{if(n.shapeFlag&4){const N=s||r;T=cn(u.call(N,N,h,i,p,d,y)),P=c}else{const N=e;T=cn(N.length>1?N(i,{attrs:c,slots:a,emit:l}):N(i,null)),P=e.props?c:iI(c)}}catch(N){_i.length=0,tc(N,t,1),T=_e(Nr)}let q=T;if(P&&E!==!1){const N=Object.keys(P),{shapeFlag:ee}=q;N.length&&ee&7&&(o&&N.some(Hu)&&(P=oI(P,o)),q=Vr(q,P))}return n.dirs&&(q=Vr(q),q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),T=q,_a(V),T}const iI=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ga(n))&&((e||(e={}))[n]=t[n]);return e},oI=(t,e)=>{const n={};for(const r in t)(!Hu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function aI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?tf(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!nc(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?tf(r,o,l):!0:!!o;return!1}function tf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!nc(n,i))return!0}return!1}function cI({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const lI=t=>t.__isSuspense;function uI(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):nI(t)}function gi(t,e){return ah(t,null,e)}const Fo={};function nr(t,e,n){return ah(t,e,n)}function ah(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=xe){var a;const c=Qu()===((a=et)==null?void 0:a.scope)?et:null;let l,u=!1,h=!1;if(qe(t)?(l=()=>t.value,u=ma(t)):er(t)?(l=()=>t,r=!0):ce(t)?(h=!0,u=t.some(N=>er(N)||ma(N)),l=()=>t.map(N=>{if(qe(N))return N.value;if(er(N))return Ar(N);if(ge(N))return tr(N,c,2)})):ge(t)?e?l=()=>tr(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Xt(t,c,3,[p])}:l=Jt,e&&r){const N=l;l=()=>Ar(N())}let d,p=N=>{d=V.onStop=()=>{tr(N,c,4)}},y;if(xi)if(p=Jt,e?n&&Xt(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const N=rT();y=N.__watcherHandles||(N.__watcherHandles=[])}else return Jt;let E=h?new Array(t.length).fill(Fo):Fo;const T=()=>{if(V.active)if(e){const N=V.run();(r||u||(h?N.some((ee,ie)=>Ci(ee,E[ie])):Ci(N,E)))&&(d&&d(),Xt(e,c,3,[N,E===Fo?void 0:h&&E[0]===Fo?[]:E,p]),E=N)}else V.run()};T.allowRecurse=!!e;let P;s==="sync"?P=T:s==="post"?P=()=>kt(T,c&&c.suspense):(T.pre=!0,c&&(T.id=c.uid),P=()=>oh(T));const V=new Ju(l,P);e?n?T():E=V.run():s==="post"?kt(V.run.bind(V),c&&c.suspense):V.run();const q=()=>{V.stop(),c&&c.scope&&Ku(c.scope.effects,V)};return y&&y.push(q),q}function hI(t,e,n){const r=this.proxy,s=tt(t)?t.includes(".")?Yg(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=et;Ts(this);const a=ah(s,i.bind(r),n);return o?Ts(o):Or(),a}function Yg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ar(t,e){if(!Be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),qe(t))Ar(t.value,e);else if(ce(t))for(let n=0;n<t.length;n++)Ar(t[n],e);else if(vg(t)||fs(t))t.forEach(n=>{Ar(n,e)});else if(Ig(t))for(const n in t)Ar(t[n],e);return t}function uD(t,e){const n=Vt;if(n===null)return t;const r=ac(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=xe]=e[i];o&&(ge(o)&&(o={mounted:o,updated:o}),o.deep&&Ar(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function vr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Us(),Xt(c,n,8,[t.el,a,t,e]),$s())}}function Bs(t,e){return ge(t)?(()=>at({name:t.name},e,{setup:t}))():t}const Xo=t=>!!t.type.__asyncLoader,Jg=t=>t.type.__isKeepAlive;function dI(t,e){Xg(t,"a",e)}function fI(t,e){Xg(t,"da",e)}function Xg(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(rc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Jg(s.parent.vnode)&&pI(r,e,n,s),s=s.parent}}function pI(t,e,n,r){const s=rc(e,t,r,!0);sc(()=>{Ku(r[e],s)},n)}function rc(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Us(),Ts(n);const a=Xt(e,n,t,o);return Or(),$s(),a});return r?s.unshift(i):s.push(i),i}}const Mn=t=>(e,n=et)=>(!xi||t==="sp")&&rc(t,(...r)=>e(...r),n),gI=Mn("bm"),ro=Mn("m"),mI=Mn("bu"),_I=Mn("u"),yI=Mn("bum"),sc=Mn("um"),vI=Mn("sp"),EI=Mn("rtg"),wI=Mn("rtc");function II(t,e=et){rc("ec",t,e)}const Zg="components",TI="directives";function AI(t,e){return em(Zg,t,!0,e)||t}const RI=Symbol.for("v-ndc");function hD(t){return em(TI,t)}function em(t,e,n=!0,r=!1){const s=Vt||et;if(s){const i=s.type;if(t===Zg){const a=eT(i,!1);if(a&&(a===e||a===yn(e)||a===Ja(yn(e))))return i}const o=nf(s[t]||i[t],e)||nf(s.appContext[t],e);return!o&&r?i:o}}function nf(t,e){return t&&(t[e]||t[yn(e)]||t[Ja(yn(e))])}function dD(t,e,n,r){let s;const i=n&&n[r];if(ce(t)||tt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Be(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Wl=t=>t?dm(t)?ac(t)||t.proxy:Wl(t.parent):null,mi=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wl(t.parent),$root:t=>Wl(t.root),$emit:t=>t.emit,$options:t=>ch(t),$forceUpdate:t=>t.f||(t.f=()=>oh(t.update)),$nextTick:t=>t.n||(t.n=jr.bind(t.proxy)),$watch:t=>hI.bind(t)}),hl=(t,e)=>t!==xe&&!t.__isScriptSetup&&be(t,e),SI={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(hl(r,e))return o[e]=1,r[e];if(s!==xe&&be(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&be(l,e))return o[e]=3,i[e];if(n!==xe&&be(n,e))return o[e]=4,n[e];Gl&&(o[e]=0)}}const u=mi[e];let h,d;if(u)return e==="$attrs"&&xt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==xe&&be(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,be(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return hl(s,e)?(s[e]=n,!0):r!==xe&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==xe&&be(t,o)||hl(e,o)||(a=i[0])&&be(a,o)||be(r,o)||be(mi,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rf(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Gl=!0;function bI(t){const e=ch(t),n=t.proxy,r=t.ctx;Gl=!1,e.beforeCreate&&sf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:y,activated:E,deactivated:T,beforeDestroy:P,beforeUnmount:V,destroyed:q,unmounted:N,render:ee,renderTracked:ie,renderTriggered:we,errorCaptured:B,serverPrefetch:G,expose:Y,inheritAttrs:ae,components:Ge,directives:rt,filters:ne}=e;if(l&&PI(l,r,null),o)for(const L in o){const O=o[L];ge(O)&&(r[L]=O.bind(n))}if(s){const L=s.call(n,n);Be(L)&&(t.data=rn(L))}if(Gl=!0,i)for(const L in i){const O=i[L],se=ge(O)?O.bind(n,n):ge(O.get)?O.get.bind(n,n):Jt,$=!ge(O)&&ge(O.set)?O.set.bind(n):Jt,ye=Se({get:se,set:$});Object.defineProperty(r,L,{enumerable:!0,configurable:!0,get:()=>ye.value,set:ve=>ye.value=ve})}if(a)for(const L in a)tm(a[L],r,n,L);if(c){const L=ge(c)?c.call(n):c;Reflect.ownKeys(L).forEach(O=>{Zo(O,L[O])})}u&&sf(u,t,"c");function b(L,O){ce(O)?O.forEach(se=>L(se.bind(n))):O&&L(O.bind(n))}if(b(gI,h),b(ro,d),b(mI,p),b(_I,y),b(dI,E),b(fI,T),b(II,B),b(wI,ie),b(EI,we),b(yI,V),b(sc,N),b(vI,G),ce(Y))if(Y.length){const L=t.exposed||(t.exposed={});Y.forEach(O=>{Object.defineProperty(L,O,{get:()=>n[O],set:se=>n[O]=se})})}else t.exposed||(t.exposed={});ee&&t.render===Jt&&(t.render=ee),ae!=null&&(t.inheritAttrs=ae),Ge&&(t.components=Ge),rt&&(t.directives=rt)}function PI(t,e,n=Jt){ce(t)&&(t=Ql(t));for(const r in t){const s=t[r];let i;Be(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),qe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function sf(t,e,n){Xt(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function tm(t,e,n,r){const s=r.includes(".")?Yg(n,r):()=>n[r];if(tt(t)){const i=e[t];ge(i)&&nr(s,i)}else if(ge(t))nr(s,t.bind(n));else if(Be(t))if(ce(t))t.forEach(i=>tm(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&nr(s,i,t)}}function ch(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>ya(c,l,o,!0)),ya(c,e,o)),Be(e)&&i.set(e,c),c}function ya(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ya(t,i,n,!0),s&&s.forEach(o=>ya(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=CI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const CI={data:of,props:af,emits:af,methods:oi,computed:oi,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:oi,directives:oi,watch:kI,provide:of,inject:OI};function of(t,e){return e?t?function(){return at(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function OI(t,e){return oi(Ql(t),Ql(e))}function Ql(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?at(Object.create(null),t,e):e}function af(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:at(Object.create(null),rf(t),rf(e??{})):e}function kI(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function nm(){return{app:null,config:{isNativeTag:rw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let DI=0;function NI(t,e){return function(r,s=null){ge(r)||(r=at({},r)),s!=null&&!Be(s)&&(s=null);const i=nm(),o=new Set;let a=!1;const c=i.app={_uid:DI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:sT,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ge(l.install)?(o.add(l),l.install(c,...u)):ge(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=_e(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,ac(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Ni=c;try{return l()}finally{Ni=null}}};return c}}let Ni=null;function Zo(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=et||Vt;if(r||Ni){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ni._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function VI(){return!!(et||Vt||Ni)}function MI(t,e,n,r=!1){const s={},i={};pa(i,oc,1),t.propsDefaults=Object.create(null),rm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Fg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function xI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=fe(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(nc(t.emitsOptions,d))continue;const p=e[d];if(c)if(be(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const y=yn(d);s[y]=Yl(c,a,y,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{rm(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!be(e,h)&&((u=Fs(h))===h||!be(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Yl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!be(e,h))&&(delete i[h],l=!0)}l&&Cn(t,"set","$attrs")}function rm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Yo(c))continue;const l=e[c];let u;s&&be(s,u=yn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:nc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=fe(n),l=a||xe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Yl(s,c,h,l[h],t,!be(l,h))}}return o}function Yl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=be(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Ts(s),r=l[n]=c.call(null,e),Or())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Fs(n))&&(r=!0))}return r}function sm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ge(t)){const u=h=>{c=!0;const[d,p]=sm(h,e,!0);at(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Be(t)&&r.set(t,ds),ds;if(ce(i))for(let u=0;u<i.length;u++){const h=yn(i[u]);cf(h)&&(o[h]=xe)}else if(i)for(const u in i){const h=yn(u);if(cf(h)){const d=i[u],p=o[h]=ce(d)||ge(d)?{type:d}:at({},d);if(p){const y=hf(Boolean,p.type),E=hf(String,p.type);p[0]=y>-1,p[1]=E<0||y<E,(y>-1||be(p,"default"))&&a.push(h)}}}const l=[o,a];return Be(t)&&r.set(t,l),l}function cf(t){return t[0]!=="$"}function lf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function uf(t,e){return lf(t)===lf(e)}function hf(t,e){return ce(e)?e.findIndex(n=>uf(n,t)):ge(e)&&uf(e,t)?0:-1}const im=t=>t[0]==="_"||t==="$stable",lh=t=>ce(t)?t.map(cn):[cn(t)],LI=(t,e,n)=>{if(e._n)return e;const r=on((...s)=>lh(e(...s)),n);return r._c=!1,r},om=(t,e,n)=>{const r=t._ctx;for(const s in t){if(im(s))continue;const i=t[s];if(ge(i))e[s]=LI(s,i,r);else if(i!=null){const o=lh(i);e[s]=()=>o}}},am=(t,e)=>{const n=lh(e);t.slots.default=()=>n},FI=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=fe(e),pa(e,"_",n)):om(e,t.slots={})}else t.slots={},e&&am(t,e);pa(t.slots,oc,1)},UI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(at(s,e),!n&&a===1&&delete s._):(i=!e.$stable,om(e,s)),o=e}else e&&(am(t,e),o={default:1});if(i)for(const a in s)!im(a)&&!(a in o)&&delete s[a]};function Jl(t,e,n,r,s=!1){if(ce(t)){t.forEach((d,p)=>Jl(d,e&&(ce(e)?e[p]:e),n,r,s));return}if(Xo(r)&&!s)return;const i=r.shapeFlag&4?ac(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===xe?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(tt(l)?(u[l]=null,be(h,l)&&(h[l]=null)):qe(l)&&(l.value=null)),ge(c))tr(c,a,12,[o,u]);else{const d=tt(c),p=qe(c);if(d||p){const y=()=>{if(t.f){const E=d?be(h,c)?h[c]:u[c]:c.value;s?ce(E)&&Ku(E,i):ce(E)?E.includes(i)||E.push(i):d?(u[c]=[i],be(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,be(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,kt(y,n)):y()}}}const kt=uI;function $I(t){return BI(t)}function BI(t,e){const n=jl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Jt,insertStaticContent:y}=t,E=(g,m,_,w=null,S=null,C=null,z=!1,x=null,F=!!m.dynamicChildren)=>{if(g===m)return;g&&!ei(g,m)&&(w=I(g),ve(g,S,C,!0),g=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:k,ref:te,shapeFlag:Q}=m;switch(k){case ic:T(g,m,_,w);break;case Nr:P(g,m,_,w);break;case dl:g==null&&V(m,_,w,z);break;case Gt:Ge(g,m,_,w,S,C,z,x,F);break;default:Q&1?ee(g,m,_,w,S,C,z,x,F):Q&6?rt(g,m,_,w,S,C,z,x,F):(Q&64||Q&128)&&k.process(g,m,_,w,S,C,z,x,F,M)}te!=null&&S&&Jl(te,g&&g.ref,C,m||g,!m)},T=(g,m,_,w)=>{if(g==null)r(m.el=a(m.children),_,w);else{const S=m.el=g.el;m.children!==g.children&&l(S,m.children)}},P=(g,m,_,w)=>{g==null?r(m.el=c(m.children||""),_,w):m.el=g.el},V=(g,m,_,w)=>{[g.el,g.anchor]=y(g.children,m,_,w,g.el,g.anchor)},q=({el:g,anchor:m},_,w)=>{let S;for(;g&&g!==m;)S=d(g),r(g,_,w),g=S;r(m,_,w)},N=({el:g,anchor:m})=>{let _;for(;g&&g!==m;)_=d(g),s(g),g=_;s(m)},ee=(g,m,_,w,S,C,z,x,F)=>{z=z||m.type==="svg",g==null?ie(m,_,w,S,C,z,x,F):G(g,m,S,C,z,x,F)},ie=(g,m,_,w,S,C,z,x)=>{let F,k;const{type:te,props:Q,shapeFlag:J,transition:oe,dirs:Ee}=g;if(F=g.el=o(g.type,C,Q&&Q.is,Q),J&8?u(F,g.children):J&16&&B(g.children,F,null,w,S,C&&te!=="foreignObject",z,x),Ee&&vr(g,null,w,"created"),we(F,g,g.scopeId,z,w),Q){for(const Pe in Q)Pe!=="value"&&!Yo(Pe)&&i(F,Pe,null,Q[Pe],C,g.children,w,S,Me);"value"in Q&&i(F,"value",null,Q.value),(k=Q.onVnodeBeforeMount)&&sn(k,w,g)}Ee&&vr(g,null,w,"beforeMount");const ke=(!S||S&&!S.pendingBranch)&&oe&&!oe.persisted;ke&&oe.beforeEnter(F),r(F,m,_),((k=Q&&Q.onVnodeMounted)||ke||Ee)&&kt(()=>{k&&sn(k,w,g),ke&&oe.enter(F),Ee&&vr(g,null,w,"mounted")},S)},we=(g,m,_,w,S)=>{if(_&&p(g,_),w)for(let C=0;C<w.length;C++)p(g,w[C]);if(S){let C=S.subTree;if(m===C){const z=S.vnode;we(g,z,z.scopeId,z.slotScopeIds,S.parent)}}},B=(g,m,_,w,S,C,z,x,F=0)=>{for(let k=F;k<g.length;k++){const te=g[k]=x?zn(g[k]):cn(g[k]);E(null,te,m,_,w,S,C,z,x)}},G=(g,m,_,w,S,C,z)=>{const x=m.el=g.el;let{patchFlag:F,dynamicChildren:k,dirs:te}=m;F|=g.patchFlag&16;const Q=g.props||xe,J=m.props||xe;let oe;_&&Er(_,!1),(oe=J.onVnodeBeforeUpdate)&&sn(oe,_,m,g),te&&vr(m,g,_,"beforeUpdate"),_&&Er(_,!0);const Ee=S&&m.type!=="foreignObject";if(k?Y(g.dynamicChildren,k,x,_,w,Ee,C):z||O(g,m,x,null,_,w,Ee,C,!1),F>0){if(F&16)ae(x,m,Q,J,_,w,S);else if(F&2&&Q.class!==J.class&&i(x,"class",null,J.class,S),F&4&&i(x,"style",Q.style,J.style,S),F&8){const ke=m.dynamicProps;for(let Pe=0;Pe<ke.length;Pe++){const je=ke[Pe],Lt=Q[je],Un=J[je];(Un!==Lt||je==="value")&&i(x,je,Lt,Un,S,g.children,_,w,Me)}}F&1&&g.children!==m.children&&u(x,m.children)}else!z&&k==null&&ae(x,m,Q,J,_,w,S);((oe=J.onVnodeUpdated)||te)&&kt(()=>{oe&&sn(oe,_,m,g),te&&vr(m,g,_,"updated")},w)},Y=(g,m,_,w,S,C,z)=>{for(let x=0;x<m.length;x++){const F=g[x],k=m[x],te=F.el&&(F.type===Gt||!ei(F,k)||F.shapeFlag&70)?h(F.el):_;E(F,k,te,null,w,S,C,z,!0)}},ae=(g,m,_,w,S,C,z)=>{if(_!==w){if(_!==xe)for(const x in _)!Yo(x)&&!(x in w)&&i(g,x,_[x],null,z,m.children,S,C,Me);for(const x in w){if(Yo(x))continue;const F=w[x],k=_[x];F!==k&&x!=="value"&&i(g,x,k,F,z,m.children,S,C,Me)}"value"in w&&i(g,"value",_.value,w.value)}},Ge=(g,m,_,w,S,C,z,x,F)=>{const k=m.el=g?g.el:a(""),te=m.anchor=g?g.anchor:a("");let{patchFlag:Q,dynamicChildren:J,slotScopeIds:oe}=m;oe&&(x=x?x.concat(oe):oe),g==null?(r(k,_,w),r(te,_,w),B(m.children,_,te,S,C,z,x,F)):Q>0&&Q&64&&J&&g.dynamicChildren?(Y(g.dynamicChildren,J,_,S,C,z,x),(m.key!=null||S&&m===S.subTree)&&cm(g,m,!0)):O(g,m,_,te,S,C,z,x,F)},rt=(g,m,_,w,S,C,z,x,F)=>{m.slotScopeIds=x,g==null?m.shapeFlag&512?S.ctx.activate(m,_,w,z,F):ne(m,_,w,S,C,z,F):U(g,m,F)},ne=(g,m,_,w,S,C,z)=>{const x=g.component=QI(g,w,S);if(Jg(g)&&(x.ctx.renderer=M),YI(x),x.asyncDep){if(S&&S.registerDep(x,b),!g.el){const F=x.subTree=_e(Nr);P(null,F,m,_)}return}b(x,g,m,_,S,C,z)},U=(g,m,_)=>{const w=m.component=g.component;if(aI(g,m,_))if(w.asyncDep&&!w.asyncResolved){L(w,m,_);return}else w.next=m,tI(w.update),w.update();else m.el=g.el,w.vnode=m},b=(g,m,_,w,S,C,z)=>{const x=()=>{if(g.isMounted){let{next:te,bu:Q,u:J,parent:oe,vnode:Ee}=g,ke=te,Pe;Er(g,!1),te?(te.el=Ee.el,L(g,te,z)):te=Ee,Q&&Jo(Q),(Pe=te.props&&te.props.onVnodeBeforeUpdate)&&sn(Pe,oe,te,Ee),Er(g,!0);const je=ul(g),Lt=g.subTree;g.subTree=je,E(Lt,je,h(Lt.el),I(Lt),g,S,C),te.el=je.el,ke===null&&cI(g,je.el),J&&kt(J,S),(Pe=te.props&&te.props.onVnodeUpdated)&&kt(()=>sn(Pe,oe,te,Ee),S)}else{let te;const{el:Q,props:J}=m,{bm:oe,m:Ee,parent:ke}=g,Pe=Xo(m);if(Er(g,!1),oe&&Jo(oe),!Pe&&(te=J&&J.onVnodeBeforeMount)&&sn(te,ke,m),Er(g,!0),Q&&pe){const je=()=>{g.subTree=ul(g),pe(Q,g.subTree,g,S,null)};Pe?m.type.__asyncLoader().then(()=>!g.isUnmounted&&je()):je()}else{const je=g.subTree=ul(g);E(null,je,_,w,g,S,C),m.el=je.el}if(Ee&&kt(Ee,S),!Pe&&(te=J&&J.onVnodeMounted)){const je=m;kt(()=>sn(te,ke,je),S)}(m.shapeFlag&256||ke&&Xo(ke.vnode)&&ke.vnode.shapeFlag&256)&&g.a&&kt(g.a,S),g.isMounted=!0,m=_=w=null}},F=g.effect=new Ju(x,()=>oh(k),g.scope),k=g.update=()=>F.run();k.id=g.uid,Er(g,!0),k()},L=(g,m,_)=>{m.component=g;const w=g.vnode.props;g.vnode=m,g.next=null,xI(g,m.props,w,_),UI(g,m.children,_),Us(),ef(),$s()},O=(g,m,_,w,S,C,z,x,F=!1)=>{const k=g&&g.children,te=g?g.shapeFlag:0,Q=m.children,{patchFlag:J,shapeFlag:oe}=m;if(J>0){if(J&128){$(k,Q,_,w,S,C,z,x,F);return}else if(J&256){se(k,Q,_,w,S,C,z,x,F);return}}oe&8?(te&16&&Me(k,S,C),Q!==k&&u(_,Q)):te&16?oe&16?$(k,Q,_,w,S,C,z,x,F):Me(k,S,C,!0):(te&8&&u(_,""),oe&16&&B(Q,_,w,S,C,z,x,F))},se=(g,m,_,w,S,C,z,x,F)=>{g=g||ds,m=m||ds;const k=g.length,te=m.length,Q=Math.min(k,te);let J;for(J=0;J<Q;J++){const oe=m[J]=F?zn(m[J]):cn(m[J]);E(g[J],oe,_,null,S,C,z,x,F)}k>te?Me(g,S,C,!0,!1,Q):B(m,_,w,S,C,z,x,F,Q)},$=(g,m,_,w,S,C,z,x,F)=>{let k=0;const te=m.length;let Q=g.length-1,J=te-1;for(;k<=Q&&k<=J;){const oe=g[k],Ee=m[k]=F?zn(m[k]):cn(m[k]);if(ei(oe,Ee))E(oe,Ee,_,null,S,C,z,x,F);else break;k++}for(;k<=Q&&k<=J;){const oe=g[Q],Ee=m[J]=F?zn(m[J]):cn(m[J]);if(ei(oe,Ee))E(oe,Ee,_,null,S,C,z,x,F);else break;Q--,J--}if(k>Q){if(k<=J){const oe=J+1,Ee=oe<te?m[oe].el:w;for(;k<=J;)E(null,m[k]=F?zn(m[k]):cn(m[k]),_,Ee,S,C,z,x,F),k++}}else if(k>J)for(;k<=Q;)ve(g[k],S,C,!0),k++;else{const oe=k,Ee=k,ke=new Map;for(k=Ee;k<=J;k++){const Rt=m[k]=F?zn(m[k]):cn(m[k]);Rt.key!=null&&ke.set(Rt.key,k)}let Pe,je=0;const Lt=J-Ee+1;let Un=!1,Po=0;const gr=new Array(Lt);for(k=0;k<Lt;k++)gr[k]=0;for(k=oe;k<=Q;k++){const Rt=g[k];if(je>=Lt){ve(Rt,S,C,!0);continue}let Bt;if(Rt.key!=null)Bt=ke.get(Rt.key);else for(Pe=Ee;Pe<=J;Pe++)if(gr[Pe-Ee]===0&&ei(Rt,m[Pe])){Bt=Pe;break}Bt===void 0?ve(Rt,S,C,!0):(gr[Bt-Ee]=k+1,Bt>=Po?Po=Bt:Un=!0,E(Rt,m[Bt],_,null,S,C,z,x,F),je++)}const Js=Un?jI(gr):ds;for(Pe=Js.length-1,k=Lt-1;k>=0;k--){const Rt=Ee+k,Bt=m[Rt],Qr=Rt+1<te?m[Rt+1].el:w;gr[k]===0?E(null,Bt,_,Qr,S,C,z,x,F):Un&&(Pe<0||k!==Js[Pe]?ye(Bt,_,Qr,2):Pe--)}}},ye=(g,m,_,w,S=null)=>{const{el:C,type:z,transition:x,children:F,shapeFlag:k}=g;if(k&6){ye(g.component.subTree,m,_,w);return}if(k&128){g.suspense.move(m,_,w);return}if(k&64){z.move(g,m,_,M);return}if(z===Gt){r(C,m,_);for(let Q=0;Q<F.length;Q++)ye(F[Q],m,_,w);r(g.anchor,m,_);return}if(z===dl){q(g,m,_);return}if(w!==2&&k&1&&x)if(w===0)x.beforeEnter(C),r(C,m,_),kt(()=>x.enter(C),S);else{const{leave:Q,delayLeave:J,afterLeave:oe}=x,Ee=()=>r(C,m,_),ke=()=>{Q(C,()=>{Ee(),oe&&oe()})};J?J(C,Ee,ke):ke()}else r(C,m,_)},ve=(g,m,_,w=!1,S=!1)=>{const{type:C,props:z,ref:x,children:F,dynamicChildren:k,shapeFlag:te,patchFlag:Q,dirs:J}=g;if(x!=null&&Jl(x,null,_,g,!0),te&256){m.ctx.deactivate(g);return}const oe=te&1&&J,Ee=!Xo(g);let ke;if(Ee&&(ke=z&&z.onVnodeBeforeUnmount)&&sn(ke,m,g),te&6)Qe(g.component,_,w);else{if(te&128){g.suspense.unmount(_,w);return}oe&&vr(g,null,m,"beforeUnmount"),te&64?g.type.remove(g,m,_,S,M,w):k&&(C!==Gt||Q>0&&Q&64)?Me(k,m,_,!1,!0):(C===Gt&&Q&384||!S&&te&16)&&Me(F,m,_),w&&Te(g)}(Ee&&(ke=z&&z.onVnodeUnmounted)||oe)&&kt(()=>{ke&&sn(ke,m,g),oe&&vr(g,null,m,"unmounted")},_)},Te=g=>{const{type:m,el:_,anchor:w,transition:S}=g;if(m===Gt){Ve(_,w);return}if(m===dl){N(g);return}const C=()=>{s(_),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(g.shapeFlag&1&&S&&!S.persisted){const{leave:z,delayLeave:x}=S,F=()=>z(_,C);x?x(g.el,C,F):F()}else C()},Ve=(g,m)=>{let _;for(;g!==m;)_=d(g),s(g),g=_;s(m)},Qe=(g,m,_)=>{const{bum:w,scope:S,update:C,subTree:z,um:x}=g;w&&Jo(w),S.stop(),C&&(C.active=!1,ve(z,g,m,_)),x&&kt(x,m),kt(()=>{g.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Me=(g,m,_,w=!1,S=!1,C=0)=>{for(let z=C;z<g.length;z++)ve(g[z],m,_,w,S)},I=g=>g.shapeFlag&6?I(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),H=(g,m,_)=>{g==null?m._vnode&&ve(m._vnode,null,null,!0):E(m._vnode||null,g,m,null,null,null,_),ef(),zg(),m._vnode=g},M={p:E,um:ve,m:ye,r:Te,mt:ne,mc:B,pc:O,pbc:Y,n:I,o:t};let K,pe;return e&&([K,pe]=e(M)),{render:H,hydrate:K,createApp:NI(H,K)}}function Er({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function cm(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=zn(s[i]),a.el=o.el),n||cm(o,a)),a.type===ic&&(a.el=o.el)}}function jI(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const qI=t=>t.__isTeleport,Gt=Symbol.for("v-fgt"),ic=Symbol.for("v-txt"),Nr=Symbol.for("v-cmt"),dl=Symbol.for("v-stc"),_i=[];let Yt=null;function Kn(t=!1){_i.push(Yt=t?null:[])}function HI(){_i.pop(),Yt=_i[_i.length-1]||null}let Vi=1;function df(t){Vi+=t}function lm(t){return t.dynamicChildren=Vi>0?Yt||ds:null,HI(),Vi>0&&Yt&&Yt.push(t),t}function ai(t,e,n,r,s,i){return lm(ze(t,e,n,r,s,i,!0))}function Xl(t,e,n,r,s){return lm(_e(t,e,n,r,s,!0))}function Mi(t){return t?t.__v_isVNode===!0:!1}function ei(t,e){return t.type===e.type&&t.key===e.key}const oc="__vInternal",um=({key:t})=>t??null,ea=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?tt(t)||qe(t)||ge(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function ze(t,e=null,n=null,r=0,s=null,i=t===Gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&um(e),ref:e&&ea(e),scopeId:Qg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Vt};return a?(uh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=tt(n)?8:16),Vi>0&&!o&&Yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Yt.push(c),c}const _e=KI;function KI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===RI)&&(t=Nr),Mi(t)){const a=Vr(t,e,!0);return n&&uh(a,n),Vi>0&&!i&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(t)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(tT(t)&&(t=t.__vccOpts),e){e=zI(e);let{class:a,style:c}=e;a&&!tt(a)&&(e.class=Dt(a)),Be(c)&&(Ug(c)&&!ce(c)&&(c=at({},c)),e.style=Gu(c))}const o=tt(t)?1:lI(t)?128:qI(t)?64:Be(t)?4:ge(t)?2:0;return ze(t,e,n,r,s,o,i,!0)}function zI(t){return t?Ug(t)||oc in t?at({},t):t:null}function Vr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?xn(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&um(a),ref:e&&e.ref?n&&s?ce(s)?s.concat(ea(e)):[s,ea(e)]:ea(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vr(t.ssContent),ssFallback:t.ssFallback&&Vr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function an(t=" ",e=0){return _e(ic,null,t,e)}function fl(t="",e=!1){return e?(Kn(),Xl(Nr,null,t)):_e(Nr,null,t)}function cn(t){return t==null||typeof t=="boolean"?_e(Nr):ce(t)?_e(Gt,null,t.slice()):typeof t=="object"?zn(t):_e(ic,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vr(t)}function uh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),uh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(oc in e)?e._ctx=Vt:s===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),r&64?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function xn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Dt([e.class,r.class]));else if(s==="style")e.style=Gu([e.style,r.style]);else if(Ga(s)){const i=e[s],o=r[s];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){Xt(t,e,7,[n,r])}const WI=nm();let GI=0;function QI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||WI,i={uid:GI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Rg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sm(r,s),emitsOptions:Gg(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sI.bind(null,i),t.ce&&t.ce(i),i}let et=null;const hm=()=>et||Vt;let hh,es,ff="__VUE_INSTANCE_SETTERS__";(es=jl()[ff])||(es=jl()[ff]=[]),es.push(t=>et=t),hh=t=>{es.length>1?es.forEach(e=>e(t)):es[0](t)};const Ts=t=>{hh(t),t.scope.on()},Or=()=>{et&&et.scope.off(),hh(null)};function dm(t){return t.vnode.shapeFlag&4}let xi=!1;function YI(t,e=!1){xi=e;const{props:n,children:r}=t.vnode,s=dm(t);MI(t,n,s,e),FI(t,r);const i=s?JI(t,e):void 0;return xi=!1,i}function JI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ec(new Proxy(t.ctx,SI));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ZI(t):null;Ts(t),Us();const i=tr(r,t,0,[t.props,s]);if($s(),Or(),Eg(i)){if(i.then(Or,Or),e)return i.then(o=>{pf(t,o,e)}).catch(o=>{tc(o,t,0)});t.asyncDep=i}else pf(t,i,e)}else fm(t,e)}function pf(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=jg(e)),fm(t,n)}let gf;function fm(t,e,n){const r=t.type;if(!t.render){if(!e&&gf&&!r.render){const s=r.template||ch(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=at(at({isCustomElement:i,delimiters:a},o),c);r.render=gf(s,l)}}t.render=r.render||Jt}Ts(t),Us(),bI(t),$s(),Or()}function XI(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return xt(t,"get","$attrs"),e[n]}}))}function ZI(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return XI(t)},slots:t.slots,emit:t.emit,expose:e}}function ac(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(jg(ec(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mi)return mi[n](t)},has(e,n){return n in e||n in mi}}))}function eT(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function tT(t){return ge(t)&&"__vccOpts"in t}const Se=(t,e)=>Xw(t,e,xi);function cs(t,e,n){const r=arguments.length;return r===2?Be(e)&&!ce(e)?Mi(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Mi(n)&&(n=[n]),_e(t,e,n))}const nT=Symbol.for("v-scx"),rT=()=>Kt(nT),sT="3.3.4",iT="http://www.w3.org/2000/svg",Tr=typeof document<"u"?document:null,mf=Tr&&Tr.createElement("template"),oT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Tr.createElementNS(iT,t):Tr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Tr.createTextNode(t),createComment:t=>Tr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mf.innerHTML=r?`<svg>${t}</svg>`:t;const a=mf.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function aT(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cT(t,e,n){const r=t.style,s=tt(n);if(n&&!s){if(e&&!tt(e))for(const i in e)n[i]==null&&Zl(r,i,"");for(const i in n)Zl(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const _f=/\s*!important$/;function Zl(t,e,n){if(ce(n))n.forEach(r=>Zl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=lT(t,e);_f.test(n)?t.setProperty(Fs(r),n.replace(_f,""),"important"):t[r]=n}}const yf=["Webkit","Moz","ms"],pl={};function lT(t,e){const n=pl[e];if(n)return n;let r=yn(e);if(r!=="filter"&&r in t)return pl[e]=r;r=Ja(r);for(let s=0;s<yf.length;s++){const i=yf[s]+r;if(i in t)return pl[e]=i}return e}const vf="http://www.w3.org/1999/xlink";function uT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vf,e.slice(6,e.length)):t.setAttributeNS(vf,e,n);else{const i=pw(e);n==null||i&&!Tg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function hT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Tg(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function rs(t,e,n,r){t.addEventListener(e,n,r)}function dT(t,e,n,r){t.removeEventListener(e,n,r)}function fT(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=pT(e);if(r){const l=i[e]=_T(r,s);rs(t,a,l,c)}else o&&(dT(t,a,o,c),i[e]=void 0)}}const Ef=/(?:Once|Passive|Capture)$/;function pT(t){let e;if(Ef.test(t)){e={};let r;for(;r=t.match(Ef);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fs(t.slice(2)),e]}let gl=0;const gT=Promise.resolve(),mT=()=>gl||(gT.then(()=>gl=0),gl=Date.now());function _T(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Xt(yT(r,n.value),e,5,[r])};return n.value=t,n.attached=mT(),n}function yT(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wf=/^on[a-z]/,vT=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?aT(t,r,s):e==="style"?cT(t,n,r):Ga(e)?Hu(e)||fT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ET(t,e,r,s))?hT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),uT(t,e,r,s))};function ET(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&wf.test(e)&&ge(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wf.test(e)&&tt(n)?!1:e in t}const If=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>Jo(e,n):e};function wT(t){t.target.composing=!0}function Tf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fD={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=If(s);const i=r||s.props&&s.props.type==="number";rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Bl(a)),t._assign(a)}),n&&rs(t,"change",()=>{t.value=t.value.trim()}),e||(rs(t,"compositionstart",wT),rs(t,"compositionend",Tf),rs(t,"change",Tf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=If(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Bl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},IT=["ctrl","shift","alt","meta"],TT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>IT.some(n=>t[`${n}Key`]&&!e.includes(n))},pD=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=TT[e[s]];if(i&&i(n,e))return}return t(n,...r)},AT=at({patchProp:vT},oT);let Af;function RT(){return Af||(Af=$I(AT))}const pm=(...t)=>{const e=RT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ST(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ST(t){return tt(t)?document.querySelector(t):t}var ls=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gm={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(ls,function(){var n=function(o,a){typeof o.scroll=="function"?o.scroll({top:o.scrollHeight,behavior:a?"smooth":"instant"}):o.scrollTop=o.scrollHeight},r={bind:function(o,a){var c=!1;o.addEventListener("scroll",function(l){c=o.scrollTop+o.clientHeight+1<o.scrollHeight,c&&o.scrollTop===0&&o.dispatchEvent(new Event("v-chat-scroll-top-reached"))}),new MutationObserver(function(l){var u=a.value||{};if(u.enabled!==!1){var h=u.always===!1&&c,d=l[l.length-1].addedNodes.length,p=l[l.length-1].removedNodes.length;if(u.scrollonremoved){if(h||d!=1&&p!=1)return}else if(h||d!=1)return;var y=u.smooth,E=!d&&p===1;E&&u.scrollonremoved&&"smoothonremoved"in u&&(y=u.smoothonremoved),n(o,y)}}).observe(o,{childList:!0,subtree:!0})},inserted:function(o,a){var c=a.value||{};n(o,c.notSmoothOnInit?!1:c.smooth)}},s={install:function(o,a){o.directive("chat-scroll",r)}};return typeof window<"u"&&window.Vue&&window.Vue.use(s),s})})(gm);var bT=gm.exports;const PT=dh(bT);var va={exports:{}};va.exports;(function(t,e){var n=200,r="__lodash_hash_undefined__",s=9007199254740991,i="[object Arguments]",o="[object Array]",a="[object Boolean]",c="[object Date]",l="[object Error]",u="[object Function]",h="[object GeneratorFunction]",d="[object Map]",p="[object Number]",y="[object Object]",E="[object Promise]",T="[object RegExp]",P="[object Set]",V="[object String]",q="[object Symbol]",N="[object WeakMap]",ee="[object ArrayBuffer]",ie="[object DataView]",we="[object Float32Array]",B="[object Float64Array]",G="[object Int8Array]",Y="[object Int16Array]",ae="[object Int32Array]",Ge="[object Uint8Array]",rt="[object Uint8ClampedArray]",ne="[object Uint16Array]",U="[object Uint32Array]",b=/[\\^$.*+?()[\]{}|]/g,L=/\w*$/,O=/^\[object .+?Constructor\]$/,se=/^(?:0|[1-9]\d*)$/,$={};$[i]=$[o]=$[ee]=$[ie]=$[a]=$[c]=$[we]=$[B]=$[G]=$[Y]=$[ae]=$[d]=$[p]=$[y]=$[T]=$[P]=$[V]=$[q]=$[Ge]=$[rt]=$[ne]=$[U]=!0,$[l]=$[u]=$[N]=!1;var ye=typeof ls=="object"&&ls&&ls.Object===Object&&ls,ve=typeof self=="object"&&self&&self.Object===Object&&self,Te=ye||ve||Function("return this")(),Ve=e&&!e.nodeType&&e,Qe=Ve&&!0&&t&&!t.nodeType&&t,Me=Qe&&Qe.exports===Ve;function I(f,v){return f.set(v[0],v[1]),f}function H(f,v){return f.add(v),f}function M(f,v){for(var A=-1,Z=f?f.length:0;++A<Z&&v(f[A],A,f)!==!1;);return f}function K(f,v){for(var A=-1,Z=v.length,st=f.length;++A<Z;)f[st+A]=v[A];return f}function pe(f,v,A,Z){var st=-1,St=f?f.length:0;for(Z&&St&&(A=f[++st]);++st<St;)A=v(A,f[st],st,f);return A}function g(f,v){for(var A=-1,Z=Array(f);++A<f;)Z[A]=v(A);return Z}function m(f,v){return f==null?void 0:f[v]}function _(f){var v=!1;if(f!=null&&typeof f.toString!="function")try{v=!!(f+"")}catch{}return v}function w(f){var v=-1,A=Array(f.size);return f.forEach(function(Z,st){A[++v]=[st,Z]}),A}function S(f,v){return function(A){return f(v(A))}}function C(f){var v=-1,A=Array(f.size);return f.forEach(function(Z){A[++v]=Z}),A}var z=Array.prototype,x=Function.prototype,F=Object.prototype,k=Te["__core-js_shared__"],te=function(){var f=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||"");return f?"Symbol(src)_1."+f:""}(),Q=x.toString,J=F.hasOwnProperty,oe=F.toString,Ee=RegExp("^"+Q.call(J).replace(b,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ke=Me?Te.Buffer:void 0,Pe=Te.Symbol,je=Te.Uint8Array,Lt=S(Object.getPrototypeOf,Object),Un=Object.create,Po=F.propertyIsEnumerable,gr=z.splice,Js=Object.getOwnPropertySymbols,Rt=ke?ke.isBuffer:void 0,Bt=S(Object.keys,Object),Qr=Xr(Te,"DataView"),Xs=Xr(Te,"Map"),tl=Xr(Te,"Promise"),nl=Xr(Te,"Set"),rl=Xr(Te,"WeakMap"),Zs=Xr(Object,"create"),tE=yr(Qr),nE=yr(Xs),rE=yr(tl),sE=yr(nl),iE=yr(rl),Nd=Pe?Pe.prototype:void 0,Vd=Nd?Nd.valueOf:void 0;function mr(f){var v=-1,A=f?f.length:0;for(this.clear();++v<A;){var Z=f[v];this.set(Z[0],Z[1])}}function oE(){this.__data__=Zs?Zs(null):{}}function aE(f){return this.has(f)&&delete this.__data__[f]}function cE(f){var v=this.__data__;if(Zs){var A=v[f];return A===r?void 0:A}return J.call(v,f)?v[f]:void 0}function lE(f){var v=this.__data__;return Zs?v[f]!==void 0:J.call(v,f)}function uE(f,v){var A=this.__data__;return A[f]=Zs&&v===void 0?r:v,this}mr.prototype.clear=oE,mr.prototype.delete=aE,mr.prototype.get=cE,mr.prototype.has=lE,mr.prototype.set=uE;function wn(f){var v=-1,A=f?f.length:0;for(this.clear();++v<A;){var Z=f[v];this.set(Z[0],Z[1])}}function hE(){this.__data__=[]}function dE(f){var v=this.__data__,A=Co(v,f);if(A<0)return!1;var Z=v.length-1;return A==Z?v.pop():gr.call(v,A,1),!0}function fE(f){var v=this.__data__,A=Co(v,f);return A<0?void 0:v[A][1]}function pE(f){return Co(this.__data__,f)>-1}function gE(f,v){var A=this.__data__,Z=Co(A,f);return Z<0?A.push([f,v]):A[Z][1]=v,this}wn.prototype.clear=hE,wn.prototype.delete=dE,wn.prototype.get=fE,wn.prototype.has=pE,wn.prototype.set=gE;function Yr(f){var v=-1,A=f?f.length:0;for(this.clear();++v<A;){var Z=f[v];this.set(Z[0],Z[1])}}function mE(){this.__data__={hash:new mr,map:new(Xs||wn),string:new mr}}function _E(f){return Oo(this,f).delete(f)}function yE(f){return Oo(this,f).get(f)}function vE(f){return Oo(this,f).has(f)}function EE(f,v){return Oo(this,f).set(f,v),this}Yr.prototype.clear=mE,Yr.prototype.delete=_E,Yr.prototype.get=yE,Yr.prototype.has=vE,Yr.prototype.set=EE;function Jr(f){this.__data__=new wn(f)}function wE(){this.__data__=new wn}function IE(f){return this.__data__.delete(f)}function TE(f){return this.__data__.get(f)}function AE(f){return this.__data__.has(f)}function RE(f,v){var A=this.__data__;if(A instanceof wn){var Z=A.__data__;if(!Xs||Z.length<n-1)return Z.push([f,v]),this;A=this.__data__=new Yr(Z)}return A.set(f,v),this}Jr.prototype.clear=wE,Jr.prototype.delete=IE,Jr.prototype.get=TE,Jr.prototype.has=AE,Jr.prototype.set=RE;function SE(f,v){var A=ol(f)||YE(f)?g(f.length,String):[],Z=A.length,st=!!Z;for(var St in f)(v||J.call(f,St))&&!(st&&(St=="length"||zE(St,Z)))&&A.push(St);return A}function Md(f,v,A){var Z=f[v];(!(J.call(f,v)&&Ud(Z,A))||A===void 0&&!(v in f))&&(f[v]=A)}function Co(f,v){for(var A=f.length;A--;)if(Ud(f[A][0],v))return A;return-1}function bE(f,v){return f&&xd(v,al(v),f)}function sl(f,v,A,Z,st,St,jt){var Ot;if(Z&&(Ot=St?Z(f,st,St,jt):Z(f)),Ot!==void 0)return Ot;if(!ko(f))return f;var jd=ol(f);if(jd){if(Ot=qE(f),!v)return $E(f,Ot)}else{var Zr=_r(f),qd=Zr==u||Zr==h;if(XE(f))return NE(f,v);if(Zr==y||Zr==i||qd&&!St){if(_(f))return St?f:{};if(Ot=HE(qd?{}:f),!v)return BE(f,bE(Ot,f))}else{if(!$[Zr])return St?f:{};Ot=KE(f,Zr,sl,v)}}jt||(jt=new Jr);var Hd=jt.get(f);if(Hd)return Hd;if(jt.set(f,Ot),!jd)var Kd=A?jE(f):al(f);return M(Kd||f,function(cl,Do){Kd&&(Do=cl,cl=f[Do]),Md(Ot,Do,sl(cl,v,A,Z,Do,f,jt))}),Ot}function PE(f){return ko(f)?Un(f):{}}function CE(f,v,A){var Z=v(f);return ol(f)?Z:K(Z,A(f))}function OE(f){return oe.call(f)}function kE(f){if(!ko(f)||GE(f))return!1;var v=Bd(f)||_(f)?Ee:O;return v.test(yr(f))}function DE(f){if(!Fd(f))return Bt(f);var v=[];for(var A in Object(f))J.call(f,A)&&A!="constructor"&&v.push(A);return v}function NE(f,v){if(v)return f.slice();var A=new f.constructor(f.length);return f.copy(A),A}function il(f){var v=new f.constructor(f.byteLength);return new je(v).set(new je(f)),v}function VE(f,v){var A=v?il(f.buffer):f.buffer;return new f.constructor(A,f.byteOffset,f.byteLength)}function ME(f,v,A){var Z=v?A(w(f),!0):w(f);return pe(Z,I,new f.constructor)}function xE(f){var v=new f.constructor(f.source,L.exec(f));return v.lastIndex=f.lastIndex,v}function LE(f,v,A){var Z=v?A(C(f),!0):C(f);return pe(Z,H,new f.constructor)}function FE(f){return Vd?Object(Vd.call(f)):{}}function UE(f,v){var A=v?il(f.buffer):f.buffer;return new f.constructor(A,f.byteOffset,f.length)}function $E(f,v){var A=-1,Z=f.length;for(v||(v=Array(Z));++A<Z;)v[A]=f[A];return v}function xd(f,v,A,Z){A||(A={});for(var st=-1,St=v.length;++st<St;){var jt=v[st],Ot=Z?Z(A[jt],f[jt],jt,A,f):void 0;Md(A,jt,Ot===void 0?f[jt]:Ot)}return A}function BE(f,v){return xd(f,Ld(f),v)}function jE(f){return CE(f,al,Ld)}function Oo(f,v){var A=f.__data__;return WE(v)?A[typeof v=="string"?"string":"hash"]:A.map}function Xr(f,v){var A=m(f,v);return kE(A)?A:void 0}var Ld=Js?S(Js,Object):tw,_r=OE;(Qr&&_r(new Qr(new ArrayBuffer(1)))!=ie||Xs&&_r(new Xs)!=d||tl&&_r(tl.resolve())!=E||nl&&_r(new nl)!=P||rl&&_r(new rl)!=N)&&(_r=function(f){var v=oe.call(f),A=v==y?f.constructor:void 0,Z=A?yr(A):void 0;if(Z)switch(Z){case tE:return ie;case nE:return d;case rE:return E;case sE:return P;case iE:return N}return v});function qE(f){var v=f.length,A=f.constructor(v);return v&&typeof f[0]=="string"&&J.call(f,"index")&&(A.index=f.index,A.input=f.input),A}function HE(f){return typeof f.constructor=="function"&&!Fd(f)?PE(Lt(f)):{}}function KE(f,v,A,Z){var st=f.constructor;switch(v){case ee:return il(f);case a:case c:return new st(+f);case ie:return VE(f,Z);case we:case B:case G:case Y:case ae:case Ge:case rt:case ne:case U:return UE(f,Z);case d:return ME(f,Z,A);case p:case V:return new st(f);case T:return xE(f);case P:return LE(f,Z,A);case q:return FE(f)}}function zE(f,v){return v=v??s,!!v&&(typeof f=="number"||se.test(f))&&f>-1&&f%1==0&&f<v}function WE(f){var v=typeof f;return v=="string"||v=="number"||v=="symbol"||v=="boolean"?f!=="__proto__":f===null}function GE(f){return!!te&&te in f}function Fd(f){var v=f&&f.constructor,A=typeof v=="function"&&v.prototype||F;return f===A}function yr(f){if(f!=null){try{return Q.call(f)}catch{}try{return f+""}catch{}}return""}function QE(f){return sl(f,!0,!0)}function Ud(f,v){return f===v||f!==f&&v!==v}function YE(f){return JE(f)&&J.call(f,"callee")&&(!Po.call(f,"callee")||oe.call(f)==i)}var ol=Array.isArray;function $d(f){return f!=null&&ZE(f.length)&&!Bd(f)}function JE(f){return ew(f)&&$d(f)}var XE=Rt||nw;function Bd(f){var v=ko(f)?oe.call(f):"";return v==u||v==h}function ZE(f){return typeof f=="number"&&f>-1&&f%1==0&&f<=s}function ko(f){var v=typeof f;return!!f&&(v=="object"||v=="function")}function ew(f){return!!f&&typeof f=="object"}function al(f){return $d(f)?SE(f):DE(f)}function tw(){return[]}function nw(){return!1}t.exports=QE})(va,va.exports);var CT=va.exports;const Rf=dh(CT);function OT({store:t}){const e=Rf(t.$state);t.$reset=()=>t.$patch(Rf(e))}var kT=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let mm;const cc=t=>mm=t,_m=Symbol();function eu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var yi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(yi||(yi={}));function DT(){const t=Sg(!0),e=t.run(()=>He({}));let n=[],r=[];const s=ec({install(i){cc(s),s._a=i,i.provide(_m,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!kT?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ym=()=>{};function Sf(t,e,n,r=ym){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Qu()&&bg(s),s}function ts(t,...e){t.slice().forEach(n=>{n(...e)})}const NT=t=>t();function tu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];eu(s)&&eu(r)&&t.hasOwnProperty(n)&&!qe(r)&&!er(r)?t[n]=tu(s,r):t[n]=r}return t}const VT=Symbol();function MT(t){return!eu(t)||!t.hasOwnProperty(VT)}const{assign:Hn}=Object;function xT(t){return!!(qe(t)&&t.effect)}function LT(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Ww(n.state.value[t]);return Hn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=ec(Se(()=>{cc(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=vm(t,l,e,n,r,!0),c}function vm(t,e,n={},r,s,i){let o;const a=Hn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],p;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),He({});let E;function T(B){let G;l=u=!1,typeof B=="function"?(B(r.state.value[t]),G={type:yi.patchFunction,storeId:t,events:p}):(tu(r.state.value[t],B),G={type:yi.patchObject,payload:B,storeId:t,events:p});const Y=E=Symbol();jr().then(()=>{E===Y&&(l=!0)}),u=!0,ts(h,G,r.state.value[t])}const P=i?function(){const{state:G}=n,Y=G?G():{};this.$patch(ae=>{Hn(ae,Y)})}:ym;function V(){o.stop(),h=[],d=[],r._s.delete(t)}function q(B,G){return function(){cc(r);const Y=Array.from(arguments),ae=[],Ge=[];function rt(b){ae.push(b)}function ne(b){Ge.push(b)}ts(d,{args:Y,name:B,store:ee,after:rt,onError:ne});let U;try{U=G.apply(this&&this.$id===t?this:ee,Y)}catch(b){throw ts(Ge,b),b}return U instanceof Promise?U.then(b=>(ts(ae,b),b)).catch(b=>(ts(Ge,b),Promise.reject(b))):(ts(ae,U),U)}}const N={_p:r,$id:t,$onAction:Sf.bind(null,d),$patch:T,$reset:P,$subscribe(B,G={}){const Y=Sf(h,B,G.detached,()=>ae()),ae=o.run(()=>nr(()=>r.state.value[t],Ge=>{(G.flush==="sync"?u:l)&&B({storeId:t,type:yi.direct,events:p},Ge)},Hn({},c,G)));return Y},$dispose:V},ee=rn(N);r._s.set(t,ee);const ie=r._a&&r._a.runWithContext||NT,we=r._e.run(()=>(o=Sg(),ie(()=>o.run(e))));for(const B in we){const G=we[B];if(qe(G)&&!xT(G)||er(G))i||(y&&MT(G)&&(qe(G)?G.value=y[B]:tu(G,y[B])),r.state.value[t][B]=G);else if(typeof G=="function"){const Y=q(B,G);we[B]=Y,a.actions[B]=G}}return Hn(ee,we),Hn(fe(ee),we),Object.defineProperty(ee,"$state",{get:()=>r.state.value[t],set:B=>{T(G=>{Hn(G,B)})}}),r._p.forEach(B=>{Hn(ee,o.run(()=>B({store:ee,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(ee.$state,y),l=!0,u=!0,ee}function fh(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=VI();return a=a||(l?Kt(_m,null):null),a&&cc(a),a=mm,a._s.has(r)||(i?vm(r,e,s,a):LT(r,s,a)),a._s.get(r)}return o.$id=r,o}const so={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},As={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},Ct={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},FT={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},Em={dangerouslyHTMLString:!1,multiple:!0,position:so.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},UT={rtl:!1,newestOnTop:!1,toastClassName:""},wm={...Em,...UT};({...Em,type:Ct.DEFAULT});var Oe=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(Oe||{}),nu=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(nu||{});const $T={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},BT={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},jT={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},qT={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"};function Im(t){let e=$T;if(!t||typeof t=="string")switch(t){case"flip":e=qT;break;case"zoom":e=jT;break;case"slide":e=BT;break}else e=t;return e}function HT(t){return t.containerId||String(t.position)}const lc="will-unmount";function KT(t=so.TOP_RIGHT){return!!document.querySelector(".".concat(Oe.CSS_NAMESPACE,"__toast-container--").concat(t))}function zT(t=so.TOP_RIGHT){return"".concat(Oe.CSS_NAMESPACE,"__toast-container--").concat(t)}function WT(t,e,n=!1){const r=["".concat(Oe.CSS_NAMESPACE,"__toast-container"),"".concat(Oe.CSS_NAMESPACE,"__toast-container--").concat(t),n?"".concat(Oe.CSS_NAMESPACE,"__toast-container--rtl"):null].filter(Boolean).join(" ");return gs(e)?e({position:t,rtl:n,defaultClassName:r}):"".concat(r," ").concat(e||"")}function GT(t){var e;const{position:n,containerClassName:r,rtl:s=!1,style:i={}}=t,o=Oe.CSS_NAMESPACE,a=zT(n),c=document.querySelector(".".concat(o)),l=document.querySelector(".".concat(a)),u=!!l&&!((e=l.className)!=null&&e.includes(lc)),h=c||document.createElement("div"),d=document.createElement("div");d.className=WT(n,r,s),d.dataset.testid="".concat(Oe.CSS_NAMESPACE,"__toast-container--").concat(n),d.id=HT(t);for(const p in i)if(Object.prototype.hasOwnProperty.call(i,p)){const y=i[p];d.style[p]=y}return c||(h.className=Oe.CSS_NAMESPACE,document.body.appendChild(h)),u||h.appendChild(d),d}function ru(t){var e,n,r;const s=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(s);i&&i.removeEventListener("animationend",ru,!1);try{Li[s].unmount(),(r=document.getElementById(s))==null||r.remove(),delete Li[s],delete ut[s]}catch{}}const Li=rn({});function QT(t,e){const n=document.getElementById(String(e));n&&(Li[n.id]=t)}function su(t,e=!0){const n=String(t);if(!Li[n])return;const r=document.getElementById(n);r&&r.classList.add(lc),e?(JT(t),r&&r.addEventListener("animationend",ru,!1)):ru(n),vn.items=vn.items.filter(s=>s.containerId!==t)}function YT(t){for(const e in Li)su(e,t);vn.items=[]}function Tm(t,e){const n=document.getElementById(t.toastId);if(n){let r=t;r={...r,...Im(r.transition)};const s=r.appendPosition?"".concat(r.exit,"--").concat(r.position):r.exit;n.className+=" ".concat(s),e&&e(n)}}function JT(t){for(const e in ut)if(e===t)for(const n of ut[e]||[])Tm(n)}function XT(t){const e=io().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function ph(t){return document.getElementById(t)}function ZT(t){const e=ph(t.containerId);return e&&e.classList.contains(lc)}function bf(t){var e;const n=Mi(t.content)?fe(t.content.props):null;return n??fe((e=t.data)!=null?e:{})}function e0(t){return t?vn.items.filter(e=>e.containerId===t).length>0:vn.items.length>0}function t0(){if(vn.items.length>0){const t=vn.items.shift();ta(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const ut=rn({}),vn=rn({items:[]});function io(){const t=fe(ut);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function n0(t){return io().find(e=>e.toastId===t)}function ta(t,e={}){if(ZT(e)){const n=ph(e.containerId);n&&n.addEventListener("animationend",iu.bind(null,t,e),!1)}else iu(t,e)}function iu(t,e={}){const n=ph(e.containerId);n&&n.removeEventListener("animationend",iu.bind(null,t,e),!1);const r=ut[e.containerId]||[],s=r.length>0;if(!s&&!KT(e.position)){const i=GT(e),o=pm(w0,e);o.mount(i),QT(o,i.id)}s&&(e.position=r[0].position),jr(()=>{e.updateId?fn.update(e):fn.add(t,e)})}const fn={add(t,e){const{containerId:n=""}=e;n&&(ut[n]=ut[n]||[],ut[n].find(r=>r.toastId===e.toastId)||setTimeout(()=>{var r,s;e.newestOnTop?(r=ut[n])==null||r.unshift(e):(s=ut[n])==null||s.push(e),e.onOpen&&e.onOpen(bf(e))},e.delay||0))},remove(t){if(t){const e=XT(t);if(e){const n=ut[e];let r=n.find(s=>s.toastId===t);ut[e]=n.filter(s=>s.toastId!==t),!ut[e].length&&!e0(e)&&su(e,!1),t0(),jr(()=>{r!=null&&r.onClose&&(r.onClose(bf(r)),r=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){ut[e]=ut[e]||[];const n=ut[e].find(r=>r.toastId===t.toastId);n&&setTimeout(()=>{for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const s=t[r];n[r]=s}},t.delay||0)}},clear(t,e=!0){t?su(t,e):YT(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,r=document.getElementById(n);r&&(r.removeEventListener("animationend",fn.dismissCallback,!1),setTimeout(()=>{fn.remove(n)}))},dismiss(t){if(t){const e=io();for(const n of e)if(n.toastId===t){Tm(n,r=>{r.addEventListener("animationend",fn.dismissCallback,!1)});break}}}},Am=rn({}),Ea=rn({});function Rm(){return Math.random().toString(36).substring(2,9)}function r0(t){return typeof t=="number"&&!isNaN(t)}function ou(t){return typeof t=="string"}function gs(t){return typeof t=="function"}function uc(...t){return xn(...t)}function na(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function s0(t={}){Am["".concat(Oe.CSS_NAMESPACE,"-default-options")]=t}function i0(){return Am["".concat(Oe.CSS_NAMESPACE,"-default-options")]||wm}function o0(){return document.documentElement.classList.contains("dark")?"dark":"light"}var ra=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(ra||{});const Sm={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:so.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:As.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:Ct.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},a0={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:Ct.DEFAULT},theme:{type:String,required:!1,default:As.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},c0=Bs({name:"ProgressBar",props:a0,setup(t,{attrs:e}){const n=He(),r=Se(()=>t.hide?"true":"false"),s=Se(()=>({...e.style||{},animationDuration:"".concat(t.autoClose===!0?5e3:t.autoClose,"ms"),animationPlayState:t.isRunning?"running":"paused",opacity:t.hide?0:1,transform:t.controlledProgress?"scaleX(".concat(t.progress,")"):"none"})),i=Se(()=>["".concat(Oe.CSS_NAMESPACE,"__progress-bar"),t.controlledProgress?"".concat(Oe.CSS_NAMESPACE,"__progress-bar--controlled"):"".concat(Oe.CSS_NAMESPACE,"__progress-bar--animated"),"".concat(Oe.CSS_NAMESPACE,"__progress-bar-theme--").concat(t.theme),"".concat(Oe.CSS_NAMESPACE,"__progress-bar--").concat(t.type),t.rtl?"".concat(Oe.CSS_NAMESPACE,"__progress-bar--rtl"):null].filter(Boolean).join(" ")),o=Se(()=>"".concat(i.value," ").concat((e==null?void 0:e.class)||"")),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},c=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},l=Se(()=>t.controlledProgress?null:c),u=Se(()=>t.controlledProgress?c:null);return gi(()=>{n.value&&(a(),n.value.onanimationend=l.value,n.value.ontransitionend=u.value)}),()=>_e("div",{ref:n,role:"progressbar","aria-hidden":r.value,"aria-label":"notification timer",class:o.value,style:s.value},null)}}),l0=Bs({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:As.AUTO},type:{type:String,required:!1,default:As.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>_e("button",{class:"".concat(Oe.CSS_NAMESPACE,"__close-button ").concat(Oe.CSS_NAMESPACE,"__close-button--").concat(t.theme),type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[_e("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[_e("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),hc=({theme:t,type:e,path:n,...r})=>_e("svg",xn({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":"var(--toastify-icon-color-".concat(e,")")},r),[_e("path",{d:n},null)]);function u0(t){return _e(hc,xn(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function h0(t){return _e(hc,xn(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function d0(t){return _e(hc,xn(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function f0(t){return _e(hc,xn(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function p0(){return _e("div",{class:"".concat(Oe.CSS_NAMESPACE,"__spinner")},null)}const au={info:h0,warning:u0,success:d0,error:f0,spinner:p0},g0=t=>t in au;function m0({theme:t,type:e,isLoading:n,icon:r}){let s;const i={theme:t,type:e};return n?s=au.spinner():r===!1?s=void 0:na(r)?s=fe(r):gs(r)?s=r(i):Mi(r)?s=Vr(r,i):ou(r)||r0(r)?s=r:g0(e)&&(s=au[e](i)),s}const _0=()=>{};function y0(t,e,n=Oe.COLLAPSE_DURATION){const{scrollHeight:r,style:s}=t,i=n;requestAnimationFrame(()=>{s.minHeight="initial",s.height=r+"px",s.transition="all ".concat(i,"ms"),requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,i)})})}function v0(t){const e=He(!1),n=He(!1),r=He(!1),s=He(ra.Enter),i=rn({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||Oe.COLLAPSE_DURATION}),o=i.done||_0,a=Se(()=>i.appendPosition?"".concat(i.enter,"--").concat(i.position):i.enter),c=Se(()=>i.appendPosition?"".concat(i.exit,"--").concat(i.position):i.exit),l=Se(()=>t.pauseOnHover?{onMouseenter:T,onMouseleave:E}:{});function u(){const V=a.value.split(" ");d().addEventListener(nu.ENTRANCE_ANIMATION_END,E,{once:!0});const q=ee=>{const ie=d();ee.target===ie&&(ie.dispatchEvent(new Event(nu.ENTRANCE_ANIMATION_END)),ie.removeEventListener("animationend",q),ie.removeEventListener("animationcancel",q),s.value===ra.Enter&&ee.type!=="animationcancel"&&ie.classList.remove(...V))},N=()=>{const ee=d();ee.classList.add(...V),ee.addEventListener("animationend",q),ee.addEventListener("animationcancel",q)};t.pauseOnFocusLoss&&p(),N()}function h(){if(!d())return;const V=()=>{const N=d();N.removeEventListener("animationend",V),i.collapse?y0(N,o,i.collapseDuration):o()},q=()=>{const N=d();s.value=ra.Exit,N&&(N.className+=" ".concat(c.value),N.addEventListener("animationend",V))};n.value||(r.value?V():setTimeout(q))}function d(){return t.toastRef.value}function p(){document.hasFocus()||T(),window.addEventListener("focus",E),window.addEventListener("blur",T)}function y(){window.removeEventListener("focus",E),window.removeEventListener("blur",T)}function E(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function T(){e.value=!1}function P(V){V&&(V.stopPropagation(),V.preventDefault()),n.value=!1}return gi(h),gi(()=>{const V=io();n.value=V.findIndex(q=>q.toastId===i.toastId)>-1}),gi(()=>{t.isLoading!==void 0&&(t.loading.value?T():E())}),ro(u),sc(()=>{t.pauseOnFocusLoss&&y()}),{isIn:n,isRunning:e,hideToast:P,eventHandlers:l}}const E0=Bs({name:"ToastItem",inheritAttrs:!1,props:Sm,setup(t){const e=He(),n=Se(()=>!!t.isLoading),r=Se(()=>t.progress!==void 0&&t.progress!==null),s=Se(()=>m0(t)),i=Se(()=>["".concat(Oe.CSS_NAMESPACE,"__toast"),"".concat(Oe.CSS_NAMESPACE,"__toast-theme--").concat(t.theme),"".concat(Oe.CSS_NAMESPACE,"__toast--").concat(t.type),t.rtl?"".concat(Oe.CSS_NAMESPACE,"__toast--rtl"):void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:l}=v0({toastRef:e,loading:n,done:()=>{fn.remove(t.toastId)},...Im(t.transition),...t});return()=>_e("div",xn({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":"toast-item-".concat(t.toastId),onClick:u=>{t.closeOnClick&&c(),t.onClick&&t.onClick(u)}},l.value),[_e("div",{role:t.role,"data-testid":"toast-body",class:"".concat(Oe.CSS_NAMESPACE,"__toast-body ").concat(t.bodyClassName||"")},[s.value!=null&&_e("div",{"data-testid":"toast-icon-".concat(t.type),class:["".concat(Oe.CSS_NAMESPACE,"__toast-icon"),t.isLoading?"":"".concat(Oe.CSS_NAMESPACE,"--animate-icon ").concat(Oe.CSS_NAMESPACE,"__zoom-enter")].join(" ")},[na(s.value)?cs(fe(s.value),{theme:t.theme,type:t.type}):gs(s.value)?s.value({theme:t.theme,type:t.type}):s.value]),_e("div",{"data-testid":"toast-content"},[na(t.content)?cs(fe(t.content),{toastProps:fe(t),closeToast:c,data:t.data}):gs(t.content)?t.content({toastProps:fe(t),closeToast:c,data:t.data}):t.dangerouslyHTMLString?cs("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&_e(l0,{theme:t.theme,closeToast:u=>{u.stopPropagation(),u.preventDefault(),c()}},null),na(t.closeButton)?cs(fe(t.closeButton),{closeToast:c,type:t.type,theme:t.theme}):gs(t.closeButton)?t.closeButton({closeToast:c,type:t.type,theme:t.theme}):null,_e(c0,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:r.value,progress:t.progress,closeToast:t.isLoading?void 0:c},null)])}});let vi=0;function bm(){typeof window>"u"||(vi&&window.cancelAnimationFrame(vi),vi=window.requestAnimationFrame(bm),Ea.lastUrl!==window.location.href&&(Ea.lastUrl=window.location.href,fn.clear()))}const w0=Bs({name:"ToastifyContainer",inheritAttrs:!1,props:Sm,setup(t){const e=Se(()=>t.containerId),n=Se(()=>ut[e.value]||[]),r=Se(()=>n.value.filter(s=>s.position===t.position));return ro(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(bm)}),sc(()=>{typeof window<"u"&&vi&&(window.cancelAnimationFrame(vi),Ea.lastUrl="")}),()=>_e(Gt,null,[r.value.map(s=>{const{toastId:i=""}=s;return _e(E0,xn({key:i},s),null)})])}});let ml=!1;function Pm(){const t=[];return io().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(lc)&&t.push(e)}),t}function I0(t){const e=Pm().length,n=t??0;return n>0&&e+vn.items.length>=n}function T0(t){I0(t.limit)&&!t.updateId&&vn.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function hr(t,e,n={}){if(ml)return;n=uc(i0(),{type:e},fe(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Rm()),n={...n,content:t,containerId:n.containerId||String(n.position)};const r=Number(n==null?void 0:n.progress);return r<0&&(n.progress=0),r>1&&(n.progress=1),n.theme==="auto"&&(n.theme=o0()),T0(n),Ea.lastUrl=window.location.href,n.multiple?vn.items.length?n.updateId&&ta(t,n):ta(t,n):(ml=!0,Ue.clearAll(void 0,!1),setTimeout(()=>{ta(t,n)},0),setTimeout(()=>{ml=!1},390)),n.toastId}const Ue=(t,e)=>hr(t,Ct.DEFAULT,e);Ue.info=(t,e)=>hr(t,Ct.DEFAULT,{...e,type:Ct.INFO});Ue.error=(t,e)=>hr(t,Ct.DEFAULT,{...e,type:Ct.ERROR});Ue.warning=(t,e)=>hr(t,Ct.DEFAULT,{...e,type:Ct.WARNING});Ue.warn=Ue.warning;Ue.success=(t,e)=>hr(t,Ct.DEFAULT,{...e,type:Ct.SUCCESS});Ue.loading=(t,e)=>hr(t,Ct.DEFAULT,uc(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));Ue.dark=(t,e)=>hr(t,Ct.DEFAULT,uc(e,{theme:As.DARK}));Ue.remove=t=>{t?fn.dismiss(t):fn.clear()};Ue.clearAll=(t,e)=>{fn.clear(t,e)};Ue.isActive=t=>{let e=!1;return e=Pm().findIndex(n=>n.toastId===t)>-1,e};Ue.update=(t,e={})=>{setTimeout(()=>{const n=n0(t);if(n){const r=fe(n),{content:s}=r,i={...r,...e,toastId:e.toastId||t,updateId:Rm()},o=i.render||s;delete i.render,hr(o,i.type,i)}},0)};Ue.done=t=>{Ue.update(t,{isLoading:!1,progress:1})};Ue.promise=A0;function A0(t,{pending:e,error:n,success:r},s){var i,o,a;let c;const l={...s||{},autoClose:!1};e&&(c=ou(e)?Ue.loading(e,l):Ue.loading(e.render,{...l,...e}));const u={autoClose:(i=s==null?void 0:s.autoClose)!=null?i:!0,closeOnClick:(o=s==null?void 0:s.closeOnClick)!=null?o:!0,closeButton:(a=s==null?void 0:s.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},h=(p,y,E)=>{if(y==null){Ue.remove(c);return}const T={type:p,...u,...s,data:E},P=ou(y)?{render:y}:y;return c?Ue.update(c,{...T,...P,isLoading:!1}):Ue(P.render,{...T,...P,isLoading:!1}),E},d=gs(t)?t():t;return d.then(p=>{h("success",r,p)}).catch(p=>{h("error",n,p)}),d}Ue.POSITION=so;Ue.THEME=As;Ue.TYPE=Ct;Ue.TRANSITIONS=FT;const Cm={install(t,e={}){R0(e)}};typeof window<"u"&&(window.Vue3Toastify=Cm);function R0(t={}){const e=uc(wm,t);s0(e)}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ss=typeof window<"u";function S0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const De=Object.assign;function _l(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const Ei=()=>{},Zt=Array.isArray,b0=/\/$/,P0=t=>t.replace(b0,"");function yl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=D0(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function C0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function O0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Rs(e.matched[r],n.matched[s])&&Om(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Om(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!k0(t[n],e[n]))return!1;return!0}function k0(t,e){return Zt(t)?Cf(t,e):Zt(e)?Cf(e,t):t===e}function Cf(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function D0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Fi;(function(t){t.pop="pop",t.push="push"})(Fi||(Fi={}));var wi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wi||(wi={}));function N0(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),P0(t)}const V0=/^[^#]+#/;function M0(t,e){return t.replace(V0,"#")+e}function x0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const dc=()=>({left:window.pageXOffset,top:window.pageYOffset});function L0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=x0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Of(t,e){return(history.state?history.state.position-e:-1)+t}const cu=new Map;function F0(t,e){cu.set(t,e)}function U0(t){const e=cu.get(t);return cu.delete(t),e}let $0=()=>location.protocol+"//"+location.host;function km(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Pf(c,"")}return Pf(n,t)+r+s}function B0(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=km(t,location),y=n.value,E=e.value;let T=0;if(d){if(n.value=p,e.value=d,o&&o===y){o=null;return}T=E?d.position-E.position:0}else r(p);s.forEach(P=>{P(n.value,y,{delta:T,type:Fi.pop,direction:T?T>0?wi.forward:wi.back:wi.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(De({},d.state,{scroll:dc()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function kf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?dc():null}}function j0(t){const{history:e,location:n}=window,r={value:km(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:$0()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=De({},e.state,kf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=De({},s.value,e.state,{forward:c,scroll:dc()});i(u.current,u,!0);const h=De({},kf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function q0(t){t=N0(t);const e=j0(t),n=B0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=De({location:"",base:t,go:r,createHref:M0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function H0(t){return typeof t=="string"||t&&typeof t=="object"}function Dm(t){return typeof t=="string"||typeof t=="symbol"}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nm=Symbol("");var Df;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Df||(Df={}));function Ss(t,e){return De(new Error,{type:t,[Nm]:!0},e)}function In(t,e){return t instanceof Error&&Nm in t&&(e==null||!!(t.type&e))}const Nf="[^/]+?",K0={sensitive:!1,strict:!1,start:!0,end:!0},z0=/[.+*?^${}()[\]/\\]/g;function W0(t,e){const n=De({},K0,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(z0,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:E,optional:T,regexp:P}=d;i.push({name:y,repeatable:E,optional:T});const V=P||Nf;if(V!==Nf){p+=10;try{new RegExp(`(${V})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${y}" (${V}): `+N.message)}}let q=E?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;h||(q=T&&l.length<2?`(?:/${q})`:"/"+q),T&&(q+="?"),s+=q,p+=20,T&&(p+=-8),E&&(p+=-20),V===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=i[d-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:E,optional:T}=p,P=y in l?l[y]:"";if(Zt(P)&&!E)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const V=Zt(P)?P.join("/"):P;if(!V)if(T)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=V}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function G0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Q0(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=G0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Vf(r))return 1;if(Vf(s))return-1}return s.length-r.length}function Vf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Y0={type:0,value:""},J0=/[a-zA-Z0-9_]/;function X0(t){if(!t)return[[]];if(t==="/")return[[Y0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:J0.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Z0(t,e,n){const r=W0(X0(t.path),n),s=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function eA(t,e){const n=[],r=new Map;e=Lf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,y=tA(u);y.aliasOf=d&&d.record;const E=Lf(e,u),T=[y];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of q)T.push(De({},y,{components:d?d.record.components:y.components,path:N,aliasOf:d?d.record:y}))}let P,V;for(const q of T){const{path:N}=q;if(h&&N[0]!=="/"){const ee=h.record.path,ie=ee[ee.length-1]==="/"?"":"/";q.path=h.record.path+(N&&ie+N)}if(P=Z0(q,h,E),d?d.alias.push(P):(V=V||P,V!==P&&V.alias.push(P),p&&u.name&&!xf(P)&&o(u.name)),y.children){const ee=y.children;for(let ie=0;ie<ee.length;ie++)i(ee[ie],P,d&&d.children[ie])}d=d||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return V?()=>{o(V)}:Ei}function o(u){if(Dm(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Q0(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Vm(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!xf(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},y,E;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Ss(1,{location:u});E=d.record.name,p=De(Mf(h.params,d.keys.filter(V=>!V.optional).map(V=>V.name)),u.params&&Mf(u.params,d.keys.map(V=>V.name))),y=d.stringify(p)}else if("path"in u)y=u.path,d=n.find(V=>V.re.test(y)),d&&(p=d.parse(y),E=d.record.name);else{if(d=h.name?r.get(h.name):n.find(V=>V.re.test(h.path)),!d)throw Ss(1,{location:u,currentLocation:h});E=d.record.name,p=De({},h.params,u.params),y=d.stringify(p)}const T=[];let P=d;for(;P;)T.unshift(P.record),P=P.parent;return{name:E,path:y,params:p,matched:T,meta:rA(T)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Mf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function tA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:nA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function nA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rA(t){return t.reduce((e,n)=>De(e,n.meta),{})}function Lf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Vm(t,e){return e.children.some(n=>n===t||Vm(t,n))}const Mm=/#/g,sA=/&/g,iA=/\//g,oA=/=/g,aA=/\?/g,xm=/\+/g,cA=/%5B/g,lA=/%5D/g,Lm=/%5E/g,uA=/%60/g,Fm=/%7B/g,hA=/%7C/g,Um=/%7D/g,dA=/%20/g;function gh(t){return encodeURI(""+t).replace(hA,"|").replace(cA,"[").replace(lA,"]")}function fA(t){return gh(t).replace(Fm,"{").replace(Um,"}").replace(Lm,"^")}function lu(t){return gh(t).replace(xm,"%2B").replace(dA,"+").replace(Mm,"%23").replace(sA,"%26").replace(uA,"`").replace(Fm,"{").replace(Um,"}").replace(Lm,"^")}function pA(t){return lu(t).replace(oA,"%3D")}function gA(t){return gh(t).replace(Mm,"%23").replace(aA,"%3F")}function mA(t){return t==null?"":gA(t).replace(iA,"%2F")}function wa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function _A(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xm," "),o=i.indexOf("="),a=wa(o<0?i:i.slice(0,o)),c=o<0?null:wa(i.slice(o+1));if(a in e){let l=e[a];Zt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ff(t){let e="";for(let n in t){const r=t[n];if(n=pA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(i=>i&&lu(i)):[r&&lu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function yA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const vA=Symbol(""),Uf=Symbol(""),fc=Symbol(""),mh=Symbol(""),uu=Symbol("");function ti(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Wn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ss(4,{from:n,to:e})):h instanceof Error?a(h):H0(h)?a(Ss(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function vl(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(EA(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Wn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=S0(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Wn(d,n,r,i,o)()}))}}return s}function EA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $f(t){const e=Kt(fc),n=Kt(mh),r=Se(()=>e.resolve(ot(t.to))),s=Se(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Rs.bind(null,u));if(d>-1)return d;const p=Bf(c[l-2]);return l>1&&Bf(u)===p&&h[h.length-1].path!==p?h.findIndex(Rs.bind(null,c[l-2])):d}),i=Se(()=>s.value>-1&&AA(n.params,r.value.params)),o=Se(()=>s.value>-1&&s.value===n.matched.length-1&&Om(n.params,r.value.params));function a(c={}){return TA(c)?e[ot(t.replace)?"replace":"push"](ot(t.to)).catch(Ei):Promise.resolve()}return{route:r,href:Se(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const wA=Bs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:$f,setup(t,{slots:e}){const n=rn($f(t)),{options:r}=Kt(fc),s=Se(()=>({[jf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:cs("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),IA=wA;function TA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function AA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Bf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jf=(t,e,n)=>t??e??n,RA=Bs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Kt(uu),s=Se(()=>t.route||r.value),i=Kt(Uf,0),o=Se(()=>{let l=ot(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Se(()=>s.value.matched[o.value]);Zo(Uf,Se(()=>o.value+1)),Zo(vA,a),Zo(uu,s);const c=He();return nr(()=>[c.value,a.value,t.name],([l,u,h],[d,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Rs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return qf(n.default,{Component:d,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,T=cs(d,De({},y,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return qf(n.default,{Component:T,route:l})||T}}});function qf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $m=RA;function SA(t){const e=eA(t.routes,t),n=t.parseQuery||_A,r=t.stringifyQuery||Ff,s=t.history,i=ti(),o=ti(),a=ti(),c=$g(Bn);let l=Bn;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_l.bind(null,I=>""+I),h=_l.bind(null,mA),d=_l.bind(null,wa);function p(I,H){let M,K;return Dm(I)?(M=e.getRecordMatcher(I),K=H):K=I,e.addRoute(K,M)}function y(I){const H=e.getRecordMatcher(I);H&&e.removeRoute(H)}function E(){return e.getRoutes().map(I=>I.record)}function T(I){return!!e.getRecordMatcher(I)}function P(I,H){if(H=De({},H||c.value),typeof I=="string"){const _=yl(n,I,H.path),w=e.resolve({path:_.path},H),S=s.createHref(_.fullPath);return De(_,w,{params:d(w.params),hash:wa(_.hash),redirectedFrom:void 0,href:S})}let M;if("path"in I)M=De({},I,{path:yl(n,I.path,H.path).path});else{const _=De({},I.params);for(const w in _)_[w]==null&&delete _[w];M=De({},I,{params:h(_)}),H.params=h(H.params)}const K=e.resolve(M,H),pe=I.hash||"";K.params=u(d(K.params));const g=C0(r,De({},I,{hash:fA(pe),path:K.path})),m=s.createHref(g);return De({fullPath:g,hash:pe,query:r===Ff?yA(I.query):I.query||{}},K,{redirectedFrom:void 0,href:m})}function V(I){return typeof I=="string"?yl(n,I,c.value.path):De({},I)}function q(I,H){if(l!==I)return Ss(8,{from:H,to:I})}function N(I){return we(I)}function ee(I){return N(De(V(I),{replace:!0}))}function ie(I){const H=I.matched[I.matched.length-1];if(H&&H.redirect){const{redirect:M}=H;let K=typeof M=="function"?M(I):M;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=V(K):{path:K},K.params={}),De({query:I.query,hash:I.hash,params:"path"in K?{}:I.params},K)}}function we(I,H){const M=l=P(I),K=c.value,pe=I.state,g=I.force,m=I.replace===!0,_=ie(M);if(_)return we(De(V(_),{state:typeof _=="object"?De({},pe,_.state):pe,force:g,replace:m}),H||M);const w=M;w.redirectedFrom=H;let S;return!g&&O0(r,K,M)&&(S=Ss(16,{to:w,from:K}),ye(K,K,!0,!1)),(S?Promise.resolve(S):Y(w,K)).catch(C=>In(C)?In(C,2)?C:$(C):O(C,w,K)).then(C=>{if(C){if(In(C,2))return we(De({replace:m},V(C.to),{state:typeof C.to=="object"?De({},pe,C.to.state):pe,force:g}),H||w)}else C=Ge(w,K,!0,m,pe);return ae(w,K,C),C})}function B(I,H){const M=q(I,H);return M?Promise.reject(M):Promise.resolve()}function G(I){const H=Ve.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(I):I()}function Y(I,H){let M;const[K,pe,g]=bA(I,H);M=vl(K.reverse(),"beforeRouteLeave",I,H);for(const _ of K)_.leaveGuards.forEach(w=>{M.push(Wn(w,I,H))});const m=B.bind(null,I,H);return M.push(m),Me(M).then(()=>{M=[];for(const _ of i.list())M.push(Wn(_,I,H));return M.push(m),Me(M)}).then(()=>{M=vl(pe,"beforeRouteUpdate",I,H);for(const _ of pe)_.updateGuards.forEach(w=>{M.push(Wn(w,I,H))});return M.push(m),Me(M)}).then(()=>{M=[];for(const _ of g)if(_.beforeEnter)if(Zt(_.beforeEnter))for(const w of _.beforeEnter)M.push(Wn(w,I,H));else M.push(Wn(_.beforeEnter,I,H));return M.push(m),Me(M)}).then(()=>(I.matched.forEach(_=>_.enterCallbacks={}),M=vl(g,"beforeRouteEnter",I,H),M.push(m),Me(M))).then(()=>{M=[];for(const _ of o.list())M.push(Wn(_,I,H));return M.push(m),Me(M)}).catch(_=>In(_,8)?_:Promise.reject(_))}function ae(I,H,M){a.list().forEach(K=>G(()=>K(I,H,M)))}function Ge(I,H,M,K,pe){const g=q(I,H);if(g)return g;const m=H===Bn,_=ss?history.state:{};M&&(K||m?s.replace(I.fullPath,De({scroll:m&&_&&_.scroll},pe)):s.push(I.fullPath,pe)),c.value=I,ye(I,H,M,m),$()}let rt;function ne(){rt||(rt=s.listen((I,H,M)=>{if(!Qe.listening)return;const K=P(I),pe=ie(K);if(pe){we(De(pe,{replace:!0}),K).catch(Ei);return}l=K;const g=c.value;ss&&F0(Of(g.fullPath,M.delta),dc()),Y(K,g).catch(m=>In(m,12)?m:In(m,2)?(we(m.to,K).then(_=>{In(_,20)&&!M.delta&&M.type===Fi.pop&&s.go(-1,!1)}).catch(Ei),Promise.reject()):(M.delta&&s.go(-M.delta,!1),O(m,K,g))).then(m=>{m=m||Ge(K,g,!1),m&&(M.delta&&!In(m,8)?s.go(-M.delta,!1):M.type===Fi.pop&&In(m,20)&&s.go(-1,!1)),ae(K,g,m)}).catch(Ei)}))}let U=ti(),b=ti(),L;function O(I,H,M){$(I);const K=b.list();return K.length?K.forEach(pe=>pe(I,H,M)):console.error(I),Promise.reject(I)}function se(){return L&&c.value!==Bn?Promise.resolve():new Promise((I,H)=>{U.add([I,H])})}function $(I){return L||(L=!I,ne(),U.list().forEach(([H,M])=>I?M(I):H()),U.reset()),I}function ye(I,H,M,K){const{scrollBehavior:pe}=t;if(!ss||!pe)return Promise.resolve();const g=!M&&U0(Of(I.fullPath,0))||(K||!M)&&history.state&&history.state.scroll||null;return jr().then(()=>pe(I,H,g)).then(m=>m&&L0(m)).catch(m=>O(m,I,H))}const ve=I=>s.go(I);let Te;const Ve=new Set,Qe={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:T,getRoutes:E,resolve:P,options:t,push:N,replace:ee,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:b.add,isReady:se,install(I){const H=this;I.component("RouterLink",IA),I.component("RouterView",$m),I.config.globalProperties.$router=H,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>ot(c)}),ss&&!Te&&c.value===Bn&&(Te=!0,N(s.location).catch(pe=>{}));const M={};for(const pe in Bn)Object.defineProperty(M,pe,{get:()=>c.value[pe],enumerable:!0});I.provide(fc,H),I.provide(mh,Fg(M)),I.provide(uu,c);const K=I.unmount;Ve.add(I),I.unmount=function(){Ve.delete(I),Ve.size<1&&(l=Bn,rt&&rt(),rt=null,c.value=Bn,Te=!1,L=!1),K()}}};function Me(I){return I.reduce((H,M)=>H.then(()=>G(M)),Promise.resolve())}return Qe}function bA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Rs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Rs(l,c))||s.push(c))}return[n,r,s]}function gD(){return Kt(fc)}function mD(){return Kt(mh)}function Bm(t){return Qu()?(bg(t),!0):!1}function bs(t){return typeof t=="function"?t():ot(t)}const PA=typeof window<"u"&&typeof document<"u",CA=Object.prototype.toString,OA=t=>CA.call(t)==="[object Object]",jm=()=>{};function kA(t,e){function n(...r){return new Promise((s,i)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(s).catch(i)})}return n}const qm=t=>t();function DA(t=qm){const e=He(!0);function n(){e.value=!1}function r(){e.value=!0}const s=(...i)=>{e.value&&t(...i)};return{isActive:Za(e),pause:n,resume:r,eventFilter:s}}function NA(...t){if(t.length!==1)return Yw(...t);const e=t[0];return typeof e=="function"?Za(zw(()=>({get:e,set:jm}))):He(e)}function VA(t,e,n={}){const{eventFilter:r=qm,...s}=n;return nr(t,kA(r,e),s)}function MA(t,e,n={}){const{eventFilter:r,...s}=n,{eventFilter:i,pause:o,resume:a,isActive:c}=DA(r);return{stop:VA(t,e,{...s,eventFilter:i}),pause:o,resume:a,isActive:c}}function xA(t,e=!0){hm()?ro(t):e?t():jr(t)}function LA(t=!1,e={}){const{truthyValue:n=!0,falsyValue:r=!1}=e,s=qe(t),i=He(t);function o(a){if(arguments.length)return i.value=a,i.value;{const c=bs(n);return i.value=i.value===c?bs(r):c,i.value}}return s?o:[i,o]}function Hm(t){var e;const n=bs(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Ui=PA?window:void 0;function Hf(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=Ui):[e,n,r,s]=t,!e)return jm;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d,p)=>(u.addEventListener(h,d,p),()=>u.removeEventListener(h,d,p)),c=nr(()=>[Hm(e),bs(s)],([u,h])=>{if(o(),!u)return;const d=OA(h)?{...h}:h;i.push(...n.flatMap(p=>r.map(y=>a(u,p,y,d))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return Bm(l),l}function FA(){const t=He(!1);return hm()&&ro(()=>{t.value=!0}),t}function UA(t){const e=FA();return Se(()=>(e.value,!!t()))}function $A(t,e={}){const{window:n=Ui}=e,r=UA(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const i=He(!1),o=l=>{i.value=l.matches},a=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",o):s.removeListener(o))},c=gi(()=>{r.value&&(a(),s=n.matchMedia(bs(t)),"addEventListener"in s?s.addEventListener("change",o):s.addListener(o),i.value=s.matches)});return Bm(()=>{c(),a(),s=void 0}),i}const Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$o="__vueuse_ssr_handlers__",BA=jA();function jA(){return $o in Uo||(Uo[$o]=Uo[$o]||{}),Uo[$o]}function Km(t,e){return BA[t]||e}function qA(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const HA={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Kf="vueuse-storage";function KA(t,e,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:a=!0,writeDefaults:c=!0,mergeDefaults:l=!1,shallow:u,window:h=Ui,eventFilter:d,onError:p=B=>{console.error(B)}}=r,y=(u?$g:He)(e);if(!n)try{n=Km("getDefaultStorage",()=>{var B;return(B=Ui)==null?void 0:B.localStorage})()}catch(B){p(B)}if(!n)return y;const E=bs(e),T=qA(E),P=(s=r.serializer)!=null?s:HA[T],{pause:V,resume:q}=MA(y,()=>N(y.value),{flush:i,deep:o,eventFilter:d});return h&&a&&(Hf(h,"storage",we),Hf(h,Kf,ie)),we(),y;function N(B){try{if(B==null)n.removeItem(t);else{const G=P.write(B),Y=n.getItem(t);Y!==G&&(n.setItem(t,G),h&&h.dispatchEvent(new CustomEvent(Kf,{detail:{key:t,oldValue:Y,newValue:G,storageArea:n}})))}}catch(G){p(G)}}function ee(B){const G=B?B.newValue:n.getItem(t);if(G==null)return c&&E!==null&&n.setItem(t,P.write(E)),E;if(!B&&l){const Y=P.read(G);return typeof l=="function"?l(Y,E):T==="object"&&!Array.isArray(Y)?{...E,...Y}:Y}else return typeof G!="string"?G:P.read(G)}function ie(B){we(B.detail)}function we(B){if(!(B&&B.storageArea!==n)){if(B&&B.key==null){y.value=E;return}if(!(B&&B.key!==t)){V();try{(B==null?void 0:B.newValue)!==P.write(y.value)&&(y.value=ee(B))}catch(G){p(G)}finally{B?jr(q):q()}}}}}function zA(t){return $A("(prefers-color-scheme: dark)",t)}function WA(t={}){const{selector:e="html",attribute:n="class",initialValue:r="auto",window:s=Ui,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:c,emitAuto:l,disableTransition:u=!0}=t,h={auto:"",light:"light",dark:"dark",...t.modes||{}},d=zA({window:s}),p=Se(()=>d.value?"dark":"light"),y=c||(o==null?NA(r):KA(o,r,i,{window:s,listenToStorageChanges:a})),E=Se(()=>y.value==="auto"?p.value:y.value),T=Km("updateHTMLAttrs",(N,ee,ie)=>{const we=typeof N=="string"?s==null?void 0:s.document.querySelector(N):Hm(N);if(!we)return;let B;if(u){B=s.document.createElement("style");const G="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";B.appendChild(document.createTextNode(G)),s.document.head.appendChild(B)}if(ee==="class"){const G=ie.split(/\s/g);Object.values(h).flatMap(Y=>(Y||"").split(/\s/g)).filter(Boolean).forEach(Y=>{G.includes(Y)?we.classList.add(Y):we.classList.remove(Y)})}else we.setAttribute(ee,ie);u&&(s.getComputedStyle(B).opacity,document.head.removeChild(B))});function P(N){var ee;T(e,n,(ee=h[N])!=null?ee:N)}function V(N){t.onChanged?t.onChanged(N,P):P(N)}nr(E,V,{flush:"post",immediate:!0}),xA(()=>V(E.value));const q=Se({get(){return l?y.value:E.value},set(N){y.value=N}});try{return Object.assign(q,{store:y,system:p,state:E})}catch{return q}}function GA(t={}){const{valueDark:e="dark",valueLight:n=""}=t,r=WA({...t,onChanged:(i,o)=>{var a;t.onChanged?(a=t.onChanged)==null||a.call(t,i==="dark",o,i):o(i)},modes:{dark:e,light:n}});return Se({get(){return r.value==="dark"},set(i){const o=i?"dark":"light";r.system.value===o?r.value="auto":r.value=o}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const zm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},QA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new YA;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JA=function(t){const e=zm(t);return Wm.encodeByteArray(e,!0)},Ia=function(t){return JA(t).replace(/\./g,"")},Gm=function(t){try{return Wm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function XA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ZA=()=>XA().__FIREBASE_DEFAULTS__,eR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gm(t[1]);return e&&JSON.parse(e)},_h=()=>{try{return ZA()||eR()||tR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qm=t=>{var e,n;return(n=(e=_h())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nR=t=>{const e=Qm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ym=()=>{var t;return(t=_h())===null||t===void 0?void 0:t.config},Jm=t=>{var e;return(e=_h())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function sR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ia(JSON.stringify(n)),Ia(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function oR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cR(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function lR(){try{return typeof indexedDB=="object"}catch{return!1}}function uR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hR,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oo.prototype.create)}}class oo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?dR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,a,r)}}function dR(t,e){return t.replace(fR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const fR=/\{\$([^}]+)}/g;function pR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ta(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(zf(i)&&zf(o)){if(!Ta(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ci(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function li(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gR(t,e){const n=new mR(t,e);return n.subscribe.bind(n)}class mR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_R(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=El),s.error===void 0&&(s.error=El),s.complete===void 0&&(s.complete=El);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _R(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function El(){}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class Mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class yR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ER(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vR(t){return t===wr?void 0:t}function ER(t){return t.instantiationMode==="EAGER"}/**
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
 */class wR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const IR={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},TR=Ae.INFO,AR={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},RR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=AR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yh{constructor(e){this.name=e,this._logLevel=TR,this._logHandler=RR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const SR=(t,e)=>e.some(n=>t instanceof n);let Wf,Gf;function bR(){return Wf||(Wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function PR(){return Gf||(Gf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xm=new WeakMap,hu=new WeakMap,Zm=new WeakMap,wl=new WeakMap,vh=new WeakMap;function CR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xm.set(n,t)}).catch(()=>{}),vh.set(e,t),e}function OR(t){if(hu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hu.set(t,e)}let du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kR(t){du=t(du)}function DR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Il(this),e,...n);return Zm.set(r,e.sort?e.sort():[e]),rr(r)}:PR().includes(t)?function(...e){return t.apply(Il(this),e),rr(Xm.get(this))}:function(...e){return rr(t.apply(Il(this),e))}}function NR(t){return typeof t=="function"?DR(t):(t instanceof IDBTransaction&&OR(t),SR(t,bR())?new Proxy(t,du):t)}function rr(t){if(t instanceof IDBRequest)return CR(t);if(wl.has(t))return wl.get(t);const e=NR(t);return e!==t&&(wl.set(t,e),vh.set(e,t)),e}const Il=t=>vh.get(t);function VR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=rr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(rr(o.result),c.oldVersion,c.newVersion,rr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const MR=["get","getKey","getAll","getAllKeys","count"],xR=["put","add","delete","clear"],Tl=new Map;function Qf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tl.get(e))return Tl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||MR.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Tl.set(e,i),i}kR(t=>({...t,get:(e,n,r)=>Qf(e,n)||t.get(e,n,r),has:(e,n)=>!!Qf(e,n)||t.has(e,n)}));/**
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
 */class LR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fu="@firebase/app",Yf="0.9.19";/**
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
 */const xr=new yh("@firebase/app"),UR="@firebase/app-compat",$R="@firebase/analytics-compat",BR="@firebase/analytics",jR="@firebase/app-check-compat",qR="@firebase/app-check",HR="@firebase/auth",KR="@firebase/auth-compat",zR="@firebase/database",WR="@firebase/database-compat",GR="@firebase/functions",QR="@firebase/functions-compat",YR="@firebase/installations",JR="@firebase/installations-compat",XR="@firebase/messaging",ZR="@firebase/messaging-compat",eS="@firebase/performance",tS="@firebase/performance-compat",nS="@firebase/remote-config",rS="@firebase/remote-config-compat",sS="@firebase/storage",iS="@firebase/storage-compat",oS="@firebase/firestore",aS="@firebase/firestore-compat",cS="firebase",lS="10.4.0";/**
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
 */const pu="[DEFAULT]",uS={[fu]:"fire-core",[UR]:"fire-core-compat",[BR]:"fire-analytics",[$R]:"fire-analytics-compat",[qR]:"fire-app-check",[jR]:"fire-app-check-compat",[HR]:"fire-auth",[KR]:"fire-auth-compat",[zR]:"fire-rtdb",[WR]:"fire-rtdb-compat",[GR]:"fire-fn",[QR]:"fire-fn-compat",[YR]:"fire-iid",[JR]:"fire-iid-compat",[XR]:"fire-fcm",[ZR]:"fire-fcm-compat",[eS]:"fire-perf",[tS]:"fire-perf-compat",[nS]:"fire-rc",[rS]:"fire-rc-compat",[sS]:"fire-gcs",[iS]:"fire-gcs-compat",[oS]:"fire-fst",[aS]:"fire-fst-compat","fire-js":"fire-js",[cS]:"fire-js-all"};/**
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
 */const Aa=new Map,gu=new Map;function hS(t,e){try{t.container.addComponent(e)}catch(n){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(gu.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;gu.set(e,t);for(const n of Aa.values())hS(n,t);return!0}function Eh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const dS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sr=new oo("app","Firebase",dS);/**
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
 */class fS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const js=lS;function e_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw sr.create("bad-app-name",{appName:String(s)});if(n||(n=Ym()),!n)throw sr.create("no-options");const i=Aa.get(s);if(i){if(Ta(n,i.options)&&Ta(r,i.config))return i;throw sr.create("duplicate-app",{appName:s})}const o=new wR(s);for(const c of gu.values())o.addComponent(c);const a=new fS(n,r,o);return Aa.set(s,a),a}function t_(t=pu){const e=Aa.get(t);if(!e&&t===pu&&Ym())return e_();if(!e)throw sr.create("no-app",{appName:t});return e}function ir(t,e,n){var r;let s=(r=uS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(a.join(" "));return}Ps(new Mr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const pS="firebase-heartbeat-database",gS=1,$i="firebase-heartbeat-store";let Al=null;function n_(){return Al||(Al=VR(pS,gS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($i)}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),Al}async function mS(t){try{return await(await n_()).transaction($i).objectStore($i).get(r_(t))}catch(e){if(e instanceof Ln)xr.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(n.message)}}}async function Jf(t,e){try{const r=(await n_()).transaction($i,"readwrite");await r.objectStore($i).put(e,r_(t)),await r.done}catch(n){if(n instanceof Ln)xr.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xr.warn(r.message)}}}function r_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _S=1024,yS=30*24*60*60*1e3;class vS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=yS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xf(),{heartbeatsToSend:n,unsentEntries:r}=ES(this._heartbeatsCache.heartbeats),s=Ia(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xf(){return new Date().toISOString().substring(0,10)}function ES(t,e=_S){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lR()?uR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await mS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zf(t){return Ia(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function IS(t){Ps(new Mr("platform-logger",e=>new LR(e),"PRIVATE")),Ps(new Mr("heartbeat",e=>new vS(e),"PRIVATE")),ir(fu,Yf,t),ir(fu,Yf,"esm2017"),ir("fire-js","")}IS("");var TS="firebase",AS="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir(TS,AS,"app");var RS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j,wh=wh||{},he=RS||self;function pc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function co(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function SS(t){return Object.prototype.hasOwnProperty.call(t,Rl)&&t[Rl]||(t[Rl]=++bS)}var Rl="closure_uid_"+(1e9*Math.random()>>>0),bS=0;function PS(t,e,n){return t.call.apply(t.bind,arguments)}function CS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=PS:vt=CS,vt.apply(null,arguments)}function Bo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function dr(){this.s=this.s,this.o=this.o}var OS=0;dr.prototype.s=!1;dr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),OS!=0)&&SS(this)};dr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const s_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ih(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ep(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(pc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var kS=function(){if(!he.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{he.addEventListener("test",()=>{},e),he.removeEventListener("test",()=>{},e)}catch{}return t}();function Bi(t){return/^[\s\xa0]*$/.test(t)}function gc(){var t=he.navigator;return t&&(t=t.userAgent)?t:""}function un(t){return gc().indexOf(t)!=-1}function Th(t){return Th[" "](t),t}Th[" "]=function(){};function DS(t,e){var n=Ab;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var NS=un("Opera"),Cs=un("Trident")||un("MSIE"),i_=un("Edge"),mu=i_||Cs,o_=un("Gecko")&&!(gc().toLowerCase().indexOf("webkit")!=-1&&!un("Edge"))&&!(un("Trident")||un("MSIE"))&&!un("Edge"),VS=gc().toLowerCase().indexOf("webkit")!=-1&&!un("Edge");function a_(){var t=he.document;return t?t.documentMode:void 0}var _u;e:{var Sl="",bl=function(){var t=gc();if(o_)return/rv:([^\);]+)(\)|;)/.exec(t);if(i_)return/Edge\/([\d\.]+)/.exec(t);if(Cs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(VS)return/WebKit\/(\S+)/.exec(t);if(NS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(bl&&(Sl=bl?bl[1]:""),Cs){var Pl=a_();if(Pl!=null&&Pl>parseFloat(Sl)){_u=String(Pl);break e}}_u=Sl}var yu;if(he.document&&Cs){var tp=a_();yu=tp||parseInt(_u,10)||void 0}else yu=void 0;var MS=yu;function ji(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(o_){e:{try{Th(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ji.$.h.call(this)}}lt(ji,Et);var xS={2:"touch",3:"pen",4:"mouse"};ji.prototype.h=function(){ji.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var lo="closure_listenable_"+(1e6*Math.random()|0),LS=0;function FS(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++LS,this.fa=this.ia=!1}function mc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ah(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function US(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function c_(t){const e={};for(const n in t)e[n]=t[n];return e}const np="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function l_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<np.length;i++)n=np[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _c(t){this.src=t,this.g={},this.h=0}_c.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Eu(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new FS(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function vu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=s_(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(mc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Eu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Rh="closure_lm_"+(1e6*Math.random()|0),Cl={};function u_(t,e,n,r,s){if(r&&r.once)return d_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)u_(t,e[i],n,r,s);return null}return n=Ph(n),t&&t[lo]?t.O(e,n,co(r)?!!r.capture:!!r,s):h_(t,e,n,!1,r,s)}function h_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=co(s)?!!s.capture:!!s,a=bh(t);if(a||(t[Rh]=a=new _c(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=$S(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)kS||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(p_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function $S(){function t(n){return e.call(t.src,t.listener,n)}const e=BS;return t}function d_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)d_(t,e[i],n,r,s);return null}return n=Ph(n),t&&t[lo]?t.P(e,n,co(r)?!!r.capture:!!r,s):h_(t,e,n,!0,r,s)}function f_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)f_(t,e[i],n,r,s);else r=co(r)?!!r.capture:!!r,n=Ph(n),t&&t[lo]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Eu(i,n,r,s),-1<n&&(mc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=bh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Eu(e,n,r,s)),(n=-1<t?e[t]:null)&&Sh(n))}function Sh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[lo])vu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(p_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bh(e))?(vu(n,t),n.h==0&&(n.src=null,e[Rh]=null)):mc(t)}}}function p_(t){return t in Cl?Cl[t]:Cl[t]="on"+t}function BS(t,e){if(t.fa)t=!0;else{e=new ji(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Sh(t),t=n.call(r,e)}return t}function bh(t){return t=t[Rh],t instanceof _c?t:null}var Ol="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ph(t){return typeof t=="function"?t:(t[Ol]||(t[Ol]=function(e){return t.handleEvent(e)}),t[Ol])}function ct(){dr.call(this),this.i=new _c(this),this.S=this,this.J=null}lt(ct,dr);ct.prototype[lo]=!0;ct.prototype.removeEventListener=function(t,e,n,r){f_(this,t,e,n,r)};function ft(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var s=e;e=new Et(r,t),l_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=jo(o,r,!0,e)&&s}if(o=e.g=t,s=jo(o,r,!0,e)&&s,s=jo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=jo(o,r,!1,e)&&s}ct.prototype.N=function(){if(ct.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)mc(n[r]);delete t.g[e],t.h--}}this.J=null};ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ct.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function jo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&vu(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ch=he.JSON.stringify;class jS{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function qS(){var t=Oh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class HS{constructor(){this.h=this.g=null}add(e,n){const r=g_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var g_=new jS(()=>new KS,t=>t.reset());class KS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zS(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function WS(t){he.setTimeout(()=>{throw t},0)}let qi,Hi=!1,Oh=new HS,m_=()=>{const t=he.Promise.resolve(void 0);qi=()=>{t.then(GS)}};var GS=()=>{for(var t;t=qS();){try{t.h.call(t.g)}catch(n){WS(n)}var e=g_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Hi=!1};function yc(t,e){ct.call(this),this.h=t||1,this.g=e||he,this.j=vt(this.qb,this),this.l=Date.now()}lt(yc,ct);j=yc.prototype;j.ga=!1;j.T=null;j.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ft(this,"tick"),this.ga&&(kh(this),this.start()))}};j.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function kh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}j.N=function(){yc.$.N.call(this),kh(this),delete this.g};function Dh(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:he.setTimeout(t,e||0)}function __(t){t.g=Dh(()=>{t.g=null,t.i&&(t.i=!1,__(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class QS extends dr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:__(this)}N(){super.N(),this.g&&(he.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(t){dr.call(this),this.h=t,this.g={}}lt(Ki,dr);var rp=[];function y_(t,e,n,r){Array.isArray(n)||(n&&(rp[0]=n.toString()),n=rp);for(var s=0;s<n.length;s++){var i=u_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function v_(t){Ah(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sh(e)},t),t.g={}}Ki.prototype.N=function(){Ki.$.N.call(this),v_(this)};Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vc(){this.g=!0}vc.prototype.Ea=function(){this.g=!1};function YS(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function JS(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function us(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+ZS(t,n)+(r?" "+r:"")})}function XS(t,e){t.info(function(){return"TIMEOUT: "+e})}vc.prototype.info=function(){};function ZS(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ch(n)}catch{return e}}var qr={},sp=null;function Ec(){return sp=sp||new ct}qr.Ta="serverreachability";function E_(t){Et.call(this,qr.Ta,t)}lt(E_,Et);function zi(t){const e=Ec();ft(e,new E_(e))}qr.STAT_EVENT="statevent";function w_(t,e){Et.call(this,qr.STAT_EVENT,t),this.stat=e}lt(w_,Et);function Pt(t){const e=Ec();ft(e,new w_(e,t))}qr.Ua="timingevent";function I_(t,e){Et.call(this,qr.Ua,t),this.size=e}lt(I_,Et);function uo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return he.setTimeout(function(){t()},e)}var wc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},T_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Nh(){}Nh.prototype.h=null;function ip(t){return t.h||(t.h=t.i())}function A_(){}var ho={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Vh(){Et.call(this,"d")}lt(Vh,Et);function Mh(){Et.call(this,"c")}lt(Mh,Et);var wu;function Ic(){}lt(Ic,Nh);Ic.prototype.g=function(){return new XMLHttpRequest};Ic.prototype.i=function(){return{}};wu=new Ic;function fo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ki(this),this.P=eb,t=mu?125:void 0,this.V=new yc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new R_}function R_(){this.i=null,this.g="",this.h=!1}var eb=45e3,Iu={},Ra={};j=fo.prototype;j.setTimeout=function(t){this.P=t};function Tu(t,e,n){t.L=1,t.v=Ac(On(e)),t.s=n,t.S=!0,S_(t,null)}function S_(t,e){t.G=Date.now(),po(t),t.A=On(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),V_(n.i,"t",r),t.C=0,n=t.l.J,t.h=new R_,t.g=ty(t.l,n?e:null,!t.s),0<t.O&&(t.M=new QS(vt(t.Pa,t,t.g),t.O)),y_(t.U,t.g,"readystatechange",t.nb),e=t.I?c_(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),zi(),YS(t.j,t.u,t.A,t.m,t.W,t.s)}j.nb=function(t){t=t.target;const e=this.M;e&&hn(t)==3?e.l():this.Pa(t)};j.Pa=function(t){try{if(t==this.g)e:{const u=hn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||mu||this.g&&(this.h.h||this.g.ja()||lp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?zi(3):zi(2)),Tc(this);var n=this.g.da();this.ca=n;t:if(b_(this)){var r=lp(this.g);t="";var s=r.length,i=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rr(this),Ii(this);var o="";break t}this.h.i=new he.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,JS(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Bi(a)){var l=a;break t}}l=null}if(n=l)us(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Au(this,n);else{this.i=!1,this.o=3,Pt(12),Rr(this),Ii(this);break e}}this.S?(P_(this,u,o),mu&&this.i&&u==3&&(y_(this.U,this.V,"tick",this.mb),this.V.start())):(us(this.j,this.m,o,null),Au(this,o)),u==4&&Rr(this),this.i&&!this.J&&(u==4?J_(this.l,this):(this.i=!1,po(this)))}else wb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Rr(this),Ii(this)}}}catch{}finally{}};function b_(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function P_(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=tb(t,n),s==Ra){e==4&&(t.o=4,Pt(14),r=!1),us(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Iu){t.o=4,Pt(15),us(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else us(t.j,t.m,s,null),Au(t,s);b_(t)&&s!=Ra&&s!=Iu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bh(e),e.M=!0,Pt(11))):(us(t.j,t.m,n,"[Invalid Chunked Response]"),Rr(t),Ii(t))}j.mb=function(){if(this.g){var t=hn(this.g),e=this.g.ja();this.C<e.length&&(Tc(this),P_(this,t,e),this.i&&t!=4&&po(this))}};function tb(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ra:(n=Number(e.substring(n,r)),isNaN(n)?Iu:(r+=1,r+n>e.length?Ra:(e=e.slice(r,r+n),t.C=r+n,e)))}j.cancel=function(){this.J=!0,Rr(this)};function po(t){t.Y=Date.now()+t.P,C_(t,t.P)}function C_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=uo(vt(t.lb,t),e)}function Tc(t){t.B&&(he.clearTimeout(t.B),t.B=null)}j.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(XS(this.j,this.A),this.L!=2&&(zi(),Pt(17)),Rr(this),this.o=2,Ii(this)):C_(this,this.Y-t)};function Ii(t){t.l.H==0||t.J||J_(t.l,t)}function Rr(t){Tc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,kh(t.V),v_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Au(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ru(n.i,t))){if(!t.K&&Ru(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Pa(n),Pc(n);else break e;$h(n),Pt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=uo(vt(n.ib,n),6e3));if(1>=L_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Sr(n,11)}else if((t.K||n.g==t)&&Pa(n),!Bi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(xh(i,i.h),i.h=null))}if(r.F){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Le(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ey(r,r.J?r.pa:null,r.Y),o.K){F_(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Tc(a),po(a)),r.g=o}else Q_(r);0<n.j.length&&Cc(n)}else l[0]!="stop"&&l[0]!="close"||Sr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Sr(n,7):Uh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}zi(4)}catch{}}function nb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(pc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function rb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(pc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function O_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(pc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=rb(t),r=nb(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var k_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function kr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof kr){this.h=t.h,Sa(this,t.j),this.s=t.s,this.g=t.g,ba(this,t.m),this.l=t.l;var e=t.i,n=new Wi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),op(this,n),this.o=t.o}else t&&(e=String(t).match(k_))?(this.h=!1,Sa(this,e[1]||"",!0),this.s=ui(e[2]||""),this.g=ui(e[3]||"",!0),ba(this,e[4]),this.l=ui(e[5]||"",!0),op(this,e[6]||"",!0),this.o=ui(e[7]||"")):(this.h=!1,this.i=new Wi(null,this.h))}kr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(hi(e,ap,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(hi(e,ap,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(hi(n,n.charAt(0)=="/"?ab:ob,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",hi(n,lb)),t.join("")};function On(t){return new kr(t)}function Sa(t,e,n){t.j=n?ui(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ba(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function op(t,e,n){e instanceof Wi?(t.i=e,ub(t.i,t.h)):(n||(e=hi(e,cb)),t.i=new Wi(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function Ac(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ui(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function hi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ib),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ib(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ap=/[#\/\?@]/g,ob=/[#\?:]/g,ab=/[#\?]/g,cb=/[#\?@]/g,lb=/#/g;function Wi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fr(t){t.g||(t.g=new Map,t.h=0,t.i&&sb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}j=Wi.prototype;j.add=function(t,e){fr(this),this.i=null,t=qs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function D_(t,e){fr(t),e=qs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function N_(t,e){return fr(t),e=qs(t,e),t.g.has(e)}j.forEach=function(t,e){fr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};j.ta=function(){fr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};j.Z=function(t){fr(this);let e=[];if(typeof t=="string")N_(this,t)&&(e=e.concat(this.g.get(qs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};j.set=function(t,e){return fr(this),this.i=null,t=qs(this,t),N_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};j.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function V_(t,e,n){D_(t,e),0<n.length&&(t.i=null,t.g.set(qs(t,e),Ih(n)),t.h+=n.length)}j.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function qs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ub(t,e){e&&!t.j&&(fr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(D_(this,r),V_(this,s,n))},t)),t.j=e}var hb=class{constructor(t,e){this.g=t,this.map=e}};function M_(t){this.l=t||db,he.PerformanceNavigationTiming?(t=he.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(he.g&&he.g.Ka&&he.g.Ka()&&he.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var db=10;function x_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function L_(t){return t.h?1:t.g?t.g.size:0}function Ru(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xh(t,e){t.g?t.g.add(e):t.h=e}function F_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}M_.prototype.cancel=function(){if(this.i=U_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function U_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ih(t.i)}var fb=class{stringify(t){return he.JSON.stringify(t,void 0)}parse(t){return he.JSON.parse(t,void 0)}};function pb(){this.g=new fb}function gb(t,e,n){const r=n||"";try{O_(t,function(s,i){let o=s;co(s)&&(o=Ch(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function mb(t,e){const n=new vc;if(he.Image){const r=new Image;r.onload=Bo(qo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Bo(qo,n,r,"TestLoadImage: error",!1,e),r.onabort=Bo(qo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Bo(qo,n,r,"TestLoadImage: timeout",!1,e),he.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function qo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Rc(t){this.l=t.ec||null,this.j=t.ob||!1}lt(Rc,Nh);Rc.prototype.g=function(){return new Sc(this.l,this.j)};Rc.prototype.i=function(t){return function(){return t}}({});function Sc(t,e){ct.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Lh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(Sc,ct);var Lh=0;j=Sc.prototype;j.open=function(t,e){if(this.readyState!=Lh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Gi(this)};j.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||he).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};j.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,go(this)),this.readyState=Lh};j.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gi(this)),this.g&&(this.readyState=3,Gi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof he.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function $_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}j.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?go(this):Gi(this),this.readyState==3&&$_(this)}};j.Za=function(t){this.g&&(this.response=this.responseText=t,go(this))};j.Ya=function(t){this.g&&(this.response=t,go(this))};j.ka=function(){this.g&&go(this)};function go(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Gi(t)}j.setRequestHeader=function(t,e){this.v.append(t,e)};j.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};j.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Gi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _b=he.JSON.parse;function We(t){ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=B_,this.L=this.M=!1}lt(We,ct);var B_="",yb=/^https?$/i,vb=["POST","PUT"];j=We.prototype;j.Oa=function(t){this.M=t};j.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():wu.g(),this.C=this.u?ip(this.u):ip(wu),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){cp(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=he.FormData&&t instanceof he.FormData,!(0<=s_(vb,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{H_(this),0<this.B&&((this.L=Eb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=Dh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){cp(this,i)}};function Eb(t){return Cs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}j.ua=function(){typeof wh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function cp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,j_(t),bc(t)}function j_(t){t.F||(t.F=!0,ft(t,"complete"),ft(t,"error"))}j.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),bc(this))};j.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bc(this,!0)),We.$.N.call(this)};j.La=function(){this.s||(this.G||this.v||this.l?q_(this):this.kb())};j.kb=function(){q_(this)};function q_(t){if(t.h&&typeof wh<"u"&&(!t.C[1]||hn(t)!=4||t.da()!=2)){if(t.v&&hn(t)==4)Dh(t.La,0,t);else if(ft(t,"readystatechange"),hn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(k_)[1]||null;!s&&he.self&&he.self.location&&(s=he.self.location.protocol.slice(0,-1)),r=!yb.test(s?s.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var i=2<hn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",j_(t)}}finally{bc(t)}}}}function bc(t,e){if(t.g){H_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function H_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(he.clearTimeout(t.A),t.A=null)}j.isActive=function(){return!!this.g};function hn(t){return t.g?t.g.readyState:0}j.da=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}};j.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};j.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_b(e)}};function lp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case B_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function wb(t){const e={};t=(t.g&&2<=hn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Bi(t[r]))continue;var n=zS(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}US(e,function(r){return r.join(", ")})}j.Ia=function(){return this.m};j.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function K_(t){let e="";return Ah(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Fh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=K_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function z_(t){this.Ga=0,this.j=[],this.l=new vc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ni("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ni("baseRetryDelayMs",5e3,t),this.hb=ni("retryDelaySeedMs",1e4,t),this.eb=ni("forwardChannelMaxRetries",2,t),this.xa=ni("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new M_(t&&t.concurrentRequestLimit),this.Ja=new pb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}j=z_.prototype;j.ra=8;j.H=1;function Uh(t){if(W_(t),t.H==3){var e=t.W++,n=On(t.I);if(Le(n,"SID",t.K),Le(n,"RID",e),Le(n,"TYPE","terminate"),mo(t,n),e=new fo(t,t.l,e),e.L=2,e.v=Ac(On(n)),n=!1,he.navigator&&he.navigator.sendBeacon)try{n=he.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&he.Image&&(new Image().src=e.v,n=!0),n||(e.g=ty(e.l,null),e.g.ha(e.v)),e.G=Date.now(),po(e)}Z_(t)}function Pc(t){t.g&&(Bh(t),t.g.cancel(),t.g=null)}function W_(t){Pc(t),t.u&&(he.clearTimeout(t.u),t.u=null),Pa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&he.clearTimeout(t.m),t.m=null)}function Cc(t){if(!x_(t.i)&&!t.m){t.m=!0;var e=t.Na;qi||m_(),Hi||(qi(),Hi=!0),Oh.add(e,t),t.C=0}}function Ib(t,e){return L_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=uo(vt(t.Na,t,e),X_(t,t.C)),t.C++,!0)}j.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new fo(this,this.l,t);let i=this.s;if(this.U&&(i?(i=c_(i),l_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=G_(this,s,e),n=On(this.I),Le(n,"RID",t),Le(n,"CVER",22),this.F&&Le(n,"X-HTTP-Session-Id",this.F),mo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(K_(i)))+"&"+e:this.o&&Fh(n,this.o,i)),xh(this.i,s),this.bb&&Le(n,"TYPE","init"),this.P?(Le(n,"$req",e),Le(n,"SID","null"),s.aa=!0,Tu(s,n,null)):Tu(s,n,e),this.H=2}}else this.H==3&&(t?up(this,t):this.j.length==0||x_(this.i)||up(this))};function up(t,e){var n;e?n=e.m:n=t.W++;const r=On(t.I);Le(r,"SID",t.K),Le(r,"RID",n),Le(r,"AID",t.V),mo(t,r),t.o&&t.s&&Fh(r,t.o,t.s),n=new fo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=G_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),xh(t.i,n),Tu(n,r,e)}function mo(t,e){t.na&&Ah(t.na,function(n,r){Le(e,r,n)}),t.h&&O_({},function(n,r){Le(e,r,n)})}function G_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?vt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{gb(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Q_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;qi||m_(),Hi||(qi(),Hi=!0),Oh.add(e,t),t.A=0}}function $h(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=uo(vt(t.Ma,t),X_(t,t.A)),t.A++,!0)}j.Ma=function(){if(this.u=null,Y_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=uo(vt(this.jb,this),t)}};j.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pt(10),Pc(this),Y_(this))};function Bh(t){t.B!=null&&(he.clearTimeout(t.B),t.B=null)}function Y_(t){t.g=new fo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=On(t.wa);Le(e,"RID","rpc"),Le(e,"SID",t.K),Le(e,"AID",t.V),Le(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Le(e,"TO",t.qa),Le(e,"TYPE","xmlhttp"),mo(t,e),t.o&&t.s&&Fh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ac(On(e)),n.s=null,n.S=!0,S_(n,t)}j.ib=function(){this.v!=null&&(this.v=null,Pc(this),$h(this),Pt(19))};function Pa(t){t.v!=null&&(he.clearTimeout(t.v),t.v=null)}function J_(t,e){var n=null;if(t.g==e){Pa(t),Bh(t),t.g=null;var r=2}else if(Ru(t.i,e))n=e.F,F_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Ec(),ft(r,new I_(r,n)),Cc(t)}else Q_(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&Ib(t,e)||r==2&&$h(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Sr(t,5);break;case 4:Sr(t,10);break;case 3:Sr(t,6);break;default:Sr(t,2)}}}function X_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Sr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=vt(t.pb,t);n||(n=new kr("//www.google.com/images/cleardot.gif"),he.location&&he.location.protocol=="http"||Sa(n,"https"),Ac(n)),mb(n.toString(),r)}else Pt(2);t.H=0,t.h&&t.h.za(e),Z_(t),W_(t)}j.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Pt(2)):(this.l.info("Failed to ping google.com"),Pt(1))};function Z_(t){if(t.H=0,t.ma=[],t.h){const e=U_(t.i);(e.length!=0||t.j.length!=0)&&(ep(t.ma,e),ep(t.ma,t.j),t.i.i.length=0,Ih(t.j),t.j.length=0),t.h.ya()}}function ey(t,e,n){var r=n instanceof kr?On(n):new kr(n);if(r.g!="")e&&(r.g=e+"."+r.g),ba(r,r.m);else{var s=he.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new kr(null);r&&Sa(i,r),e&&(i.g=e),s&&ba(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Le(r,n,e),Le(r,"VER",t.ra),mo(t,r),r}function ty(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new We(new Rc({ob:!0})):new We(t.va),e.Oa(t.J),e}j.isActive=function(){return!!this.h&&this.h.isActive(this)};function ny(){}j=ny.prototype;j.Ba=function(){};j.Aa=function(){};j.za=function(){};j.ya=function(){};j.isActive=function(){return!0};j.Va=function(){};function Ca(){if(Cs&&!(10<=Number(MS)))throw Error("Environmental error: no available transport.")}Ca.prototype.g=function(t,e){return new $t(t,e)};function $t(t,e){ct.call(this),this.g=new z_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Bi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Bi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Hs(this)}lt($t,ct);$t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ey(t,null,t.Y),Cc(t)};$t.prototype.close=function(){Uh(this.g)};$t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ch(t),t=n);e.j.push(new hb(e.fb++,t)),e.H==3&&Cc(e)};$t.prototype.N=function(){this.g.h=null,delete this.j,Uh(this.g),delete this.g,$t.$.N.call(this)};function ry(t){Vh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(ry,Vh);function sy(){Mh.call(this),this.status=1}lt(sy,Mh);function Hs(t){this.g=t}lt(Hs,ny);Hs.prototype.Ba=function(){ft(this.g,"a")};Hs.prototype.Aa=function(t){ft(this.g,new ry(t))};Hs.prototype.za=function(t){ft(this.g,new sy)};Hs.prototype.ya=function(){ft(this.g,"b")};function Tb(){this.blockSize=-1}function en(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}lt(en,Tb);en.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function kl(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}en.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)kl(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){kl(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){kl(this,r),s=0;break}}this.h=s,this.i+=e};en.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ne(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var Ab={};function jh(t){return-128<=t&&128>t?DS(t,function(e){return new Ne([e|0],0>e?-1:0)}):new Ne([t|0],0>t?-1:0)}function dn(t){if(isNaN(t)||!isFinite(t))return ms;if(0>t)return dt(dn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Su;return new Ne(e,0)}function iy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return dt(iy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=dn(Math.pow(e,8)),r=ms,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=dn(Math.pow(e,i)),r=r.R(i).add(dn(o))):(r=r.R(n),r=r.add(dn(o)))}return r}var Su=4294967296,ms=jh(0),bu=jh(1),hp=jh(16777216);j=Ne.prototype;j.ea=function(){if(Ht(this))return-dt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Su+r)*e,e*=Su}return t};j.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Rn(this))return"0";if(Ht(this))return"-"+dt(this).toString(t);for(var e=dn(Math.pow(t,6)),n=this,r="";;){var s=ka(n,e).g;n=Oa(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Rn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};j.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Rn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ht(t){return t.h==-1}j.X=function(t){return t=Oa(this,t),Ht(t)?-1:Rn(t)?0:1};function dt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ne(n,~t.h).add(bu)}j.abs=function(){return Ht(this)?dt(this):this};j.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ne(n,n[n.length-1]&-2147483648?-1:0)};function Oa(t,e){return t.add(dt(e))}j.R=function(t){if(Rn(this)||Rn(t))return ms;if(Ht(this))return Ht(t)?dt(this).R(dt(t)):dt(dt(this).R(t));if(Ht(t))return dt(this.R(dt(t)));if(0>this.X(hp)&&0>t.X(hp))return dn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Ho(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Ho(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ho(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ho(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ne(n,0)};function Ho(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ri(t,e){this.g=t,this.h=e}function ka(t,e){if(Rn(e))throw Error("division by zero");if(Rn(t))return new ri(ms,ms);if(Ht(t))return e=ka(dt(t),e),new ri(dt(e.g),dt(e.h));if(Ht(e))return e=ka(t,dt(e)),new ri(dt(e.g),e.h);if(30<t.g.length){if(Ht(t)||Ht(e))throw Error("slowDivide_ only works with positive integers.");for(var n=bu,r=e;0>=r.X(t);)n=dp(n),r=dp(r);var s=ns(n,1),i=ns(r,1);for(r=ns(r,2),n=ns(n,2);!Rn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=ns(r,1),n=ns(n,1)}return e=Oa(t,s.R(e)),new ri(s,e)}for(s=ms;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=dn(n),o=i.R(e);Ht(o)||0<o.X(t);)n-=r,i=dn(n),o=i.R(e);Rn(i)&&(i=bu),s=s.add(i),t=Oa(t,o)}return new ri(s,t)}j.gb=function(t){return ka(this,t).h};j.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ne(n,this.h&t.h)};j.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ne(n,this.h|t.h)};j.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ne(n,this.h^t.h)};function dp(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ne(n,t.h)}function ns(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ne(s,t.h)}Ca.prototype.createWebChannel=Ca.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;wc.NO_ERROR=0;wc.TIMEOUT=8;wc.HTTP_ERROR=6;T_.COMPLETE="complete";A_.EventType=ho;ho.OPEN="a";ho.CLOSE="b";ho.ERROR="c";ho.MESSAGE="d";ct.prototype.listen=ct.prototype.O;We.prototype.listenOnce=We.prototype.P;We.prototype.getLastError=We.prototype.Sa;We.prototype.getLastErrorCode=We.prototype.Ia;We.prototype.getStatus=We.prototype.da;We.prototype.getResponseJson=We.prototype.Wa;We.prototype.getResponseText=We.prototype.ja;We.prototype.send=We.prototype.ha;We.prototype.setWithCredentials=We.prototype.Oa;en.prototype.digest=en.prototype.l;en.prototype.reset=en.prototype.reset;en.prototype.update=en.prototype.j;Ne.prototype.add=Ne.prototype.add;Ne.prototype.multiply=Ne.prototype.R;Ne.prototype.modulo=Ne.prototype.gb;Ne.prototype.compare=Ne.prototype.X;Ne.prototype.toNumber=Ne.prototype.ea;Ne.prototype.toString=Ne.prototype.toString;Ne.prototype.getBits=Ne.prototype.D;Ne.fromNumber=dn;Ne.fromString=iy;var Rb=function(){return new Ca},Sb=function(){return Ec()},Dl=wc,bb=T_,Pb=qr,fp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ko=A_,Cb=We,Ob=en,_s=Ne;const pp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ks="10.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new yh("@firebase/firestore");function si(){return Lr.logLevel}function X(t,...e){if(Lr.logLevel<=Ae.DEBUG){const n=e.map(qh);Lr.debug(`Firestore (${Ks}): ${t}`,...n)}}function kn(t,...e){if(Lr.logLevel<=Ae.ERROR){const n=e.map(qh);Lr.error(`Firestore (${Ks}): ${t}`,...n)}}function Os(t,...e){if(Lr.logLevel<=Ae.WARN){const n=e.map(qh);Lr.warn(`Firestore (${Ks}): ${t}`,...n)}}function qh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function $e(t,e){t||ue()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class oy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class Db{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Nb{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($e(typeof r.accessToken=="string"),new oy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string"),new gt(e)}}class Vb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Mb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Vb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($e(typeof n.token=="string"),this.R=n.token,new xb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Fb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function ks(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ze(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new Ze(0,0))}static max(){return new de(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Qi{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const Ub=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Qi{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return Ub.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new W(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Fe.fromString(e))}static fromName(e){return new re(Fe.fromString(e).popFirst(5))}static empty(){return new re(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Fe(e.slice()))}}function $b(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new Ze(n+1,0):new Ze(n,r));return new cr(s,re.empty(),e)}function Bb(t){return new cr(t.readTime,t.key,-1)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(de.min(),re.empty(),-1)}static max(){return new cr(de.max(),re.empty(),-1)}}function jb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==qb)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(s=>s?D.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new D((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new D((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function yo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Hh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Hh.ae=-1;function Oc(t){return t==null}function Da(t){return t===0&&1/t==-1/0}function Kb(t){return typeof t=="number"&&Number.isInteger(t)&&!Da(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mp(this.data.getIterator())}getIteratorFrom(e){return new mp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}class mp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new wt(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ly("Invalid base64 string: "+i):i}}(e);return new At(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const zb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(t){if($e(!!t),typeof t=="string"){let e=0;const n=zb.exec(t);if($e(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zh(t){const e=t.mapValue.fields.__previous_value__;return Kh(e)?zh(e):e}function Yi(t){const e=lr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ji{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ji("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ji&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kh(t)?4:Gb(t)?9007199254740991:10:ue()}function En(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yi(t).isEqual(Yi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=lr(s.timestampValue),a=lr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Fr(s.bytesValue).isEqual(Fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Je(s.geoPointValue.latitude)===Je(i.geoPointValue.latitude)&&Je(s.geoPointValue.longitude)===Je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Je(s.integerValue)===Je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Je(s.doubleValue),a=Je(i.doubleValue);return o===a?Da(o)===Da(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ks(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(gp(o)!==gp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!En(o[c],a[c])))return!1;return!0}(t,e);default:return ue()}}function Xi(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Ds(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Je(i.integerValue||i.doubleValue),c=Je(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return _p(t.timestampValue,e.timestampValue);case 4:return _p(Yi(t),Yi(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Fr(i),c=Fr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=Ce(a[l],c[l]);if(u!==0)return u}return Ce(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ce(Je(i.latitude),Je(o.latitude));return a!==0?a:Ce(Je(i.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ds(a[l],c[l]);if(u)return u}return Ce(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Wo.mapValue&&o===Wo.mapValue)return 0;if(i===Wo.mapValue)return 1;if(o===Wo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=Ce(c[h],u[h]);if(d!==0)return d;const p=Ds(a[c[h]],l[u[h]]);if(p!==0)return p}return Ce(c.length,u.length)}(t.mapValue,e.mapValue);default:throw ue()}}function _p(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=lr(t),r=lr(e),s=Ce(n.seconds,r.seconds);return s!==0?s:Ce(n.nanos,r.nanos)}function Ns(t){return Pu(t)}function Pu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Pu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Pu(n.fields[o])}`;return s+"}"}(t.mapValue):ue()}function yp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cu(t){return!!t&&"integerValue"in t}function Wh(t){return!!t&&"arrayValue"in t}function vp(t){return!!t&&"nullValue"in t}function Ep(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sa(t){return!!t&&"mapValue"in t}function Ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Gb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ti(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ti(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];sa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Hr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(Ti(this.value))}}function uy(t){const e=[];return Hr(t.fields,(n,r)=>{const s=new yt([n]);if(sa(r)){const i=uy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new mt(e,0,de.min(),de.min(),de.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,de.min(),de.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,de.min(),de.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Na{constructor(e,n){this.position=e,this.inclusive=n}}function wp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Ds(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ip(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ys{constructor(e,n="asc"){this.field=e,this.dir=n}}function Qb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hy{}class Xe extends hy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Jb(e,n,r):n==="array-contains"?new eP(e,r):n==="in"?new tP(e,r):n==="not-in"?new nP(e,r):n==="array-contains-any"?new rP(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Xb(e,r):new Zb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ds(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class tn extends hy{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new tn(e,n)}matches(e){return dy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function dy(t){return t.op==="and"}function fy(t){return Yb(t)&&dy(t)}function Yb(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function Ou(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Ns(t.value);if(fy(t))return t.filters.map(e=>Ou(e)).join(",");{const e=t.filters.map(n=>Ou(n)).join(",");return`${t.op}(${e})`}}function py(t,e){return t instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&En(r.value,s.value)}(t,e):t instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&py(o,s.filters[a]),!0):!1}(t,e):void ue()}function gy(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ns(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(gy).join(" ,")+"}"}(t):"Filter"}class Jb extends Xe{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class Xb extends Xe{constructor(e,n){super(e,"in",n),this.keys=my("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Zb extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=my("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function my(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class eP extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wh(n)&&Xi(n.arrayValue,this.value)}}class tP extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xi(this.value.arrayValue,n)}}class nP extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xi(this.value.arrayValue,n)}}class rP extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xi(this.value.arrayValue,r))}}/**
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
 */class sP{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function Tp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new sP(t,e,n,r,s,i,o)}function Gh(t){const e=me(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ou(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ns(r)).join(",")),e.he=n}return e.he}function Qh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Qb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!py(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ip(t.startAt,e.startAt)&&Ip(t.endAt,e.endAt)}function ku(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function iP(t,e,n,r,s,i,o,a){return new zs(t,e,n,r,s,i,o,a)}function kc(t){return new zs(t)}function Ap(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Dc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function _y(t){return t.collectionGroup!==null}function Ai(t){const e=me(t);if(e.Pe===null){e.Pe=[];const n=Dc(e),r=Yh(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new ys(n)),e.Pe.push(new ys(yt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ys(yt.keyField(),i))}}}return e.Pe}function pn(t){const e=me(t);return e.Ie||(e.Ie=oP(e,Ai(t))),e.Ie}function oP(t,e){if(t.limitType==="F")return Tp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ys(s.field,i)});const n=t.endAt?new Na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Na(t.startAt.position,t.startAt.inclusive):null;return Tp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Du(t,e){e.getFirstInequalityField(),Dc(t);const n=t.filters.concat([e]);return new zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Va(t,e,n){return new zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nc(t,e){return Qh(pn(t),pn(e))&&t.limitType===e.limitType}function yy(t){return`${Gh(pn(t))}|lt:${t.limitType}`}function is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>gy(s)).join(", ")}]`),Oc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ns(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ns(s)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function Vc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=wp(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ai(r),s)||r.endAt&&!function(o,a,c){const l=wp(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ai(r),s))}(t,e)}function aP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vy(t){return(e,n)=>{let r=!1;for(const s of Ai(t)){const i=cP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function cP(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Ds(c,l):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return cy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=new Ke(re.comparator);function Dn(){return lP}const Ey=new Ke(re.comparator);function di(...t){let e=Ey;for(const n of t)e=e.insert(n.key,n);return e}function wy(t){let e=Ey;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function br(){return Ri()}function Iy(){return Ri()}function Ri(){return new Ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const uP=new Ke(re.comparator),hP=new wt(re.comparator);function Ie(...t){let e=hP;for(const n of t)e=e.add(n);return e}const dP=new wt(Ce);function fP(){return dP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Da(e)?"-0":e}}function Ay(t){return{integerValue:""+t}}function pP(t,e){return Kb(e)?Ay(e):Ty(t,e)}/**
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
 */class Mc{constructor(){this._=void 0}}function gP(t,e,n){return t instanceof Ma?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Kh(i)&&(i=zh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Vs?Sy(t,e):t instanceof Zi?by(t,e):function(s,i){const o=Ry(s,i),a=Rp(o)+Rp(s.Te);return Cu(o)&&Cu(s.Te)?Ay(a):Ty(s.serializer,a)}(t,e)}function mP(t,e,n){return t instanceof Vs?Sy(t,e):t instanceof Zi?by(t,e):n}function Ry(t,e){return t instanceof xa?function(r){return Cu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ma extends Mc{}class Vs extends Mc{constructor(e){super(),this.elements=e}}function Sy(t,e){const n=Py(e);for(const r of t.elements)n.some(s=>En(s,r))||n.push(r);return{arrayValue:{values:n}}}class Zi extends Mc{constructor(e){super(),this.elements=e}}function by(t,e){let n=Py(e);for(const r of t.elements)n=n.filter(s=>!En(s,r));return{arrayValue:{values:n}}}class xa extends Mc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function Rp(t){return Je(t.integerValue||t.doubleValue)}function Py(t){return Wh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n){this.field=e,this.transform=n}}function yP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Vs&&s instanceof Vs||r instanceof Zi&&s instanceof Zi?ks(r.elements,s.elements,En):r instanceof xa&&s instanceof xa?En(r.Te,s.Te):r instanceof Ma&&s instanceof Ma}(t.transform,e.transform)}class vP{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xc{}function Cy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jh(t.key,zt.none()):new vo(t.key,t.data,zt.none());{const n=t.data,r=Nt.empty();let s=new wt(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new pr(t.key,r,new Ut(s.toArray()),zt.none())}}function EP(t,e,n){t instanceof vo?function(s,i,o){const a=s.value.clone(),c=bp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof pr?function(s,i,o){if(!ia(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=bp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Oy(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Si(t,e,n,r){return t instanceof vo?function(i,o,a,c){if(!ia(i.precondition,o))return a;const l=i.value.clone(),u=Pp(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof pr?function(i,o,a,c){if(!ia(i.precondition,o))return a;const l=Pp(i.fieldTransforms,c,o),u=o.data;return u.setAll(Oy(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return ia(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function wP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ry(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function Sp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ks(r,s,(i,o)=>yP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vo extends xc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pr extends xc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Oy(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function bp(t,e,n){const r=new Map;$e(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,mP(o,a,n[s]))}return r}function Pp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,gP(i,o,e))}return r}class Jh extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IP extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&EP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Iy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Cy(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&ks(this.mutations,e.mutations,(n,r)=>Sp(n,r))&&ks(this.baseMutations,e.baseMutations,(n,r)=>Sp(n,r))}}class Xh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){$e(e.mutations.length===r.length);let s=function(){return uP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xh(e,n,r,s)}}/**
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
 */class AP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class RP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ye,Re;function SP(t){switch(t){default:return ue();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function ky(t){if(t===void 0)return kn("GRPC error has no .code"),R.UNKNOWN;switch(t){case Ye.OK:return R.OK;case Ye.CANCELLED:return R.CANCELLED;case Ye.UNKNOWN:return R.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return R.INTERNAL;case Ye.UNAVAILABLE:return R.UNAVAILABLE;case Ye.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Ye.NOT_FOUND:return R.NOT_FOUND;case Ye.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Ye.ABORTED:return R.ABORTED;case Ye.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Ye.DATA_LOSS:return R.DATA_LOSS;default:return ue()}}(Re=Ye||(Ye={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bP(){return new TextEncoder}/**
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
 */const PP=new _s([4294967295,4294967295],0);function Cp(t){const e=bP().encode(t),n=new Ob;return n.update(e),new Uint8Array(n.digest())}function Op(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _s([n,r],0),new _s([s,i],0)]}class Zh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fi(`Invalid padding: ${n}`);if(r<0)throw new fi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fi(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=_s.fromNumber(this.Ae)}Ve(e,n,r){let s=e.add(n.multiply(_s.fromNumber(r)));return s.compare(PP)===1&&(s=new _s([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Cp(e),[r,s]=Op(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);if(!this.me(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Cp(e),[r,s]=Op(n);for(let i=0;i<this.hashCount;i++){const o=this.Ve(r,s,i);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Eo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lc(de.min(),s,new Ke(Ce),Dn(),Ie())}}class Eo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Eo(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,r,s){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=s}}class Dy{constructor(e,n){this.targetId=e,this.ye=n}}class Ny{constructor(e,n,r=At.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class kp{constructor(){this.we=0,this.Se=Np(),this.be=At.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}get current(){return this.De}get resumeToken(){return this.be}get ve(){return this.we!==0}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=Ie(),n=Ie(),r=Ie();return this.Se.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new Eo(this.be,this.De,e,n,r)}Oe(){this.Ce=!1,this.Se=Np()}Ne(e,n){this.Ce=!0,this.Se=this.Se.insert(e,n)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}class CP{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Dn(),this.Ue=Dp(),this.We=new Ke(Ce)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.ve||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.ve||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,s)=>{this.Ye(s)&&n(s)})}Xe(e){const n=e.targetId,r=e.ye.count,s=this.et(n);if(s){const i=s.target;if(ku(i))if(r===0){const o=new re(i.path);this.je(n,o,mt.newNoDocument(o,de.min()))}else $e(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),c=a?this.rt(a,e,o):1;if(c!==0){this.Ze(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,l)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Fr(r).toUint8Array()}catch(c){if(c instanceof ly)return Os("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Zh(o,s,i)}catch(c){return Os(c instanceof fi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.je(n,i,null),s++)}),s}_t(e){const n=new Map;this.Ke.forEach((i,o)=>{const a=this.et(o);if(a){if(i.current&&ku(a.target)){const c=new re(a.target.path);this.$e.get(c)!==null||this.ut(o,c)||this.je(o,c,mt.newNoDocument(c,e))}i.Fe&&(n.set(o,i.xe()),i.Oe())}});let r=Ie();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.et(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.$e.forEach((i,o)=>o.setReadTime(e));const s=new Lc(e,n,this.We,this.$e,r);return this.$e=Dn(),this.Ue=Dp(),this.We=new Ke(Ce),s}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const s=this.Je(e);this.ut(e,n)?s.Ne(n,1):s.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new kp,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new wt(Ce),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new kp),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Dp(){return new Ke(re.comparator)}function Np(){return new Ke(re.comparator)}const OP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),kP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),DP=(()=>({and:"AND",or:"OR"}))();class NP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nu(t,e){return t.useProto3Json||Oc(e)?e:{value:e}}function La(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VP(t,e){return La(t,e.toTimestamp())}function gn(t){return $e(!!t),de.fromTimestamp(function(n){const r=lr(n);return new Ze(r.seconds,r.nanos)}(t))}function ed(t,e){return function(r){return new Fe(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function My(t){const e=Fe.fromString(t);return $e(Uy(e)),e}function Vu(t,e){return ed(t.databaseId,e.path)}function Nl(t,e){const n=My(e);if(n.get(1)!==t.databaseId.projectId)throw new W(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(xy(n))}function Mu(t,e){return ed(t.databaseId,e)}function MP(t){const e=My(t);return e.length===4?Fe.emptyPath():xy(e)}function xu(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xy(t){return $e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vp(t,e,n){return{name:Vu(t,e),fields:n.value.mapValue.fields}}function xP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?($e(u===void 0||typeof u=="string"),At.fromBase64String(u||"")):($e(u===void 0||u instanceof Uint8Array),At.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?R.UNKNOWN:ky(l.code);return new W(u,l.message||"")}(o);n=new Ny(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nl(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):de.min(),a=new Nt({mapValue:{fields:r.document.fields}}),c=mt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new oa(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nl(t,r.document),i=r.readTime?gn(r.readTime):de.min(),o=mt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new oa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nl(t,r.document),i=r.removedTargetIds||[];n=new oa([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new RP(s,i),a=r.targetId;n=new Dy(a,o)}}return n}function LP(t,e){let n;if(e instanceof vo)n={update:Vp(t,e.key,e.value)};else if(e instanceof Jh)n={delete:Vu(t,e.key)};else if(e instanceof pr)n={update:Vp(t,e.key,e.data),updateMask:zP(e.fieldMask)};else{if(!(e instanceof IP))return ue();n={verify:Vu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Vs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Zi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xa)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:VP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function FP(t,e){return t&&t.length>0?($e(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(de.min())&&(o=gn(i)),new vP(o,s.transformResults||[])}(n,e))):[]}function UP(t,e){return{documents:[Mu(t,e.path)]}}function $P(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Mu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Mu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Fy(tn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:os(h.field),direction:qP(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Nu(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function BP(t){let e=MP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){$e(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Ly(h);return d instanceof tn&&fy(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new ys(as(y.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Oc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new Na(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new Na(p,d)}(n.endAt)),iP(e,s,o,i,a,"F",c,l)}function jP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ly(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=as(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=as(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(as(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(r=>Ly(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function qP(t){return OP[t]}function HP(t){return kP[t]}function KP(t){return DP[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return yt.fromServerFormat(t.fieldPath)}function Fy(t){return t instanceof Xe?function(n){if(n.op==="=="){if(Ep(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NAN"}};if(vp(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ep(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NAN"}};if(vp(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(n.field),op:HP(n.op),value:n.value}}}(t):t instanceof tn?function(n){const r=n.getFilters().map(s=>Fy(s));return r.length===1?r[0]:{compositeFilter:{op:KP(n.op),filters:r}}}(t):ue()}function zP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Uy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r,s,i=de.min(),o=de.min(),a=At.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.ht=e}}function GP(t){const e=BP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Va(e,e.limit,"L"):e}/**
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
 */class QP{constructor(){this.an=new YP}addToCollectionParentIndex(e,n){return this.an.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.an.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(cr.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class YP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new wt(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new wt(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){return new Ms(0)}static Ln(){return new Ms(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(){this.changes=new Ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class XP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Si(r.mutation,s,Ut.empty(),Ze.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=br();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=di();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Dn();const o=Ri(),a=function(){return Ri()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof pr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Si(u.mutation,l,u.mutation.getFieldMask(),Ze.now())):o.set(l.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new XP(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ri();let s=new Ke((o,a)=>o-a),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ut.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||Ie()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Iy();u.forEach(d=>{if(!i.has(d)){const p=Cy(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_y(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):D.resolve(br());let a=-1,c=i;return o.next(l=>D.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?D.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Ie())).next(u=>({batchId:a,changes:wy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let s=di();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=di();return this.indexManager.getCollectionParents(e,i).next(a=>D.forEach(a,c=>{const l=function(h,d){return new zs(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,mt.newInvalidDocument(u)))});let a=di();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Si(u.mutation,l,Ut.empty(),Ze.now()),Vc(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,n){return D.resolve(this.lr.get(n))}saveBundleMetadata(e,n){return this.lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.hr.get(n))}saveNamedQuery(e,n){return this.hr.set(n.name,function(s){return{name:s.name,query:GP(s.bundledQuery),readTime:gn(s.readTime)}}(n)),D.resolve()}}/**
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
 */class tC{constructor(){this.overlays=new Ke(re.comparator),this.Pr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=br();return D.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.It(e,n,i)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Pr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Pr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const s=br(),i=n.length+1,o=new re(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=br(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=br(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return D.resolve(a)}It(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Pr.get(s.largestBatchId).delete(r.key);this.Pr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new AP(n,r));let i=this.Pr.get(n);i===void 0&&(i=Ie(),this.Pr.set(n,i)),this.Pr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this.Ir=new wt(it.dr),this.Tr=new wt(it.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(e,n){const r=new it(e,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Rr(new it(e,n))}Vr(e,n){e.forEach(r=>this.removeReference(r,n))}mr(e){const n=new re(new Fe([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Rr(o),i.push(o.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){const n=new re(new Fe([])),r=new it(n,e),s=new it(n,e+1);let i=Ie();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.yr=n}static dr(e,n){return re.comparator(e.key,n.key)||Ce(e.yr,n.yr)}static Er(e,n){return Ce(e.yr,n.yr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new wt(it.dr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TP(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Sr=this.Sr.add(new it(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.br(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Dr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,s],o=>{const a=this.br(o.yr);i.push(a)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new wt(Ce);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([i,o],a=>{r=r.add(a.yr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new it(new re(i),0);let a=new wt(Ce);return this.Sr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.yr)),!0)},o),D.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.br(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){$e(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return D.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,n){const r=new it(n,0),s=this.Sr.firstAfterOrEqual(r);return D.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}vr(e,n){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const n=this.Dr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.Fr=e,this.docs=function(){return new Ke(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const o=n.path,a=new re(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||jb(Bb(u),r)<=0||(s.has(u.key)||Vc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Mr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sC(this)}getSize(e){return D.resolve(this.size)}}class sC extends JP{constructor(e){super(),this.ur=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ur.addEntry(e,s)):this.ur.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.ur.getEntry(e,n)}getAllFromCache(e,n){return this.ur.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.persistence=e,this.Or=new Ws(n=>Gh(n),Qh),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Nr=0,this.Br=new td,this.targetCount=0,this.Lr=Ms.Bn()}forEachTarget(e,n){return this.Or.forEach((r,s)=>n(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),D.resolve()}Qn(e){this.Or.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ms(n),this.highestTargetId=n),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,n){return this.Qn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.Qn(n),D.resolve()}removeTargetData(e,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Or.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Ar(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Br.Vr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.mr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.pr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n){this.kr={},this.overlays={},this.qr=new Hh(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new iC(this),this.indexManager=new QP,this.remoteDocumentCache=function(s){return new rC(s)}(r=>this.referenceDelegate.$r(r)),this.serializer=new WP(n),this.Ur=new eC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.kr[e.toKey()];return r||(r=new nC(n,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new aC(this.qr.next());return this.referenceDelegate.Wr(),r(s).next(i=>this.referenceDelegate.Gr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}zr(e,n){return D.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,n)))}}class aC extends Hb{constructor(e){super(),this.currentSequenceNumber=e}}class nd{constructor(e){this.persistence=e,this.jr=new td,this.Hr=null}static Jr(e){return new nd(e)}get Yr(){if(this.Hr)return this.Hr;throw ue()}addReference(e,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Yr.add(n.toString()),D.resolve()}removeTarget(e,n){this.jr.mr(n.targetId).forEach(s=>this.Yr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Yr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Wr(){this.Hr=new Set}Gr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Yr,r=>{const s=re.fromPath(r);return this.Zr(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.Hr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Zr(e,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(e){return 0}Zr(e,n){return D.or([()=>D.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.zr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Qi=r,this.Ki=s}static $i(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new rd(e,n.fromCache,r,s)}}/**
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
 */class cC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lC{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=8}initialize(e,n){this.ji=e,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Hi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new cC;return this.Yi(e,n,o).next(a=>{if(i.result=a,this.Wi)return this.Zi(e,n,o,a.size)})}).next(()=>i.result)}Zi(e,n,r,s){return r.documentReadCount<this.Gi?(si()<=Ae.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),D.resolve()):(si()<=Ae.DEBUG&&X("QueryEngine","Query:",is(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.zi*s?(si()<=Ae.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):D.resolve())}Hi(e,n){if(Ap(n))return D.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Va(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ie(...i);return this.ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Xi(n,a);return this.es(n,l,o,c.readTime)?this.Hi(e,Va(n,null,"F")):this.ts(e,l,n,c)}))})))}Ji(e,n,r,s){return Ap(n)||s.isEqual(de.min())?D.resolve(null):this.ji.getDocuments(e,r).next(i=>{const o=this.Xi(n,i);return this.es(n,o,r,s)?D.resolve(null):(si()<=Ae.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),is(n)),this.ts(e,o,n,$b(s,-1)).next(a=>a))})}Xi(e,n){let r=new wt(vy(e));return n.forEach((s,i)=>{Vc(e,i)&&(r=r.add(i))}),r}es(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Yi(e,n,r){return si()<=Ae.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",is(n)),this.ji.getDocumentsMatchingQuery(e,n,cr.min(),r)}ts(e,n,r,s){return this.ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n,r,s){this.persistence=e,this.ns=n,this.serializer=s,this.rs=new Ke(Ce),this.ss=new Ws(i=>Gh(i),Qh),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZP(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.rs))}}function hC(t,e,n,r){return new uC(t,e,n,r)}async function $y(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.us(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Ie();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function dC(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=D.resolve();return d.forEach(y=>{p=p.next(()=>u.getEntry(c,y)).next(E=>{const T=l.docVersions.get(y);$e(T!==null),E.version.compareTo(T)<0&&(h.applyToRemoteDocument(E,l),E.isValidDocument()&&(E.setReadTime(l.commitVersion),u.addEntry(E)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ie();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function By(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Kr.getLastRemoteSnapshotVersion(n))}function fC(t,e){const n=me(t),r=e.snapshotVersion;let s=n.rs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n._s.newChangeBuffer({trackRemovals:!0});s=n.rs;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Kr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Kr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(At.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(E,T,P){return E.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:P.addedDocuments.size+P.modifiedDocuments.size+P.removedDocuments.size>0}(d,p,u)&&a.push(n.Kr.updateTargetData(i,p))});let c=Dn(),l=Ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(pC(i,o,e.documentUpdates).next(u=>{c=u.ls,l=u.hs})),!r.isEqual(de.min())){const u=n.Kr.getLastRemoteSnapshotVersion(i).next(h=>n.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return D.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.rs=s,i))}function pC(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ls:o,hs:s}})}function gC(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mC(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Kr.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):n.Kr.allocateTargetId(r).next(o=>(s=new Xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.rs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.rs=n.rs.insert(r.targetId,r),n.ss.set(e,r.targetId)),r})}async function Lu(t,e,n){const r=me(t),s=r.rs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!yo(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.rs=r.rs.remove(e),r.ss.delete(s.target)}function Mp(t,e,n){const r=me(t);let s=de.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=me(c),d=h.ss.get(u);return d!==void 0?D.resolve(h.rs.get(d)):h.Kr.getTargetData(l,u)}(r,o,pn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ns.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ie())).next(a=>(_C(r,aP(e),a),{documents:a,Ps:i})))}function _C(t,e,n){let r=t.os.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.os.set(e,r)}class xp{constructor(){this.activeTargetIds=fP()}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yC{constructor(){this.ro=new xp,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,n,r){this.io[e]=n}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new xp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vC{so(e){}shutdown(){}}/**
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
 */class Lp{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.co)e(0)}uo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.co)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Go=null;function Vl(){return Go===null?Go=function(){return 268435456+Math.round(2147483648*Math.random())}():Go++,"0x"+Go.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class IC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${s}/databases/${i}`,this.wo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get So(){return!1}bo(n,r,s,i,o){const a=Vl(),c=this.Do(n,r);X("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,i,o),this.vo(n,c,l,s).then(u=>(X("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Os("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Fo(n,r,s,i,o,a){return this.bo(n,r,s,i,o)}Co(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ks}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Do(n,r){const s=EC[n];return`${this.po}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Vl();return new Promise((o,a)=>{const c=new Cb;c.setWithCredentials(!0),c.listenOnce(bb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Dl.NO_ERROR:const u=c.getResponseJson();X(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Dl.TIMEOUT:X(pt,`RPC '${e}' ${i} timed out`),a(new W(R.DEADLINE_EXCEEDED,"Request time out"));break;case Dl.HTTP_ERROR:const h=c.getStatus();if(X(pt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(T){const P=T.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(P)>=0?P:R.UNKNOWN}(p.status);a(new W(y,p.message))}else a(new W(R.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new W(R.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{X(pt,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);X(pt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Mo(e,n,r){const s=Vl(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Rb(),a=Sb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Co(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");X(pt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const y=new wC({ho:T=>{p?X(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(d||(X(pt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),X(pt,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},Po:()=>h.close()}),E=(T,P,V)=>{T.listen(P,q=>{try{V(q)}catch(N){setTimeout(()=>{throw N},0)}})};return E(h,Ko.EventType.OPEN,()=>{p||X(pt,`RPC '${e}' stream ${s} transport opened.`)}),E(h,Ko.EventType.CLOSE,()=>{p||(p=!0,X(pt,`RPC '${e}' stream ${s} transport closed`),y.mo())}),E(h,Ko.EventType.ERROR,T=>{p||(p=!0,Os(pt,`RPC '${e}' stream ${s} transport errored:`,T),y.mo(new W(R.UNAVAILABLE,"The operation could not be completed")))}),E(h,Ko.EventType.MESSAGE,T=>{var P;if(!p){const V=T.data[0];$e(!!V);const q=V,N=q.error||((P=q[0])===null||P===void 0?void 0:P.error);if(N){X(pt,`RPC '${e}' stream ${s} received error:`,N);const ee=N.status;let ie=function(G){const Y=Ye[G];if(Y!==void 0)return ky(Y)}(ee),we=N.message;ie===void 0&&(ie=R.INTERNAL,we="Unknown error status: "+ee+" with message "+N.message),p=!0,y.mo(new W(ie,we)),h.close()}else X(pt,`RPC '${e}' stream ${s} received:`,V),y.fo(V)}}),E(a,Pb.STAT_EVENT,T=>{T.stat===fp.PROXY?X(pt,`RPC '${e}' stream ${s} detected buffering proxy`):T.stat===fp.NOPROXY&&X(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Vo()},0),y}}function Ml(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t){return new NP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n,r=1e3,s=1.5,i=6e4){this._i=e,this.timerId=n,this.xo=r,this.Oo=s,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,s,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,n,r,s,i,o,a,c){this._i=e,this.Uo=r,this.Wo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new jy(e,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,e!==4?this.Ho.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const e=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Go===n&&this.__(r,s)},r=>{e(()=>{const s=new W(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(s)})})}__(e,n){const r=this.o_(this.Go);this.stream=this.u_(e,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.a_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}o_(e){return n=>{this._i.enqueueAndForget(()=>this.Go===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TC extends qy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}u_(e,n){return this.connection.Mo("Listen",e,n)}onMessage(e){this.Ho.reset();const n=xP(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?gn(o.readTime):de.min()}(e);return this.listener.c_(n,r)}l_(e){const n={};n.database=xu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=ku(c)?{documents:UP(i,c)}:{query:$P(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Vy(i,o.resumeToken);const l=Nu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(de.min())>0){a.readTime=La(i,o.snapshotVersion.toTimestamp());const l=Nu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=jP(this.serializer,e);r&&(n.labels=r),this.n_(n)}h_(e){const n={};n.database=xu(this.serializer),n.removeTarget=e,this.n_(n)}}class AC extends qy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,n){return this.connection.Mo("Write",e,n)}onMessage(e){if($e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();const n=FP(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.T_(r,n)}return $e(!e.writeResults||e.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const e={};e.database=xu(this.serializer),this.n_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>LP(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.R_=!1}V_(){if(this.R_)throw new W(R.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.bo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(R.UNKNOWN,s.toString())})}Fo(e,n,r,s){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Fo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(R.UNKNOWN,i.toString())})}terminate(){this.R_=!0}}class SC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline")))}set(e){this.D_(),this.f_=0,e==="Online"&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(kn(n),this.p_=!1):X("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(o=>{r.enqueueAndForget(async()=>{Kr(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=me(c);l.F_.add(4),await wo(l),l.O_.set("Unknown"),l.F_.delete(4),await Uc(l)}(this))})}),this.O_=new SC(r,s)}}async function Uc(t){if(Kr(t))for(const e of t.M_)await e(!0)}async function wo(t){for(const e of t.M_)await e(!1)}function Hy(t,e){const n=me(t);n.v_.has(e.targetId)||(n.v_.set(e.targetId,e),od(n)?id(n):Gs(n).Yo()&&sd(n,e))}function Ky(t,e){const n=me(t),r=Gs(n);n.v_.delete(e),r.Yo()&&zy(n,e),n.v_.size===0&&(r.Yo()?r.e_():Kr(n)&&n.O_.set("Unknown"))}function sd(t,e){if(t.N_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gs(t).l_(e)}function zy(t,e){t.N_.Le(e),Gs(t).h_(e)}function id(t){t.N_=new CP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.v_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),Gs(t).start(),t.O_.y_()}function od(t){return Kr(t)&&!Gs(t).Jo()&&t.v_.size>0}function Kr(t){return me(t).F_.size===0}function Wy(t){t.N_=void 0}async function PC(t){t.v_.forEach((e,n)=>{sd(t,e)})}async function CC(t,e){Wy(t),od(t)?(t.O_.b_(e),id(t)):t.O_.set("Unknown")}async function OC(t,e,n){if(t.O_.set("Online"),e instanceof Ny&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.v_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.v_.delete(a),s.N_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fa(t,r)}else if(e instanceof oa?t.N_.Ge(e):e instanceof Dy?t.N_.Xe(e):t.N_.He(e),!n.isEqual(de.min()))try{const r=await By(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.N_._t(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.v_.get(l);u&&i.v_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.v_.get(c);if(!u)return;i.v_.set(c,u.withResumeToken(At.EMPTY_BYTE_STRING,u.snapshotVersion)),zy(i,c);const h=new Xn(u.target,c,l,u.sequenceNumber);sd(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Fa(t,r)}}async function Fa(t,e,n){if(!yo(e))throw e;t.F_.add(1),await wo(t),t.O_.set("Offline"),n||(n=()=>By(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.F_.delete(1),await Uc(t)})}function Gy(t,e){return e().catch(n=>Fa(t,n,e))}async function $c(t){const e=me(t),n=ur(e);let r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;kC(e);)try{const s=await gC(e.localStore,r);if(s===null){e.C_.length===0&&n.e_();break}r=s.batchId,DC(e,s)}catch(s){await Fa(e,s)}Qy(e)&&Yy(e)}function kC(t){return Kr(t)&&t.C_.length<10}function DC(t,e){t.C_.push(e);const n=ur(t);n.Yo()&&n.I_&&n.d_(e.mutations)}function Qy(t){return Kr(t)&&!ur(t).Jo()&&t.C_.length>0}function Yy(t){ur(t).start()}async function NC(t){ur(t).A_()}async function VC(t){const e=ur(t);for(const n of t.C_)e.d_(n.mutations)}async function MC(t,e,n){const r=t.C_.shift(),s=Xh.from(r,e,n);await Gy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await $c(t)}async function xC(t,e){e&&ur(t).I_&&await async function(r,s){if(function(o){return SP(o)&&o!==R.ABORTED}(s.code)){const i=r.C_.shift();ur(r).Xo(),await Gy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await $c(r)}}(t,e),Qy(t)&&Yy(t)}async function Fp(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Kr(n);n.F_.add(3),await wo(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.F_.delete(3),await Uc(n)}async function LC(t,e){const n=me(t);e?(n.F_.delete(2),await Uc(n)):e||(n.F_.add(2),await wo(n),n.O_.set("Unknown"))}function Gs(t){return t.B_||(t.B_=function(n,r,s){const i=me(n);return i.V_(),new TC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:PC.bind(null,t),Eo:CC.bind(null,t),c_:OC.bind(null,t)}),t.M_.push(async e=>{e?(t.B_.Xo(),od(t)?id(t):t.O_.set("Unknown")):(await t.B_.stop(),Wy(t))})),t.B_}function ur(t){return t.L_||(t.L_=function(n,r,s){const i=me(n);return i.V_(),new AC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Io:NC.bind(null,t),Eo:xC.bind(null,t),E_:VC.bind(null,t),T_:MC.bind(null,t)}),t.M_.push(async e=>{e?(t.L_.Xo(),await $c(t)):(await t.L_.stop(),t.C_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.C_.length} pending writes`),t.C_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ad(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cd(t,e){if(kn("AsyncQueue",`${e}: ${t}`),yo(t))return new W(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=di(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.k_=new Ke(re.comparator)}track(e){const n=e.doc.key,r=this.k_.get(n);r?e.type!==0&&r.type===3?this.k_=this.k_.insert(n,e):e.type===3&&r.type!==1?this.k_=this.k_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.k_=this.k_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.k_=this.k_.remove(n):e.type===1&&r.type===2?this.k_=this.k_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.k_=this.k_.insert(n,{type:2,doc:e.doc}):ue():this.k_=this.k_.insert(n,e)}q_(){const e=[];return this.k_.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xs(e,n,vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(){this.Q_=void 0,this.listeners=[]}}class UC{constructor(){this.queries=new Ws(e=>yy(e),Nc),this.onlineState="Unknown",this.K_=new Set}}async function ld(t,e){const n=me(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new FC),s)try{i.Q_=await n.onListen(r)}catch(o){const a=cd(o,`Initialization of query '${is(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.U_(n.onlineState),i.Q_&&e.W_(i.Q_)&&hd(n)}async function ud(t,e){const n=me(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function $C(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.W_(s)&&(r=!0);o.Q_=s}}r&&hd(n)}function BC(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function hd(t){t.K_.forEach(e=>{e.next()})}class dd{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.key=e}}class Xy{constructor(e){this.key=e}}class jC{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Ie(),this.mutatedKeys=Ie(),this.ua=vy(e),this.ca=new vs(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new Up,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Vc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;d&&p?d.data.isEqual(p.data)?y!==E&&(r.track({type:3,doc:p}),T=!0):this.Ia(d,p)||(r.track({type:2,doc:p}),T=!0,(c&&this.ua(p,c)>0||l&&this.ua(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),T=!0):d&&!p&&(r.track({type:1,doc:d}),T=!0,(c||l)&&(a=!0)),T&&(p?(o=o.add(p),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,es:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.q_();i.sort((l,u)=>function(d,p){const y=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return y(d)-y(p)}(l.type,u.type)||this.ua(l.doc,u.doc)),this.da(r);const o=n?this.Ta():[],a=this.aa.size===0&&this.current?1:0,c=a!==this._a;return this._a=a,i.length!==0||c?{snapshot:new xs(this.query,e.ca,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Up,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this.aa;this.aa=Ie(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new Xy(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new Jy(r))}),n}Ra(e){this.oa=e.Ps,this.aa=Ie();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return xs.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class qC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HC{constructor(e){this.key=e,this.ma=!1}}class KC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ws(a=>yy(a),Nc),this.pa=new Map,this.ya=new Set,this.wa=new Ke(re.comparator),this.Sa=new Map,this.ba=new td,this.Da={},this.Ca=new Map,this.va=Ms.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function zC(t,e){const n=n1(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await mC(n.localStore,pn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await WC(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Hy(n.remoteStore,o)}return s}async function WC(t,e,n,r,s){t.Ma=(h,d,p)=>async function(E,T,P,V){let q=T.view.ha(P);q.es&&(q=await Mp(E.localStore,T.query,!1).then(({documents:ie})=>T.view.ha(ie,q)));const N=V&&V.targetChanges.get(T.targetId),ee=T.view.applyChanges(q,E.isPrimaryClient,N);return Bp(E,T.targetId,ee.Ea),ee.snapshot}(t,h,d,p);const i=await Mp(t.localStore,e,!0),o=new jC(e,i.Ps),a=o.ha(i.documents),c=Eo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Bp(t,n,l.Ea);const u=new qC(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function GC(t,e){const n=me(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Nc(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Lu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ky(n.remoteStore,r.targetId),Fu(n,r.targetId)}).catch(_o)):(Fu(n,r.targetId),await Lu(n.localStore,r.targetId,!0))}async function QC(t,e,n){const r=r1(t);try{const s=await function(o,a){const c=me(o),l=Ze.now(),u=a.reduce((p,y)=>p.add(y.key),Ie());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Dn(),E=Ie();return c._s.getEntries(p,u).next(T=>{y=T,y.forEach((P,V)=>{V.isValidDocument()||(E=E.add(P))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,y)).next(T=>{h=T;const P=[];for(const V of a){const q=wP(V,h.get(V.key).overlayedDocument);q!=null&&P.push(new pr(V.key,q,uy(q.value.mapValue),zt.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,P,a)}).next(T=>{d=T;const P=T.applyToLocalDocumentSet(h,E);return c.documentOverlayCache.saveOverlays(p,T.batchId,P)})}).then(()=>({batchId:d.batchId,changes:wy(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new Ke(Ce)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await Io(r,s.changes),await $c(r.remoteStore)}catch(s){const i=cd(s,"Failed to persist write");n.reject(i)}}async function Zy(t,e){const n=me(t);try{const r=await fC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&($e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?$e(o.ma):s.removedDocuments.size>0&&($e(o.ma),o.ma=!1))}),await Io(n,r,e)}catch(r){await _o(r)}}function $p(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=me(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.U_(a)&&(l=!0)}),l&&hd(c)}(r.eventManager,e),s.length&&r.fa.c_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YC(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new Ke(re.comparator);o=o.insert(i,mt.newNoDocument(i,de.min()));const a=Ie().add(i),c=new Lc(de.min(),new Map,new Ke(Ce),o,a);await Zy(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),fd(r)}else await Lu(r.localStore,e,!1).then(()=>Fu(r,e,n)).catch(_o)}async function JC(t,e){const n=me(t),r=e.batch.batchId;try{const s=await dC(n.localStore,e);tv(n,r,null),ev(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Io(n,s)}catch(s){await _o(s)}}async function XC(t,e,n){const r=me(t);try{const s=await function(o,a){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>($e(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);tv(r,e,n),ev(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Io(r,s)}catch(s){await _o(s)}}function ev(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function tv(t,e,n){const r=me(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function Fu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.mr(e).forEach(r=>{t.ba.containsKey(r)||nv(t,r)})}function nv(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(Ky(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),fd(t))}function Bp(t,e,n){for(const r of n)r instanceof Jy?(t.ba.addReference(r.key,e),ZC(t,r)):r instanceof Xy?(X("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||nv(t,r.key)):ue()}function ZC(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(X("SyncEngine","New document in limbo: "+n),t.ya.add(r),fd(t))}function fd(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new re(Fe.fromString(e)),r=t.va.next();t.Sa.set(r,new HC(n)),t.wa=t.wa.insert(n,r),Hy(t.remoteStore,new Xn(pn(kc(n.path)),r,"TargetPurposeLimboResolution",Hh.ae))}}async function Io(t,e,n){const r=me(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=rd.$i(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.c_(s),await async function(c,l){const u=me(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>D.forEach(l,d=>D.forEach(d.Qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>D.forEach(d.Ki,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!yo(h))throw h;X("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.rs.get(d),y=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(y);u.rs=u.rs.insert(d,E)}}}(r.localStore,i))}async function e1(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await $y(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new W(R.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Io(n,r.cs)}}function t1(t,e){const n=me(t),r=n.Sa.get(e);if(r&&r.ma)return Ie().add(r.key);{let s=Ie();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function n1(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=t1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YC.bind(null,e),e.fa.c_=$C.bind(null,e.eventManager),e.fa.xa=BC.bind(null,e.eventManager),e}function r1(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XC.bind(null,e),e}class jp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return hC(this.persistence,new lC,e.initialUser,this.serializer)}createPersistence(e){return new oC(nd.Jr,this.serializer)}createSharedClientState(e){return new yC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class s1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$p(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=e1.bind(null,this.syncEngine),await LC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UC}()}createDatastore(e){const n=Fc(e.databaseInfo.databaseId),r=function(i){return new IC(i)}(e.databaseInfo);return function(i,o,a,c){return new RC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new bC(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>$p(this.syncEngine,n,0),function(){return Lp.C()?new Lp:new vC}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new KC(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=me(n);X("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await wo(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=ay.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{X("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(X("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xl(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $y(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await a1(t);X("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Fp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Fp(e.remoteStore,i)),t._onlineComponents=e}function o1(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function a1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await xl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!o1(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await xl(t,new jp)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await xl(t,new jp);return t._offlineComponents}async function rv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await qp(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await qp(t,new s1))),t._onlineComponents}function c1(t){return rv(t).then(e=>e.syncEngine)}async function Ua(t){const e=await rv(t),n=e.eventManager;return n.onListen=zC.bind(null,e.syncEngine),n.onUnlisten=GC.bind(null,e.syncEngine),n}function l1(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new pd({next:d=>{o.enqueueAndForget(()=>ud(i,h));const p=d.docs.has(a);!p&&d.fromCache?l.reject(new W(R.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&c&&c.source==="server"?l.reject(new W(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new dd(kc(a.path),u,{includeMetadataChanges:!0,Z_:!0});return ld(i,h)}(await Ua(t),t.asyncQueue,e,n,r)),r.promise}function u1(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new pd({next:d=>{o.enqueueAndForget(()=>ud(i,h)),d.fromCache&&c.source==="server"?l.reject(new W(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new dd(a,u,{includeMetadataChanges:!0,Z_:!0});return ld(i,h)}(await Ua(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Hp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t,e,n){if(!n)throw new W(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function h1(t,e,n,r){if(e===!0&&r===!0)throw new W(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kp(t){if(!re.isDocumentKey(t))throw new W(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zp(t){if(re.isDocumentKey(t))throw new W(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Mt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bc(t);throw new W(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function d1(t,e){if(e<=0)throw new W(R.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}h1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kb;switch(r.type){case"firstParty":return new Mb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hp.get(n);r&&(X("ComponentProvider","Removing Datastore"),Hp.delete(n),r.terminate())}(this),Promise.resolve()}}function f1(t,e,n,r={}){var s;const i=(t=Mt(t,jc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=gt.MOCK_USER;else{a=sR(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new W(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new gt(l)}t._authCredentials=new Db(new oy(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class or extends Fn{constructor(e,n,r){super(e,n,kc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new re(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function bi(t,e,...n){if(t=nt(t),iv("collection","path",e),t instanceof jc){const r=Fe.fromString(e,...n);return zp(r),new or(t,null,r)}{if(!(t instanceof It||t instanceof or))throw new W(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return zp(r),new or(t.firestore,null,r)}}function Pr(t,e,...n){if(t=nt(t),arguments.length===1&&(e=ay.V()),iv("doc","path",e),t instanceof jc){const r=Fe.fromString(e,...n);return Kp(r),new It(t,null,new re(r))}{if(!(t instanceof It||t instanceof or))throw new W(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Kp(r),new It(t.firestore,t instanceof or?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new jy(this,"async_queue_retry"),this.ou=()=>{const n=Ml();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const e=Ml();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;const n=Ml();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});const n=new Pn;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!yo(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){const n=this.Za.then(()=>(this.ru=!0,e().catch(r=>{this.nu=r,this.ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw kn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(e,n,r){this._u(),this.su.indexOf(e)>-1&&(n=0);const s=ad.createAndSchedule(this,e,n,r,i=>this.cu(i));return this.tu.push(s),s}_u(){this.nu&&ue()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(const n of this.tu)if(n.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){const n=this.tu.indexOf(e);this.tu.splice(n,1)}}function Gp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Nn extends jc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new p1}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ov(this),this._firestoreClient.terminate()}}function g1(t,e){const n=typeof t=="object"?t:t_(),r=typeof t=="string"?t:e||"(default)",s=Eh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nR("firestore");i&&f1(s,...i)}return s}function qc(t){return t._firestoreClient||ov(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ov(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new Wb(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,sv(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new i1(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ls(At.fromBase64String(e))}catch(n){throw new W(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ls(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=/^__.*__$/;class _1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new vo(e,this.data,n,this.fieldTransforms)}}class av{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class zc{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.du(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new zc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.Vu(e),s}mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Ru:!1});return s.du(),s}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return $a(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(e.length===0)throw this.gu("Document fields must not be empty");if(cv(this.Tu)&&m1.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}class y1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fc(e)}wu(e,n,r,s=!1){return new zc({Tu:e,methodName:n,yu:r,path:yt.emptyPath(),Ru:!1,pu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wc(t){const e=t._freezeSettings(),n=Fc(t._databaseId);return new y1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lv(t,e,n,r,s,i={}){const o=t.wu(i.merge||i.mergeFields?2:0,e,n,s);md("Data must be an object, but it was:",o,r);const a=uv(r,o);let c,l;if(i.merge)c=new Ut(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Uu(e,h,n);if(!o.contains(d))throw new W(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);dv(u,d)||u.push(d)}c=new Ut(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new _1(new Nt(a),c,l)}class Gc extends Kc{_toFieldTransform(e){if(e.Tu!==2)throw e.Tu===1?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gc}}function v1(t,e,n){return new zc({Tu:3,yu:e.settings.yu,methodName:t._methodName,Ru:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class E1 extends Kc{constructor(e,n){super(e),this.Su=n}_toFieldTransform(e){const n=v1(this,e,!0),r=this.Su.map(i=>Qs(i,n)),s=new Vs(r);return new _P(e.path,s)}isEqual(e){return this===e}}function w1(t,e,n,r){const s=t.wu(1,e,n);md("Data must be an object, but it was:",s,r);const i=[],o=Nt.empty();Hr(r,(c,l)=>{const u=_d(e,c,n);l=nt(l);const h=s.mu(u);if(l instanceof Gc)i.push(u);else{const d=Qs(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Ut(i);return new av(o,a,s.fieldTransforms)}function I1(t,e,n,r,s,i){const o=t.wu(1,e,n),a=[Uu(e,r,n)],c=[s];if(i.length%2!=0)throw new W(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Uu(e,i[d])),c.push(i[d+1]);const l=[],u=Nt.empty();for(let d=a.length-1;d>=0;--d)if(!dv(l,a[d])){const p=a[d];let y=c[d];y=nt(y);const E=o.mu(p);if(y instanceof Gc)l.push(p);else{const T=Qs(y,E);T!=null&&(l.push(p),u.set(p,T))}}const h=new Ut(l);return new av(u,h,o.fieldTransforms)}function T1(t,e,n,r=!1){return Qs(n,t.wu(r?4:3,e))}function Qs(t,e){if(hv(t=nt(t)))return md("Unsupported field value:",e,t),uv(t,e);if(t instanceof Kc)return function(r,s){if(!cv(s.Tu))throw s.gu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ru&&e.Tu!==4)throw e.gu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Qs(a,s.fu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ze.fromDate(r);return{timestampValue:La(s.serializer,i)}}if(r instanceof Ze){const i=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:La(s.serializer,i)}}if(r instanceof gd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ls)return{bytesValue:Vy(s.serializer,r._byteString)};if(r instanceof It){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ed(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.gu(`Unsupported field value: ${Bc(r)}`)}(t,e)}function uv(t,e){const n={};return cy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hr(t,(r,s)=>{const i=Qs(s,e.Au(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function hv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof gd||t instanceof Ls||t instanceof It||t instanceof Kc)}function md(t,e,n){if(!hv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Bc(n);throw r==="an object"?e.gu(t+" a custom object"):e.gu(t+" "+r)}}function Uu(t,e,n){if((e=nt(e))instanceof Hc)return e._internalPath;if(typeof e=="string")return _d(t,e);throw $a("Field path arguments must be of type string or ",t,!1,void 0,n)}const A1=new RegExp("[~\\*/\\[\\]]");function _d(t,e,n){if(e.search(A1)>=0)throw $a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hc(...e.split("."))._internalPath}catch{throw $a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $a(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new W(R.INVALID_ARGUMENT,a+t+c)}function dv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new R1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class R1 extends fv{data(){return super.data()}}function Qc(t,e){return typeof e=="string"?_d(t,e):e instanceof Hc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yd{}class vd extends yd{}function $u(t,e,...n){let r=[];e instanceof yd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Ed).length,a=i.filter(c=>c instanceof Yc).length;if(o>1||o>0&&a>0)throw new W(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Yc extends vd{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yc(e,n,r)}_apply(e){const n=this._parse(e);return gv(e._query,n),new Fn(e.firestore,e.converter,Du(e._query,n))}_parse(e){const n=Wc(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new W(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Jp(h,u);const p=[];for(const y of h)p.push(Yp(c,i,y));d={arrayValue:{values:p}}}else d=Yp(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Jp(h,u),d=T1(a,o,h,u==="in"||u==="not-in");return Xe.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Qp(t,e,n){const r=e,s=Qc("where",t);return Yc._create(s,r,n)}class Ed extends yd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ed(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)gv(o,c),o=Du(o,c)}(e._query,n),new Fn(e.firestore,e.converter,Du(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wd extends vd{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new wd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new ys(i,o);return function(l,u){if(Yh(l)===null){const h=Dc(l);h!==null&&mv(l,h,u.field)}}(s,a),a}(e._query,this._field,this._direction);return new Fn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new zs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function S1(t,e="asc"){const n=e,r=Qc("orderBy",t);return wd._create(r,n)}class Id extends vd{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Id(e,n,r)}_apply(e){return new Fn(e.firestore,e.converter,Va(e._query,this._limit,this._limitType))}}function b1(t){return d1("limit",t),Id._create("limit",t,"F")}function Yp(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new W(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_y(e)&&n.indexOf("/")!==-1)throw new W(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!re.isDocumentKey(r))throw new W(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yp(t,new re(r))}if(n instanceof It)return yp(t,n._key);throw new W(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bc(n)}.`)}function Jp(t,e){if(!Array.isArray(t)||t.length===0)throw new W(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gv(t,e){if(e.isInequality()){const r=Dc(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new W(R.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Yh(t);i!==null&&mv(t,s,i)}const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function mv(t,e,n){if(!n.isEqual(e))throw new W(R.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class P1{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new gd(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yi(e));default:return null}}convertTimestamp(e){const n=lr(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);$e(Uy(r));const s=new Ji(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yv extends fv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class aa extends yv{data(e={}){return super.data(e)}}class vv{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new pi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new aa(this._firestore,this._userDataWriter,r.key,r,new pi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new aa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new pi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new aa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new pi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:C1(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function C1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){t=Mt(t,It);const e=Mt(t.firestore,Nn);return l1(qc(e),t._key).then(n=>wv(e,t,n))}class Td extends P1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function Xp(t){t=Mt(t,Fn);const e=Mt(t.firestore,Nn),n=qc(e),r=new Td(e);return pv(t._query),u1(n,t._query).then(s=>new vv(e,r,t,s))}function O1(t,e,n){t=Mt(t,It);const r=Mt(t.firestore,Nn),s=_v(t.converter,e,n);return Jc(r,[lv(Wc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,zt.none())])}function k1(t,e,n,...r){t=Mt(t,It);const s=Mt(t.firestore,Nn),i=Wc(s);let o;return o=typeof(e=nt(e))=="string"||e instanceof Hc?I1(i,"updateDoc",t._key,e,n,r):w1(i,"updateDoc",t._key,e),Jc(s,[o.toMutation(t._key,zt.exists(!0))])}function D1(t){return Jc(Mt(t.firestore,Nn),[new Jh(t._key,zt.none())])}function Ev(t,e){const n=Mt(t.firestore,Nn),r=Pr(t),s=_v(t.converter,e);return Jc(n,[lv(Wc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function N1(t,...e){var n,r,s;t=nt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Gp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Gp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof It)l=Mt(t.firestore,Nn),u=kc(t._key.path),c={next:h=>{e[o]&&e[o](wv(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Mt(t,Fn);l=Mt(h.firestore,Nn),u=h._query;const d=new Td(l);c={next:p=>{e[o]&&e[o](new vv(l,d,h,p))},error:e[o+1],complete:e[o+2]},pv(t._query)}return function(d,p,y,E){const T=new pd(E),P=new dd(p,T,y);return d.asyncQueue.enqueueAndForget(async()=>ld(await Ua(d),P)),()=>{T.La(),d.asyncQueue.enqueueAndForget(async()=>ud(await Ua(d),P))}}(qc(l),u,a,c)}function Jc(t,e){return function(r,s){const i=new Pn;return r.asyncQueue.enqueueAndForget(async()=>QC(await c1(r),s,i)),i.promise}(qc(t),e)}function wv(t,e,n){const r=n.docs.get(e._key),s=new Td(t);return new yv(t,s,e._key,r,new pi(n.hasPendingWrites,n.fromCache),e.converter)}function ED(...t){return new E1("arrayUnion",t)}(function(e,n=!0){(function(s){Ks=s})(js),Ps(new Mr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Nn(new Nb(r.getProvider("auth-internal")),new Lb(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new W(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ji(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ir(pp,"4.2.0",e),ir(pp,"4.2.0","esm2017")})();function Ad(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Zp(t){return t!==void 0&&t.enterprise!==void 0}class V1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Iv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const M1=Iv,Tv=new oo("auth","Firebase",Iv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new yh("@firebase/auth");function x1(t,...e){Ba.logLevel<=Ae.WARN&&Ba.warn(`Auth (${js}): ${t}`,...e)}function la(t,...e){Ba.logLevel<=Ae.ERROR&&Ba.error(`Auth (${js}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw Rd(t,...e)}function mn(t,...e){return Rd(t,...e)}function L1(t,e,n){const r=Object.assign(Object.assign({},M1()),{[e]:n});return new oo("auth","Firebase",r).create(e,{appName:t.name})}function Rd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tv.create(t,...e)}function le(t,e,...n){if(!t)throw Rd(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw la(e),new Error(e)}function Vn(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function F1(){return eg()==="http:"||eg()==="https:"}function eg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(F1()||oR()||"connection"in navigator)?navigator.onLine:!0}function $1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=iR()||aR()}get(){return U1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=new To(3e4,6e4);function zr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wr(t,e,n,r,s={}){return Rv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ao(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Av.fetch()(Sv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Rv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},B1),e);try{const s=new q1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw L1(t,u,l);nn(t,u)}}catch(s){if(s instanceof Ln)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function Ao(t,e,n,r,s={}){const i=await Wr(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Sv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Sd(t.config,s):`${t.config.apiScheme}://${s}`}class q1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mn(this.auth,"network-request-failed")),j1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=mn(t,e,r);return s.customData._tokenResponse=n,s}async function H1(t,e){return Wr(t,"GET","/v2/recaptchaConfig",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(t,e){return Wr(t,"POST","/v1/accounts:delete",e)}async function z1(t,e){return Wr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function W1(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=bd(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pi(Ll(s.auth_time)),issuedAtTime:Pi(Ll(s.iat)),expirationTime:Pi(Ll(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ll(t){return Number(t)*1e3}function bd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return la("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gm(n);return s?JSON.parse(s):(la("Failed to decode base64 JWT payload"),null)}catch(s){return la("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function G1(t){const e=bd(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&Q1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Q1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pi(this.lastLoginAt),this.creationTime=Pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ja(t){var e;const n=t.auth,r=await t.getIdToken(),s=await eo(t,z1(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Z1(i.providerUserInfo):[],a=X1(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new bv(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function J1(t){const e=nt(t);await ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Z1(t){return t.map(e=>{var{providerId:n}=e,r=Ad(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(t,e){const n=await Rv(t,{},async()=>{const r=ao({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Sv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Av.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):G1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return le(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await eO(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new to;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await eo(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return W1(this,e)}reload(){return J1(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await eo(this,K1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,V=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:q,emailVerified:N,isAnonymous:ee,providerData:ie,stsTokenManager:we}=n;le(q&&we,e,"internal-error");const B=to.fromJSON(this.name,we);le(typeof q=="string",e,"internal-error"),jn(h,e.name),jn(d,e.name),le(typeof N=="boolean",e,"internal-error"),le(typeof ee=="boolean",e,"internal-error"),jn(p,e.name),jn(y,e.name),jn(E,e.name),jn(T,e.name),jn(P,e.name),jn(V,e.name);const G=new Dr({uid:q,auth:e,email:d,emailVerified:N,displayName:h,isAnonymous:ee,photoURL:y,phoneNumber:p,tenantId:E,stsTokenManager:B,createdAt:P,lastLoginAt:V});return ie&&Array.isArray(ie)&&(G.providerData=ie.map(Y=>Object.assign({},Y))),T&&(G._redirectEventId=T),G}static async _fromIdTokenResponse(e,n,r=!1){const s=new to;s.updateFromServerResponse(n);const i=new Dr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ja(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=new Map;function bn(t){Vn(t instanceof Function,"Expected a class definition");let e=tg.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tg.set(t,e),e)}/**
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
 */class Pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pv.type="NONE";const ng=Pv;/**
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
 */function ua(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ua(this.userKey,s.apiKey,i),this.fullPersistenceKey=ua("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Es(bn(ng),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||bn(ng);const o=ua(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Dr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Es(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Es(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nv(e))return"Blackberry";if(Vv(e))return"Webos";if(Pd(e))return"Safari";if((e.includes("chrome/")||Ov(e))&&!e.includes("edge/"))return"Chrome";if(Dv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cv(t=Tt()){return/firefox\//i.test(t)}function Pd(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ov(t=Tt()){return/crios\//i.test(t)}function kv(t=Tt()){return/iemobile/i.test(t)}function Dv(t=Tt()){return/android/i.test(t)}function Nv(t=Tt()){return/blackberry/i.test(t)}function Vv(t=Tt()){return/webos/i.test(t)}function Xc(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tO(t=Tt()){var e;return Xc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nO(){return cR()&&document.documentMode===10}function Mv(t=Tt()){return Xc(t)||Dv(t)||Vv(t)||Nv(t)||/windows phone/i.test(t)||kv(t)}function rO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t,e=[]){let n;switch(t){case"Browser":n=rg(Tt());break;case"Worker":n=`${rg(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class sO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function iO(t,e={}){return Wr(t,"GET","/v2/passwordPolicy",zr(t,e))}/**
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
 */const oO=6;class aO{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sg(this),this.idTokenSubscription=new sg(this),this.beforeStateQueue=new sO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iO(this),n=new aO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&x1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gr(t){return nt(t)}class sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=gR(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Lv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=mn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",lO().appendChild(r)})}function uO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hO="https://www.google.com/recaptcha/enterprise.js?render=",dO="recaptcha-enterprise",fO="NO_RECAPTCHA";class pO{constructor(e){this.type=dO,this.auth=Gr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{H1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new V1(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Zp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(fO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Zp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Lv(hO+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function qa(t,e,n,r=!1){const s=new pO(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t,e){const n=Eh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ta(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function mO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _O(t,e,n){const r=Gr(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Fv(e),{host:o,port:a}=yO(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||vO()}function Fv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yO(t){const e=Fv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ig(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ig(o)}}}function ig(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function EO(t,e){return Wr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(t,e){return Ao(t,"POST","/v1/accounts:signInWithPassword",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}async function IO(t,e){return Ao(t,"POST","/v1/accounts:signInWithEmailLink",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Cd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new no(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new no(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await qa(e,r,"signInWithPassword");return Fl(e,s)}else return Fl(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await qa(e,r,"signInWithPassword");return Fl(e,i)}else return Promise.reject(s)});case"emailLink":return wO(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return EO(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return IO(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(t,e){return Ao(t,"POST","/v1/accounts:signInWithIdp",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO="http://localhost";class $r extends Cd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ad(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $r(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ws(e,n)}buildRequest(){const e={requestUri:TO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ao(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RO(t){const e=ci(li(t)).link,n=e?ci(li(e)).deep_link_id:null,r=ci(li(t)).deep_link_id;return(r?ci(li(r)).link:null)||r||n||e||t}class Od{constructor(e){var n,r,s,i,o,a;const c=ci(li(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=AO((s=c.mode)!==null&&s!==void 0?s:null);le(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=RO(e);try{return new Od(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.providerId=Ys.PROVIDER_ID}static credential(e,n){return no._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Od.parseLink(n);return le(r,"argument-error"),no._fromEmailAndCode(e,r.code,r.tenantId)}}Ys.PROVIDER_ID="password";Ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ro extends Uv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Ro{constructor(){super("facebook.com")}static credential(e){return $r._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $r._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Ro{constructor(){super("github.com")}static credential(e){return $r._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Ro{constructor(){super("twitter.com")}static credential(e,n){return $r._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(t,e){return Ao(t,"POST","/v1/accounts:signUp",zr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dr._fromIdTokenResponse(e,r,s),o=og(r);return new Br({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=og(r);return new Br({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function og(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ha.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ha(e,n,r,s)}}function $v(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ha._fromErrorAndOperation(t,i,e,r):i})}async function SO(t,e,n=!1){const r=await eo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Br._forOperation(t,"link",r)}/**
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
 */async function bO(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await eo(t,$v(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=bd(i.idToken);le(o,r,"internal-error");const{sub:a}=o;return le(t.uid===a,r,"user-mismatch"),Br._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(t,e,n=!1){const r="signIn",s=await $v(t,r,e),i=await Br._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function PO(t,e){return Bv(Gr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(t){const e=Gr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function CO(t,e,n){var r;const s=Gr(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await qa(s,i,"signUpPassword");o=Ul(s,l)}else o=Ul(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await qa(s,i,"signUpPassword");return Ul(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&jv(t),l}),c=await Br._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function OO(t,e,n){return PO(nt(t),Ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jv(t),r})}function kO(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function DO(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function NO(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function VO(t){return nt(t).signOut()}const Ka="__sak";/**
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
 */class qv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ka,"1"),this.storage.removeItem(Ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(){const t=Tt();return Pd(t)||Xc(t)}const xO=1e3,LO=10;class Hv extends qv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=MO()&&rO(),this.fallbackToPolling=Mv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);nO()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,LO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hv.type="LOCAL";const FO=Hv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv extends qv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kv.type="SESSION";const zv=Kv;/**
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
 */function UO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Zc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await UO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $O{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=kd("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function BO(t){_n().location.href=t}/**
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
 */function Wv(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function jO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HO(){return Wv()?self:null}/**
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
 */const Gv="firebaseLocalStorageDb",KO=1,za="firebaseLocalStorage",Qv="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function el(t,e){return t.transaction([za],e?"readwrite":"readonly").objectStore(za)}function zO(){const t=indexedDB.deleteDatabase(Gv);return new So(t).toPromise()}function ju(){const t=indexedDB.open(Gv,KO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(za,{keyPath:Qv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(za)?e(r):(r.close(),await zO(),e(await ju()))})})}async function ag(t,e,n){const r=el(t,!0).put({[Qv]:e,value:n});return new So(r).toPromise()}async function WO(t,e){const n=el(t,!1).get(e),r=await new So(n).toPromise();return r===void 0?null:r.value}function cg(t,e){const n=el(t,!0).delete(e);return new So(n).toPromise()}const GO=800,QO=3;class Yv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ju(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zc._getInstance(HO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jO(),!this.activeServiceWorker)return;this.sender=new $O(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ju();return await ag(e,Ka,"1"),await cg(e,Ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ag(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=el(s,!1).getAll();return new So(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yv.type="LOCAL";const YO=Yv;new To(3e4,6e4);/**
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
 */function JO(t,e){return e?bn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Dd extends Cd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XO(t){return Bv(t.auth,new Dd(t),t.bypassAuthState)}function ZO(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),bO(n,new Dd(t),t.bypassAuthState)}async function ek(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),SO(n,new Dd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XO;case"linkViaPopup":case"linkViaRedirect":return ek;case"reauthViaPopup":case"reauthViaRedirect":return ZO;default:nn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=new To(2e3,1e4);class hs extends Jv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tk.get())};e()}}hs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="pendingRedirect",ha=new Map;class rk extends Jv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ha.get(this.auth._key());if(!e){try{const r=await sk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ha.set(this.auth._key(),e)}return this.bypassAuthState||ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sk(t,e){const n=ak(e),r=ok(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ik(t,e){ha.set(t._key(),e)}function ok(t){return bn(t._redirectPersistence)}function ak(t){return ua(nk,t.config.apiKey,t.name)}async function ck(t,e,n=!1){const r=Gr(t),s=JO(r,e),o=await new rk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=10*60*1e3;class uk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lk&&this.cachedEventUids.clear(),this.cachedEventUids.has(lg(e))}saveEventToCache(e){this.cachedEventUids.add(lg(e)),this.lastProcessedEventTime=Date.now()}}function lg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(t,e={}){return Wr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pk=/^https?/;async function gk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dk(t);for(const n of e)try{if(mk(n))return}catch{}nn(t,"unauthorized-domain")}function mk(t){const e=Bu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pk.test(n))return!1;if(fk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _k=new To(3e4,6e4);function ug(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yk(t){return new Promise((e,n)=>{var r,s,i;function o(){ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ug(),n(mn(t,"network-request-failed"))},timeout:_k.get()})}if(!((s=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_n().gapi)===null||i===void 0)&&i.load)o();else{const a=uO("iframefcb");return _n()[a]=()=>{gapi.load?o():n(mn(t,"network-request-failed"))},Lv(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw da=null,e})}let da=null;function vk(t){return da=da||yk(t),da}/**
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
 */const Ek=new To(5e3,15e3),wk="__/auth/iframe",Ik="emulator/auth/iframe",Tk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ak=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rk(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sd(e,Ik):`https://${t.config.authDomain}/${wk}`,r={apiKey:e.apiKey,appName:t.name,v:js},s=Ak.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ao(r).slice(1)}`}async function Sk(t){const e=await vk(t),n=_n().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:Rk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=mn(t,"network-request-failed"),a=_n().setTimeout(()=>{i(o)},Ek.get());function c(){_n().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const bk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pk=500,Ck=600,Ok="_blank",kk="http://localhost";class hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dk(t,e,n,r=Pk,s=Ck){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bk),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Tt().toLowerCase();n&&(a=Ov(l)?Ok:n),Cv(l)&&(e=e||kk,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(tO(l)&&a!=="_self")return Nk(e||"",a),new hg(null);const h=window.open(e||"",a,u);le(h,t,"popup-blocked");try{h.focus()}catch{}return new hg(h)}function Nk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Vk="__/auth/handler",Mk="emulator/auth/handler",xk=encodeURIComponent("fac");async function dg(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:js,eventId:s};if(e instanceof Uv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ro){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${xk}=${encodeURIComponent(c)}`:"";return`${Lk(t)}?${ao(a).slice(1)}${l}`}function Lk({config:t}){return t.emulator?Sd(t,Mk):`https://${t.authDomain}/${Vk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="webStorageSupport";class Fk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zv,this._completeRedirectFn=ck,this._overrideRedirectResult=ik}async _openPopup(e,n,r,s){var i;Vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await dg(e,n,r,Bu(),s);return Dk(e,o,kd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await dg(e,n,r,Bu(),s);return BO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Sk(e),r=new uk(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($l,{type:$l},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$l];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mv()||Pd()||Xc()}}const Uk=Fk;var fg="@firebase/auth",pg="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jk(t){Ps(new Mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xv(t)},l=new cO(r,s,i,c);return mO(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new Mr("auth-internal",e=>{const n=Gr(e.getProvider("auth").getImmediate());return(r=>new $k(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(fg,pg,Bk(t)),ir(fg,pg,"esm2017")}/**
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
 */const qk=5*60,Hk=Jm("authIdTokenMaxAge")||qk;let gg=null;const Kk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hk)return;const s=n==null?void 0:n.token;gg!==s&&(gg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zk(t=t_()){const e=Eh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gO(t,{popupRedirectResolver:Uk,persistence:[YO,FO,zv]}),r=Jm("authTokenSyncURL");if(r){const i=Kk(r);DO(n,i,()=>i(n.currentUser)),kO(n,o=>i(o))}const s=Qm("auth");return s&&_O(n,`http://${s}`),n}jk("Browser");const Wk={apiKey:"AIzaSyBEj_lvulwL921R6C-GKJN1eC4haiLIk0Q",authDomain:"vue3-2c548.firebaseapp.com",projectId:"vue3-2c548",storageBucket:"vue3-2c548.appspot.com",messagingSenderId:"975447172434",appId:"1:975447172434:web:d7afa045c68a84b2df468"};e_(Wk);const Wt=g1(),An=zk(),Gk="modulepreload",Qk=function(t){return"/fbvue3-exp/"+t},mg={},qt=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Qk(i),i in mg)return;mg[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Gk,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};const qn=async(t,e,n)=>{const r=Wa();r.loading=!0,await r.currentUser()?n():n("/login"),r.loading=!1},_g=async(t,e,n)=>{const r=Wa();r.loading=!0,await r.currentUser()?n("/"):n(),r.loading=!1},fa=SA({history:q0(),routes:[{path:"/",name:"home",component:()=>qt(()=>import("./HomeView-22b7a3d8.js"),[])},{path:"/savedlinks",name:"savedlinks",component:()=>qt(()=>import("./SavedLinks-10d42ca6.js"),["assets/SavedLinks-10d42ca6.js","assets/isValidUrl-f6fa981f.js","assets/triggerToast-d786ee57.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:qn},{path:"/login",name:"login",component:()=>qt(()=>import("./Login-da2fe7a3.js"),["assets/Login-da2fe7a3.js","assets/triggerToast-d786ee57.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:_g},{path:"/register",name:"register",component:()=>qt(()=>import("./Register-ca6f2199.js"),[]),beforeEnter:_g},{path:"/editlink/:id",name:"editlink",component:()=>qt(()=>import("./EditLink-c811b3fe.js"),["assets/EditLink-c811b3fe.js","assets/isValidUrl-f6fa981f.js","assets/triggerToast-d786ee57.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:qn},{path:"/cssexperiment",name:"cssexperiment",component:()=>qt(()=>import("./CssExperimentView-0b2b5bad.js"),["assets/CssExperimentView-0b2b5bad.js","assets/CssExperimentView-7ebbd2c9.css"])},{path:"/chat",name:"chat",component:()=>qt(()=>import("./Chat-cf1daf54.js"),["assets/Chat-cf1daf54.js","assets/Chat-a0b34440.css"]),beforeEnter:qn},{path:"/urlcollection",name:"urlcollection",component:()=>qt(()=>import("./UrlCollection-0c468c6d.js"),["assets/UrlCollection-0c468c6d.js","assets/colUrls-47eafada.js","assets/isValidUrl-f6fa981f.js","assets/triggerToast-d786ee57.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:qn},{path:"/editurlcollection:id",name:"editurlcollection",component:()=>qt(()=>import("./EditUrlCollection-a1cc561e.js"),["assets/EditUrlCollection-a1cc561e.js","assets/colUrls-47eafada.js","assets/isValidUrl-f6fa981f.js","assets/triggerToast-d786ee57.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:qn},{path:"/blog",name:"blog",component:()=>qt(()=>import("./Blog-a2526897.js"),["assets/Blog-a2526897.js","assets/blogPosts-6ccb5430.js","assets/triggerToast-d786ee57.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:qn},{path:"/editblog/:id",name:"editblog",component:()=>qt(()=>import("./EditBlog-d845e338.js"),["assets/EditBlog-d845e338.js","assets/blogPosts-6ccb5430.js","assets/triggerToast-d786ee57.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:qn},{path:"/myblogposts",name:"myblogposts",component:()=>qt(()=>import("./MyBlogPosts-b24a3660.js"),["assets/MyBlogPosts-b24a3660.js","assets/blogPosts-6ccb5430.js","assets/triggerToast-d786ee57.js","assets/triggerToast-b6cc1770.css"]),beforeEnter:qn}]});let Yk=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");const yg=fh("database",()=>{let t=He([]),e=He(!1);return{documents:t,loadingDoc:e,getUrls:async()=>{e.value=!0;try{const a=$u(bi(Wt,"urls"),Qp("user","==",An.currentUser.uid));(await Xp(a)).forEach(l=>{t.value.push({id:l.id,...l.data()})})}catch(a){console.log(a)}finally{e.value=!1}},leerUrl:async a=>{e.value=!0;try{const c=Pr(Wt,"urls",a),l=await ca(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==An.currentUser.uid)throw new Error("No es dueño del documento");return l.data().name}catch(c){console.log(c.message)}finally{e.value=!1}},updateUrl:async(a,c)=>{e.value=!0;try{const l=Pr(Wt,"urls",a),u=await ca(l);if(!u.exists())throw new Error("no existe el doc");if(u.data().user===An.currentUser.uid)await k1(l,{name:c}),t.value=t.value.map(h=>h.id===a?{...h,name:c}:h);else throw new Error("no eres el autor")}catch(l){console.log(l.message)}finally{e.value=!1}},addUrl:async a=>{try{let c,l;do{c=Yk(8);const d=bi(Wt,"urls"),p=$u(d,Qp("short","==",c));l=!(await Xp(p)).empty}while(l);const u={name:a,short:c,user:An.currentUser.uid},h=await Ev(bi(Wt,"urls"),u);t.value.push({...u,id:h.id})}catch(c){console.log(c)}},deleteUrl:async a=>{try{const c=Pr(Wt,"urls",a),l=await ca(c);if(!l.exists())throw new Error("doc no existe");if(l.data().user!==An.currentUser.uid)throw new Error("No es dueño del documento");await D1(Pr(Wt,"urls",a)),t.value=t.value.filter(u=>u.id!==a)}catch(c){console.log(c.message)}}}});var Zv={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(ls,function(){var n=1e3,r=6e4,s=36e5,i="millisecond",o="second",a="minute",c="hour",l="day",u="week",h="month",d="quarter",p="year",y="date",E="Invalid Date",T=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,V={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(ne){var U=["th","st","nd","rd"],b=ne%100;return"["+ne+(U[(b-20)%10]||U[b]||U[0])+"]"}},q=function(ne,U,b){var L=String(ne);return!L||L.length>=U?ne:""+Array(U+1-L.length).join(b)+ne},N={s:q,z:function(ne){var U=-ne.utcOffset(),b=Math.abs(U),L=Math.floor(b/60),O=b%60;return(U<=0?"+":"-")+q(L,2,"0")+":"+q(O,2,"0")},m:function ne(U,b){if(U.date()<b.date())return-ne(b,U);var L=12*(b.year()-U.year())+(b.month()-U.month()),O=U.clone().add(L,h),se=b-O<0,$=U.clone().add(L+(se?-1:1),h);return+(-(L+(b-O)/(se?O-$:$-O))||0)},a:function(ne){return ne<0?Math.ceil(ne)||0:Math.floor(ne)},p:function(ne){return{M:h,y:p,w:u,d:l,D:y,h:c,m:a,s:o,ms:i,Q:d}[ne]||String(ne||"").toLowerCase().replace(/s$/,"")},u:function(ne){return ne===void 0}},ee="en",ie={};ie[ee]=V;var we="$isDayjsObject",B=function(ne){return ne instanceof Ge||!(!ne||!ne[we])},G=function ne(U,b,L){var O;if(!U)return ee;if(typeof U=="string"){var se=U.toLowerCase();ie[se]&&(O=se),b&&(ie[se]=b,O=se);var $=U.split("-");if(!O&&$.length>1)return ne($[0])}else{var ye=U.name;ie[ye]=U,O=ye}return!L&&O&&(ee=O),O||!L&&ee},Y=function(ne,U){if(B(ne))return ne.clone();var b=typeof U=="object"?U:{};return b.date=ne,b.args=arguments,new Ge(b)},ae=N;ae.l=G,ae.i=B,ae.w=function(ne,U){return Y(ne,{locale:U.$L,utc:U.$u,x:U.$x,$offset:U.$offset})};var Ge=function(){function ne(b){this.$L=G(b.locale,null,!0),this.parse(b),this.$x=this.$x||b.x||{},this[we]=!0}var U=ne.prototype;return U.parse=function(b){this.$d=function(L){var O=L.date,se=L.utc;if(O===null)return new Date(NaN);if(ae.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var $=O.match(T);if($){var ye=$[2]-1||0,ve=($[7]||"0").substring(0,3);return se?new Date(Date.UTC($[1],ye,$[3]||1,$[4]||0,$[5]||0,$[6]||0,ve)):new Date($[1],ye,$[3]||1,$[4]||0,$[5]||0,$[6]||0,ve)}}return new Date(O)}(b),this.init()},U.init=function(){var b=this.$d;this.$y=b.getFullYear(),this.$M=b.getMonth(),this.$D=b.getDate(),this.$W=b.getDay(),this.$H=b.getHours(),this.$m=b.getMinutes(),this.$s=b.getSeconds(),this.$ms=b.getMilliseconds()},U.$utils=function(){return ae},U.isValid=function(){return this.$d.toString()!==E},U.isSame=function(b,L){var O=Y(b);return this.startOf(L)<=O&&O<=this.endOf(L)},U.isAfter=function(b,L){return Y(b)<this.startOf(L)},U.isBefore=function(b,L){return this.endOf(L)<Y(b)},U.$g=function(b,L,O){return ae.u(b)?this[L]:this.set(O,b)},U.unix=function(){return Math.floor(this.valueOf()/1e3)},U.valueOf=function(){return this.$d.getTime()},U.startOf=function(b,L){var O=this,se=!!ae.u(L)||L,$=ae.p(b),ye=function(M,K){var pe=ae.w(O.$u?Date.UTC(O.$y,K,M):new Date(O.$y,K,M),O);return se?pe:pe.endOf(l)},ve=function(M,K){return ae.w(O.toDate()[M].apply(O.toDate("s"),(se?[0,0,0,0]:[23,59,59,999]).slice(K)),O)},Te=this.$W,Ve=this.$M,Qe=this.$D,Me="set"+(this.$u?"UTC":"");switch($){case p:return se?ye(1,0):ye(31,11);case h:return se?ye(1,Ve):ye(0,Ve+1);case u:var I=this.$locale().weekStart||0,H=(Te<I?Te+7:Te)-I;return ye(se?Qe-H:Qe+(6-H),Ve);case l:case y:return ve(Me+"Hours",0);case c:return ve(Me+"Minutes",1);case a:return ve(Me+"Seconds",2);case o:return ve(Me+"Milliseconds",3);default:return this.clone()}},U.endOf=function(b){return this.startOf(b,!1)},U.$set=function(b,L){var O,se=ae.p(b),$="set"+(this.$u?"UTC":""),ye=(O={},O[l]=$+"Date",O[y]=$+"Date",O[h]=$+"Month",O[p]=$+"FullYear",O[c]=$+"Hours",O[a]=$+"Minutes",O[o]=$+"Seconds",O[i]=$+"Milliseconds",O)[se],ve=se===l?this.$D+(L-this.$W):L;if(se===h||se===p){var Te=this.clone().set(y,1);Te.$d[ye](ve),Te.init(),this.$d=Te.set(y,Math.min(this.$D,Te.daysInMonth())).$d}else ye&&this.$d[ye](ve);return this.init(),this},U.set=function(b,L){return this.clone().$set(b,L)},U.get=function(b){return this[ae.p(b)]()},U.add=function(b,L){var O,se=this;b=Number(b);var $=ae.p(L),ye=function(Ve){var Qe=Y(se);return ae.w(Qe.date(Qe.date()+Math.round(Ve*b)),se)};if($===h)return this.set(h,this.$M+b);if($===p)return this.set(p,this.$y+b);if($===l)return ye(1);if($===u)return ye(7);var ve=(O={},O[a]=r,O[c]=s,O[o]=n,O)[$]||1,Te=this.$d.getTime()+b*ve;return ae.w(Te,this)},U.subtract=function(b,L){return this.add(-1*b,L)},U.format=function(b){var L=this,O=this.$locale();if(!this.isValid())return O.invalidDate||E;var se=b||"YYYY-MM-DDTHH:mm:ssZ",$=ae.z(this),ye=this.$H,ve=this.$m,Te=this.$M,Ve=O.weekdays,Qe=O.months,Me=O.meridiem,I=function(K,pe,g,m){return K&&(K[pe]||K(L,se))||g[pe].slice(0,m)},H=function(K){return ae.s(ye%12||12,K,"0")},M=Me||function(K,pe,g){var m=K<12?"AM":"PM";return g?m.toLowerCase():m};return se.replace(P,function(K,pe){return pe||function(g){switch(g){case"YY":return String(L.$y).slice(-2);case"YYYY":return ae.s(L.$y,4,"0");case"M":return Te+1;case"MM":return ae.s(Te+1,2,"0");case"MMM":return I(O.monthsShort,Te,Qe,3);case"MMMM":return I(Qe,Te);case"D":return L.$D;case"DD":return ae.s(L.$D,2,"0");case"d":return String(L.$W);case"dd":return I(O.weekdaysMin,L.$W,Ve,2);case"ddd":return I(O.weekdaysShort,L.$W,Ve,3);case"dddd":return Ve[L.$W];case"H":return String(ye);case"HH":return ae.s(ye,2,"0");case"h":return H(1);case"hh":return H(2);case"a":return M(ye,ve,!0);case"A":return M(ye,ve,!1);case"m":return String(ve);case"mm":return ae.s(ve,2,"0");case"s":return String(L.$s);case"ss":return ae.s(L.$s,2,"0");case"SSS":return ae.s(L.$ms,3,"0");case"Z":return $}return null}(K)||$.replace(":","")})},U.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},U.diff=function(b,L,O){var se,$=this,ye=ae.p(L),ve=Y(b),Te=(ve.utcOffset()-this.utcOffset())*r,Ve=this-ve,Qe=function(){return ae.m($,ve)};switch(ye){case p:se=Qe()/12;break;case h:se=Qe();break;case d:se=Qe()/3;break;case u:se=(Ve-Te)/6048e5;break;case l:se=(Ve-Te)/864e5;break;case c:se=Ve/s;break;case a:se=Ve/r;break;case o:se=Ve/n;break;default:se=Ve}return O?se:ae.a(se)},U.daysInMonth=function(){return this.endOf(h).$D},U.$locale=function(){return ie[this.$L]},U.locale=function(b,L){if(!b)return this.$L;var O=this.clone(),se=G(b,L,!0);return se&&(O.$L=se),O},U.clone=function(){return ae.w(this.$d,this)},U.toDate=function(){return new Date(this.valueOf())},U.toJSON=function(){return this.isValid()?this.toISOString():null},U.toISOString=function(){return this.$d.toISOString()},U.toString=function(){return this.$d.toUTCString()},ne}(),rt=Ge.prototype;return Y.prototype=rt,[["$ms",i],["$s",o],["$m",a],["$H",c],["$W",l],["$M",h],["$y",p],["$D",y]].forEach(function(ne){rt[ne[1]]=function(U){return this.$g(U,ne[0],ne[1])}}),Y.extend=function(ne,U){return ne.$i||(ne(U,Ge,Y),ne.$i=!0),Y},Y.locale=G,Y.isDayjs=B,Y.unix=function(ne){return Y(1e3*ne)},Y.en=ie[ee],Y.Ls=ie,Y.p={},Y})})(Zv);var Jk=Zv.exports;const Xk=dh(Jk),Zk=fh("chatmsgs",()=>{let t=He([]),e=He(!1),n=null;const r=Se(()=>[...t.value].reverse());return{documents:t,reversedDocuments:r,loadingDoc:e,getAllMsgs:()=>{e.value=!0;try{const o=$u(bi(Wt,"chats"),S1("createdAt","desc"),b1(7));return n=N1(o,a=>{t.value=a.docs.map(c=>({id:c.id,...c.data()})),e.value=!1}),n}catch(o){console.log(o),e.value=!1}},sendMsgs:async(o,a)=>{try{const c=Xk().toDate(),l=Ze.fromDate(c),u={msg:o,sender:a,createdAt:l};await Ev(bi(Wt,"chats"),u)}catch(c){console.error("Error enviando mensaje: ",c)}}}}),Wa=fh("user",()=>{let t=He(null),e=He(!1),n=He(!1);return{loadingUser:e,loading:n,userData:t,registerUser:async(a,c,l)=>{e.value=!0;try{const{user:u}=await CO(An,a,c);t.value={email:u.email,uid:u.uid,nombre:l},await O1(Pr(Wt,"users",u.uid),{nombre:l,email:u.email,uid:u.uid}),fa.push("/")}catch(u){console.error(u),t.value=null}finally{e.value=!1}},loginUser:async(a,c)=>{e.value=!0;try{const{user:l}=await OO(An,a,c);t.value={email:l.email,uid:l.uid},fa.push("/")}catch(l){l.code==="auth/user-not-found"?alert("No se encontró ningún usuario con esa dirección de correo electrónico."):l.code==="auth/wrong-password"?alert("Clave equivocada"):(console.log(l),t.value=null)}finally{e.value=!1}},logoutUser:async(a,c)=>{yg(),Zk();try{await VO(An)}catch(l){console.log(l)}finally{t.value=null,n.value=!1,fa.push("/login")}},currentUser:()=>new Promise((a,c)=>{const l=NO(An,async u=>{if(u){const h=Pr(Wt,"users",u.uid),p=(await ca(h)).data();t.value={email:u.email,uid:u.uid,nombre:p.nombre}}else t.value=null,yg();a(u),l()},u=>c(u))})}});const eD={class:"row"},tD={key:0,class:"d-flex"},nD=["checked"],rD=ze("label",{for:"swc",class:"swc-label me-2","aria-label":"cambio a modo oscuro o claro",tabindex:"7"},[ze("span",{class:"swc-inner"}),ze("span",{class:"swc-switch"}),ze("span",{class:"swc-switch-mask"})],-1),sD={key:1},iD={__name:"CustomHeader",props:{isDark:{type:Boolean}},emits:["toggleDark"],setup(t){const e=Wa();return(n,r)=>{const s=AI("router-link");return Kn(),ai("header",null,[ze("nav",eD,[ot(Wa).loading?(Kn(),ai("div",sD,"Loading user...")):(Kn(),ai("ul",tD,[ze("li",null,[_e(s,{to:"/",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"1"},{default:on(()=>[an("Inicio ")]),_:1},8,["class"])]),ze("li",null,[_e(s,{to:"/blog",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"2"},{default:on(()=>[an("Blog ")]),_:1},8,["class"])]),ze("li",null,[_e(s,{to:"/myblogposts",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"2"},{default:on(()=>[an("Mi Blog Personal ")]),_:1},8,["class"])]),ze("li",null,[_e(s,{to:"/chat",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"3"},{default:on(()=>[an("Chat ")]),_:1},8,["class"])]),ze("li",null,[_e(s,{to:"/savedlinks",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"]),tabindex:"4"},{default:on(()=>[an("Mis Links ")]),_:1},8,["class"])]),ze("li",null,[_e(s,{to:"/cssexperiment",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"]),tabindex:"5"},{default:on(()=>[an("Css tricks ")]),_:1},8,["class"])]),ze("li",null,[_e(s,{to:"/urlcollection",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"]),tabindex:"7"},{default:on(()=>[an("Mis Urls ")]),_:1},8,["class"])]),ze("li",null,[ze("input",{type:"checkbox",id:"swc",class:"swc-checkbox",checked:t.isDark,onChange:r[0]||(r[0]=i=>n.$emit("toggleDark"))},null,40,nD),rD]),ze("li",null,[ot(e).userData?fl("",!0):(Kn(),Xl(s,{key:0,to:"/login",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"])},{default:on(()=>[an("Login ")]),_:1},8,["class"]))]),ze("li",null,[ot(e).userData?fl("",!0):(Kn(),Xl(s,{key:0,to:"/register",class:Dt(["btn col me-2",t.isDark?"btn-outline-primary bd-dark":"btn-primary"])},{default:on(()=>[an("Register ")]),_:1},8,["class"]))]),ze("li",null,[ot(e).userData?(Kn(),ai("button",{key:0,class:"btn btn-primary",onClick:r[1]||(r[1]=(...i)=>ot(e).logoutUser&&ot(e).logoutUser(...i))},"Logout ")):fl("",!0)])]))])])}}};const oD=ze("div",null,"Veamos",-1),aD={class:"container-fluid"},cD={__name:"App",setup(t){const e=GA({selector:"body",valueDark:"bd-dark",valueLight:"bd-light"}),n=LA(e);return(r,s)=>(Kn(),ai(Gt,null,[_e(iD,{isDark:ot(e),onToggleDark:ot(n),class:Dt(["container my-2 p-4",ot(e)?"bg-dark":"bg-light"])},null,8,["isDark","onToggleDark","class"]),oD,ze("div",aD,[ze("main",{class:Dt(["container my-2 p-4",ot(e)?"bg-dark":"bg-light"])},[_e(ot($m))],2)])],64))}},bo=pm(cD);bo.use(PT);const eE=DT();eE.use(OT);bo.use(eE);bo.use(fa);bo.use(Cm);bo.mount("#app");export{S1 as A,b1 as B,N1 as C,Xk as D,Ev as E,Gt as F,nr as G,fh as H,Qp as I,An as J,Xp as K,Pr as L,ca as M,Yk as N,k1 as O,ED as P,D1 as Q,Ue as R,Ze as T,_e as a,gD as b,ai as c,yg as d,ro as e,ze as f,ot as g,uD as h,dD as i,an as j,qe as k,mD as l,Gu as m,Dt as n,Kn as o,Se as p,sc as q,He as r,hD as s,lD as t,Wa as u,fD as v,pD as w,$u as x,bi as y,Wt as z};
