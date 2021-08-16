function createListItem () {
  let button = document.getElementById('criar-tarefa');

  button.addEventListener('click', () => {
    let newItem = document.createElement('li');
    let aux = document.getElementById('texto-tarefa').value;
    let text = document.createTextNode(aux);
    let olPath = document.getElementById('lista-tarefas');
    let newText = ''

    if(aux === '') {
      alert('nenhum texto digitado');
    }

    else {
      newItem.appendChild(text);
      olPath.appendChild(newItem)
    }

    let inputClear = document.getElementById('texto-tarefa');
    inputClear.value = '';
  })
}
createListItem()
