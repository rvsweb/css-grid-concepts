
/**
 * Crear divs 'grid-item' para el div padre 'grid-container'
 */
function getDivs() {

    var container = document.getElementById('grid');

    for (var i = 0; i < 3; i++) {
        var div = document.createElement('div');
        div.innerHTML = i + 1;
        div.className = 'item';
        container.appendChild(div);
    }
    getDivs2();
}

/**
 * Crear divs 'grid-item' para el div padre 'grid-container'
 */
function getDivs2() {

    var container = document.getElementById('grid2');

    for (var i = 0; i < 6; i++) {
        var div = document.createElement('div');
        if (i == 3) {
            div.className = 'item';
            div.innerHTML =
                "4. This item has more content than the others and is intentionally, unnecessarily, superfluously, uselessly,and annoyingly verbose for the sake of example. This item has more content than the others and is intentionally, unnecessarily, superfluously, uselessly,and annoyingly verbose for the sake of example.This item has more content than the others and is intentionally, unnecessarily, superfluously , uselessly, and annoyingly verbose for the sake of example.";
        } else {
            div.className = 'item';
            div.innerHTML = i + 1;
        }
        container.appendChild(div);
    }
}
