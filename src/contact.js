export default function renderContact() {
    const bodyContainer = document.querySelector('#container');
    
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('sub-container');
    contactContainer.style.width = '80%';
    contactContainer.style.height = '500px';
    contactContainer.style.padding = '1%';
    contactContainer.style.boxSizing = 'border-box';
    contactContainer.style.margin = '4% auto';
    contactContainer.style.background = 'white';
    contactContainer.style.border = '7px #ffd58a';
    contactContainer.style.borderStyle = 'dashed solid'
    contactContainer.style.display = 'grid';
    contactContainer.style.gridTemplateColumns = '1fr 1fr';
    contactContainer.style.gridTemplateRows = '1fr 6fr';
    contactContainer.style.gridTemplateAreas = '"title title" "links info"';

    // title

    const title = document.createElement('h3');
    title.textContent = 'Contact';
    title.style.color = 'black';
    title.style.gridArea = 'title';
    title.style.alignSelf = 'center';
    title.style.justifySelf = 'center';
    title.style.margin = '0';
    title.style.fontSize = '2vw';

    // links

    const ulLinks = document.createElement('ul');
    ulLinks.style.gridArea = 'links';
    ulLinks.style.listStyle = 'none';
    ulLinks.style.margin = '0';
    ulLinks.style.padding = '5%';
    ulLinks.style.display = 'flex';
    ulLinks.style.flexDirection = 'column';
    ulLinks.style.gap = '8%';
    ulLinks.style.fontSize = '1.7vw';
    ulLinks.style.alignItems = 'center';

    for (let i = 0; i <= 3; i++){
        const listItem = document.createElement('li');
        listItem.textContent = `Lorem ipsum dolor ${i}`;
        listItem.style.color = 'black';
        listItem.style.cursor = 'pointer';
        ulLinks.appendChild(listItem);
    }

    // text

    const text = document.createElement('p');
    text.textContent = 'lorem Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor';
    text.style.color = 'black';
    text.style.fontSize = '1.5vw';
    text.style.lineHeight = 'min(35px, 4vw)';
    text.style.margin = '0';

    contactContainer.appendChild(title);
    contactContainer.appendChild(ulLinks);
    contactContainer.appendChild(text);
    
    bodyContainer.appendChild(contactContainer);
}