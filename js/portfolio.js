// ==================== PORTFOLIO.JS ====================
document.addEventListener("DOMContentLoaded", function () {
  loadAllProjects();
  initRepositories();
  initProjectFilters(); // إضافة فلترة المشاريع
  initProjectModals(); // إضافة نوافذ منبثقة للمشاريع
});

// قائمة المشاريع كاملة مع إضافة صور ومشاريع حقيقية
const projects = [
  {
    name: "DMS Medical Platform",
    description:
      "Scalable architecture for medical system supporting 500k users with microservices, RabbitMQ, and Kubernetes.",
    longDescription:
      "A comprehensive medical platform that handles electronic health records (EHR), appointment scheduling, telemedicine, and clinic management. Built with microservices architecture to ensure scalability and reliability.",
    image: "dms.png",
    tags: [
      ".NET Core",
      "RabbitMQ",
      "K8s",
      "Microservices",
      "Docker",
      "MongoDB",
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/MinaNasser/DMS-Medical",
    category: "web",
    features: [
      "Microservices Architecture",
      "Real-time Notifications",
      "EHR Management",
      "Video Consultations",
    ],
    stars: "56",
    forks: "23",
  },
  {
    name: "PointPay - Rewards Platform",
    description:
      "E-commerce loyalty system with CQRS, Mediator pattern, and Clean Architecture.",
    longDescription:
      "A customer loyalty platform where users earn points through purchases and recycling initiatives. Points can be redeemed for rewards or donated to charities. Built with CQRS and Clean Architecture for maintainability.",
    image: "pointpay.jpg",
    tags: [
      "CQRS",
      "Mediator",
      "Clean Arch",
      "Angular",
      ".NET Core",
      "SQL Server",
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/MinaNasser/PointPay",
    category: "web",
    features: [
      "CQRS Pattern",
      "Event Sourcing",
      "Real-time Points Updates",
      "Charity Integration",
    ],
    stars: "52",
    forks: "15",
  },
  {
    name: "RabbitMQ Implementation",
    description:
      "Complete RabbitMQ implementation with Direct, Topic, Fanout, and Header exchanges.",
    longDescription:
      "A comprehensive implementation of RabbitMQ messaging patterns including Direct, Topic, Fanout, and Header exchanges. Includes examples of publisher/subscriber patterns, RPC, and message persistence.",
    image: "RabbitMQ.png",
    tags: ["RabbitMQ", "Message Queue", ".NET", "C#", "Microservices"],
    demoUrl: "#",
    repoUrl: "https://github.com/MinaNasser/RabbitMQ",
    category: "backend",
    features: [
      "Direct Exchange",
      "Topic Exchange",
      "Fanout Exchange",
      "Header Exchange",
      "RPC Pattern",
    ],
    stars: "38",
    forks: "10",
  },
  {
    name: "CQRS Pattern Implementation",
    description:
      "Complete CQRS pattern with Mediator, separated read/write models, and performance optimization.",
    longDescription:
      "A production-ready implementation of CQRS pattern with Mediator. Includes separate read and write databases, event sourcing, and optimized query handlers for high performance.",
    image: "cqrs.jfif",
    tags: ["CQRS", "Mediator", "DDD", "Clean Arch", "C#", ".NET Core"],
    demoUrl: "#",
    repoUrl: "https://github.com/MinaNasser/CQRS_Pattern",
    category: "backend",
    features: [
      "Command/Query Separation",
      "Mediator Pattern",
      "Event Sourcing",
      "Read/Write Models",
    ],
    stars: "52",
    forks: "15",
  },
  {
    name: "Clean Architecture Template",
    description:
      "Enterprise-grade Clean Architecture template with separation of concerns and dependency inversion.",
    longDescription:
      "A robust template for building applications with Clean Architecture. Features include dependency inversion, separation of concerns, and support for multiple databases and UI frameworks.",
    image: "CleanArchitecture.jfif",
    tags: ["Clean Arch", "DDD", "SOLID", "C#", ".NET Core", "EF Core"],
    demoUrl: "#",
    repoUrl: "https://github.com/MinaNasser/CleanArchitecture",
    category: "template",
    features: [
      "Clean Architecture",
      "Domain-Driven Design",
      "SOLID Principles",
      "Repository Pattern",
    ],
    stars: "67",
    forks: "18",
  },
  {
    name: "Unit Testing Best Practices",
    description:
      "Comprehensive unit testing with MSTest, Assert, StringAssert, and CollectionAssert.",
    longDescription:
      "A complete guide and implementation of unit testing best practices. Includes examples of test-driven development, mocking, code coverage, and integration tests.",
    image: "unittesting.png",
    tags: ["MSTest", "TDD", "Unit Tests", "C#", "xUnit", "Moq"],
    demoUrl: "#",
    repoUrl: "https://github.com/MinaNasser/UnitTesting",
    category: "testing",
    features: [
      "Test-Driven Development",
      "Mocking",
      "Code Coverage",
      "Integration Tests",
    ],
    stars: "29",
    forks: "8",
  },
  {
    name: "SignalR Real-time Apps",
    description:
      "Real-time applications with SignalR including chat and e-commerce notifications.",
    longDescription:
      "Real-time applications built with SignalR including a chat application, live notifications, and a collaborative dashboard. Demonstrates group messaging, direct messaging, and connection management.",
    image: "signalr.jfif",
    tags: ["SignalR", "WebSockets", "Real-time", "C#", "Angular", "React"],
    demoUrl: "#",
    repoUrl: "https://github.com/MinaNasser/SignalR",
    category: "web",
    features: [
      "Real-time Chat",
      "Live Notifications",
      "Group Messaging",
      "Connection Management",
    ],
    stars: "34",
    forks: "9",
  },
  {
    name: "E-commerce with SignalR",
    description:
      "Full e-commerce platform with real-time updates and notifications using SignalR.",
    longDescription:
      "A complete e-commerce platform with real-time inventory updates, live order tracking, and instant notifications. Features include product management, cart, checkout, and order processing.",
    image: "ecommerce.jfif",
    tags: [".NET Core", "SignalR", "EF Core", "Angular", "SQL Server", "Redis"],
    demoUrl: "#",
    repoUrl: "https://github.com/MinaNasser/E-Commerc-with-SingelR",
    category: "web",
    features: [
      "Real-time Inventory",
      "Live Order Tracking",
      "Instant Notifications",
      "Shopping Cart",
    ],
    stars: "41",
    forks: "11",
  },
];

// دوال التحميل
function loadAllProjects() {
  const projectsGrid = document.getElementById("all-projects");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects
    .map(
      (project, index) => `
      <div class="portfolio-item" data-aos="fade-up" data-aos-delay="${index * 50}" data-category="${project.category}">
        <div class="portfolio-image">
          <img src="img/portfolio/${project.image}" alt="${project.name}" 
               onerror="this.src='img/portfolio/placeholder.jpg'">
        </div>
        <div class="portfolio-content">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="portfolio-tags">
            ${project.tags
              .slice(0, 4)
              .map((tag) => `<span class="tag">${tag}</span>`)
              .join("")}
          </div>
          <div class="portfolio-links">
            <a href="#" class="project-link view-details" data-project="${index}">
              <span data-i18n="portfolio_view">View Details</span> <i class="fas fa-info-circle"></i>
            </a>
            <a href="${project.repoUrl}" class="project-link" target="_blank" rel="noopener noreferrer">
              <span data-i18n="portfolio_view_repo">View Repo</span> <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    `,
    )
    .join("");
}

function initRepositories() {
  const reposGrid = document.getElementById("repos-grid");
  if (!reposGrid) return;

  reposGrid.innerHTML = projects
    .map(
      (project, index) => `
      <div class="repo-card" data-aos="fade-up" data-aos-delay="${index * 50}">
        <div class="repo-header">
          <i class="fab fa-github"></i>
          <h3>${project.name}</h3>
        </div>
        <p class="repo-description">${project.description}</p>
        <div class="repo-meta">
          <span><span class="language-dot"></span> ${project.tags[0]}</span>
          <span><i class="far fa-clock"></i> ${project.updated || "Recently"}</span>
        </div>
        <div class="repo-stats">
          <span><i class="far fa-star"></i> ${project.stars}</span>
          <span><i class="fas fa-code-branch"></i> ${project.forks}</span>
        </div>
        <div class="repo-topics">
          ${project.tags
            .slice(0, 3)
            .map((tag) => `<span class="topic-tag">${tag}</span>`)
            .join("")}
        </div>
        <a href="${project.repoUrl}" class="repo-link" target="_blank" rel="noopener noreferrer">
          <span data-i18n="github_view">View Repository</span> <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `,
    )
    .join("");
}

// إضافة فلترة المشاريع
function initProjectFilters() {
  const filterContainer = document.createElement("div");
  filterContainer.className = "project-filters";
  filterContainer.innerHTML = `
    <button class="filter-btn active" data-filter="all">All Projects</button>
    <button class="filter-btn" data-filter="web">Web Apps</button>
    <button class="filter-btn" data-filter="backend">Backend</button>
    <button class="filter-btn" data-filter="testing">Testing</button>
    <button class="filter-btn" data-filter="template">Templates</button>
  `;

  const portfolioSection = document.querySelector(".portfolio .container");
  const sectionHeader = portfolioSection.querySelector(".section-header");
  sectionHeader.insertAdjacentElement("afterend", filterContainer);

  filterContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      document
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");

      const filter = e.target.dataset.filter;
      filterProjects(filter);
    }
  });
}

