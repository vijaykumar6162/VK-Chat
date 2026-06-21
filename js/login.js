function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (!email || !password) {
        alert("Please enter Email and Password");
        return;
    }

    if (email === savedEmail && password === savedPassword) {
        alert("Login Successful");

        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Email or Password");
    }
}
