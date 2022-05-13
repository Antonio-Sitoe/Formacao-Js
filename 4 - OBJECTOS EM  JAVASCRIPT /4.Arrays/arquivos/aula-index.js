// const nomes = ['sonia', 'manuel', 'edilson', 'victor'];
// const precos = [49, 58, 56, 56];

// // const data = [
// //   45,
// //   function (a, b) {
// //     return a + b;
// //   },
// //   [1, 2, 3, 5],
// //   {
// //     nome: 'antonio',
// //   },
// // ];

// const newProduts = new Array('telefone', 'maquina de calcular');

// const lis = Array.from(document.querySelectorAll('li'));

// const carros = {
//   0: 'ford',
//   1: 'mazda',
//   2: 'fiat',
//   3: 'nissan',
//   length: 4,
// };

// const carros1 = Array.from(carros);

// let first = carros1.unshift('Toyota'); // adiciona no inicio da array o argumento colocado.- retorna o length da array
// // console.log(carros1.push('skyline')); // adiciona ao final e retorna o length da array

// let second = carros1.shift(); // retira no inicio da array - retorna o elemento retirado;
// // console.log(carros1.pop()); // retira o ultmo item da array e retorna o mesmo

// // splice(indice, remove, adiciona)

// // console.log(carros1[2]);
// // console.log(carros1);
// // carros1.splice(3);
// // console.log(carros1);

const produto = [
  {
    nome: 'telefone',
    preco: 45,
    quantidade: 2,
    descricao: 'loremhbhcf',
  },
  {
    nome: 'telefone',
    preco: 45,
    quantidade: 2,
    descricao: 'loremhbhcf',
  },
  {
    nome: 'telefone',
    preco: 45,
    quantidade: 2,
    descricao: 'loremhbhcf',
  },
];

const numerosAbaixoDe10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numerosAcimaDe10 = [11, 12, 13, 14, 15, 26, 27];

// const conjunto = [].concat(numerosAbaixoDe10, numerosAcimaDe10);
// const conjunto = numerosAbaixoDe10.concat(numerosAcimaDe10);
const conjunto = [...numerosAbaixoDe10, ...numerosAcimaDe10];
console.log(conjunto);

const linguagens = ['html', 'css', 'js', 'php', 'python'];

const linguagem = linguagens.slice(2, linguagens.length);
console.log(linguagem);

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiroValor = comidas.shift();
console.log(primeiroValor);

// Remova o último valor de comidas e coloque em uma variável

const ultimoValor = comidas.pop();
console.log(ultimoValor);

// Adicione 'Arroz' ao final da array
comidas.push('Arroz');

comidas.unshift('Peixe', 'Batata');
console.log(comidas);
// Adicione 'Peixe' e 'Batata' ao início da array

const estudantes = ['Marcio', 'Julia', 'Brenda', 'Joana', 'Kleber'];
// Arrume os estudantes em ordem alfabética A-Z 0-...
console.log(estudantes.sort());
// Inverta a ordem dos estudantes
console.log(estudantes.reverse());

// Verifique se Joana faz parte dos estudantes

console.log(estudantes.includes('Joana'));
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`;

// Substitua section por ul e div com li,
// html = html.replaceAll('section', 'ul').replaceAll('div', 'li');

// utilizando split e join

let newhtml = html.split('section').join('ul').split('div').join('li');


// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const newArray = [...carros];

carros.pop();

console.log(carros)
console.log(newArray)

