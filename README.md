# 🥗 Dra. Marina Silva - Nutritionist Landing Page

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178c6.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-38b2ac.svg)
![Vite](https://img.shields.io/badge/Vite-4.4.0-646cff.svg)

## 📋 About the Project

<img width="1600" height="848" alt="image" src="https://github.com/user-attachments/assets/2ba1dffa-3c33-461b-a90c-064e3586a0d1" />
<img width="1367" height="867" alt="image" src="https://github.com/user-attachments/assets/769cd814-0428-48a9-8f66-651f060633e6" />
<img width="1220" height="866" alt="image" src="https://github.com/user-attachments/assets/5749acc9-854e-418b-a3e9-7b0049ba6291" />



A modern and responsive landing page for a nutritionist, built with React and TailwindCSS. The website features an attractive design with light/dark mode, smooth animations, and a strong focus on client conversion through WhatsApp integration.

### ✨ Features

- 🌓 **Light/Dark Mode** – Smooth theme switching  
- 📱 **Responsive Design** – Fully adaptable to all devices  
- 🎨 **Smooth Animations** – Engaging motion design elements  
- 💬 **WhatsApp Integration** – Direct contact buttons  
- 🧭 **Sticky Navigation** – Fixed top menu with scroll effect  
- ⚡ **Optimized Performance** – Fast and efficient loading  
- 🏷️ **SEO Friendly** – Semantic and optimized structure  

## 🚀 Technologies Used

- **React 18** – Library for building user interfaces  
- **TypeScript** – JavaScript superset with static typing  
- **TailwindCSS** – Utility-first CSS framework  
- **Vite** – Build tool and development server  
- **Lucide React** – Modern and customizable icons  
- **CSS Animations** – Custom animations  

## 📦 Installation

### Prerequisites

- Node.js (version 16 or higher)  
- npm or yarn  

### Step by Step

1. **Clone the repository**
```bash
git clone https://github.com/your-username/nutricionist-landing-page.git
cd nutricionist-landing-page
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Access the project**
```
http://localhost:5173
```

---

## 🏗️ Project Structure

```
nutricionist-landing-page/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Methodology.tsx
│   │   ├── Benefits.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   ├── Consultation.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── index.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🐛 Troubleshooting

**Error: Cannot find module 'lucide-react'**
```bash
npm install lucide-react
```

**Error: TailwindCSS styles not applying**

Check if `index.css` contains:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Error: React is not defined**
```javascript
import React from 'react';
```

---

## 📈 Roadmap

- Light/Dark mode  
- Responsive design  
- WhatsApp integration  
- Blog  
- Online scheduling system  
- Client area  
- Newsletter integration  
- Multi-language support (PT/EN/ES)  

---
