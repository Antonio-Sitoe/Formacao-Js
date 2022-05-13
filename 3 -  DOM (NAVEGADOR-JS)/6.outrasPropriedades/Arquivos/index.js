const senhaGerada = document.querySelector('.senha-gerada');
// // const novoTexto = '<section>Novo text</section>';

// // senhaGerada.innerText = 'novoTexto';

// const body = senhaGerada.previousElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
// console.log(body);

const form = document.querySelector('.form');
const listaFrutas = document.querySelector('ul');
const turanja = document.createElement('li');
const pera = document.createElement('li');
turanja.innerText = 'turanja';
pera.innerText = 'pera';
const maca = listaFrutas.children[0];

form.appendChild(listaFrutas);
listaFrutas.appendChild(turanja);
listaFrutas.appendChild(pera);

listaFrutas.removeChild(pera);


