const footer = document.getElementById("footer");
let date = new Date();

let currentYear = date.getFullYear();

function setYear() {
  footer.innerHTML = `Ilya Bolgazin ${currentYear.toString()}`;
}

setYear();
