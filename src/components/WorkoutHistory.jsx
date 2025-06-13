"use client"

import { Clock, Zap, Calendar, MoreHorizontal } from "lucide-react"
import { useState } from "react"

const workoutHistory = [
  {
    id: 1,
    name: "Upper Body Strength",
    date: "2024-01-15",
    duration: 45,
    calories: 320,
    exercises: [
      { name: "Bench Press", sets: 4, reps: 8, weight: 70 },
      { name: "Pull-ups", sets: 3, reps: 10, weight: 0 },
      { name: "Shoulder Press", sets: 3, reps: 12, weight: 25 },
    ],
    status: "completed",
  },
  {
    id: 2,
    name: "HIIT Cardio",
    date: "2024-01-14",
    duration: 30,
    calories: 280,
    exercises: [
      { name: "Burpees", sets: 4, reps: 15, weight: 0 },
      { name: "Mountain Climbers", sets: 4, reps: 20, weight: 0 },
      { name: "Jump Squats", sets: 4, reps: 15, weight: 0 },
    ],
    status: "completed",
  },
  {
    id: 3,
    name: "Leg Day",
    date: "2024-01-13",
    duration: 60,
    calories: 420,
    exercises: [
      { name: "Squats", sets: 4, reps: 12, weight: 80 },
      { name: "Deadlifts", sets: 4, reps: 8, weight: 100 },
      { name: "Leg Press", sets: 3, reps: 15, weight: 120 },
    ],
    status: "completed",
  },
]

const WorkoutHistory = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null)

  return (
    <div className="space-y-4">
      {workoutHistory.map((workout) => (
        <div key={workout.id} className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold">{workout.name}</h3>
                <span className="badge badge-secondary">{workout.status}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(workout.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {workout.duration}min
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-3 w-3" />
                  {workout.calories} cal
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                className="btn btn-ghost btn-icon"
                onClick={() => setDropdownOpen(dropdownOpen === workout.id ? null : workout.id)}
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
              {dropdownOpen === workout.id && (
                <div className="dropdown-menu absolute right-0 top-full mt-1 w-48">
                  <button className="dropdown-menu-item w-full text-left">View Details</button>
                  <button className="dropdown-menu-item w-full text-left">Repeat Workout</button>
                  <button className="dropdown-menu-item w-full text-left">Share</button>
                  <button className="dropdown-menu-item w-full text-left text-destructive">Delete</button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Exercises:</p>
            <div className="grid gap-2">
              {workout.exercises.map((exercise, index) => (
                <div key={index} className="flex items-center justify-between text-sm bg-muted/50 rounded p-2">
                  <span className="font-medium">{exercise.name}</span>
                  <span className="text-muted-foreground">
                    {exercise.sets} × {exercise.reps}
                    {exercise.weight > 0 && ` @ ${exercise.weight}kg`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WorkoutHistory
