const form = document.getElementById('userForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from submitting

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    // Validation
    if (name === "") {
        errorMessage.textContent = "Name cannot be empty!";
        return;
    }

    if (email === "" || !email.includes("@")) {
        errorMessage.textContent = "Enter a valid email!";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters!";
        return;
    }

    // If everything is correct
    errorMessage.style.color = "green";
    errorMessage.textContent = "Form submitted successfully!";
});
