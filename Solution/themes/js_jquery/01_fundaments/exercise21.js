// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

var string_begin = prompt("Introduce el inicio de la secuencia");
var string_end = prompt("Introduce el final de la secuencia");

var begin = Number(string_begin);
var end = Number(string_end); 

document.write("Los n\u00fameros de la secuencia entre [" + begin + " - " + end + "] son : " );
document.write("<br>");

enumerator(begin, end);
function enumerator (begin, end) {
    for(var item = begin; item<= end; item++) {
        document.write(item + " , ");
    }
}
