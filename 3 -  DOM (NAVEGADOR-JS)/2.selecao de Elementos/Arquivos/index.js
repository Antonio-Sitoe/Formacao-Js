const paises = document.querySelectorAll('li');
const conteudo = document.querySelectorAll('section p');
conteudo[0].classList.add('ativo');

function showContent(index) {
  conteudo.forEach(function (item) {
    item.classList.remove('ativo');
  });
  conteudo[index].classList.add('ativo');
}

paises.forEach(function (item, index) {
  item.addEventListener('click', function () {
    showContent(index);
  });
});
