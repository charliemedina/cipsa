// \u00e1 = á   // \u00e9 = é  // \u00ed = í  // \u00f3 = ó // \u00fa = ú
// \u00c1 = Á   // \u00c9 = É  // \u00cd = Í  // \u00d3 = Ó // \u00da = Ú
// \u00f1 = ñ   // \u00d1 = Ñ

function Student(name, note) {
    this.name = name;
    this.note = note;
}

var students = [];
var notes = [];
var sum = 0;
var max = 0;

var total = prompt("Cu\u00e1ntos estudiantes hay en la clase");
while(total > 0) {
    var name = prompt("Diga el nombre del alumno");
    var note = Number(prompt("Cu\u00e1l fue su calificaci\u00f3n"));
    notes.push(note);
    students.push(new Student(name, note));
    sum += Number(note);
    max = Math.max(max, note);
    total--;
}

var index = notes.indexOf(max);
var media = sum/students.length;
var talent = students[index].name;
document.write( talent + " es el alumno de mejor calificaci\u00f3n");
document.write("<br>" );
document.write("La media de las notas es de: " + media);


