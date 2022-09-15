window.addEventListener("load", function () {

    const formulario = document.querySelector(".form")

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputs = formulario.querySelector("inputs")

        let errors = [];

        inputs.forEach((input) => {
            if (input.value == ""){
                errors.push(input.value);
                input.classList.add('is-invalid');  
            }
        })
        
        if (Object.values(errors).length == 0) formulario.submit();
    });
})
