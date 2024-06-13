import"./hoisted.CARNPtpX.js";document.addEventListener("astro:page-load",()=>{const o=document.querySelector(".copy-url-button");o?.addEventListener("click",async()=>{await i(o)});async function i(t){let e=t.getAttribute("data-url")||"",n=t.innerText;await navigator.clipboard.writeText(e),t.innerText="Copied",setTimeout(()=>{t.innerText=n},2500)}});document.addEventListener("astro:page-load",()=>{function o(){if(document.getElementById("tcomment")){const e=document.createElement("script");e.src="https://cdn.staticfile.org/twikoo/1.6.36/twikoo.all.min.js",e.async=!0,e.onload=()=>{const n=document.createElement("script");n.innerHTML=`
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
        `,document.body.appendChild(n)},document.body.appendChild(e)}}document.querySelectorAll("button.tk").forEach(t=>{t.addEventListener("click",()=>{o(),t.style.display="none"})})});
