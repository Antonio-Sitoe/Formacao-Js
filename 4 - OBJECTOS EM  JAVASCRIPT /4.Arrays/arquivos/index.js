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

// retorne um objecto que tem como propriedade
// a quantidade de produtos, o preco total

const total = produto.reduce(
  (ac, item) => {
    return {
      quantidade: ac.quantidade + item.quantidade,
      preco: ac.preco + item.preco,
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

const names = pessoas.map((item) => {
  return item.nome;
});
console.log(names);

// remova apenas a chave nome do objecto

const idades = pessoas.map((item) => {
  return {
    idade: item.idade,
  };
});

console.log(idades);
// retorne as pessoas que tem nome com 5 letras ou mais
const mais5letras = pessoas.filter((item) => {
  return item.nome.length > 5;
});

console.log(mais5letras);
// retorne as pessoas com mais de 50 anos

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 27];
const numeropare = numeros
    .filter(item => item % 2 === 0)
    .map(item => item * 2)
    .reduce((acum, item) => acum += item);
