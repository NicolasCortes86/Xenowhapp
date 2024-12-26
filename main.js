let total = 0;
let productos = [];

function agregarProducto(producto, precio) {
    var carrito = document.getElementById('carrito');
    var producItem = document.createElement('p');
    producItem.textContent = producto;
    carrito.appendChild(producItem);

    total += precio;
    document.getElementById('pago').innerText = `Total a pagar ${total}`;

    producto.push({nombre: producto, valor: precio});
    producto.length;
}