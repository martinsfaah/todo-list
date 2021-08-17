const textoTarefa = document.querySelector("#texto-tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");
const criarTarefa = document.querySelector("#criar-tarefa");

function addTask(){
if (textoTarefa.value === ''){
    alert ("Nenhuma tarefa foi adicionada")
}else {
    const text = document.createElement('li');
    text.innerText = textoTarefa.value;
    listaTarefas.appendChild(text);
    textoTarefa.value = '';
}
}
criarTarefa.addEventListener('click', addTask)

function oneClick(event){
let selected = document.querySelectorAll('.selected')
for (i= 0; i < selected.length; i += 1){
selected[i].classList.remove('selected')
selected[i].style.backgroundColor = ''
}
event.target.classList.add('selected')
event.target.style.backgroundColor = 'rgb(128, 128, 128)';
 

}


listaTarefas.addEventListener ('click', oneClick)

