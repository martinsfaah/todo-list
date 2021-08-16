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

function criarTag() {
  const sectionLista = document.querySelector('#lista');
  const criarListaOrdenada = document.createElement('ol');
  criarListaOrdenada.id = 'lista-tarefas';
  sectionLista.appendChild(criarListaOrdenada);
}
criarTag();

function CriarBotaoAddTarefa() {
  const sectionPrincipal = document.querySelector('#section-principal');
  const criarBotão = document.createElement('button');
  criarBotão.id = 'criar-tarefa';
  criarBotão.innerText = 'adicionar';
  sectionPrincipal.appendChild(criarBotão);
}
CriarBotaoAddTarefa();

function pegarValorDoInput() {
  const listaOrdenada = document.querySelector('#lista-tarefas');
  const resgateInput = document.querySelector('#texto-tarefa');
  let criarLista = document.createElement('li');
  criarLista.innerText = resgateInput.value;
  listaOrdenada.appendChild(criarLista);
  resgateInput.value = '';
}

let restateBotãoAdd = document.querySelector('#criar-tarefa');
restateBotãoAdd.addEventListener('click', pegarValorDoInput);
