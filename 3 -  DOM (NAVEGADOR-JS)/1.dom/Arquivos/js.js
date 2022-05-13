// criar varivaies com os dados que precisas

const btnGerar = document.getElementById('btnGerar');
const senhaGerada = document.querySelector('.senha-gerada');
const inputs = document.querySelectorAll('form input');
const qtd = document.querySelector('.caracteres');

function gerarSenha(qtd, maiscula, minuscula, num, simbol) {
  console.log(qtd, maiscula, minuscula, num, simbol);
  const senhaArray = [];

  for (let i = 0; i < qtd; i++) {
    if (maiscula) senhaArray.push(geraMaiscula());
    if (minuscula) senhaArray.push(geraMinuscula());
    if (num) senhaArray.push(geraNumero());
    if (simbol) senhaArray.push(geraSimbol());
  }
  return senhaArray.join('').slice(0, qtd);
}

function formGeraSenha(e) {
  e.preventDefault();
  senhaGerada.innerHTML =
    gerarSenha(
      +qtd.value,
      inputs[0].checked,
      inputs[1].checked,
      inputs[2].checked,
      inputs[3].checked
    ) || 'Nada selecionado';
}
btnGerar.addEventListener('click', formGeraSenha);

function ramdomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function geraMaiscula() {
  return String.fromCharCode(ramdomNumber(65, 91));
}

function geraMinuscula() {
  return String.fromCharCode(ramdomNumber(97, 123));
}

function geraNumero() {
  return String.fromCharCode(ramdomNumber(48, 58));
}

function geraSimbol() {
  const simbolos = ',.-=+{}!@#$%^&*()_)()*&^+-*//*-}{>?>:":{}|}~`';
  return simbolos[ramdomNumber(0, simbolos.length)];
}
