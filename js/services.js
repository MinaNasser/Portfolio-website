// ==================== SERVICES.JS ====================
// هذا الملف خاص بصفحة Services فقط

document.addEventListener("DOMContentLoaded", function () {
  initServicesInteractions();
  initServiceCards();
});

// تفاعلات بطاقات الخدمات
function initServicesInteractions() {
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card, index) => {
    // إضافة تأخير للظهور
    card.style.animationDelay = `${index * 0.1}s`;

    // تأثيرات hover محسنة
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".service-icon i");
      if (icon) {
        icon.style.transform = "scale(1.2) rotate(5deg)";
      }
    });

    card.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".service-icon i");
      if (icon) {
        icon.style.transform = "scale(1) rotate(0)";
      }
    });
  });
}

// توسيع معلومات الخدمات
function initServiceCards() {
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    // إضافة زر "اعرف أكثر" إذا لم يكن موجوداً
    if (!card.querySelector(".service-more")) {
      const moreBtn = document.createElement("a");
      moreBtn.href = "#";
      moreBtn.className = "service-more";
      moreBtn.setAttribute("data-i18n", "service_read_more");
      moreBtn.innerHTML = 'Read More <i class="fas fa-arrow-right"></i>';

      // إضافة الحدث
      moreBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showServiceDetails(card);
      });

      card.appendChild(moreBtn);
    }
  });
}

// عرض تفاصيل الخدمة (نافذة منبثقة)
function showServiceDetails(serviceCard) {
  const serviceName = serviceCard.querySelector("h3").textContent;
  const serviceDesc = serviceCard.querySelector("p").textContent;
  const serviceTechs = Array.from(
    serviceCard.querySelectorAll(".service-tech span"),
  ).map((span) => span.textContent);

  // إنشاء نافذة منبثقة
  const modal = document.createElement("div");
  modal.className = "service-modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <h2>${serviceName}</h2>
      <div class="modal-body">
        <p>${serviceDesc}</p>
        <h4 data-i18n="technologies_used">Technologies Used:</h4>
        <div class="modal-techs">
          ${serviceTechs.map((tech) => `<span class="tech-badge">${tech}</span>`).join("")}
        </div>
        <h4 data-i18n="related_projects">Related Projects:</h4>
        <ul class="related-projects">
          <li><a href="#">DMS Medical Platform</a></li>
          <li><a href="#">PointPay Rewards</a></li>
          <li><a href="#">E-commerce Platform</a></li>
        </ul>
        <a href="contact.html" class="btn btn-primary" data-i18n="inquire_now">Inquire Now</a>
      </div>
    </div>
  `;

  // إضافة النافذة للصفحة
  document.body.appendChild(modal);

  // إظهار النافذة
  setTimeout(() => modal.classList.add("active"), 10);

  // إغلاق النافذة
  const closeBtn = modal.querySelector(".modal-close");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    setTimeout(() => modal.remove(), 300);
  });

  // إغلاق بالنقر خارج النافذة
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      setTimeout(() => modal.remove(), 300);
    }
  });
}

// إضافة CSS خاص بالـ modal
function addModalStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .service-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }
    
    .service-modal.active {
      opacity: 1;
      visibility: visible;
    }
    
    .modal-content {
      background: var(--card-bg);
      border-radius: 20px;
      padding: 2rem;
      max-width: 500px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-hover);
      transform: translateY(-20px);
      transition: transform 0.3s ease;
    }
    
    .service-modal.active .modal-content {
      transform: translateY(0);
    }
    
    .modal-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--text-secondary);
      transition: color 0.3s ease;
    }
    
    .modal-close:hover {
      color: var(--primary);
    }
    
    .modal-body h4 {
      margin: 1.5rem 0 0.5rem;
      color: var(--primary);
    }
    
    .modal-techs {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }
    
    .tech-badge {
      background: rgba(5, 150, 105, 0.1);
      color: var(--primary);
      padding: 0.3rem 0.8rem;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 500;
      border: 1px solid rgba(5, 150, 105, 0.2);
    }
    
    .related-projects {
      list-style: none;
      margin: 1rem 0;
    }
    
    .related-projects li {
      margin: 0.5rem 0;
    }
    
    .related-projects a {
      color: var(--text-primary);
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .related-projects a:hover {
      color: var(--primary);
    }
    
    .service-more {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--primary);
      text-decoration: none;
      font-weight: 500;
      margin-top: 1rem;
      transition: gap 0.3s ease;
    }
    
    .service-more:hover {
      gap: 1rem;
    }
  `;

  document.head.appendChild(style);
}

// استدعاء إضافة الـ styles
addModalStyles();

// تصدير الدوال
window.servicesFunctions = {
  initServicesInteractions,
  initServiceCards,
  showServiceDetails,
};
