import{q as S,r as w,s as U,x as h,y as n,z as f,A as i,B as y,C as p,D as x,E as m,G as v,H as C,I as q,J as E}from"./index-c9b0f481.js";const z=S("colUrls",()=>{let t=w([]),d=w(!1);return{documents:t,loadingDoc:d,getColUrls:async()=>{d.value=!0;try{const o=U(h(n,"colUrls"),f("users","array-contains",i.currentUser.uid));(await y(o)).forEach(s=>{t.value.push({id:s.id,...s.data()})})}catch(o){console.log(o)}finally{d.value=!1}},leerColUrl:async o=>{d.value=!0;try{const e=p(n,"colUrls",o),s=await x(e);if(!s.exists())throw new Error("doc no existe");return s.data().longUrl}catch(e){console.log(e.message)}finally{d.value=!1}},addColUrl:async o=>{try{const e=h(n,"colUrls");let s,a;do{s=m(8);const l=U(e,f("shortUrl","==",s));a=!(await y(l)).empty}while(a);const u=U(h(n,"colUrls"),f("longUrl","==",o)),r=await y(u);if(r.empty){const l={longUrl:o,shortUrl:s,users:[i.currentUser.uid]},c=await q(e,l);t.value.push({id:c.id,...l})}else{const l=p(n,"colUrls",r.docs[0].id);await v(l,{users:C(i.currentUser.uid)});const c={id:r.docs[0].id,...r.docs[0].data(),users:[...r.docs[0].data().users,i.currentUser.uid]},g=t.value.findIndex(D=>D.id===c.id);g!==-1?t.value[g]=c:t.value.push(c)}}catch(e){console.log(e)}},deleteColUrl:async o=>{try{const e=p(n,"colUrls",o),s=await x(e);if(!s.exists())throw new Error("Document does not exist");const a=s.data().users,u=a.indexOf(i.currentUser.uid);if(u===-1)throw new Error("User is not in the document");a.splice(u,1),a.length===0?await E(e):await v(e,{users:a});const r=t.value.findIndex(l=>l.id===o);r!==-1&&(a.length===0?t.value.splice(r,1):t.value[r]={id:o,...s.data(),users:a})}catch(e){console.log(e.message)}}}});export{z as u};