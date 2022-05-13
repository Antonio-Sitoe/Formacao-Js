// const ano = 2022;

// const num1 = 123;
// const num2 = 'dsds';

// const isInteger = 8952.2;

// console.log(Number.isInteger(isInteger));

// if (Number.isNaN(num1 * num2)) {
//   console.log('Digite um numero valido');
// } else {
//   console.log('esta certo');
// }

// const precoCarro = 520.5;
// // console.log(precoCarro.toFixed(1))

// const num3 = -5
// const num8 = -8

// const soma = num3+num8;
// console.log(Math.round(precoCarro))

// const arr = [5, 3, 10, 42, 2];
// // console.log(Math.min(...arr));

// const randomNumber = Math.random() * 10;

// // Número random entre 72 e 32

// function random(max, min) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(random(72, 32));

// Retorne um número aleatório entre 1050 e 2000

const randomNumer = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(randomNumer(2000, 1050));

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrNumeros = numeros.split(',');
let arr = [];
arrNumeros.forEach((num) => {
  arr.push(+num.trim());
});
console.log(Math.max(...arr));

// Crie uma função para limpar os preços
// depois retorne a soma total
const listaPrecos = ['999,00 MT', '100,222,00 MT', '230,00 MT', '200,00 MT'];

const cleanPrices = (price) => {
  let prices = +price.replace(',00 MT', '').replace(',', '.');
  return prices;
};

let som = 0;

listaPrecos.forEach((item) => {
  let it = cleanPrices(item);
  som += it;
});

console.log(+som.toFixed(2))
