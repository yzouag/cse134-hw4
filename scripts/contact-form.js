function validateMessage() {
    let text_area = document.getElementById('message');
    let count = text_area.value.length;

    let info = document.getElementById('messageInfo');

    info.style.display = 'inline-block';
    info.style.color = 'green';
    info.style.opacity = '1';
    if (count < 10) {
        info.textContent = 'The message is too short';
        info.style.color = 'red';
    } else if (count <= 15) {
        info.textContent = `count: ${count}`;
        info.style.color = 'goldenrod';
    } else if (count < 495) {
        info.textContent = `count: ${count}`;
    } else if (count <= 500) {
        info.textContent = `count: ${count}`;
        info.style.color = 'goldenrod';
    } else {
        info.textContent = 'The message is too short';
        info.style.color = 'red';
    }
}

function validateName(event) {
    const name = event.target;
    const error = document.getElementById("nameError");
    if (name.validity.valueMissing) {
        name.setCustomValidity("name cannot be empty");
        error.className = "error active";
    }
    else if (name.validity.patternMismatch) {
        name.setCustomValidity("name has to be characters");
        error.className = "error active";
    }
    else {
        name.setCustomValidity("");
        error.className = "error";
    }
}

function validateEmail(event) {
    const input = event.target;
    const error = document.getElementById("emailError");
    if (input.validity.valueMissing) {
        input.setCustomValidity("email cannot be empty");
        error.className = "error active";
    }
    else if (input.validity.typeMismatch) {
        input.setCustomValidity("Email address is not valid");
        error.className = "error active";
    }
    else {
        input.setCustomValidity("");
        error.className = "error";
    }
}


function checkForm() {
    var formErrors = [];
    
    // Attach event listeners for each field
    const name = document.getElementById('name');
    name.addEventListener('input', validateName);
    const email = document.getElementById('email');
    email.addEventListener('input', validateEmail);
    const message = document.getElementById('message');
    message.addEventListener('input', validateMessage);
    
    // Before submitting the form, store the error data
    const btn = document.getElementById('form-button');
    btn.addEventListener('click', function (event) {
        console.log("here");
        if (email.validity.valueMissing) {
            formErrors.push({"field": "email", "error": "email is empty"});
        }
        else if (email.validity.typeMismatch) {
            formErrors.push({"field": "email", "error": "email not valid"});
        }
        else if (name.validity.valueMissing) {
            formErrors.push({"field": "name", "error": "name is empty"});
        }
        else if (name.validity.patternMismatch) {
            formErrors.push({"field": "name", "error": "name not valid"});
        }
        else if (!message.validity.valid) {
            formErrors.push({"field": "message", "error": "message not valid"});
        } else {
            document.getElementById('form-errors').value = JSON.stringify(formErrors);
        }
    });
}

document.addEventListener('DOMContentLoaded', checkForm);