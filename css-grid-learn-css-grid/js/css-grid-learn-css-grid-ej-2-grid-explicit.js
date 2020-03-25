
/**
 * 
 */
function getDivs() {

    var container = document.getElementById('grid');

    for (var i = 0; i < 4; i++) {
        var div = document.createElement('div');
        div.innerHTML = i + 1;
        div.className = 'item';
        container.appendChild(div);
    }

}