const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click",submitHandle);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);
document.addEventListener("DOMContentLoaded",getTodos);

function submitHandle(event){
  event.preventDefault();
  if(todoInput.value !== ""){
    addTodo(todoInput.value);
    saveLocalTodos(todoInput.value);
    todoInput.value = "";
  }
  
}

function addTodo(todo){
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

  newTodo.innerText = todo;
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';

}

function deleteCheck(event){
  const item = event.target;

  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend",()=>todo.remove());
   
  } else if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(event){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(event.target.value){
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains("completed")){
          todo.style.display = "flex";
        }else{
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains("completed")){
          todo.style.display = "flex";
        }else{
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo){
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos(){
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function(todo){
    addTodo(todo);
  });
}