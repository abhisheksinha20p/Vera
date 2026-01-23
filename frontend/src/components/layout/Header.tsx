
import React from 'react';
import { Menu } from 'lucide-react';
import { Clock } from '../common/Clock';

interface HeaderProps {
  onMenuClick: () => void;
  title?: string;
  actions?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, title, actions }) => {
  return (
    <header className="h-16 bg-pure-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 sticky top-0">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 mr-2 text-gray-500 hover:bg-gray-100 rounded-md"
        >
          <Menu className="h-6 w-6" />
        </button>
        {title && (
          <h1 className="text-xl font-bold text-midnight-navy">{title}</h1>
        )}
      </div>
      
      <div className="flex items-center space-x-4">
        <Clock />
        {actions}
      </div>
    </header>
  );
};
