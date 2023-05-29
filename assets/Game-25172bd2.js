import{r as s,j as e,_ as b}from"./index-405f677d.js";const y="https://opentdb.com/api.php?amount=1&difficulty=easy",f=[1,2],m={"General Knowledge":9,Books:10,Film:11,Music:12,"Musicals & Theatres":13,Television:14,"Video Games":15,"Board Games":16,"Science & Nature":17,"Science: Computers":18,"Science: Mathematics":19,Mythology:20,Sports:21,Geography:22,History:23,Politics:24,Art:25,Celebrities:26,Animals:27,Vehicles:28,"Entertainment: Comics":29,"Science: Gadgets":30,"Japanese Anime & Manga":31,"Cartoon & Animations":32},v=({setSelected:d,getQuestion:o})=>{const[c,u]=s.useState(1),[a,l]=s.useState(Object.keys(m)[0]),{setConfig:i}=w(),x=t=>{t.preventDefault();const j=new FormData(t.currentTarget);let p=Object.fromEntries([...j.entries()]);p={...p,category:m[a],url:`${y}&category=${m[a]}`},i(r=>(r={...p},o(r==null?void 0:r.url),r)),d(!0)},n=t=>{u(t.target.value)},h=t=>{l(t.target.value)};return e.jsxs("div",{className:"flex flex-col justify-center items-center bg-stone-200 rounded-md drop-shadow-md text-stone-600 w-80 text-2xl",children:[e.jsx("h1",{className:"pt-4 text-3xl border-b-2 h-1/3 border-b-gray-400",children:"Select Mode"}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"flex flex-col align-center justify-start pt-3",children:[e.jsx("label",{htmlFor:"framework",children:"Players"}),e.jsx("select",{className:"bg-stone-400 mt-1 mb-3",id:"mode",name:"mode",value:c,onChange:n,children:f.map(t=>e.jsx("option",{children:t},t))}),e.jsx("label",{htmlFor:"framework",children:"Category"}),e.jsx("select",{className:"bg-stone-400 mt-1 mb-3 w-52",id:"mode",name:"category",value:a,onChange:h,children:Object.keys(m).map(t=>e.jsx("option",{children:t},t))})]}),e.jsx("div",{className:"flex flex-col items-center",children:e.jsx("button",{type:"submit",className:"last:items-center bg-purple-500 w-20 rounded-md m-2 hover:bg-purple-200 text-violet-100",children:"Start"})})]})]})};const S=s.lazy(()=>b(()=>import("./Trivia-2194e1c9.js"),["assets/Trivia-2194e1c9.js","assets/index-405f677d.js","assets/index-0f6b3d17.css"])),g=s.createContext(),w=()=>s.useContext(g),C=()=>{const[d,o]=s.useState(null),[c,u]=s.useState(!1),[a,l]=s.useState(""),i=async x=>{try{const n=await fetch(x),{results:h}=await n.json(),t=h[0];l({...t})}catch(n){console.log(n.message)}};return e.jsx(s.Suspense,{children:e.jsx("div",{className:"game",children:e.jsxs(g.Provider,{value:{config:d,setConfig:o,question:a,setQuestion:l,getQuestion:i},children:[!c&&e.jsx(v,{setSelected:u,setConfig:o,setMode:o,question:a,getQuestion:i}),c&&e.jsx(S,{})]})})})};export{C as default,w as useGameContext};