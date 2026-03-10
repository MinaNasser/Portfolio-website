// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  initTheme();
  initAOS();
  initTypingAnimation();
  initMobileMenu();
  initScrollEffects();
  initSmoothScroll();
  initContactForm();
  initRepositories();
  initIntersectionObserver();
  initCodeCopy();
  initScrollToTop();
  addValidationStyles();
});

// ==================== THEME MANAGEMENT ====================
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");

  // Check for saved theme preference
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

  new Typed("#typing1", {
    strings: ["HI, I'm Mina Nasser Enjilizy", "Welcome to my Portfolio"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 5000,
    showCursor: false,
    cursorChar: "|",
  });

  new Typed("#typing2", {
    strings: [
      ".NET Full Stack Developer",
      "Software Architect",
      "Microservices Specialist",
      "CQRS Clean Architecture",
      "RabbitMQ Expert",
      "Unit Testing Advocate",
      "DevOps Enthusiast",
      "SignalR Enthusiast",
      "Angular Enthusiast",
    ],
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

    // Navbar background
    if (currentScroll > 50) {
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.boxShadow = "none";
    }

    // Scroll to top button
    if (currentScroll > 500) {
      scrollTop.classList.add("visible");
    } else {
      scrollTop.classList.remove("visible");
    }

    // Hide/show navbar
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
    topics: ["C#", "Design Patterns", "OOP"],
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
    topics: ["RabbitMQ", "Message Queue", ".NET"],
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
    topics: ["CQRS", "Mediator", "DDD"],
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
    topics: ["Clean Architecture", "DDD", "SOLID"],
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
    topics: ["Unit Testing", "MSTest", "TDD"],
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
    topics: ["SignalR", "WebSockets", "Real-time"],
    language: "C#",
    updated: "10 months ago",
  },
  {
    name: "E-Commerce with SignalR",
    description:
      "Full e-commerce platform with real-time updates using SignalR.",
    stars: "41",
    forks: "11",
    url: "https://github.com/MinaNasser/E-Commerc-with-SingelR",
    topics: [".NET Core", "SignalR", "EF Core"],
    language: "C#",
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
                View Repository <i class="fas fa-arrow-right"></i>
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

  // console.log("Initializing contact form...");

  // التحقق من تحميل EmailJS
  if (typeof emailjs === "undefined") {
    console.error(
      "EmailJS not loaded. Make sure to include the EmailJS script.",
    );
    showEmailJSError();
    return;
  }

  // المفتاح العام من حساب EmailJS
  const PUBLIC_KEY = "Icwqm4AkrLqkEP2O3";

  try {
    emailjs.init(PUBLIC_KEY);
    // console.log("✅ EmailJS initialized successfully");
  } catch (error) {
    console.error("❌ Failed to initialize EmailJS:", error);
  }

  contactForm.addEventListener("submit", handleFormSubmit);

  // Real-time validation
  contactForm.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => validateField(input));
    input.addEventListener("blur", () => validateField(input));
  });
}

// دالة عرض خطأ EmailJS
function showEmailJSError() {
  const formStatus = document.getElementById("formStatus");
  if (formStatus) {
    formStatus.innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      Email service not loaded. Please refresh the page or contact me directly at 
      <a href="mailto:minanasser82018@gmail.com">minanasser82018@gmail.com</a>
    `;
    formStatus.className = "form-status error";
    formStatus.style.display = "flex";
  }
}

// دالة معالجة إرسال النموذج - النسخة النهائية
async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const formStatus = document.getElementById("formStatus");

  // التحقق من صحة الحقول
  if (!validateForm(form)) {
    showFormStatus(formStatus, "❌ Please fill all fields correctly", "error");
    return;
  }

  // جمع البيانات مع الوقت والتاريخ
  const formData = {
    name: document.getElementById("name")?.value.trim() || "",
    email: document.getElementById("email")?.value.trim() || "",
    subject: document.getElementById("subject")?.value.trim() || "",
    message: document.getElementById("message")?.value.trim() || "",
    time: getCurrentTime(),
    date: getCurrentDate(),
  };

  // التحقق من صحة الإيميل
  if (!isValidEmail(formData.email)) {
    showFormStatus(
      formStatus,
      "❌ Please enter a valid email address",
      "error",
    );
    return;
  }

  console.log("📧 Sending email with data:", formData);

  // إظهار حالة التحميل
  submitBtn.classList.add("loading");
  submitBtn.disabled = true;
  formStatus.style.display = "none";

  try {
    const SERVICE_ID = "service_dchjwzn";
    const TEMPLATE_ID = "template_om5mtdp";

    // التحقق من وجود EmailJS
    if (typeof emailjs === "undefined") {
      throw new Error("EmailJS not loaded");
    }

    // إرسال الإيميل - تأكد من تطابق أسماء المتغيرات مع قالبك
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
        "✅ Message sent successfully! I'll get back to you soon.",
        "success",
      );
      form.reset(); // تفريغ النموذج
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("❌ EmailJS Error:", error);

    let errorMessage = "❌ Failed to send message. ";
    if (error.text) {
      errorMessage += error.text;
    } else if (error.message) {
      errorMessage += error.message;
    } else {
      errorMessage += "Please try again or contact me directly via email.";
    }

    showFormStatus(formStatus, errorMessage, "error");
  } finally {
    // إخفاء حالة التحميل
    submitBtn.classList.remove("loading");
    submitBtn.disabled = false;
  }
}

// دالة إرسال الرد التلقائي (اختياري)
async function sendAutoReply(userData) {
  try {
    const SERVICE_ID = "service_dchjwzn";
    // إذا كان لديك قالب منفصل للرد التلقائي، ضع معرفه هنا
    const AUTO_REPLY_TEMPLATE_ID = "template_om5mtdp"; // أو قالب آخر

    await emailjs.send(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, {
      to_name: userData.name,
      to_email: userData.email,
      message: userData.message,
      time: userData.time,
      date: userData.date,
      from_name: "Mina Nasser",
    });
    console.log("✅ Auto-reply sent to:", userData.email);
  } catch (error) {
    console.log("Auto-reply failed:", error);
  }
}

// دالة عرض حالة النموذج
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

  // إخفاء بعد 7 ثوان
  setTimeout(() => {
    element.style.display = "none";
  }, 7000);
}

// دالة التحقق من صحة الإيميل
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// دالة التحقق من صحة النموذج
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

  // تمرير المؤشر لأول حقل غير صحيح
  if (firstInvalid) {
    firstInvalid.focus();
  }

  return isValid;
}

// دالة التحقق من صحة الحقل الفردي
function validateField(field) {
  const value = field.value.trim();
  let isValid = true;

  // إزالة أي رسالة خطأ سابقة
  removeFieldError(field);

  if (!value) {
    isValid = false;
    showFieldError(field, "This field is required");
  } else if (field.type === "email" && !isValidEmail(value)) {
    isValid = false;
    showFieldError(field, "Please enter a valid email address");
  }

  field.classList.toggle("error", !isValid);
  field.classList.toggle("valid", isValid);

  return isValid;
}

// دالة إظهار خطأ الحقل
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

// دالة إزالة خطأ الحقل
function removeFieldError(field) {
  const formGroup = field.closest(".form-group");
  if (formGroup) {
    const existingError = formGroup.querySelector(".field-error");
    if (existingError) existingError.remove();
  }
}

// إضافة أنماط CSS للتحقق من صحة الحقول
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

// Optimize scroll
window.addEventListener("scroll", debounce(updateActiveMenuItem, 10), {
  passive: true,
});
