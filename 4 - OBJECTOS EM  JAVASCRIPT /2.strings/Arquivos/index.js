// const frase = 'A melhor linguagem é ';
// const linguagem = 'JavaScript';
// const fraseCompleta = frase.concat(linguagem, 'antonio sitoe');

// console.log(fraseCompleta);

// const frase2 = 'o antonio vai a praia';

// const nome = 'antonio';

// const fruta ='banana'
// const frutas = 'melancia, banana, laranja'

// console.log(frase2.includes(nome));
// console.log(fruta.includes(frutas))

const concurso1 = 'concurso de medicina';
const concurso2 = 'concurso de economia';
const exame = 'exame de contabilidade';

const slices = concurso1.slice(0, 6);

const instrumento = 'guitarra';

const listaPrecos = ['15000', '800', '500'];

listaPrecos.forEach((preco) => {
  // console.log(preco.padEnd(10, 'MT'));
});
listaPrecos[0].padStart(10, '.');
listaPrecos[0].padEnd(10, '.');

// console.log(instrumento.padStart(10))

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias       ';
const listaItens2 = listaItens.replaceAll(' ', ',');

console.log(listaItens.charCodeAt());
