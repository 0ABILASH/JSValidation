var nameError = document.getElementById('name-error');
var addressError = document.getElementById('address-error');
var zipcodeError = document.getElementById('zipcode-error');
var phonenoError = document.getElementById('phoneno-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');

var nameAstrick = document.getElementById('name-astrick');
var phoneAstrick = document.getElementById('phone-astrick');
var emailAstrick = document.getElementById('email-astrick');
var addressAstrick = document.getElementById('address-astrick');
var zipcodeAstrick = document.getElementById('zipcode-astrick');
var passwordAstrick = document.getElementById('password-astrick');
var confirmAstrick = document.getElementById('confirmpass-astrick');

function validateName() {
    var name = document.getElementById("contact-name").value;

    if (name.length >= 1 && name.length <= 12) {
        document.getElementById("name-error-message").innerHTML = '';
        nameAstrick.innerHTML = '*';
        document.getElementById("contact-name").style.borderColor = "red";

    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/) && name.length >= 1) {
        nameError.innerHTML = "Write Proper Name";
        document.getElementById("name-error-message").innerHTML = '';
        nameAstrick.innerHTML = '*';
        document.getElementById("contact-name").style.borderColor = "red";
        return false;
    }
    else if (name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = '<i class="fas fa-check-circle"></i>',
            nameAstrick.innerHTML = ' ';
        document.getElementById("contact-name").style.borderColor = "black";
        return true;
    }
}
function validateAddress() {
    var address = document.getElementById('contact-address').value;
    var required = 30;
    var left = required - address.length;
    if (left > 0) {
        addressError.innerHTML = left + 'More character minimum';
        addressAstrick.innerHTML = '*';
        document.getElementById("contact-address").style.borderColor = "red";
        document.getElementById("address-error-message").innerHTML = '';
        return false;
    }
    addressError.innerHTML = '<i class="fas fa-check-circle"></i>';
    document.getElementById("address-error-message").innerHTML = '';
    addressAstrick.innerHTML = ' ';
    document.getElementById("contact-address").style.borderColor = "black";
    return true;
}
function validateZipcode() {
    var code = document.getElementById('contact-zipcode').value;
    if (code.length == ' ' || code.length <= 5) {
        zipcodeError.innerHTML = 'ZipCode Required';
        zipcodeAstrick.innerHTML = '*';
        document.getElementById("contact-zipcode").style.borderColor = "red";
        document.getElementById("zipcode-error-message").innerHTML = '';
    }
    if (code.length == 6) {
        zipcodeError.innerHTML = '<i class="fas fa-check-circle"></i>',
            zipcodeAstrick.innerHTML = ' ';
        document.getElementById("contact-zipcode").style.borderColor = "black";
        document.getElementById("zipcode-error-message").innerHTML = '';
        return true;
    }
}
function validatePhoneno() {
    var phonenunber = document.getElementById('contact-phoneno').value;
    if (phonenunber.length == ' ') {
        phonenoError.innerHTML = "Enter PhoneNo",
            phoneAstrick.innerHTML = '*';
        document.getElementById("contact-phoneno").style.borderColor = "red";
        document.getElementById("phone-error-message").innerHTML = '';
        return false;
    }
    if (phonenunber.length == 10) {
        phonenoError.innerHTML = '<i class="fas fa-check-circle"></i>',
            document.getElementById("contact-phoneno").style.borderColor = "black";
        phoneAstrick.innerHTML = ' ';
        return true;
    }
    if (!phonenunber.match(/^[0-9]{10}&/)) {
        phonenoError.innerHTML = "Invalid PhoneNumber";
        phoneAstrick.innerHTML = '*';
        document.getElementById("contact-phoneno").style.borderColor = "red";
        document.getElementById("phone-error-message").innerHTML = '';
        return false;
    }
    if (phonenunber.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
        phonenoError.innerHTML = '<i class="fas fa-check-circle"></i>',
            phoneAstrick.innerHTML = ' ';
        return true;
    }
}
function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == ' ') {
        emailError.innerHTML = "Enter the Email";
        document.getElementById("contact-email").style.borderColor = "red";
        emailAstrick.innerHTML = '*';
        document.getElementById("email-error-message").innerHTML = '';
        return false;
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = "Enter the proper mail";
        emailAstrick.innerHTML = '*';
        document.getElementById("contact-email").style.borderColor = "red";
        document.getElementById("email-error-message").innerHTML = '';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>',
        document.getElementById("contact-email").style.borderColor = "black";
    emailAstrick.innerHTML = ' ';
    return true;
}
function validatepassword() {
    var password = document.getElementById('user-password').value;
    if (password.length == ' ') {
        passwordError.innerHTML = "Enter the password";
        passwordAstrick.innerHTML = "*";
        document.getElementById("user-password").style.borderColor = "red";
        document.getElementById("password-error-message").innerHTML = '';
    }
    if (password.length < 5) {
        passwordError.innerHTML = "Password is weak";
        passwordAstrick.innerHTML = "*";
        document.getElementById("user-password").style.borderColor = "red";
        document.getElementById("password-error-message").innerHTML = '';
        return false;
    }
    if (password.length >= 6 && password.length <= 8) {
        passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
        passwordAstrick.innerHTML = " ";
        document.getElementById("user-password").style.borderColor = "black";
        return true;
    }
}

