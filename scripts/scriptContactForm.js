const contactForm = document.forms["myForm"];

contactForm.addEventListener("submit", function (submitEvent) {
  submitEvent.preventDefault();

  firstName.blur();
  lastName.blur();
  email.blur();
  confirmEmail.blur();
  phone.blur();
  address.blur();
  textareaMessage.blur();

  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isAddressValid = validateAddress();
  const isMessageValid = validateMessage();

  if (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isAddressValid &&
    isMessageValid
  ) {
    const userData = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      address: address.value.trim(),
      country: countrySelect.options[countrySelect.selectedIndex].text,
      message: textareaMessage.value.trim(),
    };

    console.log("Form submitted successfully!");
    console.log("User Input Data:", userData);
  } else {
    console.log("Form validation failed. Please correct the errors.");
  }
});
let isValid = true;

const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("mail");
const confirmEmail = document.getElementById("confirmMail");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const countrySelect = document.getElementById("country");
const textareaMessage = document.getElementById("input");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const confirmEmailError = document.getElementById("confirmEmailError");
const phoneError = document.getElementById("phoneError");
const addressError = document.getElementById("addressError");
const textareaErrorShort = document.getElementById("textareaErrorShort");
const textareaErrorLong = document.getElementById("textareaErrorLong");

//regular expression for validation of a name with only letters (no numbers or special characters) and a length between 1 and 20 characters.
const nameRegex = /^[A-Za-z]{1,20}$/;

//regular expression for validation of the format that the email should have.
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

//regular expression for validation of phone numbers that must be exactly 14 digits long.
const phoneRegex = /^\+30[-\s]?\d{10}$/;

//regular expression for validation of an address.
const addressRegex = /^[A-Za-z0-9\s,.-/#]{5,20}$/;

function validateFirstName() {
  const firstNameInput = firstName.value.trim();
  firstNameError.classList.add("hidden");

  if (firstNameInput === "" || !nameRegex.test(firstNameInput)) {
    firstNameError.classList.remove("hidden");
    return false;
  } else {
    return true;
  }
}

function validateLastName() {
  const lastNameInput = lastName.value.trim();
  lastNameError.classList.add("hidden");

  if (lastNameInput === "" || !nameRegex.test(lastNameInput)) {
    lastNameError.classList.remove("hidden");
    return false;
  } else {
    return true;
  }
}

function validateEmail() {
  const emailInput = email.value.trim();
  const confirmEmailInput = confirmEmail.value.trim();
  emailError.classList.add("hidden");
  confirmEmailError.classList.add("hidden");

  if (emailInput === "" || !emailRegex.test(emailInput)) {
    emailError.classList.remove("hidden");
    return false;
  }
  if (emailInput !== confirmEmailInput) {
    confirmEmailError.classList.remove("hidden");
    return false;
  } else {
    return true;
  }
}

function validatePhone() {
  const phoneInput = phone.value.trim();
  phoneError.classList.add("hidden");

  if (phoneInput === "" || !phoneRegex.test(phoneInput)) {
    phoneError.classList.remove("hidden");
    return false;
  } else {
    return true;
  }
}

function validateAddress() {
  const addressInput = address.value.trim();
  addressError.classList.add("hidden");

  if (addressInput === "" || !addressRegex.test(addressInput)) {
    addressError.classList.remove("hidden");
    return false;
  } else {
    return true;
  }
}
function validateMessage() {
  const messageInput = textareaMessage.value.trim();
  textareaErrorShort.classList.add("hidden");
  textareaErrorLong.classList.add("hidden");

  if (messageInput.length < 1) {
    textareaErrorShort.classList.remove("hidden");
    return false;
  }
  if (messageInput.length > 200) {
    textareaErrorLong.classList.remove("hidden");
    return false;
  } else {
    return true;
  }
}

firstName.addEventListener("blur", validateFirstName);
firstName.addEventListener("focus", () => {
  firstNameError.classList.add("hidden");
});

lastName.addEventListener("blur", validateLastName);
lastName.addEventListener("focus", () => {
  lastNameError.classList.add("hidden");
});

email.addEventListener("blur", validateEmail);
email.addEventListener("focus", () => {
  emailError.classList.add("hidden");
});

confirmEmail.addEventListener("blur", validateEmail);
confirmEmail.addEventListener("focus", () => {
  confirmEmailError.classList.add("hidden");
});

phone.addEventListener("blur", validatePhone);
phone.addEventListener("focus", () => {
  phoneError.classList.add("hidden");
});

address.addEventListener("blur", validateAddress);
address.addEventListener("focus", () => {
  addressError.classList.add("hidden");
});

textareaMessage.addEventListener("blur", validateMessage);
textareaMessage.addEventListener("focus", () => {
  textareaErrorShort.classList.add("hidden");
  textareaErrorLong.classList.add("hidden");
});
