import React from 'react';

const FoodDiary: React.FC = () => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Food Diary</h1>
        <p className="text-gray-600 mt-1">Track your daily meals and nutrition</p>
      </header>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p>Food diary content will go here</p>
      </div>
    </div>
  );
};

export default FoodDiary;