const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () => {
  output.textContent = input.value.trim();
  if (input.value.trim() === "") {
    output.textContent = "Anonymous";
  }
});