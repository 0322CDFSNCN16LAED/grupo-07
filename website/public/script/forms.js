window.addEventListener('load', () => {
    const formulario = document.querySelector(".form");
    const inputs = formulario.querySelectorAll('input');  
    // Inputs Focus
    inputs.forEach((input) => {
        input.addEventListener("focus", function () {
            input.style.backgroundColor = "rgba(37, 92, 209, 0.397)";
        });
        input.addEventListener("blur", function( ) {
            input.style.backgroundColor = "";
        });
    });
})