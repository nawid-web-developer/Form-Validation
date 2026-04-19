const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

const mobileSignUp = document.getElementById("mobileSignUp");
const mobileSignIn = document.getElementById("mobileSignIn");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

mobileSignUp.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

mobileSignIn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const signUpForm = document.getElementById("signUpForm");
const signInForm = document.getElementById("signInForm");

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const strongPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

// ===== Helper functions =====
function showError(input, message) {
  removeError(input);

  const error = document.createElement("small");
  error.style.color = "red";
  error.style.fontSize = "12px";
  error.innerText = message;

  input.parentNode.insertBefore(error, input.nextSibling);
}

function removeError(input) {
  const next = input.nextElementSibling;
  if (next && next.tagName === "SMALL") {
    next.remove();
  }
}

function clearErrors(form) {
  form.querySelectorAll("small").forEach((e) => e.remove());
}

// ===== SIGN UP VALIDATION =====
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors(signUpForm);

  const inputs = signUpForm.querySelectorAll("input");
  const name = inputs[0];
  const email = inputs[1];
  const password = inputs[2];

  let valid = true;

  if (name.value.trim() === "") {
    showError(name, "Name is required");
    valid = false;
  } else if (name.value.trim().length < 3) {
    showError(name, "At least 3 characters");
    valid = false;
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    showError(email, "Invalid email");
    valid = false;
  }

  if (password.value.trim() === "") {
    showError(password, "Password is required");
    valid = false;
  } else if (!strongPassword.test(password.value.trim())) {
    showError(password, "Min 6 chars + A/a/0-9");
    valid = false;
  }

  if (valid) {
    console.log("Sign Up Successful ✅");
  }
});

// ===== SIGN IN VALIDATION =====
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors(signInForm);

  const inputs = signInForm.querySelectorAll("input");
  const email = inputs[0];
  const password = inputs[1];

  let valid = true;

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    showError(email, "Invalid email");
    valid = false;
  }

  if (password.value.trim() === "") {
    showError(password, "Password is required");
    valid = false;
  }

  if (valid) {
    console.log("Sign In Successful ✅");
  }
});
