// ==================== CONTACT.JS ====================
document.addEventListener("DOMContentLoaded", function () {
  initContactForm();
});

// ==================== CONTACT FORM WITH EMAILJS ====================
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  if (typeof emailjs === "undefined") {
    console.error("EmailJS not loaded");
    showEmailJSError();
    return;
  }

  const PUBLIC_KEY = "Icwqm4AkrLqkEP2O3";

  try {
    emailjs.init(PUBLIC_KEY);
  } catch (error) {
    console.error("❌ Failed to initialize EmailJS:", error);
  }

  contactForm.addEventListener("submit", handleFormSubmit);
  contactForm.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => validateField(input));
    input.addEventListener("blur", () => validateField(input));
  });
}

function showEmailJSError() {
  const formStatus = document.getElementById("formStatus");
  if (formStatus) {
    formStatus.innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      ${translations["form_error_service"] || "Email service not loaded. Please refresh the page or contact me directly at"} 
      <a href="mailto:minanasser82018@gmail.com">minanasser82018@gmail.com</a>
    `;
    formStatus.className = "form-status error";
    formStatus.style.display = "flex";
  }
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const formStatus = document.getElementById("formStatus");

  if (!validateForm(form)) {
    showFormStatus(
      formStatus,
      translations["form_error_fields"] ||
        "❌ Please fill all fields correctly",
      "error",
    );
    return;
  }

  const formData = {
    name: document.getElementById("name")?.value.trim() || "",
    email: document.getElementById("email")?.value.trim() || "",
    subject: document.getElementById("subject")?.value.trim() || "",
    message: document.getElementById("message")?.value.trim() || "",
    time: getCurrentTime(),
    date: getCurrentDate(),
  };

  if (!isValidEmail(formData.email)) {
    showFormStatus(
      formStatus,
      translations["form_error_email"] ||
        "❌ Please enter a valid email address",
      "error",
    );
    return;
  }

  // console.log("📧 Sending email with data:", formData);

  submitBtn.classList.add("loading");
  submitBtn.disabled = true;
  formStatus.style.display = "none";

  try {
    const SERVICE_ID = "service_dchjwzn";
    const TEMPLATE_ID = "template_om5mtdp";

    if (typeof emailjs === "undefined") {
      throw new Error("EmailJS not loaded");
    }

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: formData.time,
      date: formData.date,
      to_email: "minanasser82018@gmail.com",
    });

    // console.log("✅ EmailJS Response:", response);

    if (response && response.status === 200) {
      showFormStatus(
        formStatus,
        translations["form_success"] ||
          "✅ Message sent successfully! I'll get back to you soon.",
        "success",
      );
      form.reset();
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("❌ EmailJS Error:", error);
    showFormStatus(
      formStatus,
      translations["form_error_general"] ||
        "❌ Failed to send. Please try again.",
      "error",
    );
  } finally {
    submitBtn.classList.remove("loading");
    submitBtn.disabled = false;
  }
}

function showFormStatus(element, message, type) {
  if (!element) return;
  element.className = `form-status ${type}`;
  element.innerHTML = message;
  element.style.display = "flex";
  element.style.alignItems = "center";
  element.style.justifyContent = "center";
  element.style.gap = "8px";
  element.style.padding = "12px";
  element.style.borderRadius = "8px";
  element.style.marginBottom = "15px";
  element.style.fontSize = "14px";
  setTimeout(() => (element.style.display = "none"), 7000);
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;
  inputs.forEach((input) => {
    if (!validateField(input)) isValid = false;
  });
  return isValid;
}

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  removeFieldError(field);

  if (!value) {
    isValid = false;
    showFieldError(
      field,
      translations["form_error_required"] || "This field is required",
    );
  } else if (field.type === "email" && !isValidEmail(value)) {
    isValid = false;
    showFieldError(
      field,
      translations["form_error_email"] || "Please enter a valid email address",
    );
  }

  field.classList.toggle("error", !isValid);
  field.classList.toggle("valid", isValid);
  return isValid;
}

function showFieldError(field, message) {
  const formGroup = field.closest(".form-group");
  if (!formGroup) return;
  const error = document.createElement("span");
  error.className = "field-error";
  error.textContent = message;
  error.style.cssText = `
    position: absolute; bottom: -22px; left: 0; font-size: 0.75rem;
    color: #ef4444; animation: slideIn 0.3s ease; z-index: 1;
  `;
  formGroup.appendChild(error);
}

function removeFieldError(field) {
  const formGroup = field.closest(".form-group");
  if (formGroup) {
    const existingError = formGroup.querySelector(".field-error");
    if (existingError) existingError.remove();
  }
}

function getCurrentTime() {
  const now = new Date();
  const options = {
    timeZone: "Africa/Cairo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return now.toLocaleTimeString("en-US", options);
}

function getCurrentDate() {
  const now = new Date();
  const options = {
    timeZone: "Africa/Cairo",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return now.toLocaleDateString("en-US", options);
}
