import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const images = [
  {
    preview: './img/1.png',
    original: './img/large1.jpg',
    description: 'Image description',
  },
  {
    preview: './img/2.png',
    original: './img/large2.jpg',
    description: 'Image description',
  },
  {
    preview: './img/3.png',
    original: './img/large3.jpg',
    description: 'Image description',
  },
  {
    preview: './img/1-1.png',
    original: './img/large1-1.jpg',
    description: 'Image description',
  },
  {
    preview: './img/2-1.png',
    original: './img/large2-1.jpg',
    description: 'Image description',
  },
  {
    preview: './img/3-1.png',
    original: './img/large3-1.jpg',
    description: 'Image description',
  },
  {
    preview: './img/1-2.png',
    original: './img/large1-2.jpg',
    description: 'Image description',
  },
  {
    preview: './img/2-2.png',
    original: './img/large2-2.jpg',
    description: 'Image description',
  },
  {
    preview: './img/3-2.png',
    original: './img/large3-2.jpg',
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

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.on('shown.simplelightbox', () => {
  document.querySelector('.sl-overlay').style.backgroundColor = '#2E2F42';
});
