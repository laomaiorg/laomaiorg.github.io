import"./hoisted.WtsUIDFD.js";document.addEventListener("astro:page-load",()=>{const n=document.querySelector(".copy-url-button");n?.addEventListener("click",async()=>{await i(n)});async function i(t){let e=t.getAttribute("data-url")||"",o=t.innerText;await navigator.clipboard.writeText(e),t.innerText="Copied",setTimeout(()=>{t.innerText=o},2500)}});document.addEventListener("astro:page-load",()=>{function n(){if(document.getElementById("tcomment")){const e=document.createElement("script");e.src="https://s4.zstatic.net/ajax/libs/twikoo/1.6.38/twikoo.min.js",e.integrity="sha384-vf16TDGmr7CsD51LXcAjGfb7QbTtqNB1Fiy2FYUlDsrBabROKT6HatKDu9iqNtSj",e.crossOrigin="anonymous",e.async=!0,e.onload=()=>{const o=document.createElement("script");o.innerHTML=`
            twikoo.init({
                envId: 'https://twikoo.iamlm.com',
                el: '#tcomment',
                onCommentLoaded: function () {
                  document.querySelectorAll('#twikoo a').forEach(function(aEl){
                    if(!aEl.href.startsWith(window.location.origin)){
                      aEl.href='/go/?url='+encodeURI(aEl.href);
                    }
                  });
                }
            });
        `,document.body.appendChild(o)},document.body.appendChild(e)}}document.querySelectorAll("button.tk").forEach(t=>{t.addEventListener("click",()=>{n(),t.style.display="none"})})});
