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

tagOl = document.querySelector('#lista-tarefas')
tagOl.addEventListener('click', function(event) {
  if (event.target.classList.contains('item')) {
    const atual = document.querySelector('.atual');
    if (atual !== null) {
     atual.classList.remove('atual');
    } 
    event.target.classList.add('atual');
  }
})

