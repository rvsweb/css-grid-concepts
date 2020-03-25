
/**
 * Devuelve un array tipo 'div'
 */
function getContainer() {
    let container = document.getElementsByClassName("container");
    return container;
}

/**
 * Establece el numero de elementos al elemento contenedor
 */
function setDivs() {
    let container = getContainer();

    for (let j = 0; j < container.length; j++) {
        container[j];
        for (let i = 0; i < 16; i++) {
            const element = document.createElement('div');
            element.className = 'item';
            element.innerHTML = i + 1;
            container[j].appendChild(element);
        }
    }
}