window.onload = function() {
  const getTask = document.querySelector('#texto-tarefa');
  const getButton = document.querySelector('#criar-tarefa');
  const getOL = document.querySelector('#lista-tarefas');

  getButton.addEventListener('click', function() {
    const createTask = document.createElement('li');
    createTask.innerHTML = getTask.value;
    getOL.appendChild(createTask);
    getTask.value = '';    
  })

  getOL.addEventListener('click', function(event) {
    const changeStyle = event.target.style;
    const getLi = document.querySelectorAll('li');
    for (let index = 0; index < getLi.length; index += 1) {
      getLi[index].style.backgroundColor = 'white'
    }
    changeStyle.backgroundColor = 'rgb(128,128,128)';
  })

  getOL.addEventListener('dblclick', function(event) {
    const changeStyle = event.target.style;
    const changeClass = event.target.className;
    const getLi = document.querySelectorAll('li');
    if (changeClass !== 'completed') {
      event.target.className = 'completed';
    } else {
      event.target.className = '';
    }
  })

  
}