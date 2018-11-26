var questions = prompt("Diaga el n\u00FAmero de preguntas que ten\u00EDa el Test");
var correct_questions = prompt("Cu\u00E1ntas ha acertado");

var fails_questions =  Number(questions) - Number(correct_questions);
var points = "";
switch(fails_questions) {
    case 0: {
        points = "Sobresaliente";
        break;
    }
    case 1: {
        points = "Sobresaliente";
        break;
    }
    case 2: {
        points = "Notable";
        break;
    }
    case 3: {
        points = "Bien";
        break;
    }
    case 4: {
        points = "Suficiente";
        break;
    }
    case 5: {
        points = "Insuficiente";
        break;
    }
    default: {
        points = "Muy deficiente"
        break;
    }
}
alert("Usted ha obtenido una calificaci\u00F3n " + points);