/* let precio = 400000;
let cantidad = 3;

precioSpan = document.querySelector(".precio");
precioSpan.innerHTML = precio;
cantidadspan = document.querySelector(".cantidad");
cantidadspan.innerHTML = cantidad;
totalspan = document.querySelector(".valor-total");
totalspan.innerHTML = cantidad * precio;
*/

document.querySelector("#btnsumar").addEventListener("click", sumaruno);
document.querySelector("#btnrestar").addEventListener("click", restaruno);
var cantidad1 = 0;
let cantidad = 0;
let precio = 40000;
preciospan = document.querySelector(".precio");
preciospan.innerHTML = precio;
total1 = document.querySelector(".valor-total");

function sumaruno() {
  cantidad1 = cantidad1 + 1;
  document.querySelector("#msgcantidad").innerHTML = cantidad1;
  total1.innerHTML = cantidad1 * precio;
}

function restaruno() {
  cantidad1 = cantidad1 - 1;
  document.querySelector("#msgcantidad").innerHTML = cantidad1;
  total1.innerHTML = cantidad1 * precio;
}
