/*
list is responsible for creating a single list component
*/

const store = {lists: [], tasks: []}

const List = (() => {
  let id = 1

  return class List {
    constructor(title) {
      this.title = title;
      this.id = id++
      store.lists.push(this)
      console.log(store)
      //your code here
      // NOTE: How can we use the private id variable to auto increment list ids🤔?



    }

    static find (id){
      return store.lists.find((list) => {
        return list.id == id
      })
    }

    addElementsToListDiv(listDiv) {
      listDiv.className = 'list';
      let titleName = document.createElement('h2');
      let deleteButton = this.createDeleteButton()
      titleName.appendChild(deleteButton)

      titleName.innerHTML += this.title;
      listDiv.appendChild(titleName);
      listDiv.innerHTML += '<ul></ul>';
    }

    addEventListenerToDeleteButton(){
      let deleteButton = document.querySelector(`button[data-id="${this.id}"]`)
      //console.log(deleteButton)
      deleteButton.addEventListener('click', event => {
        this.deleteList(event)
      })
    }

    createDeleteButton(){
      let deleteButton = document.createElement('button')
      deleteButton.setAttribute("data-id", this.id)
      deleteButton.className = "delete-list"
      deleteButton.innerText = "X"

      return deleteButton
    }

    deleteList(event){
      let deleteButton = document.querySelector(`button[data-id="${this.id}"]`)
      //console.log(deleteButton)
      deleteButton.parentNode.parentNode.remove()
      this.removeFromDropdown()

    }

    addToDropdown(){
      let dropdown = document.getElementById('parent-list')
      let option = document.createElement('option')
      option.innerText = this.title
      option.setAttribute("data-id", this.id)
      dropdown.appendChild(option)
    }

    removeFromDropdown(){
      let option = document.querySelector(`option[data-id="${this.id}"]`);
      option.remove()
    }

}

})()
