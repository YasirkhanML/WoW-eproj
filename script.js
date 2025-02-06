function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    if (email === "test@example.com" && password === "password") {
        localStorage.setItem("user", email); 
        window.location.href = "home.html"; 
    } else {
        document.getElementById("error-message").innerText = "Invalid email or password";
    }
}


window.onload = function() {
    if (window.location.pathname.includes("home.html") && !localStorage.getItem("user")) {
        window.location.href = "login.html"; 
    }
};

// Logout function
function logout() {
    localStorage.removeItem("user"); 
    window.location.href = "login.html"; 
}