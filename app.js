const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


todoButton.addEventListener("click",addTodo);


function addTodo(event){
  event.preventDefault();
  
  const todoDiv = document.createElement("div");
  const newTodo = document.createElement("li");
  const completeButton = document.createElement("button");
  const trashButton = document.createElement("button");

  todoList.appendChild(todoDiv);
  todoDiv.appendChild(newTodo);
  todoDiv.appendChild(completeButton);
  todoDiv.appendChild(trashButton);

  todoDiv.classList.add("todo");
  newTodo.classList.add("todo-item");
  completeButton.classList.add("complete-btn");
  trashButton.classList.add("trash-btn");

  newTodo.innerText = "hey";
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
}