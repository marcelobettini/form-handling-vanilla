"use strict";
const formElement = document.getElementById("form") as HTMLFormElement;
const inputs = document.querySelectorAll("input");
formElement.addEventListener("submit", handleSubmit);
function handleSubmit(e: Event) {
  e.preventDefault();
  for (let i: number = 0; i < inputs.length - 1; i++) {
    console.log(inputs[i].value);
  }
}
