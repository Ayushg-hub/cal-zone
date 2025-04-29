import React from 'react';
import { NavLink } from 'react-router';
import { 
  Home, 
  BookOpen, 
  User, 
  History, 
  Dumbbell, 
  Utensils 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 p-4 flex flex-col">
      <div className="py-6 flex items-center gap-3">
        <Utensils className="h-8 w-8 text-emerald-500" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">Cal-Zone</h1>
      </div>
      
      <nav className="flex-1 mt-8">
        <ul className="space-y-2">
          <NavItem icon={<Home size={20} />} to="/" label="Dashboard" />
          <NavItem icon={<BookOpen size={20} />} to="/food-diary" label="Food Diary" />
          <NavItem icon={<Dumbbell size={20} />} to="/exercise" label="Exercise" />
          <NavItem icon={<History size={20} />} to="/history" label="History" />
          <NavItem icon={<User size={20} />} to="/profile" label="Profile" />
        </ul>
      </nav>
      
      <div className="mt-auto pt-4 border-t border-gray-200">
        <div className="p-4 bg-emerald-50 rounded-lg">
          <h3 className="font-medium text-emerald-800">Daily Goal</h3>
          <div className="mt-2 relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block text-emerald-600">
                  1,200 / 2,000 kcal
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-emerald-600">
                  60%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-emerald-200">
              <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500 transition-all duration-500 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, to, label }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
            isActive
              ? 'bg-emerald-50 text-emerald-600'
              : 'text-gray-600 hover:bg-gray-100'
          }`
        }
      >
        {icon}
        <span className="font-medium">{label}</span>
      </NavLink>
    </li>
  );
};

export default Sidebar;