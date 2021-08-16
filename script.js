window.onload = function() {
  const getTask = document.querySelector('#texto-tarefa');
  const getButton = document.querySelector('#criar-tarefa');
  const getOL = document.querySelector('#lista-tarefas');

  getButton.addEventListener('click', function() {
    const createTask = document.createElement('li');
    createTask.innerHTML = getTask.value;
    getOL.appendChild(createTask);
    getTask.value = '';    
  });

  getOL.addEventListener('click', function(event) {
    const changeStyle = event.target.style;
    const getLi = document.querySelectorAll('li');
    for (let index = 0; index < getLi.length; index += 1) {
      getLi[index].style.backgroundColor = 'white';
    }
    changeStyle.backgroundColor = 'rgb(128,128,128)';
  });

  getOL.addEventListener('dblclick', function(event) {
    const changeStyle = event.target.style;
    const changeClass = event.target.className;
    const getLi = document.querySelectorAll('li');
    if (changeClass !== 'completed') {
      event.target.className = 'completed';
    } else {
      event.target.className = '';
    }
  });

  const getClearButton = document.querySelector('#apaga-tudo');

  getClearButton.addEventListener('click', function() {
    const getLi = document.querySelectorAll('li');
    for (let index = 0; index < getLi.length; index += 1) {
      getLi[index].remove();
    }
  });

  const getRemoveButton = document.querySelector('#remover-finalizados');

  getRemoveButton.addEventListener('click', function() {
    const getLi = document.querySelectorAll('li');
    const getCompleted = document.querySelectorAll('.completed');
    for (let index = 0; index < getCompleted.length; index += 1) {
      getCompleted[index].remove();
    }
  });

  const getSaveButton = document.querySelector('#salvar-tarefas');

  getSaveButton.addEventListener('click', function() {
    let savedList = [];
    for (let index = 0; index < getOL.children.length; index += 1) {
      if(getOL.children[index].className === 'completed') {
        savedList.push('[' + getOL.children[index].innerHTML + ']');
      } else {
        savedList.push(getOL.children[index].innerHTML);
      }
    }
    
    const strangerThings = savedList.join('||');

    localStorage.setItem('list', strangerThings);
  });

  if (localStorage.getItem('list')) {
    const splitedThings = localStorage.getItem('list').split('||');
    for (let item of splitedThings) {
      const thing = document.createElement('li');
      if (item[0] === '[' && item[item.length-1] === ']') {
        thing.innerHTML = item.slice(1, -1);
        thing.className = 'completed';
      } else {
        thing.innerHTML = item;
      }
      getOL.appendChild(thing);
    }
  }
}

// ### 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

// **O que será verificado:**

// - Será verificado que existe um elemento `button` com o id `salvar-tarefas`

// - Será verificado que, quando a lista tiver vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.