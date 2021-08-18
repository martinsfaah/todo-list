let button = document.querySelector('#criar-tarefa');
let input = document.querySelector('#texto-tarefa');
let ol = document.querySelector('#lista-tarefas')
ol.style.backgroundColor = 

// Requisito 5 e 6:
// Adicionar na ol com click
button.addEventListener('click', function() {  
  if (input.value === '') {
    alert('Digite algo!')
  } else {
    let li = document.createElement('li');
    li.innerText = input.value;
    li.addEventListener('click', addBackgroundColor)
    ol.appendChild(li)
    input.value = '';
  }
})
// Adicionar na ol com enter
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    if (input.value === '') {
      alert('Digite algo!')
    } else {
      let li = document.createElement('li');
      li.innerText = input.value;
      li.addEventListener('click', addBackgroundColor)
      ol.appendChild(li)
      input.value = '';
    }
  }      
})

// Requisito 7:
function addBackgroundColor(event) {
  const newColor = "rgb(128, 128, 128)";
  const defaultColor = 'white';
  let eventTargetBgColor = event.target.style.backgroundColor;
  
  if (eventTargetBgColor !== newColor) {
    event.target.style.backgroundColor = newColor;    
  } else if (eventTargetBgColor === newColor) {
    event.target.style.backgroundColor = defaultColor;  
  }
}

// window.addEventListener('click', function(event) {
//   console.log(event);
//   const testeCor = event.target.style.backgroundColor;
//   // const testElementoSelecionado = event.target;
//   console.log(testeCor);
//   // console.log(testElementoSelecionado);
// })
  