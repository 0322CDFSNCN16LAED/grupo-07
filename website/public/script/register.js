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

    const password = document.querySelector("#password");
    const firstName = document.querySelector('#first_name');
    const lastName = document.querySelector('#last_name');
    const dni = document.querySelector('#dni');
    const email = document.querySelector('#email');
    const address = document.querySelector('#address');

    firstName.addEventListener("change", function (){
        const spanFirstName = document.querySelector('#spanFirstName');
        if ( firstName.value.length < 3 ){
            firstName.parentElement.classList.add("is-invalid");
            firstName.parentElement.classList.remove("is-valid");
            spanFirstName.innerHTML = "El nombre debe contener al menos 3 letras";
            spanFirstName.style.color = "red";
        } else {
            firstName.parentElement.classList.add("is-valid");
            firstName.parentElement.classList.remove("is-invalid");  
            spanFirstName.innerHTML = "";
        }
    });

    lastName.addEventListener("change", function (){
        const spanLastName = document.querySelector('#spanLastName');
        if ( lastName.value.length < 3 ){
            lastName.parentElement.classList.add("is-invalid");
            lastName.parentElement.classList.remove("is-valid");
            spanLastName.innerHTML = "El apellido debe contener al menos 3 letras";
            spanLastName.style.color = "red";
        } else {
            lastName.parentElement.classList.add("is-valid");
            lastName.parentElement.classList.remove("is-invalid");  
            spanLastName.innerHTML = "";
        }
    });

    dni.addEventListener("keyup", function (){
        const spanDni = document.querySelector('#spanDni');
        if (dni.value.length = 8){
            dni.parentElement.classList.add("is-valid");
            dni.parentElement.classList.remove("is-invalid");
            spanDni.innerHTML = ""; 
        } else {
            dni.parentElement.classList.add("is-invalid");
            dni.parentElement.classList.remove("is-valid");
            spanDni.innerHTML = "El DNI contiene 8 digitos";
            spanDni.style.color = "red";
    }});

    email.addEventListener("change", function (){
        const spanEmail = document.querySelector('#spanEmail');
        if (email.value.length > 10 && email.value.includes("@")){
            email.parentElement.classList.add("is-valid");
            email.parentElement.classList.remove("is-invalid");  
            spanEmail.innerHTML = "";
        } else {
            spanEmail.innerHTML = "El email debe ser con el formato 'juan@example.com'";
            spanEmail.style.color = "red";
            email.parentElement.classList.add("is-invalid");
            email.parentElement.classList.remove("is-valid"); 
    }});

    address.addEventListener("keyup", function (){
        const spanAddress = document.querySelector('#spanAddress');
        if (address.value.length > 6){
            address.parentElement.classList.add("is-valid");
            address.parentElement.classList.remove("is-invalid");  
            spanAddress.innerHTML = "";
        } else {
            spanAddress.innerHTML = "Debes ingresar una dirección real";
            spanAddress.style.color = "red";
            address.parentElement.classList.add("is-invalid");
            address.parentElement.classList.remove("is-valid"); 
    }});
    
    
    const spanPassword = document.querySelector('#spanPassword');
    password.addEventListener("keyup", function (){
        if (password.value >8){
            password.parentElement.classList.add("is-valid");
            password.parentElement.classList.remove("is-invalid");  
        } else {
            password.parentElement.classList.add("is-invalid");
            password.parentElement.classList.remove("is-valid"); 
    }});
    // Password ayuda al crearla
    password.addEventListener("keyup", function(){
        const meter = document.querySelector("#meter")
        
        const medium = new RegExp("(?=.{10,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])");
        const fuerte = new RegExp("(?=.{20,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9])))");
        if (fuerte.test(password.value)) {
            spanPassword.innerHTML = "Contraseña segura!";
            spanPassword.style.color = "green";
            meter.value = 100;
            meter.style.color = "green";
        } else if (medium.test(password.value)) {
            spanPassword.innerHTML = "Contraseña regular!";
            spanPassword.style.color = "Orange";
            meter.value = 80;
            meter.style.color = "Orange";
        } else {
            spanPassword.innerHTML = "Contraseña debil!"
            spanPassword.style.color = "red";
            meter.value = 20;
            meter.style.color = "red";
        }
    })
});