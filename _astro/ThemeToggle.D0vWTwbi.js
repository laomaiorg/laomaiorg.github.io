import{u as d}from"./index.D6RBr4DA.js";import{n as c,d as u,c as p,a as e,o as k}from"./runtime-core.esm-bundler.T6xIsM09.js";import{_ as h}from"./_plugin-vue_export-helper.DlAUqK2U.js";const n=d();function m(a){if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches)){n.value=!n.value;return}const o=a.clientX,r=a.clientY,s=Math.hypot(Math.max(o,innerWidth-o),Math.max(r,innerHeight-r));document.startViewTransition(async()=>{n.value=!n.value,await c()}).ready.then(()=>{const i=[`circle(0px at ${o}px ${r}px)`,`circle(${s}px at ${o}px ${r}px)`];document.documentElement.animate({clipPath:n.value?[...i].reverse():i},{duration:500,easing:"cubic-bezier(0.4, 0, 0.2, 1)",pseudoElement:n.value?"::view-transition-old(root)":"::view-transition-new(root)"})})}const g=u({__name:"ThemeToggle",setup(a,{expose:t}){t();const o={get toggleDark(){return m}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function v(a,t,o,r,s,l){return k(),p("a",{id:"theme-toggle",class:"cursor-pointer select-none",title:"Toggle Color Scheme",onClick:t[0]||(t[0]=(...i)=>r.toggleDark&&r.toggleDark(...i))},t[1]||(t[1]=[e("div",{class:"text-2xl"},[e("div",{class:"block dark:hidden"},[e("svg",{id:"sun-svg",class:"opacity-60 duration-1000 hover:opacity-100",width:"32",height:"32","aria-hidden":"true",focusable:"false","stroke-width":"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M22 12L23 12",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M12 2V1",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M12 23V22",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M20 20L19 19",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M20 4L19 5",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M4 20L5 19",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M4 4L5 5",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M1 12L2 12",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"})])]),e("div",{class:"hidden dark:block"},[e("svg",{id:"moon-svg",width:"32",height:"32",class:"opacity-60 duration-1000 hover:opacity-100","aria-hidden":"true",focusable:"false",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"}),e("path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"}),e("path",{d:"M19 11h2m-1 -1v2"})])])],-1)]))}const C=h(g,[["render",v]]);export{C as default};