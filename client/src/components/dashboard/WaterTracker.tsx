import React from 'react';
import { Droplets } from 'lucide-react';

const WaterTracker: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Water Intake</h2>
        <Droplets className="h-6 w-6 text-cyan-500" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Today's Goal</span>
          <span className="font-medium text-gray-800">2.5L</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Current Intake</span>
          <span className="font-medium text-gray-800">1.2L</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '48%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default WaterTracker;