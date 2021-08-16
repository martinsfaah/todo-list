function inputTxt() {
  const header = document.querySelector('header');
  const textBox = document.createElement('input');
  textBox.setAttribute('type', 'text');
  textBox.id = 'texto-tarefa';
  header.appendChild(textBox);
}
inputTxt();
