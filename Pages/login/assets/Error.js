function validateForm(event) {
    let inputs = document.querySelectorAll('.Box-User input');
    let errors = document.querySelectorAll('.Box-User .error');
    let valid = true;

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) {
            errors[i].style.display = 'block';
            valid = false;
        } else {
            errors[i].style.display = 'none';
        }
    }

    if (!valid) {
        event.preventDefault();
    }
}

// Ocultar mensagens de erro inicialmente
let errors = document.querySelectorAll('.Box-User .error');
errors.forEach(error => {
    error.style.display = 'none';
});