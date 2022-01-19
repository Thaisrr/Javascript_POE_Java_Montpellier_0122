function sayHi(from) {
    console.log('Hi from ', from);
}


const btn_hi = document.querySelector('#btn_hi');
// params : nom / type d'événement ( string )
// callback => action qu'on souhaite faire
btn_hi.addEventListener('click', (event) => {
    console.log(event);
    event.stopPropagation(); // empêche la propagation sur les événements parents
    event.stopImmediatePropagation();
    // empêche la propagation des événements de même type sur l'élément ( ex : double click )
    sayHi('btn');
});

// List d'elements HTML => utiles pour selecteurs balises ou classe
const all_buttons = document.querySelectorAll('button');

all_buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.backgroundColor = 'teal';
        console.log('mouse entering a button');
    });

    btn.addEventListener('click', () => {
        console.warn('a button has bean clicked')
    })
})

/*
Evenements de souris :
- click
- dblclick : double click
- mouseenter ( hover ) // mouseover
- mouseleave
- mouseup : quand on relache la souris sur un élément
- mousemove

Evenements du document :

 */

// A l'extérieur : code hors gestion du DOM
// les fonctions, déclaration des variables globales, ...
document.addEventListener('DOMContentLoaded', () => {
    // appliquer toutes les interractions avec le DOM quand le dom est pret
    // querySelector(All), getElementById, ect...

    //const container = document.querySelector('#container');
    //container.addEventListener('click', () => {})
});

function addPToContainer() {
    // pas accès à la variable container puisqu'elle est déclarée dans un block
}


document.addEventListener('keypress', (event) => {
    console.info('keypress : ', event.key);
    // pour les touches de caractères
});

document.addEventListener('keydown', (event) => {
    console.warn('keydown : ', event.key);
    // pour toutes les touches ( sauf ctrl, fn )
});

// On peut faire de la gestion d'event de keyboard sur des éléments + précis
document.addEventListener('keyup', (event) => {
    console.error('keyup : ', event.key);
    // pour toutes les touches
    const char = document.querySelector('#char');
    switch (event.key) {
        case 'ArrowUp':
            char.style.top = `${Number(char.style.top) -100}px`;
            break;
        case 'ArrowDown':
            char.style.top = `${Number(char.style.top) +100}px`;
            break;
        case 'ArrowLeft':
            char.style.left = `${Number(char.style.left) -100}px`;
            break;
        case 'ArrowRight':
            char.style.left = `${Number(char.style.left) +100}px`;
            break;
    }
});
/*
Attention: keydown et keypress lance l'événement en boucle tant que la touche est pressée
Pour un événement qui ne s'applique qu'une fois, il faut utiliser keyup
 */





