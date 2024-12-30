const addBtn = document.querySelector('#add-btn');
const containerTag = document.querySelector('#container');

addBtn.addEventListener('click', () => {
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const country = document.querySelector('#country').value;
    const playerScore = parseFloat(
        document.querySelector('#player-score').value);

    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player-data');

    const nameTag = document.createElement('p');
    const countryTag = document.createElement('p');
    const scoreTag = document.createElement('p');

    const deleteButton = document.createElement('button');
    const increaseButton = document.createElement('button');
    const decreaseButton = document.createElement('button');

    nameTag.innerText = firstName + ' ' + lastName;
    countryTag.innerText = country;
    scoreTag.innerText = playerScore;
    deleteButton.innerText = 'Delete';
    increaseButton.innerText = '+5';
    decreaseButton.innerText = '-5';

    playerDiv.appendChild(nameTag);
    playerDiv.appendChild(countryTag);
    playerDiv.appendChild(scoreTag);
    playerDiv.appendChild(deleteButton);
    playerDiv.appendChild(increaseButton);
    playerDiv.appendChild(decreaseButton);

    containerTag.appendChild(playerDiv);
});