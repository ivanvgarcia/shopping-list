var button = document.getElementById('enter');
var input = document.getElementById('user-input');
var buyList = document.querySelector('.buy-list');
var itemList = document.querySelector('.list-item');
var delBtn = document.querySelector('.delete-item');
var li = document.querySelectorAll('li');

input.value = '';

for (var i = 0; i < li.length; i++) {
    li[i].insertAdjacentHTML('beforeend', '<button class="delete-item">X</button>');
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.setAttribute('class', 'list-item');
    li.appendChild(document.createTextNode(input.value));
    buyList.appendChild(li);
    li.insertAdjacentHTML('beforeend', '<button class="delete-item">X</button>');
    input.value = '';
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(e) {
    if (inputLength() > 0 && e.which === 13) {
        createListElement();
    }
}

function deleteItem(e) {
    var itemClass = e.target.parentNode;
    console.log(itemClass.parentNode);
    if (itemClass.className === "list-item" || itemClass.className === "list-item done") {
        itemClass.parentNode.removeChild(itemClass);
    }
}

function toggleItem (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('done');
    }
};

//

buyList.addEventListener('click', deleteItem);
buyList.addEventListener('click', toggleItem);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);