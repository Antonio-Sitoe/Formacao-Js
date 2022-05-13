// const options = {
//   method: 'POST',

// };

// fetch('./pessoas.json', options)
//   .then(function (response) {
//     console.log(response);

//     return response.json();
//   })
//   .then((json) => {
//     console.log(json);

//     document.body.innerHTML = document.createElement('h1').innerHTML = json;
//   })
//   .catch((e) => {
//     console.log(e, 'ERRO 404');
//   });

// axios
//   .get('pessoas.json')
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

async function buscarDados() {
  const response = await fetch('./pessoas.json');
  const json = await response.json();
  console.log(json);
}
buscarDados();

async function axiosGet() {
  try {
    const { data } = await axios.get('pessoas.json');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
axiosGet();
