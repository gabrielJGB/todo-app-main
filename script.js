let itemContainer = document.querySelector('.item-container')
let itemList = document.querySelector('.item-list');
let item = document.querySelector('.item');
let inputTask = document.querySelector('.input-item');
let title = document.querySelector('.title');
let itemText = document.querySelector('.item-text');
let addButton = document.querySelector('.add-button');
let screenModeButton = document.querySelector('.screen-mode-button');
let options = document.querySelector('.options');
let optionText = document.querySelectorAll('.option-text');
let body = document.querySelector('body');
let allCounting = document.querySelector('.all-counting');
let activeCounting = document.querySelector('.active-counting');
let completedCounting = document.querySelector('.completed-counting');
let clearCompletedButton = document.querySelector('.clear-completed');

let active = 0;
let completed = 0;
let all = 0;
let itemsArray = [];
let itemsCount = -1;
let darkMode = true;

addButton.addEventListener('click', addItem);
screenModeButton.addEventListener('click', selectScreenMode);


optionText.forEach(function (i) {
    i.addEventListener('click', optionPressed);
});

body.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        addItem();
    }
});

optionText[0].style['text-decoration'] = "underline";
optionText[0].style['font-weight'] = "bold";

checkScreenMode(darkMode);


function optionPressed(e) {
    let option = e.target.textContent;

    if (option == "All") {
        optionText[1].style['font-weight'] = "normal";
        optionText[2].style['font-weight'] = "normal";
        optionText[1].style['text-decoration'] = "none";
        optionText[2].style['text-decoration'] = "none";

        optionText[0].style['text-decoration'] = "underline";
        optionText[0].style['font-weight'] = "bold";
        showAll();
    }
    else if (option === "Active") {
        optionText[0].style['font-weight'] = "normal";
        optionText[2].style['font-weight'] = "normal";
        optionText[0].style['text-decoration'] = "none";
        optionText[2].style['text-decoration'] = "none";

        optionText[1].style['text-decoration'] = "underline";
        optionText[1].style['font-weight'] = "bold";
        showActive();
    }
    else if (option === "Completed") {
        optionText[0].style['font-weight'] = "normal";
        optionText[1].style['font-weight'] = "normal";
        optionText[0].style['text-decoration'] = "none";
        optionText[1].style['text-decoration'] = "none";

        optionText[2].style['text-decoration'] = "underline";
        optionText[2].style['font-weight'] = "bold";
        showCompleted();
    }
    else if (option === "Clear completed") {
        clearCompleted();
    }

}

function showAll() {
    itemsArray.forEach(function (item) {
        item.style.display = "";
    })
}

function showActive() {
    let isChecked;
    showAll();
    itemsArray.forEach(function (item) {
        isChecked = item.children[0].children[0].checked;

        if (isChecked) {
            item.style.display = "none";
        }

    })
}

function showCompleted() {
    let isChecked;
    showAll();
    itemsArray.forEach(function (item) {
        isChecked = item.children[0].children[0].checked;

        if (!isChecked) {
            item.style.display = "none";
        }

    })

}

function clearCompleted() {
    let isChecked;
    let deleteIndex = [];

    for (let i = 0; i < itemsArray.length; i++) {
        isChecked = itemsArray[i].children[0].children[0].checked;

        if (isChecked) {
            deleteIndex[i] = i;
        }
    }

}

function addItem() {

    createItem();
    itemsArray[itemsCount].children[1].value = itemText.value;
    itemsArray[itemsCount].children[2].addEventListener('click', deleteItem);
    itemsArray[itemsCount].children[0].children[0].addEventListener('click', itemChecked);
    itemText.value = "";
    all++;
    updateCounting();
    checkScreenMode(darkMode);


}

function checkScreenMode(darkMode) {

    if (darkMode) {
        screenModeButton.textContent = "☀";
        screenModeButton.style.color = "white";
        changeScreenMode("dark");
    }
    else {
        changeScreenMode("light");
    }
}

function selectScreenMode(e) {


    if (e.target.textContent == "☾") {
        e.target.textContent = "☀";
        e.target.style.color = "white";
        changeScreenMode("dark");

    }
    else if (e.target.textContent == "☀") {

        e.target.textContent = "☾";
        e.target.style.color = "black";
        changeScreenMode("light");


    }
}

