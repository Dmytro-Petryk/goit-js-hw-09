import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as a}from"./assets/vendor-CgTBfC_f.js";const n=[{preview:"/img/1.png",original:"/img/large1.jpg",description:"Image description"},{preview:"./img/2.png",original:"./img/large2.jpg",description:"Image description"},{preview:"./img/3.png",original:"./img/large3.jpg",description:"Image description"},{preview:"./img/1-1.png",original:"./img/large1-1.jpg",description:"Image description"},{preview:"./img/2-1.png",original:"./img/large2-1.jpg",description:"Image description"},{preview:"./img/3-1.png",original:"./img/large3-1.jpg",description:"Image description"},{preview:"./img/1-2.png",original:"./img/large1-2.jpg",description:"Image description"},{preview:"./img/2-2.png",original:"./img/large2-2.jpg",description:"Image description"},{preview:"./img/3-2.png",original:"./img/large3-2.jpg",description:"Image description"}],e=document.querySelector(".gallery");e.innerHTML=n.map(({preview:i,original:g,description:r})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${g}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${r}"
          />
        </a>
      </li>`).join("");e.classList.add("gallery-styled");document.addEventListener("DOMContentLoaded",()=>{new a(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,enableKeyboard:!0,overlayOpacity:.8}).on("shown.simplelightbox",()=>{document.querySelector(".sl-overlay").style.backgroundColor="#2E2F42"})});
//# sourceMappingURL=1-gallery.js.map
