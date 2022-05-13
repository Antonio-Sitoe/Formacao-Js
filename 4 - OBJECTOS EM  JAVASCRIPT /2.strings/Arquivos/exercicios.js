// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: '39 mt',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: '900 mt',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: '99 mt',
  },
  {
    descricao: 'Taxa do Banco',
    valor: '300 mt',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: '400 mt',
  },
];

let taxa = 0;
let recebimentos = 0;

transacoes.forEach(({ descricao, valor }) => {
  const valorAtual = +valor.replace(' mt', '').trim();
  if (descricao.includes('Taxa')) taxa += valorAtual;
  else recebimentos += valorAtual;
});

console.log(taxa)
console.log(recebimentos)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(';'))


// Substitua todos os span's por a's
const html = `<ul>
<li><span>Sobre</span></li>
<li><span>Produtos</span></li>
<li><span>Contato</span></li>
</ul>`;

let newHtml = html.split('span').join('a')
console.log(newHtml)

console.log(html.replaceAll('span', 'a'))
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase[frase.length-1])
