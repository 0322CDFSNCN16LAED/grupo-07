window.addEventListener('load', () => {
    
    const email = document.querySelector('#email');
    const password = document.querySelector("#password");
    const spanPassword = document.querySelector('#spanPassword');

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
    
    password.addEventListener("keyup", function (){
        if (password.value.length >= 8){
            password.parentElement.classList.add("is-valid");
            password.parentElement.classList.remove("is-invalid");  
            spanPassword.innerHTML = "";
        } else {
            password.parentElement.classList.add("is-invalid");
            password.parentElement.classList.remove("is-valid"); 
            spanPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres";
            spanPassword.style.color = "red";
    }});
});