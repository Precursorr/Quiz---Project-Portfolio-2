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

let history = document.getElementById("historyInfo");

function btnHistory(){
  history.style.display = "block";
}

function btnReturn(){
  history.style.display = "none"
}

