const item = document.querySelectorAll(".item");
const h2 = document.querySelectorAll("h2");
const li_first = item[0].querySelectorAll("li");
const li_second = item[1].querySelectorAll("li");
const li_third = item[2].querySelectorAll("li");

let count = 0;
item.forEach((el) => {
  count++;
});
console.log(`Number of categories: ${count}`);

console.log(`Category: ${h2[0].textContent}`);
count = 0;
li_first.forEach((el) => {
  count++;
});
console.log(`Elements: ${count}`);

console.log(`Category: ${h2[1].textContent}`);
count = 0;
li_second.forEach((el) => {
  count++;
});
console.log(`Elements: ${count}`);

console.log(`Category: ${h2[2].textContent}`);
count = 0;
li_third.forEach((el) => {
  count++;
});
console.log(`Elements: ${count}`);