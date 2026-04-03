// ==================== MAIN.JS ====================
// هذا الملف مسؤول عن تحميل المكونات المشتركة وإدارة اللغة والثيم

// ==================== المتغيرات العامة ====================
let currentLanguage = localStorage.getItem("language") || "en";
let translations = {};

// ==================== تحميل المكونات ====================
document.addEventListener("DOMContentLoaded", async function () {
  await loadCommonComponents();

  // ✅ تأكيد تحديث الرابط النشط
  setTimeout(setActiveNavLink, 100);

  initLanguage();
  initTheme();
  initMobileMenu();
  initScrollEffects();
  initGoToBottom();
  initAOS();
});

// ==================== تحميل المكونات المشتركة ====================
async function loadCommonComponents() {
  try {
    // تحميل الـ Header
    const headerResponse = await fetch("./components/header.html");
    if (!headerResponse.ok) throw new Error("Header not found");
    const headerHTML = await headerResponse.text();
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // تحميل الـ Footer
    const footerResponse = await fetch("./components/footer.html");
    if (!footerResponse.ok) throw new Error("Footer not found");
    const footerHTML = await footerResponse.text();
    document.body.insertAdjacentHTML("beforeend", footerHTML);

    // تحميل الأزرار الثابتة
    const buttonsResponse = await fetch("./components/buttons.html");
    if (!buttonsResponse.ok) throw new Error("Buttons not found");
    const buttonsHTML = await buttonsResponse.text();
    document.body.insertAdjacentHTML("beforeend", buttonsHTML);

    // console.log("✅ Common components loaded");

    // ✅ تحديث الرابط النشط بعد تحميل المكونات
    setActiveNavLink();
  } catch (error) {
    console.error("❌ Failed to load components:", error);
    useFallbackComponents();
  }
}

// نسخة احتياطية في حالة فشل تحميل الملفات
function useFallbackComponents() {
  // Header fallback
  const headerFallback = `
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <img class="logo-img" src="./img/playstore.png" alt="Mina Nasser Logo" />
          <span class="logo-text" data-i18n="nav_name_logo">Mina Nasser</span>
        </div>
        <div class="nav-links">
          <a href="index.html" data-i18n="nav_home">Home</a>
          <a href="about.html" data-i18n="nav_about">About</a>
          <a href="services.html" data-i18n="nav_services">Services</a>
          <a href="portfolio.html" data-i18n="nav_portfolio">Portfolio</a>
          <a href="contact.html" data-i18n="nav_contact">Contact</a>
        </div>
        <div class="nav-actions">
          <div class="lang-dropdown" id="langDropdown">
            <button class="lang-select-btn" id="langToggle">
              <span class="selected-lang" data-i18n="nav_lang_btn_selected"></span>
              <i class="fas fa-chevron-down"></i>
            </button>
            <div class="lang-dropdown-menu">
              <div class="lang-option" data-lang="en">
                <i class="fas fa-check"></i>
                <span class="lang-text" data-i18n="nav_lang_btn_en"></span>
              </div>
              <div class="lang-option" data-lang="ar">
                <i class="fas fa-check"></i>
                <span class="lang-text" data-i18n="nav_lang_btn_ar"></span>
              </div>
            </div>
          </div>
          <div class="menu-btn">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML("afterbegin", headerFallback);
  // Footer fallback
  const footerFallback = `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">Mina Nasser</div>
          <div class="footer-links">
            <a href="index.html" data-i18n="nav_home">Home</a>
            <a href="about.html" data-i18n="nav_about">About</a>
            <a href="services.html" data-i18n="nav_services">Services</a>
            <a href="portfolio.html" data-i18n="nav_portfolio">Portfolio</a>
            <a href="contact.html" data-i18n="nav_contact">Contact</a>
          </div>
          <div class="footer-social">
            <a href="https://github.com/MinaNasser" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/mina-nasser-al5al/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://x.com/MinaAl5al" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/@al5al207" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/mina_al5al/" target="_blank"><i class="fab fa-instagram"></i></a>
          </div>
          <p class="copyright">© 2025 Mina Nasser Enjilizy. <span data-i18n="footer_rights">All rights reserved.</span></p>
        </div>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footerFallback);

  // Buttons fallback
  const buttonsFallback = `
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
      <i class="fas fa-moon"></i>
    </button>
    <button class="scroll-top" id="scrollTop" aria-label="Scroll to top">
      <i class="fas fa-arrow-up"></i>
    </button>
    <button class="go-bottom" id="goBottom" aria-label="Go to bottom">
      <i class="fas fa-arrow-down"></i>
    </button>
  `;
  document.body.insertAdjacentHTML("beforeend", buttonsFallback);

  setTimeout(setActiveNavLink, 50);
}

