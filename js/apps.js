// /*Iniciamos Carrito*/

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// let carrito = [];

// //Elementos del DOM

const shopContent = document.getElementById("shopContent");
const comprarBotones = document.getElementById("acaBotones");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalBody");
const modalTotal = document.getElementById("modalTotal");
const numeroItemCarrito = document.querySelectorAll(".numero-carrito");
const eliminarCarrito = document.getElementById("eliminarCarrito");
const btnSubmite = document.getElementById("btnSubmite");

// /*MOSTRAR ITEMS EN DOM*/

stockItems.forEach((stock) => {
  const { id, nombre, cantidad, precio, img } = stock;
  let contenido = document.createElement("div");
  contenido.className = "col-sm-12 col-md-6 col-lg-4 g-5 p-5 columnas";
  contenido.innerHTML += `
  <div class="card">
            <img
              src="${img}"
              class="card-img-top cardImg"
              alt=${nombre}
            />
            <div class="card-body">
              <h5 class="card-title py-4">${nombre}</h5>
              <p class="card-text py-2">${precio}$</p>
              <p class="card-text py-2">Cantidad: ${cantidad}</p>
              <button type="button" class="btn btn-primary p-2 mb-5 btn-comprar">Comprar</button>
            </div>
          </div>
  `;
  shopContent.append(contenido);

  contenido.querySelector(".btn-comprar").addEventListener("click", () => {
    // Buscar en el carrito si ya existe un elemento con el mismo nombre
    let itemExistente = carrito.find((item) => item.nombre === nombre);

    if (itemExistente) {
      // Si existe, aumentar la cantidad de ese elemento en 1
      itemExistente.cantidad++;
    } else {
      // Si no existe, agregar un nuevo elemento al carrito con la cantidad inicial de 1
      carrito.push({
        nombre: nombre,
        id: id,
        precio: precio,
        img: img,
        cantidad: 1,
      });
    }

    Swal.fire("¡Agregado al carrito!");
  });
});
