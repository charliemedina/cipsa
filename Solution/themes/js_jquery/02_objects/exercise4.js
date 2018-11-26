// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

var parthers = [];
do {
    var name = prompt("Escriba el nombre del socio y acontinuaci\u00f3n presione Enter");
    if(name != null) {
        parthers.push(name);
    }
    var request = confirm("Desea continuar?");
    if(!request) {
        break;
    }
} while(true);

printTable(parthers);
printTableOrganize(parthers);

function printTable(parthers) {
    document.write("<table class='table'><thead class='thead-dark'><th>NOMBRES</th></thead>");
    for(var i=0; i<parthers.length ; i++) {    
        document.write("<tr><td>" + parthers[i] + "</td></tr>");
    }
    document.write("</table>");
}

function printTableOrganize(parthers) {
    parthers.sort();
    document.write("<table class='table'><thead class='thead-dark'><th>NOMBRES ORDENADOS</th></thead>");
    for(var i=0; i<parthers.length ; i++) {    
        document.write("<tr><td>" + parthers[i] + "</td></tr>");
    }
    document.write("</table>");
    document.write("<tr><td>TOTAL</td></tr> " + parthers.length);
}