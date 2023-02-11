//Consumimos una APPI para generar nombres al azar de la misma y mostrarlos como si fueran "usuarios" visitando el carrito

const url = "https://jsonplaceholder.typicode.com/users";
const userName = document.getElementById("bienvenidoUsuario");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomUser = data[randomIndex];
    const parrafoUsuario = document.createElement("p");
    parrafoUsuario.innerHTML = `Bienvenido a mi carrito: ${randomUser.name}`;
    userName.appendChild(parrafoUsuario);
  });
