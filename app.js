/*Grab all the necessary element*/
let MainTodoContainer = document.getElementById('todos');
let input = document.querySelector('.todo-input');
let addButton = document.querySelector('.add-item');
let deleteButton = document.querySelector('.deleteBtn');


addButton.addEventListener('click', function(e){
/*create all the elements*/

if(input.value.trim()){
   /* UL Tag */
   var ulTag = document.createElement('ul');
   ulTag.classList.add('todo-list-container');

   /* Todo list div */
   var todoList = document.createElement('div');
   todoList.classList.add('todo-list');
 
   /* LI Tag */
   var liTag = document.createElement('li');
   liTag.innerText = input.value;
   liTag.classList.add('todo-item');
  

  /*button div*/
   var buttonDiv = document.createElement('div');
   buttonDiv.classList.add('button');

   /*edit button*/
   var editButton = document.createElement('button');
 editButton.classList.add('editBtn');
 editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
 editButton.onclick = function(){
  editWorking(liTag);
 }

   /*delete button*/
   var trashButton = document.createElement('button');
   trashButton.classList.add('trash');
   trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  
  /*apending elements to each other*/
  ulTag.appendChild(todoList);
  todoList.appendChild(liTag);
  todoList.appendChild(buttonDiv);
  buttonDiv.appendChild(editButton);
  buttonDiv.appendChild(trashButton);
  //console.log(ulTag);
  /*append all the elemet in main div*/

  MainTodoContainer.appendChild(ulTag);
/*trash button working*/
todoList.addEventListener('click', function(e){
var items = e.target;
if(items.classList[0] === 'trash'){
   var todo = items.parentElement;
   var todo2 = todo.parentElement;
   var todo3 = todo2.parentElement;
   todo3.remove();
}
});


  /*when the add button click input button will be clear*/
  input.value = '';
}
/*show alert if input value is null*/
else if(input.value === ""){
  alert("please enter the task");
}

});

/*edit button function*/

function editWorking(e){
  var editValue = prompt("edit the selected item" , e.firstChild.nodeValue);
  e.firstChild.nodeValue = editValue;
}