import React from 'react';
import { Flame, Beef, Nut, Wheat } from 'lucide-react';
import DailyProgress from '../components/dashboard/DailyProgress';
import NutrientSummary from '../components/dashboard/NutrientSummary';
import MealSummary from '../components/dashboard/MealSummary';
import WaterTracker from '../components/dashboard/WaterTracker';
import StatsCard from '../components/ui/StatsCard';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome back, Alex</h1>
        <p className="text-gray-600 mt-1">Here's your nutrition summary for today</p>
      </header>

      {/* <DailyProgress consumed={1200} goal={2000} /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <StatsCard 
          title="Calories" 
          value={1200} 
          unit="kcal" 
          target={2000}
          icon={<Flame className="h-6 w-6 text-red-400" />}
          circleColor="oklch(0.704 0.191 22.216)"
          bgcolor="bg-red-100"
        />
        <StatsCard 
          title="Protein" 
          value={65} 
          unit="g" 
          target={120}
          icon={<Beef className="h-6 w-6 text-purple-500" />}
          circleColor="oklch(0.627 0.265 303.9)"
          bgcolor="bg-purple-100"
        />
        <StatsCard 
          title="Carbs" 
          value={125} 
          unit="g" 
          target={120}
          icon={<Wheat className="h-6 w-6 text-emerald-500" />}
          circleColor="oklch(0.696 0.17 162.48)"
          bgcolor="bg-emerald-100"
        />
        <StatsCard 
          title="Fats" 
          value={65} 
          unit="g" 
          target={120}
          icon={<Nut className="h-6 w-6 text-yellow-500" />}
          circleColor="oklch(0.769 0.188 70.08)"
          bgcolor="bg-yellow-100"
        />
        {/* <StatsCard 
          title="Water" 
          value={1.2} 
          unit="L" 
          target={2.5}
          icon={<Droplets className="h-6 w-6 text-cyan-500" />}
          color="cyan"
        />
        <StatsCard 
          title="Exercise" 
          value={320} 
          unit="kcal" 
          target={500}
          icon={<TrendingUp className="h-6 w-6 text-purple-500" />}
          color="purple"
        /> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* <NutrientSummary /> */}
        <div className="lg:col-span-3">
          <MealSummary />
        </div>
      </div>

      {/* <div className="mt-8">
        <WaterTracker />
      </div> */}
    </div>
  );
};

export default Dashboard;