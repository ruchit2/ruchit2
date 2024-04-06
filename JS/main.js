const hamburger = document.querySelector(".hamburger");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const popup = document.querySelector("#popup");
const navItems = document.querySelector(".ham-nav-items");
const overlay = document.querySelector(".overlay");

const openMenu = function () {
  // this.classList.toggle("is-active");
  open.classList.add("hide");
  close.classList.remove("hide");
  overlay.classList.remove("hide");
  document.querySelector("#navigation").classList.remove("hide");
};
const closeMenu = function () {
  // this.classList.toggle("is-active");
  open.classList.remove("hide");
  close.classList.add("hide");
  overlay.classList.add("hide");
  document.querySelector("#navigation").classList.add("hide");
};

open.addEventListener("click", openMenu);

close.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

navItems.addEventListener("click", closeMenu);