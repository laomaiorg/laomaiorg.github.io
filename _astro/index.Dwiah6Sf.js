import{t as U,r as R,b as C,e as P,n as q,u as X,f as Z,g as x,w as I,h as ee,i as te,j as T,s as ne,k as re}from"./runtime-core.esm-bundler.8MhisWn9.js";function V(e){return ee()?(te(e),!0):!1}function j(e){return typeof e=="function"?e():X(e)}const ie=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const oe=Object.prototype.toString,ae=e=>oe.call(e)==="[object Object]",B=()=>{};function se(e,t){function r(...o){return new Promise((n,s)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(n).catch(s)})}return r}const G=e=>e();function ue(e=G){const t=C(!0);function r(){t.value=!1}function o(){t.value=!0}const n=(...s)=>{t.value&&e(...s)};return{isActive:R(t),pause:r,resume:o,eventFilter:n}}function le(e){return x()}function ce(...e){if(e.length!==1)return U(...e);const t=e[0];return typeof t=="function"?R(Z(()=>({get:t,set:B}))):C(t)}function fe(e,t,r={}){const{eventFilter:o=G,...n}=r;return I(e,se(o,t),n)}function de(e,t,r={}){const{eventFilter:o,...n}=r,{eventFilter:s,pause:f,resume:a,isActive:u}=ue(o);return{stop:fe(e,t,{...n,eventFilter:s}),pause:f,resume:a,isActive:u}}function H(e,t=!0,r){le()?P(e,r):t?e():q(e)}function K(e){var t;const r=j(e);return(t=r?.$el)!=null?t:r}const k=ie?window:void 0;function z(...e){let t,r,o,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,o,n]=e,t=k):[t,r,o,n]=e,!t)return B;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);const s=[],f=()=>{s.forEach(p=>p()),s.length=0},a=(p,d,g,v)=>(p.addEventListener(d,g,v),()=>p.removeEventListener(d,g,v)),u=I(()=>[K(t),j(n)],([p,d])=>{if(f(),!p)return;const g=ae(d)?{...d}:d;s.push(...r.flatMap(v=>o.map(y=>a(p,v,y,g))))},{immediate:!0,flush:"post"}),l=()=>{u(),f()};return V(l),l}function pe(){const e=C(!1),t=x();return t&&P(()=>{e.value=!0},t),e}function me(e){const t=pe();return T(()=>(t.value,!!e()))}function Ee(e,t={}){const{immediate:r=!0,fpsLimit:o=void 0,window:n=k}=t,s=C(!1),f=o?1e3/o:null;let a=0,u=null;function l(g){if(!s.value||!n)return;a||(a=g);const v=g-a;if(f&&v<f){u=n.requestAnimationFrame(l);return}a=g,e({delta:v,timestamp:g}),u=n.requestAnimationFrame(l)}function p(){!s.value&&n&&(s.value=!0,a=0,u=n.requestAnimationFrame(l))}function d(){s.value=!1,u!=null&&n&&(n.cancelAnimationFrame(u),u=null)}return r&&p(),V(d),{isActive:R(s),pause:d,resume:p}}function Q(e,t={}){const{window:r=k}=t,o=me(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let n;const s=C(!1),f=l=>{s.value=l.matches},a=()=>{n&&("removeEventListener"in n?n.removeEventListener("change",f):n.removeListener(f))},u=re(()=>{o.value&&(a(),n=r.matchMedia(j(e)),"addEventListener"in n?n.addEventListener("change",f):n.addListener(f),s.value=n.matches)});return V(()=>{u(),a(),n=void 0}),s}const _=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W="__vueuse_ssr_handlers__",he=ve();function ve(){return W in _||(_[W]=_[W]||{}),_[W]}function Y(e,t){return he[e]||t}function ge(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const we={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},J="vueuse-storage";function ye(e,t,r,o={}){var n;const{flush:s="pre",deep:f=!0,listenToStorageChanges:a=!0,writeDefaults:u=!0,mergeDefaults:l=!1,shallow:p,window:d=k,eventFilter:g,onError:v=i=>{console.error(i)},initOnMounted:y}=o,w=(p?ne:C)(typeof t=="function"?t():t);if(!r)try{r=Y("getDefaultStorage",()=>{var i;return(i=k)==null?void 0:i.localStorage})()}catch(i){v(i)}if(!r)return w;const S=j(t),F=ge(S),b=(n=o.serializer)!=null?n:we[F],{pause:M,resume:h}=de(w,()=>D(w.value),{flush:s,deep:f,eventFilter:g});d&&a&&H(()=>{r instanceof Storage?z(d,"storage",E):z(d,J,N),y&&E()}),y||E();function A(i,c){if(d){const m={key:e,oldValue:i,newValue:c,storageArea:r};d.dispatchEvent(r instanceof Storage?new StorageEvent("storage",m):new CustomEvent(J,{detail:m}))}}function D(i){try{const c=r.getItem(e);if(i==null)A(c,null),r.removeItem(e);else{const m=b.write(i);c!==m&&(r.setItem(e,m),A(c,m))}}catch(c){v(c)}}function O(i){const c=i?i.newValue:r.getItem(e);if(c==null)return u&&S!=null&&r.setItem(e,b.write(S)),S;if(!i&&l){const m=b.read(c);return typeof l=="function"?l(m,S):F==="object"&&!Array.isArray(m)?{...S,...m}:m}else return typeof c!="string"?c:b.read(c)}function E(i){if(!(i&&i.storageArea!==r)){if(i&&i.key==null){w.value=S;return}if(!(i&&i.key!==e)){M();try{i?.newValue!==b.write(w.value)&&(w.value=O(i))}catch(c){v(c)}finally{i?q(h):h()}}}}function N(i){E(i.detail)}return w}function $(e){return Q("(prefers-color-scheme: dark)",e)}const Se="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function be(e={}){const{selector:t="html",attribute:r="class",initialValue:o="auto",window:n=k,storage:s,storageKey:f="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:u,emitAuto:l,disableTransition:p=!0}=e,d={auto:"",light:"light",dark:"dark",...e.modes||{}},g=$({window:n}),v=T(()=>g.value?"dark":"light"),y=u||(f==null?ce(o):ye(f,o,s,{window:n,listenToStorageChanges:a})),w=T(()=>y.value==="auto"?v.value:y.value),S=Y("updateHTMLAttrs",(h,A,D)=>{const O=typeof h=="string"?n?.document.querySelector(h):K(h);if(!O)return;const E=new Set,N=new Set;let i=null;if(A==="class"){const m=D.split(/\s/g);Object.values(d).flatMap(L=>(L||"").split(/\s/g)).filter(Boolean).forEach(L=>{m.includes(L)?E.add(L):N.add(L)})}else i={key:A,value:D};if(E.size===0&&N.size===0&&i===null)return;let c;p&&(c=n.document.createElement("style"),c.appendChild(document.createTextNode(Se)),n.document.head.appendChild(c));for(const m of E)O.classList.add(m);for(const m of N)O.classList.remove(m);i&&O.setAttribute(i.key,i.value),p&&(n.getComputedStyle(c).opacity,document.head.removeChild(c))});function F(h){var A;S(t,r,(A=d[h])!=null?A:h)}function b(h){e.onChanged?e.onChanged(h,F):F(h)}I(w,b,{flush:"post",immediate:!0}),H(()=>b(w.value));const M=T({get(){return l?y.value:w.value},set(h){y.value=h}});try{return Object.assign(M,{store:y,system:v,state:w})}catch{return M}}function Ce(e={}){const{valueDark:t="dark",valueLight:r="",window:o=k}=e,n=be({...e,onChanged:(a,u)=>{var l;e.onChanged?(l=e.onChanged)==null||l.call(e,a==="dark",u,a):u(a)},modes:{dark:t,light:r}}),s=T(()=>n.system?n.system.value:$({window:o}).value?"dark":"light");return T({get(){return n.value==="dark"},set(a){const u=a?"dark":"light";s.value===u?n.value="auto":n.value=u}})}function ke(e={}){const{window:t=k,initialWidth:r=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:n=!0,includeScrollbar:s=!0,type:f="inner"}=e,a=C(r),u=C(o),l=()=>{t&&(f==="outer"?(a.value=t.outerWidth,u.value=t.outerHeight):s?(a.value=t.innerWidth,u.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,u.value=t.document.documentElement.clientHeight))};if(l(),H(l),z("resize",l,{passive:!0}),n){const p=Q("(orientation: portrait)");I(p,()=>l())}return{width:a,height:u}}export{ke as a,Ee as b,Ce as u};
