// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

function Triangle(l1, l2, l3) {
    this.l1 = l1;
    this.l1 = l2;
    this.l3 = l3;

    this.Equilateral = function() {
        return (this.l1==this.l2 && this.l1==this.l3) ? true : false;
    }
    
    this.Isosceles = function() {
        return (this.l1==this.l2 || this.l1==this.l3 ||this.l2==this.l3) ? true : false;
    }

    this.Scalene = function() {
        return (this.l1!=this.l2 && this.l1!=this.l3 && this.l2!=this.l3) ? true : false;
    }
}

var triangle = new Triangle(1, 2, 2);
document.write("Verificando las propiedades del tri\u00e1ngulo...");
document.write("<br>");
document.write("Equilatero es " + triangle.Equilateral(1, 4, 2));
document.write("<br>");
document.write("Is\u00f3sceles es " + triangle.Isosceles(1, 4, 2));
document.write("<br>");
document.write("Escaleno es " + triangle.Scalene(1, 4, 2));
document.write("<br>");

