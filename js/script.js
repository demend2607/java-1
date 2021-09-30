//! При написании действия необходимы круглые скобки в конце item();

"use strict";

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // Узнаем количество классов у кнопок
// console.log(btns[0].classList.item(1)); // item - Позволяет получить класс который стоит под определенным индексом
// console.log(btns[1].classList.add('red')); // add - добавляет класс 
// console.log(btns[0].classList.remove('blue')); // remove - удаляет класс
// console.log(btns[0].classList.toggle('blue')); // toggle(переключать) - удаляет класс если он есть, и добавляет если его нету на странице
// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

// console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red")) {
        console.log('Hello')
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);