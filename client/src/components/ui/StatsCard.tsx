import React from 'react';

interface StatsCardProps {
  title: string;
  value: number;
  unit: string;
  target: number;
  icon: React.ReactNode;
  color: string;
}

interface ProgressCircleProps {
  percentage:number,
  color:string,
}


const ProgressCircle:React.FC<ProgressCircleProps> = ({percentage, color}) => {
  return <div className="w-40 h-40 relative mb-6 md:mb-0">
  <svg className="w-full h-full" viewBox="0 0 100 100">
    {/* Background circle */}
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="#EEF2FF"
      strokeWidth="10"
    />
    
    {/* Progress circle */}
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke={color}
      strokeWidth="10"
      strokeLinecap="round"
      strokeDasharray={`${percentage * 2.83} 283`}
      strokeDashoffset="0"
      transform="rotate(-90 50 50)"
      className="transition-all duration-1000 ease-out"
    />
    
    <text
      x="50"
      y="45"
      textAnchor="middle"
      fontSize="18"
      fontWeight="bold"
      fill="#4B5563"
    >
      {percentage}%
    </text>
    
    <text
      x="50"
      y="65"
      textAnchor="middle"
      fontSize="12"
      fill="#6B7280"
    >
      Complete
    </text>
  </svg>
</div>;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, unit, target, icon, color }) => {
  const percentage = Math.min(Math.round((value / target) * 100), 100);
  const colorClasses = {
    emerald: 'bg-emerald-50 text-emerald-600',
    blue: 'bg-blue-50 text-blue-600',
    cyan: 'bg-cyan-50 text-cyan-600',
    purple: 'bg-purple-50 text-purple-600'
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className={`p-2 rounded-lg bg-${color}-50 text-${color}-600`}>
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
      <div className="mt-8">
      <ProgressCircle percentage={percentage} color={color}></ProgressCircle>
      </div>
    </div>
  );
};

export default StatsCard;