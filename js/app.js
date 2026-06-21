// Register User
function register() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration Successful");
    window.location.href = "login.html";
}

// Login User
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
        alert("Login Successful");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Email or Password");
    }
}

// Logout
function logout() {
    window.location.href = "login.html";
}
