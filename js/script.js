window.addEventListener('DOMContentLoaded', () => {

    //~ -----Tabs(вкладки)-------

    const tabs = document.querySelectorAll('.tabheader__item'), // Используем: All - для получения всех элементов с данным тегом;
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    // Скрываем все блоки элемента .tabcontent
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active'); // обращаемся к html и убираем нужный класс у элемента
        });
    }

    // Показываем нужный нам элемент(.tabhead__item) на странице
    function showTabContent(i = 0) { // 0 = i, 1-ый элемент;
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => { // item - каждый таб(элемент) который будем перебирать, i - номер элемента
                if (target == item) {
                    hideTabContent();
                    showTabContent(i); // i - номер совпавшего элемента
                }

            });

        }
    });

    //~ -----Timer-------

    const deadline = '2021-10-14'; // Дата окончания врмени на таймере

    // Задача функции получить разницу между датами
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return { // Выводим объект глобально в виде объекта
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    // Функция ставит 0 в начале если число однозначное
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }


    function setClock(selector, endtime) { // Записываем наши данные в каждый из блоков в html
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000); // Интервал изменения данных(1 секунда)

        updateClock();
        // Функция обновляет таймер каждую секунду
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadline); // Запуск скрипта
});