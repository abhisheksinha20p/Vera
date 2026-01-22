import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Vera</h1>
      <p className="mb-4">Simple & Productive To-Do App</p>
      <div className="space-x-4">
        <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link>
        <Link to="/register" className="text-blue-500 hover:text-blue-700">Register</Link>
      </div>
    </div>
  );
};

export default Landing;
