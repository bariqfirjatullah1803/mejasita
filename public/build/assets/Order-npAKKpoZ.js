import{r as t,j as s}from"./app-BzAoBXTv.js";import{S as o}from"./react-sortable-list.esm-CuaHN3Bm.js";const i=()=>{const[e,m]=t.useState([{id:"1",name:"Item 1"},{id:"2",name:"Item 2"},{id:"3",name:"Item 3"}]);return t.useEffect(()=>{console.log(e)},[e]),s.jsx(o,{items:e,setItems:m,itemRender:({item:r})=>s.jsx("div",{className:"m-8 h-10 w-1/2 bg-blue-400 text-center",children:r.name})})};export{i as default};
