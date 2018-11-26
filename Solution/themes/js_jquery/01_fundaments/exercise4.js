var person1Name;
var person1Age;

var person2Name;
var person2Age;

person1Name = prompt("Introduce el nombre de la primera persona");
person1Age = prompt("Edad de " + person1Name +"?");

person2Name = prompt("Introduce el nombre de la segunda persona");
person2Age = prompt("Edad de " + person2Name + "?");

if(Number(person1Age)==Number(person2Age)) {
    alert("Ambas personas tienen la misma edad");
}
else {
    (Number(person1Age)>Number(person2Age)) ? alert(person1Name + " es mayor que " + person2Name):alert(person1Name + " es menor que " + person2Name);
}

