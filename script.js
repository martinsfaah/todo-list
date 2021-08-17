const sec = document.querySelector('.add-button')
const addText = document.createElement('input')
addText.id = 'texto-tarefa'
sec.appendChild(addText)

// let chamarEl = document.querySelector('.add-button')
let botao = document.createElement('button')
botao.innerText = 'Adicionar'
botao.id = 'criar-tarefa'
sec.appendChild(botao);

let listaO = document.querySelector('.lista')
let list = document.createElement('ol')
list.id = 'lista-tarefas';
listaO.appendChild(list);


function add () {
    const input = document.getElementById('texto-tarefa')
    const button = document.getElementById('criar-tarefa')
    const ol = document.getElementById('lista-tarefas')
    
    button.addEventListener("click", function () {
        let listas = document.createElement("li")
        listas.className = 'listinhas';
        ol.appendChild(listas)
        listas.innerHTML = input.value;
        input.value = "";
    })
} 
add()
const ol = document.getElementById('lista-tarefas')
ol.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
})

