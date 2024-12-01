const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

// Alternar clase "active" al hacer clic en el botón hamburguesa
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});