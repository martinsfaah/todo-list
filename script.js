let botao = document.querySelector("#criar-tarefa");

botao.addEventListener("click", event => {

  event.preventDefault();

  const textoInput = document.querySelector("#texto-tarefa").value;

  limparInput();
  criarLi(textoInput);

});

// Atribui uma string vazia no input
function limparInput() {

  document.querySelector("#texto-tarefa").value = "";
}

// Capitura ol, cria li e adiciona a li criada como filha da ol
function criarLi(textoInput) {
  const ol = document.querySelector("#lista-tarefas");
  const li = document.createElement("li")

  li.innerText = textoInput;

  ol.appendChild(li);
}
