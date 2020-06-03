// Write your code here!

const mainElement = document.getElementById("main");
mainElement.remove();

const newHeader = document.createElement("h1");

document.body.appendChild(newHeader);

newHeader.id ="victory";
newHeader.innerHTML = "Jamie is the champion";