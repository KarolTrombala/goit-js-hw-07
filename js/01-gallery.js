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
      data-source="${item.original}"
      alt="${item.description}"
      />
      </a>
      </div`
    );
  })
  .join("");

galleryEl.addEventListener("click", (e) => {
  e.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onClose: (instance) => {
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape")
            instance.close(() =>
              document.removeEventListener("keydown", "Escape")
            );
        });
      },
    }
  );
  instance.show();
});
