/* Inicializando o botão*/
let botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', criaTarefa);

/* Inicializando textbox*/
let caixaDeTexto = document.getElementById('texto-tarefa')


/* Função para criar criar a tarefa */
function criaTarefa(){
    let textoInserido = caixaDeTexto.value;
    let itemLista = document.getElementById('lista-tarefas');
    let item = document.createElement('li');

    item.innerText = textoInserido; 
    itemLista.appendChild(item);
    caixaDeTexto.value = '';
}