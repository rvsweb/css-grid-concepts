
/**
 * Crea el div padre para agregar los demas elementos
 */
function createContainer() {
    var newContainer = document.createElement('div');
    newContainer.className = "container";
    return document.getElementsByTagName('body')[0].appendChild(newContainer);
}

/**
 * Crea los demas elementos 'div' unidos al elemento padre
 */
function addElement() {

    var newContainer = createContainer();

    for (var i = 0; i < 72; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = "item";
         var newContent = document.createTextNode(i);
        newDiv.appendChild(newContent);
        newContainer.appendChild(newDiv);
    }
}

