const header = document.getElementsByTagName('header');
// const main = document.getElementsByTagName('main');
const sectionListControl = document.getElementById('task-list-control');
const sectionListContent = document.getElementById('task-list-content');

const newSelector = (qttOfSelector, element, selector, selectorName) => {
  for (let index = 0; index < qttOfSelector; index += 1) {
    if (typeof (element.length) === 'undefined') {
      element.setAttribute(selector, selectorName);
    } else {
      element[index].setAttribute(selector, selectorName);
    }
  }
};
const createNewElement = (element, elementContent, location, qttofElements, selector, selectorName) => {
  for (let index = 0; index < qttofElements; index += 1) {
    const newElement = document.createElement(element);
    newElement.innerHTML = elementContent;
    if (typeof (location.length) === 'undefined') {
      location.appendChild(newElement);
      newSelector(qttofElements, location.appendChild(newElement), selector, selectorName);
    } else {
      location[index].appendChild(newElement);
      newSelector(qttofElements, location[index].appendChild(newElement), selector, selectorName);
    }
  }
};

const newEvent = (location, event, func) => {
  location.addEventListener(event, func);
};

const addNewTask = () => {
  const inputAddNewTask = document.getElementById('texto-tarefa');
  const newTaskValue = inputAddNewTask.value;
  const taskList = document.getElementById('lista-tarefas');
  createNewElement('li', newTaskValue, taskList, 1, 'class', 'task-item');
  inputAddNewTask.value = null;
};

const highLightItem = (location) => {
  location.addEventListener('click', (object) => {
    const event = object;
    if (document.querySelector('.selected') !== null) {
      document.querySelector('.selected').classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
};

const underScoreItem = (location) => {
  location.addEventListener('dblclick', (object) => {
    const event = object;
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
};
// #REQ 1
createNewElement('h1', 'Minha Lista de Tarefas', header, 1);

// #REQ 2
createNewElement('p', 'Clique duas vezes em um item para marcá-lo como completo', header, 1, 'id', 'funcionamento');

// #REQ 3
createNewElement('input', '', sectionListControl, 1, 'id', 'texto-tarefa');

// #REQ 4
createNewElement('ol', '', sectionListContent, 1, 'id', 'lista-tarefas');

// #REQ 5 e 6
createNewElement('button', 'Adicionar', sectionListControl, 1, 'id', 'criar-tarefa');
const buttonAddNewTask = document.getElementById('criar-tarefa');
newEvent(buttonAddNewTask, 'click', addNewTask);

// #REQ 7 e 8
const taskList = document.getElementById('lista-tarefas');
highLightItem(taskList);

// #REQ 9
underScoreItem(taskList);
