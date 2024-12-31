const addBtn = document.querySelector('#add-btn');
const containerTag = document.querySelector('#container');

let playerDataList = [];

addBtn.addEventListener('click', () => {
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const country = document.querySelector('#country').value;
    const playerScore = parseFloat(
        document.querySelector('#player-score').value);

    const playerDataObj = {};

    playerDataObj.name = firstName + ' ' + lastName;
    playerDataObj.country = country;
    playerDataObj.score = playerScore;
    playerDataObj.id = Date.now();

    playerDataList.push(playerDataObj);

    sortData();
});

const sortData = () => {
    playerDataList.sort((a, b) => {
        return b.score - a.score;
    });

    containerTag.innerHTML = '';
    playerDataList.forEach((playerData) => {
        const name = playerData.name;
        const country = playerData.country;
        const playerScore = playerData.score;

        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player-data');

        const nameTag = document.createElement('p');
        nameTag.setAttribute('class', 'name');
        const countryTag = document.createElement('p');
        countryTag.setAttribute('class', 'country');
        const scoreTag = document.createElement('p');
        scoreTag.setAttribute('class', 'score');


        playerDiv.addEventListener('click', (event) => {
            const target = event.target;
            const action = target.getAttribute('action');
            if (action === 'delete') {
                containerTag.removeChild(playerDiv);
                playerDataList = playerDataList.filter(item => item.id !== playerData.id);
            } else if (action === 'increase') {
                increaseValue(playerData);
            } else if (action === 'decrease') {
                decreaseValue(playerData);
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('action', 'delete');

        const increaseButton = document.createElement('button');
        increaseButton.setAttribute('action', 'increase');

        const decreaseButton = document.createElement('button');
        decreaseButton.setAttribute('action', 'decrease');


        nameTag.innerText = name;
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
}

const increaseValue = (playerData) => {
    playerData.score += 5;
    sortData();
}

const decreaseValue = (playerData) => {
    playerData.score -= 5;
    sortData();
}