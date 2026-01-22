# Vera - Project Task List

## Phase 1: Project Setup & Infrastructure
- [x] Initialize project structure with frontend and backend directories
- [x] Set up Vite + React + TypeScript for frontend
- [x] Set up Node.js + Express + TypeScript for backend
- [x] Configure Tailwind CSS
- [x] Set up MongoDB database
- [x] Configure Mongoose ODM with schemas
- [x] Create Docker Compose configuration
- [x] Set up environment variables and secrets management

---

## Phase 2: Database Design & Setup
- [x] Create Mongoose schema for User model
- [x] Create Mongoose schema for Task model
- [x] Define relationships (User → Tasks via references)
- [x] Add proper indexing on `userId`
- [x] Test database connection
- [ ] Seed database with test data (optional)

---

## Phase 3: Backend - Authentication System
- [x] Create user registration endpoint (`POST /api/auth/register`)
  - [x] Email validation
  - [x] Password hashing with bcrypt
  - [x] Minimum password length validation
- [x] Create user login endpoint (`POST /api/auth/login`)
  - [x] Credential verification
  - [x] JWT token generation
- [x] Create logout endpoint (`POST /api/auth/logout`)
- [x] Implement JWT authentication middleware
- [x] Create protected route middleware
- [ ] Add refresh token functionality (optional)

---

## Phase 4: Backend - Task Management API
- [x] Create task CRUD endpoints:
  - [x] `POST /api/tasks` - Create new task
  - [x] `GET /api/tasks` - Get all user tasks (sorted by creation time)
  - [x] `GET /api/tasks/:id` - Get single task
  - [x] `PUT /api/tasks/:id` - Update task
  - [x] `PATCH /api/tasks/:id/status` - Toggle task status (handled via PUT)
  - [x] `DELETE /api/tasks/:id` - Delete task
- [x] Implement user-task isolation (access control)
- [x] Add input validation using Zod
- [x] Implement proper error handling
- [x] Add proper API response codes

---

## Phase 5: Frontend - Core Setup & Routing
- [ ] Set up React Router with routes:
  - [ ] `/` - Landing/Home page
  - [ ] `/login` - Login page
  - [ ] `/register` - Registration page
  - [ ] `/dashboard` - Main task dashboard (protected)
- [ ] Create API service layer (Axios/Fetch)
- [ ] Set up authentication context/state management
- [ ] Implement protected route component

---

## Phase 6: Frontend - Authentication UI
- [ ] Create Login page component
  - [ ] Email input field
  - [ ] Password input field
  - [ ] Form validation with React Hook Form + Zod
  - [ ] Error message display
  - [ ] Loading states
- [ ] Create Registration page component
  - [ ] Email input field
  - [ ] Password input field
  - [ ] Confirm password field
  - [ ] Form validation
  - [ ] Success/Error handling
- [ ] Implement JWT token storage and management
- [ ] Add logout functionality

---

## Phase 7: Frontend - Dashboard & Task Management UI
- [ ] Create Dashboard layout with sidebar navigation
  - [ ] Logo/branding area
  - [ ] Navigation menu (Dashboard, Tasks, Settings)
  - [ ] User profile section
- [ ] Create Task List component
  - [ ] Display all tasks
  - [ ] Empty state message ("No tasks yet")
  - [ ] Loading skeleton
- [ ] Create Task Item component
  - [ ] Task title and description display
  - [ ] Completion checkbox
  - [ ] Edit button
  - [ ] Delete button with confirmation
  - [ ] Visual distinction for completed tasks
- [ ] Create Add Task form/modal
  - [ ] Title input (required)
  - [ ] Description input (optional)
  - [ ] Submit button
- [ ] Create Edit Task modal
- [ ] Implement task filtering (All/Pending/Completed)

---

## Phase 8: Frontend - Design Implementation
- [ ] Implement color palette from Design.md
  - [ ] Midnight Navy (`#03145F`)
  - [ ] Electric Blue (`#4C56CF`)
  - [ ] Soft Surface (`#F7F8FA`)
  - [ ] Pure White (`#FFFFFF`)
  - [ ] Slate Grey (`#9A898F`)
  - [ ] Alert Red (`#FF4D4F`)
- [ ] Set up typography (Inter/SF Pro Display)
- [ ] Create button component variants (Primary/Secondary)
- [ ] Create card components with subtle shadows
- [ ] Implement hover effects and micro-animations
- [ ] Add modal with glassmorphism backdrop
- [ ] Ensure mobile-first responsive design

---

## Phase 9: Integration & Testing
- [ ] Connect frontend to backend APIs
- [ ] Test user registration flow
- [ ] Test user login/logout flow
- [ ] Test task CRUD operations
- [ ] Test protected route access
- [ ] Test mobile responsiveness
- [ ] Verify task isolation between users

---

## Phase 10: DevOps & Deployment
- [ ] Create Dockerfile for frontend
- [ ] Create Dockerfile for backend
- [ ] Configure Docker Compose for local development
- [ ] Set up GitHub Actions CI/CD pipeline
  - [ ] Run linting
  - [ ] Run tests
  - [ ] Build Docker images
- [ ] Deploy frontend to Vercel/Netlify
- [ ] Deploy backend to AWS (EC2/ECS)
- [ ] Set up MongoDB Atlas (or self-hosted MongoDB)
- [ ] Configure HTTPS and security headers

---

## Phase 11: Final Polish & Documentation
- [ ] Write README.md with setup instructions
- [ ] Add API documentation
- [ ] Performance optimization (page load < 2s)
- [ ] Final security review
- [ ] Cross-browser testing
- [ ] Create demo/sample data

---

## Future Enhancements (Post-MVP)
- [ ] Task reminders and notifications
- [ ] Due dates functionality
- [ ] Priority levels
- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Analytics dashboard
- [ ] Calendar integration
- [ ] Drag & drop task scheduling
