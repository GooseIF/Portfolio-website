const source = document.querySelector("body")
const buttons = document.querySelectorAll(".btn")

const theme = localStorage.getItem('theme')

theme && source.classList.add(theme)

function changeTheme () {
        source.classList.toggle('dark-theme')
         if (source.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme')
    }
    else {
        localStorage.removeItem('theme')
    }
    }

