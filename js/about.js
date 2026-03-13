// ==================== ABOUT.JS ====================
// هذا الملف خاص بصفحة About فقط

document.addEventListener("DOMContentLoaded", function () {
  // تحديث العمر
  updateAgeDisplay();

  // تفعيل AOS للعناصر الجديدة
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }

  // إضافة أي تفاعلات خاصة بصفحة About هنا
  initAboutInteractions();
});

// دالة لتحديث العمر (موجودة في main.js ولكن نضمنها هنا)
function updateAgeDisplay() {
  const ageElement = document.getElementById("age-display");
  if (!ageElement) return;

  // استخدام currentLanguage من main.js
  const currentLang =
    window.currentLanguage || localStorage.getItem("language") || "en";
  const translations = window.translations || {};

  const birthDate = "2000-07-20";
  const age = calculateAge(birthDate);

  ageElement.textContent = `${age} ${translations["info_value_age"] || (currentLang === "en" ? "years old" : "سنة")}`;
}

function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

// تفاعلات إضافية لصفحة About
function initAboutInteractions() {
  // تأثيرات hover على بطاقات المعلومات
  const infoCards = document.querySelectorAll(".info-card");
  infoCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // تأثيرات على الـ stats
  animateStats();
}

// تحريك الأرقام الإحصائية
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat) => {
    const target = parseInt(stat.textContent);
    let current = 0;
    const increment = target / 50; // تقسيم الحركة على 50 خطوة

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        stat.textContent = target + "+";
        clearInterval(interval);
      } else {
        stat.textContent = Math.floor(current) + "+";
      }
    }, 30);
  });
}

// تصدير الدوال للاستخدام في main.js إذا لزم الأمر
window.aboutFunctions = {
  updateAgeDisplay,
  initAboutInteractions,
};
