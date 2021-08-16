const textoTarefa = document.querySelector("#texto-tarefa");
const listaTarefas= document.querySelector("#lista-tarefas");
const criarTarefa= document.querySelector("#criar-tarefa");

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
