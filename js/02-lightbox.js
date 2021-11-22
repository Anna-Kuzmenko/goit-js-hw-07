import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalletyItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalletyItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `
     <li> 
        <a class="gallery__item"
            href="${original}">
            <img class="gallery__image"
            src="${preview}" 
            alt="${description}" />
        </a>
     </li>
    `;
    })
    .join('');
}

galleryContainer.addEventListener('click', onShowGalleryModal);

function onShowGalleryModal(event) {
    event.preventDefault();

     if (event.target.nodeName !== 'IMG') {
    return;
    };
    
    const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom'});

}



