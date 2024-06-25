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

// Quiz Array - HTML & CSS
let questions = [{
  question: "Which character is used to indicate an end tag?",
  answers: ["/", "*", "<", ">"]
},
{ question: "Which of these elements are all &lt;table&gt; elements?",
  answers: ["&lt;table&gt;&lt;tr&gt;&lt;td&gt;", "&lt;table&gt;&lt;tr&gt;&lt;tt&gt;", "&lt;thread&gt;&lt;body&gt;&lt;tr&gt;", "&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;"]
},
{
  question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
  answers: ["src", "longdesc", "alt", "title"]
}];



// When begin is pressed, the first quiz iteration pops up
let btnBegin = document.getElementById("btnBegin")
let quiz = document.getElementById("quiz1")

function begin() {
  history.style.display =  "none";
  btnBegin.style.display = "none";
  quiz.style.display = "block"
  document.getElementById("question").innerHTML = questions[0].question;
  document.getElementById("answers1").innerHTML = questions[0].answers[0];
  document.getElementById("answers2").innerHTML = questions[0].answers[1];
  document.getElementById("answers3").innerHTML = questions[0].answers[2];
  document.getElementById("answers4").innerHTML = questions[0].answers[3];
}