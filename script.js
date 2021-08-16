let criarTarefa = document.getElementById('criar-tarefa');
criarTarefa.addEventListener('click', adicionaItem);

let apagaTodos= document.getElementById("apaga-tudo");
apagaTodos.addEventListener("click", apagaTudo);

let apagaSelec= document.getElementById("remover-finalizados");
apagaSelec.addEventListener("click", apagaSelecionados);



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
    itemSelec.classList.add("selected")
}

function apagaCores(alvo){
    let itensChecagem = document.querySelectorAll("li");
    for (let i=0; i<itensChecagem.length; i += 1){
        if(itensChecagem[i].className==="selected"){
            itensChecagem[i].classList.remove("selected");
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

    if(itemAnalisado.classList.contains('completed')){
        
        itemAnalisado.classList.remove("completed");
    }
    else{
        itemAnalisado.classList.add("completed");
    }
}

function apagaTudo(){
    let elementos= document.getElementById("lista-tarefas").children;
    console.log(elementos);
    for(let i = elementos.length-1; i>=0; i -= 1){
        elementos[i].remove();
    }
}

function apagaSelecionados(){
    let elementos= document.getElementById("lista-tarefas").children;
    console.log(elementos);
    for(let i = elementos.length-1; i>=0; i -= 1){
        if(elementos[i].classList.contains("completed")){
            elementos[i].remove();
        }
    }
}
