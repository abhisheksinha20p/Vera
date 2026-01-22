import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span>Welcome, {user?.name || user?.email}</span>
          <button 
            onClick={logout} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <p>This is a protected route. Only authenticated users can see this.</p>
        <p className="mt-4 text-gray-600">Task list implementation coming in Phase 7...</p>
      </div>
    </div>
  );
};

export default Dashboard;
