// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

var string_value = prompt("Introduce un n\u00famero");
var value = Number(string_value);
alert("El n\u00famero es : " + isPar(value));

function isPar (number) {
    return (number%2 == 0) ? "par" : "impar";
}
