// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  initLanguage(); // إضافة نظام الترجمة (هي دي المسؤولة عن تحميل الترجمات)
  initTheme();
  initAOS();
  initMobileMenu();
  initScrollEffects();
  initSmoothScroll();
  initContactForm();
  initRepositories();
  initIntersectionObserver();
  initCodeCopy();
  initScrollToTop();
  initGoToBottom();
  addValidationStyles();
});

// ==================== LANGUAGE MANAGEMENT ====================
let currentLanguage = localStorage.getItem("language") || "en";
let translations = {};

async function initLanguage() {
  const langDropdown = document.getElementById("langDropdown");
  const langOptions = document.querySelectorAll(".lang-option");
  const selectedLangSpan = document.querySelector(".selected-lang");

  // Load initial language
  await loadLanguage(currentLanguage);

  // تحديث النص المعروض في الزر حسب اللغة الحالية مع الأيقونة
  updateSelectedLanguageDisplay(selectedLangSpan);

  // تحديث حالة الـ active للغة الحالية
  updateActiveOption(currentLanguage);

  // Toggle dropdown menu
  if (langDropdown) {
    langDropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("active");
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (langDropdown && !langDropdown.contains(e.target)) {
      langDropdown.classList.remove("active");
    }
  });

  // Handle language selection
  langOptions.forEach((option) => {
    option.addEventListener("click", async (e) => {
      e.stopPropagation();
      const lang = option.getAttribute("data-lang");

      // Load new language
      currentLanguage = lang;
      await loadLanguage(currentLanguage);
      localStorage.setItem("language", currentLanguage);

      // تحديث واجهة المستخدم
      updateSelectedLanguageDisplay(selectedLangSpan);
      updateActiveOption(lang);

      // Close dropdown
      if (langDropdown) {
        langDropdown.classList.remove("active");
      }

      // Reinitialize AOS and Typed for new language
      setTimeout(() => {
        AOS.refresh();
        initTypingAnimation();
      }, 100);
    });
  });
}

async function loadLanguage(lang) {
  try {
    const response = await fetch(`./lang/${lang}.json`);
    translations = await response.json();

    // تحديث كل حاجة بعد تحميل الترجمات
    updateContent();
    updatePageDirection();
    updateRepositoriesLanguage();
    updateDropdownLanguage();
    updateAgeDisplay();
    updateLogoText(); // تحديث الـ Logo بعد تحميل الترجمات
    initTypingAnimation(); // إعادة تشغيل الـ Typing Animation

    console.log(`✅ Language loaded: ${lang}`);
  } catch (error) {
    console.error("❌ Failed to load language:", error);
  }
}

// دالة لتحديث نص الـ Logo
function updateLogoText() {
  const logoText = document.querySelector(".logo-text");
  if (!logoText) return;

  if (currentLanguage === "en") {
    logoText.textContent = translations["nav_name_logo"] || "Mina Nasser";
  } else {
    logoText.textContent = translations["nav_name_logo"] || "مينا ناصر";
  }
}

// دالة لتحديث المحتوى بالكامل
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[key]) {
      // استثناء لعناصر القائمة المنسدلة
      if (
        element.closest(".lang-option") ||
        element.classList.contains("selected-lang")
      ) {
        return;
      }

      // التحقق إذا كان العنصر هو education-text أو أي عنصر يحتوي على HTML
      if (
        element.classList.contains("education-text") ||
        key.includes("info_value_education")
      ) {
        // استخدام innerHTML لدعم الوسوم
        element.innerHTML = translations[key];
      }
      // Handle elements with icons or children
      else if (element.tagName === "A" || element.tagName === "BUTTON") {
        const icon = element.querySelector("i");
        const text = translations[key];
        if (icon && !element.classList.contains("lang-select-btn")) {
          // Keep the icon and update text
          element.innerHTML = `${text} `;
          element.appendChild(icon.cloneNode(true));
        } else if (!element.classList.contains("lang-select-btn")) {
          element.textContent = text;
        }
      } else {
        element.textContent = translations[key];
      }
    }
  });

  // Update form labels
  document.querySelectorAll("label[data-i18n]").forEach((label) => {
    const key = label.getAttribute("data-i18n");
    if (translations[key]) {
      label.textContent = translations[key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[key]) {
      element.placeholder = translations[key];
    }
  });

  // تحديث نص الـ Logo بشكل منفصل
  updateLogoText();
}

// دالة لتحديث الـ active class في القائمة
function updateActiveOption(lang) {
  document.querySelectorAll(".lang-option").forEach((option) => {
    const optionLang = option.getAttribute("data-lang");
    if (optionLang === lang) {
      option.classList.add("active");
    } else {
      option.classList.remove("active");
    }
  });
}

