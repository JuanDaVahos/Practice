const checkboxMenu = document.querySelector("#Menu");
const labelMenu = document.querySelector(".iconMenu");
const iconImg = labelMenu.querySelector("img");

labelMenu.addEventListener("click", () => {
  if (checkboxMenu.checked) {
    iconImg.src = "./svg/menu-close.svg";
  } else {
    iconImg.src = "./svg/menu-open.svg";
  }
});
