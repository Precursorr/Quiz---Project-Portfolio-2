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

// Begin quiz 1 with first question and answers selection
let quiz1 = document.getElementById("quiz1")
let btnBegin = document.getElementById("begin")
let question = document.getElementById("question")
let answersA = document.getElementById("answers1")
let answersB = document.getElementById("answers2")
let answersC = document.getElementById("answers3")
let answersD = document.getElementById("answers4")

function begin(){
  history.style.display = "none";
  quiz1.style.display = "block";
  btnBegin.style.display = "none";
  question.innerHTML="Which character is used to indicate an end tag?";
  answersA.innerHTML="/";
  answersB.innerHTML="*";
  answersC.innerHTML="<";
  answersD.innerHTML=">";
}

// When first question is answered, second question and answers selection will appear
