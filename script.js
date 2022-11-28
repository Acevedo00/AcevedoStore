class Producto {
  constructor(id, nombre, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

const producto1 = new Producto(
  1,
  "MSI GF63035",
  690,
  "https://buytek.net/wp-content/uploads/2021/08/MSI-GF63035.8.jpg"
);
const producto2 = new Producto(
  2,
  "Apple Airpods Max",
  680,
  "https://buytek.net/wp-content/uploads/2021/12/AirPods-Max.10.jpg"
);
const producto3 = new Producto(
  3,
  "Redmi Watch 2 Lite",
  210,
  "https://buytek.net/wp-content/uploads/2022/09/redmi-watch-2-lite.2.webp"
);
const producto4 = new Producto(
  4,
  "Amazon FireTab HD 8",
  130,
  "https://buytek.net/wp-content/uploads/2021/08/Amazon-hd-8.5.jpg"
);
const producto5 = new Producto(
  5,
  "Xiaomi Mi Pad 5",
  320,
  "https://buytek.net/wp-content/uploads/2022/03/Mi-Pad-5.1.jpg"
);
const producto6 = new Producto(
  6,
  "Iphone 12 Mini",
  600,
  "https://buytek.net/wp-content/uploads/2021/05/Mesa-de-trabajo-2.jpg"
);
const producto7 = new Producto(
  7,
  "Realme GT Master 5",
  350,
  "https://buytek.net/wp-content/uploads/2021/10/Realme-GT-Master.5.jpg"
);
const producto8 = new Producto(
  18,
  "Xiaomi 12",
  550,
  "https://buytek.net/wp-content/uploads/2022/07/XIAOMI-12.1.jpg"
);
const producto9 = new Producto(
  9,
  "Xiaomi Poco M5",
  250,
  "https://buytek.net/wp-content/uploads/2022/09/Poco-m5s.1.webp"
);
const producto10 = new Producto(
  10,
  "Oneplus 10T",
  500,
  "https://buytek.net/wp-content/uploads/2022/08/OnePlus-10T.1.jpg"
);

const productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
  producto10,
];

// Imprimir elementos en el DOM

const divProductos = document.getElementById("divProductos");

productos.forEach(producto => {
  divProductos.innerHTML += `
  <div id="${producto.id}" class="card">
      <div class="card-body">
        <h4 class="card-title">${producto.nombre}</h4>
        <img src="${producto.imagen}" alt="">
        <p class="card-text">$${producto.precio}</p>
        <button id="${producto.id}" class="btn btn-primary">Añadir al carrito</button>
      </div>
    </div>
    `;
});


// Creamos la constante carrito y guardamos en ella el contenido alojado en el storage. Para eso primero necesitamos parsear le JSON. Ademas le decimos que si 'no existe' que sea igual a un array vacio para q no imprima undefined.
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Creamos una constante en la que guardamos los botones de cada card, esto crea un lista de nodos que contiene cada uno de los botones.
const btnAgregar = document.querySelectorAll(".btn-primary");

// Recorremos la lista nodos creada y a cada uno de los botones encontrados le insertamos una funcion que va a buscar el id del producto seleccionado en nuestro array de productos. Si encuentra el producto lo va a sumar al carrito y si el producto ya esta, le va a sumar 1 a la propiedad cantidad creada en el objeto del producto.

btnAgregar.forEach((btn) => {
  btn.onclick = () => {
    const productoSeleccionado = productos.find(
      (prod) => prod.id === parseInt(btn.id)
    );
    const productoCarrito = { ...productoSeleccionado, cantidad: 1 };
    console.log (productoSeleccionado, productoCarrito);

    const indexCarrito = carrito.findIndex(
      (prod) => prod.id === productoCarrito.id
    );

    if (indexCarrito === -1) {
      carrito.push(productoCarrito);
    } else {
      carrito[indexCarrito].cantidad++;
    }
    // guardamos el carrito en el localstorage. Lo que hacemos es darle el nombre de carrito al espacio de memoria y le asignamos el valor de nuestro json / array
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };
});

// Creamos una constante que guarde al boton finalizar compra
const botonFinalizar = document.querySelector("#finalizar");

// Creamos una funcion que va a activarse en cada click. Lo que hace la funcion es crear una constante que va a guardar el resultado de la suma de cantidad x el precio de cada item
botonFinalizar.onclick = () => {
  const totalCompra = carrito
    .map((prod) => prod.precio * prod.cantidad)
    .reduce((elem1, elem2) => elem1 + elem2);
  console.log(totalCompra);
};
