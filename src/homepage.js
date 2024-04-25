import backgroundCardPic from './img/brick-wall-1834784_1280.jpg';

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
    const cardPic = document.createElement('div');
    cardPic.classList.add('pic1');
    cardPic.textContent = 1;

    card.appendChild(cardPic);

    // card 2

    const card2 = document.createElement('div');
    card2.classList.add('card');
    const cardPic2 = document.createElement('div');
    cardPic2.classList.add('pic2');
    cardPic2.textContent = 2;

    card2.appendChild(cardPic2);

    // card 3 

    const card3 = document.createElement('div');
    card3.classList.add('card');
    const cardPic3 = document.createElement('div');
    cardPic3.classList.add('pic3');
    cardPic3.textContent = 3;

    card3.appendChild(cardPic3)

    menuContainer.appendChild(card);
    menuContainer.appendChild(card2);
    menuContainer.appendChild(card3);


    container.appendChild(topContainer);
    container.appendChild(phraseContainer);
    container.appendChild(menuContainer);
}

