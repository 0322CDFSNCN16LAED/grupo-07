const isEmpty = (input) => input.value.trim() != "";

const validationsLogin = [
    body("email")
      .notEmpty()
      .bail()
      .isEmail()
      .withMessage("El email debe ser con el formato 'juan@example.com'"),
    body("password")
      .notEmpty()
      .withMessage("Debes completar el password")
      .bail()
      .isLength({ min: 8 })
      .withMessage("La contraseña debe contener al menos 8 caracteres"),
  ];

window.addEventListener("load", function () {

    const formulario = document.querySelector(".form");
    const inputs = formulario.querySelectorAll("input");       

    // Inputs Focus
    inputs.forEach((input) => {
        input.addEventListener("focus", function () {
            input.style.backgroundColor = "rgba(37, 92, 209, 0.397)";
        });
        input.addEventListener("blur", function( ) {
            input.style.backgroundColor = "";
        });
    });

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const errores = [];   
        
        validationsLogin.forEach((inputToValidate) => {
            const input = formulario[inputToValidate.inputName];
            for (const validation of inputToValidate.validations) {
                const isValid = validation.validator(input);
                if (!isValid) {
                    errores.push(validation.withMessage);
                    input.parentElement.classList.add("is-invalid");
                    input.parentElement.classList.remove("is-valid");
                    input.parentElement.querySelector(".error").innerHTML = validation.withMessage;
                    return;
                } else {
                    input.parentElement.classList.add("is-valid");
                    input.parentElement.classList.remove("is-invalid");
                    input.parentElement.querySelector(".error").innerHTML = "";
                }
            }
        });
        
        if (errores.length == 0) {
            // formulario.submit();
            console.log("No hay errores");
        } else {
            console.log(errores);
        }
    })
})

