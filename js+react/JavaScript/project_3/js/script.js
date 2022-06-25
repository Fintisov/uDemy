document.addEventListener("DOMContentLoaded", () => {
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
})