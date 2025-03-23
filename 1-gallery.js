import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as o}from"./assets/vendor-CgTBfC_f.js";const i="/goit-js-hw-09",n=[{preview:`${i}img/1.png`,original:`${i}img/large1.jpg`,description:"Image description"},{preview:`${i}img/2.png`,original:`${i}img/large2.jpg`,description:"Image description"},{preview:`${i}img/3.png`,original:`${i}img/large3.jpg`,description:"Image description"},{preview:`${i}img/1-1.png`,original:`${i}/img/large1-1.jpg`,description:"Image description"},{preview:`${i}img/2-1.png`,original:`${i}img/large2-1.jpg`,description:"Image description"},{preview:`${i}img/3-1.png`,original:`${i}img/large3-1.jpg`,description:"Image description"},{preview:`${i}img/1-2.png`,original:`${i}img/large1-2.jpg`,description:"Image description"},{preview:`${i}img/2-2.png`,original:`${i}img/large2-2.jpg`,description:"Image description"},{preview:`${i}img/3-2.png`,original:`${i}img/large3-2.jpg`,description:"Image description"}],g=document.querySelector(".gallery");g.innerHTML=n.map(({preview:e,original:r,description:a})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            src="${e}"
            alt="${a}"
          />
        </a>
      </li>`).join("");g.classList.add("gallery-styled");document.addEventListener("DOMContentLoaded",()=>{new o(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,enableKeyboard:!0,overlayOpacity:.8}).on("shown.simplelightbox",()=>{document.querySelector(".sl-overlay").style.backgroundColor="#2E2F42"})});
//# sourceMappingURL=1-gallery.js.map
