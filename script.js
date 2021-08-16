let criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', adicionaItem);



function adicionaItem() {
  let item = document.getElementById('texto-tarefa').value;
  if (item != '') {
    let lista = document.getElementById('lista-tarefas');
    let itemLista = document.createElement('li');
    itemLista.innerHTML = item;
    lista.appendChild(itemLista);
  }
  document.getElementById('texto-tarefa').value='';
  adicionaFuncao();
}

function trocaCor(evento){
    let itemSelec = evento.target;
    apagaCores(itemSelec);
    itemSelec.style.backgroundColor="rgb(128, 128, 128)";
}

function apagaCores(alvo){
    let itensChecagem = document.querySelectorAll("li");
    for (let i=0; i<itensChecagem.length; i += 1){
        if(itensChecagem[i].style.backgroundColor==='rgb(128, 128, 128)'){
            itensChecagem[i].style.backgroundColor="white";
        }
    }

}

function adicionaFuncao(){
    let itemNovo= document.getElementById("lista-tarefas").lastChild;
    itemNovo.addEventListener('click',trocaCor);
    itemNovo.addEventListener('dblclick',riscaItem);
}


function riscaItem(evento){
    let itemAnalisado = evento.target;

    if(itemAnalisado.className!='completed'){
        itemAnalisado.className="completed";
    }
    else{
        itemAnalisado.classList.remove("completed");
    }
}