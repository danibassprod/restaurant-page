import './css/reset.css';
import './css/styles.css';
import homepage from './homepage.js'
import menu from './menu.js'
import contact from './contact.js'

homepage();

const render = (function(){

    //renders home on click

    const homeTab = document.querySelector('#home');
    homeTab.addEventListener('click', function(){

        const container = document.querySelector('#container');
        const subContainer = document.querySelector('.sub-container');

        function removeSubContainer() {
            container.removeChild(subContainer);
            homepage();
        }

        removeSubContainer();
    });
    
    //renders menu on click

    const menuTab = document.querySelector('#menu');
    menuTab.addEventListener('click', function(){

        const container = document.querySelector('#container');
        const subContainer = document.querySelector('.sub-container');

        function removeSubContainer() {
            container.removeChild(subContainer);
            menu();
        }

        removeSubContainer();
    });

    //renders contact on click

    const contactTab = document.querySelector('#contact');
    contactTab.addEventListener('click', function(){

        const container = document.querySelector('#container');
        const subContainer = document.querySelector('.sub-container');

        function removeSubContainer() {
            container.removeChild(subContainer);
            contact();
        }

        removeSubContainer();
    });

})();