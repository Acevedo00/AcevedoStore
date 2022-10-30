let total = 0;
let totalMostrar;
let eleccion;


const producto1 = 150900;
const producto2 = 108299;
const producto3 = 232499;


alert("Bienvenido/a! a Acevedo Store!");



function comprar() {

  do {
    eleccion = parseInt(
      prompt(`Seleccioná el producto que vas a comprar:
    
    1- Samsung S22FE = $150.900.
    
    2- Xbox One S = $108.299.
    
    3- Sony PlayStation 5 = $232.499.

    `)
    );
  } while (eleccion !== 1 && eleccion !== 2 && eleccion !== 3);



  if (eleccion === 1) {
    total += producto1;
    totalString = String(total);
    totalMostrar = totalString.slice(0, 3) + "." + totalString.slice(3, 7);
    alert("Tenes que pagar: $" + totalMostrar);
  } else if (eleccion === 2) {
    total += producto2;
    totalString = String(total);
    totalMostrar = totalString.slice(0, 3) + "." + totalString.slice(3, 7);
    alert("Tenes que pagar: $" + totalMostrar);
  } else {
    total += producto3;
    totalString = String(total);
    totalMostrar = totalString.slice(0, 3) + "." + totalString.slice(3, 7);
    alert("Tenes que pagar: $" + totalMostrar);
  }



  do {
    eleccion = parseInt(
      prompt(`Selecciona una opcion:
    1- Quiero seguir comprando.
    2- No quiero seguir comprando`)
    );
  } while (eleccion !== 1 && eleccion !== 2);
  if (eleccion === 1) {
    comprar();
  } else {
    totalString = String(total);
    alert("Hasta luego, pase por caja y pague: $" + totalMostrar);
  }
}

comprar();

