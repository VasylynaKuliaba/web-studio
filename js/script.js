const heroBtn = document.querySelector('.hero-button')

heroBtn.addEventListener("click", () => {
    document.body.classList.add("is-modal-open");
});

const closeModalBtn = document.querySelector(".modal-close-btn");

closeModalBtn.addEventListener("click", () => {
    document.body.classList.remove("is-modal-open");
});



// closeModalBtn.click = () => {
//     document.body.classList.remove("is-modal-open");
// }; 