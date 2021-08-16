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
  let listas2 = document.querySelectorAll('.completed');
  for (let elemento of listas2) {
    elemento.remove();
  }
}

// ex 12 

function saveLis() {
  let li = document.querySelectorAll('li')
  let saveLi = [];
  for (let elementos of li) {
    saveLi.push(elementos.innerText)
  }
  localStorage.setItem('tarefas', JSON.stringify(saveLi));
}

let saveTask = document.getElementById('salvar-tarefas');
saveTask.addEventListener('click', saveLis)

// function saveClasse() {
//   let ol = document.querySelectorAll('.classLi')
//   let saveC = [];
//   for (let elementos of classes) {
//     saveC.push(elementos.innerText)
//   }
//   localStorage.setItem('classe', JSON.stringify(saveC));
// }



// saveClass.addEventListener('click', saveClass)

window.onload = function loadPage() {
  let saved
  if (localStorage.getItem('tarefas') !== null) {
    saved = JSON.parse(localStorage.getItem('tarefas'))
    for (let elementos of saved) {
      let li = document.createElement('li')
      li.innerText = elementos
      li.className = "classLi"
      ol.appendChild(li);

    }
  }
}



// ex 13

function up() {
  let classLi = document.querySelectorAll(".classLi");

  for (let i = 1; i < classLi.length; i += 1) {
    if (classLi[i].style.backgroundColor === colorSelected) {
      ol.insertBefore(classLi[i], classLi[i - 1])
    }
  }
}
let colorSelected = 'rgb(128, 128, 128)'
let botaoUp = document.getElementById('mover-cima');
botaoUp.addEventListener('click', up);

function down() {
  let classLi = document.querySelectorAll(".classLi");
  for (let i = 0; i < classLi.length - 1; i += 1) {
    if (classLi[i].style.backgroundColor === colorSelected) {
      ol.insertBefore(classLi[i + 1], classLi[i])

    }
  }
}

let botaoDown = document.getElementById('mover-baixo');
botaoDown.addEventListener('click', down);

// ex 14

function removeSelected() {
  let classLiSelected = document.querySelectorAll('.classLi[style]');
  for (let elemento of classLiSelected) {
    elemento.remove();
  }
}

let botaoRemoveSelected = document.getElementById('remover-selecionado');
botaoRemoveSelected.addEventListener('click', removeSelected)





