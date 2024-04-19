document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let teclaEnviar = document.getElementById('submit').onclick
    document.getElementById("contactForm").addEventListener("submit" || teclaEnviar 
        , function(event) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var nameError = document.getElementById("nameError");
        var emailError = document.getElementById("emailError");
        var messageError = document.getElementById("messageError");


        if (name === "") {
            nameError.textContent = "Por favor, insira seu nome.";
            event.preventDefault();
        }else{nameError.textContent = ''}

        if (email === "") {
            emailError.textContent = "Por favor, insira seu email.";
            
        } else if (!isValidEmail(email)) {
            emailError.textContent = "Email inválido.";
            event.preventDefault();
            
        } else{emailError.textContent = ''}

        if (message === "") {
            messageError.textContent = "Por favor, insira uma mensagem.";
            event.preventDefault();
            
        }else{
            messageError.textContent = "";
        }
    });

    function isValidEmail(email) {
        // Expressão regular para validar o formato do email
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }