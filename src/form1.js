"use strict";
var formElement = document.getElementById("form");
var inputs = document.querySelectorAll("input");
formElement.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    for (var i = 0; i < inputs.length - 1; i++) {
        console.log(inputs[i].value);
    }
}
