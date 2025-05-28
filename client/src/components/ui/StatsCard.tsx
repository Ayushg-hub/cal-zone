import React from 'react';

interface StatsCardProps {
  title: string;
  value: number;
  unit: string;
  target: number;
  icon: React.ReactNode;
  bgcolor:string;
  circleColor: string;
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

const StatsCard: React.FC<StatsCardProps> = ({ title, value, unit, target, icon, bgcolor, circleColor }) => {
  const percentage = Math.min(Math.round((value / target) * 100), 100);
  return (
    <div className={`bg-white rounded-xl shadow-sm p-6`}>
      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className={`p-2 rounded-lg`}>
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
      <div className="mt-8 ml-6 justify-center">
        <ProgressCircle percentage={percentage} color={circleColor}></ProgressCircle>
      </div>
    </div>
  );
};

export default StatsCard;