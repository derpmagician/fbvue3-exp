import{u as g,b as f,d as y,r as S,e as m,o as n,c as r,f as e,t as i,g as a,w as D,h as U,v as T,n as u,F as C,i as L,j as c}from"./index-5fa23f58.js";import{u as V,a as b}from"./triggerToast-c908d617.js";const M={class:"savedl"},$=e("h2",null,"Mi List of Saved Links",-1),w=e("br",null,null,-1),B=["onSubmit"],x={key:0},E={key:1},F=e("br",null,null,-1),I=e("br",null,null,-1),N=["onClick"],j=["onClick"],q={__name:"SavedLinks",setup(z){const _=g(),p=f(),o=y(),l=S(""),{isValidUrl:h}=V(l);m(()=>{o.$reset(),o.getUrls()});const k=()=>{if(h.value){o.addUrl(l.value);const{triggerToast:t}=b("success");t()}else{const{triggerToast:t}=b("error");t()}};return(t,d)=>(n(),r("div",M,[$,e("h3",null,i(a(_).userData),1),w,e("div",null,[e("form",{onSubmit:D(k,["prevent"])},[U(e("input",{type:"text",placeholder:"Ingrese Url","onUpdate:modelValue":d[0]||(d[0]=s=>l.value=s)},null,512),[[T,l.value]]),e("button",{type:"submit",class:u(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"])},"Agregar",2)],40,B)]),a(o).loadingDoc?(n(),r("div",x,"Loading docs...")):(n(),r("div",E,[e("ul",null,[(n(!0),r(C,null,L(a(o).documents,s=>(n(),r("li",{key:s==null?void 0:s.id},[c(i(s==null?void 0:s.name)+" ",1),F,c(" "+i(s==null?void 0:s.short),1),I,e("button",{onClick:v=>a(p).push(`/editlink/${s.id}`),class:u(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-primary"])},"Edit",10,N),e("button",{onClick:v=>a(o).deleteUrl(s.id),class:u(["btn col me-2",t.isDark?"btn-outline-primary  bd-dark ":"btn-danger"])},"Delete",10,j)]))),128))])]))]))}};export{q as default};