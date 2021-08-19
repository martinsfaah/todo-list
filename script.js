const button=document.getElementById("criar-tarefa");
const input = document.getElementById("texto-tarefa");
const listaOrdenada = document.getElementById("lista-tarefas");
const apagaTudo=document.getElementById("apaga-tudo");
const removerFinalizados=document.getElementById("remover-finalizados");
const removerSelecionado=document.getElementById("remover-selecionado");
const moverParaBaixo=document.getElementById("mover-baixo");
const moverParaCima=document.getElementById("mover-cima");


function adicionaTarefa ()
{
    let valor = document.createElement('li');
    const selecionado =document.querySelector('.selected');
    if (selecionado!==null){selecionado.classList.remove('selected');}
    valor.classList="listaDeTarefas";
    
    valor.innerText=input.value;
    listaOrdenada.appendChild(valor); 
    input.value=''; 
}
button.addEventListener('click',adicionaTarefa);



function changeColor (event)
{
    
    const selected =document.querySelector('.selected');
    if (selected !== null) {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
    }
    else { event.target.classList.add('selected');}
     
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
    
    for (let i=lista.length-1;i>=0;i-=1)
    {
        
        if (lista[i].classList.contains('completed')){ listaOrdenada.removeChild(lista[i]);}
    }
}
removerFinalizados.addEventListener('click',removeFinalizados);

function removeSelecionado ()
{   
    let lista = document.getElementsByClassName('listaDeTarefas');
    for (let i=lista.length-1;i>=0;i-=1)
    {
        
        if (lista[i].classList.contains('selected'))
        { 
            listaOrdenada.removeChild(lista[i]);
            lista[i-1].classList.add("selected");
            break;
        }
    }
}
removerSelecionado.addEventListener('click',removeSelecionado);

function moverBaixo ()
{   
    
    let lista = document.getElementsByTagName('li');
    
    for (let i=0;i<lista.length;i+=1)
    {
        
        if (lista[i].classList.contains('selected'))
        { 
           
            if (i===lista.length-1){alert("item selecionado é o útimo");break;}
            
            else {
                
                let temp = lista[i+1].innerText;                 
                lista[i+1].innerText=lista[i].innerText;
                lista[i].innerText=temp;
                lista[i].classList.remove('selected');
                lista[i+1].classList.add('selected'); 
                if (lista[i].classList.contains('completed')) 
                {
                    lista[i].classList.remove('completed');
                lista[i+1].classList.add('completed');
                }   
            
                
            
            break;}
        }
    }
}
moverParaBaixo.addEventListener('click',moverBaixo);

function moverCima ()
//arrumar isso 
{   
    let lista = document.getElementsByTagName('li');
    
    for (let i=0;i<lista.length;i+=1)
    {
        
        if (lista[i].classList.contains('selected'))
        { 
           
            if (i===0){alert("item selecionado é o primeiro");break;}
            
            else {
                
                let temp = lista[i-1].innerText; 
                lista[i-1].innerText=lista[i].innerText;
                lista[i].innerText=temp;
                lista[i].classList.remove('selected');
                lista[i-1].classList.add('selected');
                if (lista[i].classList.contains('completed')) 
                {
                    lista[i].classList.remove('completed');
                lista[i-1].classList.add('completed');
                }   
            
            break;}
        }
        
    }
}
moverParaCima.addEventListener('click',moverCima);




