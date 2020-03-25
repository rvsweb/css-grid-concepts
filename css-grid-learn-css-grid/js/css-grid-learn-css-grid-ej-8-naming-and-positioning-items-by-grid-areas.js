
/**
 * 
 */
function getDivs() {

    const container = document.getElementsByClassName('container')[0];

    for (let i = 0; i < 6; i++) {
        let elem = document.createElement('div');
        elem.className = 'item';
        if(i == 0)
        elem.innerHTML = 'header';
        if(i == 1)
        elem.innerHTML = '';
        if(i == 2)
        elem.innerHTML = 'content';
        if(i == 3)
        elem.innerHTML = 'sidebar';
        if(i == 4)
        elem.innerHTML = 'footer';
        if(i == 5)
        elem.innerHTML = '';
        container.appendChild(elem);
    }

}