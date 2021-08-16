function createParagraph() {
  let paragraph = document.createElement('p');
  const myHeader = document.querySelector('header');
  myHeader.appendChild(paragraph);
  paragraph.id = 'funcionamento'; 
  paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo'; 
}
createParagraph();

function createInput() {
  let input = document.createElement('input'); 
  const mySection = document.querySelector('section'); 
  mySection.appendChild(input); 
  input.id = "texto-tarefa"; 
}
createInput();