const button=document.getElementById("criar-tarefa");
const input = document.getElementById("texto-tarefa");
const listaOrdenada = document.getElementById("lista-tarefas");

const apagaTudo=document.getElementById("apaga-tudo");
const removerFinalizados=document.getElementById("remover-finalizados");


function adicionaTarefa ()
{
    let valor = document.createElement('li');
    const selecionado =document.querySelector('.selected');
    if (selecionado!==null){selecionado.classList.remove('selected');}
    valor.className="listaDeTarefas selected";
    
    valor.innerText=input.value;
    listaOrdenada.appendChild(valor); 
    input.value=''; 
}
button.addEventListener('click',adicionaTarefa);



function changeColor (event)
{
    const selected =document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');   
     
}
listaOrdenada.addEventListener('click',changeColor);

function itemCompleto (event)
{
    const completed =document.querySelector('.completed');
    if (event.target=== completed)
    {
        event.target.classList.remove('completed');
    }
    else {  event.target.classList.add('completed');}
}
listaOrdenada.addEventListener('dblclick' ,itemCompleto);

function apaga (event)
{
    let tamanhoLista = document.querySelector('ol');
tamanhoLista.innerHTML="";
}
apagaTudo.addEventListener('click',apaga);

function removeFinalizados ()
{   
    let lista = document.getElementsByClassName('listaDeTarefas');
    console.log(lista);
    for (let i=lista.length-1;i>=0;i-=1)
    {
        
        if (lista[i].classList.contains('completed')){ listaOrdenada.removeChild(lista[i]);}
    }
}
removerFinalizados.addEventListener('click',removeFinalizados);
