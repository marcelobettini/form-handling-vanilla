"use strict";
var form = document.getElementById("form");
form.addEventListener("submit", function (e) { return validate(e); });
function validate(e) {
    e.preventDefault();
    var data = new FormData(form);
    var isValid = false;
    while (!isValid) {
        var firstName = data.get("firstName");
        var lastName = data.get("lastName");
        var email = data.get("email");
        var city = data.get("city");
        var state = data.get("state");
        if (firstName === "" || lastName === "" || email === "" || city === "" || state === "") {
            console.log("Todos los campos son requeridos");
        }
        else {
            isValid = true;
        }
        logData(data);
    }
}
function logData(data) {
    data.forEach(function (value) { return console.log(value); });
}
;
