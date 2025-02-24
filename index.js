import{a as x,S,i as d}from"./assets/vendor-hwdYKDic.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function p(s,t,r){const i={params:{key:"48865125-4f8597dc0399716036b78fee9",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:r,page:t}};return(await x.get("https://pixabay.com/api/",i)).data}const c=document.querySelector(".gallery"),f=document.querySelector(".loader-box");function q(s,t){const r=s.map(({webformatURL:i,largeImageURL:e,tags:o,likes:n,views:L,comments:w,downloads:v})=>`
            <li class="gallery-item">
              <a class="gallery-link" href="${e}">
                <figure class="thumb-container">
                  <img
                    class="thumb-image"
                    src="${i}"
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
                        <dd class="thumb-data-data">${L}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Comments</dt>
                        <dd class="thumb-data-data">${w}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Downloads</dt>
                        <dd class="thumb-data-data">${v}</dd>
                      </div>
                    </dl>
                  </figcaption>
                </figure>
              </a>
            </li>
          `).join("");t===1?c.innerHTML=r:c.insertAdjacentHTML("beforeend",r),E.refresh(),l()}const E=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(){f.classList.remove("hidden")}function l(){c.classList.remove("hidden"),f.classList.add("hidden")}function M(){d.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function C(){d.show({position:"topRight",message:"Something went wrong...",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function h(){d.show({position:"bottomRight",message:"We are sorry, but you have reached the end of search results.",close:"true",title:"Info",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function $(){const t=c.lastElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t*3})}const P=document.querySelector("form"),m=document.querySelector("#search-text"),u=document.querySelector(".button"),a={query:"",page:1,per_page:40,total:100};async function b(s,t,r){const i=Math.ceil(r/a.per_page);s.length===0?(g(i),M()):(q(s,t),t===i?h():(g(i),a.page>=i&&h()))}P.addEventListener("submit",async s=>{if(s.preventDefault(),a.page=1,a.query=m.value.trim(),!!a.query){m.value="",y();try{const t=await p(a.query,a.page,a.per_page);await b(t.hits,a.page,t.total),a.total=t.total}catch(t){console.error("Помилка запиту:",t),C()}finally{l()}}});u.addEventListener("click",async()=>{a.page+=1,y();const s=await p(a.query,a.page,a.per_page);await b(s.hits,a.page,s.total),l(),$()});function B(){u.classList.remove("hidden")}function H(){u.classList.add("hidden")}function g(s){a.page>=s?H():B()}
//# sourceMappingURL=index.js.map
