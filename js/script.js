window.addEventListener('DOMContentLoaded', () => {

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

});