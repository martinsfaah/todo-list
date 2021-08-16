function addItem() {
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', () => {
    const li = document.createElement('li');
    const value = document.getElementById('texto-tarefa');
    document.getElementById('lista-tarefas').appendChild(li);
    li.className = 'tarefas';
    li.innerHTML = value.value;

    value.value = '';
    // li.addEventListener('click', () => {
    //   li.style.backgroundColor = 'rgb(128, 128, 128)';
    // });
    click();
  });
}

function click() {
  const lisTarefa = document.querySelectorAll('.tarefas');

  function limpLis() {
    lisTarefa.forEach((e) => {
      e.classList.remove('selected');
    });
  }

  lisTarefa.forEach((e) => {
    e.addEventListener('click', () => {
      limpLis();
      e.classList.add('selected');
    });
  });
}

addItem();
