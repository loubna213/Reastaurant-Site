
const closeElement = document.querySelector('.close');
closeElement.addEventListener('click', () => {
    document.querySelector('.nav-list').style.right = `${-250}px`;
})

const barsElement = document.querySelector('.bars');
barsElement.addEventListener('click', () => {
    document.querySelector('.nav-list').style.right = `${0}px`;
})















//reviews section

const cards = [
    {
        stars: 5,
        name: "peter jonas",
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Est corporis fugit sint blanditiis 
        quae distinctio, officia, obcaecati laboriosam hic 
        explicabo incidunt excepturi libero! Cum ducimus 
        dolor aspernatur modi illum ipsa!`
    },
    {
        stars: 4.5,
        name: "susan smith",
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Est corporis fugit sint blanditiis 
        quae distinctio, officia, obcaecati laboriosam hic 
        explicabo incidunt excepturi`
    },
    {
        stars: 5,
        name: "anna johnson",
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Est corporis fugit sint blanditiis 
        quae distinctio, officia, obcaecati laboriosam hic 
        explicabo incidunt excepturi libero! Cum ducimus 
        dolor aspernatur modi illum ipsa! excepturi libero! 
        Cum ducimus dolor aspernatur modi illum ipsa!`
    },
    {
        stars: 4.5,
        name: "bill anderson",
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. officia, obcaecati laboriosam hic 
        explicabo incidunt excepturi libero! Cum ducimus 
        dolor aspernatur modi illum ipsa!`
    },
    {
        stars: 5,
        name: "jolze swane",
        description: `Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Est corporis fugit sint blanditiis 
        quae distinctio, officia,ipsum dolor sit amet consectetur 
        adipisicing elit. Est corporis fugit sint blanditiis 
        quae distinctio, obcaecati laboriosam hic 
        explicabo incidunt excepturi libero! Cum ducimus 
        dolor aspernatur modi illum ipsa!`
    },
];

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.reviews-section .info').innerHTML = `
        <h3 class="name">${cards[0].name}</h3>
        <img src="images/rating-${cards[0].stars * 10}.png" alt="">
        <p class="description">${cards[0].description}</p>
    `;
});

let html = '';

let counter = 0;
const sleftIconElement = document.querySelector('.reviews-section .left');
sleftIconElement.addEventListener('click', () => {
    counter--;
    if(counter < 0) counter = cards.length - 1;
    if(counter > cards.length - 1) counter = 0;
    html = `
        <h3 class="name">${cards[counter].name}</h3>
        <img src="images/rating-${cards[counter].stars * 10}.png" alt="">
        <p class="description">${cards[counter].description}</p>
    `
    document.querySelector('reviews-section .info').innerHTML = html;
});

const rightIconElement = document.querySelector('.reviews-section .right');
rightIconElement.addEventListener('click', () => {
    counter++;
    if(counter < 0) counter = cards.length - 1;
    if(counter > cards.length - 1) counter = 0;
    html = `
        <h3 class="name">${cards[counter].name}</h3>
        <img src="images/rating-${cards[counter].stars * 10}.png" alt="">
        <p class="description">${cards[counter].description}</p>
    `
    document.querySelector('.reviews-section .info').innerHTML = html;
});

