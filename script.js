const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
  
button.addEventListener('click',function(){
const li = document.createElement('li');
const task = input.value;
li.innerText = task;
ol.appendChild(li);
input.value = '';
input.focus();
});

  ol.addEventListener('click',function(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
 });