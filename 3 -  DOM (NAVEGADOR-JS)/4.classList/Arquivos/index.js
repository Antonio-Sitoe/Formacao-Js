// const ul = document.querySelector('ul');
// const li = document.querySelector('li');
// const buttonToggle = document.querySelector('button.toggle');
// // const buttonRemove = document.querySelector('button.remove');
// const modal = document.querySelector('.modal');

// buttonToggle.addEventListener('click', function () {
//   modal.classList.replace('modal', 'sdsdssd');

//   console.log(modal)

//   if (modal.classList.contains('ative')) {
//     ul.classList.add("hidden")
//   }else {
// ul.classList.remove("hidden")
//   }
//   console.log(modal.classList.contains('ative'));
// });

// const liCreated = document.createElement('li');
// liCreated.innerText = 'item 2';

// ul.appendChild(liCreated);

const img = document.querySelector('img');
// const imgSrc = img.getAttribute("src");
// img.setAttribute("src","./img/dog1.jpg")

// console.log(imgSrc)

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  item.addEventListener('click', function () {
    const confirm = window.confirm("tem certeza que quer apagar");
    if (confirm) item.remove();
  });
});
