import React from 'react';
import { Dumbbell } from 'lucide-react';

const Exercise = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Dumbbell className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Exercise Tracking</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Today's Workout</h2>
          <div className="space-y-4">
            <p className="text-gray-600">Track your daily exercises and monitor your progress.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Add Exercise
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Goals</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Workouts Completed</span>
              <span className="font-medium text-gray-800">3/5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">Running</p>
                <p className="text-sm text-gray-500">30 minutes • 5km</p>
              </div>
              <span className="text-green-600">✓</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-800">Weight Training</p>
                <p className="text-sm text-gray-500">45 minutes • Upper Body</p>
              </div>
              <span className="text-green-600">✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;