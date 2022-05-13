// retorne uma lista com numeros maiores que 60

const numeros = [10, 25, 36, 95, 65, 60, 78, 65];

const maiores60 = numeros.filter((num) => num > 60);
console.log(maiores60);

// retorne  um objecto que tem como propriedade
// a quantidade de produtos, o preco total
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

const total = produto.reduce(
  (acumulador, item) => {
    return {
      quantidade: acumulador.quantidade + item.quantidade,
      preco: acumulador.preco + item.preco,
    };
  },
  {
    quantidade: 0,
    preco: 0,
  }
);

console.log(total);

const pessoas = [
  {
    nome: 'Luiz',
    idade: 62,
  },
  {
    nome: 'Maria',
    idade: 23,
  },
  {
    nome: 'Eduardo',
    idade: 55,
  },
  {
    nome: 'leticia',
    idade: 19,
  },
  {
    nome: 'walace',
    idade: 32,
  },
  {
    nome: 'rosana',
    idade: 47,
  },
];

// retorne uma array com o nome da pessoa

const nomes = pessoas.map((pessoa) => {
  return pessoa.nome;
});

console.log(nomes);

// remova apenas a chave nome do objecto

const idades = pessoas.map((pessoa) => ({ idade: pessoa.idade }));
console.log(idades);

// retorne as pessoas que tem nome com 5 letras ou mais

const maisDe5Letras = pessoas.filter((pessoa) => pessoa.nome.length > 5);
console.log(maisDe5Letras);

// retorne as pessoas com mais de 50 anos
const maisDe50anos = pessoas.filter((pessoa) => pessoa.idade > 50);
console.log(maisDe50anos);

// retornar a soma do dobro de todos os numeros pares da lista do array numeros
const n = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];

const numerosPares = n
  .filter((numero) => numero % 2 === 0)
  .map((num) => num * 2)
  .reduce((ac, it) => (ac += it), 0);

console.log(numerosPares);
