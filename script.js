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
    if(document.querySelectorAll('#lista-tarefas .selecao').length > 0) { //verificação para entrar no if, e garantir que nunca vai existir mais de uma li selecionada.
      document.querySelectorAll('#lista-tarefas .selecao')[0].classList.remove('selecao'); //limpa a classe existente se houver, levando em conta que só vai existir uma com indice 0
    }
    selecao.target.classList.add("selecao"); //adição da classe na li clicada.
  } 
});

lista.addEventListener('dblclick',function riscar(selecao) {
  if (selecao.target.classList.value === "selecao") {
    selecao.target.classList.add("completed")
  } else {
    selecao.target.classList.remove("completed")
  }
})