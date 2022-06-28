document.addEventListener("DOMContentLoaded", () => {
    //___ Tabs ___

    let tabs = document.querySelectorAll(".tabheader__item"),
        tabsParent = document.querySelector(".tabheader__items"),
        tabsContent = document.querySelectorAll(".tabcontent");

    function hiddenTabContent() {
        tabsContent.forEach(elem => {
            elem.classList.add("hide")
            elem.classList.remove("show", "fade");
        })

        tabs.forEach(elem => {
            elem.classList.remove("tabheader__item_active")
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabs[i].classList.add("tabheader__item_active");
    }

    hiddenTabContent();

    showTabContent()

    tabsParent.addEventListener("click", event => {
        if (event.target && event.target.classList.contains("tabheader__item")) {
            tabs.forEach((elem, i) => {
                if (elem == event.target) {
                    hiddenTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    //___ Timer ___

    let deadLine = "2022-06-02";

    function getTime(date) {
        let millisecond = Date.parse(date) - Date.parse(new Date()),
            seconds = Math.floor((millisecond / 1000) % 60),
            minutes = Math.floor((millisecond / (1000 * 60) % 60)),
            hours = Math.floor((millisecond / (1000 * 60 * 60) % 24)),
            day = Math.floor((millisecond / (1000 * 60 * 60 * 24)));

        return {
            "millisecond": millisecond,
            "seconds": seconds,
            "minutes": minutes,
            "hours": hours,
            "day": day,
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setTimerBlock(selector, endTime) {
        const t = document.querySelector(selector),
            seconds = t.querySelector("#seconds"),
            minutes = t.querySelector("#minutes"),
            hours = t.querySelector("#hours"),
            days = t.querySelector("#days"),
            timerInterval = setInterval(updateClock, 1000);

        updateClock()

        function updateClock() {
            const time = getTime(endTime);

            if (time.millisecond <= 0) {
               return  clearInterval(timerInterval);
            }

            days.innerText = getZero(time.day);
            hours.innerText = getZero(time.hours);
            minutes.innerText = getZero(time.minutes);
            seconds.innerText = getZero(time.seconds);
        }
    }

    setTimerBlock(".timer", deadLine);
})

