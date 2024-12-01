import"./hoisted.rrRgbaP2.js";import{u as f}from"./relativeTime.SU5s19Tr.js";import{_ as g}from"./preload-helper.CLcXU_4U.js";class w{phase=0;offset=0;frequency=.001;amplitude=1;constructor(t){this.phase=t.phase||0,this.offset=t.offset||0,this.frequency=t.frequency||.001,this.amplitude=t.amplitude||1}update(){return this.phase+=this.frequency,this.offset+Math.sin(this.phase)*this.amplitude}}class E{x=0;y=0;vy=0;vx=0}class x{constructor(t,e){this.pos=e,this.spring=t.spring+.1*Math.random()-.05,this.friction=d.friction+.01*Math.random()-.005,this.nodes=[];for(let n=0;n<d.size;n++){const o=new E;o.x=this.pos.x,o.y=this.pos.y,this.nodes.push(o)}}spring=.1;friction=.01;nodes=[];update(){let t=this.spring,e=this.nodes[0];e.vx+=(this.pos.x-e.x)*t,e.vy+=(this.pos.y-e.y)*t;let n;for(let o=0;o<this.nodes.length;o++)e=this.nodes[o],0<o&&(n=this.nodes[o-1],e.vx+=(n.x-e.x)*t,e.vy+=(n.y-e.y)*t,e.vx+=n.vx*d.dampening,e.vy+=n.vy*d.dampening),e.vx*=this.friction,e.vy*=this.friction,e.x+=e.vx,e.y+=e.vy,t*=d.tension}draw(t){let e,n,o=this.nodes[0].x,r=this.nodes[0].y;t.beginPath(),t.moveTo(o,r);let a;for(a=1;a<this.nodes.length-2;a++)e=this.nodes[a],n=this.nodes[a+1],o=.5*(e.x+n.x),r=.5*(e.y+n.y),t.quadraticCurveTo(e.x,e.y,o,r);e=this.nodes[a],n=this.nodes[a+1],t.quadraticCurveTo(e.x,e.y,n.x,n.y),t.stroke(),t.closePath()}}const d={friction:.5,trails:20,size:50,dampening:.25,tension:.98},L=function(){const t=document.getElementById("canvas").getContext("2d");let e=[];const n={x:0,y:0},o=new w({phase:Math.random()*2*Math.PI,amplitude:85,frequency:.0015,offset:285});let r=!0;function a(){t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight}a();function v(){if(r){t.globalCompositeOperation="source-over",t.clearRect(0,0,t.canvas.width,t.canvas.height),t.globalCompositeOperation="lighter",t.strokeStyle="hsla("+Math.round(o.update())+",90%,50%,0.25)",t.lineWidth=1;for(let c=0;c<d.trails;c++){const h=e[c];h.update(),h.draw(t)}window.requestAnimationFrame(v)}}function u(c){function h(){e=[];for(let s=0;s<d.trails;s++)e.push(new x({spring:.45+s/d.trails*.025},n))}function l(s){"touches"in s?(n.x=s.touches[0].pageX,n.y=s.touches[0].pageY):(n.x=s.clientX,n.y=s.clientY),s.preventDefault()}function m(s){s.touches&&s.touches.length===1&&(n.x=s.touches[0].pageX,n.y=s.touches[0].pageY)}document.removeEventListener("mousemove",u),document.removeEventListener("touchstart",u),document.addEventListener("mousemove",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",m),l(c),h(),v()}document.addEventListener("mousemove",u),document.addEventListener("touchstart",u),document.body.addEventListener("orientationchange",a),window.addEventListener("resize",a),window.addEventListener("focus",()=>{r||(r=!0,v())}),window.addEventListener("blur",()=>{r=!0})};document.addEventListener("astro:page-load",()=>{document.getElementById("canvas")&&L()});document.addEventListener("astro:page-load",()=>{const i=document.getElementById("scrollButtonContainer"),t=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting?i?.classList.add("hidden"):i?.classList.remove("hidden")})},{root:null,threshold:.1}),e=document.querySelector("#about");e&&t.observe(e),i?.addEventListener("click",()=>{const n=document.querySelector("#about");n&&n.scrollIntoView({behavior:"smooth"})})});document.addEventListener("astro:page-load",()=>{f()});async function b(){const i=document.getElementById("typedElement");if(!i)return;const{default:t}=await g(async()=>{const{default:r}=await import("./typed.module.vdGjvGsj.js");return{default:r}},[]),e={strings:["老麦幽居处，柴扉向晓开。","清风梳翠柳，暖日抚青苔。","乐观、坚持；梦，近在咫尺。"],typeSpeed:80,backSpeed:50,backDelay:5e3,loop:!0,showCursor:!0,cursorChar:"|"},n=new t(i,e),o=()=>{n.destroy(),window.removeEventListener("astro:before-swap",o)};window.addEventListener("astro:before-swap",o)}document.addEventListener("astro:page-load",()=>{b()});function y(){const i=document.getElementById("avatarContainer"),t=document.getElementById("avatar");!i||!t||(i.addEventListener("mousemove",e=>{if(window.innerWidth<1280)return;const{clientX:n,clientY:o}=e,{width:r,height:a,x:v,y:u}=i.getBoundingClientRect(),c=Math.abs(n-v),h=Math.abs(o-u),l=-15,m=15,s=m-l,p={x:m-h/a*s,y:l+c/r*s};t.style.transform=`rotateX(${p.x}deg) rotateY(${p.y}deg)`}),i.addEventListener("mouseleave",()=>{t.style.transform="rotateX(0deg) rotateY(0deg)"}))}document.addEventListener("astro:page-load",y);document.addEventListener("astro:after-swap",y);document.addEventListener("astro:page-load",()=>{f()});
