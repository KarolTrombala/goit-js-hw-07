import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryMap = galleryItems
  .map((item) => {
    galleryEl.insertAdjacentHTML(
      "beforeend",
      `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
      <img 
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      />
      </a>
      </div`
    );
  })
  .join("");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
