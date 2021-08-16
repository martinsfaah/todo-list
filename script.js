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



  // ### 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

  // **O que será verificado:**
  
  // - Será verificado que, quando um elemento da lista é selecionado, o elemento selecionado previamente deixa de sê-lo. Isso é verificado através da presença ou não do estilo `background-color: rgb(128, 128, 128)` no elemento.

}