import{r as e,j as t,i as o}from"./index-52b3c3fe.js";import n from"./control-panel-0972a578.js";import s from"./container-4eb7a301.js";import i from"./toolbar-f46c6fd9.js";import{R as u,C as a}from"./row-63b2304c.js";import"./cover_3-dba27d2f.js";import"./motion-container-8cf04fab.js";import"./bounce-60412db4.js";import"./transition-8bc41415.js";import"./index-85185b56.js";import"./fade-6abf311c.js";import"./ReloadOutlined-c0c5cd02.js";const l=[{type:"slide in",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"slide out",values:["slideOutUp","slideOutDown","slideOutLeft","slideOutRight"]},{type:"fade in",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"fade out",values:["fadeOut","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight"]},{type:"zoom in",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"zoom out",values:["zoomOut","zoomOutUp","zoomOutDown","zoomOutLeft","zoomOutRight"]},{type:"bounce in",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"bounce out",values:["bounceOut","bounceOutUp","bounceOutDown","bounceOutLeft","bounceOutRight"]},{type:"flip in",values:["flipInX","flipInY"]},{type:"flip out",values:["flipOutX","flipOutY"]},{type:"scale in",values:["scaleInX","scaleInY"]},{type:"scale out",values:["scaleOutX","scaleOutY"]},{type:"rotate in",values:["rotateIn"]},{type:"rotate out",values:["rotateOut"]}];function r(){const r=e.useMemo((()=>({isText:!1,isMulti:!1,selectedVariant:"slideInUp"})),[]),[p,d]=e.useState(r.isText),[c,f]=e.useState(r.isMulti),[m,O]=e.useState(r.selectedVariant);return t.jsxs(o,{children:[t.jsx(u,{children:t.jsx(a,{xs:24,md:18,children:t.jsx(i,{isText:p,onChnageText:()=>d(!p),isMulti:c,onChangeMulti:()=>f(!c),onRefresh:()=>{d(r.isText),f(r.isMulti),O(r.selectedVariant)}})})}),t.jsxs(u,{justify:"space-between",children:[t.jsx(a,{xs:24,md:18,children:t.jsx(s,{variant:m,isText:p,isMulti:c})}),t.jsx(a,{xs:24,md:5,children:t.jsx(n,{variantKey:l,selectedVariant:m,onChangeVarient:e=>O(e)})})]})]})}export{r as default};