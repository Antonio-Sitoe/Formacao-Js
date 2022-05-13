// // Crie uma função matemática que retorne o perímetro de um quadrado
// // lembrando: perímetro é a soma dos quatro lados do quadrado

// function perimetro(lado) {
//   return lado * 4;
// }
// console.log(perimetro(3));

// // Crie uma função que retorne o seu nome completo
// // ela deve possuir os parâmetros: nome e sobrenome;

// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`;
// }
// console.log(nomeCompleto('antonio', 'sitoe'));

// // Crie uma função que verifica se um número é par

// // % e o resto da divisao

// function numeroPar(num) {
//   return num % 2 === 0 ? 'Numero par' : 'Numero impar';
// }
// console.log(numeroPar(8));

// // Crie uma função que retorne o tipo de
// // dado do argumento passado nela (typeof)

// function TypeOf(dado) {
//   return typeof dado;
// }
// console.log(TypeOf(5));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' o

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
window.addEventListener('scroll', function () {
  var nome = nomeCompleto('antonio', 'sitoe');
  console.log(nome);
});
