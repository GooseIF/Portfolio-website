const burgers = document.querySelectorAll(".burger")
const navs = document.querySelectorAll(".mobile-nav")
const body = document.querySelector("body")
const resumes = document.querySelectorAll(".mobile-nav__button")

resumes.forEach((el) => {
    el.addEventListener("click", function() {
        body.classList.toggle("stop-scrolling")
        navs.forEach((el) => {
            el.classList.toggle("displayed")
        })
    })
})

burgers.forEach((el) => {
    el.addEventListener("click", function() {
        body.classList.toggle("stop-scrolling")
        navs.forEach((el) => {
            el.classList.toggle("displayed")
        })
    })
})