const greetingForm = document.body.querySelector("#greeting");
const nameInput = document.body.querySelector("#name");
const submitBtn = document.body.querySelector("#submit");
const hello = document.body.querySelector("#hello");
const onOff = document.body.querySelector("#onOff");

getName();

function onSubmitHandler(e) {
  e.preventDefault();

  let name = nameInput.value;
  nameInput.value = "";
  localStorage.setItem("name", name);
  onOff.classList.toggle("hidden");
  hello.innerText = `Hello ${localStorage.getItem("name")}`;

  getName();
}

function getName() {
  if (localStorage.getItem("name") !== null) {
    greetingForm.classList.toggle("hidden");
    hello.innerText = `Hello ${localStorage.getItem("name")}`;
  } else {
    onOff.classList.toggle("hidden");
  }
}

greetingForm.addEventListener("submit", onSubmitHandler);
