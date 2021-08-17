/* windows.onload =() =>{
    const inputTexto = document.querySelector('#texto-tarefa');
    inputTexto.addEventListener('keyup', (evento) => {
    let texto = evento.target.value;
    });
}; */

const tagTarefas = document.querySelector('#tarefas');
const btCriarTarefas = document.createElement('button');
const inputTexto = document.querySelector('#texto-tarefa');
btCriarTarefas.id = 'criar-tarefa';
btCriarTarefas.innerHTML = 'Criar Tarefas';
tagTarefas.appendChild(btCriarTarefas);
btCriarTarefas.addEventListener('click', (evento) => {
  const tagOl = document.querySelector('ol');
  const tagLi = document.createElement('li');
  tagLi.className = 'item';
  tagLi.innerText = inputTexto.value;
  tagOl.appendChild(tagLi);
  inputTexto.value = '';
});

const tagOl = document.querySelector('#lista-tarefas');
tagOl.addEventListener('click', function (event) {
  if (event.target.classList.contains('item')) {
    const atual = document.querySelector('.atual');
    if (atual !== null) {
      atual.classList.remove('atual');
    } 
    event.target.classList.add('atual');
  }
});

tagOl.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('item')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    }else {
    event.target.classList.add('completed');
    }
  }
});

const btApagarTarefas = document.createElement('button');
btApagarTarefas.id="apagar-tudo"
btApagarTarefas.innerText = "Apagar Lista"
tagTarefas.appendChild(btApagarTarefas);

btApagarTarefas.addEventListener('click', (evento) => {
  tagOl.innerText = ''
});

