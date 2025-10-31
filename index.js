/* empty css                      */import{a as I,S as $,i as f}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const B="https://pixabay.com/api/",M="52601802-71ac4fbf0a7c54a08716d644c",d=15;async function m(e,o){const n=new URLSearchParams({key:M,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:d}),s=await I.get(`${B}?${n}`),t=Math.ceil(s.data.totalHits/d);return{data:s.data.hits,totalPages:t}}const h=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".button-more"),E=new $(".gallery-item .link",{captionsData:"alt",captionDelay:250});function g(e){const o=e.map(({webformatURL:n,largeImageURL:s,tags:t,likes:r=0,views:a=0,comments:S=0,downloads:q=0})=>`
      <li class="gallery-item">
        <a class="link" href="${s}">
          <img src="${n}" alt="${t}" class="image" width="400">
        </a>
        <div class="information like">
          <h4>Likes</h4>
          <p>${r}</p>
        </div>
        <div class="information views">
          <h4>Views</h4>
          <p>${a}</p>
        </div>
        <div class="information comments">
          <h4>Comments</h4>
          <p>${S}</p>
        </div>
        <div class="information downloads">
          <h4>Downloads</h4>
          <p>${q}</p>
        </div>
      </li>
  `).join("");h.insertAdjacentHTML("beforeend",o),E.refresh()}function H(){h.innerHTML=""}function L(){p.classList.remove("hide")}function b(){p.classList.add("hide")}function v(){y.classList.remove("hide")}function l(){y.classList.add("hide")}function O(){const e=document.querySelector(".button-more");e&&(e.disabled=!0)}function D(){const e=document.querySelector(".button-more");e&&(e.disabled=!1)}function N(e){e&&e.classList.add("error")}function R(e){e&&e.classList.remove("error")}const w=document.querySelector(".form"),x=document.querySelector(".gallery");let i=1,c="";w.addEventListener("submit",A);document.querySelector(".button-more").addEventListener("click",_);async function A(e){e.preventDefault(),i=1;const{["search-text"]:o}=e.target.elements;c=o.value.trim(),H(),l();try{if(!c.length){N(o),u("Input shouldn't be empty!");return}R(o),L();const{data:n,totalPages:s}=await m(c,i);if(!n.length)throw new Error("No images found!");g(n),i<s?v():P("We're sorry, but you've reached the end of search results.")}catch(n){u(n.message)}finally{b()}w.reset()}async function _(e){e.preventDefault(),i+=1,L(),O();try{const{data:o,totalPages:n}=await m(c,i);g(o),i<n?v():(l(),P("We're sorry, but you've reached the end of search results."));const s=x.querySelector(".gallery-item");if(s){const t=s.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}catch(o){l(),u(o.message)}finally{b(),D()}}function u(e){f.error({message:e,position:"topRight",timeout:3e3})}function P(e){f.info({message:e,position:"topRight",timeout:3e3})}
//# sourceMappingURL=index.js.map
