import{r as l,j as e,a as c,q as g}from"./app-BzAoBXTv.js";import{z as u}from"./transition-CH7iv4xw.js";const m=l.createContext(),o=({children:t})=>{const[r,s]=l.useState(!1),n=()=>{s(a=>!a)};return e.jsx(m.Provider,{value:{open:r,setOpen:s,toggleOpen:n},children:e.jsx("div",{className:"relative",children:t})})},p=({children:t})=>{const{open:r,setOpen:s,toggleOpen:n}=l.useContext(m);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:n,children:t}),r&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>s(!1)})]})},f=({align:t="right",width:r="48",contentClasses:s="py-1 bg-white",children:n})=>{const{open:a,setOpen:x}=l.useContext(m);let i="origin-top";t==="left"?i="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(i="ltr:origin-top-right rtl:origin-top-left end-0");let d="";return r==="48"&&(d="w-48"),e.jsx(e.Fragment,{children:e.jsx(u,{show:a,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${i} ${d}`,onClick:()=>x(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+s,children:n})})})})},j=({className:t="",children:r,...s})=>e.jsx(c,{...s,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none "+t,children:r});o.Trigger=p;o.Content=f;o.Link=j;function h({active:t=!1,className:r="",children:s,...n}){return e.jsx(c,{...n,className:`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${t?"border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800":"border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${r}`,children:s})}function y({children:t,isAdmin:r=!1}){const s=g().props.auth.user,n=[{name:"Category",link:route("dashboard.category.index")},{name:"Classroom",link:route("dashboard.classroom.index")}],[a,x]=l.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsxs("nav",{className:"border-b border-gray-100 bg-white",children:[e.jsx("div",{className:"container mx-auto",children:e.jsxs("div",{className:"flex h-16 justify-between",children:[e.jsx("div",{className:"flex",children:e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx(c,{href:"/",children:e.jsx("img",{src:"/images/logo.png",alt:"logo",className:"h-7 lg:h-10"})})})}),e.jsx("div",{className:"hidden sm:ms-6 sm:flex sm:items-center",children:e.jsx("div",{className:"relative ms-3",children:e.jsxs(o,{children:[e.jsx(o.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none",children:[e.jsx("img",{src:"/images/ic-user.png",alt:"logo",className:"h-10"}),e.jsx("svg",{className:"-me-0.5 ms-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(o.Content,{children:[e.jsx(o.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(o.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>x(i=>!i),className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:a?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:a?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(a?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"space-y-1 pb-3 pt-2",children:e.jsx(h,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),e.jsxs("div",{className:"border-t border-gray-200 pb-1 pt-4",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:s.name}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:s.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(h,{href:route("profile.edit"),children:"Profile"}),e.jsx(h,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),r&&e.jsx("div",{className:"container mx-auto mt-10",children:e.jsxs("div",{className:"flex flex-col gap-y-3 rounded-lg bg-white p-4 text-accent",children:[e.jsx("h1",{className:"text-lg font-normal",children:"Management"}),e.jsx("hr",{}),e.jsx("div",{className:"flex flex-row flex-wrap gap-x-3",children:n.map((i,d)=>e.jsx(c,{href:i.link,className:"w-fit rounded-lg border border-accent bg-white px-3 py-1",children:i.name},d))})]})}),e.jsx("main",{children:t})]})}export{y as A};
