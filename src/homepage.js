import backgroundCardPic from './img/brick-wall-1834784_1280.jpg';
import pic from './img/pexels-catscoming-406152.jpg'
import pic2 from './img/pexels-catscoming-955137.jpg'
import pic3 from './img/pexels-jonathanborba-2983101.jpg'
import pic4 from './img/pexels-picjumbo-com-55570-196643.jpg'


export default function renderHomePage(){
    const container = document.querySelector('#container');

    // top card

    const topContainer = document.createElement('div');
    topContainer.classList.add('top');
    
    const topImage = new Image();
    topImage.src = backgroundCardPic;
    topImage.classList.add('top-card-pic');
    topContainer.appendChild(topImage);

    const topPhrase = document.createElement('h3');
    topPhrase.textContent = 'A trully unique expericence...';
    topContainer.appendChild(topPhrase);

    // phrase card

    const phraseContainer = document.createElement('div');
    phraseContainer.classList.add('phrase');
    const phrase = document.createElement('p');

    phrase.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi maiores necessitatibus exercitationem ipsa perspiciatis inventore earum, ipsam ullam animi repellendus non, molestiae assumenda incidunt ut accusamus rerum suscipit mollitia beatae?';

    phraseContainer.appendChild(phrase);

    // menu card

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');

    const menuPhrase = document.createElement('p');
    menuPhrase.textContent = 'Lorem ipsum dolor sit amet.';
    menuContainer.appendChild(menuPhrase);

    // card 1

    const card = document.createElement('div');
    card.classList.add('card');
    const cardPic = new Image();
    cardPic.classList.add('pic1');
    cardPic.src = pic;

    card.appendChild(cardPic);

    // card 2

    const card2 = document.createElement('div');
    card2.classList.add('card');
    const cardPic2 = new Image();
    cardPic2.classList.add('pic2');
    cardPic2.src = pic2;

    card2.appendChild(cardPic2);

    // card 3 

    const card3 = document.createElement('div');
    card3.classList.add('card');
    const cardPic3 = new Image();
    cardPic3.classList.add('pic3');
    cardPic3.src = pic3;

    card3.appendChild(cardPic3)

    // card 4

    const card4 = document.createElement('div');
    card4.classList.add('card');
    const cardPic4 = new Image();
    cardPic4.classList.add('pic4');
    cardPic4.src = pic4;

    card4.appendChild(cardPic4);

    menuContainer.appendChild(card);
    menuContainer.appendChild(card2);
    menuContainer.appendChild(card3);
    menuContainer.appendChild(card4);


    container.appendChild(topContainer);
    container.appendChild(phraseContainer);
    container.appendChild(menuContainer);
}

