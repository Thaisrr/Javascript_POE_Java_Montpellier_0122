loaded(() => {

    const el = $('#el');

    keypress("Enter", () => {
        console.log('enter pressed')
    });

    click(el, () => {
        console.log('el clicked')
    });

    const all_el = $$('.el');
    all_el.forEach(el => () => {});


})

// Appelées par loaded, soit à un event
function displayData() {
    const ul = $('ul');
}

// récupérer des données dans une API
// préparer ses fonctions
// algo ne nécéssitant pas le DOM

