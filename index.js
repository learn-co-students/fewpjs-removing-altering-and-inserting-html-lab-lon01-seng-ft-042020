const main = document.querySelector('#main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
document.body.appendChild(newHeader)

newHeader.textContent = 'is the champion';

