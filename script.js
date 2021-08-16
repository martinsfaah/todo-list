const botao = document.getElementById('criar-tarefa');
const digitarLista = document.getElementById('texto-tarefa');
let lista = document.getElementById('lista-tarefas')



botao.addEventListener('click', function criarElemntoLista() {
  let itemLista = document.createElement('li');
  lista.appendChild(itemLista);
  itemLista.innerText = digitarLista.value;
  digitarLista.value = "";
})

