const sec = document.querySelector('.add-button')
const addText = document.createElement('input')
addText.id = 'texto-tarefa'
sec.appendChild(addText)

let chamarEl = document.querySelector('.add-button')
let botao = document.createElement('button')
botao.innerText = 'Adicionar'
botao.id = 'criar-tarefa'
chamarEl.appendChild(botao);

let listaO = document.querySelector('.lista')
let list = document.createElement('ol')
list.id = 'lista-tarefas';
listaO.appendChild(list);


function add () {
    const input = document.querySelector('#texto-tarefa')
    const button = document.querySelector('#criar-tarefas')
    const ol = document.querySelector('#lista-tarefa')
    
    button.addEventListener("click", function () {
        let listas = document.createElement("li")
        ol.appendChild(listas)
        listas.innerHTML = input.value;
        input.value = "";
})
}
add()