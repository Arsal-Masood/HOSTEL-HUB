// Predefined valid user credentials
const validUser = {
    email: "test@kiet.edu",
    password: "123"
};

// Form submission handler
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if (email === validUser.email && password === validUser.password) {
        // Redirect to the next page if credentials are valid
        window.location.href = "hostellist.html";
    } else {
        // Show an error message if credentials are invalid
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
        errorMessage.textContent = "Invalid email or password.";
    }
});
