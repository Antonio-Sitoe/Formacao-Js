const eMasculino = false;
const eMaiorDeIdade = false;

if (eMasculino) {
  console.log('e masculino');
} else if (eMaiorDeIdade && eMasculino) {
  console.log('e maior de idade');
} else {
  console.log('nenhum dos dois');
}

const horas = 6;

if (horas < 12) {
  console.log('Manha: Bom dia');
} else if (horas >= 12 && horas <= 18) {
  console.log('Boa tarde');
} else {
  console.log('boa noite');
}

switch (horas) {
  case horas < 12:
    console.log('Manha: Bom dia');
    break;
  case horas >= 12:
    console.log('Boa tarde');
    break;

  default:
    console.log('boa noite');
    break;
}

const fruta = 'banana';

switch (fruta) {
  case 'uva':
    console.log('uva');
    break;
  case 'banna':
    console.log('banana');
    break;

  default:
    console.log('nao e uma fruta');
    break;
}
// false
// 0
// NaN
// undefined
// null

var comida = ' '; //falso

if (comida) {
  console.log('e verdade');
} else {
  console.log('e falso');
}

console.log(false || 'gato');
