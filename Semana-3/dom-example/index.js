const form = document.querySelector("#form-calc");
const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const result = document.querySelector("#result");

function eventListeners() {
  form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("TTEs");

    const sum = parseInt(number1.value) + parseInt(number2.value);
    result.textContent = sum;
  });
}

function apagar(e) {
  console.log("Apagar");
  number1.value = "";
  number2.value = "";
}

document.addEventListener("DOMContentLoaded", function() {
  eventListeners();
});
