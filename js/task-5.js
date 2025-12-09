function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const change = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const body = document.querySelector("body");

change.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
});