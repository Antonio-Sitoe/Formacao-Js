// CRIAR VARIAVEIS

const buttonGerar = document.getElementById('btnGerar');
const qtd = document.querySelector('.caracteres');
const senhaGerada = document.querySelector('.senha-gerada');

const formsInput = document.querySelectorAll('form input');

// for (let i = 0; i < 125; i++) {
//   console.log(`${i+1}  `, String.fromCharCode(i));
// }
function ramdomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// funcoes de geracao de caracteres
function geraMaiscula() {
  return String.fromCharCode(ramdomNumber(65, 91));
}
function geraMinuscula() {
  return String.fromCharCode(ramdomNumber(97, 123));
}
function geraNumeros() {
  return String.fromCharCode(ramdomNumber(49, 58));
}
function geraSimbolos() {
  const simbolos = ',.-=+{}!@#$%^&*()_)()*&^+-*//*-}{>?>:":{}|}~`';
  return simbolos[ramdomNumber(0, simbolos.length)];
}

// adiciona os elementos em uma array
function geraSenha(qtd, maiuscula, minuscula, numero, simbolo) {
  const ListaSenha = [];

  for (let i = 0; i < qtd; i++) {
    if (maiuscula) ListaSenha.push(geraMaiscula());
    if (minuscula) ListaSenha.push(geraMinuscula());
    if (numero) ListaSenha.push(geraNumeros());
    if (simbolo) ListaSenha.push(geraSimbolos());
  }
  return ListaSenha.join('').slice(0, qtd);
}

// gera o resultado
function formGerarSenha(e) {
  e.preventDefault();
  const resultado = geraSenha(
    +qtd.value,
    formsInput[0].checked,
    formsInput[1].checked,
    formsInput[2].checked,
    formsInput[3].checked
  );
  senhaGerada.innerHTML = resultado || 'Nada selecionado';
}

// adiciona eventos no butao
buttonGerar.addEventListener('click', formGerarSenha);
