const cartButton = document.querySelector("#cart-button");
const Modal = document.querySelector(".modal");
const Close = document.querySelector(".close");



cartButton.addEventListener("click", toggleModal);

Close.addEventListener("click", toggleModal);



function toggleModal() {

	Modal.classList.toggle("is-open");
}

new WOW().init();
