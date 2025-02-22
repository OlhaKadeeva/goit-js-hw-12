import{a as f,S as g,i as l}from"./assets/vendor-hwdYKDic.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(i){const s={params:{key:"48865125-4f8597dc0399716036b78fee9",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}};return f.get("https://pixabay.com/api/",s)}const n=document.querySelector(".gallery"),d=document.querySelector(".loader-box");function b(i){const s=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:r,comments:m,downloads:h})=>`
            <li class="gallery-item">
              <a class="gallery-link" href="${a}">
                <figure class="thumb-container">
                  <img
                    class="thumb-image"
                    src="${o}"
                    data-source="${a}"
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
                        <dd class="thumb-data-data">${r}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Comments</dt>
                        <dd class="thumb-data-data">${m}</dd>
                      </div>
                      <div class="thumb-data-item">
                        <dt class="thumb-data-title">Downloads</dt>
                        <dd class="thumb-data-data">${h}</dd>
                      </div>
                    </dl>
                  </figcaption>
                </figure>
              </a>
            </li>
          `).join("");n.innerHTML=s,y.refresh(),u()}const y=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(){n.classList.add("hidden"),d.classList.remove("hidden"),d.innerHTML='"Wait, the image is loaded..."'}function u(){n.classList.remove("hidden"),d.classList.add("hidden")}function v(){l.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}function x(){l.show({position:"topRight",message:"Something went wrong...",close:"true",title:"Error",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",maxWidth:"432px",backgroundColor:"#EF4040"})}const w=document.querySelector("form"),c=document.querySelector("#search-text");w.addEventListener("submit",S);function S(i){i.preventDefault();const s=c.value.trim();if(!s)return;c.value="",L(),p(s).then(a=>o(a.data.hits)).catch(a=>{u(),x(),console.log(a)});function o(a){a.length==0&&v(),b(a)}}
//# sourceMappingURL=index.js.map
