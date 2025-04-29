import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
        <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center">
            <span className="text-2xl font-semibold text-emerald-600">A</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Alex Johnson</h2>
            <p className="text-gray-600">alex.johnson@example.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <p className="mt-1 text-gray-900">28 years</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Height</label>
                <p className="mt-1 text-gray-900">175 cm</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Weight</label>
                <p className="mt-1 text-gray-900">70 kg</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Goals</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Daily Calorie Target</label>
                <p className="mt-1 text-gray-900">2,000 kcal</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Weight Goal</label>
                <p className="mt-1 text-gray-900">Maintain weight</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Activity Level</label>
                <p className="mt-1 text-gray-900">Moderately active</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive daily summaries and goal updates</p>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full bg-emerald-500">
              <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white transition-transform"></div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-800">Weekly Reports</p>
              <p className="text-sm text-gray-600">Get detailed weekly progress reports</p>
            </div>
            <div className="relative inline-block w-12 h-6 rounded-full bg-gray-300">
              <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;