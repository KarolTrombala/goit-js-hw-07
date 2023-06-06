import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

for (const item of galleryItems) {
    galleryEl.insertAdjacentHTML("beforeend", 
    `<div class="gallery_item">
    <a class="gallery_link" href="${item.original}">
    <img 
    class="gallery_image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    />
    </a>
    </div`);
}