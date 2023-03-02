'use strict'

import sound from './audios/audios_audio_bici.mp3'
const audio = new Audio(sound)
audio.play()

/************GALERIA LIGHTBOX***********/

const enlaces = document.querySelectorAll('.ul .a')
console.log(enlaces)
const lightbox = document.querySelector('.lightbox')
const seleccion = document.querySelector('.lightbox .seleccion')
const cerrar = document.querySelector('.cerrar')
const descripciones = document.querySelectorAll('.lightbox .descripcion')
console.log(descripciones)
enlaces.forEach(( cadaEnlace, i)=>{
    console.log(cadaEnlace)
    enlaces[i].addEventListener('click',(e)=>{
        e.preventDefault()
        let ruta= cadaEnlace.querySelector('.img').src
        console.log(ruta)
        lightbox.classList.add('activo')
        seleccion.setAttribute('src',ruta)
        descripciones.forEach((cadaDescripcion, i) =>{
            descripciones[i].classList.remove("activo")
        })
        descripciones[i].classList.add("activo")
        
    })
})

cerrar.addEventListener('click',()=>{
    lightbox.classList.remove('activo')
})
/************************************/


/***************CARROUSEL**************/
var carrousel = document.querySelector('.carrousel');
var images = carrousel.querySelectorAll('img');
var currentImageIndex = 0;
const grande= document.querySelector('.grande')

var draggableImage = document.getElementById("draggable-image");
var isDragging = false;
var offsetX, offsetY;


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
/*************************************/


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

