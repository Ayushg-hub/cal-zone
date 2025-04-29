import React from 'react';

interface DailyProgressProps {
  consumed: number;
  goal: number;
}

const ProgressCircle:React.FC<{percentage:number}> = ({percentage}) => {
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
      stroke="#34D399"
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

const DailyProgress: React.FC<DailyProgressProps> = ({ consumed, goal }) => {
  const percentage = Math.min(Math.round((consumed / goal) * 100), 100);
  const remaining = goal - consumed;
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Daily Progress</h2>
        <span className="text-sm font-medium text-gray-500">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
        </span>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between">
        <ProgressCircle percentage={percentage}></ProgressCircle>
        
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-lg">
          <CalorieInfoCard 
            title="Goal" 
            value={goal} 
            bgColor="bg-indigo-50" 
            textColor="text-indigo-600" 
          />
          <CalorieInfoCard 
            title="Consumed" 
            value={consumed} 
            bgColor="bg-emerald-50" 
            textColor="text-emerald-600" 
          />
          <CalorieInfoCard 
            title="Remaining" 
            value={remaining} 
            bgColor="bg-amber-50" 
            textColor="text-amber-600" 
          />
        </div>
      </div>
    </div>
  );
};

interface CalorieInfoCardProps {
  title: string;
  value: number;
  bgColor: string;
  textColor: string;
}

const CalorieInfoCard: React.FC<CalorieInfoCardProps> = ({ title, value, bgColor, textColor }) => {
  return (
    <div className={`${bgColor} rounded-lg p-4 text-center transition-transform duration-200 hover:scale-105`}>
      <p className="text-gray-600 text-sm font-medium">{title}</p>
      <p className={`${textColor} text-2xl font-bold mt-1`}>{value}</p>
      <p className="text-gray-500 text-xs mt-1">calories</p>
    </div>
  );
};

export default DailyProgress;