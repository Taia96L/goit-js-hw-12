/* empty css                      */import{a as $,S as q,i as m}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const I="https://pixabay.com/api/",B="52601802-71ac4fbf0a7c54a08716d644c",d=15;async function f(o,r){const s=new URLSearchParams({key:B,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:d}),a=await $.get(`${I}?${s}`),e=Math.ceil(a.data.totalHits/d);return{data:a.data.hits,totalPages:e}}const h=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".button-more"),M=new q(".gallery-item .link",{captionsData:"alt",captionDelay:250});function g(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t=0,views:n=0,comments:P=0,downloads:S=0})=>`
      <li class="gallery-item">
        <a class="link" href="${a}">
          <img src="${s}" alt="${e}" class="image" width="400">
        </a>
        <div class="information like">
          <h4>Likes</h4>
          <p>${t}</p>
        </div>
        <div class="information views">
          <h4>Views</h4>
          <p>${n}</p>
        </div>
        <div class="information comments">
          <h4>Comments</h4>
          <p>${P}</p>
        </div>
        <div class="information downloads">
          <h4>Downloads</h4>
          <p>${S}</p>
        </div>
      </li>
  `).join("");h.insertAdjacentHTML("beforeend",r),M.refresh()}function E(){h.innerHTML=""}function L(){p.classList.remove("hide")}function v(){p.classList.add("hide")}function w(){y.classList.remove("hide")}function l(){y.classList.add("hide")}const b=document.querySelector(".form"),H=document.querySelector(".button-more"),O=document.querySelector(".gallery");let i=1,c="";b.addEventListener("submit",D);H.addEventListener("click",N);async function D(o){o.preventDefault(),i=1;const{["search-text"]:r}=o.target.elements;c=r.value.trim(),E(),l();try{if(!c.length){r.classList.add("error"),u("Input shouldn't be empty!");return}r.classList.remove("error"),L();const{data:s,totalPages:a}=await f(c,i);if(s.length)g(s);else throw new Error("No images found!");i<a&&w()}catch(s){u(s.message)}finally{v()}b.reset()}async function N(o){o.preventDefault();const r=o.currentTarget;i+=1,L(),r.disabled=!0;try{const{data:s,totalPages:a}=await f(c,i);g(s),i<a?w():(l(),R("We're sorry, but you've reached the end of search results."));const e=O.querySelector(".gallery-item");if(e){const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch(s){l(),u(s.message)}finally{v(),r.disabled=!1}}function u(o){m.error({message:o,position:"topRight",timeout:3e3})}function R(o){m.info({message:o,position:"topRight",timeout:3e3})}
//# sourceMappingURL=index.js.map
