
/**
 * Crear divs 'grid-item' para el div padre 'grid-container'
 */
function getDivs() {
    var container = document.getElementsByClassName('item');
    for (var i = 0; i < 24; i++) {
        container[i].innerHTML = i + 1;
    }
}