// دالة لتحديث نصوص القائمة المنسدلة مع أعلام flag-icons
function updateDropdownLanguage() {
  document.querySelectorAll(".lang-option").forEach((option) => {
    const lang = option.getAttribute("data-lang");
    const textSpan = option.querySelector(".lang-text");

    // مسح المحتوى القديم
    if (textSpan) {
      textSpan.innerHTML = "";

      // إنشاء عنصر العلم
      const flagSpan = document.createElement("span");
      flagSpan.className = lang === "en" ? "fi fi-us" : "fi fi-eg";

      textSpan.appendChild(flagSpan);
      textSpan.appendChild(
        document.createTextNode(
          " " +
            (translations[
              lang === "en" ? "nav_lang_btn_en" : "nav_lang_btn_ar"
            ] || (lang === "en" ? "English" : "العربية")),
        ),
      );
    }
  });
}

// دالة لتحديث النص المعروض في زر اللغة مع أعلام flag-icons
function updateSelectedLanguageDisplay(selectedLangSpan) {
  if (!selectedLangSpan) return;

  // مسح المحتوى القديم
  selectedLangSpan.innerHTML = "";

  if (currentLanguage === "en") {
    // إنشاء علم أمريكا
    const flagSpan = document.createElement("span");
    flagSpan.className = "fi fi-us";
    selectedLangSpan.appendChild(flagSpan);
    selectedLangSpan.appendChild(
      document.createTextNode(
        " " + (translations["nav_lang_btn_en"] || "English"),
      ),
    );
  } else {
    // إنشاء علم مصر
    const flagSpan = document.createElement("span");
    flagSpan.className = "fi fi-eg";
    selectedLangSpan.appendChild(flagSpan);
    selectedLangSpan.appendChild(
      document.createTextNode(
        " " + (translations["nav_lang_btn_ar"] || "العربية"),
      ),
    );
  }
}

function updatePageDirection() {
  const dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.documentElement.dir = dir;
  document.documentElement.lang = currentLanguage;
}

// تحديث نصوص المستودعات
function updateRepositoriesLanguage() {
  const viewText = translations["github_view"] || "View Repository";
  document.querySelectorAll(".repo-link").forEach((link) => {
    const icon = link.querySelector("i");
    const span = link.querySelector("span[data-i18n]");
    if (span) {
      span.textContent = viewText;
    } else if (icon) {
      link.innerHTML = `${viewText} `;
      link.appendChild(icon.cloneNode(true));
    } else {
      link.textContent = viewText;
    }
  });
}

// ==================== حساب العمر ====================
function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // تصحيح العمر إذا لم يحن عيد الميلاد بعد هذا العام
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function updateAgeDisplay() {
  const ageElement = document.getElementById("age-display");
  if (!ageElement) return;

  const birthDate = "2000-07-20"; // تاريخ ميلادك
  const age = calculateAge(birthDate);

  // عرض العمر مع الترجمة
  if (currentLanguage === "en") {
    ageElement.textContent = `${age} ${translations["info_value_age"] || "years old"}`;
  } else {
    ageElement.textContent = `${age} ${translations["info_value_age"] || "سنة"}`;
  }
}

// ==================== THEME MANAGEMENT ====================
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");

  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggle.innerHTML =
    savedTheme === "dark"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.innerHTML =
      newTheme === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
  });
}

// ==================== AOS INITIALIZATION ====================
function initAOS() {
  AOS.init({
    duration: 800,
    once: true,
    offset: 50,
    easing: "ease-in-out",
    disable: window.innerWidth < 768,
  });
}

// ==================== TYPING ANIMATION ====================
function initTypingAnimation() {
  if (typeof Typed === "undefined") return;

  // Destroy existing instances if any
  if (window.typed1) window.typed1.destroy();
  if (window.typed2) window.typed2.destroy();

  // التأكد من وجود الترجمات
  const greeting1 =
    translations["typing_greeting"] || "HI, I'm Mina Nasser Enjilizy";
  const greeting2 = translations["typing_welcome"] || "Welcome to my Portfolio";

  const devStrings = [
    translations["typing_dev"] || ".NET Full Stack Developer",
    translations["typing_architect"] || "Software Architect",
    translations["typing_microservices"] || "Microservices Specialist",
    translations["typing_cqrs"] || "CQRS Clean Architecture",
    translations["typing_rabbitmq"] || "RabbitMQ Expert",
    translations["typing_testing"] || "Unit Testing Advocate",
    translations["typing_devops"] || "DevOps Enthusiast",
    translations["typing_signalr"] || "SignalR Enthusiast",
    translations["typing_angular"] || "Angular Enthusiast",
  ];

  window.typed1 = new Typed("#typing1", {
    strings: [greeting1, greeting2],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 5000,
    showCursor: false,
    cursorChar: "|",
  });

  window.typed2 = new Typed("#typing2", {
    strings: devStrings,
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 1000,
    showCursor: false,
    cursorChar: "|",
  });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  document.body.appendChild(overlay);

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu(menuBtn, navLinks, overlay);
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu(menuBtn, navLinks, overlay);
    });
  });

  overlay.addEventListener("click", () => {
    closeMenu(menuBtn, navLinks, overlay);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      closeMenu(menuBtn, navLinks, overlay);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
      closeMenu(menuBtn, navLinks, overlay);
    }
  });
}

