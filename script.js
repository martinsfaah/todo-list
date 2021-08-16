//<p>
let p = document.createElement('p');
p.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
p.id = 'funcionamento';
document.body.appendChild(p);

//input
let input = document.createElement('input');
input.type = 'text';
input.id = 'texto-tarefa';
document.body.appendChild(input);

//ol
let ol = document.createElement('ol');
ol.id = 'lista-tarefas'
document.body.appendChild(ol);