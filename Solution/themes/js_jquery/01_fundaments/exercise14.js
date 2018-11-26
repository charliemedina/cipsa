// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

var  number1 = prompt("Introduce el primer n\u00famero");
var number2 = prompt("Introduce el segundo n\u00famero");
var operation = prompt("Qu\u00e9 operaci\u00f3n desea realizar");

var result; 
switch(operation)  {
   case 'suma': {
       result = Number(number1) + Number(number2);
       break;
   }
   case 'resta': {
       result = Number(number1) - Number(number2);
       break;
   }
   case 'division': {
       result = Number(number1) / Number(number2);
       break;
   }
   case 'producto': {
       result = Number(number1) * Number(number2);
       break;
   }
   default: {
       result = "Operaci\u00f3n no v\u00e1lida :-("
   }
}
alert("El resultado es " + result); 




