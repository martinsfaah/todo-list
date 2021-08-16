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

function mudarACorDeFundo(event) {
  const evento = event.target;
  if(evento.classList.contains('selected')) {
    evento.classList.remove('selected');
  } else {
    evento.classList.add('selected');
  }
}

function pegarValorDoInput() {
  const listaOrdenada = document.querySelector('#lista-tarefas');
  const resgateInput = document.querySelector('#texto-tarefa');
  const criarLista = document.createElement('li');
  criarLista.addEventListener('click', mudarACorDeFundo);
  // evento que vou criado na função da linha  30.
  criarLista.innerText = resgateInput.value;
  listaOrdenada.appendChild(criarLista);
  resgateInput.value = '';
}

const restateBotãoAdd = document.querySelector('#criar-tarefa');
restateBotãoAdd.addEventListener('click', pegarValorDoInput);
