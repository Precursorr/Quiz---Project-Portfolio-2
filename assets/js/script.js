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
let questions = [{
  question: "Which character is used to indicate an end tag?",
  answer: 1,
  answers: ["/", "*", "<", ">"]
},
{ question: "Which of these elements are all &lt;table&gt; elements?",
  answer: 1,
  answers: ["&lt;table&gt;&lt;tr&gt;&lt;td&gt;", "&lt;table&gt;&lt;tr&gt;&lt;tt&gt;", "&lt;thread&gt;&lt;body&gt;&lt;tr&gt;", "&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;"]
}]

function begin(){
  history.style.display = "none";
  quiz1.style.display = "block";
  btnBegin.style.display = "none";
  document.getElementById("question").innerHTML = questions[0].question
  document.getElementById("answers1").innerHTML = questions[0].answers[0]
  document.getElementById("answers2").innerHTML = questions[0].answers[1]
  document.getElementById("answers3").innerHTML = questions[0].answers[2]
  document.getElementById("answers4").innerHTML = questions[0].answers[3]
}

function answer(){
    document.getElementById("question").innerHTML = questions[1].question
    document.getElementById("answers1").innerHTML = questions[1].answers[0]
    document.getElementById("answers2").innerHTML = questions[1].answers[1]
    document.getElementById("answers3").innerHTML = questions[1].answers[2]
    document.getElementById("answers4").innerHTML = questions[1].answers[3]
  }
