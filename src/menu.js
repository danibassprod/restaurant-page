import cardPicture from './img/pexels-janetrangdoan-793765.jpg'

export default function renderMenu(){
    const bodyContainer = document.querySelector('#container');
    
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    menuContainer.style.padding = '5% 10%';
    menuContainer.style.height = '100%';
    menuContainer.style.display = 'grid';
    menuContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
    menuContainer.style.gridTemplateRows = 'repeat(2, 1fr)';
    menuContainer.style.placeItems = 'center';
    menuContainer.style.gap = '20px 50px';

    // creates cards

    for (let i = 0; i <= 6; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '100%';
        card.style.height = '100%';
        card.style.background = 'white';
        card.style.padding = '5%';  
        card.style.borderRadius = '5px';
        card.style.boxSizing = 'border-box';
        card.style.boxShadow = '-4px 5px 8px 0px #00000042, inset #ffb981 6px 0 0px 0px';
        card.style.display = 'grid';
        card.style.gridTemplateColumns = '1fr 1.8fr';
        card.style.gridTemplateRows = '1fr';
        card.style.placeItems = 'center';
        card.style.gap = '0 25px';

        const cardImage = new Image();
        cardImage.style.height = '60%';
        cardImage.src = cardPicture;
        cardImage.style.background = 'black';

        const cardDescription = document.createElement('p');
        cardDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris nisi, finibus eget rutrum id, sodales et nibh. Nulla ultricies posuere metus, in ultricies nulla varius nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sed ipsum metus. Vestibulum accumsan ligula sem.';
        cardDescription.style.color = 'black';
        cardDescription.style.fontSize = '1.2vw';

        card.appendChild(cardImage);
        card.appendChild(cardDescription);

        menuContainer.appendChild(card);
    }

    bodyContainer.appendChild(menuContainer);
}