/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 1
  return class Task {
    constructor(description, priority, list) {
      //your code here

      this.description = description;
      this.priority = priority;
      this.id = id++
      this.listId = list.id
      store.tasks.push(this)
    }


    list(){
      return store.lists.find((list) => {
        return list.id === this.listId;
      })
    }

    addToList(){
      let button = document.querySelector(`button[data-id="${this.id}"]`)
      let div = button.parentNode.parentNode
      let ul = div.querySelector('ul')
      let li = document.createElement('li')

      li.innerHTML = `Task: ${this.description}<br>Priority: ${this.priority}`

      ul.appendChild(li)
    }
  }



})()
