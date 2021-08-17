//list
const inputItem = document.querySelector('#texto-tarefa');
const buttonCreate =  document.querySelector('#criar-tarefa');
const ol = document.querySelector('ol');
const deleteAll = document.querySelector('#apaga-tudo');


buttonCreate.addEventListener ('click', inputAdd);
    
    function inputAdd() {
        const li = document.createElement('li');
        ol.appendChild(li)
        li.innerText = inputItem.value     
        inputItem.value = '';     
    }
    
    
ol.addEventListener('click', liColor);
    
    function liColor(event) {
        const clear = document.querySelectorAll('li')    
        for (let i = 0; i < clear.length; i += 1) {
            clear[i].style.backgroundColor = ''
        }
        const click = event.target
        click.style.backgroundColor = 'rgb(128, 128, 128)';  
    }



    function liColor(event) {
        const clear = document.querySelectorAll('li')    
        for (let i = 0; i < clear.length; i += 1) {
            clear[i].style.backgroundColor = ''
        }
        const click = event.target
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

deleteAll.addEventListener('click', dAll);

    function dAll() {
        const dAll = document.querySelectorAll('li')
        for (let i = 0; i < dAll.length; i +=1){
        dAll[i].remove();
        }

    }
    
    




   

  
      
   







