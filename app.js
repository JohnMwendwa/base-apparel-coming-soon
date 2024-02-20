const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMessage = document.querySelector("#error__message");
const errorIcon = document.querySelector("#error__icon");

const isValidEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isValidEmail.exec(input.value)) {
    errorMessage.textContent = "Please provide a valid email";
    errorIcon.style.display = "block";
  } else {
    errorMessage.textContent = "Email submitted successfully";
    errorMessage.style.color = "lightgreen";
    errorIcon.style.display = "none";

    // clear input after 3 seconds
    setTimeout(() => {
      input.value = "";
      window.location.reload();
    }, 3000);
  }
});
