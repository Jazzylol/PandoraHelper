import{u as e,j as s,cD as o,ch as t}from"./index-f7ab5e13.js";import{u as a,s as i}from"./shareService-42d4394b.js";import{u as n,C as r}from"./useChart-b025ed96.js";function l({accountId:l,onOk:c,show:d}){const{data:h,isLoading:p}=a({queryKey:["shareInfo",l],queryFn:()=>i.getShareStatistic(l),enabled:d}),{t:u}=e(),g=n({legend:{horizontalAlign:"center"},stroke:{show:!0},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},xaxis:{categories:h?.categories||[]},tooltip:{fillSeriesColor:!1},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return s.jsx(o,{title:u("token.statistic"),open:d,onOk:c,closable:!1,onCancel:c,children:s.jsx(t,{spinning:p,tip:u("token.queryingInfo"),children:s.jsx(r,{type:"bar",series:h?.series||[],options:g,height:320})})})}export{l as ShareInfoModal};