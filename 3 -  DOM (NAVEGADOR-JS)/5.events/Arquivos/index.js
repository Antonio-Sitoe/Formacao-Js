// const senhaGerada = document.querySelector('.senha-gerada');

// const container = document.querySelector('.container');

// // function handleClick(event) {
// //   console.log(event.currentTarget);
// //   console.log(event.target);
// //   console.log(event.type);
// // }

// // container.addEventListener('click', handleClick);

// const doc = document.querySelector('a.doc');

// function handlExternLink(e) {
//   e.preventDefault();

//   if (e.key === 'a') {
//     document.body.style.background = 'red';
//   }else {
//       document.body.style.background = 'blue';
//   }

//   console.log(e.key);
// }

// window.addEventListener('keydown', handlExternLink);

const inputs = document.querySelectorAll('.form-div');

function handleFocus(e) {
  console.log(e.target.innerText);
}
inputs.forEach((item) => {
  item.addEventListener('click', handleFocus);
});
