const slideMenu = document.querySelectorAll(".menu");
const headers = document.querySelectorAll(".header");

const observes = new IntersectionObserver((seen) => {
  seen.forEach((element) => {
    if (element.isIntersecting) {
      slideMenu.forEach((el) => {
        el.classList.remove("shown");
      });
    } else {
      slideMenu.forEach((el) => {
        el.classList.add("shown");
      });
    }
  });
});

headers.forEach((el) => {
  observes.observe(el);
});

const burger = document.querySelectorAll(".bottom-burger");

burger.forEach((el) => {
  el.addEventListener("click", function () {
    document.querySelectorAll(".menu__options").forEach((el) => {
      el.classList.toggle("shown");
    });
  });
});
