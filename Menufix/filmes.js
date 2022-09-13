const album = [
  { 'id': '1', 'url': './img/tigers-67577_1920.jpg' },
  { 'id': '1', 'url': './img/Captura de tela de 2022-05-28 12-06-28.png' },

  { 'id': '1', 'url': './img/tigers-67577_1920.jpg' },
  { 'id': '1', 'url': './img/Captura de tela de 2022-05-28 12-06-28.png' },
  { 'id': '1', 'url': './img/tigers-67577_1920.jpg' },
  { 'id': '1', 'url': './img/Captura de tela de 2022-05-28 12-06-28.png' },
  { 'id': '1', 'url': './img/tigers-67577_1920.jpg' },
  { 'id': '1', 'url': './img/Captura de tela de 2022-05-28 12-06-28.png' },
  { 'id': '1', 'url': './img/tigers-67577_1920.jpg' },
  { 'id': '1', 'url': './img/Captura de tela de 2022-05-28 12-06-28.png' },


];


const container = document.querySelector('.filmess');

const capturaFotos = (fotos, local) => {
  fotos.forEach(element => {
    local.innerHTML += `
    
    <div class='items'>
    <img src='${element.url}'>
    </div>
    
    `;
  });
}

capturaFotos(album, container);

let item = document.querySelectorAll('.items');


const next = () => {
  const next = item[item.length - 1];
  container.insertBefore(next, item[0]);
  item = document.querySelectorAll('.items')
}

const previous = () => {
  const anterior = item[item.length - 1];
  container.appendChild(item[0]);
  item = document.querySelectorAll('.items')
}

document.querySelector('.pfrente').addEventListener('click', next);
document.querySelector('.ptras').addEventListener('click', previous);