function changeScreenMode(screenMode) {

    if (screenMode == "light") {
        darkMode = false;
        body.style['background-color'] = "white";
        body.style['background-image'] = 'url("/images/bg-desktop-light.jpg")';
        itemText.style['background-color'] = "white";
        itemText.color = "white";
        inputTask.children[0].style.color = "black";
        inputTask.style['background-color'] = "white";
        title.style.color = "black";


        optionText.forEach(function (k) {
            k.style['background-color'] = "white";
            k.style.color = "black"
        });


        activeCounting.style.color = "black";
        allCounting.style.color = "black";
        completedCounting.style.color = "black";

        clearCompletedButton.style.color = "black";


        options.style['background-color'] = "white";

        itemsArray.forEach(function (i) {
            i.style['background-color'] = "white";
            i.style['background-color'] = "white";
            i.children[1].style['background-color'] = "white";
            i.children[1].style.color = "black";
            i.children[2].style['background-color'] = "white";
            i.style['border-bottom'] = "solid 1px rgb(214, 214, 214)";

        })

    }

    else if (screenMode == "dark") {
        darkMode = true;
        body.style['background-color'] = "#181824";
        body.style['background-image'] = 'url("/images/bg-desktop-dark.jpg")';
        inputTask.style['background-color'] = "#24273c";
        itemText.style['background-color'] = "#24273c";
        inputTask.children[0].style.color = "white";
        title.style.color = "white";

        clearCompletedButton.style.color = "white";
        activeCounting.style.color = "white";
        allCounting.style.color = "white";
        completedCounting.style.color = "white";

        optionText.forEach(function (k) {
            k.style['background-color'] = "#24273c";
            k.style.color = "white"
        })


        options.style['background-color'] = "#24273c";

        itemsArray.forEach(function (i) {
            i.style['background-color'] = "#24273c";
            i.style['background-color'] = "#24273c";
            i.children[1].style['background-color'] = "#24273c";
            i.children[1].style.color = "white";
            i.children[2].style['background-color'] = "#24273c";
            i.style['border-bottom'] = "solid 1px #4c4c4c";

        })

    }

}

function itemChecked(e) {

    let itemChecked = e.target.parentNode.parentNode.children[0].children[0].checked;
    let itemContent = e.target.parentNode.parentNode.children[1];

    if (itemChecked == true) {
        itemContent.classList.add('completed-item');
        completed++;

    }
    else {
        itemContent.classList.remove('completed-item');
        completed--;

    }
    updateCounting();
}

function deleteItem(e) {

    let deleteIndex = itemsArray.indexOf(e.target.parentNode);
    let checked = e.target.parentNode.children[0].children[0].checked;
    itemList.removeChild(itemsArray[deleteIndex]);

    if (deleteIndex > -1) {
        itemsArray.splice(deleteIndex, 1);
    }

    if(checked){
        completed--;
    }
    else{
        active--;
    }

    itemsCount--;
    all--;


    if (completed < 0) {
        completed = 0;
    }
    updateCounting();
}

function updateCounting() {

    active = all - completed;

    allCounting.textContent = all;
    activeCounting.textContent = active;
    completedCounting.textContent = completed;
}

function createItem() {

    let item = document.createElement('DIV');
    let container = document.createElement('LABEL');
    let inputCheckbox = document.createElement('INPUT');
    let span = document.createElement('SPAN');
    let inputText = document.createElement('INPUT');
    let deleteButton = document.createElement('BUTTON');

    itemsCount++;

    item.className = "item";
    container.className = "container";
    inputCheckbox.className = "check-box";
    inputCheckbox.setAttribute("type", "checkbox")
    span.className = "checkmark";
    inputText.className = "item-text";
    inputText.setAttribute("type", "text");
    deleteButton.className = "delete-button";
    deleteButton.setAttribute("type", "button");
    deleteButton.textContent = "x";

    container.appendChild(inputCheckbox);
    container.appendChild(span);
    item.appendChild(container);
    item.appendChild(inputText);
    item.appendChild(deleteButton);
    itemList.appendChild(item);
    

    itemsArray.push(item);

}



