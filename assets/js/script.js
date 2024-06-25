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
},
{
  question: "The HTML global attribute, 'contenteditable' is used to:",
  answers: ["Update content from server", "Return the position of the first found occurrence of content inside a string", "Specifies a context menu for an element. The menu appears when a user right-clicks on an element", "Specify whether the content of an element should be editable or not"]
},
{
  question: "The HTML &lt;canvas&gt; element is used to:",
  answers: [" manipulate data in MySQL", " create draggable elements", " draw graphics", " display database records"]
},
{
  question: "What does CSS stand for?",
  answers: [" Computer Style Sheets", " Colorful Style Sheets", " Cascading Style Sheets", " Creative Style Sheets"]
},
{
  question: "Which HTML attribute is used to define inline styles?",
  answers: ["Front", "Style", "Styles", "Class"]
},
{
  question: "Which CSS property controls the text size?",
  answers: ["font-size", "text-size", "text-style", "font-style"]
},
{
  question: "What is the correct CSS syntax for making all the <p> elements bold?",
  answers: ["p {font-weight:bold;}", "&lt;p style=&quot;text-size:bold;&quot;&gt;", "&lt;p style=&quot;font-size:bold;&quot;&gt;", "p {text-size:bold;}"]
},
{
  question: "What is the default value of the position property?",
  answers: ["absolute", "relative", "static", "fixed"]
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