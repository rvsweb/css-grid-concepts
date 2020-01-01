
function reloj() {
    document.getElementById('dia').innerHTML = new Date().getDay();
    document.getElementById('mes').innerHTML = new Date().getMonth();
    document.getElementById('anio').innerHTML = new Date().getFullYear();

    var hora = new Date().getHours();
    var min = new Date().getMinutes();
    var seg = new Date().getSeconds();

    document.getElementById('hora-completa').innerHTML =
        hora + ":" + min + ":" + seg;
    setTimeout(reloj);
}
