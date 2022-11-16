let charOutputEl = document.getElementById("output");
let ballEl = document.getElementById("ball-img");

ballEl.addEventListener("click", ballClicked);
function ballClicked() {
  //Input
  let name = document.getElementById("char-in").value.toLowerCase();
  let randNum = Math.random();
  if (randNum < 0.2) {
    charOutputEl.innerHTML = "Without a Doubt";
  } else if (randNum < 0.4) {
    charOutputEl.innerHTML = "As I see it,yes";
  } else if (randNum < 0.6) {
    charOutputEl.innerHTML = "Concentrate and ask again";
  } else if (randNum < 0.8) {
    charOutputEl.innerHTML = "Don't count on it";
  } else {
    charOutputEl.innerHTML = "Outlook not so good";
  }
}
