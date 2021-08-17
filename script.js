//https://www.youtube.com/watch?v=PFb7UIgCqTg
let btnCriarTarefa = document.getElementById('criar-tarefa');
let ol = document.getElementById('lista-tarefas');
btnCriarTarefa.addEventListener('click', createInput);

function createInput() {
  let elemento = document.getElementById('texto-tarefa').value;
  let li = document.createElement('li');
  li.addEventListener('click', changeBackgroundColor);
  li.innerText = elemento;
  ol.appendChild(li);
  document.getElementById('texto-tarefa').value = '';
  li.addEventListener('dblclick', itemClopleted);
} // 5 e 6 ok

function changeBackgroundColor(evt) {
  let selected = document.querySelector('.selected');
  if (selected) selected.classList.remove('selected'); // quando apenas uma coisa é verificada não precisa de colchetes
  if (evt.target.classList.contains('selected')) {
    evt.target.classList.remove('selected');
  } else {
    evt.target.classList.add('selected');
  }
} // 7 e 8 ok

function itemClopleted(evt) {
  let completed = evt.target;
  if (!completed.className.includes('completed')) {
    completed.classList.add('completed');
    completed.classList.remove('selected');
  } else {
    completed.classList.remove('completed');
  }
} // 9 ok

function deleteAll() {
  let apagaTudo = document.getElementById('apaga-tudo');
  let li = document.getElementsByTagName('li');
  apagaTudo.addEventListener('click', function () {
    for (let index = li.length - 1; index >= 0; index -= 1) {
      ol.removeChild(li[index]);
    }
  });
}
deleteAll();
