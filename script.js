const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {
  nav.style.width = "70%";
  nav.style.display = "block";
});

close.addEventListener("click", () => {
  nav.style.width = 0;
  nav.style.display = "none";
});
