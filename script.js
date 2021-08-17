document.getElementById('criar-tarefa').addEventListener('click', function( event ) {
	const usersText = document.getElementById('texto-tarefa').value;
	const li = document.createElement('li');
	li.textContent = usersText;
	document.getElementById('lista-tarefas').appendChild(li)
	document.getElementById('texto-tarefa').value = "";
})

document.aloand = function () {
}