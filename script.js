// ! fonction pour ajouter un éléments a l'écran

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let expression = document.getElementById("display").value;
  console.log(expression);
  let result = eval(expression);
  console.log(result);
  document.getElementById("display").value = result;
}
