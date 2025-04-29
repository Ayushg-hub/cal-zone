import React from 'react';
import { NavLink } from 'react-router';
import { Home, BookOpen, User, History, Dumbbell } from 'lucide-react';

const MobileNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 z-10">
      <nav className="flex justify-around">
        <MobileNavItem icon={<Home size={20} />} to="/" label="Home" />
        <MobileNavItem icon={<BookOpen size={20} />} to="/food-diary" label="Diary" />
        <MobileNavItem 
          icon={<span className="bg-emerald-500 p-3 rounded-full text-white flex items-center justify-center shadow-lg">
            <span className="text-xl font-bold">+</span>
          </span>} 
          to="/food-diary/add" 
          label="" 
          isPrimary 
        />
        <MobileNavItem icon={<Dumbbell size={20} />} to="/exercise" label="Exercise" />
        <MobileNavItem icon={<User size={20} />} to="/profile" label="Profile" />
      </nav>
    </div>
  );
};

interface MobileNavItemProps {
  icon: React.ReactNode;
  to: string;
  label: string;
  isPrimary?: boolean;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ icon, to, label, isPrimary = false }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => 
        isPrimary 
          ? "flex flex-col items-center justify-center -mt-5"
          : `flex flex-col items-center justify-center px-3 py-2 ${
              isActive ? 'text-emerald-500' : 'text-gray-500'
            }`
      }
    >
      {icon}
      {label && <span className="text-xs mt-1">{label}</span>}
    </NavLink>
  );
};

export default MobileNav;