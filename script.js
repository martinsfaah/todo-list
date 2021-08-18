let button = document.querySelector('#criar-tarefa');
let input = document.querySelector('#texto-tarefa');
let ol = document.querySelector('#lista-tarefas') 
let cont = 0
// Requisito 5 e 6:
// Adicionar na ol com click
button.addEventListener('click', function() {  
  if (input.value === '') {
    alert('Digite algo!')
  } else {
    let li = document.createElement('li');
    li.innerText = input.value;
    li.className = 'list-item'
    if (cont === 0) {
      li.className = 'list-item selected'
    }
    li.addEventListener('click', addBackgroundColor)
    ol.appendChild(li)
    input.value = '';
    cont += 1;
  }
})
// Adicionar na ol com enter
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    if (input.value === '') {
      alert('Digite algo!');
    } else {
      let li = document.createElement('li');
      li.innerText = input.value;
      li.className = 'list-item'
      if (cont === 0) {
        li.className = 'list-item selected'
      }
      li.addEventListener('click', addBackgroundColor);           
      ol.appendChild(li);
      input.value = '';
      cont += 1;
    }
  }      
})

// Requisito 7:
function addBackgroundColor(event) {
  const newColor = "rgb(128, 128, 128)";
  const defaultColor = 'white';
  let eventTargetBgColor = event.target.style.backgroundColor;

  // Requisito 8:
  const selected = document.querySelector('.selected');  
  selected.classList.remove('selected');
  event.target.classList.add('selected')

  let allItems = document.querySelectorAll('.list-item')  

  for (let index = 0; index < allItems.length; index += 1) {
    if (allItems[index].classList.length > 1) {
      event.target.style.backgroundColor = newColor;
    } else {
      allItems[index].style.backgroundColor = defaultColor;
    }
  }
}

// Requisito 8:
// function addClassSelected(event) {
//   const selected = document.querySelector('.selected');
//   selected.classList.remove('selected');
//   event.target.classList.add('selected');
//   // selected.style.backgroundColor = 'white'
// }

window.addEventListener('click', function(event) {
  console.log(event);
  const testeCor = event.target.style.backgroundColor;
  // const testElementoSelecionado = event.target;
  console.log(testeCor);
  // console.log(testElementoSelecionado);
})
