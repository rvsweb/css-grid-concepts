/**
* Crea los demas elementos 'div' unidos al elemento padre
*/
function addElement(div) {

    var parent = document.getElementsByClassName("container");

    for (var i = 0; i < div; i++) {
        var child = document.createElement("div");
        child.className = "item";
        child.innerHTML = i + 1;

        if (i == 9) {
            child.style.gridColumn = "2 / 5";
            child.style.gridRow = "2 / 3";
        }

        if (i == 11) {
            child.style.gridColumn = "1 / 1";
            child.style.gridRow = "2 / 6";
        }

        if (i == 25) {
            child.style.gridColumn = "3 / span 4";
            child.style.gridRow = "4 / 5";
        }

        if (i == 32) {
            child.style.gridColumn = "5 / span 2";
            child.style.gridRow = "5 / span 3";
        }

        parent[0].appendChild(child);

    }

}
