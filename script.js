const mensajes = [
    "Segura bot?",
    "Segura Segura bot?",
    "Segura de que estás segura bot?",
    "Porfaaa amorr bot",
    "Pensalaaa bienn bot",
    "Si seguís diciendo que no, voy a estar triste bot como hace 2 meses o mas:(",
    "Muuuuuuuy triste bot",
    "Muy muy muy muy triste bot",
    "Bueno ya está, dejo de preguntar bot",
    "No, en serio, decime que si porfaa bot❤️",
    "PORFAVOOOOOOOOOOR BOT YO TE AMO UN MUCHITOOOOO",
    "mi amorcitoooooooooooooooooooooooooooooooo diiiii que siiiiiiiiiii, andale",
    "si vuelves a decir q no eres una bot de papel"
];

let msjindices = 0;

function tocarno() {
    const botonno = document.querySelector('.no-boton');
    const botonsi = document.querySelector('.si-boton');
    botonno.textContent = mensajes[msjindices];
    msjindices = (msjindices + 1) % mensajes.length;
    const tamaño = parseFloat(window.getComputedStyle(botonsi).fontSize);
    botonsi.style.fontSize = `${tamaño * 1.4}px`;
}

function tocarsi() {
    window.location.href = "pagina_si.html"
}

