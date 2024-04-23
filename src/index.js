import './reset.css';
import './styles.css';
import backgroundCardPic from './img/brick-wall-1834784_1280.jpg';

const topCard = document.querySelector('.top');
const topCardImage = new Image();
topCardImage.src = backgroundCardPic;
topCardImage.classList.add('top-card-pic');
topCard.appendChild(topCardImage);