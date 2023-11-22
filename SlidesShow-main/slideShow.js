'use strict';
const imagens = [
    {'id':'1','url': './img/berserk.png'},
    {'id':'2','url': './img/inuyasha.jpg'},
    {'id':'3','url': './img/ippo.png'},
    {'id':'4','url': './img/tenjhotenge.jpg'},
    {'id':'5','url': './img/yuyuhakusho.jpg'},
    {'id':'6','url': './img/hellsing.jpg'},
] 
const conteinerItens = document.querySelector('#container-items');
const loadImages = (images, conteiner) =>{
    images.forEach(image => {
        conteiner.innerHTML += `<div class='item'>
        <img src='${image.url}'>
        </div>
        `
    })
}
loadImages(imagens, conteinerItens);
let items = document.querySelectorAll('.item');
const previous = () => {
    conteinerItens.appendChild(items[0]);
    items = document.querySelectorAll('.items');
}
const next = () =>{
    const lastItem =  items[items.length - 1];
    conteinerItens.insertBefore( lastItem, items[0]);
    items = document.querySelectorAll('click', next);
}
document.querySelector('#previuos').addEventListener('click', previous)
document.querySelector('#')