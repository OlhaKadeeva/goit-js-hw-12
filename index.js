import{a as w,S as x,i as h}from"./assets/vendor-hwdYKDic.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function q(s){const a={params:{key:"48865125-4f8597dc0399716036b78fee9",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}};return w.get("https://pixabay.com/api/",a)}const c=document.querySelector(".gallery"),n=document.querySelector(".loader-box");function E(s){const a=s.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:i,comments:v,downloads:S})=>`
            <li class="gallery-item">
              <a class="gallery-link" href="${o}">
                <figure class="thumb-container">
                  <img
                    class="thumb-image"
                    src="${r}"
                    data-source="${o}"
                    alt="${e}"
                  />
  
                  <figcaption class="thumb-data">
                    <dl class="thumb-data-list">
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Likes</dt>
                        <dd class="thumb-data-data">${t}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Views</dt>
                        <dd class="thumb-data-data">${i}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Comments</dt>
                        <dd class="thumb-data-data">${v}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Downloads</dt>
                        <dd class="thumb-data-data">${S}</dd>
                      </div>
                    </dl>
                  </figcaption>
                </figure>
              </a>
            </li>
          `).join("");c.innerHTML=a,M.refresh(),f()}const M=new x(".gallery a",{captionsData:"alt",captionDelay:250});function $(){c.classList.add("hidden"),n.classList.remove("hidden"),n.innerHTML='"Wait, the image is loaded..."'}function f(){c.classList.remove("hidden"),n.classList.add("hidden")}function P(){h.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function T(){h.show({position:"topRight",message:"Something went wrong...",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}const C=document.querySelector("form"),u=document.querySelector("#search-text"),d=document.querySelector(".btn-load"),g=document.querySelector(".js-loader"),p=document.querySelector(".gallery");let B,m,l,y=20;C.addEventListener("submit",H);async function H(s){s.preventDefault();const a=u.value.trim();if(!a)return;u.value="",$();let r=1,o=s.target.elements.query.value;try{const t=await fetchArticles(o,r,l,y);q(a);const i=e(t,i.data.hits);l=t.totalResults}catch{f(),T(),console.log(err)}function e(t){t.length==0&&P(),E(t)}b(),L()}d.addEventListener("click",async()=>{m+=1,A(),b();const s=await fetchArticles(B,m,l,y),a=articlesTemplate(s.images);p.insertAdjacentHTML("beforeend",a),L(),D()});function O(){d.disabled=!1}function z(){d.disabled=!0}function b(s,a,r){const e=Math.ceil(a/20);s>=e?(z(),iziToast.info("This is last page")):O()}function A(){g.classList.remove("hidden")}function L(){g.classList.add("hidden")}function D(){const a=p.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:a*2})}
//# sourceMappingURL=index.js.map
