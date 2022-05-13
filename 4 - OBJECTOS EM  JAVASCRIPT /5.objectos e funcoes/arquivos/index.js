// exemplo de funcao construtora.
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
Pessoa.prototype.andar = function () {
  return this.nome + ' andou';
};
const pessoa7 = new Pessoa('antonio', 'sitoe');

class Pessoa1 {
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  andar() {
    return this.nome + ' andou';
  }
  falar() {
    return this.nome + ' falou';
  }
}

const pessoa2 = new Pessoa1('antonio', 'sitoe', 21);
console.log(pessoa2);

function criaPessoa(nome, sobrenome, idade) {
  function nomeCompleto() {
    return `${nome} ${sobrenome}`;
  }
  return {
    nome,
    sobrenome,
    idade,
    nomeCompleto,
  };
}

const p1 = criaPessoa('antonio', 'sitoe', 21);
const p4 = criaPessoa('maria', 'sitoe', 21);
const p3 = criaPessoa('pedro', 'sitoe', 21);
const p2 = criaPessoa('joao', 'sitoe', 21);
console.log(p2);

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }

  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  const _proto_ = Object.create({
    andar,
    nadar,
  });

  return Object.freeze({
    nome,
    sobrenome,
    _proto_,
  });
}

const p8 = criarPessoa('antonio', 'sitoe');

console.log(p8);
