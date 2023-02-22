import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', onOpensLargeImgClick);

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
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
    .join('');
}

function onOpensLargeImgClick(evt) {
  evt.preventDefault(); // off link
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const largeImg = basicLightbox.create(
    `
		<img width="1400" height="900" src="${evt.target.dataset.source}">
	`,
  );

  largeImg.show();

  galleryRef.addEventListener('keydown', evt => {
    if (evt.code !== 'Escape') {
      return;
    }

    largeImg.close();
  });
}
