import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createCalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup )

function createCalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({preview, original, description}) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
    </a>
    </div>
    `;
    })
    .join(' ');

};

galleryContainer.addEventListener('click', handleGalleryCardsMarkup);
    
function handleGalleryCardsMarkup(event) {
    event.preventDefault()
    if(!event.target.classList.contains('gallery__image')) {
        return
    };
    
const instance = basicLightbox.create(`
       <img src = ${event.target.dataset.source} width="800" height="600">
    `);
   instance.show();

window.addEventListener('keydown', (event) => {
    if( event.code === 'Escape') instance.close();
});
};
