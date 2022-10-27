
import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryContainer = document.querySelector('.gallery');
const galleryMakrup = createCalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMakrup )

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

    if(event.target.dataset.source) {
        return event.target.dataset.source;
    }

    
    const instance = basicLightbox.create(`
    <div class="modal">
       <img src="">
    </div>
`)

instance.show()

    console.log(event.target)

   


    
}



console.log(galleryItems);
