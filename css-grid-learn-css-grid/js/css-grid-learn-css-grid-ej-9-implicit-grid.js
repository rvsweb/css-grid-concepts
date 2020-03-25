
/**
 * 
 */
function getDivs() {

    let content = document.getElementsByClassName('container')[0];

    for (let index = 1; index <= 4; index++) {
        let element = document.createElement('div');
        element.className = 'item';
        element.innerHTML = index;
        if (index == 3){
            element.style.background = 'teal';
        }
        if (index == 4){
            element.style.background = 'teal';
        }
        content.appendChild(element);
    }
    getDivs2();
}

function getDivs2() {

    let content = document.getElementsByClassName('container2')[0];

    for (let index = 1; index <= 5; index++) {
        let element = document.createElement('div');
        element.className = 'item';
        element.innerHTML = index;
        if (index == 3){
            element.style.background = 'teal';
        }
        if (index == 4){
            element.style.background = 'teal';
        }
        if (index == 5){
            element.style.background = 'teal';
        }
        content.appendChild(element);
    }
}