function getActiveClass(page) {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  if (page === "index" && currentPage === "index.html") return "active";
  if (currentPage === page + ".html") return "active";
  return "";
}

// ==================== LANGUAGE MANAGEMENT ====================
async function initLanguage() {
  const langDropdown = document.getElementById("langDropdown");
  const langOptions = document.querySelectorAll(".lang-option");
  const selectedLangSpan = document.querySelector(".selected-lang");

  if (!langDropdown || !langOptions.length || !selectedLangSpan) {
    console.warn("Language dropdown elements not found");
    return;
  }

  await loadLanguage(currentLanguage);
  updateSelectedLanguageDisplay(selectedLangSpan);
  updateActiveOption(currentLanguage);

  langDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (langDropdown && !langDropdown.contains(e.target)) {
      langDropdown.classList.remove("active");
    }
  });

  langOptions.forEach((option) => {
    option.addEventListener("click", async (e) => {
      e.stopPropagation();
      const lang = option.getAttribute("data-lang");
      currentLanguage = lang;
      await loadLanguage(currentLanguage);
      localStorage.setItem("language", currentLanguage);
      updateSelectedLanguageDisplay(selectedLangSpan);
      updateActiveOption(lang);
      if (langDropdown) langDropdown.classList.remove("active");
    });
  });
}

// ==================== ACTIVE NAVIGATION LINK ====================
function setActiveNavLink() {
  // الحصول على اسم الصفحة الحالية
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // الحصول على جميع روابط التنقل
  const navLinks = document.querySelectorAll(".nav-links a");

  // إزالة كلاس active من جميع الروابط
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // إضافة كلاس active للرابط المناسب
  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");
    }

    // حالة خاصة للصفحة الرئيسية
    if (currentPage === "" || currentPage === "index.html") {
      if (linkPage === "index.html") {
        link.classList.add("active");
      }
    }
  });

  // console.log(`✅ Active link set for: ${currentPage}`);
}
async function loadLanguage(lang) {
  try {
    const response = await fetch(`./lang/${lang}.json`);
    if (!response.ok) throw new Error("Language file not found");
    translations = await response.json();
    updateContent();
    updatePageDirection();
    updateLogoText();

    // ✅ تحديث المتغيرات العامة
    window.translations = translations;
    window.currentLanguage = lang;

    // فقط اتصل بـ updateAgeDisplay إذا كان العنصر موجود في الصفحة
    if (document.getElementById("age-display")) {
      updateAgeDisplay();
    }

    updateDropdownLanguageText();
    // ✅ تحديث Typing Animation إذا كانت الصفحة الرئيسية
    if (window.updateTypingAnimation) {
      window.updateTypingAnimation();
    }

    // console.log(`✅ Language loaded: ${lang}`);
  } catch (error) {
    console.error("❌ Failed to load language:", error);
  }
}

