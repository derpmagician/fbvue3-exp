import{u,r as c,o as i,a as t,c as n,b as e,d as _,e as o,t as p,f as d,F as m,g as h}from"./index-1ddce23d.js";const f={key:0},B=e("p",null," Esta SPA fue hecha con Vue + Booststrap para demostrar las funcionalidades con Firebase. ",-1),N=e("p",null," Necesitas crear una cuenta para poder acceder a las páginas: ",-1),V=e("p",null," No necesitas verificar la cuenta ",-1),g=e("ul",null,[e("li",null," Blog "),e("li",null," Chat "),e("li",null," Links ")],-1),k={__name:"TheWelcome",setup(l){let a=u(),s=c("");return i(async()=>{await a.currentUser(),a.userData?s.value=a.userData.nombre:s.value=""}),(v,x)=>{var r;return t(),n(m,null,[e("h1",null,[_(" Bienvenido usuario "),(r=o(a))!=null&&r.userData?(t(),n("span",f,p(o(s)),1)):d("",!0)]),B,N,V,g],64)}}},S={__name:"HomeView",setup(l){return(a,s)=>(t(),n("main",null,[h(k)]))}};export{S as default};