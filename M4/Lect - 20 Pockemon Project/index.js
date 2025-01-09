const uniqueType = new Set();
let arr = [], currentData = [];

const createTypes = () => {
    const selectTypeTag = document.querySelector('#type');
    selectTypeTag.innerHTML = '';
    const optionTag = document.createElement('option');

    optionTag.value = 'All';
    optionTag.textContent = 'All';
    selectTypeTag.appendChild(optionTag);

    uniqueType.forEach(type => {
        const optionTag = document.createElement('option');
        optionTag.value = type;
        optionTag.textContent = type;
        selectTypeTag.appendChild(optionTag);
    });
}

const renderData = (dataList) => {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    dataList.forEach(item => {
        const divTag = document.createElement('div');
        divTag.classList.add('item');

        const imgTag = document.createElement('img');
        imgTag.src = item.front_default;

        const h2Tag = document.createElement('h2');
        h2Tag.textContent = item.name;

        const h3Tag = document.createElement('h3');
        h3Tag.textContent = `Type: ${item.type}`;

        divTag.appendChild(imgTag);
        divTag.appendChild(h2Tag);
        divTag.appendChild(h3Tag);

        container.appendChild(divTag);
    })
}

const filterByName = (currentData, input) => {
    return currentData = currentData.filter(data =>
        data.name.toLowerCase().includes(input.toLowerCase())
    );
}

const searchTag = document.querySelector('#search');
const dropdownTag = document.querySelector('#type');
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => {
    window.location.reload();
});

dropdownTag.addEventListener('change', () => {
    if (dropdownTag.value.toLowerCase() == 'all') {
        currentData = arr;
    } else {
        currentData = arr.filter(item => item.type.toLowerCase() == dropdownTag.value.toLowerCase());
    }
    renderData(filterByName(currentData, searchTag.value));
});

searchTag.addEventListener('input', () => {
    const inputData = searchTag.value;
    let filteredData = filterByName(arr, inputData);
    renderData(filteredData);
});

const fetchData = async () => {
    const startTime = Date.now();
    const promiseArray = [];
    const dataPromiseArray = [];
    for (let i = 1; i <= 151; i++) {
        const promise = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        // const data = await response.json();
        promiseArray.push(promise);
    }
    const responseArray = await Promise.all(promiseArray);
    for (let i = 0; i < responseArray.length; i++) {
        const dataPromise = responseArray[i].json();
        dataPromiseArray.push(dataPromise);
    }
    // const typeArray = [];
    // const uniqueType = {};
    arr = await Promise.all(dataPromiseArray);
    arr = arr.map((data, i) => {
        uniqueType.add(data.types[0].type.name);
        return {
            id: data.id,
            front_default: data.sprites['front_default'],
            name: data.name,
            type: data.types[0].type.name,
            abilities: data.abilities,
            species_url: data.species.url,
        }
    })
    createTypes();
    renderData(arr);
    currentData = arr;
    console.log(uniqueType);
    const endTime = Date.now();
    console.log(`Time taken: ${endTime - startTime}ms`);
}
fetchData();