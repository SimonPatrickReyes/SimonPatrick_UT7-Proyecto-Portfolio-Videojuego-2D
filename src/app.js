'use strict'



import sound from './audios/audios_audio_bici.mp3'
const audio = new Audio(sound)
audio.play()



var carrousel = document.querySelector('.carrousel');
var images = carrousel.querySelectorAll('img');
var currentImageIndex = 0;


var draggableImage = document.getElementById("draggable-image");
var isDragging = false;
var offsetX, offsetY;

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')


punto.forEach( ( cadaPunto, i ) => {
    punto[i].addEventListener('click', () => {
        let posicion = i
        let operacion = posicion * -25

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})



draggableImage.addEventListener('mousedown', function (e) {
    isDragging = true;
    offsetX = e.clientX - parseInt(window.getComputedStyle(draggableImage).left);
    offsetY = e.clientY - parseInt(window.getComputedStyle(draggableImage).top);
});

document.addEventListener('mousemove', function (e) {
    e.preventDefault()
    if (isDragging) {
        draggableImage.style.left = (e.clientX - offsetX) + 'px';
        draggableImage.style.top = (e.clientY - offsetY) + 'px';
        audio.play();
    }
});

document.addEventListener('mouseup', function () {
    isDragging = false;
    audio.pause();
});

