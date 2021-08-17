console.log('hello world!');

const secction = document.querySelector('#section-principal');

function criarInput() {
  const input = document.createElement('input');
  input.placeholder = 'digite aqui sua tarefa';
  input.type = 'text';
  input.id = 'texto-tarefa';
  secction.appendChild(input);
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
  const criarBotão = document.createElement('button');
  criarBotão.id = 'criar-tarefa';
  criarBotão.innerText = 'adicionar';
  secction.appendChild(criarBotão);
}
CriarBotaoAddTarefa();

function mudarACorDeFundo(event) {
  const evento = event.target;
  const selection = document.querySelector('.selected');
  if (selection) selection.classList.remove('selected');
  if (evento.classList.contains('selected')) {
    evento.classList.remove('selected');
  } else {
    evento.classList.add('selected');
  }
}

function addOuRemoverClasseCompleted(event) {
  const evento = event.target;
  if (!evento.classList.contains('completed')) {
    evento.classList.add('completed');
  } else {
    evento.classList.remove('completed');
  }
}

function pegarValorDoInput() {
  const listaOrdenada = document.querySelector('#lista-tarefas');
  const resgateInput = document.querySelector('#texto-tarefa');
  const criarLista = document.createElement('li');
  criarLista.addEventListener('click', mudarACorDeFundo);
  criarLista.addEventListener('dblclick', addOuRemoverClasseCompleted);
  // evento que vou criado na função da linha  30.
  criarLista.innerText = resgateInput.value;
  listaOrdenada.appendChild(criarLista);
  resgateInput.value = '';
}

const restateBotaoAdd = document.querySelector('#criar-tarefa');
restateBotaoAdd.addEventListener('click', pegarValorDoInput);

function criarOBotaoApagar() {
  const botaoApagar = document.createElement('button');
  botaoApagar.id = 'apaga-tudo';
  botaoApagar.innerText = 'apagar';
  secction.appendChild(botaoApagar);
}
criarOBotaoApagar();

function apagarTodosOsElementosDaLista() {
  const resgateLista = document.querySelector('#lista-tarefas');
  while (resgateLista.lastChild) {
    resgateLista.removeChild(resgateLista.lastChild);
  }
}
const resgateBotaoApagar = document.querySelector('#apaga-tudo');
resgateBotaoApagar.addEventListener('click', apagarTodosOsElementosDaLista);

// Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível 
// desfazer essa ação clicando novamente duas vezes no item
