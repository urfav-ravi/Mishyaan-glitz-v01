const menuButton = document.querySelector(".menu-btn");
const navBar = document.querySelector(".navbar");
menuButton.addEventListener("click", () => {
  if (!menuButton.classList.contains("nav-close")) {
    menuButton.classList.add("nav-close");
    navBar.classList.add("on-nav");
  } else {
    menuButton.classList.remove("nav-close");
    navBar.classList.remove("on-nav");
  }
});


const imagesChagner = function (event) {
  if (event.target.tagName === "IMG") {
    const imageUrl = event.target.getAttribute("src");
    const backgroundContainer = event.target.closest(".card-img");
    const activeList = backgroundContainer.querySelectorAll(".thumb-item");
    activeList.forEach((data) => {
      data.classList.remove("active");
    });
    event.target.closest("li").classList.add("active");

    if (backgroundContainer.classList.contains("detail-img")) {
      backgroundContainer.querySelector(
        ".img-box"
      ).style.backgroundImage = `url(${imageUrl})`;
    } else {
      backgroundContainer.style.backgroundImage = `url(${imageUrl})`;
    }
  }
};