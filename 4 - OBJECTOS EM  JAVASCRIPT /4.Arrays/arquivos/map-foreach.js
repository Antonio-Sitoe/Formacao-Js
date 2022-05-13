const li = Array.from(document.querySelectorAll('li'));

// for (let i = 0; i < li.length; i++) {
//   li[i].addEventListener('click', function (e) {
//     console.log(e.target);
//   });
// }

// function addClass(item) {
//   return item;
// }
// const retorn = addClass('asasas');
// console.log(retorn);

// const item = [];

// li.forEach((it, i, a) => {
//   item.push(it.innerText.toUpperCase());
// });

// console.log(item);

const materialDeEscritorio = ['caneta', 'computador', 'mouse'];

// function callback(item, index, array) {
//   return item.toUpperCase();
// }
// console.log(materialDeEscritorio.map(callback)); ///uma nova array modifcada
// console.log(materialDeEscritorio.forEach(callback)); //undefined

const AcessorioDeEscritorio = materialDeEscritorio.map((item) => {
  const novoValor = 'Acessorio ' + item;

  return {
    nome: novoValor,
    preco: Math.floor(Math.random() * 100),
    data: Date(),
  };
});

const ul = document.querySelector('ul');

const ListItems = AcessorioDeEscritorio.forEach((item) => {
  const element = ` <li>
                       <p>Nome: ${item.nome}</p>
                       <p>Preco: ${item.preco}</p>
                       <p>Data: ${item.data}</p>
                  </li>`;

  ul.innerHTML += element;
});

console.log(ListItems);

const numeros = [2, 6, 8, 10, 12, 14];

const numerosX2 = numeros.map((numero) => {
  return numero * 2;
});

console.log(numeros);
console.log(numerosX2);