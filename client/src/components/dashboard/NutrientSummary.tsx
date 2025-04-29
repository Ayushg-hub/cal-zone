import React from 'react';

const NutrientSummary: React.FC = () => {
  const nutrients = [
    { name: 'Carbs', consumed: 145, goal: 250, unit: 'g', color: 'bg-amber-500' },
    { name: 'Protein', consumed: 65, goal: 120, unit: 'g', color: 'bg-blue-500' },
    { name: 'Fat', consumed: 40, goal: 65, unit: 'g', color: 'bg-emerald-500' },
    { name: 'Fiber', consumed: 12, goal: 25, unit: 'g', color: 'bg-purple-500' },
    { name: 'Sugar', consumed: 30, goal: 50, unit: 'g', color: 'bg-rose-500' },
    { name: 'Sodium', consumed: 1200, goal: 2300, unit: 'mg', color: 'bg-orange-500' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Nutrients</h2>
      <div className="space-y-4">
        {nutrients.map((nutrient) => (
          <NutrientBar
            key={nutrient.name}
            name={nutrient.name}
            consumed={nutrient.consumed}
            goal={nutrient.goal}
            unit={nutrient.unit}
            color={nutrient.color}
          />
        ))}
      </div>
    </div>
  );
};

interface NutrientBarProps {
  name: string;
  consumed: number;
  goal: number;
  unit: string;
  color: string;
}

const NutrientBar: React.FC<NutrientBarProps> = ({ name, consumed, goal, unit, color }) => {
  const percentage = Math.min(Math.round((consumed / goal) * 100), 100);
  
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">
          {consumed} / {goal} {unit}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default NutrientSummary;