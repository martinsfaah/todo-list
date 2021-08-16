const button=document.getElementById("criar-tarefa");
const input = document.getElementById("texto-tarefa");
const listaOrdenada = document.getElementById("lista-tarefas");
const lista = document.querySelector('.listaDeTarefas');

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
button.addEventListener('click',adicionaTarefa)

function changeColor (event)
{
    const selected =document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');   
    //document.getElementsByClassName('selected').style.backgrounColor=rgb(128, 128, 128);  
}
listaOrdenada.addEventListener('click',changeColor);