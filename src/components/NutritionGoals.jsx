import { Target, Edit } from "lucide-react"

const NutritionGoals = () => {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Current Goals</h2>
          </div>
          <p className="text-muted-foreground">Your daily nutrition targets</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Daily Calories</label>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">2,200</span>
                <span className="badge badge-secondary">Maintenance</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Activity Level</label>
              <div className="flex items-center justify-between">
                <span className="text-lg">Moderate</span>
                <button className="btn btn-ghost btn-sm">
                  <Edit className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold">165g</div>
              <div className="text-sm text-muted-foreground">Protein (30%)</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">275g</div>
              <div className="text-sm text-muted-foreground">Carbs (50%)</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">73g</div>
              <div className="text-sm text-muted-foreground">Fat (20%)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Update Goals</h2>
          <p className="text-muted-foreground">Adjust your nutrition targets</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="goal-type" className="text-sm font-medium">
                Goal Type
              </label>
              <select id="goal-type" className="select">
                <option value="weight-loss">Weight Loss</option>
                <option value="maintenance" selected>
                  Maintenance
                </option>
                <option value="muscle-gain">Muscle Gain</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="activity-level" className="text-sm font-medium">
                Activity Level
              </label>
              <select id="activity-level" className="select">
                <option value="sedentary">Sedentary</option>
                <option value="light">Light</option>
                <option value="moderate" selected>
                  Moderate
                </option>
                <option value="active">Active</option>
                <option value="very-active">Very Active</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="calories" className="text-sm font-medium">
              Daily Calories
            </label>
            <input id="calories" type="number" defaultValue="2200" className="input" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="protein" className="text-sm font-medium">
                Protein %
              </label>
              <input id="protein" type="number" defaultValue="30" className="input" />
            </div>
            <div className="space-y-2">
              <label htmlFor="carbs" className="text-sm font-medium">
                Carbs %
              </label>
              <input id="carbs" type="number" defaultValue="50" className="input" />
            </div>
            <div className="space-y-2">
              <label htmlFor="fat" className="text-sm font-medium">
                Fat %
              </label>
              <input id="fat" type="number" defaultValue="20" className="input" />
            </div>
          </div>

          <button className="btn btn-primary w-full">Update Goals</button>
        </div>
      </div>
    </div>
  )
}

export default NutritionGoals
