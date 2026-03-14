// ==================== PORTFOLIO.JS ====================
document.addEventListener("DOMContentLoaded", function () {
  loadAllProjects();
  initRepositories();
  initProjectFilters();
  initProjectModals();
});

// قائمة المشاريع كاملة مع إضافة المشاريع الجديدة
const projects = [
  // DMS Medical Platform (موجود)
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

  // PointPay - Rewards Platform (موجود)
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
    name: "HandMade - Artisan Marketplace",
    description:
      "A digital marketplace connecting artisans with customers seeking unique, handcrafted products.",
    longDescription:
      "HandMade is a full-stack e-commerce platform designed specifically for artisans and crafters to showcase and sell their handmade creations. The platform features separate interfaces for buyers and sellers, comprehensive product management, wishlist functionality, and a robust rating system. Built with scalability in mind, it implements a clean architecture pattern with generic repositories and unit of work for maintainable data access.",
    image: "HandMade.jpeg",
    tags: [
      "ASP.NET Core 8",
      "Entity Framework",
      "Angular 17",
      "SQL Server",
      "Clean Architecture",
      "REST API",
    ],
    demoUrl: "#",
    repoUrl: "https://github.com/MinaNasser/Hand-Made",
    category: "web",
    features: [
      "Dual Interface (Buyer/Seller views)",
      "Shopping Cart & Wishlist",
      "Product Rating System",
      "Order Management",
      "Image Upload & Management",
    ],
    stars: "38",
    forks: "12",
  },

  // RabbitMQ Implementation (موجود)
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

  // CQRS Pattern Implementation (موجود)
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

  // Clean Architecture Template (موجود)
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

  // Unit Testing Best Practices (موجود)
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

  // SignalR Real-time Apps (موجود)
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

  // E-commerce with SignalR (موجود)
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
  // المشروع 1: Food Recipe App (وصفات طعام)
  {
    name: "Food Recipe App (Foodek)",
    description:
      "Interactive web application for browsing and searching food recipes with real-time data from TheMealDB API.",
    longDescription:
      "A comprehensive recipe application built with HTML, CSS, and JavaScript. Features include searching for recipes by name or ingredient, viewing detailed recipe information including ingredients and preparation steps, and a fully responsive design that works seamlessly across all devices. The app fetches real-time data from TheMealDB API and presents it in an intuitive, user-friendly interface.",
    image: "Foodek.png",
    tags: ["HTML5", "CSS3", "JavaScript", "API Integration", "Responsive"],
    demoUrl: "https://projetc-freelance-cezv.vercel.app/",
    repoUrl:
      "https://github.com/MinaNasser/Projetc-Freelance/tree/main/Recipe_food%20discript",
    category: "frontend",
    features: [
      "Search recipes by name or ingredient",
      "Real-time data from TheMealDB API",
      "Detailed recipe view with ingredients",
      "Fully responsive design",
      "Smooth CSS animations",
    ],
    stars: "45",
    forks: "12",
  },

  // المشروع 2: E-commerce Platform
  {
    name: "E-commerce Platform",
    description:
      "Innovative e-commerce website with product categories, filtering, and shopping cart functionality.",
    longDescription:
      "A complete e-commerce solution built with HTML, CSS, and JavaScript. Features include product categories (Men's, Women's, Jewelry, Perfume), product filtering by category, shopping cart functionality, and a responsive design that adapts to all screen sizes. The platform includes multiple pages: Home, Categories, Products, Hot Offers, Trending, Blog, and Top Rated sections.",
    image: "Anon.png",
    tags: ["HTML5", "CSS3", "JavaScript", "E-commerce", "Responsive"],
    demoUrl: "https://projetc-freelance-5fun.vercel.app/",
    repoUrl:
      "https://github.com/MinaNasser/Projetc-Freelance/tree/main/E-commerc",
    category: "frontend",
    features: [
      "Multiple product categories",
      "Product filtering system",
      "Shopping cart functionality",
      "Hot Offers and Trending sections",
      "Blog and Top Rated pages",
      "Fully responsive design",
    ],
    stars: "38",
    forks: "9",
  },

  // المشروع 3: Coffee Website Landing Page
  {
    name: "Coffee Website",
    description:
      "Modern and warm landing page for a coffee shop with services, history, and contact sections.",
    longDescription:
      "A beautifully designed landing page for a coffee shop or coffee brand. Built with HTML, CSS, and JavaScript, this website features a warm and inviting color palette, smooth animations, and a fully responsive layout. Sections include Our Services, Our History, About Us, and Contact Us with a functional contact form.",
    image: "coffee.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Landing Page", "Responsive"],
    demoUrl: "https://projetc-freelance-in53.vercel.app/",
    repoUrl:
      "https://github.com/MinaNasser/Projetc-Freelance/tree/main/Coffee-Website-main",
    category: "frontend",
    features: [
      "Warm and inviting design",
      "Our Services section",
      "Company history timeline",
      "About Us page",
      "Interactive contact form",
      "Smooth scroll animations",
    ],
    stars: "29",
    forks: "7",
  },

  // المشروع 4: Noon Clone
  {
    name: "Noon Clone",
    description:
      "UI clone of the popular Noon e-commerce platform with modern and responsive design.",
    longDescription:
      "A faithful UI clone of the renowned Noon e-commerce platform. This project demonstrates advanced HTML, CSS, and JavaScript skills to recreate the look and feel of a major e-commerce site. Features include a dynamic homepage, product pages, shopping cart interface, and fully responsive design that works flawlessly across all devices.",
    image: "noon.png",
    tags: ["HTML5", "CSS3", "JavaScript", "UI Clone", "E-commerce"],
    demoUrl: "https://noon-clone-sigma.vercel.app/",
    repoUrl:
      "https://github.com/MinaNasser/Projetc-Freelance/tree/main/Noon%20clone",
    category: "frontend",
    features: [
      "Faithful Noon UI recreation",
      "Dynamic homepage layout",
      "Product pages design",
      "Shopping cart interface",
      "Fully responsive",
      "Modern CSS techniques",
    ],
    stars: "52",
    forks: "14",
  },
];

// ==================== باقي الدوال كما هي ====================

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
          <span><i class="far fa-clock"></i> Recently</span>
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

// ==================== باقي الدوال (بدون تغيير) ====================

function initProjectFilters() {
  const filterContainer = document.createElement("div");
  filterContainer.className = "project-filters";
  filterContainer.innerHTML = `
    <button class="filter-btn active" data-filter="all">All Projects</button>
    <button class="filter-btn" data-filter="web">Web Apps</button>
    <button class="filter-btn" data-filter="backend">Backend</button>
    <button class="filter-btn" data-filter="testing">Testing</button>
    <button class="filter-btn" data-filter="frontend">Frontend</button>
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

  // ✅ التحقق: إذا كان demoUrl = "#" → لا تظهر الزر، وإلا أظهره
  const demoLink =
    project.demoUrl && project.demoUrl !== "#"
      ? `<a href="${project.demoUrl}" class="btn btn-primary" target="_blank">
        <span>Live Demo</span> <i class="fas fa-external-link-alt"></i>
       </a>`
      : ""; // ← لو مش موجود أو "#"، ميضيفش حاجة

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
            ${demoLink}
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

addProjectStyles();

window.portfolioFunctions = {
  loadAllProjects,
  initRepositories,
  filterProjects,
  showProjectModal,
};
