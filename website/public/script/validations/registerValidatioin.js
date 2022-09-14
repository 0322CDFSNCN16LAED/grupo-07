window.addEventListener("load", function () {

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
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const dni = document.querySelector('#dni');
    const email = document.querySelector('#email');
    const address = document.querySelector('#address');
    const birthdate = document.querySelector('#birthdate');

    const acceptedExtensions = ['.jpg', '.png', '.gif'];
    
    // Inputs en el momento
    firstName.addEventListener("keyup", function (){
        if (firstName.value.length > 3){
            firstName.parentElement.classList.add("is-valid");
            firstName.parentElement.classList.remove("is-invalid");  
        } else {
            firstName.parentElement.classList.add("is-invalid");
            firstName.parentElement.classList.remove("is-valid"); 
        }});

    lastName.addEventListener("keyup", function (){
        if (lastName.value != ""){
            lastName.parentElement.classList.add("is-valid");
            lastName.parentElement.classList.remove("is-invalid");  
        } else {
            lastName.parentElement.classList.add("is-invalid");
            lastName.parentElement.classList.remove("is-valid"); 
    }});

    dni.addEventListener("keyup", function (){
        if (dni.value.length <= 8){
            dni.parentElement.classList.add("is-valid");
            dni.parentElement.classList.remove("is-invalid");  
        } else {
            dni.parentElement.classList.add("is-invalid");
            dni.parentElement.classList.remove("is-valid"); 
    }});

    email.addEventListener("change", function (){
        if (email.value.length > 10 && email.value.includes("@")){
            email.parentElement.classList.add("is-valid");
            email.parentElement.classList.remove("is-invalid");  
        } else {
            email.parentElement.classList.add("is-invalid");
            email.parentElement.classList.remove("is-valid"); 
    }});

    address.addEventListener("keyup", function (){
        if (address.value.length > 3){
            address.parentElement.classList.add("is-valid");
            address.parentElement.classList.remove("is-invalid");  
        } else {
            address.parentElement.classList.add("is-invalid");
            address.parentElement.classList.remove("is-valid"); 
    }});

    birthdate.addEventListener("keyup", function (){
        if (birthdate.value != ""){
            birthdate.parentElement.classList.add("is-valid");
            birthdate.parentElement.classList.remove("is-invalid");  
        } else {
            birthdate.parentElement.classList.add("is-invalid");
            birthdate.parentElement.classList.remove("is-valid"); 
    }});

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
        const spanPassword = document.querySelector('#spanPassword');
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
            meter.value = 10;
            meter.style.color = "red";
        }
    })

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const errores = [];
    
        //Hacer las validaciones
        inputs.forEach((input) => {
            const isValid = validationsLogin.validator(input);
            if (!isValid) {
              errores.push(validationsLogin.withMessage);
              input.parentElement.classList.add("is-invalid");
              input.parentElement.classList.remove("is-valid");
              input.parentElement.querySelector(".error").innerHTML =
              validationsLogin.withMessage;
              return;
            }
          input.parentElement.classList.add("is-valid");
          input.parentElement.classList.remove("is-invalid");
          input.parentElement.querySelector(".error").innerHTML = "";
        });
    
        //Si no fallaron las validaciones
        if (errores.length == 0) {
          // formulario.submit();
          console.log("No hay errores, yay!");
        } else {
          console.log(errores);
        }
      });
})
