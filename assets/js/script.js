let rules = document.getElementById("rulesInfo");
let open = document.getElementById("btnRules");
let close = document.getElementsByClassName("btn-return")[0];

open.onClick = function () {
    rules.style.display = "block";
}

close.onclick = function() {
    rules.style.display = "none";
  }

window.onclick = function(event) {
if (event.target == rules) {
    modal.style.display = "none";
}
}
  