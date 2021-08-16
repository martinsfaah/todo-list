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