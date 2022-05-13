// //                    0        1        2
// var listaFRutas = ['banana', 'maca', 'laranja'];

// listaFRutas.forEach(function (item, index, array) {
//   console.log(item);
// });

//crie uma array com lista dos paises da cplp

//Angola, Brasil, Cabo Verde, Guiné-Bissau, Guiné Equatorial, Portugal, Moçambique, São Tomé e Príncipe e Timor-Leste

var paisesCplp = [
  'Angola',
  'Brasil',
  ' Cabo Verde',
  'Guiné-Bissau',
  'Guiné Equatorial',
  'Portugal',
  'Moçambique',
  'São Tomé Príncipe',
  'Timor-Leste',
];

// // faca um loop e mostre no console esses paises
// for (var i = 0; i < paisesCplp.length; i++) {
//   console.log(paisesCplp[i]);
// }

console.log('--------foreach');
var ul = document.querySelector('ul');

paisesCplp.forEach(function (item) {
  var li = document.createElement('li');
  li.innerText = item;
  ul.appendChild(li)
});
