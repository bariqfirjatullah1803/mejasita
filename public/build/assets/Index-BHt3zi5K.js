import{j as e,S as a,x as r}from"./app-DE0n4u-B.js";import{I as i}from"./InputLabel-B32mNwws.js";import{A as x}from"./AuthenticatedLayout-h3Sz89TV.js";import{j as o}from"./select-rKNTe0tj.js";import{S as d}from"./input-CAtO5vgr.js";import"./transition-CDqb_oFC.js";import"./description-D0OexOFX.js";function j({categories:t}){return e.jsxs(x,{isAdmin:!0,children:[e.jsx(a,{title:"List Answer"}),e.jsx("div",{className:"container mx-auto text-accent",children:e.jsxs("div",{className:"mt-10 rounded-lg bg-white p-4 text-start",children:[e.jsxs("div",{className:"mb-3 flex flex-col items-center justify-between gap-x-3 gap-y-3 lg:flex-row",children:[e.jsx("div",{className:"w-full",children:e.jsxs("form",{className:"flex w-full flex-col items-start gap-x-3 lg:flex-row lg:items-center",children:[e.jsx(i,{children:"Cari"}),e.jsx(d,{type:"text",className:"h-8 w-full rounded-lg text-xs lg:w-1/2"})]})}),e.jsxs("div",{className:"flex w-full flex-col items-start gap-x-3 gap-y-2 lg:flex-row lg:justify-end",children:[e.jsxs(o,{className:"h-8 w-full rounded-lg text-xs lg:w-auto",children:[e.jsx("option",{children:"10"}),e.jsx("option",{children:"50"}),e.jsx("option",{children:"100"})]}),e.jsx(r,{href:route("dashboard.category.index"),className:"w-full rounded-lg bg-primary px-3 py-1 text-white lg:w-auto",children:"Create New"})]})]}),e.jsx("div",{className:"relative flex h-full w-full flex-col overflow-auto rounded-lg bg-white bg-clip-border text-gray-700",children:e.jsxs("table",{className:"w-full min-w-max table-auto text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border-b border-slate-300 bg-primary p-4",children:e.jsx("p",{className:"block text-sm font-normal leading-none text-white",children:"Name"})}),e.jsx("th",{className:"border-b border-slate-300 bg-primary p-4",children:e.jsx("p",{className:"block text-sm font-normal leading-none text-white",children:"Action"})})]})}),e.jsx("tbody",{children:t.data.map((l,s)=>e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsx("td",{className:"border-b border-slate-200 p-4",children:e.jsx("p",{className:"block text-sm text-slate-800",children:l.name})}),e.jsxs("td",{className:"flex flex-row gap-x-3 border-b border-slate-200 p-4",children:[e.jsx("a",{href:"#",className:"block text-sm font-semibold text-slate-800",children:"Edit"}),"|",e.jsx("a",{href:"#",className:"block text-sm font-semibold text-slate-800",children:"Delete"})]})]},s))})]})}),e.jsxs("div",{className:"mt-3 flex flex-col items-center justify-between gap-y-3 lg:flex-row",children:[e.jsxs("div",{children:["Showing ",t.from," to ",t.to," total"," ",t.per_page]}),e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2",children:t.links.map((l,s)=>e.jsx(r,{href:l.url,className:`rounded border p-2 text-sm ${l.active?"border-primary bg-white text-accent hover:bg-primary hover:text-white":"bg-primary text-white hover:border-primary hover:bg-white hover:text-accent"}`,children:e.jsx("div",{dangerouslySetInnerHTML:{__html:l.label}})},s))})]})]})})]})}export{j as default};