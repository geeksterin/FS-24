const tbody = document.querySelector('tbody');

(() => {
    emojiList
        .forEach((item, ind) => {
            const row = document.createElement('tr');

            const index = document.createElement('td');
            index.innerText = ind;
            const emojiCell = document.createElement('td');
            emojiCell.innerText = item.emoji;
            const aliaseCell = document.createElement('td');
            aliaseCell.innerText = item.aliases.join(', ')
            const descriptionCell = document.createElement('td');
            descriptionCell.innerText = item.description;

            row.appendChild(index);
            row.appendChild(emojiCell);
            row.appendChild(aliaseCell);
            row.appendChild(descriptionCell);


            tbody.appendChild(row);
        })
})();

const searchTag = document.querySelector('#search');

searchTag.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();

    tbody.innerHTML = '';

    emojiList.forEach((item, ind) => {
        if (item.description.includes(searchText) ||
            item.aliases.includes(searchText) ||
            item.tags.includes(searchText)) {

            const row = document.createElement('tr');

            const index = document.createElement('td');
            index.innerText = ind;
            const emojiCell = document.createElement('td');
            emojiCell.innerText = item.emoji;
            const aliaseCell = document.createElement('td');
            aliaseCell.innerText = item.aliases.join(', ')
            const descriptionCell = document.createElement('td');
            descriptionCell.innerText = item.description;

            row.appendChild(index);
            row.appendChild(emojiCell);
            row.appendChild(aliaseCell);
            row.appendChild(descriptionCell);

            tbody.appendChild(row);
        }
    });
});

const btn = document.querySelector('button');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    if (btn.innerText == 'Light') {
        btn.innerText = 'Dark'
    } else {
        btn.innerText = 'Light'
    }
    body.classList.toggle('dark-mode')
    console.log(body.classList);
})