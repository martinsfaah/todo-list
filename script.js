let criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', adicionaItem);

function adicionaCor(){
    let itemNovo= document.getElementById("lista-tarefas").lastChild;
    itemNovo.addEventListener('click',trocaCor);
}

function adicionaItem() {
  let item = document.getElementById('texto-tarefa').value;
  if (item != '') {
    let lista = document.getElementById('lista-tarefas');
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.appendChild(itemLista);
  }
  document.getElementById('texto-tarefa').value='';
  adicionaCor();
}

function trocaCor(evento){
    let itemSelec = evento.target;
    mudaClasseSelec(itemSelec);
    itemSelec.style.backgroundColor="rgb(128, 128, 128)";
}

function mudaClasseSelec(alvo){
    let itensChecagem = document.querySelectorAll("li");
    for (let i=0; i<itensChecagem.length; i += 1){
        if(itensChecagem[i].style.backgroundColor==='rgb(128, 128, 128)'){
            itensChecagem[i].style.backgroundColor="white";
        }
    }

}