function toggleMenu(menuBtn, navLinks, overlay) {
  menuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = navLinks.classList.contains("active")
    ? "hidden"
    : "";
}

function closeMenu(menuBtn, navLinks, overlay) {
  menuBtn.classList.remove("active");
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// ==================== SCROLL EFFECTS ====================
function initScrollEffects() {
  const navbar = document.querySelector(".navbar");
  const scrollTop = document.getElementById("scrollTop");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.boxShadow = "none";
    }

    if (currentScroll > 500) {
      scrollTop.classList.add("visible");
    } else {
      scrollTop.classList.remove("visible");
    }

    if (currentScroll > lastScroll && currentScroll > 200) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
    updateActiveMenuItem();
  });

  scrollTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==================== ACTIVE MENU ITEM ====================
function updateActiveMenuItem() {
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) === current) {
      item.classList.add("active");
    }
  });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    });
  });
}

// ==================== GITHUB REPOSITORIES ====================
const repos = [
  {
    name: "Design Patterns",
    description:
      "Comprehensive collection of software design patterns implemented in C#.",
    stars: "45",
    forks: "12",
    url: "https://github.com/MinaNasser/Design-Patterns",
    topics: [
      "C#",
      "Design Patterns",
      "OOP",
      "SOLID",
      "Best Practices",
      "Software Architecture",
    ],
    language: "C#",
    updated: "2 months ago",
  },
  {
    name: "RabbitMQ",
    description:
      "Complete RabbitMQ implementation with Direct, Topic, Fanout, and Header exchanges.",
    stars: "38",
    forks: "10",
    url: "https://github.com/MinaNasser/RabbitMQ",
    topics: [
      "RabbitMQ",
      "Message Queue",
      ".NET",
      "Messaging Patterns",
      "Microservices",
      "Event-Driven Architecture",
    ],
    language: "C#",
    updated: "2 months ago",
  },
  {
    name: "CQRS Pattern",
    description:
      "Command Query Responsibility Segregation pattern implementation with Mediator.",
    stars: "52",
    forks: "15",
    url: "https://github.com/MinaNasser/CQRS_Pattern",
    topics: [
      "CQRS",
      "Mediator",
      "DDD",
      "Clean Architecture",
      "C#",
      "Microservices",
    ],
    language: "C#",
    updated: "7 months ago",
  },
  {
    name: "Clean Architecture",
    description:
      "Enterprise-grade Clean Architecture template with separation of concerns.",
    stars: "67",
    forks: "18",
    url: "https://github.com/MinaNasser/CleanArchitecture",
    topics: [
      "Clean Architecture",
      "DDD",
      "SOLID",
      "C#",
      "Best Practices",
      "Software Design",
    ],
    language: "C#",
    updated: "7 months ago",
  },
  {
    name: "Unit Testing",
    description:
      "Comprehensive unit testing with MSTest, Assert, StringAssert.",
    stars: "29",
    forks: "8",
    url: "https://github.com/MinaNasser/UnitTesting",
    topics: [
      "Unit Testing",
      "MSTest",
      "TDD",
      "C#",
      "Best Practices",
      "Software Quality",
    ],
    language: "C#",
    updated: "9 months ago",
  },
  {
    name: "SignalR",
    description:
      "Real-time applications with SignalR including chat and notifications.",
    stars: "34",
    forks: "9",
    url: "https://github.com/MinaNasser/SignalR",
    topics: [
      "SignalR",
      "WebSockets",
      "Real-time",
      "C#",
      "ASP.NET Core",
      "Angular",
      "EF Core",
    ],
    language: "C#,ASP.NET Core, Angular",
    updated: "10 months ago",
  },
  {
    name: "E-Commerce with SignalR",
    description:
      "Full e-commerce platform with real-time updates using SignalR.",
    stars: "41",
    forks: "11",
    url: "https://github.com/MinaNasser/E-Commerc-with-SingelR",
    topics: [
      ".NET Core",
      "SignalR",
      "EF Core",
      "C#",
      "E-Commerce",
      "Real-time",
      "Angular",
    ],
    language: "C#,.NET Core, Angular",
    updated: "10 months ago",
  },
];

