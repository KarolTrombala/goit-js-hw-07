import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

// OLD VERSION

// for (const item of galleryItems) {
//   galleryEl.insertAdjacentHTML(
//     "beforeend",
//     `<div class="gallery__item">
//     <a class="gallery__link" href="${item.original}">
//     <img
//     class="gallery__image"
//     src="${item.preview}"
//     data-source="${item.original}"
//     alt="${item.description}"
//     />
//     </a>
//     </div`
//   );
// }

// NEW VERSION

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
    `<img src="${e.target.dataset.source}">`
  );

  instance.show();

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});
