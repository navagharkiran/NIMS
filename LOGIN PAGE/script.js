document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Here, you can add login authentication logic
        alert("Login successful!");
    } else {
        alert("Please enter your username and password.");
    }
});