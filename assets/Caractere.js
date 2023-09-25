document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".Box-User input");

    inputs.forEach(function (input) {
      const especialCaractere =
        input.nextElementSibling.querySelector(".especialCaractere");

      input.addEventListener("focus", function () {
        especialCaractere.style.visibility = "hidden";
      });

      input.addEventListener("blur", function () {
        if (this.value === "") {
          especialCaractere.style.visibility = "visible";
        }
      });

      input.addEventListener("input", function () {
        if (this.value !== "") {
          especialCaractere.style.visibility = "hidden";
        }
      });
  })})