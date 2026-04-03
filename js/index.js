// ==================== INDEX.JS ====================
// هذا الملف خاص بالصفحة الرئيسية فقط

// استيراد المشاريع من portfolio.js أو تعريفها محلياً
const featuredProjects = [
  {
    name: "DMS Medical Platform",
    description:
      "Scalable architecture for medical system supporting 500k users with microservices, RabbitMQ, and Kubernetes.",
    image: "dms.png",
    tags: [".NET Core", "RabbitMQ", "K8s", "Microservices"],
    url: "https://github.com/MinaNasser/DMS-Medical",
    category: "web",
  },
  {
    name: "PointPay - Rewards Platform",
    description:
      "E-commerce loyalty system with CQRS, Mediator pattern, and Clean Architecture.",
    image: "pointpay.jpg",
    tags: ["CQRS", "Mediator", "Clean Arch", "Angular"],
    url: "https://github.com/MinaNasser/PointPay",
    category: "web",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  loadFeaturedProjects();

  // ✅ تأخير التشغيل الأول للـ Typing Animation
  setTimeout(() => {
    initTypingAnimation();
  }, 300);
});
// ==================== DROPDOWN FUNCTIONALITY ====================

document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.getElementById("cvDropdownBtn");
  const dropdownContainer = document.querySelector(".dropdown-container");

  if (dropdownBtn && dropdownContainer) {
    // Toggle dropdown on button click
    dropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdownContainer.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!dropdownContainer.contains(e.target)) {
        dropdownContainer.classList.remove("active");
      }
    });

    // Close dropdown when pressing ESC
    document.addEventListener("keydown", function (e) {
      if (
        e.key === "Escape" &&
        dropdownContainer.classList.contains("active")
      ) {
        dropdownContainer.classList.remove("active");
      }
    });

    // Prevent dropdown from closing when clicking inside menu
    const dropdownMenu = document.getElementById("cvDropdownMenu");
    if (dropdownMenu) {
      dropdownMenu.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }
  }
});

function loadFeaturedProjects() {
  const featuredGrid = document.getElementById("featured-projects");
  if (!featuredGrid) return;

  featuredGrid.innerHTML = featuredProjects
    .map(
      (project, index) => `
    <div class="portfolio-item" data-aos="fade-up" data-aos-delay="${index * 100}">
      <div class="portfolio-image">
        <img src="img/portfolio/${project.image}" alt="${project.name}" 
             onerror="this.src='img/portfolio/placeholder.jpg'">
      </div>
      <div class="portfolio-content">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="portfolio-tags">
          ${project.tags
            .slice(0, 3)
            .map((tag) => `<span class="tag">${tag}</span>`)
            .join("")}
        </div>
        <a href="${project.url}" class="project-link" target="_blank" rel="noopener noreferrer">
          <span data-i18n="portfolio_view">View Project</span> <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  `,
    )
    .join("");
}

// ✅ دالة Typing Animation المطورة (مع الحفاظ على الوظائف الأساسية)
function initTypingAnimation() {
  if (typeof Typed === "undefined") return;

  // ✅ استخدام المتغيرات العامة من main.js
  const globalTranslations = window.translations || translations || {};
  const currentLang = window.currentLanguage || "en";

  if (window.typed1) window.typed1.destroy();
  if (window.typed2) window.typed2.destroy();

  // ✅ الحصول على النصوص مع Fallbacks متعددة
  const getText = (key, enDefault, arDefault) => {
    // ترتيب الأولوية: window.translations ← translations ← القيم الافتراضية
    const value = globalTranslations[key] || translations[key];
    if (value) return value;

    // إذا لم نجد ترجمة، نستخدم اللغة الحالية
    return currentLang === "en" ? enDefault : arDefault;
  };

  // ✅ النص الأول (تحية)
  const greeting1 = getText(
    "typing_greeting",
    "HI, I'm Mina Nasser Enjilizy",
    "مرحباً، أنا مينا ناصر إنجليزي",
  );

  // ✅ النص الثاني (ترحيب)
  const greeting2 = getText(
    "typing_welcome",
    "Welcome to my Portfolio",
    "أهلاً بك في موقعي",
  );

  // ✅ قائمة النصوص الكاملة (مع الحفاظ على القيم الافتراضية)
  const devStrings = [
    getText("typing_dev", ".NET Full Stack Developer", "مطور .NET متكامل"),
    getText("typing_architect", "Software Architect", "مهندس برمجيات"),
    getText(
      "typing_microservices",
      "Microservices Specialist",
      "خبير خدمات مصغرة",
    ),
    getText(
      "typing_cqrs",
      "CQRS Clean Architecture",
      "CQRS و Clean Architecture",
    ),
    getText("typing_rabbitmq", "RabbitMQ Expert", "خبير RabbitMQ"),
    getText(
      "typing_testing",
      "Unit Testing Advocate",
      "مدافع عن اختبارات الوحدة",
    ),
    getText("typing_devops", "DevOps Enthusiast", "مهتم بـ DevOps"),
    getText("typing_signalr", "SignalR Enthusiast", "مهتم بـ SignalR"),
    getText("typing_angular", "Angular Enthusiast", "مهتم بـ Angular"),
  ];

  // ✅ إنشاء الـ Typing Animation الأول
  window.typed1 = new Typed("#typing1", {
    strings: [greeting1, greeting2],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 5000,
    showCursor: false,
  });

  // ✅ إنشاء الـ Typing Animation الثاني
  window.typed2 = new Typed("#typing2", {
    strings: devStrings,
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 2000, // ✅ زيادة التأخير بين النصوص
    showCursor: false, // ✅ إخفاء المؤشر في النص الثاني
  });

  // console.log(`✅ Typing animation initialized in ${currentLang}`);
}

// ✅ جعل الدالة متاحة عالمياً (للاستخدام من main.js)
window.initTypingAnimation = initTypingAnimation;
