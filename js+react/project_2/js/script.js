'use strict';

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

/*
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(".promo__adv > img"),
    promo = document.querySelector(".promo__bg"),
    genrePromo = promo.querySelector(".promo__genre"),
    filmList = document.querySelector(".promo__interactive-list");

adv.forEach(elem => elem.remove());
genrePromo.textContent = "драма";
promo.style.background = "url(\"./img/bg.jpg\") center center/cover no-repeat";
filmList.innerHTML = "";


movieDB.movies.sort()

movieDB.movies.forEach((elem, index) => {
    filmList.insertAdjacentHTML("beforeend",
        `<li class="promo__interactive-item">
                    ${index + 1} ${elem}
                    <div class="delete"></div>
              </li>`
    );
})
*/