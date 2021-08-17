const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const buttonDelete = document.getElementById('apaga-tudo');
const li = document.getElementsByTagName('li'); 

button.addEventListener('click',function(){
const li = document.createElement('li');
const task = input.value;
li.innerText = task;
ol.appendChild(li);
li.addEventListener('click',liSelected);
li.addEventListener('dblclick',clickTwice);
input.value = '';
input.focus();
});

function liSelected(event){
  for(let index = 0; index < li.length; index += 1){
    li[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
};
function clickTwice(event){
event.target.classList.add('completed');
};

buttonDelete.addEventListener('click',deletar);
function deletar(){
  ol.remove();
}








 
 