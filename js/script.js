const btn = document.querySelector('.btn');

let timerId, // Назначаем глобальную переменную для работы локально
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box'); // Название элемента на странице сайта
    let pos = 0; // Позиция старта функции

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

// function logger() { // Остановка интервала после определенного количества повторений
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// Функция выполняется не мгновенно
// Повторный вызов функции будет выполнятся после выполения предыдущей, а не через 500
// let id = setTimeout(function log() { 
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);