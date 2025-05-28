import { Clock, Plus, SquarePen } from 'lucide-react';
import {MealCardProps} from '../Interfaces'

const MealCard: React.FC<MealCardProps> = ({ meal }) => {

    var totalcals: number = 0;
    var totalfats: number = 0;
    var totalcarbs: number = 0;
    var totalprotien: number = 0;

    meal.foods.map((food) => {
        totalcals += food.cals;
        totalfats += food.fats.total();
        totalcarbs += food.carbs.total();
        totalprotien += food.protien;
    })

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
            <div key={idx} className="flex justify-between rounded-lg p-2 items-center bg-gray-50">
              <div className="flex">
                <p className="text-sm text-gray-700 px-3">{food.name}</p>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="bg-red-100 px-3 py-1 rounded-full text-xs whitespace-nowrap">
                  cal: {food.cals.toFixed(2)}g
                </div>
                <div className="bg-purple-100 px-3 py-1 rounded-full text-xs whitespace-nowrap">
                  P: {food.protien.toFixed(2)}g
                </div>
                <div className="bg-emerald-100 px-3 py-1 rounded-full text-xs whitespace-nowrap">
                  C: {food.carbs.total().toFixed(2)}g
                </div>
                <div className="bg-yellow-100 px-3 py-1 rounded-full text-xs whitespace-nowrap">
                  F: {food.fats.total().toFixed(2)}g
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pt-2 mt-2 border-t border-gray-100 flex justify-between items-center">
          <button className="flex text-xs text-blue-600 hover:text-blue-700 font-medium">
            <SquarePen size={16} className='mx-1'></SquarePen> Edit meal
          </button>
          <div className="flex gap-2 justify-end">
                <div className="bg-red-100 px-3 py-1 rounded-full text-xs">
                  cal: {totalcals.toFixed(2)}g
                </div>
                <div className="bg-purple-100 px-3 py-1 rounded-full text-xs">
                  P: {totalprotien.toFixed(2)}g
                </div>
                <div className="bg-emerald-100 px-3 py-1 rounded-full text-xs">
                  C: {totalcarbs.toFixed(2)}g
                </div>
                <div className="bg-yellow-100 px-3 py-1 rounded-full text-xs">
                  F: {totalprotien.toFixed(2)}g
                </div>
              </div>
        </div>
      </div>
    );
  };
  
  export default MealCard;