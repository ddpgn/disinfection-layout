let main = document.getElementById('main');
let form = document.getElementById('form');
let cross = document.getElementById('cross');
let formWindow = document.getElementById('form-window');
let ordButtons = document.getElementsByClassName('order-button');

//Показывать анимацию по клику всех кнопок класса order-button
for(let i = 0; i < ordButtons.length; i++) {
    ordButtons[i].onclick = function() {
        blur();         
        formAppearing();
    }
}

//Закрытие формы
cross.onclick = function() {
    unblur();
    form.classList.remove('active');
    op = 0;
}


let blr = 0;    //Контроль блюра
let op = 0;     //Контроль прозначности формы

//Плавно увеличивать блюр
function blur() {
    blr+=12;
    main.style = `filter: blur(${blr}px)`;
    
    if(blr < 48) {
        setTimeout(blur, 20);
    }
}

//Убрать весь блюр
function unblur() {
    blr=0;
    main.style = `filter: blur(${blr}px)`;
}

//Плавное появление формы
function formAppearing() {
    form.classList.add('active');
    formWindow.style.opacity = 0;
    appear();
}

//Анимация появления формы
function appear() {
    op+=0.1;
    formWindow.style.opacity = op;
    
    if(op < 1) {
        setTimeout(appear, 20);
    }
}


//Контроль таблиц цен
let tableButtons = [];
tableButtons.push(document.getElementById('tb-bt-1'));  //Тараканы
tableButtons.push(document.getElementById('tb-bt-2'));  //Клопы
tableButtons.push(document.getElementById('tb-bt-3'));  //Клещи
tableButtons.push(document.getElementById('tb-bt-4'));  //Грызуны

for(let i = 0; i < tableButtons.length; i++) {
    tableButtons[i].onclick = function() {
        for(let n = 0; n < tableButtons.length; n++) {
            tableButtons[n].classList.remove('active');
        }
        tableButtons[i].classList.add('active');
    }
}