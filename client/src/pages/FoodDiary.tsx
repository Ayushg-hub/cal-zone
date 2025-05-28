import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { FoodItemCard } from '../components/ui/FoodItemCard';
import { Fats, Carbohydrates } from '../components/Interfaces';

function generateRandomFats(): Fats {
  return new Fats(Math.random()*5,Math.random()*5,Math.random()*5,Math.random()*5);
}

function generateRandomCarbs(): Carbohydrates {
  return new Carbohydrates(Math.random() * 20, Math.random() * 40);
}

function generateRandomProtiens() {
  return Math.random() * 50;
}

const FoodDiary: React.FC = () => {
  const [isRecipePressed, setRecipePressed] = useState(false);
  const ingredients = [
    { id: 0, name: 'Salmon Fillet', cals: Math.random() * 800, fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() },
    { id: 1, name: 'Steamed Broccoli', cals: Math.random() * 800, fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() },
    { id: 2, name: 'Brown Rice', cals: Math.random() * 800, fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() }
  ];
  const item = {
    id: 4,
    name: 'Salmon rice bowl',
    cals: 100,
    fats: generateRandomFats(), carbs: generateRandomCarbs(), protien: generateRandomProtiens() 
  };
  return (
    <div>
      { isRecipePressed && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start">
        <div className="bg-white rounded shadow-lg mt-10">
          <div className="flex justify-end items-start">
            <button className='hover:redrounded hover:bg-grey-500 hover:text-white transition' onClick={() => {setRecipePressed(false)}}>
              <X></X>
            </button>
          </div>
          <FoodItemCard ingredients={ingredients} item={item}></FoodItemCard>
        </div>
      </div>)
      }
    
      <div className="space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Food Diary</h1>
          <p className="text-gray-600 mt-1">Track your daily meals and nutrition</p>
        </header>


        
        <div className='grid grid-cols-2 gap-6'>
          <div className="bg-white rounded-lg shadow p-4 col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h6>Recipes</h6>
            <button className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                      <Plus size={16} />
                      Add Recipe
            </button>
            </div>
            
            <button className="w-full border border-gray-200 rounded-lg p-4 mt-2 hover:shadow-md transition-shadow" onClick={()=>{setRecipePressed(true)}}>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">Beef pasta</h3>
                <div className="flex items-center text-gray-500 text-sm">
                  800 cals | 64 g Protien | 60 g carb | 50 g fat
                </div>
              </div>
            </button>
            
            <div className="border border-gray-200 rounded-lg p-4 mt-2 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">Beef pasta</h3>
                <div className="flex items-center text-gray-500 text-sm">
                  800 cals | 64 g Protien | 60 g carb | 50 g fat
                </div>
              </div>
            </div>

          </div>
          <div className="bg-white rounded-lg shadow p-6 col-span-1">
            <p>Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDiary;