import{u}from"./relativeTime.Cw4JtWda.js";document.addEventListener("astro:page-load",()=>{u();const n=document.querySelectorAll(".lazy-media"),c=new IntersectionObserver((i,o)=>{i.forEach(d=>{if(d.isIntersecting){const l=d.target;if(l.tagName==="IMG"){const r=l,e=r.getAttribute("data-full-url");e&&!r.dataset.loaded&&(r.src=e,r.dataset.loaded="true")}o.unobserve(l)}})});n.forEach(i=>c.observe(i));const t=document.querySelector(".video-modal"),a=t?.querySelector(".video-container"),s=t?.querySelector(".video-modal-close");t&&a&&s&&(document.querySelectorAll(".video-wrapper").forEach(o=>{const d=o.querySelector(".video-play-button"),l=o.querySelector("img")?.getAttribute("data-full-url"),r=o.querySelector("img")?.getAttribute("data-poster-url");d&&l&&d.addEventListener("click",()=>{const e=document.createElement("video");e.src=l,e.className="video-player",e.controls=!0,e.preload="auto",e.autoplay=!0,e.playsInline=!0,e.style.width="100%",e.style.height="100%",e.style.objectFit="cover",r&&(e.poster=r),a.innerHTML="",a.appendChild(e),t.classList.remove("hidden")})}),s.addEventListener("click",()=>{t.classList.add("hidden"),a.innerHTML=""}),t.addEventListener("click",o=>{o.target===t&&(t.classList.add("hidden"),a.innerHTML="")}))});
