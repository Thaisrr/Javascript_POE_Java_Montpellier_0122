const books = ['Les Hauts de Hurlevent', 'La Passe Miroir', 'Frankenstein'];
const obj_books = [
    {title: 'Les hauts de Hurlevent', author: 'Emily Brontë', read: false},
    {title: 'La Passe Miroir', author: 'Christelle Dabos', read: true },
    {title: 'Frankenstein', author: 'Mary Shelley', read: true}
];

function displayBooks() {
    const ul = document.querySelector('#ul_book')
    for(let b of books) {
        const li = document.createElement('li');
        li.textContent = b;
        ul.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    displayBooks();
})
