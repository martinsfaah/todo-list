//resquisito 6 e 7//

let botao = document.getElementById("criar-tarefa");
botao.addEventListener("click", addLi);
let input = document.getElementById("texto-tarefa");
let ol = document.getElementById("lista-tarefas")

function addLi() {
  let li = document.createElement("li");
  li.className = "classLi"
  li.innerText = input.value;
  input.value = '';
  ol.appendChild(li);
}

let creatLi = document.querySelector("#lista-tarefas");
creatLi.addEventListener("click", backColor);

function backColor(event) {
  if (event.target === creatLi){
  } else {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

