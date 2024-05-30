// Función para seleccionar el método de pago
function seleccionarMetodo(metodo) {
    document.getElementById('metodo_pago').value = metodo;
}

// Redirigir a formulario.html al hacer clic en "Comprar Todos" en la tienda
document.getElementById('comprar-todos').addEventListener('click', function() {
    window.location.href = 'formulario.html';
});

// Redirigir a formulario.html al hacer clic en "Comprar Todos" dentro del formulario
document.getElementById('comprar-todos-formulario').addEventListener('click', function() {
    window.location.href = 'formulario.html';
});