function initRepositories() {
  const reposGrid = document.getElementById("repos-grid");
  if (!reposGrid) return;

  reposGrid.innerHTML = repos
    .map(
      (repo, index) => `
        <div class="repo-card" data-aos="fade-up" data-aos-delay="${index * 50}">
            <div class="repo-header">
                <i class="fab fa-github"></i>
                <h3>${repo.name}</h3>
            </div>
            <p class="repo-description">${repo.description}</p>
            <div class="repo-meta">
                <span><span class="language-dot"></span> ${repo.language}</span>
                <span><i class="far fa-clock"></i> ${repo.updated}</span>
            </div>
            <div class="repo-stats">
                <span><i class="far fa-star"></i> ${repo.stars}</span>
                <span><i class="fas fa-code-branch"></i> ${repo.forks}</span>
            </div>
            <div class="repo-topics">
                ${repo.topics.map((topic) => `<span class="topic-tag">${topic}</span>`).join("")}
            </div>
            <a href="${repo.url}" class="repo-link" target="_blank" rel="noopener noreferrer">
                <span data-i18n="github_view">View Repository</span> <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `,
    )
    .join("");
}

// ==================== دوال الوقت والتاريخ ====================
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

// ==================== CONTACT FORM WITH EMAILJS ====================
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  if (typeof emailjs === "undefined") {
    console.error(
      "EmailJS not loaded. Make sure to include the EmailJS script.",
    );
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

  console.log("📧 Sending email with data:", formData);

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

    console.log("✅ EmailJS Response:", response);

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

  setTimeout(() => {
    element.style.display = "none";
  }, 7000);
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;
  let firstInvalid = null;

  inputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false;
      if (!firstInvalid) firstInvalid = input;
    }
  });

  if (firstInvalid) {
    firstInvalid.focus();
  }

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
    position: absolute;
    bottom: -22px;
    left: 0;
    font-size: 0.75rem;
    color: #ef4444;
    animation: slideIn 0.3s ease;
    z-index: 1;
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

function addValidationStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .form-group {
        position: relative;
        margin-bottom: 2.2rem !important;
    }
    
    .form-group input.error,
    .form-group textarea.error {
        border-color: #ef4444 !important;
        animation: shake 0.3s ease;
    }
    
    .form-group input.valid,
    .form-group textarea.valid {
        border-color: #10b981 !important;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-5px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .form-status {
        display: none;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px;
        border-radius: 8px;
        margin-bottom: 15px;
        font-size: 14px;
        animation: slideIn 0.3s ease;
    }
    
    .form-status.success {
        background: rgba(16, 185, 129, 0.1);
        color: #10b981;
        border: 1px solid rgba(16, 185, 129, 0.2);
    }
    
    .form-status.error {
        background: rgba(239, 68, 68, 0.1);
        color: #ef4444;
        border: 1px solid rgba(239, 68, 68, 0.2);
    }
    
    .form-status i {
        font-size: 1.1rem;
    }
    
    .form-status a {
        color: inherit;
        text-decoration: underline;
    }
  `;
  document.head.appendChild(style);
}

// ==================== INTERSECTION OBSERVER ====================
function initIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document
    .querySelectorAll(
      ".service-card, .portfolio-item, .phase-card, .category-card, .repo-card",
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });
}

// ==================== CODE COPY ====================
function initCodeCopy() {
  document.querySelectorAll(".code-block").forEach((block) => {
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy';
    block.style.position = "relative";
    block.appendChild(copyBtn);

    copyBtn.addEventListener("click", async () => {
      const code =
        block.querySelector("code")?.textContent || block.textContent;
      try {
        await navigator.clipboard.writeText(code);
        showCopyFeedback(copyBtn, "Copied!", "success");
      } catch {
        showCopyFeedback(copyBtn, "Failed!", "error");
      }
    });
  });
}

function showCopyFeedback(btn, message, type) {
  const original = btn.innerHTML;
  btn.innerHTML = `<i class="fas fa-${type === "success" ? "check" : "times"}"></i> ${message}`;
  btn.classList.add(type);
  setTimeout(() => {
    btn.innerHTML = original;
    btn.classList.remove(type);
  }, 2000);
}

// ==================== SCROLL TO TOP ====================
function initScrollToTop() {
  // Already implemented in initScrollEffects
}

// ==================== DEBOUNCE ====================
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// ==================== GO TO BOTTOM ====================
function initGoToBottom() {
  const goBottomBtn = document.getElementById("goBottom");
  const scrollTopBtn = document.getElementById("scrollTop");

  if (!goBottomBtn) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // إظهار الزر إذا مش في آخر الصفحة
    if (scrollY + windowHeight < documentHeight - 100) {
      goBottomBtn.classList.add("visible");
    } else {
      goBottomBtn.classList.remove("visible");
    }
  });

  goBottomBtn.addEventListener("click", () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });
}
window.addEventListener("scroll", debounce(updateActiveMenuItem, 10), {
  passive: true,
});
