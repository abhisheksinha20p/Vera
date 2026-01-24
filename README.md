# Vera - Calm Productivity

![Vera Banner](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072)

> **Vera** is a modern, full-stack Task Management application designed for focus and calm. It combines a clean, aesthetic interface with robust backend architecture to help you organize your life without the stress.

## 🚀 Live Demo

**Frontend**: [**Launch Vera**](https://vera-3m9k2bkdy-avis-projects-87f288a4.vercel.app/)  
**Backend API**: [https://mewtwo.online](https://mewtwo.online)

---

## ✨ Key Features

- **🎯 Focus Dashboard**: specialized view for your most important daily tasks.
- **📅 Visual Calendar**: Drag-and-drop powered timeline to organize your schedule effortlessly.
- **🔐 Secure Authentication**: Full JWT-based auth system with encrypted passwords.
- **☁️ Cloud Sync**: Real-time data persistence with MongoDB Atlas.
- **📱 Responsive Design**: Beautiful "Glassmorphism" UI that works on Desktop and Mobile.
- **⚡ Performance**: Built with Vite and split-chunking for lightning-fast loads.

---

## 🏗️ Architecture & Tech Stack

Vera is built using the **MERN** stack, deployed with a microservices-inspired architecture:

| Component | Tech | Description |
|-----------|------|-------------|
| **Frontend** | React 18, TypeScript, Tailwind | Deployed on **Vercel** for edge-network speed. |
| **Backend** | Node.js, Express | RESTful API deployed on **AWS EC2**. |
| **Database** | MongoDB Atlas | Cloud-hosted NoSQL database with IP Whitelisting. |
| **Security** | Nginx, Certbot (Let's Encrypt) | SSL/HTTPS reverse proxy with custom domain. |
| **DevOps** | Docker, GitHub Actions | Containerized development and CI/CD pipelines. |

---

## 🛠️ Local Installation

Want to run Vera on your own machine?

### Prerequisites
- Node.js v18+
- Docker Desktop (Optional)

### Option 1: Docker (Fastest)
Run the entire stack with a single command:
```bash
docker compose up --build
```
- App running at: `http://localhost:3000`

### Option 2: Manual Setup

1.  **Backend**:
    ```bash
    cd backend
    cp .env.example .env
    npm install
    npm run dev
    ```

2.  **Frontend**:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Built with ❤️ by the Vera Team*
