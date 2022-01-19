const books = ['Les Hauts de Hurlevent', 'La Passe Miroir', 'Frankenstein'];

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
