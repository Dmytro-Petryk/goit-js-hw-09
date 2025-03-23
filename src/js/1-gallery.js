import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const basePath = import.meta.env.BASE_URL;

const images = [
  {
    preview: `${basePath}img/1.png`,
    original: `${basePath}img/large1.jpg`,
    description: 'Image description',
  },
  {
    preview: `${basePath}img/2.png`,
    original: `${basePath}img/large2.jpg`,
    description: 'Image description',
  },
  {
    preview: `${basePath}img/3.png`,
    original: `${basePath}img/large3.jpg`,
    description: 'Image description',
  },
  {
    preview: `${basePath}img/1-1.png`,
    original: `${basePath}/img/large1-1.jpg`,
    description: 'Image description',
  },
  {
    preview: `${basePath}img/2-1.png`,
    original: `${basePath}img/large2-1.jpg`,
    description: 'Image description',
  },
  {
    preview: `${basePath}img/3-1.png`,
    original: `${basePath}img/large3-1.jpg`,
    description: 'Image description',
  },
  {
    preview: `${basePath}img/1-2.png`,
    original: `${basePath}img/large1-2.jpg`,
    description: 'Image description',
  },
  {
    preview: `${basePath}img/2-2.png`,
    original: `${basePath}img/large2-2.jpg`,
    description: 'Image description',
  },
  {
    preview: `${basePath}img/3-2.png`,
    original: `${basePath}img/large3-2.jpg`,
    description: 'Image description',
  },
];

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
  )
  .join('');

galleryContainer.classList.add('gallery-styled');

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    enableKeyboard: true,
    overlayOpacity: 0.8,
  });

  lightbox.on('shown.simplelightbox', () => {
    document.querySelector('.sl-overlay').style.backgroundColor = '#2E2F42';
  });
});
