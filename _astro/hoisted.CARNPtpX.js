document.addEventListener("astro:page-load",()=>{document.querySelectorAll("main a").forEach(e=>{const n=e.getAttribute("href");if(n&&(n.startsWith("http://")||n.startsWith("https://"))&&new URL(n).hostname!==window.location.hostname){const i="/go/?url="+encodeURI(n);e.setAttribute("href",i),e.setAttribute("target","_blank")}})});document.addEventListener("astro:after-swap",()=>{(function(){const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,e=localStorage.getItem("vueuse-color-scheme")||"auto";(e==="dark"||t&&e!=="light")&&document.documentElement.classList.toggle("dark",!0)})()});const g="data-astro-transition-persist";function J(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function Q(t){const e=document.documentElement,n=[...e.attributes].filter(({name:o})=>(e.removeAttribute(o),o.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:o,value:r})=>e.setAttribute(o,r))}function Z(t){for(const e of Array.from(document.head.children)){const n=nt(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function tt(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${g}]`)){const o=n.getAttribute(g),r=t.querySelector(`[${g}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ot(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const et=()=>{const t=document.activeElement;if(t?.closest(`[${g}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>R({activeElement:t,start:e,end:n})}return()=>R({activeElement:t})}else return()=>R({activeElement:null})},R=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},nt=(t,e)=>{const n=t.getAttribute(g),o=n&&e.head.querySelector(`[${g}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const r=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ot=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},rt=t=>{J(t),Q(t),Z(t);const e=et();tt(t.body,document.body),e()},it="astro:before-preparation",st="astro:after-preparation",at="astro:before-swap",ct="astro:after-swap",lt=t=>document.dispatchEvent(new Event(t));class U extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,n,o,r,i,u,a,c,f,l){super(e,n),this.from=o,this.to=r,this.direction=i,this.navigationType=u,this.sourceElement=a,this.info=c,this.newDocument=f,this.signal=l,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class ut extends U{formData;loader;constructor(e,n,o,r,i,u,a,c,f,l){super(it,{cancelable:!0},e,n,o,r,i,u,a,c),this.formData=f,this.loader=l.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ft extends U{direction;viewTransition;swap;constructor(e,n){super(at,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=n,this.swap=()=>rt(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function dt(t,e,n,o,r,i,u,a,c){const f=new ut(t,e,n,o,r,i,window.document,u,a,c);return document.dispatchEvent(f)&&(await f.loader(),f.defaultPrevented||(lt(st),f.navigationType!=="traverse"&&D({scrollX,scrollY}))),f}function mt(t,e){const n=new ft(t,e);return document.dispatchEvent(n),n.swap(),n}const ht=history.pushState.bind(history),v=history.replaceState.bind(history),D=t=>{history.state&&(history.scrollRestoration="manual",v({...history.state,...t},""))},x=!!document.startViewTransition,I=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),$=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let d,w,E;const q=t=>document.dispatchEvent(new Event(t)),W=()=>q("astro:page-load"),pt=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},N="data-astro-transition-persist",H="data-astro-transition",k="data-astro-transition-fallback";let O,b=0;history.state?(b=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):I()&&(v({index:b,scrollX,scrollY},""),history.scrollRestoration="manual");async function wt(t,e){try{const n=await fetch(t,e),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function B(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function gt(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const i=new Promise(u=>{o.onload=o.onerror=u});t=t.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const V=(t,e,n,o,r)=>{const i=$(e,t),u=document.title;document.title=o;let a=!1;if(t.href!==location.href&&!r)if(n.history==="replace"){const c=history.state;v({...n.state,index:c.index,scrollX:c.scrollX,scrollY:c.scrollY},"",t.href)}else ht({...n.state,index:++b,scrollX:0,scrollY:0},"",t.href);if(document.title=u,E=t,i||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const c=history.state;location.href=t.href,history.state||(v(c,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function bt(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${N}="${n.getAttribute(N)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return e}async function F(t,e,n,o,r){async function i(c){function f(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const l=document.getAnimations();document.documentElement.setAttribute(k,c);const p=document.getAnimations().filter(h=>!l.includes(h)&&!f(h));return Promise.allSettled(p.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await i("old")}catch{}const u=document.title,a=mt(t,n.viewTransition);V(a.to,a.from,e,u,o),q(ct),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function yt(){return d?.controller.abort(),d={controller:new AbortController}}async function j(t,e,n,o,r){const i=yt();if(!I()||location.origin!==n.origin){i===d&&(d=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&D({scrollX,scrollY}),$(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){V(n,e,o,document.title,r),i===d&&(d=void 0);return}const a=await dt(e,n,t,u,o.sourceElement,o.info,i.controller.signal,o.formData,c);if(a.defaultPrevented||a.signal.aborted){i===d&&(d=void 0),a.signal.aborted||(location.href=n.href);return}async function c(s){const p=s.to.href,h={signal:s.signal};if(s.formData){h.method="POST";const L=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");h.body=L?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const m=await wt(p,h);if(m===null){s.preventDefault();return}if(m.redirected&&(s.to=new URL(m.redirected)),O??=new DOMParser,s.newDocument=O.parseFromString(m.html,m.mediaType),s.newDocument.querySelectorAll("noscript").forEach(L=>L.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const S=bt(s.newDocument);S.length&&!s.signal.aborted&&await Promise.all(S)}async function f(){if(w&&w.viewTransition){try{w.viewTransition.skipTransition()}catch{}try{await w.viewTransition.updateCallbackDone}catch{}}return w={transitionSkipped:!1}}const l=await f();if(a.signal.aborted){i===d&&(d=void 0);return}if(document.documentElement.setAttribute(H,a.direction),x)l.viewTransition=document.startViewTransition(async()=>await F(a,o,l,r));else{const s=(async()=>{await Promise.resolve(),await F(a,o,l,r,B())})();l.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(p=>l.viewTransitionFinished=p),skipTransition:()=>{l.transitionSkipped=!0,document.documentElement.removeAttribute(k)}}}l.viewTransition.updateCallbackDone.finally(async()=>{await gt(),W(),pt()}),l.viewTransition.finished.finally(()=>{l.viewTransition=void 0,l===w&&(w=void 0),i===d&&(d=void 0),document.documentElement.removeAttribute(H),document.documentElement.removeAttribute(k)});try{await l.viewTransition.updateCallbackDone}catch(s){const p=s;console.log("[astro]",p.name,p.message,p.stack)}}async function C(t,e){await j("forward",E,new URL(t,location.href),e??{})}function vt(t){if(!I()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>b?"forward":"back";b=n,j(o,E,new URL(location.href),{},e)}const X=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&D({scrollX,scrollY})};{if(x||B()!=="none")if(E=new URL(location.href),addEventListener("popstate",vt),addEventListener("load",W),"onscrollend"in window)addEventListener("scrollend",X);else{let t,e,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,X();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))},{passive:!0})}for(const t of document.scripts)t.dataset.astroExec=""}const K=new Set,T=new WeakSet;let P,G,Y=!1;function Tt(t){Y||(Y=!0,P??=t?.prefetchAll??!1,G??=t?.defaultStrategy??"hover",Et(),At(),St(),Rt())}function Et(){for(const t of["touchstart","mousedown"])document.body.addEventListener(t,e=>{y(e.target,"tap")&&A(e.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function At(){let t;document.body.addEventListener("focusin",o=>{y(o.target,"hover")&&e(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),M(()=>{for(const o of document.getElementsByTagName("a"))T.has(o)||y(o,"hover")&&(T.add(o),o.addEventListener("mouseenter",e,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function e(o){const r=o.target.href;t&&clearTimeout(t),t=setTimeout(()=>{A(r)},80)}function n(){t&&(clearTimeout(t),t=0)}}function St(){let t;M(()=>{for(const e of document.getElementsByTagName("a"))T.has(e)||y(e,"viewport")&&(T.add(e),t??=Lt(),t.observe(e))})}function Lt(){const t=new WeakMap;return new IntersectionObserver((e,n)=>{for(const o of e){const r=o.target,i=t.get(r);o.isIntersecting?(i&&clearTimeout(i),t.set(r,setTimeout(()=>{n.unobserve(r),t.delete(r),A(r.href)},300))):i&&(clearTimeout(i),t.delete(r))}})}function Rt(){M(()=>{for(const t of document.getElementsByTagName("a"))y(t,"load")&&A(t.href)})}function A(t,e){const n=e?.ignoreSlowConnection??!1;if(kt(t,n))if(K.add(t),document.createElement("link").relList?.supports?.("prefetch")&&e?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",t),document.head.append(o)}else fetch(t,{priority:"low"})}function kt(t,e){if(!navigator.onLine||!e&&z())return!1;try{const n=new URL(t,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!K.has(t)}catch{}return!1}function y(t,e){if(t?.tagName!=="A")return!1;const n=t.dataset.astroPrefetch;return n==="false"?!1:e==="tap"&&(n!=null||P)&&z()?!0:n==null&&P||n===""?e===G:n===e}function z(){if("connection"in navigator){const t=navigator.connection;return t.saveData||/2g/.test(t.effectiveType)}return!1}function M(t){t();let e=!1;document.addEventListener("astro:page-load",()=>{if(!e){e=!0;return}t()})}function Pt(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function _(t){return t.dataset.astroReload!==void 0}(x||Pt()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;_(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||r!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),C(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||_(e))return;const n=e,o=t.submitter,r=new FormData(n,o),i=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??i??location.pathname;const c=o?.getAttribute("formmethod")??u??"get";if(c==="dialog"||location.origin!==new URL(a,location.href).origin)return;const f={sourceElement:o??n};if(c==="get"){const l=new URLSearchParams(r),s=new URL(a);s.search=l.toString(),a=s.toString()}else f.formData=r;t.preventDefault(),C(a,f)}),Tt({prefetchAll:!0}));
