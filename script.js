const botao = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');
const creatLi = document.querySelector('#lista-tarefas');
const remove = creatLi.children;
const botaoRemove = document.querySelector('#apaga-tudo');
const listas = document.querySelectorAll('#lista-tarefas');
const botaoRemoveDone = document.querySelector('#remover-finalizados');
const colorSelected = 'rgb(128, 128, 128)';
const botaoUp = document.getElementById('mover-cima');
const botaoDown = document.getElementById('mover-baixo');
const botaoRemoveSelected = document.getElementById('remover-selecionado');
/*  resquisito 6 e 7  */

function addLi() {
  const li = document.createElement('li');
  li.className = 'classLi';
  li.innerText = input.value;
  input.value = '';
  ol.appendChild(li);
}

botao.addEventListener('click', addLi);

/* ex 8 */

function backColor(e) {
  const event = e;
  for (let index = 0; index < remove.length; index += 1) {
    remove[index].style.removeProperty('background-color');
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

creatLi.addEventListener('click', backColor);

/* ex 9 */

function check(e) {
  const event = e;
  if (event.target.className === 'classLi') {
    event.target.className += ' completed';
  } else if (event.target.className === 'classLi completed') {
    event.target.classList.remove('completed');
  }
}

creatLi.addEventListener('dblclick', check);

/* ex 10 */

function removeAll() {
  for (let index = 0; index < listas.length; index += 1) {
    listas[index].innerHTML = '';
  }
}

botaoRemove.addEventListener('click', removeAll);

/* ex 11 */

function removeDone() {
  const listas2 = document.querySelectorAll('.completed');
  for (let i = 0; i < listas2.length; i += 1) {
    listas2[i].remove();
  }
}

botaoRemoveDone.addEventListener('click', removeDone);

/* ex 12 */

function saveLis() {
  const li = document.querySelectorAll('li');
  const saveLi = [];
  for (let index = 0; index < li.length; index += 1) {
    saveLi.push(li[index].innerText);
  }
  localStorage.setItem('tarefas', JSON.stringify(saveLi));
}

const saveTask = document.getElementById('salvar-tarefas');
saveTask.addEventListener('click', saveLis);

//  function saveClasse() {
//    let ol = document.querySelectorAll('.classLi')
//    let saveC = [];
//    for (let elementos of classes) {
//      saveC.push(elementos.innerText)
//    }
//    localStorage.setItem('classe', JSON.stringify(saveC));
//  }

//  saveClass.addEventListener('click', saveClass)

window.onload = function loadPage() {
  let saved;
  if (localStorage.getItem('tarefas') !== null) {
    saved = JSON.parse(localStorage.getItem('tarefas'));
    for (let i = 0; i < saved.length; i += 1) {
      const li = document.createElement('li');
      li.innerText = saved[i];
      li.className = 'classLi';
      ol.appendChild(li);
    }
  }
};

/*  ex 13 */

function up() {
  const classLi = document.querySelectorAll('.classLi');

  for (let i = 1; i < classLi.length; i += 1) {
    if (classLi[i].style.backgroundColor === colorSelected) {
      ol.insertBefore(classLi[i], classLi[i - 1]);
    }
  }
}

botaoUp.addEventListener('click', up);

function down() {
  const classLi = document.querySelectorAll('.classLi');
  for (let i = 0; i < classLi.length - 1; i += 1) {
    if (classLi[i].style.backgroundColor === colorSelected) {
      ol.insertBefore(classLi[i + 1], classLi[i]);
    }
  }
}

botaoDown.addEventListener('click', down);

/*  ex 14  */

function removeSelected() {
  const classLiSelected = document.querySelectorAll('.classLi[style]');
  for (let i = 0; i < classLiSelected.length; i += 1) {
    classLiSelected[i].remove();
  }
}

botaoRemoveSelected.addEventListener('click', removeSelected);
