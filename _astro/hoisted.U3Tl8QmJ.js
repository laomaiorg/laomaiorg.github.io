const J={siteURL:"https://www.iamlm.com",title:"老麦笔记",author:"老麦",subtitle:"平淡、简单，时而折腾，时而游戏，时而静静。",description:"这里是老麦的个人博客，分享生活、热爱生活、享受生活，主打真实与平淡。",image:{src:"/images/laomai.jpg",alt:"老麦笔记 - 平淡、简单，时而折腾，时而游戏，时而静静。"},startdate:"2020-06-28",headerNavLinks:[{text:"Home",href:"/"},{text:"Blog",href:"/blog/"},{text:"Tags",href:"/tags/"}],footerNavLinks:[{text:"About",href:"/about/"},{text:"Blog",href:"/blog/"},{text:"Tags",href:"/tags/"},{text:"Links",href:"/links/"},{text:"Rss",href:"/feed.xml"}],socialLinks:[{text:"Mastodon",href:"https://280562.com/@laomai"},{text:"Github",href:"https://github.com/laomaiorg"},{text:"X/Twitter",href:"https://twitter.com/laomaiorg"}],links:[{text:"夜未央",href:"https://www.savouer.com/"},{text:"大峰笔记",href:"https://illl.xyz/"},{text:"Andy烧麦",href:"https://4311346.com/"},{text:"天一生水",href:"https://www.jiangyu.org/"},{text:"忆往事",href:"https://zhou.ge/"},{text:"沉舟侧畔",href:"https://springwood.me/"},{text:"独殇小册",href:"https://www.ccgxk.com"},{text:"Khighness",href:"https://www.parak.top/"},{text:"林羽凡",href:"https://www.linyufan.com/"},{text:"猫鱼的小窝",href:"https://2cat.net/"},{text:"拾风",href:"https://www.leolin86.com/"},{text:"一介大叔",href:"http://www.winature.com/"},{text:"DEAREND.WANG",href:"https://i.dearend.wang/"},{text:"子痕的博客",href:"https://blog.mzihen.com/"},{text:"小王子",href:"https://www.wanghao.me/"},{text:"喂马劈柴",href:"https://blog.shaoxiao.net/"},{text:"依然少年",href:"https://sheshui.me/"},{text:"十年之约",href:"https://www.foreverblog.cn/"}],subscribe:{title:"Subscribe to Dante Newsletter",text:"One update per week. All the latest posts directly in your inbox.",formUrl:"#"},postsPerPage:8,allowedDomains:["280562.com","laomai.org"]};document.addEventListener("astro:page-load",()=>{const t=J.allowedDomains||[];setTimeout(()=>{document.querySelectorAll("main a, .atk-comment > .atk-main > .atk-header .atk-item.atk-nick a").forEach(n=>{const o=n.getAttribute("href");if(o&&(o.startsWith("http://")||o.startsWith("https://"))){n.setAttribute("target","_blank");const i=new URL(o).hostname,l=t.some(a=>i.endsWith(a));if(i!==window.location.hostname&&!l){const a="/go/?url="+encodeURI(o);n.setAttribute("href",a)}}})},1e3)});document.addEventListener("astro:after-swap",()=>{(function(){const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,e=localStorage.getItem("vueuse-color-scheme")||"auto";(e==="dark"||t&&e!=="light")&&document.documentElement.classList.toggle("dark",!0)})()});const b="data-astro-transition-persist";function Q(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function Z(t){const e=document.documentElement,n=[...e.attributes].filter(({name:o})=>(e.removeAttribute(o),o.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:o,value:r})=>e.setAttribute(o,r))}function tt(t){for(const e of Array.from(document.head.children)){const n=ot(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function et(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${b}]`)){const o=n.getAttribute(b),r=t.querySelector(`[${b}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&rt(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const nt=()=>{const t=document.activeElement;if(t?.closest(`[${b}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>L({activeElement:t,start:e,end:n})}return()=>L({activeElement:t})}else return()=>L({activeElement:null})},L=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},ot=(t,e)=>{const n=t.getAttribute(b),o=n&&e.head.querySelector(`[${b}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const r=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},rt=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},it=t=>{Q(t),Z(t),tt(t);const e=nt();et(t.body,document.body),e()},st="astro:before-preparation",at="astro:after-preparation",ct="astro:before-swap",lt="astro:after-swap",ut=t=>document.dispatchEvent(new Event(t));class _ extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,n,o,r,i,l,a,u,f,c){super(e,n),this.from=o,this.to=r,this.direction=i,this.navigationType=l,this.sourceElement=a,this.info=u,this.newDocument=f,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class ft extends _{formData;loader;constructor(e,n,o,r,i,l,a,u,f,c){super(st,{cancelable:!0},e,n,o,r,i,l,a,u),this.formData=f,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class dt extends _{direction;viewTransition;swap;constructor(e,n){super(ct,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=n,this.swap=()=>it(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function mt(t,e,n,o,r,i,l,a,u){const f=new ft(t,e,n,o,r,i,window.document,l,a,u);return document.dispatchEvent(f)&&(await f.loader(),f.defaultPrevented||(ut(at),f.navigationType!=="traverse"&&D({scrollX,scrollY}))),f}function ht(t,e){const n=new dt(t,e);return document.dispatchEvent(n),n.swap(),n}const wt=history.pushState.bind(history),T=history.replaceState.bind(history),D=t=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...t},""))},P=!!document.startViewTransition,I=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),$=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let d,p,E;const q=t=>document.dispatchEvent(new Event(t)),W=()=>q("astro:page-load"),pt=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},M="data-astro-transition-persist",H="data-astro-transition",k="data-astro-transition-fallback";let O,y=0;history.state?(y=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):I()&&(T({index:y,scrollX,scrollY},""),history.scrollRestoration="manual");async function gt(t,e){try{const n=await fetch(t,e),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function B(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function bt(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const i=new Promise(l=>{o.onload=o.onerror=l});t=t.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const V=(t,e,n,o,r)=>{const i=$(e,t),l=document.title;document.title=o;let a=!1;if(t.href!==location.href&&!r)if(n.history==="replace"){const u=history.state;T({...n.state,index:u.index,scrollX:u.scrollX,scrollY:u.scrollY},"",t.href)}else wt({...n.state,index:++y,scrollX:0,scrollY:0},"",t.href);if(document.title=l,E=t,i||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const u=history.state;location.href=t.href,history.state||(T(u,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function yt(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${M}="${n.getAttribute(M)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return e}async function C(t,e,n,o,r){async function i(u){function f(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(k,u);const w=document.getAnimations().filter(h=>!c.includes(h)&&!f(h));return Promise.allSettled(w.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await i("old")}catch{}const l=document.title,a=ht(t,n.viewTransition);V(a.to,a.from,e,l,o),q(lt),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function vt(){return d?.controller.abort(),d={controller:new AbortController}}async function j(t,e,n,o,r){const i=vt();if(!I()||location.origin!==n.origin){i===d&&(d=void 0),location.href=n.href;return}const l=r?"traverse":o.history==="replace"?"replace":"push";if(l!=="traverse"&&D({scrollX,scrollY}),$(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){V(n,e,o,document.title,r),i===d&&(d=void 0);return}const a=await mt(e,n,t,l,o.sourceElement,o.info,i.controller.signal,o.formData,u);if(a.defaultPrevented||a.signal.aborted){i===d&&(d=void 0),a.signal.aborted||(location.href=n.href);return}async function u(s){const w=s.to.href,h={signal:s.signal};if(s.formData){h.method="POST";const g=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");h.body=g?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const m=await gt(w,h);if(m===null){s.preventDefault();return}if(m.redirected){const g=new URL(m.redirected);if(g.origin!==s.to.origin){s.preventDefault();return}s.to=g}if(O??=new DOMParser,s.newDocument=O.parseFromString(m.html,m.mediaType),s.newDocument.querySelectorAll("noscript").forEach(g=>g.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const S=yt(s.newDocument);S.length&&!s.signal.aborted&&await Promise.all(S)}async function f(){if(p&&p.viewTransition){try{p.viewTransition.skipTransition()}catch{}try{await p.viewTransition.updateCallbackDone}catch{}}return p={transitionSkipped:!1}}const c=await f();if(a.signal.aborted){i===d&&(d=void 0);return}if(document.documentElement.setAttribute(H,a.direction),P)c.viewTransition=document.startViewTransition(async()=>await C(a,o,c,r));else{const s=(async()=>{await Promise.resolve(),await C(a,o,c,r,B())})();c.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(w=>c.viewTransitionFinished=w),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(k)}}}c.viewTransition.updateCallbackDone.finally(async()=>{await bt(),W(),pt()}),c.viewTransition.finished.finally(()=>{c.viewTransition=void 0,c===p&&(p=void 0),i===d&&(d=void 0),document.documentElement.removeAttribute(H),document.documentElement.removeAttribute(k)});try{await c.viewTransition.updateCallbackDone}catch(s){const w=s;console.log("[astro]",w.name,w.message,w.stack)}}async function F(t,e){await j("forward",E,new URL(t,location.href),e??{})}function Tt(t){if(!I()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>y?"forward":"back";y=n,j(o,E,new URL(location.href),{},e)}const U=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&D({scrollX,scrollY})};{if(P||B()!=="none")if(E=new URL(location.href),addEventListener("popstate",Tt),addEventListener("load",W),"onscrollend"in window)addEventListener("scrollend",U);else{let t,e,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,U();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))},{passive:!0})}for(const t of document.scripts)t.dataset.astroExec=""}const K=new Set,A=new WeakSet;let R,z,X=!1;function At(t){X||(X=!0,R??=t?.prefetchAll,z??=t?.defaultStrategy??"hover",Et(),xt(),St(),kt())}function Et(){for(const t of["touchstart","mousedown"])document.body.addEventListener(t,e=>{v(e.target,"tap")&&x(e.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function xt(){let t;document.body.addEventListener("focusin",o=>{v(o.target,"hover")&&e(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),N(()=>{for(const o of document.getElementsByTagName("a"))A.has(o)||v(o,"hover")&&(A.add(o),o.addEventListener("mouseenter",e,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function e(o){const r=o.target.href;t&&clearTimeout(t),t=setTimeout(()=>{x(r)},80)}function n(){t&&(clearTimeout(t),t=0)}}function St(){let t;N(()=>{for(const e of document.getElementsByTagName("a"))A.has(e)||v(e,"viewport")&&(A.add(e),t??=Lt(),t.observe(e))})}function Lt(){const t=new WeakMap;return new IntersectionObserver((e,n)=>{for(const o of e){const r=o.target,i=t.get(r);o.isIntersecting?(i&&clearTimeout(i),t.set(r,setTimeout(()=>{n.unobserve(r),t.delete(r),x(r.href)},300))):i&&(clearTimeout(i),t.delete(r))}})}function kt(){N(()=>{for(const t of document.getElementsByTagName("a"))v(t,"load")&&x(t.href)})}function x(t,e){t=t.replace(/#.*/,"");const n=e?.ignoreSlowConnection??!1;if(Rt(t,n))if(K.add(t),document.createElement("link").relList?.supports?.("prefetch")&&e?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",t),document.head.append(o)}else fetch(t,{priority:"low"})}function Rt(t,e){if(!navigator.onLine||!e&&G())return!1;try{const n=new URL(t,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!K.has(t)}catch{}return!1}function v(t,e){if(t?.tagName!=="A")return!1;const n=t.dataset.astroPrefetch;return n==="false"?!1:e==="tap"&&(n!=null||R)&&G()?!0:n==null&&R||n===""?e===z:n===e}function G(){if("connection"in navigator){const t=navigator.connection;return t.saveData||/2g/.test(t.effectiveType)}return!1}function N(t){t();let e=!1;document.addEventListener("astro:page-load",()=>{if(!e){e=!0;return}t()})}function Dt(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function Y(t){return t.dataset.astroReload!==void 0}(P||Dt()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;Y(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||r!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),F(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||Y(e))return;const n=e,o=t.submitter,r=new FormData(n,o),i=typeof n.action=="string"?n.action:n.getAttribute("action"),l=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??i??location.pathname;const u=o?.getAttribute("formmethod")??l??"get";if(u==="dialog"||location.origin!==new URL(a,location.href).origin)return;const f={sourceElement:o??n};if(u==="get"){const c=new URLSearchParams(r),s=new URL(a);s.search=c.toString(),a=s.toString()}else f.formData=r;t.preventDefault(),F(a,f)}),At({prefetchAll:!0}));
