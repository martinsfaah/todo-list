const botao = document.getElementById('criar-tarefa');
const digitarLista = document.getElementById('texto-tarefa');
let lista = document.getElementById('lista-tarefas')
let selecao = document.querySelectorAll('li')



botao.addEventListener('click', function criarElementoLista() {
  let itemLista = document.createElement('li');
  lista.appendChild(itemLista);
  itemLista.innerText = digitarLista.value;
  digitarLista.value = "";
})

lista.addEventListener('click', function cinzaBg(selecao) {
  if (selecao.target.classList.length === 0) {
    if(document.querySelectorAll('#lista-tarefas .selecao').length > 0) {
      document.querySelectorAll('#lista-tarefas .selecao')[0].classList.remove('selecao');
    }
    selecao.target.classList.add("selecao");
  } else {
    selecao.target.classList.remove("selecao")
  }
}) 