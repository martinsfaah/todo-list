//https://www.youtube.com/watch?v=PFb7UIgCqTg
let btnCriarTarefa = document.getElementById('criar-tarefa');
let ol = document.getElementById('lista-tarefas');
btnCriarTarefa.addEventListener('click', createInput);

function createInput() {
  let elemento = document.getElementById('texto-tarefa').value;
  let li = document.createElement('li');
  li.addEventListener('click', changeBackgroundColor) ;
  li.innerText = elemento;
  ol.appendChild(li);
  document.getElementById('texto-tarefa').value = '';
} // 5 ok

function changeBackgroundColor(evt) {
  evt.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
