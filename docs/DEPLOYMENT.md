
# Deployment Guide

## Prerequisites
- Docker & Docker Compose
- Node.js 18+
- MongoDB (Local or Atlas)

## Local Development (Docker)
1. Ensure Docker Desktop is running.
2. Run the application stack:
   ```bash
   docker compose up --build
   ```
3. Access:
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

## Production Deployment

### Frontend (Vercel)
1. Fork/Clone the repo.
2. Connect Vercel to your GitHub repo.
3. Configure Build Settings:
   - Root Directory: `frontend`
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

### Backend (AWS/Render/Railway)
1. Set Environment Variables:
   - `PORT`: 5000
   - `MONGO_URI`: Your production MongoDB connection string.
   - `JWT_SECRET`: A strong, unique secret.
   - `NODE_ENV`: `production`
2. Deploy using the `backend/Dockerfile`.

### CI/CD
GitHub Actions are configured in `.github/workflows/ci.yml` to automatically:
- Lint and Test code.
- Verify Docker builds on every push to `main`.
