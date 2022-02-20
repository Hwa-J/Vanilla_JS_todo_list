const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("#todoInput");
const todoBtn = todoForm.querySelector("#todoBtn");
const todo = document.body.querySelector("todo");
const todoList = document.body.querySelector("#todoList");

const TODO_KEY = "todo";

let todoArray = [];

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
}

function deleteBtn(e) {
  const li = e.target.parentElement;
  li.remove();
  todoArray = todoArray.filter((obj) => obj.id !== parseInt(li.id));
  saveTodo();
}

function todoAdd(todoObject) {
  const li = document.createElement("li");
  li.id = todoObject.id;
  const span = document.createElement("sapn");
  span.innerText = todoObject.text;
  const button = document.createElement("button");
  button.innerText = "Ⅹ";
  button.addEventListener("click", deleteBtn);
  li.appendChild(button);
  li.appendChild(span);
  todoList.appendChild(li);
}

function onTodoSubmitHandler(e) {
  e.preventDefault();
  const todoValue = todoInput.value;
  todoInput.value = "";
  const todoObject = {
    text: todoValue,
    id: Date.now(),
  };
  todoArray.push(todoObject);
  todoAdd(todoObject);
  saveTodo();
}

todoForm.addEventListener("submit", onTodoSubmitHandler);

const loadTodo = localStorage.getItem(TODO_KEY);

if (loadTodo !== null) {
  const parsedTodo = JSON.parse(loadTodo);
  todoArray = parsedTodo;
  parsedTodo.forEach(todoAdd);
}
