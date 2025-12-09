const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formEl = e.target;
  const email = formEl.elements.email.value;
  const password = formEl.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const data = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
  };

  formEl.reset();
  console.log(data);
});