var Q=["280562.com","laomai.org","savouer.com"];const N=Q||[];document.addEventListener("astro:page-load",()=>{setTimeout(()=>{document.querySelectorAll("main a").forEach(t=>{const n=t.getAttribute("href");if(n&&(n.startsWith("http://")||n.startsWith("https://"))){t.setAttribute("target","_blank");const r=new URL(n).hostname,i=Array.isArray(N)&&N.some(u=>r.endsWith(u));if(r!==window.location.hostname&&!i){const u="/go/?url="+encodeURI(n);t.setAttribute("href",u)}}})},1e3)});document.addEventListener("astro:after-swap",()=>{(function(){const e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem("vueuse-color-scheme")||"auto";(t==="dark"||e&&t!=="light")&&document.documentElement.classList.toggle("dark",!0)})()});const y="data-astro-transition-persist";function Z(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function ee(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function te(e){for(const t of Array.from(document.head.children)){const n=re(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function ne(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${y}]`)){const o=n.getAttribute(y),r=e.querySelector(`[${y}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ie(n)&&!se(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const oe=()=>{const e=document.activeElement;if(e?.closest(`[${y}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>R({activeElement:e,start:t,end:n})}return()=>R({activeElement:e})}else return()=>R({activeElement:null})},R=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},re=(e,t)=>{const n=e.getAttribute(y),o=n&&t.head.querySelector(`[${y}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ie=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},se=(e,t)=>e.getAttribute("props")===t.getAttribute("props"),ae=e=>{Z(e),ee(e),te(e);const t=oe();ne(e.body,document.body),t()},ce="astro:before-preparation",le="astro:after-preparation",ue="astro:before-swap",de="astro:after-swap",fe=e=>document.dispatchEvent(new Event(e));class X extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,i,u,s,c,l,d){super(t,n),this.from=o,this.to=r,this.direction=i,this.navigationType=u,this.sourceElement=s,this.info=c,this.newDocument=l,this.signal=d,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class me extends X{formData;loader;constructor(t,n,o,r,i,u,s,c,l,d){super(ce,{cancelable:!0},t,n,o,r,i,u,s,c),this.formData=l,this.loader=d.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class he extends X{direction;viewTransition;swap;constructor(t,n){super(ue,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>ae(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ge(e,t,n,o,r,i,u,s,c){const l=new me(e,t,n,o,r,i,window.document,u,s,c);return document.dispatchEvent(l)&&(await l.loader(),l.defaultPrevented||(fe(le),l.navigationType!=="traverse"&&P({scrollX,scrollY}))),l}function we(e,t){const n=new he(e,t);return document.dispatchEvent(n),n.swap(),n}const pe=history.pushState.bind(history),T=history.replaceState.bind(history),P=e=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...e},""))},I=!!document.startViewTransition,x=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),U=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let f,w,E;const W=e=>document.dispatchEvent(new Event(e)),B=()=>W("astro:page-load"),ye=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},O="data-astro-transition-persist",H="data-astro-transition",k="data-astro-transition-fallback";let _,b=0;history.state?(b=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):x()&&(T({index:b,scrollX,scrollY},""),history.scrollRestoration="manual");async function be(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function V(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ve(){let e=Promise.resolve();for(const t of document.getElementsByTagName("script")){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const i=new Promise(u=>{o.onload=o.onerror=u});e=e.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const j=(e,t,n,o,r)=>{const i=U(t,e),u=document.title;document.title=o;let s=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const c=history.state;T({...n.state,index:c.index,scrollX:c.scrollX,scrollY:c.scrollY},"",e.href)}else pe({...n.state,index:++b,scrollX:0,scrollY:0},"",e.href);if(document.title=u,E=e,i||(scrollTo({left:0,top:0,behavior:"instant"}),s=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const c=history.state;location.href=e.href,history.state||(T(c,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else s||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Te(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${O}="${n.getAttribute(O)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return t}async function F(e,t,n,o,r){async function i(c){function l(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const d=document.getAnimations();document.documentElement.setAttribute(k,c);const g=document.getAnimations().filter(h=>!d.includes(h)&&!l(h));return Promise.allSettled(g.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await i("old")}catch{}const u=document.title,s=we(e,n.viewTransition);j(s.to,s.from,t,u,o),W(de),r==="animate"&&(!n.transitionSkipped&&!s.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Ae(){return f?.controller.abort(),f={controller:new AbortController}}async function K(e,t,n,o,r){const i=Ae();if(!x()||location.origin!==n.origin){i===f&&(f=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&P({scrollX,scrollY}),U(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){j(n,t,o,document.title,r),i===f&&(f=void 0);return}const s=await ge(t,n,e,u,o.sourceElement,o.info,i.controller.signal,o.formData,c);if(s.defaultPrevented||s.signal.aborted){i===f&&(f=void 0),s.signal.aborted||(location.href=n.href);return}async function c(a){const g=a.to.href,h={signal:a.signal};if(a.formData){h.method="POST";const p=a.sourceElement instanceof HTMLFormElement?a.sourceElement:a.sourceElement instanceof HTMLElement&&"form"in a.sourceElement?a.sourceElement.form:a.sourceElement?.closest("form");h.body=p?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(a.formData):a.formData}const m=await be(g,h);if(m===null){a.preventDefault();return}if(m.redirected){const p=new URL(m.redirected);if(p.origin!==a.to.origin){a.preventDefault();return}a.to=p}if(_??=new DOMParser,a.newDocument=_.parseFromString(m.html,m.mediaType),a.newDocument.querySelectorAll("noscript").forEach(p=>p.remove()),!a.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!a.formData){a.preventDefault();return}const L=Te(a.newDocument);L.length&&!a.signal.aborted&&await Promise.all(L)}async function l(){if(w&&w.viewTransition){try{w.viewTransition.skipTransition()}catch{}try{await w.viewTransition.updateCallbackDone}catch{}}return w={transitionSkipped:!1}}const d=await l();if(s.signal.aborted){i===f&&(f=void 0);return}if(document.documentElement.setAttribute(H,s.direction),I)d.viewTransition=document.startViewTransition(async()=>await F(s,o,d,r));else{const a=(async()=>{await Promise.resolve(),await F(s,o,d,r,V())})();d.viewTransition={updateCallbackDone:a,ready:a,finished:new Promise(g=>d.viewTransitionFinished=g),skipTransition:()=>{d.transitionSkipped=!0,document.documentElement.removeAttribute(k)}}}d.viewTransition?.updateCallbackDone.finally(async()=>{await ve(),B(),ye()}),d.viewTransition?.finished.finally(()=>{d.viewTransition=void 0,d===w&&(w=void 0),i===f&&(f=void 0),document.documentElement.removeAttribute(H),document.documentElement.removeAttribute(k)});try{await d.viewTransition?.updateCallbackDone}catch(a){const g=a;console.log("[astro]",g.name,g.message,g.stack)}}async function C(e,t){await K("forward",E,new URL(e,location.href),t??{})}function Ee(e){if(!x()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>b?"forward":"back";b=n,K(o,E,new URL(location.href),{},t)}const Y=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&P({scrollX,scrollY})};{if(I||V()!=="none")if(E=new URL(location.href),addEventListener("popstate",Ee),addEventListener("load",B),"onscrollend"in window)addEventListener("scrollend",Y);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,Y();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.getElementsByTagName("script"))e.dataset.astroExec=""}const G=new Set,A=new WeakSet;let D,z,$=!1;function Se(e){$||($=!0,D??=e?.prefetchAll,z??=e?.defaultStrategy??"hover",Le(),Re(),ke(),Pe())}function Le(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{v(t.target,"tap")&&S(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Re(){let e;document.body.addEventListener("focusin",o=>{v(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),M(()=>{for(const o of document.getElementsByTagName("a"))A.has(o)||v(o,"hover")&&(A.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{S(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function ke(){let e;M(()=>{for(const t of document.getElementsByTagName("a"))A.has(t)||v(t,"viewport")&&(A.add(t),e??=De(),e.observe(t))})}function De(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,i=e.get(r);o.isIntersecting?(i&&clearTimeout(i),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),S(r.href)},300))):i&&(clearTimeout(i),e.delete(r))}})}function Pe(){M(()=>{for(const e of document.getElementsByTagName("a"))v(e,"load")&&S(e.href)})}function S(e,t){e=e.replace(/#.*/,"");const n=t?.ignoreSlowConnection??!1;if(Ie(e,n))if(G.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function Ie(e,t){if(!navigator.onLine||!t&&J())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!G.has(e)}catch{}return!1}function v(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||D)&&J()?!0:n==null&&D||n===""?t===z:n===t}function J(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function M(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function xe(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function q(e){return e.dataset.astroReload!==void 0}(I||xe()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;q(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),C(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||q(t))return;const n=t,o=e.submitter,r=new FormData(n,o),i=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let s=o?.getAttribute("formaction")??i??location.pathname;const c=o?.getAttribute("formmethod")??u??"get";if(c==="dialog"||location.origin!==new URL(s,location.href).origin)return;const l={sourceElement:o??n};if(c==="get"){const d=new URLSearchParams(r),a=new URL(s);a.search=d.toString(),s=a.toString()}else l.formData=r;e.preventDefault(),C(s,l)}),Se({prefetchAll:!0}));document.addEventListener("astro:page-load",()=>{let e=i(),t=e/60%1,n=e/3600%1,o=e/43200%1;r(60*t,"second"),r(3600*n,"minute"),r(43200*o,"hour");function r(s,c){const l=document.querySelector(`.clock__${c}`);l&&(l.style.animationDelay=`${s*-1}s`)}function i(){let s=new Date,c=new Date(s.getFullYear(),s.getMonth(),s.getDate()),l=s.getTime()-c.getTime();return Math.round(l/1e3)}function u(){const c=new Date().toLocaleTimeString(),l=document.querySelector(".clock");l&&l.setAttribute("data-time",c)}setInterval(u,1e3),u()});
