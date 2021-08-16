function createHeader () {
  const header = document.createElement('header');
  header.innerText = "Minha Lista de Tarefas";
  document.querySelector('body').appendChild(header);
}

createHeader();

function createSmallText () {
  const smallText = document.createElement('div');
  smallText. innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  smallText.id = 'funcionamento';
  document.querySelector('body').appendChild(smallText);
}

createSmallText();

