window.onload = function() {
  addList();
  function addList() {
    const btnText = document.querySelector('#criar-tarefa');
    btnText.addEventListener('click', addList);
    function addList(){ //https://stackoverflow.com/questions/19908215/adding-user-input-to-a-list-of-text-items-on-a-html-page/42950658
      const li = document.createElement("li");
      let text = document.querySelector("input").value; 
      const textnode = document.createTextNode(text);
      li.appendChild(textnode);
      const list = document.querySelector("#lista-tarefas");
      list.appendChild(li);
      document.querySelector("input").value = '';
      }
    }
}



