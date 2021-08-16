// Exercício 5 e 6 - Criar a função do botão e do input.
const todoList = document.getElementById('lista-tarefas');
const listButton = document.getElementById('criar-tarefa');
const inputList = document.getElementById('texto-tarefa');

function addToListButton () {
	const inputText = inputList.value;
	const newLi = document.createElement('li');
	newLi.className = 'listItem';
	newLi.innerHTML = inputText;
	todoList.appendChild(newLi);
	inputList.value = ''
}
listButton.addEventListener('click', addToListButton);

// Exercício 7 e 8 - mudar a cor de fundo do item da lista quando clicado.
todoList.addEventListener('click', itemColorChange)
let selected = 0
function itemColorChange(e) {
	if (selected.className === 'listItem-Selected completed' || selected.className === 'listItem completed') {
		selected.className = 'listItem completed';
	}else {
		selected.className = 'listItem';
	}
	if (e.target.className === 'listItem') {
		e.target.className = 'listItem-Selected';
		selected = document.getElementsByClassName('listItem-Selected')[0];
	}
}

// Exercício 9 - double click para riscar a tarefa
function taskDone(e) {
	if (e.target.className === 'listItem-Selected') {
		e.target.className ='listItem completed';
	} else if (e.target.className === 'listItem completed') {
		e.target.className = 'listItem'
	}
}
todoList.addEventListener('dblclick', taskDone)