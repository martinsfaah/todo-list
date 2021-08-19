const sec = document.querySelector('.add-button')
const addText = document.createElement('input')
addText.id = 'texto-tarefa'
sec.appendChild(addText)

// let chamarEl = document.querySelector('.add-button')
let botao = document.createElement('button')
botao.innerText = 'Adicionar'
botao.id = 'criar-tarefa'
sec.appendChild(botao);

let listaO = document.querySelector('.lista')
let list = document.createElement('ol')
list.id = 'lista-tarefas';
listaO.appendChild(list);


function add () {
    const input = document.getElementById('texto-tarefa')
    const button = document.getElementById('criar-tarefa')
    const ol = document.getElementById('lista-tarefas')
    
    button.addEventListener("click", function () {
        const listas = document.createElement("li")
        ol.appendChild(listas)
        listas.innerHTML = input.value;
        input.value = "";
    })
} 
add()

const ol = document.getElementById('lista-tarefas')
ol.addEventListener('click', function (event) {
    let li = document.querySelectorAll('li')
    for (let i = 0; i < li.length; i += 1) {
        if (li[i].style.backgroundColor == 'rgb(128, 128, 128)') {
            li[i].removeAttribute('style')
        }
    }
    
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'
})
// requisito 9
ol.addEventListener('dblclick', () => {
    let lists = document.querySelectorAll('li')
    for (let i = 0; i < lists.length; i += 1) {
        if (lists[i].classList.contains('completed')) {
            lists[i].classList.remove('completed')
        } else {
            lists[i].classList.add('completed')
        }
        // event.target.classList.add('completed')
    }})
//     }
// } 
// if(event.target.className = 'completed') {
//     event.target.classList.remove('completed')

    // if (event.target.nodeName == 'LI') {
    //    event.target.classList.add('completed')
    // console.log('cliquei em uma li')
    // }
    //     console.log('fui clicado')
    // }  

let clear = document.getElementById('apaga-tudo')
clear.addEventListener('click', () => {
   let liss = document.querySelectorAll('li')
   for (let index = 0; index < liss.length; index += 1)
   liss[index].innerHTML = ''
})
