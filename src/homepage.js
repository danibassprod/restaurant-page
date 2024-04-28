import backgroundCardPic from './img/brick-wall-1834784_1280.jpg';
import pic from './img/pexels-catscoming-406152.jpg'
import pic2 from './img/pexels-catscoming-955137.jpg'
import pic3 from './img/pexels-jonathanborba-2983101.jpg'
import pic4 from './img/pexels-picjumbo-com-55570-196643.jpg'

export default function renderHomePage(){
    const container = document.querySelector('#container');
    const homePageContainer = document.createElement('div');
    homePageContainer.classList.add('sub-container');

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

    // cards

    for (let i = 0; i <= 3; i++){
        const card = document.createElement('div');
        card.classList.add('card');

        const cardPic = new Image();
        cardPic.classList.add('pic1');
        
        const cardsPics = [pic, pic2, pic3, pic4]

        cardPic.src = cardsPics[i];

        card.appendChild(cardPic);
        menuContainer.appendChild(card);
    }

    homePageContainer.appendChild(topContainer);
    homePageContainer.appendChild(phraseContainer);
    homePageContainer.appendChild(menuContainer);

    container.appendChild(homePageContainer);
}