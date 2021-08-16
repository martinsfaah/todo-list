//Requisito - 01
 //HEADER
let header = document.createElement("header");
header.innerText = "Minha Lista de Tarefas";
document.body.appendChild(header);

// Requisito - 02
// Parágrafo de HEADER.
let headerP = document.createElement("p");
headerP.innerText = "Clique duas vezes em um item para marcá-lo como completo";
headerP.id = "funcionamento";

document.querySelector("header").appendChild(headerP);

// Requisito - 03
