/*******************************************************************************************/
'use strict';

// Задание на урок 19:
//
// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'
//
// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false
//
// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }
//
// Проверить, чтобы все работало без ошибок в консоли *!/

// ____ ПРОДОЛЖЕНИЕ ____

// Задание на урок: 24;
//
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
//
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
// возвращаем пользователя к вопросам опять
//
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
//
// 4) Потренироваться и переписать цикл еще двумя способами

// ____ ПРОДОЛЖЕНИЕ ____

/*
Задание на урок: 29

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно
*/

document.querySelector("#startScript").addEventListener("click", () => {
    let numberOfFilms;

    function start() {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
        }
        return numberOfFilms;
    }

    // start();

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    }

    function rememberLastFilm() {

        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
            const starFilm = prompt("На сколько оцените его ?", "");

            if (lastFilm !== "" && starFilm !== "" && lastFilm !== null && starFilm !== null && lastFilm.length < 50 && !isNaN(starFilm)) {
                personalMovieDB.movies[lastFilm] = starFilm;
                console.log("ok")
            } else {
                i--;
                console.log("error")
            }

            console.log(`lastFilm: ${lastFilm}`)
            console.log(`starFilm: ${starFilm}`)
            console.log(personalMovieDB);
        }
    }

    // rememberLastFilm();

    function writeYourGenres() {
        let yourGenres = "";
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`, "");
        }
    }

    writeYourGenres();

    function detectPersonaLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    }

    // detectPersonaLevel();

    function showMyDM(obj) {
        if (!obj.privat) {
            console.log(obj);
        }
    }

    showMyDM(personalMovieDB);
})
