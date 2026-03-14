# 🌟 Mina Nasser - Personal Portfolio Website

![Portfolio Preview](https://portfolio-website-pearl-five-19.vercel.app/img/screenshothero.png)

<div align="center">

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-🌐-059669?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-website-pearl-five-19.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GITHUB-📁-1f2937?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MinaNasser/Portfolio-website)
[![LinkedIn](https://img.shields.io/badge/LINKEDIN-🤝-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mina-nasser-al5al/)

</div>

---

# 📋 Overview

Welcome to my personal portfolio website!  
This is a **modern, responsive, and fully customizable portfolio** built with **HTML, CSS, and JavaScript**.

It showcases my **skills, projects, and professional experience** in a clean and interactive way.

---

# ✨ Key Features

| Feature                  | Description                                       |
| ------------------------ | ------------------------------------------------- |
| 🌓 Dark / Light Mode     | Toggle between themes with saved user preference  |
| 🌐 Bilingual Support     | Full Arabic & English support with RTL/LTR layout |
| 📱 Fully Responsive      | Perfect on mobile, tablet, and desktop            |
| 🔥 Glassmorphism UI      | Modern blur effects and smooth animations         |
| ⚡ Performance Optimized | Lazy loading and smooth scrolling                 |
| 📧 Contact Form          | Integrated with EmailJS                           |

---

# 🎨 Color Palette

| Color       | Hex       |
| ----------- | --------- |
| Primary 50  | `#063f24` |
| Primary 100 | `#0a4f2c` |
| Primary 200 | `#0e5f34` |
| Primary 300 | `#126f3c` |
| Primary 400 | `#1a7f44` |
| Primary 500 | `#248f4c` |
| Primary 600 | `#2e9f54` |
| Primary 700 | `#38af5c` |
| Primary 800 | `#42bf64` |
| Primary 900 | `#4ccf6c` |

---

# 🛠 Technologies Used

## Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Libraries & Tools

- AOS — Animate On Scroll
- Typed.js
- EmailJS
- Font Awesome
- Flag Icons

---

# 📁 Project Structure

```
Portfolio-website/
│
├── components/
│   ├── header.html
│   ├── footer.html
│   └── buttons.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── index.js
│   ├── about.js
│   ├── portfolio.js
│   ├── services.js
│   └── contact.js
│
├── lang/
│   ├── en.json
│   └── ar.json
│
├── img/
│   ├── portfolio/
│   └── playstore.png
│
├── index.html
├── about.html
├── portfolio.html
├── services.html
├── contact.html
└── README.md
```

---

# 🚀 Pages Overview

## 🏠 Home Page

- Hero section with typing animation
- Call-to-action buttons
- Social media links
- Experience badge

---

## 👤 About Page

- Personal information cards
- Skills summary (Frontend, Backend, DevOps)
- Design patterns categories
- Stats counter

---

## 💼 Portfolio Page

- Project cards with images
- Live demo & GitHub links
- Project filtering by category
- Modal popups with detailed info

---

## 🛠 Services Page

- 6 service cards
- Technology tags
- Call-to-action section

---

## 📧 Contact Page

- Contact information cards
- Contact form with EmailJS
- Quick connect options (WhatsApp, Telegram)

---

# 🌐 Bilingual Support

| Feature   | English          | العربية         |
| --------- | ---------------- | --------------- |
| Direction | LTR              | RTL             |
| Font      | Inter            | Inter + Tajawal |
| Flags     | 🇺🇸               | 🇪🇬              |
| Content   | Full translation | كامل الترجمة    |

---

# 🎯 Key Functionality

## Theme Toggle

```javascript
localStorage.getItem("theme") || "light";
```

## Language Switcher

```javascript
fetch(`./lang/${lang}.json`);
```

---

# 🚦 Getting Started

## Clone Repository

```bash
git clone https://github.com/MinaNasser/Portfolio-website.git
```

## Enter Project

```bash
cd Portfolio-website
```

## Run

Open:

```
index.html
```

or run **Live Server** in VS Code.

---

# 🎨 Customization

## Change Colors

Edit CSS variables in `:root`

```css
--primary-600: #2e9f54;
--bg-primary: #ffffff;
--text-primary: #111827;
```

---

## Add New Project

Edit `js/portfolio.js`

```javascript
{
  name: "Your Project",
  description: "Project description",
  image: "project.jpg",
  tags: ["HTML","CSS","JS"],
  demoUrl: "https://demo.com",
  repoUrl: "https://github.com/repo",
  category: "web"
}
```

---

# 📞 Contact

Email  
minanasser82018@gmail.com

Phone  
+201289565248

GitHub  
https://github.com/MinaNasser

LinkedIn  
https://www.linkedin.com/in/mina-nasser-al5al/

---

# 📝 License

MIT License

Copyright (c) 2025 Mina Nasser

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.

---

# 🙏 Acknowledgments

- Font Awesome
- Google Fonts
- Flag Icons
- AOS
- Typed.js
- EmailJS

---

# ⭐ Support

If you like this project please give it a **Star ⭐ on GitHub**.

---

<div align="center">

🌟 Made with ❤️ by **Mina Nasser**

Full Stack Developer | Software Architect | Problem Solver

</div>
