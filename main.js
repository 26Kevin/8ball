// Input
let charOutputEl = document.getElementById("output");
let ballEl = document.getElementById("ball-img");

ballEl.addEventListener("click", ballClicked);

function ballClicked() {
  let question = document.getElementById("char-in").value.toLowerCase();

  document.getElementById("output").innerHTML =
    checkQuestion(question) || randomResponse(question);
}

function checkQuestion(question) {
  if (question === "") {
    return "Please ask a question";
  } else if (question === "does a magic 8 ball actually work?") {
    return "How dare you doubt me!";
  } else if (question === "is javascript awesome?") {
    return "Of Course!";
  } else {
    return "";
  }
}

function randomResponse(question) {
  let randNum = Math.random();
  if (randNum < 0.2) {
    return "Without a Doubt.";
  } else if (randNum < 0.4) {
    return "As I see it,yes";
  } else if (randNum < 0.6) {
    return "Concentrate and ask again";
  } else if (randNum < 0.8) {
    return "Don't count on it";
  } else {
    return "Outlook not so good";
  }
}
