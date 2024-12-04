import{q as c,r as m,j as e,Y as x,a as u,y as p}from"./app-BzAoBXTv.js";import{I as i}from"./InputLabel-Bcbl1ORD.js";import{A as h}from"./AuthenticatedLayout-VwwM4rUS.js";import{S as f}from"./input-B9ZpeIwR.js";import{J as j}from"./textarea-B_DUBDjG.js";import{H as g}from"./button-CKCoHrFl.js";import"./transition-CH7iv4xw.js";import"./description-DR9UDIPA.js";function A({classroom:t}){const{errors:s}=c().props,[l,n]=m.useState({name:t.name,description:t.description});function r(a){n(o=>({...o,[a.target.id]:a.target.value}))}function d(a){a.preventDefault(),p.put(route("dashboard.classroom.update",t.id),l)}return e.jsxs(h,{isAdmin:!0,children:[e.jsx(x,{title:"Edit Classroom"}),e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"mt-10 rounded-lg bg-white p-10 text-accent",children:e.jsxs("form",{onSubmit:d,className:"flex flex-col gap-y-4",children:[e.jsx("h1",{className:"text-lg font-bold",children:"Classroom Edit Form"}),e.jsx("hr",{}),e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx(i,{children:"Name"}),e.jsx(f,{id:"name",type:"text",value:t.name,className:"h-10 w-full rounded-lg",required:!0,onChange:r}),s.name&&e.jsx("div",{children:s.name})]}),e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx(i,{children:"Description"}),e.jsx(j,{id:"description",type:"text",className:"w-full rounded-lg",onChange:r,defaultValue:t.description}),s.description&&e.jsx("div",{children:s.description})]}),e.jsxs("div",{className:"flex w-full justify-between",children:[e.jsx(u,{href:route("dashboard.classroom.index"),className:"text-primary",children:"Back"}),e.jsx(g,{type:"submit",className:"w-auto rounded-lg bg-primary px-3 py-1 text-lg text-white",children:"Save"})]})]})})})]})}export{A as default};