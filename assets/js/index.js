const btnCerrarMantencion = document.getElementById("hero__btn--close");
const msgMantencion = document.querySelector(".hero__msg");

btnCerrarMantencion.addEventListener("click", () => {
    msgMantencion.style.display = "none";
});