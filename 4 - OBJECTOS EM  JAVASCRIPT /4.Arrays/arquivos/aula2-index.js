//  recebe o valor novo acumulador
// acumulador - retorno da iteracao anterior.

const aulas = [10, 25, 69];

const newAulas = aulas.reduce((acumulador, item) => {
  // console.log(acumulador, item);
  return acumulador + item;
}, 0);

// console.log(newAulas); //104

// console.log(newAulas);

const produto = [
  {
    nome: 'telefone',
    preco: 6000,
    quantidade: 2,
    descricao: 'Marca samsung',
  },
  {
    nome: 'televisao',
    preco: 12500,
    quantidade: 2,
    descricao: 'marca lg',
  },
  {
    nome: 'Computador',
    preco: 60000,
    quantidade: 2,
    descricao: 'Marca DELL',
  },
];

let total = produto.reduce((acumulador, item, index) => {
  return acumulador + item.preco;
}, 0);

let maiorPreco = produto.reduce(
  (ac, it) => (ac.preco > it.preco ? ac.preco : it.preco),
  0
);

let MarcaLg = produto.filter((item)=>{
  return item.descricao.includes('lg')
})

console.log(MarcaLg);

const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const numeros = [6, 43, 22, 88, 101, 29];

const numerosMairo45 = numeros.filter((item) => {
  return item > 45;
});


console.log(numerosMairo45)

// const cleanFrutas = frutas.filter((item) => {
//   console.log(item);

//   return item;
// });

// console.log(cleanFrutas);
