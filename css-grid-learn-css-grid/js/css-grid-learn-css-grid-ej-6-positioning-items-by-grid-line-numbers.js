
/**
 * 
 */
function getDivs() {

    let element = document.getElementsByClassName('item');
    let element2 = document.getElementsByClassName('item2');
    let element3 = document.getElementsByClassName('item3');

    for (let i = 0; i < 6; i++) {
        element[i].innerHTML = i + 1;
        element2[i].innerHTML = i + 1;
        element3[i].innerHTML = i + 1;
    }
}
