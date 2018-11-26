// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

document.write("N\u00fameros pares hasta el 100 con FOR: " );
for(var i=0; i<=100; i++) {
    if(i%2 == 0) 
       document.write(i + "  , ");
}
document.write("<br>")
document.write("<br>")
document.write("\nN\u00fameros pares hasta el 100 con WHILE: ");
var j = 0;
while(j<=100) {
    if(j%2 == 0) 
       document.write(j + "  , ");
    j++;
}
document.write("<br>")
document.write("<br>")
document.write("\nN\u00fameros pares hasta el 100 con DO WHILE: ");

var k=0;
do { 
    if(k%2 == 0) {
        document.write(k + "  , ");
    }
    k++;
}
while(k<=100);
