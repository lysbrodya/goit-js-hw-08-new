import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItemsUse = galleryItems;

const galleryEl = document.querySelector('.gallery');

const items = galleryItemsUse
  .map(e => {
    return `    <li class="gallery__item">
  <a class="gallery__link" href="${e.original}">
    <img
      class="gallery__image"
      src="${e.preview}"
      alt="${e.description}"
    />
  </a>
</li>`;
  })
  .join('');

galleryEl.innerHTML = items;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 500,
});
const message = 'Hi MAN';
console.log(message);
