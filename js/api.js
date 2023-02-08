const url = "https://jsonplaceholder.typicode.com/users/1";
const userName = document.getElementById("bienvenidoUsuario");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(data.username);
    const parrafoUsuario = document.createElement("p");
    userName.innerHTML = `Bienvenido ${data.username}`;
  });
