// - No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.

// - A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados. 

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
}