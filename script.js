// ===============================
// REGISTRATION
// ===============================

let registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let mobile = document.getElementById("mobile").value;


        let user = {

            name: name,
            email: email,
            password: password,
            mobile: mobile

        };


        // Store user in Local Storage

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );


        alert("Registration Successful");


        // Go to Login page

        window.location.href = "index.html";

    });

}


// ===============================
// LOGIN
// ===============================

let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        let email =
            document.getElementById("loginEmail").value;

        let password =
            document.getElementById("loginPassword").value;


        // ===============================
        // ADMIN LOGIN
        // ===============================

        if (
            email === "admin@gmail.com" &&
            password === "admin123"
        ) {

            alert("Admin Login Successful");

            window.location.href = "admin.html";

            return;
        }


        // ===============================
        // USER LOGIN
        // ===============================

        let storedUser =
            localStorage.getItem("user");


        if (storedUser === null) {

            alert("Please Register First");

            return;
        }


        // Convert JSON string to object

        let user =
            JSON.parse(storedUser);


        // Check email and password

        if (
            email === user.email &&
            password === user.password
        ) {

            alert("User Login Successful");

            window.location.href = "user.html";

        }
        else {

            alert("Invalid Email or Password");

        }

    });

}