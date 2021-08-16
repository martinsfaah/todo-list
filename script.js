// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, 
// um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

const oList = document.createElement('ol')
document.querySelector('.lista-tarefas-section').appendChild(oList)
oList.id = 'lista-tarefas'


let textInput = document.querySelector('#texto-tarefa')
textInput.addEventListener('keyof', adicionarItensLista)

function adicionarItensLista () {

}