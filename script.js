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
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  })


//   ### 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)

// **O que será verificado:**

// - Será verificado que, ao se carregar a página, os itens da lista **não tem** o estilo CSS `background-color: rgb(128, 128, 128)`

// - Será verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS `background-color: rgb(128, 128, 128)`

}