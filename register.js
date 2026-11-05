const form = document.getElementById("registrationForm");


// REGULAR EXPRESSIONS

const namePattern = /^[A-Za-z ]{3,40}$/;

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const mobilePattern = /^[6-9][0-9]{9}$/;

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/;


// ERROR FUNCTION

function showError(id, message) {

    document.getElementById(id).textContent = message;

}


// CLEAR ERRORS

function clearErrors() {

    document.querySelectorAll(".error").forEach(error => {

        error.textContent = "";

    });

    document.getElementById("successMessage").textContent = "";

}


// FORM SUBMISSION

form.addEventListener("submit", function(event) {

    event.preventDefault();

    clearErrors();

    let isValid = true;


    // 1. NAME VALIDATION

    const name = document.getElementById("name").value.trim();

    if (name === "") {

        showError("nameError", "Name is required.");

        isValid = false;

    } else if (!namePattern.test(name)) {

        showError("nameError", "Enter a valid name (3-40 letters).");

        isValid = false;

    }


    // 2. EMAIL VALIDATION

    const email = document.getElementById("email").value.trim();

    if (email === "") {

        showError("emailError", "Email is required.");

        isValid = false;

    } else if (!emailPattern.test(email)) {

        showError("emailError", "Enter a valid email address.");

        isValid = false;

    }


    // 3. MOBILE VALIDATION

    const mobile = document.getElementById("mobile").value.trim();

    if (mobile === "") {

        showError("mobileError", "Mobile number is required.");

        isValid = false;

    } else if (!mobilePattern.test(mobile)) {

        showError("mobileError", "Enter a valid 10-digit Indian mobile number.");

        isValid = false;

    }


    // 4. PASSWORD VALIDATION

    const password = document.getElementById("password").value;

    if (password === "") {

        showError("passwordError", "Password is required.");

        isValid = false;

    } else if (!passwordPattern.test(password)) {

        showError(
            "passwordError",
            "Use 8+ characters with uppercase, lowercase, number and special character."
        );

        isValid = false;

    }


    // 5. CONFIRM PASSWORD VALIDATION

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (confirmPassword === "") {

        showError("confirmPasswordError", "Please confirm your password.");

        isValid = false;

    } else if (password !== confirmPassword) {

        showError("confirmPasswordError", "Passwords do not match.");

        isValid = false;

    }


    // 6. COURSE VALIDATION

    const course = document.getElementById("course").value;

    if (course === "") {

        showError("courseError", "Please select your course.");

        isValid = false;

    }


    // 7. YEAR VALIDATION

    const year = document.getElementById("year").value;

    if (year === "") {

        showError("yearError", "Please select your academic year.");

        isValid = false;

    }


    // 8. GENDER VALIDATION

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!gender) {

        showError("genderError", "Please select your gender.");

        isValid = false;

    }



    const terms = document.getElementById("terms").checked;

    if (!terms) {

        showError("termsError", "Please accept the Terms and Conditions.");

        isValid = false;

    }


    // FINAL RESULT

    if (isValid) {

        document.getElementById("successMessage").textContent =
            "Registration successful! Thank you for registering.";

        form.reset();

    }

});