function filterProjects(filter) {
  const projects = document.querySelectorAll(".portfolio-item");
  projects.forEach((project) => {
    if (filter === "all" || project.dataset.category === filter) {
      project.style.display = "flex";
      project.classList.add("fade-in");
    } else {
      project.style.display = "none";
    }
  });
}

// إضافة نوافذ منبثقة للمشاريع
function initProjectModals() {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".view-details")) {
      e.preventDefault();
      const link = e.target.closest(".view-details");
      const projectIndex = link.dataset.project;
      showProjectModal(projects[projectIndex]);
    }
  });
}

function showProjectModal(project) {
  const modal = document.createElement("div");
  modal.className = "project-modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <div class="modal-grid">
        <div class="modal-image">
          <img src="img/portfolio/${project.image}" alt="${project.name}" 
               onerror="this.src='img/portfolio/placeholder.jpg'">
        </div>
        <div class="modal-details">
          <h2>${project.name}</h2>
          <p class="modal-description">${project.longDescription || project.description}</p>
          
          <div class="modal-features">
            <h4>Key Features:</h4>
            <ul>
              ${project.features.map((feature) => `<li><i class="fas fa-check"></i> ${feature}</li>`).join("")}
            </ul>
          </div>
          
          <div class="modal-tech">
            <h4>Technologies:</h4>
            <div class="tech-tags">
              ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
          
          <div class="modal-stats">
            <span><i class="far fa-star"></i> ${project.stars} stars</span>
            <span><i class="fas fa-code-branch"></i> ${project.forks} forks</span>
          </div>
          
          <div class="modal-links">
            <a href="${project.demoUrl}" class="btn btn-primary" target="_blank">
              <span>Live Demo</span> <i class="fas fa-external-link-alt"></i>
            </a>
            <a href="${project.repoUrl}" class="btn btn-outline" target="_blank">
              <span>View Code</span> <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  setTimeout(() => modal.classList.add("active"), 10);

  const closeBtn = modal.querySelector(".modal-close");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    setTimeout(() => modal.remove(), 300);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      setTimeout(() => modal.remove(), 300);
    }
  });
}

