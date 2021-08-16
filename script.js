window.onload = function (){

    function TaskList(){
    const textTask = document.querySelector('#texto-tarefa')
    const listTask = document.querySelector('#lista-tarefas')
    const createTask = document.querySelector('#criar-tarefa')

    createTask.addEventListener('click', function (){
      let list = document.createElement('li')
      listTask.appendChild(list)
      list.innerText = textTask.value
      textTask.value = "";

      list.addEventListener ('click', function (event){
          let clickedLi = event.target
          clickedLi.style.backgroundColor = 'rgb(128, 128, 128'  
      })
      
    }) 

}TaskList()
}