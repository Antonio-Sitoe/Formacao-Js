const pessoa = {
  nome: 'antonio',
  sobrenome: 'sitoe',
};

const pessoa2 = Object.freeze({
  nome: 'maria',
  sobrenome: 'de souza',
});

console.log(pessoa2.nome);

pessoa2.nome = function () {
  return 'andou ';
};

console.log(Object.isFrozen(pessoa));

console.log(Object.keys(pessoa2));
console.log(Object.values(pessoa2));

console.log(Object.entries(pessoa2));

const pessoa3 = {
  falar() {
    return 'falou ';
  },
};
const pessoa4 = {
  andar() {
    return 'sonia andou';
  },
};

const pessoa8 = Object.assign(pessoa2, pessoa3, pessoa4);
// com spread
const pessoa9 = { ...pessoa2, ...pessoa3, ...pessoa4 };

// object.create

const pessoa5 = Object.create({
  nome: 'manuel',
  sobrenome: 'junior',
});

