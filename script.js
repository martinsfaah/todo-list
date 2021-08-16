console.log('hello world!');

function criarInput() {
  const section = document.querySelector('#section-principal');
  const input = document.createElement('input');
  input.placeholder = 'digite aqui sua tarefa';
  input.type = 'text';
  input.id = 'texto-tarefa';
  section.appendChild(input);
}
criarInput();
