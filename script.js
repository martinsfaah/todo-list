function createListItem () {
  const button = document.getElementById('criar-tarefa');

  button.addEventListener('click', () => {
    const newItem = document.createElement('li');
    const aux = document.getElementById('texto-tarefa').value;
    const text = document.createTextNode(aux);
    const olPath = document.getElementById('lista-tarefas');

    if(aux === '') {
      alert('nenhum texto digitado');
    }

    else {
      newItem.appendChild(text);
      olPath.appendChild(newItem)
    }

    const inputClear = document.getElementById('texto-tarefa');
    inputClear.value = '';
  })
}

function itemClickColor() {
  let list = document.querySelector('#lista-tarefas');

  list.addEventListener('click', function(event) {
    let li = document.getElementsByTagName('li');

    for (let i = 0; i < li.length; i += 1) {
      let currentLi = li[i];
      currentLi.style.backgroundColor = '';
    }

   event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  })
}








itemClickColor()
createListItem()
