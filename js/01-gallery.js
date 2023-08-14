import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// Change code below this line

const galleryEll = document.querySelector('.gallery');
for (let img of galleryItems) {
    const listEl = `<li class="gallery__item">
    <a class="gallery__link" href=${img.original}>
    <img
        class="gallery__image"
        src=${img.preview}
        data-source=${img.original}
        alt=${img.description}
    />
    </a>
    </li>`;
    galleryEll.insertAdjacentHTML("beforeend", listEl);
}

galleryEll.addEventListener("click", (event) => {
    event.preventDefault();
    const view = basicLightbox.create(`<img src="${event.target.dataset.source}" width="900" height="700">`);
    view.show();
});