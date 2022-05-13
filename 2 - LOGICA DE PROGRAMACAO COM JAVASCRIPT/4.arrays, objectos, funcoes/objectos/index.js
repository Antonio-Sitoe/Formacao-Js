// var pessoa = {
//   nome: 'agostinho',
//   sobrenome: 'neto',
//   idade: 30,
//   andar: function () {
//     console.log(pessoa.nome, ' andou');
//   },
// };

// var p = window.document.querySelector('p');
// p.innerText = pessoa.nome;
// pessoa.andar();

// var quadrado = {
//   lados: 4,
//   perimetro(lado) {
//     let calc = this.lados * lado;
//     console.log(calc);
//     return calc;
//   },
//   area(lado) {
//     return lado * lado;
//   },
// };
// console.log(quadrado.area(5));

// var carro = {
//   marca: 'ford',
//   ano: 2021,
//   tipo: 'raptor',
//   modelo: 'dackar',
//   andar() {
//     console.log(this.marca, ' andou');
//   },
//   motor: {
//     nome: 'ford vb4',
//     ano: 2019,
//     tipo: '4x4',
//   },
//   portas: {
//     vidro: {
//       nome: 'mozal',
//       largura: 200,
//       altura: 400,
//     },
//     abre: true,
//     abrir() {
//       console.log(`'vidro do ${this.marca} abriu`);
//     },
//   },
// };
// var fordAbriuPortas = carro.portas.abrir.bind(carro);
// fordAbriuPortas();

// var retangulo = {
//   lados: 4,
// };

// retangulo.cantos = 8;
// retangulo.lados = console.log(retangulo);

// var num1 = 5.5;
// var nome = 'antonio';

// console.log(nome.toUpperCase());
// console.log(num1.toString());

// Crie um objecto usando a imagem ai em cima, deve conter
// propriedades:  (raca, nome, idade)

var animal = {
  nome: 'toninho',
  raca: 'maltes',
  idade: 2,
};

animal.latir = function () {
  console.log(`o ${this.nome} latiu`);
};
animal.correr = function () {
  console.log(`o ${this.nome} correu`);
};

console.log(animal.latir());
// crie metodos para o objecto acima metodos (latir e correr)
