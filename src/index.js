// here you put all the js you want.
import Navbar from "./js/navbar.js";

const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
nav.addEventListener('click', () => {
    document.body.classList.toggle('menu-open');
    setTimeout(() => {
        menu.style.display = 'grid'
    }, 400);


})


const listLi = document.querySelectorAll('.menu ul li a');
const listImage = document.querySelectorAll('.menu .image .item');

let currentZIndex = 100;
let lastSeen = listLi[0];

listLi.forEach(li => {
    li.addEventListener('mouseenter', () => {
        console.log('mouseenter', li)

        const img = [...listImage].find(img => {
            return img.dataset.projectNo === li.dataset.projectNo
        })

        if(lastSeen === li) return

        img.style.transition = null

        img.style.opacity = 0;
        img.style.zIndex = currentZIndex++;

        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transition = "opacity 700ms ease"
        }, 1)

        lastSeen = li;
    })
})
