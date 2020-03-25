
/**
 * 
 */
function getDivs() {

    var container = document.getElementById('grid');

    for (var i = 0; i < 6; i++) {
        var div = document.createElement('div');
        div.innerHTML = i + 1;
        div.className = 'item';
        container.appendChild(div);
    }
    getDivs2();
    getDivs3();
}

function getDivs2() {

    var container2 = document.getElementById('grid-2');

    for (var i = 0; i < 3; i++) {
        var div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = i + 1;
        container2.appendChild(div);
    }
}

function getDivs3() {

    var container2 = document.getElementById('grid-3');

    for (var i = 0; i < 4; i++) {
        var div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = i + 1;
        container2.appendChild(div);
    }
}