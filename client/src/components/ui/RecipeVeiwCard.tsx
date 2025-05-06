function RecipeViewCard() {
    return (
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">beef pasta</h3>
            <h3 className="font-semibold text-gray-800"> 200 | 150 | 50 | 30
            </h3>
          </div>
          
          <div className="space-y-2 mb-3">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <p className="text-sm text-gray-700">beef</p>
                  <p className="text-xs text-gray-500">1300 g</p>
                </div>
                <p className="text-sm font-medium text-gray-700 pr-4">500 cal</p>
                <p className="text-sm font-medium text-gray-700 pr-4">{100}g protien</p>
                <p className="text-sm font-medium text-gray-700 pr-4">{50}g carbs</p>
                <p className="text-sm font-medium text-gray-700">{50}g fats</p>
              </div>
          </div>
          
          <div className="pt-2 mt-2 border-t border-gray-100 flex justify-between items-center">
            <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
              Edit meal
            </button>
            <div className="text-sm font-semibold text-gray-800">
              100 cal
            </div>
          </div>
        </div>
      );
}

export default RecipeViewCard;