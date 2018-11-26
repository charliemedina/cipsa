// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

function Primitive_Bet(v1, v2, v3, v4, v5, v6) {
    this.v1 = v1;
    this.v1 = v2;
    this.v1 = v3;
    this.v1 = v4;
    this.v1 = v5;
    this.v1 = v6;
    this.betCount = function(_v1, _v2, _v3, _v4, _v5, _v6,) {
        var count = 0;
        if(v1 == _v1) count ++;
        if(v2 == _v2) count ++;
        if(v3 == _v3) count ++;
        if(v4 == _v4) count ++;
        if(v5 == _v5) count ++;
        if(v6 == _v6) count ++;
        return count;
    }
}

var ticket = new Primitive_Bet(1, 2, 3, 4, 5, 6);
document.write("El n\u00famero de acierto de su bilete es: " + ticket.betCount(1 , 2, 3, 4, 5, 6));
document.write("<br>");
if(ticket.betCount(1 , 2, 3, 4, 5, 6) == 6) 
    document.write("Enhorabuena se ha llevado el Gran Premio!!!");
