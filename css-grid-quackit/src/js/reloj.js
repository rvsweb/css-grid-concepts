function date() {
    var dia, mes, anio;

    dia = new Date().getDate();
    mes = new Date().getMonth() + 1;
    anio = new Date().getFullYear();

    document.getElementById('abbr-date').innerHTML = dia + "/" + mes + "/" + anio;
}

function date_2() {
    var dia, mes, anio;

    dia = new Date().getDate() * 2;
    mes = new Date().getMonth() + 1;
    anio = new Date().getFullYear();

    document.getElementById('abbr-date-2').innerHTML = dia + "/" + mes + "/" + anio;
    document.getElementById('abbr-date-3').innerHTML = dia + "/" + mes + "/" + anio;
    document.getElementById('abbr-date-4').innerHTML = dia + "/" + mes + "/" + anio;
}

function reloj() {


    var hora = new Date().getHours();
    var min = new Date().getMinutes();
    var seg = new Date().getSeconds();

    var sgZero;
    var minZero;

    sgZero = setZero(seg);
    minZero = setZero(min);

    document.getElementById('hora-completa').innerHTML =
        hora + ":" + minZero + ":" + sgZero;

    setTimeout(reloj);

    date();
    date_2();


}


function setZero(tiempo) {

    tiempo.toString();

    var tiempoString = tiempo;
    var cadenaFinal = "";

    if (tiempoString < 10) {
        cadenaFinal = "0".concat(tiempoString);
    } else {
        cadenaFinal = tiempo;
    }
    return cadenaFinal;
}