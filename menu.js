const menuList = [
    {
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        title: "godzilla milkshake",
        category: "dessert",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        title: "Crockpot Ribs",
        category: "dinner",
        price: 45.99,
        img: "./images/item-24.jpg",
        desc: `Baby back ribs, apple cider vinegar, bbq sauce, brown art photo booth before they sold out organic viral.`,
    },
    {
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        title: "oreo dream",
        category: "dessert",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        title: "salmon soup",
        category: "dinner",
        price: 36.99,
        img: "./images/item-25.jpg",
        desc: `There are so many options for flavorful, healthy, and easy dinner ideas! One of my favorites is this organic viral.`,
    },
    {
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        title: "quarantine buddy",
        category: "dessert",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        title: "backed potato with meat ",
        category: "dinner",
        price: 6.99,
        img: "./images/item-26.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
];
let menuHtml = '';
window.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < menuList.length; i++) {
        menuHtml += `
            <div class="meal">
                <div class="image">
                    <img src="${menuList[i].img}" alt="">
                </div>
                <div class="info">
                    <div class="up">
                        <h3 class="title">${menuList[i].title}</h3>
                        <p class="price">$${menuList[i].price}</p>
                    </div>
                    <div class="description">${menuList[i].desc}</div>
                </div>
            </div>
        `;
    }
    document.querySelector('.menu').innerHTML = menuHtml;
})


const btnsElement = document.querySelectorAll('.btn');

btnsElement.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let target = e.target;
        let html = '';
        if(target.classList.contains('all')) {
            document.querySelector('.menu').innerHTML = menuHtml;
            btnsElement.forEach((btn) => {
                btn.classList.remove('active');
                if(btn.classList.contains('all')) {
                    btn.classList.add('active');
                }
            })
        } else if(target.classList.contains('breakfast')) {
            menuList.forEach((item) => {
                if(item.category === 'breakfast') {
                    html += `
                        <div class="meal">
                            <div class="image">
                                <img src="${item.img}" alt="">
                            </div>
                            <div class="info">
                                <div class="up">
                                    <h3 class="title">${item.title}</h3>
                                    <p class="price">$${item.price}</p>
                                </div>
                                <div class="description">${item.desc}</div>
                            </div>
                        </div>
                    `
                    document.querySelector('.menu').innerHTML = html; 
                }
            });
            btnsElement.forEach((btn) => {
                btn.classList.remove('active');
                if(btn.classList.contains('breakfast')) {
                    btn.classList.add('active');
                }
            })
        } else if(target.classList.contains('lunch')) {
            menuList.forEach((item) => {
                if(item.category === 'lunch') {
                    html += `
                        <div class="meal">
                            <div class="image">
                                <img src="${item.img}" alt="">
                            </div>
                            <div class="info">
                                <div class="up">
                                    <h3 class="title">${item.title}</h3>
                                    <p class="price">$${item.price}</p>
                                </div>
                                <div class="description">${item.desc}</div>
                            </div>
                        </div>
                    `
                    document.querySelector('.menu').innerHTML = html; 
                }
            })
            btnsElement.forEach((btn) => {
                btn.classList.remove('active');
                if(btn.classList.contains('lunch')) {
                    btn.classList.add('active');
                }
            })
        } else if(target.classList.contains('dessert')) {
            menuList.forEach((item) => {
                if(item.category === 'dessert') {
                    html += `
                        <div class="meal">
                            <div class="image">
                                <img src="${item.img}" alt="">
                            </div>
                            <div class="info">
                                <div class="up">
                                    <h3 class="title">${item.title}</h3>
                                    <p class="price">$${item.price}</p>
                                </div>
                                <div class="description">${item.desc}</div>
                            </div>
                        </div>
                    `
                    document.querySelector('.menu').innerHTML = html; 
                }
            })
            btnsElement.forEach((btn) => {
                btn.classList.remove('active');
                if(btn.classList.contains('dessert')) {
                    btn.classList.add('active');
                }
            })
        } else if(target.classList.contains('dinner')) {
            menuList.forEach((item) => {
                if(item.category === 'dinner') {
                    html += `
                        <div class="meal">
                            <div class="image">
                                <img src="${item.img}" alt="">
                            </div>
                            <div class="info">
                                <div class="up">
                                    <h3 class="title">${item.title}</h3>
                                    <p class="price">$${item.price}</p>
                                </div>
                                <div class="description">${item.desc}</div>
                            </div>
                        </div>
                    `
                    document.querySelector('.menu').innerHTML = html; 
                }
            });
            btnsElement.forEach((btn) => {
                btn.classList.remove('active');
                if(btn.classList.contains('dinner')) {
                    btn.classList.add('active');
                }
            })
        }
    })
})

