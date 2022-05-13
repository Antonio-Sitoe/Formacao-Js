import { CreatePerson } from './index.js';
// CreatePerson(nome - string,sobrenome - string, idade - number, falar - function) - function

const pessoa1 = CreatePerson('antonio', 'sitoe', 21, function () {
  console.log('eu falei');
});

// resolvida - fullfiled
// rejeitada
// pendente
const promesa = new Promise((resolve, reject) => {
  let verifica = false;
  if (verifica) resolve('promessa resolvida');
  else reject('promessa rejeitada');
});

promesa
  .then((response) => {
    console.log('buscar dados no servidor');
    return response;
  })
  .then((response) => {
    console.log('montar o html');
    return response;
  })
  .then((response) => {
    console.log('apresenta ao cliente');
    console.log(response);
  })
  .catch((e) => {
    console.log(e);
  });
const lista = ['banana', 'laranja'];

export function CreatePerson(nome, sobrenome, idade, falar) {
  return {
    nome,
    sobrenome,
    idade,
    falar,
  };
}
