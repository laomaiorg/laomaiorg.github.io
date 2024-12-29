import{i as A}from"./isSticky.YloXe7X1.js";function L(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var p={},d={},y;function w(){if(y)return d;y=1,Object.defineProperty(d,"__esModule",{value:!0}),d.ScrollSpy=void 0;class i{menuList;options;scroller;sections;activeItem=null;constructor(e,t={}){if(!e)throw new Error("Your navigation query selector is the first argument.");if(typeof t!="object")throw new Error("The second argument must be an instance of an Object.");let o={sectionClass:".scrollspy",menuActiveTarget:"li > a",offset:0,hrefAttribute:"href",activeClass:"active",scrollContainer:"",smoothScroll:{}};t.smoothScroll=t.smoothScroll===!0&&{}||t.smoothScroll,this.menuList=e instanceof HTMLElement?e:document.querySelector(e),this.options=Object.assign({},o,t),this.options.scrollContainer?this.scroller=this.options.scrollContainer instanceof HTMLElement?this.options.scrollContainer:document.querySelector(this.options.scrollContainer):this.scroller=window,this.sections=document.querySelectorAll(this.options.sectionClass),this.attachEventListeners()}attachEventListeners(){this.scroller&&(this.scroller.addEventListener("scroll",()=>this.onScroll()),this.options.smoothScroll&&this.menuList&&this.menuList.querySelectorAll(this.options.menuActiveTarget).forEach(t=>t.addEventListener("click",this.onClick.bind(this))))}onClick(e){if(e.target){const t=e.target.getAttribute(this.options.hrefAttribute);if(t){const o=document.querySelector(t);o&&this.options.smoothScroll&&(e.preventDefault(),this.scrollTo(o))}}}onScroll(){const e=this.getSectionInView(),t=this.getMenuItemBySection(e);if(!e||!t)return;const o=t?.getAttribute(this.options.hrefAttribute),s=this.activeItem?.getAttribute(this.options.hrefAttribute);t&&o&&o!==s&&(this.removeCurrentActive({ignore:t}),this.setActive(t))}scrollTo(e){const t=typeof this.options.smoothScrollBehavior=="function"&&this.options.smoothScrollBehavior;t?t(e,this.options.smoothScroll):e.scrollIntoView({...this.options.smoothScroll===!0?{}:this.options.smoothScroll,behavior:"smooth"})}getMenuItemBySection(e){if(!e||!this.menuList)return;const t=e.getAttribute("id");return this.menuList.querySelector(`[${this.options.hrefAttribute}="#${t}"]`)}getSectionInView(){for(let e=0;e<this.sections.length;e++){const t=this.sections[e].offsetTop,o=t+this.sections[e].offsetHeight;let s=(document.documentElement.scrollTop||document.body.scrollTop)+this.options.offset;if(this.options.scrollContainer&&this.scroller&&(s=(this.scroller instanceof Window?this.scroller.scrollY:this.scroller.scrollTop)+this.options.offset),s>t&&s<=o)return this.sections[e]}}setActive(e){this.activeItem=e,this.activeItem.classList.contains(this.options.activeClass)||(this.activeItem.classList.add(this.options.activeClass),typeof this.options.onActive=="function"&&this.options.onActive(this.activeItem))}removeCurrentActive({ignore:e}={}){if(this.activeItem)this.activeItem.classList.remove(this.options.activeClass),this.activeItem=null;else if(this.menuList){const{hrefAttribute:t,menuActiveTarget:o,activeClass:s}=this.options,u=e?`${o}.${s}:not([${t}="${e.getAttribute(t)}"])`:`${o}.${s}`;this.menuList.querySelectorAll(u).forEach(n=>n.classList.remove(this.options.activeClass))}}}return d.ScrollSpy=i,d}var S;function E(){if(S)return p;S=1,Object.defineProperty(p,"__esModule",{value:!0});const i=w(),l=(e,t={})=>{const o=new i.ScrollSpy(e,t);return o.onScroll(),window.addEventListener("scroll",()=>o.onScroll()),o};return p.default=l,p}var I=E();const C=L(I);var v={exports:{}},b;function T(){if(b)return v.exports;b=1;function i(l,e=100,t={}){if(typeof l!="function")throw new TypeError(`Expected the first parameter to be a function, got \`${typeof l}\`.`);if(e<0)throw new RangeError("`wait` must not be negative.");const{immediate:o}=typeof t=="boolean"?{immediate:t}:t;let s,u,n,g,a;function h(){const c=s,m=u;return s=void 0,u=void 0,a=l.apply(c,m),a}function f(){const c=Date.now()-g;c<e&&c>=0?n=setTimeout(f,e-c):(n=void 0,o||(a=h()))}const r=function(...c){if(s&&this!==s&&Object.getPrototypeOf(this)===Object.getPrototypeOf(s))throw new Error("Debounced method called with different contexts of the same prototype.");s=this,u=c,g=Date.now();const m=o&&!n;return n||(n=setTimeout(f,e)),m&&(a=h()),a};return Object.defineProperty(r,"isPending",{get(){return n!==void 0}}),r.clear=()=>{n&&(clearTimeout(n),n=void 0)},r.flush=()=>{n&&r.trigger()},r.trigger=()=>{a=h(),r.clear()},r}return v.exports.debounce=i,v.exports=i,v.exports}var q=T();const x=L(q);document.addEventListener("astro:page-load",()=>{const i=document.querySelector(".toc-current-section"),l=document.querySelector(".stickyHeader"),e=document.querySelector(".toc-toggle"),t=document.getElementById("tocList"),o=document.querySelector(".table-of-contents");let s=!1;const u=()=>{document.documentElement.clientWidth>=1280?(t?.classList.remove("toc-list"),t?.style.removeProperty("max-height"),s=!0,o?.classList.remove("is-sticky"),l?.classList.add("rounded-b-xl")):(t?.classList.add("toc-list"),s=!1,t?.style.removeProperty("max-height"),l&&o&&A(o,{callback:c=>{document.documentElement.clientWidth<888?(l.classList.toggle("shadow-lg",c),l.classList.toggle("rounded-b-xl",!c)):o.classList.remove("is-sticky")}}))},n=()=>{document.documentElement.clientWidth>=1280||(s=!s,t&&(t.style.maxHeight=s?`${t.scrollHeight}px`:"0"))},a=Array.from({length:4},(r,c)=>`#postContent h${c+1}`).join(", "),h=r=>{r&&i&&(i.innerHTML=r.innerHTML)};h(document.querySelector(".table-of-contents ul li:first-child a")),C(".table-of-contents ul",{sectionClass:a,offset:100,onActive:h}),u();const f=x(u,200);window.addEventListener("resize",f),e?.addEventListener("click",n)});