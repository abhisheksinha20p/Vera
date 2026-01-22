# Todo App

A modern, full-stack todo application built with React, Node.js, and MongoDB. Features user authentication, task management, and a responsive design.

## 🚀 Features

- **User Authentication**: Secure JWT-based authentication with bcrypt password hashing
- **Task Management**: Create, read, update, and delete tasks
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **Database**: MongoDB with Mongoose ODM for schema-based data modeling
- **Validation**: Strong input validation using Zod schemas
- **Containerized**: Docker Compose setup for easy development

## 🛠 Tech Stack

### Frontend

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

### Backend

- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type safety
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Database

- **MongoDB** - Primary NoSQL database
- **Mongoose** - MongoDB object modeling

### DevOps

- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📋 Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**
- **Docker** and **Docker Compose** (for containerized setup)
- **MongoDB** (if running without Docker)

## 🚀 Quick Start

### Option 1: Docker Compose (Recommended)

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd todo_app_Vera
   ```

2. **Start all services**

   ```bash
   docker-compose up --build
   ```

3. **Access the application**

   - Frontend: <http://localhost:5173>
   - Backend API: <http://localhost:3000>

### Option 2: Local Development

#### Backend Setup

1. **Navigate to backend directory**

   ```bash
   cd backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your database configuration
   ```

4. **Start MongoDB** (if not using Docker)

   ```bash
   # Using Docker for database only
   docker run --name mongodb -p 27017:27017 -d mongo:7-alpine
   ```

5. **Connect to MongoDB**

   MongoDB doesn't require migrations - schemas are defined in Mongoose models.

6. **Start the development server**

   ```bash
   npm run dev
   ```

#### Frontend Setup

1. **Navigate to frontend directory**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

## 📁 Project Structure

```text
todo_app_Vera/
├── backend/                 # Node.js/Express API
│   ├── models/             # Mongoose schemas and models
│   ├── src/                # Source code
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Express middleware
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Utility functions
│   │   └── index.ts        # Application entry point
│   └── package.json        # Backend dependencies
├── frontend/               # React application
│   ├── src/                # Source code
│   │   ├── assets/         # Static assets
│   │   ├── App.tsx         # Main App component
│   │   └── main.tsx        # Application entry point
│   └── package.json        # Frontend dependencies
├── docs/                   # Project documentation
│   ├── Design.md           # Design specifications
│   ├── PRD.md              # Product requirements
│   ├── TaskList.md         # Development tasks
│   └── TechStack.md        # Technical specifications
├── docker-compose.yml      # Docker services configuration
└── README.md               # This file
```

## 🗄 Database Schema

The application uses MongoDB with the following main collections:

- **Users**: Authentication and user management
- **Tasks**: Todo items with completion status

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Task Endpoints

- `GET /api/tasks` - Get user's tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 🧪 Development

### Available Scripts

#### Backend Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npx mongosh` - Open MongoDB shell (if installed locally)

#### Frontend Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file in the backend directory:

```env
MONGODB_URI="mongodb://localhost:27017/vera_db"
JWT_SECRET="your-secure-jwt-secret-key-here"
PORT=3000
```

## 📖 Documentation

Detailed documentation is available in the `docs/` directory:

- **[Design.md](docs/Design.md)** - UI/UX design specifications
- **[PRD.md](docs/PRD.md)** - Product requirements document
- **[TaskList.md](docs/TaskList.md)** - Development task tracking
- **[TechStack.md](docs/TechStack.md)** - Technical architecture details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the [documentation](docs/)
2. Search existing [issues](../../issues)
3. Create a new [issue](../../issues/new) if needed

---

Built with ❤️ using modern web technologies
