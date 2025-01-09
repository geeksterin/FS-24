// sessionStorage.setItem('firstName', 'Drumil');
// sessionStorage.setItem('lastName', 'Akheania');


// const person = {
//     firstName: 'Azit',
//     lastName: 'Rana'
// }

// console.log(person + '');
// sessionStorage.setItem('person', person);
// sessionStorage.setItem('person-strinify', JSON.stringify(person));

// console.log(sessionStorage.getItem('person-strinify'));
// console.log(JSON.parse(sessionStorage.getItem('person-strinify')));


// // setTimeout(() =>
// //     sessionStorage.removeItem('lastName')
// //     , 2_000);


// // setTimeout(() => sessionStorage.clear(), 5_000);



// localstorage
// - size is 5MB
// - not secured
// it will persist the data till the browser is open
// setItem, getItem, removeItem, clear
// key and value both should be strings

// sessionStorage
// - size is 5MB
// - secured
// it will persist the data till the tab is open inside browser
// setItem, getItem, removeItem, clear
// key and value both should be strings

// cookies
// size is 4KB
// secured
// to save user authentication information








const takeDataFromUser = () => {
    const firstName = prompt('give your first name');
    const lastName = prompt('give your last name');
    const age = prompt('give your age');
    if (firstName == null || lastName == null || isNaN(age)) {
        alert('Invalid input');
    } else {
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('age', age);
        alert('Data saved successfully');
    }
}

const renderData = () => {
    const keyArr = ['firstName', 'lastName', 'age'];

    const valueList = document.querySelectorAll('.value');
    valueList.forEach((valueTag, index) => {
        valueTag.innerHTML = localStorage.getItem(keyArr[index]);
    })
}

if (!localStorage.getItem('firstName')) {
    takeDataFromUser();
}

renderData();

