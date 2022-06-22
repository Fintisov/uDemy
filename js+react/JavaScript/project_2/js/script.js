'use strict';

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

document.addEventListener("DOMContentLoaded", () => {
    const advertisement = document.querySelectorAll(".promo__adv > img"),
        promo = document.querySelector(".promo__bg"),
        genrePromo = promo.querySelector(".promo__genre"),
        filmList = document.querySelector(".promo__interactive-list"),
        addFilmForm = document.querySelector(".add"),
        addFilmInput = addFilmForm.querySelector(".adding__input"),
        addFilmCheckbox = addFilmForm.querySelector("[type = 'checkbox']");


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

// edit value sections
    const editValue = () => {
        // Edit genre
        genrePromo.textContent = "драма";

        // Edit main banner
        promo.style.background = "url(\"./img/bg.jpg\") center top/cover no-repeat";
    };

// delete advertisement
    const removeAdv = (adv) => {
        adv.forEach(elem => elem.remove());
    }

//creete film list
    function creeteFilmList(arr, parents) {
        parents.innerHTML = "";
        arr.sort();
        arr.forEach((elem, index) => {
            parents.insertAdjacentHTML("beforeend",
                `<li class="promo__interactive-item">
                    ${index + 1} ${elem}
                    <div class="delete"></div>
              </li>`
            );
        })

        document.querySelectorAll(".promo__interactive-item .delete").forEach((elem, index) => {
            elem.addEventListener("click", () => {
                arr.splice(index, 1);
                creeteFilmList(arr, parents);
            })
        })
    }

//add new film
    editValue();

    removeAdv(advertisement);

    creeteFilmList(movieDB.movies, filmList);

    addFilmForm.addEventListener("submit", (even) => {
        even.preventDefault();
        let valueFilm = addFilmInput.value.trim();

        if (valueFilm) {
            if (valueFilm.length > 21) {
                valueFilm = `${valueFilm.substring(0, 22)}...`;
            }
            movieDB.movies.push(valueFilm);
        }

        creeteFilmList(movieDB.movies, filmList);

        if (addFilmCheckbox.checked) {
            console.log("Добавляем любимый фильм");
        }

        addFilmForm.reset();
    })
})