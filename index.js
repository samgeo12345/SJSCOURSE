document.addEventListener("DOMContentLoaded", function() {
    // Elements related to Login
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const login = document.getElementById("login");

    // Elements related to Sign Up
    const email = document.getElementById("email");
    const passwords = document.getElementById("passwords");
    const signin = document.getElementById("signin");

    const users=document.getElementById("user");
    const passes=document.getElementById("pass");

    // Handle Login
    login.addEventListener("click", function(event) {
        event.preventDefault();  // Prevents form from submitting automatically
        if (username.checkValidity() && password.checkValidity()) {
            const user = username.value.trim();
            const pass = password.value.trim();

            const storedEmail = localStorage.getItem("emails").split("@")[0];
            const storedPassword = localStorage.getItem("passwordss");

            if (user === storedEmail && pass === storedPassword) {
                window.location.href = "main.html";
            } else {
                username.classList.add("user-input");
                users.classList.add("label-user");
                password.classList.add("pass-input");
                passes.classList.add("label-pass");
            }
        } else {
            if(username.value.trim()==="" && password.value.trim()===""){
                username.reportValidity(); 
            }
            else if(username.value.trim()===""){
                username.reportValidity(); 
            }
            else{
                password.reportValidity();
            }
            // Trigger validation message for username
              // Trigger validation message for password
        }
    });

    // Handle Sign Up
    signin.addEventListener("click", function(event) {
        event.preventDefault();  // Prevents form from submitting automatically
        if (email.checkValidity() && passwords.checkValidity()) {
            const emails = email.value.trim();
            const passwordss = passwords.value.trim();
            localStorage.setItem("emails", emails);
            localStorage.setItem("passwordss", passwordss);
            alert("Account created successfully!");
            window.location.href = "main.html";
        } else {
            if(email.value.trim()==="" && passwords.value.trim()===""){
                email.reportValidity(); 
            }
            else if(email.value.trim()===""){
                email.reportValidity(); 
            }
            else{
                passwords.reportValidity();
            } // Trigger validation message for password
        }
    });

    // Toggle between login and sign-up forms
    const signinform = document.getElementById("signinform");
    const signindiv = document.getElementById("signindiv");
    const loginform = document.getElementById("loginform");
    const loginback = document.getElementById("loginback");

    signinform.addEventListener("click", function() {
        loginform.style.display = "none";
        signindiv.style.display = "block";
    });

    loginback.addEventListener("click", function() {
        loginform.style.display = "block";
        signindiv.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded",function(){
    const left=document.getElementById("left");
    const right=document.getElementById("right");
    const tablescroll=document.getElementById("tablescroll");
    left.addEventListener("click",function(){
        tablescroll.scrollBy({left:-100,behavior:'smooth'});
    });
    right.addEventListener("click",function(){
        tablescroll.scrollBy({left:100,behavior:'smooth'});
    });
});