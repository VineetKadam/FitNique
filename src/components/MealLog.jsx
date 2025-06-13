"use client"

import { Plus, MoreHorizontal } from "lucide-react"
import { useState } from "react"

const meals = [
  {
    type: "Breakfast",
    time: "8:30 AM",
    foods: [
      { name: "Oatmeal with berries", calories: 320, protein: 12, carbs: 58, fat: 6 },
      { name: "Greek yogurt", calories: 130, protein: 15, carbs: 9, fat: 0 },
      { name: "Coffee with milk", calories: 25, protein: 2, carbs: 3, fat: 1 },
    ],
    totalCalories: 475,
    totalProtein: 29,
    totalCarbs: 70,
    totalFat: 7,
  },
  {
    type: "Lunch",
    time: "12:45 PM",
    foods: [
      { name: "Grilled chicken salad", calories: 380, protein: 35, carbs: 12, fat: 22 },
      { name: "Quinoa", calories: 220, protein: 8, carbs: 39, fat: 4 },
      { name: "Avocado", calories: 160, protein: 2, carbs: 9, fat: 15 },
    ],
    totalCalories: 760,
    totalProtein: 45,
    totalCarbs: 60,
    totalFat: 41,
  },
  {
    type: "Dinner",
    time: "7:15 PM",
    foods: [
      { name: "Salmon fillet", calories: 350, protein: 39, carbs: 0, fat: 20 },
      { name: "Sweet potato", calories: 180, protein: 4, carbs: 41, fat: 0 },
      { name: "Steamed broccoli", calories: 55, protein: 6, carbs: 11, fat: 1 },
    ],
    totalCalories: 585,
    totalProtein: 49,
    totalCarbs: 52,
    totalFat: 21,
  },
  {
    type: "Snack",
    time: "3:30 PM",
    foods: [{ name: "Apple with almond butter", calories: 190, protein: 4, carbs: 21, fat: 12 }],
    totalCalories: 190,
    totalProtein: 4,
    totalCarbs: 21,
    totalFat: 12,
  },
]

const MealLog = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null)

  return (
    <div className="space-y-4">
      {meals.map((meal, index) => (
        <div key={index} className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-semibold">{meal.type}</h3>
                <span className="badge badge-outline">{meal.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {meal.totalCalories} cal • {meal.totalProtein}g protein • {meal.totalCarbs}g carbs • {meal.totalFat}g
                fat
              </p>
            </div>
            <div className="relative">
              <button
                className="btn btn-ghost btn-icon"
                onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
              {dropdownOpen === index && (
                <div className="dropdown-menu absolute right-0 top-full mt-1 w-48">
                  <button className="dropdown-menu-item w-full text-left">Edit Meal</button>
                  <button className="dropdown-menu-item w-full text-left">Copy to Today</button>
                  <button className="dropdown-menu-item w-full text-left text-destructive">Delete</button>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            {meal.foods.map((food, foodIndex) => (
              <div key={foodIndex} className="flex items-center justify-between text-sm bg-muted/50 rounded p-2">
                <span className="font-medium">{food.name}</span>
                <div className="text-muted-foreground">
                  {food.calories} cal • {food.protein}p • {food.carbs}c • {food.fat}f
                </div>
              </div>
            ))}
            <button className="btn btn-outline btn-sm w-full mt-2">
              <Plus className="mr-2 h-3 w-3" />
              Add Food
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MealLog
