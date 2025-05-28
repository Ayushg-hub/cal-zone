import React from 'react';
import { Clock, Plus, SquarePen } from 'lucide-react';
import MealCard from '../ui/MealCard'
import { Fats, Carbohydrates, Meal } from '../Interfaces';

function generateRandomFats(): Fats {
  return new Fats(Math.random()*5,Math.random()*5,Math.random()*5,Math.random()*5);
}

function generateRandomCarbs(): Carbohydrates {
  return new Carbohydrates(Math.random() * 20, Math.random() * 40);
}

function generateRandomProtiens() {
  return Math.random() * 50;
}

function getMealSummary(): Meal[] {
  return [
    {
      id: 1,
      type: 'Breakfast',
      time: '7:30 AM',
      foods: [
        { id: 0, name: 'Oatmeal with Blueberries', cals: Math.random() * 800, fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() },
        { id: 0, name: 'Greek Yogurt', cals: Math.random() * 800, fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() },
        { id: 0, name: 'Black Coffee', cals: Math.random() * 800, fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() }
      ],
    },
    {
      id: 2,
      type: 'Lunch',
      time: '12:30 PM',
      foods: [
        { id: 0, name: 'Grilled Chicken Salad', cals: Math.random() * 800, fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() },
        { id: 0, name: 'Whole Grain Bread', cals: Math.random() * 800, fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() },
        { id: 0, name: 'Olive Oil Dressing', cals: Math.random() * 800, fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() }
      ],
    },
    {
      id: 3,
      type: 'Dinner',
      time: '7:00 PM',
      foods: [
        { id: 0, name: 'Salmon Fillet', cals: Math.random() * 800, fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() },
        { id: 0, name: 'Steamed Broccoli', cals: Math.random() * 800, fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() },
        { id: 0, name: 'Brown Rice', cals: Math.random() * 800, fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() }
      ],
    }
  ];
}


const MealSummary: React.FC = () => {
  const meals = getMealSummary();
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
      </div>
    </div>
  );
};

export default MealSummary;