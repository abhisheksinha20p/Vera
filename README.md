
# Vera v2 - Modern Task Management

Vera is a premium, full-stack todo application designed for calm productivity. Built with React (Vite), Node.js, MongoDB, and Tailwind CSS.

## 🚀 Key Features (v2)

- **Calm Dashboard**: Prominent date display, "Quick Add" tasks, and a clutter-free "Summary View".
- **Visual Calendar**:
  - Drag & Drop resizing and rescheduling.
  - Month and Day timeline views.
- **Smart Task Management**:
  - Filters (All/Pending/Completed).
  - Toast notifications for actions.
  - "Glassmorphism" modals for focus.
- **Robust Tech Stack**:
  - **Frontend**: React 18, TypeScript, Tailwind CSS, Lucide Icons.
  - **Backend**: Node.js, Express, MongoDB (Mongoose), JWT Auth.
  - **DevOps**: Docker, Docker Compose, GitHub Actions CI/CD.

## 🛠 Prerequisites

- **Node.js**: v18+
- **Docker Desktop**: (Optional, for containerized run)
- **MongoDB**: (If running locally without Docker)

## ⚡ Quick Start

### Option 1: Docker (Recommended)
Run the full stack (Frontend + Backend + DB) with one command:
```bash
docker compose up --build
```
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

### Option 2: Local Development

1. **Backend Setup**:
   ```bash
   cd backend
   cp .env.example .env  # Ensure MONGO_URI and JWT_SECRET are set
   npm install
   npm run dev
   ```

2. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Access at `http://localhost:5173`.

## 📚 Documentation

- **[Deployment Guide](docs/DEPLOYMENT.md)** - AWS & Vercel instructions.
- **[Design Specs](docs/Design.md)** - UI/UX philosophy.
- **[API Docs](docs/TechStack.md)** - Backend routes and architecture.

## 🧪 Testing

Run the automated test suite (linting + build checks):
```bash
# Backend
cd backend && npm run test

# Frontend
cd frontend && npm run test
```

## 🤝 Contributing

1. Fork the repo.
2. Create a branch (`git checkout -b feature/cool-thing`).
3. Commit changes.
4. Open a Pull Request.

---
Built with ❤️ by the Vera Team.
