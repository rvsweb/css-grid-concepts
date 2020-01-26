var pics = document.querySelectorAll('.container img');

for (var i = 0; i < pics.length; i++) {
    var width = pics[i].naturalWidth;
    var height = pics[i].naturalHeight;
    // Si el ancho es mayor que alto - crea una clase nueva llamada 'landspace = paisaje'
    if (width > height) pics[i].classList.add('landscape');
    if (width < height) pics[i].classList.add('portrait');
    if (width == height) pics[i].classList.add('square');
};