import{_ as j}from"./index-BkhLq4fL.js";import{_ as q}from"./index-CS5NO12N.js";import{_ as E}from"./index.vuevuetypescriptsetuptruelang-O913YC12.js";import{r as h,K as $,I as H,n as G,o as Z,w as J,x as Q,q as W,N as X,S as ee,z as le,E as ae,O as te,H as ne,F as se,P as oe,T as ue}from"./antd-Ca0Vg3PV.js";import{d as de,r as D,f as v,w as ie,$ as re,a6 as pe,a9 as s,k as l,Z as a,G as o,l as U,u as t,a5 as g,H as p,F as me}from"./vue-BrVXbuSH.js";import{_ as ce}from"./plugin-vueexport-helper-DlAUqK2U.js";const _e={class:"mb-2"},fe={class:"mb-2"},ve={class:"mb-2"},be={class:"flex justify-between items-center w-full"},ke={class:"ms-2 ant-select-suffix"},ge={class:"ms-2 ant-select-suffix"},we={class:"rotate-0 overflow-hidden flex items-center"},xe=de({__name:"analysis",setup(ye){const b=D({pass:"",checkPass:""}),F={pass:[{required:!0,trigger:"change"}]},A=v([{value:"a1",label:"a1"},{value:"a2",label:"a2"},{value:"a3",label:"a3"},{value:"a4",label:"a4"},{value:"a5",label:"a5"},{value:"a6",label:"a6"}]),i=v([]),_=v(),u=v(!1),k=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}],m=D({indeterminate:!0,checkAll:!1,checkedList:["Apple"]});function K(f){Object.assign(m,{checkedList:f.target.checked?k:[],indeterminate:!1})}ie(()=>m.checkedList,f=>{m.indeterminate=!!f.length&&f.length<k.length,m.checkAll=f.length===k.length});const w=v("1"),x=v("");return(f,e)=>{const d=E,I=H,c=G,r=Z,C=J,L=q,O=Q,P=W,S=X,T=ee,N=le,R=ae,Y=te,V=ne,z=se,y=oe,B=ue,M=j;return re(),pe(me,null,[s("div",null,[s("div",_e,[e[17]||(e[17]=s("h2",{h2:"","mb-6":""}," small1 btn list ",-1)),l(d,{color:"primary",class:"me-2"},{default:a(()=>e[14]||(e[14]=[o(" 編輯 ")])),_:1}),l(d,{color:"primary",disabled:"",class:"me-2"},{default:a(()=>e[15]||(e[15]=[o(" 編輯 disabled ")])),_:1}),l(d,{color:"primary",icon:U(t(h)),class:"me-2"},{default:a(()=>e[16]||(e[16]=[o(" 編輯wihtIcon ")])),_:1},8,["icon"])]),s("div",fe,[e[21]||(e[21]=s("h2",{h2:"","mb-6":""}," small2 btn list ",-1)),l(d,{color:"secondary",class:"me-2"},{default:a(()=>e[18]||(e[18]=[o(" 編輯 ")])),_:1}),l(d,{color:"secondary",disabled:"",class:"me-2"},{default:a(()=>e[19]||(e[19]=[o(" 編輯 disabled ")])),_:1}),l(d,{color:"secondary",icon:U(t(h)),class:"me-2"},{default:a(()=>e[20]||(e[20]=[o(" 編輯wihtIcon ")])),_:1},8,["icon"])]),s("div",ve,[e[25]||(e[25]=s("h2",{h2:"","mb-6":""}," small3 btn list ",-1)),l(d,{color:"link",class:"me-2"},{default:a(()=>e[22]||(e[22]=[o(" 編輯 ")])),_:1}),l(d,{color:"link",disabled:"",class:"me-2 underline"},{default:a(()=>e[23]||(e[23]=[o(" 編輯 underline ")])),_:1}),l(d,{color:"link",icon:U(t(h)),class:"me-2"},{default:a(()=>e[24]||(e[24]=[o(" 編輯wihtIcon ")])),_:1},8,["icon"])])]),s("div",null,[e[34]||(e[34]=s("h2",null,"Form 表單",-1)),l(z,{layout:"vertical",model:t(b),rules:F,"label-col":{span:24}},{default:a(()=>[l(P,{gutter:12},{default:a(()=>[l(r,{span:12},{default:a(()=>[l(c,{name:"pass","label-align":"right",extra:"補充資訊"},{label:a(()=>[s("div",be,[e[27]||(e[27]=s("span",null,"Price",-1)),l(d,{type:"link",class:"m-0 p-0"},{default:a(()=>e[26]||(e[26]=[o(" 新增 ")])),_:1})])]),default:a(()=>[l(I,{value:t(b).pass,"onUpdate:value":e[0]||(e[0]=n=>t(b).pass=n),disabled:""},null,8,["value"])]),_:1})]),_:1}),l(r,{span:12},{default:a(()=>[l(c,{name:"value",extra:"補充資訊"},{label:a(()=>e[28]||(e[28]=[s("span",{"w.5":""},g(""),-1)])),default:a(()=>[l(C,{value:t(i),"onUpdate:value":e[1]||(e[1]=n=>p(i)?i.value=n:null),class:"testSelect","show-arrow":!0,"show-search":!1,"token-separators":[","],placeholder:"Automatic tokenization",options:t(A),"menu-item-selected-icon":()=>""},{suffixIcon:a(()=>[s("div",ke,[o(g(t(i).length>0?`已選擇(${t(i).length})`:"")+" ",1),l(t($))])]),_:1},8,["value","options"])]),_:1})]),_:1}),l(r,{span:12},{default:a(()=>[l(c,{name:"value",extra:"補充資訊"},{label:a(()=>e[29]||(e[29]=[s("span",{"w.5":""},g(""),-1)])),default:a(()=>[l(C,{value:t(i),"onUpdate:value":e[2]||(e[2]=n=>p(i)?i.value=n:null),class:"testSelect",mode:"tags","show-arrow":!0,"show-search":!1,"token-separators":[","],placeholder:"Automatic tokenization",options:t(A),"menu-item-selected-icon":()=>""},{suffixIcon:a(()=>[s("div",ge,[o(g(t(i).length>0?`已選擇(${t(i).length})`:"")+" ",1),l(t($))])]),_:1},8,["value","options"])]),_:1})]),_:1}),l(r,{span:12},{default:a(()=>[l(c,{name:"pass",label:"Price",extra:"補充資訊"},{default:a(()=>[l(I,{value:t(b).pass,"onUpdate:value":e[3]||(e[3]=n=>t(b).pass=n)},{prefix:a(()=>[l(L,{name:"search",width:"16px",color:"var(--grayscale-40)"})]),suffix:a(()=>[s("span",we,[l(L,{name:"filter",width:"24px",color:"var(--grayscale-80)",class:"hover:bg-sms-secondary-dark-blue-20 hover:rounded-full"})])]),_:1},8,["value"])]),_:1})]),_:1}),l(r,{span:12},{default:a(()=>[l(P,{gutter:12},{default:a(()=>[l(r,{span:12},{default:a(()=>[l(c,{name:"value1",label:"date",extra:"補充資訊"},{default:a(()=>[l(O,{value:t(_),"onUpdate:value":e[4]||(e[4]=n=>p(_)?_.value=n:null),class:"w-full",placeholder:"YYYY/MM/DD",placement:"topLeft"},null,8,["value"])]),_:1})]),_:1}),l(r,{span:12},{default:a(()=>[l(c,{name:"value1",label:"date disabled",extra:"補充資訊"},{default:a(()=>[l(O,{value:t(_),"onUpdate:value":e[5]||(e[5]=n=>p(_)?_.value=n:null),class:"w-full",disabled:"",placement:"topLeft"},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1}),l(r,{span:12},{default:a(()=>[l(T,null,{default:a(()=>[l(c,{name:"checked",label:"switch",extra:"補充資訊"},{default:a(()=>[l(S,{checked:t(u),"onUpdate:checked":e[6]||(e[6]=n=>p(u)?u.value=n:null)},null,8,["checked"])]),_:1}),l(c,{name:"checked",label:"switch disabled",extra:"補充資訊"},{default:a(()=>[l(S,{checked:t(u),"onUpdate:checked":e[7]||(e[7]=n=>p(u)?u.value=n:null),disabled:""},null,8,["checked"])]),_:1})]),_:1})]),_:1}),l(r,{span:12},{default:a(()=>[l(T,null,{default:a(()=>[s("div",null,[l(N,{checked:t(m).checkAll,"onUpdate:checked":e[8]||(e[8]=n=>t(m).checkAll=n),indeterminate:t(m).indeterminate,onChange:K},{default:a(()=>e[30]||(e[30]=[o(" Check all ")])),_:1},8,["checked","indeterminate"])]),l(R),l(Y,{value:t(m).checkedList,"onUpdate:value":e[9]||(e[9]=n=>t(m).checkedList=n),options:k},null,8,["value"])]),_:1})]),_:1})]),_:1}),l(r,{span:12},{default:a(()=>[l(V,{checked:t(u),"onUpdate:checked":e[10]||(e[10]=n=>p(u)?u.value=n:null)},{default:a(()=>e[31]||(e[31]=[o(" Radio ")])),_:1},8,["checked"]),l(V,{checked:t(u),"onUpdate:checked":e[11]||(e[11]=n=>p(u)?u.value=n:null),disabled:""},{default:a(()=>e[32]||(e[32]=[o(" Radio ")])),_:1},8,["checked"])]),_:1}),l(c,null,{default:a(()=>[l(d,{color:"primary",class:"me-2","html-type":"submit"},{default:a(()=>e[33]||(e[33]=[o(" 送出 ")])),_:1})]),_:1})]),_:1},8,["model"]),l(B,{"active-key":t(w),"onUpdate:activeKey":e[12]||(e[12]=n=>p(w)?w.value=n:null),type:"card"},{default:a(()=>[l(y,{key:"1",tab:"Tab 1"}),l(y,{key:"2",tab:"Tab 2"}),l(y,{key:"3",tab:"Tab 3"})]),_:1},8,["active-key"]),l(M,{modelValue:t(x),"onUpdate:modelValue":e[13]||(e[13]=n=>p(x)?x.value=n:null),options:[{value:"1",label:"test"},{value:"3",label:"test3"}]},null,8,["modelValue"])])],64)}}}),Oe=ce(xe,[["__scopeId","data-v-f06c34ab"]]);export{Oe as default};
