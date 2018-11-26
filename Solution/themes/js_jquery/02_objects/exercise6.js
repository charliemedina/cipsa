// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ
  
var precipitations = {Enero:0, Febrero:0, Marzo:0, Abril:0, Mayo:0, Junio:0,
                      Julio:0, Septiembre:0, Octubre:0, Noviembre:0, Diciembre:0 }

do {
    var month = prompt("Diga el mes a actualizar");
    if(month != null) {
        var ltrs = Number(prompt("Cantidad de litros de precipitaciones?"));
        precipitations[month] += ltrs;
    }

    var next = confirm("Desea introducir m\u00e1s valores?")
    if(!next) {
        printTable(precipitations);
        break;
    }

} while(true);

function printTable(precipitations) {
    document.write("<table class='table'><thead class='thead-dark'><tr><th> MESES </th>")
    for(var item in precipitations) {    
        document.write("<th>"+ item +"</th>");
    }
    document.write("</tr></thead>")
    document.write("<tbody><tr><td> LITROS </td>");
    for(var item in precipitations) {
        document.write("<td>" + precipitations[item] + " ltrs </td>");
    }
    document.write("</tr></tbody></table>");
}