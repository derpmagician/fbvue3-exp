import{h as D,r as g,o as B,a as n,c as a,b as s,w as M,j as p,v as b,n as _,e as r,F as x,k as P,d as v,t as m,D as S}from"./index-1ddce23d.js";import{u as T}from"./blogPosts-14444641.js";import{u as w}from"./triggerToast-a0cb4fe4.js";const C={class:"savedl"},V=s("h2",null,"Mi Personal Blog",-1),I=s("br",null,null,-1),Y=["onSubmit"],$={class:"mt-3 col-sm-12"},U={class:"mt-3 col-sm-12"},j={class:"mt-3 col-sm-12"},E={class:"mt-3 d-grid gap-2"},F={key:0},H={key:1},L=s("br",null,null,-1),N=s("br",null,null,-1),z=["src"],A=["onClick"],R=["onClick"],K={__name:"MyBlogPosts",props:{isDark:{type:Boolean}},setup(d){const h=D(),e=T(),u=g(""),c=g(""),i=g(""),k=l=>{if(!l)return"";const t=l.toDate();return S(t).format("DD/MM/YYYY HH:mm:ss")};B(()=>{e.$reset(),e.getMyBlogPosts()});const y=()=>{e.addBlogPost(u.value,i.value,c.value);const{triggerToast:l}=w("success");l()};return(l,t)=>(n(),a("div",C,[V,I,s("div",null,[s("form",{onSubmit:M(y,["prevent"]),class:"input-group input-group-sm mb-3 row"},[s("div",$,[p(s("input",{class:"form-control",type:"text",placeholder:"Ingrese Titulo","onUpdate:modelValue":t[0]||(t[0]=o=>u.value=o)},null,512),[[b,u.value]])]),s("div",U,[p(s("input",{class:"form-control",type:"text",placeholder:"Ingrese Image","onUpdate:modelValue":t[1]||(t[1]=o=>c.value=o)},null,512),[[b,c.value]])]),s("div",j,[p(s("textarea",{class:"form-control",id:"contenido",placeholder:"Ingrese Contenido",name:"detail",rows:"4","onUpdate:modelValue":t[2]||(t[2]=o=>i.value=o)},`\r
          `,512),[[b,i.value]])]),s("div",E,[s("button",{type:"submit",class:_(["btn",d.isDark?"btn-outline-primary  bd-dark ":"btn-primary"])}," Agregar ",2)])],40,Y)]),r(e).loadingDoc?(n(),a("div",F,"Loading docs...")):(n(),a("div",H,[s("ul",null,[(n(!0),a(x,null,P(r(e).documents,o=>(n(),a("li",{key:o==null?void 0:o.id},[v(m(k(o==null?void 0:o.date))+" "+m(o==null?void 0:o.titulo)+" ",1),L,v(" "+m(o==null?void 0:o.detalle),1),N,s("img",{src:o==null?void 0:o.image,class:"w-50"},null,8,z),s("button",{onClick:f=>r(h).push(`/editblog/${o.id}`),class:_(["btn col me-2",d.isDark?"btn-outline-primary  bd-dark ":"btn-primary"])},"Edit",10,A),s("button",{onClick:f=>r(e).deleteBlogPost(o.id),class:_(["btn col me-2",d.isDark?"btn-outline-primary  bd-dark ":"btn-danger"])},"Delete",10,R)]))),128))])]))]))}};export{K as default};