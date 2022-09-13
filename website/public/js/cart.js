if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let removeCartItemBtn = document.getElementsByClassName("quitar-btn");

    for (let i = 0; i < removeCartItemBtn.length; i++) {
      let boton = removeCartItemBtn[i];
      boton.addEventListener("click", removeCartItem);
    }

    let qtyInputs = document.getElementsByClassName('cant-carrito')
    for (let i=0; i < qtyInputs.length; i++){
        let input = qtyInputs[i]
        input.addEventListener('change',qtyChanged)
    }
}

function removeCartItem(event) {
    let botonApretado = event.target;
    botonApretado.parentElement.parentElement.remove();
    actualizarTotal();
}

function qtyChanged(event){
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    actualizarTotal();
}

function actualizarTotal() {
    let contenedorItemCarrito = document.getElementsByClassName('carrito-table')[0]
    let carritoFilas = contenedorItemCarrito.getElementsByClassName('carrito-item')
    let total = 0
    for ( let i = 0 ; i < carritoFilas.length; i++){
        let carritoFila = carritoFilas[i]
        let elementoPrecio = carritoFila.getElementsByClassName('carrito-precio')[0]
        let elementoQty = carritoFila.getElementsByClassName("cant-carrito")[0];
        let precio = parseFloat(elementoPrecio.innerText.replace('$',''))
        let cantidad = elementoQty.value
        total = total + (precio * cantidad)

    }
    total = (Math.round(total * 100) / 100)
    document.getElementsByClassName('carrito-total-precio')[0].innerText = '$' + total;
}