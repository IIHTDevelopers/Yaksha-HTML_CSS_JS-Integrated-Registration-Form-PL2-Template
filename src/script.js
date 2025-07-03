(function initializeRegistrationForm() {
  function getEl(id) {
    return typeof document !== "undefined" ? document.getElementById(id) : null;
  }

  const elements = {
    form: getEl('registerForm'),
    name: getEl('name'),
    email: getEl('email'),
    emailCheck: getEl('emailCheck'),
    dob: getEl('dob'),
    age: getEl('age'),
    password: getEl('password'),
    confirmPassword: getEl('confirmPassword'),
    terms: getEl('terms'),
    outputMessage: getEl('outputMessage'),
    submitBtn: getEl('submitBtn'),

    nameError: getEl('nameError'),
    emailError: getEl('emailError'),
    dobError: getEl('dobError'),
    passwordError: getEl('passwordError'),
    confirmPasswordError: getEl('confirmPasswordError'),
    termsError: getEl('termsError')
  };

  const emailRegex = "";
  const strongPassword = "";

  function showFieldError(field, message) {
  }

  function clearFieldError(field) {
  }

  function validateField(field) {
  }

  function calculateAge() {
  }

  function toggleVisibility(id) {
  }

  function isFormCompletelyValid() {
  }

  function validateForm() {
  }

  function clearForm() {
  }

  function updateSubmitState() {
    elements.submitBtn.disabled = !isFormCompletelyValid();
  }

  function setupEvents() {
    elements.form.addEventListener("submit", function (e) {
      e.preventDefault();
      validateForm();
    });

    elements.terms.addEventListener("change", updateSubmitState);

    ["name", "email", "dob", "password", "confirmPassword"].forEach((id) => {
      const field = elements[id];
      if (!field) return;

      field.addEventListener("blur", () => {
        validateField(field);
        updateSubmitState();
      });

      field.addEventListener("input", () => {
        validateField(field);
        updateSubmitState();

        if (id === "email") {
          elements.emailCheck.textContent = emailRegex.test(field.value) ? "✓" : "";
        }
      });
    });

    elements.dob.addEventListener("blur", calculateAge);

    if (typeof window !== "undefined") {
      window.toggleVisibility = toggleVisibility;
      window.clearForm = clearForm;
    }
  }

  function init() {
    setupEvents();
    updateSubmitState(); // disable on load
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
    window.toggleVisibility = toggleVisibility;
    window.clearForm = clearForm;
    window.calculateAge = calculateAge;
  }
})();
