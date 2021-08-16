// Requisitos 1 e 2 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag(1) e Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"(2).
function addHeaderAndParagraph() {
    const newHeader = document.createElement('header');
    const newParagraph = document.createElement('p');
    newParagraph.id = 'funcionamento';
    newParagraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
    const callScript = document.getElementById('script');
    const callParent = callScript.parentNode;
    newHeader.innerHTML = 'Minha Lista de Tarefas';
    callParent.insertBefore(newHeader, callScript);
    callParent.insertBefore(newParagraph, callScript);
}
addHeaderAndParagraph();

