// Variaveis sao responsaveis por guardar dados nammoria

// existem 3 formas - var, let, const

var nome = 'antonio';
var idade = 23;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

// variaveis servem para evitar repeticoes (DRY)

var preco = 20;
var total = 60;
var totalComprado = preco * total;

console.log(preco);

// sintaxe e : var depois seguida do valor.
var sobrenome = 'sitoe';
var cidade = 'maputo';

console.log(sobrenome, cidade);

// podemos declarar variaveis sem valor
var semValor; // undefined

// nomeclatura.
// comeca cm $, _, ou letras.
// nao comeca com numeros.
// Nao pode usar palavras reservadas.
// usamos camelCase - abrirModal.

var $nome;
// var function
// var 1possui
var _nome;
var possuiFaculdadeNoExterior;
// console.log(aindaNaodefine)

// Hosting - variaveis sempre que sao declaradas com var sofrem o hosting

console.log(comida);
var comida;

// Mudar o valor atribuido - com var e let mas com const nao.

var time = 'vasco';
time = 'maxaquene';

let equipa = 'real';
time = 'maxaquene';

// const e unico.
const senha = '123';
console.log(time, equipa, s enha);
