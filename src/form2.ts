"use strict";
const form = document.getElementById("form") as HTMLFormElement;
form.addEventListener("submit", (e) => handleSubmit(e));
function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const data = new FormData(form);
  data.forEach(value => console.log(value));
  console.log("email:", data.get('email'));

}


