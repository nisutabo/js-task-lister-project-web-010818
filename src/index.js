const createTaskForm = document.getElementById("create-task-form");



document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");
  // your code here ....
    addEventListeners()
    // createTaskForm.remove()
});


function addEventListeners(){
  let listForm = document.getElementById("create-list-form")
  listForm.addEventListener("submit", event => {
    //console.log(event)
    createList(event)
    event.preventDefault()
  })
  let taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener("submit", event => {
    createTask(event)
    event.preventDefault()
  })
}

// function showCreateTaskForm(){
//   let mainContent = document.getElementById("main-content")
//   let lists = document.getElementById("lists")
//   mainContent.insertBefore(createTaskForm, lists);
//
// }

function createList(event){
  let title = document.getElementById('new-list-title');
  let newList = new List (title.value)
  //console.log(newList)
  let listSection = document.getElementById('lists')
  let listDiv = document.createElement('div')
  newList.addElementsToListDiv(listDiv)
  listSection.appendChild(listDiv)
  newList.addEventListenerToDeleteButton()
  newList.addToDropdown()
  title.value = ""
  // showCreateTaskForm()
}

function createTask(event){

  let taskDescription = document.getElementById("new-task-description");
  let taskPriority = document.getElementById("new-task-priority");
  let selectList = document.getElementById("parent-list")
  let selected = selectList.options[selectList.selectedIndex].dataset.id
  let list = List.find(selected)
  let newTask = new Task (taskDescription.value, taskPriority.value, list)
  newTask.addToList()
  taskDescription.value = ""
  taskPriority.value = ""
}
