const books = ['Les Hauts de Hurlevent', 'La Passe Miroir', 'Frankenstein'];
const obj_books = [
    {title: 'Les Hauts de Hurlevent', author: 'Emily Brontë', read: false,
        img: 'https://www.ecoledesloisirs.fr/sites/default/files/couverture/couvhhurlevent.jpg'},
    {title: 'La Passe Miroir', author: 'Christelle Dabos', read: true,
        img: 'https://lislysworld.fr/wp-content/uploads/2019/05/La-Passe-Miroir-tome-1-les-fianc%C3%A9s-de-l%E2%80%99hiver-1140x668.png'},
    {title: 'Frankenstein', author: 'Mary Shelley', read: true,
        img: "https://static.fnac-static.com/multimedia/Images/FR/NR/1d/e9/1d/1960221/1507-1/tsp20200429070322/Frankenstein-de-Mary-Shelley.jpg"},
    {title: 'Nana', author: 'Emile Zola', read: false,
        img: 'https://images.radio-canada.ca/q_auto,w_960/v1/ici-premiere/16x9/nana-zola-edouard-manet-cocotte.jpg'}
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

function displayBooksCards() {
    const deck = document.querySelector('#deck');
    for (let b of obj_books) {
        /*
        Pour créer des éléments complexes :
        -> visualiser la hiérarchie de l'élément
        -> Create element : ( conseille ) :
            créer le parent en premier,
                puis le 1er enfant, ses propres enfants
                puis le 2eme, ses propres,
         -> append Child :
            -> commencer par le plus petit enfant, et remonter progressivement
            la hiérarchie pour n'oublier

            => chaque élément créer doit être appendChild quelque part
         */
        const card = document.createElement('div');
        card.classList.add('card');

        const header = document.createElement("div");
        header.classList.add("card-img");

        const img = document.createElement('img');
        img.src = b.img;
        img.alt = 'Couverture du livre ' + b.title;

        header.appendChild(img);
        card.appendChild(header);

        const body = document.createElement('div');
        body.classList.add('card-body');

        const title = document.createElement('h3');
        title.textContent = b.title;
        if(b.read) {
            title.classList.add('read');
        }

        const author = document.createElement('p');
        author.textContent = '-- par ' + b.author;

        const btn = document.createElement('button');
        btn.textContent = getButtonText(b.read);
        btn.addEventListener('click', () => {
           b.read = !b.read;
           btn.textContent = getButtonText(b.read);
           title.classList.toggle('read');
           // pas besoin de refaire des requêtes pour récupérer les éléments HTML
        });

        body.appendChild(title);
        body.appendChild(author);
        body.appendChild(btn);

        card.appendChild(body);
        deck.appendChild(card);
    }
}

const getButtonText = (read) => (read)? 'Déjà lu !' : 'Par encore lu';


document.addEventListener('DOMContentLoaded', function () {
    displayBooks1();
    displayBooks2();
    displayBooksCards();
})


