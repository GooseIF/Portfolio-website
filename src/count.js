const pic = document.getElementsByClassName("hero__pfp");
let score = 0;

function count() {
  if (score < 5) {
    score++;
  }

  if (score == 5) {
    console.log("5 clicks, i'll probably add animations later");
    score++;
  }
}
