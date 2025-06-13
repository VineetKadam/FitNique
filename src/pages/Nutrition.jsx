"use client"

import { useState } from "react"
import { Plus, Apple, Zap, Target } from "lucide-react"
import MacroChart from "../components/MacroChart"
import MealLog from "../components/MealLog"
import NutritionGoals from "../components/NutritionGoals"

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState("today")

  const dailyStats = {
    calories: { current: 1847, goal: 2200, percentage: 84 },
    protein: { current: 142, goal: 165, percentage: 86 },
    carbs: { current: 203, goal: 275, percentage: 74 },
    fat: { current: 67, goal: 73, percentage: 92 },
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Nutrition</h1>
          <p className="text-muted-foreground">Track your meals and monitor your macro intake</p>
        </div>
        <button className="btn btn-primary">
          <Plus className="mr-2 h-4 w-4" />
          Log Meal
        </button>
      </div>

      {/* Daily Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Calories</h3>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{dailyStats.calories.current.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">of {dailyStats.calories.goal.toLocaleString()} goal</p>
          <div className="progress mt-2">
            <div className="progress-indicator" style={{ width: `${dailyStats.calories.percentage}%` }}></div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Protein</h3>
            <Target className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{dailyStats.protein.current}g</div>
          <p className="text-xs text-muted-foreground">of {dailyStats.protein.goal}g goal</p>
          <div className="progress mt-2">
            <div className="progress-indicator" style={{ width: `${dailyStats.protein.percentage}%` }}></div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Carbs</h3>
            <Apple className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{dailyStats.carbs.current}g</div>
          <p className="text-xs text-muted-foreground">of {dailyStats.carbs.goal}g goal</p>
          <div className="progress mt-2">
            <div className="progress-indicator" style={{ width: `${dailyStats.carbs.percentage}%` }}></div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Fat</h3>
            <Target className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">{dailyStats.fat.current}g</div>
          <p className="text-xs text-muted-foreground">of {dailyStats.fat.goal}g goal</p>
          <div className="progress mt-2">
            <div className="progress-indicator" style={{ width: `${dailyStats.fat.percentage}%` }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="tabs">
            <div className="tabs-list">
              <button
                className={`tabs-trigger ${activeTab === "today" ? "data-[state=active]" : ""}`}
                onClick={() => setActiveTab("today")}
              >
                Today
              </button>
              <button
                className={`tabs-trigger ${activeTab === "week" ? "data-[state=active]" : ""}`}
                onClick={() => setActiveTab("week")}
              >
                This Week
              </button>
              <button
                className={`tabs-trigger ${activeTab === "goals" ? "data-[state=active]" : ""}`}
                onClick={() => setActiveTab("goals")}
              >
                Goals
              </button>
            </div>

            {activeTab === "today" && (
              <div className="space-y-6">
                <MealLog />
              </div>
            )}

            {activeTab === "week" && (
              <div className="space-y-6">
                <div className="card p-6">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold">Weekly Overview</h2>
                    <p className="text-muted-foreground">Your nutrition trends over the past 7 days</p>
                  </div>
                  <MacroChart />
                </div>
              </div>
            )}

            {activeTab === "goals" && (
              <div className="space-y-6">
                <NutritionGoals />
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {/* Macro Breakdown */}
          <div className="card p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Today's Macros</h2>
              <p className="text-muted-foreground">Breakdown of your macro intake</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Protein (142g)</span>
                  <span>31%</span>
                </div>
                <div className="progress">
                  <div className="progress-indicator" style={{ width: "31%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Carbs (203g)</span>
                  <span>44%</span>
                </div>
                <div className="progress">
                  <div className="progress-indicator" style={{ width: "44%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Fat (67g)</span>
                  <span>25%</span>
                </div>
                <div className="progress">
                  <div className="progress-indicator" style={{ width: "25%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Add */}
          <div className="card p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Quick Add</h2>
              <p className="text-muted-foreground">Common foods and meals</p>
            </div>
            <div className="space-y-2">
              <button className="btn btn-outline w-full justify-start">🥚 2 Eggs (140 cal)</button>
              <button className="btn btn-outline w-full justify-start">🍌 Banana (105 cal)</button>
              <button className="btn btn-outline w-full justify-start">🥛 Protein Shake (120 cal)</button>
              <button className="btn btn-outline w-full justify-start">🍗 Chicken Breast (185 cal)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nutrition
