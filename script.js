const botao = document.getElementById('criar-tarefa');
const digitarLista = document.getElementById('texto-tarefa');
let lista = document.getElementById('lista-tarefas')
let selecao = document.querySelectorAll('.lista')



botao.addEventListener('click', function criarElementoLista() {
  let itemLista = document.createElement('li');
  lista.appendChild(itemLista);
  itemLista.innerText = digitarLista.value;
  digitarLista.value = "";
})

lista.addEventListener('click', function cinzaBg(selecao) {
  selecao.target.style.backgroundColor = "rgb(128, 128, 128)";
})

