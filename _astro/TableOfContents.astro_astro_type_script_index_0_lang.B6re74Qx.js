import{i as v}from"./isSticky.YloXe7X1.js";function S(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var u={},l={},d;function y(){if(d)return l;d=1,Object.defineProperty(l,"__esModule",{value:!0}),l.ScrollSpy=void 0;class i{menuList;options;scroller;sections;activeItem=null;constructor(e,t={}){if(!e)throw new Error("Your navigation query selector is the first argument.");if(typeof t!="object")throw new Error("The second argument must be an instance of an Object.");let s={sectionClass:".scrollspy",menuActiveTarget:"li > a",offset:0,hrefAttribute:"href",activeClass:"active",scrollContainer:"",smoothScroll:{}};t.smoothScroll=t.smoothScroll===!0&&{}||t.smoothScroll,this.menuList=e instanceof HTMLElement?e:document.querySelector(e),this.options=Object.assign({},s,t),this.options.scrollContainer?this.scroller=this.options.scrollContainer instanceof HTMLElement?this.options.scrollContainer:document.querySelector(this.options.scrollContainer):this.scroller=window,this.sections=document.querySelectorAll(this.options.sectionClass),this.attachEventListeners()}attachEventListeners(){this.scroller&&(this.scroller.addEventListener("scroll",()=>this.onScroll()),this.options.smoothScroll&&this.menuList&&this.menuList.querySelectorAll(this.options.menuActiveTarget).forEach(t=>t.addEventListener("click",this.onClick.bind(this))))}onClick(e){if(e.target){const t=e.target.getAttribute(this.options.hrefAttribute);if(t){const s=document.querySelector(t);s&&this.options.smoothScroll&&(e.preventDefault(),this.scrollTo(s))}}}onScroll(){const e=this.getSectionInView(),t=this.getMenuItemBySection(e);if(!e||!t)return;const s=t?.getAttribute(this.options.hrefAttribute),o=this.activeItem?.getAttribute(this.options.hrefAttribute);t&&s&&s!==o&&(this.removeCurrentActive({ignore:t}),this.setActive(t))}scrollTo(e){const t=typeof this.options.smoothScrollBehavior=="function"&&this.options.smoothScrollBehavior;t?t(e,this.options.smoothScroll):e.scrollIntoView({...this.options.smoothScroll===!0?{}:this.options.smoothScroll,behavior:"smooth"})}getMenuItemBySection(e){if(!e||!this.menuList)return;const t=e.getAttribute("id");return this.menuList.querySelector(`[${this.options.hrefAttribute}="#${t}"]`)}getSectionInView(){for(let e=0;e<this.sections.length;e++){const t=this.sections[e].offsetTop,s=t+this.sections[e].offsetHeight;let o=(document.documentElement.scrollTop||document.body.scrollTop)+this.options.offset;if(this.options.scrollContainer&&this.scroller&&(o=(this.scroller instanceof Window?this.scroller.scrollY:this.scroller.scrollTop)+this.options.offset),o>t&&o<=s)return this.sections[e]}}setActive(e){this.activeItem=e,this.activeItem.classList.contains(this.options.activeClass)||(this.activeItem.classList.add(this.options.activeClass),typeof this.options.onActive=="function"&&this.options.onActive(this.activeItem))}removeCurrentActive({ignore:e}={}){if(this.activeItem)this.activeItem.classList.remove(this.options.activeClass),this.activeItem=null;else if(this.menuList){const{hrefAttribute:t,menuActiveTarget:s,activeClass:o}=this.options,r=e?`${s}.${o}:not([${t}="${e.getAttribute(t)}"])`:`${s}.${o}`;this.menuList.querySelectorAll(r).forEach(a=>a.classList.remove(this.options.activeClass))}}}return l.ScrollSpy=i,l}var f;function g(){if(f)return u;f=1,Object.defineProperty(u,"__esModule",{value:!0});const i=y(),n=(e,t={})=>{const s=new i.ScrollSpy(e,t);return s.onScroll(),window.addEventListener("scroll",()=>s.onScroll()),s};return u.default=n,u}var L=g();const b=S(L);document.addEventListener("astro:page-load",()=>{const i=document.querySelector(".toc-current-section"),n=document.querySelector(".stickyHeader"),e=document.querySelector(".toc-toggle"),t=document.getElementById("tocList"),s=document.querySelector(".table-of-contents");let o=!1;const r=()=>{document.documentElement.clientWidth>=1280?(t?.classList.remove("toc-list"),t?.style.removeProperty("max-height"),o=!0,s?.classList.remove("is-sticky"),n?.classList.add("rounded-b-xl")):(t?.classList.add("toc-list"),o=!1,t?.style.removeProperty("max-height"),n&&s&&v(s,{callback:h=>{document.documentElement.clientWidth<888?(n.classList.toggle("shadow-lg",h),n.classList.toggle("rounded-b-xl",!h)):s.classList.remove("is-sticky")}}))},a=()=>{document.documentElement.clientWidth>=1280||(o=!o,t&&(t.style.maxHeight=o?`${t.scrollHeight}px`:"0"))},p=Array.from({length:4},(c,h)=>`#postContent h${h+1}`).join(", "),m=c=>{c&&i&&(i.innerHTML=c.innerHTML)};m(document.querySelector(".table-of-contents ul li:first-child a")),b(".table-of-contents ul",{sectionClass:p,offset:100,onActive:m}),r(),window.addEventListener("resize",r),e?.addEventListener("click",a)});
