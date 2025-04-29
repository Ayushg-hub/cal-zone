import React from 'react';
import { Clock, Plus } from 'lucide-react';

const MealSummary: React.FC = () => {
  const meals = [
    {
      id: 1,
      type: 'Breakfast',
      time: '7:30 AM',
      foods: [
        { name: 'Oatmeal with Blueberries', calories: 280, amount: '1 bowl' },
        { name: 'Greek Yogurt', calories: 100, amount: '100g' },
        { name: 'Black Coffee', calories: 5, amount: '1 cup' }
      ],
      totalCalories: 385
    },
    {
      id: 2,
      type: 'Lunch',
      time: '12:30 PM',
      foods: [
        { name: 'Grilled Chicken Salad', calories: 350, amount: '1 bowl' },
        { name: 'Whole Grain Bread', calories: 80, amount: '1 slice' },
        { name: 'Olive Oil Dressing', calories: 120, amount: '1 tbsp' }
      ],
      totalCalories: 550
    },
    {
      id: 3,
      type: 'Dinner',
      time: '7:00 PM',
      foods: [
        { name: 'Salmon Fillet', calories: 220, amount: '150g' },
        { name: 'Steamed Broccoli', calories: 55, amount: '1 cup' },
        { name: 'Brown Rice', calories: 150, amount: '1/2 cup' }
      ],
      totalCalories: 425
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Today's Meals</h2>
        <button className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
          <Plus size={16} />
          Add Meal
        </button>
      </div>
      
      <div className="space-y-4">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
        
        <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
          <Plus size={18} />
          Add Snack
        </button>
      </div>
    </div>
  );
};

interface Meal {
  id: number;
  type: string;
  time: string;
  foods: { name: string; calories: number; amount: string }[];
  totalCalories: number;
}

interface MealCardProps {
  meal: Meal;
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-800">{meal.type}</h3>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock size={14} className="mr-1" />
          {meal.time}
        </div>
      </div>
      
      <div className="space-y-2 mb-3">
        {meal.foods.map((food, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <div className="flex-1">
              <p className="text-sm text-gray-700">{food.name}</p>
              <p className="text-xs text-gray-500">{food.amount}</p>
            </div>
            <p className="text-sm font-medium text-gray-700 pr-4">{food.calories} cal</p>
            <p className="text-sm font-medium text-gray-700 pr-4">{100}g protien</p>
            <p className="text-sm font-medium text-gray-700 pr-4">{50}g carbs</p>
            <p className="text-sm font-medium text-gray-700">{50}g fats</p>
          </div>
        ))}
      </div>
      
      <div className="pt-2 mt-2 border-t border-gray-100 flex justify-between items-center">
        <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
          Edit meal
        </button>
        <div className="text-sm font-semibold text-gray-800">
          {meal.totalCalories} cal
        </div>
      </div>
    </div>
  );
};

export default MealSummary;