var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var d = document.getElementById("canvas");
var lienzo = d.getContext("2d");
var xin = xout = 670;
var yin = yout = 210;
espacio = 1;


function dibline(color, xin, yin, xout, yout) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xin, yin);
    lienzo.lineTo(xout, yout);
    lienzo.stroke();
    lienzo.closePath();
}

//document.addEventListener("mousedown", dibteclado);
//document.addEventListener("mouseup", dibteclado);
document.addEventListener("keydown", dibteclado); //"keyup" soltar flecha

function dibteclado(evento) {
    console.log("Tecla oprimida");
    console.log(evento);
    if (evento.keyCode == teclas.UP) {
        //if (evento.keyCode == mouse.UP) {
        yout = yin - espacio;
        dibline("red", xin, yin, xout, yout);
        yin = yout;
    }
    switch (evento.keyCode) {
        case teclas.LEFT:
            xout = xin - espacio;
            dibline("red", xin, yin, xout, yout);
            xin = xout;
            break;
        case teclas.DOWN:
            yout = yin + espacio;
            dibline("red", xin, yin, xout, yout);
            yin = yout;
            break;
        case teclas.RIGHT:
            xout = xin + espacio;
            dibline("red", xin, yin, xout, yout);
            xin = xout;
            break;
        default:
    }
}

var b = document.getElementById("cargar");
b.addEventListener("click", reset);

function reset(evento) {
    location.reload();
}