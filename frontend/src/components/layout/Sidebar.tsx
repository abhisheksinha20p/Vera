import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  CheckSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import logo from "../../assets/logo.png";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { user, logout } = useAuth();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Calendar, label: "Calendar", path: "/calendar" },
    { icon: CheckSquare, label: "Tasks", path: "/tasks" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside
      className={`flex flex-col h-screen w-64 bg-midnight-navy text-white fixed left-0 top-0 z-20 transition-transform ${className}`}
    >
      {/* Logo */}
      <div className="flex items-center h-16 px-6 border-b border-white/10">
        <img src={logo} alt="Vera Logo" className="h-8 w-auto mr-3" />
        <span className="text-xl font-bold tracking-wide">Vera</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-electric-blue text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-electric-blue flex items-center justify-center text-sm font-bold">
            {user?.name?.[0]?.toUpperCase() || "U"}
          </div>
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium truncate">
              {user?.name || "User"}
            </p>
            <p className="text-xs text-gray-400 truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center w-full px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </button>
      </div>
    </aside>
  );
};
