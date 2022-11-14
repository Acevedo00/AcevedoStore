
alert("Bienvenido/a! a Acevedo Store!");



class Celular {
  constructor(nombre, precio, stock, disponibilidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.disponibilidad = disponibilidad;
  }
  cambiarStock() {
    this.stock = --this.stock;
  }
  configurarStock(stock) {
    this.stock = stock;
  }
}

const celular1 = new Celular("Iphone 14", 1000, 200, true);
const celular2 = new Celular("Xiaomi Redmi8", 200, 200, true);
const celular3 = new Celular("Samsung S22", 900, 200, true);

let total = 0;
const carrito = [];
let barrera = true;
let seguirComprando = true;

function keepShopping() {
  if (seguirComprando === false) {
    alert(`El total de tu compra es de $${total}.`);
    alert(`Gracias por tu compra.`);

    barrera = false;
  }
}

function alerta(celular, total, carrito) {
  alert(`
    Compraste: ${celular.nombre} x $${celular.precio}. El total de tu compra es de: $${total}. 
        
        
  Lista de productos comprados: ${carrito}
  `);
}

while (barrera === true) {
  let producto = parseInt(
    prompt(`Ingresa el producto que vas a comprar:
    1. Iphone
    2. Xiaomi
    3. Samgung`)
  );
  if (producto === 1) {
    carrito.push(celular1.nombre);
    total = total + celular1.precio;

    alerta(celular1, total, carrito);

    seguirComprando = confirm("Queres seguir comprando?");
    keepShopping();
  } else if (producto === 2) {
    carrito.push(celular2.nombre);
    total = total + celular2.precio;

    alerta(celular2, total, carrito);

    seguirComprando = confirm("Queres seguir comprando?");
    keepShopping();
  } else if (producto === 3) {
    carrito.push(celular3.nombre);
    total = total + celular3.precio;

    alerta(celular3, total, carrito);

    seguirComprando = confirm("Queres seguir comprando?");
    keepShopping();
  }
}
