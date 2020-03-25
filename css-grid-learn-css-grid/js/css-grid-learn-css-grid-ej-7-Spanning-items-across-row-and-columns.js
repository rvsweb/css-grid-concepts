
function getDivs() {

    let elem = document.getElementsByClassName('item');

    for (let i = 0; i < 4; i++) {
        elem[i].innerHTML = i + 1;
    }
    getDivs2();
    getDivs3();
}

function getDivs2() {

    var parent = document.getElementsByClassName('container')[1];

    for (var i = 0; i < 6; i++) {
        var element = document.createElement('div');
        element.className = 'item';
        element.innerHTML = i + 1;
        parent.appendChild(element);
    }
}   

function getDivs3() {

    var parent = document.getElementsByClassName('container')[2];

    for (var i = 0; i < 6; i++) {
        var element = document.createElement('div');
        element.className = 'item';
        element.innerHTML = i + 1;
        parent.appendChild(element);
    }
}   
