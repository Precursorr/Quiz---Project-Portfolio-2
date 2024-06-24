// Rules window popup
let rules = document.getElementById("rulesInfo");

function btnRules(){
    rules.style.display = "block";
}

function btnReturn(){
    rules.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == rules) {
      rules.style.display = "none";
    }
  };

// HTML & CSS History popup

const history = document.getElementById("historyInfo");

function btnHistory(){
  history.style.display = "block";
}

function btnHistoryReturn(){
  history.style.display = "none"
}

// Begin quiz 1 with first options
let answers = Array.from(document.getElementsByClassName("answers"))
let questions1 = {
  question: "Which character is used to indicate an end tag?",
  answer: 1,
  answers: ["/", "*", "<", ">"]
}

let questions2 = {
  question: "Which of these elements are all <table> elements?",
  answer: 1,
  answers: ["<table><tr><td>"]
}

function begin(){
  history.style.display = "none";
  quiz1.style.display = "block";
  btnBegin.style.display = "none";
  document.getElementById("question").innerHTML = questions1.question
  document.getElementById("answers1").innerHTML = questions1.answers[0]
  document.getElementById("answers2").innerHTML = questions1.answers[1]
  document.getElementById("answers3").innerHTML = questions1.answers[2]
  document.getElementById("answers4").innerHTML = questions1.answers[3]
}

function answer(){
  if (userAnswer === questions.answers[0]) {
    document.getElementById("question").innerHTML = questions2.question
    document.getElementById("answers1").innerHTML = questions2.answers[0]
    document.getElementById("answers2").innerHTML = questions2.answers[1]
    document.getElementById("answers3").innerHTML = questions2.answers[2]
    document.getElementById("answers4").innerHTML = questions2.answers[3]
  }
}
