# Tech Stack

**Project Name:** Vera - Simple & Productive To-Do Web Application

---

## 1. Frontend (Web Client)

### Primary Stack

| Technology      | Purpose                              |
|-----------------|--------------------------------------|
| React           | Component-based UI, large ecosystem  |
| TypeScript      | Type safety and maintainability      |
| Vite            | Fast development and build tooling   |
| Tailwind CSS    | Utility-first, clean, modern UI      |
| React Router    | Client-side routing                  |

### Supporting Libraries

- **Axios or Fetch API** – HTTP communication
- **React Hook Form** – Form handling and validation
- **Zod / Yup** – Schema validation

### Why This Works

- Fast development
- Highly employable stack
- Excellent balance between simplicity and scalability

---

## 2. Backend (API Server)

### Primary Stack

| Technology          | Purpose                          |
|---------------------|----------------------------------|
| Node.js             | Event-driven, scalable           |
| Express.js          | Lightweight REST API framework   |
| TypeScript          | Consistency with frontend        |
| JWT (JSON Web Tokens) | Stateless authentication       |

### Core Responsibilities

- User authentication (register/login)
- Task CRUD APIs
- Authorization & access control
- Input validation & error handling

---

## 3. Database & Persistence

### Primary Database

- **MongoDB** – Flexible, scalable NoSQL database

### ODM / Query Layer

- **Mongoose** – Schema-based MongoDB object modeling

### Why MongoDB

- Flexible schema for rapid development
- Easy Docker setup
- JSON-like documents match JavaScript objects
- Widely used in modern web applications

---

## 4. Authentication & Security

- **Password hashing:** bcrypt
- **JWT-based authentication** (access + refresh tokens optional)
- **Protected API routes** via middleware
- **HTTPS** (in production)
- **Environment variables** for secrets

---

## 5. DevOps & Infrastructure

### Containerization

- **Docker**
  - Separate containers for frontend, backend, and database
  - Docker Compose for local development

### CI/CD

- **GitHub Actions**
  - Run tests
  - Lint code
  - Build Docker images
  - Deploy automatically

---

## 6. Hosting & Deployment

| Layer              | Solution                                |
|--------------------|-----------------------------------------|
| Frontend Hosting   | Vercel or Netlify                       |
| Backend Hosting    | AWS (EC2 or ECS, Docker-based, behind Nginx) |
| Database Hosting   | AWS RDS (PostgreSQL)                    |

---

## 7. Project Architecture (High-Level)

### Flow

```
React UI → API calls → Express API → Auth middleware → MongoDB via Mongoose
```

- JWT validates user identity
- Tasks scoped per user

---

## 8. Folder Structure (Recommended)

```
vera/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── models/
│
├── docker-compose.yml
└── README.md
```

---

## 9. Why This Stack Is Ideal for Your Portfolio

- Demonstrates end-to-end full-stack skills
- Uses industry-standard tools
- Easily extensible to SaaS
- Clean separation of concerns
- Recruiter-friendly and modern

---

## 10. Optional Enhancements (Later)

- Redis for caching
- Due dates & reminders
- Role-based access (admin/user)
- Dark mode
- PWA support