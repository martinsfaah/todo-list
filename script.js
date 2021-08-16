function addTask() {
  const task = document.getElementsByClassName('lista-tarefas')[0];
  const listLine = document.createElement('li');
  for (let i = 0; i < listLine.length; i += 1) {
    task.appendChild(listLine);
  }
}
addTask();
