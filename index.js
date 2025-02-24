import{a as q,S as E,i as d}from"./assets/vendor-Drdy4odr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();async function l(a,e,i){const r={params:{key:"48865125-4f8597dc0399716036b78fee9",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:e}};return(await q.get("https://pixabay.com/api/",r)).data}const c=document.querySelector(".gallery"),g=document.querySelector(".loader-box");function M(a,e){const i=a.map(({webformatURL:r,largeImageURL:t,tags:o,likes:n,views:v,comments:x,downloads:S})=>`
            <li class="gallery-item">
              <a class="gallery-link" href="${t}">
                <figure class="thumb-container">
                  <img
                    class="thumb-image"
                    src="${r}"
                    data-source="${t}"
                    alt="${o}"
                  />
  
                  <figcaption class="thumb-data">
                    <dl class="thumb-data-list">
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Likes</dt>
                        <dd class="thumb-data-data">${n}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Views</dt>
                        <dd class="thumb-data-data">${v}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Comments</dt>
                        <dd class="thumb-data-data">${x}</dd>
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
          `).join("");e===1?c.innerHTML=i:c.insertAdjacentHTML("beforeend",i),C.refresh(),f()}const C=new E(".gallery a",{captionsData:"alt",captionDelay:250});function p(){g.classList.remove("hidden")}function f(){c.classList.remove("hidden"),g.classList.add("hidden")}function $(){d.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function O(){d.show({position:"topRight",message:"Something went wrong...",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function P(){d.show({position:"bottomRight",message:"We are sorry, but you have reached the end of search results.",close:"true",title:"Info",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function B(){const e=c.lastElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e*3})}const H=document.querySelector("form"),h=document.querySelector("#search-text"),u=document.querySelector(".button"),y=document.querySelector(".js-loader");document.querySelector(".js-target");const s={query:"",page:1,per_page:40,total:100};async function b(a,e){a.length===0?e===1?$():m():(M(a,e),m())}H.addEventListener("submit",async a=>{if(a.preventDefault(),L(),s.page=1,s.query=h.value.trim(),!!s.query){h.value="",p();try{const e=await l(s.query,s.page,s.per_page);await b(e.hits,s.page),s.total=e.total}catch(e){console.error("Помилка запиту:",e),O()}finally{f(),w()}}});u.addEventListener("click",async()=>{s.page+=1,L(),p();const a=await l(s.query,s.page,s.per_page);await b(a.hits,s.page),w(),B()});function _(){u.classList.remove("hidden")}function z(){u.classList.add("hidden")}function m(){const a=Math.ceil(s.total/s.per_page);s.page>=a?(z(),P()):_()}function L(){y.classList.remove("hidden")}function w(){y.classList.add("hidden")}const I={rootMargin:"0px",threshold:1};new IntersectionObserver(a=>{const e=a[0];console.log(e),e.isIntersecting&&l()},I);
//# sourceMappingURL=index.js.map
