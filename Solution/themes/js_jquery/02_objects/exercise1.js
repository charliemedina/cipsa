// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

function User(user, pass) {
    this.user = user;
    this.pass = pass;
    this.checkAccount = function(_user, _pass) {
        if(user == _user && pass == _pass) {
            return true;
        }
        else {
            return false;
        }
    }
}

var user = new User("roger", 1234);

do {
    var userParam = prompt("Introduzca el nombre"); 
    var passParam = Number(prompt("Diga el password"));
    if(!user.checkAccount(userParam, passParam)) {
        alert("ERROR Int\u00e9ntelo de nuevo");
    }
    else {
        alert("Bienvenido a la p\u00E1gina roger :-) ");
        break;
    }
} while(true);


