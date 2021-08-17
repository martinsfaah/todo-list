const inputText = document.getElementById('texto-tarefa');
const typeButton = document.getElementById('criar-tarefa');
const listTasks = document.getElementById('lista-tarefas');

function addTask() {
  const taskNew = document.createElement('li')
  taskNew.addEventListener('click', ClickColor)
  taskNew.innerHTML = inputText.value;
  listTasks.appendChild(taskNew);
  inputText.value = '';
  

}
typeButton.addEventListener('click', addTask)

//Pintando a lista

function ClickColor() {   
  this.style.backgroundColor = 'rgb(128, 128, 128)';
  console.log(this);
}


// alert('Você chegou na sua lista de tarefas! Cumpra todo o combinado, ok? =D')
// console.log("kk")
