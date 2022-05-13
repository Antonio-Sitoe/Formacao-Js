// const numeros = [
//   [1, 2, 3, 5],
//   [5, 6, 9],
//   [9, 98, 96],
//   'antonio',
//   {
//     nome: 'antonio',
//     idade: 21,
//   },
// ];

// const [primeiro, segundo, terceiro, quarto, quinto] = numeros;

const pessoa = {
  nome: 'antonio',
  sobrenome: 'sitoe',
  idade: 21,
  endereco: {
    rua: 'av 3 de fevereiro',
    numero: 104,
  },
};

const {
  endereco: { numero, rua },
  idade,
  nome,
  sobrenome,
} = pessoa;

function showPerson({ nome, sobrenome, endereco: { numero, rua } }) {
  return `o ${nome} ${sobrenome} do bairo da ${rua} numero ${numero}`;
}

const Pessoas = [
  {
    nome: 'Miguel',
    email: 'miguel@email.com.br',
    salario: 27211,
    estado: 'MG',
    empresa: 'Facebook',
    idade: 34,
    sexo: '',
  },
  {
    nome: 'Sophia',
    email: 'sophia@empresa.com.br',
    salario: 6971,
    estado: 'DF',
    empresa: 'Plastic Co.',
    idade: 25,
    sexo: 'F',
  },
  {
    nome: 'Davi',
    email: 'davi@hotmail.com',
    salario: 10465,
    estado: 'SC',
    empresa: 'Facebook',
    idade: 51,
    sexo: '',
  },
];

const novasPessoas = [
  ...Pessoas,
  {
    nome: 'antonio',
    email: 'antonio@email.com.br',
    salario: 123,
    empresa: 'Facebook',
    idade: 21,
    sexo: 'M',
  },
];
console.log(novasPessoas);

const max = [1, 2, 3, 4, 5, 6, 5, 559, 5, 5, 9, 23];

// const div = document.querySelector('.container');

// Pessoas.forEach(({ nome, email, empresa }) => {
//   const nomeElement = document.createElement('h1');
//   nomeElement.innerText = nome;
//   const emailElement = document.createElement('h1');
//   emailElement.innerText = email;

//   const empresaElement = document.createElement('h1');
//   empresaElement.innerText = empresa;

//   div.appendChild(nomeElement);
//   div.appendChild(emailElement);
//   div.appendChild(empresaElement);
// });

// function listaDenomes(...rest) {
//   rest.forEach((item) => {
//     console.log(item);
//   });
//   return;
// }

// listaDenomes('antonio', 'maria', 'joana', 'marcos', 'carlos', 'calsao');

const btns = document.querySelectorAll('button');
const btnsArray = [...btns];

console.log(btnsArray);
