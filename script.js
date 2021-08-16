const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ol")

button.addEventListener("click", addFromInputToList);

function addFromInputToList(event) {
    let item = input.value;
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    list.appendChild(listItem)
    input.value = "";
}