// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

var a_string = prompt("Introduce el valor de A");
var b_string = prompt("Introduce el valor de B");
var op_string = prompt("Introduce el valor de OP");

var a = Number(a_string);
var b = Number(b_string);
var op  = Number(op_string);

calculate(a, b, op);

function calculate(a, b, op) {
    switch(op) {
        case 1: {
            alert("Resultado de " +  a + " + " + b + " = " + (a+b));
            break;
        }
        case 2: {
            alert("Resultado de " +  a + " - " + b + " = " + (a-b));
            break;
        }
        case 3: {
            alert("Resultado de " +  a + " * " + b + " = " + (a*b));
            break;
        }
        case 4: {
            alert("Resultado de " +  a + " / " + b + " = " + (a/b));
            break;
        }
        default: {
            alert("Operaci\u00f3n no reconcocida");
            break;
        }
    }
}
