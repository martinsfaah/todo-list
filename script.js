const task = document.getElementById('texto-tarefa')
const btnAddTask = document.getElementById('criar-tarefa')
const toDoList = document.getElementById('lista-tarefas')

function addTask() {
  btnAddTask.addEventListener('click', function () {
    if (task.value !== '') {
      let inputValue = task.value
      let listItem = document.createElement('li')
      listItem.innerText = inputValue
      toDoList.appendChild(listItem)
      task.value = ''
    } else {
      alert('É necessário o preenchimento do campo com a tarefa a ser adicionada!')
    }
  })
}
addTask()