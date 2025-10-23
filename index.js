let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

// Toggle slider and form movement
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

// Dummy Login Functionality
function handleLogin() {
    let email = document.querySelector(".login-box .email").value;
    let password = document.querySelector(".login-box .password").value;

    if (email === "mritesh108" && password === "paggal108") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert("Invalid Username or Password!");
    }
}

// Dummy Signup Functionality
function handleSignup() {
    let name = document.querySelector(".signup-box .name").value;
    let email = document.querySelector(".signup-box .email").value;
    let password = document.querySelectorAll(".signup-box .password")[0].value;
    let confirmPassword = document.querySelectorAll(".signup-box .password")[1].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Signup Successful! Please Login.");
        window.location.href = "index.html";
    }
}