"use client"

import { Target, Calendar, TrendingUp, TrendingDown, MoreHorizontal } from "lucide-react"
import { useState } from "react"

const goals = [
  {
    id: 1,
    title: "Lose 10kg",
    description: "Reach target weight of 70kg",
    category: "Weight Loss",
    current: 6.2,
    target: 10,
    unit: "kg",
    progress: 62,
    status: "on_track",
    deadline: "2024-04-15",
    daysRemaining: 45,
    trend: "positive",
  },
  {
    id: 2,
    title: "Run 5K under 25 minutes",
    description: "Improve running speed and endurance",
    category: "Cardio",
    current: 26.5,
    target: 25,
    unit: "minutes",
    progress: 85,
    status: "on_track",
    deadline: "2024-03-01",
    daysRemaining: 12,
    trend: "positive",
  },
  {
    id: 3,
    title: "Bench Press 100kg",
    description: "Increase upper body strength",
    category: "Strength",
    current: 85,
    target: 100,
    unit: "kg",
    progress: 85,
    status: "ahead",
    deadline: "2024-05-01",
    daysRemaining: 60,
    trend: "positive",
  },
  {
    id: 4,
    title: "Complete 100 workouts",
    description: "Maintain consistent exercise routine",
    category: "Consistency",
    current: 67,
    target: 100,
    unit: "workouts",
    progress: 67,
    status: "behind",
    deadline: "2024-06-01",
    daysRemaining: 90,
    trend: "negative",
  },
]

const GoalsList = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null)

  const getStatusColor = (status) => {
    switch (status) {
      case "ahead":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "on_track":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "behind":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getTrendIcon = (trend) => {
    return trend === "positive" ? (
      <TrendingUp className="h-4 w-4 text-green-600" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-600" />
    )
  }

  return (
    <div className="space-y-6">
      <div className="card p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Active Goals</h2>
          <p className="text-muted-foreground">Track your progress towards your fitness objectives</p>
        </div>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id} className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">{goal.title}</h3>
                  <span className={`badge ${getStatusColor(goal.status)}`}>{goal.status.replace("_", " ")}</span>
                </div>
                <p className="text-muted-foreground">{goal.description}</p>
              </div>
              <div className="relative">
                <button
                  className="btn btn-ghost btn-icon"
                  onClick={() => setDropdownOpen(dropdownOpen === goal.id ? null : goal.id)}
                >
                  <MoreHorizontal className="h-4 w-4" />
                </button>
                {dropdownOpen === goal.id && (
                  <div className="dropdown-menu absolute right-0 top-full mt-1 w-48">
                    <button className="dropdown-menu-item w-full text-left">Edit Goal</button>
                    <button className="dropdown-menu-item w-full text-left">View History</button>
                    <button className="dropdown-menu-item w-full text-left">Share Progress</button>
                    <button className="dropdown-menu-item w-full text-left text-destructive">Delete Goal</button>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="badge badge-outline">{goal.category}</span>
                  {getTrendIcon(goal.trend)}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {goal.daysRemaining} days remaining
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Progress: {goal.current}
                    {goal.unit} / {goal.target}
                    {goal.unit}
                  </span>
                  <span className="font-medium">{goal.progress}%</span>
                </div>
                <div className="progress">
                  <div className="progress-indicator" style={{ width: `${goal.progress}%` }}></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  Target date: {new Date(goal.deadline).toLocaleDateString()}
                </div>
                <button className="btn btn-outline btn-sm">Update Progress</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GoalsList
