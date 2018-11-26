// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

while(true) {
    var numeric_value = prompt("Introduce un valor n\u00famerico");
    if(isNaN(numeric_value))
       alert("ERROR");
    else 
       break;
}
   