// إضافة CSS للفلترة والـ modal
function addProjectStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .project-filters {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 2rem 0 3rem;
      flex-wrap: wrap;
    }
    
    .filter-btn {
      padding: 0.6rem 1.5rem;
      border-radius: 50px;
      background: transparent;
      border: 2px solid var(--primary);
      color: var(--primary);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .filter-btn:hover,
    .filter-btn.active {
      background: var(--gradient);
      color: white;
      border-color: transparent;
    }
    
    .portfolio-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      flex-wrap: wrap;
    }
    
    .project-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(5px);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }
    
    .project-modal.active {
      opacity: 1;
      visibility: visible;
    }
    
    .project-modal .modal-content {
      background: var(--card-bg);
      border-radius: 20px;
      padding: 2rem;
      max-width: 900px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-hover);
    }
    
    .modal-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 2rem;
    }
    
    .modal-image img {
      width: 100%;
      border-radius: 10px;
      border: 1px solid var(--border-color);
    }
    
    .modal-details h2 {
      margin-bottom: 1rem;
      color: var(--primary);
    }
    
    .modal-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .modal-features h4,
    .modal-tech h4 {
      margin: 1rem 0 0.5rem;
      color: var(--primary);
    }
    
    .modal-features ul {
      list-style: none;
    }
    
    .modal-features li {
      margin: 0.5rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .modal-features i {
      color: var(--secondary);
    }
    
    .modal-stats {
      display: flex;
      gap: 2rem;
      margin: 1.5rem 0;
      padding: 1rem 0;
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
    }
    
    .modal-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    @media (max-width: 768px) {
      .modal-grid {
        grid-template-columns: 1fr;
      }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .fade-in {
      animation: fadeIn 0.5s ease;
    }
  `;
  document.head.appendChild(style);
}

// استدعاء إضافة الـ styles
addProjectStyles();

// تصدير الدوال للاستخدام
window.portfolioFunctions = {
  loadAllProjects,
  initRepositories,
  filterProjects,
  showProjectModal,
};
