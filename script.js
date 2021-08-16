/* Inserir Tarefa */

const buttonCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function selecionarTarefa(evt) {
  const itemTarefa = evt.target;

  listaTarefas.childNodes.forEach((tarefa) => {
    const tf = tarefa;
    tf.style.backgroundColor = '';
  });
  itemTarefa.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completarTarefa(evt) {
  const itemTarefa = evt.target;

  if (itemTarefa.classList.contains('completed')) {
    itemTarefa.classList.remove('completed');
  } else {
    itemTarefa.classList.add('completed');
  }
}

function inserirTarefa() {
  const inputTarefa = document.getElementById('texto-tarefa');
  const itemTarefa = document.createElement('li');

  itemTarefa.innerText = inputTarefa.value;
  itemTarefa.addEventListener('click', selecionarTarefa);
  itemTarefa.addEventListener('dblclick', completarTarefa);
  inputTarefa.value = '';

  listaTarefas.appendChild(itemTarefa);
}

buttonCriarTarefa.addEventListener('click', inserirTarefa);

/* Apagar todas as tarefas */

const buttonApagarTudo = document.getElementById('apaga-tudo');

function apagarTarefas() {
  const tamanhoListaInicial = listaTarefas.children.length;
  for (let idx = 0; idx < tamanhoListaInicial; idx += 1) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}

buttonApagarTudo.addEventListener('click', apagarTarefas);

/* Remover tarefas completas */

const buttonRemoverCompletos = document.getElementById('remover-finalizados');

function removerTarefasCompletas() {
  for (let idx = 0; idx < listaTarefas.children.length; idx += 1) {
    const itemAtual = listaTarefas.childNodes[idx];

    if (itemAtual.classList.contains('completed')) {
      listaTarefas.removeChild(itemAtual);
      idx -= 1;
    }
  }
}

buttonRemoverCompletos.addEventListener('click', removerTarefasCompletas);

/* Salvar Tarefas */

const buttonSalvarTarefas = document.getElementById('salvar-tarefas');

function salvarTarefas() {
  const arrayListaTarefas = Array.from(listaTarefas.childNodes);
  console.log(arrayListaTarefas);

  const arrTarefa = [];

  arrayListaTarefas.forEach((tarefa) => {
    const objTarefa = {
      innerText: tarefa.innerText,
      className: tarefa.className,
      backgroundColor: tarefa.style.backgroundColor,
    };

    arrTarefa.push(objTarefa);
  });
  localStorage.setItem('listaDeTarefas', JSON.stringify(arrTarefa));
}

buttonSalvarTarefas.addEventListener('click', salvarTarefas);

/* Inicializar Tarefas Salvas */

if (localStorage.getItem('listaDeTarefas')) {
  const listaDeTarefasSalvas = JSON.parse(
    localStorage.getItem('listaDeTarefas')
  );

  listaDeTarefasSalvas.forEach((tarefa) => {
    const itemTarefa = document.createElement('li');

    itemTarefa.innerText = tarefa.innerText;
    itemTarefa.className = tarefa.className;
    itemTarefa.style.backgroundColor = tarefa.backgroundColor;
    itemTarefa.addEventListener('click', selecionarTarefa);
    itemTarefa.addEventListener('dblclick', completarTarefa);
    listaTarefas.appendChild(itemTarefa);
  });
}
