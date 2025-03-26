import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as a}from"./assets/vendor-CgTBfC_f.js";const l=[{preview:"./img/1.png",original:"./img/large1.jpg",description:"Image description"},{preview:"./img/2.png",original:"./img/large2.jpg",description:"Image description"},{preview:"./img/3.png",original:"./img/large3.jpg",description:"Image description"},{preview:"./img/1-1.png",original:"./img/large1-1.jpg",description:"Image description"},{preview:"./img/2-1.png",original:"./img/large2-1.jpg",description:"Image description"},{preview:"./img/3-1.png",original:"./img/large3-1.jpg",description:"Image description"},{preview:"./img/1-2.png",original:"./img/large1-2.jpg",description:"Image description"},{preview:"./img/2-2.png",original:"./img/large2-2.jpg",description:"Image description"},{preview:"./img/3-2.png",original:"./img/large3-2.jpg",description:"Image description"}],i=document.querySelector(".gallery");i.innerHTML=l.map(({preview:e,original:g,description:r})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${g}">
          <img
            class="gallery-image"
            src="${e}"
            alt="${r}"
          />
        </a>
      </li>`).join("");i.classList.add("gallery-styled");const n=new a(".gallery a",{captionsData:"alt",captionDelay:250});n.on("shown.simplelightbox",()=>{document.querySelector(".sl-overlay").style.backgroundColor="#2E2F42"});
//# sourceMappingURL=1-gallery.js.map
