function soma(a, b) {
  return a + b;
}

soma(2, 2); // 4
soma(2, 3); // 5

// peso e altura sao parametros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); // 80 e 1.8 sao argumentos

function corFavorita(cor) {
  if (cor === 'azul') return 'CEU';
  else if (cor === 'verder') return 'MATO';
  else return 'nao gosto de cores';
}

console.log(corFavorita('azul'));

window.addEventListener('click', function () {
  console.log('clicou');
});

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc(80, 1.8); // loga o imc
console.log(imc(80, 1.8)); //loga imc e undefined

function precisoVisitar(paisesVisitados) {
  const total = 193;
  return `Ainda falta visitar ${total - paisesVisitados} paises`;
}
