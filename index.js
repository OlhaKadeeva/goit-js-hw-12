import{a as x,S,i as d}from"./assets/vendor-hwdYKDic.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function f(a,t){const r={params:{key:"48865125-4f8597dc0399716036b78fee9",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:t}};return(await x.get("https://pixabay.com/api/",r)).data}const c=document.querySelector(".gallery"),p=document.querySelector(".loader-box");function q(a,t){const r=a.map(({webformatURL:i,largeImageURL:e,tags:o,likes:n,views:w,comments:L,downloads:v})=>`
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
                        <dd class="thumb-data-data">${w}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Comments</dt>
                        <dd class="thumb-data-data">${L}</dd>
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
          `).join("");t===1?c.innerHTML=r:c.insertAdjacentHTML("beforeend",r),E.refresh(),l()}const E=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(){p.classList.remove("hidden")}function l(){c.classList.remove("hidden"),p.classList.add("hidden")}function M(){d.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function C(){d.show({position:"topRight",message:"Something went wrong...",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function h(){d.show({position:"bottomRight",message:"We're sorry, but you've reached the end of search results.",close:"true",title:"Info",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function $(){const t=c.lastElementChild.getBoundingClientRect().height;window.scrollBy({behavior:"smooth",top:t*3})}const P=document.querySelector("form"),m=document.querySelector("#search-text"),u=document.querySelector(".button"),s={query:"",page:1,per_page:40,total:100};async function b(a,t,r){let i=Math.ceil(r/s.per_page);if(a.length===0){g(i),M();return}else q(a,t),g(i),(t===i||s.page>=i)&&h()}P.addEventListener("submit",async a=>{if(a.preventDefault(),s.page=1,s.query=m.value.trim(),!!s.query){m.value="",y();try{const t=await f(s.query,s.page,s.per_page);await b(t.hits,s.page,t.total)}catch(t){console.error("Помилка запиту:",t),C()}finally{s.total=data.total,l()}}});u.addEventListener("click",async()=>{y(),s.page++;const a=await f(s.query,s.page);await b(a.hits,s.page,a.total),l(),$()});function B(){u.classList.remove("hidden")}function H(){u.classList.add("hidden")}function g(a){s.page>=a?H():B()}
//# sourceMappingURL=index.js.map
