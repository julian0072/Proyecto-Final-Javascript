const pintarCarrito = () => {
  let total = 0;
  modalContainer.innerHTML = "";

  carrito.forEach((stock) => {
    const { id, nombre, cantidad, precio, img } = stock;
    modalContainer.innerHTML += `
         <div class="container-fluid text-center">
          <p class="py-2 fw-bold">${nombre}</p>

          <img
            src="${img}"
            class="w-25 h-35"
          />
          <div class="container-fluid d-flex justify-content-center pt-5">
          <button class="px-3 operador-restar " id="btnDecrease-${nombre}"  >➖</button>
          <span class="fw-bold numero-carrito px-3 " id="span-${nombre}"  >${cantidad}</span>
          <button class="px-3 operador-sumar" id="btnIncrease-${nombre}"  >➕</button>
          </div>
          <div class="container-fluid d-flex justify-content-center pt-3">
          <button onclick="eliminarProducto(${id})" class="mx-5 px-3 eliminar-producto btn-eliminar" id="btnEliminar-${id}"  >X</button>

          </div>
          </div>
          <div class="container-fluid d-flex justify-content-center pt-5">

           <p class=" fw-bold precio-carrito">${precio}$</p>
           </div>
           <hr/>

            `;

    total += precio * cantidad;
    modalTotal.innerHTML = `<p class="py-4 fw-bold total-carrito ">Total: ${total}$</p>`;
    modalTotal.append();
    modalContainer.append();
  });

  //Si no hay nada:
  if (carrito.length === 0) {
    modalContainer.innerHTML = `<p class="text-center display-5">¡No hay nada!<p> `;
    modalTotal.innerHTML = `<p class="py-4 fw-bold total-carrito ">Total: 0</p>`;
  }

  almacenarLocalStorage();
};
verCarrito.addEventListener("click", pintarCarrito);

//Submite carrito
btnSubmite.addEventListener("click", () => {
  if (carrito.length != []) {
    Swal.fire("¡Finalizaste la compra!");
    carrito = [];
    pintarCarrito();
  } else {
    Swal.fire("¡No tenés items!");
  }
});

//Vaciar carrito
eliminarCarrito.addEventListener("click", () => {
  if (carrito.length != []) {
    Swal.fire("¡Borraste los items!");
    carrito = [];
    pintarCarrito();
  } else {
    Swal.fire("¡No tenés items!");
  }
});

//Eliminar por ID
function eliminarProducto(id) {
  const productoId = id;
  carrito = carrito.filter((producto) => producto.id !== productoId);
  pintarCarrito();
}

//LOCAL STORAGE

function almacenarLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Mensaje asincrónico
setTimeout(() => {
  Swal.fire("¡No pierdas nuestras ofertas de fin de año!");
}, 1000);
