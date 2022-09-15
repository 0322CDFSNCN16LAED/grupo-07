window.addEventListener('load', () => {

    let type = formulario.querySelector("input #type");
    let description = formulario.querySelector("input #description");
    let numbers = formulario.querySelectorAll("input #number");

        if (type.value.trim() == ""){
            errores.push("Nombre tabla vacío");
            type.parentElement.classList.add("is-invalid");
            type.parentElement.classList.remove("is-valid");
            type.parentElement.innerHTML = "El nombre de la tabla no debe estar vacio"
        } else if (type.value.length < 6){
            errores.push("Nombre tabla < 6");
            type.parentElement.classList.add("is-invalid");
            type.parentElement.classList.remove("is-valid");
            type.parentElement.innerHTML = "El nombre de la tabla debe tener al menos 6 letras."
        } else {
            type.parentElement.classList.add("is-valid");
            type.parentElement.classList.remove("is-invalid");
            type.parentElement.innerHTML = "";
        }

        if (description.value.trim() == "" || description.value.length < 20){
            errores.push("Nombre tabla vacío");
            description.parentElement.classList.add("is-invalid");
            description.parentElement.classList.remove("is-valid");
            description.parentElement.innerHTML = "La descripción de la tabla no debe estar vacio y debe contener al menos 20 caracteres."
        } else {
            description.parentElement.classList.add("is-valid");
            description.parentElement.classList.remove("is-invalid");
            description.parentElement.innerHTML = "";
        }
       
        if (numbers.value.trim() == "") {
            errores.push("Nombre tabla vacío");
            numbers.parentElement.classList.add("is-invalid");
            numbers.parentElement.classList.remove("is-valid");
            numbers.parentElement.innerHTML = "El campo no debe estár vacío."
        } else {
            numbers.parentElement.classList.add("is-valid");
            numbers.parentElement.classList.remove("is-invalid");
            numbers.parentElement.innerHTML = "";
        }


})
