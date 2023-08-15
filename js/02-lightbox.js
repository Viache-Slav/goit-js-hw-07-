import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEll = document.querySelector('.gallery')
const listEl = []

galleryItems.forEach(element => {
    const galleryLink = document.createElement('a')
    galleryLink.className = 'gallery__item'
    galleryLink.href = element.original

    const galleryImage = document.createElement('img')
    galleryImage.src = element.preview
    galleryImage.className ='gallery__image'
    galleryImage.setAttribute('title', element.description)
    galleryImage.alt = element.description

    galleryLink.append(galleryImage)
    listEl.push(galleryLink)
})

galleryEll.append(...listEl)

new SimpleLightbox('.gallery a', {
    captionDelay: 250
})

