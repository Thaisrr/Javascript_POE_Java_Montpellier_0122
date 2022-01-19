document.addEventListener('DOMContentLoaded', () => {
   const menu_btn = document.querySelector('#menu_btn');
   const nav = document.querySelector('#menu');

   menu_btn.addEventListener('click', () => {
      if(nav.classList.contains('close')) {
         nav.classList.replace('close', 'open');
         menu_btn.textContent = 'Fermer';
      } else {
         nav.classList.replace('open', 'close');
         menu_btn.textContent = 'Ouvrir';
      }
   });

   setNavButton();

});


/**
 * Add event listener to nav button, to open and close menu.
 * @params none
 * @return void
 */
function setNavButton() {
   const menu_btn2 = document.querySelector('#menu_btn2');
   const nav2 = document.querySelector('#menu2');
   menu_btn2.addEventListener('click', () => {
      nav2.classList.toggle('close');
      menu_btn2.textContent = (nav2.classList.contains('close')? 'Ouvrir' : 'Fermer');
   });
}
