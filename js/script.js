// Многие команды работают только на странице сайта, тагже команды которые работают только в в редакторе кода
// С помощью `ТИЛЬДЫ` можно комбинировать строки
// Порядок выполнение математических операций 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table 
// Типы данных JS  https://drive.google.com/file/d/13TdbVsWl7r_GX6TZJcd60HrtvISkMZ7m/view
// Типы функций https://drive.google.com/file/d/1Xuw7feRJ-2ZzE_U7E4MZMXh1HLVljcU8/view

"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // Переделали функцию в метод
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        // Проверка на пустую строку, затем на команду отмены, затем что введенная строка не является числом
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            // Проверка условия null = отмена, != отрицание, '' = пустая строка, a.length = длина строки
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                // Если пользователь все правилно ввел
                console.log('Nise!');
                // Если какое-то из условий нарушено то выводится 
            } else {
                console.log('Error');
                // Откатываем на 1 вопрос назад
                i--;
            }

        }
    },
    detectedPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log.length('Вы класический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log.length('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDb: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некоректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимы жанр ${i+1} - это ${item}`);
        });
    },
};