const burger = document.querySelector(".burgerMenu");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navbar.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach((n) => {
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    navbar.classList.remove("active");
  });
});
