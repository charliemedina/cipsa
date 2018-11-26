// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

var string_value = prompt("Introduce un n\u00famero del 1 al 10");
var value = Number(string_value);
var wrong_answers = 0;
for(var i=0; i<=10; i++) {
    var answer = prompt("Responde: " + value + " * " + i + " =  ?");
    var correct_answer = value * i;
    if(Number(answer)!= correct_answer) {
        wrong_answers++;
        alert("Sorry el valor correcto es: " + correct_answer);
    }
    else {
        alert("CORRECTO");
    }
} 
var porcent = (10 - wrong_answers) * 10;
alert("Tu porcentaje de aciertos fue de un " + porcent + "%");