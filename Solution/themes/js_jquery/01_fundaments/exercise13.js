var precio_manzana = 2;
var kilos_manzanas = prompt("Introduce la cantidad de kg");

var precio_naranja = 2.5;
var kilos_naranjas = prompt("Introduce la naranjas de kg");

var precio_platano = 1.75;
var kilos_platanos = prompt("Introduce la platanos de kg");

var compra = 0;
compra += precio_manzana * Number(kilos_manzanas);
compra += precio_naranja * Number(kilos_manzanas);
compra += precio_platano * Number(kilos_platanos);

var oferta = 0.08;
var descuento = compra * oferta;

compra -= descuento;
alert("El precio de su cuenta es: " + compra + " Euros"); 




