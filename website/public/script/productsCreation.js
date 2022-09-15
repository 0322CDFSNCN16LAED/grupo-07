window.addEventListener('load', () => {

    const formulario = document.querySelector(".form");
    const type = formulario.querySelector("#type");
    const description = formulario.querySelector("#description");
    const numbers = formulario.querySelectorAll("#number");

    type.addEventListener("change", function (){
        const spanType = formulario.querySelector("#spanType")
        if (type.value.length < 6){
            type.parentElement.classList.add("is-invalid");
            type.parentElement.classList.remove("is-valid");
            spanType.innerHTML = "El nombre de la tabla debe tener al menos 6 letras."
            spanType.style.color = "red";
        } else {
            type.parentElement.classList.add("is-valid");
            type.parentElement.classList.remove("is-invalid");
            spanType.innerHTML = "";
        }
    })

    description.addEventListener("change", function (){
        const spanDescription = formulario.querySelector("#spanType")
        if (description.value.length < 20){
            description.parentElement.classList.add("is-invalid");
            description.parentElement.classList.remove("is-valid");
            spanDescription.innerHTML = "La descripción de la tabla no debe estar vacio y debe contener al menos 20 caracteres."
            spanDescription.style.color = "red";
        } else {
            description.parentElement.classList.add("is-valid");
            description.parentElement.classList.remove("is-invalid");
            spanDescription.innerHTML = "";
        }
    })

    numbers.forEach((number) => {
        number.addEventListener("change", function (){
            const spanNumber = document.querySelectorAll("#spanNumber")
            if (number.value.trim() == "") {
                number.parentElement.classList.add("is-invalid");
                number.parentElement.classList.remove("is-valid");
                spanNumber.innerHTML = "El campo no debe estár vacío."
                spanNumber.style.color = "red"
            } else {
                number.parentElement.classList.add("is-valid");
                number.parentElement.classList.remove("is-invalid");
                spanNumber.innerHTML = "";
            }
        })
    })
})
