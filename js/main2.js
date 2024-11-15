const navTogglerBtn = document.querySelector(".toggle");
const aside = document.querySelector(".aside");
const allSections = document.querySelectorAll(".containerr");
const totalSections = allSections.length;

navTogglerBtn.addEventListener("click", () => {
    asideSectionToggleBtn();
});

function asideSectionToggleBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.toggle("open");
    }
}