import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  unit: string;
  target: string;
  icon: React.ReactNode;
  color: 'emerald' | 'blue' | 'cyan' | 'purple';
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, unit, target, icon, color }) => {
  const colorClasses = {
    emerald: 'bg-emerald-50 text-emerald-600',
    blue: 'bg-blue-50 text-blue-600',
    cyan: 'bg-cyan-50 text-cyan-600',
    purple: 'bg-purple-50 text-purple-600'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
      <div className="mt-3">
        <div className="flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          <p className="ml-1 text-sm text-gray-500">{unit}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">Target: {target} {unit}</p>
      </div>
    </div>
  );
};

export default StatsCard;