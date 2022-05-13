const img = document.querySelector('#logo');

// pega o atributo src
const imgSrc = img.getAttribute('src');

// pega o valor, e muda
img.setAttribute(imgSrc, 'logo-footer.png');

// remove o atributo class
// img.removeAttribute('class');

console.log(img)
