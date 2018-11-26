// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

var conf = true;
var count = 0;
var sum = 0;
do {
    var string_value = prompt("Introduce valores n\u00famericos");
    sum += Number(string_value);
    count++;
    var result = confirm("Desea continuar?");
    if(result == true) 
       conf = true;
    else
       conf = false;
} while(conf == true)
var media = sum/count;
alert("La media de los valores intriducidos es: " + media);

   