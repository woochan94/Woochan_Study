const body = document.querySelector("body");

function paintImage() {
    const image = new Image(); 
    image.src = `../../../img/3.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function init() {
    paintImage();
}

init();