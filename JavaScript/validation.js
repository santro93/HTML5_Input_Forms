const text = document.querySelector("#name");
let nameerror = document.querySelector(".nameerror");
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
        nameerror.textContent = "";
    else
        nameerror.textContent = "Name is incorrect";
});

const mobile = document.querySelector("#mobile");
let mobileerror = document.querySelector(".mobileerror");
mobile.addEventListener('input', function () {
    let mobRegex = RegExp('^[0-9]{2,4}[ ]{1}[6-9]{1}[0-9]{9}$');
    if (mobRegex.test(mobile.value))
        mobileerror.textContent = "";
    else
        mobileerror.textContent = "Mobile format is incorrect";
});

const password = document.querySelector("#password");
let passerror = document.querySelector(".passworderror");
password.addEventListener('input', function () {
    let passRegex = RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[a-zA-Z0-9!@#$%^&*()_+=-]{8,}$');
    if (passRegex.test(password.value))
        passerror.textContent = "";
    else
        passerror.textContent = "Minimum 8 Characters";
});