// Navigator
let navItems = document.querySelectorAll(".nav-bar > ul li a");
let navItemsArr = Array.from(navItems);
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.page).scrollIntoView({
      behavior: "smooth",
    });
    navItemsArr
      .filter((activeItem) => activeItem.classList.contains("active"))
      .forEach((aT) => aT.classList.remove("active"));
    e.target.classList.add("active");
  });
});

let galleryImgs = document.querySelectorAll(".our-work .box");
galleryImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create the popup overlay
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    // Create popup element
    let popupEl = document.createElement("div");
    popupEl.className = "popup";
    if (img.childNodes[1].alt !== null) {
      let imgHeading = document.createElement("h3");
      imgHeading.appendChild(document.createTextNode(img.childNodes[1].alt));
      imgHeading.className = "text-center text-black-50 my-3";
      popupEl.appendChild(imgHeading);
    }
    // popup content div
    let popupContent = document.createElement("div");
    popupContent.className = "d-flex justify-content-around";
    // popup img
    let popupImg = document.createElement("img");
    popupImg.src = img.childNodes[1].src;
    popupImg.className = "img-fluid";
    // popup img description
    let popupImgDesc = document.createElement("h5");
    popupImgDesc.appendChild(document.createTextNode(img.dataset.work));
    popupImgDesc.className = "text-center me-2";
    let popupImgShare = document.createElement("i");
    popupImgShare.className = "fa-regular fa-share-from-square";
    let popupDescBox = document.createElement("div");
    popupDescBox.className =
      "popup-desc-box d-flex flex-column justify-content-around align-items-center";
    popupDescBox.appendChild(popupImgDesc);
    popupDescBox.appendChild(popupImgShare);
    // append the img & desc to content div
    popupContent.appendChild(popupImg);
    popupContent.appendChild(popupDescBox);
    // append content to the main popup element
    popupEl.appendChild(popupContent);
    // append popup element to the body
    document.body.appendChild(popupEl);

    // Create close button
    let closeBtn = document.createElement("span");
    closeBtn.appendChild(document.createTextNode("X"));
    closeBtn.className = "close-btn";
    closeBtn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
      document.querySelector(".popup-overlay").remove();
    });
    popupEl.appendChild(closeBtn);
  });
});

// Section Selector
let gallerySelector = document.querySelector(".gallery-selector");
let gallerySelectorArr = Array.from(gallerySelector.children);
let galleryPhotos = document.querySelectorAll(".our-work .row > div");
gallerySelectorArr.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    gallerySelectorArr
      .filter((activeTab) => activeTab.classList.contains("active"))
      .forEach((aT) => {
        aT.classList.remove("active");
        aT.classList.remove("rounded-pill");
      });
    e.target.classList.add("active");
    e.target.classList.add("rounded-pill");
    galleryPhotos.forEach((item) => {
      item.style.display = "none";
    });
    document
      .querySelectorAll(`.our-work .row ${tab.dataset.section}`)
      .forEach((t) => {
        t.style.display = "block";
      });
  });
});
