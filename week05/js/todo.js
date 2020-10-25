//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
//event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo); //aqui dice que al dar click, se ejecute la función addTodo
todoList.addEventListener('click', deleteCheck);//al dar click se ejecuta la funcion deleteCheck
filterOption.addEventListener('click', filterTodo);
//functions
function addTodo(event){
event.preventDefault();
//todo div
const todoDiv = document.createElement('div'); //esto es para crear un elemento
todoDiv.classList.add("todo"); //esto es para dar clase a un elemento
//create li
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value; //esto es para que detecte lo que escribo en la app
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo); //esto es para decir que el elemento crreado primero es el padre del segundo elemento, o el segundo elemento es el hijo del primero.

// saveLocalTodos(todoInput.value);
//checkmark button
const completedButton = document.createElement('button');
completedButton.innerText = 'completed'; //esto es para poner el texto dentro del boton
completedButton.classList.add("completed-btn");
todoDiv.appendChild(completedButton);
//delete button
const deletedButton = document.createElement('button');
deletedButton.innerText = 'Delete';
deletedButton.classList.add("deleted-btn");
todoDiv.appendChild(deletedButton);
//append to list
todoList.appendChild(todoDiv);
//clear todoInput.value
todoInput.value = ""; //esto sirve para que se borre automaticamente el input al dar click en add note
}

function deleteCheck(e){
const item = e.target;
//delete todo
if(item.classList[0] === 'deleted-btn') {
const todo = item.parentElement;
//todo.classList.add("fall");
removeTodos(todo);
todo.remove();
}
//check mark
if(item.classList[0] === 'completed-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
 }
}

function filterTodo(e) {
const todos = todoList.childNodes;
todos.forEach(function(todo){
    switch(e.target.value){
        case "all":
            todo.style.display = 'flex';
            break;
        case "completed":
            if(todo.classList.contains('completed')){
                todo.style.display = 'flex';
            } else {
                todo.style.display = "none";
            }
            break;
        case "active":
            if(!todo.classList.contains('completed')){
                todo.style.display = 'flex';
            } else {
                todo.style.display = 'none';
            }
            break;
    }
});
}
function saveLocalTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

        todos.forEach(function(todo){
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        const completedButton = document.createElement('button');
        completedButton.innerText = 'completed';
        completedButton.classList.add("completed-btn");
        todoDiv.appendChild(completedButton);
        const deletedButton = document.createElement('button');
        deletedButton.innerText = 'Delete';
        deletedButton.classList.add("deleted-btn");
        todoDiv.appendChild(deletedButton);
        todoList.appendChild(todoDiv);
    });
} 
 function removeTodos (todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
   const todoIndex = todo.children[0].innerText;
   todos.splice(todos.indexOf(todoIndex), 1); 
   localStorage.setItem('todos', JSON.stringify(todos));
 }



