// requisito 5 

let botaoTarefa = document.getElementById("criar-tarefa");
let inputTarefa = document.getElementById("texto-tarefa");
let listaTarefa = document.getElementById("lista-tarefas");

botaoTarefa.addEventListener('click', criaItem); // clicar no botão chama a função que adiciona o li à ol e limpa o campo de input de texto

function criaItem() {
  let itemLista = document.createElement("li"); // variável para criar uma <li>
  itemLista.innerHTML = inputTarefa.value; // coloca o valor do input dentro da li
  listaTarefa.appendChild(itemLista); // adiciona o li criado à ol
  inputTarefa.value = ""; // limpa campo de input
}