// دالة جديدة لتحديث نص القائمة المنسدلة
function updateDropdownLanguageText() {
  document.querySelectorAll(".lang-option").forEach((option) => {
    const lang = option.getAttribute("data-lang");
    const textSpan = option.querySelector(".lang-text");
    if (!textSpan) return;

    // مسح المحتوى القديم
    textSpan.innerHTML = "";

    // إنشاء عنصر العلم
    const flagSpan = document.createElement("span");
    flagSpan.className = lang === "en" ? "fi fi-us" : "fi fi-eg";

    // إضافة العلم والنص
    textSpan.appendChild(flagSpan);
    textSpan.appendChild(
      document.createTextNode(
        " " +
          (translations[
            lang === "en" ? "nav_lang_btn_en" : "nav_lang_btn_ar"
          ] || (lang === "en" ? "English" : "العربية")),
      ),
    );
  });
}

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[key]) {
      if (
        element.closest(".lang-option") ||
        element.classList.contains("selected-lang")
      ) {
        return;
      }
      if (
        element.classList.contains("education-text") ||
        key.includes("info_value_education")
      ) {
        element.innerHTML = translations[key];
      } else if (element.tagName === "A" || element.tagName === "BUTTON") {
        const icon = element.querySelector("i");
        if (icon && !element.classList.contains("lang-select-btn")) {
          element.innerHTML = `${translations[key]} `;
          element.appendChild(icon.cloneNode(true));
        } else if (!element.classList.contains("lang-select-btn")) {
          element.textContent = translations[key];
        }
      } else {
        element.textContent = translations[key];
      }
    }
  });

  document.querySelectorAll("label[data-i18n]").forEach((label) => {
    const key = label.getAttribute("data-i18n");
    if (translations[key]) label.textContent = translations[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[key]) element.placeholder = translations[key];
  });
}

function updateLogoText() {
  const logoText = document.querySelector(".logo-text");
  if (!logoText) return;
  logoText.textContent =
    translations["nav_name_logo"] ||
    (currentLanguage === "en" ? "Mina Nasser" : "مينا ناصر");
}

function updatePageDirection() {
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = currentLanguage;
}

function updateActiveOption(lang) {
  document.querySelectorAll(".lang-option").forEach((option) => {
    const optionLang = option.getAttribute("data-lang");
    option.classList.toggle("active", optionLang === lang);
  });
}

function updateSelectedLanguageDisplay(selectedLangSpan) {
  if (!selectedLangSpan) return;
  selectedLangSpan.innerHTML = "";
  const flagSpan = document.createElement("span");
  flagSpan.className = currentLanguage === "en" ? "fi fi-us" : "fi fi-eg";
  selectedLangSpan.appendChild(flagSpan);
  selectedLangSpan.appendChild(
    document.createTextNode(
      " " +
        (translations[
          currentLanguage === "en" ? "nav_lang_btn_en" : "nav_lang_btn_ar"
        ] || (currentLanguage === "en" ? "English" : "العربية")),
    ),
  );
}

// ==================== حساب العمر ====================
function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  )
    age--;
  return age;
}

function updateAgeDisplay() {
  const ageElement = document.getElementById("age-display");
  if (!ageElement) return;
  const age = calculateAge("2000-07-20");
  ageElement.textContent = `${age} ${translations["info_value_age"] || (currentLanguage === "en" ? "years old" : "سنة")}`;
}

// ==================== THEME MANAGEMENT ====================
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

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

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (!menuBtn || !navLinks) return;

  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  document.body.appendChild(overlay);

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = navLinks.classList.contains("active")
      ? "hidden"
      : "";
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navLinks.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  overlay.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });
}

// ==================== SCROLL EFFECTS ====================
function initScrollEffects() {
  const navbar = document.querySelector(".navbar");
  const scrollTop = document.getElementById("scrollTop");
  const goBottom = document.getElementById("goBottom");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (navbar) {
      if (currentScroll > 50) {
        navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.boxShadow = "none";
      }
    }

    if (scrollTop) {
      scrollTop.classList.toggle("visible", currentScroll > 500);
    }

    if (goBottom) {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      goBottom.classList.toggle(
        "visible",
        currentScroll + windowHeight < documentHeight - 100,
      );
    }

    if (currentScroll > lastScroll && currentScroll > 200 && navbar) {
      navbar.style.transform = "translateY(-100%)";
    } else if (navbar) {
      navbar.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
  });

  if (scrollTop) {
    scrollTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
  }

  if (goBottom) {
    goBottom.addEventListener("click", () =>
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      }),
    );
  }
}

// ==================== AOS INITIALIZATION ====================
function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: "ease-in-out",
      disable: window.innerWidth < 768,
    });
  }
}

function initGoToBottom() {
  // Already implemented in scroll effects
}

// ==================== EXPORT GLOBAL VARIABLES ====================
window.currentLanguage = currentLanguage;
window.translations = translations;

// ✅ إضافة دالة لتحديث Typing Animation من الخارج
window.updateTypingAnimation = function () {
  if (typeof initTypingAnimation === "function") {
    initTypingAnimation();
  }
};
