import{_ as H,a as J,b as O}from"./_plugin-vue_export-helper.1ckoenv2.js";import{d as V,o as X,c as q,a as D,I as G,b as g,J as K,e as L,j as Q}from"./runtime-core.esm-bundler.CLscdJu0.js";const C="#88888825",T=30,U=V({__name:"Plum",setup(E,{expose:b}){b();const x=Math.PI,c=Math.PI/2,m=Math.PI/12,k=g(null),{random:a}=Math,t=K(J()),v=g(()=>{}),M=g(8),w=g(!1);function R(s,n=400,r=400,l){const e=s.getContext("2d"),i=window.devicePixelRatio||1,P=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1,o=l||i/P;return s.style.width=`${n}px`,s.style.height=`${r}px`,s.width=o*n,s.height=o*r,e.scale(o,o),{ctx:e,dpi:o}}function y(s=0,n=0,r=0,l=0){const e=r*Math.cos(l),i=r*Math.sin(l);return[s+e,n+i]}L(async()=>{const s=k.value,{ctx:n}=R(s,t.width,t.height),{width:r,height:l}=s;let e=[],i=[];const P=2984,o=(d,z,S,h={value:0})=>{const A=a()*M.value;if(h.value+=1,h.value>=P)return;const[p,u]=y(d,z,A,S);n.beginPath(),n.moveTo(d,z),n.lineTo(p,u),n.stroke();const W=S+a()*m,F=S-a()*m;if(p<-100||p>t.width+100||u<-100||u>t.height+100)return;const I=h.value<=T?.8:.5;a()<I&&e.push(()=>o(p,u,W,h)),a()<I&&e.push(()=>o(p,u,F,h))};let $=performance.now();const j=1e3/40;let f;f=O(()=>{performance.now()-$<j||(i=e,e=[],$=performance.now(),i.length||(f.pause(),w.value=!0),i.forEach(d=>{a()<.5?e.push(d):d()}))},{immediate:!1});const _=()=>a()*.6+.2;v.value=()=>{f.pause(),n.clearRect(0,0,r,l),n.lineWidth=1,n.strokeStyle=C,i=[],e=[()=>o(_()*t.width,-5,c),()=>o(_()*t.width,t.height+5,-c),()=>o(-5,_()*t.height,0),()=>o(t.width+5,_()*t.height,x)],t.width<500&&(e=e.slice(0,2)),f.resume(),w.value=!1},v.value()});const N=Q(()=>"radial-gradient(circle, transparent, black);"),B={r180:x,r90:c,r15:m,color:C,el:k,random:a,size:t,start:v,MIN_BRANCH:T,len:M,stopped:w,initCanvas:R,polar2cart:y,mask:N};return Object.defineProperty(B,"__isScriptSetup",{enumerable:!1,value:!0}),B}}),Y={ref:"el",width:"400",height:"400"};function Z(E,b,x,c,m,k){return X(),q("div",{class:"fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden",style:G([{"z-index":"-1"},`mask-image: ${c.mask};--webkit-mask-image: ${c.mask};`])},[D("canvas",Y,null,512)],4)}const oe=H(U,[["render",Z]]);export{oe as default};