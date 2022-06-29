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

        let deadLine = "2023-06-01";

        function getTime(date) {
            let millisecond = Date.parse(date) - Date.parse(new Date()),
                seconds = Math.floor((millisecond / 1000) % 60),
                minutes = Math.floor((millisecond / (1000 * 60) % 60)),
                hours = Math.floor((millisecond / (1000 * 60 * 60) % 24)),
                day = Math.floor((millisecond / (1000 * 60 * 60 * 24)));

            if (millisecond <= 0) {
                seconds = 0;
                minutes = 0;
                hours = 0;
                day = 0;
            }

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
                days.innerText = getZero(time.day);
                hours.innerText = getZero(time.hours);
                minutes.innerText = getZero(time.minutes);
                seconds.innerText = getZero(time.seconds);

                if (time.millisecond <= 0) {
                    clearInterval(timerInterval);
                }
            }
        }

        setTimerBlock(".timer", deadLine);

        //___ Modal window ___


        function modalWindow(modalBtn, modalBlock) {
            const modalOpenBtn = document.querySelectorAll(modalBtn),
                modalCloseBtn = document.querySelectorAll("[data-modal-close]"),
                modal = document.querySelector(modalBlock),
                openTimeoutModal = setTimeout(openModal, 2000);

            function openModal() {
                modal.classList.add("show");
                modal.classList.remove("hidden");
                document.querySelector("body").style.overflow = "hidden";
                clearInterval(openTimeoutModal);
            }

            function closeModal() {
                modal.classList.add("hidden");
                modal.classList.remove("show");
                document.querySelector("body").style.overflow = "";
            }

            function showModalByScroll() {
                if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
                    openModal();
                    removeEventListener("scroll", showModalByScroll);
                }
            }

            window.addEventListener("scroll", showModalByScroll);

            modalOpenBtn.forEach(elem => {
                elem.addEventListener("click", openModal);
            })

            modalCloseBtn.forEach(elem => {
                elem.addEventListener("click", closeModal)
            })

            modal.addEventListener("click", (event) => {
                if (event.target === modal && modal.classList.contains("show")) {
                    closeModal();
                }
            });

            document.addEventListener("keydown", (event) => {
                if (event.code === "Escape" && modal.classList.contains("show")) {
                    closeModal();
                }
            })
        }

        modalWindow("[data-modal-open]", "#modal-window")
    }
)

