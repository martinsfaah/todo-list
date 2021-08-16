function createParagraph() {
  let paragraph = document.createElement('p');
  const myHeader = document.querySelector('header');
  myHeader.appendChild(paragraph);
  paragraph.id = 'funcionamento'; 
  paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo'; 
}
createParagraph();