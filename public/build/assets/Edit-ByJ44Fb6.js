import{r as g,G as y,j as e,S as v,x as b}from"./app-DE0n4u-B.js";import{I as n}from"./InputLabel-B32mNwws.js";import{A as N}from"./AuthenticatedLayout-h3Sz89TV.js";import{S as o}from"./input-CAtO5vgr.js";import{j as w}from"./select-rKNTe0tj.js";import{H as S}from"./button-DFeFOJ1Z.js";import"./transition-CDqb_oFC.js";import"./description-D0OexOFX.js";function L({chapter:c,material:a}){const[r,u]=g.useState(a.type),{setData:i,data:C,errors:s,post:m,setError:x}=y({_method:"put",title:a.title,media:a.media,content:"",type:r});function h(t){t.preventDefault(),m(route("dashboard.material.update",{chapter:c.id,material:a.id}))}const p=t=>{const l=t.target.value;l==="media"&&i("content",null),i("type",l),u(l)},f=t=>{const l=/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,d=t.match(l);return d?d[1]:!1},j=t=>{t.preventDefault();const l=t.target.value;f(l)?i("content",l):x("content","Youtube url is not valid")};return e.jsxs(N,{isAdmin:!0,children:[e.jsx(v,{title:"Edit Classroom"}),e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"mt-10 rounded-lg bg-white p-10 text-accent",children:e.jsxs("form",{onSubmit:h,className:"flex flex-col gap-y-4",encType:"multipart/form-data",children:[e.jsx("h1",{className:"text-lg font-bold",children:"Material Edit Form"}),e.jsx("hr",{}),e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx(n,{children:"Title"}),e.jsx(o,{id:"title",type:"text",defaultValue:a.title,className:"h-10 w-full rounded-lg",onChange:t=>i("title",t.target.value)}),s.title&&e.jsx("div",{children:s.title})]}),e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx(n,{children:"Type"}),e.jsxs(w,{id:"type",className:"h-10 w-full rounded-lg",defaultValue:a.type,required:!0,onChange:p,children:[e.jsx("option",{value:"media",children:"Media"}),e.jsx("option",{value:"video",children:"Video"})]})]}),r&&r==="media"&&e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx(n,{children:"File Material"}),e.jsx(o,{id:"media",type:"file",className:"h-10 w-full rounded-lg border border-black px-3 py-1 text-sm",onChange:t=>i("media",t.target.files[0])}),e.jsx("a",{href:`/storage/${a.media}`,className:"text-blue-600",target:"_blank",rel:"noreferrer",children:"Open File"}),s.media&&e.jsx("div",{children:s.media})]}),r==="video"&&e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsx(n,{children:"Youtube URL"}),e.jsx(o,{id:"content",type:"text",defaultValue:a.content,className:"h-10 w-full rounded-lg",onChange:j}),s.content&&e.jsx("div",{children:s.content})]}),e.jsxs("div",{className:"flex w-full justify-between",children:[e.jsx(b,{href:route("dashboard.chapter.index",c.id),className:"text-primary",children:"Back"}),e.jsx(S,{type:"submit",className:"w-auto rounded-lg bg-primary px-3 py-1 text-lg text-white",children:"Save"})]})]})})})]})}export{L as default};
