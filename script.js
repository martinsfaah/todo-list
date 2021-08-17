//list
let inputItem = document.querySelector('#texto-tarefa');
let buttonCreate =  document.querySelector('#criar-tarefa');
let ol = document.querySelector('ol')

buttonCreate.addEventListener ('click', inputAdd);
    
    function inputAdd (){
        let li = document.createElement('li');
        ol.appendChild(li)
        li.innerText = inputItem.value     
        inputItem.value = '';     
    }
    
    
ol.addEventListener('click', liColor);

    function liColor(event) {
        let clear = document.querySelectorAll('li')    
        for (let i = 0; i < clear.length; i += 1) {
            clear[i].style.backgroundColor = ''
        }
        click = event.target
        click.style.backgroundColor = 'rgb(128, 128, 128)';  
    }

ol.addEventListener('dblclick', lineThrough);

    function lineThrough(event) {
       if (event.target.className === 'completed'){
        event.target.classList.remove('completed')         
    }  else {
        event.target.classList.add('completed') 
    }

    }
    




   

  
      
   







