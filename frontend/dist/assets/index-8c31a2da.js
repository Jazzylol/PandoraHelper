import{z as e,c as s,j as i,v as t,i as n,B as l,w as a}from"./index-82a332fb.js";import{T as r}from"./index-381683c9.js";import{R as c,P as o}from"./Pagination-c9e9a7fe.js";function d(){const{setLocale:d,locale:h,language:{icon:x,label:m}}=e(),{colorPrimary:j}=s();return i.jsxs(t,{direction:"vertical",size:"middle",style:{display:"flex"},children:[i.jsx(r.Link,{href:"https://www.i18next.com/",style:{color:j},children:"https://www.i18next.com"}),i.jsx(r.Link,{href:"https://ant.design/docs/react/i18n-cn",style:{color:j},children:"https://ant.design/docs/react/i18n-cn"}),i.jsxs(n,{title:"Flexible",children:[i.jsxs(c.Group,{onChange:e=>d(e.target.value),value:h,children:[i.jsx(c,{value:l.en_US,children:"English"}),i.jsx(c,{value:l.zh_CN,children:"Chinese"})]}),i.jsxs("div",{className:"flex items-center text-4xl",children:[i.jsx(a,{icon:x,className:"mr-4 rounded-md",size:"30"}),m]})]}),i.jsx(n,{title:"System",children:i.jsx(o,{defaultCurrent:1,total:50,showSizeChanger:!0,showQuickJumper:!0})})]})}export{d as default};