var name_person1 = prompt("Introduzca el nombre de la primera persona");
var name_person2 = prompt("Introduzca el nombre de la segunda persona");
var name_person3 = prompt("Introduzca el nombre de la tercera persona");

var age_person1 = prompt("Diga la edad de " + name_person1);
var age_person2 = prompt("Diga la edad de " + name_person2);
var age_person3 = prompt("Diga la edad de " + name_person3);

var less = "";
var greater = "";
if(age_person1 <= age_person2) {
    if(age_person1 <= age_person3) {
        less = name_person1;
        if(age_person2 <= age_person3) {
            greater = name_person3;
        }
        else greater = name_person2;
    }
    else {
        less = name_person3;
        greater = name_person2;
    }
} 
else {
    if(age_person2 <= age_person3) {
        less = name_person2;
        if(age_person1 <= age_person3) {
            greater = name_person3;
        }
        else greater = name_person1;
    }
    else {
        less = name_person3;
        greater = name_person1;
    }
}

document.write("La persona de menor edad es " + less + " y la de mayor es " + greater);