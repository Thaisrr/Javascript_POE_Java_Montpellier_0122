const books = ['Les Hauts de Hurlevent', 'La Passe Miroir', 'Frankenstein'];
const obj_books = [
    {title: 'Les Hauts de Hurlevent', author: 'Emily Brontë', read: false},
    {title: 'La Passe Miroir', author: 'Christelle Dabos', read: true },
    {title: 'Frankenstein', author: 'Mary Shelley', read: true},
    {title: 'Nana', author: 'Emile Zola', read: false}
];

// Affiche des livres depuis une liste de string
function displayBooks1() {
    const ul = document.querySelector('#ul_book')
    for(let b of books) {
        const li = document.createElement('li');
        li.textContent = b;
        ul.appendChild(li);
    }
}

// Affiche des livres depuis une liste d'objets
function displayBooks2() {
    const ul = document.querySelector('#ul_book2');
    for(let b of obj_books) {
        const li = document.createElement('li');

        const title = document.createElement('span');
        title.textContent = b.title;

        // Solution avec 2 classes
       // const t_class = (b.read)? 'read' : 'default';
       // title.classList.add(t_class);

        // Solution avec 1 classe défaut, et une classe pour modifier
        title.classList.add('default'); // defaut : optionnelle
        if(b.read) {
            title.classList.add('read');
        }

        const author = document.createElement('span');
        author.textContent = `, par ${b.author}`;

        li.appendChild(title);
        li.appendChild(author);

        ul.appendChild(li);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    displayBooks1();
    displayBooks2();
})
