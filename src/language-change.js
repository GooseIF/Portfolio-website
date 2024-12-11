const eng = document.querySelector(".english");

const rus = document.querySelector(".russian");

let currentLang = "english";

const lang = localStorage.getItem("language");

window.onload = function () {
  if (lang == "russian") {
    eng.style.display = "none";
    rus.style.display = "block";
    currentLang = "russian";
  } else {
    eng.style.display = "block";
    rus.style.display = "none";
    currentLang = "english";
  }
};

function changeLang() {
  if (currentLang == "english") {
    eng.style.display = "none";
    rus.style.display = "block";
    currentLang = "russian";
    localStorage.setItem("language", "russian");
  } else {
    eng.style.display = "block";
    rus.style.display = "none";
    currentLang = "english";
    localStorage.removeItem("language");
  }
}

const butts = document.querySelectorAll(".header__language");

butts.forEach((button) => {
  button.onclick = function () {
    changeLang();
  };
});
