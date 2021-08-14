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

//ex 8

let creatLi = document.querySelector("#lista-tarefas");
creatLi.addEventListener("click", backColor);
let remove = creatLi.children


function backColor(event) {
  for (elemento of remove) {
    elemento.style.removeProperty('background-color');
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

//ex 9

creatLi.addEventListener("dblclick", check);

function check(event) {
  if (event.target.className === 'classLi') {
    event.target.className += ' completed';
  } else if (event.target.className === 'classLi completed') {
    event.target.classList.remove('completed');
  }
}

// ex 10

let botaoRemove = document.querySelector('#apaga-tudo');
botaoRemove.addEventListener('click', removeAll);
let listas = document.querySelectorAll('#lista-tarefas')

function removeAll() {
  for (let elemento of listas) {
    elemento.innerHTML = ''
  }
}

let botaoRemoveDone = document.querySelector('#remover-finalizados');
botaoRemoveDone.addEventListener('click', removeDone);

//ex 11

function removeDone() {
  let listas2 = document.querySelectorAll('.completed')
  for (let elemento of listas2) {
    elemento.remove()
  }
}

