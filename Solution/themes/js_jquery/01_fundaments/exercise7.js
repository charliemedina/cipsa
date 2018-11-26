var name = prompt("Introduzca el nombre");
var password = prompt("Intoduzca el password");

if(name == "Roger") {
    if(password == "CIPSA") {
        alert("Bienvenido a la p\u00E1gina");
    }
    else {
        alert("Contrase\u00F1a incorrecta");
    }
}
else {
    alert("Usuario no reconocido");
}