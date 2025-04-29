import React from 'react';
import { Calendar, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

const History: React.FC = () => {
  const monthlyData = [
    { date: '2024-03-01', calories: 1850, target: 2000, difference: -150 },
    { date: '2024-03-02', calories: 2100, target: 2000, difference: 100 },
    { date: '2024-03-03', calories: 1950, target: 2000, difference: -50 },
    { date: '2024-03-04', calories: 2200, target: 2000, difference: 200 },
    { date: '2024-03-05', calories: 1800, target: 2000, difference: -200 },
  ];

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Nutrition History</h1>
        <p className="text-gray-600 mt-1">Track your nutrition progress over time</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Monthly Average</h3>
              <p className="text-2xl font-bold text-blue-600">1,980 kcal</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Goal Accuracy</h3>
              <p className="text-2xl font-bold text-emerald-600">92%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Tracked Days</h3>
              <p className="text-2xl font-bold text-purple-600">24 days</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Daily Breakdown</h2>
          <div className="space-y-4">
            {monthlyData.map((day) => (
              <div key={day.date} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    day.difference > 0 ? 'bg-red-100' : 'bg-green-100'
                  }`}>
                    {day.difference > 0 ? (
                      <ArrowUp className="h-4 w-4 text-red-600" />
                    ) : (
                      <ArrowDown className="h-4 w-4 text-green-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {new Date(day.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="text-sm text-gray-500">Target: {day.target} kcal</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{day.calories} kcal</p>
                  <p className={`text-sm ${
                    day.difference > 0 ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {day.difference > 0 ? '+' : ''}{day.difference} kcal
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;