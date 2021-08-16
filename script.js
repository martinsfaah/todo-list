//section
let section = document.querySelector('section')

//<p>
let p = document.createElement('p');
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
p.id = 'funcionamento';
section.appendChild(p);

//input
let input = document.createElement('input');

input.id = 'texto-tarefa';
section.appendChild(input);

//ol
let ol = document.createElement('ol');
ol.id = 'lista-tarefas'
document.body.appendChild(ol);

//button
let button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'adicionar'
section.appendChild(button);

//list
let inputItem = document.querySelector('#texto-tarefa');
let buttonCreate =  document.querySelector('#criar-tarefa');

function inputAdd (){
    li = document.createElement('li');
    ol.appendChild(li)

    li.innerText = inputItem.value
        inputItem.value = '';
    
}

    buttonCreate.addEventListener ('click', inputAdd);


