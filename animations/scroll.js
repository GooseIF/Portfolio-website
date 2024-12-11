const observer = new IntersectionObserver((seen) => {
    seen.forEach((element) => {
        element.target.classList.toggle('shown', element.isIntersecting);
    });
})

const hiddenElementsLeft = document.querySelectorAll(".hidden-left");
const hiddenElementsRight = document.querySelectorAll(".hidden-right");


hiddenElementsLeft.forEach((el) => {observer.observe(el)});
hiddenElementsRight.forEach((el) => {observer.observe(el)});