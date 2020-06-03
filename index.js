// Write your code here!

let main = document.querySelector('main');
main.remove();

let newHeader = document.createElement("h1");
document.body.appendChild(newHeader);

document.getElementsByTagName("h1")[0].setAttribute("id", "victory");
  let editedHeader = document.querySelector("h1");
  editedHeader.textContent = "is the champion"