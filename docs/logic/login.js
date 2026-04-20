// buttons
let loginBtn = document.getElementById("btn-login");
let signupBtn = document.getElementById("btn-signup");

// sections
let loginSection = document.getElementById("loginSection");
let signupSection = document.getElementById("signupSection");

// forms
let loginForm = document.getElementById("loginForm");
let signupForm = document.getElementById("signupForm");

// ================= TOGGLE =================

// show login
loginBtn.addEventListener("click", () => {
    loginSection.style.display = "block";
    signupSection.style.display = "none";
});

// show signup
signupBtn.addEventListener("click", () => {
    loginSection.style.display = "none";
    signupSection.style.display = "block";
});

// ================= SIGNUP =================
signupForm.addEventListener("submit", function(e){
    e.preventDefault();

    let name = signupForm.querySelector('input[type="text"]').value;
    let email = signupForm.querySelectorAll('input[type="email"]')[0].value;
    let password = signupForm.querySelectorAll('input[type="password"]')[0].value;
    let confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;

    if(password !== confirmPassword){
        alert("Passwords do not match ");
        return;
    }

    // save to localStorage
    let user = {
        name,
        email,
        password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful  Now login");

    signupForm.reset();

    // switch to login
    signupSection.style.display = "none";
    loginSection.style.display = "block";
});

// ================= LOGIN =================
loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    let email = loginForm.querySelector('input[type="email"]').value;
    let password = loginForm.querySelector('input[type="password"]').value;

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if(!savedUser){
        alert("No user found. Please signup first");
        return;
    }

    if(email === savedUser.email && password === savedUser.password){
        alert("Login successful 🎉");

        // redirect example (optional)
         window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password");
    }
});
signupForm.addEventListener("submit", function(e){
    e.preventDefault();

    let name = signupForm.querySelector('input[type="text"]').value;
    let email = signupForm.querySelector('input[type="email"]').value;
    let password = signupForm.querySelectorAll('input[type="password"]')[0].value;
    let confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;

    if(password !== confirmPassword){
        alert("Passwords do not match ❌");
        return;
    }

    // save user
    let user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful ✅");

    signupForm.reset();

    // 👉 YEH IMPORTANT PART
    signupSection.style.display = "none";
    loginSection.style.display = "block";
});