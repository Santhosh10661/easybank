let menucontainer = document.querySelector(".menu-con");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menucontainer.style.display = "flex";
  menuBtn.classList.add("menu-btn-hide");
  closeBtn.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  menucontainer.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.classList.remove("menu-btn-hide");
  document.body.style.overflow = "scroll";
});
