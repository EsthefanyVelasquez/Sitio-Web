// Función para subir a la parte superior de la página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Asignar la función "scrollToTop" al evento "click" del botón
document.getElementById("scroll-to-top").addEventListener("click", scrollToTop);

// Función para mostrar el rectángulo de la tienda
function mostrarRectanguloTienda() {
  const rectanguloTienda = document.querySelector(".store-cuadrado .rectangulo");
  rectanguloTienda.style.display = "block";

  // Agregar el botón circular de cierre al rectángulo de la tienda
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "&#x2715;"; // Contenido del botón (X)
  closeButton.classList.add("close-button");
  closeButton.style.backgroundColor = "#4b0082"; // Color de fondo
  closeButton.style.color = "white"; // Color del texto
  closeButton.style.border = "2px solid white"; // Borde blanco
  closeButton.style.borderRadius = "50%"; // Borde circular
  closeButton.style.width = "40px"; // Ancho del botón
  closeButton.style.height = "40px"; // Alto del botón
  closeButton.style.position = "absolute"; // Posición absoluta para ajustar la ubicación
  closeButton.style.bottom = "10px"; // Alinear en la parte inferior
  closeButton.style.left = "50%"; // Centrar horizontalmente
  closeButton.style.transform = "translateX(-50%)"; // Alinear al centro
  closeButton.addEventListener("click", function() {
    rectanguloTienda.style.display = "none"; // Ocultar el rectángulo de la tienda al hacer clic en el botón
  });

  // Agregar el botón de cierre al rectángulo de la tienda
  rectanguloTienda.appendChild(closeButton);
}

// Agregar evento de clic al icono de la tienda para mostrar el rectángulo de la tienda
const storeIcon = document.querySelector(".store-cuadrado label");
storeIcon.addEventListener("click", mostrarRectanguloTienda);

// Función para agregar juegos al carrito de compras
function agregarJuegoAlCarrito() {
  const rectanguloTienda = document.querySelector(".store-cuadrado .rectangulo");
  rectanguloTienda.style.display = "block";

  // Agregar el botón circular de cierre al rectángulo de la tienda
  if (!rectanguloTienda.querySelector(".close-button")) {
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&#x2715;"; // Contenido del botón (X)
    closeButton.classList.add("close-button");
    closeButton.style.backgroundColor = "#4b0082"; // Color de fondo
    closeButton.style.color = "white"; // Color del texto
    closeButton.style.border = "2px solid white"; // Borde blanco
    closeButton.style.borderRadius = "50%"; // Borde circular
    closeButton.style.width = "40px"; // Ancho del botón
    closeButton.style.height = "40px"; // Alto del botón
    closeButton.style.position = "absolute"; // Posición absoluta para ajustar la ubicación
    closeButton.style.bottom = "10px"; // Alinear en la parte inferior
    closeButton.style.left = "50%"; // Centrar horizontalmente
    closeButton.style.transform = "translateX(-50%)"; // Alinear al centro
    closeButton.addEventListener("click", function() {
      rectanguloTienda.style.display = "none"; // Ocultar el rectángulo de la tienda al hacer clic en el botón
    });

    // Agregar el botón de cierre al rectángulo de la tienda
    rectanguloTienda.appendChild(closeButton);
  }

  // Clonar la imagen del juego y agregarla al rectángulo de la tienda
  const imagenJuego = this.parentElement.parentElement.querySelector("img");
  const imagenClonada = imagenJuego.cloneNode(true);

  // Establecer el tamaño deseado para la imagen en el rectángulo de la tienda
  imagenClonada.style.width = "100px"; // Ajusta el ancho según sea necesario
  imagenClonada.style.height = "auto"; // Mantener la relación de aspecto

  // Crear un nuevo div para contener la imagen clonada y la barra de cantidad
  const juegoContainer = document.createElement("div");
  juegoContainer.classList.add("juego-container");
  juegoContainer.style.display = "flex";
  juegoContainer.style.alignItems = "center";
  juegoContainer.appendChild(imagenClonada);

  // Crear la barra de cantidad
  const cantidadInput = document.createElement("input");
  cantidadInput.setAttribute("type", "number");
  cantidadInput.setAttribute("min", "1");
  cantidadInput.setAttribute("value", "1");
  cantidadInput.classList.add("cantidad-input");
  cantidadInput.style.width = "50px"; // Ajusta el ancho según sea necesario
  cantidadInput.style.marginLeft = "10px"; // Ajusta el margen según sea necesario
  juegoContainer.appendChild(cantidadInput);

  // Crear el botón de eliminación
  const eliminarButton = document.createElement("button");
  eliminarButton.innerHTML = "x"; // Contenido del botón (X)
  eliminarButton.classList.add("eliminar-button");
  eliminarButton.addEventListener("click", function() {
    juegoContainer.remove(); // Eliminar el juego del carrito al hacer clic en el botón de eliminación
  });
  juegoContainer.appendChild(eliminarButton);

  // Agregar el juego al rectángulo de la tienda
  rectanguloTienda.appendChild(juegoContainer);

  // Actualizar el precio total después de agregar el juego
  actualizarPrecioTotal();
}

// Función para actualizar el precio total
function actualizarPrecioTotal() {
  let precioTotal = 0;
  const juegos = document.querySelectorAll(".juego-container");
  juegos.forEach(juego => {
    const precioJuego = parseFloat(juego.parentElement.querySelector(".precio").innerText.slice(1)); // Obtener el precio del juego
    const cantidad = parseInt(juego.querySelector(".cantidad-input").value); // Obtener la cantidad seleccionada
    precioTotal += precioJuego * cantidad; // Calcular el precio total
  });
  document.querySelector(".precio-total").innerText = "$" + precioTotal.toFixed(2); // Mostrar el precio total con formato
}

// Seleccionar todos los botones de "Comprar" y agregarles el evento de clic para agregar juegos al carrito
const comprarButtons = document.querySelectorAll(".comprar-button");
comprarButtons.forEach(button => {
  button.addEventListener("click", agregarJuegoAlCarrito);
})

document.addEventListener('DOMContentLoaded', function() {
  // Obtener el contenedor que contiene todos los botones "Ver más"
  const contenedorJuegos = document.querySelector('.contenedor-rectangulos');

  // Agregar un evento de clic al contenedor de juegos
  contenedorJuegos.addEventListener('click', function(event) {
    // Verificar si el elemento clicado es un botón "Ver más"
    if (event.target.classList.contains('ver-mas-button')) {
      // Obtener la URL de destino del atributo de datos
      const targetUrl = event.target.getAttribute('data-target');
      
      // Redirigir a la página deseada
      window.location.href = targetUrl;
    }
  });
});