let nameMessageError = document.getElementById('name-error-message');
document.querySelector(".buttonsubmit").addEventListener("click", (event) => {
    event.preventDefault();
    validateInput();
});

function validateInput() {
    if (userName.value === "") {
        document.getElementById("name-error-message").innerHTML = "Enter Your Name";
        nameAstrick.innerHTML = '*';
        document.getElementById("contact-name").style.borderColor = "red";
    }
    if (phoneNo.value === "") {
        document.getElementById("phone-error-message").innerHTML = "Enter your Phone Number"
        phoneAstrick.innerHTML = '*';
        document.getElementById("contact-phoneno").style.borderColor = "red";
    }
    if (gmail.value === "") {
        document.getElementById("email-error-message").innerHTML = "Enter your Email Id"
        emailAstrick.innerHTML = '*';
        document.getElementById("contact-email").style.borderColor = "red";
    }
    if (address.value === "") {
        document.getElementById("address-error-message").innerHTML = "Enter your Address"
        addressAstrick.innerHTML = '*';
        document.getElementById("contact-address").style.borderColor = "red";
    }
    if (zipCode.value === "") {
        document.getElementById("zipcode-error-message").innerHTML = "Enter your Zipcode"
        zipcodeAstrick.innerHTML = '*';
        document.getElementById("contact-zipcode").style.borderColor = "red";
    }
    if (password.value === "") {
        document.getElementById("password-error-message").innerHTML = "Enter your Password"
        passwordAstrick.innerHTML = '*';
        document.getElementById("user-password").style.borderColor = "red";
    }
    else if (confirmPassword.value === "") {
        document.getElementById("confirm-error-message").innerHTML = "Enter your confirm password";
        confirmAstrick.innerHTML = '*';
        document.getElementById("confirm-password").style.borderColor = "red";
    }
}

// localstorage

var userName = document.getElementById('contact-name');
var phoneNo = document.getElementById('contact-phoneno');
var gmail = document.getElementById('contact-email');
var address = document.getElementById('contact-address');
var zipCode = document.getElementById('contact-zipcode');
var password = document.getElementById('user-password');
var confirmPassword = document.getElementById('confirm-pasword');

function submitted() {
    localStorage.setItem("Name", userName.value);
    localStorage.setItem("phoneno", phoneNo.value);
    localStorage.setItem("gmail", gmail.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("zipcode", zipCode.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("confirm password", confirmPassword.value);

    let popup = document.getElementById('popup');

    var pass = document.getElementById("user-password").value;
    var conPass = document.getElementById("confirm-pasword").value;
    console.log(pass, conPass);

    let message = document.getElementById("demo");
    if (pass.length != 0) {
        if (pass == conPass && validateName() == true && validateAddress() == true && validateZipcode() == true && validatePhoneno() == true && validateEmail() == true && validatepassword() == true) {

            popup.classList.add("open-popup");

            document.getElementById("demo").innerHTML = '<i class="fas fa-check-circle"></i>';

            document.getElementById("table").innerHTML = "Data Fetched From LocalStorange";

            document.getElementById("output-name").innerHTML = "UserName:-" + " " + localStorage.getItem("Name");

            let uname = document.querySelector("#contact-name");
            console.log("Username:-" + " " + uname.value);

            document.getElementById("output-phone").innerHTML = "phone number:-" + " " + localStorage.getItem("phoneno");

            let uphone = document.querySelector("#contact-phoneno");
            console.log("PhoneNO:-" + " " + uphone.value);
            
            document.getElementById("output-gmail").innerHTML = "MailId:-" + " " + localStorage.getItem("gmail");

            let uemail = document.querySelector("#contact-email");
            console.log("Gmail:-" + " " + uemail.value);

            document.getElementById("output-address").innerHTML = "Address:-" + " " + localStorage.getItem("address");

            let uaddress = document.querySelector("#contact-address");
            console.log("Address:-" + " " + uaddress.value);

            document.getElementById("output-zipcode").innerHTML = "zipcode:-" + " " + localStorage.getItem("zipcode");

            let uzipcode = document.querySelector("#contact-zipcode");
            console.log("Zipcode:-" + " " + uzipcode.value);

            let upassword = document.querySelector("#user-password");
            console.log("Password:-" + " " + upassword.value);

            let ucpassword = document.querySelector("#confirm-pasword");
            console.log("Confirm Password:-" + " " + ucpassword.value);
            return true;
            
        }
        else {
            if (conPass == '') {
                document.getElementById("confirm-error-message").innerHTML = '';
                return false;
            }
            message.textContent = "missmatched";
            document.get("result").innerHTML = "Browser does not support Web Storage.";
            return false;
        }
    }
}