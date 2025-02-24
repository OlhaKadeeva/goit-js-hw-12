import{a as q,S as E,i as d}from"./assets/vendor-Drdy4odr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function m(s,t,i){const r={params:{key:"48865125-4f8597dc0399716036b78fee9",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:i,page:t}};return(await q.get("https://pixabay.com/api/",r)).data}const c=document.querySelector(".gallery"),g=document.querySelector(".loader-box");function M(s,t){const i=s.map(({webformatURL:r,largeImageURL:e,tags:o,likes:n,views:v,comments:x,downloads:S})=>`
            <li class="gallery-item">
              <a class="gallery-link" href="${e}">
                <figure class="thumb-container">
                  <img
                    class="thumb-image"
                    src="${r}"
                    data-source="${e}"
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
          `).join("");t===1?c.innerHTML=i:c.insertAdjacentHTML("beforeend",i),C.refresh(),f()}const C=new E(".gallery a",{captionsData:"alt",captionDelay:250});function p(){g.classList.remove("hidden")}function f(){c.classList.remove("hidden"),g.classList.add("hidden")}function $(){d.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function P(){d.show({position:"topRight",message:"Something went wrong...",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function B(){d.show({position:"bottomRight",message:"We are sorry, but you have reached the end of search results.",close:"true",title:"Info",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function H(){const t=c.lastElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t*3})}const O=document.querySelector("form"),u=document.querySelector("#search-text"),l=document.querySelector(".button"),y=document.querySelector(".js-loader"),a={query:"",page:1,per_page:40,total:100};async function b(s,t){s.length===0?t===1?$():h():(M(s,t),h())}O.addEventListener("submit",async s=>{if(s.preventDefault(),L(),a.page=1,a.query=u.value.trim(),!!a.query){u.value="",p();try{const t=await m(a.query,a.page,a.per_page);await b(t.hits,a.page),a.total=t.total}catch(t){console.error("Помилка запиту:",t),P()}finally{f(),w()}}});l.addEventListener("click",async()=>{a.page+=1,L(),p();const s=await m(a.query,a.page,a.per_page);await b(s.hits,a.page),w(),H()});function _(){l.classList.remove("hidden")}function z(){l.classList.add("hidden")}function h(){const s=Math.ceil(a.total/a.per_page);a.page>=s?(z(),B()):_()}function L(){y.classList.remove("hidden")}function w(){y.classList.add("hidden")}
//# sourceMappingURL=index.js.map
