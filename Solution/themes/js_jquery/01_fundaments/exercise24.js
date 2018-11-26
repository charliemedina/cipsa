// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

var string_begin = prompt("Introduce el inicio de la secuencia");
var string_end = prompt("Introduce el final de la secuencia");

var begin = Number(string_begin);
var end = Number(string_end);

showTable(begin, end);


function showTable(value) {
    do { 
        var string_ramdon = prompt("Introduce un n\u00famero comprendido en el rango de [" + string_begin + " - " + string_end + "]");
        var random = Number(string_ramdon);
    }
    while(begin >= random  || end <= random);
}
